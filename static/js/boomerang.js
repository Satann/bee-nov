/*
 * Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
 * Copyright (c) 2011-2012, Log-Normal, Inc.  All rights reserved.
 * Copyright (c) 2012-2017, SOASTA, Inc. All rights reserved.
 * Copyright (c) 2017, Akamai Technologies, Inc. All rights reserved.
 * Copyrights licensed under the BSD License. See the accompanying LICENSE.txt file for terms.
 */
/* JavaScript MD5 1.0.1 Copyright 2011, Sebastian Tschan. Licensed under the MIT license. */
/* Boomerang Version: 1.571.0 b6042ad58ed5e3d5254653e63beeab81eeab2730 */

function BOOMR_check_doc_domain(a) {
    if (window) {
        if (!a) {
            if (window.parent === window || !document.getElementById("boomr-if-as")) return;
            if (window.BOOMR && BOOMR.boomerang_frame && BOOMR.window) try {
                BOOMR.boomerang_frame.document.domain !== BOOMR.window.document.domain && (BOOMR.boomerang_frame.document.domain = BOOMR.window.document.domain)
            } catch (b) {
                BOOMR.isCrossOriginError(b) || BOOMR.addError(b, "BOOMR_check_doc_domain.domainFix")
            }
            a = document.domain
        }
        if (-1 !== a.indexOf(".")) {
            try {
                window.parent.document;
                return
            } catch (b) {
                document.domain = a
            }
            try {
                window.parent.document;
                return
            } catch (b) {
                a = a.replace(/^[\w\-]+\./, "")
            }
            BOOMR_check_doc_domain(a)
        }
    }
}
BOOMR_start = (new Date).getTime();
BOOMR_check_doc_domain();
! function (a) {
    var b, c, d, e, f, g, h, i = a;
    a.parent !== a && document.getElementById("boomr-if-as") && "script" === document.getElementById("boomr-if-as").nodeName.toLowerCase() && (a = a.parent);
    d = a.document;
    a.BOOMR || (a.BOOMR = {});
    BOOMR = a.BOOMR;
    if (!BOOMR.version) {
        BOOMR.version = "1.571.0";
        BOOMR.window = a;
        BOOMR.boomerang_frame = i;
        BOOMR.plugins || (BOOMR.plugins = {});
        ! function () {
            try {
                void 0 !== new a.CustomEvent("CustomEvent") && (e = function (b, c) {
                    return new a.CustomEvent(b, c)
                })
            } catch (b) {}
            try {
                !e && d.createEvent && d.createEvent("CustomEvent") && (e = function (a, b) {
                    var c = d.createEvent("CustomEvent");
                    b = b || {
                        cancelable: !1,
                        bubbles: !1
                    };
                    c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail);
                    return c
                })
            } catch (b) {}!e && d.createEventObject && (e = function (a, b) {
                var c = d.createEventObject();
                c.type = c.propertyName = a;
                c.detail = b.detail;
                return c
            });
            e || (e = function () {})
        }();
        f = function (a, b, c) {
            function f() {
                try {
                    d.dispatchEvent ? d.dispatchEvent(g) : d.fireEvent && d.fireEvent("onpropertychange", g)
                } catch (b) {
                    BOOMR.debug("Error when dispatching " + a)
                }
            }
            var g = e(a, {
                detail: b
            });
            g && (c ? BOOMR.setImmediate(f) : f())
        };
        if (void 0 !== d.hidden) {
            g = "visibilityState";
            h = "visibilitychange"
        } else if (void 0 !== d.mozHidden) {
            g = "mozVisibilityState";
            h = "mozvisibilitychange"
        } else if (void 0 !== d.msHidden) {
            g = "msVisibilityState";
            h = "msvisibilitychange"
        } else if (void 0 !== d.webkitHidden) {
            g = "webkitVisibilityState";
            h = "webkitvisibilitychange"
        }
        b = {
            beacon_url: "",
            beacon_urls_allowed: ["^//[a-z0-9]+\\.akstat\\.io/?$"],
            beacon_type: "AUTO",
            beacon_auth_key: "Authorization",
            beacon_auth_token: void 0,
            site_domain: a.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/, "$1").toLowerCase(),
            user_ip: "",
            autorun: !0,
            hasSentPageLoadBeacon: !1,
            r: void 0,
            r2: void 0,
            events: {
                page_ready: [],
                page_unload: [],
                before_unload: [],
                dom_loaded: [],
                visibility_changed: [],
                prerender_to_visible: [],
                before_beacon: [],
                beacon: [],
                page_load_beacon: [],
                xhr_load: [],
                click: [],
                form_submit: [],
                config: [],
                xhr_init: [],
                spa_init: [],
                spa_navigation: [],
                xhr_send: [],
                xhr_error: [],
                error: [],
                xhr_send: [],
                netinfo: [],
                rage_click: []
            },
            public_events: {
                before_beacon: "onBeforeBoomerangBeacon",
                beacon: "onBoomerangBeacon",
                onboomerangloaded: "onBoomerangLoaded"
            },
            translate_events: {
                onbeacon: "beacon",
                onconfig: "config",
                onerror: "error",
                onxhrerror: "xhr_error"
            },
            listenerCallbacks: {},
            vars: {},
            singleBeaconVars: {},
            varPriority: {
                "-1": {},
                1: {}
            },
            errors: {},
            disabled_plugins: {},
            localStorageSupported: !1,
            LOCAL_STORAGE_PREFIX: "_boomr_",
            xb_handler: function (c) {
                return function (d) {
                    var e;
                    d || (d = a.event);
                    d.target ? e = d.target : d.srcElement && (e = d.srcElement);
                    3 === e.nodeType && (e = e.parentNode);
                    e && "OBJECT" === e.nodeName.toUpperCase() && "application/x-shockwave-flash" === e.type || b.fireEvent(c, e)
                }
            },
            clearEvents: function () {
                var a;
                for (a in this.events) this.events.hasOwnProperty(a) && (this.events[a] = [])
            },
            clearListeners: function () {
                var a;
                for (a in b.listenerCallbacks)
                    if (b.listenerCallbacks.hasOwnProperty(a))
                        for (; b.listenerCallbacks[a].length;) BOOMR.utils.removeListener(b.listenerCallbacks[a][0].el, a, b.listenerCallbacks[a][0].fn);
                b.listenerCallbacks = {}
            },
            fireEvent: function (a, b) {
                var c, d, e, g;
                a = a.toLowerCase();
                this.translate_events[a] && (a = this.translate_events[a]);
                if (this.events.hasOwnProperty(a)) {
                    this.public_events.hasOwnProperty(a) && f(this.public_events[a], b);
                    e = this.events[a];
                    "before_beacon" !== a && "beacon" !== a && BOOMR.real_sendBeacon();
                    g = e.length;
                    for (c = 0; c < g; c++) try {
                        d = e[c];
                        d.fn.call(d.scope, b, d.cb_data)
                    } catch (h) {
                        BOOMR.addError(h, "fireEvent." + a + "<" + c + ">")
                    }
                    for (c = 0; c < g; c++)
                        if (e[c].once) {
                            e.splice(c, 1);
                            g--;
                            c--
                        }
                }
            },
            spaNavigation: function () {
                b.onloadfired = !0
            },
            beaconUrlAllowed: function (a) {
                if (!b.beacon_urls_allowed || 0 === b.beacon_urls_allowed.length) return !0;
                for (var c = 0; c < b.beacon_urls_allowed.length; c++) {
                    if (new RegExp(b.beacon_urls_allowed[c]).exec(a)) return !0
                }
                return !1
            },
            checkLocalStorageSupport: function () {
                var c = b.LOCAL_STORAGE_PREFIX + "clss";
                b.localStorageSupported = !1;
                if (a.JSON && a.localStorage) try {
                    a.localStorage.setItem(c, c);
                    b.localStorageSupported = a.localStorage.getItem(c) === c;
                    a.localStorage.removeItem(c)
                } catch (d) {
                    b.localStorageSupported = !1
                }
            }
        };
        c = {
            t_start: BOOMR_start,
            t_end: void 0,
            url: "",
            config_url: null,
            loadedLate: !1,
            constants: {
                BEACON_TYPE_SPAS: ["spa", "spa_hard"],
                MAX_GET_LENGTH: 2e3
            },
            session: {
                domain: null,
                ID: Math.random().toString(36).replace(/^0\./, ""),
                start: void 0,
                length: 0
            },
            utils: {
                hasPostMessageSupport: function () {
                    return !(!a.postMessage || "function" != typeof a.postMessage && "object" != typeof a.postMessage)
                },
                objectToString: function (a, b, c) {
                    var d, e = [];
                    if (!a || "object" != typeof a) return a;
                    void 0 === b && (b = "\n\t");
                    c || (c = 0);
                    if (BOOMR.utils.isArray(a)) {
                        for (d = 0; d < a.length; d++) c > 0 && null !== a[d] && "object" == typeof a[d] ? e.push(this.objectToString(a[d], b + ("\n\t" === b ? "\t" : ""), c - 1)) : "&" === b ? e.push(encodeURIComponent(a[d])) : e.push(a[d]);
                        b = ","
                    } else
                        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c > 0 && null !== a[d] && "object" == typeof a[d] ? e.push(encodeURIComponent(d) + "=" + this.objectToString(a[d], b + ("\n\t" === b ? "\t" : ""), c - 1)) : "&" === b ? e.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d])) : e.push(d + "=" + a[d]));
                    return e.join(b)
                },
                getCookie: function (a) {
                    if (!a) return null;
                    a = " " + a + "=";
                    var b, c;
                    c = " " + d.cookie + ";";
                    if ((b = c.indexOf(a)) >= 0) {
                        b += a.length;
                        c = c.substring(b, c.indexOf(";", b)).replace(/^"/, "").replace(/"$/, "");
                        return c
                    }
                },
                setCookie: function (a, b, c) {
                    var e, f, g, h, i;
                    if (!a || !BOOMR.session.domain || void 0 === b) {
                        BOOMR.debug("Invalid parameters or site domain: " + a + "/" + b + "/" + BOOMR.session.domain);
                        BOOMR.addVar("nocookie", 1);
                        return !1
                    }
                    e = this.objectToString(b, "&");
                    f = a + '="' + e + '"';
                    if (f.length < 500) {
                        h = [f, "path=/", "domain=" + BOOMR.session.domain];
                        if ("number" == typeof c) {
                            i = new Date;
                            i.setTime(i.getTime() + 1e3 * c);
                            i = i.toGMTString();
                            h.push("expires=" + i)
                        }
                        d.cookie = h.join("; ");
                        g = this.getCookie(a);
                        if (e === g || void 0 === g && "number" == typeof c && c <= 0) return !0;
                        BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n" + e + "\n" + g)
                    } else BOOMR.warn("Cookie too long: " + f.length + " " + f);
                    BOOMR.addVar("nocookie", 1);
                    return !1
                },
                getSubCookies: function (a) {
                    var b, c, d, e, f = !1,
                        g = {};
                    if (!a) return null;
                    if ("string" != typeof a) {
                        BOOMR.debug("TypeError: cookie is not a string: " + typeof a);
                        return null
                    }
                    b = a.split("&");
                    for (c = 0, d = b.length; c < d; c++) {
                        e = b[c].split("=");
                        if (e[0]) {
                            e.push("");
                            g[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
                            f = !0
                        }
                    }
                    return f ? g : null
                },
                removeCookie: function (a) {
                    return this.setCookie(a, {}, -86400)
                },
                getLocalStorage: function (c) {
                    var d, e;
                    if (!c || !b.localStorageSupported) return null;
                    try {
                        d = a.localStorage.getItem(b.LOCAL_STORAGE_PREFIX + c);
                        if (null === d) return;
                        e = a.JSON.parse(d)
                    } catch (f) {
                        BOOMR.warn(f);
                        return null
                    }
                    if (!e || "object" != typeof e.items) {
                        this.removeLocalStorage(c);
                        return null
                    }
                    if (!("number" == typeof e.expires && BOOMR.now() >= e.expires)) return e.items;
                    this.removeLocalStorage(c)
                },
                setLocalStorage: function (c, d, e) {
                    var f, g, h;
                    if (!c || !b.localStorageSupported || "object" != typeof d) return !1;
                    f = {
                        items: d
                    };
                    "number" == typeof e && (f.expires = BOOMR.now() + 1e3 * e);
                    g = a.JSON.stringify(f);
                    if (g.length < 5e4) {
                        try {
                            a.localStorage.setItem(b.LOCAL_STORAGE_PREFIX + c, g);
                            h = a.localStorage.getItem(b.LOCAL_STORAGE_PREFIX + c);
                            if (g === h) return !0
                        } catch (i) {}
                        BOOMR.warn("Saved storage value doesn't match what we tried to set:\n" + g + "\n" + h)
                    } else BOOMR.warn("Storage items too large: " + g.length + " " + g);
                    return !1
                },
                removeLocalStorage: function (c) {
                    if (!c || !b.localStorageSupported) return !1;
                    try {
                        a.localStorage.removeItem(b.LOCAL_STORAGE_PREFIX + c);
                        return !0
                    } catch (d) {}
                    return !1
                },
                cleanupURL: function (a, c) {
                    if (!a || BOOMR.utils.isArray(a)) return "";
                    b.strip_query_string && (a = a.replace(/\?.*/, "?qs-redacted"));
                    if (void 0 !== c && a && a.length > c) {
                        var d = a.indexOf("?");
                        a = -1 !== d && d < c ? a.substr(0, d) + "?..." : a.substr(0, c - 3) + "..."
                    }
                    return a
                },
                hashQueryString: function (a, b) {
                    if (!a) return a;
                    if (!a.match) {
                        BOOMR.addError("TypeError: Not a string", "hashQueryString", typeof a);
                        return ""
                    }
                    a.match(/^\/\//) && (a = location.protocol + a);
                    if (!a.match(/^(https?|file):/)) {
                        BOOMR.error("Passed in URL is invalid: " + a);
                        return ""
                    }
                    b && (a = a.replace(/#.*/, ""));
                    return BOOMR.utils.MD5 ? a.replace(/\?([^#]*)/, function (a, b) {
                        return "?" + (b.length > 10 ? BOOMR.utils.MD5(b) : b)
                    }) : a
                },
                pluginConfig: function (a, b, c, d) {
                    var e, f = 0;
                    if (!b || !b[c]) return !1;
                    for (e = 0; e < d.length; e++)
                        if (void 0 !== b[c][d[e]]) {
                            a[d[e]] = b[c][d[e]];
                            f++
                        } return f > 0
                },
                arrayFilter: function (a, b) {
                    var c = [];
                    if (!(this.isArray(a) || a && "number" == typeof a.length) || "function" != typeof b) return c;
                    if ("function" == typeof a.filter) c = a.filter(b);
                    else
                        for (var d, e = -1, f = a.length; ++e < f;) {
                            d = a[e];
                            b(d, e, a) && (c[c.length] = d)
                        }
                    return c
                },
                arrayFind: function (a, b) {
                    if ((this.isArray(a) || a && "number" == typeof a.length) && "function" == typeof b) {
                        if ("function" == typeof a.find) return a.find(b);
                        for (var c, d = -1, e = a.length; ++d < e;) {
                            c = a[d];
                            if (b(c, d, a)) return c
                        }
                    }
                },
                isMutationObserverSupported: function () {
                    return !(a && a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/Trident.*rv[ :]*11\./)) && a && a.MutationObserver && "function" == typeof a.MutationObserver
                },
                addObserver: function (a, b, c, d, e, f) {
                    function g(a) {
                        var b = !1;
                        if (h.timer) {
                            clearTimeout(h.timer);
                            h.timer = null
                        }
                        if (d) {
                            b = d.call(f, a, e);
                            b || (d = null)
                        }
                        if (!b && h.observer) {
                            h.observer.disconnect();
                            h.observer = null
                        }
                        "number" == typeof b && b > 0 && (h.timer = setTimeout(g, b))
                    }
                    var h = {
                        observer: null,
                        timer: null
                    };
                    if (!this.isMutationObserverSupported() || !d || !a) return null;
                    h.observer = new BOOMR.window.MutationObserver(g);
                    c && (h.timer = setTimeout(g, h.timeout));
                    h.observer.observe(a, b);
                    return h
                },
                addListener: function (a, c, d, e) {
                    var f = !1;
                    if (a.addEventListener) {
                        e && BOOMR.browser.supportsPassive() && (f = {
                            capture: !1,
                            passive: !0
                        });
                        a.addEventListener(c, d, f)
                    } else a.attachEvent && a.attachEvent("on" + c, d);
                    b.listenerCallbacks[c] = b.listenerCallbacks[c] || [];
                    b.listenerCallbacks[c].push({
                        el: a,
                        fn: d
                    })
                },
                removeListener: function (a, c, d) {
                    var e;
                    a.removeEventListener ? a.removeEventListener(c, d, !1) : a.detachEvent && a.detachEvent("on" + c, d);
                    if (b.listenerCallbacks.hasOwnProperty(c))
                        for (var e = 0; e < b.listenerCallbacks[c].length; e++)
                            if (d === b.listenerCallbacks[c][e].fn && a === b.listenerCallbacks[c][e].el) {
                                b.listenerCallbacks[c].splice(e, 1);
                                return
                            }
                },
                isArray: function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                inArray: function (a, b) {
                    var c;
                    if (void 0 === a || void 0 === b || !b.length) return !1;
                    for (c = 0; c < b.length; c++)
                        if (b[c] === a) return !0;
                    return !1
                },
                getQueryParamValue: function (a, b) {
                    var c, d, e, f;
                    if (!a) return null;
                    if ("string" == typeof b) {
                        c = BOOMR.window.document.createElement("a");
                        c.href = b
                    } else c = "object" == typeof b && "string" == typeof b.search ? b : BOOMR.window.location;
                    d = c.search.slice(1).split(/&/);
                    for (e = 0; e < d.length; e++)
                        if (d[e]) {
                            f = d[e].split("=");
                            if (f.length && f[0] === a) return f.length > 1 ? decodeURIComponent(f.splice(1).join("=").replace(/\+/g, " ")) : ""
                        } return null
                },
                generateUUID: function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                        var b = 16 * Math.random() | 0;
                        return ("x" === a ? b : 3 & b | 8).toString(16)
                    })
                },
                generateId: function (a) {
                    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".substr(0, a || 40).replace(/x/g, function (a) {
                        var a = (Math.random() || .01).toString(36);
                        return "0" === a ? "0" : a.substr(2, 1)
                    })
                },
                serializeForUrl: function (a) {
                    if (BOOMR.utils.Compression && BOOMR.utils.Compression.jsUrl) return BOOMR.utils.Compression.jsUrl(a);
                    if (window.JSON) return JSON.stringify(a);
                    BOOMR.debug("JSON is not supported");
                    return ""
                },
                getMyURL: function () {
                    var a, b = document.currentScript || document.getElementById("boomr-if-as") || document.getElementById("boomr-scr-as");
                    if (b) return b.src;
                    var c, d = document.getElementsByTagName("script");
                    for (c = d.length; c--;)
                        if ("interactive" === d[c].readyState) return d[c].src;
                    try {
                        throw new Error
                    } catch (e) {
                        if ("stack" in e) {
                            a = this.arrayFilter(e.stack.split(/\n/), function (a) {
                                return a.match(/https?:\/\//)
                            });
                            if (a && a.length) return a[0].replace(/.*(https?:\/\/.+?)(:\d+)+\D*$/m, "$1")
                        }
                    }
                    return ""
                },
                scroll: function () {
                    var b = void 0 !== a.pageXOffset,
                        c = "CSS1Compat" === (a.document.compatMode || ""),
                        d = {
                            x: 0,
                            y: 0
                        };
                    if (b)
                        if ("function" == typeof a.pageXOffset) {
                            d.x = a.pageXOffset();
                            d.y = a.pageYOffset()
                        } else {
                            d.x = a.pageXOffset;
                            d.y = a.pageYOffset
                        }
                    else if (c) {
                        d.x = a.document.documentElement.scrollLeft;
                        d.y = a.document.documentElement.scrollTop
                    } else {
                        d.x = a.document.body.scrollLeft;
                        d.y = a.document.body.scrollTop
                    }
                    "number" == typeof d.sx && (d.sx = Math.round(d.sx));
                    "number" == typeof d.sy && (d.sy = Math.round(d.sy));
                    return d
                },
                windowHeight: function () {
                    return a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight
                },
                windowWidth: function () {
                    return a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth
                }
            },
            browser: {
                results: {},
                supportsPassive: function () {
                    if (void 0 === BOOMR.browser.results.supportsPassive) {
                        BOOMR.browser.results.supportsPassive = !1;
                        if (!Object.defineProperty) return !1;
                        try {
                            var a = Object.defineProperty({}, "passive", {
                                get: function () {
                                    BOOMR.browser.results.supportsPassive = !0
                                }
                            });
                            window.addEventListener("test", null, a)
                        } catch (b) {}
                    }
                    return BOOMR.browser.results.supportsPassive
                }
            },
            init: function (c) {
                var e, f, g = ["autorun", "beacon_auth_key", "beacon_auth_token", "beacon_url", "beacon_type", "site_domain", "strip_query_string", "user_ip"];
                BOOMR_check_doc_domain();
                c || (c = {});
                void 0 !== c.log && (this.log = c.log);
                this.log || (this.log = function () {});
                if (!this.pageId) {
                    this.pageId = BOOMR.utils.generateId(8);
                    BOOMR.debug("Generated PageID: " + this.pageId)
                }
                if (c.primary && b.handlers_attached) return this;
                void 0 !== c.site_domain && (this.session.domain = c.site_domain);
                void 0 !== c.autorun && (b.autorun = c.autorun);
                for (f in this.plugins)
                    if (this.plugins.hasOwnProperty(f)) {
                        if (c[f] && c[f].hasOwnProperty("enabled") && !1 === c[f].enabled) {
                            b.disabled_plugins[f] = 1;
                            "function" == typeof this.plugins[f].disable && this.plugins[f].disable();
                            continue
                        }
                        if (b.disabled_plugins[f]) {
                            if (!c[f] || !c[f].hasOwnProperty("enabled") || !0 !== c[f].enabled) continue;
                            "function" == typeof this.plugins[f].enable && this.plugins[f].enable();
                            delete b.disabled_plugins[f]
                        }
                        if ("function" == typeof this.plugins[f].init) try {
                            this.plugins[f].init(c)
                        } catch (i) {
                            BOOMR.addError(i, f + ".init")
                        }
                    } for (e = 0; e < g.length; e++) void 0 !== c[g[e]] && (b[g[e]] = c[g[e]]);
                if (b.handlers_attached) return this;
                if (!b.onloadfired && (void 0 === c.autorun || !1 !== c.autorun)) {
                    BOOMR.hasBrowserOnloadFired() && (BOOMR.loadedLate = !0);
                    BOOMR.attach_page_ready(BOOMR.page_ready_autorun)
                }
                BOOMR.utils.addListener(a, "DOMContentLoaded", function () {
                    b.fireEvent("dom_loaded")
                });
                BOOMR.fireEvent("config", c);
                BOOMR.subscribe("config", function (a) {
                    a.beacon_url && (b.beacon_url = a.beacon_url)
                });
                BOOMR.subscribe("spa_navigation", b.spaNavigation, null, b);
                ! function () {
                    var c, e;
                    if (void 0 !== h) {
                        BOOMR.utils.addListener(d, h, function () {
                            b.fireEvent("visibility_changed")
                        });
                        b.lastVisibilityState = BOOMR.visibilityState();
                        BOOMR.subscribe("visibility_changed", function () {
                            var a = BOOMR.visibilityState();
                            BOOMR.lastVisibilityEvent[a] = BOOMR.now();
                            BOOMR.debug("Visibility changed from " + b.lastVisibilityState + " to " + a);
                            if ("prerender" === b.lastVisibilityState && "prerender" !== a) {
                                BOOMR.addVar("vis.pre", "1");
                                b.fireEvent("prerender_to_visible")
                            }
                            b.lastVisibilityState = a
                        })
                    }
                    BOOMR.utils.addListener(d, "mouseup", b.xb_handler("click"));
                    c = d.getElementsByTagName("form");
                    for (e = 0; e < c.length; e++) BOOMR.utils.addListener(c[e], "submit", b.xb_handler("form_submit"));
                    a.onpagehide || null === a.onpagehide || BOOMR.utils.addListener(a, "unload", function () {
                        BOOMR.window = a = null
                    })
                }();
                b.handlers_attached = !0;
                return this
            },
            attach_page_ready: function (b) {
                BOOMR.hasBrowserOnloadFired() ? this.setImmediate(b, null, null, BOOMR) : a.onpagehide || null === a.onpagehide ? BOOMR.utils.addListener(a, "pageshow", b) : BOOMR.utils.addListener(a, "load", b)
            },
            page_ready_autorun: function (a) {
                b.autorun && BOOMR.page_ready(a, !0)
            },
            page_ready: function (c, d) {
                var e;
                if (!d && "number" == typeof c) {
                    e = c;
                    c = null
                }
                c || (c = a.event);
                c || (c = {
                    name: "load"
                });
                if (d) {
                    if ("number" == typeof a.BOOMR_page_ready) {
                        c.timing = c.timing || {};
                        c.timing.loadEventEnd = a.BOOMR_page_ready;
                        BOOMR.addVar("pr", 1, !0)
                    }
                } else {
                    c.timing = c.timing || {};
                    e ? c.timing.loadEventEnd = e : "number" == typeof a.BOOMR_page_ready ? c.timing.loadEventEnd = a.BOOMR_page_ready : c.timing.loadEventEnd = BOOMR.now();
                    BOOMR.addVar("pr", 1, !0)
                }
                if (b.onloadfired) return this;
                b.fireEvent("page_ready", c);
                b.onloadfired = !0;
                return this
            },
            hasBrowserOnloadFired: function () {
                var b = BOOMR.getPerformance();
                return d.readyState && "complete" === d.readyState || b && b.timing && b.timing.loadEventStart > 0 || a.BOOMR_onload > 0
            },
            onloadFired: function () {
                return b.onloadfired
            },
            setImmediate: function (b, c, d, e) {
                var f, g;
                f = function () {
                    b.call(e || null, c, d || {}, g);
                    f = null
                };
                a.requestIdleCallback ? a.requestIdleCallback(f, {
                    timeout: 1e3
                }) : a.setImmediate ? a.setImmediate(f) : setTimeout(f, 10)
            },
            now: function () {
                return Date.now || function () {
                    return (new Date).getTime()
                }
            }(),
            getPerformance: function () {
                try {
                    if (BOOMR.window) return "performance" in BOOMR.window && BOOMR.window.performance ? BOOMR.window.performance : BOOMR.window.msPerformance || BOOMR.window.webkitPerformance || BOOMR.window.mozPerformance
                } catch (a) {}
            },
            hrNow: function () {
                var a, b, c = BOOMR.getPerformance();
                if (c && c.now) a = c.now();
                else {
                    b = BOOMR.plugins.RT && BOOMR.plugins.RT.navigationStart && BOOMR.plugins.RT.navigationStart() || BOOMR.t_lstart || BOOMR.t_start;
                    a = BOOMR.now() - b
                }
                return a
            },
            visibilityState: void 0 === g ? function () {
                return "visible"
            } : function () {
                return d[g]
            },
            lastVisibilityEvent: {},
            registerEvent: function (a) {
                if (b.events.hasOwnProperty(a)) return this;
                b.events[a] = [];
                return this
            },
            disable: function () {
                b.clearEvents();
                b.clearListeners()
            },
            fireEvent: function (a, c) {
                return b.fireEvent(a, c)
            },
            subscribe: function (c, d, e, f, g) {
                var h, i, j;
                c = c.toLowerCase();
                b.translate_events[c] && (c = b.translate_events[c]);
                b.events.hasOwnProperty(c) || (b.events[c] = []);
                j = b.events[c];
                for (h = 0; h < j.length; h++) {
                    i = j[h];
                    if (i && i.fn === d && i.cb_data === e && i.scope === f) return this
                }
                j.push({
                    fn: d,
                    cb_data: e || {},
                    scope: f || null,
                    once: g || !1
                });
                "page_ready" === c && b.onloadfired && b.autorun && this.setImmediate(d, null, e, f);
                "page_unload" !== c && "before_unload" !== c || function () {
                    var g, h = j.length;
                    g = function (g) {
                        d && d.call(f, g || a.event, e);
                        "page_unload" === c && h === b.events[c].length && BOOMR.real_sendBeacon()
                    };
                    "page_unload" === c && (a.onpagehide || null === a.onpagehide ? BOOMR.utils.addListener(a, "pagehide", g) : BOOMR.utils.addListener(a, "unload", g));
                    BOOMR.utils.addListener(a, "beforeunload", g)
                }();
                return this
            },
            addError: function (a, c, d) {
                var e, f = BOOMR.plugins.Errors;
                if (f && f.is_supported())
                    if ("string" == typeof a) f.send({
                        message: a,
                        extra: d,
                        functionName: c,
                        noStack: !0
                    }, f.VIA_APP, f.SOURCE_BOOMERANG);
                    else {
                        "string" == typeof c && (a.functionName = c);
                        void 0 !== d && (a.extra = d);
                        f.send(a, f.VIA_APP, f.SOURCE_BOOMERANG)
                    }
                else {
                    if ("string" != typeof a) {
                        e = String(a);
                        e.match(/^\[object/) && (e = a.name + ": " + (a.description || a.message).replace(/\r\n$/, ""));
                        a = e
                    }
                    void 0 !== c && (a = "[" + c + ":" + BOOMR.now() + "] " + a);
                    d && (a += ":: " + d);
                    b.errors[a] ? b.errors[a]++ : b.errors[a] = 1
                }
            },
            isCrossOriginError: function (a) {
                return "SecurityError" === a.name || "TypeError" === a.name && "Permission denied" === a.message || "Error" === a.name && a.message && a.message.match(/^(Permission|Access is) denied/) || -2146828218 === a.number
            },
            addVar: function (a, c, d) {
                if ("string" == typeof a) b.vars[a] = c;
                else if ("object" == typeof a) {
                    var e, f = a;
                    for (e in f) f.hasOwnProperty(e) && (b.vars[e] = f[e])
                }
                d && (b.singleBeaconVars[a] = 1);
                return this
            },
            appendVar: function (a, b) {
                var c = BOOMR.getVar(a) || "";
                c && (c += ",");
                BOOMR.addVar(a, c + b);
                return this
            },
            removeVar: function (a) {
                var c, d;
                if (!arguments.length) return this;
                d = 1 === arguments.length && BOOMR.utils.isArray(a) ? a : arguments;
                for (c = 0; c < d.length; c++) b.vars.hasOwnProperty(d[c]) && delete b.vars[d[c]];
                return this
            },
            hasVar: function (a) {
                return b.vars.hasOwnProperty(a)
            },
            getVar: function (a) {
                return b.vars[a]
            },
            setVarPriority: function (a, c) {
                if ("number" != typeof c || 1 !== Math.abs(c)) return this;
                b.varPriority[c][a] = 1;
                return this
            },
            setReferrer: function (a, c) {
                b.r = a;
                b.r2 = c && a !== c ? c : void 0
            },
            requestStart: function (a) {
                var b = BOOMR.now();
                BOOMR.plugins.RT.startTimer("xhr_" + a, b);
                return {
                    loaded: function (c) {
                        BOOMR.responseEnd(a, b, c)
                    }
                }
            },
            readyToSend: function () {
                var a;
                for (a in this.plugins)
                    if (this.plugins.hasOwnProperty(a)) {
                        if (b.disabled_plugins[a]) continue;
                        if ("function" == typeof this.plugins[a].readyToSend && !1 === this.plugins[a].readyToSend()) {
                            BOOMR.debug("Plugin " + a + " is not ready to send");
                            return !1
                        }
                    } return !0
            },
            responseEnd: function (a, c, d, e) {
                c = "number" == typeof c ? c : BOOMR.now();
                e = "number" == typeof e ? e : BOOMR.now();
                if (BOOMR.readyToSend())
                    if (BOOMR.hasSentPageLoadBeacon() || BOOMR.utils.inArray(a.initiator, BOOMR.constants.BEACON_TYPE_SPAS))
                        if ("object" == typeof a) {
                            if (!a.url) {
                                BOOMR.debug("BOOMR.responseEnd: First argument must have a url property if it's an object");
                                return
                            }
                            b.fireEvent("xhr_load", a)
                        } else {
                            BOOMR.real_sendBeacon();
                            BOOMR.addVar("xhr.pg", a);
                            BOOMR.plugins.RT.startTimer("xhr_" + a, c);
                            b.fireEvent("xhr_load", {
                                name: "xhr_" + a,
                                data: d,
                                timing: {
                                    loadEventEnd: e
                                }
                            })
                        }
                else BOOMR.subscribe("page_load_beacon", function () {
                    BOOMR.responseEnd(a, c, d, e)
                }, null, BOOMR, !0);
                else {
                    BOOMR.debug("Attempted to call responseEnd before all plugins were Ready to Send, trying again...");
                    setTimeout(function () {
                        BOOMR.responseEnd(a, c, d, e)
                    }, 1e3)
                }
            },
            uninstrumentXHR: function () {},
            instrumentXHR: function () {},
            sendBeacon: function (a) {
                a && (b.beacon_url_override = a);
                if (!b.beaconQueued) {
                    b.beaconQueued = !0;
                    BOOMR.setImmediate(BOOMR.real_sendBeacon, null, null, BOOMR)
                }
                return !0
            },
            real_sendBeacon: function () {
                var c, e, f = [],
                    g = {};
                if (!b.beaconQueued) return !1;
                b.beaconQueued = !1;
                BOOMR.debug("Checking if we can send beacon");
                for (c in this.plugins)
                    if (this.plugins.hasOwnProperty(c)) {
                        if (b.disabled_plugins[c]) continue;
                        if (!this.plugins[c].is_complete(b.vars)) {
                            BOOMR.debug("Plugin " + c + " is not complete, deferring beacon send");
                            return !1
                        }
                    } if (!(window && window.Image && window.navigator && BOOMR.window)) {
                    BOOMR.debug("DOM not fully available, not sending a beacon");
                    return !1
                }
                var h = BOOMR.utils.inArray(b.vars["http.initiator"], BOOMR.constants.BEACON_TYPE_SPAS),
                    i = void 0 === b.vars["http.initiator"] || h;
                b.vars.pgu || (b.vars.pgu = h ? d.URL : d.URL.replace(/#.*/, ""));
                b.vars.pgu = BOOMR.utils.cleanupURL(b.vars.pgu);
                b.vars.u && !h || (b.vars.u = b.vars.pgu);
                b.vars.pgu === b.vars.u && delete b.vars.pgu;
                b.r ? b.vars.r = BOOMR.utils.cleanupURL(b.r) : delete b.vars.r;
                b.r2 ? b.vars.r2 = BOOMR.utils.cleanupURL(b.r2) : delete b.vars.r2;
                b.vars.v = BOOMR.version;
                b.vars["rt.si"] = BOOMR.session.ID + "-" + Math.round(BOOMR.session.start / 1e3).toString(36);
                b.vars["rt.ss"] = BOOMR.session.start;
                b.vars["rt.sl"] = BOOMR.session.length;
                if (BOOMR.visibilityState()) {
                    b.vars["vis.st"] = BOOMR.visibilityState();
                    BOOMR.lastVisibilityEvent.visible && (b.vars["vis.lv"] = BOOMR.now() - BOOMR.lastVisibilityEvent.visible);
                    BOOMR.lastVisibilityEvent.hidden && (b.vars["vis.lh"] = BOOMR.now() - BOOMR.lastVisibilityEvent.hidden)
                }
                b.vars["ua.plt"] = navigator.platform;
                b.vars["ua.vnd"] = navigator.vendor;
                this.pageId && (b.vars.pid = this.pageId);
                if (a !== window) {
                    e = "if";
                    b.vars[e] = ""
                }
                for (c in b.errors) b.errors.hasOwnProperty(c) && f.push(c + (b.errors[c] > 1 ? " (*" + b.errors[c] + ")" : ""));
                f.length > 0 && (b.vars.errors = f.join("\n"));
                b.errors = {};
                b.fireEvent("before_beacon", b.vars);
                for (c in b.vars) b.vars.hasOwnProperty(c) && (g[c] = b.vars[c]);
                BOOMR.removeVar("qt");
                for (var j in b.singleBeaconVars) b.singleBeaconVars.hasOwnProperty(j) && BOOMR.removeVar(j);
                b.singleBeaconVars = {};
                if (!b.hasSentPageLoadBeacon && i) {
                    b.hasSentPageLoadBeacon = !0;
                    BOOMR.setImmediate(function () {
                        b.fireEvent("page_load_beacon", g)
                    })
                }
                if (BOOMR.session.rate_limited) {
                    BOOMR.debug("Skipping because we're rate limited");
                    return !1
                }
                BOOMR.sendBeaconData(g);
                return !0
            },
            hasSentPageLoadBeacon: function () {
                return b.hasSentPageLoadBeacon
            },
            sendBeaconData: function (c) {
                var d, e, f, g, h, i = [],
                    j = [],
                    k = !0;
                BOOMR.debug("Ready to send beacon: " + BOOMR.utils.objectToString(c));
                b.beacon_url = b.beacon_url_override || b.beacon_url;
                if (!b.beacon_url) {
                    BOOMR.debug("No beacon URL, so skipping.");
                    return !1
                }
                if (!b.beaconUrlAllowed(b.beacon_url)) {
                    BOOMR.debug("Beacon URL not allowed: " + b.beacon_url);
                    return !1
                }
                if (0 === c.length) return !1;
                b.fireEvent("beacon", c);
                i = this.getVarsOfPriority(c, -1);
                j = this.getVarsOfPriority(c, 1);
                d = i.concat(this.getVarsOfPriority(c, 0), j);
                e = d.join("&");
                b.beacon_url.match(/^\/\//) && (b.beacon_url = "https:" + b.beacon_url);
                f = b.beacon_url + (b.beacon_url.indexOf("?") > -1 ? "&" : "?") + e;
                ("POST" === b.beacon_type || f.length > BOOMR.constants.MAX_GET_LENGTH) && (k = !1);
                if (a && a.navigator && "function" == typeof a.navigator.sendBeacon && "function" == typeof a.Blob) {
                    var l = new a.Blob([e + "&sb=1"], {
                        type: "application/x-www-form-urlencoded"
                    });
                    if (a.navigator.sendBeacon(b.beacon_url, l)) return !0
                }
                BOOMR.orig_XMLHttpRequest || a && a.XMLHttpRequest || (k = !0);
                if (k) {
                    try {
                        g = new Image
                    } catch (m) {
                        BOOMR.debug("Image is not a constructor, not sending a beacon");
                        return !1
                    }
                    g.src = f
                } else {
                    h = new(BOOMR.window.orig_XMLHttpRequest || BOOMR.orig_XMLHttpRequest || BOOMR.window.XMLHttpRequest);
                    try {
                        this.sendXhrPostBeacon(h, e)
                    } catch (m) {
                        h = new BOOMR.boomerang_frame.XMLHttpRequest;
                        this.sendXhrPostBeacon(h, e)
                    }
                }
                return !0
            },
            hasSentPageLoadBeacon: function () {
                return b.hasSentPageLoadBeacon
            },
            sendXhrPostBeacon: function (a, c) {
                a.open("POST", b.beacon_url);
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                if (void 0 !== b.beacon_auth_token) {
                    void 0 === b.beacon_auth_key && (b.beacon_auth_key = "Authorization");
                    a.setRequestHeader(b.beacon_auth_key, b.beacon_auth_token)
                }
                a.send(c)
            },
            getVarsOfPriority: function (a, c) {
                var d, e = [];
                if (0 !== c) {
                    for (d in b.varPriority[c])
                        if (b.varPriority[c].hasOwnProperty(d) && a.hasOwnProperty(d)) {
                            e.push(this.getUriEncodedVar(d, a[d]));
                            delete a[d]
                        }
                } else
                    for (d in a) a.hasOwnProperty(d) && e.push(this.getUriEncodedVar(d, a[d]));
                return e
            },
            getUriEncodedVar: function (a, b) {
                void 0 !== b && null !== b || (b = "");
                "object" == typeof b && (b = BOOMR.utils.serializeForUrl(b));
                return encodeURIComponent(a) + "=" + encodeURIComponent(b)
            },
            getResourceTiming: function (a, b) {
                var c, d = BOOMR.getPerformance();
                try {
                    if (d && "function" == typeof d.getEntriesByName) {
                        c = d.getEntriesByName(a);
                        if (c && c.length) {
                            "function" == typeof b && c.sort(b);
                            return c[c.length - 1]
                        }
                    }
                } catch (e) {}
            }
        };
        c.url = c.utils.getMyURL();
        delete BOOMR_start;
        if ("number" == typeof BOOMR_lstart) {
            c.t_lstart = BOOMR_lstart;
            delete BOOMR_lstart
        } else "number" == typeof BOOMR.window.BOOMR_lstart && (c.t_lstart = BOOMR.window.BOOMR_lstart);
        "number" == typeof BOOMR.window.BOOMR_onload && (c.t_onload = BOOMR.window.BOOMR_onload);
        ! function () {
            var a;
            "object" == typeof console && void 0 !== console.log ? c.log = function (a, b, c) {
                console.log("(" + BOOMR.now() + ") {" + BOOMR.pageId + "}: " + c + ": [" + b + "] " + a)
            } : c.log = function () {};
            a = function (a) {
                return function (b, c) {
                    this.log(b, a, "boomerang" + (c ? "." + c : ""));
                    return this
                }
            };
            c.debug = a("debug");
            c.info = a("info");
            c.warn = a("warn");
            c.error = a("error")
        }();
        try {
            var j = c.getPerformance();
            j && "function" == typeof j.now && /\[native code\]/.test(String(j.now)) && j.timing && j.timing.navigationStart && (c.now = function () {
                return Math.round(j.now() + j.timing.navigationStart)
            })
        } catch (k) {}
        b.checkLocalStorageSupport();
        ! function () {
            var a;
            for (a in c) c.hasOwnProperty(a) && (BOOMR[a] = c[a]);
            BOOMR.xhr_excludes || (BOOMR.xhr_excludes = {})
        }();
        f("onBoomerangLoaded", {
            BOOMR: BOOMR
        }, !0)
    }
}(window);
! function () {
    if (!BOOMR.plugins.ConfigOverride) {
        var a = {
            safeConfigOverride: function (b, c, d) {
                for (var e in c)
                    if (b.hasOwnProperty(e) && c.hasOwnProperty(e) && ("object" != typeof c[e] || "object" == typeof b[e]))
                        if ("object" == typeof b[e] && "object" == typeof c[e]) {
                            d[e] = d[e] || {};
                            a.safeConfigOverride(b[e], c[e], d[e])
                        } else {
                            d[e] = b[e];
                            BOOMR.addVar("c.o", "")
                        }
            },
            allowedConfigOverrides: {
                Angular: {
                    enabled: !0
                },
                Ember: {
                    enabled: !0
                },
                Backbone: {
                    enabled: !0
                },
                History: {
                    enabled: !0,
                    auto: !0,
                    disableHardNav: !0
                },
                PageParams: {
                    enabled: !0,
                    pageGroups: !0,
                    customMetrics: !0,
                    customDimensions: !0,
                    customTimers: !0,
                    abTests: !0,
                    defaultDecimal: !0,
                    defaultThousands: !0,
                    xhr: !0,
                    pci: !0,
                    pciBlacklist: !0
                },
                CrossDomain: {
                    cross_domain_url: !0,
                    sending: !0,
                    session_transfer_timeout: !0
                },
                IFrameDelay: {
                    enabled: !0,
                    monitoredCount: !0,
                    registerParent: !0
                },
                instrument_xhr: !0,
                RT: {
                    cookie: !0,
                    session_exp: !0
                },
                BW: {
                    base_url: !0,
                    enabled: !0,
                    test_https: !0
                },
                ResourceTiming: {
                    enabled: !0,
                    clearOnBeacon: !0,
                    trimUrls: !0,
                    serverTiming: !0
                },
                AutoXHR: {
                    alwaysSendXhr: !0,
                    filters: !0
                },
                Errors: {
                    enabled: !0,
                    onError: !0,
                    monitorGlobal: !0,
                    monitorNetwork: !0,
                    monitorConsole: !0,
                    monitorEvents: !0,
                    monitorTimeout: !0,
                    sendAfterOnload: !0,
                    maxErrors: !0,
                    sendInterval: !0
                },
                TPAnalytics: {
                    enabled: !0
                },
                Continuity: {
                    enabled: !0,
                    monitorLongTasks: !0,
                    monitorPageBusy: !0,
                    monitorFrameRate: !0,
                    monitorInteractions: !0,
                    monitorStats: !0,
                    afterOnload: !0,
                    afterOnloadMaxLength: !0,
                    afterOnloadMinWait: 5e3,
                    waitAfterOnload: !0,
                    ttiWaitForFrameworkReady: !0,
                    ttiWaitForHeroImages: !0,
                    sendLog: !0,
                    logMaxEntries: 100,
                    sendTimeline: !0
                },
                UserTiming: {
                    enabled: !0
                },
                LOGN: {
                    storeConfig: !0
                },
                autorun: !0
            }
        };
        BOOMR.plugins.ConfigOverride = {
            init: function (b) {
                if (BOOMR.window && BOOMR.window.BOOMR_config) {
                    BOOMR.debug("Found BOOMR_config on global scope: " + BOOMR.utils.objectToString(BOOMR.window.BOOMR_config), "ConfigOverride");
                    a.safeConfigOverride(BOOMR.window.BOOMR_config, a.allowedConfigOverrides, b)
                }
                return this
            },
            is_complete: function () {
                return !0
            }
        }
    }
}();
! function () {
    function a(a) {
        BOOMR.debug(a, "Continuity")
    }

    function b(a) {
        var b = window.UserTimingCompression || BOOMR.window.UserTimingCompression;
        return b ? b.jsUrl(a) : window.JSON ? JSON.stringify(a) : ""
    }

    function c(a, b, c, d, e) {
        var i, j, k, l, m, n = "",
            q = 0;
        if (!c || !BOOMR.utils.Compression) return "";
        if (0 === c.length) return "";
        if (b) {
            void 0 === c[d] && (c[d] = 0);
            for (i = d + 1; i <= e; i++) void 0 === c[i] && (c[i] = c[i - 1])
        }
        for (i = d; i <= e; i++) {
            q = "number" != typeof c[i] || isNaN(c[i]) ? 0 : c[i];
            a === f ? k = q <= 63 ? o.charAt(q) : p + q.toString(36) + p : a === g ? k = q.toString(36) : a === h && (k = q < 99 ? q <= 9 ? "0" + Math.max(q, 0) : q : "__");
            if (i + 3 <= e && (c[i + 1] === q || 0 === q && void 0 === c[i + 1]) && (c[i + 2] === q || 0 === q && void 0 === c[i + 2]) && (c[i + 3] === q || 0 === q && void 0 === c[i + 3])) {
                j = 1;
                for (; i < e && (c[i + 1] === q || 0 === q && void 0 === c[i + 1]);) {
                    j++;
                    i++
                }
                l = "*" + j.toString(36) + "*" + k
            } else l = k;
            if (0 !== q || i !== e) {
                a === g && m && (n += ",");
                m = !0;
                n += l
            }
        }
        return m ? a.toString() + n : ""
    }
    if (!BOOMR.plugins.Continuity) {
        var d = 100,
            e = 500,
            f = 0,
            g = 1,
            h = 2,
            i = 0,
            j = 1,
            k = 2,
            l = 3,
            m = 4,
            n = 5,
            o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
            p = ".",
            q = BOOMR.getPerformance(),
            r = {},
            s = q && q.timing && q.timing.navigationStart ? q.timing.navigationStart : BOOMR.now(),
            t = function (a) {
                function b(a, b, c) {
                    z[a] || (z[a] = []);
                    A[a] = {
                        compressMode: b || f,
                        backfillLast: c
                    }
                }

                function e() {
                    return Math.floor((BOOMR.now() - a) / d)
                }

                function g(a, b, c) {
                    void 0 === c && (c = e());
                    z[a] && (z[a][c] = b)
                }

                function h(a, b, c) {
                    void 0 === c && (c = e());
                    void 0 === b && (b = 1);
                    if (z[a]) {
                        z[a][c] || (z[a][c] = 0);
                        z[a][c] += b
                    }
                }

                function i(a, b, c) {
                    void 0 === b && (b = e());
                    B.push({
                        type: a,
                        time: b,
                        val: c
                    });
                    B.length > impl.logMaxEntries && Array.prototype.splice.call(B, 0, B.length - impl.logMaxEntries)
                }

                function j(b, c) {
                    var e, f = 0,
                        g = 0,
                        h = 1 / 0,
                        i = 0,
                        j = Math.floor((c - a) / d);
                    if (!z[b]) return 0;
                    for (var k in z[b]) {
                        k = parseInt(k, 10);
                        if (k >= j && z[b].hasOwnProperty(k)) {
                            e = z[b][k];
                            f++;
                            g += e;
                            h = Math.min(h, e);
                            i = Math.max(i, e)
                        }
                    }
                    return {
                        total: g,
                        count: f,
                        min: h,
                        max: i
                    }
                }

                function k(a) {
                    var b, c, d, e, f, g, h = 0;
                    if (!BOOMR.window || !BOOMR.window.document || "function" != typeof BOOMR.window.document.querySelectorAll) return 0;
                    if (!q || "function" != typeof q.getEntriesByType) return 0;
                    b = a + ", " + a + " * img";
                    c = BOOMR.window.document.querySelectorAll(b);
                    if (c && c.length)
                        for (d = 0; d < c.length; d++) {
                            f = c[d].src;
                            if (f) {
                                g = q.getEntriesByName(f);
                                if (g && g.length)
                                    for (e = 0; e < g.length; e++) h = Math.max(h, g[e].responseEnd)
                            }
                        }
                    return h ? Math.floor(h + s) : 0
                }

                function l() {
                    var a = 0;
                    if (impl.ttiWaitForFrameworkReady) {
                        if (!impl.frameworkReady) return;
                        a = impl.frameworkReady
                    }
                    if (BOOMR.plugins.PaintTiming && BOOMR.plugins.PaintTiming.is_supported() && q && q.timeOrigin) {
                        var b = BOOMR.plugins.PaintTiming.getTimingFor("first-contentful-paint");
                        b || (b = BOOMR.plugins.PaintTiming.getTimingFor("first-paint"));
                        b && (a = Math.max(a, Math.round(b + q.timeOrigin)))
                    } else if (q && q.timing && q.timing.msFirstPaint) a = Math.max(a, q.timing.msFirstPaint);
                    else if (BOOMR.window && BOOMR.window.chrome && "function" == typeof BOOMR.window.chrome.loadTimes) {
                        var c = BOOMR.window.chrome.loadTimes();
                        c && c.firstPaintTime && (a = Math.max(a, 1e3 * c.firstPaintTime))
                    }
                    q && q.timing && q.timing.domContentLoadedEventEnd && (a = Math.max(a, q.timing.domContentLoadedEventEnd));
                    if (impl.ttiWaitForHeroImages) {
                        E = k(impl.ttiWaitForHeroImages);
                        E && (a = Math.max(a, E))
                    }
                    return a
                }

                function m() {
                    for (var a = "", b = 0; b < B.length; b++) {
                        var c = B[b];
                        0 !== b && (a += "|");
                        a += c.type;
                        a += Math.round(c.time - s).toString(36);
                        for (var d in c.val)
                            if (c.val.hasOwnProperty(d)) {
                                a += "," + d;
                                "number" == typeof c.val[d] ? a += c.val[d].toString(36) : a += c.val[d]
                            }
                    }
                    "" !== a && impl.addToBeacon("c.l", a)
                }

                function n(b, f) {
                    return c(A[b].compressMode, A[b].backfillLast, z[b], 0 !== f ? Math.floor((f - a) / d) : 0, e())
                }

                function o(a) {
                    var b, c;
                    for (b in z)
                        if (z.hasOwnProperty(b)) {
                            c = n(b, a);
                            "" !== c && impl.addToBeacon("c.t." + b, c)
                        }
                }

                function p(b) {
                    var c = e(),
                        f = 0,
                        g = 0;
                    impl.sendLog && void 0 !== b && m();
                    impl.sendTimeline && void 0 !== b && o(b);
                    if (!C) {
                        if (!D) {
                            D = l();
                            if (!D) return
                        }
                        impl.addToBeacon("c.tti.vr", r.timeToVisuallyReady());
                        impl.addToBeacon("c.tti.fr", r.timeToFrameworkReady());
                        impl.addToBeacon("c.tti.hi", r.timeToHeroImagesReady());
                        if (z.longtask || z.fps || z.busy) {
                            var h = Math.floor((D - a) / d);
                            for (f = h; f <= c; f++)
                                if (z.longtask && z.longtask[f]) g = 0;
                                else if (z.fps && (!z.fps[f] || z.fps[f] < x)) g = 0;
                            else if (z.busy && z.busy[f] > y) g = 0;
                            else if (z.interdly && z.interdly[f]) g = 0;
                            else {
                                g++;
                                if (g >= v) {
                                    C = a + (f - v) * d;
                                    C = Math.max(C, D);
                                    break
                                }
                            }
                            C > 0 && impl.addToBeacon("c.tti", r.timeToInteractive())
                        }
                    }
                }

                function t() {
                    z = {};
                    B = []
                }

                function u() {
                    for (var a in z) z.hasOwnProperty(a) && (z[a] = []);
                    B = []
                }
                var v = 5,
                    w = 20,
                    x = w / (1e3 / d),
                    y = 50,
                    z = {},
                    A = {},
                    B = [],
                    C = 0,
                    D = 0,
                    E = 0;
                BOOMR.fpsLog && BOOMR.fpsLog.length && (a = BOOMR.fpsLog[0] + s);
                r.timeToInteractive = function () {
                    if (C) return C - s
                };
                r.timeToVisuallyReady = function () {
                    if (D) return D - s
                };
                r.timeToHeroImagesReady = function () {
                    if (impl.ttiWaitForHeroImages && E) return E - s
                };
                r.timeToFrameworkReady = function () {
                    if (impl.ttiWaitForFrameworkReady && impl.frameworkReady) return impl.frameworkReady - s
                };
                r.log = function () {
                    return B
                };
                return {
                    register: b,
                    set: g,
                    log: i,
                    increment: h,
                    getTimeBucket: e,
                    getStats: j,
                    analyze: p,
                    stop: t,
                    onBeacon: u
                }
            },
            u = function (a, c) {
                function d(a) {
                    var b, d;
                    if (p) {
                        b = a.getEntries();
                        Array.prototype.push.apply(o, b);
                        for (d = 0; d < b.length; d++) q += b[d].duration;
                        c.increment("longtask", b.length)
                    }
                }

                function e() {
                    return o
                }

                function g() {
                    o = [];
                    q = 0
                }

                function h(a) {
                    var c, d, e, f, g, h = [],
                        i = [];
                    if (0 !== o.length) {
                        for (c = 0; c < o.length; c++) {
                            e = o[c];
                            f = {
                                s: Math.round(e.startTime).toString(36),
                                d: Math.round(e.duration).toString(36),
                                n: k[e.name] ? k[e.name] : 0
                            };
                            i = [];
                            for (d = 0; d < e.attribution.length; d++) {
                                g = e.attribution[d];
                                if ("script" !== g.name || "iframe" !== g.containerType || g.containerName || g.containerId || g.containerSrc) {
                                    var j = g.containerName ? g.containerName : void 0,
                                        n = g.containerId ? g.containerId : void 0;
                                    j === n && (j = void 0);
                                    var p = void 0 === n ? g.containerSrc : void 0;
                                    i.push({
                                        a: l[g.name] ? l[g.name] : 0,
                                        t: m[g.containerType] ? m[g.containerType] : 0,
                                        n: j,
                                        i: n,
                                        s: p
                                    })
                                }
                            }
                            i.length > 0 && (f.a = i);
                            h.push(f)
                        }
                        impl.addToBeacon("c.lt.n", r.longTasksCount(), !0);
                        impl.addToBeacon("c.lt.tt", r.longTasksTime());
                        impl.addToBeacon("c.lt", b(h))
                    }
                }

                function i() {
                    p = !1;
                    n.disconnect();
                    g()
                }

                function j() {
                    g()
                }
                if (a.PerformanceObserver && a.PerformanceLongTaskTiming) {
                    var k = {
                            unknown: 0,
                            self: 1,
                            "same-origin-ancestor": 2,
                            "same-origin-descendant": 3,
                            "same-origin": 4,
                            "cross-origin-ancestor": 5,
                            "cross-origin-descendant": 6,
                            "cross-origin-unreachable": 7,
                            "multiple-contexts": 8
                        },
                        l = {
                            unknown: 0,
                            script: 1,
                            layout: 2
                        },
                        m = {
                            unknown: 0,
                            iframe: 1,
                            embed: 2,
                            object: 3
                        },
                        n = new a.PerformanceObserver(d);
                    try {
                        n.observe({
                            entryTypes: ["longtask"]
                        })
                    } catch (s) {
                        return
                    }
                    c.register("longtask", f);
                    var o = [],
                        p = !0,
                        q = 0;
                    r.longTasksTime = function () {
                        return q
                    };
                    r.longTasksCount = function () {
                        return o.length
                    };
                    return {
                        getTasks: e,
                        clearTasks: g,
                        analyze: h,
                        stop: i,
                        onBeacon: j
                    }
                }
            },
            v = function (a, b) {
                function c() {
                    var a = BOOMR.now(),
                        b = a - n;
                    n = a;
                    if (b > 2 * i + j) {
                        var c = Math.floor((b - i) / i);
                        o += c;
                        p += c;
                        b -= c * i
                    }
                    o++;
                    b > i + j && p++
                }

                function d() {
                    var a = b.getTimeBucket(),
                        c = a,
                        d = 0;
                    if (0 !== o) {
                        for (; o > l + 1 && d <= m;) {
                            b.set("busy", 100, --c);
                            o -= l;
                            p = Math.max(p - l, 0);
                            q += l;
                            s += l;
                            d++
                        }
                        q += o;
                        s += p;
                        b.set("busy", Math.round(p / o * 100), a);
                        o = 0;
                        p = 0
                    }
                }

                function e(a) {
                    impl.addToBeacon("c.b", r.pageBusy())
                }

                function f() {
                    t = !1;
                    if (u) {
                        clearInterval(u);
                        u = !1
                    }
                    if (v) {
                        clearInterval(v);
                        v = !1
                    }
                }

                function g() {
                    q = 0;
                    s = 0
                }
                b.register("busy", h);
                var i = 32,
                    j = 4,
                    k = 100,
                    l = Math.floor(k / i),
                    m = 100,
                    n = BOOMR.now(),
                    o = 0,
                    p = 0,
                    q = 0,
                    s = 0,
                    t = !0,
                    u = !1,
                    v = !1;
                r.pageBusy = function () {
                    return 0 === q ? 0 : Math.round(s / q * 100)
                };
                u = setInterval(c, i);
                v = setInterval(d, k);
                return {
                    analyze: e,
                    stop: f,
                    onBeacon: g
                }
            },
            w = function (a, b) {
                function c(d) {
                    if (n) {
                        d - j >= k && m++;
                        j = d;
                        l++;
                        b.increment("fps");
                        a.requestAnimationFrame(c)
                    }
                }

                function e(a) {
                    impl.addToBeacon("c.f", r.fps());
                    impl.addToBeacon("c.f.d", r.fpsDuration());
                    impl.addToBeacon("c.f.m", r.fpsMinimum());
                    impl.addToBeacon("c.f.l", r.fpsLongFrames());
                    impl.addToBeacon("c.f.s", r.fpsStart())
                }

                function g() {
                    n = !1;
                    i = 0
                }

                function h() {
                    n && (i = BOOMR.now());
                    l = 0;
                    m = 0
                }
                b.register("fps", f);
                var i, j, k = 50,
                    l = 0,
                    m = 0,
                    n = !0;
                if (BOOMR.fpsLog && BOOMR.fpsLog.length) {
                    j = i = BOOMR.fpsLog[0] + s;
                    for (var o = 0; o < BOOMR.fpsLog.length; o++) {
                        var p = s + BOOMR.fpsLog[o];
                        b.increment("fps", 1, Math.floor((p - i) / d));
                        p - j >= k && m++;
                        j = p
                    }
                    l = BOOMR.fpsLog.length;
                    delete BOOMR.fpsLog
                } else i = BOOMR.now();
                a.requestAnimationFrame(c);
                r.fps = function () {
                    var a = r.fpsDuration();
                    if (a) return Math.floor(l / (a / 1e3))
                };
                r.fpsDuration = function () {
                    if (i) return BOOMR.now() - i
                };
                r.fpsMinimum = function () {
                    if (r.fpsDuration()) {
                        var a = b.getStats("fps", i).min;
                        return a !== 1 / 0 ? a : void 0
                    }
                };
                r.fpsLongFrames = function () {
                    return m
                };
                r.fpsStart = function () {
                    return i ? i.toString(36) : 0
                };
                return {
                    analyze: e,
                    stop: g,
                    onBeacon: h
                }
            },
            x = function (a, b, c) {
                function e(a) {
                    var d = BOOMR.now();
                    t++;
                    d - w > m && v++;
                    w = d;
                    var e = BOOMR.utils.scroll().y,
                        f = Math.abs(o - e);
                    u += f;
                    b.increment("scroll", f);
                    if (0 === p || Math.abs(p - e) > n) {
                        b.log(i, d, {
                            y: e
                        });
                        p = e
                    }
                    c.interact("scroll", d, a);
                    q += Math.round(f / A * 100);
                    s += Math.round(f / A * 100);
                    o = e
                }

                function g() {
                    var a = Math.min(q, 100);
                    0 !== a && b.set("scrollpct", a);
                    q = 0
                }

                function j(a) {
                    impl.addToBeacon("c.s", r.scrollCount());
                    impl.addToBeacon("c.s.p", r.scrollPct());
                    impl.addToBeacon("c.s.y", r.scrollPixels());
                    impl.addToBeacon("c.s.d", r.scrollDistinct())
                }

                function k() {
                    if (x) {
                        clearInterval(x);
                        x = !1
                    }
                    BOOMR.utils.removeListener(a, "scroll", e)
                }

                function l() {
                    s = 0;
                    t = 0;
                    u = 0;
                    v = 0
                }
                if (a && a.document && a.document.body && a.document.documentElement) {
                    var m = 2e3,
                        n = 20,
                        o = 0,
                        p = 0,
                        q = 0,
                        s = 0,
                        t = 0,
                        u = 0,
                        v = 0,
                        w = 0,
                        x = !1,
                        y = a.document.body,
                        z = a.document.documentElement;
                    b.register("scroll", f);
                    b.register("scrollpct", h);
                    var A = Math.max(y.scrollHeight, y.offsetHeight, z.clientHeight, z.scrollHeight, z.offsetHeight) - BOOMR.utils.windowHeight();
                    r.scrollPct = function () {
                        return s
                    };
                    r.scrollCount = function () {
                        return t
                    };
                    r.scrollDistinct = function () {
                        return v
                    };
                    r.scrollPixels = function () {
                        return u
                    };
                    BOOMR.utils.addListener(a, "scroll", e, !0);
                    x = setInterval(g, d);
                    return {
                        analyze: j,
                        stop: k,
                        onBeacon: l
                    }
                }
            },
            y = function (a, b, c) {
                function d(a) {
                    var d = BOOMR.now(),
                        e = a.clientX,
                        f = a.clientY;
                    l++;
                    var g = Math.round(Math.sqrt(Math.pow(p - f, 2) + Math.pow(o - e, 2)));
                    if (q === a.target || g <= i) {
                        m++;
                        if (m + 1 >= k) {
                            n++;
                            BOOMR.fireEvent("rage_click", a)
                        }
                    } else m = 0;
                    o = e;
                    p = f;
                    q = a.target;
                    b.increment("click");
                    b.log(j, d, {
                        x: e,
                        y: f
                    });
                    c.interact("click", d, a)
                }

                function e(a) {
                    impl.addToBeacon("c.c", r.clicksCount());
                    impl.addToBeacon("c.c.r", r.clicksRage())
                }

                function g() {
                    BOOMR.utils.removeListener(a.document, "click", d)
                }

                function h() {
                    l = 0;
                    m = 0;
                    n = 0
                }
                b.register("click", f);
                var i = 10,
                    k = 3,
                    l = 0,
                    m = 0,
                    n = 0,
                    o = 0,
                    p = 0,
                    q = null;
                r.clicksCount = function () {
                    return l
                };
                r.clicksRage = function () {
                    return n
                };
                BOOMR.utils.addListener(a.document, "click", d, !0);
                return {
                    analyze: e,
                    stop: g,
                    onBeacon: h
                }
            },
            z = function (a, b, c) {
                function d(a) {
                    var d = BOOMR.now();
                    i++;
                    27 === a.keyCode && j++;
                    b.increment("key");
                    b.log(l, d);
                    c.interact("key", d, a)
                }

                function e(a) {
                    impl.addToBeacon("c.k", r.keyCount());
                    impl.addToBeacon("c.k.e", r.keyEscapes())
                }

                function g() {
                    BOOMR.utils.removeListener(a.document, "keydown", d)
                }

                function h() {
                    i = 0;
                    j = 0
                }
                b.register("key", f);
                var i = 0,
                    j = 0;
                r.keyCount = function () {
                    return i
                };
                r.keyEscapes = function () {
                    return j
                };
                BOOMR.utils.addListener(a.document, "keydown", d, !0);
                return {
                    analyze: e,
                    stop: g,
                    onBeacon: h
                }
            },
            A = function (a, b, c) {
                function e(a) {
                    var c = (BOOMR.now(), a.clientX),
                        d = a.clientY,
                        e = Math.round(Math.sqrt(Math.pow(q - d, 2) + Math.pow(p - c, 2))),
                        f = Math.round(e / z * 100);
                    u += f;
                    v += f;
                    w += e;
                    p = c;
                    q = d;
                    b.increment("mouse", e)
                }

                function g() {
                    var a = Math.min(u, 100);
                    0 !== a && b.set("mousepct", a);
                    u = 0
                }

                function i() {
                    if (s !== p || t !== q) {
                        if (Math.round(Math.sqrt(Math.pow(t - q, 2) + Math.pow(s - p, 2))) >= n) {
                            b.log(k, BOOMR.now(), {
                                x: p,
                                y: q
                            });
                            s = p;
                            t = q
                        }
                    }
                }

                function j(a) {
                    impl.addToBeacon("c.m.p", r.mousePct());
                    impl.addToBeacon("c.m.n", r.mousePixels())
                }

                function l() {
                    if (x) {
                        clearInterval(x);
                        x = !1
                    }
                    if (y) {
                        clearInterval(y);
                        y = !1
                    }
                    BOOMR.utils.removeListener(a.document, "mousemove", e)
                }

                function m() {
                    v = 0;
                    w = 0
                }
                b.register("mouse", f);
                b.register("mousepct", h);
                var n = 10,
                    o = 250,
                    p = 0,
                    q = 0,
                    s = 0,
                    t = 0,
                    u = 0,
                    v = 0,
                    w = 0,
                    x = !1,
                    y = !1,
                    z = Math.round(Math.sqrt(Math.pow(BOOMR.utils.windowHeight(), 2) + Math.pow(BOOMR.utils.windowWidth(), 2)));
                r.mousePct = function () {
                    return v
                };
                r.mousePixels = function () {
                    return w
                };
                x = setInterval(g, d);
                y = setInterval(i, o);
                BOOMR.utils.addListener(a.document, "mousemove", e, !0);
                return {
                    analyze: j,
                    stop: l,
                    onBeacon: m
                }
            },
            B = function (b, c, d) {
                function e(b, d, e) {
                    d = d || BOOMR.now();
                    if (x) {
                        t++;
                        p || (p = d);
                        var f = 0;
                        if (e && e.timeStamp) {
                            f = e.timeStamp > 14e11 ? d - e.timeStamp : d - s - e.timeStamp;
                            u += f;
                            null === q && (q = Math.round(f));
                            if (f > m) {
                                c.increment("interdly");
                                v++;
                                w += f
                            }
                        }
                        c.increment("inter");
                        if (!C && impl.afterOnloadMonitoring) {
                            z = BOOMR.now();
                            if (!y) {
                                a("Interaction detected, sending a beacon after " + n + " ms");
                                y = z;
                                B = setTimeout(i, o)
                            }
                            if (A) {
                                a("Clearing previous interaction timeout");
                                clearTimeout(A);
                                A = !1
                            }
                            A = setTimeout(i, n)
                        }
                    }
                }

                function g() {
                    C = !0;
                    h()
                }

                function h() {
                    if (A) {
                        clearTimeout(A);
                        A = !1
                    }
                    if (B) {
                        clearTimeout(B);
                        B = !1
                    }
                }

                function i() {
                    a("Sending interaction beacon");
                    h();
                    BOOMR.fireEvent("interaction");
                    impl.addToBeacon("rt.tstart", y);
                    impl.addToBeacon("rt.end", z);
                    impl.addToBeacon("rt.start", "manual");
                    impl.addToBeacon("http.initiator", "interaction");
                    BOOMR.sendBeacon()
                }

                function j(a) {
                    impl.addToBeacon("c.ttfi", r.timeToFirstInteraction());
                    impl.addToBeacon("c.i.dc", r.interactionDelayed());
                    impl.addToBeacon("c.i.dt", r.interactionDelayedTime());
                    impl.addToBeacon("c.i.a", r.interactionAvgDelay());
                    null !== q && impl.addToBeacon("c.fid", r.firstInputDelay(), !0)
                }

                function k() {
                    x = !1
                }

                function l() {
                    w = 0;
                    v = 0;
                    t = 0;
                    u = 0;
                    y = 0;
                    z = 0;
                    C = !1;
                    h()
                }
                c.register("inter", f);
                c.register("interdly", f);
                var m = 50,
                    n = d,
                    o = 3e4,
                    p = 0,
                    q = null,
                    t = 0,
                    u = 0,
                    v = 0,
                    w = 0,
                    x = !0,
                    y = 0,
                    z = 0,
                    A = !1,
                    B = !1,
                    C = !1;
                r.interactionDelayed = function () {
                    return v
                };
                r.interactionDelayedTime = function () {
                    return Math.round(w)
                };
                r.interactionAvgDelay = function () {
                    if (t > 0) return Math.round(u / t)
                };
                r.timeToFirstInteraction = function () {
                    if (p) return p - s
                };
                r.firstInputDelay = function () {
                    if (null !== q) return q
                };
                BOOMR.subscribe("spa_init", g, null, impl);
                return {
                    interact: e,
                    analyze: j,
                    stop: k,
                    onBeacon: l
                }
            },
            C = function (a, b, c) {
                function d() {
                    g = !1
                }
                b.register("vis", f);
                var e = {
                        visible: 0,
                        hidden: 1,
                        prerender: 2,
                        unloaded: 3
                    },
                    g = !0;
                BOOMR.subscribe("visibility_changed", function (a) {
                    var d = BOOMR.now();
                    if (g) {
                        b.increment("vis");
                        b.log(m, d, {
                            s: e[BOOMR.visibilityState()]
                        });
                        c.interact("vis", d, a)
                    }
                });
                return {
                    stop: d
                }
            },
            D = function (a, b, c) {
                function d(a) {
                    var d = BOOMR.now();
                    if (g) {
                        b.increment("orn");
                        b.log(n, d, {
                            a: screen.orientation.angle
                        });
                        c.interact("orn", d, a)
                    }
                }

                function e() {
                    g = !1;
                    BOOMR.utils.removeListener(a, "orientationchange", d)
                }
                b.register("orn", f);
                var g = !0;
                BOOMR.utils.addListener(a, "orientationchange", d, !0);
                return {
                    stop: e
                }
            },
            E = function (a, b) {
                function c() {
                    var a = q && q.memory && q.memory.usedJSHeapSize;
                    a && b.set("mem", a);
                    r = s.length;
                    b.set("domsz", l.documentElement.innerHTML.length);
                    b.set("domln", r);
                    if (p > 0) {
                        var c = Math.min(Math.round(p / r * 100), 100);
                        b.set("mut", c);
                        p = 0
                    }
                }

                function d() {
                    m && o && b.set("bat", o.level)
                }

                function e(a) {
                    a.forEach(function (a) {
                        if ("childList" === a.type)
                            for (var b = 0; b < a.addedNodes.length; b++) {
                                var c = a.addedNodes[b];
                                p++;
                                p += c.getElementsByTagName ? c.getElementsByTagName("*").length : 0
                            }
                    })
                }

                function i() {
                    m = !1;
                    if (n) {
                        clearInterval(n);
                        n = !1
                    }
                    j && j.disconnect();
                    o && o.onlevelchange && (o.onlevelchange = null);
                    s = null
                }
                b.register("mem", g, !0);
                b.register("bat", h, !0);
                b.register("domsz", g, !0);
                b.register("domln", g, !0);
                b.register("mut", f);
                var j, k = 1e3,
                    l = a.document,
                    m = !0,
                    n = !1,
                    o = null,
                    p = 0,
                    r = 0,
                    s = l.getElementsByTagName("*");
                n = setInterval(c, k);
                a.navigator && "function" == typeof a.navigator.getBattery && a.navigator.getBattery().then(function (a) {
                    o = a;
                    o.onlevelchange && (o.onlevelchange = d)
                });
                if ("function" == typeof a.MutationObserver) {
                    j = new a.MutationObserver(e);
                    j.observe(l, {
                        childList: !0,
                        subtree: !0
                    })
                }
                return {
                    stop: i
                }
            };
        impl = {
            monitorLongTasks: !0,
            monitorPageBusy: !0,
            monitorFrameRate: !0,
            monitorInteractions: !0,
            monitorStats: !0,
            afterOnload: !1,
            afterOnloadMaxLength: 6e4,
            afterOnloadMinWait: 5e3,
            waitAfterOnload: !1,
            ttiWaitForFrameworkReady: !1,
            ttiWaitForHeroImages: !1,
            sendLog: !0,
            sendTimeline: !0,
            logMaxEntries: 100,
            initialized: !1,
            complete: !1,
            isSpa: !1,
            firedPageReady: !1,
            afterOnloadMonitoring: !1,
            frameworkReady: null,
            timeline: null,
            ttiMethod: null,
            longTaskMonitor: null,
            pageBusyMonitor: null,
            frameRateMonitor: null,
            interactionMonitor: null,
            scrollMonitor: null,
            clickMonitor: null,
            keyMonitor: null,
            mouseMonitor: null,
            visibilityMonitor: null,
            orientationMonitor: null,
            statsMonitor: null,
            addedVars: [],
            monitors: ["timeline", "longTaskMonitor", "pageBusyMonitor", "frameRateMonitor", "scrollMonitor", "keyMonitor", "clickMonitor", "mouseMonitor", "interactionMonitor", "visibilityMonitor", "orientationMonitor", "statsMonitor"],
            timeOfLastBeacon: 0,
            hasAddedDataToBeacon: !1,
            onBeforeBeacon: function () {
                impl.runAllAnalyzers()
            },
            runAllAnalyzers: function () {
                var a, b;
                if (!impl.hasAddedDataToBeacon) {
                    for (a = 0; a < impl.monitors.length; a++) {
                        b = impl[impl.monitors[a]];
                        b && "function" == typeof b.analyze && b.analyze(impl.timeOfLastBeacon)
                    }
                    impl.addToBeacon("c.lb", impl.timeOfLastBeacon ? impl.timeOfLastBeacon.toString(36) : 0);
                    impl.timeOfLastBeacon = BOOMR.now();
                    impl.hasAddedDataToBeacon = !0
                }
            },
            onBeacon: function () {
                var a;
                if (impl.addedVars && impl.addedVars.length > 0) {
                    BOOMR.removeVar(impl.addedVars);
                    impl.addedVars = []
                }
                for (a = 0; a < impl.monitors.length; a++) {
                    var b = impl[impl.monitors[a]];
                    if (b) {
                        impl.afterOnload || "function" == typeof b.stop && b.stop();
                        "function" == typeof b.onBeacon && b.onBeacon()
                    }
                }
                impl.hasAddedDataToBeacon = !1
            },
            onXhrLoad: function (a) {
                a && BOOMR.utils.inArray(a.initiator, BOOMR.constants.BEACON_TYPE_SPAS) && (impl.isSpa = !0);
                a && "spa_hard" === a.initiator && impl.onPageReady()
            },
            onPageReady: function () {
                impl.firedPageReady = !0;
                if (impl.afterOnload && impl.monitorInteractions) {
                    impl.afterOnloadMonitoring = !0;
                    impl.isSpa || "number" != typeof impl.afterOnloadMaxLength || setTimeout(function () {
                        impl.afterOnloadMonitoring = !1
                    }, impl.afterOnloadMaxLength)
                }
                if (impl.waitAfterOnload) {
                    var a = BOOMR.now();
                    setTimeout(function b() {
                        if (BOOMR.now() - a > impl.waitAfterOnload) {
                            impl.complete = !0;
                            BOOMR.sendBeacon()
                        } else {
                            impl.timeline.analyze();
                            if (r.timeToInteractive()) {
                                impl.complete = !0;
                                BOOMR.sendBeacon()
                            } else setTimeout(b, e)
                        }
                    }, e)
                } else impl.complete = !0
            },
            addToBeacon: function (a, b, c) {
                if (0 !== b && void 0 !== b || c) {
                    BOOMR.addVar(a, b);
                    impl.addedVars.push(a)
                } else BOOMR.removeVar(a)
            }
        };
        BOOMR.plugins.Continuity = {
            init: function (a) {
                BOOMR.utils.pluginConfig(impl, a, "Continuity", ["monitorLongTasks", "monitorPageBusy", "monitorFrameRate", "monitorInteractions", "monitorStats", "afterOnload", "afterOnloadMaxLength", "afterOnloadMinWait", "waitAfterOnload", "ttiWaitForFrameworkReady", "ttiWaitForHeroImages", "sendLog", "logMaxEntries", "sendTimeline"]);
                if (impl.initialized) return this;
                impl.initialized = !0;
                impl.timeline = new t(BOOMR.now());
                if (BOOMR.window) {
                    if (impl.monitorLongTasks && BOOMR.window.PerformanceObserver && BOOMR.window.PerformanceLongTaskTiming) {
                        impl.longTaskMonitor = new u(BOOMR.window, impl.timeline);
                        impl.ttiMethod = "lt"
                    }
                    if (impl.monitorFrameRate && "function" == typeof BOOMR.window.requestAnimationFrame) {
                        impl.frameRateMonitor = new w(BOOMR.window, impl.timeline);
                        impl.ttiMethod || (impl.ttiMethod = "raf")
                    }
                    if (impl.monitorPageBusy && (!BOOMR.window.PerformanceObserver || !BOOMR.window.PerformanceLongTaskTiming || !impl.monitorLongTasks)) {
                        impl.pageBusyMonitor = new v(BOOMR.window, impl.timeline);
                        impl.ttiMethod || (impl.ttiMethod = "b")
                    }
                    if (impl.monitorInteractions) {
                        impl.interactionMonitor = new B(BOOMR.window, impl.timeline, impl.afterOnloadMinWait);
                        impl.scrollMonitor = new x(BOOMR.window, impl.timeline, impl.interactionMonitor);
                        impl.keyMonitor = new z(BOOMR.window, impl.timeline, impl.interactionMonitor);
                        impl.clickMonitor = new y(BOOMR.window, impl.timeline, impl.interactionMonitor);
                        impl.mouseMonitor = new A(BOOMR.window, impl.timeline, impl.interactionMonitor);
                        impl.visibilityMonitor = new C(BOOMR.window, impl.timeline, impl.interactionMonitor);
                        impl.orientationMonitor = new D(BOOMR.window, impl.timeline, impl.interactionMonitor)
                    }
                    impl.monitorStats && (impl.statsMonitor = new E(BOOMR.window, impl.timeline, impl.interactionMonitor))
                }
                BOOMR.addVar("c.e", s.toString(36));
                BOOMR.addVar("c.tti.m", impl.ttiMethod);
                BOOMR.subscribe("before_beacon", impl.onBeforeBeacon, null, impl);
                BOOMR.subscribe("beacon", impl.onBeacon, null, impl);
                BOOMR.subscribe("page_ready", impl.onPageReady, null, impl);
                BOOMR.subscribe("xhr_load", impl.onXhrLoad, null, impl);
                return this
            },
            is_complete: function (a) {
                return impl.complete || a && "error" === a["http.initiator"]
            },
            frameworkReady: function () {
                impl.frameworkReady = BOOMR.now()
            },
            metrics: r
        }
    }
}();
! function () {
    function a(a) {
        try {
            return a.frames.length
        } catch (b) {
            return 0
        }
    }
    var b, c, d, e, f, g;
    if (!BOOMR.plugins.PageParams) {
        var h = ".",
            i = ",",
            j = /(-?(?:[1-9][\d,]*)?[0-9](?:\.\d+)?)/,
            k = 500,
            l = ["img", "iframe", "script", "link", "object", "svg", "video"],
            m = {
                name: 1,
                "honorific-prefix": 1,
                "given-name": 1,
                "additional-name": 1,
                "family-name": 1,
                "honorific-suffix": 1,
                username: 1,
                "new-password": 1,
                "current-password": 1,
                "street-address": 1,
                country: 1,
                "country-name": 1,
                "postal-code": 1,
                email: 1,
                tel: 1
            },
            n = ["cc-", "address-", "tel-"],
            o = [/(?:3[47][0-9]{13})/, /(?:3(?:0[0-5]|[68][0-9])[0-9]{11})/, /(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))/, /(?:(?:2131|1800|35\d{3})\d{11})/, /(?:(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15})/, /(?:(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})/, /(?:4[0-9]{12})(?:[0-9]{3})?/, /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/],
            p = function () {
                return {
                    pageGroups: {
                        varname: "h.pg",
                        stopOnFirst: !0,
                        isDimension: !0
                    },
                    abTests: {
                        varname: "h.ab",
                        stopOnFirst: !0,
                        isDimension: !0
                    },
                    customMetrics: {
                        cleanUpRE: j
                    },
                    customDimensions: {
                        sanitizeRE: /[^\w\. \-]/g,
                        isDimension: !0
                    },
                    customTimers: {
                        cleanUpRE: j,
                        method: BOOMR.plugins.RT && BOOMR.plugins.RT.setTimer,
                        ctx: BOOMR.plugins.RT,
                        preProcessor: function (a) {
                            return Math.round("number" == typeof a ? a : parseFloat(a, 10))
                        }
                    }
                }
            },
            q = ["src", "href", "data", "codebase"],
            r = {
                ".,": j
            },
            s = {
                ".": /\./g,
                ",": /,/g,
                " ": / /g,
                "'": /'/g
            };
        g = function (a) {
            this.varname = a.varname;
            this.method = a.method || BOOMR.addVar;
            this.ctx = a.ctx || BOOMR;
            this.preProcessor = a.preProcessor;
            this.sanitizeRE = a.sanitizeRE || /[^\w \-]/g;
            this.cleanUpRE = a.cleanUpRE;
            this.resourceTime = {};
            this.resources = [];
            this.RTSupport = !1;
            this.MOSupport = !1;
            return this
        };
        g.prototype = {
            apply: function (a) {
                this.preProcessor && (a = this.preProcessor(a));
                if (!a && 0 !== a) return !1;
                "function" == typeof this.method && this.method.call(this.ctx, this.varname, a);
                return !0
            },
            handle: function (a, b, c) {
                var d = this;
                if (!this.isValid(a)) return !1;
                if (a.label)
                    if ("ResourceGroup" === a.type && f.resourceGroupHandlers[a.label]) d = f.resourceGroupHandlers[a.label];
                    else {
                        d = new g(this);
                        d.varname = a.label
                    } return d[a.type](a, b, c)
            },
            isValid: function (a) {
                return a && "object" == typeof a && a.hasOwnProperty("type") && "function" == typeof this[a.type] && (this.varname || a.label)
            },
            cleanUp: function (a, b) {
                var c, d, e, g, j = this.cleanUpRE;
                if (!a) return a;
                if (j) {
                    d = b && b.decimal ? b.decimal : f.defaultDecimal;
                    e = b && b.thousands ? b.thousands : f.defaultThousands;
                    if (d !== h || e !== i) {
                        g = d + e;
                        j = r[g];
                        if (void 0 === j) {
                            j = new RegExp("(-?(?:[1-9][\\d" + e + "]*)?[0-9](?:\\" + d + "\\d+)?)");
                            r[g] = j
                        }
                    }
                    c = a.match(j);
                    if (c && c.length > 1) {
                        a = c[1];
                        j = s[e];
                        if (void 0 === j) {
                            j = new RegExp("\\" + e, "g");
                            s[e] = j
                        }
                        a = a.replace(j, "");
                        d !== h && (a = a.replace(d, h));
                        return a
                    }
                    return ""
                }
                return a.replace(this.sanitizeRE, "")
            },
            isValidObjectMember: function (a, b) {
                return null !== a && ("object" == typeof a || (!("function" != typeof a || !a.hasOwnProperty(b)) || !("string" != typeof a || !a.hasOwnProperty(b))))
            },
            extractFromDOMElement: function (a, b) {
                var c, d, e = "";
                if (f.pci && this.hasSensitiveData(a)) {
                    BOOMR.appendVar("pci.redacted", b.label);
                    return !1
                }
                null === a || !a.nodeName || "INPUT" !== a.nodeName.toUpperCase() && "TEXTAREA" !== a.nodeName.toUpperCase() && "SELECT" !== a.nodeName.toUpperCase() ? null !== a && (e = a.textContent || a.innerText) : ("checkbox" !== a.type.toLowerCase() && "radio" !== a.type.toLowerCase() || a.checked) && (e = a.value);
                if (f.pci && this.isSensitiveData(e)) {
                    BOOMR.appendVar("pci.redacted", b.label);
                    return !1
                }
                if (b.match && "numeric" !== b.match) {
                    if ("boolean" === b.match) e = 1;
                    else if (b.match.match(/^regex:/)) {
                        c = b.match.match(/^regex:(.*)/);
                        if (!c || c.length < 2) return !1;
                        try {
                            d = new RegExp(c[1], "i");
                            d.test(e) && (e = 1)
                        } catch (g) {
                            BOOMR.debug("Bad pattern: " + b.match, "PageVars");
                            BOOMR.debug(g, "PageVars");
                            BOOMR.addError(g, "PageVars.URLPatternType", b.match);
                            return !1
                        }
                    }
                } else e = this.cleanUp(e, b);
                return e
            },
            hasSensitiveData: function (a) {
                var b;
                if (!a) return !1;
                if (a.nodeName && ("INPUT" === a.nodeName.toUpperCase() || "TEXTAREA" === a.nodeName.toUpperCase() || "SELECT" === a.nodeName.toUpperCase())) {
                    var c = a.autocomplete || a.getAttribute("autocomplete");
                    if (c && c.length) {
                        c = c.toLowerCase();
                        if (m[c]) return !0;
                        for (b = 0; b < n.length; b++)
                            if (0 === c.indexOf(n[b])) return !0
                    }
                }
                if (f.pciBlacklist && f.pciBlacklist.length) {
                    if (!f.pciBlacklistQueried) {
                        f.pciBlacklistMatch = this.runQuerySelector(f.pciBlacklist, d, !0);
                        f.pciBlacklistQueried = !0
                    }
                    if (f.pciBlacklistMatch && f.pciBlacklistMatch.length)
                        for (b = 0; b < f.pciBlacklistMatch.length; b++)
                            if (a === f.pciBlacklistMatch[b]) return !0
                }
                return !1
            },
            isSensitiveData: function (a) {
                var b;
                if (!a || !a.length) return !1;
                for (b = 0; b < o.length; b++)
                    if (o[b].exec(a)) return !0;
                return !1
            },
            execSafeRegEx: function (a, b) {
                if (!(a instanceof RegExp)) try {
                    a = new RegExp(a, "i")
                } catch (c) {
                    BOOMR.debug("Error generating regex: " + c, "PageVars");
                    BOOMR.addError(c, "PageVars.handleRegEx", a);
                    return !1
                }
                return void 0 !== b && a.exec(b)
            },
            handleRegEx: function (a, b, c) {
                var d, e;
                e = this.execSafeRegEx(a, c);
                if (!e || !e.length) return !1;
                d = b.replace(/\$([1-9])/g, function (a, b) {
                    return decodeURIComponent(e[parseInt(b, 10)])
                });
                d = this.cleanUp(d);
                return this.apply(d)
            },
            checkURLPattern: function (a, b, d) {
                var e;
                if (!a) return !0;
                e = a.replace(/([.+?\^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/\*/g, ".*?");
                try {
                    e = new RegExp("^" + e + "$", "i")
                } catch (f) {
                    BOOMR.debug("Bad pattern: " + e, "PageVars");
                    BOOMR.debug(f, "PageVars");
                    BOOMR.addError(f, "PageVars.checkURLPattern", a);
                    return !1
                }
                b || (b = c.href);
                if (!e.exec(b)) {
                    d && BOOMR.debug("No match " + e + " on " + b, "PageVars");
                    return !1
                }
                return !0
            },
            nodeWalk: function (a, b) {
                var c, d, e, f;
                if (!b) return a;
                c = b.match(/^(\w+)(?:\[(\d+)\])?\/?(.*)/);
                if (!c || !c.length) return null;
                d = a.getElementsByTagName(c[1]);
                if (c[2]) {
                    e = parseInt(c[2], 10);
                    if (isNaN(e)) return null;
                    e--;
                    if (d.length <= e) return null;
                    d = [d[e]]
                }
                for (e = 0; e < d.length; e++) {
                    f = this.nodeWalk(d[e], c[3]);
                    if (f) return f
                }
                return null
            },
            runXPath: function (a, b) {
                var c, e, f, g = !1;
                b = b || d;
                try {
                    b.evaluate ? c = b.evaluate(a, b, null, 9, null) : b.selectNodes ? c = b.selectNodes(a) : g = !0
                } catch (h) {
                    f = h;
                    g = !0
                }
                if (!c && g) try {
                    if (a.match(/^\/html(?:\/\w+(?:\[\d+\])?)*$/)) {
                        a = a.slice(6);
                        return this.nodeWalk(d, a)
                    }
                    if (null !== (e = a.match(/\[@id=(["'])([^"']+)\1\]((?:\/\w+(?:\[\d+\])?)*)$/))) {
                        c = b.getElementById(e[2]);
                        return c && e[3] ? this.nodeWalk(c, e[3].slice(1)) : c
                    }
                    if (null !== (e = a.match(/\[@class="([^"]+)"\]((?:\/\w+(?:\[\d+\])?)*)$/))) {
                        c = b.getElementsByClassName(e[1]);
                        c && c.length && (c = c[0]);
                        return c && e[2] ? this.nodeWalk(c, e[2].slice(1)) : c
                    }
                    BOOMR.debug("Could not evaluate XPath", "PageVars");
                    if (f) {
                        BOOMR.error("Error evaluating XPath: " + f, "PageVars");
                        BOOMR.addError(f, "PageVars.runXPath.native", a)
                    }
                    return null
                } catch (h) {
                    BOOMR.error("Error evaluating XPath: " + h, "PageVars");
                    BOOMR.addError(h, "PageVars.runXPath.ours", a);
                    return null
                }
                if (!c || 9 !== c.resultType || !c.singleNodeValue) {
                    BOOMR.debug("XPath did not return anything: " + c + ", " + c.resultType + ", " + c.singleNodeValue, "PageVars");
                    return null
                }
                return c.singleNodeValue
            },
            runQuerySelector: function (a, b, c) {
                var e;
                c = c || !1;
                b = b || d;
                try {
                    if (!b.querySelector && !b.querySelectorAll) return null;
                    e = c ? b.querySelectorAll(a) : b.querySelector(a)
                } catch (f) {
                    BOOMR.error("" + f, "PageVars");
                    BOOMR.addError(f, "PageVars.runQueryselector", a);
                    return null
                }
                e || BOOMR.debug("QuerySelector '" + a + "' yielded no result!");
                return e
            },
            JavaScriptVar: function (a) {
                var b;
                if (!this.checkURLPattern(a.parameter1)) return !1;
                b = this.extractJavaScriptVariable(a.varName, a);
                if (!b) {
                    f.mayRetry.push({
                        handler: this,
                        data: a
                    });
                    return !1
                }
                return b
            },
            Custom: function (a) {
                var b;
                if (!this.checkURLPattern(a.parameter2)) return !1;
                b = this.extractJavaScriptVariable(a.parameter1, a);
                if (!b) {
                    f.mayRetry.push({
                        handler: this,
                        data: a
                    });
                    return !1
                }
                return b
            },
            extractJavaScriptVariable: function (a, c, d) {
                var e, f, g, h = d || b;
                if (!a) return !1;
                BOOMR.debug("Got variable: " + a, "PageVars");
                e = a.split(/\[((["'])[\w,.-]*\2|\d*)\]|\./);
                for (g = 0; g < e.length; g++) e[g] && (e[g] = e[g].replace(/("|')/g, ""));
                e = BOOMR.utils.arrayFilter(e, function (a) {
                    return a && a.length > 0
                });
                if (!e || 0 === e.length) return !1;
                f = h[e.shift()];
                try {
                    for (; e.length && this.isValidObjectMember(f, e[0]);) {
                        BOOMR.debug("looking at " + e[0], "PageVars");
                        h = f;
                        f = f[e.shift()]
                    }
                } catch (i) {
                    BOOMR.addError(i, "PageVars.extractJavaScriptVariable", a + "::" + e.join("."));
                    return !1
                }
                if (0 !== e.length) return !1;
                if ("function" == typeof f) try {
                    f = f.call(h, this.varname)
                } catch (i) {
                    BOOMR.addError(i, "PageVars.extractJavaScriptVariable", a + "()");
                    return !1
                }
                if (void 0 === f || "object" == typeof f && null !== f) return !1;
                BOOMR.debug("final value: " + f, "PageVars");
                if (!c || "boolean" !== c.match) {
                    f = this.cleanUp(String(f), c);
                    return this.apply(f)
                }
                if ("string" == typeof f) {
                    f = f.replace(/^\s+|\s+$/g, "").toLowerCase();
                    if ("0" !== f && "false" !== f && f) return this.apply(1)
                } else if (f) return this.apply(1)
            },
            URLPattern: function (a) {
                var b;
                if (!a.parameter2) return !1;
                BOOMR.debug("Got URL Pattern: " + a.parameter1 + ", " + a.parameter2, "PageVars");
                if (!this.checkURLPattern(a.parameter1)) return !1;
                b = BOOMR.utils.getQueryParamValue(a.parameter2, c);
                if (b) {
                    BOOMR.debug("final value: " + b, "PageVars");
                    b = this.cleanUp(b);
                    return this.apply(b)
                }
            },
            URLSubstringEndOfText: function (a) {
                return this.URLSubstringTrailingText(a)
            },
            URLSubstringTrailingText: function (a) {
                if (!a.parameter1) return !1;
                BOOMR.debug("Got URL Substring: " + a.parameter1 + ", " + a.parameter2, "PageVars");
                return this.handleRegEx("^" + a.parameter1.replace(/([.+?\^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/([^\.])\*/g, "$1.*?").replace(/^\*/, ".*") + "(.*)" + (a.parameter2 || "").replace(/([.+?\^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/([^\.])\*/g, "$1.*") + "$", "$1", c.href)
            },
            UserAgentRegex: function (a) {
                return this._Regex(a.parameter1, a.regex, a.replacement, navigator.userAgent)
            },
            CookieRegex: function (a) {
                return this._Regex(a.parameter1, a.regex, a.replacement, a.cookieName ? BOOMR.utils.getCookie(a.cookieName) : d.cookie)
            },
            URLRegex: function (a) {
                return this._Regex(a.parameter1, a.regex, a.replacement, c.href)
            },
            Regexp: function (a, b) {
                var d;
                b && "string" == typeof b && (d = b.match("http(|s)://"));
                return d && d.length > 0 ? this._Regex(null, a.parameter1, a.parameter2, b) : this._Regex(null, a.parameter1, a.parameter2, c.href)
            },
            _Regex: function (a, b, c, d) {
                if (!b || !c) return !1;
                if (!this.checkURLPattern(a)) return !1;
                BOOMR.debug("Got RegEx: " + a + ", " + b + ", " + c, "PageVars");
                return this.handleRegEx(b, c, d)
            },
            URLPatternType: function (a) {
                var b;
                BOOMR.debug("Got URLPatternType: " + a.parameter1 + ", " + a.parameter2, "PageVars");
                if (!this.checkURLPattern(a.parameter1)) return !1;
                if (!a.parameter1 || a.parameter2 || a.queryselector)
                    if (a.queryselector) {
                        b = this.runQuerySelector(a.queryselector);
                        if (!b) return !1;
                        b = this.extractFromDOMElement(b, a)
                    } else {
                        if (!a.parameter2) return !1;
                        b = this.runXPath(a.parameter2);
                        if (!b) return !1;
                        b = this.extractFromDOMElement(b, a)
                    }
                else b = "1";
                BOOMR.debug("Final value: " + b, "PageVars");
                return this.apply(b)
            },
            ResourceTiming: function (a) {
                var b, c, d, g, h, i;
                if (!a.parameter2 && !a.url && !a.queryselector) return !1;
                if (!a.start || !a.end && "*" !== a.start) return !1;
                if (!e || !e.getEntriesByName) {
                    BOOMR.debug("This browser does not support ResourceTiming", "PageVars");
                    return !1
                }
                BOOMR.debug("Got ResourceTiming: " + a.parameter1 + ", " + a.parameter2 + ", " + a.url, "PageVars");
                if (!this.checkURLPattern(a.parameter1)) return !1;
                "slowest" === a.parameter2 || "slowest" === a.url ? c = "slowest" : a.url ? c = a.url : a.parameter2 ? b = this.runXPath(a.parameter2) : a.queryselector && (b = this.runQuerySelector(a.queryselector));
                if (b) c = b.src || b.href;
                else if (!c) return !1;
                d = this.findResource(c, null, f.deltaFromNavStart);
                if (!d) {
                    BOOMR.debug("No resource matched", "PageVars");
                    f.mayRetry.push({
                        handler: this,
                        data: a
                    });
                    return !1
                }
                "slowest" === c && BOOMR.addVar("dom.res.slowest", d.name);
                if ("*" === a.start) {
                    for (i in d) d.hasOwnProperty(i) && i.match(/(Start|End)$/) && d[i] > 0 && BOOMR.addVar(this.varname + "." + i.replace(/^(...).*(St|En).*$/, "$1$2"), Math.round(d[i]));
                    return this.apply(d.duration)
                }
                if (a.relative_to_nt || "navigationStart" === a.start) g = f.deltaFromNavStart;
                else {
                    g = parseFloat(d[a.start], 10);
                    if (!isNaN(g) && 0 === g) {
                        BOOMR.debug("Start was 0 (not supported on this resource)", "PageVars");
                        return !1
                    }
                }
                h = parseFloat(d[a.end], 10);
                if (isNaN(g) || isNaN(h)) {
                    BOOMR.debug("Start or end were not numeric: " + g + ", " + h, "PageVars");
                    return !1
                }
                if (0 === h) {
                    BOOMR.debug("End was 0 (not supported on this resource)", "PageVars");
                    return !1
                }
                BOOMR.debug("Final values: ns:" + f.deltaFromNavStart + ", st:" + g + ", en:" + h, "PageVars");
                BOOMR.addVar(this.varname + "_st", Math.round(g - f.deltaFromNavStart));
                return this.apply(h - g)
            },
            findResource: function (a, b, c) {
                var d = this.findResources(a, b, c, 1);
                return null === d ? null : d && d.length > 0 ? d[0] : null
            },
            getFrameResources: function (a, b) {
                try {
                    a.location && a.location.href;
                    return "performance" in a && a.performance && a.performance.getEntriesByName && a.performance.getEntriesByType ? b ? a.performance.getEntriesByName(b) : a.performance.getEntriesByType("resource") : null
                } catch (c) {
                    if (BOOMR.isCrossOriginError(c)) return null;
                    try {
                        if ("TypeError" === c.name && "Invalid calling object" === c.message && a.document.location.pathname.match(/\.pdf$/)) return null
                    } catch (d) {}
                    BOOMR.addError(c, "PageVars.getFrameResources");
                    return null
                }
            },
            findResources: function (c, d, e, f) {
                var g, h, i, j, k, l, m, n = [];
                d || (d = b);
                e || (e = 0);
                if ("slowest" !== c) {
                    i = this.getFrameResources(d, c);
                    if (null === i) return null;
                    if (i && i.length > 0)
                        for (g = 0; g < i.length; g++)
                            if (!(i[g].startTime < e)) {
                                n.push(i[g]);
                                if (f && n.length === f) return n
                            }
                }
                if (c && (-1 !== c.indexOf("*") || "slowest" === c)) {
                    i = this.getFrameResources(d);
                    if (i && i.length > 0)
                        for (g = 0; g < i.length; g++)
                            if (!(i[g].startTime < e))
                                if ("slowest" === c)(!h || i[g].duration > h.duration) && (h = i[g]);
                                else if (i[g].name && this.checkURLPattern(c, i[g].name, !1)) {
                        n.push(i[g]);
                        if (f && n.length === f) return n
                    }
                }
                if (d.frames) {
                    k = a(d);
                    for (j = 0; j < k; j++) {
                        m = d.frames[j];
                        if (m && m !== d) {
                            l = this.findResources(c, m, e, f ? f - n.length : 0);
                            if (l)
                                for (g = 0; g < l.length; g++)
                                    if ("slowest" === c)(!h || l[g].duration > h.duration) && (h = l[g]);
                                    else {
                                        n.push(l[g]);
                                        if (f && n.length === f) return n
                                    }
                        }
                    }
                }
                return h ? [h] : n
            },
            UserTiming: function (a) {
                var b, c;
                if (!a.parameter2) return !1;
                if (!e || "function" != typeof e.getEntriesByType) {
                    BOOMR.debug("This browser does not support UserTiming", "PageVars");
                    return !1
                }
                if (!this.checkURLPattern(a.parameter1)) return !1;
                b = e.getEntriesByType("mark");
                for (c = 0; b && c < b.length; c++)
                    if (!(b[c].startTime < f.deltaFromNavStart) && b[c].name === a.parameter2) return this.apply(b[c].startTime);
                b = e.getEntriesByType("measure");
                for (c = 0; b && c < b.length; c++)
                    if (!(b[c].startTime < f.deltaFromNavStart) && b[c].name === a.parameter2) {
                        b[c].startTime && BOOMR.addVar(this.varname + "_st", Math.round(b[c].startTime));
                        return this.apply(b[c].duration)
                    } f.mayRetry.push({
                    handler: this,
                    data: a
                })
            },
            Payload: function (a, b, c) {
                var d, e, f, g, h, i = BOOMR.window.DOMParser,
                    j = BOOMR.window.JSON;
                if (!c) return null;
                if (a.url && !this.checkURLPattern(a.url, c.url)) return null;
                if (a.parameter1 && a.parameter2) {
                    if (!c.response || !c.response.raw) return null;
                    if ("queryselector" === a.parameter1 || "xpath" === a.parameter1) {
                        if (c.response.xml) {
                            "queryselector" === a.parameter1 ? d = this.runQuerySelector(a.parameter2, c.response.xml) : "xpath" === a.parameter1 && (d = this.runXPath(a.parameter2, c.response.xml));
                            if (!d) try {
                                if (i) {
                                    e = new i;
                                    f = e.parseFromString(c.response.raw);
                                    "queryselector" === a.parameter1 ? d = this.runQuerySelector(a.parameter2, f) : "xpath" === a.parameter1 && (d = this.runXPath(a.parameter2, f))
                                }
                            } catch (l) {
                                return null
                            }
                            return this.apply(this.extractFromDOMElement(d, a))
                        }
                    } else if ("json" === a.parameter1) {
                        if (c.response.json) return this.extractJavaScriptVariable(a.parameter2, a, c.response.json);
                        if (c.response.raw) try {
                            if (j && "function" == typeof j.parse) {
                                var k = j.parse(c.response.raw);
                                return this.extractJavaScriptVariable(a.parameter2, a, k)
                            }
                        } catch (l) {
                            return null
                        }
                    } else if ("substring" === a.parameter1) {
                        c.response.text || c.response.raw;
                        g = this.execSafeRegEx(a.parameter2, c.response.text);
                        if (!g || !g.length) return !1;
                        h = this.cleanUp(g[0]);
                        return !!h && this.apply(h)
                    }
                }
                return null
            },
            ResourceGroup: function (a, b) {
                var c, d, e, f, g, h, i, j, k = [];
                if (BOOMR.utils.isArray(b)) {
                    i = b[0];
                    j = b[1]
                } else {
                    i = b;
                    j = BOOMR.window.document.URL
                }
                h = void 0 !== i ? i : "onload";
                h = "load" === h ? "onload" : i;
                if (a.value) {
                    this.config = a;
                    for (c in a.value)
                        if (a.value.hasOwnProperty(c) && this.checkURLPattern(c, j) && a.value[c].resources && a.value[c].resources.length > 0) {
                            if (a.value[c].on && a.value[c].on.length > 0 && (BOOMR.utils.inArray(h, a.value[c].on) || "init" === h && BOOMR.utils.inArray("onload", a.value[c].on)))
                                for (var l in a.value[c].resources) a.value[c].resources.hasOwnProperty(l) && k.push(a.value[c].resources[l]);
                            break
                        } if (0 === k.length) return null;
                    this.resourceSet = k;
                    d = BOOMR.getPerformance();
                    d && "function" == typeof d.getEntriesByName && "function" == typeof d.getEntriesByType && (this.RTSupport = !0);
                    this.MOSupport = BOOMR.utils.isMutationObserverSupported();
                    this.eventsrc = h;
                    if (this.RTSupport)
                        for (e = 0; e < k.length; e++) {
                            "init" !== h && "xhr" !== h && this.refreshResourceGroupTimings(this.lookupResources(e), e);
                            this.MOSupport && ("init" === h || this.isOnPageEvent()) && (this.obs = this.setupMutationObserver(e))
                        } else if (this.RTSupport || !this.MOSupport || "init" !== h && !this.isOnPageEvent()) {
                            if (!this.RTSupport && !this.MOSupport && ("init" === h || this.isOnPageEvent()))
                                for (e = 0; e < k.length; e++) {
                                    f = this.setupListener(e);
                                    f && (this.listener = f)
                                }
                        } else
                            for (e = 0; e < k.length; e++) {
                                g = this.setupMutationObserver(e);
                                g && (this.observer = g)
                            }
                    if ("onload" === h && !this.attached) {
                        this.applyTimedResources(!0);
                        this.attached = !0
                    }
                    return this
                }
            },
            setupMutationObserver: function (a) {
                var b = this.resourceSet[a],
                    c = null,
                    d = 0,
                    e = this.getNode(a),
                    f = {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: q
                    };
                if (!this.isOnPageEvent() && "onload" === this.eventsrc) return null;
                "resource" === b.type && (e = BOOMR.window.document.body);
                if (!e && null === e) {
                    this.resourceSet[a].found = !1;
                    this.resourceSet[a].fallback = !0;
                    e = BOOMR.window.document.body
                }
                if (!e || "number" != typeof e.length) {
                    if (e && !this.isContainer(e)) {
                        this.resourceSet[a].found = !0;
                        return null
                    }
                    this.traverseElements(e, a);
                    BOOMR.debug("Starting a Mutation observer for Resource: " + this.config.label, "PageVars.ResourceGroup");
                    return BOOMR.utils.addObserver(e, f, null, this.mutationCb.bind(this), a, this)
                }
                for (d = 0; d < e.length; d++) {
                    c = e[d];
                    this.traverseElements(c, a);
                    if (!c || this.isContainer(c)) {
                        BOOMR.debug("Starting a Mutation observer for Resource: " + this.config.label, "PageVars.ResourceGroup");
                        BOOMR.utils.addObserver(c, f, null, this.mutationCb.bind(this), a, this)
                    } else this.resourceSet[a].found = !0
                }
            },
            setupListener: function (a) {
                function b() {
                    if (f >= k) clearInterval(e);
                    else {
                        g.traverseElements(d, a);
                        f += BOOMR.now() - h;
                        h = BOOMR.now()
                    }
                }
                var c = this.resourceSet[a],
                    d = this.getNode(a),
                    e = null,
                    f = 0,
                    g = this,
                    h = BOOMR.now(),
                    i = 0,
                    j = null;
                "resource" === c.type && (d = BOOMR.window.document.body);
                if ((!d || null === d) && BOOMR.window.document.body) {
                    this.resourceSet[a].found = !1;
                    this.resourceSet[a].fallback = !0;
                    d = BOOMR.window.document.body
                }
                if (BOOMR.window.document.body !== d || null !== d) {
                    if (d && d.length > 0) {
                        this.resourceSet[a].found = !0;
                        for (i = 0; i < d.length; i++) {
                            j = d[i];
                            this.isContainer(j) ? this.traverseElements(d, a) : this.initResourceGroupListener(j, a)
                        }
                        return null
                    }
                    if (!d || this.isContainer(d)) {
                        this.traverseElements(d, a);
                        e = setInterval(b, 100)
                    } else {
                        this.resourceSet[a].found = !0;
                        this.initResourceGroupListener(d, a)
                    }
                }
            },
            findResourceChildren: function (a) {
                var b, c, d, e = [];
                if (!a || !a.getElementsByTagName) return e;
                for (b = 0; b < l.length; b++) {
                    d = a.getElementsByTagName(l[b]);
                    for (c = 0; c < d.length; c++) e.push(d[c])
                }
                return e
            },
            attachContainerElements: function (a, b) {
                var c, d, e = this.resourceSet[b],
                    f = [];
                f = this.findResourceChildren(a);
                for (c in f) {
                    d = this.getNodeURL(f[c]);
                    if ("resource" === e.type && d && this.checkURLPattern(e.value, d)) {
                        this.resourceSet[b].found = !0;
                        this.initResourceGroupListener(f[c], b);
                        break
                    }
                    "resource" !== e.type || d && this.checkURLPattern(e.value, d) ? this.initResourceGroupListener(f[c], b) : !d && this.isOnPageEvent() && this.initResourceGroupListener(f[c], b)
                }
            },
            traverseElements: function (a, b) {
                var c, d = this.resourceSet[b];
                c = this.getNodeURL(a);
                if ("resource" === d.type)
                    if (c && this.checkURLPattern(d.value, c)) {
                        this.resourceSet[b].found = !0;
                        this.initResourceGroupListener(a, b)
                    } else this.isContainer(a) && this.attachContainerElements(a, b);
                else if (this.isContainer(a) && !d.fallback) {
                    this.resourceSet[b].found = !0;
                    this.attachContainerElements(a, b)
                } else if (!this.isContainer(a)) {
                    this.resourceSet[b].found = !0;
                    this.initResourceGroupListener(a, b)
                }
            },
            mutationCb: function (a, b) {
                var c, d, e, f, g, h, i = (this.resourceSet[b], []);
                if (a && a.length > 0) {
                    for (e = 0; e < a.length; e++) {
                        d = a[e];
                        if (d.addedNodes && d.addedNodes.length > 0) {
                            g = d.addedNodes;
                            for (h = 0; h < g.length; h++) i.push(g[h])
                        }
                    }
                    if (i && i.length > 0) {
                        c = this.getNode(b);
                        this.RTSupport && this.refreshResourceGroupTimings(this.lookupResources(b), b);
                        for (f = 0; f < i.length; f++) this.traverseElements(i[f], b);
                        if (c && !c.hasOwnProperty("length") && this.obs && this.obs.observer && this.resourceSet[b].fallback) {
                            BOOMR.debug("Re-Starting MO since we found the node for the ResourceSet", "PageVars.ResourceGroup");
                            this.resourceSet[b].fallback = !1;
                            this.obs.observer.disconnect();
                            clearTimeout(this.obs.timer);
                            this.setupMutationObserver(b)
                        }
                    }
                }
            },
            isOnPageEvent: function (a) {
                return a ? "spa" === a || "spa_hard" === a || "xhr" === a : "spa" === this.eventsrc || "spa_hard" === this.eventsrc || "xhr" === this.eventsrc
            },
            resourceSetIsResolved: function () {
                var a = this.getUnresolvedIndex();
                return "boolean" == typeof a || "number" != typeof a && void 0
            },
            getUnresolvedIndex: function () {
                var a = 0;
                for (a; a < this.resourceSet.length; a++)
                    if (!this.resourceSet[a].found) return a;
                return !1
            },
            hasUnresolvedAddVar: function () {
                if (!this.resourceSetIsResolved()) {
                    var a = this.getUnresolvedIndex();
                    BOOMR.addVar(this.varname + "_rg.err", "nf|" + a);
                    this.resolved = !1;
                    BOOMR.debug("Resource Group '" + this.config.label + "' has not been resolved fully, not going to apply timer!", "PageVars.ResourceGroup");
                    return !0
                }
                return !1
            },
            applyTimedResources: function (a) {
                if (isNaN(this.resourceTime.start) || isNaN(this.resourceTime.stop)) {
                    BOOMR.debug("Resource Group '" + this.config.label + "' start or stop time were not numeric (" + this.resourceTime.start + "," + this.resourceTime.stop + ")", "PageVars.ResourceGroup");
                    return !1
                }
                if (0 === this.resourceTime.stop) {
                    BOOMR.debug("Resource Group '" + this.config.label + "' stop time was 0, this should not happen!", "PageVars.ResourceGroup");
                    BOOMR.addVar(this.varname + "_rg.err", "ne|-");
                    return !1
                }
                if (this.hasUnresolvedAddVar()) return !1;
                this.resolved = !0;
                BOOMR.removeVar(this.varname + "_rg.err");
                a && BOOMR.debug("Resource Group '" + this.config.label + "' final values: " + (this.resourceTime.stop - this.resourceTime.start), "PageVars.ResourceGroup");
                BOOMR.addVar(this.varname + "_st", Math.round(this.resourceTime.start));
                if (this.obs && this.obs.observer) {
                    this.obs.observer.disconnect();
                    clearTimeout(this.obs.timer)
                }
                return this.apply(this.resourceTime.stop - this.resourceTime.start)
            },
            lookupResources: function (a) {
                var b, c, d, e, f = this.resourceSet[a],
                    g = this.getNode(a),
                    h = [],
                    i = 0,
                    j = 0,
                    k = this.getStartTime(a);
                if (g && void 0 === g.length) {
                    this.resourceSet[a].found = !0;
                    b = this.getNodeURL(g);
                    if (b) h = this.findResources(b);
                    else {
                        c = this.findChildElements(g);
                        for (var l = 0; l < c.length; l++) h.push(this.findResource(this.getNodeURL(c[l])))
                    }
                } else if (g && "number" == typeof g.length && g.length > 0 && !g[0][k] && "resource" !== f.type)
                    for (i = 0; i < g.length; i++) {
                        d = g[i];
                        if (this.isContainer(d)) this.traverseElements(d, a);
                        else {
                            e = this.findResources(this.getNodeURL(d));
                            if (e) {
                                this.resourceSet[a].found = !0;
                                for (j = 0; j < e.length; j++) h.push(e[j])
                            }
                        }
                    } else if (g && "number" == typeof g.length) {
                        g.length > 0 && (this.resourceSet[a].found = !0);
                        return g
                    } return h
            },
            refreshResourceGroupTimings: function (a, b) {
                if (a && a.length > 0) {
                    for (var c = 0; c < a.length; c++) this.updateResourceGroupDelta(a[c], b);
                    this.applyTimedResources() || BOOMR.debug("Applying timed Resources failed", "PageParams.ResourceGroup")
                }
            },
            isContainer: function (a) {
                var b;
                if (a && "string" == typeof a.nodeName) {
                    b = this.getNodeURL(a);
                    return !b
                }
            },
            getNode: function (a) {
                var b, c = this.resourceSet[a];
                switch (c.type) {
                    case "xpath":
                        b = this.runXPath(c.value);
                        break;
                    case "queryselector":
                        b = this.runQuerySelector(c.value, !1, !0);
                        break;
                    case "resource":
                        this.RTSupport && (b = this.findResources(c.value));
                        break;
                    default:
                        BOOMR.debug("Found Item of unknown type (" + c.type + "), skipping...", "PageVars")
                }
                b || (this.resourceSet[a].found = !1);
                return b
            },
            findChildElements: function (a) {
                var b, c, d, e = [];
                for (d in l) {
                    b = a.getElementsByTagName(l[d]);
                    for (c = 0; c < b.length; c++) e.push(b[c])
                }
                return e
            },
            getNodeURL: function (a) {
                var b;
                if (!a) return null;
                switch (a.nodeName) {
                    case "IMG":
                    case "IFRAME":
                    case "SCRIPT":
                    case "LINK":
                    case "OBJECT":
                    case "SVG":
                        for (var c = 0; c < q.length; c++) {
                            b = a[q[c]];
                            if ("string" == typeof b && b.length > 0) return b
                        }
                        break;
                    default:
                        return null
                }
            },
            getStartTime: function (a) {
                var b = this.resourceSet[a],
                    c = "fetchStart";
                b.start && (c = b.start);
                return c
            },
            updateResourceGroupDelta: function (a, b) {
                var c, d = this.getStartTime(b);
                if (a) {
                    c = a.responseEnd;
                    if (!c) {
                        BOOMR.debug("Tried to update ResourceGroup delta with unfinished resource! Using now as responseEnd", "PageVars.ResourceGroup");
                        c = BOOMR.hrNow()
                    }
                    "navigationStart" !== d ? (!this.resourceTime.start || this.resourceTime.start > a[d]) && (this.resourceTime.start = a[d]) : this.resourceTime.start = f.deltaFromNavStart;
                    (!this.resourceTime.stop || this.resourceTime.stop < c) && (this.resourceTime.stop = c);
                    BOOMR.debug("New Resource Times for resource: '" + this.config.label + "' start(" + this.resourceTime.start + ") , stop (" + this.resourceTime.stop + ") delta(" + (this.resourceTime.stop - this.resourceTime.start) + ")", "PageVars.ResourceGroup")
                }
            },
            initResourceGroupListener: function (a, b) {
                var c, d = this.resourceSet[b],
                    e = this.getStartTime(b);
                a._bmr_rg = a._bmr_rg || {};
                a._bmr_rg[e] = a._bmr_rg[e] ? a._bmr_rg[e] : BOOMR.hrNow();
                if (a._bmr_rg_resource) {
                    if (a._bmr_rg_resource && !a._bmr_rg_resource.hasOwnProperty("length")) {
                        c = a._bmr_rg_resource;
                        a._bmr_rg_resource = []
                    }
                    a._bmr_rg_resource.push(c, d);
                    this.addResourceGroupListener(a, b)
                } else {
                    a._bmr_rg_resource = d;
                    this.addResourceGroupListener(a, b)
                }
            },
            addResourceGroupListener: function (a, b) {
                function c(a) {
                    var c, f = a.target ? a.target : a.srcElement,
                        g = d.getNodeURL(f),
                        h = d.getStartTime(b);
                    if (d.RTSupport)
                        if ("resource" === e.type && g && d.checkURLPattern(e.value, g)) {
                            c = d.findResources(g);
                            if (c && c.length > 0) {
                                d.resourceSet[b].found = !0;
                                d.refreshResourceGroupTimings(c, b)
                            }
                        } else d.refreshResourceGroupTimings(d.findResources(d.getNodeURL(f)), b);
                    else {
                        g = d.getNodeURL(f);
                        if ("resource" === e.type && g && d.checkURLPattern(e.value, g)) {
                            f._bmr_rg.responseEnd = f._bmr_rg.responseEnd || BOOMR.hrNow();
                            d.updateResourceGroupDelta(f._bmr_rg, b)
                        } else if (f._bmr_rg && f._bmr_rg.responseEnd && f._bmr_rg[h]) d.updateResourceGroupDelta(f._bmr_rg, b);
                        else {
                            f._bmr_rg.responseEnd = f._bmr_rg.responseEnd || BOOMR.hrNow();
                            d.updateResourceGroupDelta(f._bmr_rg, b)
                        }
                    }
                    d.applyTimedResources()
                }
                var d = this,
                    e = this.resourceSet[b];
                a.complete ? c({
                    target: a
                }) : a.addEventListener ? a.addEventListener("load", c) : a.attachEvent && a.attachEvent("onload", c)
            }
        };
        BOOMR.utils.runXPath = g.prototype.runXPath;
        BOOMR.utils.runQuerySelector = g.prototype.runQuerySelector;
        g.prototype.XPath = g.prototype.URLPatternType;
        g.prototype.URLQueryParam = g.prototype.URLPattern;
        f = {
            pageGroups: [],
            abTests: [],
            customTimers: [],
            customMetrics: [],
            customDimensions: [],
            xhrPageGroups: [],
            resourceGroupHandlers: {},
            complete: !1,
            initialized: !1,
            configReceived: !1,
            rerunAfterConfig: !1,
            unloadFired: !1,
            onloadfired: !1,
            defaultDecimal: h,
            defaultThousands: i,
            hasXhrOn: !1,
            hasXhrIgnore: !1,
            autorun: !0,
            pci: !1,
            pciBlacklist: [],
            pciBlacklistQueried: !1,
            pciBlacklistMatch: [],
            beaconQueue: [],
            mayRetry: [],
            deltaFromNavStart: 0,
            matchPageGroupList: function (a, b, c) {
                var d, e = 0;
                for (e = 0; e < b.length; e++) {
                    d = c.handle(b[e], a);
                    BOOMR.debug("Found XHR PageParam matching URL: " + BOOMR.utils.objectToString(d), "PageParams");
                    if (d) return !0
                }
                return !1
            },
            excludeXhrFilter: function (a) {
                var b, c, d, e = 0,
                    h = !1;
                if (!f.xhr) return !1;
                b = p();
                b.pageGroups.varname = "xhr.pg";
                c = f.hasXhrOn ? f.xhrPageGroups : f.pageGroups;
                var i = new g(b.pageGroups);
                i.method = null;
                if ("match" === f.xhr) {
                    for (e = 0; e < c.length; e++) {
                        d = i.handle(c[e], a.href);
                        if (d && !c[e].ignore) {
                            h = !0;
                            break
                        }
                    }
                    if (!h) {
                        BOOMR.debug("excludeXhrFilter: No matching rule found for XHR, skipping: " + BOOMR.utils.objectToString(d), "PageParams");
                        return !0
                    }
                    return !1
                }
                if ("none" === f.xhr) return !0;
                if ("all" === f.xhr || "subresource" === f.xhr)
                    for (e = 0; e < c.length; e++)
                        if (c[e].ignore) {
                            d = i.handle(c[e], a.href);
                            if (d) {
                                BOOMR.debug("excludeXhrFilter: Ignore rule found for XHR, skipping: " + BOOMR.utils.objectToString(d), "PageParams");
                                return !0
                            }
                        } return !1
            },
            done: function (a, e) {
                var h, i, j, k, l, m, n, o = f,
                    q = !1;
                if (f.configReceived) {
                    j = p();
                    if ("xhr" === e || "error" === e || !this.complete) {
                        BOOMR_check_doc_domain();
                        if ("xhr" === e && a && !BOOMR.utils.inArray(a.initiator, BOOMR.constants.BEACON_TYPE_SPAS)) {
                            o = f.extractXHRParams(a, j);
                            if (null === o) return;
                            f.complete = !1;
                            l = a.data ? a.data : a;
                            if (l.url) {
                                c = d.createElement("a");
                                c.href = l.url;
                                m = f.matchPageGroupList(c.href, f.hasXhrOn ? f.xhrPageGroups : f.pageGroups, new g(j.pageGroups));
                                "subresource" !== f.xhr || m || (a.subresource = "active");
                                f.hasXhrOn ? o.pageGroups = f.xhrPageGroups : o.pageGroups = f.pageGroups;
                                j.pageGroups.varname = "xhr.pg";
                                j.pageGroups.preProcessor = function (b) {
                                    if (b && b.match(/_subresource$/)) {
                                        b = b.replace(/_subresource$/, "");
                                        a.subresource = "passive"
                                    }
                                    return b
                                }
                            }
                        } else {
                            c = b.location;
                            this.complete = !0
                        }
                        "error" === e && (q = !0);
                        f.clearMetrics();
                        f.mayRetry = [];
                        if ("xhr" === e && a && "spa" === a.initiator && a.timing && a.timing.requestStart) {
                            n = BOOMR.plugins.RT && BOOMR.plugins.RT.navigationStart && BOOMR.plugins.RT.navigationStart() || BOOMR.t_lstart || BOOMR.t_start;
                            f.deltaFromNavStart = a.timing.requestStart - n
                        } else f.deltaFromNavStart = 0;
                        for (i in j)
                            if (j.hasOwnProperty(i)) {
                                k = new g(j[i]);
                                if (q && !j[i].isDimension) continue;
                                if ("xhr" === e && "pageGroups" === i && l && l.pg && "string" == typeof l.pg) {
                                    BOOMR.debug("Found data.pg on data param " + l.pg, "PageParams");
                                    k.apply(l.pg);
                                    continue
                                }
                                for (h = 0; h < o[i].length; h++)
                                    if ("xhr" === e || !o[i][h].only_xhr) {
                                        var r = "xhr" === e && a && BOOMR.utils.inArray(a.initiator, BOOMR.constants.BEACON_TYPE_SPAS) ? a.initiator : e;
                                        if (k.handle(o[i][h], r, l) && j[i].stopOnFirst) {
                                            o[i][h].subresource && "xhr" === e && a && (a.subresource = "active");
                                            break
                                        }
                                    }
                            } BOOMR.sendBeacon()
                    }
                } else f.rerunAfterConfig = {
                    edata: a,
                    ename: e
                }
            },
            retry: function () {
                var a, b, c, d = f.mayRetry;
                f.mayRetry = [];
                for (a = 0; a < d.length; a++)
                    if (d[a]) {
                        c = b = null;
                        try {
                            b = d[a].handler;
                            c = d[a].data;
                            b[c.type](c)
                        } catch (e) {
                            BOOMR.addError(e, "PageVars.retry." + (c ? c.type : "?") + "." + (b ? b.varname : "?"))
                        }
                    }
            },
            initResourceGroupHandlers: function (a) {
                var b, c, d, e = p();
                if (e.hasOwnProperty("customTimers")) {
                    c = new g(e.customTimers);
                    for (var h = 0; h < f.customTimers.length; h++)
                        if ("ResourceGroup" === f.customTimers[h].type) {
                            b = f.customTimers[h];
                            if (b.label && !f.resourceGroupHandlers.hasOwnProperty(b.label)) {
                                d = c.handle(b, a);
                                d && (f.resourceGroupHandlers[b.label] = d)
                            }
                        }
                }
            },
            removeResolvedResourceGroupHandlers: function () {
                var a;
                for (a in f.resourceGroupHandlers) f.resourceGroupHandlers.hasOwnProperty(a) && f.resourceGroupHandlers[a].resolved && delete f.resourceGroupHandlers[a]
            },
            clearMetrics: function () {
                var a, b;
                for (a = 0; a < f.customMetrics.length; a++) {
                    b = f.customMetrics[a].label;
                    BOOMR.removeVar(b)
                }
                BOOMR.removeVar("dom.res.slowest");
                for (a = 0; a < f.customTimers.length; a++) {
                    b = f.customTimers[a].label + "_st";
                    BOOMR.removeVar(b)
                }
                BOOMR.removeVar("h.pg", "h.ab", "xhr.pg", "pci.redacted");
                f.pciBlacklistQueried = !1
            },
            onload: function () {
                this.onloadfired = !0
            },
            extractXHRParams: function (a, b) {
                var c, d, e, h, i, j, k, l, m, n, o;
                if (!a) return null;
                o = a.data ? a.data : a;
                if (!(o.url || o.timers && o.timers.length || o.metrics && o.metrics.length || o.dimensions && o.dimensions.length)) return null;
                c = {
                    pageGroups: [],
                    abTests: f.abTests,
                    customTimers: [],
                    customMetrics: [],
                    customDimensions: []
                };
                d = {
                    timers: {
                        impl: "customTimers",
                        data: o.timers
                    },
                    metrics: {
                        impl: "customMetrics",
                        data: o.metrics
                    },
                    dimensions: {
                        impl: "customDimensions",
                        data: o.dimensions
                    }
                };
                for (e in d)
                    if (d.hasOwnProperty(e)) {
                        h = d[e];
                        if (h.data && h.data.length)
                            for (m = 0; m < h.data.length; m++) {
                                k = h.data[m].split(/\s*=\s*/);
                                i = k[0];
                                j = k[1];
                                for (l = 0; l < f[h.impl].length; l++)
                                    if (f[h.impl][l].name === i)
                                        if (void 0 === j) c[h.impl].push(f[h.impl][l]);
                                        else {
                                            n = new g(b[h.impl]);
                                            n.varname = f[h.impl].label;
                                            n.apply(n.cleanUp(j));
                                            n = null
                                        }
                            } else if (o.url)
                                for (l = 0; l < f[h.impl].length; l++) f[h.impl][l].xhr_ok && c[h.impl].push(f[h.impl][l])
                    } return c
            },
            onunload: function () {
                f.unloadFired = !0;
                return this
            },
            onBeforeBeacon: function (a) {
                a && "error" === a["http.initiator"] && f.done({}, "error")
            },
            prerenderToVisible: function () {
                this.complete = !1;
                this.done({}, "load")
            },
            runPageParamsHandler: function (a, b) {
                var d, e, h, i = p()[a],
                    j = f[a];
                c = BOOMR.window.location;
                i.method = b;
                e = new g(i);
                for (d = 0; d < j.length; d++)
                    if (!j[d].only_xhr) {
                        h = e.handle(j[d], "custom");
                        if (h && i.stopOnFirst) return h
                    }
            },
            runAllDimensions: function (a) {
                f.runPageParamsHandler("pageGroups", a);
                f.runPageParamsHandler("abTests", a);
                f.runPageParamsHandler("customDimensions", a)
            },
            sendMetric: function (a, b) {
                if ("string" == typeof a && (void 0 === b || "number" == typeof b)) {
                    void 0 === b && (b = 1);
                    var c = {};
                    c[a] = b;
                    f.sendMetrics(c)
                }
            },
            sendMetrics: function (a) {
                "object" == typeof a && f.addToBeaconQueue({
                    metrics: a
                })
            },
            sendTimer: function (a, b) {
                if ("string" == typeof a && "number" == typeof b) {
                    var c = {};
                    c[a] = b;
                    f.sendTimers(c)
                }
            },
            sendTimers: function (a) {
                "object" == typeof a && f.addToBeaconQueue({
                    timers: a
                })
            },
            sendAll: function (a) {
                "object" == typeof a && f.addToBeaconQueue(a)
            },
            addToBeaconQueue: function (a) {
                a.timestamp || (a.timestamp = BOOMR.now());
                a.vars || (a.vars = {});
                f.configReceived ? f.runAllDimensions(function (b, c) {
                    a.vars[b] = c
                }) : a.needsDimensions = !0;
                f.beaconQueue.push(a);
                BOOMR.setImmediate(f.processBeaconQueue)
            },
            processBeaconQueue: function (a) {
                var b, c, d, e, g = {},
                    h = !1,
                    i = !1;
                if (0 !== f.beaconQueue.length && f.configReceived) {
                    b = f.beaconQueue.shift();
                    g["rt.tstart"] = b.timestamp;
                    g["rt.end"] = b.timestamp;
                    g["http.initiator"] = "api_custom_" + (b.timers ? "timer" : "metric");
                    if (b.metrics)
                        for (d in b.metrics)
                            if (b.metrics.hasOwnProperty(d)) {
                                h = !1;
                                for (c = 0; c < f.customMetrics.length; c++)
                                    if (d === f.customMetrics[c].name) {
                                        h = i = !0;
                                        g[f.customMetrics[c].label] = b.metrics[d];
                                        break
                                    } h || BOOMR.warn("Custom Metric " + d + " not found")
                            } if (b.timers)
                        for (d in b.timers)
                            if (b.timers.hasOwnProperty(d)) {
                                h = !1;
                                for (c = 0; c < f.customTimers.length; c++)
                                    if (d === f.customTimers[c].name) {
                                        h = i = !0;
                                        g.t_other ? g.t_other += "," : g.t_other = "";
                                        g.t_other += f.customTimers[c].label + "|" + b.timers[d];
                                        break
                                    } h || BOOMR.warn("Custom Timer " + d + " not found")
                            } if (i) {
                        for (var e in b.vars) b.vars.hasOwnProperty(e) && (g[e] = b.vars[e]);
                        f.sendBeacon(g);
                        BOOMR.setImmediate(f.processBeaconQueue)
                    } else BOOMR.warn("No data found to send, aborting Custom beacon")
                }
            },
            sendBeacon: function (a) {
                a.d = BOOMR.session.domain;
                a["h.key"] = BOOMR.getVar("h.key");
                a["h.d"] = BOOMR.getVar("h.d");
                a["h.cr"] = BOOMR.getVar("h.cr");
                a["h.t"] = BOOMR.getVar("h.t");
                a.pid = BOOMR.pageId;
                a["rt.start"] = "manual";
                if (BOOMR.session && !1 !== BOOMR.session.ID) {
                    a["rt.si"] = BOOMR.session.ID + "-" + Math.round(BOOMR.session.start / 1e3).toString(36);
                    a["rt.ss"] = BOOMR.session.start;
                    a["rt.sl"] = BOOMR.session.length
                }
                a.api = 1;
                a["api.v"] = 2;
                a["api.l"] = "boomr";
                a.v = BOOMR.version;
                BOOMR.fireEvent("before_custom_beacon", a);
                BOOMR.sendBeaconData(a)
            }
        };
        BOOMR.sendMetric = f.sendMetric;
        BOOMR.sendMetrics = f.sendMetrics;
        BOOMR.sendTimer = f.sendTimer;
        BOOMR.sendTimers = f.sendTimers;
        BOOMR.sendAll = f.sendAll;
        BOOMR.plugins.PageParams = {
            init: function (a) {
                var g = ["pageGroups", "abTests", "customTimers", "customMetrics", "customDimensions", "autorun", "defaultDecimal", "defaultThousands", "xhr", "pci", "pciBlacklist"],
                    h = 0,
                    i = [];
                b = BOOMR.window;
                c = b.location;
                d = b.document;
                e = BOOMR.getPerformance();
                BOOMR.utils.pluginConfig(f, a, "PageParams", g);
                f.complete = !1;
                if (f.pageGroups && f.pageGroups.length > 0)
                    for (h = 0; h < f.pageGroups.length; h++)
                        if (f.pageGroups[h]) {
                            if (f.pageGroups[h].on && f.pageGroups[h].on.indexOf("xhr") > -1 || f.pageGroups[h].ignore) {
                                f.xhrPageGroups.push(f.pageGroups[h]);
                                f.hasXhrOn = !0;
                                f.pageGroups[h].ignore && (f.hasXhrIgnore = !0);
                                if (f.pageGroups[h].on && 1 === f.pageGroups[h].on.length || f.pageGroups[h].ignore) continue
                            }
                            i.push(f.pageGroups[h])
                        } f.pageGroups = i;
                void 0 !== a.autorun && (f.autorun = a.autorun);
                f.pci && BOOMR.addVar("pci", 1);
                if (f.initialized) {
                    f.configReceived = !0;
                    f.initResourceGroupHandlers("init");
                    for (var j = 0; j < f.beaconQueue.length; j++)
                        if (f.beaconQueue[j].needsDimensions) {
                            f.runAllDimensions(function (a, b) {
                                f.beaconQueue[j].vars[a] = b
                            });
                            delete f.beaconQueue[j].needsDimensions
                        } if (f.rerunAfterConfig) {
                        BOOMR.debug("Re-running now that config came in");
                        f.done(f.rerunAfterConfig.edata, f.rerunAfterConfig.ename);
                        f.rerunAfterConfig = !1;
                        return
                    }
                }
                BOOMR.setImmediate(f.processBeaconQueue);
                if (f.onloadfired) f.autorun && f.done("load");
                else {
                    BOOMR.subscribe("page_ready", f.onload, "load", f);
                    BOOMR.subscribe("page_ready", f.done, "load", f);
                    BOOMR.subscribe("prerender_to_visible", f.prerenderToVisible, "load", f);
                    BOOMR.subscribe("spa_init", f.initResourceGroupHandlers);
                    BOOMR.subscribe("xhr_init", f.initResourceGroupHandlers)
                }
                if (!f.initialized) {
                    BOOMR.subscribe("before_unload", f.onunload, null, f);
                    BOOMR.subscribe("before_unload", f.done, "unload", f);
                    BOOMR.subscribe("beacon", f.clearMetrics, null, f);
                    BOOMR.subscribe("beacon", f.removeResolvedResourceGroupHandlers);
                    BOOMR.subscribe("xhr_load", f.done, "xhr", f);
                    BOOMR.subscribe("before_beacon", f.onBeforeBeacon, null, f);
                    BOOMR.plugins.AutoXHR && BOOMR.plugins.AutoXHR.addExcludeFilter(f.excludeXhrFilter, f, "BOOMR.plugins.PageParams.PageGroups");
                    f.initialized = !0
                }
                return this
            },
            is_complete: function () {
                f.mayRetry.length > 0 && f.retry();
                return f.configReceived || f.unloadFired
            },
            readyToSend: function () {
                return f.configReceived || f.unloadFired
            }
        }
    }
}();
! function () {
    function a(a) {
        BOOMR.debug("(url: " + BOOMR.window.location.href + "): " + a, "IFrameDelay")
    }
    if (!BOOMR.plugins.IFrameDelay) {
        var b = {
            registerParent: !1,
            monitoredCount: 0,
            finishedCount: 0,
            runningCount: 0,
            messages: {
                start: "boomrIframeLoading",
                done: "boomrIframeLoaded"
            },
            checkRunningFrames: function () {
                setTimeout(function () {
                    if (b.monitoredCount !== b.runningCount) {
                        a("monitoredCount(" + b.monitoredCount + ") did not match registered running count(" + b.runningCount + ")");
                        b.monitoredCount = b.runningCount;
                        b.checkCompleteness()
                    }
                }, 50)
            },
            onIFrameMessage: function (c) {
                a("Received message: '" + c.data + "' from child IFrame");
                if (c && c.data && "string" == typeof c.data) {
                    c.data === b.messages.start && (b.runningCount += 1);
                    if (c.data === b.messages.done) {
                        b.runningCount -= 1;
                        b.finishedCount += 1;
                        b.checkCompleteness()
                    }
                }
            },
            checkCompleteness: function () {
                if (b.is_complete()) {
                    BOOMR.addVar("ifdl.done", BOOMR.now());
                    BOOMR.addVar("ifdl.ct", b.finishedCount);
                    BOOMR.addVar("ifdl.r", b.runningCount);
                    BOOMR.addVar("ifdl.mon", b.monitoredCount);
                    BOOMR.page_ready()
                }
            },
            is_complete: function () {
                return !(b.enabled && !b.registerParent) || b.finishedCount === b.monitoredCount && 0 === b.runningCount
            }
        };
        BOOMR.plugins.IFrameDelay = {
            init: function (c) {
                BOOMR.utils.pluginConfig(b, c, "IFrameDelay", ["enabled", "registerParent", "monitoredCount"]);
                if (BOOMR.utils.hasPostMessageSupport())
                    if (b.registerParent) {
                        a("Found registerParent=true, trying to notify parent window");
                        BOOMR.window.parent.postMessage(b.messages.start, "*");
                        BOOMR.subscribe("page_load_beacon", function (a) {
                            BOOMR.window.parent.postMessage(b.messages.done, "*")
                        })
                    } else if (!b.registerParent && b.monitoredCount && b.monitoredCount > 0) {
                    BOOMR.utils.addListener(BOOMR.window, "message", b.onIFrameMessage);
                    BOOMR.attach_page_ready(b.checkRunningFrames)
                } else {
                    a("Missing configuration. Setting monitored, finished and running to 0 and closing this plugin");
                    b.finishedCount = b.monitoredCount = b.runningCount = 0
                }
            },
            is_complete: function () {
                return b.is_complete()
            }
        }
    }
}();
! function () {
    function a(a) {
        BOOMR.debug(a, "AutoXHR")
    }

    function b(a) {
        if (!a) return null;
        a.href = a.href;
        var b = a.pathname;
        "/" !== b.charAt(0) && (b = "/" + b);
        return b
    }

    function c(a) {
        if (a.href) {
            if (a.href.match(/^(about:|javascript:|data:)/i)) return !0;
            if (0 === a.href.indexOf(BOOMR.getBeaconURL())) return !0
        }
        return BOOMR.xhr_excludes.hasOwnProperty(a.href) || BOOMR.xhr_excludes.hasOwnProperty(a.hostname) || BOOMR.xhr_excludes.hasOwnProperty(b(a))
    }

    function d() {
        this.watch = 0;
        this.timer = null;
        this.pending_events = [];
        this.lastSpaLocation = null
    }

    function e() {
        BOOMR.subscribe("click", function () {
            if (!n) {
                var a = {
                    timing: {},
                    initiator: "click"
                };
                if (BOOMR.orig_XMLHttpRequest && BOOMR.orig_XMLHttpRequest !== BOOMR.window.XMLHttpRequest) {
                    a.timing.requestStart = BOOMR.now();
                    k.addEvent(a)
                }
            }
        })
    }

    function f() {
        if (!BOOMR.proxy_XMLHttpRequest || BOOMR.proxy_XMLHttpRequest !== BOOMR.window.XMLHttpRequest)
            if (BOOMR.proxy_XMLHttpRequest && BOOMR.orig_XMLHttpRequest && BOOMR.orig_XMLHttpRequest === BOOMR.window.XMLHttpRequest) {
                BOOMR.window.XMLHttpRequest = BOOMR.proxy_XMLHttpRequest;
                d.start()
            } else {
                BOOMR.orig_XMLHttpRequest = BOOMR.window.orig_XMLHttpRequest || BOOMR.window.XMLHttpRequest;
                d.start();
                e();
                BOOMR.proxy_XMLHttpRequest = function () {
                    var a, b, c, d = {
                            timing: {},
                            initiator: "xhr"
                        },
                        e = !1,
                        f = !1;
                    a = new BOOMR.orig_XMLHttpRequest;
                    b = a.open;
                    c = a.send;
                    a.open = function (c, g, h) {
                        function loadFinished() {
                            var a, b, c, e, f = !1,
                                g = BOOMR.now();
                            if (!d.timing.loadEventEnd) {
                                d.status && BOOMR.fireEvent("xhr_error", d);
                                d.timing.loadEventEnd = g;
                                a = BOOMR.getResourceTiming(d.url, function (a, b) {
                                    return a.responseEnd - b.responseEnd
                                });
                                if (a) {
                                    b = BOOMR.getPerformance().timing.navigationStart;
                                    d.timing.loadEventEnd = BOOMR.now();
                                    c = Math.floor(b + a.startTime);
                                    if (d.timing.requestStart - c >= 2) f = !1;
                                    else {
                                        if (0 !== a.responseEnd) {
                                            e = Math.floor(b + a.responseEnd);
                                            if (e <= d.timing.loadEventEnd) {
                                                d.timing.responseEnd = e;
                                                f = !0;
                                                d.restiming = a
                                            }
                                        }
                                        if (f) {
                                            d.timing.requestStart = c;
                                            d.timing.fetchStart = c;
                                            0 !== a.responseStart && (d.timing.responseStart = Math.floor(b + a.responseStart))
                                        }
                                    }
                                }
                                d.index > -1 ? k.load_finished(d.index, d.timing.responseEnd) : m.alwaysSendXhr ? k.sendResource(d) : n && !o || k.addEvent(d)
                            }
                        }

                        function i(b, c) {
                            a.addEventListener(b, function () {
                                if ("readystatechange" === b) {
                                    d.timing[p[a.readyState]] = BOOMR.now();
                                    if (4 === a.readyState && 0 !== a.status) {
                                        (a.status < 200 || a.status >= 400) && (d.status = a.status);
                                        d.response = {
                                            text: "" === a.responseType || "text" === a.responseType ? a.responseText : null,
                                            xml: "" === a.responseType || "document" === a.responseType ? a.responseXML : null,
                                            raw: a.response,
                                            json: a.responseJSON
                                        };
                                        loadFinished()
                                    }
                                } else {
                                    d.status = void 0 === c ? a.status : c;
                                    loadFinished()
                                }
                            }, !1)
                        }
                        l.href = g;
                        if (m.excludeFilter(l)) {
                            f = !0;
                            BOOMR.debug("Exclude found for resource: " + l.href + " Skipping instrumentation!", "AutoXHR");
                            return b.apply(a, arguments)
                        }
                        f = !1;
                        void 0 === h && (h = !0);
                        BOOMR.fireEvent("xhr_init", "xhr");
                        if (!e) {
                            h && i("readystatechange");
                            i("load");
                            i("timeout", r);
                            i("error", t);
                            i("abort", s)
                        }
                        d.url = l.href;
                        d.method = c;
                        delete d.status;
                        h || (d.synchronous = !0);
                        e = !0;
                        try {
                            return b.apply(a, arguments)
                        } catch (j) {
                            d.status = u;
                            loadFinished();
                            throw j
                        }
                    };
                    a.send = function (b) {
                        if (f) return c.apply(a, arguments);
                        a.resource.requestPayload = b;
                        BOOMR.fireEvent("xhr_send", a);
                        d.timing.requestStart = BOOMR.now();
                        n && k.watch && !m.alwaysSendXhr && k.add_event_resource(d);
                        return void 0 === d.status || d.status !== u ? c.apply(a, arguments) : void 0
                    };
                    a.resource = d;
                    return a
                };
                BOOMR.proxy_XMLHttpRequest.UNSENT = 0;
                BOOMR.proxy_XMLHttpRequest.OPENED = 1;
                BOOMR.proxy_XMLHttpRequest.HEADERS_RECEIVED = 2;
                BOOMR.proxy_XMLHttpRequest.LOADING = 3;
                BOOMR.proxy_XMLHttpRequest.DONE = 4;
                BOOMR.proxy_XMLHttpRequest.prototype = BOOMR.orig_XMLHttpRequest.prototype;
                BOOMR.window.XMLHttpRequest = BOOMR.proxy_XMLHttpRequest
            }
    }

    function g() {
        BOOMR.orig_XMLHttpRequest && BOOMR.orig_XMLHttpRequest !== BOOMR.window.XMLHttpRequest && (BOOMR.window.XMLHttpRequest = BOOMR.orig_XMLHttpRequest)
    }

    function h(a) {
        a.initiator = "xhr";
        BOOMR.responseEnd(a)
    }
    var i, j, k, l, m, n = !1,
        o = !1,
        p = ["uninitialized", "open", "responseStart", "domInteractive", "responseEnd"],
        q = 1e3,
        r = -1001,
        s = -999,
        t = -998,
        u = -997,
        v = ["xmlhttprequest", "script"];
    if (!BOOMR.plugins.AutoXHR) {
        i = BOOMR.window;
        if (i && i.XMLHttpRequest && (new i.XMLHttpRequest).addEventListener) {
            d.stop = function () {
                d.pause();
                d.observer = null
            };
            d.pause = function () {
                if (d.observer && d.observer.observer && !d.isPaused) {
                    d.isPaused = !0;
                    d.observer.observer.disconnect()
                }
            };
            d.resume = function () {
                if (d.observer && d.observer.observer && d.isPaused) {
                    d.isPaused = !1;
                    d.observer.observer.observe(j, d.observer.config)
                }
            };
            d.start = function () {
                if (!d.observer) {
                    var a = {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["src", "href"]
                    };
                    d.observer = BOOMR.utils.addObserver(j, a, null, k.mutation_cb, null, k);
                    if (d.observer) {
                        d.observer.config = a;
                        BOOMR.subscribe("page_unload", d.stop, null, d)
                    }
                }
            };
            d.prototype.addEvent = function (a) {
                var b, c, e, f = {
                        type: a.initiator,
                        resource: a,
                        nodes_to_wait: 0,
                        total_nodes: 0,
                        resources: [],
                        complete: !1
                    },
                    g = this.pending_events.length;
                for (b = g - 1; b >= 0; b--)
                    if (this.pending_events[b] && !this.pending_events[b].complete) {
                        c = this.pending_events[b];
                        e = b;
                        break
                    } if (c)
                    if ("click" === c.type) 0 !== c.nodes_to_wait && c.resource.url || (this.pending_events[b] = void 0);
                    else if ("xhr" === c.type) {
                    if ("click" === f.type) return null
                } else if (BOOMR.utils.inArray(c.type, BOOMR.constants.BEACON_TYPE_SPAS)) {
                    if ("xhr" === f.type) return null;
                    if (BOOMR.utils.inArray(f.type, BOOMR.constants.BEACON_TYPE_SPAS)) {
                        BOOMR.debug("Aborting previous SPA navigation");
                        c.resource.timing.loadEventEnd = BOOMR.now();
                        c.aborted = !0;
                        this.sendEvent(e)
                    }
                }
                this.watch++;
                this.pending_events.push(f);
                if (d.observer) {
                    BOOMR.utils.inArray(f.type, BOOMR.constants.BEACON_TYPE_SPAS) ? this.setTimeout(q, g) : this.setTimeout(50, g);
                    return g
                }
                if (BOOMR.utils.inArray(f.type, BOOMR.constants.BEACON_TYPE_SPAS)) {
                    d.start();
                    this.setTimeout(q, g);
                    return g
                }
                a.url && a.timing.loadEventEnd && this.sendEvent(g);
                return null
            };
            d.prototype.sendEvent = function (b) {
                var c = this.pending_events[b],
                    d = this,
                    e = BOOMR.now();
                if (c && !c.complete) {
                    this.clearTimeout();
                    if (BOOMR.readyToSend()) {
                        c.complete = !0;
                        this.watch--;
                        c.resource.resources = c.resources;
                        BOOMR.utils.inArray(c.type, BOOMR.constants.BEACON_TYPE_SPAS) && (c.resource.url = j.URL);
                        if ("spa" === c.type && 0 === c.total_nodes && c.resource.url === d.lastSpaLocation) {
                            a("SPA beacon cancelled, no URL change or resources triggered");
                            this.pending_events[b] = void 0;
                            return
                        }
                        if (BOOMR.utils.inArray(c.type, BOOMR.constants.BEACON_TYPE_SPAS)) {
                            d.lastSpaLocation = c.resource.url;
                            c.forced || 0 !== c.total_nodes || (c.resource.timing.loadEventEnd = e - q)
                        }
                        this.sendResource(c.resource, b)
                    } else setTimeout(function () {
                        d.sendEvent(b)
                    }, 500)
                }
            };
            d.prototype.sendResource = function (a, b) {
                var c = this,
                    d = c.pending_events[b],
                    e = a.timing ? a.timing.requestStart : void 0,
                    f = function (d, f) {
                        d && (a.timing.loadEventEnd = f || BOOMR.now());
                        BOOMR.real_sendBeacon();
                        a.onComplete && a.onComplete(a);
                        if (BOOMR.plugins.ResourceTiming && BOOMR.plugins.ResourceTiming.is_enabled() && a.timing && a.timing.requestStart) {
                            var g = BOOMR.plugins.ResourceTiming.getCompressedResourceTiming(a.timing.requestStart, a.timing.loadEventEnd);
                            BOOMR.plugins.ResourceTiming.addToBeacon(g)
                        }
                        if (BOOMR.utils.inArray(a.initiator, BOOMR.constants.BEACON_TYPE_SPAS)) {
                            c.calculateSpaTimings(a);
                            if ("number" == typeof b && c.pending_events[b].aborted) {
                                BOOMR.addVar("pgu", j.URL);
                                BOOMR.addVar("rt.quit", "");
                                BOOMR.addVar("rt.abld", "");
                                m.addedVars.push("pgu", "rt.quit", "rt.abld")
                            }
                        }
                        BOOMR.responseEnd(a, e, a);
                        "number" == typeof b && (c.pending_events[b] = void 0)
                    };
                if (a.wait) a.waitComplete = function () {
                    f(!0)
                };
                else {
                    if ("spa_hard" === a.initiator && (!d || !d.aborted) && j && j.readyState && "complete" !== j.readyState) {
                        BOOMR.window.addEventListener("load", function () {
                            var a = BOOMR.now();
                            BOOMR.setImmediate(function () {
                                f(!0, a)
                            })
                        });
                        return
                    }
                    f(!1)
                }
            };
            d.prototype.calculateSpaTimings = function (a) {
                var b = BOOMR.getPerformance();
                if (b && b.timing)
                    if ("spa_hard" === a.initiator) {
                        a.timing.responseEnd = b.timing.responseStart;
                        a.timing.fetchStart = b.timing.navigationStart
                    } else {
                        if (!BOOMR.plugins.ResourceTiming || !BOOMR.plugins.ResourceTiming.is_supported()) return;
                        var c = BOOMR.plugins.ResourceTiming.getFilteredResourceTiming(a.timing.requestStart, a.timing.loadEventEnd, m.spaBackEndResources).entries,
                            d = Math.round(a.timing.loadEventEnd - a.timing.requestStart);
                        if (!c || !c.length) {
                            a.timers = {
                                t_resp: 0,
                                t_page: d,
                                t_done: d
                            };
                            return
                        }
                        for (var e = a.timing.loadEventEnd - b.timing.navigationStart, f = 0; f < c.length; f++)
                            if (c[f].responseStart > e) {
                                c[f].responseStart = e;
                                c[f].responseEnd = e
                            } else c[f].responseEnd > e && (c[f].responseEnd = e);
                        var g = Math.round(BOOMR.plugins.ResourceTiming.calculateResourceTimingUnion(c)),
                            h = d - g;
                        if (g < 0 || d < 0 || h < 0) {
                            BOOMR.addError("Incorrect SPA time calculation");
                            return
                        }
                        a.timers = {
                            t_resp: g,
                            t_page: h,
                            t_done: d
                        }
                    }
            };
            d.prototype.setTimeout = function (a, b) {
                var c = this;
                if (a) {
                    this.clearTimeout();
                    this.timer = setTimeout(function () {
                        c.timedout(b)
                    }, a)
                }
            };
            d.prototype.timedout = function (a) {
                var b;
                this.clearTimeout();
                b = this.pending_events[a];
                if (b && BOOMR.utils.inArray(b.type, BOOMR.constants.BEACON_TYPE_SPAS.concat("xhr"))) 0 === b.nodes_to_wait && this.sendEvent(a);
                else {
                    this.watch > 0 && this.watch--;
                    this.pending_events[a] = void 0
                }
            };
            d.prototype.clearTimeout = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null
                }
            };
            d.prototype.load_cb = function (a, b) {
                var c, d, e = BOOMR.now();
                c = a.target || a.srcElement;
                if (c && c._bmr) {
                    d = c._bmr.idx;
                    b = void 0 !== b ? b : c._bmr.res || 0;
                    if (!c._bmr.end[b]) {
                        c._bmr.end[b] = e;
                        this.load_finished(d, e)
                    }
                }
            };
            d.prototype.load_finished = function (a, b) {
                var c = this.pending_events[a];
                if (c) {
                    c.nodes_to_wait--;
                    if (0 === c.nodes_to_wait) {
                        c.resource.timing.loadEventEnd = b || BOOMR.now();
                        BOOMR.utils.inArray(c.type, BOOMR.constants.BEACON_TYPE_SPAS) ? this.setTimeout(q, a) : this.sendEvent(a)
                    }
                }
            };
            d.prototype.wait_for_node = function (a, b) {
                var c, d, e, f, g, h, i = this,
                    j = !1,
                    k = !1;
                if (a.nodeName.toUpperCase().match(/^(IMG|SCRIPT|IFRAME|IMAGE)$/) || "LINK" === a.nodeName && a.rel && a.rel.match(/\<stylesheet\>/i)) {
                    a._bmr && "number" == typeof a._bmr.res && a._bmr.end[a._bmr.res] && (k = !0);
                    g = a.src || a.getAttribute("xlink:href") || a.href;
                    if ("IMG" === a.nodeName) {
                        if (a.naturalWidth && !k) return !1;
                        if ("" === a.getAttribute("src")) return !1
                    }
                    if (!g || g.match(/^(about:|javascript:|data:)/i)) return !1;
                    c = this.pending_events[b];
                    if (!c) return !1;
                    h = c.resources.length;
                    a._bmr || (a._bmr = {
                        end: {}
                    });
                    c.urls || (c.urls = {});
                    if (c.urls[g]) return !1;
                    if ("SCRIPT" === a.nodeName && n) return !1;
                    if (!c.resource.url) {
                        l.href = g;
                        if (m.excludeFilter(l)) {
                            BOOMR.debug("Exclude for " + l.href + " matched. Excluding", "AutoXHR");
                            return !1
                        }
                        c.resource.url = l.href
                    }
                    a._bmr.res = h;
                    a._bmr.idx = b;
                    delete a._bmr.end[h];
                    a.addEventListener("load", function (a) {
                        i.load_cb(a, h)
                    });
                    a.addEventListener("error", function (a) {
                        i.load_cb(a, h)
                    });
                    c.nodes_to_wait++;
                    this.clearTimeout();
                    c.total_nodes++;
                    c.resources.push(a);
                    c.urls[g] = 1;
                    j = !0
                } else a.nodeType === Node.ELEMENT_NODE && ["IMAGE", "IMG"].forEach(function (c) {
                    d = a.getElementsByTagName(c);
                    if (d && d.length)
                        for (e = 0, f = d.length; e < f; e++) j |= this.wait_for_node(d[e], b)
                }, this);
                return j
            };
            d.prototype.add_event_resource = function (a) {
                var b, c = this.pending_events.length - 1;
                if (c < 0) return -1;
                b = this.pending_events[c];
                if (!b) return -1;
                if (!a) return -1;
                b.nodes_to_wait++;
                b.total_nodes++;
                a.index = c;
                return c
            };
            d.prototype.mutation_cb = function (a) {
                var b, c, d;
                if (!this.watch) return !0;
                b = this;
                c = this.pending_events.length - 1;
                if (c < 0 || !this.pending_events[c]) return !0;
                d = this.pending_events[c];
                void 0 === d.interesting && (d.interesting = !1);
                if (a && a.length) {
                    d.resource.timing.domComplete = BOOMR.now();
                    a.forEach(function (a) {
                        var e, f, g;
                        if ("attributes" === a.type) d.interesting |= b.wait_for_node(a.target, c);
                        else if ("childList" === a.type) {
                            f = a.addedNodes.length;
                            for (e = 0; e < f; e++) d.interesting |= b.wait_for_node(a.addedNodes[e], c);
                            f = a.removedNodes.length;
                            for (e = 0; e < f; e++) {
                                g = a.removedNodes[e];
                                "IFRAME" === g.nodeName && g._bmr && b.load_cb({
                                    target: g,
                                    type: "removed"
                                })
                            }
                        }
                    })
                }
                if (!d.interesting && !this.timeoutExtended) {
                    this.setTimeout(1e3, c);
                    this.timeoutExtended = !0
                }
                return !0
            };
            d.prototype.queue_is_empty = function () {
                return 0 === this.nodesWaitingFor()
            };
            d.prototype.nodesWaitingFor = function () {
                if (0 === this.pending_events.length) return 0;
                var a = this.pending_events.length - 1;
                return this.pending_events[a] ? this.pending_events[a].nodes_to_wait : 0
            };
            d.prototype.completeEvent = function () {
                var a, b, c = BOOMR.now();
                if (0 !== this.pending_events.length) {
                    a = this.pending_events.length - 1;
                    b = this.pending_events[a];
                    if (b) {
                        b.resource.timing.loadEventEnd = c;
                        b.forced = !0;
                        this.sendEvent(a)
                    }
                }
            };
            k = new d;
            m = {
                spaBackEndResources: v,
                alwaysSendXhr: !1,
                excludeFilters: [],
                initialized: !1,
                addedVars: [],
                excludeFilter: function (b) {
                    var c, d, e;
                    if (!b || !b.href) return !1;
                    for (c = 0; c < m.excludeFilters.length; c++)
                        if ("function" == typeof m.excludeFilters[c].cb) {
                            e = m.excludeFilters[c].ctx;
                            m.excludeFilters[c].name && a("Running filter: " + m.excludeFilters[c].name + " on URL: " + b.href);
                            try {
                                d = m.excludeFilters[c].cb.call(e, b);
                                if (d) {
                                    BOOMR.debug("Found matching filter at: " + m.excludeFilters[c].name + " for URL: " + b.href, "AutoXHR");
                                    return !0
                                }
                            } catch (f) {
                                BOOMR.addError(f, "BOOMR.plugins.AutoXHR.impl.excludeFilter()")
                            }
                        } return !1
                },
                clear: function () {
                    if (m.addedVars && m.addedVars.length > 0) {
                        BOOMR.removeVar(m.addedVars);
                        m.addedVars = []
                    }
                }
            };
            BOOMR.plugins.AutoXHR = {
                is_complete: function () {
                    return !0
                },
                init: function (a) {
                    function b(a) {
                        if (a.length)
                            for (d = 0; d < a.length; d++) h(a[d]);
                        else h(a)
                    }
                    var d, e;
                    if (BOOMR.window && BOOMR.window.document) {
                        j = BOOMR.window.document;
                        l = BOOMR.window.document.createElement("A");
                        BOOMR.utils.pluginConfig(m, a, "AutoXHR", ["spaBackEndResources", "alwaysSendXhr"]);
                        BOOMR.instrumentXHR = f;
                        BOOMR.uninstrumentXHR = g;
                        if (!m.initialized) {
                            this.addExcludeFilter(c, null, "shouldExcludeXhr");
                            m.initialized = !0
                        }
                        if (a && a.AutoXHR && a.AutoXHR.excludeFilters && a.AutoXHR.excludeFilters.length > 0)
                            for (e = 0; e < a.AutoXHR.excludeFilters.length; e++) m.excludeFilters.push(a.AutoXHR.excludeFilters[e]);
                        o = a.instrument_xhr;
                        if (BOOMR.plugins.SPA && BOOMR.plugins.SPA.supported_frameworks) {
                            var i = BOOMR.plugins.SPA.supported_frameworks();
                            for (d = 0; d < i.length; d++) {
                                var k = i[d];
                                if (a[k] && a[k].enabled) {
                                    n = !0;
                                    break
                                }
                            }
                        }
                        if (m.alwaysSendXhr && o && BOOMR.xhr && "function" == typeof BOOMR.xhr.stop) {
                            var p = BOOMR.xhr.stop(b);
                            p && p.length && BOOMR.setImmediate(b, p)
                        }
                        if (n) {
                            m.alwaysSendXhr || (o = !1);
                            o && BOOMR.instrumentXHR()
                        } else o ? BOOMR.instrumentXHR() : !1 === o && BOOMR.uninstrumentXHR();
                        BOOMR.registerEvent("xhr_error");
                        BOOMR.subscribe("beacon", m.clear, null, m)
                    }
                },
                getMutationHandler: function () {
                    return k
                },
                getPathname: b,
                enableAutoXhr: function () {
                    o || BOOMR.instrumentXHR();
                    o = !0
                },
                addExcludeFilter: function (a, b, c) {
                    m.excludeFilters.push({
                        cb: a,
                        ctx: b,
                        name: c
                    })
                }
            }
        }
    }
}();
! function () {
    function a(a) {
        BOOMR.debug(a, "spa")
    }
    var b, c = !1,
        d = !1,
        e = !1,
        f = !1,
        g = !1,
        h = !0,
        i = !1,
        j = !1,
        k = !1,
        l = [],
        m = !1;
    if (!BOOMR.plugins.SPA && BOOMR.plugins.AutoXHR) {
        var n = {
            spaHardMissedOnComplete: function (a) {
                m = !1;
                var b, c, d = BOOMR.getPerformance();
                if (d && d.timing && d.timing.navigationStart && d.timing.loadEventEnd) {
                    b = d.timing.navigationStart;
                    c = d.timing.loadEventEnd
                } else b = BOOMR.t_start;
                BOOMR.addVar("spa.missed", "1");
                BOOMR.plugins.RT.clearTimer("t_done");
                a.timing.requestStart = b;
                0 === a.resources.length && c && (a.timing.loadEventEnd = c)
            },
            onBeacon: function () {
                BOOMR.removeVar("spa.missed", "spa.forced", "spa.waiting")
            }
        };
        BOOMR.plugins.SPA = {
            is_complete: function () {
                return !m
            },
            init: function (a) {
                if (a && a.instrument_xhr) {
                    g = a.instrument_xhr;
                    e && g && BOOMR.plugins.AutoXHR.enableAutoXhr()
                }
                if (!d) {
                    d = !0;
                    BOOMR.subscribe("beacon", n.onBeacon, null, n)
                }
            },
            register: function (a) {
                l.push(a)
            },
            supported_frameworks: function () {
                return l
            },
            onLoadSpaHardMissed: function () {
                if (!e) {
                    f = !0;
                    g && BOOMR.plugins.AutoXHR.enableAutoXhr();
                    m = !0;
                    k ? m = !1 : BOOMR.plugins.SPA.route_change(n.spaHardMissedOnComplete)
                }
            },
            hook: function (b, d) {
                d = d || {};
                a("Hooked");
                if (c) return this;
                "function" == typeof d.routeFilter && (i = d.routeFilter);
                "function" == typeof d.routeChangeWaitFilter && (j = d.routeChangeWaitFilter);
                d.disableHardNav && (k = d.disableHardNav);
                b && BOOMR.attach_page_ready(this.onLoadSpaHardMissed);
                c = !0;
                return this
            },
            route_change: function (c, d) {
                a("Route Change");
                var l = !1;
                if (i) try {
                    if (!i.apply(null, d)) {
                        a("Route filter returned false; not tracking this route");
                        return
                    }
                } catch (p) {
                    BOOMR.addError(p, "SPA.route_change.routeFilter")
                }
                e = !0;
                var m = f ? BOOMR.now() : BOOMR.plugins.RT.navigationStart(),
                    n = BOOMR.window.document.URL,
                    o = {
                        timing: {
                            requestStart: m
                        },
                        initiator: h && !k ? "spa_hard" : "spa",
                        url: n
                    };
                h = !1;
                if (!f || "function" == typeof c) {
                    f = !0;
                    o.onComplete = function (a) {
                        if (!l) {
                            l = !0;
                            BOOMR.fireEvent("spa_navigation")
                        }
                        "function" == typeof c && c(a)
                    }
                }
                if (j) try {
                    if (j.apply(null, arguments)) {
                        o.wait = !0;
                        b = o
                    }
                } catch (p) {
                    BOOMR.addError(p, "SPA.route_change.routeChangeWaitFilter")
                }
                o.index = BOOMR.plugins.AutoXHR.getMutationHandler().addEvent(o);
                g && BOOMR.plugins.AutoXHR.enableAutoXhr()
            },
            last_location: function (a) {
                lastLocationChange = a
            },
            current_spa_nav: function () {
                return f ? "spa" : "spa_hard"
            },
            wait_complete: function () {
                if (b) {
                    b.wait = !1;
                    b.waitComplete && b.waitComplete();
                    b = null
                }
            },
            markNavigationComplete: function () {
                a("Navigation being marked complete");
                var b = BOOMR.plugins.AutoXHR.getMutationHandler();
                if (b) {
                    BOOMR.addVar("spa.forced", "1");
                    BOOMR.addVar("spa.waiting", b.nodesWaitingFor());
                    b.completeEvent()
                }
            }
        }
    }
}();
! function () {
    function a(a) {
        function b(b) {
            BOOMR.debug(a.$id + ": " + b, "angular")
        }

        function h() {
            var a = BOOMR.now();
            a - e > 50 && BOOMR.plugins.SPA.route_change.call(null, null, arguments);
            e = a;
            clearTimeout(f);
            f = !1
        }
        if (void 0 === a) return !1;
        if (!BOOMR.plugins.AutoXHR || !BOOMR.plugins.SPA) return !1;
        a.$on("$routeChangeStart", function (a, e, f) {
            if (c) {
                b("$routeChangeStart: " + (e ? e.templateUrl : ""));
                h(a, e, f);
                g = !0
            } else d = !0
        });
        a.$on("$locationChangeStart", function (a, d) {
            if (c) {
                b("$locationChangeStart: " + d);
                BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), d]);
                g || (f = setTimeout(h, 0))
            }
        });
        a.$on("$stateChangeStart", function (a, e, f, i, j) {
            if (c) {
                b("$stateChangeStart: " + e);
                h(a, e, f, i, j);
                g = !0
            } else d = !0
        });
        return !0
    }
    var b = !1,
        c = !0,
        d = !1,
        e = 0,
        f = !1,
        g = !1;
    if (!BOOMR.plugins.Angular && void 0 !== BOOMR.plugins.SPA) {
        BOOMR.plugins.SPA.register("Angular");
        BOOMR.plugins.Angular = {
            is_complete: function () {
                return !0
            },
            hook: function (c, d, e) {
                if (b) return this;
                if (a(c)) {
                    BOOMR.plugins.SPA.hook(d, e);
                    b = !0
                }
                return this
            },
            disable: function () {
                c = !1;
                return this
            },
            enable: function () {
                c = !0;
                if (b && d) {
                    d = !1;
                    BOOMR.plugins.SPA.route_change()
                }
                return this
            }
        }
    }
}();
! function () {
    function a(a) {
        function b(a) {
            BOOMR.debug(a, "backbone")
        }
        if (void 0 === BOOMR.window.Backbone || void 0 === a) return !1;
        if (!BOOMR.plugins.AutoXHR || !BOOMR.plugins.SPA) return !1;
        b("Startup");
        a.on("route", function () {
            if (c) {
                BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), BOOMR.window.document.URL]);
                b("route");
                BOOMR.plugins.SPA.route_change()
            } else d = !0
        });
        return !0
    }
    var b = !1,
        c = !0,
        d = !1;
    if (!BOOMR.plugins.Backbone && void 0 !== BOOMR.plugins.SPA) {
        BOOMR.plugins.SPA.register("Backbone");
        BOOMR.plugins.Backbone = {
            is_complete: function () {
                return !0
            },
            hook: function (c, d, e) {
                if (b) return this;
                if (a(c)) {
                    BOOMR.plugins.SPA.hook(d, e);
                    b = !0
                }
                return this
            },
            disable: function () {
                c = !1;
                return this
            },
            enable: function () {
                c = !0;
                if (b && d) {
                    d = !1;
                    BOOMR.plugins.SPA.route_change()
                }
                return this
            }
        }
    }
}();
! function () {
    function a(a) {
        function b(a) {
            BOOMR.debug(a, "Ember")
        }

        function f(a) {
            this._super(a);
            if (!d) {
                e = !0;
                return !0
            }
            b("beforeModel");
            if (a && a.intent && a.intent.url) {
                b("[beforeModel] LastLocation: " + a.intent.url);
                a.promise.then(function () {
                    BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), BOOMR.window.document.URL])
                })
            }
            if (!c) {
                BOOMR.plugins.SPA.route_change();
                c = !0
            }
            return !0
        }

        function g(a) {
            this._super(a);
            if (!d) {
                e = !0;
                return !0
            }
            b("willTransition");
            if (a && a.intent && a.intent.url) {
                b("[willTransition] LastLocation: " + a.intent.url);
                a.promise.then(function () {
                    BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), BOOMR.window.document.URL])
                })
            }
            if (!c) {
                BOOMR.plugins.SPA.route_change();
                c = !0
            }
            return !0
        }

        function h(a) {
            this._super(a);
            if (!d) return !0;
            b("didTransition");
            c = !1
        }
        if (void 0 === a) return !1;
        if (!BOOMR.plugins.AutoXHR || !BOOMR.plugins.SPA) return !1;
        b("Startup");
        a.ApplicationRoute ? a.ApplicationRoute.reopen({
            beforeModel: f,
            actions: {
                willTransition: g,
                didTransition: h
            }
        }) : a.ApplicationRoute = BOOMR.window.Ember.Route.extend({
            beforeModel: f,
            actions: {
                willTransition: g,
                didTransition: h
            }
        });
        return !0
    }
    var b = !1,
        c = !1,
        d = !0,
        e = !1;
    if (!BOOMR.plugins.Ember && void 0 !== BOOMR.plugins.SPA) {
        BOOMR.plugins.SPA.register("Ember");
        BOOMR.plugins.Ember = {
            is_complete: function () {
                return !0
            },
            hook: function (c, d, e) {
                if (b) return this;
                if (a(c)) {
                    BOOMR.plugins.SPA.hook(d, e);
                    b = !0
                }
                return this
            },
            disable: function () {
                d = !1;
                return this
            },
            enable: function () {
                d = !0;
                if (b && e) {
                    e = !1;
                    BOOMR.plugins.SPA.route_change()
                }
                return this
            }
        }
    }
}();
! function () {
    function a(a) {
        BOOMR.debug(a, "History")
    }

    function b() {
        if (d.enabled) {
            if (d.disableHardNav && !BOOMR.onloadFired()) return;
            if (d.routeChangeInProgress) a("routeChangeInProgress, not triggering");
            else {
                a("routeChange triggered, sending route_change() event");
                d.routeChangeInProgress = !0;
                BOOMR.plugins.SPA.route_change()
            }
        } else {
            a("Not enabled - we've missed a routeChange");
            d.hadMissedRouteChange = !0;
            d.routeChangeInProgress = !1
        }
    }

    function c(c) {
        function e(a, b) {
            d.routeChangeInProgress || (a && b ? BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), b]) : a && !b && BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), a]))
        }
        c || (c = BOOMR.window.history);
        var f = {
            listen: c.listen,
            transitionTo: c.transitionTo,
            pushState: c.pushState,
            setState: c.setState,
            replaceState: c.replaceState,
            go: c.go
        };
        c.setState = function () {
            a("setState");
            b();
            f.setState.apply(this, arguments)
        };
        c.listen = function () {
            a("listen");
            b();
            f.listen.apply(this, arguments)
        };
        c.transitionTo = function () {
            a("transitionTo");
            b();
            f.transitionTo.apply(this, arguments)
        };
        c.pushState = function (c, d, g) {
            a("pushState");
            e(d, g);
            b();
            f.pushState.apply(this, arguments)
        };
        c.replaceState = function (c, d, g) {
            a("replaceState");
            e(d, g);
            b();
            f.replaceState.apply(this, arguments)
        };
        c.go = function () {
            a("go");
            b();
            f.go.apply(this, arguments)
        };
        BOOMR.window.addEventListener("hashchange", function (c) {
            a("hashchange");
            !d.routeChangeInProgress && c && BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), c.newURL]);
            b()
        });
        BOOMR.subscribe("beacon", function () {
            a("Beacon sending, resetting routeChangeInProgress.");
            d.routeChangeInProgress = !1
        });
        return !0
    }
    var d = {
        auto: !1,
        enabled: !0,
        hooked: !1,
        routeHooked: !1,
        hadMissedRouteChange: !1,
        routeChangeInProgress: !1,
        disableHardNav: !1
    };
    if (!BOOMR.plugins.History && void 0 !== BOOMR.plugins.SPA && void 0 !== BOOMR.plugins.AutoXHR && BOOMR.window && BOOMR.window.history) {
        BOOMR.plugins.SPA.register("History");
        BOOMR.plugins.History = {
            is_complete: function () {
                return !0
            },
            hook: function (a, b, e) {
                e = e || {};
                e.disableHardNav = d.disableHardNav;
                if (d.hooked) return this;
                if (c(a)) {
                    BOOMR.plugins.SPA.hook(b, e);
                    d.hooked = !0
                }
                return this
            },
            init: function (a) {
                BOOMR.utils.pluginConfig(d, a, "History", ["auto", "enabled", "disableHardNav"]);
                d.auto && d.enabled && this.hook(void 0, !0, {})
            },
            disable: function () {
                d.enabled = !1;
                return this
            },
            enable: function () {
                d.enabled = !0;
                if (d.hooked && d.hadMissedRouteChange) {
                    d.hadMissedRouteChange = !1;
                    BOOMR.plugins.SPA.route_change();
                    d.routeChangeInProgress = !0;
                    a("Hooked and hadMissedRouteChange sending route_change!")
                }
                return this
            }
        }
    }
}();
! function (a) {
    var b, c, d = 1800;
    if (!BOOMR.plugins.RT) {
        c = {
            onloadfired: !1,
            unloadfired: !1,
            visiblefired: !1,
            initialized: !1,
            complete: !1,
            autorun: !0,
            timers: {},
            cookie: "RT",
            cookie_exp: 604800,
            session_exp: d,
            strict_referrer: !0,
            navigationType: 0,
            navigationStart: void 0,
            responseStart: void 0,
            loadTime: 0,
            oboError: 0,
            sessionHistory: [],
            t_start: void 0,
            cached_t_start: void 0,
            cached_xhr_start: void 0,
            t_fb_approx: void 0,
            r: void 0,
            r2: void 0,
            beacon_url: void 0,
            next_beacon_url: void 0,
            basic_timers: {
                t_done: 1,
                t_resp: 1,
                t_page: 1
            },
            crossdomain_sending: !1,
            addedVars: [],
            updateCookie: function (a, b) {
                var e, f, g, h;
                if (!this.cookie) return !1;
                g = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)) || {};
                for (h in g) g.hasOwnProperty(h) && (isNaN(parseInt(h, 10)) || delete g[h]);
                if ("object" == typeof a)
                    for (h in a)
                        if (a.hasOwnProperty(h))
                            if (void 0 === a[h]) g.hasOwnProperty(h) && delete g[h];
                            else {
                                "nu" !== h && "r" !== h || (a[h] = BOOMR.utils.hashQueryString(a[h], !0));
                                g[h] = a[h]
                            } g.dm = BOOMR.session.domain;
                g.si = BOOMR.session.ID;
                g.ss = BOOMR.session.start;
                g.sl = BOOMR.session.length;
                c.session_exp !== d && (g.se = c.session_exp);
                BOOMR.session.rate_limited && (g.rl = 1);
                g.tt = this.loadTime;
                g.obo = this.oboError;
                this.sessionHistory && (g.sh = this.sessionHistory.join(","));
                f = BOOMR.now();
                if (b) {
                    g[b] = f;
                    c.lastActionTime = f
                }
                this.beacon_url && (g.bcn = this.beacon_url);
                BOOMR.debug("Setting cookie (timer=" + b + ")\n" + BOOMR.utils.objectToString(g), "rt");
                if (!BOOMR.utils.setCookie(this.cookie, g, this.cookie_exp)) {
                    BOOMR.error("cannot set start cookie", "rt");
                    return !1
                }
                e = BOOMR.now();
                if (e - f > 50) {
                    BOOMR.utils.removeCookie(this.cookie);
                    BOOMR.error("took more than 50ms to set cookie... aborting: " + f + " -> " + e, "rt")
                }
                return !0
            },
            refreshSession: function (a) {
                a || (a = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)));
                if (a) {
                    a.ss ? BOOMR.session.start = parseInt(a.ss, 10) : BOOMR.session.start = BOOMR.t_lstart || BOOMR.t_start;
                    a.si && a.si.match(/-/) && (BOOMR.session.ID = a.si);
                    a.sl && (BOOMR.session.length = parseInt(a.sl, 10));
                    a.tt && a.tt.match(/\d/) && (this.loadTime = parseInt(a.tt, 10));
                    a.obo && (this.oboError = parseInt(a.obo, 10) || 0);
                    a.dm && !BOOMR.session.domain && (BOOMR.session.domain = a.dm);
                    a.se && (c.session_exp = parseInt(a.se, 10) || d);
                    a.sh && (c.sessionHistory = a.sh.split(","));
                    a.bcn && (this.beacon_url = a.bcn);
                    a.rl && "1" === a.rl && (BOOMR.session.rate_limited = !0)
                }
            },
            maybeResetSession: function (a, b) {
                BOOMR.debug("Current session meta:\n" + BOOMR.utils.objectToString(BOOMR.session), "rt");
                BOOMR.debug("Timers: t_start=" + b + ", sessionLoad=" + c.loadTime + ", sessionError=" + c.oboError + ", lastAction=" + c.lastActionTime, "rt");
                var d = 0;
                BOOMR.session.start && BOOMR.session.length && (d = (BOOMR.now() - BOOMR.session.start) / BOOMR.session.length);
                var e = 1e3 * c.session_exp;
                if (!BOOMR.session.start || b && BOOMR.session.start > b || a - (c.lastActionTime || BOOMR.t_start) > e || d > e) {
                    BOOMR.session.start = b || BOOMR.t_lstart || BOOMR.t_start;
                    BOOMR.session.length = 0;
                    BOOMR.session.rate_limited = !1;
                    c.loadTime = 0;
                    c.oboError = 0;
                    c.beacon_url = c.next_beacon_url;
                    c.lastActionTime = a;
                    c.sessionHistory = [];
                    c.updateCookie({
                        rl: void 0,
                        sl: BOOMR.session.length,
                        ss: BOOMR.session.start,
                        tt: c.loadTime,
                        obo: c.oboError,
                        bcn: c.beacon_url,
                        sh: c.sessionHistory.join(",")
                    })
                }
                BOOMR.debug("New session meta:\n" + BOOMR.utils.objectToString(BOOMR.session), "rt");
                BOOMR.debug("Timers: t_start=" + b + ", sessionLoad=" + c.loadTime + ", sessionError=" + c.oboError, "rt")
            },
            initFromCookie: function () {
                var a, c;
                c = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie));
                if (c) {
                    c.s = Math.max(+c.ld || 0, Math.max(+c.ul || 0, +c.cl || 0));
                    BOOMR.debug("Read from cookie " + BOOMR.utils.objectToString(c), "rt");
                    if (c.s && (c.r || c.nu)) {
                        this.r = c.r;
                        a = BOOMR.utils.hashQueryString(b.URL, !0);
                        BOOMR.debug(this.r + " =?= " + this.r2, "rt");
                        BOOMR.debug(c.s + " <? " + (+c.cl + 15), "rt");
                        BOOMR.debug(c.nu + " =?= " + a, "rt");
                        if (!this.strict_referrer || c.nu && c.nu === a && c.s < +c.cl + 15 || c.s === +c.ul && this.r === this.r2) {
                            this.t_start = c.s; + c.hd > c.s && (this.t_fb_approx = parseInt(c.hd, 10))
                        } else this.t_start = this.t_fb_approx = void 0
                    }
                    c.s && (this.lastActionTime = c.s);
                    this.refreshSession(c);
                    this.updateCookie({
                        s: void 0,
                        r: void 0,
                        nu: void 0,
                        ul: void 0,
                        cl: void 0,
                        hd: void 0,
                        ld: void 0,
                        rl: void 0
                    });
                    this.maybeResetSession(BOOMR.now())
                }
            },
            incrementSessionDetails: function () {
                BOOMR.debug("Incrementing Session Details... ", "RT");
                BOOMR.session.length++;
                isNaN(c.timers.t_done.delta) ? c.oboError++ : c.loadTime += c.timers.t_done.delta;
                c.sessionHistory.unshift(BOOMR.now() + "=" + BOOMR.session.length + ":" + c.oboError + ":" + c.loadTime);
                c.sessionHistory.length > 5 && (c.sessionHistory.length = 5)
            },
            getBoomerangTimings: function () {
                function a(a, b) {
                    var c = Math.round(a || 0),
                        d = Math.round(b || 0);
                    c = 0 === c ? 0 : c - d;
                    return c || ""
                }
                var b, d, e, f, g;
                if (BOOMR.t_start) {
                    BOOMR.plugins.RT.startTimer("boomerang", BOOMR.t_start);
                    BOOMR.plugins.RT.endTimer("boomerang", BOOMR.t_end);
                    BOOMR.plugins.RT.endTimer("boomr_fb", BOOMR.t_start);
                    if (BOOMR.t_lstart) {
                        BOOMR.plugins.RT.endTimer("boomr_ld", BOOMR.t_lstart);
                        BOOMR.plugins.RT.setTimer("boomr_lat", BOOMR.t_start - BOOMR.t_lstart)
                    }
                }
                try {
                    if (window && "performance" in window && window.performance && "function" == typeof window.performance.getEntriesByName) {
                        d = {
                            "rt.bmr": BOOMR.url
                        };
                        d["rt.cnf"] = BOOMR.config_url;
                        for (e in d)
                            if (d.hasOwnProperty(e) && d[e]) {
                                b = window.performance.getEntriesByName(d[e]);
                                if (!b || 0 === b.length || !b[0]) continue;
                                b = b[0];
                                f = a(b.startTime, 0);
                                g = [f, a(b.responseEnd, f), a(b.responseStart, f), a(b.requestStart, f), a(b.connectEnd, f), a(b.secureConnectionStart, f), a(b.connectStart, f), a(b.domainLookupEnd, f), a(b.domainLookupStart, f), a(b.redirectEnd, f), a(b.redirectStart, f)].join(",").replace(/,+$/, "");
                                BOOMR.addVar(e, g);
                                c.addedVars.push(e)
                            }
                    }
                } catch (h) {
                    BOOMR.addError(h, "rt.getBoomerangTimings")
                }
            },
            checkPreRender: function () {
                if ("prerender" !== BOOMR.visibilityState()) return !1;
                BOOMR.plugins.RT.startTimer("t_load", this.navigationStart);
                BOOMR.plugins.RT.endTimer("t_load");
                BOOMR.plugins.RT.startTimer("t_prerender", this.navigationStart);
                BOOMR.plugins.RT.startTimer("t_postrender");
                return !0
            },
            initFromNavTiming: function () {
                var b, c, d;
                if (!this.navigationStart) {
                    c = BOOMR.getPerformance();
                    c && c.navigation && (this.navigationType = c.navigation.type);
                    if (c && c.timing) b = c.timing;
                    else if (a.chrome && a.chrome.csi && a.chrome.csi().startE) {
                        b = {
                            navigationStart: a.chrome.csi().startE
                        };
                        d = "csi"
                    } else if (a.gtbExternal && a.gtbExternal.startE()) {
                        b = {
                            navigationStart: a.gtbExternal.startE()
                        };
                        d = "gtb"
                    }
                    if (b) {
                        BOOMR.addVar("rt.start", d || "navigation");
                        this.navigationStart = b.navigationStart || b.fetchStart || void 0;
                        this.fetchStart = b.fetchStart || void 0;
                        this.responseStart = b.responseStart || void 0;
                        navigator.userAgent.match(/Firefox\/[78]\./) && (this.navigationStart = b.unloadEventStart || b.fetchStart || void 0)
                    } else BOOMR.warn("This browser doesn't support the WebTiming API", "rt")
                }
            },
            validateLoadTimestamp: function (a, b, c) {
                var d;
                if (b && b.timing && b.timing.loadEventEnd) return b.timing.loadEventEnd;
                if (!("xhr" !== c || b && BOOMR.utils.inArray(b.initiator, BOOMR.constants.BEACON_TYPE_SPAS))) return a;
                d = BOOMR.getPerformance();
                return d && d.timing ? d.timing.loadEventEnd ? d.timing.loadEventEnd : a : BOOMR.t_onload || BOOMR.t_lstart || BOOMR.t_start || a
            },
            setPageLoadTimers: function (a, b, d) {
                var e, f;
                if ("xhr" !== a) {
                    c.initFromCookie();
                    c.initFromNavTiming();
                    if (c.checkPreRender()) return !1
                }
                if ("xhr" === a) {
                    if (d.timers)
                        for (var g in d.timers) d.timers.hasOwnProperty(g) && BOOMR.plugins.RT.setTimer(g, d.timers[g]);
                    else if (d && d.timing) {
                        f = d.timing.fetchStart;
                        (void 0 === f || d.timing.responseEnd >= f) && (e = d.timing.responseEnd)
                    }
                } else c.responseStart ? c.responseStart >= c.navigationStart && c.responseStart >= c.fetchStart && (e = c.responseStart) : c.timers.hasOwnProperty("t_page") ? BOOMR.plugins.RT.endTimer("t_page") : c.t_fb_approx && (e = c.t_fb_approx);
                if (e) {
                    f ? BOOMR.plugins.RT.setTimer("t_resp", f, e) : BOOMR.plugins.RT.endTimer("t_resp", e);
                    "load" === a && c.timers.t_load ? BOOMR.plugins.RT.setTimer("t_page", c.timers.t_load.end - e) : b < e ? BOOMR.addVar("t_page.inv", 1) : BOOMR.plugins.RT.setTimer("t_page", b - e)
                }
                if ("load" === a && c.timers.hasOwnProperty("t_postrender")) {
                    BOOMR.plugins.RT.endTimer("t_postrender");
                    BOOMR.plugins.RT.endTimer("t_prerender")
                }
                return !0
            },
            setSupportingTimestamps: function (a) {
                a && BOOMR.addVar("rt.tstart", a);
                "number" == typeof c.navigationStart && c.navigationStart !== a && BOOMR.addVar("rt.nstart", c.navigationStart);
                "number" == typeof c.t_start && c.t_start !== a && BOOMR.addVar("rt.cstart", c.t_start);
                BOOMR.addVar("rt.bstart", BOOMR.t_start);
                BOOMR.t_lstart && BOOMR.addVar("rt.blstart", BOOMR.t_lstart);
                BOOMR.addVar("rt.end", c.timers.t_done.end)
            },
            determineTStart: function (a, b) {
                var d;
                if ("xhr" === a) {
                    b && b.name && c.timers[b.name] ? d = c.timers[b.name].start : b && b.timing && b.timing.requestStart && (d = b.timing.requestStart);
                    void 0 === d && b && BOOMR.utils.inArray(b.initiator, BOOMR.constants.BEACON_TYPE_SPAS) ? BOOMR.addVar("rt.start", "none") : BOOMR.addVar("rt.start", "manual");
                    c.cached_xhr_start = d
                } else {
                    if (c.navigationStart) d = c.navigationStart;
                    else if (c.t_start && 2 !== c.navigationType) {
                        d = c.t_start;
                        BOOMR.addVar("rt.start", "cookie")
                    } else if (c.cached_t_start) d = c.cached_t_start;
                    else {
                        BOOMR.addVar("rt.start", "none");
                        d = void 0
                    }
                    c.cached_t_start = d
                }
                BOOMR.debug("Got start time: " + d, "rt");
                return d
            },
            page_ready: function () {
                this.onloadfired = !0
            },
            check_visibility: function () {
                "visible" === BOOMR.visibilityState() && (c.visiblefired = !0)
            },
            prerenderToVisible: function () {
                if (c.onloadfired && c.autorun) {
                    BOOMR.debug("Transitioned from prerender to " + BOOMR.visibilityState(), "rt");
                    BOOMR.addVar("vis.pre", "1");
                    BOOMR.plugins.RT.done(null, "visible")
                }
            },
            page_unload: function (a) {
                BOOMR.debug("Unload called when unloadfired = " + this.unloadfired, "rt");
                this.unloadfired || BOOMR.plugins.RT.done(a, "unload");
                this.updateCookie({
                    r: b.URL
                }, "beforeunload" === a.type ? "ul" : "hd");
                this.unloadfired = !0
            },
            _iterable_click: function (a, b, d, e) {
                var f;
                if (d) {
                    BOOMR.debug(a + " called with " + d.nodeName, "rt");
                    for (; d && d.nodeName.toUpperCase() !== b;) d = d.parentNode;
                    if (d && d.nodeName.toUpperCase() === b) {
                        BOOMR.debug("passing through", "rt");
                        this.refreshSession();
                        this.maybeResetSession(BOOMR.now());
                        f = e(d);
                        this.updateCookie({
                            nu: f
                        }, "cl");
                        BOOMR.addVar("nu", BOOMR.utils.cleanupURL(f));
                        c.addedVars.push("nu")
                    }
                }
            },
            onclick: function (a) {
                c._iterable_click("Click", "A", a, function (a) {
                    return a.href
                })
            },
            markComplete: function () {
                this.onloadfired && (c.complete = !0)
            },
            onsubmit: function (a) {
                c._iterable_click("Submit", "FORM", a, function (a) {
                    var c = a.getAttribute("action") || b.URL || "";
                    return c.match(/\?/) ? c : c + "?"
                })
            },
            onconfig: function (a) {
                a.beacon_url && (c.beacon_url = a.beacon_url);
                if (a.RT) {
                    a.RT.oboError && !isNaN(a.RT.oboError) && a.RT.oboError > c.oboError && (c.oboError = a.RT.oboError);
                    if (a.RT.loadTime && !isNaN(a.RT.loadTime) && a.RT.loadTime > c.loadTime) {
                        c.loadTime = a.RT.loadTime;
                        isNaN(c.timers.t_done.delta) || (c.loadTime += c.timers.t_done.delta)
                    }
                }
            },
            domloaded: function () {
                BOOMR.plugins.RT.endTimer("t_domloaded")
            },
            clear: function () {
                BOOMR.removeVar("rt.start");
                if (c.addedVars && c.addedVars.length > 0) {
                    BOOMR.removeVar(c.addedVars);
                    c.addedVars = []
                }
            },
            spaNavigation: function () {
                c.onloadfired = !0
            }
        };
        BOOMR.plugins.RT = {
            init: function (d) {
                BOOMR.debug("init RT", "rt");
                a !== BOOMR.window && (a = BOOMR.window);
                d && d.CrossDomain && d.CrossDomain.sending && (c.crossdomain_sending = !0);
                if (a && a.document) {
                    b = a.document;
                    BOOMR.utils.pluginConfig(c, d, "RT", ["cookie", "cookie_exp", "session_exp", "strict_referrer"]);
                    d && void 0 !== d.autorun && (c.autorun = d.autorun);
                    if (d && d.beacon_url) {
                        c.beacon_url && !d.force_beacon_url || (c.beacon_url = d.beacon_url);
                        c.next_beacon_url = d.beacon_url
                    }
                    void 0 !== b && (c.r = c.r2 = BOOMR.utils.hashQueryString(b.referrer, !0));
                    c.initFromCookie();
                    if (c.initialized) return this;
                    c.complete = !1;
                    c.timers = {};
                    c.check_visibility();
                    BOOMR.subscribe("page_ready", c.page_ready, null, c);
                    BOOMR.subscribe("visibility_changed", c.check_visibility, null, c);
                    BOOMR.subscribe("prerender_to_visible", c.prerenderToVisible, null, c);
                    BOOMR.subscribe("page_ready", this.done, "load", this);
                    BOOMR.subscribe("xhr_load", this.done, "xhr", this);
                    BOOMR.subscribe("dom_loaded", c.domloaded, null, c);
                    BOOMR.subscribe("page_unload", c.page_unload, null, c);
                    BOOMR.subscribe("click", c.onclick, null, c);
                    BOOMR.subscribe("form_submit", c.onsubmit, null, c);
                    BOOMR.subscribe("before_beacon", this.addTimersToBeacon, "beacon", this);
                    BOOMR.subscribe("beacon", c.clear, null, c);
                    BOOMR.subscribe("error", c.markComplete, null, c);
                    BOOMR.subscribe("config", c.onconfig, null, c);
                    BOOMR.subscribe("spa_navigation", c.spaNavigation, null, c);
                    BOOMR.subscribe("interaction", c.markComplete, null, c);
                    BOOMR.getBeaconURL = function () {
                        return c.beacon_url
                    };
                    c.initialized = !0;
                    return this
                }
            },
            startTimer: function (a, b) {
                if (a) {
                    "t_page" === a && this.endTimer("t_resp", b);
                    c.timers[a] = {
                        start: "number" == typeof b ? b : BOOMR.now()
                    }
                }
                return this
            },
            endTimer: function (a, b) {
                if (a) {
                    c.timers[a] = c.timers[a] || {};
                    void 0 === c.timers[a].end && (c.timers[a].end = "number" == typeof b ? b : BOOMR.now())
                }
                return this
            },
            clearTimer: function (a) {
                a && delete c.timers[a];
                return this
            },
            setTimer: function (a, b, d) {
                a && (c.timers[a] = void 0 !== d ? {
                    start: b,
                    end: d,
                    delta: d - b
                } : {
                    delta: b
                });
                return this
            },
            addTimersToBeacon: function (a, b) {
                var d, e, f = [];
                for (d in c.timers)
                    if (c.timers.hasOwnProperty(d)) {
                        e = c.timers[d];
                        if ("number" != typeof e.delta) {
                            "number" != typeof e.start && (e.start = "xhr" === b ? c.cached_xhr_start : c.cached_t_start);
                            e.delta = e.end - e.start
                        }
                        if (isNaN(e.delta)) continue;
                        if (c.basic_timers.hasOwnProperty(d)) {
                            BOOMR.addVar(d, e.delta);
                            c.addedVars.push(d)
                        } else f.push(d + "|" + e.delta)
                    } if (f.length) {
                    BOOMR.addVar("t_other", f.join(","));
                    c.addedVars.push("t_other")
                }
                if ("beacon" === b) {
                    c.timers = {};
                    c.complete = !1
                }
            },
            done: function (a, b) {
                BOOMR.debug("Called done: " + b, "rt");
                var d, e, f = BOOMR.now(),
                    g = !1;
                c.complete = !1;
                e = c.validateLoadTimestamp(f, a, b);
                if (("load" === b || "visible" === b || "xhr" === b) && !c.setPageLoadTimers(b, e, a)) return this;
                ("load" === b || "visible" === b || "xhr" === b && a && "spa_hard" === a.initiator) && c.getBoomerangTimings();
                d = c.determineTStart(b, a);
                c.refreshSession();
                c.maybeResetSession(e, d);
                this.endTimer("t_done", e);
                a && "xhr" === a.initiator && this.setTimer("t_done", a.timing.requestStart, a.timing.loadEventEnd);
                BOOMR.removeVar("t_done", "t_page", "t_resp", "t_postrender", "t_prerender", "t_load", "t_other", "rt.tstart", "rt.nstart", "rt.cstart", "rt.bstart", "rt.end", "rt.subres", "http.errno", "http.method", "xhr.sync", "rt.ss", "rt.sl", "rt.tt", "rt.lt");
                c.setSupportingTimestamps(d);
                this.addTimersToBeacon(null, b);
                BOOMR.setReferrer(c.r, c.r2);
                "xhr" === b && a && a && a.data && (a = a.data);
                if ("xhr" === b && a) {
                    g = a.subresource;
                    if (a.url) {
                        BOOMR.addVar("u", BOOMR.utils.cleanupURL(a.url.replace(/#.*/, "")));
                        c.addedVars.push("u")
                    }
                    a.status && (a.status < -1 || a.status >= 400) && BOOMR.addVar("http.errno", a.status);
                    a.method && "GET" !== a.method && BOOMR.addVar("http.method", a.method);
                    a.headers && BOOMR.addVar("http.hdr", a.headers);
                    a.synchronous && BOOMR.addVar("xhr.sync", 1);
                    a.initiator && BOOMR.addVar("http.initiator", a.initiator);
                    c.addedVars.push("http.errno", "http.method", "http.hdr", "xhr.sync", "http.initiator")
                }
                if (g && "passive" !== g) {
                    BOOMR.addVar("rt.subres", 1);
                    c.addedVars.push("rt.subres")
                }
                if ("load" === b || "visible" === b || "xhr" === b && !g || "unload" === b && !c.onloadfired && c.autorun && !c.crossdomain_sending) {
                    c.incrementSessionDetails();
                    c.updateCookie(null, "ld")
                }
                BOOMR.addVar({
                    "rt.tt": c.loadTime,
                    "rt.obo": c.oboError
                });
                c.addedVars.push("rt.tt", "rt.obo");
                c.updateCookie();
                if ("unload" === b) {
                    BOOMR.addVar("rt.quit", "");
                    if (!c.onloadfired) {
                        BOOMR.addVar("rt.abld", "");
                        c.addedVars.push("rt.abld")
                    }
                    c.visiblefired || BOOMR.addVar("rt.ntvu", "")
                }
                c.complete = !0;
                BOOMR.sendBeacon(c.beacon_url);
                return this
            },
            is_complete: function (a) {
                return c.complete || a && "error" === a["http.initiator"]
            },
            updateCookie: function () {
                c.updateCookie()
            },
            getCookie: function () {
                var a;
                if (!c.cookie) return !1;
                a = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(c.cookie)) || {};
                return a
            },
            incrementSessionDetails: function () {
                c.incrementSessionDetails()
            },
            navigationStart: function () {
                c.navigationStart || c.initFromNavTiming();
                return c.navigationStart
            }
        }
    }
}(window);
! function () {
    function a(a) {
        BOOMR.debug(a, "CrossDomain")
    }
    if (!BOOMR.plugins.CrossDomain) {
        var b = BOOMR.window;
        if (b) {
            var c = BOOMR.window.document,
                d = 864e5,
                e = {
                    enabled: !1,
                    cross_domain_url: void 0,
                    session_transferred: !1,
                    debug: !1,
                    iframe_name: "boomerang-cross-domain-session-fetch",
                    iframe: void 0,
                    sending: !1,
                    session: {
                        ID: void 0,
                        start: void 0,
                        length: void 0
                    },
                    session_transferred_time: 0,
                    plugin_start: 0,
                    session_transfer_timedout: !1,
                    session_transfer_timeout: 5e3,
                    session_transfer_complete: !1,
                    setup: function (a) {
                        var d = BOOMR.session;
                        if (BOOMR.plugins.RT) {
                            var f = BOOMR.plugins.RT.getCookie();
                            if (f) {
                                f.obo && (d.obo = f.obo);
                                f.tt && (d.tt = f.tt)
                            }
                        }
                        a = a + "#" + BOOMR.utils.objectToString(d, "&");
                        c.body.appendChild(e.buildIFrame(a, e.iframe_name));
                        b.addEventListener ? b.addEventListener("message", e.onIFrameMessage) : b.attachEvent("onmessage", e.onIFrameMessage)
                    },
                    onIFrameMessage: function (d) {
                        var f;
                        if (b.JSON && -1 !== e.cross_domain_url.indexOf(d.origin)) {
                            try {
                                f = b.JSON.parse(d.data)
                            } catch (g) {
                                a("JSON parsing failed. exiting...");
                                return
                            }
                            if (f) {
                                e.session = {
                                    ID: f.si,
                                    start: parseInt(f.ss, 10),
                                    length: parseInt(f.sl, 10)
                                };
                                e.session_transferred_time = BOOMR.now();
                                f.bcn ? BOOMR.fireEvent("config", {
                                    beacon_url: f.bcn,
                                    RT: {
                                        oboError: f.obo ? parseInt(f.obo, 10) : 0,
                                        loadTime: f.tt ? parseInt(f.tt, 10) : 0
                                    }
                                }) : BOOMR.fireEvent("config", {
                                    beacon_url: BOOMR.getBeaconURL()
                                });
                                a("Session transferred at: " + e.session_transferred_time + " session data is: " + BOOMR.utils.objectToString(e.session));
                                e.session_transferred = !0;
                                BOOMR.sendBeacon();
                                setTimeout(function () {
                                    e.debug || null === c.getElementById(e.iframe_name) || c.body.removeChild(c.getElementById(e.iframe_name))
                                }, 0)
                            }
                        }
                    },
                    buildIFrame: function (b, d) {
                        var e;
                        a("Adding IFrame!");
                        try {
                            e = c.createElement("<IFRAME>")
                        } catch (f) {
                            e = c.createElement("IFRAME")
                        }
                        e.id = d;
                        e.src = b;
                        e.style.display = "none";
                        return e
                    }
                };
            BOOMR.plugins.CrossDomain = {
                init: function (f) {
                    var g, h;
                    if (BOOMR.plugins.RT && !f.primary) {
                        f.CrossDomain && (e.enabled = !0);
                        BOOMR.utils.pluginConfig(e, f, "CrossDomain", ["cross_domain_url", "sending", "session_transfer_timeout", "debug"]);
                        if (e.enabled && !e.session_transferred) {
                            e.plugin_start = BOOMR.now();
                            if (BOOMR.utils.hasPostMessageSupport()) {
                                if (!e.sending && e.enabled) {
                                    e.cross_domain_url && (e.cross_domain_url = e.cross_domain_url.replace(/^\s+|\s+$/g, ""));
                                    if (!e.cross_domain_url) {
                                        e.enabled = !1;
                                        return
                                    }
                                    g = c.createElement("a");
                                    g.href = e.cross_domain_url;
                                    if (g.href === BOOMR.window.location.href || !g.href.match(/^https?:\/\//)) {
                                        e.enabled = !1;
                                        return
                                    }
                                    e.cross_domain_url = g.href;
                                    a("CrossDomain frame for URL: " + e.cross_domain_url);
                                    e.setup(e.cross_domain_url);
                                    setTimeout(function () {
                                        if (!e.session_transferred) {
                                            e.session_transfer_timedout = !0;
                                            e.session_transferred = !0;
                                            e.debug || c.body.removeChild(c.getElementById(e.iframe_name));
                                            a("Session transfer timedout. Setting transferred and setting timedout flag!");
                                            BOOMR.sendBeacon()
                                        }
                                    }, e.session_transfer_timeout)
                                }
                                if (e.sending && e.enabled) {
                                    BOOMR.disable();
                                    a("Client preparing to send postMessage");
                                    var i = b.location.hash.substring(1, b.location.hash.length);
                                    a("Session Data passed via Query: " + i);
                                    var j = i.split("&"),
                                        k = {};
                                    for (h = 0; h < j.length; h++) {
                                        var l = j[h].split("=");
                                        l && l.hasOwnProperty("length") && l.length >= 2 && (k[l[0]] = l[1])
                                    }
                                    var m = {
                                            start: k.start,
                                            length: k.length,
                                            ID: k.ID
                                        },
                                        n = {
                                            obo: k.obo,
                                            tt: k.tt
                                        };
                                    try {
                                        m.start = parseInt(m.start);
                                        m.length = parseInt(m.length);
                                        if (("number" != typeof BOOMR.session.start || m.start < BOOMR.session.start) && m.length >= BOOMR.session.length && m.start > BOOMR.now() - d) {
                                            BOOMR.session.start = m.start;
                                            BOOMR.session.ID && "string" != typeof m.ID || (BOOMR.session.ID = m.ID)
                                        }
                                        BOOMR.plugins.RT.updateCookie();
                                        n.obo = parseInt(n.obo);
                                        n.tt = parseInt(n.tt);
                                        isNaN(n.obo) || isNaN(n.tt) || this.updateCookie(n)
                                    } catch (r) {}
                                    var o = BOOMR.session.start;
                                    o || (o = BOOMR.plugins.RT.navigationStart() || BOOMR.t_lstart || BOOMR.t_start);
                                    var p = BOOMR.plugins.RT.getCookie();
                                    if (!b.JSON) {
                                        a("JSON not available, not going to try and serialize message!");
                                        return
                                    }
                                    var q = b.JSON.stringify(p);
                                    b.parent.postMessage(q, "*");
                                    a("Sending data: session " + q);
                                    e.session_transferred = !0
                                }
                            } else {
                                e.session_transferred = !0;
                                e.enabled = !1;
                                a("postMessage support is not available. Bailing..")
                            }
                        }
                    }
                },
                updateCookie: function (a) {
                    BOOMR.plugins.RT && BOOMR.fireEvent("config", {
                        RT: {
                            oboError: a.obo,
                            loadTime: a.tt
                        }
                    })
                },
                is_complete: function () {
                    if (e.sending) return !0;
                    if (e.session_transfer_complete) return !0;
                    if (e.session && !e.session_transfer_timedout && e.enabled && e.session_transferred) {
                        if (!isNaN(e.session.start) && e.session.start > BOOMR.now() - d && e.session.start < ("number" == typeof BOOMR.session.start ? BOOMR.session.start : BOOMR.now())) {
                            BOOMR.session.start = e.session.start;
                            if (!isNaN(e.session.length) && e.session.length > BOOMR.session.length) {
                                BOOMR.session.length = e.session.length;
                                BOOMR.plugins.RT.incrementSessionDetails()
                            }
                            BOOMR.session.ID = e.session.ID;
                            BOOMR.plugins.RT && BOOMR.plugins.RT.updateCookie()
                        }
                        a("It took " + (e.session_transferred_time - e.plugin_start) + " miliseconds to transfer session data.");
                        BOOMR.addVar("rt.sstr_dur", e.session_transferred_time - e.plugin_start);
                        e.session_transfer_complete = !0
                    }
                    if (e.session_transfer_timedout) {
                        a("Session transfer timedout setting rt.sstr_to to 1");
                        BOOMR.addVar("rt.sstr_to", 1)
                    }
                    return e.session_transferred || !e.enabled
                }
            }
        }
    }
}();
! function () {
    var a, b;
    if (!BOOMR.plugins.BW) {
        b = [{
            name: "image-0.png",
            size: 11773,
            timeout: 1400
        }, {
            name: "image-1.png",
            size: 40836,
            timeout: 1200
        }, {
            name: "image-2.png",
            size: 165544,
            timeout: 1300
        }, {
            name: "image-3.png",
            size: 382946,
            timeout: 1500
        }, {
            name: "image-4.png",
            size: 1236278,
            timeout: 1200
        }, {
            name: "image-5.png",
            size: 4511798,
            timeout: 1200
        }, {
            name: "image-6.png",
            size: 9092136,
            timeout: 1200
        }];
        b.end = b.length;
        b.start = 0;
        b.l = {
            name: "image-l.gif",
            size: 35,
            timeout: 1e3
        };
        a = {
            base_url: "",
            timeout: 15e3,
            nruns: 5,
            latency_runs: 10,
            user_ip: "",
            block_beacon: !1,
            test_https: !1,
            cookie_exp: 604800,
            cookie: "BA",
            results: [],
            latencies: [],
            latency: null,
            runs_left: 0,
            aborted: !1,
            complete: !0,
            running: !1,
            initialized: !1,
            ncmp: function (a, b) {
                return a - b
            },
            iqr: function (a) {
                var b, c, d, e, f = a.length - 1,
                    g = [];
                b = (a[Math.floor(.25 * f)] + a[Math.ceil(.25 * f)]) / 2;
                c = (a[Math.floor(.75 * f)] + a[Math.ceil(.75 * f)]) / 2;
                d = 1.5 * (c - b);
                if (0 === d) return a;
                f++;
                for (e = 0; e < f && a[e] < c + d; e++) a[e] > b - d && g.push(a[e]);
                return g
            },
            calc_latency: function () {
                var a, b, c, d, e, f, g, h = 0,
                    i = 0;
                this.latencies.shift();
                g = this.iqr(this.latencies.sort(this.ncmp));
                b = g.length;
                BOOMR.debug("latencies: " + this.latencies, "bw");
                BOOMR.debug("lat_filtered: " + g, "bw");
                for (a = 0; a < b; a++) {
                    h += g[a];
                    i += g[a] * g[a]
                }
                c = Math.round(h / b);
                e = Math.sqrt(i / b - h * h / (b * b));
                f = (1.96 * e / Math.sqrt(b)).toFixed(2);
                e = e.toFixed(2);
                d = Math.round((g[Math.floor(b / 2)] + g[Math.ceil(b / 2)]) / 2);
                return {
                    mean: c,
                    median: d,
                    stddev: e,
                    stderr: f
                }
            },
            calc_bw: function () {
                var a, c, d, e, f, g, h, i, j, k, l, m, n, o, p = 0,
                    q = [],
                    r = [],
                    s = 0,
                    t = 0,
                    u = 0,
                    v = 0,
                    w = [];
                for (a = 0; a < this.nruns; a++)
                    if (this.results[a] && this.results[a].r) {
                        d = this.results[a].r;
                        m = 0;
                        for (c = d.length - 1; c >= 0 && m < 3 && d[c]; c--)
                            if (null !== d[c].t) {
                                p++;
                                m++;
                                n = 1e3 * b[c].size / d[c].t;
                                q.push(n);
                                if (d[c].t > this.latency.mean) {
                                    o = 1e3 * b[c].size / (d[c].t - this.latency.mean);
                                    r.push(o)
                                } else w.push(c + "_" + d[c].t)
                            }
                    } BOOMR.debug("got " + p + " readings", "bw");
                BOOMR.debug("bandwidths: " + q, "bw");
                BOOMR.debug("corrected: " + r, "bw");
                if (q.length > 3) {
                    q = this.iqr(q.sort(this.ncmp));
                    r = this.iqr(r.sort(this.ncmp))
                } else {
                    q = q.sort(this.ncmp);
                    r = r.sort(this.ncmp)
                }
                BOOMR.debug("after iqr: " + q, "bw");
                BOOMR.debug("corrected: " + r, "bw");
                p = Math.max(q.length, r.length);
                for (a = 0; a < p; a++) {
                    if (a < q.length) {
                        s += q[a];
                        t += Math.pow(q[a], 2)
                    }
                    if (a < r.length) {
                        u += r[a];
                        v += Math.pow(r[a], 2)
                    }
                }
                p = q.length;
                e = Math.round(s / p);
                f = Math.sqrt(t / p - Math.pow(s / p, 2));
                g = Math.round(1.96 * f / Math.sqrt(p));
                f = Math.round(f);
                p = q.length - 1;
                h = Math.round((q[Math.floor(p / 2)] + q[Math.ceil(p / 2)]) / 2);
                if (r.length < 1) {
                    BOOMR.debug("not enough valid corrected datapoints, falling back to uncorrected", "bw");
                    w.push("l==" + r.length);
                    i = e;
                    j = f;
                    k = g;
                    l = h
                } else {
                    p = r.length;
                    i = Math.round(u / p);
                    j = Math.sqrt(v / p - Math.pow(u / p, 2));
                    k = (1.96 * j / Math.sqrt(p)).toFixed(2);
                    j = j.toFixed(2);
                    p = r.length - 1;
                    l = Math.round((r[Math.floor(p / 2)] + r[Math.ceil(p / 2)]) / 2)
                }
                BOOMR.debug("amean: " + e + ", median: " + h, "bw");
                BOOMR.debug("corrected amean: " + i + ", median: " + l, "bw");
                return {
                    mean: e,
                    stddev: f,
                    stderr: g,
                    median: h,
                    mean_corrected: i,
                    stddev_corrected: j,
                    stderr_corrected: k,
                    median_corrected: l,
                    debug_info: w
                }
            },
            load_img: function (a, c, d) {
                function e(b) {
                    return function () {
                        d && d.call(j, a, h, c, b);
                        if (null !== b) {
                            i.onload = i.onerror = null;
                            i = null;
                            clearTimeout(g);
                            j = d = null
                        }
                    }
                }
                var f = this.base_url + b[a].name + "?t=" + BOOMR.utils.generateId(10),
                    g = 0,
                    h = 0,
                    i = new Image,
                    j = this;
                i.onload = e(!0);
                i.onerror = e(!1);
                g = setTimeout(e(null), b[a].timeout + Math.min(400, this.latency ? this.latency.mean : 400));
                h = BOOMR.now();
                i.src = f
            },
            lat_loaded: function (a, b, c, d) {
                if (c === this.latency_runs + 1) {
                    if (null !== d) {
                        var e = BOOMR.now() - b;
                        this.latencies.push(e)
                    }
                    0 === this.latency_runs && (this.latency = this.calc_latency());
                    BOOMR.setImmediate(this.iterate, null, null, this)
                }
            },
            img_loaded: function (a, c, d, e) {
                if (d === this.runs_left + 1 && !this.results[this.nruns - d].r[a])
                    if (null !== e) {
                        var f = {
                            start: c,
                            end: BOOMR.now(),
                            t: null,
                            state: e,
                            run: d
                        };
                        e && (f.t = f.end - f.start);
                        this.results[this.nruns - d].r[a] = f;
                        if (a >= b.end - 1 || void 0 !== this.results[this.nruns - d].r[a + 1]) {
                            BOOMR.debug(BOOMR.utils.objectToString(this.results[this.nruns - d], void 0, 2), "bw");
                            d === this.nruns && (b.start = a);
                            BOOMR.setImmediate(this.iterate, null, null, this)
                        } else this.load_img(a + 1, d, this.img_loaded)
                    } else this.results[this.nruns - d].r[a + 1] = {
                        t: null,
                        state: null,
                        run: d
                    }
            },
            finish: function () {
                this.latency || (this.latency = this.calc_latency());
                var a = this.calc_bw(),
                    b = {
                        bw: a.median_corrected,
                        bw_err: parseFloat(a.stderr_corrected, 10),
                        lat: this.latency.mean,
                        lat_err: parseFloat(this.latency.stderr, 10),
                        bw_time: Math.round(BOOMR.now() / 1e3)
                    };
                BOOMR.addVar(b);
                a.debug_info.length > 0 && BOOMR.addVar("bw_debug", a.debug_info.join(","));
                !isNaN(b.bw) && b.bw > 0 && BOOMR.utils.setCookie(this.cookie, {
                    ba: Math.round(b.bw),
                    be: b.bw_err,
                    l: b.lat,
                    le: b.lat_err,
                    ip: this.user_ip,
                    t: b.bw_time
                }, this.user_ip ? this.cookie_exp : 0);
                this.complete = !0;
                !0 === this.block_beacon && BOOMR.sendBeacon();
                this.running = !1
            },
            iterate: function () {
                if (!this.aborted)
                    if (this.runs_left)
                        if (this.latency_runs) this.load_img("l", this.latency_runs--, this.lat_loaded);
                        else {
                            this.results.push({
                                r: []
                            });
                            this.load_img(b.start, this.runs_left--, this.img_loaded)
                        }
                else this.finish()
            },
            setVarsFromCookie: function () {
                var b, c, d, e, f, g, h, i, j;
                b = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(a.cookie));
                if (b && b.ba) {
                    c = parseInt(b.ba, 10);
                    d = parseFloat(b.be, 10);
                    e = parseInt(b.l, 10) || 0;
                    f = parseFloat(b.le, 10) || 0;
                    g = b.ip.replace(/\.\d+$/, "0");
                    h = parseInt(b.t, 10);
                    i = this.user_ip.replace(/\.\d+$/, "0");
                    j = Math.round(BOOMR.now() / 1e3);
                    if (g === i && h >= j - this.cookie_exp && c > 0) {
                        this.complete = !0;
                        BOOMR.addVar({
                            bw: c,
                            lat: e,
                            bw_err: d,
                            lat_err: f,
                            bw_time: h
                        });
                        return !0
                    }
                }
                return !1
            }
        };
        BOOMR.plugins.BW = {
            init: function (c) {
                if (a.initialized) return this;
                BOOMR.utils.pluginConfig(a, c, "BW", ["base_url", "timeout", "nruns", "cookie", "cookie_exp", "test_https", "block_beacon"]);
                c && c.user_ip && (a.user_ip = c.user_ip);
                if (!a.base_url) return this;
                b.start = 0;
                a.runs_left = a.nruns;
                a.latency_runs = 10;
                a.results = [];
                a.latencies = [];
                a.latency = null;
                a.complete = a.aborted = !1;
                BOOMR.removeVar("ba", "ba_err", "lat", "lat_err");
                a.setVarsFromCookie() || BOOMR.subscribe("page_ready", this.run, null, this);
                a.initialized = !0;
                return this
            },
            run: function () {
                var b;
                if (a.running || a.complete) return this;
                b = BOOMR.window.document.createElement("a");
                b.href = a.base_url;
                if (!a.test_https && "https:" === b.protocol) {
                    BOOMR.info("HTTPS detected, skipping bandwidth test", "bw");
                    a.complete = !0;
                    !0 === a.block_beacon && BOOMR.sendBeacon();
                    return this
                }
                a.base_url = b.href;
                a.running = !0;
                setTimeout(this.abort, a.timeout);
                a.iterate();
                return this
            },
            abort: function () {
                a.aborted = !0;
                a.running && a.finish()
            },
            is_complete: function () {
                return !0 !== a.block_beacon || a.complete
            }
        }
    }
}();
! function () {
    if (!BOOMR.plugins.PaintTiming) {
        var a = {
                "first-paint": "fp",
                "first-contentful-paint": "fcp"
            },
            b = {
                initialized: !1,
                complete: !1,
                supported: null,
                timingCache: {},
                done: function () {
                    var c, d, e;
                    if (this.complete) return this;
                    c = BOOMR.getPerformance();
                    if (c && "function" == typeof c.getEntriesByType) {
                        d = c.getEntriesByType("paint");
                        if (d && d.length) {
                            BOOMR.info("This user agent supports PaintTiming", "pt");
                            for (e = 0; e < d.length; e++) {
                                b.timingCache[d[e].name] = d[e].startTime;
                                a[d[e].name] && BOOMR.addVar("pt." + a[d[e].name], Math.floor(d[e].startTime), !0)
                            }
                            this.complete = !0;
                            BOOMR.sendBeacon()
                        }
                    } else this.complete = !0
                }
            };
        BOOMR.plugins.PaintTiming = {
            init: function () {
                if (!this.is_supported()) {
                    b.complete = !0;
                    b.initialized = !0
                }
                if (!b.initialized) {
                    BOOMR.subscribe("page_ready", b.done, null, b);
                    BOOMR.subscribe("xhr_load", b.done, null, b);
                    BOOMR.subscribe("before_unload", b.done, null, b);
                    b.initialized = !0
                }
                return this
            },
            is_complete: function () {
                return !0
            },
            is_enabled: function () {
                return b.initialized && this.is_supported()
            },
            is_supported: function () {
                var a;
                if (null !== b.supported) return b.supported;
                var a = BOOMR.getPerformance();
                b.supported = a && void 0 !== window.PerformancePaintTiming && "function" == typeof a.getEntriesByType;
                return b.supported
            },
            getTimingFor: function (a) {
                var c, d, e;
                if (b.timingCache[a]) return b.timingCache[a];
                if (this.is_supported()) {
                    var c = BOOMR.getPerformance();
                    if (c && "function" == typeof c.getEntriesByType) {
                        d = c.getEntriesByType("paint");
                        if (d && d.length)
                            for (e = 0; e < d.length; e++)
                                if (d[e].name === a) {
                                    b.timingCache[a] = d[e].startTime;
                                    return b.timingCache[a]
                                }
                    }
                }
            }
        }
    }
}();
! function () {
    function a(a, b) {
        if ("number" == typeof b && 0 !== b) return Math.floor((a || 0) + b)
    }
    if (!BOOMR.plugins.NavigationTiming) {
        var b = {
            complete: !1,
            sendBeacon: function () {
                this.complete = !0;
                BOOMR.sendBeacon()
            },
            xhr_done: function (a) {
                var c;
                if (a && "spa_hard" === a.initiator) b.done(a);
                else if (a && "spa" === a.initiator) b.sendBeacon();
                else {
                    var d, e, f = (BOOMR.window, {});
                    if (a) {
                        a.data && (a = a.data);
                        c = BOOMR.getPerformance();
                        if (c && a.restiming) {
                            f = {
                                nt_red_st: a.restiming.redirectStart,
                                nt_red_end: a.restiming.redirectEnd,
                                nt_fet_st: a.restiming.fetchStart,
                                nt_dns_st: a.restiming.domainLookupStart,
                                nt_dns_end: a.restiming.domainLookupEnd,
                                nt_con_st: a.restiming.connectStart,
                                nt_con_end: a.restiming.connectEnd,
                                nt_req_st: a.restiming.requestStart,
                                nt_res_st: a.restiming.responseStart,
                                nt_res_end: a.restiming.responseEnd
                            };
                            a.restiming.secureConnectionStart && (f.nt_ssl_st = a.restiming.secureConnectionStart);
                            for (e in f)
                                if (f.hasOwnProperty(e) && f[e]) {
                                    f[e] += c.timing.navigationStart;
                                    f[e] = Math.floor(f[e])
                                }
                        }
                        if (a.timing) {
                            d = a.timing;
                            f.nt_req_st || (f.nt_req_st = d.requestStart);
                            f.nt_res_st || (f.nt_res_st = d.responseStart);
                            f.nt_res_end || (f.nt_res_end = d.responseEnd);
                            f.nt_domint = d.domInteractive;
                            f.nt_domcomp = d.domComplete;
                            f.nt_load_st = d.loadEventEnd;
                            f.nt_load_end = d.loadEventEnd
                        }
                        for (e in f) f.hasOwnProperty(e) && !f[e] && delete f[e];
                        BOOMR.addVar(f);
                        try {
                            b.addedVars.push.apply(b.addedVars, Object.keys(f))
                        } catch (g) {}
                        b.sendBeacon()
                    }
                }
            },
            done: function () {
                var c, d, e, f, g, h = BOOMR.window,
                    i = {},
                    j = 0;
                if (this.complete) return this;
                b.addedVars = [];
                c = BOOMR.getPerformance();
                if (c) {
                    if ("function" == typeof c.getEntriesByType) {
                        f = c.getEntriesByType("navigation");
                        if (f && f.length) {
                            BOOMR.info("This user agent supports NavigationTiming2", "nt");
                            f = f[0];
                            j = c.timing ? c.timing.navigationStart : 0
                        } else f = void 0
                    }
                    if (!f && c.timing) {
                        BOOMR.info("This user agent supports NavigationTiming", "nt");
                        f = c.timing
                    }
                    if (f) {
                        i = {
                            nt_nav_st: c.timing ? c.timing.navigationStart : 0,
                            nt_red_st: a(j, f.redirectStart),
                            nt_red_end: a(j, f.redirectEnd),
                            nt_fet_st: a(j, f.fetchStart),
                            nt_dns_st: a(j, f.domainLookupStart),
                            nt_dns_end: a(j, f.domainLookupEnd),
                            nt_con_st: a(j, f.connectStart),
                            nt_con_end: a(j, f.connectEnd),
                            nt_req_st: a(j, f.requestStart),
                            nt_res_st: a(j, f.responseStart),
                            nt_res_end: a(j, f.responseEnd),
                            nt_domloading: a(j, f.domLoading),
                            nt_domint: a(j, f.domInteractive),
                            nt_domcontloaded_st: a(j, f.domContentLoadedEventStart),
                            nt_domcontloaded_end: a(j, f.domContentLoadedEventEnd),
                            nt_domcomp: a(j, f.domComplete),
                            nt_load_st: a(j, f.loadEventStart),
                            nt_load_end: a(j, f.loadEventEnd),
                            nt_unload_st: a(j, f.unloadEventStart),
                            nt_unload_end: a(j, f.unloadEventEnd)
                        };
                        !i.nt_domloading && c && c.timing && c.timing.domLoading && (i.nt_domloading = c.timing.domLoading);
                        f.secureConnectionStart && (i.nt_ssl_st = a(j, f.secureConnectionStart));
                        c.timing && c.timing.msFirstPaint && (i.nt_first_paint = c.timing.msFirstPaint);
                        f.workerStart && (i.nt_worker_start = a(j, f.workerStart));
                        if (f.decodedBodySize || f.transferSize) {
                            i.nt_enc_size = f.encodedBodySize;
                            i.nt_dec_size = f.decodedBodySize;
                            i.nt_trn_size = f.transferSize
                        }
                        f.nextHopProtocol && (i.nt_protocol = f.nextHopProtocol)
                    }
                    if (!i.nt_first_paint && BOOMR.plugins.PaintTiming) {
                        g = BOOMR.plugins.PaintTiming.getTimingFor("first-paint");
                        g && (i.nt_first_paint = a(j, g))
                    }
                    if ((!i.nt_protocol || !i.nt_first_paint) && h.chrome && "function" == typeof h.chrome.loadTimes) {
                        e = h.chrome.loadTimes();
                        if (e) {
                            i.nt_spdy = e.wasFetchedViaSpdy ? 1 : 0;
                            i.nt_cinf = e.connectionInfo;
                            "number" == typeof e.firstPaintTime && 0 !== e.firstPaintTime && (i.nt_first_paint = Math.round(1e3 * e.firstPaintTime))
                        }
                    }
                    if (c.navigation) {
                        d = c.navigation;
                        i.nt_red_cnt = d.redirectCount;
                        i.nt_nav_type = d.type
                    }
                    for (k in i) i.hasOwnProperty(k) && void 0 === i[k] && delete i[k];
                    BOOMR.addVar(i);
                    if (f && (f.requestStart && f.navigationStart && f.requestStart < f.navigationStart || f.responseStart && f.navigationStart && f.responseStart < f.navigationStart || f.responseStart && f.fetchStart && f.responseStart < f.fetchStart || f.navigationStart && f.fetchStart < f.navigationStart || f.responseEnd && f.responseEnd > BOOMR.now() + 864e5)) {
                        BOOMR.addVar("nt_bad", 1);
                        b.addedVars.push("nt_bad")
                    }
                    try {
                        b.addedVars.push.apply(b.addedVars, Object.keys(i))
                    } catch (l) {}
                }
                b.sendBeacon()
            },
            clear: function () {
                if (b.addedVars && b.addedVars.length > 0) {
                    BOOMR.removeVar(b.addedVars);
                    b.addedVars = []
                }
                this.complete = !1
            },
            prerenderToVisible: function () {
                this.complete = !1;
                this.done()
            }
        };
        BOOMR.plugins.NavigationTiming = {
            init: function () {
                if (!b.initialized) {
                    BOOMR.subscribe("page_ready", b.done, null, b);
                    BOOMR.subscribe("prerender_to_visible", b.prerenderToVisible, null, b);
                    BOOMR.subscribe("xhr_load", b.xhr_done, null, b);
                    BOOMR.subscribe("before_unload", b.done, null, b);
                    BOOMR.subscribe("beacon", b.clear, null, b);
                    b.initialized = !0
                }
                return this
            },
            is_complete: function () {
                return !0
            }
        }
    }
}();
! function () {
    function a(a) {
        var b, c, d, e, f, g, h, i, j = {};
        for (b in a) {
            c = b;
            for (d = 0; d < w.xssBreakWords.length; d++) c = c.replace(w.xssBreakWords[d], "$1" + A + "$2");
            if (a.hasOwnProperty(b)) {
                e = a[b];
                f = c.split("");
                h = j;
                for (d = 0; d < f.length; d++) {
                    g = f[d];
                    i = h[g];
                    void 0 === i ? h = h[g] = d === f.length - 1 ? e : {} : "string" == typeof i ? h = h[g] = {
                        "|": i
                    } : d === f.length - 1 ? h[g]["|"] = e : h = h[g]
                }
            }
        }
        return j
    }

    function b(a, c) {
        var d, e, f, g = 0,
            h = [];
        for (d in a) a.hasOwnProperty(d) && h.push(d);
        for (var i = 0; i < h.length; i++) {
            d = h[i];
            if ("object" == typeof a[d]) {
                e = b(a[d], !1);
                if (e) {
                    delete a[d];
                    if (d === A) {
                        d = e.name;
                        g++
                    } else d += e.name;
                    a[d] = e.value
                }
            }
            g++
        }
        if (1 === g) {
            if (c) {
                f = {};
                f[d] = a[d];
                return f
            }
            return {
                name: d,
                value: a[d]
            }
        }
        return !!c && a
    }

    function c(a, b) {
        "number" != typeof a && (a = 0);
        "number" != typeof b && (b = 0);
        var c = Math.round(a || 0),
            d = Math.round(b || 0);
        return 0 === c ? 0 : c - d
    }

    function d(a) {
        try {
            a.location && a.location.href;
            a.document;
            if ("performance" in a && a.performance) return !0
        } catch (b) {}
        return !1
    }

    function e(a) {
        var b = 0;
        d(a) && a.performance.timing && a.performance.timing.navigationStart && (b = a.performance.timing.navigationStart);
        return b
    }

    function f(a, b, c, h, j) {
        function k(a) {
            return w.serverTiming && a.serverTiming || []
        }
        var l, n, o, p, q, r, s, t, u, v, x, z = [],
            A = {},
            B = {};
        void 0 === b && (b = !0);
        void 0 === c && (c = 0);
        void 0 === h && (h = 0);
        if (h > 10) return z;
        try {
            if (!d(a)) return z;
            o = e(a);
            v = i(a, j);
            x = a.document.createElement("a");
            g(x, A, "script");
            g(x, B, "link");
            r = a.document.getElementsByTagName("iframe");
            if (r && r.length)
                for (l = 0; l < r.length; l++) {
                    p = e(r[l].contentWindow);
                    q = 0;
                    p > o && (q = c + (p - o));
                    x.href = r[l].src;
                    z = z.concat(f(r[l].contentWindow, !1, q, h + 1, v[x.href]))
                }
            if ("function" != typeof a.performance.getEntriesByType) return z;
            if (b) {
                n = a.performance.getEntriesByType("navigation");
                if (n && 1 === n.length) {
                    s = n[0];
                    z.push({
                        name: a.location.href,
                        startTime: 0,
                        initiatorType: "html",
                        redirectStart: s.redirectStart,
                        redirectEnd: s.redirectEnd,
                        fetchStart: s.fetchStart,
                        domainLookupStart: s.domainLookupStart,
                        domainLookupEnd: s.domainLookupEnd,
                        connectStart: s.connectStart,
                        secureConnectionStart: s.secureConnectionStart,
                        connectEnd: s.connectEnd,
                        requestStart: s.requestStart,
                        responseStart: s.responseStart,
                        responseEnd: s.responseEnd,
                        workerStart: s.workerStart,
                        encodedBodySize: s.encodedBodySize,
                        decodedBodySize: s.decodedBodySize,
                        transferSize: s.transferSize,
                        serverTiming: k(s)
                    })
                } else if (a.performance.timing) {
                    t = a.performance.timing;
                    0 !== t.navigationStart && t.responseEnd <= t.navigationStart + 36e5 && z.push({
                        name: a.location.href,
                        startTime: 0,
                        initiatorType: "html",
                        redirectStart: t.redirectStart ? t.redirectStart - t.navigationStart : 0,
                        redirectEnd: t.redirectEnd ? t.redirectEnd - t.navigationStart : 0,
                        fetchStart: t.fetchStart ? t.fetchStart - t.navigationStart : 0,
                        domainLookupStart: t.domainLookupStart ? t.domainLookupStart - t.navigationStart : 0,
                        domainLookupEnd: t.domainLookupEnd ? t.domainLookupEnd - t.navigationStart : 0,
                        connectStart: t.connectStart ? t.connectStart - t.navigationStart : 0,
                        secureConnectionStart: t.secureConnectionStart ? t.secureConnectionStart - t.navigationStart : 0,
                        connectEnd: t.connectEnd ? t.connectEnd - t.navigationStart : 0,
                        requestStart: t.requestStart ? t.requestStart - t.navigationStart : 0,
                        responseStart: t.responseStart ? t.responseStart - t.navigationStart : 0,
                        responseEnd: t.responseEnd ? t.responseEnd - t.navigationStart : 0
                    })
                }
            }
            var C = a.performance.getEntriesByType("resource"),
                D = [];
            for (l = 0; C && l < C.length; l++) {
                t = C[l];
                u = {
                    name: t.name,
                    initiatorType: t.initiatorType,
                    startTime: t.startTime + c,
                    redirectStart: t.redirectStart ? t.redirectStart + c : 0,
                    redirectEnd: t.redirectEnd ? t.redirectEnd + c : 0,
                    fetchStart: t.fetchStart ? t.fetchStart + c : 0,
                    domainLookupStart: t.domainLookupStart ? t.domainLookupStart + c : 0,
                    domainLookupEnd: t.domainLookupEnd ? t.domainLookupEnd + c : 0,
                    connectStart: t.connectStart ? t.connectStart + c : 0,
                    secureConnectionStart: t.secureConnectionStart ? t.secureConnectionStart + c : 0,
                    connectEnd: t.connectEnd ? t.connectEnd + c : 0,
                    requestStart: t.requestStart ? t.requestStart + c : 0,
                    responseStart: t.responseStart ? t.responseStart + c : 0,
                    responseEnd: t.responseEnd ? t.responseEnd + c : 0,
                    workerStart: t.workerStart ? t.workerStart + c : 0,
                    encodedBodySize: t.encodedBodySize,
                    decodedBodySize: t.decodedBodySize,
                    transferSize: t.transferSize,
                    serverTiming: k(t),
                    visibleDimensions: v[t.name],
                    latestTime: m(t)
                };
                if (("script" === t.initiatorType || "link" === t.initiatorType) && A[t.name]) {
                    var E = A[t.name];
                    u.scriptAttrs = (E.async ? F : 0) | (E.defer ? G : 0);
                    for (; 1 === E.nodeType && "BODY" !== E.nodeName;) E = E.parentNode;
                    u.scriptAttrs |= "BODY" === E.nodeName ? H : 0
                }
                "link" === t.initiatorType && B[t.name] && BOOMR.utils.arrayFind(B[t.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/), function (a) {
                    a = a.toLowerCase();
                    if (y[a]) {
                        u.linkAttrs = y[a];
                        return !0
                    }
                });
                D.push(u)
            }
            z = z.concat(D)
        } catch (I) {
            return z
        }
        return z
    }

    function g(a, b, c) {
        Array.prototype.forEach.call(a.ownerDocument.getElementsByTagName(c), function (c) {
            a.href = c.src || c.href;
            a.href.match(/^https?:\/\//) && (b[a.href] = c)
        })
    }

    function h(a) {
        return "number" == typeof a && 0 !== a ? a.toString(36) : "string" == typeof a ? a : ""
    }

    function i(a, b) {
        var c, d, e = ["img", "iframe", "image"],
            f = {},
            g = a.document,
            h = g.createElement("A");
        b = b || [0, 0, 0, 0];
        c = b[3] + (void 0 !== a.pageXOffset) ? a.pageXOffset : (g.documentElement || g.body.parentNode || g.body).scrollLeft;
        d = b[2] + (void 0 !== a.pageYOffset) ? a.pageYOffset : (g.documentElement || g.body.parentNode || g.body).scrollTop;
        e.forEach(function (a) {
            var b, e, i, j, k = g.getElementsByTagName(a);
            for (e = 0; e < k.length; e++) {
                b = k[e];
                if (b) {
                    j = b.src || b.getAttribute("src") || b.getAttribute("xlink:href");
                    h.href = j;
                    j = h.href;
                    if (j && !f[j]) {
                        i = b.getBoundingClientRect();
                        if ((i.height || b.offsetHeight) && (i.width || b.offsetWidth)) {
                            f[j] = [i.height || b.offsetHeight, i.width || b.offsetWidth, Math.round(i.top + d), Math.round(i.left + c)];
                            !b.naturalHeight && !b.naturalWidth || f[j][0] === b.naturalHeight && f[j][1] === b.naturalWidth || f[j].push(b.naturalHeight, b.naturalWidth)
                        }
                    }
                }
            }
        });
        return f
    }

    function j(a, b, c) {
        var d, g, h = f(BOOMR.window, !0, 0, 0),
            i = e(BOOMR.window),
            j = {};
        if (!h || !h.length) return {
            entries: []
        };
        h.sort(function (a, b) {
            return a.startTime - b.startTime
        });
        var k = [];
        for (d = 0; d < h.length; d++) {
            g = h[d];
            if (0 !== g.name.indexOf("about:") && 0 !== g.name.indexOf("javascript:") && 0 !== g.name.indexOf("res:") && !(g.name.indexOf(BOOMR.url) > -1 || g.name.indexOf(BOOMR.config_url) > -1 || "function" == typeof BOOMR.getBeaconURL && BOOMR.getBeaconURL() && g.name.indexOf(BOOMR.getBeaconURL()) > -1 || a && i + g.startTime < a)) {
                if (b && i + g.startTime > b) break;
                if (void 0 === c || "*" === c || !c.length || g.initiatorType && BOOMR.utils.inArray(g.initiatorType, c)) {
                    r(j, g.serverTiming);
                    k.push(g)
                }
            }
        }
        var l = s(j);
        return {
            entries: k,
            serverTiming: {
                lookup: l,
                indexed: t(l)
            }
        }
    }

    function k(a) {
        var b, c, d, e;
        if (a.encodedBodySize || a.decodedBodySize || a.transferSize) {
            b = a.transferSize;
            c = a.encodedBodySize;
            d = a.decodedBodySize;
            e = [c, b ? b - c : "_", d ? d - c : 0];
            return e.map(h).join(",").replace(/,+$/, "")
        }
        return ""
    }

    function l(a, b) {
        var c, d, e;
        if (a && b)
            for (c = 0; c < b.length; c++) {
                e = b[c];
                if ("string" == typeof e) {
                    d = a.indexOf(e);
                    if (-1 !== d) {
                        a = a.substr(0, d + e.length) + "...";
                        break
                    }
                } else e instanceof RegExp && e.test(a) && (a = a.replace(e, "$1") + "...")
            }
        return BOOMR.utils.cleanupURL(a, w.urlLimit)
    }

    function m(a) {
        return a.responseEnd ? a.responseEnd : a.responseStart && a.startTime ? a.responseStart + .2 * (a.responseStart - a.startTime) : 1 / 0
    }

    function n(d, e) {
        var f, g, i, m, n, o = {},
            p = {},
            q = j(d, e, w.trackedResourceTypes),
            r = q.entries,
            s = q.serverTiming;
        if (!r || !r.length) return {
            restiming: {},
            servertiming: []
        };
        for (f = 0; f < r.length; f++) {
            g = r[f];
            i = x[g.initiatorType];
            void 0 === i && (i = 0);
            n = i + [c(g.startTime, 0), c(g.responseEnd, g.startTime), c(g.responseStart, g.startTime), c(g.requestStart, g.startTime), c(g.connectEnd, g.startTime), c(g.secureConnectionStart, g.startTime), c(g.connectStart, g.startTime), c(g.domainLookupEnd, g.startTime), c(g.domainLookupStart, g.startTime), c(g.redirectEnd, g.startTime), c(g.redirectStart, g.startTime)].map(h).join(",").replace(/,+$/, "");
            var t = k(g);
            "" !== t && (n += B + D + t);
            g.hasOwnProperty("scriptAttrs") && (n += B + E + g.scriptAttrs);
            g.serverTiming && g.serverTiming.length && (n += B + I + g.serverTiming.reduce(function (a, b, c) {
                var d = String(void 0 !== b.duration ? b.duration : b.value);
                "0." === d.substring(0, 2) && (d = d.substring(1));
                var e = b.name || b.metric,
                    f = u(s.indexed[e].index, s.indexed[e].descriptions[b.description]);
                a += (c > 0 ? "," : "") + d + f;
                return a
            }, ""));
            g.hasOwnProperty("linkAttrs") && (n += B + J + g.linkAttrs);
            m = l(g.name, w.trimUrls);
            void 0 !== o[m] ? o[m] += "|" + n : g.visibleDimensions ? o[m] = B + C + g.visibleDimensions.map(Math.round).map(h).join(",").replace(/,+$/, "") + "|" + n : o[m] = n;
            if (g.visibleDimensions) {
                p[g.latestTime] || (p[g.latestTime] = []);
                p[g.latestTime].push(g.visibleDimensions)
            }
        }
        return {
            restiming: b(a(o), !0),
            servertiming: s.lookup
        }
    }

    function o(a) {
        var b = [];
        if (!a || !a.length) return b;
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            c !== a.length - 1 && d.fetchStart === a[c + 1].fetchStart || b.push({
                fetchStart: d.fetchStart,
                responseEnd: d.responseStart || d.responseEnd
            })
        }
        return b
    }

    function p(a) {
        var b;
        if (!a || !a.length) return 0;
        a.sort(function (a, b) {
            return a.fetchStart !== b.fetchStart ? a.fetchStart - b.fetchStart : (a.responseStart || a.responseEnd) - (b.responseStart || b.responseEnd)
        });
        var c = o(a),
            d = [],
            e = 0;
        for (b = 0; b < c.length; b++) {
            var f = c[b];
            f.fetchStart < e && (f.fetchStart = e);
            if (f.fetchStart < f.responseEnd) {
                d.push(f);
                e = f.responseEnd
            }
        }
        var g = o(d),
            h = 0;
        for (b = 0; b < g.length; b++) h += g[b].responseEnd - g[b].fetchStart;
        return h
    }

    function q(a, b) {
        var c;
        if ("undefined" != typeof JSON) {
            BOOMR.removeVar("restiming");
            BOOMR.removeVar("servertiming");
            c = n(a, b);
            if (c) {
                BOOMR.info("Client supports Resource Timing API", "restiming");
                v(c)
            }
        }
    }

    function r(a, b) {
        (b || []).forEach(function (b) {
            var c = b.name || b.metric;
            void 0 === a[c] && (a[c] = {
                count: 0,
                counts: {}
            });
            var d = a[c];
            d.counts[b.description] = d.counts[b.description] || 0;
            d.counts[b.description]++;
            d.count++
        })
    }

    function s(a) {
        return Object.keys(a).sort(function (b, c) {
            return a[c].count - a[b].count
        }).reduce(function (b, c) {
            var d = Object.keys(a[c].counts).sort(function (b, d) {
                return a[c].counts[d] - a[c].counts[b]
            });
            b.push(1 === d.length && "" === d[0] ? c : [c].concat(d));
            return b
        }, [])
    }

    function t(a) {
        return a.reduce(function (a, b, c) {
            var d, e;
            if (Array.isArray(b)) {
                d = b[0];
                e = b.slice(1).reduce(function (a, b, c) {
                    a[b] = c;
                    return a
                }, {})
            } else {
                d = b;
                e = {
                    "": 0
                }
            }
            a[d] = {
                index: c,
                descriptions: e
            };
            return a
        }, {})
    }

    function u(a, b) {
        var c = "";
        a && (c += a);
        b && (c += "." + b);
        c.length && (c = ":" + c);
        return c
    }

    function v(a) {
        BOOMR.addVar("restiming", JSON.stringify(a.restiming));
        a.servertiming.length && BOOMR.addVar("servertiming", BOOMR.utils.serializeForUrl(a.servertiming))
    }
    var w;
    if (!BOOMR.plugins.ResourceTiming) {
        var x = {
                other: 0,
                img: 1,
                link: 2,
                script: 3,
                css: 4,
                xmlhttprequest: 5,
                html: 6,
                image: 7,
                beacon: 8,
                fetch: 9,
                iframe: "a",
                subdocument: "a"
            },
            y = {
                prefetch: 1,
                preload: 2,
                prerender: 3,
                stylesheet: 4
            },
            z = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi],
            A = "\n",
            B = "*",
            C = "0",
            D = "1",
            E = "2",
            F = 1,
            G = 2,
            H = 4,
            I = "3",
            J = "4";
        w = {
            complete: !1,
            sentNavBeacon: !1,
            initialized: !1,
            supported: null,
            xhr_load: function () {
                if (!this.complete) {
                    this.complete = !0;
                    BOOMR.sendBeacon()
                }
            },
            xssBreakWords: z,
            urlLimit: 500,
            clearOnBeacon: !1,
            trimUrls: [],
            trackedResourceTypes: "*",
            serverTiming: !0,
            done: function () {
                if (!this.sentNavBeacon) {
                    q();
                    this.complete = !0;
                    this.sentNavBeacon = !0;
                    BOOMR.sendBeacon()
                }
            },
            onBeacon: function (a) {
                var b = BOOMR.getPerformance();
                a.hasOwnProperty("restiming") && BOOMR.removeVar("restiming");
                a.hasOwnProperty("servertiming") && BOOMR.removeVar("servertiming");
                if (w.clearOnBeacon && b) {
                    var c = b.clearResourceTimings || b.webkitClearResourceTimings;
                    c && "function" == typeof c && c.call(b)
                }
            },
            prerenderToVisible: function () {
                this.sentNavBeacon = !1;
                this.done()
            }
        };
        BOOMR.plugins.ResourceTiming = {
            init: function (a) {
                BOOMR.utils.pluginConfig(w, a, "ResourceTiming", ["xssBreakWords", "clearOnBeacon", "urlLimit", "trimUrls", "trackedResourceTypes", "serverTiming"]);
                if (w.initialized) return this;
                if (this.is_supported()) {
                    BOOMR.subscribe("page_ready", w.done, null, w);
                    BOOMR.subscribe("prerender_to_visible", w.prerenderToVisible, null, w);
                    BOOMR.subscribe("xhr_load", w.xhr_load, null, w);
                    BOOMR.subscribe("beacon", w.onBeacon, null, w);
                    BOOMR.subscribe("before_unload", w.done, null, w)
                } else w.complete = !0;
                w.initialized = !0;
                return this
            },
            is_complete: function () {
                return !0
            },
            is_enabled: function () {
                return w.initialized && this.is_supported()
            },
            is_supported: function () {
                var a;
                if (null !== w.supported) return w.supported;
                var a = BOOMR.getPerformance();
                w.supported = a && "function" == typeof a.getEntriesByType && void 0 !== window.PerformanceResourceTiming;
                return w.supported
            },
            getCompressedResourceTiming: n,
            getFilteredResourceTiming: j,
            calculateResourceTimingUnion: p,
            addResourceTimingToBeacon: q,
            addToBeacon: v
        }
    }
}();
! function () {
    function a() {
        var a;
        for (a in c)
            if (void 0 !== b[a]) {
                BOOMR.removeVar("mob." + c[a]);
                b[a] && BOOMR.addVar("mob." + c[a], b[a])
            }
    }
    var b, c = {
        type: "ct",
        bandwidth: "bw",
        metered: "mt",
        effectiveType: "etype",
        downlinkMax: "lm",
        downlink: "dl",
        rtt: "rtt",
        saveData: "sd"
    };
    if ("function" == typeof BOOMR.addVar) {
        "object" == typeof navigator && (b = navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection);
        if (b) {
            b.addEventListener && b.addEventListener("change", function () {
                a();
                BOOMR.fireEvent("netinfo", b)
            });
            a()
        }
    }
}();
! function () {
    function a(a, b) {
        var c, e, f, g, h;
        try {
            c = d.getElementsByTagName(a);
            e = c.length;
            if (b && b.length) {
                f = {};
                f[b[0]] = e;
                for (g = 2; e > 0 && g < arguments.length && g - 1 < b.length; g++) {
                    h = arguments[g];
                    if ("function" == typeof h) try {
                        c = BOOMR.utils.arrayFilter(c, h);
                        if (c.length !== e) {
                            e = c.length;
                            f[b[g - 1]] = e
                        }
                    } catch (i) {
                        BOOMR.addError(i, "Memory.nodeList." + a + ".filter[" + (g - 2) + "]")
                    }
                }
            }
            return f || e
        } catch (i) {
            BOOMR.addError(i, "Memory.nodeList." + a);
            return 0
        }
    }

    function b(a, b, c) {
        if (a) try {
            b()
        } catch (d) {
            BOOMR.addError(d, "Memory.done." + c)
        }
    }
    var c, d, e, f, g, h, i, j = {};
    if (!BOOMR.plugins.Memory) {
        i = {
            done: function () {
                if (c) {
                    BOOMR.removeVar("dom.res");
                    b(!0, function () {
                        var a, b, c = {};
                        if (j && "function" == typeof j.getEntriesByType) {
                            a = j.getEntriesByType("resource");
                            if (a && a.length) {
                                BOOMR.addVar("dom.res", a.length);
                                b = BOOMR.window.document.createElement("a");
                                [].forEach.call(a, function (a) {
                                    b.href = a.name;
                                    c[b.hostname] = !0
                                });
                                BOOMR.addVar("dom.doms", Object.keys(c).length)
                            }
                        }
                    }, "resources");
                    e && BOOMR.addVar({
                        "mem.total": e.totalJSHeapSize,
                        "mem.limit": e.jsHeapSizeLimit,
                        "mem.used": e.usedJSHeapSize
                    });
                    b(f, function () {
                        BOOMR.addVar({
                            "scr.xy": f.width + "x" + f.height,
                            "scr.bpp": f.colorDepth + "/" + (f.pixelDepth || "")
                        });
                        f.orientation && BOOMR.addVar("scr.orn", f.orientation.angle + "/" + f.orientation.type);
                        c.devicePixelRatio > 1 && BOOMR.addVar("scr.dpx", c.devicePixelRatio);
                        var a = BOOMR.utils.scroll();
                        (a.x || a.y) && BOOMR.addVar("scr.sxy", a.x + "x" + a.y)
                    }, "screen");
                    b(g, function () {
                        g.hardwareConcurrency && BOOMR.addVar("cpu.cnc", g.hardwareConcurrency);
                        g.maxTouchPoints && BOOMR.addVar("scr.mtp", g.maxTouchPoints)
                    }, "navigator");
                    b(h, function () {
                        BOOMR.addVar("bat.lvl", h.level)
                    }, "battery");
                    b(!0, function () {
                        var b;
                        BOOMR.addVar({
                            "dom.ln": a("*"),
                            "dom.sz": d.documentElement.innerHTML.length
                        });
                        b = {};
                        BOOMR.addVar(a("img", ["dom.img", "dom.img.ext", "dom.img.uniq"], function (a) {
                            return a.src && !a.src.toLowerCase().match(/^(?:about:|javascript:|data:|#)/)
                        }, function (a) {
                            return !(b[a.src] = b.hasOwnProperty(a.src))
                        }));
                        b = {};
                        BOOMR.addVar(a("script", ["dom.script", "dom.script.ext", "dom.script.uniq"], function (a) {
                            return a.src && !a.src.toLowerCase().match(/^(?:about:|javascript:|#)/)
                        }, function (a) {
                            return !(b[a.src] = b.hasOwnProperty(a.src))
                        }));
                        b = {};
                        BOOMR.addVar(a("iframe", ["dom.iframe", "dom.iframe.ext", "dom.iframe.uniq"], function (a) {
                            return a.src && !a.src.toLowerCase().match(/^(?:about:|javascript:|#)/)
                        }, function (a) {
                            return !(b[a.src] = b.hasOwnProperty(a.src))
                        }));
                        b = {};
                        BOOMR.addVar(a("link", ["dom.link", "dom.link.css", "dom.link.css.uniq"], function (a) {
                            return a.rel && "stylesheet" === a.rel.toLowerCase() && a.href && !a.href.toLowerCase().match(/^(?:about:|javascript:|#)/)
                        }, function (a) {
                            return !(b[a.href] = b.hasOwnProperty(a.href))
                        }))
                    }, "dom")
                }
            }
        };
        BOOMR.plugins.Memory = {
            init: function () {
                var a;
                try {
                    c = BOOMR.window;
                    d = c.document;
                    j = BOOMR.getPerformance();
                    a = c.console;
                    f = c.screen;
                    g = c.navigator;
                    if (g && g.battery) h = g.battery;
                    else if (g && "function" == typeof g.getBattery) {
                        var b = g.getBattery();
                        b && "function" == typeof b.then ? b.then(function (a) {
                            h = a
                        }) : "object" == typeof b && b.hasOwnProperty("level") && (h = b)
                    }
                } catch (k) {
                    BOOMR.addError(k, "Memory.init")
                }
                e = j && j.memory ? j.memory : a && a.memory ? a.memory : null;
                if (i.initialized) return this;
                i.initialized = !0;
                BOOMR.subscribe("before_beacon", i.done, null, i);
                return this
            },
            is_complete: function () {
                return !0
            }
        }
    }
}();
! function () {
    if (!BOOMR.plugins.CACHE_RELOAD) {
        var a = {
            url: ""
        };
        BOOMR.plugins.CACHE_RELOAD = {
            init: function (b) {
                BOOMR.utils.pluginConfig(a, b, "CACHE_RELOAD", ["url"]);
                if (!a.url) return this;
                var c = document.createElement("iframe");
                c.style.display = "none";
                c.src = a.url;
                document.body.appendChild(c);
                return this
            },
            is_complete: function () {
                return !0
            }
        }
    }
}();
! function () {
    "use strict";

    function a(a, b) {
        var c = (65535 & a) + (65535 & b);
        return (a >> 16) + (b >> 16) + (c >> 16) << 16 | 65535 & c
    }

    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(c, d, e, f, g, h) {
        return a(b(a(a(d, c), a(f, h)), g), e)
    }

    function d(a, b, d, e, f, g, h) {
        return c(b & d | ~b & e, a, b, f, g, h)
    }

    function e(a, b, d, e, f, g, h) {
        return c(b & e | d & ~e, a, b, f, g, h)
    }

    function f(a, b, d, e, f, g, h) {
        return c(b ^ d ^ e, a, b, f, g, h)
    }

    function g(a, b, d, e, f, g, h) {
        return c(d ^ (b | ~e), a, b, f, g, h)
    }

    function h(b, c) {
        b[c >> 5] |= 128 << c % 32;
        b[14 + (c + 64 >>> 9 << 4)] = c;
        var h, i, j, k, l, m = 1732584193,
            n = -271733879,
            o = -1732584194,
            p = 271733878;
        for (h = 0; h < b.length; h += 16) {
            i = m;
            j = n;
            k = o;
            l = p;
            m = d(m, n, o, p, b[h], 7, -680876936);
            p = d(p, m, n, o, b[h + 1], 12, -389564586);
            o = d(o, p, m, n, b[h + 2], 17, 606105819);
            n = d(n, o, p, m, b[h + 3], 22, -1044525330);
            m = d(m, n, o, p, b[h + 4], 7, -176418897);
            p = d(p, m, n, o, b[h + 5], 12, 1200080426);
            o = d(o, p, m, n, b[h + 6], 17, -1473231341);
            n = d(n, o, p, m, b[h + 7], 22, -45705983);
            m = d(m, n, o, p, b[h + 8], 7, 1770035416);
            p = d(p, m, n, o, b[h + 9], 12, -1958414417);
            o = d(o, p, m, n, b[h + 10], 17, -42063);
            n = d(n, o, p, m, b[h + 11], 22, -1990404162);
            m = d(m, n, o, p, b[h + 12], 7, 1804603682);
            p = d(p, m, n, o, b[h + 13], 12, -40341101);
            o = d(o, p, m, n, b[h + 14], 17, -1502002290);
            n = d(n, o, p, m, b[h + 15], 22, 1236535329);
            m = e(m, n, o, p, b[h + 1], 5, -165796510);
            p = e(p, m, n, o, b[h + 6], 9, -1069501632);
            o = e(o, p, m, n, b[h + 11], 14, 643717713);
            n = e(n, o, p, m, b[h], 20, -373897302);
            m = e(m, n, o, p, b[h + 5], 5, -701558691);
            p = e(p, m, n, o, b[h + 10], 9, 38016083);
            o = e(o, p, m, n, b[h + 15], 14, -660478335);
            n = e(n, o, p, m, b[h + 4], 20, -405537848);
            m = e(m, n, o, p, b[h + 9], 5, 568446438);
            p = e(p, m, n, o, b[h + 14], 9, -1019803690);
            o = e(o, p, m, n, b[h + 3], 14, -187363961);
            n = e(n, o, p, m, b[h + 8], 20, 1163531501);
            m = e(m, n, o, p, b[h + 13], 5, -1444681467);
            p = e(p, m, n, o, b[h + 2], 9, -51403784);
            o = e(o, p, m, n, b[h + 7], 14, 1735328473);
            n = e(n, o, p, m, b[h + 12], 20, -1926607734);
            m = f(m, n, o, p, b[h + 5], 4, -378558);
            p = f(p, m, n, o, b[h + 8], 11, -2022574463);
            o = f(o, p, m, n, b[h + 11], 16, 1839030562);
            n = f(n, o, p, m, b[h + 14], 23, -35309556);
            m = f(m, n, o, p, b[h + 1], 4, -1530992060);
            p = f(p, m, n, o, b[h + 4], 11, 1272893353);
            o = f(o, p, m, n, b[h + 7], 16, -155497632);
            n = f(n, o, p, m, b[h + 10], 23, -1094730640);
            m = f(m, n, o, p, b[h + 13], 4, 681279174);
            p = f(p, m, n, o, b[h], 11, -358537222);
            o = f(o, p, m, n, b[h + 3], 16, -722521979);
            n = f(n, o, p, m, b[h + 6], 23, 76029189);
            m = f(m, n, o, p, b[h + 9], 4, -640364487);
            p = f(p, m, n, o, b[h + 12], 11, -421815835);
            o = f(o, p, m, n, b[h + 15], 16, 530742520);
            n = f(n, o, p, m, b[h + 2], 23, -995338651);
            m = g(m, n, o, p, b[h], 6, -198630844);
            p = g(p, m, n, o, b[h + 7], 10, 1126891415);
            o = g(o, p, m, n, b[h + 14], 15, -1416354905);
            n = g(n, o, p, m, b[h + 5], 21, -57434055);
            m = g(m, n, o, p, b[h + 12], 6, 1700485571);
            p = g(p, m, n, o, b[h + 3], 10, -1894986606);
            o = g(o, p, m, n, b[h + 10], 15, -1051523);
            n = g(n, o, p, m, b[h + 1], 21, -2054922799);
            m = g(m, n, o, p, b[h + 8], 6, 1873313359);
            p = g(p, m, n, o, b[h + 15], 10, -30611744);
            o = g(o, p, m, n, b[h + 6], 15, -1560198380);
            n = g(n, o, p, m, b[h + 13], 21, 1309151649);
            m = g(m, n, o, p, b[h + 4], 6, -145523070);
            p = g(p, m, n, o, b[h + 11], 10, -1120210379);
            o = g(o, p, m, n, b[h + 2], 15, 718787259);
            n = g(n, o, p, m, b[h + 9], 21, -343485551);
            m = a(m, i);
            n = a(n, j);
            o = a(o, k);
            p = a(p, l)
        }
        return [m, n, o, p]
    }

    function i(a) {
        var b, c = "";
        for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c
    }

    function j(a) {
        var b, c = [];
        c[(a.length >> 2) - 1] = void 0;
        for (b = 0; b < c.length; b += 1) c[b] = 0;
        for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
        return c
    }

    function k(a) {
        return i(h(j(a), 8 * a.length))
    }

    function l(a, b) {
        var c, d, e = j(a),
            f = [],
            g = [];
        f[15] = g[15] = void 0;
        e.length > 16 && (e = h(e, 8 * a.length));
        for (c = 0; c < 16; c += 1) {
            f[c] = 909522486 ^ e[c];
            g[c] = 1549556828 ^ e[c]
        }
        d = h(f.concat(j(b)), 512 + 8 * b.length);
        return i(h(g.concat(d), 640))
    }

    function m(a) {
        var b, c, d = "0123456789abcdef",
            e = "";
        for (c = 0; c < a.length; c += 1) {
            b = a.charCodeAt(c);
            e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b)
        }
        return e
    }

    function n(a) {
        return unescape(encodeURIComponent(a))
    }

    function o(a) {
        return k(n(a))
    }

    function p(a) {
        return m(o(a))
    }

    function q(a, b) {
        return l(n(a), n(b))
    }

    function r(a, b) {
        return m(q(a, b))
    }

    function s(a, b, c) {
        return b ? c ? q(b, a) : r(b, a) : c ? o(a) : p(a)
    }
    BOOMR.utils = BOOMR.utils || {};
    BOOMR.utils && BOOMR.utils.md5 || (BOOMR.utils.MD5 = s)
}();
! function () {
    BOOMR.utils = BOOMR.utils || {};
    if (!BOOMR.utils || !BOOMR.utils.Compression) {
        var a = BOOMR.utils.Compression = {};
        a.jsUrl = function (b) {
            function c(a) {
                if (!/[^\w-.]/.test(a)) return a;
                a = a.replace(/[^\w-.]/g, function (a) {
                    if ("$" === a) return "!";
                    a = a.charCodeAt(0);
                    return a < 256 ? "*" + ("00" + a.toString(16)).slice(-2) : "**" + ("0000" + a.toString(16)).slice(-4)
                });
                return a
            }
            var d = [];
            switch (typeof b) {
                case "number":
                    return isFinite(b) ? "~" + b : "~null";
                case "string":
                    return "~'" + c(b);
                case "boolean":
                    return "~" + b;
                case "object":
                    if (!b) return "~null";
                    if (BOOMR.utils.isArray(b)) {
                        for (var e = 0; e < b.length; e++) e in b && (d[e] = a.jsUrl(b[e]) || "~null");
                        return "~(" + (d.join("") || "~") + ")"
                    }
                    for (var f in b)
                        if (b.hasOwnProperty(f)) {
                            var g = a.jsUrl(b[f]);
                            g && d.push(c(f) + g)
                        } return "~(" + d.sort().join("~") + ")";
                default:
                    return
            }
        }
    }
}();
! function (a, b) {
    "use strict";
    a.ErrorStackParser = b()
}(this, function () {
    "use strict";

    function a(a, b, c) {
        if ("function" == typeof Array.prototype.map) return a.map(b, c);
        for (var d = new Array(a.length), e = 0; e < a.length; e++) d[e] = b.call(c, a[e]);
        return d
    }

    function b(a, b, c) {
        if ("function" == typeof Array.prototype.filter) return a.filter(b, c);
        for (var d = [], e = 0; e < a.length; e++) b.call(c, a[e]) && d.push(a[e]);
        return d
    }
    var c = /(^|@)\S+\:\d+/,
        d = /^\s*at .*(\S+\:\d+|\(native\))/m,
        e = /^(eval@)?(\[native code\])?$/;
    return {
        parse: function (a) {
            if (void 0 !== a.stacktrace || void 0 !== a["opera#sourceloc"]) return this.parseOpera(a);
            if (a.stack && a.stack.match(d)) return this.parseV8OrIE(a);
            if (a.stack) return this.parseFFOrSafari(a);
            throw new Error("Cannot parse given Error object")
        },
        extractLocation: function (a) {
            if (-1 === a.indexOf(":")) return [a];
            var b = a.replace(/[\(\)\s]/g, "").split(":"),
                c = b.pop(),
                d = b[b.length - 1];
            if (!isNaN(parseFloat(d)) && isFinite(d)) {
                var e = b.pop();
                return [b.join(":"), e, c]
            }
            return [b.join(":"), c, void 0]
        },
        parseV8OrIE: function (c) {
            return a(b(c.stack.split("\n"), function (a) {
                return !!a.match(d)
            }, this), function (a) {
                a.indexOf("(eval ") > -1 && (a = a.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                var b = a.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                    c = this.extractLocation(b.pop());
                return {
                    functionName: b.join(" ") || void 0,
                    fileName: "eval" === c[0] ? void 0 : c[0],
                    lineNumber: c[1],
                    columnNumber: c[2],
                    source: a
                }
            }, this)
        },
        parseFFOrSafari: function (c) {
            return a(b(c.stack.split("\n"), function (a) {
                return !a.match(e)
            }, this), function (a) {
                a.indexOf(" > eval") > -1 && (a = a.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1"));
                if (-1 === a.indexOf("@") && -1 === a.indexOf(":")) return {
                    functionName: a
                };
                var b = a.split("@"),
                    c = this.extractLocation(b.pop());
                return {
                    functionName: b.join("@") || void 0,
                    fileName: c[0],
                    lineNumber: c[1],
                    columnNumber: c[2],
                    source: a
                }
            }, this)
        },
        parseOpera: function (a) {
            return !a.stacktrace || a.message.indexOf("\n") > -1 && a.message.split("\n").length > a.stacktrace.split("\n").length ? this.parseOpera9(a) : a.stack ? this.parseOpera11(a) : this.parseOpera10(a)
        },
        parseOpera9: function (a) {
            for (var b = /Line (\d+).*script (?:in )?(\S+)/i, c = a.message.split("\n"), d = [], e = 2, f = c.length; e < f; e += 2) {
                var g = b.exec(c[e]);
                g && d.push({
                    fileName: g[2],
                    lineNumber: g[1],
                    source: c[e]
                })
            }
            return d
        },
        parseOpera10: function (a) {
            for (var b = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, c = a.stacktrace.split("\n"), d = [], e = 0, f = c.length; e < f; e += 2) {
                var g = b.exec(c[e]);
                g && d.push({
                    functionName: g[3] || void 0,
                    fileName: g[2],
                    lineNumber: g[1],
                    source: c[e]
                })
            }
            return d
        },
        parseOpera11: function (d) {
            return a(b(d.stack.split("\n"), function (a) {
                return !!a.match(c) && !a.match(/^Error created at/)
            }, this), function (a) {
                var b, c = a.split("@"),
                    d = this.extractLocation(c.pop()),
                    e = c.shift() || "",
                    f = e.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                e.match(/\(([^\)]*)\)/) && (b = e.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                return {
                    functionName: f,
                    args: void 0 === b || "[arguments not available]" === b ? void 0 : b.split(","),
                    fileName: d[0],
                    lineNumber: d[1],
                    columnNumber: d[2],
                    source: a
                }
            }, this)
        }
    }
});
! function () {
    function a(a) {
        a = a || {};
        "number" == typeof a.count || "string" == typeof a.count ? this.count = parseInt(a.count, 10) : this.count = 1;
        "number" == typeof a.timestamp ? this.timestamp = a.timestamp : this.timestamp = BOOMR.now();
        "number" != typeof a.code && "string" != typeof a.code || (this.code = parseInt(a.code, 10));
        "string" == typeof a.message && (this.message = a.message);
        "string" == typeof a.functionName && (this.functionName = a.functionName);
        "string" == typeof a.fileName && (this.fileName = a.fileName);
        "number" != typeof a.lineNumber && "string" != typeof a.lineNumber || (this.lineNumber = parseInt(a.lineNumber, 10));
        "number" != typeof a.columnNumber && "string" != typeof a.columnNumber || (this.columnNumber = parseInt(a.columnNumber, 10));
        "string" == typeof a.stack && (this.stack = a.stack);
        "string" == typeof a.type && (this.type = a.type);
        void 0 !== a.extra && (this.extra = a.extra);
        this.source = "number" == typeof a.source || "string" == typeof a.source ? parseInt(a.source, 10) : BOOMR.plugins.Errors.SOURCE_APP;
        "number" != typeof a.via && "string" != typeof a.via || (this.via = parseInt(a.via, 10));
        BOOMR.utils.isArray(a.frames) ? this.frames = a.frames : this.frames = [];
        BOOMR.utils.isArray(a.events) ? this.events = a.events : this.events = []
    }
    var b;
    if (!BOOMR.plugins.Errors) {
        var c = ["BOOMR_addError", "createStackForSend", "BOOMR.window.console.error", "BOOMR.plugins.Errors.init", "BOOMR.window.onerror", "BOOMR_plugins_errors_"],
            d = ["Object.send", "b.send", "wrap", "Anonymous function"],
            e = ["/boomerang"],
            f = 5e3;
        a.prototype.equals = function (a) {
            return "object" == typeof a && (this.code === a.code && (this.message === a.message && (this.functionName === a.functionName && (this.fileName === a.fileName && (this.lineNumber === a.lineNumber && (this.columnNumber === a.columnNumber && (this.stack === a.stack && (this.type === a.type && this.source === a.source))))))))
        };
        a.fromError = function (b, g, h) {
            var i, j, k, l, m, n, o, p, q = !1,
                r = BOOMR.now();
            if (!b) return null;
            if (b.stack) {
                b.stack.length > f && (b.stack = b.stack.substr(0, f));
                j = ErrorStackParser.parse(b);
                if (j && j.length) {
                    if (b.generatedStack) {
                        if (j.length >= 4 && j[1].functionName && -1 !== j[1].functionName.indexOf("createStackForSend")) {
                            j = j.slice(3);
                            q = !0
                        }
                        if (j.length >= 3 && j[0].functionName && -1 !== j[0].functionName.indexOf("createStackForSend")) {
                            j = j[1].fileName === j[2].fileName ? j.slice(3) : j.slice(2);
                            q = !0
                        }
                        if (j.length >= 1 && j[0].functionName && -1 !== j[0].functionName.indexOf("BOOMR_plugins_errors")) {
                            j = j.slice(1);
                            q = !0
                        }
                    }
                    for (k = 0; k < j.length; k++) {
                        o = j[k];
                        p = o.functionName;
                        n = !1;
                        if (p) {
                            for (l = 0; l < c.length; l++)
                                if (-1 !== p.indexOf(c[l])) {
                                    j.splice(k, 1);
                                    q = !0;
                                    k--;
                                    n = !0;
                                    break
                                } if (!n && o.fileName)
                                for (l = 0; l < e.length; l++)
                                    if (-1 !== o.fileName.indexOf(e[l]))
                                        for (m = 0; m < d.length; m++)
                                            if (-1 !== p.indexOf(d[m])) {
                                                j.splice(k, 1);
                                                q = !0;
                                                k--;
                                                n = !0;
                                                break
                                            }
                        }
                    }
                    if (j.length) {
                        i = j[0];
                        (q || void 0 === b.lineNumber) && (b.lineNumber = i.lineNumber);
                        (q || void 0 === b.columnNumber) && (b.columnNumber = i.columnNumber);
                        (q || void 0 === b.functionName) && (b.functionName = i.functionName);
                        (q || void 0 === b.fileName) && (b.fileName = i.fileName)
                    }
                    b.stack && (b.stack = b.stack.replace(/\s\s+/g, " "))
                }
            } else(b.functionName || b.fileName || b.lineNumber || b.columnNumber) && (j = [{
                lineNumber: b.lineNumber,
                columnNumber: b.columnNumber,
                fileName: b.fileName,
                functionName: b.functionName
            }]);
            b.message && -1 !== b.message.indexOf("ReferenceError:") && "Error" === b.name && (b.name = "ReferenceError");
            return new a({
                code: b.code ? b.code : void 0,
                message: b.message ? b.message : void 0,
                functionName: b.functionName ? b.functionName : void 0,
                fileName: b.fileName ? b.fileName : void 0,
                lineNumber: b.lineNumber ? b.lineNumber : void 0,
                columnNumber: b.columnNumber ? b.columnNumber : void 0,
                stack: b.stack ? b.stack : void 0,
                type: b.name ? b.name : void 0,
                source: h,
                via: g,
                frames: j,
                extra: b.extra ? b.extra : void 0,
                timestamp: b.timestamp ? b.timestamp : r
            })
        };
        b = {
            onError: void 0,
            monitorGlobal: !0,
            monitorNetwork: !0,
            monitorConsole: !0,
            monitorEvents: !0,
            monitorTimeout: !0,
            sendAfterOnload: !1,
            maxErrors: 10,
            sendInterval: 1e3,
            sendIntervalDuringLoad: 2500,
            sendIntervalId: -1,
            maxEvents: 10,
            isDuringLoad: !0,
            initialized: !1,
            supported: !1,
            autorun: !0,
            errors: [],
            q: [],
            events: [],
            send: function (a, c, d) {
                function createStackForSend() {
                    try {
                        throw Error(a)
                    } catch (f) {
                        a = f;
                        a.generatedStack = !0;
                        a.timestamp = a.timestamp || e;
                        b.addError(a, c, d)
                    }
                }
                var e = BOOMR.now();
                if (a && !0 !== a.reported) {
                    a.reported = !0;
                    c = c || BOOMR.plugins.Errors.VIA_APP;
                    d = d || BOOMR.plugins.Errors.SOURCE_APP;
                    if (a.stack || a.noStack) {
                        a.timestamp = a.timestamp || e;
                        b.addError(a, c, d)
                    } else createStackForSend()
                }
            },
            addError: function (c, d, e) {
                var f, g, h = !1,
                    i = BOOMR.now();
                if (b.isDuringLoad || b.sendAfterOnload) {
                    if (b.onError) {
                        try {
                            f = b.onError(c)
                        } catch (j) {
                            f = !1
                        }
                        if (!f) return
                    }
                    if (!(b.errors.length >= b.maxErrors)) {
                        g = a.fromError(c, d, e);
                        h = b.mergeDuplicateErrors(b.errors, g, !1);
                        BOOMR.fireEvent("error", h || g);
                        b.mergeDuplicateErrors(b.q, g, !0);
                        if (!(b.isDuringLoad && b.autorun || -1 !== b.sendIntervalId)) {
                            if (h) return;
                            b.sendIntervalId = setTimeout(function () {
                                b.sendIntervalId = -1;
                                if (0 !== b.q.length) {
                                    BOOMR.addVar("http.initiator", "error");
                                    BOOMR.addVar("api", 1);
                                    b.addErrorsToBeacon();
                                    if (b.isDuringLoad) {
                                        BOOMR.addVar("rt.tstart", i);
                                        BOOMR.addVar("rt.end", i);
                                        BOOMR.addVar("rt.start", "manual")
                                    }
                                    BOOMR.sendBeacon()
                                }
                            }, b.isDuringLoad ? b.sendIntervalDuringLoad : b.sendInterval)
                        }
                    }
                }
            },
            findDuplicateError: function (a, b) {
                if (BOOMR.utils.isArray(a) && void 0 !== b)
                    for (var c = 0; c < a.length; c++)
                        if (a[c].equals(b)) return a[c]
            },
            mergeDuplicateErrors: function (a, c, d) {
                if (BOOMR.utils.isArray(a) && void 0 !== c) {
                    var e = b.findDuplicateError(a, c);
                    if (e) {
                        d && (e.count += c.count);
                        return e
                    }
                    a.push(c)
                }
            },
            onBeacon: function () {
                BOOMR.removeVar("err");
                BOOMR.removeVar("api");
                BOOMR.removeVar("http.initiator")
            },
            pageReady: function () {
                b.isDuringLoad = !1
            },
            getErrors: function () {
                return 0 !== b.errors.length && b.errors
            },
            getErrorsForUrl: function (a) {
                a = b.compressErrors(a);
                return BOOMR.utils.serializeForUrl(a)
            },
            addErrorsToBeacon: function () {
                if (b.q.length) {
                    var a = this.getErrorsForUrl(b.q);
                    a && BOOMR.addVar("err", a);
                    b.q = []
                }
            },
            beforeBeacon: function () {
                b.addErrorsToBeacon()
            },
            wrapFn: function (a, c, d, e, f) {
                var g = c[a];
                if ("function" == typeof g) {
                    var h;
                    "addEventListener" === a && (h = c.removeEventListener);
                    c[a] = function () {
                        try {
                            var i = Array.prototype.slice.call(arguments),
                                j = i[e],
                                k = d ? this === window ? BOOMR.window : this : c,
                                l = b.wrap(j, k, f);
                            i[e] = l;
                            if ("addEventListener" === a) {
                                if (!b.trackFn(k, i[0], j, i[2], l)) return;
                                h && h.apply(k, arguments)
                            }
                            return g.apply(k, i)
                        } catch (m) {
                            b.send(m, f);
                            throw m
                        }
                    }
                }
            },
            trackFn: function (a, c, d, e, f) {
                if (!a) return !1;
                if (-1 !== b.trackedFnIdx(a, c, d, e)) return !1;
                a._bmrEvents || (a._bmrEvents = []);
                e = !0 === (e && e.capture || e);
                a._bmrEvents.push([c, d, e, f]);
                return !0
            },
            trackedFnIdx: function (a, b, c, d) {
                var e, f;
                if (a) {
                    a._bmrEvents || (a._bmrEvents = []);
                    d = !0 === (d && d.capture || d);
                    for (e = 0; e < a._bmrEvents.length; e++) {
                        f = a._bmrEvents[e];
                        if (f[0] === b && f[1] === c && f[2] === d) return e
                    }
                    return -1
                }
            },
            wrapRemoveEventListener: function (a) {
                var c, d, e = "removeEventListener",
                    f = a[e];
                "function" == typeof f && (a[e] = function (a, e, g) {
                    c = b.trackedFnIdx(this, a, e, g);
                    if (-1 !== c) {
                        d = this._bmrEvents[c][3];
                        f.call(this, a, d, g);
                        this._bmrEvents.splice(c, 1)
                    } else f.call(this, a, e, g)
                })
            },
            wrap: function (a, c, d) {
                if ("function" != typeof a) return a;
                d = d || BOOMR.plugins.Errors.VIA_APP;
                BOOMR_check_doc_domain();
                return function () {
                    try {
                        return a.apply(c, arguments)
                    } catch (e) {
                        if (-2146823277 === e.number && (d === BOOMR.plugins.Errors.VIA_EVENTHANDLER || d === BOOMR.plugins.Errors.VIA_TIMEOUT)) return;
                        b.send(e, d);
                        throw e
                    }
                }
            },
            test: function () {
                var a, c, d;
                if (0 !== arguments.length) {
                    a = arguments[0];
                    if ("function" == typeof a) {
                        c = arguments.length > 1 ? arguments[1] : BOOMR.window;
                        var d = Array.prototype.slice.call(arguments, 2);
                        return b.wrap(a, c).apply(c, d)
                    }
                }
            },
            normalizeToString: function (a) {
                return void 0 === a ? "undefined" : null === a ? "null" : "number" == typeof a && isNaN(a) ? "NaN" : "" === a ? "(empty string)" : 0 === a ? "0" : a ? "function" == typeof a ? "(function)" : a && "function" == typeof a.toString ? a.toString() : "(unknown)" : "false"
            },
            compressErrors: function (a) {
                var b, c, d, e, f, g, h, i, j, k = 0;
                i = BOOMR.window.location.origin;
                for (b = 0; b < a.length; b++) {
                    d = a[b];
                    j = {};
                    1 !== d.count && (j.n = d.count);
                    if ("number" == typeof d.timestamp) {
                        k = d.timestamp;
                        j.d = d.timestamp.toString(36)
                    }
                    if (d.frames.length) {
                        j.f = [];
                        for (c = 0; c < d.frames.length; c++) {
                            e = d.frames[c];
                            e.lineNumber && (e.lineNumber = parseInt(e.lineNumber, 10));
                            e.columnNumber && (e.columnNumber = parseInt(e.columnNumber, 10));
                            g = {
                                l: e.lineNumber,
                                c: e.columnNumber
                            };
                            "string" == typeof e.fileName && (-1 !== e.fileName.indexOf(i) ? g.wo = e.fileName.replace(i, "") : g.w = e.fileName);
                            "string" == typeof e.functionName && (g.f = e.functionName);
                            j.f.push(g)
                        }
                    }
                    if (d.events.length) {
                        j.e = [];
                        for (c = 0; c < d.events.length; c++) {
                            f = d.events[c];
                            h = {
                                t: f.type,
                                d: k ? k - f.timestamp : f.timestamp
                            };
                            if (f.type === BOOMR.plugins.Errors.EVENT_CLICK) {
                                f.id && (h.i = f.id);
                                f.name && (h.n = f.name);
                                f.tagName && (h.g = f.tagName)
                            } else if (f.type === BOOMR.plugins.Errors.EVENT_NETWORK) {
                                f.url && (h.u = f.url);
                                f.method && (h.m = f.method);
                                f.result && (h.r = f.result)
                            } else if (f.type === BOOMR.plugins.Errors.EVENT_LOG) {
                                f.severity && (h.s = f.severity);
                                f.message && (h.m = f.message)
                            }
                            j.e.push(h)
                        }
                    }
                    d.source !== BOOMR.plugins.Errors.SOURCE_APP && (j.s = d.source);
                    void 0 !== d.via && d.via !== BOOMR.plugins.Errors.VIA_APP && (j.v = d.via);
                    void 0 !== d.type && "Error" !== d.type && (j.t = d.type);
                    d.code && (j.c = d.code);
                    d.message && (j.m = d.message);
                    d.extra && (j.x = d.extra);
                    a[b] = j
                }
                return a
            }
        };
        var g = BOOMR.plugins.Errors = {
            init: function (a) {
                BOOMR.utils.pluginConfig(b, a, "Errors", ["onError", "monitorGlobal", "monitorNetwork", "monitorConsole", "monitorEvents", "monitorTimeout", "sendAfterOnload", "sendInterval", "maxErrors"]);
                if (b.initialized) return this;
                a && void 0 !== a.autorun && (b.autorun = a.autorun);
                b.initialized = !0;
                b.supported = !0;
                if (!b.supported) return this;
                BOOMR.subscribe("before_beacon", b.beforeBeacon, null, b);
                BOOMR.subscribe("beacon", b.onBeacon, null, b);
                BOOMR.subscribe("page_ready", b.pageReady, null, b);
                BOOMR.registerEvent("error");
                if (b.monitorGlobal) try {
                    BOOMR.globalOnError ? BOOMR.window.onerror && !BOOMR.window.onerror._bmr && (BOOMR.globalOnError = BOOMR.window.onerror) : BOOMR.globalOnError = BOOMR.window.onerror;
                    BOOMR.window.onerror = function (a, c, d, e, f) {
                        void 0 !== f && null !== f ? b.send(f, g.VIA_GLOBAL_EXCEPTION_HANDLER) : b.send({
                            message: a,
                            fileName: c,
                            lineNumber: d,
                            columnNumber: e,
                            noStack: !0
                        }, g.VIA_GLOBAL_EXCEPTION_HANDLER);
                        "function" == typeof BOOMR.globalOnError && BOOMR.globalOnError.apply(window, arguments)
                    };
                    if (BOOMR.globalErrors) {
                        for (var c = 0; c < BOOMR.globalErrors.length; c++) b.send(BOOMR.globalErrors[c], g.VIA_GLOBAL_EXCEPTION_HANDLER);
                        delete BOOMR.globalErrors
                    }
                } catch (e) {
                    BOOMR.debug("Exception in the window.onerror handler", "Errors")
                }
                b.monitorNetwork && BOOMR.subscribe("xhr_error", function (a) {
                    b.send({
                        code: a.status,
                        message: a.url,
                        noStack: !0
                    }, g.VIA_NETWORK)
                });
                if (b.monitorConsole) {
                    BOOMR.window.console || (BOOMR.window.console = {});
                    var d = BOOMR.window.console.error;
                    try {
                        BOOMR.window.console.error = function () {
                            var a = Array.prototype.slice.call(arguments);
                            1 === a.length ? b.send(b.normalizeToString(a[0]), g.VIA_CONSOLE) : b.send(b.normalizeToString(a), g.VIA_CONSOLE);
                            "function" == typeof d && ("function" == typeof d.apply ? d.apply(this, a) : d(a[0], a[1], a[2]))
                        }
                    } catch (f) {
                        BOOMR.debug("Exception in the window.console.error handler", "Errors")
                    }
                }
                if (b.monitorEvents)
                    if (BOOMR.window.EventTarget) {
                        b.wrapFn("addEventListener", BOOMR.window.EventTarget.prototype, !0, 1, g.VIA_EVENTHANDLER);
                        b.wrapRemoveEventListener(BOOMR.window.EventTarget.prototype)
                    } else {
                        if (BOOMR.window) {
                            b.wrapFn("addEventListener", BOOMR.window, !1, 1, g.VIA_EVENTHANDLER);
                            b.wrapRemoveEventListener(BOOMR.window)
                        }
                        if (BOOMR.window.Node) {
                            b.wrapFn("addEventListener", BOOMR.window.Node.prototype, !0, 1, g.VIA_EVENTHANDLER);
                            b.wrapRemoveEventListener(BOOMR.window.Node.prototype)
                        }
                        if (BOOMR.window.XMLHttpRequest) {
                            b.wrapFn("addEventListener", BOOMR.window.XMLHttpRequest.prototype, !0, 1, g.VIA_EVENTHANDLER);
                            b.wrapRemoveEventListener(BOOMR.window.XMLHttpRequest.prototype)
                        }
                    } if (b.monitorTimeout) {
                    b.wrapFn("setTimeout", BOOMR.window, !1, 0, g.VIA_TIMEOUT);
                    b.wrapFn("setInterval", BOOMR.window, !1, 0, g.VIA_TIMEOUT)
                }
                return this
            },
            is_complete: function () {
                return !0
            },
            is_supported: function () {
                return b.initialized && b.supported
            },
            SOURCE_APP: 1,
            SOURCE_BOOMERANG: 2,
            VIA_APP: 1,
            VIA_GLOBAL_EXCEPTION_HANDLER: 2,
            VIA_NETWORK: 3,
            VIA_CONSOLE: 4,
            VIA_EVENTHANDLER: 5,
            VIA_TIMEOUT: 6,
            EVENT_CLICK: 1,
            EVENT_NETWORK: 2,
            EVENT_LOG: 3,
            send: b.send,
            wrap: b.wrap,
            test: b.test,
            BoomerangError: a
        }
    }
}();
! function () {
    "use strict";

    function a(a) {
        BOOMR.warn(a, "TPAnalytics")
    }
    if (!BOOMR.plugins.TPAnalytics) {
        var b = {
            addedVars: [],
            clientids: !1,
            dropParams: [],
            googleAnalytics: function () {
                var c, d, e, f, g, h = {},
                    i = BOOMR.window,
                    j = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"];
                if (b.clientids) {
                    if ("function" == typeof i.ga) try {
                        i.ga(function (a) {
                            a && (h.clientid = a.get("clientId"))
                        });
                        if (!h.clientid && "function" == typeof i.ga.getAll) {
                            g = i.ga.getAll();
                            g && g.length > 0 && (h.clientid = g[0].get("clientId"))
                        }
                    } catch (k) {
                        a("googleAnalytics: " + k)
                    }
                    if (!h.clientid) {
                        f = BOOMR.utils.getCookie("_ga");
                        if (f) {
                            f = f.split(".");
                            f && 4 === f.length && (h.clientid = f[2] + "." + f[3])
                        } else {
                            f = BOOMR.utils.getCookie("__utma");
                            if (f) {
                                f = f.split(".");
                                f && 6 === f.length && (h.clientid = f[1] + "." + f[2])
                            }
                        }
                    }
                }
                for (c = 0; c < j.length; c++) {
                    d = j[c];
                    e = BOOMR.utils.getQueryParamValue(d);
                    e && (h[d] = e)
                }
                return h
            },
            adobeAnalytics: function () {
                var c, d, e, f, g, h = {},
                    i = BOOMR.window,
                    j = /AMCV_([A-Z0-9]+)%40AdobeOrg/,
                    k = /\|([^\[]+)/;
                if (void 0 !== i._satellite || "function" == typeof i.mboxCreate || "function" == typeof i.Visitor || "object" == typeof i.s) {
                    if (b.clientids)
                        if ("object" == typeof i.s && "object" == typeof i.s.visitor && "function" == typeof i.s.visitor.getAnalyticsVisitorID && "function" == typeof i.s.visitor.getMarketingCloudVisitorID) try {
                            d = i.s.visitor.getMarketingCloudVisitorID();
                            d && (h.mid = d);
                            c = i.s.visitor.getAnalyticsVisitorID();
                            c && (h.aid = i.s.visitor.getAnalyticsVisitorID())
                        } catch (l) {
                            a("adobeAnalytics: " + l)
                        } else {
                            e = j.exec(i.document.cookie);
                            if (e && "function" == typeof i.Visitor && "function" == typeof i.Visitor.getInstance) try {
                                f = i.Visitor.getInstance(e[1] + "@AdobeOrg");
                                if (f && "function" == typeof f.getAnalyticsVisitorID && "function" == typeof f.getMarketingCloudVisitorID) {
                                    d = f.getMarketingCloudVisitorID();
                                    d && (h.mid = d);
                                    c = f.getAnalyticsVisitorID();
                                    c && (h.aid = f.getAnalyticsVisitorID())
                                }
                            } catch (l) {
                                a("adobeAnalytics: " + l)
                            } else {
                                c = BOOMR.utils.getCookie("s_vi");
                                if (c) {
                                    g = k.exec(c);
                                    c = g && g.length > 0 ? g[1] : ""
                                } else c = BOOMR.utils.getCookie("s_fid");
                                c && (h.aid = c)
                            }
                        }
                    if ("object" == typeof i.s) {
                        "string" == typeof i.s.campaign && i.s.campaign && (h.campaign = i.s.campaign);
                        "string" == typeof i.s.purchaseID && i.s.purchaseID && (h.purchaseid = i.s.purchaseID)
                    }
                }
                return h
            },
            ibmAnalytics: function () {
                var c, d, e, f, g, h, i = {},
                    j = BOOMR.window,
                    k = {
                        cm_mmc: [/([^&#]+?)-_-([^&#]+?)-_-([^&#]+?)-_-([^&#]+)/, ["mmc_vendor", "mmc_category", "mmc_placement", "mmc_item"]],
                        cm_sp: [/([^&#]+?)-_-([^&#]+?)-_-([^&#]+)/, ["sp_type", "sp_promotion", "sp_link"]],
                        cm_re: [/([^&#]+?)-_-([^&#]+?)-_-([^&#]+)/, ["re_version", "re_pagearea", "re_link"]]
                    };
                if (b.clientids && "function" == typeof j.cmRetrieveUserID) try {
                    j.cmRetrieveUserID(function (a) {
                        i.coreid = a
                    })
                } catch (l) {
                    a("ibmAnalytics: " + l)
                }
                for (f in k)
                    if (k.hasOwnProperty(f)) {
                        c = BOOMR.utils.getQueryParamValue(f);
                        if (c) {
                            g = k[f][0];
                            h = k[f][1];
                            d = g.exec(c);
                            if (d && d.length > h.length)
                                for (e = 0; e < h.length; e++) d[e + 1] && (i[h[e]] = decodeURIComponent(d[e + 1]))
                        }
                    } return i
            },
            pageReady: function () {
                this.addedVars = [];
                var a, c, d, e, f = {
                    ga: this.googleAnalytics,
                    aa: this.adobeAnalytics,
                    ia: this.ibmAnalytics
                };
                for (a in f) {
                    c = f[a]();
                    for (var d in c) {
                        var e = "tp." + a + "." + d;
                        if (!BOOMR.utils.inArray(e, this.dropParams)) {
                            BOOMR.addVar(e, c[d]);
                            b.addedVars.push(e)
                        }
                    }
                }
                this.addedVars.length > 0 && BOOMR.sendBeacon()
            },
            onBeacon: function () {
                if (this.addedVars && this.addedVars.length > 0) {
                    BOOMR.removeVar(this.addedVars);
                    this.addedVars = []
                }
            }
        };
        BOOMR.plugins.TPAnalytics = {
            init: function (a) {
                BOOMR.utils.pluginConfig(b, a, "TPAnalytics", ["clientids", "dropParams"]);
                if (!b.initialized) {
                    BOOMR.utils.isArray(b.dropParams) || (b.dropParams = []);
                    BOOMR.subscribe("page_ready", b.pageReady, null, b);
                    BOOMR.subscribe("beacon", b.onBeacon, null, b);
                    BOOMR.subscribe("prerender_to_visible", b.pageReady, null, b);
                    b.initialized = !0
                }
                return this
            },
            is_complete: function () {
                return !0
            }
        }
    }
}();
! function (a) {
    "use strict";
    var b, c;
    if (void 0 !== a) {
        b = a;
        c = b.UserTimingCompression
    } else b = {};
    var d, e = d = {};
    e.noConflict = function () {
        b.UserTimingCompression = c;
        return e
    };
    e.trimTiming = function (a, b) {
        "number" != typeof a && (a = 0);
        "number" != typeof b && (b = 0);
        var c = Math.round(a),
            d = Math.round(b);
        return 0 === c ? 0 : c - d
    };
    e.toBase36 = function (a) {
        return "number" == typeof a ? a.toString(36) : ""
    };
    e.findUserTimingForFrame = function (a) {
        var b;
        if (!a) return [];
        try {
            a.location && a.location.href;
            if (!("performance" in a && a.performance && a.performance.getEntriesByType)) return b;
            b = a.performance.getEntriesByType("mark");
            b = b.concat(a.performance.getEntriesByType("measure"))
        } catch (c) {
            return b
        }
        return b
    };
    e.compressUserTiming = function (a, b) {
        var c, e, f, g = 0,
            h = {};
        b = b || {};
        if (!a || !a.length) return [];
        for (c = 0; c < a.length; c++) {
            e = a[c];
            void 0 === h[e.name] && (h[e.name] = []);
            "mark" === e.entryType ? h[e.name].push({
                startTime: e.startTime
            }) : "measure" === e.entryType && h[e.name].push({
                startTime: e.startTime,
                duration: e.duration
            })
        }
        for (var i in h)
            if (h.hasOwnProperty(i)) {
                if (b.map && void 0 === b.map[i]) continue;
                var j = h[i];
                if (b.map && void 0 !== b.map[i]) {
                    delete h[i];
                    i = b.map[i]
                }
                g = 0;
                for (c = 0; c < j.length; c++) {
                    var k = j[c];
                    f = d.toBase36(d.trimTiming(k.startTime, g));
                    "0" === f && (f = "");
                    var l = f;
                    if ("number" == typeof k.duration) {
                        var m = d.toBase36(Math.round(k.duration));
                        l += "_";
                        "0" !== m && (l += m)
                    }
                    g = k.startTime;
                    j[c] = l
                }
                h[i] = d.compressArray(j)
            } return h
    };
    e.convertToTrie = function (a) {
        var b, c, d, e, f, g, h, i = {};
        if (!a) return {};
        for (b in a)
            if (a.hasOwnProperty(b)) {
                d = a[b];
                e = b.split("");
                g = i;
                for (c = 0; c < e.length; c++) {
                    f = e[c];
                    h = g[f];
                    void 0 === h ? g = g[f] = c === e.length - 1 ? d : {} : "string" == typeof h ? g = g[f] = {
                        "!": h
                    } : c === e.length - 1 ? g[f]["!"] = d : g = g[f]
                }
            } return i
    };
    e.optimizeTrie = function (a, b) {
        var c, d, e, f = 0;
        if (!a) return {};
        for (c in a) {
            if ("object" == typeof a[c]) {
                d = this.optimizeTrie(a[c], !1);
                if (d) {
                    delete a[c];
                    c += d.name;
                    a[c] = d.value
                }
            }
            f++
        }
        if (1 === f) {
            if (b) {
                e = {};
                e[c] = a[c];
                return e
            }
            return {
                name: c,
                value: a[c]
            }
        }
        return !!b && a
    };
    e.compressArray = function (a) {
        var b = 0,
            c = "";
        if (!a || 0 === a.length || a.constructor !== Array) return "";
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (d < a.length - 1 && e === a[d + 1]) b++;
            else if (b > 0) {
                c += ("" !== c ? "." : "") + e + "*";
                b >= 2 && (c += b + 1);
                b = 0
            } else c += ("" !== c ? "." : "") + e
        }
        return /^\d+$/.test(c) ? parseInt(c, 10) : c
    };
    e.getCompressedUserTiming = function (b) {
        var c, e;
        b = b || {};
        c = b.window || a;
        e = this.findUserTimingForFrame(c);
        b.from && (e = e.filter(function (a) {
            return a.startTime + a.duration >= b.from
        }));
        b.to && (e = e.filter(function (a) {
            return a.startTime <= b.to
        }));
        return d.compressUserTiming(e, b)
    };
    e.compressForUri = function (a) {
        if ("object" != typeof a) return "";
        var b = !1;
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                if (isNaN(c)) {
                    b = !1;
                    break
                }
                b = !0
            } if (b) return "1" + d.flattenMap(a);
        var e = d.convertToTrie(a),
            f = d.optimizeTrie(e, !0),
            g = d.jsUrl(f),
            h = d.flattenArray(a);
        if ("string" != typeof h || 0 === h.length) return "";
        var i = encodeURIComponent(g),
            j = encodeURIComponent(h);
        return i.length < j.length ? g : "0" + h
    };
    e.flattenArray = function (a) {
        var b = [];
        if ("object" != typeof a) return "";
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                var d = (a[c] + "").replace("~", "%7E");
                c = c.replace("~", "%7E");
                b.push(c + "~" + d)
            } b = b.join("~");
        return b
    };
    e.flattenMap = function (a) {
        var b = [];
        if ("object" != typeof a) return "";
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                var e = parseInt(c, 10),
                    f = d.toBase36(e);
                if (e > 1331) continue;
                if (f.length > 1) {
                    f = d.toBase36(e - 36);
                    f = "-" + (1 === f.length ? "0" : "") + f
                }
                b.push(f + a[c])
            } b.sort();
        b = b.join("~");
        return b
    };
    e.jsUrl = function (a) {
        function b(a) {
            if (!/[^\w-.]/.test(a)) return a;
            a = a.replace(/[^\w-.]/g, function (a) {
                if ("$" === a) return "!";
                a = a.charCodeAt(0);
                return a < 256 ? "*" + ("00" + a.toString(16)).slice(-2) : "**" + ("0000" + a.toString(16)).slice(-4)
            });
            return a
        }
        switch (typeof a) {
            case "number":
                return isFinite(a) ? "~" + a : "~null";
            case "string":
                return "~'" + b(a);
            case "boolean":
                return "~" + a;
            case "object":
                return a ? Array.isArray(a) ? "~(" + (a.map(function (a) {
                    return d.jsUrl(a) || "~null"
                }).join("") || "~") + ")" : "~(" + Object.keys(a).map(function (c) {
                    var e = d.jsUrl(a[c]);
                    return e && b(c) + e
                }).filter(function (a) {
                    return a
                }).sort().join("~") + ")" : "~null";
            default:
                return
        }
    };
    "function" == typeof define && define.amd ? define([], function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : void 0 !== b && (b.UserTimingCompression = e)
}("undefined" != typeof window ? window : void 0);
! function () {
    if (!BOOMR.plugins.UserTiming) {
        var a = {
            complete: !1,
            initialized: !1,
            supported: !1,
            options: {
                from: 0,
                window: BOOMR.window
            },
            getUserTiming: function () {
                var b, c, d = BOOMR.hrNow(),
                    e = window.UserTimingCompression || BOOMR.window.UserTimingCompression;
                b = e.getCompressedUserTiming(a.options);
                c = e.compressForUri(b);
                this.options.from = d;
                return c
            },
            addEntriesToBeacon: function () {
                var a;
                if (!this.complete) {
                    BOOMR.removeVar("usertiming");
                    a = this.getUserTiming();
                    a && BOOMR.addVar({
                        usertiming: a
                    });
                    this.complete = !0
                }
            },
            clearMetrics: function (a) {
                a.hasOwnProperty("usertiming") && BOOMR.removeVar("usertiming");
                this.complete = !1
            },
            subscribe: function () {
                BOOMR.subscribe("before_beacon", this.addEntriesToBeacon, null, this);
                BOOMR.subscribe("beacon", this.clearMetrics, null, this)
            },
            pageReady: function () {
                this.checkSupport() && this.subscribe()
            },
            checkSupport: function () {
                if (this.supported) return !0;
                if (void 0 === (window.UserTimingCompression || BOOMR.window.UserTimingCompression)) {
                    BOOMR.warn("UserTimingCompression library not found", "usertiming");
                    return !1
                }
                var a = BOOMR.getPerformance();
                if (a && "function" == typeof a.getEntriesByType) {
                    var b = a.getEntriesByType("mark"),
                        c = a.getEntriesByType("measure");
                    if (BOOMR.utils.isArray(b) && BOOMR.utils.isArray(c)) {
                        BOOMR.info("Client supports UserTiming API", "usertiming");
                        this.supported = !0;
                        return !0
                    }
                }
                return !1
            }
        };
        BOOMR.plugins.UserTiming = {
            init: function (b) {
                if (a.initialized) return this;
                a.checkSupport() ? a.subscribe() : BOOMR.subscribe("page_ready", a.pageReady, null, a);
                a.initialized = !0;
                return this
            },
            is_complete: function () {
                return !0
            },
            is_supported: function () {
                return a.initialized && a.supported
            }
        }
    }
}();
! function () {
    function a(a, b, c) {
        var d = a.shift();
        if ("string" == typeof d) {
            var e = d.split("."),
                f = BOOMR,
                g = BOOMR;
            "BOOMR" === e[0] && e.shift();
            for (; e.length && f && ("object" == typeof f || "function" == typeof f);) {
                var h = e.shift();
                f = f[h];
                e.length && (g = g[h])
            }
            if (!e.length && "function" == typeof f) {
                var i = f.apply(g, a);
                "function" == typeof b && b.call(c, i)
            }
        }
    }

    function b(b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d && (BOOMR.utils.isArray(d) ? a(d) : "object" == typeof d && BOOMR.utils.isArray(d.arguments) && a(d.arguments, d.callback, d.thisArg))
        }
    }
    var c = BOOMR.window.BOOMR_mq;
    BOOMR.utils.isArray(c) && b(c);
    BOOMR.window.BOOMR_mq = {
        push: function () {
            b(arguments)
        }
    }
}();
! function (a) {
    function b() {
        if (!k) {
            k = !0;
            l = !1;
            (m || BOOMR.onloadFired() && "prerender" !== BOOMR.visibilityState()) && BOOMR.sendBeacon()
        }
    }

    function c(a) {
        var b = function () {
            throw new Exception("No JSON.parse available")
        };
        window.JSON && "function" == typeof JSON.parse ? b = JSON.parse : BOOMR.window && (BOOMR.window.JSON && "function" == typeof BOOMR.window.JSON.parse ? b = BOOMR.window.JSON.parse : "function" == typeof BOOMR.window.json_parse && (b = BOOMR.window.json_parse));
        try {
            return b(a)
        } catch (c) {}
        return null
    }

    function d(a) {
        if (a.session_id) {
            BOOMR.session.ID = a.session_id;
            delete a.session_id
        }
        for (var b = ["h.key", "h.d", "h.t", "h.cr"], c = 0; c < b.length; c++)
            if (a[b[c]]) {
                BOOMR.addVar(b[c], a[b[c]]);
                delete a[b[c]]
            } BOOMR.init(a);
        return !0
    }

    function e(b, e) {
        a.BOOMR_configt = BOOMR.now();
        var g, h = c(b);
        if (h) {
            g = e ? BOOMR.utils.getLocalStorage("LOGN") || {} : {};
            for (var i in h) h.hasOwnProperty(i) && (g[i] = h[i]);
            (r.storeConfig || h.LOGN && h.LOGN.storeConfig) && BOOMR.utils.setLocalStorage("LOGN", g, q);
            e || setTimeout(f, p);
            BOOMR.debug("Loading config from JSON response", "LOGN");
            return d(h)
        }
        return !1
    }

    function f() {
        var c, g, l, m = i.createElement("A"),
            n = BOOMR.getBeaconURL ? BOOMR.getBeaconURL() : "",
            o = [];
        if (!k) {
            l = BOOMR.utils.getLocalStorage("LOGN");
            if (l) {
                BOOMR.debug("Loading config from localStorage", "LOGN");
                if (d(l)) {
                    BOOMR.addVar("t_configls", Math.round(BOOMR.hrNow()));
                    BOOMR.setImmediate(b)
                }
            }
        }
        for (c in BOOMR.plugins) BOOMR.plugins.hasOwnProperty(c) && o.push(encodeURIComponent(c));
        h = BOOMR.now();
        g = "https://c.go-mpulse.net/api/config.json";
        g += "?key=" + BOOMR.getVar("h.key") + "&d=" + encodeURIComponent(j) + "&t=" + Math.round(h / 3e5) + "&v=" + BOOMR.version + (a === window ? "" : "&if=") + "&sl=" + (BOOMR.session.length > 0 ? 1 : 0) + "&si=" + BOOMR.session.ID + "-" + Math.round(BOOMR.session.start / 1e3).toString(36) + (k ? "&r=" : "") + (n ? "&bcn=" + encodeURIComponent(n) : "") + (k ? "" : "&plugins=" + o.join(","));
        g += "&acao=";
        m.href = g;
        BOOMR.config_url = m.href;
        ! function (a) {
            if (window.XDomainRequest) {
                var b = new XDomainRequest;
                b.open("GET", g);
                b.onload = function () {
                    e(b.responseText, a)
                };
                b.send()
            } else {
                var c = new XMLHttpRequest;
                c.open("GET", g, !0);
                c.onreadystatechange = function () {
                    4 === c.readyState && 200 === c.status && e(c.responseText, a)
                };
                c.send(null)
            }
        }(k);
        k && setTimeout(function () {
            f()
        }, p)
    }

    function g() {
        BOOMR.removeVar("t_configjs");
        BOOMR.removeVar("t_configfb");
        BOOMR.removeVar("t_configls")
    }
    var h, i = document,
        j = a.location.hostname,
        k = !1,
        l = !1,
        m = !0,
        n = !1,
        o = a.BOOMR_LOGN_always,
        p = a.BOOMR_CONFIG_RELOAD_TIMEOUT || 33e4,
        q = a.BOOMR_CONFIG_STORE_TIMEOUT || 48e4;
    ready = !1;
    if (!BOOMR.plugins.LOGN && !1 !== o && (void 0 !== o || j && "localhost" !== j && !j.match(/\.\d+$/) && !j.match(/^mhtml/) && !j.match(/^file:\//))) {
        var r = {
            storeConfig: !1
        };
        BOOMR.plugins.LOGN = {
            init: function (c) {
                var d;
                BOOMR.utils.pluginConfig(r, c, "LOGN", ["storeConfig"]);
                if (k || BOOMR.session.rate_limited) return this;
                if (c) {
                    if (c.rate_limited) {
                        BOOMR.session.rate_limited = !0;
                        return this
                    }
                    void 0 !== c.autorun && (m = c.autorun)
                }
                if (l) {
                    BOOMR.fireEvent("config", c);
                    ready = !0;
                    BOOMR.setImmediate(b);
                    if (h) {
                        BOOMR.addVar("t_configjs", BOOMR.now() - h);
                        if ("number" == typeof BOOMR_configt) {
                            BOOMR.addVar("t_configfb", BOOMR_configt - h);
                            delete BOOMR_configt
                        }
                    }
                    return this
                }
                BOOMR.registerEvent("config");
                a && a.BOOMR_API_key ? d = a.BOOMR_API_key : i && BOOMR.url && -1 !== BOOMR.url.lastIndexOf("/") && (d = BOOMR.url.substr(BOOMR.url.lastIndexOf("/") + 1));
                if (d) {
                    BOOMR.addVar("h.key", d);
                    if (!n && BOOMR.plugins && BOOMR.plugins.AutoXHR && "function" == typeof BOOMR.plugins.AutoXHR.addExcludeFilter) {
                        BOOMR.plugins.AutoXHR.addExcludeFilter(function (a) {
                            return !!(a && a.href && a.href.indexOf(this) > -1)
                        }, d, "ConfigXHRRequestFilter");
                        n = !0
                    }
                    BOOMR.setVarPriority("h.d", -1);
                    BOOMR.setVarPriority("h.key", -1);
                    BOOMR.setVarPriority("h.t", -1);
                    BOOMR.setVarPriority("h.cr", 1);
                    BOOMR.subscribe("beacon", g, null, null);
                    l = !0;
                    BOOMR.setImmediate(f);
                    return this
                }
                BOOMR.error("API key could not be detected from script URL or BOOMR_API_key, exiting")
            },
            is_complete: function () {
                return ready
            },
            readyToSend: function () {
                return BOOMR.hasVar("h.cr")
            },
            isJson: !0
        }
    }
}(BOOMR.window);
BOOMR.init({
    primary: !0,
    log: null,
    site_domain: "qiyan.comm",
    wait: !0,
    site_domain: null,
    ResourceTiming: {
        enabled: !1
    },
    Angular: {
        enabled: !1
    },
    Ember: {
        enabled: !1
    },
    Backbone: {
        enabled: !1
    },
    History: {
        enabled: !1
    },
    Errors: {
        enabled: !1
    },
    TPAnalytics: {
        enabled: !1
    },
    UserTiming: {
        enabled: !1
    },
    Continuity: {
        enabled: !1
    },
    IFrameDelay: {
        enabled: !1
    }
});
BOOMR.t_end = (new Date).getTime();
