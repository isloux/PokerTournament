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
var _s, _t, _e, _a, _i, _r, _f;
import { i as u, j as m, k as l, p as b, l as _, m as p, n as d, o as g, q as A, s as T, t as k, v as w, E, w as R, H as S, x, y as D, z as F, A as v } from "./B5x8qFIl.js";
class M {
  constructor(s, a = true) {
    __publicField(this, "anchor");
    __privateAdd(this, _s, /* @__PURE__ */ new Map());
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __privateAdd(this, _e, /* @__PURE__ */ new Map());
    __privateAdd(this, _a, /* @__PURE__ */ new Set());
    __privateAdd(this, _i, true);
    __privateAdd(this, _r, () => {
      var s = u;
      if (__privateGet(this, _s).has(s)) {
        var a = __privateGet(this, _s).get(s), e = __privateGet(this, _t).get(a);
        if (e) m(e), __privateGet(this, _a).delete(a);
        else {
          var n = __privateGet(this, _e).get(a);
          n && (__privateGet(this, _t).set(a, n.effect), __privateGet(this, _e).delete(a), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), e = n.effect);
        }
        for (const [i, t] of __privateGet(this, _s)) {
          if (__privateGet(this, _s).delete(i), i === s) break;
          const r = __privateGet(this, _e).get(t);
          r && (l(r.effect), __privateGet(this, _e).delete(t));
        }
        for (const [i, t] of __privateGet(this, _t)) {
          if (i === a || __privateGet(this, _a).has(i)) continue;
          const r = () => {
            if (Array.from(__privateGet(this, _s).values()).includes(i)) {
              var c = document.createDocumentFragment();
              A(t, c), c.append(_()), __privateGet(this, _e).set(i, { effect: t, fragment: c });
            } else l(t);
            __privateGet(this, _a).delete(i), __privateGet(this, _t).delete(i);
          };
          __privateGet(this, _i) || !e ? (__privateGet(this, _a).add(i), b(t, r, false)) : r();
        }
      }
    });
    __privateAdd(this, _f, (s) => {
      __privateGet(this, _s).delete(s);
      const a = Array.from(__privateGet(this, _s).values());
      for (const [e, n] of __privateGet(this, _e)) a.includes(e) || (l(n.effect), __privateGet(this, _e).delete(e));
    });
    this.anchor = s, __privateSet(this, _i, a);
  }
  ensure(s, a) {
    var e = u, n = T();
    if (a && !__privateGet(this, _t).has(s) && !__privateGet(this, _e).has(s)) if (n) {
      var i = document.createDocumentFragment(), t = _();
      i.append(t), __privateGet(this, _e).set(s, { effect: p(() => a(t)), fragment: i });
    } else __privateGet(this, _t).set(s, p(() => a(this.anchor)));
    if (__privateGet(this, _s).set(e, s), n) {
      for (const [r, f] of __privateGet(this, _t)) r === s ? e.unskip_effect(f) : e.skip_effect(f);
      for (const [r, f] of __privateGet(this, _e)) r === s ? e.unskip_effect(f.effect) : e.skip_effect(f.effect);
      e.oncommit(__privateGet(this, _r)), e.ondiscard(__privateGet(this, _f));
    } else d && (this.anchor = g), __privateGet(this, _r).call(this);
  }
}
_s = new WeakMap();
_t = new WeakMap();
_e = new WeakMap();
_a = new WeakMap();
_i = new WeakMap();
_r = new WeakMap();
_f = new WeakMap();
function H(h, s, a = false) {
  d && w();
  var e = new M(h), n = a ? E : 0;
  function i(t, r) {
    if (d) {
      const o = R(h);
      var f;
      if (o === S ? f = 0 : o === x ? f = false : f = parseInt(o.substring(1)), t !== f) {
        var c = D();
        F(c), e.anchor = c, v(false), e.ensure(t, r), v(true);
        return;
      }
    }
    e.ensure(t, r);
  }
  k(() => {
    var t = false;
    s((r, f = 0) => {
      t = true, i(f, r);
    }), t || i(false, null);
  }, n);
}
export {
  M as B,
  H as i
};
