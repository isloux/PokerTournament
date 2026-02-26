import { a as u, f as h, s as a } from "../chunks/CwGMrjUI.js";
import "../chunks/DVZ4tiSM.js";
import { B as g, C as l, D as v, F as d, G as e, I as o, J as _ } from "../chunks/B5x8qFIl.js";
import { i as x } from "../chunks/Buf-J7-u.js";
import { s as $, p } from "../chunks/N_XdGPsK.js";
const k = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = k;
var b = h("<h1> </h1> <p> </p>", 1);
function G(i, f) {
  g(f, false), x();
  var t = b(), r = l(t), n = e(r, true);
  o(r);
  var s = _(r, 2), c = e(s, true);
  o(s), v(() => {
    var _a;
    a(n, m.status), a(c, (_a = m.error) == null ? void 0 : _a.message);
  }), u(i, t), d();
}
export {
  G as component
};
