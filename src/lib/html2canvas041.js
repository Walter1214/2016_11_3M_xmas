/*
  html2canvas 0.5.0-alpha1 <http://html2canvas.hertzen.com>
  Copyright (c) 2015 Niklas von Hertzen

  Released under MIT License
*/
(function(a, b, c, d, e, f) {
    function g(a, b, c, d, e) { return p(a, a, c, d, b, a.defaultView.pageXOffset, a.defaultView.pageYOffset).then(function(f) { I("Document cloned"); var g = Vb + e,
                i = "[" + g + "='" + e + "']";
            a.querySelector(i).removeAttribute(g); var j = f.contentWindow,
                k = j.document.querySelector(i),
                l = Promise.resolve("function" == typeof b.onclone ? b.onclone(j.document) : !0); return l.then(function() { return h(k, f, b, c, d) }) }) }

    function h(a, c, d, e, f) { var g = c.contentWindow,
            h = new Lb(g.document),
            m = new G(d, h),
            n = Q(a),
            o = "view" === d.type ? e : k(g.document),
            p = "view" === d.type ? f : l(g.document),
            q = new d.renderer(o, p, m, d, b),
            r = new S(a, q, h, m, d); return r.ready.then(function() { I("Finished rendering"); var b; return b = "view" === d.type ? j(q.canvas, { width: q.canvas.width, height: q.canvas.height, top: 0, left: 0, x: 0, y: 0 }) : a === g.document.body || a === g.document.documentElement || null != d.canvas ? q.canvas : j(q.canvas, { width: null != d.width ? d.width : n.width, height: null != d.height ? d.height : n.height, top: n.top, left: n.left, x: g.pageXOffset, y: g.pageYOffset }), i(c, d), b }) }

    function i(a, b) { b.removeContainer && (a.parentNode.removeChild(a), I("Cleaned up container")) }

    function j(a, c) { var d = b.createElement("canvas"),
            e = Math.min(a.width - 1, Math.max(0, c.left)),
            f = Math.min(a.width, Math.max(1, c.left + c.width)),
            g = Math.min(a.height - 1, Math.max(0, c.top)),
            h = Math.min(a.height, Math.max(1, c.top + c.height)); return d.width = c.width, d.height = c.height, I("Cropping canvas at:", "left:", c.left, "top:", c.top, "width:", f - e, "height:", h - g), I("Resulting crop with width", c.width, "and height", c.height, " with x", e, "and y", g), d.getContext("2d").drawImage(a, e, g, f - e, h - g, c.x, c.y, f - e, h - g), d }

    function k(a) { return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth)) }

    function l(a) { return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight)) }

    function m() { return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }

    function n() { return b.documentMode && b.documentMode <= 9 }

    function o(a, c) { for (var d = 3 === a.nodeType ? b.createTextNode(a.nodeValue) : a.cloneNode(!1), e = a.firstChild; e;)(c === !0 || 1 !== e.nodeType || "SCRIPT" !== e.nodeName) && d.appendChild(o(e, c)), e = e.nextSibling; return d }

    function p(a, b, c, d, e, f, g) { u(a); var h = n() ? o(a.documentElement, e.javascriptEnabled) : a.documentElement.cloneNode(!0),
            i = b.createElement("iframe"); return i.className = "html2canvas-container", i.style.visibility = "hidden", i.style.position = "fixed", i.style.left = "-10000px", i.style.top = "0px", i.style.border = "0", i.width = c, i.height = d, i.scrolling = "no", b.body.appendChild(i), new Promise(function(b) { var c = i.contentWindow.document;
            q(a.documentElement, h, "textarea"), q(a.documentElement, h, "select"), i.contentWindow.onload = i.onload = function() { var d = setInterval(function() { c.body.childNodes.length > 0 && (v(a, c), clearInterval(d), "view" === e.type && i.contentWindow.scrollTo(f, g), b(i)) }, 50) }, c.open(), c.write("<!DOCTYPE html><html></html>"), r(a, f, g), c.replaceChild(e.javascriptEnabled === !0 ? c.adoptNode(h) : w(c.adoptNode(h)), c.documentElement), c.close() }) }

    function q(a, b, c) { for (var d = a.getElementsByTagName(c), e = b.getElementsByTagName(c), f = d.length, g = 0; f > g; g++) e[g].value = d[g].value }

    function r(a, b, c) {!a.defaultView || b === a.defaultView.pageXOffset && c === a.defaultView.pageYOffset || a.defaultView.scrollTo(b, c) }

    function s(b, c, d, e, f, g) { return new Cb(b, c, a.document).then(t(b)).then(function(a) { return p(a, d, e, f, g, 0, 0) }) }

    function t(a) { return function(c) { var d, e = new DOMParser; try { d = e.parseFromString(c, "text/html") } catch (f) { I("DOMParser not supported, falling back to createHTMLDocument"), d = b.implementation.createHTMLDocument(""); try { d.open(), d.write(c), d.close() } catch (g) { I("createHTMLDocument write not supported, falling back to document.body.innerHTML"), d.body.innerHTML = c } } var h = d.querySelector("base"); if (!h || !h.href.host) { var i = d.createElement("base");
                i.href = a, d.head.insertBefore(i, d.head.firstChild) } return d } }

    function u(a) {
        [].slice.call(a.querySelectorAll("canvas"), 0).forEach(function(a) { a.setAttribute(Wb, "canvas-" + Xb++) }) }

    function v(a, b) {
        [].slice.call(a.querySelectorAll("[" + Wb + "]"), 0).forEach(function(a) { try { var c = b.querySelector("[" + Wb + '="' + a.getAttribute(Wb) + '"]');
                c && (c.width = a.width, c.height = a.height, c.getContext("2d").putImageData(a.getContext("2d").getImageData(0, 0, a.width, a.height), 0, 0)) } catch (d) { I("Unable to copy canvas content from", a, d) }
            a.removeAttribute(Wb) }) }

    function w(a) { return [].slice.call(a.childNodes, 0).filter(x).forEach(function(b) { "SCRIPT" === b.tagName ? a.removeChild(b) : w(b) }), a }

    function x(a) { return a.nodeType === Node.ELEMENT_NODE }

    function y(a) { var c = b.createElement("a"); return c.href = a, c.href = c.href, c }

    function z(a) { this.r = 0, this.g = 0, this.b = 0, this.a = null;
        this.fromArray(a) || this.namedColor(a) || this.rgb(a) || this.rgba(a) || this.hex6(a) || this.hex3(a) }

    function A(a) { if (this.src = a, I("DummyImageContainer for", a), !this.promise || !this.image) { I("Initiating DummyImageContainer"), A.prototype.image = new Image; var b = this.image;
            A.prototype.promise = new Promise(function(a, c) { b.onload = a, b.onerror = c, b.src = m(), b.complete === !0 && a(b) }) } }

    function B(a, c) { var d, e, f = b.createElement("div"),
            g = b.createElement("img"),
            h = b.createElement("span"),
            i = "Hidden Text";
        f.style.visibility = "hidden", f.style.fontFamily = a, f.style.fontSize = c, f.style.margin = 0, f.style.padding = 0, b.body.appendChild(f), g.src = m(), g.width = 1, g.height = 1, g.style.margin = 0, g.style.padding = 0, g.style.verticalAlign = "baseline", h.style.fontFamily = a, h.style.fontSize = c, h.style.margin = 0, h.style.padding = 0, h.appendChild(b.createTextNode(i)), f.appendChild(h), f.appendChild(g), d = g.offsetTop - h.offsetTop + 1, f.removeChild(h), f.appendChild(b.createTextNode(i)), f.style.lineHeight = "normal", g.style.verticalAlign = "super", e = g.offsetTop - f.offsetTop + 1, b.body.removeChild(f), this.baseline = d, this.lineWidth = 1, this.middle = e }

    function C() { this.data = {} }

    function D(a, b, c) { this.image = null, this.src = a; var d = this,
            e = Q(a);
        this.promise = (b ? new Promise(function(b) { "about:blank" === a.contentWindow.document.URL || null == a.contentWindow.document.documentElement ? a.contentWindow.onload = a.onload = function() { b(a) } : b(a) }) : this.proxyLoad(c.proxy, e, c)).then(function(a) { return html2canvas(a.contentWindow.document.documentElement, { type: "view", width: a.width, height: a.height, proxy: c.proxy, javascriptEnabled: c.javascriptEnabled, removeContainer: c.removeContainer, allowTaint: c.allowTaint, imageTimeout: c.imageTimeout / 2 }) }).then(function(a) { return d.image = a }) }

    function E(a) { this.src = a.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0) }

    function F(a, b) { this.src = a, this.image = new Image; var c = this;
        this.tainted = null, this.promise = new Promise(function(d, e) { c.image.onload = d, c.image.onerror = e, b && (c.image.crossOrigin = "anonymous"), c.image.src = a, c.image.complete === !0 && d(c.image) }) }

    function G(b, c) { this.link = null, this.options = b, this.support = c, this.origin = this.getOrigin(a.location.href) }

    function H(a) { E.apply(this, arguments), this.type = this.TYPES.LINEAR; var b = null === a.args[0].match(this.stepRegExp);
        b ? a.args[0].split(" ").reverse().forEach(function(a) { switch (a) {
                case "left":
                    this.x0 = 0, this.x1 = 1; break;
                case "top":
                    this.y0 = 0, this.y1 = 1; break;
                case "right":
                    this.x0 = 1, this.x1 = 0; break;
                case "bottom":
                    this.y0 = 1, this.y1 = 0; break;
                case "to":
                    var b = this.y0,
                        c = this.x0;
                    this.y0 = this.y1, this.x0 = this.x1, this.x1 = c, this.y1 = b } }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = a.args.slice(b ? 1 : 0).map(function(a) { var b = a.match(this.stepRegExp); return { color: new z(b[1]), stop: "%" === b[3] ? b[2] / 100 : null } }, this), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(a, b) { null === a.stop && this.colorStops.slice(b).some(function(c, d) { return null !== c.stop ? (a.stop = (c.stop - this.colorStops[b - 1].stop) / (d + 1) + this.colorStops[b - 1].stop, !0) : !1 }, this) }, this) }

    function I() { a.html2canvas.logging && a.console && a.console.log && Function.prototype.bind.call(a.console.log, a.console).apply(a.console, [Date.now() - a.html2canvas.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0))) }

    function J(a, b) { this.node = a, this.parent = b, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null }

    function K(a) { var b = a.options[a.selectedIndex || 0]; return b ? b.text || "" : "" }

    function L(a) { return a && "matrix" === a[1] ? a[2].split(",").map(function(a) { return parseFloat(a.trim()) }) : void 0 }

    function M(a) { return -1 !== a.toString().indexOf("%") }

    function N(a) { var b, c, d, e, f, g, h, i = " \r\n	",
            j = [],
            k = 0,
            l = 0,
            m = function() { b && ('"' === c.substr(0, 1) && (c = c.substr(1, c.length - 2)), c && h.push(c), "-" === b.substr(0, 1) && (e = b.indexOf("-", 1) + 1) > 0 && (d = b.substr(0, e), b = b.substr(e)), j.push({ prefix: d, method: b.toLowerCase(), value: f, args: h, image: null })), h = [], b = d = c = f = "" }; return h = [], b = d = c = f = "", a.split("").forEach(function(a) { if (!(0 === k && i.indexOf(a) > -1)) { switch (a) {
                    case '"':
                        g ? g === a && (g = null) : g = a; break;
                    case "(":
                        if (g) break; if (0 === k) return k = 1, void(f += a);
                        l++; break;
                    case ")":
                        if (g) break; if (1 === k) { if (0 === l) return k = 0, f += a, void m();
                            l-- } break;
                    case ",":
                        if (g) break; if (0 === k) return void m(); if (1 === k && 0 === l && !b.match(/^url$/i)) return h.push(c), c = "", void(f += a) }
                f += a, 0 === k ? b += a : c += a } }), m(), j }

    function O(a) { return a.replace("px", "") }

    function P(a) { return parseFloat(a) }

    function Q(a) { if (a.getBoundingClientRect) { var b = a.getBoundingClientRect(),
                c = null == a.offsetWidth ? b.width : a.offsetWidth; return { top: b.top, bottom: b.bottom || b.top + b.height, right: b.left + c, left: b.left, width: c, height: null == a.offsetHeight ? b.height : a.offsetHeight } } return {} }

    function R(a) { var b = a.offsetParent ? R(a.offsetParent) : { top: 0, left: 0 }; return { top: a.offsetTop + b.top, bottom: a.offsetTop + a.offsetHeight + b.top, right: a.offsetLeft + b.left + a.offsetWidth, left: a.offsetLeft + b.left, width: a.offsetWidth, height: a.offsetHeight } }

    function S(a, b, c, d, e) { I("Starting NodeParser"), this.renderer = b, this.options = e, this.range = null, this.support = c, this.renderQueue = [], this.stack = new Kb(!0, 1, a.ownerDocument, null); var f = new J(a, null); if (e.background && b.rectangle(0, 0, b.width, b.height, new z(e.background)), a === a.ownerDocument.documentElement) { var g = new J(f.color("backgroundColor").isTransparent() ? a.ownerDocument.body : a.ownerDocument.documentElement, null);
            b.rectangle(0, 0, b.width, b.height, g.color("backgroundColor")) }
        f.visibile = f.isElementVisible(), this.createPseudoHideStyles(a.ownerDocument), this.disableAnimations(a.ownerDocument), this.nodes = xb([f].concat(this.getChildren(f)).filter(function(a) { return a.visible = a.isElementVisible() }).map(this.getPseudoElements, this)), this.fontMetrics = new C, I("Fetched nodes, total:", this.nodes.length), I("Calculate overflow clips"), this.calculateOverflowClips(), I("Start fetching images"), this.images = d.fetch(this.nodes.filter(ob)), this.ready = this.images.ready.then(tb(function() { return I("Images loaded, starting parsing"), I("Creating stacking contexts"), this.createStackingContexts(), I("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), I("Render queue created with " + this.renderQueue.length + " items"), new Promise(tb(function(a) { e.async ? "function" == typeof e.async ? e.async.call(this, this.renderQueue, a) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, a)) : a() : (this.renderQueue.forEach(this.paint, this), a()) }, this)) }, this)) }

    function T(a) { return a.parent && a.parent.clip.length }

    function U(a) { return a.replace(/(\-[a-z])/g, function(a) { return a.toUpperCase().replace("-", "") }) }

    function V() {}

    function W(a, b, c, d) { return a.map(function(e, f) { if (e.width > 0) { var g = b.left,
                    h = b.top,
                    i = b.width,
                    j = b.height - a[2].width; switch (f) {
                    case 0:
                        j = a[0].width, e.args = $({ c1: [g, h], c2: [g + i, h], c3: [g + i - a[1].width, h + j], c4: [g + a[3].width, h + j] }, d[0], d[1], c.topLeftOuter, c.topLeftInner, c.topRightOuter, c.topRightInner); break;
                    case 1:
                        g = b.left + b.width - a[1].width, i = a[1].width, e.args = $({ c1: [g + i, h], c2: [g + i, h + j + a[2].width], c3: [g, h + j], c4: [g, h + a[0].width] }, d[1], d[2], c.topRightOuter, c.topRightInner, c.bottomRightOuter, c.bottomRightInner); break;
                    case 2:
                        h = h + b.height - a[2].width, j = a[2].width, e.args = $({ c1: [g + i, h + j], c2: [g, h + j], c3: [g + a[3].width, h], c4: [g + i - a[3].width, h] }, d[2], d[3], c.bottomRightOuter, c.bottomRightInner, c.bottomLeftOuter, c.bottomLeftInner); break;
                    case 3:
                        i = a[3].width, e.args = $({ c1: [g, h + j + a[2].width], c2: [g, h], c3: [g + i, h + a[0].width], c4: [g + i, h + j] }, d[3], d[0], c.bottomLeftOuter, c.bottomLeftInner, c.topLeftOuter, c.topLeftInner) } } return e }) }

    function X(a, b, c, d) { var e = 4 * ((Math.sqrt(2) - 1) / 3),
            f = c * e,
            g = d * e,
            h = a + c,
            i = b + d; return { topLeft: Z({ x: a, y: i }, { x: a, y: i - g }, { x: h - f, y: b }, { x: h, y: b }), topRight: Z({ x: a, y: b }, { x: a + f, y: b }, { x: h, y: i - g }, { x: h, y: i }), bottomRight: Z({ x: h, y: b }, { x: h, y: b + g }, { x: a + f, y: i }, { x: a, y: i }), bottomLeft: Z({ x: h, y: i }, { x: h - f, y: i }, { x: a, y: b + g }, { x: a, y: b }) } }

    function Y(a, b, c) { var d = a.left,
            e = a.top,
            f = a.width,
            g = a.height,
            h = b[0][0],
            i = b[0][1],
            j = b[1][0],
            k = b[1][1],
            l = b[2][0],
            m = b[2][1],
            n = b[3][0],
            o = b[3][1],
            p = f - j,
            q = g - m,
            r = f - l,
            s = g - o; return { topLeftOuter: X(d, e, h, i).topLeft.subdivide(.5), topLeftInner: X(d + c[3].width, e + c[0].width, Math.max(0, h - c[3].width), Math.max(0, i - c[0].width)).topLeft.subdivide(.5), topRightOuter: X(d + p, e, j, k).topRight.subdivide(.5), topRightInner: X(d + Math.min(p, f + c[3].width), e + c[0].width, p > f + c[3].width ? 0 : j - c[3].width, k - c[0].width).topRight.subdivide(.5), bottomRightOuter: X(d + r, e + q, l, m).bottomRight.subdivide(.5), bottomRightInner: X(d + Math.min(r, f - c[3].width), e + Math.min(q, g + c[0].width), Math.max(0, l - c[1].width), m - c[2].width).bottomRight.subdivide(.5), bottomLeftOuter: X(d, e + s, n, o).bottomLeft.subdivide(.5), bottomLeftInner: X(d + c[3].width, e + s, Math.max(0, n - c[3].width), o - c[2].width).bottomLeft.subdivide(.5) } }

    function Z(a, b, c, d) { var e = function(a, b, c) { return { x: a.x + (b.x - a.x) * c, y: a.y + (b.y - a.y) * c } }; return { start: a, startControl: b, endControl: c, end: d, subdivide: function(f) { var g = e(a, b, f),
                    h = e(b, c, f),
                    i = e(c, d, f),
                    j = e(g, h, f),
                    k = e(h, i, f),
                    l = e(j, k, f); return [Z(a, g, j, l), Z(l, k, i, d)] }, curveTo: function(a) { a.push(["bezierCurve", b.x, b.y, c.x, c.y, d.x, d.y]) }, curveToReversed: function(d) { d.push(["bezierCurve", c.x, c.y, b.x, b.y, a.x, a.y]) } } }

    function $(a, b, c, d, e, f, g) { var h = []; return b[0] > 0 || b[1] > 0 ? (h.push(["line", d[1].start.x, d[1].start.y]), d[1].curveTo(h)) : h.push(["line", a.c1[0], a.c1[1]]), c[0] > 0 || c[1] > 0 ? (h.push(["line", f[0].start.x, f[0].start.y]), f[0].curveTo(h), h.push(["line", g[0].end.x, g[0].end.y]), g[0].curveToReversed(h)) : (h.push(["line", a.c2[0], a.c2[1]]), h.push(["line", a.c3[0], a.c3[1]])), b[0] > 0 || b[1] > 0 ? (h.push(["line", e[1].end.x, e[1].end.y]), e[1].curveToReversed(h)) : h.push(["line", a.c4[0], a.c4[1]]), h }

    function _(a, b, c, d, e, f, g) { b[0] > 0 || b[1] > 0 ? (a.push(["line", d[0].start.x, d[0].start.y]), d[0].curveTo(a), d[1].curveTo(a)) : a.push(["line", f, g]), (c[0] > 0 || c[1] > 0) && a.push(["line", e[0].start.x, e[0].start.y]) }

    function ab(a) { return a.cssInt("zIndex") < 0 }

    function bb(a) { return a.cssInt("zIndex") > 0 }

    function cb(a) { return 0 === a.cssInt("zIndex") }

    function db(a) { return -1 !== ["inline", "inline-block", "inline-table"].indexOf(a.css("display")) }

    function eb(a) { return a instanceof Kb }

    function fb(a) { return a.node.data.trim().length > 0 }

    function gb(a) { return /^(normal|none|0px)$/.test(a.parent.css("letterSpacing")) }

    function hb(a) { return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(b) { var c = a.css("border" + b + "Radius"),
                d = c.split(" "); return d.length <= 1 && (d[1] = d[0]), d.map(ub) }) }

    function ib(a) { return a.nodeType === Node.TEXT_NODE || a.nodeType === Node.ELEMENT_NODE }

    function jb(a) { var b = a.css("position"),
            c = -1 !== ["absolute", "relative", "fixed"].indexOf(b) ? a.css("zIndex") : "auto"; return "auto" !== c }

    function kb(a) { return "static" !== a.css("position") }

    function lb(a) { return "none" !== a.css("float") }

    function mb(a) { return -1 !== ["inline-block", "inline-table"].indexOf(a.css("display")) }

    function nb(a) { var b = this; return function() { return !a.apply(b, arguments) } }

    function ob(a) { return a.node.nodeType === Node.ELEMENT_NODE }

    function pb(a) { return a.isPseudoElement === !0 }

    function qb(a) { return a.node.nodeType === Node.TEXT_NODE }

    function rb(a) { return function(b, c) { return b.cssInt("zIndex") + a.indexOf(b) / a.length - (c.cssInt("zIndex") + a.indexOf(c) / a.length) } }

    function sb(a) { return a.getOpacity() < 1 }

    function tb(a, b) { return function() { return a.apply(b, arguments) } }

    function ub(a) { return parseInt(a, 10) }

    function vb(a) { return a.width }

    function wb(a) { return a.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(a.node.nodeName) }

    function xb(a) { return [].concat.apply([], a) }

    function yb(a) { var b = a.substr(0, 1); return b === a.substr(a.length - 1) && b.match(/'|"/) ? a.substr(1, a.length - 2) : a }

    function zb(b) { for (var c, d = [], e = 0, f = !1; b.length;) Ab(b[e]) === f ? (c = b.splice(0, e), c.length && d.push(a.html2canvas.punycode.ucs2.encode(c)), f = !f, e = 0) : e++, e >= b.length && (c = b.splice(0, e), c.length && d.push(a.html2canvas.punycode.ucs2.encode(c))); return d }

    function Ab(a) { return -1 !== [32, 13, 10, 9, 45].indexOf(a) }

    function Bb(a) { return /[^\u0000-\u00ff]/.test(a) }

    function Cb(a, b, c) { if (!b) return Promise.reject("No proxy configured"); var d = Fb(ec),
            e = Gb(b, a, d); return ec ? Sb(e) : Eb(c, e, d).then(function(a) { return Nb(a.content) }) }

    function Db(a, b, c) { var d = Fb(fc),
            e = Gb(b, a, d); return fc ? Promise.resolve(e) : Eb(c, e, d).then(function(a) { return "data:" + a.type + ";base64," + a.content }) }

    function Eb(b, c, d) { return new Promise(function(e, f) { var g = b.createElement("script"),
                h = function() { delete a.html2canvas.proxy[d], b.body.removeChild(g) };
            a.html2canvas.proxy[d] = function(a) { h(), e(a) }, g.src = c, g.onerror = function(a) { h(), f(a) }, b.body.appendChild(g) }) }

    function Fb(a) { return a ? "" : "html2canvas_" + Date.now() + "_" + ++dc + "_" + Math.round(1e5 * Math.random()) }

    function Gb(a, b, c) { return a + "?url=" + encodeURIComponent(b) + (c.length ? "&callback=html2canvas.proxy." + c : "") }

    function Hb(a, c) { var d = (b.createElement("script"), b.createElement("a"));
        d.href = a, a = d.href, this.src = a, this.image = new Image; var e = this;
        this.promise = new Promise(function(d, f) { e.image.crossOrigin = "Anonymous", e.image.onload = d, e.image.onerror = f, new Db(a, c, b).then(function(a) { e.image.src = a })["catch"](f) }) }

    function Ib(a, b, c) { J.call(this, a, b), this.isPseudoElement = !0, this.before = ":before" === c }

    function Jb(a, b, c, d, e) { this.width = a, this.height = b, this.images = c, this.options = d, this.document = e }

    function Kb(a, b, c, d) { J.call(this, c, d), this.ownStacking = a, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * b }

    function Lb(a) { this.rangeBounds = this.testRangeBounds(a), this.cors = this.testCORS(), this.svg = this.testSVG() }

    function Mb(a) { this.src = a, this.image = null; var b = this;
        this.promise = this.hasFabric().then(function() { return b.isInline(a) ? Promise.resolve(b.inlineFormatting(a)) : Sb(a) }).then(function(a) { return new Promise(function(c) { html2canvas.fabric.loadSVGFromString(a, b.createCanvas.call(b, c)) }) }) }

    function Nb(a) { var b, c, d, e, f, g, h, i, j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            k = a.length,
            l = ""; for (b = 0; k > b; b += 4) c = j.indexOf(a[b]), d = j.indexOf(a[b + 1]), e = j.indexOf(a[b + 2]), f = j.indexOf(a[b + 3]), g = c << 2 | d >> 4, h = (15 & d) << 4 | e >> 2, i = (3 & e) << 6 | f, l += 64 === e ? String.fromCharCode(g) : 64 === f || -1 === f ? String.fromCharCode(g, h) : String.fromCharCode(g, h, i); return l }

    function Ob(a, b) { this.src = a, this.image = null; var c = this;
        this.promise = b ? new Promise(function(b, d) { c.image = new Image, c.image.onload = b, c.image.onerror = d, c.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(a), c.image.complete === !0 && b(c.image) }) : this.hasFabric().then(function() { return new Promise(function(b) { html2canvas.fabric.parseSVGDocument(a, c.createCanvas.call(c, b)) }) }) }

    function Pb(a, b) { J.call(this, a, b) }

    function Qb(a, b, c) { return a.length > 0 ? b + c.toUpperCase() : void 0 }

    function Rb(a) { E.apply(this, arguments), this.type = "linear" === a.args[0] ? this.TYPES.LINEAR : this.TYPES.RADIAL }

    function Sb(a) { return new Promise(function(b, c) { var d = new XMLHttpRequest;
            d.open("GET", a), d.onload = function() { 200 === d.status ? b(d.responseText) : c(new Error(d.statusText)) }, d.onerror = function() { c(new Error("Network Error")) }, d.send() }) }

    function Tb(a, b) { Jb.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = a, this.canvas.height = b), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, I("Initialized CanvasRenderer with size", a, "x", b) }

    function Ub(a) { return a.length > 0 }
    if (function() {
            function c(a, b) { F[C] = a, F[C + 1] = b, C += 2, 2 === C && A() }

            function f(a) { return "function" == typeof a }

            function g() { return function() { process.nextTick(k) } }

            function h() { var a = 0,
                    c = new E(k),
                    d = b.createTextNode(""); return c.observe(d, { characterData: !0 }),
                    function() { d.data = a = ++a % 2 } }

            function i() { var a = new MessageChannel; return a.port1.onmessage = k,
                    function() { a.port2.postMessage(0) } }

            function j() { return function() { setTimeout(k, 1) } }

            function k() { for (var a = 0; C > a; a += 2) F[a](F[a + 1]), F[a] = void 0, F[a + 1] = void 0;
                C = 0 }

            function l() {}

            function m(a, b, c, d) { try { a.call(b, c, d) } catch (e) { return e } }

            function n(a, b, d) { c(function(a) { var c = !1,
                        e = m(d, b, function(d) { c || (c = !0, b !== d ? p(a, d) : r(a, d)) }, function(b) { c || (c = !0, s(a, b)) });!c && e && (c = !0, s(a, e)) }, a) }

            function o(a, b) { 1 === b.a ? r(a, b.b) : 2 === a.a ? s(a, b.b) : t(b, void 0, function(b) { p(a, b) }, function(b) { s(a, b) }) }

            function p(a, b) { if (a === b) s(a, new TypeError("You cannot resolve a promise with itself"));
                else if ("function" == typeof b || "object" == typeof b && null !== b)
                    if (b.constructor === a.constructor) o(a, b);
                    else { var c; try { c = b.then } catch (d) { G.error = d, c = G }
                        c === G ? s(a, G.error) : void 0 === c ? r(a, b) : f(c) ? n(a, b, c) : r(a, b) }
                else r(a, b) }

            function q(a) { a.f && a.f(a.b), u(a) }

            function r(a, b) { void 0 === a.a && (a.b = b, a.a = 1, 0 !== a.e.length && c(u, a)) }

            function s(a, b) { void 0 === a.a && (a.a = 2, a.b = b, c(q, a)) }

            function t(a, b, d, e) { var f = a.e,
                    g = f.length;
                a.f = null, f[g] = b, f[g + 1] = d, f[g + 2] = e, 0 === g && a.a && c(u, a) }

            function u(a) { var b = a.e,
                    c = a.a; if (0 !== b.length) { for (var d, e, f = a.b, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? w(c, d, e, f) : e(f);
                    a.e.length = 0 } }

            function v() { this.error = null }

            function w(a, b, c, d) { var e, g, h, i, j = f(c); if (j) { try { e = c(d) } catch (k) { H.error = k, e = H } if (e === H ? (i = !0, g = e.error, e = null) : h = !0, b === e) return void s(b, new TypeError("A promises callback cannot return that same promise.")) } else e = d, h = !0;
                void 0 === b.a && (j && h ? p(b, e) : i ? s(b, g) : 1 === a ? r(b, e) : 2 === a && s(b, e)) }

            function x(a, b) { try { b(function(b) { p(a, b) }, function(b) { s(a, b) }) } catch (c) { s(a, c) } }

            function y(a, b, c, d) { this.n = a, this.c = new a(l, d), this.i = c, this.o(b) ? (this.m = b, this.d = this.length = b.length, this.l(), 0 === this.length ? r(this.c, this.b) : (this.length = this.length || 0, this.k(), 0 === this.d && r(this.c, this.b))) : s(this.c, this.p()) }

            function z(a) { if (I++, this.b = this.a = void 0, this.e = [], l !== a) { if (!f(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor"); if (!(this instanceof z)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    x(this, a) } } var A, B = Array.isArray ? Array.isArray : function(a) { return "[object Array]" === Object.prototype.toString.call(a) },
                C = 0,
                D = "undefined" != typeof a ? a : {},
                E = D.MutationObserver || D.WebKitMutationObserver,
                D = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                F = Array(1e3);
            A = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? g() : E ? h() : D ? i() : j(); var G = new v,
                H = new v;
            y.prototype.o = function(a) { return B(a) }, y.prototype.p = function() { return Error("Array Methods must be provided an Array") }, y.prototype.l = function() { this.b = Array(this.length) }, y.prototype.k = function() { for (var a = this.length, b = this.c, c = this.m, d = 0; void 0 === b.a && a > d; d++) this.j(c[d], d) }, y.prototype.j = function(a, b) { var c = this.n; "object" == typeof a && null !== a ? a.constructor === c && void 0 !== a.a ? (a.f = null, this.g(a.a, b, a.b)) : this.q(c.resolve(a), b) : (this.d--, this.b[b] = this.h(a)) }, y.prototype.g = function(a, b, c) { var d = this.c;
                void 0 === d.a && (this.d--, this.i && 2 === a ? s(d, c) : this.b[b] = this.h(c)), 0 === this.d && r(d, this.b) }, y.prototype.h = function(a) { return a }, y.prototype.q = function(a, b) { var c = this;
                t(a, void 0, function(a) { c.g(1, b, a) }, function(a) { c.g(2, b, a) }) }; var I = 0;
            z.all = function(a, b) { return new y(this, a, !0, b).c }, z.race = function(a, b) {
                function c(a) { p(e, a) }

                function d(a) { s(e, a) } var e = new this(l, b); if (!B(a)) return s(e, new TypeError("You must pass an array to race.")), e; for (var f = a.length, g = 0; void 0 === e.a && f > g; g++) t(this.resolve(a[g]), void 0, c, d); return e }, z.resolve = function(a, b) { if (a && "object" == typeof a && a.constructor === this) return a; var c = new this(l, b); return p(c, a), c }, z.reject = function(a, b) { var c = new this(l, b); return s(c, a), c }, z.prototype = { constructor: z, then: function(a, b) { var d = this.a; if (1 === d && !a || 2 === d && !b) return this; var e = new this.constructor(l),
                        f = this.b; if (d) { var g = arguments[d - 1];
                        c(function() { w(d, e, g, f) }) } else t(this, e, a, b); return e }, "catch": function(a) { return this.then(null, a) } }; var J = { Promise: z, polyfill: function() { var b;
                    b = "undefined" != typeof d ? d : "undefined" != typeof a && a.document ? a : self, "Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise && function() { var a; return new b.Promise(function(b) { a = b }), f(a) }() || (b.Promise = z) } }; "function" == typeof e && e.amd ? e(function() { return J }) : "undefined" != typeof module && module.exports ? module.exports = J : "undefined" != typeof this && (this.ES6Promise = J) }.call(a), a && a.ES6Promise.polyfill(), "undefined" == typeof b || "function" != typeof Object.create || "function" != typeof b.createElement("canvas").getContext) return void((a || module.exports).html2canvas = function() { return Promise.reject("No canvas support") });
    ! function(a) {
        function b(a) { throw RangeError(H[a]) }

        function f(a, b) { for (var c = a.length, d = []; c--;) d[c] = b(a[c]); return d }

        function g(a, b) { var c = a.split("@"),
                d = "";
            c.length > 1 && (d = c[0] + "@", a = c[1]); var e = a.split(G),
                g = f(e, b).join("."); return d + g }

        function h(a) { for (var b, c, d = [], e = 0, f = a.length; f > e;) b = a.charCodeAt(e++), b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++), 56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b), e--)) : d.push(b); return d }

        function i(a) { return f(a, function(a) { var b = ""; return a > 65535 && (a -= 65536, b += K(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), b += K(a) }).join("") }

        function j(a) { return 10 > a - 48 ? a - 22 : 26 > a - 65 ? a - 65 : 26 > a - 97 ? a - 97 : w }

        function k(a, b) { return a + 22 + 75 * (26 > a) - ((0 != b) << 5) }

        function l(a, b, c) { var d = 0; for (a = c ? J(a / A) : a >> 1, a += J(a / b); a > I * y >> 1; d += w) a = J(a / I); return J(d + (I + 1) * a / (a + z)) }

        function m(a) { var c, d, e, f, g, h, k, m, n, o, p = [],
                q = a.length,
                r = 0,
                s = C,
                t = B; for (d = a.lastIndexOf(D), 0 > d && (d = 0), e = 0; d > e; ++e) a.charCodeAt(e) >= 128 && b("not-basic"), p.push(a.charCodeAt(e)); for (f = d > 0 ? d + 1 : 0; q > f;) { for (g = r, h = 1, k = w; f >= q && b("invalid-input"), m = j(a.charCodeAt(f++)), (m >= w || m > J((v - r) / h)) && b("overflow"), r += m * h, n = t >= k ? x : k >= t + y ? y : k - t, !(n > m); k += w) o = w - n, h > J(v / o) && b("overflow"), h *= o;
                c = p.length + 1, t = l(r - g, c, 0 == g), J(r / c) > v - s && b("overflow"), s += J(r / c), r %= c, p.splice(r++, 0, s) } return i(p) }

        function n(a) { var c, d, e, f, g, i, j, m, n, o, p, q, r, s, t, u = []; for (a = h(a), q = a.length, c = C, d = 0, g = B, i = 0; q > i; ++i) p = a[i], 128 > p && u.push(K(p)); for (e = f = u.length, f && u.push(D); q > e;) { for (j = v, i = 0; q > i; ++i) p = a[i], p >= c && j > p && (j = p); for (r = e + 1, j - c > J((v - d) / r) && b("overflow"), d += (j - c) * r, c = j, i = 0; q > i; ++i)
                    if (p = a[i], c > p && ++d > v && b("overflow"), p == c) { for (m = d, n = w; o = g >= n ? x : n >= g + y ? y : n - g, !(o > m); n += w) t = m - o, s = w - o, u.push(K(k(o + t % s, 0))), m = J(t / s);
                        u.push(K(k(m, 0))), g = l(d, r, e == f), d = 0, ++e }++d, ++c } return u.join("") }

        function o(a) { return g(a, function(a) { return E.test(a) ? m(a.slice(4).toLowerCase()) : a }) }

        function p(a) { return g(a, function(a) { return F.test(a) ? "xn--" + n(a) : a }) } var q = "object" == typeof c && c && !c.nodeType && c,
            r = "object" == typeof module && module && !module.nodeType && module,
            s = "object" == typeof d && d;
        (s.global === s || s.window === s || s.self === s) && (a = s); var t, u, v = 2147483647,
            w = 36,
            x = 1,
            y = 26,
            z = 38,
            A = 700,
            B = 72,
            C = 128,
            D = "-",
            E = /^xn--/,
            F = /[^\x20-\x7E]/,
            G = /[\x2E\u3002\uFF0E\uFF61]/g,
            H = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
            I = w - x,
            J = Math.floor,
            K = String.fromCharCode; if (t = { version: "1.3.1", ucs2: { decode: h, encode: i }, decode: m, encode: n, toASCII: p, toUnicode: o }, "function" == typeof e && "object" == typeof e.amd && e.amd) e("punycode", function() { return t });
        else if (q && r)
            if (module.exports == q) r.exports = t;
            else
                for (u in t) t.hasOwnProperty(u) && (q[u] = t[u]);
        else a.punycode = t }(this);
    var Vb = "data-html2canvas-node",
        Wb = "data-html2canvas-canvas-clone",
        Xb = 0,
        Yb = 0;
    a.html2canvas = function(c, d) { var e = Yb++; if (d = d || {}, d.logging && (a.html2canvas.logging = !0, a.html2canvas.start = Date.now()), d.async = "undefined" == typeof d.async ? !0 : d.async, d.allowTaint = "undefined" == typeof d.allowTaint ? !1 : d.allowTaint, d.removeContainer = "undefined" == typeof d.removeContainer ? !0 : d.removeContainer, d.javascriptEnabled = "undefined" == typeof d.javascriptEnabled ? !1 : d.javascriptEnabled, d.imageTimeout = "undefined" == typeof d.imageTimeout ? 1e4 : d.imageTimeout, d.renderer = "function" == typeof d.renderer ? d.renderer : Tb, d.strict = !!d.strict, "string" == typeof c) { if ("string" != typeof d.proxy) return Promise.reject("Proxy must be used when rendering url"); var i = null != d.width ? d.width : a.innerWidth,
                j = null != d.height ? d.height : a.innerHeight; return s(y(c), d.proxy, b, i, j, d).then(function(a) { return h(a.contentWindow.document.documentElement, a, d, i, j) }) } var k = (c === f ? [b.documentElement] : c.length ? c : [c])[0]; return k.setAttribute(Vb + e, e), g(k.ownerDocument, d, k.ownerDocument.defaultView.innerWidth, k.ownerDocument.defaultView.innerHeight, e).then(function(a) { return "function" == typeof d.onrendered && (I("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), d.onrendered(a)), a }) }, a.html2canvas.punycode = this.punycode, a.html2canvas.proxy = {}, z.prototype.darken = function(a) { var b = 1 - a; return new z([Math.round(this.r * b), Math.round(this.g * b), Math.round(this.b * b), this.a]) }, z.prototype.isTransparent = function() { return 0 === this.a }, z.prototype.isBlack = function() { return 0 === this.r && 0 === this.g && 0 === this.b }, z.prototype.fromArray = function(a) { return Array.isArray(a) && (this.r = Math.min(a[0], 255), this.g = Math.min(a[1], 255), this.b = Math.min(a[2], 255), a.length > 3 && (this.a = a[3])), Array.isArray(a) };
    var Zb = /^#([a-f0-9]{3})$/i;
    z.prototype.hex3 = function(a) { var b = null; return null !== (b = a.match(Zb)) && (this.r = parseInt(b[1][0] + b[1][0], 16), this.g = parseInt(b[1][1] + b[1][1], 16), this.b = parseInt(b[1][2] + b[1][2], 16)), null !== b };
    var $b = /^#([a-f0-9]{6})$/i;
    z.prototype.hex6 = function(a) { var b = null; return null !== (b = a.match($b)) && (this.r = parseInt(b[1].substring(0, 2), 16), this.g = parseInt(b[1].substring(2, 4), 16), this.b = parseInt(b[1].substring(4, 6), 16)), null !== b };
    var _b = /^rgb\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3})\)$/;
    z.prototype.rgb = function(a) { var b = null; return null !== (b = a.match(_b)) && (this.r = Number(b[1]), this.g = Number(b[2]), this.b = Number(b[3])), null !== b };
    var ac = /^rgba\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *, *(\d+\.?\d*)\)$/;
    z.prototype.rgba = function(a) { var b = null; return null !== (b = a.match(ac)) && (this.r = Number(b[1]), this.g = Number(b[2]), this.b = Number(b[3]), this.a = Number(b[4])), null !== b }, z.prototype.toString = function() { return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")" }, z.prototype.namedColor = function(a) { var b = bc[a.toLowerCase()]; if (b) this.r = b[0], this.g = b[1], this.b = b[2];
        else if ("transparent" === a.toLowerCase()) return this.r = this.g = this.b = this.a = 0, !0; return !!b }, z.prototype.isColor = !0;
    var bc = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    C.prototype.getMetrics = function(a, b) { return this.data[a + "-" + b] === f && (this.data[a + "-" + b] = new B(a, b)), this.data[a + "-" + b] }, D.prototype.proxyLoad = function(a, b, c) { var d = this.src; return s(d.src, a, d.ownerDocument, b.width, b.height, c) }, E.prototype.TYPES = { LINEAR: 1, RADIAL: 2 }, G.prototype.findImages = function(a) { var b = []; return a.reduce(function(a, b) { switch (b.node.nodeName) {
                case "IMG":
                    return a.concat([{ args: [b.node.src], method: "url" }]);
                case "svg":
                case "IFRAME":
                    return a.concat([{ args: [b.node], method: b.node.nodeName }]) } return a }, []).forEach(this.addImage(b, this.loadImage), this), b }, G.prototype.findBackgroundImage = function(a, b) { return b.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(a, this.loadImage), this), a }, G.prototype.addImage = function(a, b) { return function(c) { c.args.forEach(function(d) { this.imageExists(a, d) || (a.splice(0, 0, b.call(this, c)), I("Added image #" + a.length, "string" == typeof d ? d.substring(0, 100) : d)) }, this) } }, G.prototype.hasImageBackground = function(a) { return "none" !== a.method }, G.prototype.loadImage = function(a) { if ("url" === a.method) { var b = a.args[0]; return !this.isSVG(b) || this.support.svg || this.options.allowTaint ? b.match(/data:image\/.*;base64,/i) ? new F(b.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(b) || this.options.allowTaint === !0 || this.isSVG(b) ? new F(b, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new F(b, !0) : this.options.proxy ? new Hb(b, this.options.proxy) : new A(b) : new Mb(b) } return "linear-gradient" === a.method ? new H(a) : "gradient" === a.method ? new Rb(a) : "svg" === a.method ? new Ob(a.args[0], this.support.svg) : "IFRAME" === a.method ? new D(a.args[0], this.isSameOrigin(a.args[0].src), this.options) : new A(a) }, G.prototype.isSVG = function(a) { return "svg" === a.substring(a.length - 3).toLowerCase() || Mb.prototype.isInline(a) }, G.prototype.imageExists = function(a, b) { return a.some(function(a) { return a.src === b }) }, G.prototype.isSameOrigin = function(a) { return this.getOrigin(a) === this.origin }, G.prototype.getOrigin = function(a) { var c = this.link || (this.link = b.createElement("a")); return c.href = a, c.href = c.href, c.protocol + c.hostname + c.port }, G.prototype.getPromise = function(a) { return this.timeout(a, this.options.imageTimeout)["catch"](function() { var b = new A(a.src); return b.promise.then(function(b) { a.image = b }) }) }, G.prototype.get = function(a) { var b = null; return this.images.some(function(c) { return (b = c).src === a }) ? b : null }, G.prototype.fetch = function(a) { return this.images = a.reduce(tb(this.findBackgroundImage, this), this.findImages(a)), this.images.forEach(function(a, b) { a.promise.then(function() { I("Succesfully loaded image #" + (b + 1), a) }, function(c) { I("Failed loading image #" + (b + 1), a, c) }) }), this.ready = Promise.all(this.images.map(this.getPromise, this)), I("Finished searching images"), this }, G.prototype.timeout = function(a, b) { var c, d = Promise.race([a.promise, new Promise(function(d, e) { c = setTimeout(function() { I("Timed out loading image", a), e(a) }, b) })]).then(function(a) { return clearTimeout(c), a }); return d["catch"](function() { clearTimeout(c) }), d }, H.prototype = Object.create(E.prototype), H.prototype.stepRegExp = /((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/, J.prototype.cloneTo = function(a) { a.visible = this.visible, a.borders = this.borders, a.bounds = this.bounds, a.clip = this.clip, a.backgroundClip = this.backgroundClip, a.computedStyles = this.computedStyles, a.styles = this.styles, a.backgroundImages = this.backgroundImages, a.opacity = this.opacity }, J.prototype.getOpacity = function() { return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity }, J.prototype.assignStack = function(a) { this.stack = a, a.children.push(this) }, J.prototype.isElementVisible = function() { return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type")) }, J.prototype.css = function(a) { return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[a] || (this.styles[a] = this.computedStyles[a]) }, J.prototype.prefixedCss = function(a) { var b = ["webkit", "moz", "ms", "o"],
            c = this.css(a); return c === f && b.some(function(b) { return c = this.css(b + a.substr(0, 1).toUpperCase() + a.substr(1)), c !== f }, this), c === f ? null : c }, J.prototype.computedStyle = function(a) { return this.node.ownerDocument.defaultView.getComputedStyle(this.node, a) }, J.prototype.cssInt = function(a) { var b = parseInt(this.css(a), 10); return isNaN(b) ? 0 : b }, J.prototype.color = function(a) { return this.colors[a] || (this.colors[a] = new z(this.css(a))) }, J.prototype.cssFloat = function(a) { var b = parseFloat(this.css(a)); return isNaN(b) ? 0 : b }, J.prototype.fontWeight = function() { var a = this.css("fontWeight"); switch (parseInt(a, 10)) {
            case 401:
                a = "bold"; break;
            case 400:
                a = "normal" } return a }, J.prototype.parseClip = function() { var a = this.css("clip").match(this.CLIP); return a ? { top: parseInt(a[1], 10), right: parseInt(a[2], 10), bottom: parseInt(a[3], 10), left: parseInt(a[4], 10) } : null }, J.prototype.parseBackgroundImages = function() { return this.backgroundImages || (this.backgroundImages = N(this.css("backgroundImage"))) }, J.prototype.cssList = function(a, b) { var c = (this.css(a) || "").split(","); return c = c[b || 0] || c[0] || "auto", c = c.trim().split(" "), 1 === c.length && (c = [c[0], c[0]]), c }, J.prototype.parseBackgroundSize = function(a, b, c) { var d, e, f = this.cssList("backgroundSize", c); if (M(f[0])) d = a.width * parseFloat(f[0]) / 100;
        else { if (/contain|cover/.test(f[0])) { var g = a.width / a.height,
                    h = b.width / b.height; return h > g ^ "contain" === f[0] ? { width: a.height * h, height: a.height } : { width: a.width, height: a.width / h } }
            d = parseInt(f[0], 10) } return e = "auto" === f[0] && "auto" === f[1] ? b.height : "auto" === f[1] ? d / b.width * b.height : M(f[1]) ? a.height * parseFloat(f[1]) / 100 : parseInt(f[1], 10), "auto" === f[0] && (d = e / b.height * b.width), { width: d, height: e } }, J.prototype.parseBackgroundPosition = function(a, b, c, d) { var e, f, g = this.cssList("backgroundPosition", c); return e = M(g[0]) ? (a.width - (d || b).width) * (parseFloat(g[0]) / 100) : parseInt(g[0], 10), f = "auto" === g[1] ? e / b.width * b.height : M(g[1]) ? (a.height - (d || b).height) * parseFloat(g[1]) / 100 : parseInt(g[1], 10), "auto" === g[0] && (e = f / b.height * b.width), { left: e, top: f } }, J.prototype.parseBackgroundRepeat = function(a) { return this.cssList("backgroundRepeat", a)[0] }, J.prototype.parseTextShadows = function() { var a = this.css("textShadow"),
            b = []; if (a && "none" !== a)
            for (var c = a.match(this.TEXT_SHADOW_PROPERTY), d = 0; c && d < c.length; d++) { var e = c[d].match(this.TEXT_SHADOW_VALUES);
                b.push({ color: new z(e[0]), offsetX: e[1] ? parseFloat(e[1].replace("px", "")) : 0, offsetY: e[2] ? parseFloat(e[2].replace("px", "")) : 0, blur: e[3] ? e[3].replace("px", "") : 0 }) }
        return b }, J.prototype.parseTransform = function() { if (!this.transformData)
            if (this.hasTransform()) { var a = this.parseBounds(),
                    b = this.prefixedCss("transformOrigin").split(" ").map(O).map(P);
                b[0] += a.left, b[1] += a.top, this.transformData = { origin: b, matrix: this.parseTransformMatrix() } } else this.transformData = { origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0] };
        return this.transformData }, J.prototype.parseTransformMatrix = function() { if (!this.transformMatrix) { var a = this.prefixedCss("transform"),
                b = a ? L(a.match(this.MATRIX_PROPERTY)) : null;
            this.transformMatrix = b ? b : [1, 0, 0, 1, 0, 0] } return this.transformMatrix }, J.prototype.parseBounds = function() { return this.bounds || (this.bounds = this.hasTransform() ? R(this.node) : Q(this.node)) }, J.prototype.hasTransform = function() { return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform() }, J.prototype.getValue = function() { var a = this.node.value || ""; return "SELECT" === this.node.tagName ? a = K(this.node) : "password" === this.node.type && (a = Array(a.length + 1).join("•")), 0 === a.length ? this.node.placeholder || "" : a }, J.prototype.MATRIX_PROPERTY = /(matrix)\((.+)\)/, J.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, J.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, J.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, S.prototype.calculateOverflowClips = function() { this.nodes.forEach(function(a) { if (ob(a)) { pb(a) && a.appendToDOM(), a.borders = this.parseBorders(a); var b = "hidden" === a.css("overflow") ? [a.borders.clip] : [],
                    c = a.parseClip();
                c && -1 !== ["absolute", "fixed"].indexOf(a.css("position")) && b.push([
                    ["rect", a.bounds.left + c.left, a.bounds.top + c.top, c.right - c.left, c.bottom - c.top]
                ]), a.clip = T(a) ? a.parent.clip.concat(b) : b, a.backgroundClip = "hidden" !== a.css("overflow") ? a.clip.concat([a.borders.clip]) : a.clip, pb(a) && a.cleanDOM() } else qb(a) && (a.clip = T(a) ? a.parent.clip : []);
            pb(a) || (a.bounds = null) }, this) }, S.prototype.asyncRenderer = function(a, b, c) { c = c || Date.now(), this.paint(a[this.renderIndex++]), a.length === this.renderIndex ? b() : c + 20 > Date.now() ? this.asyncRenderer(a, b, c) : setTimeout(tb(function() { this.asyncRenderer(a, b) }, this), 0) }, S.prototype.createPseudoHideStyles = function(a) { this.createStyles(a, "." + Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }') }, S.prototype.disableAnimations = function(a) { this.createStyles(a, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}") }, S.prototype.createStyles = function(a, b) { var c = a.createElement("style");
        c.innerHTML = b, a.body.appendChild(c) }, S.prototype.getPseudoElements = function(a) { var b = [
            [a]
        ]; if (a.node.nodeType === Node.ELEMENT_NODE) { var c = this.getPseudoElement(a, ":before"),
                d = this.getPseudoElement(a, ":after");
            c && b.push(c), d && b.push(d) } return xb(b) }, S.prototype.getPseudoElement = function(a, c) { var d = a.computedStyle(c); if (!d || !d.content || "none" === d.content || "-moz-alt-content" === d.content || "none" === d.display) return null; for (var e = yb(d.content), f = "url" === e.substr(0, 3), g = b.createElement(f ? "img" : "html2canvaspseudoelement"), h = new Ib(g, a, c), i = d.length - 1; i >= 0; i--) { var j = U(d.item(i));
            g.style[j] = d[j] } if (g.className = Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, f) return g.src = N(e)[0].args[0], [h]; var k = b.createTextNode(e); return g.appendChild(k), [h, new Pb(k, h)] }, S.prototype.getChildren = function(a) { return xb([].filter.call(a.node.childNodes, ib).map(function(b) { var c = [b.nodeType === Node.TEXT_NODE ? new Pb(b, a) : new J(b, a)].filter(wb); return b.nodeType === Node.ELEMENT_NODE && c.length && "TEXTAREA" !== b.tagName ? c[0].isElementVisible() ? c.concat(this.getChildren(c[0])) : [] : c }, this)) }, S.prototype.newStackingContext = function(a, b) { var c = new Kb(b, a.getOpacity(), a.node, a.parent);
        a.cloneTo(c); var d = b ? c.getParentStack(this) : c.parent.stack;
        d.contexts.push(c), a.stack = c }, S.prototype.createStackingContexts = function() { this.nodes.forEach(function(a) { ob(a) && (this.isRootElement(a) || sb(a) || jb(a) || this.isBodyWithTransparentRoot(a) || a.hasTransform()) ? this.newStackingContext(a, !0) : ob(a) && (kb(a) && cb(a) || mb(a) || lb(a)) ? this.newStackingContext(a, !1) : a.assignStack(a.parent.stack) }, this) }, S.prototype.isBodyWithTransparentRoot = function(a) { return "BODY" === a.node.nodeName && a.parent.color("backgroundColor").isTransparent() }, S.prototype.isRootElement = function(a) { return null === a.parent }, S.prototype.sortStackingContexts = function(a) { a.contexts.sort(rb(a.contexts.slice(0))), a.contexts.forEach(this.sortStackingContexts, this) }, S.prototype.parseTextBounds = function(a) { return function(b, c, d) { if ("none" !== a.parent.css("textDecoration").substr(0, 4) || 0 !== b.trim().length) { if (this.support.rangeBounds && !a.parent.hasTransform()) { var e = d.slice(0, c).join("").length; return this.getRangeBounds(a.node, e, b.length) } if (a.node && "string" == typeof a.node.data) { var f = a.node.splitText(b.length),
                        g = this.getWrapperBounds(a.node, a.parent.hasTransform()); return a.node = f, g } } else(!this.support.rangeBounds || a.parent.hasTransform()) && (a.node = a.node.splitText(b.length)); return {} } }, S.prototype.getWrapperBounds = function(a, b) { var c = a.ownerDocument.createElement("html2canvaswrapper"),
            d = a.parentNode,
            e = a.cloneNode(!0);
        c.appendChild(a.cloneNode(!0)), d.replaceChild(c, a); var f = b ? R(c) : Q(c); return d.replaceChild(e, c), f }, S.prototype.getRangeBounds = function(a, b, c) { var d = this.range || (this.range = a.ownerDocument.createRange()); return d.setStart(a, b), d.setEnd(a, b + c), d.getBoundingClientRect() }, S.prototype.parse = function(a) { var b = a.contexts.filter(ab),
            c = a.children.filter(ob),
            d = c.filter(nb(lb)),
            e = d.filter(nb(kb)).filter(nb(db)),
            f = c.filter(nb(kb)).filter(lb),
            g = d.filter(nb(kb)).filter(db),
            h = a.contexts.concat(d.filter(kb)).filter(cb),
            i = a.children.filter(qb).filter(fb),
            j = a.contexts.filter(bb);
        b.concat(e).concat(f).concat(g).concat(h).concat(i).concat(j).forEach(function(a) { this.renderQueue.push(a), eb(a) && (this.parse(a), this.renderQueue.push(new V)) }, this) }, S.prototype.paint = function(a) { try { a instanceof V ? this.renderer.ctx.restore() : qb(a) ? (pb(a.parent) && a.parent.appendToDOM(), this.paintText(a), pb(a.parent) && a.parent.cleanDOM()) : this.paintNode(a) } catch (b) { if (I(b), this.options.strict) throw b } }, S.prototype.paintNode = function(a) { eb(a) && (this.renderer.setOpacity(a.opacity), this.renderer.ctx.save(), a.hasTransform() && this.renderer.setTransform(a.parseTransform())), "INPUT" === a.node.nodeName && "checkbox" === a.node.type ? this.paintCheckbox(a) : "INPUT" === a.node.nodeName && "radio" === a.node.type ? this.paintRadio(a) : this.paintElement(a) }, S.prototype.paintElement = function(a) { var b = a.parseBounds();
        this.renderer.clip(a.backgroundClip, function() { this.renderer.renderBackground(a, b, a.borders.borders.map(vb)) }, this), this.renderer.clip(a.clip, function() { this.renderer.renderBorders(a.borders.borders) }, this), this.renderer.clip(a.backgroundClip, function() { switch (a.node.nodeName) {
                case "svg":
                case "IFRAME":
                    var c = this.images.get(a.node);
                    c ? this.renderer.renderImage(a, b, a.borders, c) : I("Error loading <" + a.node.nodeName + ">", a.node); break;
                case "IMG":
                    var d = this.images.get(a.node.src);
                    d ? this.renderer.renderImage(a, b, a.borders, d) : I("Error loading <img>", a.node.src); break;
                case "CANVAS":
                    this.renderer.renderImage(a, b, a.borders, { image: a.node }); break;
                case "SELECT":
                case "INPUT":
                case "TEXTAREA":
                    this.paintFormValue(a) } }, this) }, S.prototype.paintCheckbox = function(a) { var b = a.parseBounds(),
            c = Math.min(b.width, b.height),
            d = { width: c - 1, height: c - 1, top: b.top, left: b.left },
            e = [3, 3],
            f = [e, e, e, e],
            g = [1, 1, 1, 1].map(function(a) { return { color: new z("#A5A5A5"), width: a } }),
            h = Y(d, f, g);
        this.renderer.clip(a.backgroundClip, function() { this.renderer.rectangle(d.left + 1, d.top + 1, d.width - 2, d.height - 2, new z("#DEDEDE")), this.renderer.renderBorders(W(g, d, h, f)), a.node.checked && (this.renderer.font(new z("#424242"), "normal", "normal", "bold", c - 3 + "px", "arial"), this.renderer.text("✔", d.left + c / 6, d.top + c - 1)) }, this) }, S.prototype.paintRadio = function(a) { var b = a.parseBounds(),
            c = Math.min(b.width, b.height) - 2;
        this.renderer.clip(a.backgroundClip, function() { this.renderer.circleStroke(b.left + 1, b.top + 1, c, new z("#DEDEDE"), 1, new z("#A5A5A5")), a.node.checked && this.renderer.circle(Math.ceil(b.left + c / 4) + 1, Math.ceil(b.top + c / 4) + 1, Math.floor(c / 2), new z("#424242")) }, this) }, S.prototype.paintFormValue = function(a) { var b = a.getValue(); if (b.length > 0) { var c = a.node.ownerDocument,
                d = c.createElement("html2canvaswrapper"),
                e = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
            e.forEach(function(b) { try { d.style[b] = a.css(b) } catch (c) { I("html2canvas: Parse: Exception caught in renderFormValue: " + c.message) } }); var f = a.parseBounds();
            d.style.position = "fixed", d.style.left = f.left + "px", d.style.top = f.top + "px", d.textContent = b, c.body.appendChild(d), this.paintText(new Pb(d.firstChild, a)), c.body.removeChild(d) } }, S.prototype.paintText = function(b) { b.applyTextTransform(); var c = a.html2canvas.punycode.ucs2.decode(b.node.data),
            d = this.options.letterRendering && !gb(b) || Bb(b.node.data) ? c.map(function(b) { return a.html2canvas.punycode.ucs2.encode([b]) }) : zb(c),
            e = b.parent.fontWeight(),
            f = b.parent.css("fontSize"),
            g = b.parent.css("fontFamily"),
            h = b.parent.parseTextShadows();
        this.renderer.font(b.parent.color("color"), b.parent.css("fontStyle"), b.parent.css("fontVariant"), e, f, g), h.length ? this.renderer.fontShadow(h[0].color, h[0].offsetX, h[0].offsetY, h[0].blur) : this.renderer.clearShadow(), this.renderer.clip(b.parent.clip, function() { d.map(this.parseTextBounds(b), this).forEach(function(a, c) { a && (this.renderer.text(d[c], a.left, a.bottom), this.renderTextDecoration(b.parent, a, this.fontMetrics.getMetrics(g, f))) }, this) }, this) }, S.prototype.renderTextDecoration = function(a, b, c) { switch (a.css("textDecoration").split(" ")[0]) {
            case "underline":
                this.renderer.rectangle(b.left, Math.round(b.top + c.baseline + c.lineWidth), b.width, 1, a.color("color")); break;
            case "overline":
                this.renderer.rectangle(b.left, Math.round(b.top), b.width, 1, a.color("color")); break;
            case "line-through":
                this.renderer.rectangle(b.left, Math.ceil(b.top + c.middle + c.lineWidth), b.width, 1, a.color("color")) } };
    var cc = { inset: [
            ["darken", .6],
            ["darken", .1],
            ["darken", .1],
            ["darken", .6]
        ] };
    S.prototype.parseBorders = function(a) { var b = a.parseBounds(),
            c = hb(a),
            d = ["Top", "Right", "Bottom", "Left"].map(function(b, c) { var d = a.css("border" + b + "Style"),
                    e = a.color("border" + b + "Color"); "inset" === d && e.isBlack() && (e = new z([255, 255, 255, e.a])); var f = cc[d] ? cc[d][c] : null; return { width: a.cssInt("border" + b + "Width"), color: f ? e[f[0]](f[1]) : e, args: null } }),
            e = Y(b, c, d); return { clip: this.parseBackgroundClip(a, e, d, c, b), borders: W(d, b, e, c) } }, S.prototype.parseBackgroundClip = function(a, b, c, d, e) { var f = a.css("backgroundClip"),
            g = []; switch (f) {
            case "content-box":
            case "padding-box":
                _(g, d[0], d[1], b.topLeftInner, b.topRightInner, e.left + c[3].width, e.top + c[0].width), _(g, d[1], d[2], b.topRightInner, b.bottomRightInner, e.left + e.width - c[1].width, e.top + c[0].width), _(g, d[2], d[3], b.bottomRightInner, b.bottomLeftInner, e.left + e.width - c[1].width, e.top + e.height - c[2].width), _(g, d[3], d[0], b.bottomLeftInner, b.topLeftInner, e.left + c[3].width, e.top + e.height - c[2].width); break;
            default:
                _(g, d[0], d[1], b.topLeftOuter, b.topRightOuter, e.left, e.top), _(g, d[1], d[2], b.topRightOuter, b.bottomRightOuter, e.left + e.width, e.top), _(g, d[2], d[3], b.bottomRightOuter, b.bottomLeftOuter, e.left + e.width, e.top + e.height), _(g, d[3], d[0], b.bottomLeftOuter, b.topLeftOuter, e.left, e.top + e.height) } return g };
    var dc = 0,
        ec = "withCredentials" in new XMLHttpRequest,
        fc = "crossOrigin" in new Image;
    Ib.prototype.cloneTo = function(a) { Ib.prototype.cloneTo.call(this, a), a.isPseudoElement = !0, a.before = this.before }, Ib.prototype = Object.create(J.prototype), Ib.prototype.appendToDOM = function() { this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass() }, Ib.prototype.cleanDOM = function() { this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "") }, Ib.prototype.getHideClass = function() { return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")] }, Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", Ib.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", Jb.prototype.renderImage = function(a, b, c, d) { var e = a.cssInt("paddingLeft"),
            f = a.cssInt("paddingTop"),
            g = a.cssInt("paddingRight"),
            h = a.cssInt("paddingBottom"),
            i = c.borders,
            j = b.width - (i[1].width + i[3].width + e + g),
            k = b.height - (i[0].width + i[2].width + f + h);
        this.drawImage(d, 0, 0, d.image.width || j, d.image.height || k, b.left + e + i[3].width, b.top + f + i[0].width, j, k) }, Jb.prototype.renderBackground = function(a, b, c) { b.height > 0 && b.width > 0 && (this.renderBackgroundColor(a, b), this.renderBackgroundImage(a, b, c)) }, Jb.prototype.renderBackgroundColor = function(a, b) { var c = a.color("backgroundColor");
        c.isTransparent() || this.rectangle(b.left, b.top, b.width, b.height, c) }, Jb.prototype.renderBorders = function(a) { a.forEach(this.renderBorder, this) }, Jb.prototype.renderBorder = function(a) { a.color.isTransparent() || null === a.args || this.drawShape(a.args, a.color) }, Jb.prototype.renderBackgroundImage = function(a, b, c) { var d = a.parseBackgroundImages();
        d.reverse().forEach(function(d, e, f) { switch (d.method) {
                case "url":
                    var g = this.images.get(d.args[0]);
                    g ? this.renderBackgroundRepeating(a, b, g, f.length - (e + 1), c) : I("Error loading background-image", d.args[0]); break;
                case "linear-gradient":
                case "gradient":
                    var h = this.images.get(d.value);
                    h ? this.renderBackgroundGradient(h, b, c) : I("Error loading background-image", d.args[0]); break;
                case "none":
                    break;
                default:
                    I("Unknown background-image type", d.args[0]) } }, this) }, Jb.prototype.renderBackgroundRepeating = function(a, b, c, d, e) { var f = a.parseBackgroundSize(b, c.image, d),
            g = a.parseBackgroundPosition(b, c.image, d, f),
            h = a.parseBackgroundRepeat(d); switch (h) {
            case "repeat-x":
            case "repeat no-repeat":
                this.backgroundRepeatShape(c, g, f, b, b.left + e[3], b.top + g.top + e[0], 99999, f.height, e); break;
            case "repeat-y":
            case "no-repeat repeat":
                this.backgroundRepeatShape(c, g, f, b, b.left + g.left + e[3], b.top + e[0], f.width, 99999, e); break;
            case "no-repeat":
                this.backgroundRepeatShape(c, g, f, b, b.left + g.left + e[3], b.top + g.top + e[0], f.width, f.height, e); break;
            default:
                this.renderBackgroundRepeat(c, g, f, { top: b.top, left: b.left }, e[3], e[0]) } }, Kb.prototype = Object.create(J.prototype), Kb.prototype.getParentStack = function(a) { var b = this.parent ? this.parent.stack : null; return b ? b.ownStacking ? b : b.getParentStack(a) : a.stack }, Lb.prototype.testRangeBounds = function(a) { var b, c, d, e, f = !1; return a.createRange && (b = a.createRange(), b.getBoundingClientRect && (c = a.createElement("boundtest"), c.style.height = "123px", c.style.display = "block", a.body.appendChild(c), b.selectNode(c), d = b.getBoundingClientRect(), e = d.height, 123 === e && (f = !0), a.body.removeChild(c))), f }, Lb.prototype.testCORS = function() { return "undefined" != typeof(new Image).crossOrigin }, Lb.prototype.testSVG = function() { var a = new Image,
            c = b.createElement("canvas"),
            d = c.getContext("2d");
        a.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"; try { d.drawImage(a, 0, 0), c.toDataURL() } catch (e) { return !1 } return !0 }, Mb.prototype.hasFabric = function() { return html2canvas.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) }, Mb.prototype.inlineFormatting = function(a) { return /^data:image\/svg\+xml;base64,/.test(a) ? this.decode64(this.removeContentType(a)) : this.removeContentType(a) }, Mb.prototype.removeContentType = function(a) { return a.replace(/^data:image\/svg\+xml(;base64)?,/, "") }, Mb.prototype.isInline = function(a) { return /^data:image\/svg\+xml/i.test(a) }, Mb.prototype.createCanvas = function(a) { var b = this; return function(c, d) { var e = new html2canvas.fabric.StaticCanvas("c");
            b.image = e.lowerCanvasEl, e.setWidth(d.width).setHeight(d.height).add(html2canvas.fabric.util.groupSVGElements(c, d)).renderAll(), a(e.lowerCanvasEl) } }, Mb.prototype.decode64 = function(b) { return "function" == typeof a.atob ? a.atob(b) : Nb(b) }, Ob.prototype = Object.create(Mb.prototype), Pb.prototype = Object.create(J.prototype), Pb.prototype.applyTextTransform = function() { this.node.data = this.transform(this.parent.css("textTransform")) }, Pb.prototype.transform = function(a) { var b = this.node.data; switch (a) {
            case "lowercase":
                return b.toLowerCase();
            case "capitalize":
                return b.replace(/(^|\s|:|-|\(|\))([a-z])/g, Qb);
            case "uppercase":
                return b.toUpperCase();
            default:
                return b } }, Rb.prototype = Object.create(E.prototype), Tb.prototype = Object.create(Jb.prototype), Tb.prototype.setFillStyle = function(a) { return this.ctx.fillStyle = "object" == typeof a && a.isColor ? a.toString() : a, this.ctx }, Tb.prototype.rectangle = function(a, b, c, d, e) { this.setFillStyle(e).fillRect(a, b, c, d) }, Tb.prototype.circle = function(a, b, c, d) { this.setFillStyle(d), this.ctx.beginPath(), this.ctx.arc(a + c / 2, b + c / 2, c / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill() }, Tb.prototype.circleStroke = function(a, b, c, d, e, f) { this.circle(a, b, c, d), this.ctx.strokeStyle = f.toString(), this.ctx.stroke() }, Tb.prototype.drawShape = function(a, b) { this.shape(a), this.setFillStyle(b).fill() }, Tb.prototype.taints = function(a) { if (null === a.tainted) { this.taintCtx.drawImage(a.image, 0, 0); try { this.taintCtx.getImageData(0, 0, 1, 1), a.tainted = !1 } catch (c) { this.taintCtx = b.createElement("canvas").getContext("2d"), a.tainted = !0 } } return a.tainted }, Tb.prototype.drawImage = function(a, b, c, d, e, f, g, h, i) {
        (!this.taints(a) || this.options.allowTaint) && this.ctx.drawImage(a.image, b, c, d, e, f, g, h, i) }, Tb.prototype.clip = function(a, b, c) { this.ctx.save(), a.filter(Ub).forEach(function(a) { this.shape(a).clip() }, this), b.call(c), this.ctx.restore() }, Tb.prototype.shape = function(a) { return this.ctx.beginPath(), a.forEach(function(a, b) { "rect" === a[0] ? this.ctx.rect.apply(this.ctx, a.slice(1)) : this.ctx[0 === b ? "moveTo" : a[0] + "To"].apply(this.ctx, a.slice(1)) }, this), this.ctx.closePath(), this.ctx }, Tb.prototype.font = function(a, b, c, d, e, f) { this.setFillStyle(a).font = [b, c, d, e, f].join(" ").split(",")[0] }, Tb.prototype.fontShadow = function(a, b, c, d) { this.setVariable("shadowColor", a.toString()).setVariable("shadowOffsetY", b).setVariable("shadowOffsetX", c).setVariable("shadowBlur", d) }, Tb.prototype.clearShadow = function() { this.setVariable("shadowColor", "rgba(0,0,0,0)") }, Tb.prototype.setOpacity = function(a) { this.ctx.globalAlpha = a }, Tb.prototype.setTransform = function(a) { this.ctx.translate(a.origin[0], a.origin[1]), this.ctx.transform.apply(this.ctx, a.matrix), this.ctx.translate(-a.origin[0], -a.origin[1]) }, Tb.prototype.setVariable = function(a, b) { return this.variables[a] !== b && (this.variables[a] = this.ctx[a] = b), this }, Tb.prototype.text = function(a, b, c) { this.ctx.fillText(a, b, c) }, Tb.prototype.backgroundRepeatShape = function(a, b, c, d, e, f, g, h, i) { var j = [
            ["line", Math.round(e), Math.round(f)],
            ["line", Math.round(e + g), Math.round(f)],
            ["line", Math.round(e + g), Math.round(h + f)],
            ["line", Math.round(e), Math.round(h + f)]
        ];
        this.clip([j], function() { this.renderBackgroundRepeat(a, b, c, d, i[3], i[0]) }, this) }, Tb.prototype.renderBackgroundRepeat = function(a, b, c, d, e, f) { var g = Math.round(d.left + b.left + e),
            h = Math.round(d.top + b.top + f);
        this.setFillStyle(this.ctx.createPattern(this.resizeImage(a, c), "repeat")), this.ctx.translate(g, h), this.ctx.fill(), this.ctx.translate(-g, -h) }, Tb.prototype.renderBackgroundGradient = function(a, b) { if (a instanceof H) { var c = this.ctx.createLinearGradient(b.left + b.width * a.x0, b.top + b.height * a.y0, b.left + b.width * a.x1, b.top + b.height * a.y1);
            a.colorStops.forEach(function(a) { c.addColorStop(a.stop, a.color.toString()) }), this.rectangle(b.left, b.top, b.width, b.height, c) } }, Tb.prototype.resizeImage = function(a, c) { var d = a.image; if (d.width === c.width && d.height === c.height) return d; var e, f = b.createElement("canvas"); return f.width = c.width, f.height = c.height, e = f.getContext("2d"), e.drawImage(d, 0, 0, d.width, d.height, 0, 0, c.width, c.height), f }
}).call({}, "undefined" != typeof window ? window : void 0, "undefined" != typeof document ? document : void 0);