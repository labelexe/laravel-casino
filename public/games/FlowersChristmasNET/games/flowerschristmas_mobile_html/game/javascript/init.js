/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
 var GameName='FlowersChristmasNET';

! function(b, c, a) {
    "undefined" != typeof module && module.exports ? module.exports = a() : b[c] = a()
}(this, "verge", function() {
    function g() {
        return {
            width: e(),
            height: f()
        }
    }

    function h(n, o) {
        var m = {};
        return o = +o || 0, m.width = (m.right = n.right + o) - (m.left = n.left - o), m.height = (m.bottom = n.bottom + o) - (m.top = n.top - o), m
    }

    function i(m, n) {
        return !(!(m = m && !m.nodeType ? m[0] : m) || 1 !== m.nodeType) && h(m.getBoundingClientRect(), n)
    }

    function j(m) {
        m = null == m ? g() : 1 === m.nodeType ? i(m) : m;
        var n = m.height,
            o = m.width;
        return n = "function" == typeof n ? n.call(m) : n, (o = "function" == typeof o ? o.call(m) : o) / n
    }
    var k = {},
        l = "undefined" != typeof window && window,
        a = "undefined" != typeof document && document,
        b = a && a.documentElement,
        c = l.matchMedia || l.msMatchMedia,
        d = c ? function(m) {
            return !!c.call(l, m).matches
        } : function() {
            return !1
        },
        e = k.viewportW = function() {
            var m = b.clientWidth,
                n = l.innerWidth;
            return m < n ? n : m
        },
        f = k.viewportH = function() {
            var m = b.clientHeight,
                n = l.innerHeight;
            return m < n ? n : m
        };
    return k.mq = d, k.matchMedia = c ? function() {
        return c.apply(l, arguments)
    } : function() {
        return {}
    }, k.viewport = g, k.scrollX = function() {
        return l.pageXOffset || b.scrollLeft
    }, k.scrollY = function() {
        return l.pageYOffset || b.scrollTop
    }, k.rectangle = i, k.aspect = j, k.inX = function(n, o) {
        var m = i(n, o);
        return !!m && m.right >= 0 && m.left <= e()
    }, k.inY = function(n, o) {
        var m = i(n, o);
        return !!m && m.bottom >= 0 && m.top <= f()
    }, k.inViewport = function(n, o) {
        var m = i(n, o);
        return !!m && m.bottom >= 0 && m.right >= 0 && m.top <= f() && m.left <= e()
    }, k
});
window.Sys = {};
(function() {
    var f = navigator.userAgent,
        e, d;
    Sys.openBetMode = false;
    if (/callbackurl/i.test(window.location.search) && (/integration=openbet/i.test(window.location.search) || /openbet\.user_id/i.test(window.location.search))) {
        Sys.openBetMode = true
    }
    Sys.openBetPlayForFunMode = false;
    if (/integration=openbet/i.test(window.location.search) && !Sys.openBetMode) {
        Sys.openBetPlayForFunMode = true
    }
    Sys.isGcmEnabled = false;
    if (/openbet.gcmMode=true/i.test(window.location.search)) {
        Sys.isGcmEnabled = true
    }
    Sys.isiPad = false;
    Sys.isiPhone = false;
    Sys.isiPhoneIOS7 = false;
    Sys.isiPhoneIOS8 = false;
    Sys.isiPhoneIOS9 = false;
    Sys.isiPod = false;
    Sys.isAndroidDevice = false;
    Sys.isSamsungS = false;
    Sys.isOneX = false;
    Sys.isHTCOne = false;
    Sys.isAndroid23Device = false;
    Sys.isAndroid400 = false;
    Sys.isAndroid410 = false;
    Sys.isAndroidTablet = false;
    Sys.isAndroid3Tablet = false;
    Sys.isDesktop = false;
    Sys.has3DTransforms = false;
    Sys.isChrome = false;
    Sys.isChrome280 = false;
    Sys.isSafari = false;
    Sys.isChromeForIOS = false;
    (function() {
        var b = document,
            a = b.createElement("div"),
            c = false,
            h;
        if (a.style.webkitPerspective !== undefined) {
            h = b.createElement("style");
            h.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}";
            b.getElementsByTagName("head")[0].appendChild(h);
            a.id = "test3d";
            if (b.body) {
                b.body.appendChild(a);
                c = a.offsetHeight === 3;
                h.parentNode.removeChild(h);
                a.parentNode.removeChild(a)
            }
        }
        Sys.has3DTransforms = c
    }());
    if (f.match(/Chrome/i)) {
        Sys.isChrome = true;
        if (f.match(/Chrome\/28[\.\d]/i)) {
            Sys.isChrome280 = true
        }
    }
    if (f.match(/CriOS/i)) {
        Sys.isChromeForIOS = true
    }
    if (f.match(/Safari/i) && !Sys.isChromeForIOS) {
        Sys.isSafari = true
    }
    if (f.match(/iPad/i) !== null) {
        Sys.isiPad = true
    } else {
        if ((f.match(/iPod/i))) {
            Sys.isiPod = true
        } else {
            if ((f.match(/iPhone/i))) {
                e = "3gs,4,4s";
                d = "standard";
                e = (window.screen.height === 568) ? "5" : e;
                e = (window.screen.height === 667) ? "6" : e;
                d = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)").matches && e === "6" ? "zoomed" : d;
                e = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)").matches ? "6+" : e;
                Sys.isiPhone = {
                    series: "iPhone",
                    model: e,
                    displayZoom: d
                }
            } else {
                if ((f.match(/Android/i)) || f.match(/HTC_Sensation/i)) {
                    Sys.isAndroidDevice = true;
                    if (f.match(/Android 3[\.\d]+/i)) {
                        Sys.isAndroid3Tablet = true;
                        Sys.isAndroidTablet = true
                    } else {
                        if (!f.match(/mobile/i)) {
                            Sys.isAndroidTablet = true
                        } else {
                            if (f.match(/Android 2\.3/i)) {
                                Sys.isAndroid23Device = true
                            } else {
                                if (f.match(/Android 4\.0/i)) {
                                    Sys.isAndroid400 = true
                                } else {
                                    if (f.match(/Android 4\.1/i)) {
                                        Sys.isAndroid410 = true
                                    } else {
                                        if (f.match(/Android 4\.2/i)) {
                                            Sys.isAndroid420 = true
                                        } else {
                                            if (f.match(/Android 4\.3/i)) {
                                                Sys.isAndroid430 = true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    Sys.isDesktop = true
                }
            }
        }
    }
    Sys.isiPhoneIOS7 = (f.indexOf("IEMobile") < 0) && (/(?:OS\s*[7]+_0(?:_\d+)?\s*)/i.test(f) && !window.navigator.standalone) && (Sys.isiPhone || Sys.isiPod) && Sys.isSafari;
    Sys.isiPhoneIOS8 = (/OS\s*8_/i.test(f) && !window.navigator.standalone) && Sys.isiPhone && Sys.isSafari;
    Sys.isiPhoneIOS9 = (/OS\s*9_/i.test(f) && !window.navigator.standalone) && Sys.isiPhone && Sys.isSafari;
    Sys.isiOS9 = (/OS\s*9_/i.test(f));
    Sys.isIphone4Or4s = Sys.isiPhone && window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && window.screen.width === 320 && window.screen.height === 480;
    Sys.isIphone5Or5sOr5c = Sys.isiPhone && window.screen.width === 320 && window.screen.height === 568;
    if ((f.match(/GT-I9100/))) {
        Sys.isSamsungS = {
            series: "samsungS",
            model: "s2"
        }
    } else {
        if ((f.match(/GT-I9300/))) {
            Sys.isSamsungS = {
                series: "samsungS",
                model: "s3"
            }
        } else {
            if ((f.match(/GT-I9505/)) || (f.match(/GT-I9506/)) || (f.match(/GT-I9521/)) || (f.match(/GT-I9525/))) {
                Sys.isSamsungS = {
                    series: "samsungS",
                    model: "s4"
                }
            }
        }
    }
    Sys.isiOSDevice = Sys.isiPad || Sys.isiPhone || Sys.isiPod;
    Sys.isIphone3GS = (Sys.isiOSDevice && !window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && window.screen.width === 320 && window.screen.height === 480);
    Sys.isTouchDevice = Boolean("ontouchstart" in window);
    Sys.clickEvent = Sys.isTouchDevice ? "touchend" : "click";
    Sys.touchstartEvent = Sys.isTouchDevice ? "touchstart" : "mousedown";
    Sys.touchendEvent = Sys.isTouchDevice ? "touchend" : "mouseup";
    Sys.touchoutEvent = "mouseout";
    Sys.touchmoveEvent = Sys.isTouchDevice ? "touchmove" : "mousemove";
    Sys.isInIFrame = (window !== window.parent)
}());
Sys.apply = function(d, e) {
    var f;
    d = d || {};
    if (e === null || !Sys.isDefined(e)) {
        return d
    }
    if (d && e && Sys.isObj(e)) {
        for (f in e) {
            if (e.hasOwnProperty(f)) {
                d[f] = e[f]
            }
        }
    }
    return d
};
Sys.applyProperties = function(i, k) {
    var l = Object.keys(k),
        j = l.length,
        g, h;
    for (g = -1; ++g < j;) {
        h = l[g];
        if (Sys.isDefined(k[h])) {
            i[h] = k[h]
        }
    }
    return i
};
Sys.applyIf = function(d, e) {
    var f;
    if (d && e && Sys.isObj(e)) {
        for (f in e) {
            if (e.hasOwnProperty(f) && !d.hasOwnProperty(f)) {
                d[f] = e[f]
            }
        }
    } else {
        throw new Error("Error in Sys.applyIf")
    }
    return d
};
Sys.applyPropertiesIf = function(i, k) {
    var l = Object.keys(k),
        j = l.length,
        g, h;
    for (g = -1; ++g < j;) {
        h = l[g];
        if (!Sys.isDefined(i[h]) && Sys.isDefined(k[h])) {
            i[h] = k[h]
        }
    }
    return i
};
Sys.iterate = function(g, f, h) {
    var e;
    if (!Sys.isObj(g) || typeof f !== "function") {
        return g
    }
    for (e in g) {
        if (g.hasOwnProperty(e)) {
            f.call(h || g, e, g[e])
        }
    }
    return g
};
Sys.each = function(f, j, h) {
    var i, g;
    if (!Sys.isArray(f) || typeof j !== "function") {
        return f
    }
    for (i = 0, g = f.length; i < g; i += 1) {
        if (j.call(h || f[i], f[i], i) === false) {
            return i
        }
    }
    return f
};
Sys.contains = function(c, d) {
    if (Array.prototype.includes) {
        return c.includes(d)
    }
    return c.indexOf(d) > -1
};
Sys.variadic = function(c) {
    var d = c.length - 1;
    return function() {
        var b = [].slice.call(arguments, 0, d),
            a = [].slice.call(arguments, d);
        return c.apply(this, b.concat([a]))
    }
};
Sys.ns = function(g) {
    var f, h, e = g || "";
    f = e.split(".") || [];
    h = window;
    while (f.length > 0) {
        e = f.shift();
        if (Sys.isEmpty(h[e])) {
            h[e] = {}
        }
        h = h[e]
    }
};
Sys.pluck = function(e, f) {
    var d = [];
    Sys.each(e, function(a) {
        d.push(a[f])
    });
    return d
};
Sys.isEmpty = function(b) {
    return (b === null) || !Sys.isDefined(b) || (Sys.isArray(b) && !b.length)
};
Sys.isDefined = function(b) {
    return typeof b !== "undefined"
};
Sys.defaultValue = function(c, d) {
    return Sys.isEmpty(c) ? d : c
};
Sys.override = function(d, c) {
    if (c) {
        Sys.apply(d.prototype, c)
    }
};
Sys.overrideClass = function(e, f) {
    var h, g;
    if (Sys.isObj(f)) {
        Sys.apply(e.prototype, f);
        h = e.prototype;
        g = e.superclass;
        if (typeof f.constructor === "function") {
            e = f.constructor
        }
        e.prototype = h;
        e.superclass = g
    }
    return e
};
Sys.isArray = function(d) {
    var c = Object.prototype.toString.call(d);
    return (c === "[object Array]" || c === "[object NodeList]" || c === "[object TouchList]" || c === "[object HTMLCollection]")
};
Sys.isString = function(b) {
    return typeof b === "string"
};
Sys.isNumber = function(b) {
    return !isNaN(b) && typeof b === "number"
};
Sys.isObj = function(b) {
    return !Sys.isArray(b) && typeof b === "object"
};
Sys.isFunc = function(b) {
    return typeof b === "function"
};
Sys.isAudioBuffer = function(b) {
    return Object.prototype.toString.call(b) === "[object AudioBuffer]"
};
Sys.isInstanceOf = function(g, e) {
    var f = false;
    try {
        f = (g instanceof e)
    } catch (h) {}
    return f
};
Sys.copyObject = function(b) {
    return Sys.apply({}, b)
};
Sys.copyObj = Sys.copyObject;
Sys.clone = function(d) {
    var f, e;
    if (Sys.isArray(d)) {
        e = d.length;
        f = [];
        for (; --e > -1;) {
            f[e] = Sys.clone(d[e])
        }
        return f
    } else {
        if (Sys.isObj(d)) {
            f = {};
            Object.keys(d).forEach(function(b) {
                var a = d[b];
                f[b] = Sys.clone(a)
            });
            return f
        }
    }
    return d
};
Sys.extend = function(g, l, h) {
    var i = Object.prototype.constructor,
        j = l,
        k = function() {};
    if (j.constructor !== i) {
        l = j.constructor
    } else {
        l = function() {
            g.apply(this, arguments)
        }
    }
    k.prototype = g.prototype;
    l.prototype = new k();
    l.prototype.constructor = l;
    if (g.prototype.constructor === i) {
        g.prototype.constructor = g
    }
    l.superclass = g.prototype;
    Sys.override(l, j);
    return l
};
Sys.clamp = function(b) {
    if (b.value < b.min) {
        return b.min
    } else {
        if (b.value > b.max) {
            return b.max
        }
    }
    return b.value
};
Sys.range = function(j, l, k) {
    var i = [j],
        h = j > l,
        m, n;
    m = h ? -1 * Math.abs(k) || -1 : Math.abs(k) || 1;
    n = j + m;
    while (h ? n >= l : n <= l) {
        i.push(n);
        n = n + m
    }
    return i
};
Sys.reduce = function(f, h, i) {
    var j, g;
    if (Array.prototype.reduce) {
        return f.reduce(h, i)
    }
    if (!Sys.isDefined(i)) {
        i = f[0];
        f = f.slice(1)
    }
    for (j = 0, g = f.length; j < g; j++) {
        i = h(i, f[j], j, f)
    }
    return i
};
Sys.map = function(d, c) {
    if (Array.prototype.map) {
        return d.map(c)
    }
    return d.reduce(function(a, f, b) {
        return a.concat(c(f, b, d))
    }, [])
};
Sys.filter = function(d, c) {
    if (Array.prototype.filter) {
        return d.filter(c)
    }
    return d.reduce(function(a, f, b) {
        if (c(f, b, d)) {
            return a.concat(f)
        }
        return a
    }, [])
};
Sys.find = function(g, e) {
    var h, f;
    if (Array.prototype.find) {
        return g.find(e)
    }
    for (h = 0, f = g.length; h < f; h++) {
        if (e(g[h])) {
            return g[h]
        }
    }
    return undefined
};
Sys.EventHandler = function() {
    this.EVENTS = {}
};
Sys.EventHandler.prototype = {
    DEBUG: false,
    LOG_FUNC: false,
    LOG: false,
    LOG_WARN: false,
    LOG_FILTER: /(?:)/,
    history: [],
    toStringHistory: function(i) {
        var f = this,
            g = "",
            h, j = i || new RegExp();
        Sys.each(f.history, function(b) {
            try {
                h = JSON.stringify(b.params)
            } catch (a) {
                h = b.params
            }
            if (j.test(b.event)) {
                g += b.event + " (" + b.listeners + ") -> " + h + "\r\n"
            }
        });
        return g
    },
    addListener: function(f, d) {
        var e = this;
        if (!Sys.isDefined(e.EVENTS[d])) {
            e.EVENTS[d] = []
        }
        if (!Sys.contains(e.EVENTS[d], f)) {
            e.EVENTS[d].push(f)
        }
    },
    removeListener: function(g, h) {
        var e = this.EVENTS[h] || [],
            f = e.indexOf(g);
        if (f >= 0) {
            e[f] = "removed"
        }
    },
    dispatchEvent: Sys.variadic(function(l, m) {
        var n = this.EVENTS[l] || [],
            j = n.length - 1,
            i, k, h;
        for (i = j; i >= 0; i--) {
            k = n[i];
            h = Sys.isObj(k) ? k.handlers[l] : null;
            if (h) {
                h.apply(k, m)
            }
        }
        for (i = j; i >= 0; i--) {
            if (n[i] === "removed") {
                n.splice(i, 1);
                ++i
            }
        }
    }),
    sortEventListeners: function(j) {
        var m = this.EVENTS,
            l = Object.keys(m),
            n = l.length,
            k, i, h;
        for (h = -1; ++h < n;) {
            k = m[l[h]];
            i = k.indexOf(j);
            if (i > 0) {
                k.splice(i, 1);
                k.unshift(j)
            }
        }
    }
};
window.EventHandler = new Sys.EventHandler();
Sys.ns("Sys");
Sys.Observable = function(b) {
    this.eventHandler = Sys.isDefined(b) && Sys.isDefined(b.eventHandler) ? b.eventHandler : EventHandler;
    this.handlers = {}
};
Sys.Observable.prototype = {
    fireEvent: function() {
        if (arguments.length === 0) {
            return
        }
        this.eventHandler.dispatchEvent.apply(this.eventHandler, arguments)
    },
    on: function(h) {
        var i = this,
            k = Object.keys(h),
            l = k.length,
            j, g = 0;
        while (g < l) {
            j = k[g];
            i.addListener(j, h[j]);
            ++g
        }
    },
    off: function() {
        var h = this,
            j = Object.keys(h.handlers),
            f = j.length,
            i, g = 0;
        while (g < f) {
            i = j[g];
            h.removeListener(i);
            ++g
        }
    },
    addListener: function(c, d) {
        this.handlers[c] = d;
        this.eventHandler.addListener(this, c)
    },
    removeListener: function(b) {
        this.eventHandler.removeListener(this, b);
        this.handlers[b] = undefined
    },
    hasListener: function(b) {
        return Sys.isDefined(this.handlers[b])
    }
};
Sys.ns("Sys");
Sys.Element = {
    constructor: function(d) {
        var c = this;
        Sys.Element.superclass.constructor.apply(this, arguments);
        this.DOMEvents = {};
        this.el = this.setupElement(d);
        if (!this.el) {
            throw new Error("Invalid instantiation of Sys.Element, invalid input, needs element string or object")
        }
        this.el.addEventListener("transitionend", function(a) {
            if (c.transitionEnd) {
                c.transitionEnd.apply(c, arguments)
            }
            a.stopPropagation()
        }, false);
        if (document.getElementById(d.renderTo)) {
            document.getElementById(d.renderTo).appendChild(this.el)
        }
    },
    setupElement: function(b) {
        this.el = null;
        if (!b) {
            return null
        } else {
            if (typeof b === "string") {
                this.el = document.createElement(b)
            } else {
                if (b instanceof Element) {
                    this.el = b
                } else {
                    if (Sys.isObj(b)) {
                        this.el = document.createElement(b.tag);
                        Object.keys(b).forEach(function(a) {
                            var d = b[a];
                            if (a === "cls") {
                                this.el.setAttribute("class", d)
                            } else {
                                if (a === "innerHTML") {
                                    this.el.innerHTML = d
                                } else {
                                    if (a === "textContent") {
                                        this.el.textContent = d
                                    } else {
                                        if (a === "onClick") {
                                            this.el.addEventListener("click", d)
                                        } else {
                                            if (a === "items") {
                                                d.forEach(function(c) {
                                                    this.add(c)
                                                }, this)
                                            } else {
                                                if (a === "transitionend" && typeof d === "function") {
                                                    this.transitionEnd = d
                                                } else {
                                                    if (a !== "renderTo" && a !== "tag") {
                                                        this.el.setAttribute(a, d)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }, this)
                    }
                }
            }
        }
        return this.el
    },
    getEl: function() {
        return this.el
    },
    getChildren: function() {
        return Array.prototype.slice.call(this.getEl().childNodes, 0)
    },
    add: function(b) {
        this.el.appendChild(b.getEl());
        b.parent = this;
        return b
    },
    addBefore: function(c, d) {
        this.el.insertBefore(c.getEl(), d.getEl());
        c.parent = this;
        return c
    },
    addChildren: function(b) {
        b.forEach(function(a) {
            this.el.appendChild(a)
        }, this)
    },
    remove: function(d) {
        var c = d.getEl();
        if (this.el === c.parentNode) {
            this.el.removeChild(c)
        }
        return d
    },
    removeAll: function() {
        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild)
        }
    },
    addListener: function(k, l, j, p) {
        var m = this,
            n = j || this.el,
            i = p || {},
            o = function() {
                l.apply(n)
            };
        Sys.Element.superclass.addListener.apply(this, arguments);
        if (i.single) {
            o = function() {
                m.removeListener(k, l, n);
                l.call(n)
            }
        }
        this.DOMEvents[k] = this.DOMEvents[k] || [];
        this.DOMEvents[k].push({
            event: k,
            func: l,
            scope: n,
            wrappedFn: o
        });
        this.el.addEventListener(k, o, false)
    },
    removeListener: function(g, h, f) {
        var e = f || this.el;
        Sys.Element.superclass.removeListener.apply(this, arguments);
        this.DOMEvents[g].forEach(function(b, a) {
            if (b.event === g && b.func === h && b.scope === e) {
                this.DOMEvents[g].splice(a, 1);
                this.el.removeEventListener(g, b.wrappedFn, false);
                return true
            }
            return false
        }, this)
    },
    getOffset: function() {
        return Sys.utils.getElOffset(this.el)
    },
    addAsFirst: function(b) {
        this.el.insertBefore(b.el, this.el.firstChild);
        return b
    },
    hasClass: function(b) {
        return Sys.utils.hasCSSClass(this.el, b)
    },
    addClass: function(b) {
        Sys.utils.addCSSClass(this.el, b)
    },
    removeClass: function(b) {
        Sys.utils.removeCSSClass(this.el, b)
    },
    replaceClass: function(e, f, d) {
        Sys.utils.replaceCSSClass(this.el, e, f, d)
    },
    setClass: function(b) {
        this.el.className = b
    },
    toggleClass: function(d, c) {
        if (typeof c === "boolean") {
            if (c) {
                this.addClass(d)
            } else {
                this.removeClass(d)
            }
        } else {
            if (this.hasClass(d)) {
                this.removeClass(d)
            } else {
                this.addClass(d)
            }
        }
    }
};
Sys.Element.hasCls = Sys.Element.hasCSSClass = Sys.Element.hasClass;
Sys.Element.addCls = Sys.Element.addCSSClass = Sys.Element.addClass;
Sys.Element.removeCls = Sys.Element.removeCSSClass = Sys.Element.removeClass;
Sys.Element.replaceCls = Sys.Element.replaceCSSClass = Sys.Element.replaceClass;
Sys.Element.setCSSClassString = Sys.Element.setClass;
Sys.Element.toggleCls = Sys.Element.toggleClass;
Sys.Element = Sys.extend(Sys.Observable, Sys.Element, "Sys.Element");
Sys.ns("Sys.Math");
Sys.apply(Sys.Math, {
    hypotenuse: function(d, c) {
        return Math.sqrt(d * d + c * c)
    },
    radToDeg: function(b) {
        return b * (180 / Math.PI)
    },
    degToRad: function(b) {
        return Animation.utils.degToRad(b, 10)
    },
    cos: function(b) {
        return Math.cos(this.degToRad(b))
    },
    acos: function(b) {
        return this.radToDeg(Math.acos(b))
    },
    sin: function(b) {
        return Math.sin(this.degToRad(b))
    },
    atan2: function(c, d) {
        return this.radToDeg(Math.atan2(c, d))
    },
    randomBetween: function(c, d) {
        return c + (d - c) * Math.random()
    },
    randomIntBetween: function(c, d) {
        return Math.floor(Math.random() * (d - c + 1)) + c
    },
    randomBetweenRanges: function() {
        var f = this,
            e = Array.prototype.slice.call(arguments),
            d = e[f.randomIntBetween(0, e.length - 1)];
        return f.randomBetween(d[0], d[1])
    },
    randomIntBetweenRanges: function() {
        var b = this;
        return Math.round(b.randomBetweenRanges.apply(b, arguments))
    },
    absoluteDifference: function(c, d) {
        return Math.abs(c - d)
    }
});
Sys.Deferred = function() {
    this.whenList = [];
    this.thenList = [];
    this.failList = [];
    this.alwaysList = [];
    this.states = {
        pending: 0,
        resolved: 1,
        rejected: 2
    };
    this.resolved = 0;
    this.rejected = 0;
    this.args = [];
    this.state = this.states.pending
};
Sys.Deferred.prototype = {
    when: function(d) {
        var c;
        if (Sys.isArray(d)) {
            c = d
        } else {
            c = Array.prototype.slice.call(arguments, 0)
        }
        Sys.each(c, function(a) {
            this.whenList.push(a);
            a.always(function() {
                this.onDeferredUpdated()
            }, this)
        }, this);
        this.onDeferredUpdated();
        return this
    },
    then: function(c, d) {
        d = d || window;
        if (this.isWaiting()) {
            this.thenList.push({
                fn: c,
                scope: d
            })
        } else {
            if (this.isResolved()) {
                c.call(d)
            }
        }
        return this
    },
    fail: function(c, d) {
        d = d || window;
        if (this.isWaiting()) {
            this.failList.push({
                fn: c,
                scope: d
            })
        } else {
            if (this.isRejected()) {
                c.call(d)
            }
        }
        return this
    },
    always: function(c, d) {
        d = d || window;
        if (this.isWaiting()) {
            this.alwaysList.push({
                fn: c,
                scope: d
            })
        } else {
            c.call(d)
        }
        return this
    },
    resolve: function() {
        this.state = this.states.resolved;
        this.onStateUpdated()
    },
    resolveWith: function(b) {
        this.args = b;
        this.resolve()
    },
    reject: function() {
        if (typeof this.fallbackFilter === "function") {
            this.onFallback()
        } else {
            this.state = this.states.rejected;
            this.onStateUpdated()
        }
    },
    rejectWith: function(b) {
        this.args = b;
        this.reject()
    },
    isRejected: function() {
        return (this.state === this.states.rejected)
    },
    isResolved: function() {
        return (this.state === this.states.resolved)
    },
    fallback: function(b) {
        this.fallbackFilter = b;
        return this
    },
    onFallback: function() {
        var c = this,
            d = c.fallbackFilter.call(this, this.args);
        if (Sys.isObj(d)) {
            d.done(function() {
                c.resolveWith(d.args)
            }).fail(function() {
                c.rejectWith(d.args)
            })
        }
    },
    onDeferredUpdated: function() {
        var f = 0,
            e = 0,
            d;
        Sys.each(this.whenList, function(a) {
            if (a.isRejected()) {
                f += 1
            } else {
                if (a.isResolved()) {
                    e += 1
                }
            }
        }, this);
        this.resolved = e;
        this.rejected = f;
        if (!this.isWaiting()) {
            d = [];
            Sys.each(this.whenList, function(a) {
                d = d.concat(a.args)
            });
            if (f > 0) {
                this.rejectWith(d)
            } else {
                if (e > 0) {
                    this.resolveWith(d)
                }
            }
        }
    },
    isWaiting: function() {
        return !this.whenList.length || ((this.resolved + this.rejected) < this.whenList.length)
    },
    onStateUpdated: function() {
        var g = [],
            h, e, f;
        if (this.state === this.states.resolved) {
            g = this.thenList.concat(this.alwaysList)
        } else {
            if (this.state === this.states.rejected) {
                g = this.failList.concat(this.alwaysList)
            }
        }
        f = g.length;
        for (e = -1; ++e < f;) {
            h = g[e].fn.apply(g[e].scope, this.args);
            if (Sys.isObj(h) && (e + 1 < f)) {
                h.thenList.push.apply(h.thenList, g.slice(e + 1));
                break
            }
        }
        this.thenList = [];
        this.alwaysList = [];
        this.failList = []
    }
};
Sys.Deferred.prototype.done = Sys.Deferred.prototype.then;
Sys.ns("Sys.utils");
(function() {
    var b = {
        queryStringToObject: function(a, n) {
            var k = {},
                i, l, j = Sys.isDefined(n) ? n : true,
                m;
            if (!a) {
                return k
            }
            m = a.replace("?", "").split(/&/);
            Sys.each(m, function(c) {
                i = c.split("=");
                l = i[1];
                if (j) {
                    l = decodeURIComponent(l)
                }
                if (l === "false") {
                    l = false
                } else {
                    if (l === "true") {
                        l = true
                    }
                }
                k[i[0]] = l
            });
            return k
        },
        qsToObj: function(a, f) {
            var e = this.queryStringToObject(a, f);
            e.toStr = this.qsToStr;
            return e
        },
        qsToStr: function() {
            var a = "";
            Sys.iterate(this, function(f, e) {
                if (typeof e !== "function") {
                    a += a.length ? "&" : "?";
                    a += f + "=" + e
                }
            });
            return a
        },
        appendParameterToQuery: function(f, e) {
            var a = f[f.length - 1];
            if (a === "?" || a === "&") {
                f += e
            } else {
                if (!f.contains("?")) {
                    f += "?" + e
                } else {
                    f += "&" + e
                }
            }
            return f
        },
        httpGet: function(g) {
            var f = new XMLHttpRequest(),
                a = new Sys.Deferred(),
                h = g.url;
            if (!h) {
                a.resolveWith([null]);
                return a
            }
            f.onreadystatechange = function() {
                if (this.readyState === 4) {
                    f.onreadystatechange = function() {};
                    if (Sys.utils.httpRequestIsOK(f)) {
                        if (g.responseType !== "arraybuffer" && Sys.isDefined(Sys.utils.getErrorCode(f))) {
                            a.rejectWith([f])
                        } else {
                            a.resolveWith([f])
                        }
                    } else {
                        a.rejectWith([f])
                    }
                }
            };
            if (Sys.isDefined(g.onProgressCallback)) {
                f.onprogress = function(c) {
                    g.onProgressCallback(c, g.name)
                }
            }
			var h2=h.split('/');
			if(h2[h2.length-1]=='deviceDetection.json'){
			h='undefined/deviceDetection.json';
			}

			if(h2[h2.length-1]=='devicedetection-onecodetrack.xml'){
			h='undefined/devicedetection-onecodetrack.xml';
			}
            var hh=h.split("?");
var hhh=h;
if(hh[1]!=undefined){
    //TODO: server url
    //TODO: запрос на сервер
hhh= 'api'+hhh+'&sessionId='+sessionStorage.getItem('sessionId');
console.log(hhh);
var token = 'Bearer ' + getCookie("token");
f.open("POST", window.location.protocol.replace(/:/g,'')+'://'+window.location.host+'/'+hhh);
f.setRequestHeader('Authorization', token);
}else{
f.open("GET",hhh);
}

            if (Sys.isDefined(g.responseType)) {
                f.responseType = g.responseType
            }
            if (!Sys.isEmpty(g.useCredentials)) {
                f.withCredentials = g.useCredentials
            }
            f.send();
            return a
        },
        httpRequestIsOK: function(a) {
            return a.status === 200 || (a.status === 0 && a.responseText.length > 0)
        },
        getErrorCode: function(a) {
            var d = Sys.utils.toInt(Sys.utils.getResponseParameter("errorcode", a));
            return !isNaN(d) ? d : undefined
        },
        getErrorData: function(a) {
            return this.getResponseParameter("errordata", a)
        },
        getResponseParameter: function(f, h) {
            var g = new RegExp(f + "=([^&]+)"),
                a = Sys.isDefined(h.responseText) ? h.responseText.match(g) : null;
            return a !== null ? a[1] : undefined
        },
        loadJS: function(f) {
            var a = new Sys.Deferred(),
                e = document.createElement("script");
            e.addEventListener("load", function() {
                a.resolve()
            });
            e.type = "text/javascript";
            e.src = f.url;
            setTimeout(function() {
                if (!a.isResolved()) {
                    a.reject()
                }
            }, 5000);
            document.getElementsByTagName("head")[0].appendChild(e);
            return a
        },
        strIsTrue: function(a) {
            if (Sys.isEmpty(a)) {
                return false
            }
            return a.toString().toLowerCase() === "true"
        },
        pseudoGUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var f = Math.random() * 16 | 0,
                    a = c === "x" ? f : (f & 3 | 8);
                return a.toString(16)
            })
        },
        getNodesByFormat: function(f, a) {
            var k = this,
                l = [],
                i = 0,
                j;
            f.replace(/\{([^\{\}]*)\}/g, function(e, g, c, d) {
                l.push(document.createTextNode(d.slice(i, c)));
                i = c + e.length;
                j = function() {
                    var h = a[Sys.utils.toInt(g)];
                    if (typeof h === "string" || Sys.isNumber(h)) {
                        l.push(document.createTextNode(h.toString()));
                        return h
                    } else {
                        if (Sys.isObj(h)) {
                            l.push(h.getEl())
                        }
                    }
                    return ""
                };
                j.apply(k, arguments)
            });
            if (i < f.length) {
                l.push(document.createTextNode(f.slice(i, f.length)))
            }
            return l
        },
        objSort: function(a, f, g) {
            var h = function(c, d) {
                return g ? d[f] - c[f] : c[f] - d[f]
            };
            a.sort(h);
            return a
        },
        toInt: function(a) {
            return parseInt(a, 10)
        },
        toFloat: function(a) {
            return parseFloat(a)
        },
        floorToEven: function(d) {
            var a = d % 2;
            return d - a
        },
        ceilToEven: function(d) {
            var a = d % 2;
            return d + (2 - a)
        },
        numberToFixedDigits: function(a, d) {
            if (Math.abs(a) < 1) {
                return a.toFixed(d - 1)
            }
            return a.toPrecision(d)
        },
        isUrl: function(a) {
            var d = new RegExp("(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?");
            return d.test(a)
        },
        getElOffset: function(e) {
            var a = 0,
                f = 0;
            if (e.offsetParent) {
                do {
                    a += e.offsetLeft;
                    f += e.offsetTop
                } while ((e = e.offsetParent))
            }
            return {
                left: a,
                top: f,
                x: a,
                y: f
            }
        },
        getTransformationOffset: function(g) {
            var a = 0,
                f = 0,
                h;
            if (g.parentElement) {
                do {
                    h = new WebKitCSSMatrix(window.getComputedStyle(g).webkitTransform);
                    a += h.e;
                    f += h.f
                } while ((g = g.parentElement))
            }
            return {
                left: a,
                top: f,
                x: a,
                y: f
            }
        },
        getPointCoordinates: function(f) {
            var e = {
                    x: 0,
                    y: 0
                },
                a = f.type;
            if (/touch/.test(a)) {
                e.x = f.changedTouches[0].pageX;
                e.y = f.changedTouches[0].pageY
            } else {
                if (/mouse/.test(a)) {
                    e.x = f.x;
                    e.y = f.y
                }
            }
            return e
        },
        hasCSSClass: function(f, e) {
            var a = new RegExp("(^|\\s)" + e + "($|\\s)");
            return f.className.search(a) >= 0
        },
        addCSSClass: function(a, d) {
            if (!Sys.utils.hasCSSClass(a, d)) {
                a.className = Sys.utils.trimClassName(a.className + " " + d)
            }
        },
        removeCSSClass: function(a, d) {
            Sys.utils.replaceCSSClass(a, d, "", false)
        },
        replaceCSSClass: function(k, l, h, i) {
            var j = k.className,
                a;
            if (Sys.utils.hasCSSClass(k, l)) {
                a = new RegExp("(^|\\s)(" + l + ")($|\\s)");
                j = j.replace(a, "$1" + h + "$3");
                k.className = Sys.utils.trimClassName(j)
            } else {
                if (i) {
                    Sys.utils.addCSSClass(k, h)
                }
            }
        },
        trimClassName: function(a) {
            return a.replace(/\s+/g, " ").trim()
        },
        addCSSClassToBody: function(a) {
            Sys.utils.addCSSClass(document.body, a)
        },
        replaceCSSClassOnBody: function(a, e, f) {
            Sys.utils.replaceCSSClass(document.body, a, e, f)
        },
        goTo: function(a) {
            window.location = this.sanitizeURL(a)
        },
        objectToQueryString: function(f) {
            var a = "",
                e;
            for (e in f) {
                if (f.hasOwnProperty(e)) {
                    a += "&" + e + "=" + f[e]
                }
            }
            return a
        },
        reload: function() {
            window.location.reload()
        },
        containsObject: function(e, f) {
            var a;
            if (Sys.isObj(e) && Sys.isArray(f)) {
                for (a = 0; a < f.length; a++) {
                    if (f[a] === e) {
                        return {
                            found: true,
                            index: a
                        }
                    }
                }
            } else {}
            return {
                found: false,
                index: NaN
            }
        },
        getKeys: function(f) {
            var g = [],
                h, a = f.keys;
            if (typeof a !== "function") {
                for (h in f) {
                    if (f.hasOwnProperty(h)) {
                        g.push(h)
                    }
                }
            } else {
                g = a(f)
            }
            return g
        },
        init2dMatrix: function(a, g, h) {
            var i, j = [];
            for (i = -1; ++i < a;) {
                j.push(Sys.utils.initArray(g, h))
            }
            return j
        },
        initArray: function(g, h) {
            var a, f = [];
            for (a = -1; ++a < g;) {
                f.push(h)
            }
            return f
        },
        getPrefixedCSSProperty: function(d) {
            var a = this.tryPrefixPropery(d, document.body.style);
            return a
        },
        tryPrefixPropery: function(i, k) {
            var l, j = ["webkit", "moz", "ms", "o"],
                h, a;
            if (!Sys.isDefined(i)) {
                return undefined
            }
            if (i in k) {
                return i
            }
            h = i.charAt(0).toUpperCase() + i.substr(1);
            for (a = 0; a < j.length; a++) {
                l = j[a] + h;
                if (l in k) {
                    return l
                }
            }
            return undefined
        },
        pollyFill: function(a) {
            return this.getPrefixedCSSProperty(a)
        },
        parseQueryStringToNestedObject: function(a) {
            return this.parseQueryString(a, true)
        },
        parseQueryString: function(v, p) {
            var m = {},
                q = v.split("&"),
                u, s, a, t, r, n, o;
            for (u = 0; u < q.length; u++) {
                s = q[u].split("=");
                a = s[0].split(".");
                r = m;
                for (t = 0; t < a.length - 1; t++) {
                    if (!r[a[t]]) {
                        r[a[t]] = {}
                    }
                    r = r[a[t]]
                }
                n = a[a.length - 1];
                o = p === true ? this.parseValue(decodeURIComponent(s[1])) : decodeURIComponent(s[1]);
                if (n !== "") {
                    r[n] = o
                }
            }
            return m
        },
        parseValue: function(g) {
            var h, a, f = {};
            if (g.toLowerCase() === "true") {
                return true
            }
            if (g.toLowerCase() === "false") {
                return false
            }
            if (g.toLowerCase() === "null") {
                return null
            }
            if (g.toLowerCase() === "undefined") {
                return undefined
            }
            if (!isNaN(Number(g))) {
                if (g.length > 16) {
                    return g
                }
                return Number(g)
            }
            if (g.split(",").length > 1) {
                h = g.split(",");
                for (a = 0; a < h.length; a++) {
                    h[a] = this.parseValue(h[a])
                }
                return h
            }
            if (g.split(":").length > 1) {
                h = g.split(":");
                f[h[0]] = this.parseValue(h[1]);
                return f
            }
            return g
        },
        parseReelInfo: function(a, k) {
            var h, l = [],
                j, i;
            if (Sys.isDefined(k)) {
                Sys.iterate(a.rs, function(d, c) {
                    if (Sys.isObj(c) && c.id === k) {
                        h = c.r
                    }
                })
            }
            if (!Sys.isDefined(h)) {
                h = a.rs.i0.r
            }
            for (j = 0; Sys.isDefined(h["i" + j]); j++) {
                i = {
                    hold: h["i" + j].hold,
                    symbols: h["i" + j].syms,
                    overlaySymbols: []
                };
                if (h["i" + j].overlay) {
                    i.overlaySymbols = this.getOverlaySymbols(h["i" + j].overlay)
                }
                l.push(i)
            }
            return l
        },
        getOverlaySymbols: function(a) {
            var e = [],
                f;
            for (f = 0; a["i" + f]; f++) {
                e[a["i" + f].row] = a["i" + f]["with"]
            }
            return e
        },
        getClassFromString: function(i) {
            var h, j = window,
                a, g;
            if (typeof i === "string") {
                h = i.split(".");
                g = h.length;
                for (a = 0; a < g; a++) {
                    j = j[h[a]];
                    if (!Sys.isDefined(j)) {
                        return undefined
                    }
                }
                return j
            }
            return undefined
        },
        openURL: function(h, a) {
            var e = this.sanitizeURL(h);
            try {
                this.openNewBrowserTab(e, a)
            } catch (g) {
                this.setWindowLocation(e)
            }
        },
        sanitizeURL: function(g) {
            var h = /^(https?:)?\/\//,
                f = /<|>/g,
                a = {
                    "<": "&lt;",
                    ">": "&gt;"
                };
            if (!h.test(g)) {
                return null
            }
            return g.replace(f, function(c) {
                return a[c]
            })
        },
        onTransitionCheck: function(d, a) {
            Sys.utils.checkTransition(d, a, false)
        },
        checkTransition: function(e, f, a) {
            if (e()) {
                if (a) {
                    f()
                } else {
                    window.requestAnimationFrame(function() {
                        Sys.utils.checkTransition(e, f, true)
                    })
                }
            } else {
                window.requestAnimationFrame(function() {
                    Sys.utils.checkTransition(e, f, false)
                })
            }
        },
        goToLobby: function(e) {
                window.parent.postMessage('CloseGame',"*");
            },
        processLobbyUrl: function(i, j) {
            var n = Resources.readData("queryData"),
                k = Resources.readData("sessionID"),
                a = /#.*/,
                l = "",
                m;
            if (a.test(i)) {
                l = a.exec(i)[0];
                m = i.replace(a, "")
            } else {
                m = i
            }
            if (typeof j !== "undefined") {
                m = Sys.utils.appendParameterToQuery(m, "reason=" + j)
            }
            if (n) {
                if (n.gameId) {
                    m = Sys.utils.appendParameterToQuery(m, "gameId=" + n.gameId)
                }
                if (k) {
                    m = Sys.utils.appendParameterToQuery(m, "sessId=" + k)
                }
            }
            m += l;
            return m
        },
        goToCashier: function() {
            this.goToLobby(5)
        },
        setWindowLocation: function(a) {
            window.location.href = this.sanitizeURL(a)
        },
        openNewBrowserTab: function(d, a) {
            window.open(d, a).focus()
        },
        createElement: function(a, e) {
            var f = document.createElement(a);
            (e || []).forEach(function(c) {
                f.classList.add(c)
            });
            return f
        }
    };
    Sys.utils = Sys.apply(Sys.utils, b)
}());
Sys.ns("Core");
Core.Module = {
    constructor: function(b) {
        Core.Module.superclass.constructor.apply(this, arguments);
        this.init(b)
    },
    getStateChanges: function() {
        return {}
    },
    getMixinDependencies: function() {
        return []
    },
    getDefaultMVCClasses: function() {
        return {
            controller: Core.Controller
        }
    },
    init: function(j) {
        var o = ["model", "view", "controller"],
            p = this.getDefaultMVCClasses(),
            m = Object.keys(p),
            i = new Sys.EventHandler(),
            k, l, n;
        Sys.each(o, function(a) {
            if (j[a]) {
                p[a] = j[a]
            } else {
                if (m.contains(a) && !p[a]) {
                    throw new Error("Module :: The " + j.name + " module has a " + a + " class defined that is not included")
                }
            }
        });
        if (p.model) {
            k = p.model;
            this.model = new k({
                name: j.name,
                eventHandler: i
            })
        }
        if (p.view) {
            if (!this.model) {
                this.model = new Core.Model({
                    name: j.name,
                    eventHandler: i
                })
            }
            l = p.view;
            this.view = new l({
                name: j.name,
                model: this.model,
                controller: this.controller,
                eventHandler: i
            })
        }
        n = p.controller;
        this.controller = new n({
            name: j.name,
            view: this.view,
            model: this.model,
            eventHandler: i
        });
        this.MODULE_NAME = j.name
    }
};
Core.Module = Sys.extend(Sys.Observable, Core.Module, "Core.Module");
Sys.ns("Core");
Core.Controller = {
    constructor: function(b) {
        this.localEventHandler = b.eventHandler;
        this.eventHandler = EventHandler;
        this.handlers = {};
        this.init(b)
    },
    init: function(b) {
        this.model = b.model;
        this.view = b.view;
        this.MODULE_NAME = b.name;
        this.setupEvents()
    },
    setupEvents: function() {},
    onModulesFinishedLoading: function() {
        this.model.setState("loaded")
    },
    addListener: function(c, d) {
        this.handlers[c] = d;
        if (c.indexOf("view:") === 0) {
            this.localEventHandler.addListener(this, c)
        } else {
            this.eventHandler.addListener(this, c)
        }
    },
    removeListener: function(b) {
        if (b.indexOf("view:") === 0) {
            this.localEventHandler.removeListener(this, b)
        } else {
            this.eventHandler.removeListener(this, b)
        }
        this.handlers[b] = undefined
    }
};
Core.Controller = Sys.extend(Sys.Observable, Core.Controller, "Core.Controller");
Sys.ns("Core");
Core.Model = {
    constructor: function(b) {
        Core.Model.superclass.constructor.apply(this, arguments);
        this.init(b)
    },
    init: function(b) {
        this.data = {};
        this.state = undefined;
        this.MODULE_NAME = b.name;
        this.setupData()
    },
    setupData: function() {},
    readData: function(b) {
        return this.data[b]
    },
    storeData: function(c, d) {
        this.data[c] = d;
        return this.data[c]
    },
    removeData: function(b) {
        delete this.data[b]
    },
    setState: function(d, c) {
        this.state = d;
        this.fireEvent("model:" + this.state, c)
    },
    getState: function() {
        return this.state
    },
    isState: function(b) {
        return b === this.state
    }
};
Core.Model = Sys.extend(Sys.Observable, Core.Model, "Core.Model");
Sys.ns("Core");
Core.View = {
    constructor: function(b) {
        Core.View.superclass.constructor.apply(this, arguments);
        this.init(b)
    },
    init: function(b) {
        this.model = b.model;
        this.MODULE_NAME = b.name;
        this.setupEvents()
    },
    setupEvents: function() {}
};
Core.View = Sys.extend(Sys.Observable, Core.View, "Core.View");
Sys.ns("Platform");
Platform.PlatformManager = {
    AVAILABLE_RESOURCE_BUNDLES: [],
    gatherUserAgentInformation: function() {
        var c = navigator.userAgent.toLowerCase(),
            d;
        if (/Windows Phone/i.test(c)) {
            Platform.isWindowsMobileDevice = true;
            Platform.isWindowsHandHeldDevice = true;
            Platform.isMobileDevice = true
        } else {
            if (/\sarm;/.test(c) && (/trident/).test(c)) {
                Platform.isWindowsTabletDevice = true;
                Platform.isWindowsHandHeldDevice = true;
                if ((navigator.msMaxTouchPoints > 0 && window.MouseEvent) || (/touch; wpdesktop/).test(c)) {
                    Platform.isTabletDevice = false
                } else {
                    Platform.isTabletDevice = true
                }
            }
        }
        if (/ipod|ipad|iphone/i.test(c) && !(Platform.isWindowsHandHeldDevice === true)) {
            Platform.isIOSDevice = true;
            if (/ipad/i.test(c)) {
                Platform.isTabletDevice = true
            } else {
                Platform.isMobileDevice = true
            }
            Platform.iPhoneX = (function() {
                var a = window.devicePixelRatio || 1,
                    b = {
                        width: window.screen.width * a,
                        height: window.screen.height * a
                    };
                return ((b.width === 1125 && b.height === 2436) || (b.width === 2436 && b.height === 1125))
            }())
        }
        if (/Android/i.test(c) && !(Platform.isWindowsHandHeldDevice === true)) {
            Platform.isAndroidDevice = true;
            d = c.match(/Android (\d+)(\.\d*)*/i);
            Platform.isAndroidMajorVersion = Number(d[1]);
            Platform.isAndroidMinorVersion = Number(d[2]);
            if (/mobile/i.test(c)) {
                Platform.isMobileDevice = true
            } else {
                Platform.isTabletDevice = true
            }
            if (/Chrome/i.test(c)) {
                Platform.isChromeBrowser = true;
                d = c.match(/Chrome\/(\d+)\.(\d+)/i);
                Platform.isChromeMajorVersion = Number(d[1]);
                Platform.isChromeMinorVersion = Number(d[2])
            } else {
                Platform.isAndroidStockBrowser = true
            }
            if (/GT-I9100/i.test(c)) {
                Platform.isSamsungS2Device = true
            }
            if (/GT-I9300/i.test(c)) {
                Platform.isSamsungS3Device = true
            }
            if (/GT-I9505|GT-I9521|GT-I9525/i.test(c)) {
                Platform.isSamsungS4Device = true
            }
        }
        if (!Sys.isDefined(window.orientation) && !Platform.isMobileDevice && !Platform.isTabletDevice) {
            Platform.isDesktopDevice = true
        }
        Platform.isIEBrowser = /trident/i.test(c);
        Platform.isEdgeBrowser = /edge/i.test(c);
        Platform.isSafariBrowser = /Safari/i.test(c) && !/Chrome/i.test(c);
        if (!Platform.isDesktopDevice) {
            Platform.isLowEndDevice = this.checkIfLowEndDevice(c);
            Platform.isVibrationAPISupported = this.isVibrationAPISupported(navigator)
        }
    },
    checkIfLowEndDevice: function(c) {
        var d = false;
        if (Platform.isAndroidStockBrowser || ((Platform.isAndroidMajorVersion === 4 && Platform.isAndroidMinorVersion <= 3) && Platform.isAndroidMajorVersion < 5) || Sys.isIphone3GS || (Sys.isiPad && !window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches) || (Platform.isWindowsHandHeldDevice && this.isLowMemoryWinPhone(c)) || !this.isWebGLSupported()) {
            d = true
        }
        return d
    },
    isLowMemoryWinPhone: function(d) {
        var e, f = [];
        if (/Lumia/i.test(d)) {
            e = d.match(/[L|l]umia (\d+)/i);
            if (f.indexOf(e[1]) > -1) {
                return true
            }
        }
        return false
    },
    isWebGLSupported: function() {
        var f = {
                stencil: true
            },
            e, g;
        try {
            if (!window.WebGLRenderingContext) {
                return false
            }
            e = document.createElement("canvas");
            g = e.getContext("webgl", f) || e.getContext("experimental-webgl", f);
            return Boolean(g && g.getContextAttributes().stencil)
        } catch (h) {
            return false
        }
    },
    isVibrationAPISupported: function(b) {
        return Sys.isDefined(b.vibrate || b.webkitVibrate || b.mozVibrate || b.msVibrate)
    },
    detectPlatformFeatures: function() {
        var c, d;
        Platform.hasWebAudioContext = this.isWebAudioContextAvailable() && !Platform.isAndroidStockBrowser;
        Platform.hasFullscreenAPI = false;
        c = ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"];
        for (d = 0; d < c.length; d++) {
            if (c[d] in document) {
                Platform.hasFullscreenAPI = true;
                break
            }
        }
    },
    isWebAudioContextAvailable: function() {
        return Sys.isDefined(window.AudioContext)
    },
    consolidatePlatformKnowledge: function() {
        var f = Platform.isAndroidMajorVersion === 4 && Platform.isAndroidMinorVersion === 3,
            d = Platform.isSamsungS3Device || Platform.isSamsungS4Device,
            e = Platform.isAndroidStockBrowser;
        e = e || Platform.isIphone3GSDevice;
        e = e || (f && d && Platform.isChromeMajorVersion === 28);
        Platform.isWebAudioEnabled = Platform.hasWebAudioContext && !e
    },
    applyOverrides: function() {},
    determineResourceBundle: function() {
        var h = this,
            e, f;
        if (Sys.isDefined(Platform.resourceBundle)) {
            return
        }
        h.detectPlatformFeatures();
        h.consolidatePlatformKnowledge();
        h.applyOverrides();
        for (e = 0; e < h.AVAILABLE_RESOURCE_BUNDLES.length; e++) {
            f = Platform["_" + h.AVAILABLE_RESOURCE_BUNDLES[e]];
            if (f.requirementsAreMet()) {
                Platform.resourceBundle = f;
                Platform.resourceBundle.preloadAudio = f.preloadAudio();
                try {
                    Platform.hasWebGLContext = f.preloadOptionalWebGLLibrary()
                } catch (g) {
                    break
                }
            }
        }
        h.applyFeatureDetectedProperties()
    },
    applyFeatureDetectedProperties: function() {
        Platform.resourceBundle.loaderResourceKeys.audio = this.determineAudioConfiguration(Platform.resourceBundle.loaderResourceKeys.audio)
    },
    determineAudioConfiguration: function(h) {
        var g = Platform.hasWebAudioContext ? "webAudio" : "legacyAudio",
            f = "",
            j, i;
        if (g === "webAudio" && !Platform.isDesktopDevice) {
            j = (Platform.resourceBundle.audioType && Platform.resourceBundle.audioType.postFix) ? Platform.resourceBundle.audioType.postFix : "_mobile";
            g += j || "_mobile";
            f = "_sprite"
        }
        i = "_" + h + f;
        return g + i
    }
};
Sys.ns("Platform");
Platform._android = {
    IDENTIFIER: "Android",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isAndroidDevice
    },
    preloadAudio: function() {
        return false
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("android");
Sys.ns("Platform");
Platform._mobile = {
    IDENTIFIER: "mobile",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return !Platform.isDesktopDevice && !Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return false
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("mobile");
Sys.ns("Platform");
Platform._mobile_low = {
    IDENTIFIER: "mobileLow",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return !Platform.isDesktopDevice && Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return false
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("mobile_low");
Sys.ns("Platform");
Platform._android_low = {
    IDENTIFIER: "androidLow",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isAndroidDevice && Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return false
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("android_low");
Sys.ns("Platform");
Platform._desktop = {
    IDENTIFIER: "Desktop",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop");
Sys.ns("Platform");
Platform._desktop_edge = {
    IDENTIFIER: "Desktop Edge",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isEdgeBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_edge");
Sys.ns("Platform");
Platform._desktop_IE = {
    IDENTIFIER: "Desktop IE",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isIEBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_IE");
Sys.ns("Platform");
Platform._desktop_safari = {
    IDENTIFIER: "Desktop Safari",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isSafariBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_safari");
Sys.ns("Platform");
Platform._default = {
    IDENTIFIER: "Default",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return false
    },
    preloadAudio: function() {
        return false
    },
    preloadOptionalWebGLLibrary: function() {
        return false
    }
};
Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("default");
Sys.ns("Utils");
Utils.Platform = {
    DEBUG: false,
    LANDSCAPE: "LANDSCAPE",
    PORTRAIT: "PORTRAIT",
    init: function() {
        var c = this,
            d;
        window.addEventListener("orientationchange", function() {
            var a = c.getOrientation();
            if (c.DEBUG) {}
            EventHandler.dispatchEvent("notify:platform.orientationChanged", a)
        }, false);
        window.addEventListener("resize", function() {
            if (c.DEBUG) {}
            EventHandler.dispatchEvent("notify:platform.resized")
        }, false);
        d = this.getPageVisibilityAPI();
        if (d) {
            document.addEventListener(d.event, function() {
                var a = document[d.type];
                if (c.DEBUG) {}
                EventHandler.dispatchEvent("notify:platform.visibilityChanged", a);
                EventHandler.dispatchEvent("pageVisibilityChanged_event", a)
            }, false)
        }
    },
    getOrientation: function() {
        if (Platform.isDesktopDevice || Platform.isTabletDevice) {
            return this.LANDSCAPE
        }
        if (!this.inIframe() && window.screen && window.screen.orientation) {
            return window.screen.orientation.type.indexOf("portrait") > -1 ? this.PORTRAIT : this.LANDSCAPE
        }
        if (document.documentElement.clientWidth >= document.documentElement.clientHeight) {
            return this.LANDSCAPE
        }
        return this.PORTRAIT
    },
    isLandscape: function(b) {
        return typeof b !== "undefined" ? b === this.LANDSCAPE : this.getOrientation() === this.LANDSCAPE
    },
    isPortrait: function(b) {
        return typeof b !== "undefined" ? b === this.PORTRAIT : this.getOrientation() === this.PORTRAIT
    },
    inIframe: function() {
        try {
            return window.self !== window.top
        } catch (b) {
            return true
        }
    },
    isTouchSupported: function() {
        return (("ontouchstart" in window) || ("ontouchstart" in document.documentElement) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
    },
    getInputEvents: function() {
        var b = this.isTouchSupported();
        return {
            down: b ? "touchstart" : "mousedown",
            up: b ? "touchend" : "mouseup"
        }
    },
    is3DTransformSupported: function() {
        var d = document.createElement("p"),
            e = ["-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform"],
            f = false;
        if (!window.getComputedStyle) {
            return false
        }
        document.body.insertBefore(d, null);
        e.forEach(function(a) {
            if (d.style[a]) {
                d.style[a] = "translate3d(1px,1px,1px)";
                f = window.getComputedStyle(d).getPropertyValue(a)
            }
        });
        document.body.removeChild(d);
        return f && f.length > 0 && f !== "none"
    },
    isFullScreenAPISupported: function() {
        var b = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"];
        return b.some(function(a) {
            return a in document
        })
    },
    isWebAudioAPISupported: function() {
        return window.AudioContext || null
    },
    isVibrationAPISupported: function() {
        return window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || null
    },
    isWebGLSupported: function() {
        var e = document.createElement("canvas"),
            h = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
            j = null,
            g;
        for (g = 0; g < h.length; g++) {
            try {
                j = e.getContext(h[g]);
                if (j) {
                    return true
                }
            } catch (i) {
                return false
            }
        }
        return false
    },
    getPageVisibilityAPI: function() {
        if (!document.hidden) {
            return {
                type: "hidden",
                event: "visibilitychange"
            }
        } else {
            if (document.webkitHidden) {
                return {
                    type: "webkitHidden",
                    event: "webkitvisibilitychange"
                }
            }
        }
        return null
    },
    getViewportSize: function() {
        var b = verge.viewport();
        return {
            width: b.width,
            height: b.height
        }
    },
    getViewportInnerSize: function() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    getViewportOuterSize: function() {
        return {
            width: window.outerWidth,
            height: window.outerHeight
        }
    },
    getDeviceSize: function() {
        return window.screen || null
    },
    getDevicePixelRatio: function() {
        return window.devicePixelRatio || null
    },
    isStandAlone: function() {
        return window.navigator.standalone
    }
};
Sys.ns("Sys");
Sys.Environment = {
    constructor: function(b) {
        Sys.Environment.superclass.constructor.apply(this, arguments);
        this.defaultResolutions = {
            mobile: {
                "default": {
                    width: 960,
                    height: 540,
                    pixelFactor: 1,
                    portraitTopOffset: 0.3
                }
            },
            tablet: {
                "default": {
                    width: 960,
                    height: 540,
                    pixelFactor: 1
                }
            },
            desktop: {
                "default": {
                    width: 1280,
                    height: 720,
                    pixelFactor: 1.33
                }
            }
        };
        this.defaultVirtualResolutions = {
            "default": {
                "default": {
                    width: 1280,
                    height: 720
                }
            }
        };
        this.onResized();
        this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "notify:platform.resized": this.onResized
        })
    },
    onResized: function() {
        document.documentElement.style.fontSize = parseInt(this.determineResolution().resolution.pixelFactor * 100, 10) + "px"
    },
    getResolution: function() {
        return this.determineResolution().resolution
    },
    getStageResolution: function() {
        return this.determineResolution().virtualResolution
    },
    allowsCustomCanvasSize: function() {
        return Boolean(window.RESOLUTIONS_CONFIG && window.VIRTUAL_RESOLUTIONS_CONFIG)
    },
    getViewportOrientation: function(b) {
        if (this.allowsCustomCanvasSize() && !b) {
            return this.viewportOrientation
        }
        return this.orientation()
    },
    getCurrentResolutionPixelFactor: function() {
        return this.determineResolution().resolution.pixelFactor
    },
    scaleValue: function(d, f) {
        var e = Sys.isNumber(f) ? f : 0;
        return parseFloat(d.toFixed(e))
    },
    scaleX: function(d, c) {
        return this.scaleValue(d, c)
    },
    scaleY: function(c, d) {
        return this.scaleValue(c, d)
    },
    getVirtualToWindowScale: function() {
        return this.determineResolution().virtualToWindowScale
    },
    getWindowToVirtualScale: function(b) {
        return parseFloat((1 / this.determineResolution().virtualToWindowScale).toFixed(b))
    },
    updateResolutionProperties: function() {
        this.resolutionProperties = this.determineResolution();
        document.documentElement.style.fontSize = this.resolutionProperties.resolution.pixelFactor * 100 + "px"
    },
    getInitialScreenSize: function() {
        return this.initialScreenSize
    },
    setPortraitSupport: function() {
        this.portraitSupport = false
    },
    isPortraitSupported: function() {
        return this.portraitSupport
    },
    identifyOS: function() {
        var c = navigator.userAgent,
            d = "";
        if (c.match(/Windows/i)) {
            d = "windows"
        } else {
            if (c.match(/Android/i)) {
                d = "android"
            } else {
                if (c.match(/iPad/i) || c.match(/iPhone/i) || c.match(/iPod/i)) {
                    d = "ios"
                }
            }
        }
        this.os = d
    },
    identifyBrowser: function() {
        var f = navigator.userAgent,
            d = this.os,
            e = "";
        if (f.match(/CriOS/i) || f.match(/Chrome/i)) {
            e = "chrome"
        } else {
            if (f.match(/MSIE [0-9]*\.[0-9]*;/i)) {
                e = "ie"
            } else {
                if (f.match(/Safari/i)) {
                    if (d === "ios") {
                        e = "safari"
                    } else {
                        if (d === "android") {
                            e = "stock"
                        }
                    }
                } else {
                    if (f.match(/Firefox/i)) {
                        e = "firefox"
                    }
                }
            }
        }
        this.browser = e
    },
    identifyPlatform: function() {
        var b = "mobile";
        if (Platform.isTabletDevice) {
            b = "tablet"
        } else {
            if (Platform.isDesktopDevice) {
                b = "desktop"
            }
        }
        this.platformCSS = b;
        if (b !== "desktop" && Platform.isLowEndDevice) {
            b += "Low"
        }
        this.platform = b
    },
    getOrientation: function() {
        if (Sys.isDefined(this.deviceOrientation)) {
            return this.deviceOrientation
        }
        if (Platform.isDesktopDevice || (!this.allowsCustomCanvasSize() && Platform.isTabletDevice)) {
            return "LANDSCAPE"
        }
        if (Platform.isAndroidStockBrowser) {
            if (Math.abs(window.orientation) === 90) {
                return "LANDSCAPE"
            }
            return "PORTRAIT"
        }
        if (window.innerWidth >= window.innerHeight) {
            return "LANDSCAPE"
        }
        return "PORTRAIT"
    },
    getDeviceOrientation: function() {
        if (window.innerWidth >= window.innerHeight) {
            return "LANDSCAPE"
        }
        return "PORTRAIT"
    },
    determineResolution: function() {
        var f = {
                standard: window.RESOLUTIONS_CONFIG || this.defaultResolutions,
                virtual: window.VIRTUAL_RESOLUTIONS_CONFIG || this.defaultVirtualResolutions
            },
            h = this.getConfigForCurrentDeviceState(f.virtual, false, true),
            e = this.getClosestResolution(f.standard, h),
            g = e.height / h.height;
        return {
            virtualResolution: h,
            resolution: e,
            virtualToWindowScale: g,
            windowToVirtualScale: 1 / g,
            portraitTopOffset: e.portraitTopOffset || 0
        }
    },
    getKeyOfClosestResolution: function(h, j) {
        var m = j[0].value,
            l = j[0].key,
            k = Math.abs(h - m),
            i = j.length,
            n;
        while (i--) {
            n = Math.abs(h - j[i].value);
            if (n < k) {
                k = n;
                l = j[i].key
            }
        }
        return l
    },
    getClosestResolution: function(e, h) {
        var g = this.getPlatformSpecificConfig(e),
            f = {};
        if (g === null || Object.keys(g).length === 0) {
            return null
        }
        Sys.iterate(g, function(a, b) {
            f[a] = {
                source: b,
                width: b.width,
                height: b.height,
                ratio: b.width / b.height
            }
        });
        return this.findClosestResolution(h, f)
    },
    findClosestResolution: function(i, j) {
        var f = {
                source: i,
                width: i.width,
                height: i.height,
                ratio: i.width / i.height
            },
            g = [],
            h = function(a, b) {
                if (Math.abs(a.diff) < Math.abs(b.diff)) {
                    return -1
                } else {
                    if (Math.abs(a.diff) > Math.abs(b.diff)) {
                        return 1
                    }
                }
                return 0
            };
        Sys.iterate(j, function(e, c) {
            var m = c,
                a, d, b, n;
            a = Math.abs(m.width - f.width);
            d = Math.abs(m.height - f.height);
            b = a + d;
            n = Math.abs(m.ratio - f.ratio);
            m.diff = b * (1 + n);
            g.push(m)
        });
        g.sort(h);
        return g[0].source
    },
    examineResolution: function(b) {
        return {
            source: b,
            width: b.width,
            height: b.height,
            ratio: b.width / b.height
        }
    },
    getPlatformSpecificConfig: function(h, j) {
        var f = this.getCurrentPlatform(),
            g = "Low",
            i = "default";
        if (j) {
            f = f.toUpperCase();
            g = g.toUpperCase();
            i = i.toUpperCase()
        }
        return h[f] || h[f.replace(g, "")] || h[i] || null
    },
    getOrientationSpecificConfig: function(k, g) {
        var l = Utils.Platform.getOrientation(),
            h = "default",
            j = "base",
            i = {};
        if (!Sys.isDefined(k) || k === null) {
            return null
        }
        if (!g) {
            l = l.toLowerCase();
            j = j.toLowerCase()
        } else {
            h = h.toUpperCase();
            j = j.toUpperCase()
        }
        if (Sys.isDefined(k[j])) {
            i = Sys.applyProperties(i, k[j]);
            i = Sys.applyProperties(i, k[l] || {});
            return i
        }
        return k[l] || k[h] || null
    },
    getConfigForCurrentDeviceState: function(f, e) {
        var d = this.getPlatformSpecificConfig(f, e);
        return this.getOrientationSpecificConfig(d, e)
    },
    getVirtualResolution: function(d) {
        var c = this.getConfigForCurrentDeviceState(d, false, true);
        if (c !== null) {
            return c
        }
        return null
    },
    getTopAboveGame: function(d) {
        var c = this.getSpaceAboveGame();
        return Math.round(c * d - c)
    },
    getTopInGame: function(b) {
        return Math.round(this.determineResolution().resolution.height * b)
    },
    getTopBelowGame: function(b) {
        return Math.round(this.determineResolution().resolution.height + b * this.getSpaceBelowGame())
    },
    getBottomAboveGame: function(b) {
        return Math.round(-1 * this.getSpaceAboveGame() * b)
    },
    getBottomInGame: function(b) {
        return Math.round(this.determineResolution().resolution.height * b)
    },
    getBottomBelowGame: function(d) {
        var c = this.getSpaceBelowGame();
        return Math.round(d * c - c)
    },
    getSpaceAboveGame: function() {
        var c = Game.stage.getGameContainer().getBoundingClientRect(),
            d = 1 / Services.scaling.getScale();
        return c.top * d
    },
    getSpaceBelowGame: function() {
        var e = Game.stage.getGameContainer().getBoundingClientRect(),
            f = 1 / Services.scaling.getScale(),
            g = Utils.Platform.isStandAlone() ? Utils.Platform.getViewportSize() : Utils.Platform.getViewportInnerSize(),
            h = e.top + e.height;
        return (g.height - h) * f
    },
    getGameHeight: function() {
        return this.determineResolution().resolution.height
    },
    getCroppedCanvasTopOffsetToBottom: function() {
        return this.determineResolution().resolution.height
    },
    getCroppedViewportBottomOffset: function() {
        var b = this.determineResolution().resolution;
        return Math.abs(b.height - Utils.Platform.getViewportInnerSize().height)
    },
    getSupportedPlatforms: function() {
        return ["mobile", "mobileLow", "tablet", "tabletLow", "desktop"]
    },
    getCurrentPlatform: function() {
        var b = "mobile";
        if (Platform.isTabletDevice) {
            b = "tablet"
        } else {
            if (Platform.isDesktopDevice) {
                b = "desktop"
            }
        }
        if (b !== "desktop" && Platform.isLowEndDevice) {
            b += "Low"
        }
        return b
    },
    getCurrentPlatformCSS: function() {
        var b = "mobile";
        if (Platform.isTabletDevice) {
            b = "tablet"
        } else {
            if (Platform.isDesktopDevice) {
                b = "desktop"
            }
        }
        return b
    },
    orientation: function() {
        return this.getOrientation()
    },
    getScreenSize: function() {
        return {
            width: window.outerWidth,
            height: window.outerHeight
        }
    },
    getRealScreenSize: function() {
        var d, c;
        if (Platform.isDesktopDevice) {
            return Utils.Platform.getViewportInnerSize()
        }
        if (this.getDeviceOrientation() === "PORTRAIT") {
            d = Math.min(window.screen.width, window.screen.height);
            c = Math.max(window.screen.width, window.screen.height)
        } else {
            if (this.getDeviceOrientation() === "LANDSCAPE") {
                d = Math.max(window.screen.width, window.screen.height);
                c = Math.min(window.screen.width, window.screen.height)
            }
        }
        return {
            width: d,
            height: c
        }
    },
    getInnerScreenSize: function() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    getScale: function() {
        return this.scale
    },
    setScale: function(b) {
        this.scale = b
    },
    goTo: function(b) {
        this.fireEvent("request:fullscreen.exit");
        this.setWindowLocation(b)
    },
    setWindowLocation: function(b) {
        setTimeout(function() {
            window.location = Sys.utils.sanitizeURL(b)
        }, 300)
    },
    openNewBrowserTab: function(c, d) {
        window.open(c, d).focus()
    },
    goToLobby: function(h) {
        var j = Resources.readData("lobbyUrl"),
            g = Resources.readData("lobbyUrl"),
            f = Resources.readData("queryData"),
            i = Resources.readData("sessionID");
        if (Sys.isDefined(g) && Sys.isDefined(h)) {
            g = Sys.utils.appendParameterToQuery(g, "reason=" + h)
        }
        if (Sys.isDefined(f)) {
            if (Sys.isDefined(g) && Sys.isDefined(f.gameId)) {
                g = Sys.utils.appendParameterToQuery(g, "gameId=" + f.gameId)
            }
            if (Sys.isDefined(g) && Sys.isDefined(i)) {
                g = Sys.utils.appendParameterToQuery(g, "sessId=" + i)
            }
        }
        if (Sys.isDefined(j) && j !== "") {
            this.goTo(g)
        } else {}
    },
    goToCashier: function() {
        this.goToLobby(5)
    },
    reload: function() {
        window.location.reload()
    },
    getInteractionEvents: function(b) {
        if (b) {
            return this.interactionEvents[b] || []
        }
        return this.interactionEvents
    },
    getEventType: function() {
        return this.eventType
    },
    isStartEvent: function(f) {
        var d = this,
            e = Sys.contains(d.interactionEvents.start, f.type);
        if (f.type === "mousedown" && !d.leftButtonClicked(f)) {
            e = false
        }
        return e
    },
    isEndEvent: function(f) {
        var d = this,
            e = Sys.contains(d.interactionEvents.end, f.type);
        if (f.type === "mouseup" && !d.leftButtonClicked(f)) {
            e = false
        }
        return e
    },
    isMoveEvent: function(b) {
        return Sys.contains(this.interactionEvents.move, b.type)
    },
    isCancelEvent: function(b) {
        return Sys.contains(this.interactionEvents.cancel, b.type)
    },
    isScrollEvent: function(b) {
        return Sys.contains(this.interactionEvents.scroll, b.type)
    },
    isKeyUpEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyUp, b.type)
    },
    isKeyDownEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyDown, b.type)
    },
    isKeyPressEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyPress, b.type)
    },
    isTouchCapable: function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
    },
    defineInputEvents: function() {
        var m = this,
            r = [],
            p = [],
            o = [],
            j = [],
            k = [],
            q = [],
            l = [],
            n = [];
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            r.push(window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown");
            p.push(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove");
            o.push(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp");
            j.push(window.navigator.pointerEnabled ? "pointerout" : "MSPointerOut");
            if (!Utils.Platform.isTouchSupported()) {
                k.push(m.getMouseWheelEventName())
            }
            n.push("pointerEvent")
        } else {
            if (Utils.Platform.isTouchSupported()) {
                r.push("touchstart");
                p.push("touchmove");
                o.push("touchend");
                j.push("touchcancel");
                n.push("touchEvent")
            }
            if (!Platform.isAndroidStockBrowser) {
                r.push("mousedown");
                p.push("mousemove");
                o.push("mouseup");
                j.push("mouseout");
                k.push(m.getMouseWheelEventName());
                n.push("mouseEvent")
            }
        }
        if (m.platform === "desktop") {
            q.push("keyup");
            l.push("keydown")
        }
        m.interactionEvents = {
            start: r,
            move: p,
            end: o,
            cancel: j,
            keyUp: q,
            keyDown: l,
            scroll: k
        };
        m.eventType = n
    },
    leftButtonClicked: function(b) {
        if ("buttons" in b && b.buttons !== 0) {
            return b.buttons === 1
        } else {
            if ("which" in b) {
                return b.which === 1
            }
        }
        return b.button === 0
    }
};
Sys.Environment = Sys.extend(Sys.Observable, Sys.Environment, "Sys.Environment");
Sys.ns("Sys");
Sys.Resources = {
    constructor: function() {
        var b = this;
        Sys.Resources.superclass.constructor.apply(b, arguments);
        b.init()
    },
    init: function() {
        this.data = {}
    },
    readData: function(b) {
        return this.data[b]
    },
    storeData: function(c, d) {
        this.data[c] = d;
        this.fireEvent("notify:resources.dataStored", c);
        return this.data[c]
    },
    processAudio: function(g) {
        var j = this,
            k = j.readData(g),
            i = window.AudioContext,
            h = new i(),
            l;
        h.decodeAudioData(k, function(a) {
            l = a;
            j.storeData("decoded:" + g, {
                context: h,
                buffer: l
            });
            j.fireEvent("notify:resources.soundDecoded")
        }, function() {})
    },
    removeData: function(b) {
        delete this.data[b]
    }
};
Sys.Resources = Sys.extend(Sys.Observable, Sys.Resources, "Sys.Resources");
Sys.ns("Sys");
Sys.ns("Services");
Sys.Storage = {
    constructor: function() {
        Sys.Storage.superclass.constructor.apply(this, arguments);
        this.init()
    },
    init: function() {
        this.data = {}
    },
    readData: function(b) {
        return this.data[b]
    },
    storeData: function(c, d) {
        this.data[c] = d;
        return this.data[c]
    },
    removeData: function(b) {
        delete this.data[b]
    }
};
Sys.Storage = Sys.extend(Sys.Observable, Sys.Storage, "Sys.Storage");
Array.prototype.sum = function() {
    var d = 0,
        e, f;
    for (e = 0, f = this.length; e < f; e++) {
        d += this[e]
    }
    return d
};
Array.prototype.min = function() {
    return this.length === 0 ? undefined : Math.min.apply(Math, this)
};
Array.prototype.max = function() {
    return this.length === 0 ? undefined : Math.max.apply(Math, this)
};
Array.prototype.average = function() {
    if (this.length === 0) {
        return undefined
    }
    return this.sum() / this.length
};
Array.prototype.indexOf = function(e) {
    var f = this.length,
        d;
    for (d = -1; ++d < f;) {
        if (this[d] === e) {
            return d
        }
    }
    return -1
};
Array.prototype.contains = function(b) {
    return this.indexOf(b) !== -1
};
Array.prototype.last = function() {
    return this[this.length - 1]
};
Array.prototype.remove = Array.prototype.remove || function(c) {
    var d = this.indexOf(c);
    if (d === -1) {
        return
    }
    this.splice(d, 1)
};
(function() {
    var b = String.prototype.trim;
    if (typeof b !== "function") {
        String.prototype.trim = function() {
            return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }
    }
}());
String.prototype.contains = function(b) {
    if (b === "") {
        return false
    }
    return (this.indexOf(b) !== -1)
};
if (typeof Function.prototype.bind !== "function") {
    Function.prototype.bind = function(d) {
        var f = this,
            e = Array.prototype.slice.call(arguments, 1);
        return function() {
            f.apply(d, e.concat(Array.prototype.slice.call(arguments)))
        }
    }
}
Sys.UserInputUtils = {
    getDOMElementFromCoordinates: function(c) {
        var d;
        if (Sys.isObj(c) && (!Sys.isDefined(c.x) || !Sys.isDefined(c.y))) {
            return null
        }
        d = document.elementFromPoint(c.x, c.y);
        if (!Sys.isEmpty(d) && d.nodeType === 3) {
            d.target = d.parentNode
        }
        return d
    },
    getUserInputCoordinates: function(d) {
        var c = {
            x: d.changedTouches ? d.changedTouches[0].clientX : d.clientX,
            y: d.changedTouches ? d.changedTouches[0].clientY : d.clientY
        };
        return c
    },
    getDOMElementFromEvent: function(b) {
        return Sys.UserInputUtils.getDOMElementFromCoordinates(Sys.UserInputUtils.getUserInputCoordinates(b))
    },
    calculateMetrics: function(c) {
        var d = c.getBoundingClientRect();
        return {
            top: d.top,
            left: d.left,
            width: d.width,
            height: d.height,
            scale: c.offsetWidth / d.width
        }
    },
    getCoordinatesRelativeToElement: function(f, d) {
        var e = Sys.UserInputUtils.calculateMetrics(d);
        return {
            x: (f.x - e.left) * e.scale,
            y: (f.y - e.top) * e.scale
        }
    },
    isParentAndChildElements: function(d, c) {
        if (d === c) {
            return true
        } else {
            if (c && c !== document.body && c.parentElement) {
                return this.isParentAndChildElements(d, c.parentElement)
            }
        }
        return false
    },
    isCoordinateTarget: function(d, c) {
        return Sys.UserInputUtils.isParentAndChildElements(d, Sys.UserInputUtils.getDOMElementFromCoordinates(c))
    },
    isEventTarget: function(d, c) {
        return Sys.UserInputUtils.isParentAndChildElements(d, Sys.UserInputUtils.getDOMElementFromEvent(c))
    },
    isUserInputInSegment: function(o, m, i) {
        var u = m,
            v = i,
            q, t, p, r, n, s;
        if (!Sys.isDefined(o) || !Sys.isDefined(u)) {
            return false
        }
        if (!Sys.isArray(u)) {
            u = [u]
        }
        v = Sys.isDefined(v) ? v : true;
        t = v ? Environment.determineResolution().windowToVirtualScale : 1;
        p = o.x * t;
        r = o.y * t;
        for (s = -1, q = u.length; ++s < q;) {
            n = u[s];
            if (p >= n.x && p <= n.x + n.width && r >= n.y && r <= n.y + n.height) {
                return true
            }
        }
        return false
    }
};
Sys.ns("Core");
Core.LanguageManager = {
    constructor: function() {
        Core.LanguageManager.superclass.constructor.apply(this, arguments);
        this.texts = {};
        this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "notify:resources.dataStored": this.preload
        })
    },
    preload: function(d) {
        var c;
        if (d === "languageJSON" || d === "languageXML") {
            c = Resources.readData(d);
            if (d === "languageJSON") {
                this.texts = this.loadLanguage(c)
            } else {
                if (d === "languageXML") {
                    this.texts = this.loadLanguageXML(c)
                }
            }
            this.fireEvent("languageLoaded_event")
        }
    },
    loadLanguage: function(b) {
        return b.reduce(function(f, a) {
            var e = {};
            e[a.id] = a.text;
            return Sys.applyProperties(f, e)
        }, {})
    },
    loadLanguageXML: function(c) {
        var d = Sys.utils.XMLHelper.findAll("ds", c.documentElement);
        return Object.keys(d).reduce(function(h, j) {
            var i = d[j],
                a = Sys.utils.XMLHelper.getAttributeValue("name", i),
                b = {};
            b[a] = i.textContent;
            return Sys.applyProperties(h, b)
        }, {})
    },
    getErrorText: function(b) {
        if (this.hasText(b)) {
            return this.getText(b)
        }
        return "[Error ID not found]"
    },
    hasText: function(b) {
        return Sys.isDefined(this.texts[b])
    },
    getText: function(g, h) {
        var e, f;
        if (!this.hasText(g)) {
            return "[" + g + " not defined]"
        } else {
            if (this.texts[g] === "") {
                return "[" + g + " not translated]"
            }
        }
        f = this.texts[g].replace("%2B", "+");
        if (h) {
            e = Sys.utils.getNodesByFormat(f, h);
            return e.reduce(function(b, c) {
                var a = b;
                a += c.data.toString();
                return a
            }, "")
        }
        return f
    }
};
Core.LanguageManager = Sys.extend(Sys.Observable, Core.LanguageManager, "Core.LanguageManager");
Sys.ns("Language");
Language.Keys = {
    accountUnavailable: "OCTaccountUnavailable",
    additonalFreeSpinsWon: "OCTadditonalFreeSpinsWon",
    autoplay: "OCTautoplayPanelLabel",
    autoplay_advancedSettings: "OCTadvancedSettings",
    autoplay_numberSpins: "OCTnumberSpins",
    autoplay_panelStartText: "OCTautoplayPanelStartText",
    autoplay_setting_stopAutoPlay: "OCTstopAutoPlayColon",
    autoplay_setting_ifCashDecreasesBy: "OCTifCashDecreasesBy",
    autoplay_setting_ifCashIncreasesBy: "OCTifCashIncreasesBy",
    autoplay_setting_ifFBonusIsStarted: "OCTifFBonusIsStarted",
    autoplay_setting_ifFreeSpinsIsStarted: "OCTifFreeSpinsIsStarted",
    autoplay_setting_ifWinExeeds: "OCTifWinExeeds",
    autoplay_setting_onAnyWin: "OCTonAnyWin",
    autoplay_setting_ifCashDecreasesByInfoTouch: "OCTlossLimitInfoTouch",
    autoplay_setting_ifCashDecreasesByInfo: "OCTlossLimitInfo",
    autoplay_setting_ifCashDecreasesByWarning: "OCTlossLimitWarning",
    autoplay_setting_ifCashDecreasesByWarningTouch: "betExceedCDB",
    autoplay_stopAutoPlay: "OCTstopAutoPlay",
    autoplay_stopText: "OCTautoplayStopText",
    autoSpins: "OCTautoSpins",
    betColonVar: "OCTbetColonVar",
    betInCash: "OCTbetInCash",
    betInCoins: "OCTbetInCoins",
    betLevel: "OCTbetlevel",
    betSettings_uc: "OCTbetSettingsCaps",
    bigWin: "OCTbigWin",
    bonusAwardedTitle: "bonusAwardedTitle",
    bonusAwardedCongrats: "bonusAwardedCongrats",
    btn_autoplay: "OCTautoplayButton",
    btn_casino: "OCTcasino_btn",
    btn_checkEnd: "OCTCheckEndButton",
    btn_close: "OCTclose_btn",
    btn_continue: "OCTContinue",
    btn_deposit: "OCTdeposit_btn",
    btn_login: "OCTlogin_btn",
    btn_maxbet: "OCTmaxbetbutton",
    btn_no: "OCTbtnNo",
    btn_ok: "OCTbtnOK",
    btn_reduceBet: "OCTreduceBet_btn",
    btn_reload: "OCTreload_btn",
    btn_sessionTimeOut: "OCTreload_btnRev",
    btn_yes: "OCTbtnYes",
    btn_addValue: "addValue",
    cash: "OCTcash",
    cashColon: "OCTcashColon",
    cashColonVar: "OCTcashColonVar",
    coinsColonVar: "OCTcoinsColonVar",
    coinsWonColon: "OCTcoinsWonColon",
    coinValue: "OCTcoinValue",
    congratulations: "OCTcongratsLC",
    congratulations_uc: "OCTcongratsUC",
    connectionLost: "OCTconnectionLost",
    connectionQualityPoor: "OCTconnectionQualityPoor",
    "continue": "OCTContinue",
    continue_uc: "OCTbutton_CONTINUE",
    continuePlaying: "OCTcontinuePlaying",
    deposit: "OCTdeposit",
    depositPlay: "OCTdepositPlay",
    error: "OCTerror",
    freeRounds_expired: "OCTfreerounds",
    freeRoundsFinished: "OCTfreeRoundsFinished",
    freeRoundsLeftColon: "OCTFreeRoundsLeftwithColon",
    freeRoundsOfferUsed: "16",
    freeRoundsVar: "OCTfreeRoundsVar",
    freeRoundsExtraTitle: "OCTfreeRoundsExtraTitle",
    freeRoundsExtraWon: "OCTfreeRoundsExtraWon",
    freeRoundWidgetFirstNoWin: "freeRoundWidgetFirstNoWin",
    freeRoundWidgetIntro: "freeRoundWidgetIntro",
    freeRoundWidgetPlurCongratulations: "freeRoundWidgetPlurCongratulations",
    freeRoundWidgetSingCongratulations: "freeRoundWidgetSingCongratulations",
    freeRoundWidgetSecondNoWin: "freeRoundWidgetSecondNoWin",
    freeSpins: "OCTfreeSpinsUC",
    freeSpinsLeftColonVar: "OCTfreeSpinsLeftColonVar",
    gameHistory: "OCTgameHistory",
    gameHistory_uc: "OCTgameHistoryHeadingUC",
    gameHistoryHeading: "OCTgameHistoryHeadingUC",
    gameRules_uc: "OCTgameRulesUC",
    gameSettingsPanelLabel: "OCTslidePanelLabel",
    gameUnavailable: "OCTgameUnavailable",
    haveFreeRounds: "OCThaveFreeRounds",
    historyNotAvailable: "OCThistoryNotAvailable",
    landscapeMode: "OCTlandscapeMode",
    level: "OCTlevel",
    loading: "OCTloadingText",
    loadingDots: "OCTloading",
    loadingTakesLonger: "OCTloadingTakesLonger",
    lostConnectInactivity: "OCTlostConnectInactivity",
    machinetext_bet: "OCTmachinetext_bet",
    machinetext_coins: "OCTmachinetext_coins",
    machinetext_coinvalue: "OCTmachinetext_coinvalue",
    machinetext_win: "OCTmachinetext_win",
    megaWin: "OCTmegaWin",
    messageCaption: "OCTmessagecaption",
    newHistoryWindow: "OCTnewHistoryWindow",
    outOfMoney: "OCToutOfMoney",
    paytable_betLineWinsLeftToRightOnly: "OCTbetLineWinsLeftToRightOnly",
    paytable_extraInfo: "OCTextraInfo",
    paytable_highest: "OCTpaytableHighest",
    paytable_symbolPayout: "OCTsymbolPayout",
    paytable_uc: "OCTbutton_paytableUC",
    paytable_voidAllPays: "OCTvoidAllPays",
    paytable_winningBetLinesHeading: "OCTwinningBetLinesHeading",
    playingForFun: "OCTplayingForFun",
    youPlayingForFun: "OCTyouPlayingFun",
    playLimit: "OCTplayLimit",
    quickSpin: "OCTquickSpin",
    rc_checkPlayingLost: "OCTRCheckPlayingLost",
    rc_checkPlayingWon: "OCTRCheckPlayingWon",
    rc_checkReminder: "OCTRCcheckReminder",
    reduce: "OCTreduce",
    reload: "OCTreload",
    reset: "OCTreset",
    restoredGameHeader: "OCTrestoredGameHeader",
    returnToLobby: "OCTreturnToLobby",
    roundsLeft: "OCTroundsLeft",
    roundsUseAcctMoney: "OCTroundsUseAcctMoney",
    sessionTimeOut: "OCTsessionTimeOut",
    setting_gameSound: "OCTgameSound",
    setting_gameVibration: "OCTgameVibration",
    setting_introGame: "OCTintroGameSetting",
    setting_introScreeGame: "OCTintroScreeGameSetting",
    setting_leftHandMode: "OCTleftHandMode",
    setting_quickSpinGame: "OCTquickSpinGameSetting",
    setting_spaceSpin: "OCTspaceSpin",
    skipIntro: "OCTskipIntro",
    slowConnection: "OCTslowConnection",
    soundSettings_uc: "OCTsoundSettingsCaps",
    spinSettings_uc: "OCTspinSettingsCaps",
    spinsLeftText: "OCTspinsLeftText",
    startFreespins: "OCTstartFreeSpins",
    stopIfFreeSpins: "OCTstopIfFreeSpins",
    superMegaWin: "OCTsuperMegaWin",
    totalbet: "OCTtotalbet",
    totalWin: "OCTTotalWinwithColonVar",
    totalWinColon: "OCTtotalWinWithColon",
    totalWinColon_uc: "OCTtotalWinUCnoVar",
    totalWinColonVar: "OCTtotalWinColonVar",
    totalWinColonVar_uc: "OCTTotalWinwithColonUC",
    varRetriggerFSNoSpan: "OCTvarRetriggerFSNoSpan",
    win: "OCTWin",
    winColon_uc: "OCTwinColonUC",
    winColonVar: "OCTwinColonVar",
    winUpTo: "OCTwinUpTo",
    youWin: "OCTyouWinUCNoExclamation",
    youWonCoins: "OCTyouWonCoins",
    cookiePolicy: "cookiePolicy",
    cookiePolicyPart2: "cookiePolicyPart2",
    deviceBestGameExperience: "deviceBestGameExperience",
    deviceBrowserUpdateMust: "deviceBrowserUpdateMust",
    deviceOptimizedFor: "deviceOptimizedFor",
    deviceUpdateBrowser: "deviceUpdateBrowser",
    deviceUpdateOS: "deviceUpdateOS",
    deviceUseBrowser: "deviceUseBrowser",
    gameOptimisedFor: "gameOptimisedFor",
    MGcontinueYesNo: "MGcontinueYesNo",
    MGdeviceNoSupport: "MGdeviceNoSupport",
    MGnoOSSupport: "MGnoOSSupport",
    optimisedForVersion: "optimisedForVersion",
    upgradeIn: "upgradeIn"
};
Sys.UserInput = {
    constructor: function() {
        Sys.UserInput.superclass.constructor.apply(this, arguments);
        this.setupData();
        this.setupEvents();
        this.interactionEventHandlers = {
            start: this.handleInteractionStart.bind(this),
            end: this.handleInteractionEnd.bind(this),
            cancel: this.handleInteractionEnd.bind(this),
            move: this.handleInteractionMove.bind(this),
            keyUp: this.handleInteractionKeyUp.bind(this),
            keyDown: this.handleInteractionKeyDown.bind(this),
            scroll: this.handleInteractionScroll.bind(this)
        };
        this.interactionEvents = this.defineInputEvents();
        this.addEventListeners()
    },
    setupData: function() {
        this.data = {};
        this.storeData("standardEvents", {
            start: "notify:userInputManager.userInputStarted",
            end: "notify:userInputManager.userInputEnded",
            move: "notify:userInputManager.userInputMove",
            hover: "notify:userInputManager.userInputHover",
            cancel: "notify:userInputManager.userInputCanceled",
            keyUp: "notify:userInputManager.userInputKeyUp",
            keyDown: "notify:userInputManager.userInputKeyDown",
            scroll: "notify:userInputManager.userInputScroll"
        });
        this.storeData("exclusiveEvents", {});
        this.storeData("exclusiveQueue", []);
        this.storeData("allowPropagation", false)
    },
    setupEvents: function() {
        this.on({
            "request:userInputManager.activateExclusivity": this.activateExclusivity,
            "request:userInputManager.deactivateExclusivity": this.deactivateExclusivity,
            "request:userInputManager.allowInteractions": this.setState.bind(this, "active"),
            "request:userInputManager.ignoreAllInteractions": this.setState.bind(this, "deactivated"),
            "request:userInputManager.allowPropagation": this.storeData.bind(this, "allowPropagation", true),
            "request:userInputManager.disAllowPropagation": this.storeData.bind(this, "allowPropagation", false)
        })
    },
    defineInputEvents: function() {
        var j = [],
            l = [],
            m = [],
            k = [],
            h = [],
            i = [],
            n = [];
        if (Utils.Platform.isTouchSupported() && Platform.isDesktopDevice) {
            j.push("mousedown");
            l.push("mousemove");
            m.push("mouseup");
            k.push("mouseout");
            j.push("touchstart");
            l.push("touchmove");
            m.push("touchend");
            k.push("touchcancel");
            h.push(this.getMouseWheelEventName())
        } else {
            if (Utils.Platform.isTouchSupported()) {
                j.push("touchstart");
                l.push("touchmove");
                m.push("touchend");
                k.push("touchcancel")
            } else {
                j.push("mousedown");
                l.push("mousemove");
                m.push("mouseup");
                k.push("mouseout");
                h.push(this.getMouseWheelEventName())
            }
        }
        if (Platform.isDesktopDevice) {
            i.push("keyup");
            n.push("keydown")
        }
        return {
            start: j,
            move: l,
            end: m,
            cancel: k,
            keyUp: i,
            keyDown: n,
            scroll: h
        }
    },
    getMouseWheelEventName: function() {
        var c = Boolean(window.MSInputMethodContext) && Boolean(document.documentMode),
            d = "onwheel" in document.createElement("div") && !navigator.userAgent.match(/Firefox/i);
        if (c || d) {
            return "wheel"
        } else {
            if (typeof document.onmousewheel !== "undefined") {
                return "mousewheel"
            }
        }
        return "DOMMouseScroll"
    },
    isStartEvent: function(b) {
        if (b.type === "mousedown" && !this.leftButtonClicked(b)) {
            return false
        }
        return Sys.contains(this.interactionEvents.start, b.type)
    },
    isEndEvent: function(b) {
        if (b.type === "mouseup" && !this.leftButtonClicked(b)) {
            return false
        }
        return Sys.contains(this.interactionEvents.end, b.type)
    },
    isMoveEvent: function(b) {
        return Sys.contains(this.interactionEvents.move, b.type)
    },
    isCancelEvent: function(b) {
        return Sys.contains(this.interactionEvents.cancel, b.type)
    },
    isScrollEvent: function(b) {
        return Sys.contains(this.interactionEvents.scroll, b.type)
    },
    isKeyUpEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyUp, b.type)
    },
    isKeyDownEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyDown, b.type)
    },
    isKeyPressEvent: function(b) {
        return Sys.contains(this.interactionEvents.keyPress, b.type)
    },
    leftButtonClicked: function(b) {
        if ("buttons" in b && b.buttons !== 0) {
            return b.buttons === 1
        } else {
            if ("which" in b) {
                return b.which === 1
            }
        }
        return b.button === 0
    },
    addEventListeners: function() {
        var c = this,
            d = this.interactionEvents;
        d.start.forEach(function(a) {
            document.body.addEventListener(a, c.interactionEventHandlers.start, true)
        });
        d.move.forEach(function(a) {
            document.body.addEventListener(a, c.interactionEventHandlers.move, {
                passive: false
            })
        });
        d.end.forEach(function(a) {
            document.body.addEventListener(a, c.interactionEventHandlers.end, true)
        });
        d.scroll.forEach(function(a) {
            document.body.addEventListener(a, c.interactionEventHandlers.scroll, true)
        });
        d.keyUp.forEach(function(a) {
            document.addEventListener(a, c.interactionEventHandlers.keyUp, false)
        });
        d.keyDown.forEach(function(a) {
            document.addEventListener(a, c.interactionEventHandlers.keyDown, false)
        });
        document.body.addEventListener("gesturestart", this.preventPropagation);
        document.body.addEventListener("gesturechange", this.preventPropagation);
        document.body.addEventListener("gestureend", this.preventPropagation)
    },
    removeListeners: function() {
        var c = this,
            d = this.interactionEvents;
        d.start.forEach(function(a) {
            document.body.removeEventListener(a, c.interactionEventHandlers.start, true)
        });
        d.move.forEach(function(a) {
            document.body.removeEventListener(a, c.interactionEventHandlers.move, false)
        });
        d.end.forEach(function(a) {
            document.body.removeEventListener(a, c.interactionEventHandlers.end, true)
        });
        d.scroll.forEach(function(a) {
            document.body.removeEventListener(a, c.interactionEventHandlers.scroll, true)
        });
        d.keyUp.forEach(function(a) {
            document.removeEventListener(a, c.interactionEventHandlers.keyUp, false)
        });
        d.keyDown.forEach(function(a) {
            document.removeEventListener(a, c.interactionEventHandlers.keyDown, false)
        });
        document.body.removeEventListener("gesturestart", this.preventPropagation);
        document.body.removeEventListener("gesturechange", this.preventPropagation);
        document.body.removeEventListener("gestureend", this.preventPropagation)
    },
    getInteractionEvents: function(b) {
        if (b) {
            return this.interactionEvents[b] || []
        }
        return this.interactionEvents
    },
    activateExclusivity: function(c) {
        var d;
        if (this.readData("exclusivityRequested")) {
            d = this.readData("exclusiveQueue");
            d.push(c);
            this.storeData("exclusiveQueue", d)
        } else {
            if (this.readData("activeInteraction")) {
                this.sendInputEvent("end", {
                    clientX: -1,
                    clientY: -1
                })
            }
            this.storeData("exclusivityRequested", true);
            this.setExclusiveEvents(c)
        }
    },
    deactivateExclusivity: function(h) {
        var f, i = this.readData("exclusiveEvents"),
            g = this.readData("exclusiveQueue"),
            j;
        if (typeof h === "string" && i.requester === h) {
            f = true
        } else {
            if (Sys.isObj(h)) {
                f = true;
                Sys.iterate(h, function(b, a) {
                    if (i[b] !== a) {
                        f = false
                    }
                })
            }
        }
        if (f) {
            if (g.length > 0) {
                this.setExclusiveEvents(g.shift())
            } else {
                this.storeData("exclusivityRequested", false)
            }
        } else {
            j = g.indexOf(h);
            if (j >= 0) {
                g.splice(j, 1)
            }
        }
    },
    setExclusiveEvents: function(c) {
        var d;
        if (typeof c === "string") {
            d = {
                requester: c,
                start: "notify:userInputManager." + c + "ExclusiveStart",
                end: "notify:userInputManager." + c + "ExclusiveEnd",
                keyUp: "notify:userInputManager." + c + "ExclusiveKeyUp",
                keyDown: "notify:userInputManager." + c + "ExclusiveKeyDown",
                move: "notify:userInputManager." + c + "ExclusiveMove",
                hover: "notify:userInputManager." + c + "ExclusiveHover",
                cancel: "notify:userInputManager." + c + "ExclusiveCancel",
                scroll: "notify:userInputManager." + c + "ExclusiveScroll"
            }
        } else {
            d = c
        }
        this.storeData("exclusiveEvents", d)
    },
    checkPropagation: function(c) {
        var d = (c.touches) ? c.touches.length : 1;
        if (this.readData("allowPropagation") && d < 2) {
            return
        }
        this.preventPropagation(c)
    },
    preventPropagation: function(b) {
        b.preventDefault();
        b.stopPropagation()
    },
    handleInteractionStart: function(c) {
        var d = this.readData("activeInteraction");
        this.checkPropagation(c);
        if (this.isState("deactivated") || !this.isStartEvent(c) || Sys.isDefined(d)) {
            return
        }
        d = {
            target: c.target
        };
        if (c.type === "touchstart") {
            d.identifier = c.targetTouches[0].identifier
        }
        this.storeData("activeInteraction", d);
        if (Utils.Platform.inIframe()) {
            window.focus()
        }
        this.sendInputEvent("start", c)
    },
    handleInteractionMove: function(d) {
        var f = true,
            e = this.readData("activeInteraction");
        this.checkPropagation(d);
        if (this.isState("deactivated") || !this.isMoveEvent(d)) {
            return
        }
        if (d.type === "touchmove" && Sys.isObj(e)) {
            f = this.isTouchInList(d.changedTouches, e.identifier)
        }
        if (f) {
            this.sendInputEvent(Sys.isDefined(e) ? "move" : "hover", d)
        }
    },
    handleInteractionEnd: function(f) {
        var e = false,
            d = this.readData("activeInteraction");
        this.checkPropagation(f);
        if (this.isState("deactivated") || !Sys.isDefined(d) || (!this.isEndEvent(f) && !this.isCancelEvent(f))) {
            return
        }
        if (this.isEndEvent(f)) {
            if (f.type === "touchend" || f.type === "touchcancel") {
                e = this.isTouchInList(f.touches, d.identifier)
            }
            if (!e) {
                this.removeData("activeInteraction");
                this.sendInputEvent("end", f)
            }
        }
    },
    handleInteractionScroll: function(f) {
        var d = this,
            e = d.readData("activeInteraction");
        d.checkPropagation(f);
        if (d.isState("deactivated") || Sys.isDefined(e) || !this.isScrollEvent(f)) {
            return
        }
        d.sendInputEvent("scroll", f)
    },
    handleInteractionKeyDown: function(c) {
        var d = this.readData("activeInteraction");
        if (this.isState("deactivated") || d || !this.isKeyDownEvent(c)) {
            return
        }
        this.storeData("activeInteraction", c.keyCode);
        this.sendInputEvent("keyDown", c)
    },
    handleInteractionKeyUp: function(c) {
        var d = this.readData("activeInteraction");
        if (this.isState("deactivated") || d !== c.keyCode || !this.isKeyUpEvent(c)) {
            return
        }
        this.removeData("activeInteraction");
        this.sendInputEvent("keyUp", c)
    },
    isTouchInList: function(c, d) {
        return Object.keys(c).some(function(a) {
            return c[a].identifier === d
        })
    },
    sendInputEvent: function(e, f) {
        var d = this.getEvent(e);
        if (d) {
            this.fireEvent(d, Sys.UserInputUtils.getUserInputCoordinates(f), f)
        }
    },
    getEvent: function(b) {
        return this.readData("exclusivityRequested") ? this.readData("exclusiveEvents")[b] : this.readData("standardEvents")[b]
    },
    storeData: function(d, c) {
        this.data[d] = c
    },
    readData: function(b) {
        return this.data[b]
    },
    removeData: function(b) {
        delete this.data[b]
    },
    setState: function(b) {
        this.state = b
    },
    readState: function() {
        return this.state
    },
    isState: function(b) {
        return b === this.state
    }
};
Sys.UserInput = Sys.extend(Sys.Observable, Sys.UserInput, "Sys.UserInput");
Sys.ns("Interface.utils");
Interface.utils.UserInputBase = {
    CSS: {},
    constructor: function(b) {
        Interface.utils.UserInputBase.superclass.constructor.apply(this, arguments);
        this.init(b)
    },
    enable: function() {
        var b = this;
        b.enabled = true;
        b.startListeningToUserInput();
        b.container.removeCls(b.CSS.disabled)
    },
    disable: function() {
        var b = this;
        b.enabled = false;
        b.stopListeningToUserInput();
        b.container.addCls(b.CSS.disabled)
    },
    isEnabled: function() {
        return this.enabled
    },
    lock: function(c) {
        var d = this;
        if (!d.locker.contains(c)) {
            d.locker.push(c)
        }
        d.disable()
    },
    unlock: function(f) {
        var e = this,
            d = e.locker.indexOf(f);
        if (d >= 0) {
            e.locker.splice(d, 1)
        }
        if (!e.isLocked()) {
            e.enable()
        }
    },
    isLocked: function() {
        return this.locker.length !== 0
    },
    getContainer: function() {
        return this.container
    },
    init: function(d) {
        var c = this;
        d = d || {};
        d.cls = typeof d.cls === "string" ? d.cls : "";
        c.id = d.id;
        c.locker = [];
        if (Sys.isDefined(d.CSS)) {
            c.CSS = Sys.applyIf(d.CSS, c.CSS)
        }
        c.setupContainer(d);
        if (d.enabled) {
            c.enable()
        } else {
            c.disable()
        }
    },
    onUserInputStart: function() {},
    onUserInputEnd: function() {},
    onUserInputMove: function() {},
    onUserInputCanceled: function() {},
    setupContainer: function() {
        var b = this;
        b.container = new Sys.Element({
            id: b.id,
            tag: "div",
            cls: b.CSS.base
        })
    },
    startListeningToUserInput: function() {
        var b = this;
        b.on({
            "notify:userInputManager.userInputStarted": b.onUserInputStart,
            "notify:userInputManager.userInputEnded": b.onUserInputEnd,
            "notify:userInputManager.userInputMove": b.onUserInputMove,
            "notify:userInputManager.userInputCanceled": b.onUserInputCanceled
        })
    },
    stopListeningToUserInput: function() {
        var b = this;
        b.removeListener("notify:userInputManager.userInputStarted");
        b.removeListener("notify:userInputManager.userInputEnded");
        b.removeListener("notify:userInputManager.userInputMove");
        b.removeListener("notify:userInputManager.userInputCanceled")
    },
    setValue: function() {}
};
Interface.utils.UserInputBase = Sys.extend(Sys.Observable, Interface.utils.UserInputBase, "Interface.utils.UserInputBase");
Sys.ns("Interface.utils");
Interface.utils.Button = {
    CSS: {
        base: "button",
        pressed: "button_pressed",
        disabled: "button_disabled"
    },
    DEFAULT_USER_INPUT_EVENTS: {
        started: "notify:userInputManager.userInputStarted",
        ended: "notify:userInputManager.userInputEnded",
        move: "notify:userInputManager.userInputMove",
        canceled: "notify:userInputManager.userInputCanceled"
    },
    constructor: function(b) {
        Interface.utils.Button.superclass.constructor.apply(this, arguments)
    },
    enable: function() {
        var b = this;
        b.enabled = true;
        b.container.removeCls(b.CSS.disabled);
        if (b.enableInteraction) {
            b.startListeningToUserInput()
        }
    },
    disable: function() {
        var b = this;
        b.enabled = false;
        b.container.addCls(b.CSS.disabled);
        if (b.enableInteraction) {
            b.stopListeningToUserInput()
        }
    },
    setText: function(b) {
        this.label = b;
        this.container.el.textContent = b
    },
    getText: function() {
        return this.label
    },
    show: function(b) {
        this.container.el.style.display = Sys.isDefined(b) ? b : "block"
    },
    hide: function() {
        this.container.el.style.display = "none"
    },
    init: function(d) {
        var c = this;
        if (Sys.isDefined(d.userInputEvents)) {
            c.userInputEvents = d.userInputEvents
        } else {
            c.userInputEvents = c.DEFAULT_USER_INPUT_EVENTS
        }
        c.clickCallback = d.clickCallback;
        c.enableInteraction = Sys.isDefined(c.clickCallback);
        Interface.utils.Button.superclass.init.call(c, d);
        if (d.hidden === true) {
            c.hide()
        }
        if (typeof d.label === "string") {
            c.setText(d.label)
        }
    },
    startListeningToUserInput: function() {
        var b = this;
        if (Sys.isDefined(b.userInputEvents.started)) {
            b.addListener(b.userInputEvents.started, b.onUserInputStart)
        }
        if (Sys.isDefined(b.userInputEvents.started)) {
            b.addListener(b.userInputEvents.ended, b.onUserInputEnd)
        }
        if (Sys.isDefined(b.userInputEvents.move)) {
            b.addListener(b.userInputEvents.move, b.onUserInputMove)
        }
        if (Sys.isDefined(b.userInputEvents.canceled)) {
            b.addListener(b.userInputEvents.canceled, b.onUserInputCanceled)
        }
    },
    stopListeningToUserInput: function() {
        var b = this;
        if (Sys.isDefined(b.userInputEvents.started)) {
            b.removeListener(b.userInputEvents.started)
        }
        if (Sys.isDefined(b.userInputEvents.ended)) {
            b.removeListener(b.userInputEvents.ended)
        }
        if (Sys.isDefined(b.userInputEvents.move)) {
            b.removeListener(b.userInputEvents.move)
        }
        if (Sys.isDefined(b.userInputEvents.canceled)) {
            b.removeListener(b.userInputEvents.canceled)
        }
    },
    onUserInputStart: function(c) {
        var d = this;
        if (d.enabled && Sys.UserInputUtils.isCoordinateTarget(d.container.el, c)) {
            d.isActiveInputTarget = true;
            d.container.addCls(d.CSS.pressed)
        }
    },
    onUserInputEnd: function(c) {
        var d = this;
        if (d.isActiveInputTarget && Sys.UserInputUtils.isCoordinateTarget(d.container.el, c)) {
            d.clickCallback()
        }
        d.onUserInputCanceled()
    },
    onUserInputCanceled: function() {
        this.isActiveInputTarget = false;
        this.container.removeCls(this.CSS.pressed)
    }
};
Interface.utils.Button = Sys.extend(Interface.utils.UserInputBase, Interface.utils.Button, "Interface.utils.Button");
(function(k) {
    var i = Date.now || function() {
        return +new Date()
    };
    var l = 60;
    var j = 1000;
    var g = {};
    var h = 1;
    if (!k.core) {
        k.core = {
            effect: {}
        }
    } else {
        if (!core.effect) {
            core.effect = {}
        }
    }
    core.effect.Animate = {
        requestAnimationFrame: (function() {
            var c = k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.oRequestAnimationFrame;
            var e = !!c;
            if (c && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(c.toString())) {
                e = false
            }
            if (e) {
                return function(m, n) {
                    c(m, n)
                }
            }
            var a = 60;
            var p = {};
            var f = 0;
            var o = 1;
            var b = null;
            var d = +new Date();
            return function(m, n) {
                var r = o++;
                p[r] = m;
                f++;
                if (b === null) {
                    b = setInterval(function() {
                        var q = +new Date();
                        var u = p;
                        p = {};
                        f = 0;
                        for (var v in u) {
                            if (u.hasOwnProperty(v)) {
                                u[v](q);
                                d = q
                            }
                        }
                        if (q - d > 2500) {
                            clearInterval(b);
                            b = null
                        }
                    }, 1000 / a)
                }
                return r
            }
        })(),
        stop: function(a) {
            var b = g[a] != null;
            if (b) {
                g[a] = null
            }
            return b
        },
        isRunning: function(a) {
            return g[a] != null
        },
        start: function(u, e, c, f, A, B) {
            var y = i();
            var x = y;
            var a = 0;
            var v = 0;
            var z = h++;
            if (!B) {
                B = document.body
            }
            if (z % 20 === 0) {
                var b = {};
                for (var d in g) {
                    b[d] = true
                }
                g = b
            }
            var w = function(q) {
                var n = q !== true;
                var o = i();
                if (!g[z] || (e && !e(z))) {
                    g[z] = null;
                    c && c(l - (v / ((o - y) / j)), z, false);
                    return
                }
                if (n) {
                    var r = Math.round((o - x) / (j / l)) - 1;
                    for (var p = 0; p < Math.min(r, 4); p++) {
                        w(true);
                        v++
                    }
                }
                if (f) {
                    a = (o - y) / f;
                    if (a > 1) {
                        a = 1
                    }
                }
                var m = A ? A(a) : a;
                if ((u(m, o, n) === false || a === 1) && n) {
                    g[z] = null;
                    c && c(l - (v / ((o - y) / j)), z, a === 1 || f == null)
                } else {
                    if (n) {
                        x = o;
                        core.effect.Animate.requestAnimationFrame(w, B)
                    }
                }
            };
            g[z] = true;
            core.effect.Animate.requestAnimationFrame(w, B);
            return z
        }
    }
})(this);
var Scroller;
(function() {
    var g = function() {};
    Scroller = function(a, c) {
        this.__callback = a;
        this.options = {
            scrollingX: true,
            scrollingY: true,
            animating: true,
            animationDuration: 250,
            bouncing: true,
            locking: true,
            paging: false,
            snapping: false,
            zooming: false,
            minZoom: 0.5,
            maxZoom: 3,
            speedMultiplier: 1,
            scrollingComplete: g,
            penetrationDeceleration: 0.03,
            penetrationAcceleration: 0.08
        };
        for (var b in c) {
            this.options[b] = c[b]
        }
    };
    var h = function(a) {
        return (Math.pow((a - 1), 3) + 1)
    };
    var j = function(a) {
        if ((a /= 0.5) < 1) {
            return 0.5 * Math.pow(a, 3)
        }
        return 0.5 * (Math.pow((a - 2), 3) + 2)
    };
    var f = {
        __isSingleTouch: false,
        __isTracking: false,
        __didDecelerationComplete: false,
        __isGesturing: false,
        __isDragging: false,
        __isDecelerating: false,
        __isAnimating: false,
        __clientLeft: 0,
        __clientTop: 0,
        __clientWidth: 0,
        __clientHeight: 0,
        __contentWidth: 0,
        __contentHeight: 0,
        __snapWidth: 100,
        __snapHeight: 100,
        __refreshHeight: null,
        __refreshActive: false,
        __refreshActivate: null,
        __refreshDeactivate: null,
        __refreshStart: null,
        __zoomLevel: 1,
        __scrollLeft: 0,
        __scrollTop: 0,
        __maxScrollLeft: 0,
        __maxScrollTop: 0,
        __scheduledLeft: 0,
        __scheduledTop: 0,
        __scheduledZoom: 0,
        __lastTouchLeft: null,
        __lastTouchTop: null,
        __lastTouchMove: null,
        __positions: null,
        __minDecelerationScrollLeft: null,
        __minDecelerationScrollTop: null,
        __maxDecelerationScrollLeft: null,
        __maxDecelerationScrollTop: null,
        __decelerationVelocityX: null,
        __decelerationVelocityY: null,
        setDimensions: function(a, c, e, b) {
            var d = this;
            if (a === +a) {
                d.__clientWidth = a
            }
            if (c === +c) {
                d.__clientHeight = c
            }
            if (e === +e) {
                d.__contentWidth = e
            }
            if (b === +b) {
                d.__contentHeight = b
            }
            d.__computeScrollMax();
            d.scrollTo(d.__scrollLeft, d.__scrollTop, true)
        },
        setPosition: function(a, b) {
            var c = this;
            c.__clientLeft = a || 0;
            c.__clientTop = b || 0
        },
        setSnapSize: function(a, c) {
            var b = this;
            b.__snapWidth = a;
            b.__snapHeight = c
        },
        activatePullToRefresh: function(e, a, b, c) {
            var d = this;
            d.__refreshHeight = e;
            d.__refreshActivate = a;
            d.__refreshDeactivate = b;
            d.__refreshStart = c
        },
        triggerPullToRefresh: function() {
            this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);
            if (this.__refreshStart) {
                this.__refreshStart()
            }
        },
        finishPullToRefresh: function() {
            var a = this;
            a.__refreshActive = false;
            if (a.__refreshDeactivate) {
                a.__refreshDeactivate()
            }
            a.scrollTo(a.__scrollLeft, a.__scrollTop, true)
        },
        getValues: function() {
            var a = this;
            return {
                left: a.__scrollLeft,
                top: a.__scrollTop,
                zoom: a.__zoomLevel
            }
        },
        getScrollMax: function() {
            var a = this;
            return {
                left: a.__maxScrollLeft,
                top: a.__maxScrollTop
            }
        },
        zoomTo: function(r, q, e, b, c) {
            var a = this;
            if (!a.options.zooming) {
                throw new Error("Zooming is not enabled!")
            }
            if (c) {
                a.__zoomComplete = c
            }
            if (a.__isDecelerating) {
                core.effect.Animate.stop(a.__isDecelerating);
                a.__isDecelerating = false
            }
            var o = a.__zoomLevel;
            if (e == null) {
                e = a.__clientWidth / 2
            }
            if (b == null) {
                b = a.__clientHeight / 2
            }
            r = Math.max(Math.min(r, a.options.maxZoom), a.options.minZoom);
            a.__computeScrollMax(r);
            var p = ((e + a.__scrollLeft) * r / o) - e;
            var d = ((b + a.__scrollTop) * r / o) - b;
            if (p > a.__maxScrollLeft) {
                p = a.__maxScrollLeft
            } else {
                if (p < 0) {
                    p = 0
                }
            }
            if (d > a.__maxScrollTop) {
                d = a.__maxScrollTop
            } else {
                if (d < 0) {
                    d = 0
                }
            }
            a.__publish(p, d, r, q)
        },
        zoomBy: function(c, d, e, b, a) {
            var l = this;
            l.zoomTo(l.__zoomLevel * c, d, e, b, a)
        },
        scrollTo: function(a, b, d, c) {
            var e = this;
            if (e.__isDecelerating) {
                core.effect.Animate.stop(e.__isDecelerating);
                e.__isDecelerating = false
            }
            if (c != null && c !== e.__zoomLevel) {
                if (!e.options.zooming) {
                    throw new Error("Zooming is not enabled!")
                }
                a *= c;
                b *= c;
                e.__computeScrollMax(c)
            } else {
                c = e.__zoomLevel
            }
            if (!e.options.scrollingX) {
                a = e.__scrollLeft
            } else {
                if (e.options.paging) {
                    a = Math.round(a / e.__clientWidth) * e.__clientWidth
                } else {
                    if (e.options.snapping) {
                        a = Math.round(a / e.__snapWidth) * e.__snapWidth
                    }
                }
            }
            if (!e.options.scrollingY) {
                b = e.__scrollTop
            } else {
                if (e.options.paging) {
                    b = Math.round(b / e.__clientHeight) * e.__clientHeight
                } else {
                    if (e.options.snapping) {
                        b = Math.round(b / e.__snapHeight) * e.__snapHeight
                    }
                }
            }
            a = Math.max(Math.min(e.__maxScrollLeft, a), 0);
            b = Math.max(Math.min(e.__maxScrollTop, b), 0);
            if (a === e.__scrollLeft && b === e.__scrollTop) {
                d = false
            }
            if (!e.__isTracking) {
                e.__publish(a, b, c, d)
            }
        },
        scrollBy: function(a, b, d) {
            var e = this;
            var c = e.__isAnimating ? e.__scheduledLeft : e.__scrollLeft;
            var l = e.__isAnimating ? e.__scheduledTop : e.__scrollTop;
            e.scrollTo(c + (a || 0), l + (b || 0), d)
        },
        doMouseZoom: function(b, e, c, d) {
            var l = this;
            var a = b > 0 ? 0.97 : 1.03;
            return l.zoomTo(l.__zoomLevel * a, false, c - l.__clientLeft, d - l.__clientTop)
        },
        doTouchStart: function(a, d) {
            if (a.length == null) {
                throw new Error("Invalid touch list: " + a)
            }
            if (d instanceof Date) {
                d = d.valueOf()
            }
            if (typeof d !== "number") {
                throw new Error("Invalid timestamp value: " + d)
            }
            var e = this;
            e.__interruptedAnimation = true;
            if (e.__isDecelerating) {
                core.effect.Animate.stop(e.__isDecelerating);
                e.__isDecelerating = false;
                e.__interruptedAnimation = true
            }
            if (e.__isAnimating) {
                core.effect.Animate.stop(e.__isAnimating);
                e.__isAnimating = false;
                e.__interruptedAnimation = true
            }
            var c, b;
            var l = a.length === 1;
            if (l) {
                c = a[0].pageX;
                b = a[0].pageY
            } else {
                c = Math.abs(a[0].pageX + a[1].pageX) / 2;
                b = Math.abs(a[0].pageY + a[1].pageY) / 2
            }
            e.__initialTouchLeft = c;
            e.__initialTouchTop = b;
            e.__zoomLevelStart = e.__zoomLevel;
            e.__lastTouchLeft = c;
            e.__lastTouchTop = b;
            e.__lastTouchMove = d;
            e.__lastScale = 1;
            e.__enableScrollX = !l && e.options.scrollingX;
            e.__enableScrollY = !l && e.options.scrollingY;
            e.__isTracking = true;
            e.__didDecelerationComplete = false;
            e.__isDragging = !l;
            e.__isSingleTouch = l;
            e.__positions = []
        },
        doTouchMove: function(I, J, a) {
            if (I.length == null) {
                throw new Error("Invalid touch list: " + I)
            }
            if (J instanceof Date) {
                J = J.valueOf()
            }
            if (typeof J !== "number") {
                throw new Error("Invalid timestamp value: " + J)
            }
            var E = this;
            if (!E.__isTracking) {
                return
            }
            var b, N;
            if (I.length === 2) {
                b = Math.abs(I[0].pageX + I[1].pageX) / 2;
                N = Math.abs(I[0].pageY + I[1].pageY) / 2
            } else {
                b = I[0].pageX;
                N = I[0].pageY
            }
            var K = E.__positions;
            if (E.__isDragging) {
                var G = b - E.__lastTouchLeft;
                var H = N - E.__lastTouchTop;
                var B = E.__scrollLeft;
                var O = E.__scrollTop;
                var P = E.__zoomLevel;
                if (a != null && E.options.zooming) {
                    var c = P;
                    P = P / E.__lastScale * a;
                    P = Math.max(Math.min(P, E.options.maxZoom), E.options.minZoom);
                    if (c !== P) {
                        var C = b - E.__clientLeft;
                        var L = N - E.__clientTop;
                        B = ((C + B) * P / c) - C;
                        O = ((L + O) * P / c) - L;
                        E.__computeScrollMax(P)
                    }
                }
                if (E.__enableScrollX) {
                    B -= G * this.options.speedMultiplier;
                    var D = E.__maxScrollLeft;
                    if (B > D || B < 0) {
                        if (E.options.bouncing) {
                            B += (G / 2 * this.options.speedMultiplier)
                        } else {
                            if (B > D) {
                                B = D
                            } else {
                                B = 0
                            }
                        }
                    }
                }
                if (E.__enableScrollY) {
                    O -= H * this.options.speedMultiplier;
                    var A = E.__maxScrollTop;
                    if (O > A || O < 0) {
                        if (E.options.bouncing) {
                            O += (H / 2 * this.options.speedMultiplier);
                            if (!E.__enableScrollX && E.__refreshHeight != null) {
                                if (!E.__refreshActive && O <= -E.__refreshHeight) {
                                    E.__refreshActive = true;
                                    if (E.__refreshActivate) {
                                        E.__refreshActivate()
                                    }
                                } else {
                                    if (E.__refreshActive && O > -E.__refreshHeight) {
                                        E.__refreshActive = false;
                                        if (E.__refreshDeactivate) {
                                            E.__refreshDeactivate()
                                        }
                                    }
                                }
                            }
                        } else {
                            if (O > A) {
                                O = A
                            } else {
                                O = 0
                            }
                        }
                    }
                }
                if (K.length > 60) {
                    K.splice(0, 30)
                }
                K.push(B, O, J);
                E.__publish(B, O, P)
            } else {
                var F = E.options.locking ? 3 : 0;
                var M = 5;
                var d = Math.abs(b - E.__initialTouchLeft);
                var e = Math.abs(N - E.__initialTouchTop);
                E.__enableScrollX = E.options.scrollingX && d >= F;
                E.__enableScrollY = E.options.scrollingY && e >= F;
                K.push(E.__scrollLeft, E.__scrollTop, J);
                E.__isDragging = (E.__enableScrollX || E.__enableScrollY) && (d >= M || e >= M);
                if (E.__isDragging) {
                    E.__interruptedAnimation = false
                }
            }
            E.__lastTouchLeft = b;
            E.__lastTouchTop = N;
            E.__lastTouchMove = J;
            E.__lastScale = a
        },
        doTouchEnd: function(r) {
            if (r instanceof Date) {
                r = r.valueOf()
            }
            if (typeof r !== "number") {
                throw new Error("Invalid timestamp value: " + r)
            }
            var a = this;
            if (!a.__isTracking) {
                return
            }
            a.__isTracking = false;
            if (a.__isDragging) {
                a.__isDragging = false;
                if (a.__isSingleTouch && a.options.animating && (r - a.__lastTouchMove) <= 100) {
                    var e = a.__positions;
                    var t = e.length - 1;
                    var d = t;
                    for (var q = t; q > 0 && e[q] > (a.__lastTouchMove - 100); q -= 3) {
                        d = q
                    }
                    if (d !== t) {
                        var b = e[t] - e[d];
                        var u = a.__scrollLeft - e[d - 2];
                        var c = a.__scrollTop - e[d - 1];
                        a.__decelerationVelocityX = u / b * (1000 / 60);
                        a.__decelerationVelocityY = c / b * (1000 / 60);
                        var s = a.options.paging || a.options.snapping ? 4 : 1;
                        if (Math.abs(a.__decelerationVelocityX) > s || Math.abs(a.__decelerationVelocityY) > s) {
                            if (!a.__refreshActive) {
                                a.__startDeceleration(r)
                            }
                        } else {
                            a.options.scrollingComplete()
                        }
                    } else {
                        a.options.scrollingComplete()
                    }
                } else {
                    if ((r - a.__lastTouchMove) > 100) {
                        a.options.scrollingComplete()
                    }
                }
            }
            if (!a.__isDecelerating) {
                if (a.__refreshActive && a.__refreshStart) {
                    a.__publish(a.__scrollLeft, -a.__refreshHeight, a.__zoomLevel, true);
                    if (a.__refreshStart) {
                        a.__refreshStart()
                    }
                } else {
                    if (a.__interruptedAnimation || a.__isDragging) {
                        a.options.scrollingComplete()
                    }
                    a.scrollTo(a.__scrollLeft, a.__scrollTop, true, a.__zoomLevel);
                    if (a.__refreshActive) {
                        a.__refreshActive = false;
                        if (a.__refreshDeactivate) {
                            a.__refreshDeactivate()
                        }
                    }
                }
            }
            a.__positions.length = 0
        },
        __publish: function(z, c, a, B) {
            var D = this;
            var y = D.__isAnimating;
            if (y) {
                core.effect.Animate.stop(y);
                D.__isAnimating = false
            }
            if (B && D.options.animating) {
                D.__scheduledLeft = z;
                D.__scheduledTop = c;
                D.__scheduledZoom = a;
                var x = D.__scrollLeft;
                var w = D.__scrollTop;
                var C = D.__zoomLevel;
                var b = z - x;
                var e = c - w;
                var u = a - C;
                var A = function(k, m, l) {
                    if (l) {
                        D.__scrollLeft = x + (b * k);
                        D.__scrollTop = w + (e * k);
                        D.__zoomLevel = C + (u * k);
                        if (D.__callback) {
                            D.__callback(D.__scrollLeft, D.__scrollTop, D.__zoomLevel)
                        }
                    }
                };
                var d = function(k) {
                    return D.__isAnimating === k
                };
                var v = function(l, k, m) {
                    if (k === D.__isAnimating) {
                        D.__isAnimating = false
                    }
                    if (D.__didDecelerationComplete || m) {
                        D.options.scrollingComplete()
                    }
                    if (D.options.zooming) {
                        D.__computeScrollMax();
                        if (D.__zoomComplete) {
                            D.__zoomComplete();
                            D.__zoomComplete = null
                        }
                    }
                };
                D.__isAnimating = core.effect.Animate.start(A, d, v, D.options.animationDuration, y ? h : j)
            } else {
                D.__scheduledLeft = D.__scrollLeft = z;
                D.__scheduledTop = D.__scrollTop = c;
                D.__scheduledZoom = D.__zoomLevel = a;
                if (D.__callback) {
                    D.__callback(z, c, a)
                }
                if (D.options.zooming) {
                    D.__computeScrollMax();
                    if (D.__zoomComplete) {
                        D.__zoomComplete();
                        D.__zoomComplete = null
                    }
                }
            }
        },
        __computeScrollMax: function(a) {
            var b = this;
            if (a == null) {
                a = b.__zoomLevel
            }
            b.__maxScrollLeft = Math.max((b.__contentWidth * a) - b.__clientWidth, 0);
            b.__maxScrollTop = Math.max((b.__contentHeight * a) - b.__clientHeight, 0)
        },
        __startDeceleration: function(q) {
            var a = this;
            if (a.options.paging) {
                var r = Math.max(Math.min(a.__scrollLeft, a.__maxScrollLeft), 0);
                var t = Math.max(Math.min(a.__scrollTop, a.__maxScrollTop), 0);
                var b = a.__clientWidth;
                var d = a.__clientHeight;
                a.__minDecelerationScrollLeft = Math.floor(r / b) * b;
                a.__minDecelerationScrollTop = Math.floor(t / d) * d;
                a.__maxDecelerationScrollLeft = Math.ceil(r / b) * b;
                a.__maxDecelerationScrollTop = Math.ceil(t / d) * d
            } else {
                a.__minDecelerationScrollLeft = 0;
                a.__minDecelerationScrollTop = 0;
                a.__maxDecelerationScrollLeft = a.__maxScrollLeft;
                a.__maxDecelerationScrollTop = a.__maxScrollTop
            }
            var s = function(k, m, l) {
                a.__stepThroughDeceleration(l)
            };
            var e = a.options.snapping ? 4 : 0.001;
            var c = function() {
                var k = Math.abs(a.__decelerationVelocityX) >= e || Math.abs(a.__decelerationVelocityY) >= e;
                if (!k) {
                    a.__didDecelerationComplete = true
                }
                return k
            };
            var p = function(l, k, m) {
                a.__isDecelerating = false;
                if (a.__didDecelerationComplete) {
                    a.options.scrollingComplete()
                }
                a.scrollTo(a.__scrollLeft, a.__scrollTop, a.options.snapping)
            };
            a.__isDecelerating = core.effect.Animate.start(s, c, p)
        },
        __stepThroughDeceleration: function(v) {
            var b = this;
            var s = b.__scrollLeft + b.__decelerationVelocityX;
            var u = b.__scrollTop + b.__decelerationVelocityY;
            if (!b.options.bouncing) {
                var t = Math.max(Math.min(b.__maxDecelerationScrollLeft, s), b.__minDecelerationScrollLeft);
                if (t !== s) {
                    s = t;
                    b.__decelerationVelocityX = 0
                }
                var e = Math.max(Math.min(b.__maxDecelerationScrollTop, u), b.__minDecelerationScrollTop);
                if (e !== u) {
                    u = e;
                    b.__decelerationVelocityY = 0
                }
            }
            if (v) {
                b.__publish(s, u, b.__zoomLevel)
            } else {
                b.__scrollLeft = s;
                b.__scrollTop = u
            }
            if (!b.options.paging) {
                var d = 0.95;
                b.__decelerationVelocityX *= d;
                b.__decelerationVelocityY *= d
            }
            if (b.options.bouncing) {
                var a = 0;
                var c = 0;
                var q = b.options.penetrationDeceleration;
                var r = b.options.penetrationAcceleration;
                if (s < b.__minDecelerationScrollLeft) {
                    a = b.__minDecelerationScrollLeft - s
                } else {
                    if (s > b.__maxDecelerationScrollLeft) {
                        a = b.__maxDecelerationScrollLeft - s
                    }
                }
                if (u < b.__minDecelerationScrollTop) {
                    c = b.__minDecelerationScrollTop - u
                } else {
                    if (u > b.__maxDecelerationScrollTop) {
                        c = b.__maxDecelerationScrollTop - u
                    }
                }
                if (a !== 0) {
                    if (a * b.__decelerationVelocityX <= 0) {
                        b.__decelerationVelocityX += a * q
                    } else {
                        b.__decelerationVelocityX = a * r
                    }
                }
                if (c !== 0) {
                    if (c * b.__decelerationVelocityY <= 0) {
                        b.__decelerationVelocityY += c * q
                    } else {
                        b.__decelerationVelocityY = c * r
                    }
                }
            }
        }
    };
    for (var i in f) {
        Scroller.prototype[i] = f[i]
    }
})();
var dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};
dat.utils.css = (function() {
    return {
        load: function(e, f) {
            f = f || document;
            var d = f.createElement("link");
            d.type = "text/css";
            d.rel = "stylesheet";
            d.href = e;
            f.getElementsByTagName("head")[0].appendChild(d)
        },
        inject: function(d, f) {
            f = f || document;
            var e = document.createElement("style");
            e.type = "text/css";
            e.innerHTML = d;
            f.getElementsByTagName("head")[0].appendChild(e)
        }
    }
})();
dat.utils.common = (function() {
    var d = Array.prototype.forEach;
    var c = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function(a) {
            this.each(c.call(arguments, 1), function(b) {
                for (var f in b) {
                    if (!this.isUndefined(b[f])) {
                        a[f] = b[f]
                    }
                }
            }, this);
            return a
        },
        defaults: function(a) {
            this.each(c.call(arguments, 1), function(b) {
                for (var f in b) {
                    if (this.isUndefined(a[f])) {
                        a[f] = b[f]
                    }
                }
            }, this);
            return a
        },
        compose: function() {
            var a = c.call(arguments);
            return function() {
                var f = c.call(arguments);
                for (var b = a.length - 1; b >= 0; b--) {
                    f = [a[b].apply(this, f)]
                }
                return f[0]
            }
        },
        each: function(a, b, h) {
            if (!a) {
                return
            }
            if (d && a.forEach && a.forEach === d) {
                a.forEach(b, h)
            } else {
                if (a.length === a.length + 0) {
                    for (var i = 0, j = a.length; i < j; i++) {
                        if (i in a && b.call(h, a[i], i) === this.BREAK) {
                            return
                        }
                    }
                } else {
                    for (var i in a) {
                        if (b.call(h, a[i], i) === this.BREAK) {
                            return
                        }
                    }
                }
            }
        },
        defer: function(a) {
            setTimeout(a, 0)
        },
        toArray: function(a) {
            if (a.toArray) {
                return a.toArray()
            }
            return c.call(a)
        },
        isUndefined: function(a) {
            return a === undefined
        },
        isNull: function(a) {
            return a === null
        },
        isNaN: function(a) {
            return a !== a
        },
        isArray: Array.isArray || function(a) {
            return a.constructor === Array
        },
        isObject: function(a) {
            return a === Object(a)
        },
        isNumber: function(a) {
            return a === a + 0
        },
        isString: function(a) {
            return a === a + ""
        },
        isBoolean: function(a) {
            return a === false || a === true
        },
        isFunction: function(a) {
            return Object.prototype.toString.call(a) === "[object Function]"
        }
    }
})();
dat.controllers.Controller = (function(d) {
    var c = function(b, a) {
        this.initialValue = b[a];
        this.domElement = document.createElement("div");
        this.object = b;
        this.property = a;
        this.__onChange = undefined;
        this.__onFinishChange = undefined
    };
    d.extend(c.prototype, {
        onChange: function(a) {
            this.__onChange = a;
            return this
        },
        onFinishChange: function(a) {
            this.__onFinishChange = a;
            return this
        },
        setValue: function(a) {
            this.object[this.property] = a;
            if (this.__onChange) {
                this.__onChange.call(this, a)
            }
            this.updateDisplay();
            return this
        },
        getValue: function() {
            return this.object[this.property]
        },
        updateDisplay: function() {
            return this
        },
        isModified: function() {
            return this.initialValue !== this.getValue()
        }
    });
    return c
})(dat.utils.common);
dat.dom.dom = (function(g) {
    var i = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    };
    var j = {};
    g.each(i, function(a, b) {
        g.each(a, function(c) {
            j[c] = b
        })
    });
    var h = /(\d+(\.\d+)?)px/;

    function l(a) {
        if (a === "0" || g.isUndefined(a)) {
            return 0
        }
        var b = a.match(h);
        if (!g.isNull(b)) {
            return parseFloat(b[1])
        }
        return 0
    }
    var k = {
        makeSelectable: function(a, b) {
            if (a === undefined || a.style === undefined) {
                return
            }
            a.onselectstart = b ? function() {
                return false
            } : function() {};
            a.style.MozUserSelect = b ? "auto" : "none";
            a.style.KhtmlUserSelect = b ? "auto" : "none";
            a.unselectable = b ? "on" : "off"
        },
        makeFullscreen: function(a, c, b) {
            if (g.isUndefined(c)) {
                c = true
            }
            if (g.isUndefined(b)) {
                b = true
            }
            a.style.position = "absolute";
            if (c) {
                a.style.left = 0;
                a.style.right = 0
            }
            if (b) {
                a.style.top = 0;
                a.style.bottom = 0
            }
        },
        fakeEvent: function(e, p, d, f) {
            d = d || {};
            var c = j[p];
            if (!c) {
                throw new Error("Event type " + p + " not supported.")
            }
            var b = document.createEvent(c);
            switch (c) {
                case "MouseEvents":
                    var q = d.x || d.clientX || 0;
                    var r = d.y || d.clientY || 0;
                    b.initMouseEvent(p, d.bubbles || false, d.cancelable || true, window, d.clickCount || 1, 0, 0, q, r, false, false, false, false, 0, null);
                    break;
                case "KeyboardEvents":
                    var a = b.initKeyboardEvent || b.initKeyEvent;
                    g.defaults(d, {
                        cancelable: true,
                        ctrlKey: false,
                        altKey: false,
                        shiftKey: false,
                        metaKey: false,
                        keyCode: undefined,
                        charCode: undefined
                    });
                    a(p, d.bubbles || false, d.cancelable, window, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, d.keyCode, d.charCode);
                    break;
                default:
                    b.initEvent(p, d.bubbles || false, d.cancelable || true);
                    break
            }
            g.defaults(b, f);
            e.dispatchEvent(b)
        },
        bind: function(a, b, c, d) {
            d = d || false;
            if (a.addEventListener) {
                a.addEventListener(b, c, d)
            } else {
                if (a.attachEvent) {
                    a.attachEvent("on" + b, c)
                }
            }
            return k
        },
        unbind: function(a, b, c, d) {
            d = d || false;
            if (a.removeEventListener) {
                a.removeEventListener(b, c, d)
            } else {
                if (a.detachEvent) {
                    a.detachEvent("on" + b, c)
                }
            }
            return k
        },
        addClass: function(a, b) {
            if (a.className === undefined) {
                a.className = b
            } else {
                if (a.className !== b) {
                    var c = a.className.split(/ +/);
                    if (c.indexOf(b) == -1) {
                        c.push(b);
                        a.className = c.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
                    }
                }
            }
            return k
        },
        removeClass: function(a, b) {
            if (b) {
                if (a.className === undefined) {} else {
                    if (a.className === b) {
                        a.removeAttribute("class")
                    } else {
                        var c = a.className.split(/ +/);
                        var d = c.indexOf(b);
                        if (d != -1) {
                            c.splice(d, 1);
                            a.className = c.join(" ")
                        }
                    }
                }
            } else {
                a.className = undefined
            }
            return k
        },
        hasClass: function(a, b) {
            return new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)").test(a.className) || false
        },
        getWidth: function(a) {
            var b = getComputedStyle(a);
            return l(b["border-left-width"]) + l(b["border-right-width"]) + l(b["padding-left"]) + l(b["padding-right"]) + l(b.width)
        },
        getHeight: function(a) {
            var b = getComputedStyle(a);
            return l(b["border-top-width"]) + l(b["border-bottom-width"]) + l(b["padding-top"]) + l(b["padding-bottom"]) + l(b.height)
        },
        getOffset: function(b) {
            var a = {
                left: 0,
                top: 0
            };
            if (b.offsetParent) {
                do {
                    a.left += b.offsetLeft;
                    a.top += b.offsetTop
                } while (b = b.offsetParent)
            }
            return a
        },
        isActive: function(a) {
            return a === document.activeElement && (a.type || a.href)
        }
    };
    return k
})(dat.utils.common);
dat.controllers.OptionController = (function(h, g, f) {
    var e = function(d, c, j) {
        e.superclass.call(this, d, c);
        var a = this;
        this.__select = document.createElement("select");
        if (f.isArray(j)) {
            var b = {};
            f.each(j, function(i) {
                b[i] = i
            });
            j = b
        }
        f.each(j, function(i, m) {
            var n = document.createElement("option");
            n.innerHTML = m;
            n.setAttribute("value", i);
            a.__select.appendChild(n)
        });
        this.updateDisplay();
        g.bind(this.__select, "change", function() {
            var i = this.options[this.selectedIndex].value;
            a.setValue(i)
        });
        this.domElement.appendChild(this.__select)
    };
    e.superclass = h;
    f.extend(e.prototype, h.prototype, {
        setValue: function(b) {
            var a = e.superclass.prototype.setValue.call(this, b);
            if (this.__onFinishChange) {
                this.__onFinishChange.call(this, this.getValue())
            }
            return a
        },
        updateDisplay: function() {
            this.__select.value = this.getValue();
            return e.superclass.prototype.updateDisplay.call(this)
        }
    });
    return e
})(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.NumberController = (function(g, e) {
    var h = function(c, b, a) {
        h.superclass.call(this, c, b);
        a = a || {};
        this.__min = a.min;
        this.__max = a.max;
        this.__step = a.step;
        if (e.isUndefined(this.__step)) {
            if (this.initialValue == 0) {
                this.__impliedStep = 1
            } else {
                this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10
            }
        } else {
            this.__impliedStep = this.__step
        }
        this.__precision = f(this.__impliedStep)
    };
    h.superclass = g;
    e.extend(h.prototype, g.prototype, {
        setValue: function(a) {
            if (this.__min !== undefined && a < this.__min) {
                a = this.__min
            } else {
                if (this.__max !== undefined && a > this.__max) {
                    a = this.__max
                }
            }
            if (this.__step !== undefined && a % this.__step != 0) {
                a = Math.round(a / this.__step) * this.__step
            }
            return h.superclass.prototype.setValue.call(this, a)
        },
        min: function(a) {
            this.__min = a;
            return this
        },
        max: function(a) {
            this.__max = a;
            return this
        },
        step: function(a) {
            this.__step = a;
            this.__impliedStep = a;
            this.__precision = f(a);
            return this
        }
    });

    function f(a) {
        a = a.toString();
        if (a.indexOf(".") > -1) {
            return a.length - a.indexOf(".") - 1
        } else {
            return 0
        }
    }
    return h
})(dat.controllers.Controller, dat.utils.common);
dat.controllers.NumberControllerBox = (function(i, h, j) {
    var f = function(r, a, s) {
        this.__truncationSuspended = false;
        f.superclass.call(this, r, a, s);
        var d = this;
        var p;
        this.__input = document.createElement("input");
        this.__input.setAttribute("type", "text");
        h.bind(this.__input, "change", c);
        h.bind(this.__input, "blur", t);
        h.bind(this.__input, "mousedown", b);
        h.bind(this.__input, "keydown", function(k) {
            if (k.keyCode === 13) {
                d.__truncationSuspended = true;
                this.blur();
                d.__truncationSuspended = false
            }
        });

        function c() {
            var k = parseFloat(d.__input.value);
            if (!j.isNaN(k)) {
                d.setValue(k)
            }
        }

        function t() {
            c();
            if (d.__onFinishChange) {
                d.__onFinishChange.call(d, d.getValue())
            }
        }

        function b(k) {
            h.bind(window, "mousemove", q);
            h.bind(window, "mouseup", e);
            p = k.clientY
        }

        function q(k) {
            var l = p - k.clientY;
            d.setValue(d.getValue() + l * d.__impliedStep);
            p = k.clientY
        }

        function e() {
            h.unbind(window, "mousemove", q);
            h.unbind(window, "mouseup", e)
        }
        this.updateDisplay();
        this.domElement.appendChild(this.__input)
    };
    f.superclass = i;
    j.extend(f.prototype, i.prototype, {
        updateDisplay: function() {
            this.__input.value = this.__truncationSuspended ? this.getValue() : g(this.getValue(), this.__precision);
            return f.superclass.prototype.updateDisplay.call(this)
        }
    });

    function g(b, c) {
        var a = Math.pow(10, c);
        return Math.round(b * a) / a
    }
    return f
})(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
var rawCssText = "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}",
    cssConverterElement = document.createElement("div");
cssConverterElement.appendChild(document.createTextNode(rawCssText));
dat.controllers.NumberControllerSlider = (function(m, k, i, h, j) {
    var n = function(q, a, g, c, r) {
        n.superclass.call(this, q, a, {
            min: g,
            max: c,
            step: r
        });
        var d = this;
        this.__background = document.createElement("div");
        this.__foreground = document.createElement("div");
        k.bind(this.__background, "mousedown", b);
        k.addClass(this.__background, "slider");
        k.addClass(this.__foreground, "slider-fg");

        function b(o) {
            k.bind(window, "mousemove", f);
            k.bind(window, "mouseup", e);
            f(o)
        }

        function f(p) {
            p.preventDefault();
            var o = k.getOffset(d.__background);
            var t = k.getWidth(d.__background);
            d.setValue(l(p.clientX, o.left, o.left + t, d.__min, d.__max));
            return false
        }

        function e() {
            k.unbind(window, "mousemove", f);
            k.unbind(window, "mouseup", e);
            if (d.__onFinishChange) {
                d.__onFinishChange.call(d, d.getValue())
            }
        }
        this.updateDisplay();
        this.__background.appendChild(this.__foreground);
        this.domElement.appendChild(this.__background)
    };
    n.superclass = m;
    n.useDefaultStyles = function() {
        i.inject(j)
    };
    h.extend(n.prototype, m.prototype, {
        updateDisplay: function() {
            var a = (this.getValue() - this.__min) / (this.__max - this.__min);
            this.__foreground.style.width = a * 100 + "%";
            return n.superclass.prototype.updateDisplay.call(this)
        }
    });

    function l(e, b, d, a, c) {
        return a + (c - a) * ((e - b) / (d - b))
    }
    return n
})(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, cssConverterElement.innerHTML);
dat.controllers.FunctionController = (function(e, h, f) {
    var g = function(d, c, b) {
        g.superclass.call(this, d, c);
        var a = this;
        this.__button = document.createElement("div");
        this.__button.innerHTML = b === undefined ? "Fire" : b;
        h.bind(this.__button, "click", function(j) {
            j.preventDefault();
            a.fire();
            return false
        });
        h.addClass(this.__button, "button");
        this.domElement.appendChild(this.__button)
    };
    g.superclass = e;
    f.extend(g.prototype, e.prototype, {
        fire: function() {
            if (this.__onChange) {
                this.__onChange.call(this)
            }
            if (this.__onFinishChange) {
                this.__onFinishChange.call(this, this.getValue())
            }
            this.getValue().call(this.object)
        }
    });
    return g
})(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.BooleanController = (function(h, g, f) {
    var e = function(c, b) {
        e.superclass.call(this, c, b);
        var a = this;
        this.__prev = this.getValue();
        this.__checkbox = document.createElement("input");
        this.__checkbox.setAttribute("type", "checkbox");
        g.bind(this.__checkbox, "change", d, false);
        this.domElement.appendChild(this.__checkbox);
        this.updateDisplay();

        function d() {
            a.setValue(!a.__prev)
        }
    };
    e.superclass = h;
    f.extend(e.prototype, h.prototype, {
        setValue: function(b) {
            var a = e.superclass.prototype.setValue.call(this, b);
            if (this.__onFinishChange) {
                this.__onFinishChange.call(this, this.getValue())
            }
            this.__prev = this.getValue();
            return a
        },
        updateDisplay: function() {
            if (this.getValue() === true) {
                this.__checkbox.setAttribute("checked", "checked");
                this.__checkbox.checked = true
            } else {
                this.__checkbox.checked = false
            }
            return e.superclass.prototype.updateDisplay.call(this)
        }
    });
    return e
})(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.color.toString = (function(b) {
    return function(a) {
        if (a.a == 1 || b.isUndefined(a.a)) {
            var d = a.hex.toString(16);
            while (d.length < 6) {
                d = "0" + d
            }
            return "#" + d
        } else {
            return "rgba(" + Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b) + "," + a.a + ")"
        }
    }
})(dat.utils.common);
dat.color.interpret = (function(k, l) {
    var h, i;
    var g = function() {
        i = false;
        var a = arguments.length > 1 ? l.toArray(arguments) : arguments[0];
        l.each(j, function(b) {
            if (b.litmus(a)) {
                l.each(b.conversions, function(c, d) {
                    h = c.read(a);
                    if (i === false && h !== false) {
                        i = h;
                        h.conversionName = d;
                        h.conversion = c;
                        return l.BREAK
                    }
                });
                return l.BREAK
            }
        });
        return i
    };
    var j = [{
        litmus: l.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(b) {
                    var a = b.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    if (a === null) {
                        return false
                    }
                    return {
                        space: "HEX",
                        hex: parseInt("0x" + a[1].toString() + a[1].toString() + a[2].toString() + a[2].toString() + a[3].toString() + a[3].toString())
                    }
                },
                write: k
            },
            SIX_CHAR_HEX: {
                read: function(b) {
                    var a = b.match(/^#([A-F0-9]{6})$/i);
                    if (a === null) {
                        return false
                    }
                    return {
                        space: "HEX",
                        hex: parseInt("0x" + a[1].toString())
                    }
                },
                write: k
            },
            CSS_RGB: {
                read: function(b) {
                    var a = b.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    if (a === null) {
                        return false
                    }
                    return {
                        space: "RGB",
                        r: parseFloat(a[1]),
                        g: parseFloat(a[2]),
                        b: parseFloat(a[3])
                    }
                },
                write: k
            },
            CSS_RGBA: {
                read: function(b) {
                    var a = b.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                    if (a === null) {
                        return false
                    }
                    return {
                        space: "RGB",
                        r: parseFloat(a[1]),
                        g: parseFloat(a[2]),
                        b: parseFloat(a[3]),
                        a: parseFloat(a[4])
                    }
                },
                write: k
            }
        }
    }, {
        litmus: l.isNumber,
        conversions: {
            HEX: {
                read: function(a) {
                    return {
                        space: "HEX",
                        hex: a,
                        conversionName: "HEX"
                    }
                },
                write: function(a) {
                    return a.hex
                }
            }
        }
    }, {
        litmus: l.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(a) {
                    if (a.length != 3) {
                        return false
                    }
                    return {
                        space: "RGB",
                        r: a[0],
                        g: a[1],
                        b: a[2]
                    }
                },
                write: function(a) {
                    return [a.r, a.g, a.b]
                }
            },
            RGBA_ARRAY: {
                read: function(a) {
                    if (a.length != 4) {
                        return false
                    }
                    return {
                        space: "RGB",
                        r: a[0],
                        g: a[1],
                        b: a[2],
                        a: a[3]
                    }
                },
                write: function(a) {
                    return [a.r, a.g, a.b, a.a]
                }
            }
        }
    }, {
        litmus: l.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(a) {
                    if (l.isNumber(a.r) && l.isNumber(a.g) && l.isNumber(a.b) && l.isNumber(a.a)) {
                        return {
                            space: "RGB",
                            r: a.r,
                            g: a.g,
                            b: a.b,
                            a: a.a
                        }
                    }
                    return false
                },
                write: function(a) {
                    return {
                        r: a.r,
                        g: a.g,
                        b: a.b,
                        a: a.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(a) {
                    if (l.isNumber(a.r) && l.isNumber(a.g) && l.isNumber(a.b)) {
                        return {
                            space: "RGB",
                            r: a.r,
                            g: a.g,
                            b: a.b
                        }
                    }
                    return false
                },
                write: function(a) {
                    return {
                        r: a.r,
                        g: a.g,
                        b: a.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(a) {
                    if (l.isNumber(a.h) && l.isNumber(a.s) && l.isNumber(a.v) && l.isNumber(a.a)) {
                        return {
                            space: "HSV",
                            h: a.h,
                            s: a.s,
                            v: a.v,
                            a: a.a
                        }
                    }
                    return false
                },
                write: function(a) {
                    return {
                        h: a.h,
                        s: a.s,
                        v: a.v,
                        a: a.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(a) {
                    if (l.isNumber(a.h) && l.isNumber(a.s) && l.isNumber(a.v)) {
                        return {
                            space: "HSV",
                            h: a.h,
                            s: a.s,
                            v: a.v
                        }
                    }
                    return false
                },
                write: function(a) {
                    return {
                        h: a.h,
                        s: a.s,
                        v: a.v
                    }
                }
            }
        }
    }];
    return g
})(dat.color.toString, dat.utils.common);
rawCssText = ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 10; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n";
cssConverterElement = document.createElement("div");
cssConverterElement.appendChild(document.createTextNode(rawCssText));
dat.GUI = dat.gui.GUI = (function(V, T, ar, at, av, ab, al, ai, O, Z, ag, ao, aq, ay, ah) {
    V.inject(ar);
    var Y = "dg";
    var aa = 72;
    var ap = 20;
    var az = "Default";
    var aA = (function() {
        try {
            return "localStorage" in window && window.localStorage !== null
        } catch (a) {
            return false
        }
    })();
    var ad;
    var N = true;
    var ak;
    var S = false;
    var W = [];
    var au = function(f) {
        var e = this;
        this.domElement = document.createElement("div");
        this.domElement.id = "dat.gui";
        this.__ul = document.createElement("ul");
        this.domElement.appendChild(this.__ul);
        ay.addClass(this.domElement, Y);
        this.__folders = {};
        this.__controllers = [];
        this.__rememberedObjects = [];
        this.__rememberedObjectIndecesToControllers = [];
        this.__listening = [];
        f = f || {};
        f = ah.defaults(f, {
            autoPlace: true,
            width: au.DEFAULT_WIDTH
        });
        f = ah.defaults(f, {
            resizable: f.autoPlace,
            hideable: f.autoPlace
        });
        if (!ah.isUndefined(f.load)) {
            if (f.preset) {
                f.load.preset = f.preset
            }
        } else {
            f.load = {
                preset: az
            }
        }
        if (ah.isUndefined(f.parent) && f.hideable) {
            W.push(this)
        }
        f.resizable = ah.isUndefined(f.parent) && f.resizable;
        if (f.autoPlace && ah.isUndefined(f.scrollable)) {
            f.scrollable = true
        }
        var c = aA && localStorage.getItem(aj(this, "isLocal")) === "true";
        var g;
        Object.defineProperties(this, {
            parent: {
                get: function() {
                    return f.parent
                }
            },
            scrollable: {
                get: function() {
                    return f.scrollable
                }
            },
            autoPlace: {
                get: function() {
                    return f.autoPlace
                }
            },
            preset: {
                get: function() {
                    if (e.parent) {
                        return e.getRoot().preset
                    } else {
                        return f.load.preset
                    }
                },
                set: function(k) {
                    if (e.parent) {
                        e.getRoot().preset = k
                    } else {
                        f.load.preset = k
                    }
                    af(this);
                    e.revert()
                }
            },
            width: {
                get: function() {
                    return f.width
                },
                set: function(k) {
                    f.width = k;
                    R(e, k)
                }
            },
            name: {
                get: function() {
                    return f.name
                },
                set: function(k) {
                    f.name = k;
                    if (i) {
                        i.innerHTML = f.name
                    }
                }
            },
            closed: {
                get: function() {
                    return f.closed
                },
                set: function(k) {
                    f.closed = k;
                    if (f.closed) {
                        ay.addClass(e.__ul, au.CLASS_CLOSED)
                    } else {
                        ay.removeClass(e.__ul, au.CLASS_CLOSED)
                    }
                    this.onResize();
                    if (e.__closeButton) {
                        e.__closeButton.innerHTML = k ? au.TEXT_OPEN : au.TEXT_CLOSED
                    }
                }
            },
            load: {
                get: function() {
                    return f.load
                }
            },
            useLocalStorage: {
                get: function() {
                    return c
                },
                set: function(k) {
                    if (aA) {
                        c = k;
                        if (k) {
                            ay.bind(window, "unload", g)
                        } else {
                            ay.unbind(window, "unload", g)
                        }
                        localStorage.setItem(aj(e, "isLocal"), k)
                    }
                }
            }
        });
        if (ah.isUndefined(f.parent)) {
            f.closed = false;
            ay.addClass(this.domElement, au.CLASS_MAIN);
            ay.makeSelectable(this.domElement, false);
            if (aA) {
                if (c) {
                    e.useLocalStorage = true;
                    var j = localStorage.getItem(aj(this, "gui"));
                    if (j) {
                        f.load = JSON.parse(j)
                    }
                }
            }
            this.__closeButton = document.createElement("div");
            this.__closeButton.innerHTML = au.TEXT_CLOSED;
            ay.addClass(this.__closeButton, au.CLASS_CLOSE_BUTTON);
            this.domElement.appendChild(this.__closeButton);
            ay.bind(this.__closeButton, "click", function() {
                e.closed = !e.closed
            })
        } else {
            if (f.closed === undefined) {
                f.closed = true
            }
            var i = document.createTextNode(f.name);
            ay.addClass(i, "controller-name");
            var b = X(e, i);
            var a = function(k) {
                k.preventDefault();
                e.closed = !e.closed;
                return false
            };
            ay.addClass(this.__ul, au.CLASS_CLOSED);
            ay.addClass(b, "title");
            ay.bind(b, "click", a);
            if (!f.closed) {
                this.closed = false
            }
        }
        if (f.autoPlace) {
            if (ah.isUndefined(f.parent)) {
                if (N) {
                    ak = document.createElement("div");
                    ay.addClass(ak, Y);
                    ay.addClass(ak, au.CLASS_AUTO_PLACE_CONTAINER);
                    document.body.appendChild(ak);
                    N = false
                }
                ak.appendChild(this.domElement);
                ay.addClass(this.domElement, au.CLASS_AUTO_PLACE)
            }
            if (!this.parent) {
                R(e, f.width)
            }
        }
        ay.bind(window, "resize", function() {
            e.onResize()
        });
        ay.bind(this.__ul, "webkitTransitionEnd", function() {
            e.onResize()
        });
        ay.bind(this.__ul, "transitionend", function() {
            e.onResize()
        });
        ay.bind(this.__ul, "oTransitionEnd", function() {
            e.onResize()
        });
        this.onResize();
        if (f.resizable) {
            P(this)
        }
        g = function() {
            if (aA && localStorage.getItem(aj(e, "isLocal")) === "true") {
                localStorage.setItem(aj(e, "gui"), JSON.stringify(e.getSaveObject()))
            }
        };
        this.saveToLocalStorageIfPossible = g;
        var d = e.getRoot();

        function h() {
            var k = e.getRoot();
            k.width += 1;
            ah.defer(function() {
                k.width -= 1
            })
        }
        if (!f.parent) {
            h()
        }
    };
    au.toggleHide = function() {
        S = !S;
        ah.each(W, function(a) {
            a.domElement.style.zIndex = S ? -999 : 999;
            a.domElement.style.opacity = S ? 0 : 1
        })
    };
    au.CLASS_AUTO_PLACE = "a";
    au.CLASS_AUTO_PLACE_CONTAINER = "ac";
    au.CLASS_MAIN = "main";
    au.CLASS_CONTROLLER_ROW = "cr";
    au.CLASS_TOO_TALL = "taller-than-window";
    au.CLASS_CLOSED = "closed";
    au.CLASS_CLOSE_BUTTON = "close-button";
    au.CLASS_DRAG = "drag";
    au.DEFAULT_WIDTH = 245;
    au.TEXT_CLOSED = "Close Controls";
    au.TEXT_OPEN = "Open Controls";
    ay.bind(window, "keydown", function(a) {
        if (document.activeElement.type !== "text" && (a.which === aa || a.keyCode == aa)) {
            au.toggleHide()
        }
    }, false);
    ah.extend(au.prototype, {
        add: function(b, a) {
            return ax(this, b, a, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function(b, a) {
            return ax(this, b, a, {
                color: true
            })
        },
        remove: function(b) {
            this.__ul.removeChild(b.__li);
            this.__controllers.slice(this.__controllers.indexOf(b), 1);
            var a = this;
            ah.defer(function() {
                a.onResize()
            })
        },
        destroy: function() {
            if (this.autoPlace) {
                ak.removeChild(this.domElement)
            }
        },
        addFolder: function(b) {
            if (this.__folders[b] !== undefined) {
                throw new Error('You already have a folder in this GUI by the name "' + b + '"')
            }
            var a = {
                name: b,
                parent: this
            };
            a.autoPlace = this.autoPlace;
            if (this.load && this.load.folders && this.load.folders[b]) {
                a.closed = this.load.folders[b].closed;
                a.load = this.load.folders[b]
            }
            var c = new au(a);
            this.__folders[b] = c;
            var d = X(this, c.domElement);
            ay.addClass(d, "folder");
            return c
        },
        open: function() {
            this.closed = false
        },
        close: function() {
            this.closed = true
        },
        onResize: function() {
            var c = this.getRoot();
            if (c.scrollable) {
                var a = ay.getOffset(c.__ul).top;
                var b = 0;
                ah.each(c.__ul.childNodes, function(d) {
                    if (!(c.autoPlace && d === c.__save_row)) {
                        b += ay.getHeight(d)
                    }
                });
                if (window.innerHeight - a - ap < b) {
                    ay.addClass(c.domElement, au.CLASS_TOO_TALL);
                    c.__ul.style.height = window.innerHeight - a - ap + "px"
                } else {
                    ay.removeClass(c.domElement, au.CLASS_TOO_TALL);
                    c.__ul.style.height = "auto"
                }
            }
            if (c.__resize_handle) {
                ah.defer(function() {
                    c.__resize_handle.style.height = c.__ul.offsetHeight + "px"
                })
            }
            if (c.__closeButton) {
                c.__closeButton.style.width = c.width + "px"
            }
        },
        remember: function() {
            if (ah.isUndefined(ad)) {
                ad = new aq();
                ad.domElement.innerHTML = T
            }
            if (this.parent) {
                throw new Error("You can only call remember on a top level GUI.")
            }
            var a = this;
            ah.each(Array.prototype.slice.call(arguments), function(b) {
                if (a.__rememberedObjects.length == 0) {
                    ae(a)
                }
                if (a.__rememberedObjects.indexOf(b) == -1) {
                    a.__rememberedObjects.push(b)
                }
            });
            if (this.autoPlace) {
                R(this, this.width)
            }
        },
        getRoot: function() {
            var a = this;
            while (a.parent) {
                a = a.parent
            }
            return a
        },
        getSaveObject: function() {
            var a = this.load;
            a.closed = this.closed;
            if (this.__rememberedObjects.length > 0) {
                a.preset = this.preset;
                if (!a.remembered) {
                    a.remembered = {}
                }
                a.remembered[this.preset] = U(this)
            }
            a.folders = {};
            ah.each(this.__folders, function(b, c) {
                a.folders[c] = b.getSaveObject()
            });
            return a
        },
        save: function() {
            if (!this.load.remembered) {
                this.load.remembered = {}
            }
            this.load.remembered[this.preset] = U(this);
            am(this, false);
            this.saveToLocalStorageIfPossible()
        },
        saveAs: function(a) {
            if (!this.load.remembered) {
                this.load.remembered = {};
                this.load.remembered[az] = U(this, true)
            }
            this.load.remembered[a] = U(this);
            this.preset = a;
            ac(this, a, true);
            this.saveToLocalStorageIfPossible()
        },
        revert: function(a) {
            ah.each(this.__controllers, function(b) {
                if (!this.getRoot().load.remembered) {
                    b.setValue(b.initialValue)
                } else {
                    aw(a || this.getRoot(), b)
                }
            }, this);
            ah.each(this.__folders, function(b) {
                b.revert(b)
            });
            if (!a) {
                am(this.getRoot(), false)
            }
        },
        listen: function(b) {
            var a = this.__listening.length == 0;
            this.__listening.push(b);
            if (a) {
                Q(this.__listening)
            }
        }
    });

    function ax(g, e, b, f) {
        if (e[b] === undefined) {
            throw new Error("Object " + e + ' has no property "' + b + '"')
        }
        var d;
        if (f.color) {
            d = new ag(e, b)
        } else {
            var a = [e, b].concat(f.factoryArgs);
            d = at.apply(g, a)
        }
        if (f.before instanceof av) {
            f.before = f.before.__li
        }
        aw(g, d);
        ay.addClass(d.domElement, "c");
        var i = document.createElement("span");
        ay.addClass(i, "property-name");
        i.innerHTML = d.property;
        var h = document.createElement("div");
        h.appendChild(i);
        h.appendChild(d.domElement);
        var c = X(g, h, f.before);
        ay.addClass(c, au.CLASS_CONTROLLER_ROW);
        ay.addClass(c, typeof d.getValue());
        an(g, c, d);
        g.__controllers.push(d);
        return d
    }

    function X(c, a, b) {
        var d = document.createElement("li");
        if (a) {
            d.appendChild(a)
        }
        if (b) {
            c.__ul.insertBefore(d, params.before)
        } else {
            c.__ul.appendChild(d)
        }
        c.onResize();
        return d
    }

    function an(c, e, d) {
        d.__li = e;
        d.__gui = c;
        ah.extend(d, {
            options: function(f) {
                if (arguments.length > 1) {
                    d.remove();
                    return ax(c, d.object, d.property, {
                        before: d.__li.nextElementSibling,
                        factoryArgs: [ah.toArray(arguments)]
                    })
                }
                if (ah.isArray(f) || ah.isObject(f)) {
                    d.remove();
                    return ax(c, d.object, d.property, {
                        before: d.__li.nextElementSibling,
                        factoryArgs: [f]
                    })
                }
            },
            name: function(f) {
                d.__li.firstElementChild.firstElementChild.innerHTML = f;
                return d
            },
            listen: function() {
                d.__gui.listen(d);
                return d
            },
            remove: function() {
                d.__gui.remove(d);
                return d
            }
        });
        if (d instanceof O) {
            var a = new ai(d.object, d.property, {
                min: d.__min,
                max: d.__max,
                step: d.__step
            });
            ah.each(["updateDisplay", "onChange", "onFinishChange"], function(f) {
                var h = d[f];
                var g = a[f];
                d[f] = a[f] = function() {
                    var i = Array.prototype.slice.call(arguments);
                    h.apply(d, i);
                    return g.apply(a, i)
                }
            });
            ay.addClass(e, "has-slider");
            d.domElement.insertBefore(a.domElement, d.domElement.firstElementChild)
        } else {
            if (d instanceof ai) {
                var b = function(f) {
                    if (ah.isNumber(d.__min) && ah.isNumber(d.__max)) {
                        d.remove();
                        return ax(c, d.object, d.property, {
                            before: d.__li.nextElementSibling,
                            factoryArgs: [d.__min, d.__max, d.__step]
                        })
                    }
                    return f
                };
                d.min = ah.compose(b, d.min);
                d.max = ah.compose(b, d.max)
            } else {
                if (d instanceof ab) {
                    ay.bind(e, "click", function() {
                        ay.fakeEvent(d.__checkbox, "click")
                    });
                    ay.bind(d.__checkbox, "click", function(f) {
                        f.stopPropagation()
                    })
                } else {
                    if (d instanceof al) {
                        ay.bind(e, "click", function() {
                            ay.fakeEvent(d.__button, "click")
                        });
                        ay.bind(e, "mouseover", function() {
                            ay.addClass(d.__button, "hover")
                        });
                        ay.bind(e, "mouseout", function() {
                            ay.removeClass(d.__button, "hover")
                        })
                    } else {
                        if (d instanceof ag) {
                            ay.addClass(e, "color");
                            d.updateDisplay = ah.compose(function(f) {
                                e.style.borderLeftColor = d.__color.toString();
                                return f
                            }, d.updateDisplay);
                            d.updateDisplay()
                        }
                    }
                }
            }
        }
        d.setValue = ah.compose(function(f) {
            if (c.getRoot().__preset_select && d.isModified()) {
                am(c.getRoot(), true)
            }
            return f
        }, d.setValue)
    }

    function aw(f, g) {
        var h = f.getRoot();
        var a = h.__rememberedObjects.indexOf(g.object);
        if (a != -1) {
            var d = h.__rememberedObjectIndecesToControllers[a];
            if (d === undefined) {
                d = {};
                h.__rememberedObjectIndecesToControllers[a] = d
            }
            d[g.property] = g;
            if (h.load && h.load.remembered) {
                var e = h.load.remembered;
                var c;
                if (e[f.preset]) {
                    c = e[f.preset]
                } else {
                    if (e[az]) {
                        c = e[az]
                    } else {
                        return
                    }
                }
                if (c[a] && c[a][g.property] !== undefined) {
                    var b = c[a][g.property];
                    g.initialValue = b;
                    g.setValue(b)
                }
            }
        }
    }

    function aj(b, a) {
        return document.location.href + "." + a
    }

    function ae(i) {
        var l = i.__save_row = document.createElement("li");
        ay.addClass(i.domElement, "has-save");
        i.__ul.insertBefore(l, i.__ul.firstChild);
        ay.addClass(l, "save-row");
        var j = document.createElement("span");
        j.innerHTML = "&nbsp;";
        ay.addClass(j, "button gears");
        var h = document.createElement("span");
        h.innerHTML = "Save";
        ay.addClass(h, "button");
        ay.addClass(h, "save");
        var e = document.createElement("span");
        e.innerHTML = "New";
        ay.addClass(e, "button");
        ay.addClass(e, "save-as");
        var g = document.createElement("span");
        g.innerHTML = "Revert";
        ay.addClass(g, "button");
        ay.addClass(g, "revert");
        var a = i.__preset_select = document.createElement("select");
        if (i.load && i.load.remembered) {
            ah.each(i.load.remembered, function(n, m) {
                ac(i, m, m == i.preset)
            })
        } else {
            ac(i, az, false)
        }
        ay.bind(a, "change", function() {
            for (var m = 0; m < i.__preset_select.length; m++) {
                i.__preset_select[m].innerHTML = i.__preset_select[m].value
            }
            i.preset = this.value
        });
        l.appendChild(a);
        l.appendChild(j);
        l.appendChild(h);
        l.appendChild(e);
        l.appendChild(g);
        if (aA) {
            var b = document.getElementById("dg-save-locally");
            var f = document.getElementById("dg-local-explain");
            b.style.display = "block";
            var d = document.getElementById("dg-local-storage");
            if (localStorage.getItem(aj(i, "isLocal")) === "true") {
                d.setAttribute("checked", "checked")
            }

            function k() {
                f.style.display = i.useLocalStorage ? "block" : "none"
            }
            k();
            ay.bind(d, "change", function() {
                i.useLocalStorage = !i.useLocalStorage;
                k()
            })
        }
        var c = document.getElementById("dg-new-constructor");
        ay.bind(c, "keydown", function(m) {
            if (m.metaKey && (m.which === 67 || m.keyCode == 67)) {
                ad.hide()
            }
        });
        ay.bind(j, "click", function() {
            c.innerHTML = JSON.stringify(i.getSaveObject(), undefined, 2);
            ad.show();
            c.focus();
            c.select()
        });
        ay.bind(h, "click", function() {
            i.save()
        });
        ay.bind(e, "click", function() {
            var m = prompt("Enter a new preset name.");
            if (m) {
                i.saveAs(m)
            }
        });
        ay.bind(g, "click", function() {
            i.revert()
        })
    }

    function P(c) {
        c.__resize_handle = document.createElement("div");
        ah.extend(c.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var d;
        ay.bind(c.__resize_handle, "mousedown", e);
        ay.bind(c.__closeButton, "mousedown", e);
        c.domElement.insertBefore(c.__resize_handle, c.domElement.firstElementChild);

        function e(f) {
            f.preventDefault();
            d = f.clientX;
            ay.addClass(c.__closeButton, au.CLASS_DRAG);
            ay.bind(window, "mousemove", a);
            ay.bind(window, "mouseup", b);
            return false
        }

        function a(f) {
            f.preventDefault();
            c.width += d - f.clientX;
            c.onResize();
            d = f.clientX;
            return false
        }

        function b() {
            ay.removeClass(c.__closeButton, au.CLASS_DRAG);
            ay.unbind(window, "mousemove", a);
            ay.unbind(window, "mouseup", b)
        }
    }

    function R(a, b) {
        a.domElement.style.width = b + "px";
        if (a.__save_row && a.autoPlace) {
            a.__save_row.style.width = b + "px"
        }
        if (a.__closeButton) {
            a.__closeButton.style.width = b + "px"
        }
    }

    function U(c, b) {
        var a = {};
        ah.each(c.__rememberedObjects, function(d, f) {
            var g = {};
            var e = c.__rememberedObjectIndecesToControllers[f];
            ah.each(e, function(i, h) {
                g[h] = b ? i.initialValue : i.getValue()
            });
            a[f] = g
        });
        return a
    }

    function ac(d, c, a) {
        var b = document.createElement("option");
        b.innerHTML = c;
        b.value = c;
        d.__preset_select.appendChild(b);
        if (a) {
            d.__preset_select.selectedIndex = d.__preset_select.length - 1
        }
    }

    function af(b) {
        for (var a = 0; a < b.__preset_select.length; a++) {
            if (b.__preset_select[a].value == b.preset) {
                b.__preset_select.selectedIndex = a
            }
        }
    }

    function am(c, b) {
        var a = c.__preset_select[c.__preset_select.selectedIndex];
        if (b) {
            a.innerHTML = a.value + "*"
        } else {
            a.innerHTML = a.value
        }
    }

    function Q(a) {
        if (a.length != 0) {
            ao(function() {
                Q(a)
            })
        }
        ah.each(a, function(b) {
            b.updateDisplay()
        })
    }
    return au
})(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', cssConverterElement.innerHTML, dat.controllers.factory = (function(l, n, m, i, j, k, h) {
    return function(b, a) {
        var c = b[a];
        if (h.isArray(arguments[2]) || h.isObject(arguments[2])) {
            return new l(b, a, arguments[2])
        }
        if (h.isNumber(c)) {
            if (h.isNumber(arguments[2]) && h.isNumber(arguments[3])) {
                return new m(b, a, arguments[2], arguments[3])
            } else {
                return new n(b, a, {
                    min: arguments[2],
                    max: arguments[3]
                })
            }
        }
        if (h.isString(c)) {
            return new i(b, a)
        }
        if (h.isFunction(c)) {
            return new j(b, a, "")
        }
        if (h.isBoolean(c)) {
            return new k(b, a)
        }
    }
})(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = (function(h, g, e) {
    var f = function(d, b) {
        f.superclass.call(this, d, b);
        var a = this;
        this.__input = document.createElement("input");
        this.__input.setAttribute("type", "text");
        g.bind(this.__input, "keyup", j);
        g.bind(this.__input, "change", j);
        g.bind(this.__input, "blur", c);
        g.bind(this.__input, "keydown", function(i) {
            if (i.keyCode === 13) {
                this.blur()
            }
        });

        function j() {
            a.setValue(a.__input.value)
        }

        function c() {
            if (a.__onFinishChange) {
                a.__onFinishChange.call(a, a.getValue())
            }
        }
        this.updateDisplay();
        this.domElement.appendChild(this.__input)
    };
    f.superclass = h;
    e.extend(f.prototype, h.prototype, {
        updateDisplay: function() {
            if (!g.isActive(this.__input)) {
                this.__input.value = this.getValue()
            }
            return f.superclass.prototype.updateDisplay.call(this)
        }
    });
    return f
})(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = (function(p, o, r, q, m) {
    var n = function(f, a) {
        n.superclass.call(this, f, a);
        this.__color = new r(this.getValue());
        this.__temp = new r(0);
        var c = this;
        this.domElement = document.createElement("div");
        o.makeSelectable(this.domElement, false);
        this.__selector = document.createElement("div");
        this.__selector.className = "selector";
        this.__saturation_field = document.createElement("div");
        this.__saturation_field.className = "saturation-field";
        this.__field_knob = document.createElement("div");
        this.__field_knob.className = "field-knob";
        this.__field_knob_border = "2px solid ";
        this.__hue_knob = document.createElement("div");
        this.__hue_knob.className = "hue-knob";
        this.__hue_field = document.createElement("div");
        this.__hue_field.className = "hue-field";
        this.__input = document.createElement("input");
        this.__input.type = "text";
        this.__input_textShadow = "0 1px 1px ";
        o.bind(this.__input, "keydown", function(s) {
            if (s.keyCode === 13) {
                i.call(this)
            }
        });
        o.bind(this.__input, "blur", i);
        o.bind(this.__selector, "mousedown", function(s) {
            o.addClass(this, "drag").bind(window, "mouseup", function(v) {
                o.removeClass(c.__selector, "drag")
            })
        });
        var e = document.createElement("div");
        m.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        });
        m.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < 0.5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        });
        m.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        });
        m.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        });
        m.extend(e.style, {
            width: "100%",
            height: "100%",
            background: "none"
        });
        l(e, "top", "rgba(0,0,0,0)", "#000");
        m.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        });
        j(this.__hue_field);
        m.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        });
        o.bind(this.__saturation_field, "mousedown", b);
        o.bind(this.__field_knob, "mousedown", b);
        o.bind(this.__hue_field, "mousedown", function(s) {
            d(s);
            o.bind(window, "mousemove", d);
            o.bind(window, "mouseup", h)
        });

        function b(s) {
            g(s);
            o.bind(window, "mousemove", g);
            o.bind(window, "mouseup", t)
        }

        function t() {
            o.unbind(window, "mousemove", g);
            o.unbind(window, "mouseup", t)
        }

        function i() {
            var s = q(this.value);
            if (s !== false) {
                c.__color.__state = s;
                c.setValue(c.__color.toOriginal())
            } else {
                this.value = c.__color.toString()
            }
        }

        function h() {
            o.unbind(window, "mousemove", d);
            o.unbind(window, "mouseup", h)
        }
        this.__saturation_field.appendChild(e);
        this.__selector.appendChild(this.__field_knob);
        this.__selector.appendChild(this.__saturation_field);
        this.__selector.appendChild(this.__hue_field);
        this.__hue_field.appendChild(this.__hue_knob);
        this.domElement.appendChild(this.__input);
        this.domElement.appendChild(this.__selector);
        this.updateDisplay();

        function g(B) {
            B.preventDefault();
            var w = o.getWidth(c.__saturation_field);
            var A = o.getOffset(c.__saturation_field);
            var s = (B.clientX - A.left + document.body.scrollLeft) / w;
            var v = 1 - (B.clientY - A.top + document.body.scrollTop) / w;
            if (v > 1) {
                v = 1
            } else {
                if (v < 0) {
                    v = 0
                }
            }
            if (s > 1) {
                s = 1
            } else {
                if (s < 0) {
                    s = 0
                }
            }
            c.__color.v = v;
            c.__color.s = s;
            c.setValue(c.__color.toOriginal());
            return false
        }

        function d(x) {
            x.preventDefault();
            var y = o.getHeight(c.__hue_field);
            var s = o.getOffset(c.__hue_field);
            var z = 1 - (x.clientY - s.top + document.body.scrollTop) / y;
            if (z > 1) {
                z = 1
            } else {
                if (z < 0) {
                    z = 0
                }
            }
            c.__color.h = z * 360;
            c.setValue(c.__color.toOriginal());
            return false
        }
    };
    n.superclass = p;
    m.extend(n.prototype, p.prototype, {
        updateDisplay: function() {
            var c = q(this.getValue());
            if (c !== false) {
                var d = false;
                m.each(r.COMPONENTS, function(e) {
                    if (!m.isUndefined(c[e]) && !m.isUndefined(this.__color.__state[e]) && c[e] !== this.__color.__state[e]) {
                        d = true;
                        return {}
                    }
                }, this);
                if (d) {
                    m.extend(this.__color.__state, c)
                }
            }
            m.extend(this.__temp.__state, this.__color.__state);
            this.__temp.a = 1;
            var a = (this.__color.v < 0.5 || this.__color.s > 0.5) ? 255 : 0;
            var b = 255 - a;
            m.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
            });
            this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px";
            this.__temp.s = 1;
            this.__temp.v = 1;
            l(this.__saturation_field, "left", "#fff", this.__temp.toString());
            m.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + a + "," + a + "," + a + ")",
                textShadow: this.__input_textShadow + "rgba(" + b + "," + b + "," + b + ",.7)"
            })
        }
    });
    var k = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

    function l(a, c, b, d) {
        a.style.background = "";
        m.each(k, function(e) {
            a.style.cssText += "background: " + e + "linear-gradient(" + c + ", " + b + " 0%, " + d + " 100%); "
        })
    }

    function j(a) {
        a.style.background = "";
        a.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
        a.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        a.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        a.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        a.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    return n
})(dat.controllers.Controller, dat.dom.dom, dat.color.Color = (function(q, k, p, l) {
    var r = function() {
        this.__state = q.apply(this, arguments);
        if (this.__state === false) {
            throw "Failed to interpret color arguments"
        }
        this.__state.a = this.__state.a || 1
    };
    r.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
    l.extend(r.prototype, {
        toString: function() {
            return p(this)
        },
        toOriginal: function() {
            return this.__state.conversion.write(this)
        }
    });
    m(r.prototype, "r", 2);
    m(r.prototype, "g", 1);
    m(r.prototype, "b", 0);
    j(r.prototype, "h");
    j(r.prototype, "s");
    j(r.prototype, "v");
    Object.defineProperty(r.prototype, "a", {
        get: function() {
            return this.__state.a
        },
        set: function(a) {
            this.__state.a = a
        }
    });
    Object.defineProperty(r.prototype, "hex", {
        get: function() {
            if (!this.__state.space !== "HEX") {
                this.__state.hex = k.rgb_to_hex(this.r, this.g, this.b)
            }
            return this.__state.hex
        },
        set: function(a) {
            this.__state.space = "HEX";
            this.__state.hex = a
        }
    });

    function m(a, b, c) {
        Object.defineProperty(a, b, {
            get: function() {
                if (this.__state.space === "RGB") {
                    return this.__state[b]
                }
                n(this, b, c);
                return this.__state[b]
            },
            set: function(d) {
                if (this.__state.space !== "RGB") {
                    n(this, b, c);
                    this.__state.space = "RGB"
                }
                this.__state[b] = d
            }
        })
    }

    function j(a, b) {
        Object.defineProperty(a, b, {
            get: function() {
                if (this.__state.space === "HSV") {
                    return this.__state[b]
                }
                o(this);
                return this.__state[b]
            },
            set: function(c) {
                if (this.__state.space !== "HSV") {
                    o(this);
                    this.__state.space = "HSV"
                }
                this.__state[b] = c
            }
        })
    }

    function n(c, a, b) {
        if (c.__state.space === "HEX") {
            c.__state[a] = k.component_from_hex(c.__state.hex, b)
        } else {
            if (c.__state.space === "HSV") {
                l.extend(c.__state, k.hsv_to_rgb(c.__state.h, c.__state.s, c.__state.v))
            } else {
                throw "Corrupted color state"
            }
        }
    }

    function o(a) {
        var b = k.rgb_to_hsv(a.r, a.g, a.b);
        l.extend(a.__state, {
            s: b.s,
            v: b.v
        });
        if (!l.isNaN(b.h)) {
            a.__state.h = b.h
        } else {
            if (l.isUndefined(a.__state.h)) {
                a.__state.h = 0
            }
        }
    }
    return r
})(dat.color.interpret, dat.color.math = (function() {
    var b;
    return {
        hsv_to_rgb: function(o, a, f) {
            var p = Math.floor(o / 60) % 6;
            var n = o / 60 - Math.floor(o / 60);
            var q = f * (1 - a);
            var r = f * (1 - (n * a));
            var c = f * (1 - ((1 - n) * a));
            var h = [
                [f, c, q],
                [r, f, q],
                [q, f, c],
                [q, r, f],
                [c, q, f],
                [f, q, r]
            ][p];
            return {
                r: h[0] * 255,
                g: h[1] * 255,
                b: h[2] * 255
            }
        },
        rgb_to_hsv: function(g, h, p) {
            var o = Math.min(g, h, p),
                q = Math.max(g, h, p),
                a = q - o,
                m, n;
            if (q != 0) {
                n = a / q
            } else {
                return {
                    h: NaN,
                    s: 0,
                    v: 0
                }
            }
            if (g == q) {
                m = (h - p) / a
            } else {
                if (h == q) {
                    m = 2 + (p - g) / a
                } else {
                    m = 4 + (g - h) / a
                }
            }
            m /= 6;
            if (m < 0) {
                m += 1
            }
            return {
                h: m * 360,
                s: n,
                v: q / 255
            }
        },
        rgb_to_hex: function(a, g, i) {
            var h = this.hex_with_component(0, 2, a);
            h = this.hex_with_component(h, 1, g);
            h = this.hex_with_component(h, 0, i);
            return h
        },
        component_from_hex: function(d, a) {
            return (d >> (a * 8)) & 255
        },
        hex_with_component: function(f, a, e) {
            return e << (b = a * 8) | (f & ~(255 << b))
        }
    }
})(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(c, d) {
        window.setTimeout(c, 1000 / 60)
    }
})(), dat.dom.CenteredDiv = (function(g, h) {
    var e = function() {
        this.backgroundElement = document.createElement("div");
        h.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear"
        });
        g.makeFullscreen(this.backgroundElement);
        this.backgroundElement.style.position = "fixed";
        this.domElement = document.createElement("div");
        h.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
        });
        document.body.appendChild(this.backgroundElement);
        document.body.appendChild(this.domElement);
        var a = this;
        g.bind(this.backgroundElement, "click", function() {
            a.hide()
        })
    };
    e.prototype.show = function() {
        var a = this;
        this.backgroundElement.style.display = "block";
        this.domElement.style.display = "block";
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = "scale(1.1)";
        this.layout();
        h.defer(function() {
            a.backgroundElement.style.opacity = 1;
            a.domElement.style.opacity = 1;
            a.domElement.style.webkitTransform = "scale(1)"
        })
    };
    e.prototype.hide = function() {
        var a = this;
        var b = function() {
            a.domElement.style.display = "none";
            a.backgroundElement.style.display = "none";
            g.unbind(a.domElement, "webkitTransitionEnd", b);
            g.unbind(a.domElement, "transitionend", b);
            g.unbind(a.domElement, "oTransitionEnd", b)
        };
        g.bind(this.domElement, "webkitTransitionEnd", b);
        g.bind(this.domElement, "transitionend", b);
        g.bind(this.domElement, "oTransitionEnd", b);
        this.backgroundElement.style.opacity = 0;
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = "scale(1.1)"
    };
    e.prototype.layout = function() {
        this.domElement.style.left = window.innerWidth / 2 - g.getWidth(this.domElement) / 2 + "px";
        this.domElement.style.top = window.innerHeight / 2 - g.getHeight(this.domElement) / 2 + "px"
    };

    function f(a) {}
    return e
})(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
Sys.ns("Layering");
Layering.Game = {
    Background: {
        image: 0
    },
    Logo: {
        image: 5
    },
    ResourceLoader: {
        fade: 50,
        spinner: 51
    },
    Movie: {
        video: 50,
        button: 51
    }
};
Sys.ns("Layering.Game");
Layering.Game.Slots = {
    BigWin: {
        text: 20
    },
    CoinWin: {
        background: 15,
        text: 16
    },
    FreeSpinSymbolAttentionAnimation: {
        animationItems: 2
    },
    FreeSpinAdditional: {
        text: 20
    },
    FreeSpinCountDown: {
        text: 20
    },
    FreeSpinIntro: {
        skip: 121,
        background: 122,
        button: 123,
        text: 124
    },
    FreeSpinOutro: {
        background: 120,
        backgroundImage: 121,
        button: 122,
        text: 123
    },
    Keypad: {
        background_basic: 3,
        background_freespin: 35,
        bet: 4,
        balance: 4,
        win: 36,
        total_win: 36,
        betLevelSelector: 5,
        coinValueSelector: 5,
        maxBet: {
            button: 5,
            label: 6
        },
        autoPlay: {
            button: 5,
            label: 6
        },
        paytable: {
            button: 5,
            label: 6
        }
    },
    QuickStop: {
        flash: 25
    },
    Spin: {
        "default": {
            symbols: 1
        },
        symbols: 1
    },
    SpreadingWild: {
        symbols: 5
    },
    StickySymbols: {
        symbols: 5
    },
    WinningSymbols: {
        animationItems: 10
    },
    WinSituationsDisplay: {
        hoverBetlines: 21,
        betlines: 20,
        betlineNumberHighlight: 20
    }
};
Sys.ns("Core");
Core.Orientation = {
    constructor: function() {
        Core.Orientation.superclass.constructor.apply(this, arguments);
        this.previousResolution = Utils.Platform.getViewportInnerSize();
        this.setupEvents();
        this.setBodyOrientationClass()
    },
    setupEvents: function() {
        this.on({
            "notify:scaling.updated": this.onScalingUpdated
        })
    },
    isPortrait: function() {
        return this.getOrientation() === "PORTRAIT"
    },
    isLandscape: function() {
        return this.getOrientation() === "LANDSCAPE"
    },
    getOrientation: function() {
        return Utils.Platform.getOrientation()
    },
    orientationHasChanged: function() {
        var e = this.previousResolution,
            f = Utils.Platform.getViewportInnerSize(),
            g = Math.floor(e.width / e.height),
            h = Math.floor(f.width / f.height);
        return g !== h
    },
    onScalingUpdated: function() {
        this.setBodyOrientationClass()
    },
    setBodyOrientationClass: function() {
        var e = Environment.getCurrentPlatformCSS(),
            d = this.getOrientation(),
            f = d === "PORTRAIT" ? e + "_landscape" : e + "_portrait";
        Sys.utils.replaceCSSClass(document.body, f, e + "_" + d.toLowerCase(), true)
    }
};
Core.Orientation = Sys.extend(Sys.Observable, Core.Orientation, "Core.Orientation");
Sys.ns("Core");
Core.Scaling = {
    constructor: function() {
        Core.Scaling.superclass.constructor.apply(this, arguments);
        this.performiOsSpecificRoutines();
        this.scalingPrefix = Sys.utils.getPrefixedCSSProperty("transform");
        this.viewport = document.getElementById("viewport");
        this.setElementSize(this.viewport);
        this.setupEvents()
    },
    performiOsSpecificRoutines: function() {
        if (Platform.isIOSDevice) {
            if (!Utils.Platform.inIframe()) {
                Sys.utils.addCSSClass(document.body, "iOS_ui");
                Sys.utils.addCSSClass(document.body, "iOS");
                if (Platform.iPhoneX) {
                    Sys.utils.addCSSClass(document.body, "iPhoneX")
                }
            }
        }
    },
    setupEvents: function() {
        this.on({
            "notify:platform.resized": this.updateGameSize,
            "notify:loader.closed": this.scaleContent
        })
    },
    onOrientationChanged: function() {
        if (Environment.allowsCustomCanvasSize()) {
            this.updateGameSize()
        }
    },
    setElementSize: function(c) {
        var d = Environment.determineResolution().resolution;
        c.style.width = d.width + "px";
        c.style.height = d.height + "px";
        c.style[this.scalingPrefix + "Origin"] = "0 0"
    },
    scaleContent: function() {
        var d = Utils.Platform.getOrientation(),
            c = this.calculateScale();
        this.setScale(c);
        this.scaleGame(c);
        this.fireEvent("notify:viewport.scaled");
        this.fireEvent("notify:scaling.updated");
        this.fireEvent("notify:viewport." + d)
    },
    getScale: function() {
        return this.scale
    },
    setScale: function(b) {
        this.scale = b
    },
    getScreenSize: function() {
        return Utils.Platform.isFullScreenAPISupported() ? Utils.Platform.getViewportInnerSize() : Environment.getRealScreenSize()
    },
    calculateScale: function() {
        var f = Environment.determineResolution().resolution,
            j = Utils.Platform.getViewportSize(),
            h = j.height / f.height,
            g = j.width / f.width,
            i = Math.min(g, h);
        return parseFloat((i).toFixed(3))
    },
    scaleGame: function(b) {
        this.viewport.style[this.scalingPrefix] = "scale(" + b + ")";
        this.centerGame(b)
    },
    centerGame: function(h) {
        var i = Environment.determineResolution(),
            f = i.resolution,
            g = Utils.Platform.getViewportSize(),
            j;
        if (Utils.Platform.isPortrait() && Platform.isMobileDevice) {
            j = Math.round(i.portraitTopOffset * f.height * h)
        } else {
            j = Math.round((g.height - (f.height * h)) / 2)
        }
        this.viewport.style.top = j + "px";
        this.viewport.style.left = Math.round((g.width - (f.width * h)) / 2) + "px";
        window.scrollTo(0, 0)
    },
    setDocumentSize: function() {
        var c = document.body.style,
            d = document.documentElement.style;
        d.width = "100%";
        d.height = "100%";
        if (Platform.isDesktopDevice) {
            d.overflow = "hidden"
        }
        c.width = "100%";
        c.height = "100%"
    },
    updateGameSize: function() {
        this.setElementSize(this.viewport);
        this.scaleContent();
        this.fireEvent("notify:scaling.gameSizeChanged")
    },
    setGameSize: function() {
        this.setElementSize(this.viewport)
    },
    formatScaleValue: function(b) {
        return parseFloat((b).toFixed(3))
    },
    getScaledFullscreenElementOffsetTop: function(f) {
        var e = Utils.Platform.getViewportInnerSize().height,
            d = Environment.determineResolution().resolution.height;
        return Math.round((e - (d * f)) / 2)
    },
    getScaledFullscreenElementOffsetLeft: function(f) {
        var d = Utils.Platform.getViewportInnerSize().width,
            e = Environment.determineResolution().resolution.width;
        return Math.round((d - (e * f)) / 2)
    },
    getScaledOffset: function(c, d) {
        return Math.round((c - d) / 2)
    }
};
Core.Scaling = Sys.extend(Sys.Observable, Core.Scaling, "Core.Scaling");
Sys.ns("Core");
Core.DeviceDetectionCodes = {
    WHITE: 0,
    GREY_OS: 1,
    GREY_OS_VERSION: 2,
    GREY_BROWSER: 3,
    GREY_BROWSER_VERSION: 4,
    BLACK_OS: 5,
    BLACK_OS_VERSION: 6,
    BLACK_BROWSER: 7,
    BLACK_BROWSER_VERSION: 8
};
Core.DeviceDetectionService = (function() {
    var j, i, g, h, f;
    j = function(b, c, a) {
        var e = new RegExp(c),
            d = e.exec(b),
            l;
        if (!(d && d.length > 0)) {
            throw new Error("Could not find a matching version")
        }
        l = d[1];
        if (a) {
            l = l.replace(new RegExp(a, "g"), ".")
        }
        if (!Core._DeviceDetectionUtils.isVersionNumber(l)) {
            throw new Error("The match found is not a valid version")
        }
        return l
    };
    i = function(b, y, c) {
        var s = Object.keys(y),
            e = s.length,
            a, x, v, u, t, d, w;
        for (w = 0; w < e; w++) {
            a = y[s[w]];
            x = c[s[w]];
            u = false;
            v = new RegExp(x.matchPattern);
            if (x.excludePattern) {
                u = (new RegExp(x.excludePattern)).test(b)
            }
            if (v.test(b) && !u) {
                if (a.version) {
                    t = j(b, x.version.matchPattern, x.version.separator);
                    d = Core._DeviceDetectionUtils.isInRange(t, a.version.min, a.version.max)
                } else {
                    d = true
                }
                return {
                    name: s[w],
                    inRange: d
                }
            }
        }
        return null
    };
    g = function(b, a) {
        var o = a.definitions.operatingSystems,
            c = a.ruleSets.white || {},
            e = i(b, c, o),
            d, n, p = {};
        if (e) {
            p.allowed = true;
            p.preferredBrowser = o[e.name].preferredBrowser;
            if (!e.inRange) {
                p.code = Core.DeviceDetectionCodes.GREY_OS_VERSION;
                return p
            }
            n = c[e.name].browsers;
            d = i(b, n || {}, a.definitions.browsers);
            if (!n) {
                p.code = Core.DeviceDetectionCodes.WHITE
            } else {
                if (d) {
                    if (!d.inRange) {
                        p.code = Core.DeviceDetectionCodes.GREY_BROWSER_VERSION
                    } else {
                        p.code = Core.DeviceDetectionCodes.WHITE
                    }
                } else {
                    p.code = Core.DeviceDetectionCodes.GREY_BROWSER
                }
            }
        }
        return p
    };
    h = function(b, s) {
        var t = s.definitions.operatingSystems,
            d = s.ruleSets.black || {},
            c = i(b, d, t),
            p, q, r, e, a = {};
        if (c && c.inRange) {
            p = d[c.name];
            q = p.browsers;
            r = i(b, q || {}, s.definitions.browsers);
            if (r && r.inRange) {
                e = q[r.name];
                a.preferredBrowser = t[c.name].preferredBrowser;
                a.allowed = false;
                if (!e.version) {
                    a.code = Core.DeviceDetectionCodes.BLACK_BROWSER
                } else {
                    a.code = Core.DeviceDetectionCodes.BLACK_BROWSER_VERSION
                }
            } else {
                if (!p.version) {
                    a.allowed = false;
                    a.code = Core.DeviceDetectionCodes.BLACK_OS
                } else {
                    if (!q) {
                        a.allowed = false;
                        a.code = Core.DeviceDetectionCodes.BLACK_OS_VERSION
                    }
                }
            }
        }
        return a
    };
    f = function(c, a) {
        var b = Resources.readData("disableDeviceDetection"),
            d = {
                preferredBrowser: null,
                allowed: true,
                code: Core.DeviceDetectionCodes.GREY_OS
            };
        if (!b) {
            Sys.applyProperties(d, g(c, a));
            Sys.applyProperties(d, h(c, a));
            return d
        }
        return {
            preferredBrowser: null,
            allowed: true,
            code: Core.DeviceDetectionCodes.WHITE
        }
    };
    return {
        validate: function(b, a) {
            if (typeof b !== "string") {
                throw new Error("Could not validate the device since the user agent was not a string")
            }
            if (!Sys.isObj(a)) {
                throw new Error("Could not validate the device since the configuration was not an object")
            }
            return f(b, a)
        }
    }
}());
Sys.ns("Core");
Core._DeviceDetectionUtils = (function() {
    return {
        isVersionNumber: function(b) {
            return (/^\d+(\.\d+){0,2}$/).test(b)
        },
        compareVersions: function(m, n) {
            var l, a, k, b, i;
            if (!Core._DeviceDetectionUtils.isVersionNumber(m) || !Core._DeviceDetectionUtils.isVersionNumber(n)) {
                throw new Error("The versions provided are not valid versions")
            }
            b = m.split(".").map(parseFloat);
            i = n.split(".").map(parseFloat);
            while (b.length < i.length) {
                b.push(0)
            }
            while (i.length < b.length) {
                i.push(0)
            }
            for (l = 0; l < b.length; l++) {
                a = b[l];
                k = i[l];
                if (a === k) {
                    continue
                }
                return a < k ? -1 : 1
            }
            return 0
        },
        isInRange: function(f, i, g) {
            var h = true,
                j = true;
            if (i && Core._DeviceDetectionUtils.compareVersions(f, i) < 0) {
                h = false
            }
            if (g && Core._DeviceDetectionUtils.compareVersions(f, g) > 0) {
                j = false
            }
            return h && j
        }
    }
}());
Sys.ns("Sys.utils");
Sys.utils.XMLHelper = {
    getNodeValue: function(f, d) {
        var e;
        if (d.getElementsByTagName) {
            e = d.getElementsByTagName(f);
            if (e.length > 0) {
                return e[0].textContent
            }
        }
        return null
    },
    findNode: function(f, d) {
        var e;
        if (d.getElementsByTagName) {
            e = d.getElementsByTagName(f);
            if (e.length > 0) {
                return e[0]
            }
        }
        return null
    },
    findAll: function(c, d) {
        if (!Sys.isEmpty(d) && d.getElementsByTagName) {
            return d.getElementsByTagName(c)
        }
        return []
    },
    getAttributeValue: function(c, d) {
        if (d.attributes && d.hasAttribute(c)) {
            return d.attributes.getNamedItem(c).value
        }
        return null
    },
    toJSON: function(l) {
        var j = {
                tag: l.nodeName
            },
            i, g, k, h;
        if (l.hasChildNodes()) {
            j.children = [];
            for (k = 0, h = l.childNodes.length; k < h; k++) {
                i = l.childNodes.item(k);
                if (i.nodeType === 1) {
                    j.children.push(this.toJSON(i))
                } else {
                    if (i.nodeType === 3) {
                        j.text = i.nodeValue.replace(/^\s+|\s+$/g, "")
                    }
                }
            }
        }
        if (l.attributes) {
            j.attributes = {};
            for (k = 0, h = l.attributes.length; k < h; k++) {
                g = l.attributes[k];
                j.attributes[g.nodeName] = g.nodeValue
            }
        }
        j.find = this.findNodeInJSON;
        j.findAll = this.findAllNodesInJSON;
        return j
    },
    findNodeInJSON: function(b) {
        return Sys.find(this.children, function(a) {
            return a.tag === b
        }) || null
    },
    findAllNodesInJSON: function(b) {
        return this.children.filter(function(a) {
            return a.tag === b
        })
    },
    getMoneyFormatFromXML: function(k, g) {
        var l = this.findAll("moneyformat", k),
            i, h, j;
        for (j = 0, h = l.length; j < h; j++) {
            i = this.getNodeValue("iso", l[j]);
            if (i === g) {
                return this.getMoneyFormatFromNode(l[j])
            }
        }
        return null
    },
    getMoneyFormatFromNode: function(o) {
        var m = this.findNode("dividers", o),
            j = this.getAttributeValue("thousands", m),
            p = this.getAttributeValue("decimal", m),
            i = this.findNode("curchar", o),
            k = i.textContent,
            l = this.getAttributeValue("after", i) === "true",
            n = this.findNode("iso", o).textContent;
        return {
            thousandsDivider: j,
            decimalDivider: p,
            currencyChar: k,
            isCurrCharAfter: l,
            iso: n
        }
    }
};
Sys.ns("Sys.utils");
Sys.utils.FunctionQueuer = {
    constructor: function() {
        var b = this;
        Sys.utils.FunctionQueuer.superclass.constructor.apply(this, arguments);
        b.q = [];
        b.executing = false;
        b.debug = false
    },
    queue: function(g) {
        var f = g.args || [],
            h = g.waitForEvents || [],
            j = g.waitForObjects || [],
            i;
        if (!Sys.isArray(f)) {
            f = [f]
        }
        if (!Sys.isArray(h)) {
            h = [h]
        }
        i = {
            obj: g.obj,
            fun: g.fn,
            event: g.endEvent,
            args: f,
            we: h,
            wo: g.waitForObject || g.obj,
            wos: {
                totalEventsCount: 0,
                waitForObjects: j
            }
        };
        if (h.length || j.length) {
            this.createWaiters(i)
        }
        this.q.push(i);
        this.processQueue()
    },
    execute: function(f) {
        var d = this,
            e;
        d.executing = true;
        e = function() {
            if (d.debug) {}
            f.obj.removeListener(f.event, e, d);
            d.executing = false;
            d.processQueue()
        };
        f.obj.on(f.event, e, d);
        f.fun.apply(f.obj, f.args)
    },
    processQueue: function() {
        var h = this,
            g, f, e;
        if (!h.executing && h.q.length) {
            f = h.q[0].wos;
            e = f.waitForObjects.length !== 0;
            if ((h.q[0].we.length === 0 && !e) || (e && f.totalEventsCount === 0)) {
                g = h.q.shift();
                h.execute(g)
            } else {
                if (h.debug) {
                    if (Sys.isDefined(h.q[0].wos)) {}
                }
            }
        } else {
            if (h.debug) {
                if (!h.q.length) {} else {
                    if (h.executing) {}
                }
            }
        }
    },
    createWaiters: function(c) {
        var d = this;
        if (c.we.length) {
            d.registerListeners({
                queueItem: c,
                waitForEvents: c.we,
                waitForObject: c.wo
            })
        } else {
            if (c.wos.waitForObjects.length) {
                Sys.each(c.wos.waitForObjects, function(a) {
                    if (!Sys.isArray(a.events)) {
                        a.events = [a.events]
                    }
                    c.wos.totalEventsCount += a.events.length;
                    d.registerListeners({
                        queueItem: c,
                        waitForEvents: a.events,
                        waitForObject: a.obj
                    })
                })
            }
        }
    },
    registerListeners: function(e) {
        var f = this,
            d;
        Sys.each(e.waitForEvents, function(a) {
            var b = function() {
                if (f.debug) {}
                e.waitForEvents.splice(e.waitForEvents.indexOf(a), 1);
                d = e.queueItem.wos;
                if (Sys.isDefined(d.waitForObjects.length)) {
                    if (d.totalEventsCount >= 1) {
                        d.totalEventsCount -= 1
                    }
                }
                e.waitForObject.removeListener(a, b, f);
                f.processQueue()
            };
            e.waitForObject.on(a, b, f)
        })
    }
};
Sys.utils.FunctionQueuer = Sys.extend(Sys.Observable, Sys.utils.FunctionQueuer, "Sys.utils.FunctionQueuer");
Sys.ns("Loader");
Loader.ResourceHandler = {
    INTEGRATION: "standard",
    constructor: function(b) {
        b = b || {};
        Loader.ResourceHandler.superclass.constructor.call(this, b);
        this.setupData(b);
        this.setupEvents();
        if (typeof b.callback === "function") {
            this.progressCallback = b.callback
        }
        this.setLanguageOfHtmlTag(Resources.readData("queryData").lang)
    },
    setupData: function(d) {
        var c = Sys.utils.qsToObj(window.location.search);
        this.data = {};
        this.storeData("callback", d.callback);
        this.storeData("scriptFiles", []);
        this.storeData("cssFiles", []);
        this.storeData("totalSize", 0);
        this.storeData("scriptsAppended", false);
        this.storeData("resourcesLoaded", false);
        this.storeData("animationComplete", false);
        this.storeData("deviceListPath", {
            fallbackPath: c.staticsharedurl
        });
        this.storeData("detectionComplete", false);
        this.storeData("allConfirmDialogsClosed", false);
        this.storeData("loaderCompleted", false);
        this.storeData("soundDecoded", !Utils.Platform.isWebAudioAPISupported());
        Resources.storeData("queryData", c);
        Resources.storeData("extraParams", {
            wantsfreerounds: true,
            freeroundmode: false,
            wantsreels: true
        });
        Resources.storeData("language", {
            defaultLang: "en",
            lang: c.lang
        })
    },
    setupEvents: function() {
        this.on({
            "notify:loader.animationComplete": this.onLoaderAnimationComplete,
            "notify:gcmProxy.animationComplete": this.onLoaderAnimationComplete,
            "notify:loader.confirmDialogClosed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.loadDialogConfirmed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.requestedConfirmDialogsClosed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.deviceDetectionFinished": this.onDetectionComplete,
            "notify:deviceDetector.validationComplete": this.onDetectionComplete,
            "notify:deviceDetector.finished": this.onRequestedConfirmDialogsClosed
        })
    },
    progressCallback: function(b) {
        this.fireEvent("request:loader.updateProgress", b);
        this.fireEvent("request:gcmProxy.updateProgress", b)
    },
    preLoad: function() {
        var g = this,
            e = new Sys.Deferred(),
            f, h;
        this.fireEvent("request:loader.show");
        this.storeData("startTime", Date.now());
        this.isDeviceDetectionDisabled();
        f = this.determineSessionID();
        if (f) {
            h = e.when(f).then(function() {
                return g.gameServerInit()
            })
        } else {
            this.determinePluginURL();
            this.determineLobbyURL();
            h = e.when(this.gameServerInit())
        }
        h.then(function() {
            return g.loadResourcesXML()
        }).then(function() {
            g.addDynamicPriorityResources();
            return g.loadResources("priorityList")
        }).done(function() {
            g.fireEvent("notify:resourceHandler.priorityListComplete")
        })
    },
    load: function() {
        var c = this,
            d = new Sys.Deferred();
        this.addPlatformSpecificResourcesToGenericList();
        d.when(this.loadResources("genericList")).fail(function(a) {
            c.fireEvent("request:loaderErrorHandler.handleRequestError", a)
        }).done(function() {
            c.storeData("loaderCompleted", true);
            c.onLoaderComplete()
        })
    },
    isDeviceDetectionDisabled: function() {
        var b = Resources.readData("queryData");
        if (typeof b.disableDeviceDetection === "boolean") {
            Resources.storeData("disableDeviceDetection", b.disableDeviceDetection)
        }
    },
    determineSessionID: function() {
        var e = Resources.readData("queryData"),
            f = e.callbackurl,
            g = e.sessId,
            h = e.integration;
        if (Sys.isDefined(f) && Sys.isDefined(h)) {
            return this.performServletCall(f, h)
        } else {
            if (!Sys.isDefined(g)) {
                Sys.utils.goToLobby("1")
            }
        }
        this.storeSessionID(g);
        return null
    },
    determinePluginURL: function() {
        var b = Resources.readData("queryData");
        if (Sys.isDefined(b.pluginURL)) {
            Resources.storeData("pluginURL", b.pluginURL)
        }
    },
    determineLobbyURL: function(c) {
        var d = Resources.readData("queryData");
        if (Sys.isDefined(c)) {
            Resources.storeData("lobbyUrl", c)
        } else {
            if (Sys.isDefined(d.lobbyURL)) {
                Resources.storeData("lobbyUrl", d.lobbyURL)
            }
        }
    },
    performServletCall: function(h, g) {
        var e = this,
            f = new Sys.Deferred();
        if (g === this.INTEGRATION) {
            f.when(Sys.utils.httpGet({
                url: h,
                useCredentials: true
            })).fail(function() {
                Sys.utils.goToLobby("1")
            }).done(function(a) {
                e.handleServletResponse(a)
            })
        } else {
            Sys.utils.goToLobby("1")
        }
        return f
    },
    handleServletResponse: function(g) {
        var i = Sys.utils.parseQueryString(g.responseText),
            h = i.playerSessionId,
            j = i.pluginURL,
            f = i.lobbyURL;
        if (!Sys.isDefined(h)) {
            Sys.utils.goToLobby("1")
        } else {
            this.storeSessionID(decodeURIComponent(h))
        }
        if (Sys.isDefined(j)) {
            Resources.storeData("pluginURL", decodeURIComponent(j))
        } else {
            this.determinePluginURL()
        }
        this.determineLobbyURL(f)
    },
    storeSessionID: function(b) {
        this.storeData("sessionID", b);
        Resources.storeData("sessionID", b)
    },
    onDetectionComplete: function(b) {
        if (b) {
            this.storeData("detectionComplete", true);
            this.load()
        }
    },
    onRequestedConfirmDialogsClosed: function() {
        this.storeData("allConfirmDialogsClosed", true);
        if (this.readData("loaderCompleted")) {
            this.initGameIfPossible()
        }
    },
    addPlatformSpecificResourcesToGenericList: function() {
        var d = this.readData("genericList"),
            f = this.readData("dynamicallyLoadedResources"),
            e = this.readData("totalSize");
        Platform.PlatformManager.determineResourceBundle();
        Sys.iterate(Platform.resourceBundle.loaderResourceKeys, function(b, c) {
            var a = f[b][c];
            if (a) {
                d.push(a);
                e += a.size
            }
        });
        this.storeData("genericList", d);
        this.storeData("totalSize", e)
    },
    addDynamicPriorityResources: function() {
        var d = this.readData("priorityList"),
            f = this.readData("priorityDynamicallyLoadedResources"),
            e = this.readData("totalSize");
        Platform.PlatformManager.determineResourceBundle();
        Sys.iterate(Platform.resourceBundle.loaderResourceKeys, function(b, c) {
            var a = f[b] && f[b][c];
            if (a) {
                d.push(a);
                e += a.size
            }
        });
        this.storeData("priorityList", d);
        this.storeData("totalSize", e)
    },
    gameServerInit: function() {
        var c = this,
            d = new Sys.Deferred();
        return d.when(Sys.utils.httpGet({
            url: this.createInitQuery().getQuery()
        })).fail(function(a) {
            c.fireEvent("request:loaderErrorHandler.handleRequestError", a)
        }).done(function(a) {
            c.gameServerInitComplete(a)
        })
    },
    loadResourcesXML: function() {
        var c = this,
            d = new Sys.Deferred();
        return d.when(Sys.utils.httpGet({
            url: "resources.xml"
        })).fail(function(a) {
            c.fireEvent("request:loaderErrorHandler.handleRequestError", a)
        }).done(function(a) {
            c.parseResourceXml(a)
        })
    },
    loadResources: function(g) {
        var k = this,
            i = this.readData(g),
            l = new Sys.Deferred(),
            h = [],
            j = this.readData("resources") || {};
        i.forEach(function(b) {
            var c = b.type,
                d = k.getPathFromName(b),
                f = new Sys.Deferred(),
                e = c === "audio" ? "arraybuffer" : undefined,
                a;
            if (g === "genericList") {
                a = function(p, o) {
                    k.onProgressCallback(p, o)
                }
            }
            if (c === "css") {
                k.cssComplete("", b.name, b.url)
            }
            f.when(Sys.utils.httpGet({
                url: d,
                name: b.name,
                onProgressCallback: a,
                responseType: e
            })).fallback(function(n) {
                return k.onLoadResourceError(n, b)
            }).done(function(o) {
                var p = k[c + "Complete"];
                if (Sys.isDefined(p)) {
                    if (c !== "css") {
                        p.call(k, o, b.name, b.url)
                    }
                } else {
                    Resources.storeData(b.name + "Response", o)
                }
            });
            j[b.name] = 0;
            h.push(f)
        });
        this.storeData("resources", j);
        l.when(h);
        return l
    },
    onLoadResourceError: function(h, j) {
        var k = this,
            i = Resources.readData("language"),
            l = (j.name === "languageJSON" || j.name === "languageXML"),
            g;
        if (l && i.lang !== i.defaultLang) {
            g = this.getLanguagePath(i.defaultLang, j.type, j.url);
            i.lang = i.defaultLang;
            return Sys.utils.httpGet({
                url: g,
                name: j.name
            }).fail(function(a) {
                k.fireEvent("request:loaderErrorHandler.handleRequestError", a)
            }).done(function(a) {
                k[j.type + "Complete"](a, j.name, j.url)
            })
        }
        this.fireEvent("request:loaderErrorHandler.handleRequestError", h);
        return undefined
    },
    onProgressCallback: function(d, e) {
        var f = this.readData("resources");
        f[e] = d.loaded;
        this.calculatePercentage();
        this.checkLoadSpeed()
    },
    calculatePercentage: function() {
        var e = this.readData("resources"),
            f = this.readData("totalSize"),
            h = 0,
            g;
        Object.keys(e).forEach(function(a) {
            h += e[a]
        });
        g = parseInt(Math.min((h / f) * 100, 100), 10);
        this.storeData("percentageLoaded", g);
        this.progressCallback(g)
    },
    checkLoadSpeed: function() {
        var h = this.readData("startTime"),
            e = this.readData("totalSize"),
            f = this.readData("status"),
            g = (60000 / 2500000) * e;
        if (f !== "slow" && (Date.now() - h > g)) {
            this.slownessDetected()
        }
    },
    slownessDetected: function() {
        var b = {
            texts: [Services.languageManager.hasText(Language.Keys.loadingTakesLonger) ? Services.languageManager.getText(Language.Keys.loadingTakesLonger) : "Loading the game is taking longer than usual."],
            buttons: [{
                action: function() {
                    Sys.utils.goToLobby("9")
                },
                label: Services.languageManager.hasText(Language.Keys.btn_casino) ? Services.languageManager.getText(Language.Keys.btn_casino) : "Home",
                scope: this
            }, {
                action: function() {
                    Sys.utils.reload()
                },
                label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload",
                scope: this
            }],
            severity: "slow"
        };
        this.storeData("status", "slow");
        this.fireEvent("request:loader.showDialog", b)
    },
    onLoaderComplete: function() {
        this.progressCallback(100);
        this.storeData("resourcesLoaded", true);
        this.initGameIfPossible()
    },
    onLoaderAnimationComplete: function() {
        this.fireEvent("notify:resourceHandler.animationComplete");
        this.storeData("animationComplete", true);
        this.initGameIfPossible()
    },
    initGameIfPossible: function() {
        if (!this.readData("scriptsAppended") && this.readData("resourcesLoaded") && this.readData("animationComplete") && this.readData("allConfirmDialogsClosed")) {
            this.fireEvent("notify:resourceHandler.gameAssetsLoaded");
            this.appendScriptFiles()
        }
    },
    gameServerInitComplete: function(b) {
        Resources.storeData("gameServerInitResponse", Sys.utils.qsToObj(b.responseText));
        Resources.storeData("gameServerInitResponseObject", Sys.utils.parseQueryString(b.responseText, true));
        Resources.storeData("unParsedGameServerInitResponse", b.responseText);
        Resources.storeData("historyUrl", this.buildHistoryUrl())
    },
    jsonComplete: function(d, c) {
        Resources.storeData(c, JSON.parse(d.responseText))
    },
    priorityAudioJsonComplete: function(e, d) {
        var f = JSON.parse(e.responseText);
        if (Platform.resourceBundle.preloadAudio) {
            this.addAudioToGenericList(f)
        }
        Resources.storeData(d, f)
    },
    addAudioToGenericList: function(i) {
        var f = i.files.main,
            h = Sys.isDefined(i.fileSizes) && Sys.isDefined(i.fileSizes.main) ? i.fileSizes.main : {},
            j = this.readData("genericList"),
            g = this.readData("totalSize");
        if (Sys.isObj(f)) {
            Object.keys(f).forEach(function(a) {
                j.push({
                    url: f[a],
                    type: "audio",
                    name: a,
                    size: 100000,
                    loadComplete: false
                });
                g += h[a] || 100000
            })
        } else {
            j.push({
                url: f,
                type: "audio",
                name: "main",
                size: 100000,
                loadComplete: false
            });
            g += h || 100000
        }
        this.storeData("genericList", j);
        this.storeData("totalSize", g)
    },
    audioComplete: function(e, d) {
        var f = Resources.readData("preloadedAudio") || {};
        f["main/" + d] = e.response;
        Resources.storeData("preloadedAudio", f)
    },
    xmlComplete: function(e, f) {
        var d = (f === "languageJSON" || f === "languageXML");
        if (d && !e.responseXML) {
            this.fireEvent("request:loaderErrorHandler.showTechnicalError");
            throw new Error("Unable to parse language file xml. Aborting game.")
        }
        Resources.storeData(f, e.responseXML)
    },
    cssComplete: function(f, i, j) {
        var g = this.readData("cssFiles"),
            h = document.createElement("link");
        h.setAttribute("rel", "stylesheet");
        h.setAttribute("type", "text/css");
        h.setAttribute("href", j);
        g.push(h);
        this.storeData("cssFiles", g)
    },
    javascriptComplete: function(g, j, f) {
        var h = this.readData("scriptFiles"),
            i = document.createElement("script");
        i.type = "text/javascript";
        i.charset = "utf-8";
        i.src = f;
        h.push(i);
        this.storeData("scriptFiles", h)
    },
    appendScriptFiles: function() {
        var b = document.getElementsByTagName("head")[0];
        this.readData("cssFiles").forEach(function(a) {
            b.appendChild(a)
        });
        this.readData("scriptFiles").forEach(function(a) {
            b.appendChild(a)
        });
        this.storeData("scriptsAppended", true)
    },
    preloadAudioComplete: function(d, c) {
        Resources.storeData(c, JSON.parse(d.responseText));
        Resources.processAudio(c)
    },
    getLanguagePath: function(g, e, f) {
        var h = null;
        if (e === "json") {
            h = f + this.setCorrectCasing(g) + ".json"
        } else {
            if (e === "xml") {
                h = "../langlib/" + this.setCorrectCasing(g) + "/" + f
            }
        }
        return h
    },
    getPathFromName: function(h) {
        var f = h.name,
            g = h.url,
            i = g,
            j = Resources.readData("gameServerInitResponse");
        if (f === "languageJSON" || f === "languageXML") {
            i = this.getLanguagePath(Resources.readData("language").lang, h.type, h.url)
        } else {
            if (f === "moneyformat_player") {
                i = "../../../currencies/" + j.playercurrencyiso.toLowerCase() + "/" + g
            } else {
                if (f === "moneyformat_jackpot") {
                    i = "../../../currencies/" + j.jackpotcurrencyiso.toLowerCase() + "/" + g
                } else {
                    if (f === "deviceDetection" || f === "deviceDetectionJson") {
                        i = (j.staticsharedurl || this.readData("deviceListPath").fallbackPath) + "/" + g
                    }
                }
            }
        }
        return i
    },
    setCorrectCasing: function(b) {
        if (b.match(/[a-z]{2}_[a-z]{2}/i)) {
            return b.substr(0, 2).toLowerCase() + "_" + b.substr(3, 2).toUpperCase()
        }
        return b.toLowerCase()
    },
    createInitQuery: function() {
        var d = this.getSessionId(),
            e = Resources.readData("queryData"),
            f = Resources.readData("extraParams");
        console.log(e.server);
        return {
            //TODO: видимо тут как-то не так это всё преобразуется
            serverStr: '/game/'+ GameName+'/server',
            initStr: "?action=init&sessid=" + d + "&gameId=" + e.gameId,
            extraParams: Sys.utils.objectToQueryString(f),
            noCache: "&no-cache=" + Math.round(Date.now()),
            getQuery: function() {
                var a = "",
                    b;
                for (b in this) {
                    if (this.hasOwnProperty(b) && typeof this[b] === "string") {
                        a += this[b]
                    }
                }
                return a
            }
        }
    },
    getSessionId: function() {
        return Resources.readData("sessionID")
    },
    parseResourceXml: function(n) {
        var p = Sys.utils.XMLHelper.toJSON(n.responseXML),
            j = p.children[0].children,
            o = [],
            m = [],
            l = {},
            k = {},
            i = 0;
        j.forEach(function(a) {
            a.findAll("resource").forEach(function(g) {
                var f = {
                        url: "",
                        type: "",
                        size: "",
                        loadComplete: false
                    },
                    c, e, b, d;
                f.type = g.find("type").text;
                f.url = g.find("url").text;
                f.size = Sys.utils.toInt(g.find("size").text);
                f.name = g.find("name").text;
                c = g.find("priority");
                e = g.find("resourceTag");
                if (c !== null) {
                    if (e !== null) {
                        b = e.find("type").text;
                        d = e.find("key").text;
                        if (!Sys.isDefined(k[b])) {
                            k[b] = {}
                        }
                        k[b][d] = f
                    } else {
                        f.priority = c.text;
                        o.push(f)
                    }
                } else {
                    if (e !== null) {
                        b = e.find("type").text;
                        d = e.find("key").text;
                        if (!Sys.isDefined(l[b])) {
                            l[b] = {}
                        }
                        l[b][d] = f
                    } else {
                        m.push(f);
                        i += f.size
                    }
                }
            })
        });
        this.storeData("totalSize", i);
        this.storeData("priorityList", o);
        this.storeData("genericList", m);
        this.storeData("dynamicallyLoadedResources", l);
        this.storeData("priorityDynamicallyLoadedResources", k)
    },
    buildHistoryUrl: function() {
        var c = Resources.readData("queryData"),
            d = c.server;
        if (d[d.length - 1] !== "/") {
            d += "/"
        }
        d += "game/history?lang=" + c.lang + "&sessionId=" + Resources.readData("sessionID");
        return d
    },
    readData: function(b) {
        return this.data[b]
    },
    storeData: function(d, c) {
        this.data[d] = c
    },
    setLanguageOfHtmlTag: function(b) {
        document.documentElement.lang = b
    }
};
Loader.ResourceHandler = Sys.extend(Sys.Observable, Loader.ResourceHandler, "Loader.ResourceHandler");
Sys.ns("Core");
Core.LoaderController = {
    MINIMUM_LOADING_TIME: 3000,
    LOADER_PERCENTAGE_STEP: 0.2,
    constructor: function() {
        Core.LoaderController.superclass.constructor.apply(this, arguments)
    },
    init: function() {
        Core.LoaderController.superclass.init.apply(this, arguments);
        this.model.storeData("delayedMessages", []);
        this.model.storeData("visualPercentage", 0);
        this.model.storeData("progress", 0)
    },
    setupEvents: function() {
        this.on({
            "request:loader.show": this.show,
            "request:loader.hide": this.hide,
            "request:loader.showDialog": this.showDialog,
            "request:loader.hideDialog": this.hideDialog,
            "request:loader.updateProgress": this.updateProgress,
            "notify:stateHandler.leavingBeforeLoaderCloseState": this.hide
        })
    },
    updateProgress: function(b) {
        this.model.storeData("progress", Sys.clamp({
            value: parseFloat(b, 10) || 0,
            min: 0,
            max: 100
        }))
    },
    tick: function() {
        var i = this,
            f = this.model.readData("visualPercentage"),
            g = Date.now() - this.startTime,
            j = Math.min((g / (this.MINIMUM_LOADING_TIME || 1)) * 100, 100),
            h = Math.min(j, this.model.readData("progress"));
        if (f !== h) {
            this.model.storeData("visualPercentage", h);
            this.view.updateLoaderBar();
            if (h >= 100) {
                clearInterval(this.tickInterval);
                setTimeout(function() {
                    i.fireEvent("notify:loader.animationComplete")
                }, this.MINIMUM_LOADING_TIME * this.LOADER_PERCENTAGE_STEP);
                this.showDialogFromQueue()
            }
        }
    },
    show: function() {
        var b = this;
        this.startTime = Date.now();
        clearInterval(this.tickInterval);
        this.tickInterval = setInterval(function() {
            b.tick()
        }, this.MINIMUM_LOADING_TIME * this.LOADER_PERCENTAGE_STEP);
        this.view.show()
    },
    hide: function() {
        this.view.destroy();
        this.fireEvent("notify:loader.closed")
    },
    showDialog: function(b) {
        if (!Sys.isObj(b)) {
            throw new Error("Invalid dialog config received:", b)
        }
        if (b.severity === "stopped" || b.severity === "slow") {
            if (b.severity === "stopped") {
                clearInterval(this.tickInterval);
                this.model.storeData("error", true);
                this.model.storeData("visualPercentage", 100);
                this.view.updateLoaderBar()
            }
            this.view.showDialog(b)
        } else {
            this.model.storeData("delayedMessage", this.model.readData("delayedMessages").push(b))
        }
    },
    hideDialog: function() {
        this.fireEvent("notify:loader.confirmDialogClosed");
        this.view.hideDialog();
        if (this.model.readData("visualPercentage") === 100) {
            this.showDialogFromQueue()
        }
    },
    showDialogFromQueue: function() {
        var b = this.model.readData("delayedMessages");
        if (b.length) {
            this.view.showDialog(b.pop())
        }
    }
};
Core.LoaderController = Sys.extend(Core.Controller, Core.LoaderController, "Core.LoaderController");
Sys.ns("Core");
Core.LoaderView = {
    ANIMATION_DELAY: 100,
    LOGO_SVG: {
        tag: "svg",
        attributes: {
            version: "1.1",
            viewBox: "0 0 258 92",
            xmlns: "http://www.w3.org/2000/svg",
            "class": "logo-svg"
        },
        children: [{
            tag: "defs",
            attributes: {},
            children: [{
                tag: "clipPath",
                attributes: {
                    id: "netMask"
                },
                children: [{
                    tag: "rect",
                    attributes: {
                        x: "0",
                        y: "0",
                        width: "135px",
                        height: "92px"
                    },
                    children: []
                }]
            }, {
                tag: "clipPath",
                attributes: {
                    id: "entMask"
                },
                children: [{
                    tag: "rect",
                    attributes: {
                        x: "136",
                        y: "0",
                        width: "245.427px",
                        height: "92px"
                    },
                    children: []
                }]
            }]
        }, {
            tag: "g",
            attributes: {
                id: "logo"
            },
            children: [{
                tag: "path",
                attributes: {
                    id: "line",
                    "class": "logo-svg__logo-line logo-parts-fill",
                    d: "M 135,0 L 137.393,0 L 137.393,91.447 L 135,91.447 L 135,0 Z",
                    "shape-rendering": "crispEdges"
                },
                children: []
            }, {
                tag: "g",
                attributes: {
                    "clip-path": "url(#netMask)"
                },
                children: [{
                    tag: "g",
                    attributes: {
                        "class": "logo-svg__net-wrapper"
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            d: "M 31.69,51.93 L 22.25,36.651 L 10.15,17.731 L 10.032,17.542 L 0.003,17.542 L 0.003,73.621 L 11.133,73.621 L 11.133,39.151 L 19.432,52.581 L 32.78,73.621 L 42.89,73.621 L 42.89,17.541 L 31.692,17.541 L 31.692,51.93 L 31.692,51.93 M 31.692,51.93 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 49.15,73.62 L 85.91,73.62 L 85.91,63.001 L 60.35,63.001 L 60.35,50.772 L 82.199,50.772 L 82.199,40.074 L 60.35,40.074 L 60.35,28.245 L 85.91,28.245 L 85.91,17.547 L 49.15,17.547 L 49.15,73.627 L 49.15,73.627 M 49.15,73.627 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 90.419,28.319 L 103.268,28.319 L 103.268,73.619 L 114.468,73.619 L 114.468,28.319 L 127.237,28.319 L 127.237,17.54 L 90.418,17.54 L 90.418,28.319 L 90.418,28.319 M 90.418,28.319 "
                        },
                        children: []
                    }]
                }]
            }, {
                tag: "g",
                attributes: {
                    "clip-path": "url(#entMask)"
                },
                children: [{
                    tag: "g",
                    attributes: {
                        "class": "logo-svg__ent-wrapper"
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            d: "M 135,73.621 L 168.309,73.621 L 168.309,63.002 L 142.753,63.002 L 142.753,50.773 L 164.601,50.773 L 164.601,40.075 L 142.753,40.075 L 142.753,28.246 L 168.309,28.246 L 168.309,17.548 L 135,17.548 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 205.6,52.02 L 196.162,36.75 L 184.064,17.83 L 183.947,17.631 L 173.92,17.631 L 173.92,73.709 L 185.039,73.709 L 185.039,39.24 L 193.339,52.669 L 206.699,73.709 L 216.809,73.709 L 216.809,17.63 L 205.61,17.63 L 205.61,52.02 L 205.61,52.02 M 205.61,52.02 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 221.38,17.629 L 221.38,28.408 L 234.228,28.408 L 234.228,73.706 L 245.427,73.706 L 245.427,28.407 L 258.196,28.407 L 258.196,17.627 L 221.377,17.627 L 221.377,17.627 M 221.377,17.627 "
                        },
                        children: []
                    }]
                }]
            }]
        }]
    },
    SLOGAN_SVG: {
        tag: "svg",
        attributes: {
            viewBox: "0 0 195.8 22.1",
            "class": "slogan-svg"
        },
        children: [{
            tag: "path",
            attributes: {
                d: "M8.8 21.9h-8.8v-18.7h8.4c3.8 0 5.4 2.4 5.4 5.1 0 1.4-.7 3-2.3 3.8 1.8.9 2.6 2.8 2.6 4.3.1 2.9-1.8 5.5-5.3 5.5zm-1.3-15.4h-3.8v4.1h3.8c1.5 0 2.5-.8 2.5-2 0-1.4-.8-2.1-2.5-2.1zm.2 7.3h-4v4.8h4c1.7 0 2.5-.9 2.5-2.4 0-1.4-.9-2.4-2.5-2.4zM15.9 3.2h12.9v3.3h-9.2v4.3h7.9v3.3h-7.9v4.4h9.2v3.3h-12.9v-18.6zM39 6.5v15.4h-3.7v-15.4h-5v-3.3h13.6v3.4h-4.9zM53.8 6.5v15.4h-3.7v-15.4h-5v-3.3h13.6v3.4h-4.9zM60.2 3.2h12.9v3.3h-9.2v4.3h7.9v3.3h-7.9v4.4h9.2v3.3h-12.9v-18.6zM83.1 3.2c3.8 0 5.4 3.1 5.4 5.8 0 2-1.1 4.2-3.1 5.2l3.4 7.7h-4l-2.9-7h-3.4v7h-3.7v-18.7h8.3zm-4.6 8.3h3.8c1.7 0 2.6-1 2.6-2.5 0-1.4-.9-2.5-2.6-2.5h-3.8v5zM103.9 22.1c-3.5 0-7.2-2-7.2-6v-7c0-4 3.6-6.1 7.3-6.1 2.1 0 4.4.6 5.8 1.8l-1.8 2.9c-1.1-1-2.7-1.3-3.9-1.3-1.7 0-3.6.9-3.6 3.4v5.5c0 2.4 1.8 3.4 3.5 3.4.7 0 1.6-.1 2.4-.8v-3.1h-2.7v-3.2h6.4v7.9c-1.7 1.9-4.2 2.6-6.2 2.6zM122.5 18h-6.5l-1.2 3.9h-4l6.6-18.7h3.8l6.5 18.7h-4.1l-1.1-3.9zm-5.5-3.1h4.5l-.7-2.4-1.5-4.9h-.1l-1.4 4.9-.8 2.4zM143.4 11.8l-1.7 3.5-2.1 4h-2.7l-2.1-3.9-1.8-3.5h-.1v10.1h-3.7v-18.8h3.4l3.3 6.6 2.3 4.6h.2l2.3-4.7 3.2-6.5h3.4v18.7h-3.7v-10.1h-.2zM154.3 3.2v18.7h-3.7v-18.7h3.7zM161.1 10.1v11.8h-3.7v-18.7h3.4l4.3 6.4 3.6 5.4h.1v-11.8h3.7v18.7h-3.4l-4.8-7.1-3.1-4.7h-.1zM182.1 22.1c-3.5 0-7.2-2-7.2-6v-7c0-4 3.6-6.1 7.3-6.1 2.1 0 4.4.6 5.8 1.8l-1.8 2.9c-1.1-1-2.7-1.3-3.9-1.3-1.7 0-3.6.9-3.6 3.4v5.5c0 2.4 1.8 3.4 3.5 3.4.7 0 1.6-.1 2.4-.8v-3.1h-2.7v-3.2h6.4v7.9c-1.7 1.9-4.2 2.6-6.2 2.6zM190.2.6v3.5h-.6v-3.5h-1.2v-.6h3.1v.6h-1.3zm3.7 2.2l.5-1.1.9-1.7h.5v4.1h-.6v-2.8l-.4.8-.7 1.4h-.4l-.7-1.3-.5-.9v2.8h-.6v-4.1h.6l.9 1.7.5 1.1z"
            },
            children: []
        }]
    },
    constructor: function() {
        Core.LoaderView.superclass.constructor.apply(this, arguments);
        this.timeout = null;
        this.create();
        this.show()
    },
    create: function() {
        this.loaderEl = document.createElement("div");
        this.loaderEl.classList.add("loader");
        document.body.appendChild(this.loaderEl);
        this.loaderInner = document.createElement("div");
        this.loaderInner.classList.add("loader__inner");
        this.loaderEl.appendChild(this.loaderInner);
        this.loaderBar = document.createElement("div");
        this.loaderBar.classList.add("loader-bar");
        this.loaderInner.appendChild(this.loaderBar);
        this.loaderBarProgress = document.createElement("div");
        this.loaderBarProgress.classList.add("loader-bar__progress");
        this.loaderBar.appendChild(this.loaderBarProgress);
        this.logoContainer = document.createElement("div");
        this.logoContainer.classList.add("logo-container");
        this.logoWrapper = this.createSVG(this.LOGO_SVG, "logo-wrapper");
        this.sloganWrapper = this.createSVG(this.SLOGAN_SVG, "slogan-wrapper");
        this.logoContainer.appendChild(this.logoWrapper);
        this.logoContainer.appendChild(this.sloganWrapper);
        this.loaderInner.appendChild(this.logoContainer);
        this.loaderDialog = this.createDialog();
        this.loaderInner.appendChild(this.loaderDialog);
        this.brandingWrapper = this.createBrandingWrapper();
        this.loaderInner.appendChild(this.brandingWrapper)
    },
    destroy: function() {
        clearTimeout(this.timeout);
        document.body.removeChild(this.loaderEl)
    },
    show: function() {
        var b = this;
        this.timeout = setTimeout(function() {
            b.logoWrapper.classList.add("logo-wrapper--animate");
            b.sloganWrapper.classList.add("slogan-wrapper--animate");
            b.brandingWrapper.classList.add("branding-wrapper--animate")
        }, this.ANIMATION_DELAY)
    },
    updateLoaderBar: function() {
        if (this.model.readData("error")) {
            this.loaderBarProgress.classList.add("loader-bar__progress--error")
        }
        this.loaderBarProgress.style.width = this.model.readData("visualPercentage") + "%"
    },
    createLoaderBar: function() {
        var d = document.createElement("div"),
            c = document.createElement("div");
        d.classList.add("loader__bar");
        c.classList.add("loader__bar__progress");
        d.appendChild(c);
        this.loaderBarProgress = c;
        return d
    },
    createSVG: function(f, h) {
        var e = document.createElement("div"),
            g = this.createElement(f, "http://www.w3.org/2000/svg");
        e.classList.add(h);
        e.appendChild(g);
        return e
    },
    createElement: function(i, j) {
        var l, h, k, g;
        if (!i.tag) {
            return null
        }
        if (j) {
            l = document.createElementNS(j, i.tag)
        } else {
            l = document.createElement(i.tag)
        }
        for (h in i.attributes) {
            if (i.attributes.hasOwnProperty(h)) {
                l.setAttribute(h, i.attributes[h])
            }
        }
        for (k = 0; k < i.children.length; k++) {
            g = this.createElement(i.children[k], j);
            l.appendChild(g)
        }
        return l
    },
    createDialog: function(j) {
        var i = document.createElement("div"),
            h = document.createElement("div"),
            f = document.createElement("div"),
            g;
        i.classList.add("loader-dialog");
        if (!j) {
            return i
        }
        h.classList.add("loader-dialog__message");
        f.classList.add("loader-dialog__button-group");
        (j.texts || []).map(function(a) {
            g = document.createElement("div");
            g.innerText = a;
            h.appendChild(g)
        });
        (j.buttons || []).map(function(a) {
            var b = new Interface.utils.Button(Sys.apply(a, {
                clickCallback: a.action
            }));
            b.enable();
            f.appendChild(b.getContainer().getEl())
        });
        i.appendChild(h);
        i.appendChild(f);
        return i
    },
    showDialog: function(f) {
        var d = this,
            e = this.createDialog(f);
        this.loaderInner.replaceChild(e, this.loaderDialog);
        this.loaderDialog = e;
        setTimeout(function() {
            d.loaderDialog.classList.add("loader-dialog--show");
            d.logoContainer.classList.add("logo-container--hidden");
            d.brandingWrapper.classList.add("branding-wrapper--hidden")
        }, this.ANIMATION_DELAY)
    },
    hideDialog: function() {
        this.loaderDialog.classList.remove("loader-dialog--show");
        this.logoContainer.classList.remove("logo-container--hidden");
        this.brandingWrapper.classList.remove("branding-wrapper--hidden")
    },
    createBrandingWrapper: function() {
        var f = document.createElement("div"),
            d = this.getBrandingContent(),
            e = this.createElement(d, d.tag === "svg" ? "http://www.w3.org/2000/svg" : null);
        f.classList.add("branding-wrapper");
        if (e) {
            f.appendChild(e)
        }
        return f
    },
    getBrandingContent: function() {
        return {}
    }
};
Core.LoaderView = Sys.extend(Core.View, Core.LoaderView, "Core.LoaderView");
Sys.ns("Core");
Core.Loader = {
    constructor: function() {
        Core.Loader.superclass.constructor.apply(this, arguments)
    },
    getDefaultMVCClasses: function() {
        return {
            model: Core.Model,
            view: Core.LoaderView,
            controller: Core.LoaderController
        }
    }
};
Core.Loader = Sys.extend(Core.Module, Core.Loader, "Core.Loader");
Sys.ns("Loader");
Loader.ErrorHandler = {
    HTTP_ERROR_TEXTS: [{
        key: Language.Keys.connectionLost,
        fallback: "Connection Lost"
    }, {
        key: Language.Keys.reload,
        fallback: "Please reload the game."
    }],
    GAME_SERVER_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }, {
        key: Language.Keys.returnToLobby,
        fallback: "Please return to Casino."
    }],
    PLUGIN_TIMEOUT_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }, {
        key: Language.Keys.returnToLobby,
        fallback: "Please return to Casino."
    }],
    constructor: function() {
        Loader.ErrorHandler.superclass.constructor.apply(this, arguments);
        this.errorStatus = {
            http: "handleHttpError",
            timeout: "handleTimeoutError",
            server: "handleGameServerError"
        };
        this.data = {
            status: ""
        };
        this.setupDialogButtons();
        this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "request:loaderErrorHandler.handleRequestError": this.handleRequestError,
            "request:loaderErrorHandler.handlePluginTimeoutError": this.handlePluginTimeoutError,
            "request:loaderErrorHandler.showTechnicalError": this.handleTechnicalError
        })
    },
    handlePluginTimeoutError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.PLUGIN_TIMEOUT_ERROR_TEXT),
            buttons: this.dialogButtons,
            severity: "stopped"
        })
    },
    readStatus: function() {
        return this.data.status
    },
    setStatus: function(c) {
        var d = this.readStatus();
        if (d !== c) {
            this.data.status = c
        }
    },
    handleRequestError: function(d) {
        var e, f = Sys.utils.getErrorCode(d);
        if (!Sys.utils.httpRequestIsOK(d)) {
            e = "http"
        } else {
            if (Sys.isDefined(f)) {
                e = "server";
                if (f === 20) {
                    Sys.utils.goToLobby("1")
                }
            } else {
                Sys.utils.goToLobby("1")
            }
        }
        if (!Sys.isDefined(e) || e === this.readStatus()) {
            return
        }
        this[this.errorStatus[e]]();
        this.setStatus(e)
    },
    handleHttpError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.HTTP_ERROR_TEXTS),
            buttons: this.dialogButtons,
            severity: "stopped"
        })
    },
    handleGameServerError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.GAME_SERVER_ERROR_TEXT),
            buttons: this.dialogButtons,
            severity: "stopped"
        })
    },
    handleTechnicalError: function() {
        this.handleGameServerError()
    },
    getTexts: function(h) {
        var g = [],
            e, f;
        for (f = -1; ++f < h.length;) {
            e = h[f];
            g.push(Services.languageManager.hasText(e.key) ? Services.languageManager.getText(e.key) : e.fallback)
        }
        return g
    },
    setupDialogButtons: function() {
        this.dialogButtons = [{
            action: function() {
                Sys.utils.goToLobby("9")
            },
            label: Services.languageManager.hasText(Language.Keys.btn_casino) ? Services.languageManager.getText(Language.Keys.btn_casino) : "Home"
        }, {
            action: function() {
                Sys.utils.reload()
            },
            label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload"
        }]
    },
    dispatchDialogRequest: function(b) {
        this.fireEvent("request:loader.showDialog", b)
    }
};
Loader.ErrorHandler = Sys.extend(Sys.Observable, Loader.ErrorHandler, "Loader.ErrorHandler");
if (Sys.isDefined(Loader.ResourceHandler) && Platform.isDesktopDevice) {
    Sys.override(Loader.ResourceHandler, {
        slownessDetected: function() {
            var f = this,
                d, e = Services.languageManager;
            f.storeData("status", "slow");
            d = {
                texts: [e.hasText(Language.Keys.loadingTakesLonger) ? e.getText(Language.Keys.loadingTakesLonger) : "Loading the game is taking longer than usual."],
                buttons: [{
                    action: function() {
                        Sys.utils.reload()
                    },
                    label: e.hasText(Language.Keys.btn_reload) ? e.getText(Language.Keys.btn_reload) : "Reload",
                    scope: f
                }],
                severity: "slow"
            };
            f.fireEvent("request:loader.showDialog", d)
        }
    })
}
if (Sys.isDefined(Loader.ErrorHandler) && Platform.isDesktopDevice) {
    Sys.override(Loader.ErrorHandler, {
        GAME_SERVER_ERROR_TEXT: [{
            key: Language.Keys.error,
            fallback: "Technical Error"
        }],
        SESSION_TIMEOUT_TEXT: [{
            key: "20",
            fallback: "Your session has timed out. Restart the game."
        }],
        PLUGIN_TIMEOUT_ERROR_TEXT: [{
            key: Language.Keys.error,
            fallback: "Technical Error"
        }],
        handleRequestError: function(e) {
            var h = this,
                f, g = Sys.utils.getErrorCode(e);
            if (!Sys.utils.httpRequestIsOK(e)) {
                f = "http"
            } else {
                if (Sys.isDefined(g)) {
                    f = "server";
                    if (g === 20) {
                        f = "timeout"
                    }
                } else {
                    f = "server"
                }
            }
            if (!Sys.isDefined(f) || f === h.readStatus()) {
                return
            }
            h[h.errorStatus[f]]();
            h.setStatus(f)
        },
        setupDialogButtons: function() {
            this.dialogButtons = [{
                action: function() {
                    Sys.utils.reload()
                },
                label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload"
            }]
        },
        handleTimeoutError: function() {
            var b = this;
            b.dispatchDialogRequest({
                texts: b.getTexts(b.SESSION_TIMEOUT_TEXT),
                buttons: [],
                severity: "stopped"
            })
        }
    })
}
Sys.ns("Loader");
Loader.DeviceDetector = {
    constructor: function() {
        Loader.DeviceDetector.superclass.constructor.call(this);
        this.setupEvents()
    },
    setupEvents: function() {
        var b = this;
        b.on({
            "notify:resourceHandler.priorityListComplete": b.onPriorityListComplete
        })
    },
    onPriorityListComplete: function() {
        this.performValidation()
    },
    performValidation: function() {
        var i = this,
            e = Core.DeviceDetectionCodes,
            j = Resources.readData("deviceDetectionJson"),
            g;
        try {
            g = Core.DeviceDetectionService.validate(navigator.userAgent, j)
        } catch (h) {
            i.fireEvent("request:loaderErrorHandler.showTechnicalError");
            return
        }
        switch (g.code) {
            case e.WHITE:
                i.handleWhiteListedCombination();
                break;
            case e.GREY_OS:
                i.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.MGnoOSSupport));
                break;
            case Core.DeviceDetectionCodes.GREY_OS_VERSION:
                i.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.deviceBestGameExperience));
                break;
            case Core.DeviceDetectionCodes.GREY_BROWSER:
                i.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.optimisedForVersion, [g.preferredBrowser]));
                break;
            case Core.DeviceDetectionCodes.GREY_BROWSER_VERSION:
                i.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.deviceUpdateBrowser));
                break;
            case e.BLACK_OS:
            case e.BLACK_OS_VERSION:
            case e.BLACK_BROWSER:
            case e.BLACK_BROWSER_VERSION:
                i.handleBlackListedCombination();
                break;
            default:
                i.fireEvent("request:loaderErrorHandler.showTechnicalError")
        }
    },
    handleWhiteListedCombination: function() {
        this.fireEvent("notify:deviceDetector.validationComplete", true);
        this.fireEvent("notify:deviceDetector.finished")
    },
    handleGreyListedCombination: function(f) {
        var d = this,
            e = {
                proceed: {
                    label: Services.languageManager.getText(Language.Keys.btn_continue),
                    action: function() {
                        d.fireEvent("notify:deviceDetector.finished");
                        d.fireEvent("request:loader.hideDialog")
                    }
                },
                casinoLobby: {
                    label: Services.languageManager.getText(Language.Keys.btn_casino),
                    action: function() {
                        Sys.utils.goToLobby("6")
                    }
                }
            };
        d.fireEvent("notify:deviceDetector.validationComplete", true);
        d.showDialog({
            texts: [f],
            buttons: Platform.isDesktopDevice ? [e.proceed] : [e.casinoLobby, e.proceed],
            confirmDialog: {
                id: "deviceDetector.greyList"
            }
        })
    },
    handleBlackListedCombination: function() {
        var c = this,
            d = {
                casinoLobby: {
                    label: Services.languageManager.getText(Language.Keys.btn_casino),
                    action: function() {
                        Sys.utils.goToLobby("6")
                    }
                }
            };
        c.fireEvent("notify:deviceDetector.validationComplete", false);
        c.showDialog({
            texts: [Services.languageManager.getText(Language.Keys.MGdeviceNoSupport)],
            buttons: !Platform.isDesktopDevice ? [d.casinoLobby] : [],
            severity: "stopped"
        })
    },
    showDialog: function(b) {
        this.fireEvent("request:loader.showDialog", b);
        this.handleIntegrationSpecificDialogs(b)
    },
    handleIntegrationSpecificDialogs: function(b) {}
};
Loader.DeviceDetector = Sys.extend(Sys.Observable, Loader.DeviceDetector, "Loader.DeviceDetector");
Sys.ns("Game");
Sys.ns("Services");
Platform.PlatformManager.gatherUserAgentInformation();
Utils.Platform.init();
window.Environment = new Sys.Environment();
window.Resources = new Sys.Resources();
Services.storage = new Sys.Storage();
window.UserInput = new Sys.UserInput();
window.initializeGame = function(b) {
    Game.gameStartDateMs = Date.now();
    if (Loader.DeviceDetector) {
        new Loader.DeviceDetector()
    } else {
        if (Core.UseragentManager) {
            Game.uam = new Core.UseragentManager()
        }
    }
    Services.orientation = new Core.Orientation();
    Game.viewport = Services.scaling = new Core.Scaling();
    Services.languageManager = new Core.LanguageManager();
    Game.languagemanager = Services.languageManager;
    if (!Sys.isGcmEnabled) {
        Game.loader = new Core.Loader({
            name: "loader"
        })
    }
    Game.errorHandler = new Loader.ErrorHandler();
    Game.resourceHandler = new Loader.ResourceHandler();
    Services.scaling.scaleContent();
    Game.resourceHandler.preLoad()
};
if (!Sys.isGcmEnabled) {
    document.addEventListener("DOMContentLoaded", function() {
        initializeGame()
    })
}(function(e) {
    var f = e.webkitAudioContext,
        d = function(a) {
            if (!a) {
                return
            }
            if (!a.setTargetAtTime) {
                a.setTargetAtTime = a.setTargetValueAtTime
            }
        };
    if (!e.AudioContext && f) {
        window.AudioContext = f;
        if (!f.prototype.createGain) {
            AudioContext.prototype._createGain = f.prototype.createGainNode;
            AudioContext.prototype.createGain = function() {
                var a = this._createGain();
                d(a.gain);
                return a
            }
        }
        if (!f.prototype.createDelay) {
            AudioContext.prototype._createDelay = f.prototype.createDelayNode;
            AudioContext.prototype.createDelay = function() {
                var a = this._createDelay();
                d(a.delayTime);
                return a
            }
        }
        AudioContext.prototype.createScriptProcessor = f.prototype.createScriptProcessor || f.prototype.createJavascriptNode;
        AudioContext.prototype._createOscillator = f.prototype.createOscillator;
        AudioContext.prototype.createOscillator = function() {
            var a = this._createOscillator();
            if (!a.start) {
                a.start = a.noteOn
            }
            if (!a.stop) {
                a.stop = a.noteOff
            }
            return a
        };
        AudioContext.prototype._createBufferSource = f.prototype.createBufferSource;
        AudioContext.prototype.createBufferSource = function() {
            var a = this._createBufferSource();
            if (!a.start) {
                a.start = a.noteGrainOn || a.noteOn
            }
            if (!a.stop) {
                a.stop = a.noteOff
            }
            d(a.playbackRate);
            return a
        }
    }
})(window);
Sys.ns("Interface.utils");
Interface.utils.InteractiveContainer = {
    DEFAULT_BUTTON_TEXT: "Add Value",
    CSS: {
        base: "interface-interactiveContainer_base",
        disabled: "interface-interactiveContainer_disabled",
        label: "interface-interactiveContainer_label",
        button_wrapper: "interface-interactiveContainer_buttonWrapper",
        button: "interface-interactiveContainer_button"
    },
    constructor: function(b) {
        Interface.utils.InteractiveContainer.superclass.constructor.apply(this, arguments)
    },
    init: function(d) {
        var c = this;
        d = d || {};
        c.title = d.title;
        c.callback = d.callback;
        c.minValue = d.minValue;
        c.info = d.info || "";
        c.buttonText = d.buttonText || c.DEFAULT_BUTTON_TEXT;
        c.callback = d.callback || function() {};
        c.keyboardResult = {};
        Interface.utils.InteractiveContainer.superclass.init.apply(c, arguments)
    },
    setMinValue: function(b) {
        this.minValue = b
    },
    setupContainer: function(d) {
        var c = this;
        c.container = new Sys.Element({
            id: c.id,
            tag: "div",
            cls: d.cls + " " + c.CSS.base
        });
        if (c.title) {
            c.label = c.container.add(new Sys.Element({
                id: c.id + "_title",
                tag: "div",
                cls: c.CSS.label,
                textContent: c.title
            }))
        }
        c.buttonWrapper = c.container.add(new Sys.Element({
            id: c.id + "_button_wrapper",
            tag: "div",
            cls: c.CSS.button_wrapper
        }));
        c.addButton = c.buttonWrapper.add(new Sys.Element({
            id: c.id + "_button",
            tag: "div",
            cls: String(c.CSS.button),
            textContent: c.buttonText
        }))
    },
    setValue: function(e, h) {
        var g = this,
            f;
        if (Sys.isNumber(e)) {
            f = {
                formattedInputField: Services.moneyManager.formatMoneyCurrencySign(Sys.utils.toInt(e), undefined, 0),
                input: String(Sys.utils.toInt(e / 100)),
                value: Sys.utils.toInt(e / 100),
                cents: e
            };
            if (h !== true) {
                g.keyboardCallback(f)
            } else {
                g.keyboardResult = f;
                g.updateButtonText()
            }
        }
    },
    onUserInputStart: function(b) {
        this.wasInitialInputTarget = Sys.UserInputUtils.isCoordinateTarget(this.buttonWrapper.el, b) && this.enabled
    },
    onUserInputEnd: function(f) {
        var d = this,
            e = Sys.UserInputUtils.isCoordinateTarget(d.buttonWrapper.el, f);
        if (e && d.wasInitialInputTarget) {
            d.requestKeyboard()
        }
        d.wasInitialInputTarget = false
    },
    click: function() {
        this.requestKeyboard()
    },
    requestKeyboard: function() {
        var b = this;
        b.fireEvent("request:keyboard.open", {
            info: b.info,
            label: b.title,
            okCallback: b.keyboardCallback.bind(b),
            cancelCallback: b.keyboardCallback.bind(b),
            minValue: b.minValue
        })
    },
    keyboardCallback: function(d) {
        var c = this;
        if (Sys.isDefined(d)) {
            c.keyboardResult = d
        }
        c.updateButtonText();
        c.callback(c.keyboardResult.cents || 0)
    },
    updateButtonText: function() {
        var c = this,
            d = c.addButton;
        if (c.keyboardResult.value > 0) {
            d.el.textContent = c.keyboardResult.formattedInput;
            d.addCSSClass("interactive_pushed")
        } else {
            d.el.textContent = c.buttonText;
            d.removeCSSClass("interactive_pushed")
        }
    }
};
Interface.utils.InteractiveContainer = Sys.extend(Interface.utils.UserInputBase, Interface.utils.InteractiveContainer, "Interface.utils.InteractiveContainer");
Platform._desktop.loaderResourceKeys = {
    GFX: "1280x720",
    audio: "ogg"
};
Platform._desktop_IE.loaderResourceKeys = {
    GFX: "1280x720",
    audio: "mp3"
};
Platform._desktop_safari.loaderResourceKeys = {
    GFX: "1280x720",
    audio: "mp3"
};
if (Sys.isDefined(Loader.ResourceHandler)) {
    Sys.override(Loader.ResourceHandler, {
        jsonComplete: function(f, h) {
            var e, g;
            if (h === "configDesktop") {
                if (Sys.isDefined(Resources.readData("config")) && Environment.platform === "desktop") {
                    e = Resources.readData("config");
                    g = JSON.parse(f.responseText);
                    this.copyProperties(g, e)
                }
                Resources.storeData(h, JSON.parse(f.responseText))
            } else {
                if (h === "config" && Sys.isDefined(Resources.readData("configDesktop")) && Environment.platform === "desktop") {
                    g = Resources.readData("desktopConfig");
                    e = JSON.parse(f.responseText);
                    this.copyProperties(g, e);
                    Resources.storeData(h, e)
                } else {
                    Resources.storeData(h, JSON.parse(f.responseText))
                }
            }
        },
        copyProperties: function(c, d) {
            Sys.iterate(c, function(b, a) {
                if (!Sys.isDefined(d[b])) {
                    d[b] = {}
                }
                Sys.applyProperties(d[b], a)
            })
        }
    })
}
Sys.ns("Integration");
Integration.OpenBetResourceHandlerOverride = {
    INTEGRATION: "openbet",
    determineSessionID: function() {
        return this.performServletCall(Resources.readData("queryData").callbackurl, "openbet")
    },
    handleServletResponse: function(g) {
        var j = this,
            i = {},
            l = Sys.utils.qsToObj(g.responseText, false),
            h = Resources.readData("queryData"),
            k = l.pluginURL;
        i["openbet.rgitoken"] = l.rgitoken;
        i["openbet.user_id"] = h["openbet.user_id"];
        i["openbet.game_code"] = h["openbet.game_code"];
        i["openbet.channel"] = j.getOpenBetChannel();
        i["openbet.user_type"] = h["openbet.user_type"];
        i["openbet.affiliate"] = Sys.isDefined(h["openbet.affiliate"]) ? h["openbet.affiliate"] : "";
        i["openbet.rgs_site"] = "NetEnt site";
        i["openbet.promotions"] = "NO";
        Sys.applyIf(Resources.readData("extraParams"), i);
        j.storeSessionID("NULL");
        if (Sys.isDefined(k)) {
            Resources.storeData("pluginURL", decodeURIComponent(k))
        } else {
            j.determinePluginURL()
        }
    },
    getOpenBetChannel: function() {
        return Resources.readData("queryData")["openbet.channel"]
    },
    _gameServerInitComplete: Loader.ResourceHandler.prototype.gameServerInitComplete,
    gameServerInitComplete: function(d) {
        var c = Sys.utils.parseQueryString(d.responseText, true);
        Resources.storeData("gameServerInitResponse", Sys.utils.qsToObj(d.responseText));
        Resources.storeData("gameServerInitResponseObject", c);
        this.storeSessionID(c.openbet.sessionid);
        Resources.storeData("unParsedGameServerInitResponse", d.responseText);
        Resources.storeData("historyUrl", this.buildHistoryUrl())
    }
};
Integration.OpenBetLanguageManagerOverride = {
    _getText: Core.LanguageManager.prototype.getText,
    getText: function(g, e) {
        var h = this,
            f = "OB" + g;
        if (h.hasText(f)) {
            return h._getText(f, e)
        }
        return h._getText(g, e)
    }
};
Integration.applyOpenBetOverrides = function() {
    Sys.override(Loader.ResourceHandler, Integration.OpenBetResourceHandlerOverride);
    Integration.applyOpenBetLanguageOverrides()
};
Integration.applyOpenBetLanguageOverrides = function() {
    if (Platform.isDesktopDevice) {
        Sys.override(Core.LanguageManager, Integration.OpenBetLanguageManagerOverride)
    }
};
if (Sys.openBetMode) {
    Integration.applyOpenBetOverrides()
} else {
    if (Sys.openBetPlayForFunMode) {
        Integration.applyOpenBetLanguageOverrides()
    }
}
Sys.ns("Integration.GCM");
Integration.GCM.availableOptions = ["MUTE", "TURBO"];
window.setViewportHidden = function(d) {
    var f = document.getElementById("viewport"),
        e;
    if (f !== null && Sys.isDefined(f)) {
        e = 1;
        if (d) {
            e = 0.01
        }
        f.style.opacity = e
    }
};
Integration.GCM.Proxy = {
    MODULE_NAME: "GCMProxy",
    gcmCoreInstance: undefined,
    exclusivityEnable: false,
    inIdleState: false,
    multiChoiceGameDialogsQueue: [],
    freeBetBalance: 0,
    latestWin: 0,
    basicGamePanelEnabled: true,
    balanceUpdatedWithNewRound: false,
    constructor: function() {
        var d = this,
            f, e;
        Integration.GCM.Proxy.superclass.constructor.call(d);
        Sys.override(Loader.ResourceHandler, {
            getOpenBetChannel: d.getGcmChannel.bind(d)
        });
        Sys.override(Environment, {
            goToLobby: d.goToLobby.bind(d)
        });
        d.exposedInterface = {
            gameRevealed: d.gameRevealed.bind(d),
            gcmReady: d.gcmReady.bind(d),
            optionHasChanged: d.optionHasChanged.bind(d),
            balancesHasChanged: d.balancesHasChanged.bind(d),
            toggleMute: d.toggleMute.bind(d),
            configReady: d.configReady.bind(d),
            resume: d.resume.bind(d),
            updateLoadingBar: d.simulateLoading.bind(d)
        };
        f = com.openbet.gcmBridge;
        f.init(document.body, window.location.href, d.exposedInterface);
        e = d.getIframe();
        if (e !== null && Sys.isDefined(e)) {
            e.style.zIndex = 10;
            e.style.position = "fixed"
        }
        d.on({
            "notify:resourceHandler.gameAssetsLoaded": d.onGameLoadedSuccessfully,
            "request:gcmProxy.updateProgress": d.simulateLoading,
            "notify:stateHandler.leavingBeforeLoaderCloseState": d.onGameResourcesLoaded,
            "notify:resourceHandler.animationComplete": d.onLoadAnimationClosed,
            "notify:loader.closed": d.onLoadAnimationClosed,
            "notify:stateHandler.enteringSpinningState": d.hideCommonUI,
            "request:spin.startNewRound": d.onSpinStart,
            "notify:stateHandler.enteringIdleState": d.onEnteringIdleState,
            "notify:stateHandler.leavingIdleState": d.onLeavingIdleState,
            "notify:settingsManager.settingChanged": d.onSettingChanged,
            "notify:responseParser.responseParsed": d.processServerResponse,
            "notify:moneyManager.betChanged": d.updateBetInUI,
            "notify:moneyManager.balanceReloaded": d.updateBalanceInUI,
            "request:disableBasicGamePanel": d.disableBasicGamePanel,
            "request:enableBasicGamePanel": d.enableBasicGamePanel,
            "request:gcmProxy.handleError": d.handleError,
            "request:cashField.showWin": d.onShowWin
        })
    },
    goToLobby: function() {
        var b = this;
        b.handleError({
            category: "CRITICAL",
            severity: "ERROR",
            errorCode: "CRITICAL_ERROR",
            message: Services.languageManager.getText(Language.Keys.btn_casino),
            extraParameters: {
                originalError: "criticalError",
                originalTitle: Services.languageManager.getText(Language.Keys.btn_casino),
                reason: 3,
                suppressMessage: true
            }
        })
    },
    getIframe: function() {
        return document.querySelector("iframe[name='commonUIIFrame']")
    },
    getGcmChannel: function() {
        return this.gcmCoreInstance.getConfig().channel
    },
    onGameLoadedSuccessfully: function() {
        this.setupAccount();
        setViewportHidden(false)
    },
    setupAccount: function() {
        var h = Resources.readData("gameServerInitResponse"),
            k = h.playercurrencyiso,
            l = Sys.utils.XMLHelper.getMoneyFormatFromXML(Resources.readData("moneyformat_player"), k),
            m = {
                ccy_code: k,
                ccy_decimal_separator: l.decimalDivider,
                ccy_thousand_separator: l.thousandsDivider
            },
            i = Number(h.credit) / 100,
            j = (Sys.isDefined(h["openbet.freebets"]) ? Number(h["openbet.freebets"]) : 0) / 100,
            n = {
                CASH: {
                    amount: i
                },
                FREEBET: {
                    amount: j
                }
            };
        this.gcmCoreInstance.accountInit(m, n);
        this.gcmCoreInstance.stakeUpdate(0);
        this.gcmCoreInstance.paidUpdate(0)
    },
    onGameResourcesLoaded: function() {
        this.gameResourcesLoaded = true;
        this.tryToFinishGCMInitialization()
    },
    onLoadAnimationClosed: function() {
        this.loadAnimationClosed = true;
        this.tryToFinishGCMInitialization()
    },
    tryToFinishGCMInitialization: function() {
        var b = this;
        if (b.gameResourcesLoaded && b.loadAnimationClosed) {
            b.updateBalanceInUI();
            b.updateBetInUI();
            b.updatePayoutInUI();
            b.registerAvailableOptions();
            b.gcmCoreInstance.gameReady();
            b.fireEvent("request:scaling.update")
        }
    },
    registerAvailableOptions: function() {
        var d = this,
            c = d.gcmCoreInstance;
        Sys.each(Integration.GCM.availableOptions, function(a) {
            c.regOption(a)
        });
        d.hasRegisteredOptions = true;
        d.updateTurboSettingInUI();
        d.updateAudioSettingInUI()
    },
    onSpinStart: function() {
        var b = this.getBalances(true);
        this.hideCommonUI();
        this.gcmCoreInstance.balancesUpdate(b);
        this.balanceUpdatedWithNewRound = true
    },
    hideCommonUI: function() {
        this.gcmCoreInstance.gameAnimationStart()
    },
    processServerResponse: function(f) {
        var d = this,
            e = f.openbet;
        d.freeBetBalance = (Sys.isDefined(e) && Sys.isDefined(e.freebets)) ? Number(e.freebets) : d.freeBetBalance;
        d.latestWin = Sys.isDefined(f.wins) ? f.wins.centsTotal : 0
    },
    onShowWin: function() {
        this.updateBalanceInUI();
        this.updatePayoutInUI()
    },
    onEnteringIdleState: function() {
        var b = this;
        b.inIdleState = true;
        b.showCommonUI()
    },
    showCommonUI: function() {
        this.gcmCoreInstance.gameAnimationComplete(this.enableUI)
    },
    enableUI: function() {},
    updateBalanceInUI: function() {
        var b = this.getBalances();
        if (!this.balanceUpdatedWithNewRound) {
            this.gcmCoreInstance.balancesUpdate(b)
        }
        this.balanceUpdatedWithNewRound = false
    },
    getBalances: function(j) {
        var k = Services.moneyManager.getBalanceCents() / 100,
            i = this.freeBetBalance / 100,
            l = k - i,
            h = i,
            g = Services.moneyManager.getBetCents() / 100;
        if (j) {
            l += g;
            i -= g;
            if (i < 0) {
                l += i;
                h = 0
            } else {
                h = i
            }
        }
        return {
            CASH: {
                amount: l
            },
            FREEBET: {
                amount: h
            }
        }
    },
    updatePayoutInUI: function() {
        this.gcmCoreInstance.paidUpdate(this.latestWin / 100)
    },
    onLeavingIdleState: function() {
        this.inIdleState = false;
        this.gcmCoreInstance.paidUpdate(0);
        this.updateBalanceInUI()
    },
    onSettingChanged: function(b) {
        if (b === "betLevel" || b === "denomination" || b === "betLines") {
            this.updateBetInUI()
        } else {
            if (b === "quickSpin") {
                this.updateTurboSettingInUI()
            } else {
                if (b === "volume") {
                    this.updateAudioSettingInUI()
                }
            }
        }
    },
    updateBetInUI: function() {
        var b = Services.moneyManager.getBetCents() / 100;
        if (Sys.isNumber(b)) {
            this.gcmCoreInstance.stakeUpdate(b)
        }
    },
    updateTurboSettingInUI: function() {
        var d = this,
            c = Services.settingsManager.getSetting("quickSpin") === true;
        if (d.hasRegisteredOptions && Integration.GCM.availableOptions.contains("TURBO")) {
            d.gcmCoreInstance.optionHasChanged("TURBO", "GAME", c)
        }
    },
    updateAudioSettingInUI: function() {
        var c = this,
            d = Services.settingsManager.getSetting("volume") === 0;
        if (c.hasRegisteredOptions && Integration.GCM.availableOptions.contains("MUTE")) {
            c.exposedInterface.toggleMute(d)
        }
    },
    handleError: function(j) {
        var f = this,
            g, h, i;
        f.disableUI();
        g = true;
        if (j.RGIError) {
            h = com.openbet.gcm.xmlutil;
            i = h.getErrorInfoFromRGIXml(decodeURIComponent(j.RGIXML));
            f.shouldRevertRound = i.errorAction === "VOID_TXN";
            f.gcmCoreInstance.handleServerError(i)
        } else {
            j = Sys.applyIf(j, {
                category: "NON_RECOVERABLE_ERROR",
                severity: "ERROR",
                message: "An error occurred",
                errorCode: "CLIENTERROR"
            });
            if (j.category === "MULTI_CHOICE_DIALOG") {
                if (Sys.isDefined(f.actionsOfCurrentDialog)) {
                    g = false;
                    f.multiChoiceGameDialogsQueue.push(j)
                } else {
                    f.actionsOfCurrentDialog = j.actions;
                    if (!f.exclusivityEnable) {
                        f.fireEvent("request:userInputManager.activateExclusivity", f.MODULE_NAME);
                        f.fireEvent("request:quickSettingsMenu.externalDeactivate", f.MODULE_NAME);
                        f.fireEvent("request:spinButton.hide", f.MODULE_NAME);
                        f.exclusivityEnable = true
                    }
                }
            }
            if (g) {
                f.shouldRevertRound = j.revert === true;
                f.gcmCoreInstance.handleError(j.category, j.severity, j.errorCode, j.message, j.extraParameters)
            }
        }
    },
    disableUI: function() {},
    gcmReady: function(b) {
        this.gcmCoreInstance = b;
        this.simulateLoading(0)
    },
    configReady: function() {
        var d = this,
            c = !d.isDemoMode();
        if ((c && Sys.openBetMode) || (!c && !Sys.openBetMode)) {
            initializeGame({
                loaderProgressCallBack: d.simulateLoading.bind(d)
            })
        } else {
            if (c && !Sys.openBetMode) {
                d.handleError({
                    category: "LOGIN_ERROR",
                    severity: "ERROR",
                    message: "ACCOUNT_UNAVAILABLE",
                    errorCode: "ACCOUNT_UNAVAILABLE",
                    extraParameters: {
                        originalError: 70,
                        originalTitle: "MGaccountUnavailable"
                    }
                })
            } else {
                Sys.utils.goToLobby()
            }
        }
    },
    isDemoMode: function() {
        return this.gcmCoreInstance.getConfig().playMode === "demo"
    },
    simulateLoading: function(d) {
        var c = Sys.utils.toInt(d);
        if (c < 100) {
            this.gcmCoreInstance.loadProgressUpdate(c)
        } else {
            this.gcmCoreInstance.loadProgressUpdate(99);
            this.hideCommonUI();
            this.fireEvent("notify:gcmProxy.animationComplete")
        }
    },
    gameRevealed: function() {
        this.configureGameForGcm()
    },
    configureGameForGcm: function() {
        this.fireEvent("request:homeButton.hidePermanently")
    },
    optionHasChanged: function(d, f) {
        var e = this;
        switch (d) {
            case "MUTE":
                e.toggleSound(f);
                break;
            case "TURBO":
                e.toggleQuickSpin(f);
                break;
            case "GAME_PREFERENCES":
                if (Platform.isDesktopDevice) {
                    e.toggleSettingsWindowDesktop("gameSettings")
                } else {
                    e.toggleSettingsWindow(f, "betSettings")
                }
                break;
            case "PAYTABLE":
                e.toggleSettingsWindow(f, "paytable");
                break;
            case "ABOUT":
                if (e.inIdleState) {
                    e.toggleSettingsWindow(f, "gameRules")
                }
                break;
            default:
        }
    },
    disableBasicGamePanel: function() {
        this.basicGamePanelEnabled = false
    },
    enableBasicGamePanel: function() {
        this.basicGamePanelEnabled = true
    },
    toggleSettingsWindowDesktop: function(b) {
        this.fireEvent("request:" + b + ".toggle")
    },
    toggleSettingsWindow: function(d, c) {
        if (!this.basicGamePanelEnabled) {
            return
        }
        if (d) {
            this.fireEvent("request:" + c + ".show")
        } else {
            this.fireEvent("request:settingsWindow.close")
        }
    },
    toggleSound: function(b) {
        Services.settingsManager.storeSetting("volume", b ? 0 : 1)
    },
    toggleQuickSpin: function(c) {
        var d;
        this.fireEvent("request:settingsManager.storeData", "quickSpin", c);
        d = Services.settingsManager.getSetting("quickSpin");
        if (d !== c) {
            this.gcmCoreInstance.optionHasChanged("TURBO", "GAME", d)
        }
    },
    balancesHasChanged: function(d) {
        var e, f;
        if (this.inIdleState) {
            e = parseInt(Math.round(d.CASH.amount * 100), 10);
            f = parseInt(Math.round(d.FREEBET.amount * 100), 10);
            Services.moneyManager.setBalance(e + f);
            this.freeBetBalance = f
        } else {
            Sys.utils.reload()
        }
    },
    toggleMute: function(b) {
        this.gcmCoreInstance.optionHasChanged("MUTE", "GAME", b)
    },
    resume: function(h) {
        var i = this,
            f = h,
            g = Sys.isArray(i.actionsOfCurrentDialog),
            j;
        try {
            if (g && i.actionsOfCurrentDialog.length === 1 && !Sys.isDefined(f)) {
                f = 0
            }
            if (g && Sys.isDefined(i.actionsOfCurrentDialog[f])) {
                i.actionsOfCurrentDialog[f]()
            } else {
                if (i.shouldRevertRound) {
                    i.fireEvent("request:moneyManager.revertBet");
                    i.fireEvent("request:spin.activateDefaultOutcome", "basic");
                    i.updateBalanceInUI()
                }
            }
        } finally {
            i.actionsOfCurrentDialog = undefined
        }
        if (i.multiChoiceGameDialogsQueue.length > 0) {
            j = i.multiChoiceGameDialogsQueue.shift();
            i.handleError(j)
        } else {
            i.exclusivityEnable = false;
            i.fireEvent("request:userInputManager.deactivateExclusivity", i.MODULE_NAME);
            i.fireEvent("request:quickSettingsMenu.externalActivate", i.MODULE_NAME);
            i.fireEvent("request:spinButton.show", i.MODULE_NAME)
        }
    }
};
Integration.GCM.Proxy = Sys.extend(Sys.Observable, Integration.GCM.Proxy, "Integration.GCM.Proxy");
if (Sys.isGcmEnabled) {
    setViewportHidden(true);
    Sys.utils.addCSSClass(document.body, "gcmMode");
    Sys.utils.loadJS({
        url: "../../../gcm/js/gcmBridge.js"
    }).then(function() {
        new Integration.GCM.Proxy()
    })
}
Sys.ns("Integration.GCM");
Integration.GCM.ErrorHandler = {
    handleRequestError: function(h) {
        var g = this,
            f = Sys.utils.getResponseParameter("openbet.error.xml", h),
            e;
        if (!Sys.utils.httpRequestIsOK(h)) {
            e = "http"
        } else {
            if (Sys.isDefined(f)) {
                this.fireEvent("request:gcmProxy.handleError", {
                    RGIError: true,
                    RGIXML: f.replace(/\+/g, " ")
                })
            } else {
                e = "server"
            }
        }
        if (!Sys.isDefined(e) || e === g.readStatus()) {
            return
        }
        g[g.errorStatus[e]]();
        g.setStatus(e)
    }
};
Integration.GCM.ResourceHandler = {
    slownessDetected: function() {}
};
Integration.GCM.DeviceDetector = {
    handleIntegrationSpecificDialogs: function(h) {
        var g = h.severity === "stopped",
            e = {
                category: "MULTI_CHOICE_DIALOG",
                severity: g ? "ERROR" : "INFO",
                message: h.texts.join("\n"),
                errorCode: "ERROR",
                actions: [],
                extraParameters: {}
            },
            f = [];
        Sys.each(h.buttons, function(a) {
            f.push(a.label);
            e.actions.push(a.action)
        });
        e.extraParameters.options = f;
        this.fireEvent("request:gcmProxy.handleError", e)
    }
};
(function() {
    if (Sys.isGcmEnabled) {
        Sys.override(Loader.ErrorHandler, Integration.GCM.ErrorHandler);
        Sys.override(Loader.ResourceHandler, Integration.GCM.ResourceHandler);
        if (Sys.isDefined(Loader.DeviceDetector)) {
            Sys.override(Loader.DeviceDetector, Integration.GCM.DeviceDetector)
        }
    }
}());

//TODO: выпилить повторяющийся код
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
