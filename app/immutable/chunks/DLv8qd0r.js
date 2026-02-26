class a {
  static __wrap(t) {
    t = t >>> 0;
    const r = Object.create(a.prototype);
    return r.__wbg_ptr = t, f.register(r, r.__wbg_ptr, r), r;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, f.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    n.__wbg_tickresult_free(t, 0);
  }
  get current_level_index() {
    return n.__wbg_get_tickresult_current_level_index(this.__wbg_ptr) >>> 0;
  }
  get finished() {
    return n.__wbg_get_tickresult_finished(this.__wbg_ptr) !== 0;
  }
  get level_changed() {
    return n.__wbg_get_tickresult_level_changed(this.__wbg_ptr) !== 0;
  }
  get play_audio() {
    return n.__wbg_get_tickresult_play_audio(this.__wbg_ptr);
  }
  get remaining() {
    return n.__wbg_get_tickresult_remaining(this.__wbg_ptr);
  }
  get start_timestamp() {
    return n.__wbg_get_tickresult_start_timestamp(this.__wbg_ptr);
  }
  get time_remaining_at_start() {
    return n.__wbg_get_tickresult_time_remaining_at_start(this.__wbg_ptr);
  }
  set current_level_index(t) {
    n.__wbg_set_tickresult_current_level_index(this.__wbg_ptr, t);
  }
  set finished(t) {
    n.__wbg_set_tickresult_finished(this.__wbg_ptr, t);
  }
  set level_changed(t) {
    n.__wbg_set_tickresult_level_changed(this.__wbg_ptr, t);
  }
  set play_audio(t) {
    n.__wbg_set_tickresult_play_audio(this.__wbg_ptr, t);
  }
  set remaining(t) {
    n.__wbg_set_tickresult_remaining(this.__wbg_ptr, t);
  }
  set start_timestamp(t) {
    n.__wbg_set_tickresult_start_timestamp(this.__wbg_ptr, t);
  }
  set time_remaining_at_start(t) {
    n.__wbg_set_tickresult_time_remaining_at_start(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (a.prototype[Symbol.dispose] = a.prototype.free);
function O(e, t, r, i, c) {
  const u = R(i, n.__wbindgen_malloc), y = g, d = W(c, n.__wbindgen_malloc), m = g, h = n.process_tick(e, t, r, u, y, d, m);
  return a.__wrap(h);
}
function b() {
  return { __proto__: null, "./ticker_bg.js": { __proto__: null, __wbg___wbindgen_throw_39bc967c0e5a9b58: function(t, r) {
    throw new Error(k(t, r));
  }, __wbg_now_8c482d91f1c34d85: function() {
    return Date.now();
  }, __wbindgen_init_externref_table: function() {
    const t = n.__wbindgen_externrefs, r = t.grow(4);
    t.set(0, void 0), t.set(r + 0, void 0), t.set(r + 1, null), t.set(r + 2, true), t.set(r + 3, false);
  } } };
}
const f = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => n.__wbg_tickresult_free(e >>> 0, 1));
function k(e, t) {
  return e = e >>> 0, v(e, t);
}
let s = null;
function A() {
  return (s === null || s.byteLength === 0) && (s = new Uint32Array(n.memory.buffer)), s;
}
let _ = null;
function w() {
  return (_ === null || _.byteLength === 0) && (_ = new Uint8Array(n.memory.buffer)), _;
}
function R(e, t) {
  const r = t(e.length * 4, 4) >>> 0;
  return A().set(e, r / 4), g = e.length, r;
}
function W(e, t) {
  const r = t(e.length * 1, 1) >>> 0;
  return w().set(e, r / 1), g = e.length, r;
}
let o = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
o.decode();
const x = 2146435072;
let l = 0;
function v(e, t) {
  return l += t, l >= x && (o = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), o.decode(), l = t), o.decode(w().subarray(e, e + t));
}
let g = 0, n;
function p(e, t) {
  return n = e.exports, s = null, _ = null, n.__wbindgen_start(), n;
}
async function M(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (c) {
      if (e.ok && r(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", c);
      else throw c;
    }
    const i = await e.arrayBuffer();
    return await WebAssembly.instantiate(i, t);
  } else {
    const i = await WebAssembly.instantiate(e, t);
    return i instanceof WebAssembly.Instance ? { instance: i, module: e } : i;
  }
  function r(i) {
    switch (i) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function S(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = b();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const r = new WebAssembly.Instance(e, t);
  return p(r);
}
async function T(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("../assets/ticker_bg.mSHwmit4.wasm", import.meta.url).href, import.meta.url));
  const t = b();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: r, module: i } = await M(await e, t);
  return p(r);
}
export {
  a as TickResult,
  T as default,
  S as initSync,
  O as process_tick
};
