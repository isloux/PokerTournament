import { describe, it, expect } from 'vitest';
import { assignTables, rebalanceTables, checkFinalTable } from './tableAssignment.js';

describe('assignTables', () => {
  function makePlayers(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: `p${i + 1}`,
      name: `Player ${i + 1}`,
      status: 'active',
      tableId: null,
      seat: null,
    }));
  }

  it('assigns 6 players to 1 table with tableSize 6', () => {
    const players = makePlayers(6);
    const { tables, players: seated } = assignTables(players, 6);
    expect(tables).toHaveLength(1);
    expect(seated.every(p => p.tableId === tables[0].id)).toBe(true);
    expect(seated.every(p => p.seat !== null)).toBe(true);
  });

  it('assigns 13 players to 3 tables with tableSize 6', () => {
    const players = makePlayers(13);
    const { tables, players: seated } = assignTables(players, 6);
    expect(tables).toHaveLength(3);
    const counts = tables.map(t => seated.filter(p => p.tableId === t.id).length);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it('assigns 20 players to 2 tables with tableSize 10', () => {
    const players = makePlayers(20);
    const { tables, players: seated } = assignTables(players, 10);
    expect(tables).toHaveLength(2);
  });

  it('gives each player a unique seat at their table', () => {
    const players = makePlayers(12);
    const { tables, players: seated } = assignTables(players, 6);
    for (const table of tables) {
      const seatsAtTable = seated.filter(p => p.tableId === table.id).map(p => p.seat);
      const uniqueSeats = new Set(seatsAtTable);
      expect(uniqueSeats.size).toBe(seatsAtTable.length);
    }
  });

  it('only assigns active players', () => {
    const players = makePlayers(6);
    players[0].status = 'eliminated';
    const { players: seated } = assignTables(players, 6);
    const assigned = seated.filter(p => p.tableId !== null);
    expect(assigned).toHaveLength(5);
  });
});

describe('rebalanceTables', () => {
  it('moves a player from largest to smallest table', () => {
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
      { id: 'p3', status: 'active', tableId: 't1', seat: 3 },
      { id: 'p4', status: 'active', tableId: 't1', seat: 4 },
      { id: 'p5', status: 'active', tableId: 't1', seat: 5 },
      { id: 'p6', status: 'active', tableId: 't2', seat: 1 },
      { id: 'p7', status: 'active', tableId: 't2', seat: 2 },
      { id: 'p8', status: 'active', tableId: 't2', seat: 3 },
    ];
    const { moves } = rebalanceTables(players, tables);
    expect(moves).toHaveLength(1);
    expect(moves[0].from).toBe('Table 1');
    expect(moves[0].to).toBe('Table 2');
    const t1Count = players.filter(p => p.tableId === 't1').length;
    const t2Count = players.filter(p => p.tableId === 't2').length;
    expect(Math.abs(t1Count - t2Count)).toBeLessThanOrEqual(1);
  });
});

describe('checkFinalTable', () => {
  it('returns null when above threshold', () => {
    const players = Array.from({ length: 10 }, (_, i) => ({
      id: `p${i}`, status: 'active', tableId: i < 5 ? 't1' : 't2', seat: (i % 5) + 1,
    }));
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    expect(checkFinalTable(players, tables, 9)).toBe(null);
  });

  it('merges to final table at threshold', () => {
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
      { id: 'p3', status: 'active', tableId: 't2', seat: 1 },
      { id: 'p4', status: 'eliminated', tableId: null, seat: null },
    ];
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    const result = checkFinalTable(players, tables, 3);
    expect(result).not.toBe(null);
    expect(result.finalTable.name).toBe('Final Table');
    expect(players.filter(p => p.status === 'active').every(p => p.tableId === 't1')).toBe(true);
  });

  it('returns null if already on one table', () => {
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
    ];
    const tables = [{ id: 't1', name: 'Table 1', seats: 6 }];
    expect(checkFinalTable(players, tables, 6)).toBe(null);
  });
});
