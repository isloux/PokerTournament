import { c as d, u as g, a as i, b, r as l, d as m, g as p, e as v, f as h } from "./B5x8qFIl.js";
function x(n = false) {
  const s = d, e = s.l.u;
  if (!e) return;
  let r = () => v(s.s);
  if (n) {
    let f = 0, t = {};
    const _ = h(() => {
      let c = false;
      const a = s.s;
      for (const o in a) a[o] !== t[o] && (t[o] = a[o], c = true);
      return c && f++, f;
    });
    r = () => p(_);
  }
  e.b.length && g(() => {
    u(s, r), l(e.b);
  }), i(() => {
    const f = b(() => e.m.map(m));
    return () => {
      for (const t of f) typeof t == "function" && t();
    };
  }), e.a.length && i(() => {
    u(s, r), l(e.a);
  });
}
function u(n, s) {
  if (n.l.s) for (const e of n.l.s) p(e);
  s();
}
export {
  x as i
};
