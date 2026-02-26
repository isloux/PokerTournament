var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, _b, _e2, _t2, _n, _r, _a2, _o, _s, _i, _c, _e3, _d, _e4, _e5;
import { b7 as he, b8 as pt, a0 as qe, _ as A, g as U, N as T, a8 as te, b9 as gt } from "./B5x8qFIl.js";
const V = [];
function Se(e, t = he) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(o) {
    if (pt(e, o) && (e = o, n)) {
      const c = !V.length;
      for (const l of r) l[1](), V.push(l, e);
      if (c) {
        for (let l = 0; l < V.length; l += 2) V[l][0](V[l + 1]);
        V.length = 0;
      }
    }
  }
  function i(o) {
    a(o(e));
  }
  function s(o, c = he) {
    const l = [o, c];
    return r.add(l), r.size === 1 && (n = t(a, i) || he), o(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: i, subscribe: s };
}
class Ee {
  constructor(t, n) {
    this.status = t, typeof n == "string" ? this.body = { message: n } : n ? this.body = n : this.body = { message: `Error: ${t}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Re {
  constructor(t, n) {
    this.status = t, this.location = n;
  }
}
class xe extends Error {
  constructor(t, n, r) {
    super(r), this.status = t, this.text = n;
  }
}
new URL("sveltekit-internal://");
function _t(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function mt(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function wt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function pe({ href: e }) {
  return e.split("#")[0];
}
function vt(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let r = n.length;
    for (; r; ) t = t * 33 ^ n.charCodeAt(--r);
  } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a; ) t = t * 33 ^ r[--a];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
new TextEncoder();
new TextDecoder();
function yt(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
}
const bt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && F.delete(Le(e)), bt(e, t));
const F = /* @__PURE__ */ new Map();
function kt(e, t) {
  const n = Le(e, t), r = document.querySelector(n);
  if (r == null ? void 0 : r.textContent) {
    r.remove();
    let { body: a, ...i } = JSON.parse(r.textContent);
    const s = r.getAttribute("data-ttl");
    return s && F.set(n, { body: a, init: i, ttl: 1e3 * Number(s) }), r.getAttribute("data-b64") !== null && (a = yt(a)), Promise.resolve(new Response(a, i));
  }
  return window.fetch(e, t);
}
function St(e, t, n) {
  if (F.size > 0) {
    const r = Le(e, n), a = F.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      F.delete(r);
    }
  }
  return window.fetch(t, n);
}
function Le(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const a = [];
    t.headers && a.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body), r += `[data-hash="${vt(...a)}"]`;
  }
  return r;
}
const Et = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Rt(e) {
  const t = [];
  return { pattern: e === "/" ? /^\/$/ : new RegExp(`^${Lt(e).map((r) => {
    const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
    if (a) return t.push({ name: a[1], matcher: a[2], optional: false, rest: true, chained: true }), "(?:/([^]*))?";
    const i = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
    if (i) return t.push({ name: i[1], matcher: i[2], optional: true, rest: false, chained: true }), "(?:/([^/]+))?";
    if (!r) return;
    const s = r.split(/\[(.+?)\](?!\])/);
    return "/" + s.map((c, l) => {
      if (l % 2) {
        if (c.startsWith("x+")) return ge(String.fromCharCode(parseInt(c.slice(2), 16)));
        if (c.startsWith("u+")) return ge(String.fromCharCode(...c.slice(2).split("-").map((m) => parseInt(m, 16))));
        const f = Et.exec(c), [, h, w, u, p] = f;
        return t.push({ name: u, matcher: p, optional: !!h, rest: !!w, chained: w ? l === 1 && s[0] === "" : false }), w ? "([^]*?)" : h ? "([^/]*)?" : "([^/]+?)";
      }
      return ge(c);
    }).join("");
  }).join("")}/?$`), params: t };
}
function xt(e) {
  return e !== "" && !/^\([^)]+\)$/.test(e);
}
function Lt(e) {
  return e.slice(1).split("/").filter(xt);
}
function At(e, t, n) {
  const r = {}, a = e.slice(1), i = a.filter((o) => o !== void 0);
  let s = 0;
  for (let o = 0; o < t.length; o += 1) {
    const c = t[o];
    let l = a[o - s];
    if (c.chained && c.rest && s && (l = a.slice(o - s, o + 1).filter((f) => f).join("/"), s = 0), l === void 0) if (c.rest) l = "";
    else continue;
    if (!c.matcher || n[c.matcher](l)) {
      r[c.name] = l;
      const f = t[o + 1], h = a[o + 1];
      f && !f.rest && f.optional && h && c.chained && (s = 0), !f && !h && Object.keys(r).length === i.length && (s = 0);
      continue;
    }
    if (c.optional && c.chained) {
      s++;
      continue;
    }
    return;
  }
  if (!s) return r;
}
function ge(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function Ut({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
  const a = new Set(t);
  return Object.entries(n).map(([o, [c, l, f]]) => {
    const { pattern: h, params: w } = Rt(o), u = { id: o, exec: (p) => {
      const m = h.exec(p);
      if (m) return At(m, w, r);
    }, errors: [1, ...f || []].map((p) => e[p]), layouts: [0, ...l || []].map(s), leaf: i(c) };
    return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u;
  });
  function i(o) {
    const c = o < 0;
    return c && (o = ~o), [c, e[o]];
  }
  function s(o) {
    return o === void 0 ? o : [a.has(o), e[o]];
  }
}
function Ge(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function De(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r;
  } catch {
  }
}
const x = ((_a = globalThis.__sveltekit_1huwkfm) == null ? void 0 : _a.base) ?? "/pokertournament", Tt = ((_b = globalThis.__sveltekit_1huwkfm) == null ? void 0 : _b.assets) ?? x ?? "", It = "1772118342845", We = "sveltekit:snapshot", Ye = "sveltekit:scroll", He = "sveltekit:states", Ot = "sveltekit:pageurl", K = "sveltekit:history", W = "sveltekit:navigation", j = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, Ae = location.origin;
function Je(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function q() {
  return { x: pageXOffset, y: pageYOffset };
}
function B(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const Ve = { ...j, "": j.hover };
function Xe(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Qe(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = Xe(e);
  }
}
function we(e, t, n) {
  let r;
  try {
    if (r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const o = location.hash.split("#")[1] || "/";
      r.hash = `#${o}${r.hash}`;
    }
  } catch {
  }
  const a = e instanceof SVGAElement ? e.target.baseVal : e.target, i = !r || !!a || ue(r, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), s = (r == null ? void 0 : r.origin) === Ae && e.hasAttribute("download");
  return { url: r, external: i, target: a, download: s };
}
function ne(e) {
  let t = null, n = null, r = null, a = null, i = null, s = null, o = e;
  for (; o && o !== document.documentElement; ) r === null && (r = B(o, "preload-code")), a === null && (a = B(o, "preload-data")), t === null && (t = B(o, "keepfocus")), n === null && (n = B(o, "noscroll")), i === null && (i = B(o, "reload")), s === null && (s = B(o, "replacestate")), o = Xe(o);
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return;
    }
  }
  return { preload_code: Ve[r ?? "off"], preload_data: Ve[a ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(i), replace_state: c(s) };
}
function Be(e) {
  const t = Se(e);
  let n = true;
  function r() {
    n = true, t.update((s) => s);
  }
  function a(s) {
    n = false, t.set(s);
  }
  function i(s) {
    let o;
    return t.subscribe((c) => {
      (o === void 0 || n && c !== o) && s(o = c);
    });
  }
  return { notify: r, set: a, subscribe: i };
}
const Ze = { v: () => {
} };
function Pt() {
  const { set: e, subscribe: t } = Se(false);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${Tt}/app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!a.ok) return false;
      const s = (await a.json()).version !== It;
      return s && (e(true), Ze.v(), clearTimeout(n)), s;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: r };
}
function ue(e, t, n) {
  return e.origin !== Ae || !e.pathname.startsWith(t) ? true : n ? e.pathname !== location.pathname : false;
}
function sn(e) {
}
const et = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...et];
const $t = /* @__PURE__ */ new Set([...et]);
[...$t];
function Ct(e) {
  return e.filter((t) => t != null);
}
function Ue(e) {
  return e instanceof Ee || e instanceof xe ? e.status : 500;
}
function jt(e) {
  return e instanceof xe ? e.text : "Internal Error";
}
let k, Y, _e;
const Nt = qe.toString().includes("$$") || /function \w+\(\) \{\}/.test(qe.toString());
Nt ? (k = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, Y = { current: null }, _e = { current: false }) : (k = new (_c = class {
  constructor() {
    __privateAdd(this, _e2, A({}));
    __privateAdd(this, _t2, A(null));
    __privateAdd(this, _n, A(null));
    __privateAdd(this, _r, A({}));
    __privateAdd(this, _a2, A({ id: null }));
    __privateAdd(this, _o, A({}));
    __privateAdd(this, _s, A(-1));
    __privateAdd(this, _i, A(new URL("https://example.com")));
  }
  get data() {
    return U(__privateGet(this, _e2));
  }
  set data(t) {
    T(__privateGet(this, _e2), t);
  }
  get form() {
    return U(__privateGet(this, _t2));
  }
  set form(t) {
    T(__privateGet(this, _t2), t);
  }
  get error() {
    return U(__privateGet(this, _n));
  }
  set error(t) {
    T(__privateGet(this, _n), t);
  }
  get params() {
    return U(__privateGet(this, _r));
  }
  set params(t) {
    T(__privateGet(this, _r), t);
  }
  get route() {
    return U(__privateGet(this, _a2));
  }
  set route(t) {
    T(__privateGet(this, _a2), t);
  }
  get state() {
    return U(__privateGet(this, _o));
  }
  set state(t) {
    T(__privateGet(this, _o), t);
  }
  get status() {
    return U(__privateGet(this, _s));
  }
  set status(t) {
    T(__privateGet(this, _s), t);
  }
  get url() {
    return U(__privateGet(this, _i));
  }
  set url(t) {
    T(__privateGet(this, _i), t);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _n = new WeakMap(), _r = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _i = new WeakMap(), _c)(), Y = new (_d = class {
  constructor() {
    __privateAdd(this, _e3, A(null));
  }
  get current() {
    return U(__privateGet(this, _e3));
  }
  set current(t) {
    T(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _d)(), _e = new (_e5 = class {
  constructor() {
    __privateAdd(this, _e4, A(false));
  }
  get current() {
    return U(__privateGet(this, _e4));
  }
  set current(t) {
    T(__privateGet(this, _e4), t);
  }
}, _e4 = new WeakMap(), _e5)(), Ze.v = () => _e.current = true);
function qt(e) {
  Object.assign(k, e);
}
const Dt = /* @__PURE__ */ new Set(["icon", "shortcut icon", "apple-touch-icon"]), C = Ge(Ye) ?? {}, H = Ge(We) ?? {}, $ = { url: Be({}), page: Be({}), navigating: Se(null), updated: Pt() };
function Te(e) {
  C[e] = q();
}
function Vt(e, t) {
  let n = e + 1;
  for (; C[n]; ) delete C[n], n += 1;
  for (n = t + 1; H[n]; ) delete H[n], n += 1;
}
function J(e, t = false) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(() => {
  });
}
async function tt() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(x || "/");
    e && await e.update();
  }
}
function Ke() {
}
let Ie, ve, re, I, ye, y;
const ae = [], oe = [];
let L = null;
function be() {
  var _a3;
  (_a3 = L == null ? void 0 : L.fork) == null ? void 0 : _a3.then((e) => e == null ? void 0 : e.discard()), L = null;
}
const ee = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
let _ = { branch: [], error: null, url: null }, rt = false, se = false, Me = true, X = false, z = false, at = false, Oe = false, ot, v, R, N;
const ie = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
async function fn(e, t, n) {
  var _a3, _b2, _c2, _d2, _e6;
  ((_a3 = globalThis.__sveltekit_1huwkfm) == null ? void 0 : _a3.data) && globalThis.__sveltekit_1huwkfm.data, document.URL !== location.href && (location.href = location.href), y = e, await ((_c2 = (_b2 = e.hooks).init) == null ? void 0 : _c2.call(_b2)), Ie = Ut(e), I = document.documentElement, ye = t, ve = e.nodes[0], re = e.nodes[1], ve(), re(), v = (_d2 = history.state) == null ? void 0 : _d2[K], R = (_e6 = history.state) == null ? void 0 : _e6[W], v || (v = R = Date.now(), history.replaceState({ ...history.state, [K]: v, [W]: R }, ""));
  const r = C[v];
  function a() {
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y));
  }
  n ? (a(), await tn(ye, n)) : (await M({ type: "enter", url: Je(y.hash ? an(new URL(location.href)) : location.href), replace_state: true }), a()), en();
}
function Kt() {
  ae.length = 0, Oe = false;
}
function st(e) {
  oe.some((t) => t == null ? void 0 : t.snapshot) && (H[e] = oe.map((t) => {
    var _a3;
    return (_a3 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a3.capture();
  }));
}
function it(e) {
  var _a3;
  (_a3 = H[e]) == null ? void 0 : _a3.forEach((t, n) => {
    var _a4, _b2;
    (_b2 = (_a4 = oe[n]) == null ? void 0 : _a4.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function Fe() {
  Te(v), De(Ye, C), st(R), De(We, H);
}
async function Mt(e, t, n, r) {
  let a;
  t.invalidateAll && be(), await M({ type: "goto", url: Je(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: r, accept: () => {
    t.invalidateAll && (Oe = true, a = [...ze.keys()]), t.invalidate && t.invalidate.forEach(Zt);
  } }), t.invalidateAll && te().then(te).then(() => {
    ze.forEach(({ resource: i }, s) => {
      var _a3;
      (a == null ? void 0 : a.includes(s)) && ((_a3 = i.refresh) == null ? void 0 : _a3.call(i));
    });
  });
}
async function zt(e) {
  if (e.id !== (L == null ? void 0 : L.id)) {
    be();
    const t = {};
    ie.add(t), L = { id: e.id, token: t, promise: lt({ ...e, preload: t }).then((n) => (ie.delete(t), n.type === "loaded" && n.state.error && be(), n)), fork: null };
  }
  return L.promise;
}
async function me(e) {
  var _a3;
  const t = (_a3 = await fe(e, false)) == null ? void 0 : _a3.route;
  t && await Promise.all([...t.layouts, t.leaf].filter(Boolean).map((n) => n[1]()));
}
async function ct(e, t, n) {
  var _a3;
  _ = e.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (r && r.remove(), Object.assign(k, e.props.page), ot = new y.root({ target: t, props: { ...e.props, stores: $, components: oe }, hydrate: n, sync: false }), await Promise.resolve(), it(R), n) {
    const a = { from: null, to: { params: _.params, route: { id: ((_a3 = _.route) == null ? void 0 : _a3.id) ?? null }, url: new URL(location.href), scroll: C[v] ?? q() }, willUnload: false, type: "enter", complete: Promise.resolve() };
    G.forEach((i) => i(a));
  }
  se = true;
}
function ce({ url: e, params: t, branch: n, status: r, error: a, route: i, form: s }) {
  let o = "never";
  if (x && (e.pathname === x || e.pathname === x + "/")) o = "always";
  else for (const u of n) (u == null ? void 0 : u.slash) !== void 0 && (o = u.slash);
  e.pathname = _t(e.pathname, o), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: a, route: i }, props: { constructors: Ct(n).map((u) => u.node.component), page: Ne(k) } };
  s !== void 0 && (c.props.form = s);
  let l = {}, f = !k, h = 0;
  for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
    const p = n[u], m = _.branch[u];
    (p == null ? void 0 : p.data) !== (m == null ? void 0 : m.data) && (f = true), p && (l = { ...l, ...p.data }, f && (c.props[`data_${h}`] = l), h += 1);
  }
  return (!_.url || e.href !== _.url.href || _.error !== a || s !== void 0 && s !== k.form || f) && (c.props.page = { error: a, params: t, route: { id: (i == null ? void 0 : i.id) ?? null }, state: {}, status: r, url: new URL(e), form: s ?? null, data: f ? l : k.data }), c;
}
async function Pe({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: i }) {
  var _a3, _b2;
  let s = null;
  const o = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, c = await e();
  return { node: c, loader: e, server: i, universal: ((_a3 = c.universal) == null ? void 0 : _a3.load) ? { type: "data", data: s, uses: o } : null, data: s ?? (i == null ? void 0 : i.data) ?? null, slash: ((_b2 = c.universal) == null ? void 0 : _b2.trailingSlash) ?? (i == null ? void 0 : i.slash) };
}
function Ft(e, t, n) {
  let r = e instanceof Request ? e.url : e;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const i = se ? St(r, a.href, t) : kt(r, t);
  return { resolved: a, promise: i };
}
function Gt(e, t, n, r, a, i) {
  if (Oe) return true;
  if (!a) return false;
  if (a.parent && e || a.route && t || a.url && n) return true;
  for (const s of a.search_params) if (r.has(s)) return true;
  for (const s of a.params) if (i[s] !== _.params[s]) return true;
  for (const s of a.dependencies) if (ae.some((o) => o(new URL(s)))) return true;
  return false;
}
function $e(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function Wt(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const r of n) {
    const a = e.searchParams.getAll(r), i = t.searchParams.getAll(r);
    a.every((s) => i.includes(s)) && i.every((s) => a.includes(s)) && n.delete(r);
  }
  return n;
}
function Yt({ error: e, url: t, route: n, params: r }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: r, branch: [] }, props: { page: Ne(k), constructors: [] } };
}
async function lt({ id: e, invalidating: t, url: n, params: r, route: a, preload: i }) {
  if ((L == null ? void 0 : L.id) === e) return ie.delete(L.token), L.promise;
  const { errors: s, layouts: o, leaf: c } = a, l = [...o, c];
  s.forEach((g) => g == null ? void 0 : g().catch(() => {
  })), l.forEach((g) => g == null ? void 0 : g[1]().catch(() => {
  }));
  const f = _.url ? e !== le(_.url) : false, h = _.route ? a.id !== _.route.id : false, w = Wt(_.url, n);
  let u = false;
  const p = l.map(async (g, d) => {
    var _a3;
    if (!g) return;
    const S = _.branch[d];
    return g[1] === (S == null ? void 0 : S.loader) && !Gt(u, h, f, w, (_a3 = S.universal) == null ? void 0 : _a3.uses, r) ? S : (u = true, Pe({ loader: g[1], url: n, params: r, route: a, parent: async () => {
      var _a4;
      const O = {};
      for (let P = 0; P < d; P += 1) Object.assign(O, (_a4 = await p[P]) == null ? void 0 : _a4.data);
      return O;
    }, server_data_node: $e(g[0] ? { type: "skip" } : null, g[0] ? S == null ? void 0 : S.server : void 0) }));
  });
  for (const g of p) g.catch(() => {
  });
  const m = [];
  for (let g = 0; g < l.length; g += 1) if (l[g]) try {
    m.push(await p[g]);
  } catch (d) {
    if (d instanceof Re) return { type: "redirect", location: d.location };
    if (ie.has(i)) return Yt({ error: await Q(d, { params: r, url: n, route: { id: a.id } }), url: n, params: r, route: a });
    let S = Ue(d), E;
    if (d instanceof Ee) E = d.body;
    else {
      if (await $.updated.check()) return await tt(), await J(n);
      E = await Q(d, { params: r, url: n, route: { id: a.id } });
    }
    const O = await Ht(g, m, s);
    return O ? ce({ url: n, params: r, branch: m.slice(0, O.idx).concat(O.node), status: S, error: E, route: a }) : await ft(n, { id: a.id }, E, S);
  }
  else m.push(void 0);
  return ce({ url: n, params: r, branch: m, status: 200, error: null, route: a, form: t ? void 0 : null });
}
async function Ht(e, t, n) {
  for (; e--; ) if (n[e]) {
    let r = e;
    for (; !t[r]; ) r -= 1;
    try {
      return { idx: r + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function Ce({ status: e, error: t, url: n, route: r }) {
  const a = {};
  let i = null;
  try {
    const s = await Pe({ loader: ve, url: n, params: a, route: r, parent: () => Promise.resolve({}), server_data_node: $e(i) }), o = { node: await re(), loader: re, universal: null, server: null, data: null };
    return ce({ url: n, params: a, branch: [s, o], status: e, error: t, route: null });
  } catch (s) {
    if (s instanceof Re) return Mt(new URL(s.location, location.href), {}, 0);
    throw s;
  }
}
async function Jt(e) {
  const t = e.href;
  if (ee.has(t)) return ee.get(t);
  let n;
  try {
    const r = (async () => {
      let a = await y.hooks.reroute({ url: new URL(e), fetch: async (i, s) => Ft(i, s, e).promise }) ?? e;
      if (typeof a == "string") {
        const i = new URL(e);
        y.hash ? i.hash = a : i.pathname = a, a = i;
      }
      return a;
    })();
    ee.set(t, r), n = await r;
  } catch {
    ee.delete(t);
    return;
  }
  return n;
}
async function fe(e, t) {
  if (e && !ue(e, x, y.hash)) {
    const n = await Jt(e);
    if (!n) return;
    const r = Xt(n);
    for (const a of Ie) {
      const i = a.exec(r);
      if (i) return { id: le(e), invalidating: t, route: a, params: wt(i), url: e };
    }
  }
}
function Xt(e) {
  return mt(y.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(x.length)) || "/";
}
function le(e) {
  return (y.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function ut({ url: e, type: t, intent: n, delta: r, event: a, scroll: i }) {
  let s = false;
  const o = je(_, n, e, t, i ?? null);
  r !== void 0 && (o.navigation.delta = r), a !== void 0 && (o.navigation.event = a);
  const c = { ...o.navigation, cancel: () => {
    s = true, o.reject(new Error("navigation cancelled"));
  } };
  return X || nt.forEach((l) => l(c)), s ? null : o;
}
async function M({ type: e, url: t, popped: n, keepfocus: r, noscroll: a, replace_state: i, state: s = {}, redirect_count: o = 0, nav_token: c = {}, accept: l = Ke, block: f = Ke, event: h }) {
  var _a3;
  const w = N;
  N = c;
  const u = await fe(t, false), p = e === "enter" ? je(_, u, t, e) : ut({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: u, scroll: n == null ? void 0 : n.scroll, event: h });
  if (!p) {
    f(), N === c && (N = w);
    return;
  }
  const m = v, g = R;
  l(), X = true, se && p.navigation.type !== "enter" && $.navigating.set(Y.current = p.navigation);
  let d = u && await lt(u);
  if (!d) {
    if (ue(t, x, y.hash)) return await J(t, i);
    d = await ft(t, { id: null }, await Q(new xe(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404, i);
  }
  if (t = (u == null ? void 0 : u.url) || t, N !== c) return p.reject(new Error("navigation aborted")), false;
  if (d.type === "redirect") {
    if (o < 20) {
      await M({ type: e, url: new URL(d.location, t), popped: n, keepfocus: r, noscroll: a, replace_state: i, state: s, redirect_count: o + 1, nav_token: c }), p.fulfil(void 0);
      return;
    }
    d = await Ce({ status: 500, error: await Q(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  } else d.props.page.status >= 400 && await $.updated.check() && (await tt(), await J(t, i));
  if (Kt(), Te(m), st(g), d.props.page.url.pathname !== t.pathname && (t.pathname = d.props.page.url.pathname), s = n ? n.state : s, !n) {
    const b = i ? 0 : 1, Z = { [K]: v += b, [W]: R += b, [He]: s };
    (i ? history.replaceState : history.pushState).call(history, Z, "", t), i || Vt(v, R);
  }
  const S = u && (L == null ? void 0 : L.id) === u.id ? L.fork : null;
  L = null, d.props.page.state = s;
  let E;
  if (se) {
    const b = (await Promise.all(Array.from(Bt, (D) => D(p.navigation)))).filter((D) => typeof D == "function");
    if (b.length > 0) {
      let D = function() {
        b.forEach((de) => {
          G.delete(de);
        });
      };
      b.push(D), b.forEach((de) => {
        G.add(de);
      });
    }
    _ = d.state, d.props.page && (d.props.page.url = t);
    const Z = S && await S;
    Z ? E = Z.commit() : (ot.$set(d.props), qt(d.props.page), E = (_a3 = gt) == null ? void 0 : _a3()), at = true;
  } else await ct(d, ye, false);
  const { activeElement: O } = document;
  await E, await te(), await te();
  let P = null;
  if (Me) {
    const b = n ? n.scroll : a ? q() : null;
    b ? scrollTo(b.x, b.y) : (P = t.hash && document.getElementById(dt(t))) ? P.scrollIntoView() : scrollTo(0, 0);
  }
  const ht = document.activeElement !== O && document.activeElement !== document.body;
  !r && !ht && rn(t, !P), Me = true, d.props.page && Object.assign(k, d.props.page), X = false, e === "popstate" && it(R), p.fulfil(void 0), p.navigation.to && (p.navigation.to.scroll = q()), G.forEach((b) => b(p.navigation)), $.navigating.set(Y.current = null);
}
async function ft(e, t, n, r, a) {
  return e.origin === Ae && e.pathname === location.pathname && !rt ? await Ce({ status: r, error: n, url: e, route: t }) : await J(e, a);
}
function Qt() {
  let e, t = { element: void 0, href: void 0 }, n;
  I.addEventListener("mousemove", (o) => {
    const c = o.target;
    clearTimeout(e), e = setTimeout(() => {
      i(c, j.hover);
    }, 20);
  });
  function r(o) {
    o.defaultPrevented || i(o.composedPath()[0], j.tap);
  }
  I.addEventListener("mousedown", r), I.addEventListener("touchstart", r, { passive: true });
  const a = new IntersectionObserver((o) => {
    for (const c of o) c.isIntersecting && (me(new URL(c.target.href)), a.unobserve(c.target));
  }, { threshold: 0 });
  async function i(o, c) {
    const l = Qe(o, I), f = l === t.element && (l == null ? void 0 : l.href) === t.href && c >= n;
    if (!l || f) return;
    const { url: h, external: w, download: u } = we(l, x, y.hash);
    if (w || u) return;
    const p = ne(l), m = h && le(_.url) === le(h);
    if (!(p.reload || m)) if (c <= p.preload_data) {
      t = { element: l, href: l.href }, n = j.tap;
      const g = await fe(h, false);
      if (!g) return;
      zt(g);
    } else c <= p.preload_code && (t = { element: l, href: l.href }, n = c, me(h));
  }
  function s() {
    a.disconnect();
    for (const o of I.querySelectorAll("a")) {
      const { url: c, external: l, download: f } = we(o, x, y.hash);
      if (l || f) continue;
      const h = ne(o);
      h.reload || (h.preload_code === j.viewport && a.observe(o), h.preload_code === j.eager && me(c));
    }
  }
  G.add(s), s();
}
function Q(e, t) {
  if (e instanceof Ee) return e.body;
  const n = Ue(e), r = jt(e);
  return y.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function Zt(e) {
  if (typeof e == "function") ae.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    ae.push((n) => n.href === t);
  }
}
function en() {
  var _a3;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (Fe(), !X) {
      const r = je(_, void 0, null, "leave"), a = { ...r.navigation, cancel: () => {
        n = true, r.reject(new Error("navigation cancelled"));
      } };
      nt.forEach((i) => i(a));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && Fe();
  }), ((_a3 = navigator.connection) == null ? void 0 : _a3.saveData) || Qt(), I.addEventListener("click", async (t) => {
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = Qe(t.composedPath()[0], I);
    if (!n) return;
    const { url: r, external: a, target: i, download: s } = we(n, x, y.hash);
    if (!r) return;
    if (i === "_parent" || i === "_top") {
      if (window.parent !== window) return;
    } else if (i && i !== "_self") return;
    const o = ne(n);
    if (!(n instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || s) return;
    const [l, f] = (y.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), h = l === pe(location);
    if (a || o.reload && (!h || !f)) {
      ut({ url: r, type: "link", event: t }) ? X = true : t.preventDefault();
      return;
    }
    if (f !== void 0 && h) {
      const [, w] = _.url.href.split("#");
      if (w === f) {
        if (t.preventDefault(), f === "" || f === "top" && n.ownerDocument.getElementById("top") === null) scrollTo({ top: 0 });
        else {
          const u = n.ownerDocument.getElementById(decodeURIComponent(f));
          u && (u.scrollIntoView(), u.focus());
        }
        return;
      }
      if (z = true, Te(v), e(r), !o.replace_state) return;
      z = false;
    }
    t.preventDefault(), await new Promise((w) => {
      requestAnimationFrame(() => {
        setTimeout(w, 0);
      }), setTimeout(w, 100);
    }), await M({ type: "link", url: r, keepfocus: o.keepfocus, noscroll: o.noscroll, replace_state: o.replace_state ?? r.href === location.href, event: t });
  }), I.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), r = t.submitter;
    if (((r == null ? void 0 : r.formTarget) || n.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || n.method) !== "get") return;
    const s = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || n.action);
    if (ue(s, x, false)) return;
    const o = t.target, c = ne(o);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const l = new FormData(o, r);
    s.search = new URLSearchParams(l).toString(), M({ type: "form", url: s, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? s.href === location.href, event: t });
  }), addEventListener("popstate", async (t) => {
    var _a4;
    if (!ke) {
      if ((_a4 = t.state) == null ? void 0 : _a4[K]) {
        const n = t.state[K];
        if (N = {}, n === v) return;
        const r = C[n], a = t.state[He] ?? {}, i = new URL(t.state[Ot] ?? location.href), s = t.state[W], o = _.url ? pe(location) === pe(_.url) : false;
        if (s === R && (at || o)) {
          a !== k.state && (k.state = a), e(i), C[v] = q(), r && scrollTo(r.x, r.y), v = n;
          return;
        }
        const l = n - v;
        await M({ type: "popstate", url: i, popped: { state: a, scroll: r, delta: l }, accept: () => {
          v = n, R = s;
        }, block: () => {
          history.go(-l);
        }, nav_token: N, event: t });
      } else if (!z) {
        const n = new URL(location.href);
        e(n), y.hash && location.reload();
      }
    }
  }), addEventListener("hashchange", () => {
    z && (z = false, history.replaceState({ ...history.state, [K]: ++v, [W]: R }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) Dt.has(t.rel) && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && $.navigating.set(Y.current = null);
  });
  function e(t) {
    _.url = k.url = t, $.page.set(Ne(k)), $.page.notify();
  }
}
async function tn(e, { status: t = 200, error: n, node_ids: r, params: a, route: i, server_route: s, data: o, form: c }) {
  rt = true;
  const l = new URL(location.href);
  let f;
  ({ params: a = {}, route: i = { id: null } } = await fe(l, false) || {}), f = Ie.find(({ id: u }) => u === i.id);
  let h, w = true;
  try {
    const u = r.map(async (m, g) => {
      const d = o[g];
      return (d == null ? void 0 : d.uses) && (d.uses = nn(d.uses)), Pe({ loader: y.nodes[m], url: l, params: a, route: i, parent: async () => {
        const S = {};
        for (let E = 0; E < g; E += 1) Object.assign(S, (await u[E]).data);
        return S;
      }, server_data_node: $e(d) });
    }), p = await Promise.all(u);
    if (f) {
      const m = f.layouts;
      for (let g = 0; g < m.length; g++) m[g] || p.splice(g, 0, void 0);
    }
    h = ce({ url: l, params: a, branch: p, status: t, error: n, form: c, route: f ?? null });
  } catch (u) {
    if (u instanceof Re) {
      await J(new URL(u.location, location.href));
      return;
    }
    h = await Ce({ status: Ue(u), error: await Q(u, { url: l, params: a, route: i }), url: l, route: i }), e.textContent = "", w = false;
  }
  h.props.page && (h.props.page.state = {}), await ct(h, e, w);
}
function nn(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
let ke = false;
function rn(e, t = true) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const r = dt(e);
    if (r && document.getElementById(r)) {
      const { x: i, y: s } = q();
      setTimeout(() => {
        const o = history.state;
        ke = true, location.replace(new URL(`#${r}`, location.href)), history.replaceState(o, "", e), t && scrollTo(i, s), ke = false;
      });
    } else {
      const i = document.body, s = i.getAttribute("tabindex");
      i.tabIndex = -1, i.focus({ preventScroll: true, focusVisible: false }), s !== null ? i.setAttribute("tabindex", s) : i.removeAttribute("tabindex");
    }
    const a = getSelection();
    if (a && a.type !== "None") {
      const i = [];
      for (let s = 0; s < a.rangeCount; s += 1) i.push(a.getRangeAt(s));
      setTimeout(() => {
        if (a.rangeCount === i.length) {
          for (let s = 0; s < a.rangeCount; s += 1) {
            const o = i[s], c = a.getRangeAt(s);
            if (o.commonAncestorContainer !== c.commonAncestorContainer || o.startContainer !== c.startContainer || o.endContainer !== c.endContainer || o.startOffset !== c.startOffset || o.endOffset !== c.endOffset) return;
          }
          a.removeAllRanges();
        }
      });
    }
  }
}
function je(e, t, n, r, a = null) {
  var _a3, _b2;
  let i, s;
  const o = new Promise((l, f) => {
    i = l, s = f;
  });
  return o.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a3 = e.route) == null ? void 0 : _a3.id) ?? null }, url: e.url, scroll: q() }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n, scroll: a }, willUnload: !t, type: r, complete: o }, fulfil: i, reject: s };
}
function Ne(e) {
  return { data: e.data, error: e.error, form: e.form, params: e.params, route: e.route, state: e.state, status: e.status, url: e.url };
}
function an(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t;
}
function dt(e) {
  let t;
  if (y.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? "";
  } else t = e.hash.slice(1);
  return decodeURIComponent(t);
}
export {
  fn as a,
  sn as l,
  k as p,
  $ as s
};
