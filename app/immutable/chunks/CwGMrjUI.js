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
var _t, _v, _n, _l, _e2, _a, _r, _s, _i, _d, _f, _h, _u, _c, _o, _y, _We_instances, T_fn, E_fn, b_fn, g_fn, __fn, p_fn, m_fn, _a2, _b;
import { a9 as ae, g as K, a3 as ie, aa as X, b as oe, ab as q, a4 as M, o as l, n as _, P as m, ac as W, t as fe, v as Q, x as le, ad as $, m as y, l as N, ae as k, p as C, q as de, af as z, ag as he, ah as j, ai as ue, aj as ce, ak as F, al as I, am as U, an as _e, ao as Z, c as ee, ap as pe, k as L, z as R, aq as ve, y as ge, ar as S, E as me, as as ye, at as Te, au as Ee, a6 as be, av as we, aw as A, ax as Ne, ay as Re, az as Ae, aA as Se, aB as De, aC as Oe, aD as P, aE as te, H as Me, aF as Fe, aG as H, A as D, aH as Ie, aI as xe, aJ as ke, aK as Ce, B as Le, aL as Pe, aM as He, F as Ye } from "./B5x8qFIl.js";
function Be(t) {
  let e = 0, r = X(0), n;
  return () => {
    ae() && (K(r), ie(() => (e === 0 && (n = oe(() => t(() => q(r)))), e += 1, () => {
      M(() => {
        e -= 1, e === 0 && (n == null ? void 0 : n(), n = void 0, q(r));
      });
    })));
  };
}
var Ve = me | ye;
function qe(t, e, r, n) {
  new We(t, e, r, n);
}
class We {
  constructor(e, r, n, i) {
    __privateAdd(this, _We_instances);
    __publicField(this, "parent");
    __publicField(this, "is_pending", false);
    __publicField(this, "transform_error");
    __privateAdd(this, _t);
    __privateAdd(this, _v, _ ? l : null);
    __privateAdd(this, _n);
    __privateAdd(this, _l);
    __privateAdd(this, _e2);
    __privateAdd(this, _a, null);
    __privateAdd(this, _r, null);
    __privateAdd(this, _s, null);
    __privateAdd(this, _i, null);
    __privateAdd(this, _d, 0);
    __privateAdd(this, _f, 0);
    __privateAdd(this, _h, false);
    __privateAdd(this, _u, /* @__PURE__ */ new Set());
    __privateAdd(this, _c, /* @__PURE__ */ new Set());
    __privateAdd(this, _o, null);
    __privateAdd(this, _y, Be(() => (__privateSet(this, _o, X(__privateGet(this, _d))), () => {
      __privateSet(this, _o, null);
    })));
    var _a3;
    __privateSet(this, _t, e), __privateSet(this, _n, r), __privateSet(this, _l, (s) => {
      var a = m;
      a.b = this, a.f |= W, n(s);
    }), this.parent = m.b, this.transform_error = i ?? ((_a3 = this.parent) == null ? void 0 : _a3.transform_error) ?? ((s) => s), __privateSet(this, _e2, fe(() => {
      if (_) {
        const s = __privateGet(this, _v);
        Q();
        const a = s.data === le;
        if (s.data.startsWith($)) {
          const o = JSON.parse(s.data.slice($.length));
          __privateMethod(this, _We_instances, E_fn).call(this, o);
        } else a ? __privateMethod(this, _We_instances, b_fn).call(this) : __privateMethod(this, _We_instances, T_fn).call(this);
      } else __privateMethod(this, _We_instances, g_fn).call(this);
    }, Ve)), _ && __privateSet(this, _t, l);
  }
  defer_effect(e) {
    ce(e, __privateGet(this, _u), __privateGet(this, _c));
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!__privateGet(this, _n).pending;
  }
  update_pending_count(e) {
    __privateMethod(this, _We_instances, m_fn).call(this, e), __privateSet(this, _d, __privateGet(this, _d) + e), !(!__privateGet(this, _o) || __privateGet(this, _h)) && (__privateSet(this, _h, true), M(() => {
      __privateSet(this, _h, false), __privateGet(this, _o) && pe(__privateGet(this, _o), __privateGet(this, _d));
    }));
  }
  get_effect_pending() {
    return __privateGet(this, _y).call(this), K(__privateGet(this, _o));
  }
  error(e) {
    var r = __privateGet(this, _n).onerror;
    let n = __privateGet(this, _n).failed;
    if (!r && !n) throw e;
    __privateGet(this, _a) && (L(__privateGet(this, _a)), __privateSet(this, _a, null)), __privateGet(this, _r) && (L(__privateGet(this, _r)), __privateSet(this, _r, null)), __privateGet(this, _s) && (L(__privateGet(this, _s)), __privateSet(this, _s, null)), _ && (R(__privateGet(this, _v)), ve(), R(ge()));
    var i = false, s = false;
    const a = () => {
      if (i) {
        Ee();
        return;
      }
      i = true, s && Te(), __privateGet(this, _s) !== null && C(__privateGet(this, _s), () => {
        __privateSet(this, _s, null);
      }), __privateMethod(this, _We_instances, p_fn).call(this, () => {
        k.ensure(), __privateMethod(this, _We_instances, g_fn).call(this);
      });
    }, d = (o) => {
      try {
        s = true, r == null ? void 0 : r(o, a), s = false;
      } catch (f) {
        S(f, __privateGet(this, _e2) && __privateGet(this, _e2).parent);
      }
      n && __privateSet(this, _s, __privateMethod(this, _We_instances, p_fn).call(this, () => {
        k.ensure();
        try {
          return y(() => {
            var f = m;
            f.b = this, f.f |= W, n(__privateGet(this, _t), () => o, () => a);
          });
        } catch (f) {
          return S(f, __privateGet(this, _e2).parent), null;
        }
      }));
    };
    M(() => {
      var o;
      try {
        o = this.transform_error(e);
      } catch (f) {
        S(f, __privateGet(this, _e2) && __privateGet(this, _e2).parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(d, (f) => S(f, __privateGet(this, _e2) && __privateGet(this, _e2).parent)) : d(o);
    });
  }
}
_t = new WeakMap();
_v = new WeakMap();
_n = new WeakMap();
_l = new WeakMap();
_e2 = new WeakMap();
_a = new WeakMap();
_r = new WeakMap();
_s = new WeakMap();
_i = new WeakMap();
_d = new WeakMap();
_f = new WeakMap();
_h = new WeakMap();
_u = new WeakMap();
_c = new WeakMap();
_o = new WeakMap();
_y = new WeakMap();
_We_instances = new WeakSet();
T_fn = function() {
  try {
    __privateSet(this, _a, y(() => __privateGet(this, _l).call(this, __privateGet(this, _t))));
  } catch (e) {
    this.error(e);
  }
};
E_fn = function(e) {
  const r = __privateGet(this, _n).failed;
  r && __privateSet(this, _s, y(() => {
    r(__privateGet(this, _t), () => e, () => () => {
    });
  }));
};
b_fn = function() {
  const e = __privateGet(this, _n).pending;
  e && (this.is_pending = true, __privateSet(this, _r, y(() => e(__privateGet(this, _t)))), M(() => {
    var r = __privateSet(this, _i, document.createDocumentFragment()), n = N();
    r.append(n), __privateSet(this, _a, __privateMethod(this, _We_instances, p_fn).call(this, () => (k.ensure(), y(() => __privateGet(this, _l).call(this, n))))), __privateGet(this, _f) === 0 && (__privateGet(this, _t).before(r), __privateSet(this, _i, null), C(__privateGet(this, _r), () => {
      __privateSet(this, _r, null);
    }), __privateMethod(this, _We_instances, __fn).call(this));
  }));
};
g_fn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), __privateSet(this, _f, 0), __privateSet(this, _d, 0), __privateSet(this, _a, y(() => {
      __privateGet(this, _l).call(this, __privateGet(this, _t));
    })), __privateGet(this, _f) > 0) {
      var e = __privateSet(this, _i, document.createDocumentFragment());
      de(__privateGet(this, _a), e);
      const r = __privateGet(this, _n).pending;
      __privateSet(this, _r, y(() => r(__privateGet(this, _t))));
    } else __privateMethod(this, _We_instances, __fn).call(this);
  } catch (r) {
    this.error(r);
  }
};
__fn = function() {
  this.is_pending = false;
  for (const e of __privateGet(this, _u)) z(e, he), j(e);
  for (const e of __privateGet(this, _c)) z(e, ue), j(e);
  __privateGet(this, _u).clear(), __privateGet(this, _c).clear();
};
p_fn = function(e) {
  var r = m, n = Z, i = ee;
  F(__privateGet(this, _e2)), I(__privateGet(this, _e2)), U(__privateGet(this, _e2).ctx);
  try {
    return e();
  } catch (s) {
    return _e(s), null;
  } finally {
    F(r), I(n), U(i);
  }
};
m_fn = function(e) {
  var _a3;
  if (!this.has_pending_snippet()) {
    this.parent && __privateMethod(_a3 = this.parent, _We_instances, m_fn).call(_a3, e);
    return;
  }
  __privateSet(this, _f, __privateGet(this, _f) + e), __privateGet(this, _f) === 0 && (__privateMethod(this, _We_instances, __fn).call(this), __privateGet(this, _r) && C(__privateGet(this, _r), () => {
    __privateSet(this, _r, null);
  }), __privateGet(this, _i) && (__privateGet(this, _t).before(__privateGet(this, _i)), __privateSet(this, _i, null)));
};
const $e = ["touchstart", "touchmove"];
function ze(t) {
  return $e.includes(t);
}
const w = /* @__PURE__ */ Symbol("events"), re = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
function Qe(t, e, r) {
  (e[w] ?? (e[w] = {}))[t] = r;
}
function Ze(t) {
  for (var e = 0; e < t.length; e++) re.add(t[e]);
  for (var r of Y) r(t);
}
let G = null;
function J(t) {
  var _a3, _b2;
  var e = this, r = e.ownerDocument, n = t.type, i = ((_a3 = t.composedPath) == null ? void 0 : _a3.call(t)) || [], s = i[0] || t.target;
  G = t;
  var a = 0, d = G === t && t[w];
  if (d) {
    var o = i.indexOf(d);
    if (o !== -1 && (e === document || e === window)) {
      t[w] = e;
      return;
    }
    var f = i.indexOf(e);
    if (f === -1) return;
    o <= f && (a = o);
  }
  if (s = i[a] || t.target, s !== e) {
    be(t, "currentTarget", { configurable: true, get() {
      return s || r;
    } });
    var T = Z, b = m;
    I(null), F(null);
    try {
      for (var g, u = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var c = (_b2 = s[w]) == null ? void 0 : _b2[n];
          c != null && (!s.disabled || t.target === s) && c.call(s, t);
        } catch (p) {
          g ? u.push(p) : g = p;
        }
        if (t.cancelBubble || h === e || h === null) break;
        s = h;
      }
      if (g) {
        for (let p of u) queueMicrotask(() => {
          throw p;
        });
        throw g;
      }
    } finally {
      t[w] = e, delete t.currentTarget, I(T), F(b);
    }
  }
}
const je = ((_a2 = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : _a2.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (t) => t });
function Ue(t) {
  return (je == null ? void 0 : je.createHTML(t)) ?? t;
}
function se(t) {
  var e = we("template");
  return e.innerHTML = Ue(t.replaceAll("<!>", "<!---->")), e.content;
}
function v(t, e) {
  var r = m;
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
function et(t, e) {
  var r = (e & Re) !== 0, n = (e & Ae) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (_) return v(l, null), l;
    i === void 0 && (i = se(s ? t : "<!>" + t), r || (i = A(i)));
    var a = n || Ne ? document.importNode(i, true) : i.cloneNode(true);
    if (r) {
      var d = A(a), o = a.lastChild;
      v(d, o);
    } else v(a, a);
    return a;
  };
}
function Ge(t, e, r = "svg") {
  var n = !t.startsWith("<!>"), i = `<${r}>${n ? t : "<!>" + t}</${r}>`, s;
  return () => {
    if (_) return v(l, null), l;
    if (!s) {
      var a = se(i), d = A(a);
      s = A(d);
    }
    var o = s.cloneNode(true);
    return v(o, o), o;
  };
}
function tt(t, e) {
  return Ge(t, e, "svg");
}
function rt(t = "") {
  if (!_) {
    var e = N(t + "");
    return v(e, e), e;
  }
  var r = l;
  return r.nodeType !== De ? (r.before(r = N()), R(r)) : Oe(r), v(r, r), r;
}
function st() {
  if (_) return v(l, null), l;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = N();
  return t.append(e, r), v(e, r), t;
}
function nt(t, e) {
  if (_) {
    var r = m;
    ((r.f & Se) === 0 || r.nodes.end === null) && (r.nodes.end = l), Q();
    return;
  }
  t !== null && t.before(e);
}
function at(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r + "");
}
function Je(t, e) {
  return ne(t, e);
}
function it(t, e) {
  P(), e.intro = e.intro ?? false;
  const r = e.target, n = _, i = l;
  try {
    for (var s = A(r); s && (s.nodeType !== te || s.data !== Me); ) s = Fe(s);
    if (!s) throw H;
    D(true), R(s);
    const a = ne(t, { ...e, anchor: s });
    return D(false), a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((d) => d.startsWith("https://svelte.dev/e/"))) throw a;
    return a !== H && console.warn("Failed to hydrate: ", a), e.recover === false && Ie(), P(), xe(r), D(false), Je(t, e);
  } finally {
    D(n), R(i);
  }
}
const O = /* @__PURE__ */ new Map();
function ne(t, { target: e, anchor: r, props: n = {}, events: i, context: s, intro: a = true, transformError: d }) {
  P();
  var o = void 0, f = ke(() => {
    var T = r ?? e.appendChild(N());
    qe(T, { pending: () => {
    } }, (u) => {
      Le({});
      var h = ee;
      if (s && (h.c = s), i && (n.$$events = i), _ && v(u, null), o = t(u, n) || {}, _ && (m.nodes.end = l, l === null || l.nodeType !== te || l.data !== Pe)) throw He(), H;
      Ye();
    }, d);
    var b = /* @__PURE__ */ new Set(), g = (u) => {
      for (var h = 0; h < u.length; h++) {
        var c = u[h];
        if (!b.has(c)) {
          b.add(c);
          var p = ze(c);
          for (const x of [e, document]) {
            var E = O.get(x);
            E === void 0 && (E = /* @__PURE__ */ new Map(), O.set(x, E));
            var V = E.get(c);
            V === void 0 ? (x.addEventListener(c, J, { passive: p }), E.set(c, 1)) : E.set(c, V + 1);
          }
        }
      }
    };
    return g(Ce(re)), Y.add(g), () => {
      var _a3;
      for (var u of b) for (const p of [e, document]) {
        var h = O.get(p), c = h.get(u);
        --c == 0 ? (p.removeEventListener(u, J), h.delete(u), h.size === 0 && O.delete(p)) : h.set(u, c);
      }
      Y.delete(g), T !== r && ((_a3 = T.parentNode) == null ? void 0 : _a3.removeChild(T));
    };
  });
  return B.set(o, f), o;
}
let B = /* @__PURE__ */ new WeakMap();
function ot(t, e) {
  const r = B.get(t);
  return r ? (B.delete(t), r(e)) : Promise.resolve();
}
const Ke = "5";
typeof window < "u" && ((_b = window.__svelte ?? (window.__svelte = {})).v ?? (_b.v = /* @__PURE__ */ new Set())).add(Ke);
export {
  nt as a,
  tt as b,
  Qe as c,
  Ze as d,
  st as e,
  et as f,
  it as h,
  Je as m,
  at as s,
  rt as t,
  ot as u
};
