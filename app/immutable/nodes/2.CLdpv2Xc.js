import { d as ve, a as L, f as P, s as w, c as W, e as vt, t as qe } from "../chunks/CwGMrjUI.js";
import { l as Be, t as ct, n as te, z as we, aw as dt, v as ft, g as v, w as mt, x as bt, y as De, A as Te, o as pe, aE as _t, aL as gt, ap as Oe, i as ae, aN as le, m as Ae, aO as pt, s as ht, T as kt, aP as Ge, aK as Pe, aQ as yt, aR as xt, a7 as Bt, aa as Fe, aS as wt, j as Ke, p as Ye, aT as Ie, aU as Tt, aI as It, k as Et, aF as Rt, aV as Je, a4 as Xe, aW as At, aX as Qe, a2 as St, aY as Ze, aZ as Mt, a_ as Lt, a$ as Pt, b0 as Nt, b1 as Ct, b2 as qt, b3 as Dt, b4 as Ot, b5 as Ft, a8 as jt, b as zt, a3 as Ht, B as X, F as Q, I as f, G as m, D as N, J as B, C as ce, a1 as H, _ as J, N as z, a0 as Vt, b6 as Ut, a as Wt } from "../chunks/B5x8qFIl.js";
import { i as G } from "../chunks/dL3cPlRr.js";
import { p as Gt, _ as Kt } from "../chunks/D1l-liob.js";
import { a as y, t as r } from "../chunks/Dh-htLkM.js";
import "../chunks/DVZ4tiSM.js";
import { i as Yt } from "../chunks/Buf-J7-u.js";
let gl;
let __tla = (async () => {
  function ne(e, t) {
    return t;
  }
  function Jt(e, t, a) {
    for (var l = [], s = t.length, o, n = t.length, c = 0; c < s; c++) {
      let h = t[c];
      Ye(h, () => {
        if (o) {
          if (o.pending.delete(h), o.done.add(h), o.pending.size === 0) {
            var p = e.outrogroups;
            Se(Pe(o.done)), p.delete(o), p.size === 0 && (e.outrogroups = null);
          }
        } else n -= 1;
      }, false);
    }
    if (n === 0) {
      var d = l.length === 0 && a !== null;
      if (d) {
        var i = a, u = i.parentNode;
        It(u), u.append(i), e.items.clear();
      }
      Se(t, !d);
    } else o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
  }
  function Se(e, t = true) {
    for (var a = 0; a < e.length; a++) Et(e[a], t);
  }
  var je;
  function re(e, t, a, l, s, o = null) {
    var n = e, c = /* @__PURE__ */ new Map(), d = (t & Je) !== 0;
    if (d) {
      var i = e;
      n = te ? we(dt(i)) : i.appendChild(Be());
    }
    te && ft();
    var u = null, h = kt(() => {
      var b = a();
      return Ge(b) ? b : b == null ? [] : Pe(b);
    }), p, _ = true;
    function I() {
      g.fallback = u, Xt(g, p, n, t, l), u !== null && (p.length === 0 ? (u.f & le) === 0 ? Ke(u) : (u.f ^= le, be(u, null, n)) : Ye(u, () => {
        u = null;
      }));
    }
    var A = ct(() => {
      p = v(h);
      var b = p.length;
      let x = false;
      if (te) {
        var k = mt(n) === bt;
        k !== (b === 0) && (n = De(), we(n), Te(false), x = true);
      }
      for (var T = /* @__PURE__ */ new Set(), S = ae, E = ht(), M = 0; M < b; M += 1) {
        te && pe.nodeType === _t && pe.data === gt && (n = pe, x = true, Te(false));
        var q = p[M], O = l(q, M), R = _ ? null : c.get(O);
        R ? (R.v && Oe(R.v, q), R.i && Oe(R.i, M), E && S.unskip_effect(R.e)) : (R = Qt(c, _ ? n : je ?? (je = Be()), q, O, M, s, t, a), _ || (R.e.f |= le), c.set(O, R)), T.add(O);
      }
      if (b === 0 && o && !u && (_ ? u = Ae(() => o(n)) : (u = Ae(() => o(je ?? (je = Be()))), u.f |= le)), b > T.size && pt(), te && b > 0 && we(De()), !_) if (E) {
        for (const [D, F] of c) T.has(D) || S.skip_effect(F.e);
        S.oncommit(I), S.ondiscard(() => {
        });
      } else I();
      x && Te(true), v(h);
    }), g = {
      effect: A,
      items: c,
      outrogroups: null,
      fallback: u
    };
    _ = false, te && (n = pe);
  }
  function me(e) {
    for (; e !== null && (e.f & Tt) === 0; ) e = e.next;
    return e;
  }
  function Xt(e, t, a, l, s) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
    var o = (l & At) !== 0, n = t.length, c = e.items, d = me(e.effect.first), i, u = null, h, p = [], _ = [], I, A, g, b;
    if (o) for (b = 0; b < n; b += 1) I = t[b], A = s(I, b), g = c.get(A).e, (g.f & le) === 0 && ((_b = (_a2 = g.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
    for (b = 0; b < n; b += 1) {
      if (I = t[b], A = s(I, b), g = c.get(A).e, e.outrogroups !== null) for (const R of e.outrogroups) R.pending.delete(g), R.done.delete(g);
      if ((g.f & le) !== 0) if (g.f ^= le, g === d) be(g, null, a);
      else {
        var x = u ? u.next : d;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), se(e, u, g), se(e, g, x), be(g, x, a), u = g, p = [], _ = [], d = me(u.next);
        continue;
      }
      if ((g.f & Ie) !== 0 && (Ke(g), o && ((_d = (_c = g.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), g !== d) {
        if (i !== void 0 && i.has(g)) {
          if (p.length < _.length) {
            var k = _[0], T;
            u = k.prev;
            var S = p[0], E = p[p.length - 1];
            for (T = 0; T < p.length; T += 1) be(p[T], k, a);
            for (T = 0; T < _.length; T += 1) i.delete(_[T]);
            se(e, S.prev, E.next), se(e, u, S), se(e, E, k), d = k, u = E, b -= 1, p = [], _ = [];
          } else i.delete(g), be(g, d, a), se(e, g.prev, g.next), se(e, g, u === null ? e.effect.first : u.next), se(e, u, g), u = g;
          continue;
        }
        for (p = [], _ = []; d !== null && d !== g; ) (i ?? (i = /* @__PURE__ */ new Set())).add(d), _.push(d), d = me(d.next);
        if (d === null) continue;
      }
      (g.f & le) === 0 && p.push(g), u = g, d = me(g.next);
    }
    if (e.outrogroups !== null) {
      for (const R of e.outrogroups) R.pending.size === 0 && (Se(Pe(R.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(R));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (d !== null || i !== void 0) {
      var M = [];
      if (i !== void 0) for (g of i) (g.f & Ie) === 0 && M.push(g);
      for (; d !== null; ) (d.f & Ie) === 0 && d !== e.fallback && M.push(d), d = me(d.next);
      var q = M.length;
      if (q > 0) {
        var O = (l & Je) !== 0 && n === 0 ? a : null;
        if (o) {
          for (b = 0; b < q; b += 1) (_g = (_f = M[b].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
          for (b = 0; b < q; b += 1) (_i = (_h = M[b].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
        }
        Jt(e, M, O);
      }
    }
    o && Xe(() => {
      var _a3, _b2;
      if (h !== void 0) for (g of h) (_b2 = (_a3 = g.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
    });
  }
  function Qt(e, t, a, l, s, o, n, c) {
    var d = (n & yt) !== 0 ? (n & xt) === 0 ? Bt(a, false, false) : Fe(a) : null, i = (n & wt) !== 0 ? Fe(s) : null;
    return {
      v: d,
      i,
      e: Ae(() => (o(t, d ?? a, i ?? s, c), () => {
        e.delete(l);
      }))
    };
  }
  function be(e, t, a) {
    if (e.nodes) for (var l = e.nodes.start, s = e.nodes.end, o = t && (t.f & le) === 0 ? t.nodes.start : a; l !== null; ) {
      var n = Rt(l);
      if (o.before(l), l === s) return;
      l = n;
    }
  }
  function se(e, t, a) {
    t === null ? e.effect.first = a : t.next = a, a === null ? e.effect.last = t : a.prev = t;
  }
  const ze = [
    ...` 	
\r\f\xA0\v\uFEFF`
  ];
  function Zt(e, t, a) {
    var l = e == null ? "" : "" + e;
    if (a) {
      for (var s of Object.keys(a)) if (a[s]) l = l ? l + " " + s : s;
      else if (l.length) for (var o = s.length, n = 0; (n = l.indexOf(s, n)) >= 0; ) {
        var c = n + o;
        (n === 0 || ze.includes(l[n - 1])) && (c === l.length || ze.includes(l[c])) ? l = (n === 0 ? "" : l.substring(0, n)) + l.substring(c + 1) : n = c;
      }
    }
    return l === "" ? null : l;
  }
  function fe(e, t, a, l, s, o) {
    var n = e.__className;
    if (te || n !== a || n === void 0) {
      var c = Zt(a, l, o);
      (!te || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = a;
    } else if (o && s !== o) for (var d in o) {
      var i = !!o[d];
      (s == null || i !== !!s[d]) && e.classList.toggle(d, i);
    }
    return o;
  }
  function $e(e, t, a = false) {
    if (e.multiple) {
      if (t == null) return;
      if (!Ge(t)) return Mt();
      for (var l of e.options) l.selected = t.includes(_e(l));
      return;
    }
    for (l of e.options) {
      var s = _e(l);
      if (Lt(s, t)) {
        l.selected = true;
        return;
      }
    }
    (!a || t !== void 0) && (e.selectedIndex = -1);
  }
  function $t(e) {
    var t = new MutationObserver(() => {
      $e(e, e.__value);
    });
    t.observe(e, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "value"
      ]
    }), Pt(() => {
      t.disconnect();
    });
  }
  function He(e, t, a = t) {
    var l = /* @__PURE__ */ new WeakSet(), s = true;
    Qe(e, "change", (o) => {
      var n = o ? "[selected]" : ":checked", c;
      if (e.multiple) c = [].map.call(e.querySelectorAll(n), _e);
      else {
        var d = e.querySelector(n) ?? e.querySelector("option:not([disabled])");
        c = d && _e(d);
      }
      a(c), ae !== null && l.add(ae);
    }), St(() => {
      var o = t();
      if (e === document.activeElement) {
        var n = Ze ?? ae;
        if (l.has(n)) return;
      }
      if ($e(e, o, s), s && o === void 0) {
        var c = e.querySelector(":checked");
        c !== null && (o = _e(c), a(o));
      }
      e.__value = o, s = false;
    }), $t(e);
  }
  function _e(e) {
    return "__value" in e ? e.__value : e.value;
  }
  const ea = /* @__PURE__ */ Symbol("is custom element"), ta = /* @__PURE__ */ Symbol("is html"), aa = Ft ? "link" : "LINK";
  function oe(e) {
    if (te) {
      var t = false, a = () => {
        if (!t) {
          if (t = true, e.hasAttribute("value")) {
            var l = e.value;
            de(e, "value", null), e.value = l;
          }
          if (e.hasAttribute("checked")) {
            var s = e.checked;
            de(e, "checked", null), e.checked = s;
          }
        }
      };
      e.__on_r = a, Xe(a), Nt();
    }
  }
  function de(e, t, a, l) {
    var s = la(e);
    te && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === aa) || s[t] !== (s[t] = a) && (t === "loading" && (e[Dt] = a), a == null ? e.removeAttribute(t) : typeof a != "string" && na(e).includes(t) ? e[t] = a : e.setAttribute(t, a));
  }
  function la(e) {
    return e.__attributes ?? (e.__attributes = {
      [ea]: e.nodeName.includes("-"),
      [ta]: e.namespaceURI === Ct
    });
  }
  var Ve = /* @__PURE__ */ new Map();
  function na(e) {
    var t = e.getAttribute("is") || e.nodeName, a = Ve.get(t);
    if (a) return a;
    Ve.set(t, a = []);
    for (var l, s = e, o = Element.prototype; o !== s; ) {
      l = Ot(s);
      for (var n in l) l[n].set && a.push(n);
      s = qt(s);
    }
    return a;
  }
  function ue(e, t, a = t) {
    var l = /* @__PURE__ */ new WeakSet();
    Qe(e, "input", async (s) => {
      var o = s ? e.defaultValue : e.value;
      if (o = Ee(e) ? Re(o) : o, a(o), ae !== null && l.add(ae), await jt(), o !== (o = t())) {
        var n = e.selectionStart, c = e.selectionEnd, d = e.value.length;
        if (e.value = o ?? "", c !== null) {
          var i = e.value.length;
          n === c && c === d && i > d ? (e.selectionStart = i, e.selectionEnd = i) : (e.selectionStart = n, e.selectionEnd = Math.min(c, i));
        }
      }
    }), (te && e.defaultValue !== e.value || zt(t) == null && e.value) && (a(Ee(e) ? Re(e.value) : e.value), ae !== null && l.add(ae)), Ht(() => {
      var s = t();
      if (e === document.activeElement) {
        var o = Ze ?? ae;
        if (l.has(o)) return;
      }
      Ee(e) && s === Re(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
    });
  }
  function Ee(e) {
    var t = e.type;
    return t === "number" || t === "range";
  }
  function Re(e) {
    return e === "" ? null : +e;
  }
  var ra = P("<button> </button>"), ia = P('<nav class="tab-bar svelte-1wwzsr0"></nav>');
  function sa(e, t) {
    X(t, true);
    let a = Gt(t, "activeTab", 15, "structure");
    var l = ia();
    re(l, 21, () => t.tabs, ne, (s, o) => {
      var n = ra();
      let c;
      var d = m(n, true);
      f(n), N(() => {
        c = fe(n, 1, "tab svelte-1wwzsr0", null, c, {
          active: a() === v(o).id
        }), w(d, v(o).label);
      }), W("click", n, () => a(v(o).id)), L(s, n);
    }), f(l), L(e, l), Q();
  }
  ve([
    "click"
  ]);
  const Me = {
    quick: [
      {
        type: "round",
        smallBlind: 25,
        bigBlind: 50,
        ante: 0,
        duration: 10
      },
      {
        type: "round",
        smallBlind: 50,
        bigBlind: 100,
        ante: 0,
        duration: 10
      },
      {
        type: "break",
        duration: 5
      },
      {
        type: "round",
        smallBlind: 75,
        bigBlind: 150,
        ante: 0,
        duration: 10
      },
      {
        type: "round",
        smallBlind: 100,
        bigBlind: 200,
        ante: 25,
        duration: 10
      },
      {
        type: "break",
        duration: 5
      },
      {
        type: "round",
        smallBlind: 150,
        bigBlind: 300,
        ante: 25,
        duration: 10
      },
      {
        type: "round",
        smallBlind: 200,
        bigBlind: 400,
        ante: 50,
        duration: 10
      }
    ],
    standard: [
      {
        type: "round",
        smallBlind: 25,
        bigBlind: 50,
        ante: 0,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 50,
        bigBlind: 100,
        ante: 0,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 75,
        bigBlind: 150,
        ante: 0,
        duration: 20
      },
      {
        type: "break",
        duration: 10
      },
      {
        type: "round",
        smallBlind: 100,
        bigBlind: 200,
        ante: 25,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 150,
        bigBlind: 300,
        ante: 25,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 200,
        bigBlind: 400,
        ante: 50,
        duration: 20
      },
      {
        type: "break",
        duration: 10
      },
      {
        type: "round",
        smallBlind: 300,
        bigBlind: 600,
        ante: 75,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 400,
        bigBlind: 800,
        ante: 100,
        duration: 20
      },
      {
        type: "round",
        smallBlind: 500,
        bigBlind: 1e3,
        ante: 100,
        duration: 20
      }
    ],
    deepStack: [
      {
        type: "round",
        smallBlind: 25,
        bigBlind: 50,
        ante: 0,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 50,
        bigBlind: 100,
        ante: 0,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 75,
        bigBlind: 150,
        ante: 0,
        duration: 30
      },
      {
        type: "break",
        duration: 15
      },
      {
        type: "round",
        smallBlind: 100,
        bigBlind: 200,
        ante: 0,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 150,
        bigBlind: 300,
        ante: 25,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 200,
        bigBlind: 400,
        ante: 25,
        duration: 30
      },
      {
        type: "break",
        duration: 15
      },
      {
        type: "round",
        smallBlind: 300,
        bigBlind: 600,
        ante: 50,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 400,
        bigBlind: 800,
        ante: 75,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 500,
        bigBlind: 1e3,
        ante: 100,
        duration: 30
      },
      {
        type: "break",
        duration: 15
      },
      {
        type: "round",
        smallBlind: 600,
        bigBlind: 1200,
        ante: 100,
        duration: 30
      },
      {
        type: "round",
        smallBlind: 800,
        bigBlind: 1600,
        ante: 200,
        duration: 30
      }
    ]
  };
  function oa(e) {
    return Me[e] ? structuredClone(Me[e]) : null;
  }
  var ua = P('<button class="svelte-17xzady"> </button>'), va = P('<div class="presets svelte-17xzady"><span class="label svelte-17xzady"> </span> <!></div>');
  function ca(e, t) {
    X(t, false);
    const a = Object.keys(Me);
    function l(d) {
      const i = oa(d);
      i && (r.loadStructure(i), r.save());
    }
    Yt();
    var s = va(), o = m(s), n = m(o, true);
    f(o);
    var c = B(o, 2);
    re(c, 1, () => a, ne, (d, i) => {
      var u = ua(), h = m(u, true);
      f(u), N(() => w(h, v(i))), W("click", u, () => l(v(i))), L(d, u);
    }), f(s), N((d) => w(n, d), [
      () => y("structure.loadPreset")
    ]), L(e, s), Q();
  }
  ve([
    "click"
  ]);
  var da = P('<span class="level-num svelte-ap3gho"> </span> <span class="blinds svelte-ap3gho"> </span> <span class="ante svelte-ap3gho"> </span> <span class="duration svelte-ap3gho"> </span>', 1), fa = P('<span class="break-label svelte-ap3gho"> </span> <span class="duration svelte-ap3gho"> </span>', 1), ma = P('<div class="actions svelte-ap3gho"><button title="Move up" class="svelte-ap3gho">&uarr;</button> <button title="Move down" class="svelte-ap3gho">&darr;</button> <button class="remove svelte-ap3gho" title="Remove">&times;</button></div>'), ba = P("<div><!> <!></div>");
  function _a(e, t) {
    X(t, true);
    var a = ba();
    let l;
    var s = m(a);
    {
      var o = (i) => {
        var u = da(), h = ce(u), p = m(h);
        f(h);
        var _ = B(h, 2), I = m(_);
        f(_);
        var A = B(_, 2), g = m(A);
        f(A);
        var b = B(A, 2), x = m(b);
        f(b), N((k, T) => {
          w(p, `${k ?? ""} ${t.level.level ?? ""}`), w(I, `${t.level.smallBlind ?? ""}/${t.level.bigBlind ?? ""}`), w(g, `${T ?? ""}: ${t.level.ante ?? ""}`), w(x, `${t.level.duration ?? ""} min`);
        }, [
          () => y("structure.level"),
          () => y("structure.ante")
        ]), L(i, u);
      }, n = (i) => {
        var u = fa(), h = ce(u), p = m(h, true);
        f(h);
        var _ = B(h, 2), I = m(_);
        f(_), N((A) => {
          w(p, A), w(I, `${t.level.duration ?? ""} min`);
        }, [
          () => y("structure.break")
        ]), L(i, u);
      };
      G(s, (i) => {
        t.level.type === "round" ? i(o) : i(n, false);
      });
    }
    var c = B(s, 2);
    {
      var d = (i) => {
        var u = ma(), h = m(u), p = B(h, 2), _ = B(p, 2);
        f(u), N(() => {
          h.disabled = t.isFirst, p.disabled = t.isLast;
        }), W("click", h, () => t.onMoveUp(t.index)), W("click", p, () => t.onMoveDown(t.index)), W("click", _, () => t.onRemove(t.index)), L(i, u);
      };
      G(c, (i) => {
        t.disabled || i(d);
      });
    }
    f(a), N(() => l = fe(a, 1, "level-row svelte-ap3gho", null, l, {
      "is-break": t.level.type === "break"
    })), L(e, a), Q();
  }
  ve([
    "click"
  ]);
  var ga = P('<div class="add-controls svelte-q0tpu6"><fieldset class="svelte-q0tpu6"><legend class="svelte-q0tpu6"> </legend> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="0" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <button class="svelte-q0tpu6"> </button></fieldset> <fieldset class="svelte-q0tpu6"><legend class="svelte-q0tpu6"> </legend> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <button class="svelte-q0tpu6"> </button></fieldset></div>'), pa = P('<!> <div class="level-list svelte-q0tpu6"></div> <!>', 1);
  function ha(e, t) {
    X(t, true);
    let a = J(25), l = J(50), s = J(0), o = J(20), n = J(10);
    const c = H(() => r.status !== "setup");
    function d() {
      r.addRound({
        smallBlind: v(a),
        bigBlind: v(l),
        ante: v(s),
        duration: v(o)
      }), r.save();
    }
    function i() {
      r.addBreak(v(n)), r.save();
    }
    function u(k) {
      r.removeLevel(k), r.save();
    }
    function h(k) {
      r.moveLevelUp(k), r.save();
    }
    function p(k) {
      r.moveLevelDown(k), r.save();
    }
    var _ = pa(), I = ce(_);
    {
      var A = (k) => {
        ca(k, {});
      };
      G(I, (k) => {
        v(c) || k(A);
      });
    }
    var g = B(I, 2);
    re(g, 21, () => r.structure, ne, (k, T, S) => {
      {
        let E = H(() => S === r.structure.length - 1);
        _a(k, {
          get level() {
            return v(T);
          },
          index: S,
          onRemove: u,
          onMoveUp: h,
          onMoveDown: p,
          isFirst: S === 0,
          get isLast() {
            return v(E);
          },
          get disabled() {
            return v(c);
          }
        });
      }
    }), f(g);
    var b = B(g, 2);
    {
      var x = (k) => {
        var T = ga(), S = m(T), E = m(S), M = m(E, true);
        f(E);
        var q = B(E, 2), O = m(q), R = B(O);
        oe(R), f(q);
        var D = B(q, 2), F = m(D), U = B(F);
        oe(U), f(D);
        var Z = B(D, 2), Y = m(Z), ie = B(Y);
        oe(ie), f(Z);
        var j = B(Z, 2), V = m(j), C = B(V);
        oe(C), f(j);
        var K = B(j, 2), $ = m(K, true);
        f(K), f(S);
        var ge = B(S, 2), ke = m(ge), et = m(ke, true);
        f(ke);
        var ye = B(ke, 2), Ne = m(ye), Ce = B(Ne);
        oe(Ce), f(ye);
        var xe = B(ye, 2), tt = m(xe, true);
        f(xe), f(ge), f(T), N((ee, at, lt, nt, rt, it, st, ot, ut) => {
          w(M, ee), w(O, `${at ?? ""} `), w(F, `${lt ?? ""} `), w(Y, `${nt ?? ""} `), w(V, `${rt ?? ""} `), w($, it), w(et, st), w(Ne, `${ot ?? ""} `), w(tt, ut);
        }, [
          () => y("structure.addRound"),
          () => y("structure.small"),
          () => y("structure.big"),
          () => y("structure.ante"),
          () => y("structure.duration"),
          () => y("structure.addRound"),
          () => y("structure.addBreak"),
          () => y("structure.duration"),
          () => y("structure.addBreak")
        ]), ue(R, () => v(a), (ee) => z(a, ee)), ue(U, () => v(l), (ee) => z(l, ee)), ue(ie, () => v(s), (ee) => z(s, ee)), ue(C, () => v(o), (ee) => z(o, ee)), W("click", K, d), ue(Ce, () => v(n), (ee) => z(n, ee)), W("click", xe, i), L(k, T);
      };
      G(b, (k) => {
        v(c) || k(x);
      });
    }
    L(e, _), Q();
  }
  ve([
    "click"
  ]);
  var ka = P('<p class="error svelte-1n9lh6"> </p>'), ya = P('<span class="status svelte-1n9lh6"> </span>'), xa = P('<button class="remove svelte-1n9lh6">&times;</button>'), Ba = P('<li><span class="name svelte-1n9lh6"> </span> <!> <!></li>'), wa = P('<div class="players-tab"><div class="add-player svelte-1n9lh6"><input type="text" class="svelte-1n9lh6"/> <button class="svelte-1n9lh6"> </button></div> <!> <p class="count svelte-1n9lh6"> </p> <ul class="player-list svelte-1n9lh6"></ul></div>');
  function Ta(e, t) {
    X(t, true);
    let a = J(""), l = J(false);
    function s() {
      const x = v(a).trim();
      if (x) {
        if (r.players.some((k) => k.name.toLowerCase() === x.toLowerCase())) {
          z(l, true);
          return;
        }
        z(l, false), r.addPlayer(x), r.save(), z(a, "");
      }
    }
    function o(x) {
      r.removePlayer(x), r.save();
    }
    function n(x) {
      x.key === "Enter" && s();
    }
    const c = H(() => r.status === "setup");
    var d = wa(), i = m(d), u = m(i);
    oe(u);
    var h = B(u, 2), p = m(h, true);
    f(h), f(i);
    var _ = B(i, 2);
    {
      var I = (x) => {
        var k = ka(), T = m(k, true);
        f(k), N((S) => w(T, S), [
          () => y("players.duplicateName")
        ]), L(x, k);
      };
      G(_, (x) => {
        v(l) && x(I);
      });
    }
    var A = B(_, 2), g = m(A, true);
    f(A);
    var b = B(A, 2);
    re(b, 21, () => r.players, ne, (x, k) => {
      var T = Ba();
      let S;
      var E = m(T), M = m(E, true);
      f(E);
      var q = B(E, 2);
      {
        var O = (F) => {
          var U = ya(), Z = m(U, true);
          f(U), N((Y) => w(Z, Y), [
            () => y("players.eliminated")
          ]), L(F, U);
        };
        G(q, (F) => {
          v(k).status === "eliminated" && F(O);
        });
      }
      var R = B(q, 2);
      {
        var D = (F) => {
          var U = xa();
          W("click", U, () => o(v(k).id)), L(F, U);
        };
        G(R, (F) => {
          v(c) && F(D);
        });
      }
      f(T), N(() => {
        S = fe(T, 1, "svelte-1n9lh6", null, S, {
          eliminated: v(k).status === "eliminated"
        }), w(M, v(k).name);
      }), L(x, T);
    }), f(b), f(d), N((x, k, T) => {
      de(u, "placeholder", x), w(p, k), w(g, T);
    }, [
      () => y("players.placeholder"),
      () => y("players.add"),
      () => y("players.count", {
        total: r.players.length,
        active: r.activePlayers.length
      })
    ]), W("input", u, () => z(l, false)), W("keydown", u, n), ue(u, () => v(a), (x) => z(a, x)), W("click", h, s), L(e, d), Q();
  }
  ve([
    "input",
    "keydown",
    "click"
  ]);
  function Le(e) {
    const t = [
      ...e
    ];
    for (let a = t.length - 1; a > 0; a--) {
      const l = Math.floor(Math.random() * (a + 1));
      [t[a], t[l]] = [
        t[l],
        t[a]
      ];
    }
    return t;
  }
  function Ia(e, t) {
    const a = e.filter((n) => n.status === "active"), l = Le(a), s = Math.ceil(l.length / t), o = Array.from({
      length: s
    }, (n, c) => ({
      id: `t${c + 1}`,
      name: `Table ${c + 1}`,
      seats: t
    }));
    for (const n of e) n.tableId = null, n.seat = null;
    l.forEach((n, c) => {
      const d = c % s;
      n.tableId = o[d].id;
    });
    for (const n of o) {
      const c = l.filter((i) => i.tableId === n.id), d = Le(Array.from({
        length: t
      }, (i, u) => u + 1));
      c.forEach((i, u) => {
        i.seat = d[u];
      });
    }
    return {
      tables: o,
      players: e
    };
  }
  function Ea(e, t) {
    const a = e.filter((c) => c.status === "active"), l = t.filter((c) => a.some((d) => d.tableId === c.id)), s = [];
    for (const c of l) {
      const d = a.filter((i) => i.tableId === c.id);
      if (d.length <= 1 && l.length > 1) for (const i of d) {
        const h = l.filter((I) => I.id !== c.id).reduce((I, A) => {
          const g = a.filter((x) => x.tableId === I.id).length, b = a.filter((x) => x.tableId === A.id).length;
          return g <= b ? I : A;
        }), p = a.filter((I) => I.tableId === h.id).map((I) => I.seat), _ = Array.from({
          length: h.seats
        }, (I, A) => A + 1).find((I) => !p.includes(I));
        s.push({
          playerId: i.id,
          from: c.name,
          to: h.name
        }), i.tableId = h.id, i.seat = _;
      }
    }
    const o = t.filter((c) => a.some((d) => d.tableId === c.id));
    let n = false;
    for (; !n; ) {
      const c = o.map((u) => ({
        table: u,
        count: a.filter((h) => h.tableId === u.id).length
      })), d = c.reduce((u, h) => u.count >= h.count ? u : h), i = c.reduce((u, h) => u.count <= h.count ? u : h);
      if (d.count - i.count > 1) {
        const u = a.filter((I) => I.tableId === d.table.id), h = u[Math.floor(Math.random() * u.length)], p = a.filter((I) => I.tableId === i.table.id).map((I) => I.seat), _ = Array.from({
          length: i.table.seats
        }, (I, A) => A + 1).find((I) => !p.includes(I));
        s.push({
          playerId: h.id,
          from: d.table.name,
          to: i.table.name
        }), h.tableId = i.table.id, h.seat = _;
      } else n = true;
    }
    return {
      moves: s,
      tables: o
    };
  }
  function Ra(e, t, a, l = "Final Table") {
    var _a2;
    const s = e.filter((i) => i.status === "active");
    if (s.length > a) return null;
    const o = t.filter((i) => s.some((u) => u.tableId === i.id));
    if (o.length <= 1) return null;
    const n = o[0];
    n.name = l, n.seats = s.length;
    const c = [];
    for (const i of s) i.tableId !== n.id && (c.push({
      playerId: i.id,
      from: (_a2 = t.find((u) => u.id === i.tableId)) == null ? void 0 : _a2.name,
      to: l
    }), i.tableId = n.id);
    const d = Le(Array.from({
      length: n.seats
    }, (i, u) => u + 1));
    return s.forEach((i, u) => {
      i.seat = d[u];
    }), {
      finalTable: n,
      moves: c
    };
  }
  var Aa = P('<li class="svelte-1hud1it"> </li>'), Sa = P('<div class="table-view svelte-1hud1it"><h3 class="svelte-1hud1it"> </h3> <p class="count svelte-1hud1it"> </p> <ul class="svelte-1hud1it"></ul></div>');
  function Ma(e, t) {
    X(t, true);
    const a = H(() => t.players.filter((i) => i.tableId === t.table.id && i.status === "active").sort((i, u) => i.seat - u.seat));
    var l = Sa(), s = m(l), o = m(s, true);
    f(s);
    var n = B(s, 2), c = m(n);
    f(n);
    var d = B(n, 2);
    re(d, 21, () => v(a), ne, (i, u) => {
      var h = Aa(), p = m(h);
      f(h), N((_) => w(p, `${_ ?? ""} ${v(u).seat ?? ""}: ${v(u).name ?? ""}`), [
        () => y("tables.seat")
      ]), L(i, h);
    }), f(d), f(l), N((i) => {
      w(o, t.table.name), w(c, `${v(a).length ?? ""} / ${t.table.seats ?? ""} ${i ?? ""}`);
    }, [
      () => y("tables.seats")
    ]), L(e, l), Q();
  }
  var La = P('<p class="notification svelte-10fr8jr"> </p>'), Pa = P('<div class="tables-grid svelte-10fr8jr"></div>'), Na = P('<p class="empty svelte-10fr8jr"> </p>'), Ca = P('<div class="table-setup"><div class="settings svelte-10fr8jr"><label class="svelte-10fr8jr"> <input type="number" min="2" max="10" class="svelte-10fr8jr"/></label> <label class="svelte-10fr8jr"> <input type="number" min="2" max="20" class="svelte-10fr8jr"/> <span class="hint svelte-10fr8jr"> </span></label></div> <button class="assign-btn svelte-10fr8jr"> </button> <!> <!></div>');
  function qa(e, t) {
    X(t, true);
    let a = J("");
    const l = H(() => r.activePlayers.length >= 2 && r.status !== "running");
    function s() {
      const E = Ia(r.players, r.tableSize);
      r.tables = E.tables, r.save(), z(a, y("tables.assigned", {
        players: r.activePlayers.length,
        tables: E.tables.length
      }), true), setTimeout(() => z(a, ""), 3e3);
    }
    var o = Ca(), n = m(o), c = m(n), d = m(c), i = B(d);
    oe(i), f(c);
    var u = B(c, 2), h = m(u), p = B(h);
    oe(p);
    var _ = B(p, 2), I = m(_, true);
    f(_), f(u), f(n);
    var A = B(n, 2), g = m(A, true);
    f(A);
    var b = B(A, 2);
    {
      var x = (E) => {
        var M = La(), q = m(M, true);
        f(M), N(() => w(q, v(a))), L(E, M);
      };
      G(b, (E) => {
        v(a) && E(x);
      });
    }
    var k = B(b, 2);
    {
      var T = (E) => {
        var M = Pa();
        re(M, 21, () => r.tables, ne, (q, O) => {
          Ma(q, {
            get table() {
              return v(O);
            },
            get players() {
              return r.players;
            }
          });
        }), f(M), L(E, M);
      }, S = (E) => {
        var M = Na(), q = m(M, true);
        f(M), N((O) => w(q, O), [
          () => y("tables.empty")
        ]), L(E, M);
      };
      G(k, (E) => {
        r.tables.length > 0 ? E(T) : E(S, false);
      });
    }
    f(o), N((E, M, q, O) => {
      w(d, `${E ?? ""} `), w(h, `${M ?? ""} `), w(I, q), A.disabled = !v(l), w(g, O);
    }, [
      () => y("tables.maxPerTable"),
      () => y("tables.finalTableAt"),
      () => y("tables.players"),
      () => y("tables.assign")
    ]), ue(i, () => r.tableSize, (E) => r.tableSize = E), ue(p, () => r.finalTableThreshold, (E) => r.finalTableThreshold = E), W("click", A, s), L(e, o), Q();
  }
  ve([
    "click"
  ]);
  function Da(e = null) {
    let t = false, a = e;
    function l() {
      return a || (a = new (window.AudioContext || window.webkitAudioContext)()), a;
    }
    function s(o, n, c = "sine") {
      if (t) return;
      const d = l(), i = d.createOscillator(), u = d.createGain();
      i.type = c, i.frequency.setValueAtTime(o, d.currentTime), u.gain.setValueAtTime(0.3, d.currentTime), i.connect(u), u.connect(d.destination), i.start(), i.stop(d.currentTime + n);
    }
    return {
      get isMuted() {
        return t;
      },
      mute() {
        t = true;
      },
      unmute() {
        t = false;
      },
      toggleMute() {
        t = !t;
      },
      playRoundEnd() {
        s(880, 0.5);
      },
      playBreakEnd() {
        s(660, 0.5);
      },
      playWarning() {
        s(440, 0.3);
      }
    };
  }
  let he = null, Ue = false;
  async function Oa() {
    if (he) return he;
    if (Ue) return null;
    try {
      const e = await Kt(() => import("../chunks/DLv8qd0r.js"), [], import.meta.url);
      return await e.default(), he = e, he;
    } catch (e) {
      return console.warn("WASM ticker unavailable, using JS fallback:", e), Ue = true, null;
    }
  }
  function Fa(e, t, a, l, s) {
    const o = Date.now();
    let n = Math.floor((o - e) / 1e3), c = a - n, d = 0, i = false, u = a;
    const h = l.length;
    for (; c <= 0; ) {
      if (t >= h - 1) return {
        remaining: 0,
        time_remaining_at_start: 0,
        current_level_index: t,
        start_timestamp: e,
        finished: true,
        level_changed: true,
        play_audio: 0
      };
      const p = s[t];
      t++;
      const _ = l[t] * 60;
      c = _ + c, e = o - (_ - c) * 1e3, u = _, i = true, d = p ? 1 : 2;
    }
    return {
      remaining: c,
      time_remaining_at_start: u,
      current_level_index: t,
      start_timestamp: e,
      finished: false,
      level_changed: i,
      play_audio: d
    };
  }
  async function ja(e, t, a, l, s) {
    const o = await Oa();
    if (o) {
      const n = o.process_tick(e, t, a, new Int32Array(l), new Uint8Array(s.map((c) => c ? 1 : 0)));
      return {
        remaining: n.remaining,
        time_remaining_at_start: n.time_remaining_at_start,
        current_level_index: n.current_level_index,
        start_timestamp: n.start_timestamp,
        finished: n.finished,
        level_changed: n.level_changed,
        play_audio: n.play_audio
      };
    }
    return Fa(e, t, a, l, s);
  }
  var za = P('<span class="ante svelte-xbucwj"> </span>'), Ha = P('<span class="blinds svelte-xbucwj"> </span> <!>', 1), Va = P('<span class="break-text svelte-xbucwj"> </span>'), Ua = P('<div class="level-info svelte-xbucwj"><span class="label svelte-xbucwj"> </span> <!></div>');
  function We(e, t) {
    X(t, true);
    var a = vt(), l = ce(a);
    {
      var s = (o) => {
        var n = Ua(), c = m(n), d = m(c, true);
        f(c);
        var i = B(c, 2);
        {
          var u = (p) => {
            var _ = Ha(), I = ce(_), A = m(I);
            f(I);
            var g = B(I, 2);
            {
              var b = (x) => {
                var k = za(), T = m(k);
                f(k), N((S) => w(T, `${S ?? ""}: ${t.level.ante ?? ""}`), [
                  () => y("structure.ante")
                ]), L(x, k);
              };
              G(g, (x) => {
                t.level.ante > 0 && x(b);
              });
            }
            N((x) => w(A, `${x ?? ""}: ${t.level.smallBlind ?? ""}/${t.level.bigBlind ?? ""}`), [
              () => y("clock.blinds")
            ]), L(p, _);
          }, h = (p) => {
            var _ = Va(), I = m(_, true);
            f(_), N((A) => w(I, A), [
              () => y("structure.break")
            ]), L(p, _);
          };
          G(i, (p) => {
            t.level.type === "round" ? p(u) : p(h, false);
          });
        }
        f(n), N(() => w(d, t.label)), L(o, n);
      };
      G(l, (o) => {
        t.level && o(s);
      });
    }
    L(e, a), Q();
  }
  var Wa = P('<div class="controls svelte-1bc6657"><button class="svelte-1bc6657"> </button> <button class="play-pause svelte-1bc6657"> </button> <button class="svelte-1bc6657"> </button> <button> </button></div>');
  function Ga(e, t) {
    X(t, true);
    var a = Wa(), l = m(a), s = m(l);
    f(l);
    var o = B(l, 2), n = m(o, true);
    f(o);
    var c = B(o, 2), d = m(c);
    f(c);
    var i = B(c, 2);
    let u;
    var h = m(i, true);
    f(i), f(a), N((p, _, I, A, g, b, x) => {
      l.disabled = !t.canPrev, de(l, "title", p), w(s, `\xAB ${_ ?? ""}`), w(n, I), c.disabled = !t.canNext, de(c, "title", A), w(d, `${g ?? ""} \xBB`), u = fe(i, 1, "mute svelte-1bc6657", null, u, {
        muted: t.isMuted
      }), de(i, "title", b), w(h, x);
    }, [
      () => y("clock.prevLevel"),
      () => y("clock.prev"),
      () => t.isRunning ? y("clock.pause") : y("clock.play"),
      () => y("clock.nextLevel"),
      () => y("clock.next"),
      () => t.isMuted ? y("clock.unmute") : y("clock.mute"),
      () => t.isMuted ? y("clock.unmute") : y("clock.mute")
    ]), W("click", l, function(...p) {
      var _a2;
      (_a2 = t.onPrev) == null ? void 0 : _a2.apply(this, p);
    }), W("click", o, function(...p) {
      var _a2;
      (_a2 = t.onToggle) == null ? void 0 : _a2.apply(this, p);
    }), W("click", c, function(...p) {
      var _a2;
      (_a2 = t.onNext) == null ? void 0 : _a2.apply(this, p);
    }), W("click", i, function(...p) {
      var _a2;
      (_a2 = t.onToggleMute) == null ? void 0 : _a2.apply(this, p);
    }), L(e, a), Q();
  }
  ve([
    "click"
  ]);
  var Ka = P('<p class="empty svelte-1hmdg4r"> </p>'), Ya = P('<div class="break-banner svelte-1hmdg4r"> </div>'), Ja = P('<!> <!> <div class="timer svelte-1hmdg4r"> </div> <!> <!>', 1), Xa = P("<div><!></div>");
  function Qa(e, t) {
    X(t, true);
    let a = J(null), l = null, s = false;
    Vt(() => {
      z(a, Da(), true), document.addEventListener("visibilitychange", o), r.clock.isRunning && (s = r.clock.timeRemaining <= 60, l = setInterval(b, 500));
    }), Ut(() => {
      l && clearInterval(l), document.removeEventListener("visibilitychange", o);
    });
    function o() {
      !document.hidden && r.clock.isRunning && b();
    }
    const n = H(() => r.structure[r.clock.currentLevelIndex]), c = H(() => r.structure[r.clock.currentLevelIndex + 1]), d = H(() => r.clock.currentLevelIndex > 0), i = H(() => r.clock.currentLevelIndex < r.structure.length - 1), u = H(() => {
      var _a2;
      return ((_a2 = v(n)) == null ? void 0 : _a2.type) === "break";
    }), h = H(() => Math.floor(r.clock.timeRemaining / 60)), p = H(() => r.clock.timeRemaining % 60), _ = H(() => `${String(v(h)).padStart(2, "0")}:${String(v(p)).padStart(2, "0")}`);
    function I() {
      r.clock.startTimestamp = Date.now(), r.clock.timeRemainingAtStart = r.clock.timeRemaining, s = r.clock.timeRemaining <= 60, l = setInterval(b, 500);
    }
    function A() {
      clearInterval(l), l = null;
    }
    function g() {
      r.structure.length !== 0 && (r.clock.isRunning ? (r.clock.isRunning = false, A()) : (r.status === "setup" && (r.status = "running", r.clock.timeRemaining = v(n).duration * 60), r.clock.isRunning = true, I()), r.save());
    }
    async function b() {
      const R = await ja(r.clock.startTimestamp, r.clock.currentLevelIndex, r.clock.timeRemainingAtStart, r.structure.map((D) => D.duration), r.structure.map((D) => D.type === "break"));
      if (R.finished) {
        r.clock.timeRemaining = 0, r.clock.isRunning = false, A(), r.status = "finished", r.save();
        return;
      }
      R.level_changed && (r.clock.currentLevelIndex = R.current_level_index, r.clock.startTimestamp = R.start_timestamp, r.clock.timeRemainingAtStart = R.time_remaining_at_start, s = R.remaining <= 60, v(a) && (R.play_audio === 1 ? v(a).playBreakEnd() : R.play_audio === 2 && v(a).playRoundEnd()), r.save()), !s && R.remaining <= 60 && v(a) && (v(a).playWarning(), s = true), r.clock.timeRemaining = R.remaining;
    }
    function x() {
      var _a2;
      const R = r.clock.currentLevelIndex;
      if (R >= r.structure.length - 1) {
        r.clock.isRunning = false, A(), r.status = "finished", r.save();
        return;
      }
      const D = ((_a2 = r.structure[R]) == null ? void 0 : _a2.type) === "break";
      r.clock.currentLevelIndex++;
      const F = r.structure[r.clock.currentLevelIndex];
      r.clock.timeRemaining = F.duration * 60, r.clock.isRunning && (r.clock.startTimestamp = Date.now(), r.clock.timeRemainingAtStart = r.clock.timeRemaining, s = false), v(a) && (D ? v(a).playBreakEnd() : v(a).playRoundEnd()), r.save();
    }
    function k() {
      if (!v(d)) return;
      r.clock.currentLevelIndex--;
      const R = r.structure[r.clock.currentLevelIndex];
      r.clock.timeRemaining = R.duration * 60, r.clock.isRunning && (r.clock.startTimestamp = Date.now(), r.clock.timeRemainingAtStart = r.clock.timeRemaining, s = false), r.save();
    }
    function T() {
      v(i) && x();
    }
    var S = Xa();
    let E;
    var M = m(S);
    {
      var q = (R) => {
        var D = Ka(), F = m(D, true);
        f(D), N((U) => w(F, U), [
          () => y("clock.setupFirst")
        ]), L(R, D);
      }, O = (R) => {
        var D = Ja(), F = ce(D);
        {
          var U = (C) => {
            var K = Ya(), $ = m(K, true);
            f(K), N((ge) => w($, ge), [
              () => y("clock.break")
            ]), L(C, K);
          };
          G(F, (C) => {
            v(u) && C(U);
          });
        }
        var Z = B(F, 2);
        {
          let C = H(() => y("clock.current"));
          We(Z, {
            get level() {
              return v(n);
            },
            get label() {
              return v(C);
            }
          });
        }
        var Y = B(Z, 2), ie = m(Y, true);
        f(Y);
        var j = B(Y, 2);
        {
          let C = H(() => y("clock.next"));
          We(j, {
            get level() {
              return v(c);
            },
            get label() {
              return v(C);
            }
          });
        }
        var V = B(j, 2);
        {
          let C = H(() => {
            var _a2;
            return ((_a2 = v(a)) == null ? void 0 : _a2.isMuted) ?? false;
          });
          Ga(V, {
            get isRunning() {
              return r.clock.isRunning;
            },
            onToggle: g,
            onPrev: k,
            onNext: T,
            get canPrev() {
              return v(d);
            },
            get canNext() {
              return v(i);
            },
            get isMuted() {
              return v(C);
            },
            onToggleMute: () => {
              var _a2;
              return (_a2 = v(a)) == null ? void 0 : _a2.toggleMute();
            }
          });
        }
        N(() => w(ie, v(_))), L(R, D);
      };
      G(M, (R) => {
        r.structure.length === 0 ? R(q) : R(O, false);
      });
    }
    f(S), N(() => E = fe(S, 1, "clock-tab svelte-1hmdg4r", null, E, {
      "is-break": v(u),
      "is-paused": !r.clock.isRunning && r.status === "running"
    })), L(e, S), Q();
  }
  var Za = P('<tr><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"><!></td></tr>'), $a = P('<div class="log"><h3 class="svelte-e9v8ke"> </h3> <table class="svelte-e9v8ke"><thead><tr><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th></tr></thead><tbody></tbody></table></div>');
  function el(e, t) {
    X(t, true);
    const a = H(() => r.standings);
    function l(k) {
      var _a2;
      return ((_a2 = r.players.find((T) => T.id === k)) == null ? void 0 : _a2.name) ?? "?";
    }
    var s = $a(), o = m(s), n = m(o, true);
    f(o);
    var c = B(o, 2), d = m(c), i = m(d), u = m(i), h = m(u, true);
    f(u);
    var p = B(u), _ = m(p, true);
    f(p);
    var I = B(p), A = m(I, true);
    f(I);
    var g = B(I), b = m(g, true);
    f(g), f(i), f(d);
    var x = B(d);
    re(x, 21, () => v(a), ne, (k, T) => {
      var S = Za();
      let E;
      var M = m(S), q = m(M, true);
      f(M);
      var O = B(M), R = m(O, true);
      f(O);
      var D = B(O), F = m(D, true);
      f(D);
      var U = B(D), Z = m(U);
      {
        var Y = (j) => {
          const V = H(() => r.eliminations.find((K) => K.playerId === v(T).id));
          var C = qe();
          N((K) => w(C, K), [
            () => {
              var _a2;
              return ((_a2 = v(V)) == null ? void 0 : _a2.eliminatedBy) ? l(v(V).eliminatedBy) : "-";
            }
          ]), L(j, C);
        }, ie = (j) => {
          var V = qe("-");
          L(j, V);
        };
        G(Z, (j) => {
          v(T).status === "eliminated" ? j(Y) : j(ie, false);
        });
      }
      f(U), f(S), N((j) => {
        E = fe(S, 1, "svelte-e9v8ke", null, E, {
          eliminated: v(T).status === "eliminated"
        }), w(q, v(T).position), w(R, v(T).name), w(F, j);
      }, [
        () => v(T).status === "active" ? y("elim.playing") : y("elim.out")
      ]), L(k, S);
    }), f(x), f(c), f(s), N((k, T, S, E, M) => {
      w(n, k), w(h, T), w(_, S), w(A, E), w(b, M);
    }, [
      () => y("elim.standings"),
      () => y("elim.position"),
      () => y("elim.player"),
      () => y("elim.status"),
      () => y("elim.eliminatedBy")
    ]), L(e, s), Q();
  }
  var tl = P("<option> </option>"), al = P("<option> </option>"), ll = P('<div class="form svelte-2nklbm"><label class="svelte-2nklbm"> <select class="svelte-2nklbm"><option> </option><!></select></label> <label class="svelte-2nklbm"> <select class="svelte-2nklbm"><option> </option><!></select></label> <button class="svelte-2nklbm"> </button></div>'), nl = P('<p class="winner svelte-2nklbm"> </p>'), rl = P('<p class="empty svelte-2nklbm"> </p>'), il = P('<div class="notification svelte-2nklbm"><p class="svelte-2nklbm"> </p> <button class="ok svelte-2nklbm"> </button></div>'), sl = P('<div class="elimination-panel"><!> <!> <!></div>');
  function ol(e, t) {
    X(t, true);
    let a = J(""), l = J(""), s = J("");
    const o = H(() => r.activePlayers), n = H(() => {
      var _a2;
      return ((_a2 = v(o).find((b) => b.id === v(a))) == null ? void 0 : _a2.tableId) ?? null;
    }), c = H(() => v(o).filter((b) => b.id !== v(a) && (v(n) === null || b.tableId === v(n))));
    Wt(() => {
      v(l) && !v(c).some((b) => b.id === v(l)) && z(l, "");
    });
    function d() {
      if (!v(a) || !v(l)) return;
      r.eliminatePlayer(v(a), v(l));
      const b = Ra(r.players, r.tables, r.finalTableThreshold, y("tables.finalTable"));
      if (b) z(s, y("elim.finalTable", {
        count: b.moves.length
      }), true);
      else {
        const { moves: x } = Ea(r.players, r.tables);
        x.length > 0 ? z(s, x.map((k) => {
          var _a2;
          return y("elim.moved", {
            name: (_a2 = r.players.find((T) => T.id === k.playerId)) == null ? void 0 : _a2.name,
            from: k.from,
            to: k.to
          });
        }).join(". "), true) : z(s, "");
      }
      r.save(), z(a, ""), z(l, ""), r.activePlayers.length === 1 && (z(s, y("elim.tournamentOver", {
        name: r.activePlayers[0].name
      }), true), r.status = "finished", r.save());
    }
    var i = sl(), u = m(i);
    {
      var h = (b) => {
        var x = ll(), k = m(x), T = m(k), S = B(T), E = m(S), M = m(E, true);
        f(E), E.value = E.__value = "";
        var q = B(E);
        re(q, 17, () => v(o), ne, (j, V) => {
          var C = tl(), K = m(C, true);
          f(C);
          var $ = {};
          N(() => {
            w(K, v(V).name), $ !== ($ = v(V).id) && (C.value = (C.__value = v(V).id) ?? "");
          }), L(j, C);
        }), f(S), f(k);
        var O = B(k, 2), R = m(O), D = B(R), F = m(D), U = m(F, true);
        f(F), F.value = F.__value = "";
        var Z = B(F);
        re(Z, 17, () => v(c), ne, (j, V) => {
          var C = al(), K = m(C, true);
          f(C);
          var $ = {};
          N(() => {
            w(K, v(V).name), $ !== ($ = v(V).id) && (C.value = (C.__value = v(V).id) ?? "");
          }), L(j, C);
        }), f(D), f(O);
        var Y = B(O, 2), ie = m(Y, true);
        f(Y), f(x), N((j, V, C, K, $) => {
          w(T, `${j ?? ""} `), w(M, V), w(R, `${C ?? ""} `), w(U, K), Y.disabled = !v(a) || !v(l), w(ie, $);
        }, [
          () => y("elim.eliminated"),
          () => y("elim.selectPlayer"),
          () => y("elim.by"),
          () => y("elim.selectEliminator"),
          () => y("elim.eliminate")
        ]), He(S, () => v(a), (j) => z(a, j)), He(D, () => v(l), (j) => z(l, j)), W("click", Y, d), L(b, x);
      }, p = (b) => {
        var x = nl(), k = m(x, true);
        f(x), N((T) => w(k, T), [
          () => y("elim.winner", {
            name: v(o)[0].name
          })
        ]), L(b, x);
      }, _ = (b) => {
        var x = rl(), k = m(x, true);
        f(x), N((T) => w(k, T), [
          () => y("elim.noActive")
        ]), L(b, x);
      };
      G(u, (b) => {
        v(o).length > 1 ? b(h) : v(o).length === 1 ? b(p, 1) : b(_, false);
      });
    }
    var I = B(u, 2);
    {
      var A = (b) => {
        var x = il(), k = m(x), T = m(k, true);
        f(k);
        var S = B(k, 2), E = m(S, true);
        f(S), f(x), N((M) => {
          w(T, v(s)), w(E, M);
        }, [
          () => y("elim.ok")
        ]), W("click", S, () => z(s, "")), L(b, x);
      };
      G(I, (b) => {
        v(s) && b(A);
      });
    }
    var g = B(I, 2);
    el(g, {}), f(i), L(e, i), Q();
  }
  ve([
    "click"
  ]);
  var ul = P('<!> <div class="tab-content svelte-1uha8ag"><!></div>', 1);
  gl = function(e, t) {
    X(t, true);
    const a = H(() => [
      {
        id: "structure",
        label: y("tabs.structure")
      },
      {
        id: "players",
        label: y("tabs.players")
      },
      {
        id: "tables",
        label: y("tabs.tables")
      },
      {
        id: "clock",
        label: y("tabs.clock")
      },
      {
        id: "eliminations",
        label: y("tabs.eliminations")
      }
    ]);
    let l = J("structure");
    var s = ul(), o = ce(s);
    sa(o, {
      get tabs() {
        return v(a);
      },
      get activeTab() {
        return v(l);
      },
      set activeTab(_) {
        z(l, _, true);
      }
    });
    var n = B(o, 2), c = m(n);
    {
      var d = (_) => {
        ha(_, {});
      }, i = (_) => {
        Ta(_, {});
      }, u = (_) => {
        qa(_, {});
      }, h = (_) => {
        Qa(_, {});
      }, p = (_) => {
        ol(_, {});
      };
      G(c, (_) => {
        v(l) === "structure" ? _(d) : v(l) === "players" ? _(i, 1) : v(l) === "tables" ? _(u, 2) : v(l) === "clock" ? _(h, 3) : v(l) === "eliminations" && _(p, 4);
      });
    }
    f(n), L(e, s), Q();
  };
})();
export {
  __tla,
  gl as component
};
