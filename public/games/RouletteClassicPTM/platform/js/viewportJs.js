function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return true
    }
}
function inIframeDeeply() {
    try {
        return window.self !== window.top && window.parent !== window.top
    } catch (a) {
        return true
    }
}
window.MagicViewportContent = {
    content1: "target-densitydpi=320, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    content2: "user-scalable=no, initial-scale=1.0, maximum-scale=0.5, minimum-scale=0.5",
    content3: "user-scalable=no, initial-scale=1.0, maximum-scale=0.75, minimum-scale=0.75",
    content4: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    content5: "user-scalable=no, initial-scale=1, maximum-scale=0.5765, minimum-scale=0.5765",
    content6: "target-densitydpi=152, user-scalable=no",
    content7: "user-scalable=no, initial-scale=1.0, maximum-scale=0.5457, minimum-scale=0.5457",
    content8: "target-densitydpi=293, user-scalable=no"
};
window.Constants = {
    viewportSolutionVersion: "17.10.23",
    mobileDevicesUniqueResolutions: [2960, 2732, 2560, 2436, 2220, 2160, 2048, 1920, 1480, 1440, 1334, 1281, 1280, 1136, 1024, 960, 854, 801, 800, 640, 480, 400, 320],
    highResScreenThreshold: 1920,
    maxSupportedResolution: 1280,
    maxiPhoneXSupportedResolution: 1624,
    maxIpadSupportedResolution: 1024,
    oldChromeVersionThreshold: 25,
    iPadProWidenessInDIPs: 1366,
    iPadWidenessInDIPs: 1024,
    iPhone6WidenessInPx: 1334,
    iPhone6PlusWidenessInPx: 1920,
    iPhone6PlusWidenessInDIPs: 736,
    lumia920WidenessInPx: 1280,
    lumia820WidenessInPx: 800,
    nexus6WidenessInPx: 2560,
    tab3_10_1WidenessInPx: 1280,
    SamsungS8WidenessInPx: 2220,
    tooStretchedAspectRatioThreshold: 4,
    tooSquareAspectRatioThreshold: 1.3,
    exceptionalDevices: {
        "(?:Windows(?!.+Phone)|WPDesktop|Macintosh|X11)": "",
        "Android 4\\.3.+SM-N900.+Version": MagicViewportContent.content1,
        "GT-I9505.+Version(?!.+Chrome)": MagicViewportContent.content1,
        "HTC.One.+Version(?!.+Chrome)": MagicViewportContent.content1,
        "HTC.One.+Version.+Chrome": MagicViewportContent.content2,
        "LG-D802.+Version": MagicViewportContent.content2,
        "(?:MX4|m1 note).+Version": MagicViewportContent.content1,
        "MI 4.+Version.+T5.+bdbrowser": MagicViewportContent.content1,
        "MI NOTE LTE.+XiaoMi/MiuiBrowser": MagicViewportContent.content7,
        "MI NOTE LTE.+MQQBrowser": MagicViewportContent.content8,
        "MI NOTE LTE.+bdbrowser/1": MagicViewportContent.content8,
        "MI NOTE LTE.+bdbrowser": MagicViewportContent.content7,
        "MI NOTE LTE.+baidubrowser": MagicViewportContent.content7,
        "MI NOTE LTE.+Aphone browser": MagicViewportContent.content7,
        "MI NOTE LTE.+Version.+Chrome": MagicViewportContent.content7,
        "R7.+OppoBrowser": MagicViewportContent.content2,
        "R7.+UCBrowser": MagicViewportContent.content3,
        "R7.+Version.+Chrome": MagicViewportContent.content1,
        "Nexus 6\\s": MagicViewportContent.content5,
        "Lenovo_A850.+UCBrowser": MagicViewportContent.content1,
        "SM-T80.+Version.+Chrome": MagicViewportContent.content4,
        "Android(?!.+Nexus (?:7|10)).+?Version/4.0( Chrome/[.0-9]+)?( Mobile)? Safari/[.0-9]+$": MagicViewportContent.content2,
        "Android.+Nexus 7.+Version.+Chrome": MagicViewportContent.content3,
        "GT-P52.+Chrome.+UCBrowser": MagicViewportContent.content6
    },
    DOM: {
        viewport: "viewport",
        viewportStyleTag: "cssViewportStyleTag"
    },
    i18n: {
        doubleTap: {
            EN: "Please double tap to continue.",
            BG: "Докоснете двукратно, за да продължите.",
            CH: "請點選兩下以繼續。",
            CS: "Pro pokračování dvakrát klepněte, prosím.",
            DA: "Tap to gange for at fortsætte.",
            DE: "Doppelklick um fortzufahren.",
            ES: "Pulse dos veces para continuar.",
            "ES-MX": "Toque dos veces para continuar.",
            FI: "Napauta kahdesti jatkaaksesi.",
            IT: "Effettua un doppio tocco per continuare.",
            JA: "続けるにはダブルタップしてください。",
            KO: "두 번 탭하여 계속하세요.",
            MS: "Sila ketik dua kali untuk meneruskan.",
            NL: "Dibbeltik om door te gaan.",
            RU: "Пожалуйста, щелкните два раза для продолжения.",
            SK: "Pokračujte dvojitým ťuknutím.",
            SV: "Dubbeltryck för att fortsätta.",
            "ZH-CN": "请双击以继续。"
        }
    }
};
window.ScalingReport = (function() {
    var a = {
        scaleFactor: null,
        actualDPR: null,
        deviceScreenWidth: null,
        deviceScreenHeight: null,
        deviceScreenWideness: null,
        deviceScreenNarrowness: null,
        deviceScreenIsHighResolution: null,
        browserVersionRaw: null,
        browserVersionMajor: null,
        browserVersionMinor: null,
        browserVersionRawBase: null,
        browserVersionMajorBase: null,
        browserVersionMinorBase: null
    };
    return {
        scaleFactor: function(b) {
            if (!arguments.length) {
                return a.scaleFactor
            }
            a.scaleFactor = b
        },
        actualDPR: function(b) {
            if (!arguments.length) {
                return a.actualDPR
            }
            a.actualDPR = b
        },
        multiplicationRatio: function() {
            return this.actualDPR() * this.scaleFactor()
        },
        deviceScreenWidth: function(b) {
            if (!arguments.length) {
                return a.deviceScreenWidth
            }
            a.deviceScreenWidth = b
        },
        deviceScreenHeight: function(b) {
            if (!arguments.length) {
                return a.deviceScreenHeight
            }
            a.deviceScreenHeight = b
        },
        deviceScreenWideness: function(b) {
            if (!arguments.length) {
                return a.deviceScreenWideness
            }
            a.deviceScreenWideness = b
        },
        deviceScreenNarrowness: function(b) {
            if (!arguments.length) {
                return a.deviceScreenNarrowness
            }
            a.deviceScreenNarrowness = b
        },
        deviceScreenIsHighResolution: function(b) {
            if (!arguments.length) {
                return a.deviceScreenIsHighResolution
            }
            a.deviceScreenIsHighResolution = b
        },
        browserVersionRaw: function(b) {
            if (!arguments.length) {
                return a.browserVersionRaw
            }
            a.browserVersionRaw = b
        },
        browserVersionMajor: function(b) {
            if (!arguments.length) {
                return a.browserVersionMajor
            }
            a.browserVersionMajor = b
        },
        browserVersionMinor: function(b) {
            if (!arguments.length) {
                return a.browserVersionMinor
            }
            a.browserVersionMinor = b
        },
        browserVersionRawBase: function(b) {
            if (!arguments.length) {
                return a.browserVersionRawBase
            }
            a.browserVersionRawBase = b
        },
        browserVersionMajorBase: function(b) {
            if (!arguments.length) {
                return a.browserVersionMajorBase
            }
            a.browserVersionMajorBase = b
        },
        browserVersionMinorBase: function(b) {
            if (!arguments.length) {
                return a.browserVersionMinorBase
            }
            a.browserVersionMinorBase = b
        }
    }
}
)();
var DOM = (function() {
    function a(b) {
        return typeof b === "string" ? DOM.get(b) : b
    }
    return {
        get: function(b) {
            return document.getElementById(b)
        },
        show: function(b) {
            a(b).style.display = "block"
        },
        hide: function(b) {
            a(b).style.display = "none"
        },
        text: function(c, b) {
            if (arguments.length == 1) {
                return a(c).innerText
            } else {
                a(c).innerText = b
            }
        },
        html: function(c, b) {
            if (arguments.length == 1) {
                return a(c).innerHTML
            } else {
                a(c).innerHTML = b
            }
        },
        add: function(d, e, c) {
            var b = document.createElement(d);
            e ? b.id = e : null;
            c ? b.innerHTML = c : null;
            document.body.appendChild(b);
            return b
        },
        addStyle: function(c) {
            var b = document.createElement("style");
            b.type = "text/css";
            b.innerHTML = c;
            document.getElementsByTagName("head")[0].appendChild(b);
            return b
        },
        data: function(d, b, c) {
            if (arguments.length == 2) {
                return a(d).getAttribute("data-" + b)
            } else {
                a(d).setAttribute("data-" + b, c)
            }
        },
        css: function(d, b, c) {
            if (arguments.length == 2) {
                return a(d).style[b]
            } else {
                a(d).style[b] = c
            }
        }
    }
}
)();
var Util = (function() {
    var c = "language";
    var b = "lang";
    var a = "_url-param_";
    var d = "_viewport_";
    return {
        isUrlTriggerParamPresent: function(e) {
            return new RegExp("[?&]" + e + "(?:$|=|&)","i").test(location.search)
        },
        getUrlParamValue: function(f) {
            var e = new RegExp("[?&]" + f + "=(?:(.+)&|(.+)$(?!&))","i").exec(location.search);
            if (e) {
                for (var g = 1; g < e.length; g++) {
                    if (e[g]) {
                        return decodeURIComponent(e[g])
                    }
                }
            }
            return null
        },
        getLocalized: function(f) {
            var e = f[Util.getLang()];
            return e ? e : f.EN
        },
        getLang: function() {
            var e;
            if (Util.getUrlParamValue(c)) {
                e = Util.getUrlParamValue(c)
            } else {
                if (Util.getUrlParamValue(b)) {
                    e = Util.getUrlParamValue(b)
                } else {
                    if (Util.recallUrlParam(c)) {
                        e = Util.recallUrlParam(c)
                    } else {
                        if (Util.recallUrlParam(b)) {
                            e = Util.recallUrlParam(b)
                        } else {
                            e = "EN"
                        }
                    }
                }
            }
            return e.toUpperCase()
        },
        recallUrlParam: function(g) {
            try {
                if (localStorage) {
                    return localStorage.getItem(a + g)
                }
            } catch (f) {
                Logger.logError("Can't use local storage, most probably cookies disabled in browser settings! " + f)
            }
        },
        memoItem: function(f, h) {
            try {
                if (localStorage) {
                    localStorage.setItem(d + f, h)
                }
            } catch (g) {
                Logger.logError("Can't use local storage, most probably cookies disabled in browser settings! " + g)
            }
        },
        recallItem: function(f) {
            try {
                if (localStorage) {
                    return localStorage.getItem(d + f)
                }
            } catch (g) {
                Logger.logError("Can't use local storage, most probably cookies disabled in browser settings! " + g)
            }
        },
        safeRun: function(e) {
            setTimeout(e, 300)
        },
        delayedRun: function(e) {
            setTimeout(e, 1000)
        }
    }
}
)();
window.WorkaroundManager = function() {
    var c = function() {
        function d() {
            return Math.max(window.innerWidth, window.innerHeight) > Constants.iPhone6WidenessInPx
        }
        function e() {
            if (d()) {
                DOM.get(Constants.DOM.viewport).setAttribute("content", MagicViewportContent.content4)
            }
        }
        function f() {
            window.addEventListener("orientationchange", e, false);
            window.addEventListener("load", e, false)
        }
        f()
    };
    var a = function() {
        var d = null;
        var m = "doubleTapOverlay";
        var h = "doubleTapLabelContainerID";
        var l = "body {-ms-touch-action: none !important;touch-action: none !important;}";
        var g = "body {-ms-touch-action: double-tap-zoom !important;touch-action: double-tap-zoom !important;}";
        function i() {
            d = DOM.addStyle(g);
            DOM.addStyle("html {overflow: inherit !important;}.magicDiv {position: absolute;left: -5000px;width: 1px;}#" + m + " {display: none;z-index: 10000;position: fixed;width: 100%;height: 100%;background-color: rgba(0, 0, 0, .6);color: white;font-size: 36px;}#" + m + " .table {display: table;width: 100%;height: 100%;}#" + m + " .table-cell {display: table-cell;vertical-align: middle;text-align: center;}");
            DOM.add("div").className = "magicDiv";
            DOM.add("div", m, "<div id='" + h + "' class='table'><div class='table-cell'>" + Util.getLocalized(Constants.i18n.doubleTap) + "</div></div>")
        }
        function k() {
            var q = Math.max(window.innerWidth, window.innerHeight);
            var p = Math.min(window.innerWidth, window.innerHeight);
            var o = q / p;
            return window.innerWidth != document.documentElement.clientWidth && o < Constants.tooStretchedAspectRatioThreshold && o > Constants.tooSquareAspectRatioThreshold
        }
        function j() {
            if (k()) {
                DOM.css(h, "width", window.innerWidth + "px");
                DOM.css(h, "height", window.innerHeight + "px");
                DOM.show(m);
                f(true);
                d.innerHTML = g
            } else {
                DOM.hide(m);
                f(false);
                d.innerHTML = l
            }
        }
        function f(p) {
            if (Device.Browser.Version.getMajor() != 10) {
                return
            }
            var o;
            if (e(window, "canvas")) {
                o = e(window, "canvas").parentElement
            } else {
                if (e(window.frames[0], "canvas")) {
                    o = e(window.frames[0], "canvas").parentElement
                }
            }
            if (o) {
                p ? DOM.hide(o) : DOM.show(o)
            }
        }
        function e(o, q) {
            for (var p = 0; p < o.frames.length; p++) {
                if (o.frames[p].document.getElementsByTagName(q)[0]) {
                    return o.frames[p].document.getElementsByTagName(q)[0]
                }
            }
        }
        function n() {
            window.addEventListener("load", function() {
                i();
                Util.safeRun(j)
            }, false);
            window.addEventListener("resize", function() {
                Util.safeRun(j)
            }, false);
            if (window.PointerEvent) {
                window.addEventListener("pointerdown", function() {
                    Util.delayedRun(j)
                })
            } else {
                if (window.MSPointerEvent) {
                    window.addEventListener("MSPointerDown", function() {
                        Util.delayedRun(j)
                    })
                }
            }
        }
        n()
    };
    function b() {
        return Util.isUrlTriggerParamPresent("workaroundsOff") || Util.isUrlTriggerParamPresent("workaroundsOffInVP")
    }
    return {
        workaroundForIncorrectScaleInStandaloneMode: function() {
            if (b()) {
                return
            }
            new c()
        },
        workaroundForIncorrectScaleAfterFirstOpeningInIEAndEdge: function() {
            if (b()) {
                return
            }
            new a()
        }
    }
}
;
window.DebugWidget = function() {
    var p = "debugWidget";
    var s = "debugPanelContainer";
    var F = "debugPanel";
    var h = "debugPanelSwitchSideBtn";
    var q = "debugPanelExpandCollapseBtn";
    var L = "debugPanelCloseBtn";
    var b = "viewportResolution";
    var f = "viewportResolution2";
    var c = "outerWH";
    var a = "screenWH";
    var i = "screenAvailWH";
    var l = "docOffsetWH";
    var u = "docClientWH";
    var x = "orientationID";
    var t = "removeWidgetBtn";
    var K = "emptyVPBtn";
    var H = "restoreVPBtn";
    var C = "setVPBtn";
    var w = "reloadBtn";
    var m = "refreshBtn";
    var N = "<";
    var z = ">";
    var D = "^";
    var j = "_";
    var v = "widgetRemoved";
    var I = "widgetPosition";
    var r = "widgetCollapseState";
    var A = "vpContent";
    var n = 150;
    if (inIframe()) {
        n = 185
    }
    if (inIframeDeeply()) {
        n = 220
    }
    function d() {
        if (DOM.get(Constants.DOM.viewport)) {
            return DOM.get(Constants.DOM.viewport).getAttribute("content")
        } else {
            if (DOM.get(Constants.DOM.viewportStyleTag) != null) {
                return DOM.html(Constants.DOM.viewportStyleTag)
            } else {
                return "Viewport tag was not created!"
            }
        }
    }
    function k() {
        return window.innerWidth + " x " + window.innerHeight
    }
    function J() {
        return screen.width + " x " + screen.height
    }
    function g() {
        return screen.availWidth + " x " + screen.availHeight
    }
    function G() {
        return document.documentElement.offsetWidth + " x " + document.documentElement.offsetHeight
    }
    function M() {
        return document.documentElement.clientWidth + " x " + document.documentElement.clientHeight
    }
    function o() {
        return window.outerWidth + " x " + window.outerHeight
    }
    function B() {
        DOM.addStyle("#" + p + " {display: " + (Util.recallItem(v) && Util.recallItem(v) === "true" ? "none" : "block") + ";-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;z-index: 20000;position: fixed;top: " + n + "px;width: 120px;height: 30px;line-height: normal;background-color: rgba(0, 0, 0, .6);color: white;font-size: 20px;text-align: center;padding: 3px;border: 1px solid white;}#" + s + " {display: none;z-index: 20000;position: fixed;top: 0px;padding-top: " + n + "px;padding-bottom: 1px;width: 480px;height: 100%;line-height: 16px;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}#" + s + " * {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}#" + F + " {height: 100%;background-color: rgba(0, 0, 0, .6);color: white;border: 1px solid white;}#" + F + " .debugHeader {width: 100%;background-color: rgba(0, 0, 0, .2);position: absolute;}#" + F + " .debugScroller {overflow: auto;height: 100%;padding: 5px;padding-top: 45px;font-size: 16px;line-height: 1.5;}#" + F + " button {width: 80px;height: 40px;font-size: 20px;line-height: 1;background-color: rgba(0, 0, 0, .2);border: 1px solid white;color: white;}#" + F + " .debugScroller button {width: 100px;height: 42px;font-size: 18px;line-height: 1;background-color: rgba(0, 0, 0, .2);border: 1px solid white;color: white;margin: 5px;}#" + F + " .debugScroller input {width: 100px;height: 42px;margin: 5px;}#" + F + " span {font-size: 16px;margin-left: 5px;}#" + F + " p {font-size: 20px;line-height: 1;margin: 0;padding: 0;}.debugScroller pre {white-space: pre-wrap;margin: 0;padding: 0;}.debugScroller td {background-color: transparent;}");
        DOM.add("div", p, k());
        DOM.add("div", s, "<div id='" + F + "'><div class='debugHeader'><button id='" + h + "' data-state='at-left'>" + z + "</button><button id='" + q + "' data-state='collapsed'>" + D + "</button><button id='" + L + "'>X</button><span>version: " + Constants.viewportSolutionVersion + "</span><span id='" + b + "'>(" + k() + ")</span></div><div class='debugScroller'><button id='" + t + "'>Remove this widget</button><button id='" + K + "'>Clear viewport</button><button id='" + H + "'>Restore viewport</button><button id='" + C + "'>Custom viewport</button><button id='" + w + "'>Reload</button><button id='" + m + "'>Refresh</button><input type='text'>" + (!inIframe() ? "<p>[Top frame]</p><br>" : inIframeDeeply() ? "<p>[2nd+ level frame]</p><br>" : "<p>[1st level frame]</p><br>") + "<p>Viewport is set to:</p><pre id='" + A + "'>" + d() + "</pre><br><p>User-Agent is:</p><pre>" + navigator.userAgent + "</pre><br><table><tr><th colspan='2'>Browser properties:</th></tr><tr><td>screen.width x H: </td><td id='" + a + "'>" + J() + "</td></tr><tr><td>screen.availWidth x H: </td><td id='" + i + "'>" + g() + "</td></tr><tr><td>doc.docEl.offsetWidth x H: </td><td id='" + l + "'>" + G() + "</td></tr><tr><td>doc.docEl.clientWidth x H: </td><td id='" + u + "'>" + M() + "</td></tr><tr><td>window.innerWidth x H: </td><td id='" + f + "'>" + k() + "</td></tr><tr><td>window.outerWidth x H: </td><td id='" + c + "'>" + o() + "</td></tr><tr><td>window.navigator.standalone: </td><td>" + window.navigator.standalone + "</td></tr><tr><td>window.devicePixelRatio: </td><td>" + window.devicePixelRatio + "</td></tr><tr><td>window.orientation: </td><td id='" + x + "'>" + window.orientation + "</td></tr><tr><th colspan='2'>ScalingReport properties:</th></tr><tr><td>Viewport.getViewportValue(): </td><td>" + Viewport.getViewportValue() + "</td></tr><tr><td>ScalingReport.scaleFactor(): </td><td>" + ScalingReport.scaleFactor() + "</td></tr><tr><td>ScalingReport.actualDPR(): </td><td>" + ScalingReport.actualDPR() + "</td></tr><tr><td>ScalingReport.multiplicationRatio(): </td><td>" + ScalingReport.multiplicationRatio() + "</td></tr><tr><td>ScalingReport.deviceScreenWidth(): </td><td>" + ScalingReport.deviceScreenWidth() + "</td></tr><tr><td>ScalingReport.deviceScreenHeight(): </td><td>" + ScalingReport.deviceScreenHeight() + "</td></tr><tr><td>ScalingReport.deviceScreenWideness(): </td><td>" + ScalingReport.deviceScreenWideness() + "</td></tr><tr><td>ScalingReport.deviceScreenNarrowness(): </td><td>" + ScalingReport.deviceScreenNarrowness() + "</td></tr><tr><td>ScalingReport.deviceScreenIsHighResolution(): </td><td>" + ScalingReport.deviceScreenIsHighResolution() + "</td></tr></table></div></div>")
    }
    function E() {
        DOM.text(p, k());
        DOM.text(b, "(" + k() + ")");
        DOM.text(f, k());
        DOM.text(a, J());
        DOM.text(i, g());
        DOM.text(l, G());
        DOM.text(u, M());
        DOM.text(c, o());
        DOM.text(x, window.orientation);
        DOM.text(A, d())
    }
    var e = "";
    function y() {
        e = d();
        window.addEventListener("resize", function() {
            E();
            Util.safeRun(E)
        }, false);
        window.addEventListener("orientationchange", function() {
            E();
            Util.safeRun(E)
        }, false);
        DOM.get(t).addEventListener("click", function() {
            DOM.hide(p);
            DOM.hide(s);
            Util.memoItem(v, true)
        }, false);
        DOM.get(K).addEventListener("click", function() {
            if (DOM.get(Constants.DOM.viewport)) {
                DOM.get(Constants.DOM.viewport).setAttribute("content", "")
            } else {
                if (DOM.get(Constants.DOM.viewportStyleTag) != null) {
                    DOM.html(Constants.DOM.viewportStyleTag, "")
                }
            }
        }, false);
        DOM.get(H).addEventListener("click", function() {
            if (DOM.get(Constants.DOM.viewport)) {
                DOM.get(Constants.DOM.viewport).setAttribute("content", e)
            } else {
                if (DOM.get(Constants.DOM.viewportStyleTag) != null) {
                    DOM.html(Constants.DOM.viewportStyleTag, e)
                }
            }
        }, false);
        DOM.get(C).addEventListener("click", function() {
            var S = prompt("Type custom viewport content", "width=device-width, initial-scale=1.0");
            if (!S) {
                return
            }
            if (DOM.get(Constants.DOM.viewport)) {
                DOM.get(Constants.DOM.viewport).setAttribute("content", S)
            } else {
                if (DOM.get(Constants.DOM.viewportStyleTag) != null) {
                    DOM.html(Constants.DOM.viewportStyleTag, S)
                }
            }
        }, false);
        DOM.get(w).addEventListener("click", function() {
            window.location.reload()
        }, false);
        DOM.get(m).addEventListener("click", function() {
            E()
        }, false);
        DOM.get(p).addEventListener("click", function() {
            DOM.hide(p);
            DOM.show(s)
        }, false);
        DOM.get(L).addEventListener("click", function() {
            DOM.hide(s);
            DOM.show(p)
        }, false);
        function Q() {
            DOM.html(h, N);
            DOM.css(s, "right", "0");
            DOM.css(p, "right", "0")
        }
        function P() {
            DOM.html(h, z);
            DOM.css(s, "right", "");
            DOM.css(p, "right", "")
        }
        if (Util.recallItem(I)) {
            DOM.data(h, "state", Util.recallItem(I));
            if (Util.recallItem(I) == "at-right") {
                Q()
            } else {
                P()
            }
        }
        DOM.get(h).addEventListener("click", function() {
            if (DOM.data(h, "state") == "at-left") {
                DOM.data(h, "state", "at-right");
                Util.memoItem(I, "at-right");
                Q()
            } else {
                DOM.data(h, "state", "at-left");
                Util.memoItem(I, "at-left");
                P()
            }
        }, false);
        function O() {
            DOM.html(q, j);
            DOM.css(s, "paddingTop", "0");
            DOM.css(s, "width", "100%")
        }
        function R() {
            DOM.html(q, D);
            DOM.css(s, "paddingTop", n + "px");
            DOM.css(s, "width", "480px")
        }
        if (Util.recallItem(r)) {
            DOM.data(q, "state", Util.recallItem(r));
            if (Util.recallItem(r) == "expanded") {
                O()
            } else {
                R()
            }
        }
        DOM.get(q).addEventListener("click", function() {
            if (DOM.data(q, "state") == "collapsed") {
                DOM.data(q, "state", "expanded");
                Util.memoItem(r, "expanded");
                O()
            } else {
                DOM.data(q, "state", "collapsed");
                Util.memoItem(r, "collapsed");
                R()
            }
        }, false)
    }
    return {
        init: function() {
            window.addEventListener("load", function() {
                B();
                y()
            }, false)
        }
    }
}
;
var Logger = (function() {
    return {
        logDelimiterLine: function() {
            this.log("----------------------------------------------------------------")
        },
        log: function(a) {
            if (console && console.info) {
                console.info("[INFO] [viewport.js] " + a)
            }
        },
        logError: function(a) {
            if (console && console.error) {
                console.error("[ERROR] [viewport.js] " + a)
            }
        }
    }
}
)();
var Viewport = (function() {
    function b(c) {
        Logger.logDelimiterLine();
        Logger.log("Creating viewport with next content: " + c);
        Logger.logDelimiterLine();
        var e = document.getElementById("meta-viewport");
        var d = e ? e : document.createElement("meta");
        d.setAttribute("id", Constants.DOM.viewport);
        d.setAttribute("name", Constants.DOM.viewport);
        d.setAttribute("content", c);
        if (!e) {
            document.getElementsByTagName("head")[0].appendChild(d)
        }
    }
    function a(c, d) {
        DOM.addStyle("@media screen and (orientation: landscape) {@-ms-viewport {width: " + c + "px;}}@media screen and (orientation: portrait) {@-ms-viewport {width: " + d + "px;}}").id = Constants.DOM.viewportStyleTag
    }
    return {
        setViewport: function(c) {
            this.scale = c;
            if (Device.OS.isIos()) {
                if (Device.isIphoneX()) {
                    b("user-scalable=no, width=device-width, viewport-fit=cover, initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c)
                } else {
                    b("user-scalable=no, initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c)
                }
            } else {
                b("user-scalable=no, width=device-width, initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c)
            }
        },
        setViewportAndroidWebkit: function(c) {
            var d = "target-densitydpi=" + c + ", user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0";
            b(d)
        },
        setViewportIE: function(c, d) {
            a(c, d)
        },
        setViewportExceptionalDevice: function(c) {
            b(c)
        },
        getViewportValue: function() {
            return ScalingReport.scaleFactor()
        }
    }
}
)();
var Device = (function() {
    return {
        testUserAgent: function(a) {
            return a.test(navigator.userAgent)
        },
        execUserAgent: function(a) {
            return a.exec(navigator.userAgent)
        },
        getDPR: function() {
            var a = Math.max(screen.width, screen.height);
            if (window.devicePixelRatio) {
                if (Device.isIphoneX()) {
                    return window.devicePixelRatio
                } else {
                    if (Device.isIphone6Plus()) {
                        if (a == Constants.iPhone6PlusWidenessInDIPs) {
                            return Constants.iPhone6PlusWidenessInPx / a
                        } else {
                            return Constants.iPhone6WidenessInPx / a
                        }
                    } else {
                        if ((Device.isNexus6() || Device.isNexus6P()) && !Device.Browser.isUCBrowser()) {
                            return Constants.nexus6WidenessInPx / a
                        } else {
                            if (Device.isNexus5X() && !Device.Browser.isUCBrowser()) {
                                return Constants.highResScreenThreshold / a
                            } else {
                                if (Device.isTab3_10_1() && Device.Browser.isUCBrowser()) {
                                    return Math.ceil(Constants.tab3_10_1WidenessInPx / a)
                                } else {
                                    if (Device.isXiaoMiNoteLTE() && !Device.Browser.isUCBrowser()) {
                                        return Constants.highResScreenThreshold / a
                                    } else {
                                        if (Device.isSamsungS8() && Device.Browser.isChrome()) {
                                            return Constants.SamsungS8WidenessInPx / a
                                        } else {
                                            return window.devicePixelRatio
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (Device.isLumia920() && Device.Browser.isIEMobile() && Device.Browser.Version.getMajor(true) == 10) {
                    return Constants.lumia920WidenessInPx / a
                }
                if (Device.isLumia820() && Device.Browser.isIEMobile() && Device.Browser.Version.getMajor(true) == 10) {
                    return Constants.lumia820WidenessInPx / a
                } else {
                    return null
                }
            }
        },
        isIphone: function() {
            return Device.testUserAgent(/iPhone/i) && !Device.OS.isWindowsPhone()
        },
        isIphone6Plus: function() {
            return Device.isIphone() && window.devicePixelRatio > 2
        },
        isIphoneX: function() {
            return Device.isIphone() && (Math.max(window.screen.height, window.screen.width) === 812)
        },
        isIpod: function() {
            return Device.testUserAgent(/iPod/i)
        },
        isIpad: function() {
            return Device.testUserAgent(/iPad/i) && Math.max(screen.width, screen.height) == Constants.iPadWidenessInDIPs
        },
        isIpadPro: function() {
            return Device.testUserAgent(/iPad/i) && Math.max(screen.width, screen.height) == Constants.iPadProWidenessInDIPs
        },
        isLumia820: function() {
            return Device.testUserAgent(/Lumia 820/i)
        },
        isLumia920: function() {
            return Device.testUserAgent(/Lumia 920/i)
        },
        isNexus6: function() {
            return Device.testUserAgent(/Nexus 6\s/i)
        },
        isNexus6P: function() {
            return Device.testUserAgent(/Nexus 6P\s/i)
        },
        isNexus5X: function() {
            return Device.testUserAgent(/Nexus 5X/i)
        },
        isTab3_10_1: function() {
            return Device.testUserAgent(/GT-P52/i)
        },
        isXiaoMiNoteLTE: function() {
            return Device.testUserAgent(/MI NOTE LTE/i)
        },
        isSamsungS8: function() {
            return Device.testUserAgent(/SM-G95\d+/i)
        },
        OS: (function() {
            return {
                isIos: function() {
                    return Device.isIphone() || Device.isIpod() || Device.isIpad() || Device.isIpadPro()
                },
                isAndroid: function() {
                    return Device.testUserAgent(/Android/i) && !Device.OS.isWindowsPhone()
                },
                isWindowsPhone: function() {
                    return Device.testUserAgent(/Windows\sPhone/i)
                }
            }
        }
        )(),
        Browser: (function() {
            return {
                isChrome: function() {
                    return Device.testUserAgent(/.+KHTML, like Gecko\) (?:Chrome\/[.0-9]+|CriOS\/[.0-9]+|CrMo\/[.0-9]+)(?: Mobile(\/[a-zA-Z0-9]+)?)? Safari\/[.0-9]+$/i)
                },
                isOldChrome: function() {
                    return this.isChrome() && this.Version.getMajor() < Constants.oldChromeVersionThreshold
                },
                isAndroidWebkit: function() {
                    return Device.testUserAgent(/(?:Android)(?=.+AppleWebKit)(?!.+(?:Chrome|UCBrowser))/i) && !Device.Browser.isIEMobile()
                },
                isNewAndroidWebkit: function() {
                    return Device.testUserAgent(/(?:Android)(?=.+AppleWebKit).+?Version\/4.0 Chrome\/[.0-9]+ Mobile Safari\/[.0-9]+$/i) && !Device.Browser.isIEMobile()
                },
                isOperaBrowser: function() {
                    return Device.testUserAgent(/.+OPR\/[.0-9]+/i)
                },
                isQQBrowser: function() {
                    return Device.testUserAgent(/.+MQQBrowser\/[.0-9]+/i)
                },
                isBaiduBrowser: function() {
                    return Device.testUserAgent(/baidubrowser/i)
                },
                isUCBrowser: function() {
                    return Device.testUserAgent(/UCBrowser/i)
                },
                isUCBrowserChinese: function() {
                    return Device.testUserAgent(/zh-cn/i)
                },
                isIosSafari: function() {
                    return Device.OS.isIos() && !Device.Browser.isUCBrowser() && !Device.Browser.isChrome()
                },
                isIosSafariStandalone: function() {
                    return window.navigator.standalone
                },
                isIEMobile: function() {
                    return Device.testUserAgent(/Windows\sPhone.+Trident/i)
                },
                isIEMobileDesktopMode: function() {
                    return Device.testUserAgent(/Trident.+WPDesktop/i)
                },
                isEdgeMobile: function() {
                    return Device.testUserAgent(/Windows\sPhone.+Edge/i)
                },
                isBdBrowser: function() {
                    return Device.testUserAgent(/bdbrowser/i)
                },
                Version: (function() {
                    var b = null;
                    function a(c) {
                        if (c) {
                            return c[1].replace(new RegExp("_","g"), ".")
                        } else {
                            return null
                        }
                    }
                    return {
                        getRaw: function(c) {
                            if (c === undefined) {
                                c = false
                            }
                            if (b) {
                                return b
                            }
                            if (Device.Browser.isQQBrowser()) {
                                b = a(Device.execUserAgent(/MQQBrowser\/(\S+)/i))
                            } else {
                                if (Device.Browser.isOperaBrowser()) {
                                    b = a(Device.execUserAgent(/OPR\/(\S+)/i))
                                } else {
                                    if (Device.Browser.isBaiduBrowser()) {
                                        b = a(Device.execUserAgent(/baidubrowser\/(\S+)/i))
                                    } else {
                                        if (Device.Browser.isEdgeMobile()) {
                                            b = a(Device.execUserAgent(/Edge\/(\S+)/i))
                                        } else {
                                            if (!c && Device.Browser.isUCBrowser()) {
                                                b = a(Device.execUserAgent(/UCBrowser\/(\S+)/i))
                                            } else {
                                                if (!c && Device.Browser.isBdBrowser()) {
                                                    b = a(Device.execUserAgent(/bdbrowser_i18n\/(\S+)/i))
                                                } else {
                                                    if (Device.Browser.isChrome()) {
                                                        b = a(Device.execUserAgent(/(?:Chrome|CriOS|CrMo)\/(\S+)/i))
                                                    } else {
                                                        if (Device.Browser.isIEMobile()) {
                                                            b = a(Device.execUserAgent(/(?:rv:|IEMobile\/|MSIE\s)(\S[^);]+)/i))
                                                        } else {
                                                            if (Device.Browser.isAndroidWebkit()) {
                                                                b = a(Device.execUserAgent(/Version\/(\S+)/i))
                                                            } else {
                                                                if (Device.Browser.isNewAndroidWebkit()) {
                                                                    b = a(Device.execUserAgent(/Chrome\/(\S+)/i))
                                                                } else {
                                                                    if (Device.OS.isIos()) {
                                                                        b = a(Device.execUserAgent(/OS\s(\d\S*)/i))
                                                                    } else {
                                                                        b = null
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return b
                        },
                        getMajor: function(c) {
                            if (c === undefined) {
                                c = false
                            }
                            if (this.getRaw(c)) {
                                return this.getRaw(c).split(".")[0]
                            } else {
                                return null
                            }
                        },
                        getMinor: function(c) {
                            if (c === undefined) {
                                c = false
                            }
                            if (this.getRaw(c)) {
                                return this.getRaw(c).split(".")[1]
                            } else {
                                return null
                            }
                        },
                        versionCompare: function(h, g) {
                            if (typeof h + typeof g != "stringstring") {
                                return false
                            }
                            var e = h.split(".");
                            var d = g.split(".");
                            var f = 0;
                            var c = Math.max(e.length, d.length);
                            for (; f < c; f++) {
                                if ((e[f] && !d[f] && parseInt(e[f]) > 0) || (parseInt(e[f]) > parseInt(d[f]))) {
                                    return 1
                                } else {
                                    if ((d[f] && !e[f] && parseInt(d[f]) > 0) || (parseInt(e[f]) < parseInt(d[f]))) {
                                        return -1
                                    }
                                }
                            }
                            return 0
                        },
                        compareTo: function(d, c) {
                            if (c === undefined) {
                                c = false
                            }
                            return this.versionCompare(this.getRaw(c), d)
                        }
                    }
                }
                )()
            }
        }
        )(),
        Screen: (function() {
            var b = Constants.mobileDevicesUniqueResolutions;
            function c(e) {
                if (Device.Browser.isOldChrome() || Device.Browser.isAndroidWebkit() || Device.Browser.isBdBrowser() || (Device.OS.isAndroid() && Device.Browser.isUCBrowser() && (Device.Browser.Version.getMajor() <= 11 && Device.Browser.Version.getMinor() < 4))) {
                    return e
                } else {
                    return Math.floor(e * Device.getDPR())
                }
            }
            function a(e) {
                for (var f = 0; f < b.length; f++) {
                    if (b[f] / e < 1) {
                        return b[f - 1]
                    }
                }
                return b[b.length - 1]
            }
            function d(e) {
                return (e % 2 == 0) ? e : e + 1
            }
            return {
                getWidth: function() {
                    return c(screen.width)
                },
                getHeight: function() {
                    return c(screen.height)
                },
                getWideness: function() {
                    return a(Math.max(this.getWidth(), this.getHeight()))
                },
                getNarrowness: function() {
                    return d(Math.min(this.getWidth(), this.getHeight()))
                },
                isHighResolution: function() {
                    return this.getWideness() >= Constants.highResScreenThreshold
                }
            }
        }
        )()
    }
}
)();
var ViewportManager = (function() {
    var l;
    var i;
    var j;
    function b() {
        for (var m in Constants.exceptionalDevices) {
            if (Device.testUserAgent(new RegExp(m,"i"))) {
                l = Constants.exceptionalDevices[m];
                return true
            }
        }
        l = null;
        return false
    }
    function h() {
        if (l != undefined) {
            return l
        } else {
            b();
            return l
        }
    }
    function g() {
        if (Util.isUrlTriggerParamPresent("iPadProCorrectScale")) {
            return Constants.iPadProWidenessInDIPs
        }
        if (Device.isIpad() || Device.isIpadPro()) {
            return Constants.maxIpadSupportedResolution
        } else {
            if (Device.isIphoneX()) {
                return Constants.maxiPhoneXSupportedResolution
            } else {
                return Constants.maxSupportedResolution
            }
        }
    }
    function k() {
        i = Device.Screen.isHighResolution() ? Device.Screen.getWideness() / g() : 1;
        j = i / Device.getDPR()
    }
    function a(m) {
        return Math.round(m > g() ? m / (j * Device.getDPR()) : m)
    }
    function f() {
        ScalingReport.scaleFactor(j);
        ScalingReport.actualDPR(Device.getDPR());
        ScalingReport.deviceScreenWidth(Device.Screen.getWidth());
        ScalingReport.deviceScreenHeight(Device.Screen.getHeight());
        ScalingReport.deviceScreenWideness(Device.Screen.getWideness());
        ScalingReport.deviceScreenNarrowness(Device.Screen.getNarrowness());
        ScalingReport.deviceScreenIsHighResolution(Device.Screen.isHighResolution());
        ScalingReport.browserVersionRaw(Device.Browser.Version.getRaw());
        ScalingReport.browserVersionMajor(Device.Browser.Version.getMajor());
        ScalingReport.browserVersionMinor(Device.Browser.Version.getMinor());
        ScalingReport.browserVersionRawBase(Device.Browser.Version.getRaw(true));
        ScalingReport.browserVersionMajorBase(Device.Browser.Version.getMajor(true));
        ScalingReport.browserVersionMinorBase(Device.Browser.Version.getMinor(true))
    }
    function d() {
        if (inIframe() || Util.isUrlTriggerParamPresent("noVP")) {
            return
        }
        if (b()) {
            Viewport.setViewportExceptionalDevice(h())
        } else {
            if (Device.Browser.isAndroidWebkit()) {
                var n = Device.Screen.isHighResolution() ? "medium-dpi" : "device-dpi";
                Viewport.setViewportAndroidWebkit(n)
            } else {
                if ((Device.Browser.isIEMobile() || Device.Browser.isEdgeMobile()) && !Device.Browser.isIEMobileDesktopMode()) {
                    var o = a(Device.Screen.getWideness());
                    var m = a(Device.Screen.getNarrowness());
                    Viewport.setViewportIE(o, m)
                } else {
                    Viewport.setViewport(j)
                }
            }
        }
    }
    function c() {
        if (inIframe()) {
            return
        }
        if (Device.isIphone() && Device.Browser.isIosSafariStandalone() && Device.Browser.Version.compareTo("8.3") >= 0 && Device.Browser.Version.compareTo("9.0") <= 0) {
            new WorkaroundManager().workaroundForIncorrectScaleInStandaloneMode()
        }
        if (Device.Browser.isIEMobile() || Device.Browser.isEdgeMobile()) {
            new WorkaroundManager().workaroundForIncorrectScaleAfterFirstOpeningInIEAndEdge()
        }
    }
    function e() {
        if (Util.isUrlTriggerParamPresent("debugInVP") || Util.recallItem("debugInVP")) {
            Util.memoItem("debugInVP", "debugInVP");
            new DebugWidget().init()
        }
    }
    return {
        init: function() {
            k();
            f();
            d();
            c();
            e()
        }
    }
}
)();
