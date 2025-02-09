"use strict"; 
var m = Object.create;
var n = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var k = Object.getOwnPropertyNames;
var w = Object.getPrototypeOf;
var v = Object.prototype.hasOwnProperty;

var f = (l, o) => {
  for (var p in o) n(l, p, { get: o[p], enumerable: !0 });
};

var e = (l, o, p, i) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (let t of k(o))
      !v.call(l, t) && t !== p && n(l, t, { get: () => o[t], enumerable: !(i = s(o, t)) || i.enumerable });
  return l;
};

var u = (l, o, p) => (p = l != null ? m(w(l)) : {}, e(o || !l || !l.__esModule ? n(p, "default", { value: l, enumerable: !0 }) : p, l));
var z = l => e(n({}, "__esModule", { value: !0 }), l);

// IMPORTAR CSS AQUI
import './index.css';

var G = {};
f(G, { GlitchImage: () => c });
module.exports = z(G);

var a = u(require("react"));

var I = ({ width: l, height: o, image: p, variant: i = "classic", alt: t = "", className: h = "", intensity: g = 5, direction: r = "horizontal" }) => {
  let y = typeof p == "string" ? p : p.src;
  let b = ["glitch", `glitch-style-${i}`, r === "vertical" && "glitch--vertical", h].filter(Boolean).join(" ");
  return a.default.createElement("div", { className: b, style: { "--time-anim": `${g}s`, width: l, height: o }, role: "img", "aria-label": t }, Array.from({ length: 5 }, (H, d) => a.default.createElement("div", { key: d, "aria-hidden": "true", className: "glitch-img", style: { backgroundImage: `url(${y})` } })));
};

var c = I;

0 && (module.exports = { GlitchImage });
