import { K as I, L as O, g as R, M as A, N as w, O as T, P as N, Q as $, f as U, S as B, R as D, T as M, b as Y, U as C, V as q, W as j, X as x, Y as W, Z } from "./B5x8qFIl.js";
let g = false;
function k(n) {
  var i = g;
  try {
    return g = false, [n(), g];
  } finally {
    g = i;
  }
}
function K(n, i, u, d) {
  var _a;
  var c = !W || (u & Z) !== 0, _ = (u & x) !== 0, f = (u & j) !== 0, t = d, v = true, P = () => (v && (v = false, t = f ? Y(d) : d), t), e;
  if (_) {
    var l = B in n || D in n;
    e = ((_a = I(n, i)) == null ? void 0 : _a.set) ?? (l && i in n ? (r) => n[i] = r : void 0);
  }
  var s, o = false;
  _ ? [s, o] = k(() => n[i]) : s = n[i], s === void 0 && d !== void 0 && (s = P(), e && (c && O(), e(s)));
  var a;
  if (c ? a = () => {
    var r = n[i];
    return r === void 0 ? P() : (v = true, r);
  } : a = () => {
    var r = n[i];
    return r !== void 0 && (t = void 0), r === void 0 ? t : r;
  }, c && (u & C) === 0) return a;
  if (e) {
    var S = n.$$legacy;
    return (function(r, h) {
      return arguments.length > 0 ? ((!c || !h || S || o) && e(h ? a() : r), r) : a();
    });
  }
  var E = false, m = ((u & q) !== 0 ? U : M)(() => (E = false, a()));
  _ && R(m);
  var y = N;
  return (function(r, h) {
    if (arguments.length > 0) {
      const b = h ? R(m) : c && _ ? A(r) : r;
      return w(m, b), E = true, t !== void 0 && (t = b), r;
    }
    return T && E || (y.f & $) !== 0 ? m.v : R(m);
  });
}
const p = "modulepreload", z = function(n, i) {
  return new URL(n, i).href;
}, L = {}, Q = function(i, u, d) {
  let c = Promise.resolve();
  if (u && u.length > 0) {
    let P = function(e) {
      return Promise.all(e.map((l) => Promise.resolve(l).then((s) => ({ status: "fulfilled", value: s }), (s) => ({ status: "rejected", reason: s }))));
    };
    const f = document.getElementsByTagName("link"), t = document.querySelector("meta[property=csp-nonce]"), v = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute("nonce"));
    c = P(u.map((e) => {
      if (e = z(e, d), e in L) return;
      L[e] = true;
      const l = e.endsWith(".css"), s = l ? '[rel="stylesheet"]' : "";
      if (d) for (let a = f.length - 1; a >= 0; a--) {
        const S = f[a];
        if (S.href === e && (!l || S.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${e}"]${s}`)) return;
      const o = document.createElement("link");
      if (o.rel = l ? "stylesheet" : p, l || (o.as = "script"), o.crossOrigin = "", o.href = e, v && o.setAttribute("nonce", v), document.head.appendChild(o), l) return new Promise((a, S) => {
        o.addEventListener("load", a), o.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${e}`)));
      });
    }));
  }
  function _(f) {
    const t = new Event("vite:preloadError", { cancelable: true });
    if (t.payload = f, window.dispatchEvent(t), !t.defaultPrevented) throw f;
  }
  return c.then((f) => {
    for (const t of f || []) t.status === "rejected" && _(t.reason);
    return i().catch(_);
  });
};
export {
  Q as _,
  K as p
};
