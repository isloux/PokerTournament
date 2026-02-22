function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function assignTables(players, tableSize) {
  const activePlayers = players.filter(p => p.status === 'active');
  const shuffled = shuffle(activePlayers);
  const tableCount = Math.ceil(shuffled.length / tableSize);

  const tables = Array.from({ length: tableCount }, (_, i) => ({
    id: `t${i + 1}`,
    name: `Table ${i + 1}`,
    seats: tableSize,
  }));

  for (const p of players) {
    p.tableId = null;
    p.seat = null;
  }

  shuffled.forEach((player, i) => {
    const tableIndex = i % tableCount;
    player.tableId = tables[tableIndex].id;
  });

  for (const table of tables) {
    const tablePlayers = shuffled.filter(p => p.tableId === table.id);
    const seats = shuffle(Array.from({ length: tableSize }, (_, i) => i + 1));
    tablePlayers.forEach((p, i) => {
      p.seat = seats[i];
    });
  }

  return { tables, players };
}

export function rebalanceTables(players, tables) {
  const active = players.filter(p => p.status === 'active');
  const activeTables = tables.filter(t => active.some(p => p.tableId === t.id));
  const moves = [];

  for (const table of activeTables) {
    const tablePlayers = active.filter(p => p.tableId === table.id);
    if (tablePlayers.length <= 1 && activeTables.length > 1) {
      for (const p of tablePlayers) {
        const otherTables = activeTables.filter(t => t.id !== table.id);
        const smallest = otherTables.reduce((a, b) => {
          const aCount = active.filter(pl => pl.tableId === a.id).length;
          const bCount = active.filter(pl => pl.tableId === b.id).length;
          return aCount <= bCount ? a : b;
        });
        const usedSeats = active.filter(pl => pl.tableId === smallest.id).map(pl => pl.seat);
        const freeSeat = Array.from({ length: smallest.seats }, (_, i) => i + 1)
          .find(s => !usedSeats.includes(s));
        moves.push({ playerId: p.id, from: table.name, to: smallest.name });
        p.tableId = smallest.id;
        p.seat = freeSeat;
      }
    }
  }

  const remainingTables = tables.filter(t => active.some(p => p.tableId === t.id));
  let balanced = false;
  while (!balanced) {
    const counts = remainingTables.map(t => ({
      table: t,
      count: active.filter(p => p.tableId === t.id).length,
    }));
    const max = counts.reduce((a, b) => (a.count >= b.count ? a : b));
    const min = counts.reduce((a, b) => (a.count <= b.count ? a : b));

    if (max.count - min.count > 1) {
      const playersAtMax = active.filter(p => p.tableId === max.table.id);
      const mover = playersAtMax[Math.floor(Math.random() * playersAtMax.length)];
      const usedSeats = active.filter(p => p.tableId === min.table.id).map(p => p.seat);
      const freeSeat = Array.from({ length: min.table.seats }, (_, i) => i + 1)
        .find(s => !usedSeats.includes(s));
      moves.push({ playerId: mover.id, from: max.table.name, to: min.table.name });
      mover.tableId = min.table.id;
      mover.seat = freeSeat;
    } else {
      balanced = true;
    }
  }

  return { moves, tables: remainingTables };
}

export function checkFinalTable(players, tables, finalTableThreshold) {
  const active = players.filter(p => p.status === 'active');
  if (active.length > finalTableThreshold) return null;

  const activeTables = tables.filter(t => active.some(p => p.tableId === t.id));
  if (activeTables.length <= 1) return null;

  const finalTable = activeTables[0];
  finalTable.name = 'Final Table';
  const moves = [];

  for (const p of active) {
    if (p.tableId !== finalTable.id) {
      moves.push({ playerId: p.id, from: tables.find(t => t.id === p.tableId)?.name, to: 'Final Table' });
      p.tableId = finalTable.id;
    }
  }

  const seats = shuffle(Array.from({ length: finalTable.seats }, (_, i) => i + 1));
  active.forEach((p, i) => { p.seat = seats[i]; });

  return { finalTable, moves };
}
