import { d as ue, a as S, f as P, s as x, c as K, e as vt, t as qe } from "../chunks/CwGMrjUI.js";
import { l as Be, t as ct, n as ee, z as we, aw as dt, v as ft, g as c, w as mt, x as bt, y as De, A as Te, o as ge, aE as _t, aL as gt, ap as Oe, i as ae, aN as le, m as Ae, aO as pt, s as ht, T as kt, aP as Ge, aK as Pe, aQ as yt, aR as xt, a7 as Bt, aa as Fe, aS as wt, j as Ke, p as Ye, aT as Ie, aU as Tt, aI as It, k as Et, aF as Rt, aV as Je, a4 as Xe, aW as At, aX as Qe, a2 as St, aY as Ze, aZ as Mt, a_ as Lt, a$ as Pt, b0 as Nt, b1 as Ct, b2 as qt, b3 as Dt, b4 as Ot, b5 as Ft, a8 as jt, b as zt, a3 as Ht, B as J, F as X, I as m, G as b, D as N, J as k, C as ve, a1 as z, _ as Q, N as H, a0 as Vt, b6 as Ut } from "../chunks/B5x8qFIl.js";
import { i as W } from "../chunks/dL3cPlRr.js";
import { p as Wt, _ as Gt } from "../chunks/D1l-liob.js";
import { a as y, t as n } from "../chunks/DwcD5tIa.js";
import "../chunks/DVZ4tiSM.js";
import { i as Kt } from "../chunks/Buf-J7-u.js";
let bl;
let __tla = (async () => {
  function ne(e, t) {
    return t;
  }
  function Yt(e, t, a) {
    for (var l = [], o = t.length, r, i = t.length, v = 0; v < o; v++) {
      let h = t[v];
      Ye(h, () => {
        if (r) {
          if (r.pending.delete(h), r.done.add(h), r.pending.size === 0) {
            var p = e.outrogroups;
            Se(Pe(r.done)), p.delete(r), p.size === 0 && (e.outrogroups = null);
          }
        } else i -= 1;
      }, false);
    }
    if (i === 0) {
      var s = l.length === 0 && a !== null;
      if (s) {
        var u = a, d = u.parentNode;
        It(d), d.append(u), e.items.clear();
      }
      Se(t, !s);
    } else r = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(r);
  }
  function Se(e, t = true) {
    for (var a = 0; a < e.length; a++) Et(e[a], t);
  }
  var je;
  function re(e, t, a, l, o, r = null) {
    var i = e, v = /* @__PURE__ */ new Map(), s = (t & Je) !== 0;
    if (s) {
      var u = e;
      i = ee ? we(dt(u)) : u.appendChild(Be());
    }
    ee && ft();
    var d = null, h = kt(() => {
      var g = a();
      return Ge(g) ? g : g == null ? [] : Pe(g);
    }), p, _ = true;
    function B() {
      f.fallback = d, Jt(f, p, i, t, l), d !== null && (p.length === 0 ? (d.f & le) === 0 ? Ke(d) : (d.f ^= le, me(d, null, i)) : Ye(d, () => {
        d = null;
      }));
    }
    var T = ct(() => {
      p = c(h);
      var g = p.length;
      let E = false;
      if (ee) {
        var I = mt(i) === bt;
        I !== (g === 0) && (i = De(), we(i), Te(false), E = true);
      }
      for (var A = /* @__PURE__ */ new Set(), L = ae, R = ht(), M = 0; M < g; M += 1) {
        ee && ge.nodeType === _t && ge.data === gt && (i = ge, E = true, Te(false));
        var D = p[M], C = l(D, M), w = _ ? null : v.get(C);
        w ? (w.v && Oe(w.v, D), w.i && Oe(w.i, M), R && L.unskip_effect(w.e)) : (w = Xt(v, _ ? i : je ?? (je = Be()), D, C, M, o, t, a), _ || (w.e.f |= le), v.set(C, w)), A.add(C);
      }
      if (g === 0 && r && !d && (_ ? d = Ae(() => r(i)) : (d = Ae(() => r(je ?? (je = Be()))), d.f |= le)), g > A.size && pt(), ee && g > 0 && we(De()), !_) if (R) {
        for (const [q, U] of v) A.has(q) || L.skip_effect(U.e);
        L.oncommit(B), L.ondiscard(() => {
        });
      } else B();
      E && Te(true), c(h);
    }), f = {
      effect: T,
      items: v,
      outrogroups: null,
      fallback: d
    };
    _ = false, ee && (i = ge);
  }
  function fe(e) {
    for (; e !== null && (e.f & Tt) === 0; ) e = e.next;
    return e;
  }
  function Jt(e, t, a, l, o) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
    var r = (l & At) !== 0, i = t.length, v = e.items, s = fe(e.effect.first), u, d = null, h, p = [], _ = [], B, T, f, g;
    if (r) for (g = 0; g < i; g += 1) B = t[g], T = o(B, g), f = v.get(T).e, (f.f & le) === 0 && ((_b = (_a2 = f.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(f));
    for (g = 0; g < i; g += 1) {
      if (B = t[g], T = o(B, g), f = v.get(T).e, e.outrogroups !== null) for (const w of e.outrogroups) w.pending.delete(f), w.done.delete(f);
      if ((f.f & le) !== 0) if (f.f ^= le, f === s) me(f, null, a);
      else {
        var E = d ? d.next : s;
        f === e.effect.last && (e.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), ie(e, d, f), ie(e, f, E), me(f, E, a), d = f, p = [], _ = [], s = fe(d.next);
        continue;
      }
      if ((f.f & Ie) !== 0 && (Ke(f), r && ((_d = (_c = f.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(f))), f !== s) {
        if (u !== void 0 && u.has(f)) {
          if (p.length < _.length) {
            var I = _[0], A;
            d = I.prev;
            var L = p[0], R = p[p.length - 1];
            for (A = 0; A < p.length; A += 1) me(p[A], I, a);
            for (A = 0; A < _.length; A += 1) u.delete(_[A]);
            ie(e, L.prev, R.next), ie(e, d, L), ie(e, R, I), s = I, d = R, g -= 1, p = [], _ = [];
          } else u.delete(f), me(f, s, a), ie(e, f.prev, f.next), ie(e, f, d === null ? e.effect.first : d.next), ie(e, d, f), d = f;
          continue;
        }
        for (p = [], _ = []; s !== null && s !== f; ) (u ?? (u = /* @__PURE__ */ new Set())).add(s), _.push(s), s = fe(s.next);
        if (s === null) continue;
      }
      (f.f & le) === 0 && p.push(f), d = f, s = fe(f.next);
    }
    if (e.outrogroups !== null) {
      for (const w of e.outrogroups) w.pending.size === 0 && (Se(Pe(w.done)), (_e = e.outrogroups) == null ? void 0 : _e.delete(w));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (s !== null || u !== void 0) {
      var M = [];
      if (u !== void 0) for (f of u) (f.f & Ie) === 0 && M.push(f);
      for (; s !== null; ) (s.f & Ie) === 0 && s !== e.fallback && M.push(s), s = fe(s.next);
      var D = M.length;
      if (D > 0) {
        var C = (l & Je) !== 0 && i === 0 ? a : null;
        if (r) {
          for (g = 0; g < D; g += 1) (_g = (_f = M[g].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
          for (g = 0; g < D; g += 1) (_i = (_h = M[g].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
        }
        Yt(e, M, C);
      }
    }
    r && Xe(() => {
      var _a3, _b2;
      if (h !== void 0) for (f of h) (_b2 = (_a3 = f.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
    });
  }
  function Xt(e, t, a, l, o, r, i, v) {
    var s = (i & yt) !== 0 ? (i & xt) === 0 ? Bt(a, false, false) : Fe(a) : null, u = (i & wt) !== 0 ? Fe(o) : null;
    return {
      v: s,
      i: u,
      e: Ae(() => (r(t, s ?? a, u ?? o, v), () => {
        e.delete(l);
      }))
    };
  }
  function me(e, t, a) {
    if (e.nodes) for (var l = e.nodes.start, o = e.nodes.end, r = t && (t.f & le) === 0 ? t.nodes.start : a; l !== null; ) {
      var i = Rt(l);
      if (r.before(l), l === o) return;
      l = i;
    }
  }
  function ie(e, t, a) {
    t === null ? e.effect.first = a : t.next = a, a === null ? e.effect.last = t : a.prev = t;
  }
  const ze = [
    ...` 	
\r\f\xA0\v\uFEFF`
  ];
  function Qt(e, t, a) {
    var l = e == null ? "" : "" + e;
    if (a) {
      for (var o of Object.keys(a)) if (a[o]) l = l ? l + " " + o : o;
      else if (l.length) for (var r = o.length, i = 0; (i = l.indexOf(o, i)) >= 0; ) {
        var v = i + r;
        (i === 0 || ze.includes(l[i - 1])) && (v === l.length || ze.includes(l[v])) ? l = (i === 0 ? "" : l.substring(0, i)) + l.substring(v + 1) : i = v;
      }
    }
    return l === "" ? null : l;
  }
  function de(e, t, a, l, o, r) {
    var i = e.__className;
    if (ee || i !== a || i === void 0) {
      var v = Qt(a, l, r);
      (!ee || v !== e.getAttribute("class")) && (v == null ? e.removeAttribute("class") : e.className = v), e.__className = a;
    } else if (r && o !== r) for (var s in r) {
      var u = !!r[s];
      (o == null || u !== !!o[s]) && e.classList.toggle(s, u);
    }
    return r;
  }
  function $e(e, t, a = false) {
    if (e.multiple) {
      if (t == null) return;
      if (!Ge(t)) return Mt();
      for (var l of e.options) l.selected = t.includes(be(l));
      return;
    }
    for (l of e.options) {
      var o = be(l);
      if (Lt(o, t)) {
        l.selected = true;
        return;
      }
    }
    (!a || t !== void 0) && (e.selectedIndex = -1);
  }
  function Zt(e) {
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
    var l = /* @__PURE__ */ new WeakSet(), o = true;
    Qe(e, "change", (r) => {
      var i = r ? "[selected]" : ":checked", v;
      if (e.multiple) v = [].map.call(e.querySelectorAll(i), be);
      else {
        var s = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
        v = s && be(s);
      }
      a(v), ae !== null && l.add(ae);
    }), St(() => {
      var r = t();
      if (e === document.activeElement) {
        var i = Ze ?? ae;
        if (l.has(i)) return;
      }
      if ($e(e, r, o), o && r === void 0) {
        var v = e.querySelector(":checked");
        v !== null && (r = be(v), a(r));
      }
      e.__value = r, o = false;
    }), Zt(e);
  }
  function be(e) {
    return "__value" in e ? e.__value : e.value;
  }
  const $t = /* @__PURE__ */ Symbol("is custom element"), ea = /* @__PURE__ */ Symbol("is html"), ta = Ft ? "link" : "LINK";
  function se(e) {
    if (ee) {
      var t = false, a = () => {
        if (!t) {
          if (t = true, e.hasAttribute("value")) {
            var l = e.value;
            ce(e, "value", null), e.value = l;
          }
          if (e.hasAttribute("checked")) {
            var o = e.checked;
            ce(e, "checked", null), e.checked = o;
          }
        }
      };
      e.__on_r = a, Xe(a), Nt();
    }
  }
  function ce(e, t, a, l) {
    var o = aa(e);
    ee && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ta) || o[t] !== (o[t] = a) && (t === "loading" && (e[Dt] = a), a == null ? e.removeAttribute(t) : typeof a != "string" && la(e).includes(t) ? e[t] = a : e.setAttribute(t, a));
  }
  function aa(e) {
    return e.__attributes ?? (e.__attributes = {
      [$t]: e.nodeName.includes("-"),
      [ea]: e.namespaceURI === Ct
    });
  }
  var Ve = /* @__PURE__ */ new Map();
  function la(e) {
    var t = e.getAttribute("is") || e.nodeName, a = Ve.get(t);
    if (a) return a;
    Ve.set(t, a = []);
    for (var l, o = e, r = Element.prototype; r !== o; ) {
      l = Ot(o);
      for (var i in l) l[i].set && a.push(i);
      o = qt(o);
    }
    return a;
  }
  function oe(e, t, a = t) {
    var l = /* @__PURE__ */ new WeakSet();
    Qe(e, "input", async (o) => {
      var r = o ? e.defaultValue : e.value;
      if (r = Ee(e) ? Re(r) : r, a(r), ae !== null && l.add(ae), await jt(), r !== (r = t())) {
        var i = e.selectionStart, v = e.selectionEnd, s = e.value.length;
        if (e.value = r ?? "", v !== null) {
          var u = e.value.length;
          i === v && v === s && u > s ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = i, e.selectionEnd = Math.min(v, u));
        }
      }
    }), (ee && e.defaultValue !== e.value || zt(t) == null && e.value) && (a(Ee(e) ? Re(e.value) : e.value), ae !== null && l.add(ae)), Ht(() => {
      var o = t();
      if (e === document.activeElement) {
        var r = Ze ?? ae;
        if (l.has(r)) return;
      }
      Ee(e) && o === Re(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
    });
  }
  function Ee(e) {
    var t = e.type;
    return t === "number" || t === "range";
  }
  function Re(e) {
    return e === "" ? null : +e;
  }
  var na = P("<button> </button>"), ra = P('<nav class="tab-bar svelte-1wwzsr0"></nav>');
  function ia(e, t) {
    J(t, true);
    let a = Wt(t, "activeTab", 15, "structure");
    var l = ra();
    re(l, 21, () => t.tabs, ne, (o, r) => {
      var i = na();
      let v;
      var s = b(i, true);
      m(i), N(() => {
        v = de(i, 1, "tab svelte-1wwzsr0", null, v, {
          active: a() === c(r).id
        }), x(s, c(r).label);
      }), K("click", i, () => a(c(r).id)), S(o, i);
    }), m(l), S(e, l), X();
  }
  ue([
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
  function sa(e) {
    return Me[e] ? structuredClone(Me[e]) : null;
  }
  var oa = P('<button class="svelte-17xzady"> </button>'), ua = P('<div class="presets svelte-17xzady"><span class="label svelte-17xzady"> </span> <!></div>');
  function va(e, t) {
    J(t, false);
    const a = Object.keys(Me);
    function l(s) {
      const u = sa(s);
      u && (n.loadStructure(u), n.save());
    }
    Kt();
    var o = ua(), r = b(o), i = b(r, true);
    m(r);
    var v = k(r, 2);
    re(v, 1, () => a, ne, (s, u) => {
      var d = oa(), h = b(d, true);
      m(d), N(() => x(h, c(u))), K("click", d, () => l(c(u))), S(s, d);
    }), m(o), N((s) => x(i, s), [
      () => y("structure.loadPreset")
    ]), S(e, o), X();
  }
  ue([
    "click"
  ]);
  var ca = P('<span class="level-num svelte-ap3gho"> </span> <span class="blinds svelte-ap3gho"> </span> <span class="ante svelte-ap3gho"> </span> <span class="duration svelte-ap3gho"> </span>', 1), da = P('<span class="break-label svelte-ap3gho"> </span> <span class="duration svelte-ap3gho"> </span>', 1), fa = P('<div class="actions svelte-ap3gho"><button title="Move up" class="svelte-ap3gho">&uarr;</button> <button title="Move down" class="svelte-ap3gho">&darr;</button> <button class="remove svelte-ap3gho" title="Remove">&times;</button></div>'), ma = P("<div><!> <!></div>");
  function ba(e, t) {
    J(t, true);
    var a = ma();
    let l;
    var o = b(a);
    {
      var r = (u) => {
        var d = ca(), h = ve(d), p = b(h);
        m(h);
        var _ = k(h, 2), B = b(_);
        m(_);
        var T = k(_, 2), f = b(T);
        m(T);
        var g = k(T, 2), E = b(g);
        m(g), N((I, A) => {
          x(p, `${I ?? ""} ${t.level.level ?? ""}`), x(B, `${t.level.smallBlind ?? ""}/${t.level.bigBlind ?? ""}`), x(f, `${A ?? ""}: ${t.level.ante ?? ""}`), x(E, `${t.level.duration ?? ""} min`);
        }, [
          () => y("structure.level"),
          () => y("structure.ante")
        ]), S(u, d);
      }, i = (u) => {
        var d = da(), h = ve(d), p = b(h, true);
        m(h);
        var _ = k(h, 2), B = b(_);
        m(_), N((T) => {
          x(p, T), x(B, `${t.level.duration ?? ""} min`);
        }, [
          () => y("structure.break")
        ]), S(u, d);
      };
      W(o, (u) => {
        t.level.type === "round" ? u(r) : u(i, false);
      });
    }
    var v = k(o, 2);
    {
      var s = (u) => {
        var d = fa(), h = b(d), p = k(h, 2), _ = k(p, 2);
        m(d), N(() => {
          h.disabled = t.isFirst, p.disabled = t.isLast;
        }), K("click", h, () => t.onMoveUp(t.index)), K("click", p, () => t.onMoveDown(t.index)), K("click", _, () => t.onRemove(t.index)), S(u, d);
      };
      W(v, (u) => {
        t.disabled || u(s);
      });
    }
    m(a), N(() => l = de(a, 1, "level-row svelte-ap3gho", null, l, {
      "is-break": t.level.type === "break"
    })), S(e, a), X();
  }
  ue([
    "click"
  ]);
  var _a = P('<div class="add-controls svelte-q0tpu6"><fieldset class="svelte-q0tpu6"><legend class="svelte-q0tpu6"> </legend> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="0" class="svelte-q0tpu6"/></label> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <button class="svelte-q0tpu6"> </button></fieldset> <fieldset class="svelte-q0tpu6"><legend class="svelte-q0tpu6"> </legend> <label class="svelte-q0tpu6"> <input type="number" min="1" class="svelte-q0tpu6"/></label> <button class="svelte-q0tpu6"> </button></fieldset></div>'), ga = P('<!> <div class="level-list svelte-q0tpu6"></div> <!>', 1);
  function pa(e, t) {
    J(t, true);
    let a = Q(25), l = Q(50), o = Q(0), r = Q(20), i = Q(10);
    const v = z(() => n.status !== "setup");
    function s() {
      n.addRound({
        smallBlind: c(a),
        bigBlind: c(l),
        ante: c(o),
        duration: c(r)
      }), n.save();
    }
    function u() {
      n.addBreak(c(i)), n.save();
    }
    function d(I) {
      n.removeLevel(I), n.save();
    }
    function h(I) {
      n.moveLevelUp(I), n.save();
    }
    function p(I) {
      n.moveLevelDown(I), n.save();
    }
    var _ = ga(), B = ve(_);
    {
      var T = (I) => {
        va(I, {});
      };
      W(B, (I) => {
        c(v) || I(T);
      });
    }
    var f = k(B, 2);
    re(f, 21, () => n.structure, ne, (I, A, L) => {
      {
        let R = z(() => L === n.structure.length - 1);
        ba(I, {
          get level() {
            return c(A);
          },
          index: L,
          onRemove: d,
          onMoveUp: h,
          onMoveDown: p,
          isFirst: L === 0,
          get isLast() {
            return c(R);
          },
          get disabled() {
            return c(v);
          }
        });
      }
    }), m(f);
    var g = k(f, 2);
    {
      var E = (I) => {
        var A = _a(), L = b(A), R = b(L), M = b(R, true);
        m(R);
        var D = k(R, 2), C = b(D), w = k(C);
        se(w), m(D);
        var q = k(D, 2), U = b(q), Z = k(U);
        se(Z), m(q);
        var Y = k(q, 2), te = b(Y), G = k(te);
        se(G), m(Y);
        var O = k(Y, 2), F = b(O), j = k(F);
        se(j), m(O);
        var V = k(O, 2), he = b(V, true);
        m(V), m(L);
        var _e = k(L, 2), ke = b(_e), et = b(ke, true);
        m(ke);
        var ye = k(ke, 2), Ne = b(ye), Ce = k(Ne);
        se(Ce), m(ye);
        var xe = k(ye, 2), tt = b(xe, true);
        m(xe), m(_e), m(A), N(($, at, lt, nt, rt, it, st, ot, ut) => {
          x(M, $), x(C, `${at ?? ""} `), x(U, `${lt ?? ""} `), x(te, `${nt ?? ""} `), x(F, `${rt ?? ""} `), x(he, it), x(et, st), x(Ne, `${ot ?? ""} `), x(tt, ut);
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
        ]), oe(w, () => c(a), ($) => H(a, $)), oe(Z, () => c(l), ($) => H(l, $)), oe(G, () => c(o), ($) => H(o, $)), oe(j, () => c(r), ($) => H(r, $)), K("click", V, s), oe(Ce, () => c(i), ($) => H(i, $)), K("click", xe, u), S(I, A);
      };
      W(g, (I) => {
        c(v) || I(E);
      });
    }
    S(e, _), X();
  }
  ue([
    "click"
  ]);
  var ha = P('<span class="status svelte-1n9lh6"> </span>'), ka = P('<button class="remove svelte-1n9lh6">&times;</button>'), ya = P('<li><span class="name svelte-1n9lh6"> </span> <!> <!></li>'), xa = P('<div class="players-tab"><div class="add-player svelte-1n9lh6"><input type="text" class="svelte-1n9lh6"/> <button class="svelte-1n9lh6"> </button></div> <p class="count svelte-1n9lh6"> </p> <ul class="player-list svelte-1n9lh6"></ul></div>');
  function Ba(e, t) {
    J(t, true);
    let a = Q("");
    function l() {
      const T = c(a).trim();
      T && (n.addPlayer(T), n.save(), H(a, ""));
    }
    function o(T) {
      n.removePlayer(T), n.save();
    }
    function r(T) {
      T.key === "Enter" && l();
    }
    const i = z(() => n.status === "setup");
    var v = xa(), s = b(v), u = b(s);
    se(u);
    var d = k(u, 2), h = b(d, true);
    m(d), m(s);
    var p = k(s, 2), _ = b(p, true);
    m(p);
    var B = k(p, 2);
    re(B, 21, () => n.players, ne, (T, f) => {
      var g = ya();
      let E;
      var I = b(g), A = b(I, true);
      m(I);
      var L = k(I, 2);
      {
        var R = (C) => {
          var w = ha(), q = b(w, true);
          m(w), N((U) => x(q, U), [
            () => y("players.eliminated")
          ]), S(C, w);
        };
        W(L, (C) => {
          c(f).status === "eliminated" && C(R);
        });
      }
      var M = k(L, 2);
      {
        var D = (C) => {
          var w = ka();
          K("click", w, () => o(c(f).id)), S(C, w);
        };
        W(M, (C) => {
          c(i) && C(D);
        });
      }
      m(g), N(() => {
        E = de(g, 1, "svelte-1n9lh6", null, E, {
          eliminated: c(f).status === "eliminated"
        }), x(A, c(f).name);
      }), S(T, g);
    }), m(B), m(v), N((T, f, g) => {
      ce(u, "placeholder", T), x(h, f), x(_, g);
    }, [
      () => y("players.placeholder"),
      () => y("players.add"),
      () => y("players.count", {
        total: n.players.length,
        active: n.activePlayers.length
      })
    ]), K("keydown", u, r), oe(u, () => c(a), (T) => H(a, T)), K("click", d, l), S(e, v), X();
  }
  ue([
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
  function wa(e, t) {
    const a = e.filter((i) => i.status === "active"), l = Le(a), o = Math.ceil(l.length / t), r = Array.from({
      length: o
    }, (i, v) => ({
      id: `t${v + 1}`,
      name: `Table ${v + 1}`,
      seats: t
    }));
    for (const i of e) i.tableId = null, i.seat = null;
    l.forEach((i, v) => {
      const s = v % o;
      i.tableId = r[s].id;
    });
    for (const i of r) {
      const v = l.filter((u) => u.tableId === i.id), s = Le(Array.from({
        length: t
      }, (u, d) => d + 1));
      v.forEach((u, d) => {
        u.seat = s[d];
      });
    }
    return {
      tables: r,
      players: e
    };
  }
  function Ta(e, t) {
    const a = e.filter((v) => v.status === "active"), l = t.filter((v) => a.some((s) => s.tableId === v.id)), o = [];
    for (const v of l) {
      const s = a.filter((u) => u.tableId === v.id);
      if (s.length <= 1 && l.length > 1) for (const u of s) {
        const h = l.filter((B) => B.id !== v.id).reduce((B, T) => {
          const f = a.filter((E) => E.tableId === B.id).length, g = a.filter((E) => E.tableId === T.id).length;
          return f <= g ? B : T;
        }), p = a.filter((B) => B.tableId === h.id).map((B) => B.seat), _ = Array.from({
          length: h.seats
        }, (B, T) => T + 1).find((B) => !p.includes(B));
        o.push({
          playerId: u.id,
          from: v.name,
          to: h.name
        }), u.tableId = h.id, u.seat = _;
      }
    }
    const r = t.filter((v) => a.some((s) => s.tableId === v.id));
    let i = false;
    for (; !i; ) {
      const v = r.map((d) => ({
        table: d,
        count: a.filter((h) => h.tableId === d.id).length
      })), s = v.reduce((d, h) => d.count >= h.count ? d : h), u = v.reduce((d, h) => d.count <= h.count ? d : h);
      if (s.count - u.count > 1) {
        const d = a.filter((B) => B.tableId === s.table.id), h = d[Math.floor(Math.random() * d.length)], p = a.filter((B) => B.tableId === u.table.id).map((B) => B.seat), _ = Array.from({
          length: u.table.seats
        }, (B, T) => T + 1).find((B) => !p.includes(B));
        o.push({
          playerId: h.id,
          from: s.table.name,
          to: u.table.name
        }), h.tableId = u.table.id, h.seat = _;
      } else i = true;
    }
    return {
      moves: o,
      tables: r
    };
  }
  function Ia(e, t, a) {
    var _a2;
    const l = e.filter((s) => s.status === "active");
    if (l.length > a) return null;
    const o = t.filter((s) => l.some((u) => u.tableId === s.id));
    if (o.length <= 1) return null;
    const r = o[0];
    r.name = "Final Table";
    const i = [];
    for (const s of l) s.tableId !== r.id && (i.push({
      playerId: s.id,
      from: (_a2 = t.find((u) => u.id === s.tableId)) == null ? void 0 : _a2.name,
      to: "Final Table"
    }), s.tableId = r.id);
    const v = Le(Array.from({
      length: r.seats
    }, (s, u) => u + 1));
    return l.forEach((s, u) => {
      s.seat = v[u];
    }), {
      finalTable: r,
      moves: i
    };
  }
  var Ea = P('<li class="svelte-1hud1it"> </li>'), Ra = P('<div class="table-view svelte-1hud1it"><h3 class="svelte-1hud1it"> </h3> <p class="count svelte-1hud1it"> </p> <ul class="svelte-1hud1it"></ul></div>');
  function Aa(e, t) {
    J(t, true);
    const a = z(() => t.players.filter((u) => u.tableId === t.table.id && u.status === "active").sort((u, d) => u.seat - d.seat));
    var l = Ra(), o = b(l), r = b(o, true);
    m(o);
    var i = k(o, 2), v = b(i);
    m(i);
    var s = k(i, 2);
    re(s, 21, () => c(a), ne, (u, d) => {
      var h = Ea(), p = b(h);
      m(h), N((_) => x(p, `${_ ?? ""} ${c(d).seat ?? ""}: ${c(d).name ?? ""}`), [
        () => y("tables.seat")
      ]), S(u, h);
    }), m(s), m(l), N(() => {
      x(r, t.table.name), x(v, `${c(a).length ?? ""} / ${t.table.seats ?? ""} seats`);
    }), S(e, l), X();
  }
  var Sa = P('<p class="notification svelte-10fr8jr"> </p>'), Ma = P('<div class="tables-grid svelte-10fr8jr"></div>'), La = P('<p class="empty svelte-10fr8jr"> </p>'), Pa = P('<div class="table-setup"><div class="settings svelte-10fr8jr"><label class="svelte-10fr8jr"> <input type="number" min="2" max="10" class="svelte-10fr8jr"/></label> <label class="svelte-10fr8jr"> <input type="number" min="2" max="20" class="svelte-10fr8jr"/> <span class="hint svelte-10fr8jr"> </span></label></div> <button class="assign-btn svelte-10fr8jr"> </button> <!> <!></div>');
  function Na(e, t) {
    J(t, true);
    let a = Q("");
    const l = z(() => n.activePlayers.length >= 2 && n.status !== "running");
    function o() {
      const R = wa(n.players, n.tableSize);
      n.tables = R.tables, n.save(), H(a, y("tables.assigned", {
        players: n.activePlayers.length,
        tables: R.tables.length
      }), true), setTimeout(() => H(a, ""), 3e3);
    }
    var r = Pa(), i = b(r), v = b(i), s = b(v), u = k(s);
    se(u), m(v);
    var d = k(v, 2), h = b(d), p = k(h);
    se(p);
    var _ = k(p, 2), B = b(_, true);
    m(_), m(d), m(i);
    var T = k(i, 2), f = b(T, true);
    m(T);
    var g = k(T, 2);
    {
      var E = (R) => {
        var M = Sa(), D = b(M, true);
        m(M), N(() => x(D, c(a))), S(R, M);
      };
      W(g, (R) => {
        c(a) && R(E);
      });
    }
    var I = k(g, 2);
    {
      var A = (R) => {
        var M = Ma();
        re(M, 21, () => n.tables, ne, (D, C) => {
          Aa(D, {
            get table() {
              return c(C);
            },
            get players() {
              return n.players;
            }
          });
        }), m(M), S(R, M);
      }, L = (R) => {
        var M = La(), D = b(M, true);
        m(M), N((C) => x(D, C), [
          () => y("tables.empty")
        ]), S(R, M);
      };
      W(I, (R) => {
        n.tables.length > 0 ? R(A) : R(L, false);
      });
    }
    m(r), N((R, M, D, C) => {
      x(s, `${R ?? ""} `), x(h, `${M ?? ""} `), x(B, D), T.disabled = !c(l), x(f, C);
    }, [
      () => y("tables.maxPerTable"),
      () => y("tables.finalTableAt"),
      () => y("tables.players"),
      () => y("tables.assign")
    ]), oe(u, () => n.tableSize, (R) => n.tableSize = R), oe(p, () => n.finalTableThreshold, (R) => n.finalTableThreshold = R), K("click", T, o), S(e, r), X();
  }
  ue([
    "click"
  ]);
  function Ca(e = null) {
    let t = false, a = e;
    function l() {
      return a || (a = new (window.AudioContext || window.webkitAudioContext)()), a;
    }
    function o(r, i, v = "sine") {
      if (t) return;
      const s = l(), u = s.createOscillator(), d = s.createGain();
      u.type = v, u.frequency.setValueAtTime(r, s.currentTime), d.gain.setValueAtTime(0.3, s.currentTime), u.connect(d), d.connect(s.destination), u.start(), u.stop(s.currentTime + i);
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
        o(880, 0.5);
      },
      playBreakEnd() {
        o(660, 0.5);
      },
      playWarning() {
        o(440, 0.3);
      }
    };
  }
  let pe = null, Ue = false;
  async function qa() {
    if (pe) return pe;
    if (Ue) return null;
    try {
      const e = await Gt(() => import("../chunks/DLv8qd0r.js"), [], import.meta.url);
      return await e.default(), pe = e, pe;
    } catch (e) {
      return console.warn("WASM ticker unavailable, using JS fallback:", e), Ue = true, null;
    }
  }
  function Da(e, t, a, l, o) {
    const r = Date.now();
    let i = Math.floor((r - e) / 1e3), v = a - i, s = 0, u = false, d = a;
    const h = l.length;
    for (; v <= 0; ) {
      if (t >= h - 1) return {
        remaining: 0,
        time_remaining_at_start: 0,
        current_level_index: t,
        start_timestamp: e,
        finished: true,
        level_changed: true,
        play_audio: 0
      };
      const p = o[t];
      t++;
      const _ = l[t] * 60;
      v = _ + v, e = r - (_ - v) * 1e3, d = _, u = true, s = p ? 1 : 2;
    }
    return {
      remaining: v,
      time_remaining_at_start: d,
      current_level_index: t,
      start_timestamp: e,
      finished: false,
      level_changed: u,
      play_audio: s
    };
  }
  async function Oa(e, t, a, l, o) {
    const r = await qa();
    if (r) {
      const i = r.process_tick(e, t, a, new Int32Array(l), new Uint8Array(o.map((v) => v ? 1 : 0)));
      return {
        remaining: i.remaining,
        time_remaining_at_start: i.time_remaining_at_start,
        current_level_index: i.current_level_index,
        start_timestamp: i.start_timestamp,
        finished: i.finished,
        level_changed: i.level_changed,
        play_audio: i.play_audio
      };
    }
    return Da(e, t, a, l, o);
  }
  var Fa = P('<span class="ante svelte-xbucwj"> </span>'), ja = P('<span class="blinds svelte-xbucwj"> </span> <!>', 1), za = P('<span class="break-text svelte-xbucwj"> </span>'), Ha = P('<div class="level-info svelte-xbucwj"><span class="label svelte-xbucwj"> </span> <!></div>');
  function We(e, t) {
    J(t, true);
    var a = vt(), l = ve(a);
    {
      var o = (r) => {
        var i = Ha(), v = b(i), s = b(v, true);
        m(v);
        var u = k(v, 2);
        {
          var d = (p) => {
            var _ = ja(), B = ve(_), T = b(B);
            m(B);
            var f = k(B, 2);
            {
              var g = (E) => {
                var I = Fa(), A = b(I);
                m(I), N((L) => x(A, `${L ?? ""}: ${t.level.ante ?? ""}`), [
                  () => y("structure.ante")
                ]), S(E, I);
              };
              W(f, (E) => {
                t.level.ante > 0 && E(g);
              });
            }
            N((E) => x(T, `${E ?? ""}: ${t.level.smallBlind ?? ""}/${t.level.bigBlind ?? ""}`), [
              () => y("clock.blinds")
            ]), S(p, _);
          }, h = (p) => {
            var _ = za(), B = b(_, true);
            m(_), N((T) => x(B, T), [
              () => y("structure.break")
            ]), S(p, _);
          };
          W(u, (p) => {
            t.level.type === "round" ? p(d) : p(h, false);
          });
        }
        m(i), N(() => x(s, t.label)), S(r, i);
      };
      W(l, (r) => {
        t.level && r(o);
      });
    }
    S(e, a), X();
  }
  var Va = P('<div class="controls svelte-1bc6657"><button class="svelte-1bc6657"> </button> <button class="play-pause svelte-1bc6657"> </button> <button class="svelte-1bc6657"> </button> <button> </button></div>');
  function Ua(e, t) {
    J(t, true);
    var a = Va(), l = b(a), o = b(l);
    m(l);
    var r = k(l, 2), i = b(r, true);
    m(r);
    var v = k(r, 2), s = b(v);
    m(v);
    var u = k(v, 2);
    let d;
    var h = b(u, true);
    m(u), m(a), N((p, _, B, T, f, g, E) => {
      l.disabled = !t.canPrev, ce(l, "title", p), x(o, `\xAB ${_ ?? ""}`), x(i, B), v.disabled = !t.canNext, ce(v, "title", T), x(s, `${f ?? ""} \xBB`), d = de(u, 1, "mute svelte-1bc6657", null, d, {
        muted: t.isMuted
      }), ce(u, "title", g), x(h, E);
    }, [
      () => y("clock.prevLevel"),
      () => y("clock.prev"),
      () => t.isRunning ? y("clock.pause") : y("clock.play"),
      () => y("clock.nextLevel"),
      () => y("clock.next"),
      () => t.isMuted ? y("clock.unmute") : y("clock.mute"),
      () => t.isMuted ? y("clock.unmute") : y("clock.mute")
    ]), K("click", l, function(...p) {
      var _a2;
      (_a2 = t.onPrev) == null ? void 0 : _a2.apply(this, p);
    }), K("click", r, function(...p) {
      var _a2;
      (_a2 = t.onToggle) == null ? void 0 : _a2.apply(this, p);
    }), K("click", v, function(...p) {
      var _a2;
      (_a2 = t.onNext) == null ? void 0 : _a2.apply(this, p);
    }), K("click", u, function(...p) {
      var _a2;
      (_a2 = t.onToggleMute) == null ? void 0 : _a2.apply(this, p);
    }), S(e, a), X();
  }
  ue([
    "click"
  ]);
  var Wa = P('<p class="empty svelte-1hmdg4r"> </p>'), Ga = P('<div class="break-banner svelte-1hmdg4r"> </div>'), Ka = P('<!> <!> <div class="timer svelte-1hmdg4r"> </div> <!> <!>', 1), Ya = P("<div><!></div>");
  function Ja(e, t) {
    J(t, true);
    let a = Q(null), l = null, o = false;
    Vt(() => {
      H(a, Ca(), true), document.addEventListener("visibilitychange", r), n.clock.isRunning && (o = n.clock.timeRemaining <= 60, l = setInterval(g, 500));
    }), Ut(() => {
      l && clearInterval(l), document.removeEventListener("visibilitychange", r);
    });
    function r() {
      !document.hidden && n.clock.isRunning && g();
    }
    const i = z(() => n.structure[n.clock.currentLevelIndex]), v = z(() => n.structure[n.clock.currentLevelIndex + 1]), s = z(() => n.clock.currentLevelIndex > 0), u = z(() => n.clock.currentLevelIndex < n.structure.length - 1), d = z(() => {
      var _a2;
      return ((_a2 = c(i)) == null ? void 0 : _a2.type) === "break";
    }), h = z(() => Math.floor(n.clock.timeRemaining / 60)), p = z(() => n.clock.timeRemaining % 60), _ = z(() => `${String(c(h)).padStart(2, "0")}:${String(c(p)).padStart(2, "0")}`);
    function B() {
      n.clock.startTimestamp = Date.now(), n.clock.timeRemainingAtStart = n.clock.timeRemaining, o = n.clock.timeRemaining <= 60, l = setInterval(g, 500);
    }
    function T() {
      clearInterval(l), l = null;
    }
    function f() {
      n.structure.length !== 0 && (n.clock.isRunning ? (n.clock.isRunning = false, T()) : (n.status === "setup" && (n.status = "running", n.clock.timeRemaining = c(i).duration * 60), n.clock.isRunning = true, B()), n.save());
    }
    async function g() {
      const w = await Oa(n.clock.startTimestamp, n.clock.currentLevelIndex, n.clock.timeRemainingAtStart, n.structure.map((q) => q.duration), n.structure.map((q) => q.type === "break"));
      if (w.finished) {
        n.clock.timeRemaining = 0, n.clock.isRunning = false, T(), n.status = "finished", n.save();
        return;
      }
      w.level_changed && (n.clock.currentLevelIndex = w.current_level_index, n.clock.startTimestamp = w.start_timestamp, n.clock.timeRemainingAtStart = w.time_remaining_at_start, o = w.remaining <= 60, c(a) && (w.play_audio === 1 ? c(a).playBreakEnd() : w.play_audio === 2 && c(a).playRoundEnd()), n.save()), !o && w.remaining <= 60 && c(a) && (c(a).playWarning(), o = true), n.clock.timeRemaining = w.remaining;
    }
    function E() {
      var _a2;
      const w = n.clock.currentLevelIndex;
      if (w >= n.structure.length - 1) {
        n.clock.isRunning = false, T(), n.status = "finished", n.save();
        return;
      }
      const q = ((_a2 = n.structure[w]) == null ? void 0 : _a2.type) === "break";
      n.clock.currentLevelIndex++;
      const U = n.structure[n.clock.currentLevelIndex];
      n.clock.timeRemaining = U.duration * 60, n.clock.isRunning && (n.clock.startTimestamp = Date.now(), n.clock.timeRemainingAtStart = n.clock.timeRemaining, o = false), c(a) && (q ? c(a).playBreakEnd() : c(a).playRoundEnd()), n.save();
    }
    function I() {
      if (!c(s)) return;
      n.clock.currentLevelIndex--;
      const w = n.structure[n.clock.currentLevelIndex];
      n.clock.timeRemaining = w.duration * 60, n.clock.isRunning && (n.clock.startTimestamp = Date.now(), n.clock.timeRemainingAtStart = n.clock.timeRemaining, o = false), n.save();
    }
    function A() {
      c(u) && E();
    }
    var L = Ya();
    let R;
    var M = b(L);
    {
      var D = (w) => {
        var q = Wa(), U = b(q, true);
        m(q), N((Z) => x(U, Z), [
          () => y("clock.setupFirst")
        ]), S(w, q);
      }, C = (w) => {
        var q = Ka(), U = ve(q);
        {
          var Z = (j) => {
            var V = Ga(), he = b(V, true);
            m(V), N((_e) => x(he, _e), [
              () => y("clock.break")
            ]), S(j, V);
          };
          W(U, (j) => {
            c(d) && j(Z);
          });
        }
        var Y = k(U, 2);
        {
          let j = z(() => y("clock.current"));
          We(Y, {
            get level() {
              return c(i);
            },
            get label() {
              return c(j);
            }
          });
        }
        var te = k(Y, 2), G = b(te, true);
        m(te);
        var O = k(te, 2);
        {
          let j = z(() => y("clock.next"));
          We(O, {
            get level() {
              return c(v);
            },
            get label() {
              return c(j);
            }
          });
        }
        var F = k(O, 2);
        {
          let j = z(() => {
            var _a2;
            return ((_a2 = c(a)) == null ? void 0 : _a2.isMuted) ?? false;
          });
          Ua(F, {
            get isRunning() {
              return n.clock.isRunning;
            },
            onToggle: f,
            onPrev: I,
            onNext: A,
            get canPrev() {
              return c(s);
            },
            get canNext() {
              return c(u);
            },
            get isMuted() {
              return c(j);
            },
            onToggleMute: () => {
              var _a2;
              return (_a2 = c(a)) == null ? void 0 : _a2.toggleMute();
            }
          });
        }
        N(() => x(G, c(_))), S(w, q);
      };
      W(M, (w) => {
        n.structure.length === 0 ? w(D) : w(C, false);
      });
    }
    m(L), N(() => R = de(L, 1, "clock-tab svelte-1hmdg4r", null, R, {
      "is-break": c(d),
      "is-paused": !n.clock.isRunning && n.status === "running"
    })), S(e, L), X();
  }
  var Xa = P('<tr><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"> </td><td class="svelte-e9v8ke"><!></td></tr>'), Qa = P('<div class="log"><h3 class="svelte-e9v8ke"> </h3> <table class="svelte-e9v8ke"><thead><tr><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th><th class="svelte-e9v8ke"> </th></tr></thead><tbody></tbody></table></div>');
  function Za(e, t) {
    J(t, true);
    const a = z(() => n.standings);
    function l(I) {
      var _a2;
      return ((_a2 = n.players.find((A) => A.id === I)) == null ? void 0 : _a2.name) ?? "?";
    }
    var o = Qa(), r = b(o), i = b(r, true);
    m(r);
    var v = k(r, 2), s = b(v), u = b(s), d = b(u), h = b(d, true);
    m(d);
    var p = k(d), _ = b(p, true);
    m(p);
    var B = k(p), T = b(B, true);
    m(B);
    var f = k(B), g = b(f, true);
    m(f), m(u), m(s);
    var E = k(s);
    re(E, 21, () => c(a), ne, (I, A) => {
      var L = Xa();
      let R;
      var M = b(L), D = b(M, true);
      m(M);
      var C = k(M), w = b(C, true);
      m(C);
      var q = k(C), U = b(q, true);
      m(q);
      var Z = k(q), Y = b(Z);
      {
        var te = (O) => {
          const F = z(() => n.eliminations.find((V) => V.playerId === c(A).id));
          var j = qe();
          N((V) => x(j, V), [
            () => {
              var _a2;
              return ((_a2 = c(F)) == null ? void 0 : _a2.eliminatedBy) ? l(c(F).eliminatedBy) : "-";
            }
          ]), S(O, j);
        }, G = (O) => {
          var F = qe("-");
          S(O, F);
        };
        W(Y, (O) => {
          c(A).status === "eliminated" ? O(te) : O(G, false);
        });
      }
      m(Z), m(L), N((O) => {
        R = de(L, 1, "svelte-e9v8ke", null, R, {
          eliminated: c(A).status === "eliminated"
        }), x(D, c(A).position), x(w, c(A).name), x(U, O);
      }, [
        () => c(A).status === "active" ? y("elim.playing") : y("elim.out")
      ]), S(I, L);
    }), m(E), m(v), m(o), N((I, A, L, R, M) => {
      x(i, I), x(h, A), x(_, L), x(T, R), x(g, M);
    }, [
      () => y("elim.standings"),
      () => y("elim.position"),
      () => y("elim.player"),
      () => y("elim.status"),
      () => y("elim.eliminatedBy")
    ]), S(e, o), X();
  }
  var $a = P("<option> </option>"), el = P("<option> </option>"), tl = P('<div class="form svelte-2nklbm"><label class="svelte-2nklbm"> <select class="svelte-2nklbm"><option> </option><!></select></label> <label class="svelte-2nklbm"> <select class="svelte-2nklbm"><option> </option><!></select></label> <button class="svelte-2nklbm"> </button></div>'), al = P('<p class="winner svelte-2nklbm"> </p>'), ll = P('<p class="empty svelte-2nklbm"> </p>'), nl = P('<p class="notification svelte-2nklbm"> </p>'), rl = P('<div class="elimination-panel"><!> <!> <!></div>');
  function il(e, t) {
    J(t, true);
    let a = Q(""), l = Q(""), o = Q("");
    const r = z(() => n.activePlayers), i = z(() => c(r).filter((f) => f.id !== c(a)));
    function v() {
      if (!c(a) || !c(l)) return;
      n.eliminatePlayer(c(a), c(l));
      const f = Ia(n.players, n.tables, n.finalTableThreshold);
      if (f) H(o, y("elim.finalTable", {
        count: f.moves.length
      }), true);
      else {
        const { moves: g } = Ta(n.players, n.tables);
        g.length > 0 ? H(o, g.map((E) => {
          var _a2;
          return y("elim.moved", {
            name: (_a2 = n.players.find((I) => I.id === E.playerId)) == null ? void 0 : _a2.name,
            from: E.from,
            to: E.to
          });
        }).join(". "), true) : H(o, "");
      }
      n.save(), H(a, ""), H(l, ""), n.activePlayers.length === 1 && (H(o, y("elim.tournamentOver", {
        name: n.activePlayers[0].name
      }), true), n.status = "finished", n.save()), c(o) && setTimeout(() => H(o, ""), 5e3);
    }
    var s = rl(), u = b(s);
    {
      var d = (f) => {
        var g = tl(), E = b(g), I = b(E), A = k(I), L = b(A), R = b(L, true);
        m(L), L.value = L.__value = "";
        var M = k(L);
        re(M, 17, () => c(r), ne, (G, O) => {
          var F = $a(), j = b(F, true);
          m(F);
          var V = {};
          N(() => {
            x(j, c(O).name), V !== (V = c(O).id) && (F.value = (F.__value = c(O).id) ?? "");
          }), S(G, F);
        }), m(A), m(E);
        var D = k(E, 2), C = b(D), w = k(C), q = b(w), U = b(q, true);
        m(q), q.value = q.__value = "";
        var Z = k(q);
        re(Z, 17, () => c(i), ne, (G, O) => {
          var F = el(), j = b(F, true);
          m(F);
          var V = {};
          N(() => {
            x(j, c(O).name), V !== (V = c(O).id) && (F.value = (F.__value = c(O).id) ?? "");
          }), S(G, F);
        }), m(w), m(D);
        var Y = k(D, 2), te = b(Y, true);
        m(Y), m(g), N((G, O, F, j, V) => {
          x(I, `${G ?? ""} `), x(R, O), x(C, `${F ?? ""} `), x(U, j), Y.disabled = !c(a) || !c(l), x(te, V);
        }, [
          () => y("elim.eliminated"),
          () => y("elim.selectPlayer"),
          () => y("elim.by"),
          () => y("elim.selectEliminator"),
          () => y("elim.eliminate")
        ]), He(A, () => c(a), (G) => H(a, G)), He(w, () => c(l), (G) => H(l, G)), K("click", Y, v), S(f, g);
      }, h = (f) => {
        var g = al(), E = b(g, true);
        m(g), N((I) => x(E, I), [
          () => y("elim.winner", {
            name: c(r)[0].name
          })
        ]), S(f, g);
      }, p = (f) => {
        var g = ll(), E = b(g, true);
        m(g), N((I) => x(E, I), [
          () => y("elim.noActive")
        ]), S(f, g);
      };
      W(u, (f) => {
        c(r).length > 1 ? f(d) : c(r).length === 1 ? f(h, 1) : f(p, false);
      });
    }
    var _ = k(u, 2);
    {
      var B = (f) => {
        var g = nl(), E = b(g, true);
        m(g), N(() => x(E, c(o))), S(f, g);
      };
      W(_, (f) => {
        c(o) && f(B);
      });
    }
    var T = k(_, 2);
    Za(T, {}), m(s), S(e, s), X();
  }
  ue([
    "click"
  ]);
  var sl = P('<!> <div class="tab-content svelte-1uha8ag"><!></div>', 1);
  bl = function(e, t) {
    J(t, true);
    const a = z(() => [
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
    let l = Q("structure");
    var o = sl(), r = ve(o);
    ia(r, {
      get tabs() {
        return c(a);
      },
      get activeTab() {
        return c(l);
      },
      set activeTab(_) {
        H(l, _, true);
      }
    });
    var i = k(r, 2), v = b(i);
    {
      var s = (_) => {
        pa(_, {});
      }, u = (_) => {
        Ba(_, {});
      }, d = (_) => {
        Na(_, {});
      }, h = (_) => {
        Ja(_, {});
      }, p = (_) => {
        il(_, {});
      };
      W(v, (_) => {
        c(l) === "structure" ? _(s) : c(l) === "players" ? _(u, 1) : c(l) === "tables" ? _(d, 2) : c(l) === "clock" ? _(h, 3) : c(l) === "eliminations" && _(p, 4);
      });
    }
    m(i), S(e, o), X();
  };
})();
export {
  __tla,
  bl as component
};
