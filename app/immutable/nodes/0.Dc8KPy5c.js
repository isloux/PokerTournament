import { a as p, b as T, d as I, c as g, f as y, s as c } from "../chunks/CwGMrjUI.js";
import { t as J, E as Y, B as K, a0 as Q, a as U, D as w, F as W, G as e, I as a, J as v, g as q, _ as X, a1 as Z, N as k } from "../chunks/B5x8qFIl.js";
import { B as $, i as E } from "../chunks/dL3cPlRr.js";
import { g as F, t as L, a as f, b as tt } from "../chunks/Dh-htLkM.js";
import "../chunks/DVZ4tiSM.js";
function et(o, s, ...l) {
  var m = new $(o);
  J(() => {
    const n = s() ?? null;
    m.ensure(n, n && ((h) => n(h, ...l)));
  }, Y);
}
const at = true, st = false, gt = Object.freeze(Object.defineProperty({ __proto__: null, prerender: at, ssr: st }, Symbol.toStringTag, { value: "Module" }));
var rt = T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="18"><rect width="5" height="3" fill="#00247d"></rect><path d="M0,0L5,3M0,3L5,0" stroke="#fff" stroke-width="0.6"></path><path d="M0,0L5,3M0,3L5,0" stroke="#cf142b" stroke-width="0.4"></path><path d="M2.5,0V3M0,1.5H5" stroke="#fff" stroke-width="1"></path><path d="M2.5,0V3M0,1.5H5" stroke="#cf142b" stroke-width="0.6"></path></svg>');
function ot(o) {
  var s = rt();
  p(o, s);
}
var nt = T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="24" height="18"><rect width="1" height="2" fill="#0055a4"></rect><rect width="1" height="2" x="1" fill="#fff"></rect><rect width="1" height="2" x="2" fill="#ef4135"></rect></svg>');
function lt(o) {
  var s = nt();
  p(o, s);
}
var it = y('<span class="confirm-prompt svelte-12qhfyh"> <button class="confirm svelte-12qhfyh"> </button> <button class="cancel svelte-12qhfyh"> </button></span>'), ht = y('<button class="new-tournament svelte-12qhfyh"> </button>'), ct = y('<div class="app svelte-12qhfyh"><header class="svelte-12qhfyh"><h1 class="svelte-12qhfyh"> </h1> <div class="header-actions svelte-12qhfyh"><button class="lang-toggle svelte-12qhfyh" aria-label="Toggle language"><!></button> <!></div></header> <main><!></main></div>');
function mt(o, s) {
  K(s, true);
  let l = X(false);
  Q(() => {
    L.load();
  }), U(() => {
    document.documentElement.lang = F();
  });
  function m() {
    L.reset(), k(l, false);
  }
  var n = ct(), h = e(n), _ = e(h), B = e(_, true);
  a(_);
  var x = v(_, 2), u = e(x), S = e(u);
  {
    var N = (t) => {
      lt(t);
    }, j = Z(() => F() === "en"), A = (t) => {
      ot(t);
    };
    E(S, (t) => {
      q(j) ? t(N) : t(A, false);
    });
  }
  a(u);
  var H = v(u, 2);
  {
    var O = (t) => {
      var r = it(), d = e(r), i = v(d), V = e(i, true);
      a(i);
      var b = v(i, 2), z = e(b, true);
      a(b), a(r), w((C, D, G) => {
        c(d, `${C ?? ""} `), c(V, D), c(z, G);
      }, [() => f("app.areYouSure"), () => f("app.confirm"), () => f("app.cancel")]), g("click", i, m), g("click", b, () => k(l, false)), p(t, r);
    }, P = (t) => {
      var r = ht(), d = e(r, true);
      a(r), w((i) => c(d, i), [() => f("app.newTournament")]), g("click", r, () => k(l, true)), p(t, r);
    };
    E(H, (t) => {
      q(l) ? t(O) : t(P, false);
    });
  }
  a(x), a(h);
  var M = v(h, 2), R = e(M);
  et(R, () => s.children), a(M), a(n), w((t) => c(B, t), [() => f("app.title")]), g("click", u, function(...t) {
    var _a;
    (_a = tt) == null ? void 0 : _a.apply(this, t);
  }), p(o, n), W();
}
I(["click"]);
export {
  mt as component,
  gt as universal
};
