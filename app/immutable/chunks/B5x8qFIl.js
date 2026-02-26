var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a, _r2, _s, _t2, _f, _a2, _l, _n2, _e2, _i, _oe_instances, o_fn, u_fn, c_fn, __fn;
var Vt = Array.isArray, Ut = Array.prototype.indexOf, fe = Array.prototype.includes, jn = Array.from, Yn = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, Bt = Object.getOwnPropertyDescriptors, Gt = Object.prototype, zt = Array.prototype, it = Object.getPrototypeOf, Ze = Object.isExtensible;
const Kt = () => {
};
function Hn(e) {
  return e();
}
function Xt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function at() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function qn(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const g = 2, he = 4, pe = 8, lt = 1 << 24, H = 16, F = 32, se = 64, $t = 128, O = 512, E = 1024, T = 2048, M = 4096, C = 8192, V = 16384, Q = 32768, Te = 65536, We = 1 << 17, ot = 1 << 18, ye = 1 << 19, ut = 1 << 20, Vn = 1 << 25, ee = 65536, De = 1 << 21, je = 1 << 22, U = 1 << 23, W = /* @__PURE__ */ Symbol("$state"), Un = /* @__PURE__ */ Symbol("legacy props"), Bn = /* @__PURE__ */ Symbol(""), X = new class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), zn = !!((_a = globalThis.document) == null ? void 0 : _a.contentType) && globalThis.document.contentType.includes("xml"), xe = 3, ct = 8;
function _t(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Zt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Kn(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Wt(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jt() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function en() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $n(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Wn = 1, Jn = 2, Qn = 4, er = 8, tr = 16, nr = 1, rr = 2, sr = 4, fr = 8, ir = 16, ar = 1, lr = 2, sn = "[", fn = "[!", or = "[?", an = "]", Ye = {}, m = /* @__PURE__ */ Symbol(), ln = "http://www.w3.org/1999/xhtml";
function He(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ur() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function cr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let te = false;
function _r(e) {
  te = e;
}
let R;
function ie(e) {
  if (e === null) throw He(), Ye;
  return R = e;
}
function vr() {
  return ie(z(R));
}
function dr(e) {
  if (te) {
    if (z(R) !== null) throw He(), Ye;
    R = e;
  }
}
function hr(e = 1) {
  if (te) {
    for (var t = e, n = R; t--; ) n = z(n);
    R = n;
  }
}
function pr(e = true) {
  for (var t = 0, n = R; ; ) {
    if (n.nodeType === ct) {
      var r = n.data;
      if (r === an) {
        if (t === 0) return n;
        t -= 1;
      } else (r === sn || r === fn || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var s = z(n);
    e && n.remove(), n = s;
  }
}
function yr(e) {
  if (!e || e.nodeType !== ct) throw He(), Ye;
  return e.data;
}
function vt(e) {
  return e === this.v;
}
function on(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function dt(e) {
  return !on(e, this.v);
}
let we = false;
function wr() {
  we = true;
}
let w = null;
function Ae(e) {
  w = e;
}
function Er(e, t = false, n) {
  w = { p: w, i: false, c: null, e: null, s: e, x: null, l: we && !t ? { s: null, u: null, $: [] } : null };
}
function mr(e) {
  var t = w, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Ot(r);
  }
  return t.i = true, w = t.p, {};
}
function Ee() {
  return !we || w !== null && w.l === null;
}
let $ = [];
function ht() {
  var e = $;
  $ = [], Xt(e);
}
function Je(e) {
  if ($.length === 0 && !ve) {
    var t = $;
    queueMicrotask(() => {
      t === $ && ht();
    });
  }
  $.push(e);
}
function un() {
  for (; $.length > 0; ) ht();
}
function cn(e) {
  var t = d;
  if (t === null) return v.f |= U, e;
  if ((t.f & Q) === 0 && (t.f & he) === 0) throw e;
  Se(e, t);
}
function Se(e, t) {
  for (; t !== null; ) {
    if ((t.f & $t) !== 0) {
      if ((t.f & Q) === 0) throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const _n = -7169;
function y(e, t) {
  e.f = e.f & _n | t;
}
function qe(e) {
  (e.f & O) !== 0 || e.deps === null ? y(e, E) : y(e, M);
}
function pt(e) {
  if (e !== null) for (const t of e) (t.f & g) === 0 || (t.f & ee) === 0 || (t.f ^= ee, pt(t.deps));
}
function vn(e, t, n) {
  (e.f & T) !== 0 ? t.add(e) : (e.f & M) !== 0 && n.add(e), pt(e.deps), y(e, E);
}
const ge = /* @__PURE__ */ new Set();
let p = null, Qe = null, I = null, A = [], ke = null, Ie = false, ve = false;
const _oe = class _oe {
  constructor() {
    __privateAdd(this, _oe_instances);
    __publicField(this, "current", /* @__PURE__ */ new Map());
    __publicField(this, "previous", /* @__PURE__ */ new Map());
    __privateAdd(this, _r2, /* @__PURE__ */ new Set());
    __privateAdd(this, _s, /* @__PURE__ */ new Set());
    __privateAdd(this, _t2, 0);
    __privateAdd(this, _f, 0);
    __privateAdd(this, _a2, null);
    __privateAdd(this, _l, /* @__PURE__ */ new Set());
    __privateAdd(this, _n2, /* @__PURE__ */ new Set());
    __privateAdd(this, _e2, /* @__PURE__ */ new Map());
    __publicField(this, "is_fork", false);
    __privateAdd(this, _i, false);
  }
  skip_effect(t) {
    __privateGet(this, _e2).has(t) || __privateGet(this, _e2).set(t, { d: [], m: [] });
  }
  unskip_effect(t) {
    var n = __privateGet(this, _e2).get(t);
    if (n) {
      __privateGet(this, _e2).delete(t);
      for (var r of n.d) y(r, T), Y(r);
      for (r of n.m) y(r, M), Y(r);
    }
  }
  process(t) {
    var _a3;
    A = [], this.apply();
    var n = [], r = [];
    for (const s of t) __privateMethod(this, _oe_instances, u_fn).call(this, s, n, r);
    if (__privateMethod(this, _oe_instances, o_fn).call(this)) {
      __privateMethod(this, _oe_instances, c_fn).call(this, r), __privateMethod(this, _oe_instances, c_fn).call(this, n);
      for (const [s, f] of __privateGet(this, _e2)) mt(s, f);
    } else {
      for (const s of __privateGet(this, _r2)) s();
      __privateGet(this, _r2).clear(), __privateGet(this, _t2) === 0 && __privateMethod(this, _oe_instances, __fn).call(this), Qe = this, p = null, et(r), et(n), Qe = null, (_a3 = __privateGet(this, _a2)) == null ? void 0 : _a3.resolve();
    }
    I = null;
  }
  capture(t, n) {
    n !== m && !this.previous.has(t) && this.previous.set(t, n), (t.f & U) === 0 && (this.current.set(t, t.v), I == null ? void 0 : I.set(t, t.v));
  }
  activate() {
    p = this, this.apply();
  }
  deactivate() {
    p === this && (p = null, I = null);
  }
  flush() {
    if (this.activate(), A.length > 0) {
      if (yt(), p !== null && p !== this) return;
    } else __privateGet(this, _t2) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of __privateGet(this, _s)) t(this);
    __privateGet(this, _s).clear();
  }
  increment(t) {
    __privateSet(this, _t2, __privateGet(this, _t2) + 1), t && __privateSet(this, _f, __privateGet(this, _f) + 1);
  }
  decrement(t) {
    __privateSet(this, _t2, __privateGet(this, _t2) - 1), t && __privateSet(this, _f, __privateGet(this, _f) - 1), !__privateGet(this, _i) && (__privateSet(this, _i, true), Je(() => {
      __privateSet(this, _i, false), __privateMethod(this, _oe_instances, o_fn).call(this) ? A.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of __privateGet(this, _l)) __privateGet(this, _n2).delete(t), y(t, T), Y(t);
    for (const t of __privateGet(this, _n2)) y(t, M), Y(t);
    this.flush();
  }
  oncommit(t) {
    __privateGet(this, _r2).add(t);
  }
  ondiscard(t) {
    __privateGet(this, _s).add(t);
  }
  settled() {
    return (__privateGet(this, _a2) ?? __privateSet(this, _a2, at())).promise;
  }
  static ensure() {
    if (p === null) {
      const t = p = new _oe();
      ge.add(p), ve || Je(() => {
        p === t && t.flush();
      });
    }
    return p;
  }
  apply() {
  }
};
_r2 = new WeakMap();
_s = new WeakMap();
_t2 = new WeakMap();
_f = new WeakMap();
_a2 = new WeakMap();
_l = new WeakMap();
_n2 = new WeakMap();
_e2 = new WeakMap();
_i = new WeakMap();
_oe_instances = new WeakSet();
o_fn = function() {
  return this.is_fork || __privateGet(this, _f) > 0;
};
u_fn = function(t, n, r) {
  t.f ^= E;
  for (var s = t.first; s !== null; ) {
    var f = s.f, o = (f & (F | se)) !== 0, a = o && (f & E) !== 0, i = a || (f & C) !== 0 || __privateGet(this, _e2).has(s);
    if (!i && s.fn !== null) {
      o ? s.f ^= E : (f & he) !== 0 ? n.push(s) : me(s) && ((f & H) !== 0 && __privateGet(this, _n2).add(s), le(s));
      var l = s.first;
      if (l !== null) {
        s = l;
        continue;
      }
    }
    for (; s !== null; ) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break;
      }
      s = s.parent;
    }
  }
};
c_fn = function(t) {
  for (var n = 0; n < t.length; n += 1) vn(t[n], __privateGet(this, _l), __privateGet(this, _n2));
};
__fn = function() {
  var _a3;
  if (ge.size > 1) {
    this.previous.clear();
    var t = I, n = true;
    for (const s of ge) {
      if (s === this) {
        n = false;
        continue;
      }
      const f = [];
      for (const [a, i] of this.current) {
        if (s.current.has(a)) if (n && i !== s.current.get(a)) s.current.set(a, i);
        else continue;
        f.push(a);
      }
      if (f.length === 0) continue;
      const o = [...s.current.keys()].filter((a) => !this.current.has(a));
      if (o.length > 0) {
        var r = A;
        A = [];
        const a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
        for (const l of f) wt(l, o, a, i);
        if (A.length > 0) {
          p = s, s.apply();
          for (const l of A) __privateMethod(_a3 = s, _oe_instances, u_fn).call(_a3, l, [], []);
          s.deactivate();
        }
        A = r;
      }
    }
    p = null, I = t;
  }
  ge.delete(this);
};
let oe = _oe;
function dn(e) {
  var t = ve;
  ve = true;
  try {
    for (var n; ; ) {
      if (un(), A.length === 0 && (p == null ? void 0 : p.flush(), A.length === 0)) return ke = null, n;
      yt();
    }
  } finally {
    ve = t;
  }
}
function yt() {
  Ie = true;
  var e = null;
  try {
    for (var t = 0; A.length > 0; ) {
      var n = oe.ensure();
      if (t++ > 1e3) {
        var r, s;
        hn();
      }
      n.process(A), B.clear();
    }
  } finally {
    A = [], Ie = false, ke = null;
  }
}
function hn() {
  try {
    en();
  } catch (e) {
    Se(e, ke);
  }
}
let j = null;
function et(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (V | C)) === 0 && me(r) && (j = /* @__PURE__ */ new Set(), le(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Dt(r), (j == null ? void 0 : j.size) > 0)) {
        B.clear();
        for (const s of j) {
          if ((s.f & (V | C)) !== 0) continue;
          const f = [s];
          let o = s.parent;
          for (; o !== null; ) j.has(o) && (j.delete(o), f.push(o)), o = o.parent;
          for (let a = f.length - 1; a >= 0; a--) {
            const i = f[a];
            (i.f & (V | C)) === 0 && le(i);
          }
        }
        j.clear();
      }
    }
    j = null;
  }
}
function wt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const f = s.f;
    (f & g) !== 0 ? wt(s, t, n, r) : (f & (je | H)) !== 0 && (f & T) === 0 && Et(s, t, r) && (y(s, T), Y(s));
  }
}
function Et(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (fe.call(t, s)) return true;
    if ((s.f & g) !== 0 && Et(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function Y(e) {
  var t = ke = e, n = t.b;
  if ((n == null ? void 0 : n.is_pending) && (e.f & (he | pe | lt)) !== 0 && (e.f & Q) === 0) {
    n.defer_effect(e);
    return;
  }
  for (; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Ie && t === d && (r & H) !== 0 && (r & ot) === 0 && (r & Q) !== 0) return;
    if ((r & (se | F)) !== 0) {
      if ((r & E) === 0) return;
      t.f ^= E;
    }
  }
  A.push(t);
}
function mt(e, t) {
  if (!((e.f & F) !== 0 && (e.f & E) !== 0)) {
    (e.f & T) !== 0 ? t.d.push(e) : (e.f & M) !== 0 && t.m.push(e), y(e, E);
    for (var n = e.first; n !== null; ) mt(n, t), n = n.next;
  }
}
function pn(e, t, n, r) {
  const s = Ee() ? Ve : mn;
  var f = e.filter((u) => !u.settled);
  if (n.length === 0 && f.length === 0) {
    r(t.map(s));
    return;
  }
  var o = d, a = yn(), i = f.length === 1 ? f[0].promise : f.length > 1 ? Promise.all(f.map((u) => u.promise)) : null;
  function l(u) {
    a();
    try {
      r(u);
    } catch (_) {
      (o.f & V) === 0 && Se(_, o);
    }
    Pe();
  }
  if (n.length === 0) {
    i.then(() => l(t.map(s)));
    return;
  }
  function c() {
    a(), Promise.all(n.map((u) => En(u))).then((u) => l([...t.map(s), ...u])).catch((u) => Se(u, o));
  }
  i ? i.then(c) : c();
}
function yn() {
  var e = d, t = v, n = w, r = p;
  return function(f = true) {
    ae(e), G(t), Ae(n), f && (r == null ? void 0 : r.activate());
  };
}
function Pe(e = true) {
  ae(null), G(null), Ae(null), e && (p == null ? void 0 : p.deactivate());
}
function wn() {
  var e = d.b, t = p, n = e.is_rendered();
  return e.update_pending_count(1), t.increment(n), () => {
    e.update_pending_count(-1), t.decrement(n);
  };
}
function Ve(e) {
  var t = g | T, n = v !== null && (v.f & g) !== 0 ? v : null;
  return d !== null && (d.f |= ye), { ctx: w, deps: null, effects: null, equals: vt, f: t, fn: e, reactions: null, rv: 0, v: m, wv: 0, parent: n ?? d, ac: null };
}
function En(e, t, n) {
  d === null && Zt();
  var s = void 0, f = Be(m), o = !v, a = /* @__PURE__ */ new Map();
  return Nn(() => {
    var _a3;
    var i = at();
    s = i.promise;
    try {
      Promise.resolve(e()).then(i.resolve, i.reject).finally(Pe);
    } catch (_) {
      i.reject(_), Pe();
    }
    var l = p;
    if (o) {
      var c = wn();
      (_a3 = a.get(l)) == null ? void 0 : _a3.reject(X), a.delete(l), a.set(l, i);
    }
    const u = (_, b = void 0) => {
      if (l.activate(), b) b !== X && (f.f |= U, Me(f, b));
      else {
        (f.f & U) !== 0 && (f.f ^= U), Me(f, _);
        for (const [h, D] of a) {
          if (a.delete(h), h === l) break;
          D.reject(X);
        }
      }
      c && c();
    };
    i.promise.then(u, (_) => u(null, _ || "unknown"));
  }), kn(() => {
    for (const i of a.values()) i.reject(X);
  }), new Promise((i) => {
    function l(c) {
      function u() {
        c === s ? i(f) : l(s);
      }
      c.then(u, u);
    }
    l(s);
  });
}
function gr(e) {
  const t = Ve(e);
  return Ct(t), t;
}
function mn(e) {
  const t = Ve(e);
  return t.equals = dt, t;
}
function gn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) ne(t[n]);
  }
}
function bn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & g) === 0) return (t.f & V) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function Ue(e) {
  var t, n = d;
  ae(bn(e));
  try {
    e.f &= ~ee, gn(e), t = jt(e);
  } finally {
    ae(n);
  }
  return t;
}
function gt(e) {
  var t = Ue(e);
  if (!e.equals(t) && (e.wv = Ft(), (!(p == null ? void 0 : p.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    y(e, E);
    return;
  }
  re || (I !== null ? (kt() || (p == null ? void 0 : p.is_fork)) && I.set(e, t) : qe(e));
}
function Tn(e) {
  var _a3, _b;
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && ((_a3 = t.teardown) == null ? void 0 : _a3.call(t), (_b = t.ac) == null ? void 0 : _b.abort(X), t.teardown = Kt, t.ac = null, de(t, 0), Ke(t));
}
function bt(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && le(t);
}
let Ce = /* @__PURE__ */ new Set();
const B = /* @__PURE__ */ new Map();
let Tt = false;
function Be(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: vt, rv: 0, wv: 0 };
  return n;
}
function q(e, t) {
  const n = Be(e);
  return Ct(n), n;
}
function br(e, t = false, n = true) {
  var _a3;
  const r = Be(e);
  return t || (r.equals = dt), we && n && w !== null && w.l !== null && ((_a3 = w.l).s ?? (_a3.s = [])).push(r), r;
}
function K(e, t, n = false) {
  v !== null && (!P || (v.f & We) !== 0) && Ee() && (v.f & (g | H | je | We)) !== 0 && (N === null || !fe.call(N, e)) && rn();
  let r = n ? ue(t) : t;
  return Me(e, r);
}
function Me(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    re ? B.set(e, t) : B.set(e, n), e.v = t;
    var r = oe.ensure();
    if (r.capture(e, n), (e.f & g) !== 0) {
      const s = e;
      (e.f & T) !== 0 && Ue(s), qe(s);
    }
    e.wv = Ft(), At(e, T), Ee() && d !== null && (d.f & E) !== 0 && (d.f & (F | se)) === 0 && (k === null ? Cn([e]) : k.push(e)), !r.is_fork && Ce.size > 0 && !Tt && An();
  }
  return t;
}
function An() {
  Tt = false;
  for (const e of Ce) (e.f & E) !== 0 && y(e, M), me(e) && le(e);
  Ce.clear();
}
function Ne(e) {
  K(e, e.v + 1);
}
function At(e, t) {
  var n = e.reactions;
  if (n !== null) for (var r = Ee(), s = n.length, f = 0; f < s; f++) {
    var o = n[f], a = o.f;
    if (!(!r && o === d)) {
      var i = (a & T) === 0;
      if (i && y(o, t), (a & g) !== 0) {
        var l = o;
        I == null ? void 0 : I.delete(l), (a & ee) === 0 && (a & O && (o.f |= ee), At(l, M));
      } else i && ((a & H) !== 0 && j !== null && j.add(o), Y(o));
    }
  }
}
function ue(e) {
  if (typeof e != "object" || e === null || W in e) return e;
  const t = it(e);
  if (t !== Gt && t !== zt) return e;
  var n = /* @__PURE__ */ new Map(), r = Vt(e), s = q(0), f = J, o = (a) => {
    if (J === f) return a();
    var i = v, l = J;
    G(null), ft(f);
    var c = a();
    return G(i), ft(l), c;
  };
  return r && n.set("length", q(e.length)), new Proxy(e, { defineProperty(a, i, l) {
    (!("value" in l) || l.configurable === false || l.enumerable === false || l.writable === false) && tn();
    var c = n.get(i);
    return c === void 0 ? o(() => {
      var u = q(l.value);
      return n.set(i, u), u;
    }) : K(c, l.value, true), true;
  }, deleteProperty(a, i) {
    var l = n.get(i);
    if (l === void 0) {
      if (i in a) {
        const c = o(() => q(m));
        n.set(i, c), Ne(s);
      }
    } else K(l, m), Ne(s);
    return true;
  }, get(a, i, l) {
    var _a3;
    if (i === W) return e;
    var c = n.get(i), u = i in a;
    if (c === void 0 && (!u || ((_a3 = _e(a, i)) == null ? void 0 : _a3.writable)) && (c = o(() => {
      var b = ue(u ? a[i] : m), h = q(b);
      return h;
    }), n.set(i, c)), c !== void 0) {
      var _ = ce(c);
      return _ === m ? void 0 : _;
    }
    return Reflect.get(a, i, l);
  }, getOwnPropertyDescriptor(a, i) {
    var l = Reflect.getOwnPropertyDescriptor(a, i);
    if (l && "value" in l) {
      var c = n.get(i);
      c && (l.value = ce(c));
    } else if (l === void 0) {
      var u = n.get(i), _ = u == null ? void 0 : u.v;
      if (u !== void 0 && _ !== m) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return l;
  }, has(a, i) {
    var _a3;
    if (i === W) return true;
    var l = n.get(i), c = l !== void 0 && l.v !== m || Reflect.has(a, i);
    if (l !== void 0 || d !== null && (!c || ((_a3 = _e(a, i)) == null ? void 0 : _a3.writable))) {
      l === void 0 && (l = o(() => {
        var _ = c ? ue(a[i]) : m, b = q(_);
        return b;
      }), n.set(i, l));
      var u = ce(l);
      if (u === m) return false;
    }
    return c;
  }, set(a, i, l, c) {
    var _a3;
    var u = n.get(i), _ = i in a;
    if (r && i === "length") for (var b = l; b < u.v; b += 1) {
      var h = n.get(b + "");
      h !== void 0 ? K(h, m) : b in a && (h = o(() => q(m)), n.set(b + "", h));
    }
    if (u === void 0) (!_ || ((_a3 = _e(a, i)) == null ? void 0 : _a3.writable)) && (u = o(() => q(void 0)), K(u, ue(l)), n.set(i, u));
    else {
      _ = u.v !== m;
      var D = o(() => ue(l));
      K(u, D);
    }
    var Xe = Reflect.getOwnPropertyDescriptor(a, i);
    if ((Xe == null ? void 0 : Xe.set) && Xe.set.call(c, l), !_) {
      if (r && typeof i == "string") {
        var $e = n.get("length"), Oe = Number(i);
        Number.isInteger(Oe) && Oe >= $e.v && K($e, Oe + 1);
      }
      Ne(s);
    }
    return true;
  }, ownKeys(a) {
    ce(s);
    var i = Reflect.ownKeys(a).filter((u) => {
      var _ = n.get(u);
      return _ === void 0 || _.v !== m;
    });
    for (var [l, c] of n) c.v !== m && !(l in a) && i.push(l);
    return i;
  }, setPrototypeOf() {
    nn();
  } });
}
function tt(e) {
  try {
    if (e !== null && typeof e == "object" && W in e) return e[W];
  } catch {
  }
  return e;
}
function Tr(e, t) {
  return Object.is(tt(e), tt(t));
}
var nt, Sn, St, Rt;
function Ar() {
  if (nt === void 0) {
    nt = window, Sn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    St = _e(t, "firstChild").get, Rt = _e(t, "nextSibling").get, Ze(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ze(n) && (n.__t = void 0);
  }
}
function Re(e = "") {
  return document.createTextNode(e);
}
function Fe(e) {
  return St.call(e);
}
function z(e) {
  return Rt.call(e);
}
function Sr(e, t) {
  if (!te) return Fe(e);
  var n = Fe(R);
  if (n === null) n = R.appendChild(Re());
  else if (t && n.nodeType !== xe) {
    var r = Re();
    return n == null ? void 0 : n.before(r), ie(r), r;
  }
  return t && Ge(n), ie(n), n;
}
function Rr(e, t = false) {
  if (!te) {
    var n = Fe(e);
    return n instanceof Comment && n.data === "" ? z(n) : n;
  }
  if (t) {
    if ((R == null ? void 0 : R.nodeType) !== xe) {
      var r = Re();
      return R == null ? void 0 : R.before(r), ie(r), r;
    }
    Ge(R);
  }
  return R;
}
function xr(e, t = 1, n = false) {
  let r = te ? R : e;
  for (var s; t--; ) s = r, r = z(r);
  if (!te) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== xe) {
      var f = Re();
      return r === null ? s == null ? void 0 : s.after(f) : r.before(f), ie(f), f;
    }
    Ge(r);
  }
  return ie(r), r;
}
function kr(e) {
  e.textContent = "";
}
function Or() {
  return false;
}
function Nr(e, t, n) {
  return document.createElementNS(ln, e, void 0);
}
function Ge(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === xe; ) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
let rt = false;
function Rn() {
  rt || (rt = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a3;
      if (!e.defaultPrevented) for (const t of e.target.elements) (_a3 = t.__on_r) == null ? void 0 : _a3.call(t);
    });
  }, { capture: true }));
}
function ze(e) {
  var t = v, n = d;
  G(null), ae(null);
  try {
    return e();
  } finally {
    G(t), ae(n);
  }
}
function Dr(e, t, n, r = n) {
  e.addEventListener(t, () => ze(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Rn();
}
function xt(e) {
  d === null && (v === null && Qt(), Jt()), re && Wt();
}
function xn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function L(e, t, n) {
  var r = d;
  r !== null && (r.f & C) !== 0 && (e |= C);
  var s = { ctx: w, deps: null, nodes: null, f: e | T | O, first: null, fn: t, last: null, next: null, parent: r, b: r && r.b, prev: null, teardown: null, wv: 0, ac: null };
  if (n) try {
    le(s);
  } catch (a) {
    throw ne(s), a;
  }
  else t !== null && Y(s);
  var f = s;
  if (n && f.deps === null && f.teardown === null && f.nodes === null && f.first === f.last && (f.f & ye) === 0 && (f = f.first, (e & H) !== 0 && (e & Te) !== 0 && f !== null && (f.f |= Te)), f !== null && (f.parent = r, r !== null && xn(f, r), v !== null && (v.f & g) !== 0 && (e & se) === 0)) {
    var o = v;
    (o.effects ?? (o.effects = [])).push(f);
  }
  return s;
}
function kt() {
  return v !== null && !P;
}
function kn(e) {
  const t = L(pe, null, false);
  return y(t, E), t.teardown = e, t;
}
function On(e) {
  xt();
  var t = d.f, n = !v && (t & F) !== 0 && (t & Q) === 0;
  if (n) {
    var r = w;
    (r.e ?? (r.e = [])).push(e);
  } else return Ot(e);
}
function Ot(e) {
  return L(he | ut, e, false);
}
function Ir(e) {
  return xt(), L(pe | ut, e, true);
}
function Pr(e) {
  oe.ensure();
  const t = L(se | ye, e, true);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pn(t, () => {
      ne(t), r(void 0);
    }) : (ne(t), r(void 0));
  });
}
function Cr(e) {
  return L(he, e, false);
}
function Nn(e) {
  return L(je | ye, e, true);
}
function Mr(e, t = 0) {
  return L(pe | t, e, true);
}
function Fr(e, t = [], n = [], r = []) {
  pn(r, t, n, (s) => {
    L(pe, () => e(...s.map(ce)), true);
  });
}
function Lr(e, t = 0) {
  var n = L(H | t, e, true);
  return n;
}
function jr(e) {
  return L(F | ye, e, true);
}
function Nt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = re, r = v;
    st(true), G(null);
    try {
      t.call(null);
    } finally {
      st(n), G(r);
    }
  }
}
function Ke(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ze(() => {
      s.abort(X);
    });
    var r = n.next;
    (n.f & se) !== 0 ? n.parent = null : ne(n, t), n = r;
  }
}
function Dn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & F) === 0 && ne(t), t = n;
  }
}
function ne(e, t = true) {
  var n = false;
  (t || (e.f & ot) !== 0) && e.nodes !== null && e.nodes.end !== null && (In(e.nodes.start, e.nodes.end), n = true), Ke(e, t && !n), de(e, 0), y(e, V);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const f of r) f.stop();
  Nt(e);
  var s = e.parent;
  s !== null && s.first !== null && Dt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function In(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : z(e);
    e.remove(), e = n;
  }
}
function Dt(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Pn(e, t, n = true) {
  var r = [];
  It(e, r, true);
  var s = () => {
    n && ne(e), t && t();
  }, f = r.length;
  if (f > 0) {
    var o = () => --f || s();
    for (var a of r) a.out(o);
  } else s();
}
function It(e, t, n) {
  if ((e.f & C) === 0) {
    e.f ^= C;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const a of r) (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var f = s.next, o = (s.f & Te) !== 0 || (s.f & F) !== 0 && (e.f & H) !== 0;
      It(s, t, o ? n : false), s = f;
    }
  }
}
function Yr(e) {
  Pt(e, true);
}
function Pt(e, t) {
  if ((e.f & C) !== 0) {
    e.f ^= C, (e.f & E) === 0 && (y(e, T), Y(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Te) !== 0 || (n.f & F) !== 0;
      Pt(n, s ? t : false), n = r;
    }
    var f = e.nodes && e.nodes.t;
    if (f !== null) for (const o of f) (o.is_global || t) && o.in();
  }
}
function Hr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : z(n);
    t.append(n), n = s;
  }
}
let be = false, re = false;
function st(e) {
  re = e;
}
let v = null, P = false;
function G(e) {
  v = e;
}
let d = null;
function ae(e) {
  d = e;
}
let N = null;
function Ct(e) {
  v !== null && (N === null ? N = [e] : N.push(e));
}
let S = null, x = 0, k = null;
function Cn(e) {
  k = e;
}
let Mt = 1, Z = 0, J = Z;
function ft(e) {
  J = e;
}
function Ft() {
  return ++Mt;
}
function me(e) {
  var t = e.f;
  if ((t & T) !== 0) return true;
  if (t & g && (e.f &= ~ee), (t & M) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var f = n[s];
      if (me(f) && gt(f), f.wv > e.wv) return true;
    }
    (t & O) !== 0 && I === null && y(e, E);
  }
  return false;
}
function Lt(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(N !== null && fe.call(N, e))) for (var s = 0; s < r.length; s++) {
    var f = r[s];
    (f.f & g) !== 0 ? Lt(f, t, false) : t === f && (n ? y(f, T) : (f.f & E) !== 0 && y(f, M), Y(f));
  }
}
function jt(e) {
  var _a3;
  var t = S, n = x, r = k, s = v, f = N, o = w, a = P, i = J, l = e.f;
  S = null, x = 0, k = null, v = (l & (F | se)) === 0 ? e : null, N = null, Ae(e.ctx), P = false, J = ++Z, e.ac !== null && (ze(() => {
    e.ac.abort(X);
  }), e.ac = null);
  try {
    e.f |= De;
    var c = e.fn, u = c();
    e.f |= Q;
    var _ = e.deps, b = p == null ? void 0 : p.is_fork;
    if (S !== null) {
      var h;
      if (b || de(e, x), _ !== null && x > 0) for (_.length = x + S.length, h = 0; h < S.length; h++) _[x + h] = S[h];
      else e.deps = _ = S;
      if (kt() && (e.f & O) !== 0) for (h = x; h < _.length; h++) ((_a3 = _[h]).reactions ?? (_a3.reactions = [])).push(e);
    } else !b && _ !== null && x < _.length && (de(e, x), _.length = x);
    if (Ee() && k !== null && !P && _ !== null && (e.f & (g | M | T)) === 0) for (h = 0; h < k.length; h++) Lt(k[h], e);
    if (s !== null && s !== e) {
      if (Z++, s.deps !== null) for (let D = 0; D < n; D += 1) s.deps[D].rv = Z;
      if (t !== null) for (const D of t) D.rv = Z;
      k !== null && (r === null ? r = k : r.push(...k));
    }
    return (e.f & U) !== 0 && (e.f ^= U), u;
  } catch (D) {
    return cn(D);
  } finally {
    e.f ^= De, S = t, x = n, k = r, v = s, N = f, Ae(o), P = a, J = i;
  }
}
function Mn(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ut.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & g) !== 0 && (S === null || !fe.call(S, t))) {
    var f = t;
    (f.f & O) !== 0 && (f.f ^= O, f.f &= ~ee), qe(f), Tn(f), de(f, 0);
  }
}
function de(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Mn(e, n[r]);
}
function le(e) {
  var t = e.f;
  if ((t & V) === 0) {
    y(e, E);
    var n = d, r = be;
    d = e, be = true;
    try {
      (t & (H | lt)) !== 0 ? Dn(e) : Ke(e), Nt(e);
      var s = jt(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Mt;
      var f;
    } finally {
      be = r, d = n;
    }
  }
}
async function qr() {
  await Promise.resolve(), dn();
}
function Vr() {
  return oe.ensure().settled();
}
function ce(e) {
  var t = e.f, n = (t & g) !== 0;
  if (v !== null && !P) {
    var r = d !== null && (d.f & V) !== 0;
    if (!r && (N === null || !fe.call(N, e))) {
      var s = v.deps;
      if ((v.f & De) !== 0) e.rv < Z && (e.rv = Z, S === null && s !== null && s[x] === e ? x++ : S === null ? S = [e] : S.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var f = e.reactions;
        f === null ? e.reactions = [v] : fe.call(f, v) || f.push(v);
      }
    }
  }
  if (re && B.has(e)) return B.get(e);
  if (n) {
    var o = e;
    if (re) {
      var a = o.v;
      return ((o.f & E) === 0 && o.reactions !== null || Ht(o)) && (a = Ue(o)), B.set(o, a), a;
    }
    var i = (o.f & O) === 0 && !P && v !== null && (be || (v.f & O) !== 0), l = (o.f & Q) === 0;
    me(o) && (i && (o.f |= O), gt(o)), i && !l && (bt(o), Yt(o));
  }
  if (I == null ? void 0 : I.has(e)) return I.get(e);
  if ((e.f & U) !== 0) throw e.v;
  return e.v;
}
function Yt(e) {
  if (e.f |= O, e.deps !== null) for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & g) !== 0 && (t.f & O) === 0 && (bt(t), Yt(t));
}
function Ht(e) {
  if (e.v === m) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (B.has(t) || (t.f & g) !== 0 && Ht(t)) return true;
  return false;
}
function qt(e) {
  var t = P;
  try {
    return P = true, e();
  } finally {
    P = t;
  }
}
function Ur(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (W in e) Le(e);
    else if (!Array.isArray(e)) for (let t in e) {
      const n = e[t];
      typeof n == "object" && n && W in n && Le(n);
    }
  }
}
function Le(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      Le(e[r], t);
    } catch {
    }
    const n = it(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bt(n);
      for (let s in r) {
        const f = r[s].get;
        if (f) try {
          f.call(e);
        } catch {
        }
      }
    }
  }
}
function Fn(e) {
  w === null && _t(), we && w.l !== null ? Ln(w).m.push(e) : On(() => {
    const t = qt(e);
    if (typeof t == "function") return t;
  });
}
function Br(e) {
  w === null && _t(), Fn(() => () => qt(e));
}
function Ln(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
export {
  qn as $,
  _r as A,
  Er as B,
  Rr as C,
  Fr as D,
  Te as E,
  mr as F,
  Sr as G,
  sn as H,
  dr as I,
  xr as J,
  _e as K,
  $n as L,
  ue as M,
  K as N,
  re as O,
  d as P,
  V as Q,
  Un as R,
  W as S,
  mn as T,
  sr as U,
  nr as V,
  ir as W,
  fr as X,
  we as Y,
  rr as Z,
  q as _,
  On as a,
  kn as a$,
  Fn as a0,
  gr as a1,
  Cr as a2,
  Mr as a3,
  Je as a4,
  dn as a5,
  Yn as a6,
  br as a7,
  qr as a8,
  kt as a9,
  Q as aA,
  xe as aB,
  Ge as aC,
  Ar as aD,
  ct as aE,
  z as aF,
  Ye as aG,
  Xn as aH,
  kr as aI,
  Pr as aJ,
  jn as aK,
  an as aL,
  He as aM,
  Vn as aN,
  Kn as aO,
  Vt as aP,
  Wn as aQ,
  tr as aR,
  Jn as aS,
  C as aT,
  F as aU,
  Qn as aV,
  er as aW,
  Dr as aX,
  Qe as aY,
  ur as aZ,
  Tr as a_,
  Be as aa,
  Ne as ab,
  $t as ac,
  or as ad,
  oe as ae,
  y as af,
  T as ag,
  Y as ah,
  M as ai,
  vn as aj,
  ae as ak,
  G as al,
  Ae as am,
  cn as an,
  v as ao,
  Me as ap,
  hr as aq,
  Se as ar,
  ye as as,
  Zn as at,
  cr as au,
  Nr as av,
  Fe as aw,
  Sn as ax,
  ar as ay,
  lr as az,
  qt as b,
  Rn as b0,
  ln as b1,
  it as b2,
  Bn as b3,
  Bt as b4,
  zn as b5,
  Br as b6,
  Kt as b7,
  on as b8,
  Vr as b9,
  w as c,
  Hn as d,
  Ur as e,
  Ve as f,
  ce as g,
  wr as h,
  p as i,
  Yr as j,
  ne as k,
  Re as l,
  jr as m,
  te as n,
  R as o,
  Pn as p,
  Hr as q,
  Xt as r,
  Or as s,
  Lr as t,
  Ir as u,
  vr as v,
  yr as w,
  fn as x,
  pr as y,
  ie as z
};
