const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DYuVBeRT.js","../chunks/CwGMrjUI.js","../chunks/B5x8qFIl.js","../chunks/dL3cPlRr.js","../chunks/DwcD5tIa.js","../chunks/DVZ4tiSM.js","../assets/0.ba_FrIX5.css","../nodes/1.DlWAlBrD.js","../chunks/Buf-J7-u.js","../chunks/N_XdGPsK.js","../nodes/2.BOT29cZY.js","../chunks/D1l-liob.js","../assets/2.DODpk5Sm.css"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { p as O, _ as P } from "../chunks/D1l-liob.js";
import { n as C, v as z, t as J, E as K, w as Q, y as U, z as W, A as D, H as X, o as Z, a2 as p, a3 as $, b as tt, a4 as et, S as rt, N as E, R as at, g as u, a5 as st, a6 as nt, a7 as ot, B as it, u as ct, a as ut, a0 as ft, a8 as dt, C as b, J as lt, F as _t, _ as x, G as ht, I as mt, D as vt, a1 as T } from "../chunks/B5x8qFIl.js";
import { h as gt, m as yt, u as bt, a as m, e as A, f as L, t as Et, s as Rt } from "../chunks/CwGMrjUI.js";
import { B as Ot, i as k } from "../chunks/dL3cPlRr.js";
let Gt, wt, Ft, Vt, Yt, B, Lt, Mt, Bt, Nt;
let __tla = (async () => {
  var _e, _t2;
  function w(r, t, s) {
    var o;
    C && (o = Z, z());
    var n = new Ot(r);
    J(() => {
      var e = t() ?? null;
      if (C) {
        var a = Q(o), c = a === X, R = e !== null;
        if (c !== R) {
          var v = U();
          W(v), n.anchor = v, D(false), n.ensure(e, e && ((_) => s(_, e))), D(true);
          return;
        }
      }
      n.ensure(e, e && ((_) => s(_, e)));
    }, K);
  }
  function I(r, t) {
    return r === t || (r == null ? void 0 : r[rt]) === t;
  }
  function S(r = {}, t, s, o) {
    return p(() => {
      var n, e;
      return $(() => {
        n = e, e = [], tt(() => {
          r !== s(...e) && (t(r, ...e), n && I(s(...n), r) && t(null, ...n));
        });
      }), () => {
        et(() => {
          e && I(s(...e), r) && t(null, ...e);
        });
      };
    }), r;
  }
  function Pt(r) {
    return class extends xt {
      constructor(t) {
        super({
          component: r,
          ...t
        });
      }
    };
  }
  class xt {
    constructor(t) {
      __privateAdd(this, _e);
      __privateAdd(this, _t2);
      var _a;
      var s = /* @__PURE__ */ new Map(), o = (e, a) => {
        var c = ot(a, false, false);
        return s.set(e, c), c;
      };
      const n = new Proxy({
        ...t.props || {},
        $$events: {}
      }, {
        get(e, a) {
          return u(s.get(a) ?? o(a, Reflect.get(e, a)));
        },
        has(e, a) {
          return a === at ? true : (u(s.get(a) ?? o(a, Reflect.get(e, a))), Reflect.has(e, a));
        },
        set(e, a, c) {
          return E(s.get(a) ?? o(a, c), c), Reflect.set(e, a, c);
        }
      });
      __privateSet(this, _t2, (t.hydrate ? gt : yt)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: n,
        context: t.context,
        intro: t.intro ?? false,
        recover: t.recover,
        transformError: t.transformError
      })), (!((_a = t == null ? void 0 : t.props) == null ? void 0 : _a.$$host) || t.sync === false) && st(), __privateSet(this, _e, n.$$events);
      for (const e of Object.keys(__privateGet(this, _t2))) e === "$set" || e === "$destroy" || e === "$on" || nt(this, e, {
        get() {
          return __privateGet(this, _t2)[e];
        },
        set(a) {
          __privateGet(this, _t2)[e] = a;
        },
        enumerable: true
      });
      __privateGet(this, _t2).$set = (e) => {
        Object.assign(n, e);
      }, __privateGet(this, _t2).$destroy = () => {
        bt(__privateGet(this, _t2));
      };
    }
    $set(t) {
      __privateGet(this, _t2).$set(t);
    }
    $on(t, s) {
      __privateGet(this, _e)[t] = __privateGet(this, _e)[t] || [];
      const o = (...n) => s.call(this, ...n);
      return __privateGet(this, _e)[t].push(o), () => {
        __privateGet(this, _e)[t] = __privateGet(this, _e)[t].filter((n) => n !== o);
      };
    }
    $destroy() {
      __privateGet(this, _t2).$destroy();
    }
  }
  _e = new WeakMap();
  _t2 = new WeakMap();
  Lt = {};
  var Tt = L('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), At = L("<!> <!>", 1);
  function kt(r, t) {
    it(t, true);
    let s = O(t, "components", 23, () => []), o = O(t, "data_0", 3, null), n = O(t, "data_1", 3, null);
    ct(() => t.stores.page.set(t.page)), ut(() => {
      t.stores, t.page, t.constructors, s(), t.form, o(), n(), t.stores.page.notify();
    });
    let e = x(false), a = x(false), c = x(null);
    ft(() => {
      const i = t.stores.page.subscribe(() => {
        u(e) && (E(a, true), dt().then(() => {
          E(c, document.title || "untitled page", true);
        }));
      });
      return E(e, true), i;
    });
    const R = T(() => t.constructors[1]);
    var v = At(), _ = b(v);
    {
      var M = (i) => {
        const f = T(() => t.constructors[0]);
        var d = A(), g = b(d);
        w(g, () => u(f), (l, h) => {
          S(h(l, {
            get data() {
              return o();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            },
            children: (y, St) => {
              var j = A(), Y = b(j);
              w(Y, () => u(R), (G, H) => {
                S(H(G, {
                  get data() {
                    return n();
                  },
                  get form() {
                    return t.form;
                  },
                  get params() {
                    return t.page.params;
                  }
                }), (q) => s()[1] = q, () => {
                  var _a;
                  return (_a = s()) == null ? void 0 : _a[1];
                });
              }), m(y, j);
            },
            $$slots: {
              default: true
            }
          }), (y) => s()[0] = y, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), m(i, d);
      }, N = (i) => {
        const f = T(() => t.constructors[0]);
        var d = A(), g = b(d);
        w(g, () => u(f), (l, h) => {
          S(h(l, {
            get data() {
              return o();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            }
          }), (y) => s()[0] = y, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), m(i, d);
      };
      k(_, (i) => {
        t.constructors[1] ? i(M) : i(N, false);
      });
    }
    var F = lt(_, 2);
    {
      var V = (i) => {
        var f = Tt(), d = ht(f);
        {
          var g = (l) => {
            var h = Et();
            vt(() => Rt(h, u(c))), m(l, h);
          };
          k(d, (l) => {
            u(a) && l(g);
          });
        }
        mt(f), m(i, f);
      };
      k(F, (i) => {
        u(e) && i(V);
      });
    }
    m(r, v), _t();
  }
  Bt = Pt(kt);
  Mt = [
    () => P(() => import("../nodes/0.DYuVBeRT.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
    () => P(() => import("../nodes/1.DlWAlBrD.js"), __vite__mapDeps([7,1,2,5,8,9]), import.meta.url),
    () => P(() => import("../nodes/2.BOT29cZY.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([10,1,2,3,11,4,5,8,12]), import.meta.url)
  ];
  Nt = [];
  Ft = {
    "/": [
      2
    ]
  };
  B = {
    handleError: (({ error: r }) => {
      console.error(r);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  wt = Object.fromEntries(Object.entries(B.transport).map(([r, t]) => [
    r,
    t.decode
  ]));
  Vt = Object.fromEntries(Object.entries(B.transport).map(([r, t]) => [
    r,
    t.encode
  ]));
  Yt = false;
  Gt = (r, t) => wt[r](t);
})();
export {
  __tla,
  Gt as decode,
  wt as decoders,
  Ft as dictionary,
  Vt as encoders,
  Yt as hash,
  B as hooks,
  Lt as matchers,
  Mt as nodes,
  Bt as root,
  Nt as server_loads
};
