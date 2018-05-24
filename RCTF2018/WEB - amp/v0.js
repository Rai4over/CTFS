self.AMP_CONFIG = {
    "allow-doc-opt-in": ["amp-animation", "ampdoc-shell", "amp-ima-video", "url-replacement-v2", "inabox-rov", "amp-date-picker"],
    "allow-url-opt-in": ["pump-early-frame"],
    "canary": 0,
    "expAdsenseA4A": 0.01,
    "expDoubleclickA4A": 0.01,
    "expDfpCanonicalFf": 0.05,
    "expUnconditionedCanonical": 0.05,
    "dbclk_a4a_viz_change": 0.02,
    "a4aProfilingRate": 0.1,
    "ad-type-custom": 1,
    "ios-embed-wrapper": 1,
    "amp-apester-media": 1,
    "amp-ima-video": 1,
    "amp-playbuzz": 1,
    "chunked-amp": 1,
    "amp-auto-ads": 1,
    "amp-auto-ads-adsense-holdout": 0.1,
    "slidescroll-disable-css-snap": 1,
    "version-locking": 1,
    "a4aFastFetchDoubleclickLaunched": 0,
    "a4aFastFetchAdSenseLaunched": 0,
    "a4a-new-signature-verifier": 1,
    "pump-early-frame": 1,
    "a4a-measure-get-ad-urls": 0,
    "3p-use-ampcontext": 1,
    "amp-animation": 1,
    "amp-live-list-sorting": 1,
    "amp-sidebar toolbar": 1,
    "a4a-safeframe-preloading-off": 0.01,
    "expUnconditionedAdxIdentity": 0.01,
    "expUnconditionedDfpIdentity": 0.01,
    "expUnconditionedCanonicalHoldback": 0.01,
    "amp-consent": 1,
    "v": "011526498116488",
    "type": "production"
};
/*AMP_CONFIG*/
try {
    (function() {
        var f;
        function aa(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            for (var d in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);
                    e && Object.defineProperty(a, d, e)
                } else
                    a[d] = b[d]
        }
        var ba = function(a) {
            return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
        }(this);
        function fa(a, b) {
            b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        }
        ;var ga = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function n(a) {
            var b = Object.create(null);
            if (!a)
                return b;
            for (var c; c = ga.exec(a); ) {
                var d = fa(c[1], c[1])
                  , e = c[2] ? fa(c[2], c[2]) : "";
                b[d] = e
            }
            return b
        }
        ;var ha = "";
        function t(a) {
            var b = a || self, c;
            if (b.AMP_MODE)
                c = b.AMP_MODE;
            else {
                c = b;
                var d = n(c.location.originalHash || c.location.hash)
                  , e = n(c.location.search);
                ha || (ha = c.AMP_CONFIG && c.AMP_CONFIG.v ? c.AMP_CONFIG.v : "011526498116488");
                c = b.AMP_MODE = {
                    localDev: !1,
                    development: !("1" != d.development && !c.AMP_DEV_MODE),
                    examiner: "2" == d.development,
                    filter: d.filter,
                    geoOverride: d["amp-geo"],
                    minified: !0,
                    lite: void 0 != e.amp_lite,
                    test: !1,
                    log: d.log,
                    version: "1526498116488",
                    rtvVersion: ha
                }
            }
            return c
        }
        ;var ia = Object.prototype.toString;
        function ja(a) {
            return Array.isArray(a)
        }
        function ka(a) {
            return "[object Object]" === ia.call(a)
        }
        function la(a) {
            return "number" === typeof a && isFinite(a)
        }
        ;function oa(a) {
            return 0 <= a.indexOf("\u200b\u200b\u200b")
        }
        function pa(a, b, c) {
            this.win = a;
            this.Lg = b;
            this.ab = this.win.console && this.win.console.log && "0" != t().log ? this.Lg({
                localDev: !1,
                development: t(void 0).development,
                filter: t(void 0).filter,
                minified: !0,
                lite: t(void 0).lite,
                test: !1,
                log: t(void 0).log,
                version: t(void 0).version,
                rtvVersion: t(void 0).rtvVersion
            }) : 0;
            this.Ic = c || ""
        }
        function qa(a, b, c) {
            if (0 != a.ab) {
                var d = a.win.console.log;
                "ERROR" == b ? d = a.win.console.error || d : "INFO" == b ? d = a.win.console.info || d : "WARN" == b && (d = a.win.console.warn || d);
                d.apply(a.win.console, c)
            }
        }
        f = pa.prototype;
        f.isEnabled = function() {
            return 0 != this.ab
        }
        ;
        f.fine = function(a, b) {
            4 <= this.ab && qa(this, "FINE", Array.prototype.slice.call(arguments, 1))
        }
        ;
        f.info = function(a, b) {
            3 <= this.ab && qa(this, "INFO", Array.prototype.slice.call(arguments, 1))
        }
        ;
        f.warn = function(a, b) {
            2 <= this.ab && qa(this, "WARN", Array.prototype.slice.call(arguments, 1))
        }
        ;
        f.Ga = function(a, b) {
            if (1 <= this.ab)
                qa(this, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var c = ra.apply(null, Array.prototype.slice.call(arguments, 1));
                sa(this, c);
                return c
            }
        }
        ;
        f.error = function(a, b) {
            var c = this.Ga.apply(this, arguments);
            c && (c.name = a || c.name,
            self.reportError(c))
        }
        ;
        f.expectedError = function(a, b) {
            var c = this.Ga.apply(this, arguments);
            c && (c.expected = !0,
            self.reportError(c))
        }
        ;
        f.createError = function(a) {
            var b = ra.apply(null, arguments);
            sa(this, b);
            return b
        }
        ;
        f.createExpectedError = function(a) {
            var b = ra.apply(null, arguments);
            sa(this, b);
            b.expected = !0;
            return b
        }
        ;
        f.assert = function(a, b, c) {
            var d;
            if (!a) {
                var e = (b || "Assertion failed").split("%s")
                  , g = e.shift()
                  , h = g
                  , k = [];
                "" != g && k.push(g);
                for (g = 2; g < arguments.length; g++) {
                    var l = arguments[g];
                    l && l.tagName && (d = l);
                    var m = e.shift();
                    k.push(l);
                    var p = m.trim();
                    "" != p && k.push(p);
                    var p = h, q;
                    q = (q = l) && 1 == q.nodeType ? q.tagName.toLowerCase() + (q.id ? "#" + q.id : "") : q;
                    h = p + (q + m)
                }
                g = Error(h);
                g.fromAssert = !0;
                g.associatedElement = d;
                g.messageArray = k;
                sa(this, g);
                self.reportError(g);
                throw g;
            }
            return a
        }
        ;
        f.assertElement = function(a, b) {
            this.assert(a && 1 == a.nodeType, (b || "Element expected") + ": %s", a);
            return a
        }
        ;
        f.assertString = function(a, b) {
            this.assert("string" == typeof a, (b || "String expected") + ": %s", a);
            return a
        }
        ;
        f.assertNumber = function(a, b) {
            this.assert("number" == typeof a, (b || "Number expected") + ": %s", a);
            return a
        }
        ;
        f.assertBoolean = function(a, b) {
            this.assert(!!a === a, (b || "Boolean expected") + ": %s", a);
            return a
        }
        ;
        f.assertEnumValue = function(a, b, c) {
            a: {
                for (var d in a)
                    if (a[d] === b) {
                        a = !0;
                        break a
                    }
                a = !1
            }
            if (a)
                return b;
            this.assert(!1, 'Unknown %s value: "%s"', c || "enum", b)
        }
        ;
        function sa(a, b) {
            b = va(b);
            a.Ic ? b.message ? -1 == b.message.indexOf(a.Ic) && (b.message += a.Ic) : b.message = a.Ic : oa(b.message) && (b.message = b.message.replace("\u200b\u200b\u200b", ""))
        }
        function va(a) {
            var b = a.message
              , c = String(Math.random());
            a.message = c;
            if (a.message === c)
                return a.message = b,
                a;
            var b = Error(a.message), d;
            for (d in a)
                b[d] = a[d];
            b.stack = a.stack;
            return b
        }
        function ra(a) {
            for (var b = null, c = "", d = 0; d < arguments.length; d++) {
                var e = arguments[d];
                e instanceof Error && !b ? b = va(e) : (c && (c += " "),
                c += e)
            }
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }
        function wa(a) {
            var b = ra.apply(null, arguments);
            setTimeout(function() {
                self.reportError(b);
                throw b;
            })
        }
        self.log = self.log || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Aa = self.log
          , Ba = null;
        function x(a) {
            Aa.user || (Aa.user = Ca("\u200b\u200b\u200b"));
            var b = Aa.user.win;
            return a && a.ownerDocument.defaultView != b ? Aa.userForEmbed ? Aa.userForEmbed : Aa.userForEmbed = Ca("\u200b\u200b\u200b\u200b") : Aa.user
        }
        function Ca(a) {
            if (!Ba)
                throw Error("failed to call initLogConstructor");
            return new Ba(self,function(a) {
                var b = parseInt(a.log, 10);
                return a.development || 1 <= b ? 4 : 2
            }
            ,a)
        }
        function B() {
            if (Aa.dev)
                return Aa.dev;
            if (!Ba)
                throw Error("failed to call initLogConstructor");
            return Aa.dev = new Ba(self,function(a) {
                a = parseInt(a.log, 10);
                return 3 <= a ? 4 : 2 <= a ? 3 : 0
            }
            )
        }
        ;var Da = Object.prototype.hasOwnProperty;
        function D(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }
        function F(a) {
            return a || {}
        }
        ;function Ea(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Fa(unescape(encodeURIComponent(a)))
        }
        function Fa(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }
        function Ga(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++)
                b[c] = String.fromCharCode(a[c]);
            return b.join("")
        }
        ;function Ha(a) {
            this.ng = a;
            this.ta = Object.create(null)
        }
        Ha.prototype.get = function(a) {
            if (this.ta[a])
                return this.ta[a].access = Date.now(),
                this.ta[a].payload
        }
        ;
        Ha.prototype.put = function(a, b) {
            var c = this;
            this.ta[a] = {
                payload: b,
                access: Date.now()
            };
            var d = Object.keys(this.ta);
            d.length > this.ng && (B().warn("lru-cache", "Trimming template cache"),
            d.sort(function(a, b) {
                return c.ta[b].access - c.ta[a].access
            }),
            delete this.ta[d[d.length - 1]])
        }
        ;
        function Ia(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }
        function Ja(a, b) {
            return b.length > a.length ? !1 : 0 == a.lastIndexOf(b, 0)
        }
        ;var Ka = {}
          , La = self.AMP_CONFIG || {};
        Ka.urls = {
            thirdParty: La.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: La.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof La.thirdPartyFrameRegex ? new RegExp(La.thirdPartyFrameRegex) : La.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: La.cdnUrl || "https://cdn.ampproject.org",
            cdnProxyRegex: ("string" == typeof La.cdnProxyRegex ? new RegExp(La.cdnProxyRegex) : La.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: La.errorReportingUrl || "https://amp-error-reporting.appspot.com/r",
            localDev: La.localDev || !1
        };
        var Oa = F({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        }), Pa, Qa, Ra = /[?&]amp_js[^&]*/, Sa = /[?&]amp_gsa[^&]*/, Ta = /[?&]usqp[^&]*/, $a = ["javascript:", "data:", "vbscript:"];
        function ab(a) {
            return a.origin || G(a.location.href).origin
        }
        function G(a, b) {
            Pa || (Pa = self.document.createElement("a"),
            Qa = self.UrlCache || (self.UrlCache = new Ha(100)));
            var c = Qa.get(a);
            if (c)
                return c;
            var d = bb(Pa, a)
              , e = d;
            if (b)
                return e;
            Qa.put(a, e);
            return e
        }
        function bb(a, b) {
            a.href = b;
            a.protocol || (a.href = a.href);
            b = {
                href: a.href,
                protocol: a.protocol,
                host: a.host,
                hostname: a.hostname,
                port: "0" == a.port ? "" : a.port,
                pathname: a.pathname,
                search: a.search,
                hash: a.hash,
                origin: null
            };
            "/" !== b.pathname[0] && (b.pathname = "/" + b.pathname);
            if ("http:" == b.protocol && 80 == b.port || "https:" == b.protocol && 443 == b.port)
                b.port = "",
                b.host = b.hostname;
            b.origin = a.origin && "null" != a.origin ? a.origin : "data:" != b.protocol && b.host ? b.protocol + "//" + b.host : b.href;
            return b
        }
        function cb(a, b, c) {
            if (!b)
                return a;
            var d = a.split("#", 2)
              , e = d[0].split("?", 2)
              , g = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return g += d[1] ? "#" + d[1] : ""
        }
        function db(a, b) {
            return cb(a, eb(b))
        }
        function eb(a) {
            var b = [], c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (ja(d))
                        for (var e = 0; e < d.length; e++) {
                            var g = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(g))
                        }
                    else
                        e = d,
                        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(e))
            }
            return b.join("&")
        }
        function fb(a) {
            "string" == typeof a && (a = G(a));
            return "https:" == a.protocol || "localhost" == a.hostname || Ia(a.hostname, ".localhost")
        }
        function gb(a, b, c) {
            c = void 0 === c ? "source" : c;
            x().assert(null != a, "%s %s must be available", b, c);
            var d = a;
            x().assert(fb(d) || /^(\/\/)/.test(d), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, c, d)
        }
        function hb(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        function ib(a) {
            "string" == typeof a && (a = G(a));
            return Ka.urls.cdnProxyRegex.test(a.origin)
        }
        function jb(a) {
            if (!a)
                return !0;
            "string" == typeof a && (a = G(a));
            return !$a.includes(a.protocol)
        }
        function kb(a) {
            "string" == typeof a && (a = G(a));
            if (!ib(a))
                return a.href;
            var b = a.pathname.split("/")
              , c = b[1];
            x().assert(Oa[c], "Unknown path prefix in url %s", a.href);
            var d = b[2]
              , e = "s" == d ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(d);
            x().assert(0 < e.indexOf("."), "Expected a . in origin %s", e);
            b.splice(1, "s" == d ? 3 : 2);
            b = e + b.join("/");
            c = (c = a.search) && "?" != c ? (c = c.replace(Ra, "").replace(Sa, "").replace(Ta, "").replace(/^[?&]/, "")) ? "?" + c : "" : "";
            return b + c + (a.hash || "")
        }
        function lb(a) {
            return G(kb(a)).origin
        }
        function mb(a) {
            var b = G(a)
              , c = n(b.search);
            x().assert(!("__amp_source_origin"in c), "Source origin is not allowed in %s", a)
        }
        ;function nb(a) {
            var b = Object.create(null), c;
            for (c in a)
                if (ob(a, c)) {
                    var d = a[c];
                    b[c] = ka(d) ? nb(d) : d
                }
            return b
        }
        function pb(a) {
            return JSON.parse(a)
        }
        function ob(a, b) {
            return null == a || "object" != typeof a ? !1 : Object.prototype.hasOwnProperty.call(a, b)
        }
        ;function zb(a, b) {
            var c = b || 0
              , d = this.length;
            for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
                var e = this[b];
                if (e === a || a !== a && e !== e)
                    return !0
            }
            return !1
        }
        ;function Ab(a) {
            return a == this || this.documentElement.contains(a)
        }
        function Bb(a) {
            var b = a.HTMLDocument || a.Document;
            b.prototype.contains || a.Object.defineProperty(b.prototype, "contains", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Ab
            })
        }
        ;function Cb(a) {
            return (a = Number(a)) ? 0 < a ? 1 : -1 : a
        }
        ;var Db = Object.prototype.hasOwnProperty;
        function Eb(a, b) {
            if (null == a)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null != e)
                    for (var g in e)
                        Db.call(e, g) && (c[g] = e[g])
            }
            return c
        }
        ;function I(a) {
            if (!(this instanceof I))
                throw new TypeError("Constructor Promise requires `new`");
            if (!Fb(a))
                throw new TypeError("Must pass resolver function");
            this._state = Gb;
            this._value = [];
            this._isChainEnd = !0;
            Hb(this, Ib(this, Jb), Ib(this, Kb), {
                then: a
            })
        }
        I.prototype.then = function(a, b) {
            a = Fb(a) ? a : void 0;
            b = Fb(b) ? b : void 0;
            if (a || b)
                this._isChainEnd = !1;
            return this._state(this._value, a, b)
        }
        ;
        I.prototype.catch = function(a) {
            return this.then(void 0, a)
        }
        ;
        I.resolve = function(a) {
            var b = this, c;
            return c = a === Object(a) && a instanceof this ? a : new b(function(b) {
                b(a)
            }
            )
        }
        ;
        I.reject = function(a) {
            return new this(function(b, c) {
                c(a)
            }
            )
        }
        ;
        I.all = function(a) {
            var b = this;
            return new b(function(c, d) {
                var e = a.length
                  , g = Array(e);
                if (0 === e)
                    return c(g);
                Lb(a, function(a, k) {
                    b.resolve(a).then(function(a) {
                        g[k] = a;
                        0 === --e && c(g)
                    }, d)
                })
            }
            )
        }
        ;
        I.race = function(a) {
            var b = this;
            return new b(function(c, d) {
                for (var e = 0; e < a.length; e++)
                    b.resolve(a[e]).then(c, d)
            }
            )
        }
        ;
        function Mb(a) {
            throw a;
        }
        I._overrideUnhandledExceptionHandler = function(a) {
            Mb = a
        }
        ;
        function Jb(a, b, c, d) {
            if (!b) {
                if (b = d)
                    b = b.promise,
                    b._state = Jb,
                    b._value = a;
                return this
            }
            d || (d = new Nb(this.constructor));
            Ob(Pb(d, b, a));
            return d.promise
        }
        function Kb(a, b, c, d) {
            if (!c)
                return d && (b = d.promise,
                b._state = Kb,
                b._value = a),
                this;
            d || (d = new Nb(this.constructor));
            Ob(Pb(d, c, a));
            return d.promise
        }
        function Gb(a, b, c, d) {
            if (!d) {
                if (!b && !c)
                    return this;
                d = new Nb(this.constructor)
            }
            a.push({
                deferred: d,
                onFulfilled: b || d.resolve,
                onRejected: c || d.reject
            });
            return d.promise
        }
        function Nb(a) {
            var b = this;
            this.promise = new a(function(a, d) {
                b.resolve = a;
                b.reject = d
            }
            );
            return b
        }
        function Qb(a, b, c, d) {
            var e = a._value;
            a._state = b;
            a._value = c;
            d && b === Gb && d._state(c, void 0, void 0, {
                promise: a,
                resolve: void 0,
                reject: void 0
            });
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                a._state(c, h.onFulfilled, h.onRejected, h.deferred)
            }
            e.length = 0;
            b === Kb && a._isChainEnd && setTimeout(function() {
                a._isChainEnd && Mb(c, a)
            }, 0)
        }
        function Ib(a, b) {
            return function(c) {
                Qb(a, b, c)
            }
        }
        function Rb() {}
        function Fb(a) {
            return "function" === typeof a
        }
        function Lb(a, b) {
            for (var c = 0; c < a.length; c++)
                b(a[c], c)
        }
        function Pb(a, b, c) {
            var d = a.promise
              , e = a.resolve
              , g = a.reject;
            return function() {
                try {
                    var a = b(c);
                    Hb(d, e, g, a, a)
                } catch (k) {
                    g(k)
                }
            }
        }
        var Ob = function() {
            function a() {
                for (var a = 0; a < e; a++) {
                    var b = d[a];
                    d[a] = null;
                    b()
                }
                e = 0
            }
            function b(a) {
                0 === e && c();
                d[e++] = a
            }
            var c;
            "undefined" !== typeof window && window.postMessage ? (window.addEventListener("message", a),
            c = function() {
                window.postMessage("macro-task", "*")
            }
            ) : c = function() {
                setTimeout(a, 0)
            }
            ;
            var d = Array(16)
              , e = 0;
            return b
        }();
        function Hb(a, b, c, d, e) {
            var g = c, h, k;
            try {
                if (d === a)
                    throw new TypeError("Cannot fulfill promise with itself");
                var l = d === Object(d);
                l && d instanceof a.constructor ? Qb(a, d._state, d._value, d) : l && (h = d.then) && Fb(h) ? (k = function(d) {
                    k = g = Rb;
                    Hb(a, b, c, d, d)
                }
                ,
                g = function(a) {
                    k = g = Rb;
                    c(a)
                }
                ,
                h.call(e, function(a) {
                    k(a)
                }, function(a) {
                    g(a)
                })) : b(d)
            } catch (m) {
                g(m)
            }
        }
        ;function Sb(a, b) {
            var c = void 0 === b ? this.contains(a) : !b;
            if (c)
                return this.remove(a),
                !1;
            this.add(a);
            return !0
        }
        function Tb(a) {
            /Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList && a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Sb
            })
        }
        ;/*
 Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Use of this source code is governed by a MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.

*/
        function Ub(a) {
            function b(a) {
                return a.toLowerCase()
            }
            var c = "auto";
            function d() {
                var a = gc.splice(0, gc.length);
                for (hc = 0; a.length; )
                    a.shift().call(null, a.shift())
            }
            function e(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    E(a[c], b)
            }
            function g(a) {
                for (var b = 0, c = a.length, d; b < c; b++)
                    d = a[b],
                    qb(d, rb[k(d)])
            }
            function h(a) {
                return function(b) {
                    pj(b) && (E(b, a),
                    ca.length && e(b.querySelectorAll(ca), a))
                }
            }
            function k(a) {
                var b = Ua.call(a, "is")
                  , c = a.nodeName.toUpperCase();
                a = ma.call(Ma, b ? jc + b.toUpperCase() : sb + c);
                return b && -1 < a && !l(c, b) ? -1 : a
            }
            function l(a, b) {
                return -1 < ca.indexOf(a + '[is="' + b + '"]')
            }
            function m(a) {
                var b = a.currentTarget
                  , c = a.attrChange
                  , d = a.attrName
                  , e = a.target
                  , g = a[kc] || 2
                  , h = a[ld] || 3;
                if (lc && (!e || e === b) && b[xa] && "style" !== d && (a.prevValue !== a.newValue || "" === a.newValue && (c === g || c === h)))
                    b[xa](d, c === g ? null : a.prevValue, c === h ? null : a.newValue)
            }
            function p(a) {
                var b = h(a);
                return function(a) {
                    gc.push(b, a.target);
                    hc && clearTimeout(hc);
                    hc = setTimeout(d, 1)
                }
            }
            function q(a) {
                wf && (wf = !1,
                a.currentTarget.removeEventListener(xf, q));
                ca.length && e((a.target || y).querySelectorAll(ca), a.detail === na ? na : da);
                Va && H()
            }
            function u(a, b) {
                yf.call(this, a, b);
                md.call(this, {
                    target: this
                })
            }
            function r(a, b) {
                rj(a, b);
                mc ? mc.observe(a, sj) : (nc && (a.setAttribute = u,
                a[Z] = nd(a),
                a[ea](tj, md)),
                a[ea](Na, m));
                a[tb] && lc && (a.created = !0,
                a[tb](),
                a.created = !1)
            }
            function H() {
                for (var a, b = 0, c = ub.length; b < c; b++)
                    a = ub[b],
                    Wa.contains(a) || (c--,
                    ub.splice(b--, 1),
                    E(a, na))
            }
            function C(a) {
                throw Error("A " + a + " type is already registered");
            }
            function E(a, b) {
                var c, d = k(a);
                -1 < d && (od(a, rb[d]),
                d = 0,
                b !== da || a[da] ? b !== na || a[na] || (a[da] = !1,
                a[na] = !0,
                d = 1) : (a[na] = !1,
                a[da] = !0,
                d = 1,
                Va && 0 > ma.call(ub, a) && ub.push(a)),
                d && (c = a[b + ta]) && c.call(a))
            }
            function z() {}
            function A(a, c, d) {
                d = d && d[vb] || "";
                var e = c.prototype
                  , g = pd(e)
                  , h = c.observedAttributes || qd
                  , k = {
                    prototype: g
                };
                oc(g, tb, {
                    value: function() {
                        if (pc)
                            pc = !1;
                        else if (!this[wb]) {
                            this[wb] = !0;
                            new c(this);
                            e[tb] && e[tb].call(this);
                            var a = xb[qc.get(c)];
                            (!Xa || 1 < a.create.length) && L(this)
                        }
                    }
                });
                oc(g, xa, {
                    value: function(a) {
                        -1 < ma.call(h, a) && e[xa].apply(this, arguments)
                    }
                });
                e[zf] && oc(g, uj, {
                    value: e[zf]
                });
                e[Af] && oc(g, vj, {
                    value: e[Af]
                });
                d && (k[vb] = d);
                a = a.toUpperCase();
                xb[a] = {
                    constructor: c,
                    create: d ? [d, b(a)] : [a]
                };
                qc.set(c, a);
                y[ya](a.toLowerCase(), k);
                T(a);
                Ya[a].r()
            }
            function v(a) {
                return (a = xb[a.toUpperCase()]) && a.constructor
            }
            function w(a) {
                return "string" === typeof a ? a : a && a.is || ""
            }
            function L(a) {
                for (var b = a[xa], c = b ? a.attributes : qd, d = c.length, e; d--; )
                    e = c[d],
                    b.call(a, e.name || e.nodeName, null, e.value || e.nodeValue)
            }
            function T(a) {
                a = a.toUpperCase();
                a in Ya || (Ya[a] = {},
                Ya[a].p = new Bf(function(b) {
                    Ya[a].r = b
                }
                ));
                return Ya[a].p
            }
            function P() {
                function c(b) {
                    var c = a[b];
                    if (c) {
                        a[b] = function qj(a) {
                            var b;
                            a || (a = this);
                            a[wb] || (pc = !0,
                            a = xb[qc.get(a.constructor)],
                            a = (b = Xa && 1 === a.create.length) ? Reflect.construct(c, qd, a.constructor) : y.createElement.apply(y, a.create),
                            a[wb] = !0,
                            pc = !1,
                            b || L(a));
                            return a
                        }
                        ;
                        a[b].prototype = c.prototype;
                        try {
                            c.prototype.constructor = a[b]
                        } catch (qj) {
                            wj = !0,
                            Za(c, wb, {
                                value: a[b]
                            })
                        }
                    }
                }
                ua && delete a.customElements;
                Za(a, "customElements", {
                    configurable: !0,
                    value: new z
                });
                Za(a, "CustomElementRegistry", {
                    configurable: !0,
                    value: z
                });
                for (var d = za.get(/^HTML[A-Z]*[a-z]/), e = d.length; e--; c(d[e]))
                    ;
                y.createElement = function(a, c) {
                    return (c = w(c)) ? rd.call(this, a, b(c)) : rd.call(this, a)
                }
                ;
                Cf || (sd = !0,
                y[ya](""))
            }
            var y = a.document
              , U = a.Object
              , za = function(a) {
                function b(a, b) {
                    b = b.toLowerCase();
                    b in e || (e[a] = (e[a] || []).concat(b),
                    e[b] = e[b.toUpperCase()] = a)
                }
                function c(a) {
                    var b = [], c;
                    for (c in e)
                        a.test(c) && b.push(c);
                    return b
                }
                var d = /^[A-Z]+[a-z]/, e = (U.create || U)(null), g = {}, h, k, l, m;
                for (k in a)
                    for (m in a[k])
                        for (l = a[k][m],
                        e[m] = l,
                        h = 0; h < l.length; h++)
                            e[l[h].toLowerCase()] = e[l[h].toUpperCase()] = m;
                g.get = function(a) {
                    return "string" === typeof a ? e[a] || (d.test(a) ? [] : "") : c(a)
                }
                ;
                g.set = function wm(a, c) {
                    return d.test(a) ? b(a, c) : b(c, a),
                    g
                }
                ;
                return g
            }({
                collections: {
                    HTMLAllCollection: ["all"],
                    HTMLCollection: ["forms"],
                    HTMLFormControlsCollection: ["elements"],
                    HTMLOptionsCollection: ["options"]
                },
                elements: {
                    Element: ["element"],
                    HTMLAnchorElement: ["a"],
                    HTMLAppletElement: ["applet"],
                    HTMLAreaElement: ["area"],
                    HTMLAttachmentElement: ["attachment"],
                    HTMLAudioElement: ["audio"],
                    HTMLBRElement: ["br"],
                    HTMLBaseElement: ["base"],
                    HTMLBodyElement: ["body"],
                    HTMLButtonElement: ["button"],
                    HTMLCanvasElement: ["canvas"],
                    HTMLContentElement: ["content"],
                    HTMLDListElement: ["dl"],
                    HTMLDataElement: ["data"],
                    HTMLDataListElement: ["datalist"],
                    HTMLDetailsElement: ["details"],
                    HTMLDialogElement: ["dialog"],
                    HTMLDirectoryElement: ["dir"],
                    HTMLDivElement: ["div"],
                    HTMLDocument: ["document"],
                    HTMLElement: "element abbr address article aside b bdi bdo cite code command dd dfn dt em figcaption figure footer header i kbd mark nav noscript rp rt ruby s samp section small strong sub summary sup u var wbr".split(" "),
                    HTMLEmbedElement: ["embed"],
                    HTMLFieldSetElement: ["fieldset"],
                    HTMLFontElement: ["font"],
                    HTMLFormElement: ["form"],
                    HTMLFrameElement: ["frame"],
                    HTMLFrameSetElement: ["frameset"],
                    HTMLHRElement: ["hr"],
                    HTMLHeadElement: ["head"],
                    HTMLHeadingElement: "h1 h2 h3 h4 h5 h6".split(" "),
                    HTMLHtmlElement: ["html"],
                    HTMLIFrameElement: ["iframe"],
                    HTMLImageElement: ["img"],
                    HTMLInputElement: ["input"],
                    HTMLKeygenElement: ["keygen"],
                    HTMLLIElement: ["li"],
                    HTMLLabelElement: ["label"],
                    HTMLLegendElement: ["legend"],
                    HTMLLinkElement: ["link"],
                    HTMLMapElement: ["map"],
                    HTMLMarqueeElement: ["marquee"],
                    HTMLMediaElement: ["media"],
                    HTMLMenuElement: ["menu"],
                    HTMLMenuItemElement: ["menuitem"],
                    HTMLMetaElement: ["meta"],
                    HTMLMeterElement: ["meter"],
                    HTMLModElement: ["del", "ins"],
                    HTMLOListElement: ["ol"],
                    HTMLObjectElement: ["object"],
                    HTMLOptGroupElement: ["optgroup"],
                    HTMLOptionElement: ["option"],
                    HTMLOutputElement: ["output"],
                    HTMLParagraphElement: ["p"],
                    HTMLParamElement: ["param"],
                    HTMLPictureElement: ["picture"],
                    HTMLPreElement: ["pre"],
                    HTMLProgressElement: ["progress"],
                    HTMLQuoteElement: ["blockquote", "q", "quote"],
                    HTMLScriptElement: ["script"],
                    HTMLSelectElement: ["select"],
                    HTMLShadowElement: ["shadow"],
                    HTMLSlotElement: ["slot"],
                    HTMLSourceElement: ["source"],
                    HTMLSpanElement: ["span"],
                    HTMLStyleElement: ["style"],
                    HTMLTableCaptionElement: ["caption"],
                    HTMLTableCellElement: ["td", "th"],
                    HTMLTableColElement: ["col", "colgroup"],
                    HTMLTableElement: ["table"],
                    HTMLTableRowElement: ["tr"],
                    HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
                    HTMLTemplateElement: ["template"],
                    HTMLTextAreaElement: ["textarea"],
                    HTMLTimeElement: ["time"],
                    HTMLTitleElement: ["title"],
                    HTMLTrackElement: ["track"],
                    HTMLUListElement: ["ul"],
                    HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
                    HTMLVideoElement: ["video"]
                },
                nodes: {
                    Attr: ["node"],
                    Audio: ["audio"],
                    CDATASection: ["node"],
                    CharacterData: ["node"],
                    Comment: ["#comment"],
                    Document: ["#document"],
                    DocumentFragment: ["#document-fragment"],
                    DocumentType: ["node"],
                    HTMLDocument: ["#document"],
                    Image: ["img"],
                    Option: ["option"],
                    ProcessingInstruction: ["node"],
                    ShadowRoot: ["#shadow-root"],
                    Text: ["#text"],
                    XMLDocument: ["xml"]
                }
            });
            c || (c = "auto");
            var ya = "registerElement", Z = "__" + ya + (1E5 * a.Math.random() >> 0), ea = "addEventListener", da = "attached", ta = "Callback", na = "detached", vb = "extends", xa = "attributeChanged" + ta, uj = da + ta, zf = "connected" + ta, Af = "disconnected" + ta, tb = "created" + ta, vj = na + ta, kc = "ADDITION", td = "MODIFICATION", ld = "REMOVAL", Na = "DOMAttrModified", xf = "DOMContentLoaded", tj = "DOMSubtreeModified", sb = "<", jc = "=", xj = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/, yj = "ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "), Ma = [], rb = [], ca = "", Wa = y.documentElement, ma = Ma.indexOf || function(a) {
                for (var b = this.length; b-- && this[b] !== a; )
                    ;
                return b
            }
            , ud = U.prototype, vd = ud.hasOwnProperty, rc = ud.isPrototypeOf, Za = U.defineProperty, qd = [], wd = U.getOwnPropertyDescriptor, Df = U.getOwnPropertyNames, zj = U.getPrototypeOf, Ef = U.setPrototypeOf, Ff = !!U.__proto__, wj = !1, wb = "__dreCEv1", ua = a.customElements, Xa = "force" !== c && !!(ua && ua.define && ua.get && ua.whenDefined), Gf = U.create || U, Aj = a.Map || function() {
                var a = [], b = [], c;
                return {
                    get: function(c) {
                        return b[ma.call(a, c)]
                    },
                    set: function(d, e) {
                        c = ma.call(a, d);
                        0 > c ? b[a.push(d) - 1] = e : b[c] = e
                    }
                }
            }
            , Bf = a.Promise || function(a) {
                function b(a) {
                    for (d = !0; c.length; )
                        c.shift()(a)
                }
                var c = []
                  , d = !1
                  , e = {
                    "catch": function() {
                        return e
                    },
                    then: function(a) {
                        c.push(a);
                        d && setTimeout(b, 1);
                        return e
                    }
                };
                a(b);
                return e
            }
            , pc = !1, xb = Gf(null), Ya = Gf(null), qc = new Aj, pd = U.create || function ic(a) {
                return a ? (ic.prototype = a,
                new ic) : this
            }
            , rj = Ef || (Ff ? function(a, b) {
                a.__proto__ = b;
                return a
            }
            : Df && wd ? function() {
                function a(a, b) {
                    for (var c, d = Df(b), e = 0, g = d.length; e < g; e++)
                        c = d[e],
                        vd.call(a, c) || Za(a, c, wd(b, c))
                }
                return function(b, c) {
                    do
                        a(b, c);
                    while ((c = zj(c)) && !rc.call(c, b));return b
                }
            }() : function(a, b) {
                for (var c in b)
                    a[c] = b[c];
                return a
            }
            ), yb = a.MutationObserver || a.WebKitMutationObserver, W = (a.HTMLElement || a.Element || a.Node).prototype, Va = !rc.call(W, Wa), oc = Va ? function(a, b, c) {
                a[b] = c.value;
                return a
            }
            : Za, pj = Va ? function(a) {
                return 1 === a.nodeType
            }
            : function(a) {
                return rc.call(W, a)
            }
            , ub = Va && [], Hf = W.attachShadow, Bj = W.cloneNode, xd = W.dispatchEvent, Ua = W.getAttribute, Cj = W.hasAttribute, Dj = W.removeAttribute, yf = W.setAttribute, sc = y.createElement, rd = sc, sj = yb && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            }, If = yb || function() {
                nc = !1;
                Wa.removeEventListener(Na, If)
            }
            , gc, hc = 0, Cf = ya in y, Jf = !0, sd = !1, nc = !0, wf = !0, lc = !0, md, tc, nd, mc, yd, od, qb;
            Cf || (Ef || Ff ? (od = function(a, b) {
                rc.call(b, a) || r(a, b)
            }
            ,
            qb = r) : qb = od = function(a, b) {
                a[Z] || (a[Z] = U(!0),
                r(a, b))
            }
            ,
            Va ? (nc = !1,
            function() {
                function a(a) {
                    var b = a.currentTarget
                      , c = b[Z];
                    a = a.propertyName;
                    var d;
                    c.hasOwnProperty(a) && (c = c[a],
                    d = new CustomEvent(Na,{
                        bubbles: !0
                    }),
                    d.attrName = c.name,
                    d.prevValue = c.value || null,
                    d.newValue = c.value = b[a] || null,
                    null == d.prevValue ? d[kc] = d.attrChange = 0 : d[td] = d.attrChange = 1,
                    xd.call(b, d))
                }
                function b(a, b) {
                    var c = Cj.call(this, a)
                      , d = c && Ua.call(this, a)
                      , e = new CustomEvent(Na,{
                        bubbles: !0
                    });
                    yf.call(this, a, b);
                    e.attrName = a;
                    e.prevValue = c ? d : null;
                    e.newValue = b;
                    c ? e[td] = e.attrChange = 1 : e[kc] = e.attrChange = 0;
                    xd.call(this, e)
                }
                function c(a) {
                    var b = new CustomEvent(Na,{
                        bubbles: !0
                    });
                    b.attrName = a;
                    b.prevValue = Ua.call(this, a);
                    b.newValue = null;
                    b[ld] = b.attrChange = 2;
                    Dj.call(this, a);
                    xd.call(this, b)
                }
                var d = wd(W, ea)
                  , e = d.value;
                d.value = function(d, g, h) {
                    d === Na && this[xa] && this.setAttribute !== b && (this[Z] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    },
                    this.setAttribute = b,
                    this.removeAttribute = c,
                    e.call(this, "propertychange", a));
                    e.call(this, d, g, h)
                }
                ;
                Za(W, ea, d)
            }()) : yb || (Wa[ea](Na, If),
            Wa.setAttribute(Z, 1),
            Wa.removeAttribute(Z),
            nc && (md = function(a) {
                var b, c, d;
                if (this === a.target) {
                    b = this[Z];
                    this[Z] = c = nd(this);
                    for (d in c) {
                        if (!(d in b))
                            return tc(0, this, d, b[d], c[d], kc);
                        if (c[d] !== b[d])
                            return tc(1, this, d, b[d], c[d], td)
                    }
                    for (d in b)
                        if (!(d in c))
                            return tc(2, this, d, b[d], c[d], ld)
                }
            }
            ,
            tc = function(a, b, c, d, e, g) {
                c = {
                    attrChange: a,
                    currentTarget: b,
                    attrName: c,
                    prevValue: d,
                    newValue: e
                };
                c[g] = a;
                m(c)
            }
            ,
            nd = function(a) {
                for (var b, c = {}, d = a.attributes, e = 0, g = d.length; e < g; e++)
                    b = d[e],
                    a = b.name,
                    "setAttribute" !== a && (c[a] = b.value);
                return c
            }
            )),
            y[ya] = function vf(a, b) {
                function c() {
                    return l ? y.createElement(m, r) : y.createElement(m)
                }
                r = a.toUpperCase();
                Jf && (Jf = !1,
                yb ? (mc = function(a, b) {
                    function c(a, b) {
                        for (var c = 0, d = a.length; c < d; b(a[c++]))
                            ;
                    }
                    return new yb(function(d) {
                        for (var e, g, h, k = 0, l = d.length; k < l; k++)
                            if (e = d[k],
                            "childList" === e.type)
                                c(e.addedNodes, a),
                                c(e.removedNodes, b);
                            else if (g = e.target,
                            lc && g[xa] && "style" !== e.attributeName && (h = Ua.call(g, e.attributeName),
                            h !== e.oldValue))
                                g[xa](e.attributeName, e.oldValue, h)
                    }
                    )
                }(h(da), h(na)),
                yd = function(a) {
                    mc.observe(a, {
                        childList: !0,
                        subtree: !0
                    });
                    return a
                }
                ,
                yd(y),
                Hf && (W.attachShadow = function() {
                    return yd(Hf.apply(this, arguments))
                }
                )) : (gc = [],
                y[ea]("DOMNodeInserted", p(da)),
                y[ea]("DOMNodeRemoved", p(na))),
                y[ea](xf, q),
                y[ea]("readystatechange", q),
                W.cloneNode = function(a) {
                    var b = Bj.call(this, !!a)
                      , c = k(b);
                    -1 < c && qb(b, rb[c]);
                    a && ca.length && g(b.querySelectorAll(ca));
                    return b
                }
                );
                if (sd)
                    return sd = !1;
                -2 < ma.call(Ma, jc + r) + ma.call(Ma, sb + r) && C(a);
                if (!xj.test(r) || -1 < ma.call(yj, r))
                    throw Error("The type " + a + " is invalid");
                var d = b || ud, l = vd.call(d, vb), m = l ? b[vb].toUpperCase() : r, r;
                l && -1 < ma.call(Ma, sb + m) && C(m);
                b = Ma.push((l ? jc : sb) + r) - 1;
                ca = ca.concat(ca.length ? "," : "", l ? m + '[is="' + a.toLowerCase() + '"]' : m);
                c.prototype = rb[b] = vd.call(d, "prototype") ? d.prototype : pd(W);
                ca.length && e(y.querySelectorAll(ca), da);
                return c
            }
            ,
            y.createElement = rd = function(a, c) {
                var d = w(c)
                  , e = d ? sc.call(y, a, b(d)) : sc.call(y, a);
                a = "" + a;
                var g = ma.call(Ma, (d ? jc : sb) + (d || a).toUpperCase())
                  , h = -1 < g;
                d && (e.setAttribute("is", d = d.toLowerCase()),
                h && (h = l(a.toUpperCase(), d)));
                lc = !y.createElement.innerHTMLHelper;
                h && qb(e, rb[g]);
                return e
            }
            );
            z.prototype = {
                constructor: z,
                define: Xa ? function(a, b, c) {
                    if (c)
                        A(a, b, c);
                    else {
                        var d = a.toUpperCase();
                        xb[d] = {
                            constructor: b,
                            create: [d]
                        };
                        qc.set(b, d);
                        ua.define(a, b)
                    }
                }
                : A,
                get: Xa ? function(a) {
                    return ua.get(a) || v(a)
                }
                : v,
                whenDefined: Xa ? function(a) {
                    return Bf.race([ua.whenDefined(a), T(a)])
                }
                : T
            };
            if (ua && "force" !== c)
                try {
                    (function(b, c, d) {
                        c[vb] = "a";
                        b.prototype = pd(HTMLAnchorElement.prototype);
                        b.prototype.constructor = b;
                        a.customElements.define(d, b, c);
                        if (Ua.call(y.createElement("a", {
                            is: d
                        }), "is") !== d || Xa && Ua.call(new b, "is") !== d)
                            throw c;
                    }
                    )(function vf() {
                        return Reflect.construct(HTMLAnchorElement, [], vf)
                    }, {}, "document-register-element-a")
                } catch (ic) {
                    P()
                }
            else
                P();
            try {
                sc.call(y, "a", "a")
            } catch (ic) {
                b = function(a) {
                    return {
                        is: a.toLowerCase()
                    }
                }
            }
        }
        ;Ub(self);
        Tb(self);
        (function(a) {
            a.Math.sign || a.Object.defineProperty(a.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Cb
            })
        }
        )(self);
        (function(a) {
            a.Object.assign || a.Object.defineProperty(a.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Eb
            })
        }
        )(self);
        (function(a) {
            a.Promise || (a.Promise = I,
            I.default && (a.Promise = I.default),
            a.Promise.resolve = I.resolve,
            a.Promise.reject = I.reject,
            a.Promise.all = I.all,
            a.Promise.race = I.race)
        }
        )(self);
        Bb(self);
        (function(a) {
            a.Array.prototype.includes || a.Object.defineProperty(Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: zb
            })
        }
        )(self);
        function Vb(a, b, c) {
            if (a.nodeType) {
                var d = Wb((a.ownerDocument || a).defaultView, b);
                if (d)
                    return d
            }
            return !a.nodeType || c ? J(a, b) : null
        }
        function Xb(a, b, c) {
            var d = Yb(a);
            Wb(a, b);
            Zb(a, a, b, function() {
                return c
            });
            $b(a, b)
        }
        function Wb(a, b) {
            var c = Yb(a);
            return a != c && ac(a, b) ? $b(a, b) : null
        }
        function K(a, b, c) {
            var d;
            a = Yb(a);
            Zb(a, a, b, c);
            d && $b(a, b)
        }
        function M(a, b, c, d) {
            var e = bc(a)
              , g = cc(e);
            Zb(g, e, b, c);
            d && $b(g, b)
        }
        function N(a, b) {
            a = Yb(a);
            return $b(a, b)
        }
        function dc(a) {
            a = Yb(a);
            return ac(a, "performance") ? $b(a, "performance") : null
        }
        function J(a, b) {
            a = bc(a);
            a = cc(a);
            return $b(a, b)
        }
        function ec(a, b) {
            return fc(cc(a), b)
        }
        function uc(a, b) {
            return vc(cc(a), b)
        }
        function wc(a, b) {
            a.__AMP_PARENT = b;
            a.__AMP_TOP = Yb(b)
        }
        function Yb(a) {
            return a.__AMP_TOP || a
        }
        function xc(a, b) {
            var c = (a.ownerDocument || a).defaultView;
            if (c && c != b && Yb(c) == b)
                try {
                    return c.frameElement
                } catch (d) {}
            return null
        }
        function bc(a) {
            return a.nodeType ? N((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }
        function cc(a) {
            a = bc(a);
            return a.isSingleDoc() ? a.win : a
        }
        function $b(a, b) {
            ac(a, b);
            var c = yc(a);
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context),
            a.ctor = null,
            a.context = null,
            a.resolve && a.resolve(a.obj));
            return a.obj
        }
        function Zb(a, b, c, d) {
            var e = yc(a)
              , g = e[c];
            g || (g = e[c] = {
                obj: null,
                promise: null,
                resolve: null,
                context: null,
                ctor: null
            });
            g.ctor || g.obj || (g.ctor = d,
            g.context = b,
            g.resolve && $b(a, c))
        }
        function fc(a, b) {
            var c = vc(a, b);
            if (c)
                return c;
            var d, e = new Promise(function(a) {
                d = a
            }
            );
            yc(a)[b] = {
                obj: null,
                promise: e,
                resolve: d,
                context: null,
                ctor: null
            };
            return e
        }
        function vc(a, b) {
            var c = yc(a)[b];
            if (c) {
                if (c.promise)
                    return c.promise;
                $b(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }
        function yc(a) {
            var b = a.services;
            b || (b = a.services = {});
            return b
        }
        function zc(a, b) {
            var c = a.frameElement
              , d = bc(c)
              , d = cc(d);
            ac(d, b) && (b = J(c, b),
            "function" == typeof b.adoptEmbedWindow && b.adoptEmbedWindow(a))
        }
        function ac(a, b) {
            a = a.services && a.services[b];
            return !(!a || !a.ctor && !a.obj)
        }
        ;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Ac = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
        function Bc(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        }
        ;function Cc(a, b, c) {
            if (b(a))
                c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() {
                        b(a) && (e.disconnect(),
                        c())
                    }
                    );
                    e.observe(a, {
                        childList: !0
                    })
                } else
                    var g = d.setInterval(function() {
                        b(a) && (d.clearInterval(g),
                        c())
                    }, 5)
            }
        }
        function Dc(a, b) {
            Cc(a.documentElement, function() {
                return !!a.body
            }, b)
        }
        function Ec(a) {
            return new Promise(function(b) {
                Dc(a, b)
            }
            )
        }
        function Fc(a) {
            a.parentElement && a.parentElement.removeChild(a)
        }
        function Gc(a) {
            var b = a.isConnected;
            if (void 0 !== b)
                return b;
            do
                if (a = Hc(a),
                a.host)
                    a = a.host;
                else
                    break;
            while (1);return a.nodeType === Node.DOCUMENT_NODE
        }
        function Hc(a) {
            if (Node.prototype.getRootNode)
                return a.getRootNode() || a;
            for (; a.parentNode; a = a.parentNode)
                ;
            return a
        }
        function Ic(a, b) {
            for (var c, d = a; d && d !== c; d = d.parentElement)
                if (b(d))
                    return d;
            return null
        }
        function Jc(a, b) {
            for (; a; a = a.parentNode)
                if (b(a))
                    return a;
            return null
        }
        function Kc(a, b) {
            if (a.closest)
                return a.closest(b);
            b = b.toUpperCase();
            return Ic(a, function(a) {
                return a.tagName == b
            })
        }
        function Lc(a, b) {
            var c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling)
                b(a) && c.push(a);
            return c
        }
        function Mc(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a))
                    return a;
            return null
        }
        function Nc(a, b) {
            var c = [];
            for (a = a.firstChild; a; a = a.nextSibling)
                b(a) && c.push(a);
            return c
        }
        var Oc;
        function Pc(a) {
            a = a.ownerDocument;
            try {
                var b = a.createElement("div")
                  , c = a.createElement("div");
                b.appendChild(c);
                return b.querySelector(":scope div") === c
            } catch (d) {
                return !1
            }
        }
        function Qc(a, b) {
            null == Oc && (Oc = Pc(a));
            if (Oc)
                return a.querySelector(":scope " + b);
            var c = "i-amphtml-scoped";
            a.classList.add(c);
            b = a.querySelector("." + c + " " + b);
            a.classList.remove(c);
            return b
        }
        function Rc(a, b) {
            null == Oc && (Oc = Pc(a));
            if (Oc)
                return a.querySelectorAll(":scope " + b);
            a.classList.add("i-amphtml-scoped");
            b = a.querySelectorAll(".i-amphtml-scoped " + b);
            a.classList.remove("i-amphtml-scoped");
            return b
        }
        function Sc(a, b, c) {
            var d, e;
            try {
                e = a.open(b, c, d)
            } catch (g) {
                B().error("DOM", "Failed to open url on target: ", c, g)
            }
            e || "_top" == c || (e = a.open(b, "_top"))
        }
        function Tc(a) {
            return a.parent && a.parent != a
        }
        ;var Uc = [];
        function Vc(a, b, c) {
            var d = vc(a, b);
            return d ? d : Wc(a, b, c, !0)
        }
        function Xc(a, b, c) {
            return Yc(a, b, c, void 0).then(function(a) {
                return x().assert(a, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)
            })
        }
        function Yc(a, b, c, d) {
            var e = bc(a)
              , g = uc(a, b);
            return g ? g : e.whenBodyAvailable().then(function() {
                return Zc(e.win, c)
            }).then(function() {
                var g;
                d ? g = uc(a, b) : (g = e.win,
                g = g.ampExtendedElements && g.ampExtendedElements[c] ? ec(a, b) : null);
                return g
            })
        }
        function $c(a) {
            var b = Vb(a, "bind");
            if (b)
                return Promise.resolve(b);
            if (a.nodeType) {
                var b = (a.ownerDocument || a).defaultView
                  , c = Yb(b);
                return b !== c ? Wc(b, "bind", "amp-bind") : Yc(a, "bind", "amp-bind")
            }
            return Promise.resolve(null)
        }
        function Zc(a, b) {
            if (Uc.includes(b)) {
                var c = N(a, "extensions");
                return c.waitForExtension(a, b)
            }
            return Promise.resolve()
        }
        function Wc(a, b, c, d) {
            return Ec(a.document).then(function() {
                return Zc(a, c)
            }).then(function() {
                return d ? vc(a, b) : a.ampExtendedElements && a.ampExtendedElements[c] ? fc(a, b) : null
            })
        }
        ;function ad(a) {
            return Yc(a, "access", "amp-access")
        }
        function bd(a) {
            return N(a, "ampdoc")
        }
        function cd(a) {
            return J(a, "documentInfo").get()
        }
        function dd(a) {
            return N(a, "extensions")
        }
        function ed(a) {
            return N(a, "performance")
        }
        function fd(a) {
            return N(a, "platform")
        }
        function gd(a) {
            return J(a, "resources")
        }
        function O(a) {
            return N(a, "timer")
        }
        function Q(a) {
            return J(a, "viewer")
        }
        function hd(a) {
            return N(a, "vsync")
        }
        function id(a) {
            return J(a, "viewport")
        }
        ;function jd(a, b) {
            var c;
            try {
                c = a.document.cookie
            } catch (k) {
                c = ""
            }
            var d = c;
            if (!d)
                return null;
            var e = d.split(";");
            for (a = 0; a < e.length; a++) {
                var g = e[a].trim()
                  , h = g.indexOf("=");
                if (c = -1 != h)
                    c = g.substring(0, h).trim(),
                    c = fa(c, void 0) == b;
                if (c)
                    return b = g.substring(h + 1).trim(),
                    fa(b, b)
            }
            return null
        }
        function kd(a, b, c, d, e) {
            if (!e || !e.allowOnProxyOrigin) {
                if (ib(a.location.href))
                    throw Error("Should never attempt to set cookie on proxy origin: " + b);
                var g = G(a.location.href).hostname.toLowerCase()
                  , h = G(Ka.urls.cdn).hostname.toLowerCase();
                if (g == h || Ia(g, "." + h))
                    throw Error("Should never attempt to set cookie on proxy origin. (in depth check): " + b);
            }
            if (e && e.highestAvailableDomain)
                for (var g = a.location.hostname.split("."), h = g[g.length - 1], k = g.length - 2; 0 <= k; k--)
                    if (h = g[k] + "." + h,
                    zd(a, b, c, d, h),
                    jd(a, b) == c)
                        return;
            g = void 0;
            e && e.domain && (g = e.domain);
            zd(a, b, c, d, g)
        }
        function zd(a, b, c, d, e) {
            "ampproject.org" == e && (c = "delete",
            d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString();
            try {
                a.document.cookie = b
            } catch (g) {}
        }
        ;function Ad(a) {
            return !(!a.AMP_CONFIG || !a.AMP_CONFIG.canary)
        }
        function R(a, b) {
            var c = Bd(a);
            return !!c[b]
        }
        function Cd(a, b, c, d) {
            var e = R(a, b)
              , g = !(void 0 !== c ? !c : e);
            if (g != e && (Bd(a)[b] = g,
            !d)) {
                var h = Dd(a);
                h[b] = g;
                b = h;
                var k = [], l;
                for (l in b)
                    k.push((!1 === b[l] ? "-" : "") + l);
                kd(a, "AMP_EXP", k.join(","), Date.now() + 15552E6, {
                    domain: a.location.hostname,
                    allowOnProxyOrigin: !0
                })
            }
            return g
        }
        function Bd(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES)
                return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) {
                    var d = a.AMP_CONFIG[c];
                    "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                }
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length) {
                var e = a.AMP_CONFIG["allow-doc-opt-in"];
                if (c = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')) {
                    var g = c.getAttribute("content").split(",");
                    for (c = 0; c < g.length; c++)
                        -1 != e.indexOf(g[c]) && (b[g[c]] = !0)
                }
            }
            Object.assign(b, Dd(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = n(a.location.originalHash || a.location.hash);
                for (var h = 0; h < c.length; h++) {
                    var k = a["e-" + c[h]];
                    "1" == k && (b[c[h]] = !0);
                    "0" == k && (b[c[h]] = !1)
                }
            }
            return b
        }
        function Dd(a) {
            var b = jd(a, "AMP_EXP")
              , c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++)
                0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        }
        ;function Ed() {
            var a = Fd();
            return function(b) {
                return setTimeout(b, a())
            }
        }
        function Fd() {
            var a = 0;
            return function() {
                var b = Math.pow(1.5, a++), c;
                c = b * (c || .3) * Math.random();
                .5 < Math.random() && (c *= -1);
                b += c;
                return 1E3 * b
            }
        }
        ;var Gd, Hd = "Webkit webkit Moz moz ms O o".split(" ");
        function Id(a, b, c) {
            if (Ja(b, "--"))
                return b;
            Gd || (Gd = D());
            var d = Gd[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var g = 0; g < Hd.length; g++) {
                            var h = Hd[g] + e;
                            if (void 0 !== a[h]) {
                                e = h;
                                break a
                            }
                        }
                        e = ""
                    }
                    var k = e;
                    void 0 !== a[k] && (d = k)
                }
                c || (Gd[b] = d)
            }
            return d
        }
        function Jd(a, b) {
            for (var c in b)
                a.style.setProperty(Id(b, c), b[c].toString(), "important")
        }
        function S(a, b, c, d) {
            (b = Id(a.style, b, void 0)) && (a.style[b] = d ? c + d : c)
        }
        function Kd(a) {
            var b = Id(a.style, "display", void 0);
            if (b)
                return a.style[b]
        }
        function Ld(a, b) {
            for (var c in b)
                S(a, c, b[c])
        }
        function Md(a, b) {
            void 0 === b && (b = "none" == Kd(a));
            S(a, "display", b ? "" : "none")
        }
        function Nd(a, b) {
            return a.getComputedStyle(b) || D()
        }
        ;var Od = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            variant: "amp-experiment",
            "amp-story": "amp-story[standalone]"
        };
        function Pd(a) {
            var b = Qd(a).map(function(b) {
                return O(a).timeoutPromise(3E3, fc(a, b), "Render timeout waiting for service " + b + " to be ready.")
            });
            return Promise.all(b)
        }
        function Qd(a) {
            var b = a.document;
            return Object.keys(Od).filter(function(a) {
                return b.querySelector(Od[a])
            })
        }
        ;function Rd(a, b, c, d, e) {
            var g = a.getHeadNode()
              , h = Sd(g, Td(g, b), d || !1, e || null);
            if (c) {
                var k = a.getRootNode();
                if (Ud(k, h))
                    c(h);
                else
                    var l = setInterval(function() {
                        Ud(k, h) && (clearInterval(l),
                        c(h))
                    }, 4)
            }
        }
        function Vd(a, b, c, d, e) {
            var g = Sd(a.head, b, d || !1, e || null);
            if (c)
                if (Ud(a, g))
                    c(g);
                else
                    var h = setInterval(function() {
                        Ud(a, g) && (clearInterval(h),
                        c(g))
                    }, 4)
        }
        function Sd(a, b, c, d) {
            var e = a.__AMP_CSS_SM;
            e || (e = a.__AMP_CSS_SM = D());
            var g = !c && d && "amp-custom" != d && "amp-keyframes" != d
              , h = c ? "amp-runtime" : g ? "amp-extension=" + d : null;
            if (h) {
                var k = Wd(a, e, h);
                if (k)
                    return k
            }
            var l = (a.ownerDocument || a).createElement("style");
            l.textContent = b;
            var m = null;
            c ? l.setAttribute("amp-runtime", "") : g ? (l.setAttribute("amp-extension", d || ""),
            m = Wd(a, e, "amp-runtime")) : (d && l.setAttribute(d, ""),
            m = a.lastChild);
            (b = m) ? b.nextSibling ? a.insertBefore(l, b.nextSibling) : a.appendChild(l) : a.insertBefore(l, a.firstChild);
            h && (e[h] = l);
            return l
        }
        function Wd(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }
        function Td(a, b) {
            return (a = a.__AMP_CSS_TR) ? a(b) : b
        }
        function Xd(a, b) {
            var c = a.defaultView;
            if (!c.__AMP_BODY_VISIBLE) {
                var d = function() {
                    c.__AMP_BODY_VISIBLE = !0;
                    Ld(a.body, {
                        opacity: 1,
                        visibility: "visible",
                        animation: "none"
                    });
                    try {
                        gd(a).renderStarted()
                    } catch (e) {}
                };
                try {
                    Dc(a, function() {
                        c.__AMP_BODY_VISIBLE || (c.__AMP_BODY_VISIBLE = !0,
                        b ? Pd(c).catch(function(a) {
                            wa(a);
                            return []
                        }).then(function(b) {
                            d();
                            0 < b.length && gd(a).schedulePass(1, !0);
                            try {
                                var e = ed(c);
                                e.tick("mbv");
                                e.flush()
                            } catch (h) {}
                        }) : d())
                    })
                } catch (e) {
                    d(),
                    wa(e)
                }
            }
        }
        function Ud(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++) {
                var d = c[a];
                if (d.ownerNode == b)
                    return !0
            }
            return !1
        }
        ;function Yd(a, b) {
            Yc(a, "amp-analytics-instrumentation", "amp-analytics").then(function(c) {
                c && c.triggerEventForTarget(a, "user-error", b)
            })
        }
        ;var Zd;
        function $d(a, b, c, d) {
            function e(a) {
                try {
                    return h(a)
                } catch (p) {
                    throw self.reportError(p),
                    p;
                }
            }
            var g = a
              , h = c
              , k = ae()
              , l = !1;
            d && (l = d.capture);
            g.addEventListener(b, e, k ? d : l);
            return function() {
                g && g.removeEventListener(b, e, k ? d : l);
                e = g = h = null
            }
        }
        function ae() {
            if (void 0 !== Zd)
                return Zd;
            Zd = !1;
            try {
                var a = {
                    get capture() {
                        Zd = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return Zd
        }
        ;function be(a, b, c, d) {
            return $d(a, b, c, d)
        }
        function ce(a, b, c, d) {
            var e = c
              , g = $d(a, b, function(a) {
                try {
                    e(a)
                } finally {
                    e = null,
                    g()
                }
            }, d);
            return g
        }
        function de(a, b) {
            var c, d = new Promise(function(b) {
                c = ce(a, "click", b, void 0)
            }
            );
            d.then(c, c);
            b && b(c);
            return d
        }
        function ee(a) {
            var b, c;
            if (a.complete || "complete" == a.readyState || a.document && "complete" == a.document.readyState)
                return Promise.resolve(a);
            var d = new Promise(function(d, g) {
                var e = a.tagName;
                b = "AUDIO" === e || "VIDEO" === e ? ce(a, "loadstart", d) : ce(a, "load", d);
                e && (c = ce(a, "error", g))
            }
            );
            return d.then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                var c = a;
                c && c.src && (c = c.src);
                throw x().createError("Failed to load:", c);
            })
        }
        ;var fe = self.AMPErrors || [];
        self.AMPErrors = fe;
        function ge(a) {
            ge = Ed();
            return ge(a)
        }
        function he(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {
                return String(a)
            }
        }
        var ie;
        function je(a, b) {
            try {
                var c;
                if (a)
                    if (void 0 !== a.message)
                        a = va(a),
                        c = !0;
                    else {
                        var d = a;
                        a = Error(he(d));
                        a.origError = d
                    }
                else
                    a = Error("Unknown error");
                if (a.reported)
                    return a;
                a.reported = !0;
                var e = b || a.associatedElement;
                e && e.classList && (e.classList.add("i-amphtml-error"),
                t().development && (e.classList.add("i-amphtml-element-error"),
                e.setAttribute("error-message", a.message)));
                if (self.console) {
                    var g = console.error || console.log;
                    a.messageArray ? g.apply(console, a.messageArray) : e ? g.call(console, a.message, e) : g.call(console, a.message)
                }
                e && e.Wa && e.Wa();
                ke.call(void 0, void 0, void 0, void 0, void 0, a)
            } catch (h) {
                setTimeout(function() {
                    throw h;
                })
            }
            return a
        }
        function le(a) {
            return a ? "string" == typeof a ? Ja(a, "BLOCK_BY_CONSENT") : "string" == typeof a.message ? Ja(a.message, "BLOCK_BY_CONSENT") : !1 : !1
        }
        function me() {
            var a = self;
            a.onerror = ke;
            a.addEventListener("unhandledrejection", function(a) {
                a.reason && "CANCELLED" === a.reason.message ? a.preventDefault() : je(a.reason || Error("rejected promise " + a))
            })
        }
        function ke(a, b, c, d, e) {
            this && this.document && Xd(this.document);
            if (!t().development) {
                var g = !1;
                try {
                    g = ne()
                } catch (k) {}
                if (!(g && .01 < Math.random())) {
                    var h = oe(a, b, c, d, e, g);
                    h && (pe(this, h),
                    ge(function() {
                        var a = new XMLHttpRequest;
                        a.open("POST", Ka.urls.errorReporting, !0);
                        a.send(JSON.stringify(h))
                    }))
                }
            }
        }
        function pe(a, b) {
            var c = bd(a);
            if (c.isSingleDoc()) {
                var d = c.getAmpDoc()
                  , e = d.getRootNode().documentElement
                  , g = e.hasAttribute("report-errors-to-viewer");
                if (g) {
                    var h = Q(d);
                    h.hasCapability("errorReporter") ? h.isTrustedViewer().then(function(a) {
                        if (!a)
                            return !1;
                        h.sendMessage("error", b);
                        return !0
                    }) : Promise.resolve(!1)
                } else
                    Promise.resolve(!1)
            } else
                Promise.resolve(!1)
        }
        function oe(a, b, c, d, e, g) {
            var h = !1;
            e && (a = e.message ? e.message : String(e),
            e.expected && (h = !0));
            a || (a = "Unknown error");
            if (!/_reported_/.test(a) && "CANCELLED" != a) {
                var k = Math.random();
                if (-1 != a.indexOf("Failed to load:") || "Script error." == a)
                    if (h = !0,
                    .001 < k)
                        return;
                var l = oa(a);
                if (!(l && .1 < k)) {
                    var m = Object.create(null);
                    m.v = t().rtvVersion;
                    m.noAmp = g ? "1" : "0";
                    m.m = a.replace("\u200b\u200b\u200b", "");
                    m.a = l ? "1" : "0";
                    m.ex = h ? "1" : "0";
                    var p = "1p";
                    self.context && self.context.location ? (m["3p"] = "1",
                    p = "3p") : t().runtime && (p = t().runtime);
                    m.rt = p;
                    m.ca = Ad(self) ? "1" : "0";
                    g = self;
                    m.bt = g.AMP_CONFIG && g.AMP_CONFIG.type ? g.AMP_CONFIG.type : "unknown";
                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (m.or = self.location.ancestorOrigins[0]);
                    self.viewerState && (m.vs = self.viewerState);
                    self.parent && self.parent != self && (m.iem = "1");
                    if (self.AMP && self.AMP.viewer) {
                        var q = self.AMP.viewer.getResolvedViewerUrl()
                          , u = self.AMP.viewer.maybeGetMessagingOrigin();
                        q && (m.rvu = q);
                        u && (m.mso = u)
                    }
                    ie || (ie = qe());
                    m.jse = ie;
                    var r = [];
                    g = self.__AMP__EXPERIMENT_TOGGLES || null;
                    for (var H in g)
                        r.push(H + "=" + (g[H] ? "1" : "0"));
                    m.exps = r.join(",");
                    e ? (m.el = e.associatedElement ? e.associatedElement.tagName : "u",
                    e.args && (m.args = JSON.stringify(e.args)),
                    l || e.ignoreStack || !e.stack || (m.s = e.stack),
                    e.message += " _reported_") : (m.f = b || "",
                    m.l = c || "",
                    m.c = d || "");
                    m.r = self.document.referrer;
                    m.ae = fe.join(",");
                    m.fr = self.location.originalHash || self.location.hash;
                    25 <= fe.length && fe.splice(0, fe.length - 25 + 1);
                    fe.push(a);
                    return m
                }
            }
        }
        function ne() {
            for (var a = self.document.querySelectorAll("script[src]"), b = 0; b < a.length; b++)
                if (!ib(a[b].src.toLowerCase()))
                    return !0;
            return !1
        }
        function qe() {
            function a() {}
            a.prototype.t = function() {
                throw Error("message");
            }
            ;
            var b = new a;
            try {
                b.t()
            } catch (e) {
                var c = e.stack;
                if (Ja(c, "t@"))
                    return "Safari";
                if (-1 < c.indexOf(".prototype.t@"))
                    return "Firefox";
                var d = c.split("\n").pop();
                if (/\bat .* \(/i.test(d))
                    return "IE";
                if (Ja(c, "Error: message"))
                    return "Chrome"
            }
            return "unknown"
        }
        ;function re(a, b, c) {
            return ee(a).then(function() {
                return se(a, b, c)
            })
        }
        function se(a, b, c) {
            var d = a.performance && a.performance.timing;
            if (d && 0 != d.navigationStart) {
                var e = void 0 === c ? d[b] : d[c] - d[b];
                if (la(e) && !(0 > e))
                    return e
            }
        }
        function te(a, b) {
            var c = a.performance && a.performance.navigation;
            if (c && void 0 !== c[b])
                return c[b]
        }
        function ue(a) {
            this.ampdoc = a;
            this.Gb = this.Hb = void 0;
            this.ea = Object.create(null);
            this.ud = !1;
            ve(this)
        }
        f = ue.prototype;
        f.ac = function() {
            this.initialize();
            this.ud = !0
        }
        ;
        f.initialize = function() {}
        ;
        f.get = function(a) {
            this.ud || this.ac();
            return this.ea[a]
        }
        ;
        f.set = function(a, b) {
            a.indexOf("RETURN");
            this.ea[a] = this.ea[a] || {
                sync: void 0,
                async: void 0
            };
            this.ea[a].sync = b;
            this.Gb = this.Hb = void 0;
            return this
        }
        ;
        f.setAsync = function(a, b) {
            a.indexOf("RETURN");
            this.ea[a] = this.ea[a] || {
                sync: void 0,
                async: void 0
            };
            this.ea[a].async = b;
            this.Gb = this.Hb = void 0;
            return this
        }
        ;
        f.setBoth = function(a, b, c) {
            return this.set(a, b).setAsync(a, c)
        }
        ;
        f.getExpr = function(a, b) {
            var c = this;
            this.ud || this.ac();
            var d = a ? Object.keys(a) : null;
            if (d && 0 < d.length) {
                var e = Object.keys(this.ea);
                d.forEach(function(a) {
                    void 0 === c.ea[a] && e.push(a)
                });
                return we(this, e, b)
            }
            this.Hb || b || (this.Hb = we(this, Object.keys(this.ea)));
            !this.Gb && b && (this.Gb = we(this, Object.keys(this.ea), b));
            return b ? this.Gb : this.Hb
        }
        ;
        function we(a, b, c) {
            ve(a) && (b = b.filter(function(b) {
                return ve(a).includes(b)
            }));
            b.sort(function(a, b) {
                return b.length - a.length
            });
            var d = b.join("|")
              , e = "\\$?(" + d + ")";
            c || (e += "(?:\\(((?:\\s*[0-9a-zA-Z-_.]*\\s*(?=,|\\)),?)*)\\s*\\))?");
            return new RegExp(e,"g")
        }
        function ve(a) {
            if (a.le)
                return a.le;
            var b = a.ampdoc.getRootNode().head;
            if (!b)
                return null;
            var c = b.querySelector('meta[name="amp-allowed-url-macros"]');
            if (!c)
                return null;
            a.le = c.getAttribute("content").split(",").map(function(a) {
                return a.trim()
            });
            return a.le
        }
        ;var xe;
        function ye(a) {
            a = a.ownerDocument || a;
            xe && xe.ownerDocument === a || (xe = a.createElement("div"));
            return ze
        }
        function ze(a) {
            xe.innerHTML = a[0];
            var b = xe.firstElementChild;
            xe.innerHTML = "";
            return b
        }
        ;var Ae = ['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>'];
        Ae.raw = ['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>'];
        var Be = {
            NODISPLAY: "nodisplay",
            FIXED: "fixed",
            FIXED_HEIGHT: "fixed-height",
            RESPONSIVE: "responsive",
            CONTAINER: "container",
            FILL: "fill",
            FLEX_ITEM: "flex-item",
            FLUID: "fluid",
            INTRINSIC: "intrinsic"
        }
          , Ce = {
            "AMP-PIXEL": {
                width: "0px",
                height: "0px"
            },
            "AMP-ANALYTICS": {
                width: "1px",
                height: "1px"
            },
            "AMP-AUDIO": null,
            "AMP-SOCIAL-SHARE": {
                width: "60px",
                height: "44px"
            }
        }
          , De = {
            "AMP-ANIM": !0,
            "AMP-BRIGHTCOVE": !0,
            "AMP-EMBED": !0,
            "AMP-FACEBOOK": !0,
            "AMP-FACEBOOK-COMMENTS": !0,
            "AMP-FACEBOOK-LIKE": !0,
            "AMP-FACEBOOK-PAGE": !0,
            "AMP-IFRAME": !0,
            "AMP-IMG": !0,
            "AMP-INSTAGRAM": !0,
            "AMP-LIST": !0,
            "AMP-OOYALA-PLAYER": !0,
            "AMP-PINTEREST": !0,
            "AMP-PLAYBUZZ": !0,
            "AMP-VIDEO": !0,
            "AMP-YOUTUBE": !0
        };
        function Ee(a) {
            for (var b in Be)
                if (Be[b] == a)
                    return Be[b]
        }
        function Fe(a) {
            return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
        }
        function Ge(a) {
            if ("number" == typeof a)
                return a + "px";
            if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a))
                return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a
        }
        function He(a) {
            x().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a);
            return a
        }
        function Ie(a) {
            x().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(a), "Invalid length or percent value: %s", a);
            return a
        }
        function Je(a) {
            He(a);
            var b = x().assert(a.match(/[a-z]+/i), "Failed to read units from %s", a);
            return b[0]
        }
        function Ke(a) {
            a = parseFloat(a);
            return la(a) ? a : void 0
        }
        function Le(a) {
            S(a, "display", "none");
            a.classList.add("i-amphtml-display")
        }
        ;var Me = {
            "+": "-",
            "/": "_",
            "=": "."
        };
        function Ne(a) {
            a = Ga(a);
            return btoa(a).replace(/[+/=]/g, function(a) {
                return Me[a]
            })
        }
        ;function Oe() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            }
            );
            this.resolve = a;
            this.reject = b
        }
        function Pe(a) {
            return new Promise(function(b) {
                b(a())
            }
            )
        }
        ;function Qe(a, b) {
            return Yc(a, "consentPolicyManager", "amp-consent").then(function(a) {
                return a ? a.whenPolicyResolved(b) : null
            })
        }
        ;function V() {
            this.W = null
        }
        f = V.prototype;
        f.add = function(a) {
            var b = this;
            this.W || (this.W = []);
            this.W.push(a);
            return function() {
                b.remove(a)
            }
        }
        ;
        f.remove = function(a) {
            this.W && (a = this.W.indexOf(a),
            -1 < a && this.W.splice(a, 1))
        }
        ;
        f.removeAll = function() {
            this.W && (this.W.length = 0)
        }
        ;
        f.fire = function(a) {
            if (this.W)
                for (var b = this.W, c = 0; c < b.length; c++)
                    (0,
                    b[c])(a)
        }
        ;
        f.getHandlerCount = function() {
            return this.W ? this.W.length : 0
        }
        ;
        function Re() {
            this.wa = D();
            this.Y = null
        }
        f = Re.prototype;
        f.get = function(a) {
            return this.wa[a] || null
        }
        ;
        f.whenSignal = function(a) {
            var b = this.Y && this.Y[a];
            if (!b) {
                var c = this.wa[a];
                if (null != c)
                    b = {
                        promise: "number" == typeof c ? Promise.resolve(c) : Promise.reject(c)
                    };
                else
                    var d, e, b = {
                        promise: new Promise(function(a, b) {
                            d = a;
                            e = b
                        }
                        ),
                        resolve: d,
                        reject: e
                    };
                this.Y || (this.Y = D());
                this.Y[a] = b
            }
            return b.promise
        }
        ;
        f.signal = function(a, b) {
            if (null == this.wa[a]) {
                var c = b || Date.now();
                this.wa[a] = c;
                (a = this.Y && this.Y[a]) && a.resolve && (a.resolve(c),
                a.resolve = void 0,
                a.reject = void 0)
            }
        }
        ;
        f.rejectSignal = function(a, b) {
            null == this.wa[a] && (this.wa[a] = b,
            (a = this.Y && this.Y[a]) && a.reject && (a.reject(b),
            a.resolve = void 0,
            a.reject = void 0))
        }
        ;
        f.reset = function(a) {
            this.wa[a] && delete this.wa[a];
            var b = this.Y && this.Y[a];
            b && !b.resolve && delete this.Y[a]
        }
        ;
        function Se(a) {
            return "loading" != a.readyState && "uninitialized" != a.readyState
        }
        function Te(a) {
            return "complete" == a.readyState
        }
        function Ue(a, b) {
            Ve(a, Se, b)
        }
        function Ve(a, b, c) {
            var d = b(a);
            if (d)
                c(a);
            else {
                var e = function() {
                    b(a) && (d || (d = !0,
                    c(a)),
                    a.removeEventListener("readystatechange", e))
                };
                a.addEventListener("readystatechange", e)
            }
        }
        function We(a) {
            return new Promise(function(b) {
                Ue(a, b)
            }
            )
        }
        function Xe(a) {
            return new Promise(function(b) {
                Ve(a, Te, b)
            }
            )
        }
        ;function X(a, b, c, d) {
            return {
                left: a,
                top: b,
                width: c,
                height: d,
                bottom: b + d,
                right: a + c,
                x: a,
                y: b
            }
        }
        function Ye(a) {
            for (var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, g = 0; g < arguments.length; g++) {
                var h = arguments[g];
                if (h && (b = Math.max(b, h.left),
                c = Math.min(c, h.left + h.width),
                d = Math.max(d, h.top),
                e = Math.min(e, h.top + h.height),
                c < b || e < d))
                    return null
            }
            return Infinity == c ? null : X(b, d, c - b, e - d)
        }
        function Ze(a, b, c) {
            return X(a.left - a.width * b, a.top - a.height * c, a.width * (1 + 2 * b), a.height * (1 + 2 * c))
        }
        function $e(a, b, c) {
            return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : X(a.left + b, a.top + c, a.width, a.height)
        }
        ;function af(a) {
            this.Qa = a
        }
        af.prototype.expand = function(a, b) {
            if (!a.length)
                return Promise.resolve(a);
            var c = this.Qa.getExpr(b, !0)
              , c = bf(a, c);
            return c.length ? cf(this, a, c, b) : Promise.resolve(a)
        }
        ;
        function bf(a, b) {
            var c = [];
            a.replace(b, function(a, b, g) {
                a = a.length;
                var d = a + g - 1;
                c.push({
                    start: g,
                    stop: d,
                    name: b,
                    length: a
                })
            });
            return c
        }
        function cf(a, b, c, d) {
            function e() {
                for (var u = "", r = []; h < b.length && k <= c.length; ) {
                    if (l && h === l.start) {
                        var H = void 0;
                        d && d.hasOwnProperty(l.name) ? H = d[l.name] : (H = a.Qa.get(l.name),
                        H = H.async || H.sync);
                        h = l.stop + 1;
                        l = c[++k];
                        "(" === b[h] ? (h++,
                        m++,
                        g.push(H),
                        u.length && r.push(u),
                        r.push(e())) : (u.length && r.push(u),
                        r.push(df(H)));
                        u = ""
                    } else if ("`" === b[h])
                        p ? p = !1 : (q = p = !0,
                        x().assert("" === u.trim(), 'The substring "' + u + '" was lost during url-replacement. Please ensure the url syntax is correct'),
                        u = ""),
                        h++;
                    else if (m && "," === b[h] && !p) {
                        if (u.length) {
                            var C = q ? u : u.trim();
                            r.push(C);
                            q = !1
                        }
                        "," === b[h + 1] && (r.push(""),
                        h++);
                        u = "";
                        h++
                    } else if (")" !== b[h] || p)
                        u += b[h],
                        h++;
                    else {
                        h++;
                        m--;
                        var E = g.pop()
                          , z = q ? u : u.trim();
                        r.push(z);
                        q = !1;
                        return df(E, r)
                    }
                    h === b.length && u.length && r.push(u)
                }
                return Promise.all(r).then(function(a) {
                    return a.join("")
                }).catch(function(a) {
                    wa(a);
                    return ""
                })
            }
            var g = []
              , h = 0
              , k = 0
              , l = c[k]
              , m = 0
              , p = !1
              , q = !1;
            return e()
        }
        function df(a, b) {
            var c;
            try {
                return c = "function" === typeof a ? b ? Promise.all(b).then(function(b) {
                    return a.apply(null, b)
                }) : Pe(a) : Promise.resolve(a),
                c.then(function(a) {
                    return null == a ? "" : encodeURIComponent(a)
                }).catch(function(a) {
                    wa(a);
                    return ""
                })
            } catch (d) {
                return wa(d),
                Promise.resolve("")
            }
        }
        ;var ef = null
          , ff = ["gclid", "gclsrc"];
        function gf() {
            var a = self, b, c = new Promise(function(a) {
                b = a
            }
            );
            ef = O(a).timeoutPromise(8E3, c, "TrackImpressionPromise timeout").catch(function(a) {
                B().warn("IMPRESSION", a)
            });
            var c = Q(a.document)
              , d = c.isTrustedViewer()
              , e = c.isTrustedReferrer();
            Promise.all([d, e]).then(function(c) {
                var d = c[0]
                  , e = c[1];
                if (d || e || R(a, "alp")) {
                    var g = hf(a)
                      , m = jf(a);
                    Promise.all([g, m]).then(function() {
                        b()
                    }, function() {})
                } else
                    b()
            })
        }
        function hf(a) {
            var b = Q(a.document);
            return b.getParam("replaceUrl") ? b.hasCapability("replaceUrl") ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(function(a) {
                a && "object" == typeof a ? b.replaceUrl(a.replaceUrl || null) : B().warn("IMPRESSION", "get invalid replaceUrl response")
            }, function(a) {
                B().warn("IMPRESSION", "Error request replaceUrl from viewer", a)
            }) : (b.replaceUrl(b.getParam("replaceUrl") || null),
            Promise.resolve()) : Promise.resolve()
        }
        function jf(a) {
            var b = Q(a.document)
              , c = b.getParam("click");
            if (!c)
                return Promise.resolve();
            if (0 != c.indexOf("https://"))
                return x().warn("IMPRESSION", "click fragment param should start with https://. Found ", c),
                Promise.resolve();
            a.location.hash && (a.location.hash = "");
            return b.whenFirstVisible().then(function() {
                return kf(a, c)
            }).then(function(b) {
                if (b) {
                    var c = b.location;
                    (b = b.tracking_url || c) && !ib(b) && ((new Image).src = b);
                    if (c && a.history.replaceState) {
                        b = Q(a.document);
                        var d = a.location.href
                          , c = G(c)
                          , c = n(c.search)
                          , c = db(d, c);
                        a.history.replaceState(null, "", c);
                        b.maybeUpdateFragmentForCct()
                    }
                }
            }).catch(function(a) {
                x().warn("IMPRESSION", "Error on request clickUrl: ", a)
            })
        }
        function kf(a, b) {
            return N(a, "xhr").fetchJson(b, {
                credentials: "include",
                requireAmpResponseSourceOrigin: !1
            }).then(function(a) {
                return 204 == a.status ? null : a.json()
            })
        }
        function lf(a) {
            return a.whenReady().then(function() {
                return !!a.getBody().querySelector("amp-analytics[type=googleanalytics]")
            })
        }
        ;var mf = {
            ANCESTOR_ORIGIN: !0
        };
        function nf(a) {
            return function() {
                return (new Date)[a]()
            }
        }
        function of(a, b) {
            return function() {
                return a[b]
            }
        }
        function pf(a, b) {
            return function() {
                return a[b]()
            }
        }
        function qf(a) {
            ue.call(this, a);
            this.xg = ad;
            this.ce = this.me = null
        }
        aa(qf, ue);
        function rf(a, b, c, d) {
            a.setBoth(b, function() {
                return se(a.ampdoc.win, c, d)
            }, function() {
                return re(a.ampdoc.win, c, d)
            })
        }
        qf.prototype.initialize = function() {
            var a = this
              , b = id(this.ampdoc);
            this.set("RANDOM", function() {
                return Math.random()
            });
            var c = Object.create(null);
            this.set("COUNTER", function(a) {
                return c[a] = (c[a] | 0) + 1
            });
            this.set("CANONICAL_URL", sf(this, "canonicalUrl"));
            this.set("CANONICAL_HOST", sf(this, "canonicalUrl", "host"));
            this.set("CANONICAL_HOSTNAME", sf(this, "canonicalUrl", "hostname"));
            this.set("CANONICAL_PATH", sf(this, "canonicalUrl", "pathname"));
            this.setAsync("DOCUMENT_REFERRER", function() {
                return Q(a.ampdoc).getReferrerUrl()
            });
            this.setAsync("EXTERNAL_REFERRER", function() {
                return Q(a.ampdoc).getReferrerUrl().then(function(b) {
                    if (!b)
                        return null;
                    var c = G(kb(b)).hostname
                      , d = a.ampdoc.win.location.hostname;
                    return c === d ? null : b
                })
            });
            this.set("TITLE", function() {
                return a.ampdoc.win.document.originalTitle || a.ampdoc.win.document.title
            });
            this.set("AMPDOC_URL", function() {
                return hb(a.ampdoc.win.location.href)
            });
            this.set("AMPDOC_HOST", function() {
                var b = G(a.ampdoc.win.location.href);
                return b && b.host
            });
            this.set("AMPDOC_HOSTNAME", function() {
                var b = G(a.ampdoc.win.location.href);
                return b && b.hostname
            });
            this.setBoth("SOURCE_URL", function() {
                var b = cd(a.ampdoc);
                return hb(b.sourceUrl)
            }, function() {
                return ef.then(function() {
                    var b = cd(a.ampdoc);
                    return hb(b.sourceUrl)
                })
            });
            this.set("SOURCE_HOST", sf(this, "sourceUrl", "host"));
            this.set("SOURCE_HOSTNAME", sf(this, "sourceUrl", "hostname"));
            this.set("SOURCE_PATH", sf(this, "sourceUrl", "pathname"));
            this.set("PAGE_VIEW_ID", sf(this, "pageViewId"));
            this.setBoth("QUERY_PARAM", function(b, c) {
                c = void 0 === c ? "" : c;
                return tf(a, b, c)
            }, function(b, c) {
                c = void 0 === c ? "" : c;
                return ef.then(function() {
                    return tf(a, b, c)
                })
            });
            this.setAsync("FRAGMENT_PARAM", uf(this, "fragmentParam", "FRAGMENT_PARAM"));
            this.setAsync("ANCESTOR_ORIGIN", uf(this, "ancestorOrigin", "ANCESTOR_ORIGIN"));
            var d = null;
            this.setBoth("CLIENT_ID", function(a) {
                return d ? d[a] : null
            }, function(b, c, h) {
                x().assertString(b, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var e = Promise.resolve();
                c && (e = Xc(a.ampdoc, "userNotificationManager", "amp-user-notification").then(function(a) {
                    return a.get(c)
                }));
                return ec(a.ampdoc, "cid").then(function(a) {
                    return a.get({
                        scope: b,
                        createCookieIfNotPresent: !0,
                        cookieName: h
                    }, e)
                }).then(function(a) {
                    d || (d = Object.create(null));
                    var c = h || b;
                    a && "_ga" == c && ("string" === typeof a ? a = a.replace(/^(GA1|1)\.[\d-]+\./, "") : B().error("UrlReplacements", "non-string cid, what is it?", Object.keys(a)));
                    return d[b] = a
                })
            });
            this.setAsync("VARIANT", function(b) {
                return Kf(a, function(a) {
                    var c = a[b];
                    x().assert(void 0 !== c, "The value passed to VARIANT() is not a valid experiment name:" + b);
                    return null === c ? "none" : c
                }, "VARIANT")
            });
            this.setAsync("VARIANTS", function() {
                return Kf(a, function(a) {
                    var b = [], c;
                    for (c in a)
                        b.push(c + "." + (a[c] || "none"));
                    return b.join("!")
                }, "VARIANTS")
            });
            this.setAsync("AMP_GEO", function(b) {
                return Lf(a, function(a) {
                    return b ? (x().assert("ISOCountry" === b, "The value passed to AMP_GEO() is not valid name:" + b),
                    a[b] || "unknown") : a.ISOCountryGroups.join(",")
                })
            });
            this.setAsync("SHARE_TRACKING_INCOMING", function() {
                return Mf(a, function(a) {
                    return a.incomingFragment
                }, "SHARE_TRACKING_INCOMING")
            });
            this.setAsync("SHARE_TRACKING_OUTGOING", function() {
                return Mf(a, function(a) {
                    return a.outgoingFragment
                }, "SHARE_TRACKING_OUTGOING")
            });
            this.set("TIMESTAMP", nf("getTime"));
            this.set("TIMESTAMP_ISO", nf("toISOString"));
            this.set("TIMEZONE", nf("getTimezoneOffset"));
            this.set("TIMEZONE_CODE", function() {
                var b;
                "Intl"in a.ampdoc.win && "DateTimeFormat"in a.ampdoc.win.Intl && (b = (new Intl.DateTimeFormat).resolvedOptions().timeZone);
                return b || ""
            });
            this.set("SCROLL_TOP", pf(b, "getScrollTop"));
            this.set("SCROLL_LEFT", pf(b, "getScrollLeft"));
            this.set("SCROLL_HEIGHT", pf(b, "getScrollHeight"));
            this.set("SCROLL_WIDTH", pf(b, "getScrollWidth"));
            this.set("VIEWPORT_HEIGHT", pf(b, "getHeight"));
            this.set("VIEWPORT_WIDTH", pf(b, "getWidth"));
            b = this.ampdoc.win.screen;
            this.set("SCREEN_WIDTH", of(b, "width"));
            this.set("SCREEN_HEIGHT", of(b, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", of(b, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", of(b, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", of(b, "colorDepth"));
            this.set("DOCUMENT_CHARSET", function() {
                var b = a.ampdoc.win.document;
                return b.characterSet || b.charset
            });
            this.set("BROWSER_LANGUAGE", function() {
                var b = a.ampdoc.win.navigator;
                return (b.language || b.userLanguage || b.browserLanguage || "").toLowerCase()
            });
            this.set("USER_AGENT", function() {
                return a.ampdoc.win.navigator.userAgent
            });
            rf(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            rf(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            rf(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            rf(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            rf(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            rf(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            rf(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            rf(this, "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", function() {
                return Nf(a, function(a) {
                    return a.getAccessReaderId()
                }, "ACCESS_READER_ID")
            });
            this.setAsync("AUTHDATA", function(b) {
                x().assert(b, "The first argument to AUTHDATA, the field, is required");
                return Nf(a, function(a) {
                    return a.getAuthdataField(b)
                }, "AUTHDATA")
            });
            this.setAsync("VIEWER", function() {
                return Q(a.ampdoc).getViewerOrigin().then(function(a) {
                    return void 0 == a ? "" : a
                })
            });
            this.setAsync("TOTAL_ENGAGED_TIME", function() {
                return Xc(a.ampdoc, "activity", "amp-analytics").then(function(a) {
                    return a.getTotalEngagedTime()
                })
            });
            this.setAsync("INCREMENTAL_ENGAGED_TIME", function(b, c) {
                return Xc(a.ampdoc, "activity", "amp-analytics").then(function(a) {
                    return a.getIncrementalEngagedTime(b, "false" !== c)
                })
            });
            this.set("NAV_TIMING", function(b, c) {
                x().assert(b, "The first argument to NAV_TIMING, the start attribute name, is required");
                return se(a.ampdoc.win, b, c)
            });
            this.setAsync("NAV_TIMING", function(b, c) {
                x().assert(b, "The first argument to NAV_TIMING, the start attribute name, is required");
                return re(a.ampdoc.win, b, c)
            });
            this.set("NAV_TYPE", function() {
                return te(a.ampdoc.win, "type")
            });
            this.set("NAV_REDIRECT_COUNT", function() {
                return te(a.ampdoc.win, "redirectCount")
            });
            this.set("AMP_VERSION", function() {
                return "1526498116488"
            });
            this.set("BACKGROUND_STATE", function() {
                return Q(a.ampdoc).isVisible() ? "0" : "1"
            });
            this.setAsync("VIDEO_STATE", function(b, c) {
                var d = a.ampdoc.getRootNode()
                  , e = x().assertElement(d.getElementById(b), 'Could not find an element with id="' + b + '" for VIDEO_STATE');
                return J(a.ampdoc, "video-manager").getAnalyticsDetails(e).then(function(a) {
                    return a ? a[c] : ""
                })
            });
            this.setAsync("STORY_PAGE_INDEX", Of(this, "pageIndex", "STORY_PAGE_INDEX"));
            this.setAsync("STORY_PAGE_ID", Of(this, "pageId", "STORY_PAGE_ID"));
            this.setAsync("FIRST_CONTENTFUL_PAINT", function() {
                return ed(a.ampdoc.win).getFirstContentfulPaint()
            });
            this.setAsync("FIRST_VIEWPORT_READY", function() {
                return ed(a.ampdoc.win).getFirstViewportReady()
            });
            this.setAsync("MAKE_BODY_VISIBLE", function() {
                return ed(a.ampdoc.win).getMakeBodyVisible()
            })
        }
        ;
        function sf(a, b, c) {
            return function() {
                var d = cd(a.ampdoc)[b];
                return c ? G(d)[c] : d
            }
        }
        function Nf(a, b, c) {
            return a.xg(a.ampdoc).then(function(a) {
                return a ? b(a) : (x().error("UrlReplacements", "Access service is not installed to access: ", c),
                null)
            })
        }
        function tf(a, b, c) {
            x().assert(b, "The first argument to QUERY_PARAM, the query string param is required");
            x().assert("string" == typeof b, "param should be a string");
            a = G(a.ampdoc.win.location.href);
            a = n(a.search);
            return "undefined" !== typeof a[b] ? a[b] : c
        }
        function Kf(a, b, c) {
            a.me || (a.me = Vc(a.ampdoc.win, "variant", "amp-experiment"));
            return a.me.then(function(a) {
                x().assert(a, "To use variable %s, amp-experiment should be configured", c);
                return b(a)
            })
        }
        function Lf(a, b) {
            return Vc(a.ampdoc.win, "geo", "amp-geo").then(function(a) {
                x().assert(a, "To use variable %s, amp-geo should be configured", "AMP_GEO");
                return b(a)
            })
        }
        function Mf(a, b, c) {
            a.ce || (a.ce = Vc(a.ampdoc.win, "share-tracking", "amp-share-tracking"));
            return a.ce.then(function(a) {
                x().assert(a, "To use variable %s, amp-share-tracking should be configured", c);
                return b(a)
            })
        }
        function Of(a, b, c) {
            return function() {
                return Vc(a.ampdoc.win, "story-variable", "amp-story").then(function(a) {
                    x().assert(a, "To use variable %s amp-story should be configured", c);
                    return a[b]
                })
            }
        }
        function uf(a, b, c) {
            return function(d, e) {
                e = void 0 === e ? "" : e;
                return Vc(a.ampdoc.win, "viewer-integration-variable", "amp-viewer-integration").then(function(a) {
                    x().assert(a, "To use variable %s amp-viewer-integration must be installed", c);
                    return a[b](d, e)
                })
            }
        }
        function Pf(a, b) {
            this.ampdoc = a;
            this.Qa = b;
            this.ug = new af(this.Qa)
        }
        f = Pf.prototype;
        f.expandStringSync = function(a, b, c, d) {
            return Qf(this, a, b, c, !0, d)
        }
        ;
        f.expandStringAsync = function(a, b) {
            return Qf(this, a, b)
        }
        ;
        f.expandUrlSync = function(a, b, c, d) {
            return Rf(a, Qf(this, a, b, c, !0, d))
        }
        ;
        f.expandUrlAsync = function(a, b, c) {
            return Qf(this, a, b, void 0, void 0, c).then(function(b) {
                return Rf(a, b)
            })
        }
        ;
        f.expandInputValueAsync = function(a) {
            return Sf(this, a, !1)
        }
        ;
        f.expandInputValueSync = function(a) {
            return Sf(this, a, !0)
        }
        ;
        function Sf(a, b, c) {
            "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
            var d = Tf(b);
            if (!d)
                return c ? b.value : Promise.resolve(b.value);
            void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
            a = Qf(a, b["amp-original-value"] || b.value, void 0, void 0, c, d);
            return c ? b.value = a : a.then(function(a) {
                return b.value = a
            })
        }
        function Tf(a, b) {
            if (a = a.getAttribute("data-amp-replace")) {
                var c = {};
                a.trim().split(/\s+/).forEach(function(a) {
                    !b || b.hasOwnProperty(a) ? c[a] = !0 : x().warn("URL", "Ignoring unsupported replacement", a)
                });
                return c
            }
        }
        f.maybeExpandLink = function(a, b) {
            var c = {
                CLIENT_ID: !0,
                QUERY_PARAM: !0
            }
              , d = a.getAttribute("data-amp-addparams") || ""
              , e = Tf(a, c);
            if (e || d || b) {
                var g = a["amp-original-href"] || a.getAttribute("href")
                  , h = G(g);
                null == a["amp-original-href"] && (a["amp-original-href"] = g);
                d && (g = db(g, n(d)));
                a: {
                    var k = cd(this.ampdoc);
                    if (h.origin == G(k.canonicalUrl).origin || h.origin == G(k.sourceUrl).origin)
                        h = !0;
                    else {
                        if ((k = this.ampdoc.getRootNode().querySelector("meta[name=amp-link-variable-allowed-origin]")) && k.hasAttribute("content"))
                            for (var k = k.getAttribute("content").trim().split(/\s+/), l = 0; l < k.length; l++)
                                if (h.origin == G(k[l]).origin) {
                                    h = !0;
                                    break a
                                }
                        h = !1
                    }
                }
                var m = h;
                if (!m)
                    return e && x().warn("URL", "Ignoring link replacement", g, " because the link does not go to the document's source, canonical, or whitelisted origin."),
                    a.href = g;
                if (b) {
                    if (!e || !e.QUERY_PARAM) {
                        var p = {
                            QUERY_PARAM: !0
                        };
                        b = this.expandUrlSync(b, void 0, void 0, p)
                    }
                    g = db(g, n(b))
                }
                e && (g = this.expandUrlSync(g, void 0, void 0, e));
                return a.href = g
            }
        }
        ;
        function Qf(a, b, c, d, e, g) {
            var h = R(a.ampdoc.win, "url-replacement-v2");
            if (h && !d && !e)
                return a.ug.expand(b, c, g);
            var k = a.Qa.getExpr(c), l, m = b.replace(k, function(b, h, k) {
                var q = [];
                "string" == typeof k && (q = k.split(/,\s*/));
                if (g && !g[h])
                    return b;
                var p;
                if (c && h in c)
                    p = c[h];
                else if (p = a.Qa.get(h))
                    if (e) {
                        if (p = p.sync,
                        !p)
                            return x().error("UrlReplacements", "ignoring async replacement key: ", h),
                            ""
                    } else
                        p = p.async || p.sync;
                var u;
                try {
                    u = "function" == typeof p ? p.apply(null, q) : p
                } catch (z) {
                    e && (u = ""),
                    wa(z)
                }
                if (u && u.then) {
                    if (e)
                        return x().error("UrlReplacements", "ignoring promise value for key: ", h),
                        "";
                    var E = u.catch(function(a) {
                        wa(a)
                    }).then(function(a) {
                        m = m.replace(b, mf[b] ? a : null == a ? "" : encodeURIComponent(a));
                        d && (d[b] = a)
                    });
                    l = l ? l.then(function() {
                        return E
                    }) : E;
                    return b
                }
                d && (d[b] = u);
                return mf[b] ? u : null == u ? "" : encodeURIComponent(u)
            });
            l && (l = l.then(function() {
                return m
            }));
            return e ? m : l || Promise.resolve(m)
        }
        f.collectVars = function(a, b) {
            var c = Object.create(null);
            return Qf(this, a, b, c).then(function() {
                return c
            })
        }
        ;
        f.collectUnwhitelistedVarsSync = function(a) {
            var b = a.getAttribute("src")
              , c = Object.create(null);
            this.expandStringSync(b, void 0, c);
            var d = Object.keys(c)
              , e = Tf(a);
            return e ? d.filter(function(a) {
                return !e[a]
            }) : d
        }
        ;
        function Rf(a, b) {
            var c = G(b, !0).protocol
              , d = G(a, !0).protocol;
            if (c != d)
                return x().error("UrlReplacements", "Illegal replacement of the protocol: ", a),
                a;
            x().assert(jb(b), "The replacement url has invalid protocol: %s", b);
            return b
        }
        f.getVariableSource = function() {
            return this.Qa
        }
        ;
        function Uf(a) {
            M(a, "url-replace", function(a) {
                return new Pf(a,new qf(a))
            })
        }
        ;function Vf(a, b) {
            var c = 100;
            function d(d) {
                h = null;
                g = a.setTimeout(e, c);
                b.apply(null, d)
            }
            function e() {
                g = 0;
                h && d(h)
            }
            var g = 0
              , h = null;
            return function(a) {
                for (var b = [], c = 0; c < arguments.length; ++c)
                    b[c - 0] = arguments[c];
                g ? h = b : d(b)
            }
        }
        function Wf(a, b) {
            function c() {
                d = 0;
                var h = 300 - (a.Date.now() - e);
                if (0 < h)
                    d = a.setTimeout(c, h);
                else {
                    var k = g;
                    g = null;
                    b.apply(null, k)
                }
            }
            var d = 0
              , e = 0
              , g = null;
            return function(b) {
                for (var h = [], l = 0; l < arguments.length; ++l)
                    h[l - 0] = arguments[l];
                e = a.Date.now();
                g = h;
                d || (d = a.setTimeout(c, 300))
            }
        }
        ;var cssText$$module$build$css = "html{overflow-x:hidden!important}body,html{height:auto!important}html.i-amphtml-fie{height:100%!important;width:100%!important}body{margin:0!important;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}[hidden]{display:none!important}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y;touch-action:pan-y}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important;position:relative!important}html.i-amphtml-webview>body{overflow-x:hidden!important;overflow-y:visible!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}.i-amphtml-element{display:inline-block}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][sizes]:not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic{display:inline-block;position:relative;max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]{display:block;position:relative}.i-amphtml-layout-fill,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*{display:none}.i-amphtml-ghost{visibility:hidden!important}[layout=nodisplay]:not(.i-amphtml-display){display:none!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder]{display:block}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback]{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-loader-line{position:absolute;top:0;left:0;right:0;height:1px;overflow:hidden!important;background-color:hsla(0,0%,59%,0.2);display:block}.i-amphtml-loader-moving-line{display:block;position:absolute;width:100%;height:100%!important;background-color:hsla(0,0%,59%,0.65);z-index:2}@-webkit-keyframes i-amphtml-loader-line-moving{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes i-amphtml-loader-line-moving{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}.i-amphtml-loader-line.amp-active .i-amphtml-loader-moving-line{-webkit-animation:i-amphtml-loader-line-moving 4s ease infinite;animation:i-amphtml-loader-line-moving 4s ease infinite}.i-amphtml-loader{position:absolute;display:block;height:10px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;white-space:nowrap}.i-amphtml-loader.amp-active .i-amphtml-loader-dot{-webkit-animation:i-amphtml-loader-dots 2s infinite;animation:i-amphtml-loader-dots 2s infinite}.i-amphtml-loader-dot{position:relative;display:inline-block;height:10px;width:10px;margin:2px;border-radius:100%;background-color:rgba(0,0,0,0.3);box-shadow:2px 2px 2px 1px rgba(0,0,0,0.2);will-change:transform}.i-amphtml-loader .i-amphtml-loader-dot:first-child{-webkit-animation-delay:0s;animation-delay:0s}.i-amphtml-loader .i-amphtml-loader-dot:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.i-amphtml-loader .i-amphtml-loader-dot:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes i-amphtml-loader-dots{0%,to{-webkit-transform:scale(.7);transform:scale(.7);background-color:rgba(0,0,0,0.3)}50%{-webkit-transform:scale(.8);transform:scale(.8);background-color:rgba(0,0,0,0.5)}}@keyframes i-amphtml-loader-dots{0%,to{-webkit-transform:scale(.7);transform:scale(.7);background-color:rgba(0,0,0,0.3)}50%{-webkit-transform:scale(.8);transform:scale(.8);background-color:rgba(0,0,0,0.5)}}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-instagram{padding:64px 0px 0px!important;background-color:#fff}amp-analytics,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],html:not(.i-amphtml-subs-ready) [subscriptions-action],html:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}[visible-when-invalid],amp-experiment,amp-live-list>[update],amp-share-tracking,form [submit-error],form [submit-success],form [submitting]{display:none}.i-amphtml-jank-meter{position:fixed;background-color:rgba(232,72,95,0.5);bottom:0;right:0;color:#fff;font-size:16px;z-index:1000;padding:5px}i-amp-video-mask,i-amphtml-video-mask{z-index:1}.amp-video-eq{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;bottom:7px;display:-webkit-box;display:-ms-flexbox;display:flex;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{-webkit-animation-name:amp-video-eq-animation;animation-name:amp-video-eq-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;-webkit-animation-play-state:paused;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{-webkit-animation-name:none;animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{-webkit-animation-name:amp-video-eq-animation;animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{-webkit-animation-play-state:running;animation-play-state:running}.amp-video-eq-1-1{-webkit-animation-duration:0.3s;animation-duration:0.3s}.amp-video-eq-1-1,.amp-video-eq-1-2{-webkit-transform:translateY(60%);transform:translateY(60%)}.amp-video-eq-1-2{-webkit-animation-duration:0.45s;animation-duration:0.45s}.amp-video-eq-2-1{-webkit-animation-duration:0.5s;animation-duration:0.5s}.amp-video-eq-2-1,.amp-video-eq-2-2{-webkit-transform:translateY(30%);transform:translateY(30%)}.amp-video-eq-2-2{-webkit-animation-duration:0.4s;animation-duration:0.4s}.amp-video-eq-3-1{-webkit-animation-duration:0.3s;animation-duration:0.3s}.amp-video-eq-3-1,.amp-video-eq-3-2{-webkit-transform:translateY(70%);transform:translateY(70%)}.amp-video-eq-3-2{-webkit-animation-duration:0.35s;animation-duration:0.35s}.amp-video-eq-4-1{-webkit-animation-duration:0.4s;animation-duration:0.4s}.amp-video-eq-4-1,.amp-video-eq-4-2{-webkit-transform:translateY(50%);transform:translateY(50%)}.amp-video-eq-4-2{-webkit-animation-duration:0.25s;animation-duration:0.25s}@-webkit-keyframes amp-video-eq-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes amp-video-eq-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}.i-amphtml-accordion-content,.i-amphtml-accordion-header,amp-accordion,amp-accordion>section{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion>section>:last-child{display:none!important}amp-accordion>section[expanded]>:last-child{display:block!important}amp-story-page,amp-story[standalone]{display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#fff!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .i-amphtml-loader{display:none!important}\n/*# sourceURL=/css/amp.css*/";
        function Xf(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var g = a[e];
                b(g, e, a) ? (d < e && (a[d] = g),
                d++) : c.push(g)
            }
            d < a.length && (a.length = d)
        }
        function Yf(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a))
                    return c;
            return -1
        }
        ;var Zf = Date.now();
        var $f = ['\n      <div class="i-amphtml-jank-meter"></div>'];
        $f.raw = ['\n      <div class="i-amphtml-jank-meter"></div>'];
        function ag(a) {
            this.w = a;
            this.lc = this.kc = this.Nb = this.Sb = 0;
            this.Ib = null;
            this.qa = dc(a);
            this.yb = this.we = this.xe = null;
            bg(this)
        }
        ag.prototype.onScheduled = function() {
            cg(this) && null == this.Ib && (this.Ib = this.w.Date.now())
        }
        ;
        ag.prototype.onRun = function() {
            if (cg(this) && null != this.Ib) {
                var a = this.w.Date.now() - this.Ib;
                this.Ib = null;
                this.Nb++;
                16 < a && (this.Sb++,
                B().info("JANK", "Paint latency: " + a + "ms"));
                if (this.qa && 200 == this.Nb) {
                    var b = this.w.Math.floor((this.Nb - this.Sb) / this.Nb * 100);
                    this.qa.tickDelta("gfp", b);
                    this.qa.tickDelta("bf", this.Sb);
                    this.yb && (this.qa.tickDelta("lts", this.lc),
                    this.qa.tickDelta("ltc", this.kc),
                    this.yb.disconnect(),
                    this.yb = null);
                    var c = 0;
                    this.xe && null != this.we && (c = this.w.Math.max(0, this.w.Math.floor(100 * this.xe.level - this.we)),
                    this.qa.tickDelta("bd", c));
                    this.qa.flush();
                    if (R(this.w, "jank-meter")) {
                        var d = c
                          , e = this.w.document
                          , g = ye(e)($f);
                        g.textContent = "bf:" + this.Sb + ", lts: " + this.lc + ", " + ("ltc:" + this.kc + ", bd:" + d);
                        e.body.appendChild(g)
                    }
                }
            }
        }
        ;
        function cg(a) {
            return R(a.w, "jank-meter") || a.qa && a.qa.isPerformanceTrackingOn() && 200 > a.Nb
        }
        function bg(a) {
            cg(a) && dg(a.w) && (a.yb = new a.w.PerformanceObserver(function(b) {
                for (var c = b.getEntries(), d = 0; d < c.length; d++)
                    if ("longtask" == c[d].entryType) {
                        var e = a.w.Math.floor(c[d].duration / 50);
                        "cross-origin-descendant" == c[d].name ? (a.kc += e,
                        x().info("LONGTASK", "from child frame " + c[d].duration + "ms")) : (a.lc += e,
                        B().info("LONGTASK", "from self frame " + c[d].duration + "ms"))
                    }
            }
            ),
            a.yb.observe({
                entryTypes: ["longtask"]
            }))
        }
        function dg(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName"in a.TaskAttributionTiming.prototype
        }
        ;function eg(a, b, c) {
            var d = this;
            this.P = O(a);
            this.Ag = b;
            this.qg = c || 0;
            this.ka = -1;
            this.Qd = 0;
            this.Ka = !1;
            this.hg = function() {
                return d.wc()
            }
        }
        eg.prototype.isPending = function() {
            return -1 != this.ka
        }
        ;
        eg.prototype.schedule = function(a) {
            var b = a || this.qg;
            this.Ka && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.Qd ? (this.cancel(),
            this.Qd = c,
            this.ka = this.P.delay(this.hg, b),
            !0) : !1
        }
        ;
        eg.prototype.wc = function() {
            this.ka = -1;
            this.Qd = 0;
            this.Ka = !0;
            this.Ag();
            this.Ka = !1
        }
        ;
        eg.prototype.cancel = function() {
            this.isPending() && (this.P.cancel(this.ka),
            this.ka = -1)
        }
        ;
        var fg = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
        function gg(a) {
            var b = a.getAttribute("srcset");
            if (b) {
                a = [];
                for (var c; c = fg.exec(b); ) {
                    var d = c[1], e = void 0, g;
                    if (c[2]) {
                        var h = c[3].toLowerCase();
                        if ("w" == h)
                            e = parseInt(c[2], 10);
                        else if ("x" == h)
                            g = parseFloat(c[2]);
                        else
                            continue
                    } else
                        g = 1;
                    a.push({
                        url: d,
                        width: e,
                        dpr: g
                    })
                }
                return new hg(a)
            }
            var k = x().assert(a.getAttribute("src"), 'Either non-empty "srcset" or "src" attribute must be specified: %s', a);
            return ig(k)
        }
        function ig(a) {
            return new hg([{
                url: a,
                width: void 0,
                dpr: 1
            }])
        }
        function hg(a) {
            x().assert(0 < a.length, "Srcset must have at least one source");
            this.Jb = a;
            for (var b = !1, c = !1, d = 0; d < a.length; d++)
                var e = a[d]
                  , b = b || !!e.width
                  , c = c || !!e.dpr;
            x().assert(!!(b ^ c), "Srcset must have width or dpr sources, but not both");
            a.sort(b ? jg : kg);
            this.$f = b
        }
        hg.prototype.select = function(a, b) {
            if (this.$f) {
                b *= a;
                a = this.Jb;
                for (var c = 0, d = Infinity, e = Infinity, g = 0; g < a.length; g++) {
                    var h = a[g].width
                      , k = Math.abs(h - b);
                    if (k <= 1.1 * d || 1.2 < b / e)
                        c = g,
                        d = k,
                        e = h;
                    else
                        break
                }
            } else
                for (a = this.Jb,
                c = 0,
                d = Infinity,
                e = 0; e < a.length; e++)
                    if (g = Math.abs(a[e].dpr - b),
                    g <= d)
                        c = e,
                        d = g;
                    else
                        break;
            b = c;
            return this.Jb[b].url
        }
        ;
        hg.prototype.getUrls = function() {
            return this.Jb.map(function(a) {
                return a.url
            })
        }
        ;
        hg.prototype.stringify = function(a) {
            for (var b = [], c = this.Jb, d = 0; d < c.length; d++) {
                var e = c[d]
                  , g = e.url;
                a && (g = a(g));
                g = this.$f ? g + (" " + e.width + "w") : g + (" " + e.dpr + "x");
                b.push(g)
            }
            return b.join(", ")
        }
        ;
        function jg(a, b) {
            x().assert(a.width != b.width, "Duplicate width: %s", a.width);
            return a.width - b.width
        }
        function kg(a, b) {
            x().assert(a.dpr != b.dpr, "Duplicate dpr: %s", a.dpr);
            return a.dpr - b.dpr
        }
        ;function lg() {
            this.C = []
        }
        lg.prototype.peek = function() {
            var a = this.C.length;
            return a ? this.C[a - 1].item : null
        }
        ;
        lg.prototype.enqueue = function(a, b) {
            if (isNaN(b))
                throw Error("Priority must not be NaN.");
            for (var c = b, d = -1, e = 0, g = this.C.length; e <= g; ) {
                d = Math.floor((e + g) / 2);
                if (d === this.C.length)
                    break;
                if (this.C[d].priority < c)
                    e = d + 1;
                else if (0 < d && this.C[d - 1].priority >= c)
                    g = d - 1;
                else
                    break
            }
            this.C.splice(d, 0, {
                item: a,
                priority: b
            })
        }
        ;
        lg.prototype.dequeue = function() {
            return this.C.length ? this.C.pop().item : null
        }
        ;
        ba.Object.defineProperties(lg.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.C.length
                }
            }
        });
        var mg = /nochunking=1/.test(self.location.hash)
          , ng = Promise.resolve();
        function og(a, b) {
            mg ? ng.then(b) : (M(a, "chunk", pg),
            J(a, "chunk").runForStartup(b))
        }
        function qg(a) {
            this.state = "not_run";
            this.hd = a
        }
        function rg(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.hd(b)
                } catch (c) {
                    throw a.tf(c),
                    c;
                }
            }
        }
        qg.prototype.zh = function() {
            return this.hd.displayName || this.hd.name
        }
        ;
        qg.prototype.tf = function() {}
        ;
        qg.prototype.af = function() {
            return !1
        }
        ;
        qg.prototype.Vf = function() {
            return !0
        }
        ;
        function sg(a, b, c) {
            qg.call(this, a);
            var d = this;
            this.w = b;
            this.h = null;
            c.then(function(a) {
                d.h = a;
                d.h.isVisible() && rg(d, null);
                d.h.onVisibilityChanged(function() {
                    d.h.isVisible() && rg(d, null)
                })
            })
        }
        aa(sg, qg);
        sg.prototype.tf = function() {
            Xd(self.document)
        }
        ;
        sg.prototype.af = function() {
            return this.h ? this.h.isVisible() : this.w.document.hidden ? !1 : !/visibilityState=(hidden|prerender)/.test(this.w.location.hash)
        }
        ;
        sg.prototype.Vf = function() {
            return !!this.h
        }
        ;
        function pg(a) {
            var b = this;
            this.w = a.win;
            this.I = new lg;
            this.ye = this.Qe.bind(this);
            this.uh = ec(a, "viewer");
            this.w.addEventListener("message", function(a) {
                "amp-macro-task" == a.data && b.Qe(null)
            })
        }
        pg.prototype.run = function(a, b) {
            var c = new qg(a);
            tg(this, c, b)
        }
        ;
        pg.prototype.runForStartup = function(a) {
            a = new sg(a,this.w,this.uh);
            tg(this, a, Number.POSITIVE_INFINITY)
        }
        ;
        function tg(a, b, c) {
            a.I.enqueue(b, c);
            ng.then(function() {
                a.La()
            })
        }
        function ug(a, b) {
            for (var c = a.I.peek(); c && "not_run" !== c.state; )
                a.I.dequeue(),
                c = a.I.peek();
            c && b && a.I.dequeue();
            return c
        }
        pg.prototype.Qe = function(a) {
            var b = this
              , c = ug(this, !0);
            if (!c)
                return !1;
            var d = Date.now();
            rg(c, a);
            ng.then(function() {
                b.La()
            });
            return !0
        }
        ;
        function vg(a) {
            ng.then(function() {
                a.ye(null)
            })
        }
        pg.prototype.La = function() {
            var a = ug(this);
            a && (a.af() ? vg(this) : a.Vf() && this.w.requestIdleCallback ? wg(this.w, this.ye) : this.w.postMessage("amp-macro-task", "*"))
        }
        ;
        function wg(a, b) {
            var c = 15
              , d = 2E3;
            function e(h) {
                if (h.timeRemaining() < c) {
                    var k = d - (Date.now() - g);
                    0 >= k || h.didTimeout ? b(h) : a.requestIdleCallback(e, {
                        timeout: k
                    })
                } else
                    b(h)
            }
            var g = Date.now();
            a.requestIdleCallback(e, {
                timeout: d
            })
        }
        ;function xg(a) {
            var b = !1;
            return b ? a.protocol + "//" + a.host + "/dist" : Ka.urls.cdn
        }
        function yg(a) {
            var b, c = xg(location);
            return b ? c + "/rtv/" + t().rtvVersion + "/" + a + ".js" : c + "/" + a + ".js"
        }
        ;function zg(a) {
            return !!a && "function" == typeof a.getFormData
        }
        ;/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file or at
 https://developers.google.com/open-source/licenses/bsd
*/
        var Ag;
        function Bg() {
            var a;
            if (void 0 === Ag) {
                var b = a || Element;
                Ag = b.prototype.attachShadow ? "v1" : b.prototype.createShadowRoot ? "v0" : "none"
            }
            return Ag
        }
        ;var Cg = {
            composed: !1
        };
        function Dg(a) {
            return "none" != Bg() && Node.prototype.getRootNode ? a.getRootNode(Cg) : Jc(a, function(a) {
                return a ? "I-AMPHTML-SHADOW-ROOT" == a.tagName ? !0 : 11 == a.nodeType && "[object ShadowRoot]" === Object.prototype.toString.call(a) : !1
            })
        }
        ;var Eg = "__AMP_ACTION_MAP__" + Math.random()
          , Fg = {
            form: ["submit", "clear"]
        }
          , Gg = {
            button: !0,
            checkbox: !0,
            link: !0,
            listbox: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            radio: !0,
            scrollbar: !0,
            slider: !0,
            spinbutton: !0,
            "switch": !0,
            tab: !0,
            treeitem: !0
        };
        function Hg(a, b, c, d, e, g, h, k, l) {
            k = void 0 === k ? null : k;
            this.target = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = g;
            this.trust = h;
            this.targetType = k || a.tagName;
            this.index = void 0 === l ? 0 : l
        }
        Hg.prototype.satisfiesTrust = function(a) {
            return la(this.trust) ? this.trust < a ? (x().error("Action", 'Insufficient trust for "' + this.method + '" ' + ("(" + this.trust + " < " + a + ").")),
            !1) : !0 : (B().error("Action", "Invalid trust for '" + this.method + "': " + this.trust),
            !1)
        }
        ;
        function Ig(a, b) {
            this.ampdoc = a;
            this.ra = b || a.getRootNode();
            this.Ra = Jg(this);
            this.jd = D();
            this.Xe = D();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        f = Ig.prototype;
        f.adoptEmbedWindow = function(a) {
            Xb(a, "action", new Ig(this.ampdoc,a.document))
        }
        ;
        f.addEvent = function(a) {
            var b = this;
            if ("tap" == a)
                this.ra.addEventListener("click", function(c) {
                    c.defaultPrevented || b.trigger(c.target, a, c, 100)
                }),
                this.ra.addEventListener("keydown", function(c) {
                    var d = c.target
                      , e = c.keyCode;
                    if (13 == e || 32 == e) {
                        var k = d.getAttribute("role"), l;
                        if (l = k)
                            l = k.toLowerCase(),
                            l = Da.call(Gg, l);
                        var m = l;
                        !c.defaultPrevented && m && (c.preventDefault(),
                        b.trigger(d, a, c, 100))
                    }
                });
            else if ("submit" == a)
                this.ra.addEventListener(a, function(c) {
                    b.trigger(c.target, a, c, 100)
                });
            else if ("change" == a)
                this.ra.addEventListener(a, function(c) {
                    var d = c.target;
                    Kg(c);
                    b.trigger(d, a, c, 100)
                });
            else if ("input-debounced" == a) {
                var c = Wf(this.ampdoc.win, function(c) {
                    b.trigger(c.target, a, c, 100)
                });
                this.ra.addEventListener("input", function(a) {
                    var b = new Lg(a);
                    Kg(b);
                    c(b)
                })
            } else if ("input-throttled" == a) {
                var d = Vf(this.ampdoc.win, function(c) {
                    b.trigger(c.target, a, c, 100)
                });
                this.ra.addEventListener("input", function(a) {
                    a = new Lg(a);
                    Kg(a);
                    d(a)
                })
            } else
                "valid" != a && "invalid" != a || this.ra.addEventListener(a, function(c) {
                    b.trigger(c.target, a, c, 100)
                })
        }
        ;
        f.addGlobalTarget = function(a, b) {
            this.jd[a] = b
        }
        ;
        f.addGlobalMethodHandler = function(a, b, c) {
            c = void 0 === c ? 100 : c;
            this.Xe[a] = {
                handler: b,
                minTrust: c
            }
        }
        ;
        f.trigger = function(a, b, c, d) {
            Mg(this, a, b, c, d)
        }
        ;
        f.execute = function(a, b, c, d, e, g, h) {
            var k = new Hg(a,b,c,d,e,g,h);
            Ng(this, k)
        }
        ;
        f.installActionHandler = function(a, b, c) {
            c = void 0 === c ? 100 : c;
            var d = a.getAttribute("id") || ""
              , e = a.tagName + "#" + d;
            d && "amp-" == d.substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__)
                B().error("Action", "Action handler already installed for " + a);
            else {
                var g = a.__AMP_ACTION_QUEUE__;
                a.__AMP_ACTION_HANDLER__ = {
                    handler: b,
                    minTrust: c
                };
                ja(g) && O(a.ownerDocument.defaultView).delay(function() {
                    g.forEach(function(a) {
                        try {
                            a.satisfiesTrust(c) && b(a)
                        } catch (k) {
                            B().error("Action", "Action execution failed:", a, k)
                        }
                    });
                    a.__AMP_ACTION_QUEUE__.length = 0
                }, 1)
            }
        }
        ;
        f.hasAction = function(a, b, c) {
            return !!Og(a, b, c)
        }
        ;
        f.setWhitelist = function(a) {
            this.Ra = a
        }
        ;
        f.addToWhitelist = function(a) {
            this.Ra || (this.Ra = []);
            this.Ra.push(a)
        }
        ;
        function Mg(a, b, c, d, e) {
            var g = Og(b, c);
            if (g) {
                var h = null;
                g.actionInfos.forEach(function(c, l) {
                    function k() {
                        var h = a.jd[p] ? a.ra : a.ra.getElementById(p);
                        if (h)
                            return h = new Hg(h,c.method,q,b,g.node,d,e,p,l),
                            Ng(a, h, g.actionInfos);
                        a.Ga('Target "' + p + '" not found for action ' + ("[" + c.str + "]."))
                    }
                    var p = c.target
                      , q = Pg(c.args, d);
                    h = h ? h.then(k) : k()
                })
            }
        }
        f.Ga = function(a, b) {
            if (b)
                throw a = x().createError("[Action] " + a),
                je(a, b),
                a;
            x().error("Action", a)
        }
        ;
        function Ng(a, b, c) {
            var d = b.method
              , e = b.targetType;
            if (a.Ra) {
                var g = e + "." + d;
                if (!a.Ra.includes(g))
                    return a.Ga('"' + g + '" is not whitelisted (' + a.Ra + ")."),
                    null
            }
            var h = a.jd[e];
            if (h)
                return h(b, b.index, c);
            var g = b.target
              , k = a.Xe[d];
            if (k && b.satisfiesTrust(k.minTrust))
                return k.handler(b);
            var l = g.tagName.toLowerCase();
            if ("amp-" == l.substring(0, 4))
                return g.enqueAction ? g.enqueAction(b) : a.Ga('Unrecognized AMP element "' + l + '".', g),
                null;
            var m = Fg[l]
              , p = g.getAttribute("id") || "";
            if (p && "amp-" == p.substring(0, 4) || m && -1 < m.indexOf(d))
                return (a = g.__AMP_ACTION_HANDLER__) ? (d = a.handler,
                b.satisfiesTrust(a.minTrust) && d(b)) : (g.__AMP_ACTION_QUEUE__ = g.__AMP_ACTION_QUEUE__ || [],
                g.__AMP_ACTION_QUEUE__.push(b)),
                null;
            a.Ga("Target (" + e + ") doesn't support \"" + d + '" action.', b.caller);
            return null
        }
        function Og(a, b, c) {
            for (; a && (!c || a != c); ) {
                var d = b, e, g, h;
                e = a;
                h = e[Eg];
                if (void 0 === h) {
                    h = null;
                    if (e.hasAttribute("on")) {
                        var k = e.getAttribute("on")
                          , l = Qg.bind(null, k, e)
                          , m = Rg.bind(null, k, e)
                          , p = null
                          , q = new Sg(k);
                        do
                            if (h = q.next(),
                            h.type != Tg && (h.type != Ug || ";" != h.value))
                                if (h.type == Vg || h.type == Wg) {
                                    var u = h.value;
                                    m(q.next(), [Ug], ":");
                                    var r = [];
                                    do {
                                        var H = m(q.next(), [Vg, Wg]).value
                                          , C = "activate"
                                          , E = null;
                                        g = q.peek();
                                        if (g.type == Ug && "." == g.value && (q.next(),
                                        C = m(q.next(), [Vg, Wg]).value || C,
                                        g = q.peek(),
                                        g.type == Ug && "(" == g.value)) {
                                            q.next();
                                            var z;
                                            g = q;
                                            var E = m
                                              , A = l
                                              , v = g.peek()
                                              , w = null;
                                            if (v.type == Xg)
                                                w = D(),
                                                z = g.next().value,
                                                w.__AMP_OBJECT_STRING__ = z,
                                                E(g.next(), [Ug], ")");
                                            else {
                                                do {
                                                    z = g.next();
                                                    var v = z.type
                                                      , L = z.value;
                                                    if (v != Ug || "," != L && ")" != L)
                                                        if (v == Vg || v == Wg) {
                                                            E(g.next(), [Ug], "=");
                                                            z = E(g.next(!0), [Vg, Wg]);
                                                            var T = [z];
                                                            if (z.type == Wg)
                                                                for (v = g.peek(); v.type == Ug && "." == v.value; v = g.peek())
                                                                    g.next(),
                                                                    z = E(g.next(!1), [Wg]),
                                                                    T.push(z);
                                                            v = Yg(T);
                                                            w || (w = D());
                                                            w[L] = v;
                                                            v = g.peek();
                                                            A(v.type == Ug && ("," == v.value || ")" == v.value), "Expected either [,] or [)]")
                                                        } else
                                                            A(!1, "; unexpected token [" + (z.value || "") + "]")
                                                } while (z.type != Ug || ")" != z.value)
                                            }
                                            E = w
                                        }
                                        r.push({
                                            event: u,
                                            target: H,
                                            method: C,
                                            args: E,
                                            str: k
                                        });
                                        g = q.peek()
                                    } while (g.type == Ug && "," == g.value && q.next());p || (p = D());
                                    p[u] = r
                                } else
                                    l(!1, "; unexpected token [" + (h.value || "") + "]");
                        while (h.type != Tg);h = p
                    }
                    e[Eg] = h
                }
                var P = (e = h) ? e[d] || null : null;
                if (d = P)
                    if (d = !a.disabled)
                        d = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector,
                        d = !(d && d.call(a, ":disabled"));
                if (d)
                    return {
                        node: a,
                        actionInfos: P
                    };
                a = a.parentElement
            }
            return null
        }
        f.setActions = function(a, b) {
            a.setAttribute("on", b);
            delete a[Eg]
        }
        ;
        function Jg(a) {
            a = a.ampdoc.getRootNode().head;
            return a ? (a = a.querySelector('meta[name="amp-action-whitelist"]')) ? a.getAttribute("content").split(",").map(function(a) {
                return a.trim()
            }) : null : null
        }
        function Kg(a) {
            var b = D()
              , c = a.target;
            void 0 !== c.value && (b.value = c.value);
            "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
            void 0 !== c.checked && (b.checked = c.checked);
            if (void 0 !== c.min || void 0 !== c.max)
                b.min = c.min,
                b.max = c.max;
            0 < Object.keys(b).length && (a.detail = b)
        }
        function Lg(a) {
            this.detail = null;
            var b = this || D(), c;
            for (c in a)
                b[c] = "function" === typeof a[c] ? Zg : a[c]
        }
        function Zg() {}
        function Yg(a) {
            return 0 == a.length ? null : 1 == a.length ? a[0].value : {
                expression: a.map(function(a) {
                    return a.value
                }).join(".")
            }
        }
        function Pg(a, b) {
            if (!a)
                return a;
            var c = D();
            b && b.detail && (c.event = b.detail);
            var d = D();
            Object.keys(a).forEach(function(b) {
                var e = a[b];
                if ("object" == typeof e && e.expression) {
                    e = e.expression;
                    if ("." == e)
                        e = c;
                    else {
                        for (var e = e.split("."), h = c, k = 0; k < e.length; k++) {
                            var l = e[k];
                            if (l && h && void 0 !== h[l] && ob(h, l))
                                h = h[l];
                            else {
                                h = void 0;
                                break
                            }
                        }
                        e = h
                    }
                    var m = e
                      , e = void 0 === m ? null : m
                }
                d[b] = e
            });
            return d
        }
        function Qg(a, b, c, d) {
            return x().assert(c, "Invalid action definition in %s: [%s] %s", b, a, d || "")
        }
        function Rg(a, b, c, d, e) {
            void 0 !== e ? Qg(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]") : Qg(a, b, d.includes(c.type));
            return c
        }
        var Tg = 1
          , Ug = 2
          , Vg = 3
          , Wg = 4
          , Xg = 5;
        function Sg(a) {
            this.K = a;
            this.pd = -1
        }
        Sg.prototype.next = function(a) {
            var b = $g(this, a || !1);
            this.pd = b.index;
            return b
        }
        ;
        Sg.prototype.peek = function(a) {
            return $g(this, a || !1)
        }
        ;
        function $g(a, b) {
            var c = a.pd + 1;
            if (c >= a.K.length)
                return {
                    type: Tg,
                    index: a.pd
                };
            var d = a.K.charAt(c);
            if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
                for (c++; c < a.K.length && -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.K.charAt(c)); c++)
                    ;
                if (c >= a.K.length)
                    return {
                        type: Tg,
                        index: c
                    };
                d = a.K.charAt(c)
            }
            if (b && (ah(d) || "." == d && c + 1 < a.K.length && ah(a.K[c + 1]))) {
                for (var e = "." == d, g = c + 1; g < a.K.length; g++) {
                    var h = a.K.charAt(g);
                    if ("." == h)
                        e = !0;
                    else if (!ah(h))
                        break
                }
                a = a.K.substring(c, g);
                a = e ? parseFloat(a) : parseInt(a, 10);
                c = g - 1;
                return {
                    type: Vg,
                    value: a,
                    index: c
                }
            }
            if (-1 != ";:.()=,|!".indexOf(d))
                return {
                    type: Ug,
                    value: d,
                    index: c
                };
            if (-1 != "\"'".indexOf(d)) {
                for (var g = -1, k = c + 1; k < a.K.length; k++)
                    if (a.K.charAt(k) == d) {
                        g = k;
                        break
                    }
                if (-1 == g)
                    return {
                        type: 0,
                        index: c
                    };
                a = a.K.substring(c + 1, g);
                c = g;
                return {
                    type: Vg,
                    value: a,
                    index: c
                }
            }
            if ("{" == d) {
                for (var l = 1, g = -1, d = c + 1; d < a.K.length; d++) {
                    var m = a.K[d];
                    "{" == m ? l++ : "}" == m && l--;
                    if (0 >= l) {
                        g = d;
                        break
                    }
                }
                if (-1 == g)
                    return {
                        type: 0,
                        index: c
                    };
                a = a.K.substring(c, g + 1);
                c = g;
                return {
                    type: Xg,
                    value: a,
                    index: c
                }
            }
            for (g = c + 1; g < a.K.length && -1 == " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(a.K.charAt(g)); g++)
                ;
            a = a.K.substring(c, g);
            c = g - 1;
            return !b || "true" != a && "false" != a ? ah(a.charAt(0)) ? {
                type: Vg,
                value: a,
                index: c
            } : {
                type: Wg,
                value: a,
                index: c
            } : {
                type: Vg,
                value: "true" == a,
                index: c
            }
        }
        function ah(a) {
            return "0" <= a && "9" >= a
        }
        ;function bh(a, b) {
            this.win = a;
            this.Fc = null;
            b && (this.Fc = new ch(a));
            this.ma = null
        }
        f = bh.prototype;
        f.isSingleDoc = function() {
            return !!this.Fc
        }
        ;
        f.hasAmpDocShell = function() {
            return !!this.ma
        }
        ;
        f.getAmpDoc = function(a) {
            if (this.Fc)
                return this.Fc;
            if (a === this.win.document) {
                if (this.ma)
                    return this.ma;
                throw B().createError("Ampdoc for shell has not been installed");
            }
            for (var b = a; b; ) {
                if (b.G)
                    return b.G;
                var c = xc(b, this.win);
                if (c)
                    b = c;
                else {
                    b = Dg(b);
                    if (!b) {
                        if (this.ma)
                            return this.ma;
                        break
                    }
                    if (c = b.__AMPDOC)
                        return c;
                    b = b.host
                }
            }
            throw B().createError("No ampdoc found for", a);
        }
        ;
        f.installShadowDoc = function(a, b) {
            a = new dh(this.win,a,b);
            return b.__AMPDOC = a
        }
        ;
        f.installShellShadowDoc = function() {
            var a = this;
            this.ma = new eh(this.win);
            this.win.document.__AMPDOC = this.ma;
            We(this.win.document).then(function(b) {
                a.ma.setBody(b.body);
                a.ma.setReady()
            });
            return this.ma
        }
        ;
        function fh(a) {
            this.win = a;
            this.O = new Re;
            this.Me = []
        }
        f = fh.prototype;
        f.isSingleDoc = function() {
            return null
        }
        ;
        f.getWin = function() {
            return this.win
        }
        ;
        f.signals = function() {
            return this.O
        }
        ;
        f.declaresExtension = function(a) {
            return -1 != this.Me.indexOf(a)
        }
        ;
        f.declareExtension = function(a) {
            this.declaresExtension(a) || this.Me.push(a)
        }
        ;
        f.getRootNode = function() {
            return null
        }
        ;
        f.getHeadNode = function() {}
        ;
        f.isBodyAvailable = function() {
            return !1
        }
        ;
        f.getBody = function() {
            return null
        }
        ;
        f.whenBodyAvailable = function() {
            return null
        }
        ;
        f.isReady = function() {
            return null
        }
        ;
        f.whenReady = function() {
            return null
        }
        ;
        f.getUrl = function() {
            return null
        }
        ;
        f.getElementById = function(a) {
            return this.getRootNode().getElementById(a)
        }
        ;
        f.contains = function(a) {
            return this.getRootNode().contains(a)
        }
        ;
        function ch(a) {
            fh.call(this, a);
            var b = this;
            this.Tc = this.win.document.body ? Promise.resolve(this.win.document.body) : Ec(this.win.document).then(function() {
                return b.getBody()
            });
            this.Yd = We(this.win.document)
        }
        aa(ch, fh);
        f = ch.prototype;
        f.isSingleDoc = function() {
            return !0
        }
        ;
        f.getRootNode = function() {
            return this.win.document
        }
        ;
        f.getUrl = function() {
            return this.win.location.href
        }
        ;
        f.getHeadNode = function() {
            return this.win.document.head
        }
        ;
        f.isBodyAvailable = function() {
            return !!this.win.document.body
        }
        ;
        f.getBody = function() {
            return this.win.document.body
        }
        ;
        f.whenBodyAvailable = function() {
            return this.Tc
        }
        ;
        f.isReady = function() {
            return Se(this.win.document)
        }
        ;
        f.whenReady = function() {
            return this.Yd
        }
        ;
        function dh(a, b, c) {
            fh.call(this, a);
            var d = this;
            this.ke = b;
            this.Jf = c;
            this.Vc = null;
            this.Uc = void 0;
            this.Tc = new Promise(function(a) {
                d.Uc = a
            }
            );
            this.zf = !1;
            this.Zd = void 0;
            this.Yd = new Promise(function(a) {
                d.Zd = a
            }
            )
        }
        aa(dh, fh);
        f = dh.prototype;
        f.isSingleDoc = function() {
            return !1
        }
        ;
        f.getRootNode = function() {
            return this.Jf
        }
        ;
        f.getUrl = function() {
            return this.ke
        }
        ;
        f.getHeadNode = function() {
            return this.Jf
        }
        ;
        f.isBodyAvailable = function() {
            return !!this.Vc
        }
        ;
        f.getBody = function() {
            return this.Vc
        }
        ;
        f.setBody = function(a) {
            this.Vc = a;
            this.Uc(a);
            this.Uc = void 0
        }
        ;
        f.whenBodyAvailable = function() {
            return this.Tc
        }
        ;
        f.isReady = function() {
            return this.zf
        }
        ;
        f.setReady = function() {
            this.zf = !0;
            this.Zd();
            this.Zd = void 0
        }
        ;
        f.whenReady = function() {
            return this.Yd
        }
        ;
        function eh(a) {
            dh.call(this, a, a.location.href, a.document)
        }
        aa(eh, dh);
        eh.prototype.getHeadNode = function() {
            return this.win.document.head
        }
        ;
        function gh() {
            var a = self;
            K(a, "ampdoc", function() {
                return new bh(a,!0)
            })
        }
        ;function hh(a) {
            var b = this;
            this.win = a;
            this.rd = this.win.Date.now();
            this.pb = [];
            this.o = this.h = null;
            this.vb = this.Ad = !1;
            this.Pe = D();
            this.te = "";
            this.Ue = this.Se = this.kf = null;
            this.addEnabledExperiment("rtv-" + t(this.win).rtvVersion);
            Ad(this.win) && this.addEnabledExperiment("canary");
            Xe(a.document).then(function() {
                b.tick("ol");
                if (!b.win.PerformancePaintTiming && b.win.chrome && "function" == typeof b.win.chrome.loadTimes) {
                    var a = 1E3 * b.win.chrome.loadTimes().firstPaintTime - b.win.performance.timing.navigationStart;
                    1 >= a || b.tickDelta("fp", a)
                }
                b.flush()
            });
            ih(this)
        }
        f = hh.prototype;
        f.coreServicesAvailable = function() {
            var a = this;
            this.h = Q(this.win.document);
            this.o = gd(this.win.document);
            this.vb = this.h.isEmbedded() && "1" === this.h.getParam("csi");
            this.h.onVisibilityChanged(this.flush.bind(this));
            jh(this);
            var b = this.h.whenMessagingReady();
            this.h.whenFirstVisible().then(function() {
                a.tick("ofv");
                a.flush()
            });
            return b ? b.then(function() {
                a.Ad = !0;
                a.tickDelta("msr", a.win.Date.now() - a.rd);
                kh(a);
                a.flush()
            }) : Promise.resolve()
        }
        ;
        function ih(a) {
            if (a.win.PerformancePaintTiming) {
                var b = !1
                  , c = !1
                  , d = function(d) {
                    "first-paint" != d.name || b ? "first-contentful-paint" != d.name || c || (a.tickDelta("fcp", d.startTime + d.duration),
                    c = !0) : (a.tickDelta("fp", d.startTime + d.duration),
                    b = !0)
                }
                  , e = new a.win.PerformanceObserver(function(b) {
                    b.getEntries().forEach(d);
                    a.flush()
                }
                );
                a.win.performance.getEntriesByType("paint").forEach(d);
                e.observe({
                    entryTypes: ["paint"]
                })
            }
        }
        function jh(a) {
            var b = !a.h.hasBeenVisible()
              , c = b ? -1 : a.rd;
            b && a.h.whenFirstVisible().then(function() {
                c = a.win.Date.now()
            });
            lh(a).then(function() {
                if (b) {
                    var d = -1 < c ? a.win.Date.now() - c : 0;
                    a.h.whenFirstVisible().then(function() {
                        a.tickDelta("pc", d)
                    });
                    mh(a, d);
                    a.mark("pc")
                } else
                    a.tick("pc"),
                    mh(a, a.win.Date.now() - c);
                a.flush()
            })
        }
        function lh(a) {
            var b = id(a.win.document).getSize()
              , b = X(0, 0, b.width, b.height);
            return a.o.getResourcesInRect(a.win, b, !0).then(function(a) {
                return Promise.all(a.map(function(a) {
                    return a.loadedOnce()
                }))
            })
        }
        f.tick = function(a, b) {
            var c = void 0 == b ? this.win.Date.now() : void 0
              , d = F({
                label: a,
                value: c,
                delta: null != b ? Math.max(b, 0) : void 0
            });
            this.Ad && this.vb ? this.h.sendMessage("tick", d) : (50 <= this.pb.length && this.pb.shift(),
            this.pb.push(d));
            1 == arguments.length && this.mark(a);
            var e = Math.round(null != b ? Math.max(b, 0) : c - this.rd);
            switch (a) {
            case "fcp":
                this.Se = e;
                break;
            case "pc":
                this.Ue = e;
                break;
            case "mbv":
                this.kf = e
            }
        }
        ;
        f.mark = function(a) {
            this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(a)
        }
        ;
        f.tickDelta = function(a, b) {
            this.tick(a, b)
        }
        ;
        f.tickSinceVisible = function(a) {
            var b = this.win.Date.now()
              , c = this.h ? this.h.getFirstVisibleTime() : 0;
            this.tickDelta(a, c ? Math.max(b - c, 0) : 0)
        }
        ;
        f.flush = function() {
            this.Ad && this.vb && this.h.sendMessage("sendCsi", F({
                ampexp: this.te
            }), !0)
        }
        ;
        f.throttledFlush = function() {
            this.Nf || (this.Nf = Vf(this.win, this.flush.bind(this)));
            this.Nf()
        }
        ;
        f.addEnabledExperiment = function(a) {
            this.Pe[a] = !0;
            this.te = Object.keys(this.Pe).join(",")
        }
        ;
        function kh(a) {
            a.h && (a.vb && a.pb.forEach(function(b) {
                a.h.sendMessage("tick", b)
            }),
            a.pb.length = 0)
        }
        function mh(a, b) {
            a.h && a.h.sendMessage("prerenderComplete", F({
                value: b
            }), !0)
        }
        f.isPerformanceTrackingOn = function() {
            return this.vb
        }
        ;
        f.getFirstContentfulPaint = function() {
            return this.Se
        }
        ;
        f.getMakeBodyVisible = function() {
            return this.kf
        }
        ;
        f.getFirstViewportReady = function() {
            return this.Ue
        }
        ;
        var nh = ['\n        <link rel="preload" referrerpolicy="origin" />'];
        nh.raw = ['\n        <link rel="preload" referrerpolicy="origin" />'];
        var oh = null;
        function ph(a) {
            this.T = a.document;
            this.nd = a.document.head;
            this.Ab = {};
            this.Uf = {};
            this.yc = fd(a);
            this.Ab[G(a.location.href).origin] = !0;
            var b;
            a: {
                if (!oh) {
                    b = a.document.createElement("link");
                    var c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) {
                        b = {};
                        break a
                    }
                    oh = {
                        preconnect: c.supports("preconnect"),
                        preload: c.supports("preload"),
                        onlyValidAs: "invalid-value" != b.as
                    }
                }
                b = oh
            }
            this.Xb = b;
            this.P = O(a)
        }
        ph.prototype.url = function(a, b, c) {
            var d = this;
            a.whenFirstVisible().then(function() {
                d.ke(a, b, c)
            })
        }
        ;
        ph.prototype.ke = function(a, b, c) {
            if (qh(b)) {
                a = G(b).origin;
                b = Date.now();
                var d = this.Ab[a];
                if (d && b < d)
                    c && (this.Ab[a] = b + 18E4);
                else {
                    this.Ab[a] = b + (c ? 18E4 : 1E4);
                    var e;
                    this.Xb.preconnect || (e = this.T.createElement("link"),
                    e.setAttribute("rel", "dns-prefetch"),
                    e.setAttribute("href", a),
                    this.nd.appendChild(e));
                    var g = this.T.createElement("link");
                    g.setAttribute("rel", "preconnect");
                    g.setAttribute("href", a);
                    g.setAttribute("referrerpolicy", "origin");
                    this.nd.appendChild(g);
                    this.P.delay(function() {
                        e && e.parentNode && e.parentNode.removeChild(e);
                        g.parentNode && g.parentNode.removeChild(g)
                    }, 1E4);
                    rh(this, a)
                }
            }
        }
        ;
        ph.prototype.preload = function(a, b, c) {
            var d = this;
            qh(b) && !this.Uf[b] && (this.Uf[b] = !0,
            this.url(a, b, !0),
            this.Xb.preload && ("document" == c && this.yc.isSafari() || a.whenFirstVisible().then(function() {
                var a = ye(d.T)(nh);
                a.setAttribute("href", b);
                a.as = d.Xb.onlyValidAs ? "fetch" : "";
                d.nd.appendChild(a)
            })))
        }
        ;
        function qh(a) {
            return Ja(a, "https:") || Ja(a, "http:") ? !0 : !1
        }
        function rh(a, b) {
            if (!a.Xb.preconnect && a.yc.isSafari()) {
                var c = Date.now();
                a.Ab[b] = c + 18E4;
                var d = c - c % 18E4;
                a = new XMLHttpRequest;
                a.open("HEAD", b + "/amp_preconnect_polyfill_404_or_other_error_expected._Do_not_worry_about_it?" + d, !0);
                a.withCredentials = !0;
                a.send()
            }
        }
        function sh(a, b) {
            this.wf = a;
            this.$ = b;
            this.h = null
        }
        function th(a) {
            a.h || (a.h = Q(a.$));
            return a.h
        }
        sh.prototype.url = function(a, b) {
            this.wf.url(th(this), a, b)
        }
        ;
        sh.prototype.preload = function(a, b) {
            this.wf.preload(th(this), a, b)
        }
        ;
        function uh(a) {
            this.element = a;
            this.layout_ = "nodisplay";
            this.layoutWidth_ = -1;
            this.inViewport_ = !1;
            this.win = a.ownerDocument.defaultView;
            this.actionMap_ = null;
            a = this.element;
            var b = a.ownerDocument.defaultView;
            K(b, "preconnect", ph);
            b = N(b, "preconnect");
            this.preconnect = new sh(b,a);
            this.config = null;
            this.layoutScheduleTime = 0
        }
        f = uh.prototype;
        f.signals = function() {
            return this.element.signals()
        }
        ;
        f.getLayoutPriority = function() {
            return 0
        }
        ;
        f.updateLayoutPriority = function(a) {
            this.element.getResources().updateLayoutPriority(this.element, a)
        }
        ;
        f.getLayout = function() {
            return this.layout_
        }
        ;
        f.getLayoutBox = function() {
            return this.element.getLayoutBox()
        }
        ;
        f.getPageLayoutBox = function() {
            return this.element.getPageLayoutBox()
        }
        ;
        f.getWin = function() {
            return this.win
        }
        ;
        f.getAmpDoc = function() {
            return this.element.getAmpDoc()
        }
        ;
        f.getVsync = function() {
            return hd(this.win)
        }
        ;
        f.getLayoutWidth = function() {
            return this.layoutWidth_
        }
        ;
        f.getConsentPolicy = function() {
            var a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        }
        ;
        f.isLayoutSupported = function(a) {
            return "nodisplay" == a
        }
        ;
        f.isAlwaysFixed = function() {
            return !1
        }
        ;
        f.isInViewport = function() {
            return this.inViewport_
        }
        ;
        f.upgradeCallback = function() {
            return null
        }
        ;
        f.createdCallback = function() {}
        ;
        f.firstAttachedCallback = function() {}
        ;
        f.buildCallback = function() {}
        ;
        f.preconnectCallback = function() {}
        ;
        f.detachedCallback = function() {}
        ;
        f.setAsOwner = function(a) {
            this.element.getResources().setOwner(a, this.element)
        }
        ;
        f.prerenderAllowed = function() {
            return !1
        }
        ;
        f.createPlaceholderCallback = function() {
            return null
        }
        ;
        f.renderOutsideViewport = function() {
            return "inabox" == t(this.win).runtime && R(this.win, "inabox-rov") ? !0 : 3
        }
        ;
        f.idleRenderOutsideViewport = function() {
            return !1
        }
        ;
        f.isRelayoutNeeded = function() {
            return !1
        }
        ;
        f.layoutCallback = function() {
            return Promise.resolve()
        }
        ;
        f.firstLayoutCompleted = function() {
            this.togglePlaceholder(!1)
        }
        ;
        f.viewportCallback = function() {}
        ;
        f.pauseCallback = function() {}
        ;
        f.resumeCallback = function() {}
        ;
        f.unlayoutCallback = function() {
            return !1
        }
        ;
        f.unlayoutOnPause = function() {
            return !1
        }
        ;
        f.reconstructWhenReparented = function() {
            return !0
        }
        ;
        f.activate = function() {}
        ;
        f.activationTrust = function() {
            return 100
        }
        ;
        f.loadPromise = function(a) {
            return ee(a)
        }
        ;
        function vh(a) {
            a.actionMap_ || (a.actionMap_ = a.win.Object.create(null))
        }
        f.registerAction = function(a, b, c) {
            c = void 0 === c ? 100 : c;
            vh(this);
            this.actionMap_[a] = {
                handler: b,
                minTrust: c
            }
        }
        ;
        f.executeAction = function(a) {
            if ("activate" == a.method) {
                if (a.satisfiesTrust(this.activationTrust()))
                    return this.activate(a)
            } else {
                vh(this);
                var b = this.actionMap_[a.method];
                x().assert(b, "Method not found: " + a.method + " in %s", this);
                var c = b.handler;
                if (a.satisfiesTrust(b.minTrust))
                    return c(a)
            }
        }
        ;
        f.getMaxDpr = function() {
            return this.element.getResources().getMaxDpr()
        }
        ;
        f.getDpr = function() {
            return this.element.getResources().getDpr()
        }
        ;
        f.propagateAttributes = function(a, b, c) {
            a = ja(a) ? a : [a];
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                this.element.hasAttribute(e) ? b.setAttribute(e, this.element.getAttribute(e)) : c && b.removeAttribute(e)
            }
        }
        ;
        f.forwardEvents = function(a, b) {
            var c = this
              , d = (ja(a) ? a : [a]).map(function(a) {
                return be(b, a, function(b) {
                    c.element.dispatchCustomEvent(a, b.data || {})
                })
            });
            return function() {
                return d.forEach(function(a) {
                    return a()
                })
            }
        }
        ;
        f.toggleLayoutDisplay = function(a) {
            this.element.toggleLayoutDisplay(a)
        }
        ;
        f.getPlaceholder = function() {
            return this.element.getPlaceholder()
        }
        ;
        f.togglePlaceholder = function(a) {
            this.element.togglePlaceholder(a)
        }
        ;
        f.getFallback = function() {
            return this.element.getFallback()
        }
        ;
        f.toggleFallback = function(a) {
            this.element.toggleFallback(a)
        }
        ;
        f.toggleLoading = function(a) {
            this.element.toggleLoading(a, {
                force: !0
            })
        }
        ;
        f.isLoadingReused = function() {
            return !1
        }
        ;
        f.getOverflowElement = function() {
            return this.element.getOverflowElement()
        }
        ;
        f.renderStarted = function() {
            this.element.renderStarted()
        }
        ;
        f.getRealChildNodes = function() {
            return this.element.getRealChildNodes()
        }
        ;
        f.getRealChildren = function() {
            return this.element.getRealChildren()
        }
        ;
        f.applyFillContent = function(a, b) {
            a.classList.add("i-amphtml-fill-content");
            b && a.classList.add("i-amphtml-replaced-content")
        }
        ;
        f.getViewport = function() {
            return id(this.getAmpDoc())
        }
        ;
        f.getIntersectionElementLayoutBox = function() {
            return this.getLayoutBox()
        }
        ;
        f.scheduleLayout = function(a) {
            this.element.getResources().scheduleLayout(this.element, a)
        }
        ;
        f.schedulePause = function(a) {
            this.element.getResources().schedulePause(this.element, a)
        }
        ;
        f.scheduleResume = function(a) {
            this.element.getResources().scheduleResume(this.element, a)
        }
        ;
        f.schedulePreload = function(a) {
            this.element.getResources().schedulePreload(this.element, a)
        }
        ;
        f.scheduleUnlayout = function(a) {
            this.element.getResources().scheduleUnlayout(this.element, a)
        }
        ;
        f.updateInViewport = function(a, b) {
            this.element.getResources().updateInViewport(this.element, a, b)
        }
        ;
        f.changeHeight = function(a) {
            this.element.getResources().changeSize(this.element, a, void 0)
        }
        ;
        f.collapse = function() {
            this.element.getResources().collapseElement(this.element)
        }
        ;
        f.attemptCollapse = function() {
            return this.element.getResources().attemptCollapse(this.element)
        }
        ;
        f.attemptChangeHeight = function(a) {
            return this.element.getResources().attemptChangeSize(this.element, a, void 0)
        }
        ;
        f.attemptChangeSize = function(a, b) {
            return this.element.getResources().attemptChangeSize(this.element, a, b)
        }
        ;
        f.measureElement = function(a) {
            return this.element.getResources().measureElement(a)
        }
        ;
        f.mutateElement = function(a, b) {
            return this.measureMutateElement(null, a, b)
        }
        ;
        f.measureMutateElement = function(a, b, c) {
            return this.element.getResources().measureMutateElement(c || this.element, a, b)
        }
        ;
        f.collapsedCallback = function() {}
        ;
        f.expand = function() {
            this.element.getResources().expandElement(this.element)
        }
        ;
        f.expandedCallback = function() {}
        ;
        f.mutatedAttributesCallback = function() {}
        ;
        f.onLayoutMeasure = function() {}
        ;
        f.user = function() {
            return x(this.element)
        }
        ;
        f.declareLayer = function(a) {
            R(this.win, "layers");
            a && this.element.contains(a);
            return this.element.getLayers().declareLayer(a || this.element)
        }
        ;
        var wh = [];
        function xh(a) {
            uh.call(this, a);
            wh.push(this);
            Uc.push(a.nodeName.toLowerCase())
        }
        aa(xh, uh);
        xh.prototype.getLayoutPriority = function() {
            return 0
        }
        ;
        xh.prototype.isLayoutSupported = function() {
            return !0
        }
        ;
        xh.prototype.reconstructWhenReparented = function() {
            return !1
        }
        ;
        var yh = {
            0: "cld",
            2: "adld"
        };
        function zh(a, b) {
            this.w = a;
            this.xc = dc(a);
            this.Zb = this.Yb = null;
            this.Ne = !1;
            this.Ed = yh[b]
        }
        zh.prototype.enterViewport = function() {
            this.Ed && !this.Yb && (this.Yb = this.w.Date.now(),
            Ah(this))
        }
        ;
        zh.prototype.startLayout = function() {
            this.Ed && !this.Zb && (this.Zb = this.w.Date.now(),
            Ah(this))
        }
        ;
        function Ah(a) {
            if (a.xc && a.xc.isPerformanceTrackingOn() && !a.Ne && a.Yb && a.Zb) {
                var b = a.w.Math.max(a.Zb - a.Yb, 0);
                a.xc.tickDelta(a.Ed, b);
                a.xc.throttledFlush();
                a.Ne = !0
            }
        }
        ;function Bh(a, b, c) {
            var d = this;
            b.__AMP__RESOURCE = this;
            this.od = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.o = c;
            this.Ig = b.hasAttribute("placeholder");
            this.sb = !1;
            this.gb = void 0;
            this.D = b.isBuilt() ? 1 : 0;
            this.Wd = -1;
            this.ba = 0;
            this.gf = null;
            this.ec = !1;
            this.oa = X(-1E4, -1E4, 0, 0);
            this.sd = null;
            this.zd = !1;
            this.$a = this.Cc = this.Bc = null;
            this.Vd = void 0;
            this.jf = !1;
            this.jc = null;
            this.Mg = new Promise(function(a) {
                d.jc = a
            }
            );
            this.J = R(this.hostWin, "layers")
        }
        function Y(a) {
            return a.__AMP__RESOURCE
        }
        f = Bh.prototype;
        f.getId = function() {
            return this.od
        }
        ;
        f.updateOwner = function(a) {
            this.gb = a
        }
        ;
        f.getOwner = function() {
            if (void 0 === this.gb) {
                for (var a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) {
                        this.gb = a.__AMP__OWNER;
                        break
                    }
                void 0 === this.gb && (this.gb = null)
            }
            return this.gb
        }
        ;
        f.hasOwner = function() {
            return !!this.getOwner()
        }
        ;
        f.getLayoutPriority = function() {
            return -1 != this.Wd ? this.Wd : this.element.getLayoutPriority()
        }
        ;
        f.updateLayoutPriority = function(a) {
            this.Wd = a
        }
        ;
        f.getState = function() {
            return this.D
        }
        ;
        f.isBuilt = function() {
            return this.element.isBuilt()
        }
        ;
        f.isBuilding = function() {
            return this.sb
        }
        ;
        f.whenBuilt = function() {
            return this.element.signals().whenSignal("res-built")
        }
        ;
        f.build = function() {
            var a = this;
            if (this.sb || !this.element.isUpgraded() || !this.o.grantBuildPermission())
                return null;
            this.sb = !0;
            return this.element.build().then(function() {
                a.sb = !1;
                a.hasBeenMeasured() ? (a.D = 2,
                a.element.updateLayoutBox(a.getLayoutBox())) : a.D = 1;
                a.element.signals().signal("res-built");
                a.element.dispatchCustomEvent("amp:built")
            }, function(b) {
                le(b) || B().error("Resource", "failed to build:", a.debugid, b);
                a.sb = !1;
                a.element.signals().rejectSignal("res-built", b);
                throw b;
            })
        }
        ;
        f.applySizesAndMediaQuery = function() {
            this.element.applySizesAndMediaQuery()
        }
        ;
        f.changeSize = function(a, b, c) {
            this.element.changeSize(a, b, c);
            this.requestMeasure()
        }
        ;
        f.overflowCallback = function(a, b, c, d) {
            a && (this.Vd = {
                height: b,
                width: c,
                margins: d
            });
            this.element.overflowCallback(a, b, c, d)
        }
        ;
        f.resetPendingChangeSize = function() {
            this.Vd = void 0
        }
        ;
        f.getPendingChangeSize = function() {
            return this.Vd
        }
        ;
        f.getUpgradeDelayMs = function() {
            return this.element.getUpgradeDelayMs()
        }
        ;
        f.measure = function() {
            if (!(this.Ig && this.element.parentElement && Ja(this.element.parentElement.tagName, "AMP-")) || "__AMP__RESOURCE"in this.element.parentElement) {
                this.zd = !1;
                var a = this.getPageLayoutBox();
                if (this.J) {
                    var b = this.element;
                    b.getLayers().remeasure(b, !0)
                } else {
                    var b = this.o.getViewport()
                      , c = this.o.getViewport().getLayoutRect(this.element);
                    this.oa = c;
                    var d = !1;
                    if (b.supportsPositionFixed() && this.isDisplayed())
                        for (var e = this.o.win, g = e.document.body, h = this.element; h && h != g; h = h.offsetParent) {
                            if (h.isAlwaysFixed && h.isAlwaysFixed()) {
                                d = !0;
                                break
                            }
                            if (b.isDeclaredFixed(h) && "fixed" == Nd(e, h).position) {
                                d = !0;
                                break
                            }
                        }
                    if (this.ec = d)
                        this.oa = $e(c, -b.getScrollLeft(), -b.getScrollTop())
                }
                var k = this.getPageLayoutBox();
                1 != this.D && a.top == k.top && a.width == k.width && a.height == k.height || !this.element.isUpgraded() || 0 == this.D || 1 != this.D && !this.element.isRelayoutNeeded() || (this.D = 2);
                this.hasBeenMeasured() || (this.sd = k);
                this.element.updateLayoutBox(k)
            }
        }
        ;
        f.completeCollapse = function() {
            Md(this.element, !1);
            this.oa = this.J ? X(0, 0, 0, 0) : X(this.oa.left, this.oa.top, 0, 0);
            this.ec = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var a = this.getOwner();
            a && a.collapsedCallback(this.element)
        }
        ;
        f.completeExpand = function() {
            Md(this.element, !0);
            this.element.removeAttribute("hidden");
            this.requestMeasure()
        }
        ;
        f.isMeasureRequested = function() {
            return this.zd
        }
        ;
        f.hasBeenMeasured = function() {
            return !!this.sd
        }
        ;
        f.requestMeasure = function() {
            this.zd = !0
        }
        ;
        f.getLayoutBox = function() {
            if (this.J) {
                var a = this.element
                  , b = a.getLayers()
                  , c = b.getScrolledPosition(a)
                  , a = b.getSize(a);
                return X(c.left, c.top, a.width, a.height)
            }
            if (!this.ec)
                return this.oa;
            c = this.o.getViewport();
            return $e(this.oa, c.getScrollLeft(), c.getScrollTop())
        }
        ;
        f.getPageLayoutBox = function() {
            if (this.J) {
                var a = this.element
                  , b = a.getLayers()
                  , c = b.getOffsetPosition(a)
                  , a = b.getSize(a);
                return X(c.left, c.top, a.width, a.height)
            }
            return this.oa
        }
        ;
        f.getInitialLayoutBox = function() {
            return this.sd || this.oa
        }
        ;
        f.isDisplayed = function() {
            var a = "fluid" == this.element.getLayout()
              , b = this.getLayoutBox()
              , c = 0 < b.height && 0 < b.width;
            return (a || c) && !!this.element.ownerDocument && !!this.element.ownerDocument.defaultView
        }
        ;
        f.isFixed = function() {
            return this.ec
        }
        ;
        f.overlaps = function(a) {
            var b = this.getLayoutBox();
            return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right
        }
        ;
        f.prerenderAllowed = function() {
            return this.element.prerenderAllowed()
        }
        ;
        f.whenWithinRenderOutsideViewport = function() {
            var a = this;
            return this.isLayoutPending() ? this.Bc ? this.Bc : this.Bc = new Promise(function(b) {
                a.Cc = b
            }
            ) : Promise.resolve()
        }
        ;
        function Ch(a) {
            a.Cc && (a.Cc(),
            a.Bc = null,
            a.Cc = null)
        }
        f.withinViewportMultiplier = function(a) {
            if (!0 === a || !1 === a)
                return a;
            a = Math.max(a, 0);
            if (this.J) {
                var b = this.element;
                return b.getLayers().iterateAncestry(b, this.Kg)
            }
            var c = this.o.getViewport().getRect()
              , d = this.getLayoutBox()
              , e = this.o.getScrollDirection()
              , g = 1
              , h = 0;
            if (c.right < d.left || c.left > d.right)
                return !1;
            if (c.bottom < d.top)
                h = d.top - c.bottom,
                -1 == e && (g = 2);
            else if (c.top > d.bottom)
                h = c.top - d.bottom,
                1 == e && (g = 2);
            else
                return !0;
            return h < c.height * a / g
        }
        ;
        f.Kg = function(a, b, c) {
            var d = 1 + c / 10
              , e = b.isActiveUnsafe() ? 1 : 2;
            b = b.getHorizontalViewportsFromParent() + b.getVerticalViewportsFromParent();
            return a + e * d * b
        }
        ;
        f.renderOutsideViewport = function() {
            return this.hasOwner() || this.withinViewportMultiplier(this.element.renderOutsideViewport()) ? (Ch(this),
            !0) : !1
        }
        ;
        f.idleRenderOutsideViewport = function() {
            return this.withinViewportMultiplier(this.element.idleRenderOutsideViewport())
        }
        ;
        f.layoutScheduled = function(a) {
            this.D = 3;
            this.element.layoutScheduleTime = a
        }
        ;
        f.layoutCanceled = function() {
            this.D = this.hasBeenMeasured() ? 2 : 1
        }
        ;
        f.startLayout = function() {
            var a = this;
            if (this.$a)
                return this.$a;
            if (4 == this.D)
                return Promise.resolve();
            if (5 == this.D)
                return Promise.reject(this.gf);
            this.isDisplayed();
            if (0 < this.ba && !this.element.isRelayoutNeeded())
                return this.D = 4,
                Promise.resolve();
            this.ba++;
            this.D = 3;
            var b;
            try {
                b = this.element.layoutCallback()
            } catch (c) {
                return Promise.reject(c)
            }
            return this.$a = b.then(function() {
                return Dh(a, !0)
            }, function(b) {
                return Dh(a, !1, b)
            })
        }
        ;
        function Dh(a, b, c) {
            a.jc && (a.jc(),
            a.jc = null);
            a.$a = null;
            a.jf = !0;
            a.D = b ? 4 : 5;
            a.gf = c;
            if (!b)
                return Promise.reject(c)
        }
        f.isLayoutPending = function() {
            return 4 != this.D && 5 != this.D
        }
        ;
        f.loadedOnce = function() {
            return this.Mg
        }
        ;
        f.hasLoadedOnce = function() {
            return this.jf
        }
        ;
        f.isInViewport = function() {
            return this.element.isInViewport()
        }
        ;
        f.setInViewport = function(a) {
            this.element.viewportCallback(a)
        }
        ;
        f.unlayout = function() {
            0 != this.D && 1 != this.D && (this.setInViewport(!1),
            this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0),
            this.D = 1,
            this.ba = 0,
            this.$a = null))
        }
        ;
        f.getTaskId = function(a) {
            return this.debugid + "#" + a
        }
        ;
        f.pause = function() {
            this.element.pauseCallback();
            this.element.unlayoutOnPause() && this.unlayout()
        }
        ;
        f.pauseOnRemove = function() {
            this.element.pauseCallback()
        }
        ;
        f.resume = function() {
            this.element.resumeCallback()
        }
        ;
        f.unload = function() {
            this.pause();
            this.unlayout()
        }
        ;
        f.disconnect = function() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnectedCallback()
        }
        ;
        var Eh = ['<div class="i-amphtml-loader">\n        <div class="i-amphtml-loader-dot"></div>\n        <div class="i-amphtml-loader-dot"></div>\n        <div class="i-amphtml-loader-dot"></div>\n      </div>'];
        Eh.raw = ['<div class="i-amphtml-loader">\n        <div class="i-amphtml-loader-dot"></div>\n        <div class="i-amphtml-loader-dot"></div>\n        <div class="i-amphtml-loader-dot"></div>\n      </div>'];
        var Fh = ['<div class="i-amphtml-loader-line">\n          <div class="i-amphtml-loader-moving-line"></div>\n        </div>'];
        Fh.raw = ['<div class="i-amphtml-loader-line">\n          <div class="i-amphtml-loader-moving-line"></div>\n        </div>'];
        var Gh = {
            "AMP-AD": !0
        };
        function Hh(a, b) {
            var c = a.split(",");
            x().assert(0 < c.length, "sizes has to have at least one size");
            var d = [];
            c.forEach(function(a) {
                a = a.replace(/\s+/g, " ").trim();
                if (0 != a.length) {
                    var c, e, k = a.charAt(a.length - 1), l, m = !1;
                    if (")" == k) {
                        var m = !0
                          , p = 1;
                        for (l = a.length - 2; 0 <= l; l--) {
                            var q = a.charAt(l);
                            "(" == q ? p-- : ")" == q && p++;
                            if (0 == p)
                                break
                        }
                        var u = l - 1;
                        if (0 < l)
                            for (l--; 0 <= l && (q = a.charAt(l),
                            "%" == q || "-" == q || "_" == q || "a" <= q && "z" >= q || "A" <= q && "Z" >= q || "0" <= q && "9" >= q); l--)
                                ;
                        x().assert(l < u, 'Invalid CSS function in "%s"', a)
                    } else
                        for (l = a.length - 2; 0 <= l && (q = a.charAt(l),
                        "%" == q || "." == q || "a" <= q && "z" >= q || "A" <= q && "Z" >= q || "0" <= q && "9" >= q); l--)
                            ;
                    0 <= l ? (c = a.substring(0, l + 1).trim(),
                    e = a.substring(l + 1).trim()) : (e = a,
                    c = void 0);
                    d.push({
                        mediaQuery: c,
                        size: m ? e : b ? Ie(e) : He(e)
                    })
                }
            });
            return new Ih(d)
        }
        function Ih(a) {
            x().assert(0 < a.length, "SizeList must have at least one option");
            this.lh = a;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                b < a.length - 1 ? x().assert(c.mediaQuery, "All options except for the last must have a media condition") : x().assert(!c.mediaQuery, "The last option must not have a media condition")
            }
        }
        Ih.prototype.select = function(a) {
            for (var b = this.lh, c = b.length - 1, d = 0; d < c; d++) {
                var e = b[d];
                if (a.matchMedia(e.mediaQuery).matches)
                    return e.size
            }
            return b[c].size
        }
        ;
        var Jh = ['\n            <div class="i-amphtml-loading-container i-amphtml-fill-content\n              amp-hidden"></div>'];
        Jh.raw = ['\n            <div class="i-amphtml-loading-container i-amphtml-fill-content\n              amp-hidden"></div>'];
        var Kh;
        function Lh(a, b) {
            function c(a) {
                return d.call(this, a) || this
            }
            var d = Mh(a);
            aa(c, d);
            c.prototype.elementName = function() {
                return b
            }
            ;
            return c
        }
        function Mh(a) {
            function b(a) {
                a = c.call(this, a) || this;
                a.createdCallback();
                return a
            }
            if (a.BaseCustomElementClass)
                return a.BaseCustomElementClass;
            var c = a.HTMLElement;
            aa(b, c);
            b.prototype.createdCallback = function() {
                this.bc = this.Ge = !1;
                this.$c = null;
                this.readyState = "loading";
                this.everAttached = !1;
                this.Za = this.o = this.G = null;
                this.layout_ = "nodisplay";
                this.layoutWidth_ = -1;
                this.ba = 0;
                this.Cb = this.Xa = this.xd = !1;
                this.Jd = this.Hd = this.sizerElement = this.$b = this.Gc = this.mc = void 0;
                this.Id = this.Ja = null;
                this.da = void 0;
                var b = a.ampExtendedElements && a.ampExtendedElements[this.elementName()];
                this.implementation_ = new b(this);
                this.ib = 1;
                this.Tf = 0;
                this.ub = this.Ea = void 0;
                this.O = new Re;
                var c = dc(a);
                this.uf = c && c.isPerformanceTrackingOn();
                this.Gd = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this),
                delete this.__AMP_UPG_RES,
                delete this.__AMP_UPG_PRM)
            }
            ;
            b.prototype.elementName = function() {}
            ;
            b.prototype.signals = function() {
                return this.O
            }
            ;
            b.prototype.getAmpDoc = function() {
                return this.G
            }
            ;
            b.prototype.getResources = function() {
                return this.o
            }
            ;
            b.prototype.getLayers = function() {
                return this.Za
            }
            ;
            b.prototype.isUpgraded = function() {
                return 2 == this.ib
            }
            ;
            b.prototype.upgrade = function(a) {
                this.ub || 1 != this.ib || (this.implementation_ = new a(this),
                this.everAttached && this.Qf())
            }
            ;
            b.prototype.getUpgradeDelayMs = function() {
                return this.Tf
            }
            ;
            b.prototype.fd = function(b, c) {
                this.Tf = a.Date.now() - c;
                this.ib = 2;
                this.implementation_ = b;
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.implementation_.createdCallback();
                this.bg();
                this.implementation_.layout_ = this.layout_;
                this.implementation_.layoutWidth_ = this.layoutWidth_;
                this.implementation_.firstAttachedCallback();
                this.Wa();
                this.getResources().upgraded(this)
            }
            ;
            b.prototype.bg = function() {
                if ("nodisplay" != this.layout_ && !this.implementation_.isLayoutSupported(this.layout_)) {
                    var a = "Layout not supported: " + this.layout_;
                    this.getAttribute("layout") || (a += ". The element did not specify a layout attribute. Check https://www.ampproject.org/docs/guides/responsive/control_layout and the respective element documentation for details.");
                    throw x().createError(a);
                }
            }
            ;
            b.prototype.isBuilt = function() {
                return this.Ge
            }
            ;
            b.prototype.whenBuilt = function() {
                return this.O.whenSignal("built")
            }
            ;
            b.prototype.getLayoutPriority = function() {
                this.isUpgraded();
                return this.implementation_.getLayoutPriority()
            }
            ;
            b.prototype.build = function() {
                var a = this;
                this.isUpgraded();
                return this.$c ? this.$c : this.$c = (new Promise(function(b, c) {
                    var d = a.implementation_.getConsentPolicy();
                    d ? Qe(a.getAmpDoc(), d).then(function(d) {
                        2 == d || 0 == d ? c(Error("BLOCK_BY_CONSENT")) : b(a.implementation_.buildCallback())
                    }) : b(a.implementation_.buildCallback())
                }
                )).then(function() {
                    a.preconnect(!1);
                    a.Ge = !0;
                    a.classList.remove("i-amphtml-notbuilt");
                    a.classList.remove("amp-notbuilt");
                    a.O.signal("built");
                    a.Xa && a.Rf(!0);
                    a.Ea && O(a.ownerDocument.defaultView).delay(a.rg.bind(a), 1);
                    if (!a.getPlaceholder()) {
                        var b = a.createPlaceholder();
                        b && a.appendChild(b)
                    }
                }, function(b) {
                    a.O.rejectSignal("built", b);
                    le(b) || je(b, a);
                    throw b;
                })
            }
            ;
            b.prototype.preconnect = function(a) {
                var b = this;
                a ? this.implementation_.preconnectCallback(a) : O(this.ownerDocument.defaultView).delay(function() {
                    b.implementation_.preconnectCallback(a)
                }, 1)
            }
            ;
            b.prototype.isAlwaysFixed = function() {
                return this.implementation_.isAlwaysFixed()
            }
            ;
            b.prototype.updateLayoutBox = function(a) {
                var b = this;
                this.layoutWidth_ = a.width;
                this.isUpgraded() && (this.implementation_.layoutWidth_ = this.layoutWidth_);
                if (this.isBuilt())
                    try {
                        this.implementation_.onLayoutMeasure()
                    } catch (g) {
                        je(g, this)
                    }
                this.fc() && (this.Xa ? this.toggleLoading(!0) : 1E3 > a.top && 0 <= a.top && this.pc(function() {
                    return b.xf()
                }))
            }
            ;
            b.prototype.We = function() {
                void 0 === this.sizerElement && "responsive" === this.layout_ && (this.sizerElement = this.querySelector("i-amphtml-sizer"));
                return this.sizerElement || null
            }
            ;
            b.prototype.applySizesAndMediaQuery = function() {
                void 0 === this.mc && (this.mc = this.getAttribute("media") || null);
                if (this.mc) {
                    var a = this.ownerDocument.defaultView;
                    this.classList.toggle("i-amphtml-hidden-by-media-query", !a.matchMedia(this.mc).matches)
                }
                if (void 0 === this.Gc) {
                    var b = this.getAttribute("sizes");
                    this.Gc = b ? Hh(b) : null
                }
                this.Gc && S(this, "width", this.Gc.select(this.ownerDocument.defaultView));
                void 0 === this.$b && "responsive" === this.layout_ && (this.$b = (b = this.getAttribute("heights")) ? Hh(b, !0) : null);
                this.$b && (b = this.We()) && S(b, "paddingTop", this.$b.select(this.ownerDocument.defaultView))
            }
            ;
            b.prototype.changeSize = function(a, b, c) {
                var d = this.We();
                d && (this.sizerElement = null,
                S(d, "paddingTop", "0"),
                this.pc(function() {
                    Fc(d)
                }));
                void 0 !== a && S(this, "height", a, "px");
                void 0 !== b && S(this, "width", b, "px");
                c && (null != c.top && S(this, "marginTop", c.top, "px"),
                null != c.right && S(this, "marginRight", c.right, "px"),
                null != c.bottom && S(this, "marginBottom", c.bottom, "px"),
                null != c.left && S(this, "marginLeft", c.left, "px"));
                this.Cg() && this.kh()
            }
            ;
            b.prototype.connectedCallback = function() {
                if (!this.bc && Gc(this) && (this.bc = !0,
                this.everAttached || (this.classList.add("i-amphtml-element"),
                this.classList.add("i-amphtml-notbuilt"),
                this.classList.add("amp-notbuilt")),
                void 0 === Kh && (Kh = "content"in self.document.createElement("template")),
                Kh || void 0 !== this.ub || (this.ub = !!Kc(this, "template")),
                !this.ub)) {
                    if (!this.G) {
                        var a = this.ownerDocument.defaultView
                          , b = bd(a).getAmpDoc(this);
                        this.G = b;
                        var c = this.tagName.toLowerCase();
                        this.implementation_ instanceof xh && !b.declaresExtension(c) && dd(a).installExtensionForDoc(b, c)
                    }
                    this.o || (this.o = gd(this.G));
                    R(this.G.win, "layers") && (this.Za || (this.Za = J(this.G, "layers")),
                    this.getLayers().add(this));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var h = this.reconstructWhenReparented();
                        h && this.Df();
                        this.isUpgraded() && (h && this.getResources().upgraded(this),
                        this.Wa())
                    } else {
                        this.everAttached = !0;
                        try {
                            var k;
                            var l = this.getAttribute("i-amphtml-layout");
                            if (l) {
                                var m = Ee(l);
                                "responsive" != m && "intrinsic" != m || !this.firstElementChild ? "nodisplay" == m && Le(this) : this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0;
                                k = m
                            } else {
                                var p = this.getAttribute("layout")
                                  , q = this.getAttribute("width")
                                  , u = this.getAttribute("height")
                                  , r = this.getAttribute("sizes")
                                  , H = this.getAttribute("heights")
                                  , C = p ? Ee(p) : null;
                                x().assert(void 0 !== C, "Unknown layout: %s", p);
                                var E = q && "auto" != q ? Ge(q) : q;
                                x().assert(void 0 !== E, "Invalid width value: %s", q);
                                var z = u && "fluid" != u ? Ge(u) : u;
                                x().assert(void 0 !== z, "Invalid height value: %s", u);
                                var A, v, w, L;
                                if (!(L = C && "fixed" != C && "fixed-height" != C || E && z)) {
                                    var T = this.tagName
                                      , T = T.toUpperCase();
                                    L = void 0 === Ce[T]
                                }
                                if (L)
                                    A = E,
                                    v = z;
                                else {
                                    var P = this.tagName.toUpperCase();
                                    if (!Ce[P]) {
                                        var y = this.ownerDocument
                                          , U = P.replace(/^AMP\-/, "")
                                          , za = y.createElement(U);
                                        za.controls = !0;
                                        Ld(za, {
                                            position: "absolute",
                                            visibility: "hidden"
                                        });
                                        y.body.appendChild(za);
                                        Ce[P] = {
                                            width: (za.offsetWidth || 1) + "px",
                                            height: (za.offsetHeight || 1) + "px"
                                        };
                                        y.body.removeChild(za)
                                    }
                                    var ya = Ce[P];
                                    A = E || "fixed-height" == C ? E : ya.width;
                                    v = z || ya.height
                                }
                                w = C ? C : A || v ? "fluid" == v ? "fluid" : !v || A && "auto" != A ? v && A && (r || H) ? "responsive" : "fixed" : "fixed-height" : "container";
                                "fixed" != w && "fixed-height" != w && "responsive" != w && "intrinsic" != w || x().assert(v, "Expected height to be available: %s", u);
                                "fixed-height" == w && x().assert(!A || "auto" == A, 'Expected width to be either absent or equal "auto" for fixed-height layout: %s', q);
                                "fixed" != w && "responsive" != w && "intrinsic" != w || x().assert(A && "auto" != A, 'Expected width to be available and not equal to "auto": %s', q);
                                "responsive" == w || "intrinsic" == w ? x().assert(Je(A) == Je(v), "Length units should be the same for width and height: %s, %s", q, u) : x().assert(null === H, 'Unexpected "heights" attribute for none-responsive layout');
                                this.classList.add("i-amphtml-layout-" + w);
                                Fe(w) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == w)
                                    Le(this);
                                else if ("fixed" == w)
                                    Ld(this, {
                                        width: A,
                                        height: v
                                    });
                                else if ("fixed-height" == w)
                                    S(this, "height", v);
                                else if ("responsive" == w) {
                                    var Z = this.ownerDocument.createElement("i-amphtml-sizer");
                                    Ld(Z, {
                                        display: "block",
                                        paddingTop: Ke(v) / Ke(A) * 100 + "%"
                                    });
                                    this.insertBefore(Z, this.firstChild);
                                    this.sizerElement = Z
                                } else if ("intrinsic" == w) {
                                    var ea = ye(this)(Ae)
                                      , da = ea.firstElementChild;
                                    da.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="' + v + '" width="' + A + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
                                    this.insertBefore(ea, this.firstChild);
                                    this.sizerElement = da
                                } else
                                    "fill" != w && "container" != w && ("flex-item" == w ? (A && S(this, "width", A),
                                    v && S(this, "height", v)) : "fluid" == w && (this.classList.add("i-amphtml-layout-awaiting-size"),
                                    A && S(this, "width", A),
                                    S(this, "height", 0)));
                                k = w
                            }
                            this.layout_ = k
                        } catch (ta) {
                            je(ta, this)
                        }
                        this.implementation_ instanceof xh || this.Qf();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"),
                        this.classList.add("i-amphtml-unresolved"),
                        this.Wa())
                    }
                }
            }
            ;
            b.prototype.Cg = function() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            }
            ;
            b.prototype.kh = function() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            }
            ;
            b.prototype.attachedCallback = function() {
                this.connectedCallback()
            }
            ;
            b.prototype.Qf = function() {
                var b = this
                  , c = this.implementation_;
                if (1 == this.ib) {
                    this.ib = 4;
                    var g = a.Date.now()
                      , h = c.upgradeCallback();
                    h ? "function" == typeof h.then ? h.then(function(a) {
                        b.fd(a || c, g)
                    }).catch(function(a) {
                        b.ib = 3;
                        wa(a)
                    }) : this.fd(h, g) : this.fd(c, g)
                }
            }
            ;
            b.prototype.disconnectedCallback = function() {
                this.ub || !this.bc || Gc(this) || (this.bc = !1,
                this.getResources().remove(this),
                this.implementation_.detachedCallback())
            }
            ;
            b.prototype.detachedCallback = function() {
                this.disconnectedCallback()
            }
            ;
            b.prototype.dispatchCustomEvent = function(a, b) {
                b = b || {};
                var c = this.ownerDocument.createEvent("Event");
                c.data = b;
                c.initEvent(a, !0, !0);
                this.dispatchEvent(c)
            }
            ;
            b.prototype.Wa = function() {}
            ;
            b.prototype.prerenderAllowed = function() {
                return this.implementation_.prerenderAllowed()
            }
            ;
            b.prototype.createPlaceholder = function() {
                return this.implementation_.createPlaceholderCallback()
            }
            ;
            b.prototype.renderOutsideViewport = function() {
                return this.implementation_.renderOutsideViewport()
            }
            ;
            b.prototype.idleRenderOutsideViewport = function() {
                return this.implementation_.idleRenderOutsideViewport()
            }
            ;
            b.prototype.getLayoutBox = function() {
                return this.getResources().getResourceForElement(this).getLayoutBox()
            }
            ;
            b.prototype.getPageLayoutBox = function() {
                return this.getResources().getResourceForElement(this).getPageLayoutBox()
            }
            ;
            b.prototype.getOwner = function() {
                return this.getResources().getResourceForElement(this).getOwner()
            }
            ;
            b.prototype.getIntersectionChangeEntry = function() {
                var a = this.implementation_.getIntersectionElementLayoutBox()
                  , b = this.getResources().getResourceForElement(this).getOwner()
                  , c = this.implementation_.getViewport().getRect()
                  , h = b && b.getLayoutBox()
                  , k = Ye(a, h, c) || X(0, 0, 0, 0)
                  , b = k.width * k.height / (a.width * a.height)
                  , l = c;
                c && (k = $e(k, -c.left, -c.top),
                a = $e(a, -c.left, -c.top),
                l = $e(l, -c.left, -c.top));
                return {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - Zf,
                    rootBounds: l,
                    boundingClientRect: a,
                    intersectionRect: k,
                    intersectionRatio: b
                }
            }
            ;
            b.prototype.getResourceId = function() {
                return this.getResources().getResourceForElement(this).getId()
            }
            ;
            b.prototype.yg = function() {
                return this.getResources().getResourceForElement(this).getState()
            }
            ;
            b.prototype.isRelayoutNeeded = function() {
                return this.implementation_.isRelayoutNeeded()
            }
            ;
            b.prototype.getImpl = function() {
                var a = this;
                return this.whenBuilt().then(function() {
                    return a.implementation_
                })
            }
            ;
            b.prototype.getLayout = function() {
                return this.layout_
            }
            ;
            b.prototype.layoutCallback = function() {
                var a = this;
                this.isBuilt();
                this.Wa();
                var b = 0 == this.ba;
                this.O.reset("unload");
                b && this.O.signal("load-start");
                this.uf && this.Ve().startLayout();
                var c = this.implementation_.layoutCallback();
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return c.then(function() {
                    b && a.O.signal("load-end");
                    a.readyState = "complete";
                    a.ba++;
                    a.toggleLoading(!1, {
                        cleanup: !0
                    });
                    a.xd || (a.implementation_.firstLayoutCompleted(),
                    a.xd = !0,
                    a.dispatchCustomEvent("amp:load:end"))
                }, function(c) {
                    b && a.O.rejectSignal("load-end", c);
                    a.ba++;
                    a.toggleLoading(!1, {
                        cleanup: !0
                    });
                    throw c;
                })
            }
            ;
            b.prototype.isInViewport = function() {
                return this.Xa
            }
            ;
            b.prototype.viewportCallback = function(a) {
                var b = this;
                a != this.Xa && this.ownerDocument && this.ownerDocument.defaultView && (this.Xa = a,
                0 == this.ba && (a ? O(this.ownerDocument.defaultView).delay(function() {
                    b.Xa && b.ownerDocument && b.ownerDocument.defaultView && b.toggleLoading(!0)
                }, 100) : this.toggleLoading(!1)),
                this.isBuilt() && this.Rf(a))
            }
            ;
            b.prototype.Rf = function(a) {
                this.implementation_.inViewport_ = a;
                this.implementation_.viewportCallback(a);
                a && this.uf && this.Ve().enterViewport()
            }
            ;
            b.prototype.isPaused = function() {
                return this.Cb
            }
            ;
            b.prototype.pauseCallback = function() {
                this.Cb || (this.Cb = !0,
                this.viewportCallback(!1),
                this.isBuilt() && this.implementation_.pauseCallback())
            }
            ;
            b.prototype.resumeCallback = function() {
                this.Cb && (this.Cb = !1,
                this.isBuilt() && this.implementation_.resumeCallback())
            }
            ;
            b.prototype.unlayoutCallback = function() {
                if (!this.isBuilt())
                    return !1;
                this.O.signal("unload");
                var a = this.implementation_.unlayoutCallback();
                a && this.Df();
                return a
            }
            ;
            b.prototype.Df = function() {
                this.ba = 0;
                this.xd = !1;
                this.O.reset("render-start");
                this.O.reset("load-start");
                this.O.reset("load-end");
                this.O.reset("ini-load")
            }
            ;
            b.prototype.unlayoutOnPause = function() {
                return this.implementation_.unlayoutOnPause()
            }
            ;
            b.prototype.reconstructWhenReparented = function() {
                return this.implementation_.reconstructWhenReparented()
            }
            ;
            b.prototype.collapse = function() {
                this.implementation_.collapse()
            }
            ;
            b.prototype.collapsedCallback = function(a) {
                this.implementation_.collapsedCallback(a)
            }
            ;
            b.prototype.expand = function() {
                this.implementation_.expand()
            }
            ;
            b.prototype.expandedCallback = function(a) {
                this.implementation_.expandedCallback(a)
            }
            ;
            b.prototype.mutatedAttributesCallback = function(a) {
                this.implementation_.mutatedAttributesCallback(a)
            }
            ;
            b.prototype.enqueAction = function(a) {
                this.isBuilt() ? this.Re(a, !1) : (void 0 === this.Ea && (this.Ea = []),
                this.Ea.push(a))
            }
            ;
            b.prototype.rg = function() {
                var a = this;
                if (this.Ea) {
                    var b = this.Ea;
                    this.Ea = null;
                    b.forEach(function(b) {
                        a.Re(b, !0)
                    })
                }
            }
            ;
            b.prototype.Re = function(a, b) {
                try {
                    this.implementation_.executeAction(a, b)
                } catch (g) {
                    wa("Action execution failed:", g, a.target.tagName, a.method)
                }
            }
            ;
            b.prototype.getRealChildNodes = function() {
                return Nc(this, function(a) {
                    return !Nh(a)
                })
            }
            ;
            b.prototype.getRealChildren = function() {
                return Lc(this, function(a) {
                    return !Nh(a)
                })
            }
            ;
            b.prototype.toggleLayoutDisplay = function(a) {
                this.classList.toggle("i-amphtml-display", a)
            }
            ;
            b.prototype.getPlaceholder = function() {
                return Mc(this, function(a) {
                    return a.hasAttribute("placeholder") && !("placeholder"in a)
                })
            }
            ;
            b.prototype.togglePlaceholder = function(a) {
                if (a) {
                    var b = this.getPlaceholder();
                    b && b.classList.remove("amp-hidden")
                } else
                    for (var c = Rc(this, "> [placeholder]"), b = 0; b < c.length; b++)
                        "placeholder"in c[b] || c[b].classList.add("amp-hidden")
            }
            ;
            b.prototype.getFallback = function() {
                return Qc(this, "> [fallback]")
            }
            ;
            b.prototype.toggleFallback = function(a) {
                var b = this.yg();
                if (!a || 0 != b && 1 != b && 2 != b)
                    if (this.classList.toggle("amp-notsupported", a),
                    1 == a) {
                        var c = this.getFallback();
                        c && this.getResources().scheduleLayout(this, c)
                    }
            }
            ;
            b.prototype.renderStarted = function() {
                this.O.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            }
            ;
            b.prototype.fc = function() {
                if (this.Eg())
                    return !1;
                void 0 === this.Hd && (this.Hd = this.hasAttribute("noloading"));
                var a;
                (a = this.Hd) || (a = this.tagName.toUpperCase(),
                a = !("AMP-AD" == a || "AMP-EMBED" == a || De[a]));
                return a || 100 > this.layoutWidth_ || 0 < this.ba || Nh(this) || !Fe(this.layout_) ? !1 : !0
            }
            ;
            b.prototype.Eg = function() {
                return this.G && this.G.win != this.ownerDocument.defaultView || "inabox" == t().runtime
            }
            ;
            b.prototype.xf = function() {
                if (this.fc() && !this.Ja) {
                    var a = this.ownerDocument
                      , b = ye(a)(Jh)
                      , c = this.elementName()
                      , a = Gh[c.toUpperCase()] ? ye(a)(Fh) : ye(a)(Eh);
                    b.appendChild(a);
                    this.appendChild(b);
                    this.Ja = b;
                    this.Id = a
                }
            }
            ;
            b.prototype.toggleLoading = function(a, b) {
                var c = this
                  , d = b && b.cleanup
                  , e = b && b.force;
                if (!a || this.implementation_.isLoadingReused() || !(0 < this.ba || this.O.get("render-start")))
                    if ((this.Jd = a) || this.Ja)
                        !a || e || this.fc() ? this.pc(function() {
                            var a = c.Jd;
                            !a || e || c.fc() || (a = !1);
                            a && c.xf();
                            if (c.Ja && (c.Ja.classList.toggle("amp-hidden", !a),
                            c.Id.classList.toggle("amp-active", a),
                            !a && d && !c.implementation_.isLoadingReused())) {
                                var b = c.Ja;
                                c.Ja = null;
                                c.Id = null;
                                c.pc(function() {
                                    Fc(b)
                                })
                            }
                        }) : this.Jd = !1
            }
            ;
            b.prototype.Ve = function() {
                this.Gd || (this.Gd = new zh(this.ownerDocument.defaultView,this.getLayoutPriority()));
                return this.Gd
            }
            ;
            b.prototype.getOverflowElement = function() {
                void 0 === this.da && (this.da = Qc(this, "> [overflow]")) && (this.da.hasAttribute("tabindex") || this.da.setAttribute("tabindex", "0"),
                this.da.hasAttribute("role") || this.da.setAttribute("role", "button"));
                return this.da
            }
            ;
            b.prototype.overflowCallback = function(a, b, c) {
                var d = this;
                this.getOverflowElement();
                this.da ? (this.da.classList.toggle("amp-visible", a),
                this.da.onclick = a ? function() {
                    var a = d.getResources();
                    a.changeSize(d, b, c);
                    a.mutateElement(d, function() {
                        d.overflowCallback(!1, b, c)
                    })
                }
                : null) : a && x().warn("CustomElement", "Cannot resize element and overflow is not available", this)
            }
            ;
            b.prototype.pc = function(a) {
                this.o ? this.getResources().mutateElement(this, a) : a()
            }
            ;
            a.BaseCustomElementClass = b;
            return a.BaseCustomElementClass
        }
        function Nh(a) {
            var b = "string" == typeof a ? a : a.tagName;
            return b && Ja(b.toLowerCase(), "i-") || a.tagName && (a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")) ? !0 : !1
        }
        ;function Oh(a) {
            a.ampExtendedElements || (a.ampExtendedElements = {});
            return a.ampExtendedElements
        }
        function Ph(a, b, c) {
            var d = Oh(a);
            if (!d[b])
                Qh(a, b, c);
            else if (d[b] != c) {
                x().assert(d[b] == xh, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b);
                d[b] = c;
                for (var e = 0; e < wh.length; e++) {
                    var g = wh[e]
                      , h = g.element;
                    if (h.tagName.toLowerCase() == b && h.ownerDocument.defaultView == a) {
                        try {
                            h.upgrade(c)
                        } catch (k) {
                            je(k, h)
                        }
                        wh.splice(e--, 1)
                    }
                }
            }
        }
        function Rh(a) {
            for (var b = a.getHeadNode().querySelectorAll("script[custom-element]"), c = 0; c < b.length; c++) {
                var d = b[c].getAttribute("custom-element");
                a.declareExtension(d);
                Sh(a.win, d)
            }
        }
        function Sh(a, b) {
            Oh(a)[b] || Qh(a, b, xh)
        }
        function Qh(a, b, c) {
            Oh(a)[b] = c;
            var d = Lh(a, b)
              , e = "customElements"in a;
            e ? a.customElements.define(b, d) : a.document.registerElement(b, {
                prototype: d.prototype
            })
        }
        ;function Th(a, b) {
            this.element = a;
            this.win = a.ownerDocument.defaultView || b;
            this.compileCallback()
        }
        Th.prototype.compileCallback = function() {}
        ;
        Th.prototype.render = function() {
            throw Error("Not implemented");
        }
        ;
        Th.prototype.unwrap = function(a) {
            for (var b = null, c = a.firstChild; null != c; c = c.nextSibling)
                if (3 == c.nodeType) {
                    if (c.textContent.trim()) {
                        b = null;
                        break
                    }
                } else if (8 != c.nodeType)
                    if (1 == c.nodeType)
                        if (b) {
                            b = null;
                            break
                        } else
                            b = c;
                    else
                        b = null;
            return b || a
        }
        ;
        function Uh(a) {
            this.w = a;
            this.Mb = {};
            this.he = {};
            this.yh = void 0
        }
        f = Uh.prototype;
        f.renderTemplate = function(a, b) {
            return Vh(this, a).then(function(a) {
                return a.render(b)
            })
        }
        ;
        f.renderTemplateArray = function(a, b) {
            return 0 == b.length ? Promise.resolve([]) : Vh(this, a).then(function(a) {
                return b.map(function(b) {
                    return a.render(b)
                })
            })
        }
        ;
        f.findAndRenderTemplate = function(a, b, c) {
            return this.renderTemplate(Wh(a, c), b)
        }
        ;
        f.findAndRenderTemplateArray = function(a, b, c) {
            return this.renderTemplateArray(Wh(a, c), b)
        }
        ;
        f.hasTemplate = function(a, b) {
            return !!Xh(a, b)
        }
        ;
        function Wh(a, b) {
            b = Xh(a, b);
            x().assert(b, "Template not found for %s", a);
            x().assert("TEMPLATE" == b.tagName, 'Template element must be a "template" tag %s', b);
            return b
        }
        function Xh(a, b) {
            var c = a.getAttribute("template");
            return c ? Hc(a).getElementById(c) : b ? Qc(a, b) : Qc(a, "> template")
        }
        function Vh(a, b) {
            var c = b.__AMP_IMPL_;
            if (c)
                return Promise.resolve(c);
            var c = x().assert(b.getAttribute("type"), "Type must be specified: %s", b)
              , d = b.__AMP_WAIT_;
            if (d)
                return d;
            d = Yh(a, c).then(function(c) {
                var d = b.__AMP_IMPL_ = new c(b,a.w);
                delete b.__AMP_WAIT_;
                return d
            });
            return b.__AMP_WAIT_ = d
        }
        function Yh(a, b) {
            if (a.Mb[b])
                return a.Mb[b];
            var c, d = new Promise(function(a) {
                c = a
            }
            );
            a.Mb[b] = d;
            a.he[b] = c;
            return d
        }
        ;var Zh = {
            PRERENDER: "prerender",
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PAUSED: "paused",
            INACTIVE: "inactive"
        };
        var $h = ["GET", "POST"]
          , ai = [ja, ka]
          , bi = {
            document: 1,
            text: 2
        };
        function ci(a) {
            this.win = a;
            a = bd(a);
            this.Rc = a.isSingleDoc() ? a.getAmpDoc() : null
        }
        f = ci.prototype;
        f.wg = function(a, b) {
            var c = this
              , d = arguments
              , e = b.credentials;
            return di(this, a, b).then(function(e) {
                if (e)
                    return e;
                zg(b.body) && (b.body = b.body.getFormData());
                return "document" == b.responseType ? ei(a, b) : (c.win.fetch || ei).apply(null, d)
            })
        }
        ;
        function di(a, b, c) {
            if (!a.Rc)
                return Promise.resolve();
            var d = Q(a.Rc)
              , e = d.whenFirstVisible();
            if (!d.hasCapability("xhrInterceptor"))
                return e;
            var g = a.Rc.getRootNode().documentElement.hasAttribute("allow-xhr-interception")
              , h = t(a.win).development;
            return g ? e.then(function() {
                return d.isTrustedViewer()
            }).then(function(e) {
                if (e || h) {
                    var g = F({
                        originalRequest: fi(b, c)
                    });
                    return d.sendMessageAwaitResponse("xhr", g).then(function(b) {
                        return gi(a, b, c.responseType)
                    })
                }
            }) : e
        }
        function fi(a, b) {
            var c = Object.assign({}, b);
            if (zg(b.body)) {
                c.headers = c.headers || {};
                c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                b = b.body.entries();
                for (var d = [], e = b.next(); !e.done; e = b.next())
                    d.push(e.value);
                c.body = d
            }
            return {
                input: a,
                init: c
            }
        }
        function gi(a, b, c) {
            x().assert(ka(b), "Object expected: %s", b);
            var d = "document" == c;
            if ("function" === typeof a.win.Response && !d)
                return new a.win.Response(b.body,b.init);
            var e = D();
            a = {
                status: 200,
                statusText: "OK",
                responseText: b.body ? String(b.body) : "",
                getResponseHeader: function(a) {
                    return e[String(a).toLowerCase()] || null
                }
            };
            b.init && (b = b.init,
            ja(b.headers) && b.headers.forEach(function(a) {
                var b = a[0]
                  , c = a[1];
                e[String(b).toLowerCase()] = String(c)
            }),
            b.status && (a.status = parseInt(b.status, 10)),
            b.statusText && (a.statusText = String(b.statusText)));
            d && (a.responseXML = (new DOMParser).parseFromString(a.responseText, "text/html"));
            return new hi(a)
        }
        function ii(a, b, c) {
            c = void 0 === c ? {} : c;
            !1 !== c.ampCors ? b = a.getCorsUrl(a.win, b) : c.requireAmpResponseSourceOrigin = !1;
            !0 === c.requireAmpResponseSourceOrigin && B().error("XHR", "requireAmpResponseSourceOrigin is deprecated, use ampCors instead");
            void 0 === c.requireAmpResponseSourceOrigin && (c.requireAmpResponseSourceOrigin = !0);
            var d = ab(a.win)
              , e = G(b).origin;
            d == e && (c.headers = c.headers || {},
            c.headers["AMP-Same-Origin"] = "true");
            return a.wg(b, c).then(function(b) {
                var d = b.headers.get("AMP-Access-Control-Allow-Source-Origin");
                if (d) {
                    var e = lb(a.win.location.href);
                    x().assert(d == e, "Returned AMP-Access-Control-Allow-Source-Origin is not equal to the current: " + d + (" vs " + e))
                } else
                    c.requireAmpResponseSourceOrigin && x().assert(!1, "Response must contain the AMP-Access-Control-Allow-Source-Origin header");
                return b
            }, function(a) {
                throw x().createExpectedError("XHR", "Failed fetching" + (" (" + e + "/...):"), a && a.message);
            })
        }
        f.fetchJson = function(a, b) {
            var c = ji(b, "application/json");
            if ("POST" == c.method && !zg(c.body)) {
                ai.some(function(a) {
                    return a(c.body)
                });
                c.headers["Content-Type"] = c.headers["Content-Type"] || "text/plain;charset=utf-8";
                var d = c.headers["Content-Type"];
                c.body = "application/x-www-form-urlencoded" === d ? eb(c.body) : JSON.stringify(c.body)
            }
            return this.fetch(a, c)
        }
        ;
        f.fetchText = function(a, b) {
            return this.fetch(a, ji(b, "text/plain"))
        }
        ;
        f.fetchDocument = function(a, b) {
            b = ji(b, "text/html");
            b.responseType = "document";
            return this.fetch(a, b).then(function(a) {
                return a.T()
            })
        }
        ;
        f.fetch = function(a, b) {
            b = ji(b);
            return ii(this, a, b).then(function(a) {
                return ki(a)
            })
        }
        ;
        f.sendSignal = function(a, b) {
            return ii(this, a, b).then(function(a) {
                return ki(a)
            })
        }
        ;
        f.getCorsUrl = function(a, b) {
            mb(b);
            a = lb(a.location.href);
            a = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(a);
            return cb(b, a, void 0)
        }
        ;
        function ji(a, b) {
            a = a || {};
            var c;
            c = a.method;
            void 0 === c ? c = "GET" : (c = c.toUpperCase(),
            $h.includes(c));
            a.method = c;
            a.headers = a.headers || {};
            b && (a.headers.Accept = b);
            return a
        }
        function ei(a, b) {
            return new Promise(function(c, d) {
                var e = li(b.method || "GET", a);
                "include" == b.credentials && (e.withCredentials = !0);
                b.responseType in bi && (e.responseType = b.responseType);
                b.headers && Object.keys(b.headers).forEach(function(a) {
                    e.setRequestHeader(a, b.headers[a])
                });
                e.onreadystatechange = function() {
                    2 > e.readyState || (100 > e.status || 599 < e.status ? (e.onreadystatechange = null,
                    d(x().createExpectedError("Unknown HTTP status " + e.status))) : 4 == e.readyState && c(new hi(e)))
                }
                ;
                e.onerror = function() {
                    d(x().createExpectedError("Network failure"))
                }
                ;
                e.onabort = function() {
                    d(x().createExpectedError("Request aborted"))
                }
                ;
                "POST" == b.method ? e.send(b.body) : e.send()
            }
            )
        }
        function li(a, b) {
            var c = new XMLHttpRequest;
            if ("withCredentials"in c)
                c.open(a, b, !0);
            else if ("undefined" != typeof XDomainRequest)
                c = new XDomainRequest,
                c.open(a, b);
            else
                throw B().createExpectedError("CORS is not supported");
            return c
        }
        function ki(a) {
            return new Promise(function(b) {
                if (a.ok)
                    return b(a);
                b = a.status;
                var c = x().createError("HTTP error " + b);
                c.retriable = 415 == b || 500 <= b && 600 > b;
                c.response = a;
                throw c;
            }
            )
        }
        function hi(a) {
            this.Da = a;
            this.status = this.Da.status;
            this.ok = 200 <= this.status && 300 > this.status;
            this.headers = new mi(a);
            this.bodyUsed = !1;
            this.body = null
        }
        f = hi.prototype;
        f.clone = function() {
            return new hi(this.Da)
        }
        ;
        function ni(a) {
            a.bodyUsed = !0;
            return Promise.resolve(a.Da.responseText)
        }
        f.text = function() {
            return ni(this)
        }
        ;
        f.json = function() {
            return ni(this).then(pb)
        }
        ;
        f.T = function() {
            this.bodyUsed = !0;
            x().assert(this.Da.responseXML, "responseXML should exist. Make sure to return Content-Type: text/html header.");
            return Promise.resolve(this.Da.responseXML)
        }
        ;
        f.arrayBuffer = function() {
            return ni(this).then(Ea)
        }
        ;
        function mi(a) {
            this.Da = a
        }
        mi.prototype.get = function(a) {
            return this.Da.getResponseHeader(a)
        }
        ;
        mi.prototype.has = function(a) {
            return null != this.Da.getResponseHeader(a)
        }
        ;
        function oi(a) {
            ci.call(this, a);
            this.rb = D()
        }
        aa(oi, ci);
        oi.prototype.fetch = function(a, b) {
            var c = this
              , d = b && b.headers && b.headers.Accept || ""
              , e = !b || !b.method || "GET" === b.method
              , g = hb(a) + d
              , h = !!this.rb[g];
            if (e && h)
                return this.rb[g].then(function(a) {
                    return a.clone()
                });
            var k = ci.prototype.fetch.call(this, a, b);
            e && (this.rb[g] = k.then(function(a) {
                delete c.rb[g];
                return a.clone()
            }, function(a) {
                delete c.rb[g];
                throw a;
            }));
            return k
        }
        ;
        function pi(a) {
            this.G = a;
            this.h = Q(this.G);
            this.Xd = null;
            this.P = O(this.G.win)
        }
        pi.prototype.isSupported = function() {
            return this.h.isCctEmbedded() && this.h.isProxyOrigin()
        }
        ;
        pi.prototype.getScopedCid = function(a) {
            var b = this;
            if (!this.h.isCctEmbedded())
                return Promise.resolve(null);
            this.Xd || (this.Xd = this.qb("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"));
            return this.Xd.then(function(c) {
                return c ? qi(b, c, a) : null
            })
        }
        ;
        pi.prototype.qb = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = this
              , d = F({
                publisherOrigin: lb(this.G.win.location)
            });
            return this.P.timeoutPromise(3E4, N(this.G.win, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: d
            })).then(function(a) {
                return a.json().then(function(a) {
                    if (a.optOut)
                        return null;
                    var d = a.publisherClientId;
                    if (!d && b && a.alternateUrl) {
                        var e = a.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc";
                        return c.qb(e, !1)
                    }
                    return d
                })
            }).catch(function(a) {
                a && a.response ? a.response.json().then(function(a) {
                    B().error("CacheCidApi", JSON.stringify(a))
                }) : B().error("CacheCidApi", a);
                return null
            })
        }
        ;
        function qi(a, b, c) {
            b = b + ";" + c;
            return N(a.G.win, "crypto").sha384Base64(b).then(function(a) {
                return "amp-" + a
            })
        }
        ;function ri(a) {
            this.w = a.win;
            this.P = O(this.w);
            this.ed = {};
            var b = cd(a).canonicalUrl;
            this.cd = b ? G(b).origin : null
        }
        ri.prototype.getScopedCid = function(a, b) {
            var c = this;
            if (this.ed[b])
                return this.ed[b];
            var d;
            return this.ed[b] = this.P.poll(200, function() {
                d = jd(c.w, "AMP_TOKEN");
                return "$RETRIEVING" !== d
            }).then(function() {
                if ("$OPT_OUT" === d)
                    return "$OPT_OUT";
                var e = "$NOT_FOUND" === d && ib(c.w.document.referrer);
                if (!e && d && "$" === d[0])
                    return null;
                d && (!d || "$" !== d[0]) || si(c, "$RETRIEVING", 3E4);
                return c.qb("https://ampcid.google.com/v1/publisher:getClientId?key=" + a, b, d).then(function(e) {
                    var g = c.Ye(e);
                    if (!g && e.alternateUrl) {
                        var k = e.alternateUrl + "?key=" + a;
                        return c.qb(k, b, d).then(c.Ye.bind(c))
                    }
                    return g
                }).catch(function(a) {
                    si(c, "$ERROR", 3E4);
                    a && a.response ? a.response.json().then(function(a) {
                        B().error("GoogleCidApi", JSON.stringify(a))
                    }) : B().error("GoogleCidApi", a);
                    return null
                })
            })
        }
        ;
        ri.prototype.qb = function(a, b, c) {
            b = F({
                originScope: b,
                canonicalOrigin: this.cd
            });
            c && (b.securityToken = c);
            return this.P.timeoutPromise(3E4, N(this.w, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: b
            }).then(function(a) {
                return a.json()
            }))
        }
        ;
        ri.prototype.Ye = function(a) {
            if (a.optOut)
                return si(this, "$OPT_OUT", 31536E6),
                "$OPT_OUT";
            if (a.clientId)
                return si(this, a.securityToken, 31536E6),
                a.clientId;
            if (a.alternateUrl)
                return null;
            si(this, "$NOT_FOUND", 36E5);
            return null
        }
        ;
        function si(a, b, c) {
            if (b) {
                var d = a.w
                  , e = c;
                a = a.w.Date.now() + e;
                kd(d, "AMP_TOKEN", b, a, {
                    highestAvailableDomain: !0
                })
            }
        }
        ;function ti(a) {
            this.G = a;
            this.h = Q(this.G);
            this.Rb = null;
            this.cd = (a = cd(this.G).canonicalUrl) ? G(a).origin : null
        }
        ti.prototype.isSupported = function() {
            return this.h.hasCapability("cid") ? this.h.isTrustedViewer() : Promise.resolve(!1)
        }
        ;
        ti.prototype.getScopedCid = function(a, b) {
            b = F({
                scope: b,
                clientIdApi: !!a,
                canonicalOrigin: this.cd
            });
            a && (b.apiKey = a);
            return this.h.sendMessageAwaitResponse("cid", b)
        }
        ;
        var ui = /^[a-zA-Z0-9-_.]+$/
          , vi = {
            googleanalytics: "AMP_ECID_GOOGLE"
        }
          , wi = {
            googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
        };
        function xi(a) {
            this.ampdoc = a;
            this.Sc = null;
            this.gd = Object.create(null);
            this.He = new pi(a);
            this.Wf = new ti(a);
            this.og = new ri(a);
            this.Rb = null
        }
        xi.prototype.get = function(a, b, c) {
            var d = this;
            x().assert(ui.test(a.scope) && ui.test(a.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", a.scope);
            return b.then(function() {
                return Q(d.ampdoc).whenFirstVisible()
            }).then(function() {
                return yi(d.ampdoc)
            }).then(function(e) {
                if (e)
                    return "";
                var g = zi(d, a, c || b);
                return O(d.ampdoc.win).timeoutPromise(1E4, g, 'Getting cid for "' + a.scope + '" timed out').catch(function(a) {
                    wa(a)
                })
            })
        }
        ;
        xi.prototype.optOut = function() {
            return Ai(this.ampdoc)
        }
        ;
        function zi(a, b, c) {
            var d = b.scope
              , e = G(a.ampdoc.win.location.href);
            if (!ib(e)) {
                var g = Bi(a, d);
                return g ? a.og.getScopedCid(g, d).then(function(e) {
                    return "$OPT_OUT" == e ? null : e ? (Ci(a.ampdoc.win, b.cookieName || d, e),
                    e) : Di(a, b, c)
                }) : Di(a, b, c)
            }
            return a.Wf.isSupported().then(function(b) {
                if (b) {
                    var g = Bi(a, d);
                    return a.Wf.getScopedCid(g, d)
                }
                return a.He.isSupported() && Bi(a, d) ? a.He.getScopedCid(d).then(function(b) {
                    return b ? b : Ei(a, c, d, e)
                }) : Ei(a, c, d, e)
            })
        }
        function Ei(a, b, c, d) {
            return Fi(a, b).then(function(b) {
                return N(a.ampdoc.win, "crypto").sha384Base64(b + Gi(d) + c)
            })
        }
        function Bi(a, b) {
            a.Rb || (a.Rb = Hi(a));
            return a.Rb[b]
        }
        function Hi(a) {
            var b = {}
              , c = a.ampdoc.win.document.head.querySelector("meta[name=amp-google-client-id-api]");
            c && c.hasAttribute("content") && c.getAttribute("content").split(",").forEach(function(a) {
                a = a.trim();
                if (0 < a.indexOf("=")) {
                    var c = a.split("=");
                    a = c[0].trim();
                    b[a] = c[1].trim()
                } else {
                    var d = a;
                    (a = vi[d]) ? b[a] = wi[d] : x().error("CID", "Unsupported client for Google CID API: " + d)
                }
            });
            return b
        }
        function Ai(a) {
            Q(a).sendMessage("cidOptOut", {});
            return ec(a, "storage").then(function(a) {
                return a.set("amp-cid-optout", !0)
            })
        }
        function yi(a) {
            return ec(a, "storage").then(function(a) {
                return a.get("amp-cid-optout").then(function(a) {
                    return !!a
                })
            }).catch(function() {
                return !1
            })
        }
        function Ci(a, b, c) {
            var d = Date.now() + 31536E6;
            kd(a, b, c, d, {
                highestAvailableDomain: !0
            })
        }
        function Di(a, b, c) {
            var d = a.ampdoc.win
              , e = b.scope
              , g = b.cookieName || e
              , h = jd(d, g);
            if (!h && !b.createCookieIfNotPresent)
                return Promise.resolve(null);
            if (a.gd[e])
                return a.gd[e];
            if (h)
                return /^amp-/.test(h) && Ci(d, g, h),
                Promise.resolve(h);
            var k = Ii(d).then(function(a) {
                return "amp-" + a
            });
            Promise.all([k, c]).then(function(a) {
                var b = a[0]
                  , c = jd(d, g);
                c || Ci(d, g, b)
            });
            return a.gd[e] = k
        }
        function Gi(a) {
            x().assert(ib(a), "Expected proxy origin %s", a.origin);
            return lb(a)
        }
        function Fi(a, b) {
            if (a.Sc)
                return a.Sc;
            var c = a.ampdoc.win;
            return a.Sc = Ji(a.ampdoc).then(function(d) {
                var e = !1, g;
                d && !Ki(d) ? (g = Promise.resolve(d.cid),
                Li(d) && (e = !0)) : (g = N(c, "crypto").sha384Base64(Mi(c)),
                e = !0);
                e && g.then(function(c) {
                    Ni(a.ampdoc, b, c)
                });
                return g
            })
        }
        function Ni(a, b, c) {
            var d = a.win;
            Tc(d) ? Oi(a, Pi(c)) : b.then(function() {
                try {
                    d.localStorage.setItem("amp-cid", Pi(c))
                } catch (e) {}
            })
        }
        function Oi(a, b) {
            var c = Q(a);
            return c.isTrustedViewer().then(function(a) {
                if (a)
                    return B().expectedError("CID", "Viewer does not provide cap=cid"),
                    c.sendMessageAwaitResponse("cid", b).then(function(a) {
                        var b;
                        if (b = a) {
                            var c;
                            a: {
                                try {
                                    c = pb(a);
                                    break a
                                } catch (k) {}
                                c = void 0
                            }
                            b = !c
                        }
                        return b ? (B().expectedError("CID", "invalid cid format"),
                        JSON.stringify(F({
                            time: Date.now(),
                            cid: a
                        }))) : a
                    })
            })
        }
        function Pi(a) {
            return JSON.stringify(F({
                time: Date.now(),
                cid: a
            }))
        }
        function Ji(a) {
            var b = a.win, c;
            try {
                c = b.localStorage.getItem("amp-cid")
            } catch (e) {}
            var d = Promise.resolve(c);
            !c && Tc(b) && (d = Oi(a));
            return d.then(function(a) {
                if (!a)
                    return null;
                a = pb(a);
                return {
                    time: a.time,
                    cid: a.cid
                }
            })
        }
        function Ki(a) {
            var b = a.time
              , c = Date.now();
            return b + 31536E6 < c
        }
        function Li(a) {
            a = a.time;
            var b = Date.now();
            return a + 864E5 < b
        }
        function Mi(a) {
            var b;
            a.crypto && a.crypto.getRandomValues ? (b = new Uint8Array(16),
            a.crypto.getRandomValues(b)) : b = null;
            return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
        }
        function Ii(a) {
            var b = Mi(a);
            if ("string" == typeof b)
                return N(a, "crypto").sha384Base64(b);
            var c = b;
            return Pe(function() {
                return Ne(c).replace(/\.+$/, "")
            })
        }
        ;function Qi(a) {
            this.w = a;
            var b = null
              , c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle,
            c = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = b;
            this.Hg = c;
            this.Db = null
        }
        f = Qi.prototype;
        f.sha384 = function(a) {
            var b = this;
            "string" === typeof a && (a = Fa(a));
            if (!this.subtle || this.Db)
                return (this.Db || Ri(this)).then(function(b) {
                    return b.sha384(a)
                });
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, a).then(function(a) {
                    return new Uint8Array(a)
                }, function(c) {
                    c.message && 0 > c.message.indexOf("secure origin") && B().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c);
                    return Ri(b).then(function() {
                        return b.sha384(a)
                    })
                })
            } catch (c) {
                return B().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c),
                Ri(this).then(function() {
                    return b.sha384(a)
                })
            }
        }
        ;
        f.sha384Base64 = function(a) {
            return this.sha384(a).then(function(a) {
                return Ne(a)
            })
        }
        ;
        f.uniform = function(a) {
            return this.sha384(a).then(function(a) {
                for (var b = 0, d = 2; 0 <= d; d--)
                    b = (b + a[d]) / 256;
                return b
            })
        }
        ;
        function Ri(a) {
            return a.Db ? a.Db : a.Db = dd(a.w).preloadExtension("amp-crypto-polyfill").then(function() {
                return N(a.w, "crypto-polyfill")
            })
        }
        f.isPkcsAvailable = function() {
            return !!this.subtle && !1 !== this.w.isSecureContext
        }
        ;
        f.importPkcsKey = function(a) {
            this.isPkcsAvailable();
            var b = this.Hg ? Ea(JSON.stringify(a)) : a;
            return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"])
        }
        ;
        f.verifyPkcs = function(a, b, c) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, a, b, c)
        }
        ;
        var Si = ["prefetch", "preload", "preconnect", "dns-prefetch"];
        function Ti(a) {
            this.G = a;
            this.qd = null
        }
        Ti.prototype.get = function() {
            if (this.qd)
                return this.qd;
            var a = this.G
              , b = a.getUrl()
              , c = kb(b)
              , d = (b = a.getRootNode()) && b.AMP && b.AMP.canonicalUrl;
            if (!d)
                var e = b.querySelector("link[rel=canonical]")
                  , d = e ? G(e.href).href : c;
            var g = String(Math.floor(1E4 * a.win.Math.random()))
              , h = Ui(a.win.document)
              , k = Vi(a.win.document);
            return this.qd = {
                get sourceUrl() {
                    return kb(a.getUrl())
                },
                canonicalUrl: d,
                pageViewId: g,
                linkRels: h,
                metaTags: k
            }
        }
        ;
        function Ui(a) {
            var b = D();
            if (a.head) {
                var c = a.head.querySelectorAll("link[rel]");
                a = {};
                for (var d = 0; d < c.length; a = {
                    href: a.href
                },
                d++) {
                    var e = c[d];
                    a.href = e.href;
                    var g = e.getAttribute("rel");
                    g && a.href && g.split(/\s+/).forEach(function(a) {
                        return function(c) {
                            if (-1 == Si.indexOf(c)) {
                                var d = b[c];
                                d ? (ja(d) || (d = b[c] = [d]),
                                d.push(a.href)) : b[c] = a.href
                            }
                        }
                    }(a))
                }
            }
            return b
        }
        function Vi(a) {
            var b = D();
            if (a.head) {
                a = a.head.querySelectorAll("meta[name]");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c]
                      , e = d.getAttribute("content");
                    if ((d = d.getAttribute("name")) && e) {
                        var g = b[d];
                        g ? (ja(g) || (g = b[d] = [g]),
                        g.push(e)) : b[d] = e
                    }
                }
            }
            return b
        }
        ;function Wi(a) {
            this.win = a;
            this.T = a.document;
            this.Ia = Id(this.T, "hidden", !0);
            void 0 === this.T[this.Ia] && (this.Ia = null);
            this.Nc = Id(this.T, "visibilityState", !0);
            void 0 === this.T[this.Nc] && (this.Nc = null);
            this.Pb = new V;
            this.Mc = null;
            if (this.Ia) {
                this.Mc = "visibilitychange";
                var b = this.Ia.indexOf("Hidden");
                -1 != b && (this.Mc = this.Ia.substring(0, b) + "Visibilitychange")
            }
            this.gg = this.Sd.bind(this);
            this.Mc && this.T.addEventListener(this.Mc, this.gg);
            this.Sa = null
        }
        f = Wi.prototype;
        f.isHidden = function() {
            return this.Ia ? this.T[this.Ia] : !1
        }
        ;
        f.getVisibilityState = function() {
            return this.Nc ? this.T[this.Nc] : this.isHidden() ? "hidden" : "visible"
        }
        ;
        f.onVisibilityChanged = function(a) {
            return this.Pb.add(a)
        }
        ;
        f.Sd = function() {
            this.Pb.fire()
        }
        ;
        f.onBodyAvailable = function(a) {
            var b = this.T;
            if (b.body)
                return a(),
                null;
            this.Sa || (this.Sa = new V,
            Cc(b.documentElement, function() {
                return !!b.body
            }, this.Pg.bind(this)));
            return this.Sa.add(a)
        }
        ;
        f.Pg = function() {
            this.Sa.fire();
            this.Sa.removeAll();
            this.Sa = null
        }
        ;
        function Xi(a, b) {
            var c = this;
            this.ampdoc = a;
            this.za = b || a.getRootNode();
            this.F = id(this.ampdoc);
            this.h = Q(this.ampdoc);
            this.N = J(this.ampdoc, "history");
            var d = fd(this.ampdoc.win);
            this.Gg = d.isIos() && d.isSafari();
            this.tb = Tc(this.ampdoc.win) && this.h.isOvertakeHistory();
            this.cc = this.za != this.ampdoc.getRootNode();
            this.Fg = "inabox" == t(this.ampdoc.win).runtime;
            this.Oe = null;
            this.Wc = this.zg.bind(this);
            this.za.addEventListener("click", this.Wc);
            this.ue = !1;
            lf(this.ampdoc).then(function(a) {
                c.ue = a
            });
            this.Qc = null
        }
        Xi.prototype.adoptEmbedWindow = function(a) {
            Xb(a, "navigation", new Xi(this.ampdoc,a.document))
        }
        ;
        Xi.prototype.cleanup = function() {
            this.Wc && this.za.removeEventListener("click", this.Wc)
        }
        ;
        Xi.prototype.navigateTo = function(a, b, c) {
            if (jb(b)) {
                if (c && (this.Qc || (this.Qc = Yi(this)),
                this.Qc.includes(c) && this.h.navigateToAmpUrl(b, c)))
                    return;
                a.top.location.href = b
            } else
                x().error("navigation", "Cannot navigate to invalid protocol: " + b)
        }
        ;
        function Yi(a) {
            return (a = a.za.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map(function(a) {
                return a.trim()
            }) : []
        }
        Xi.prototype.zg = function(a) {
            if (!a.defaultPrevented) {
                var b = Kc(a.target, "A");
                if (b && b.href) {
                    var c = null;
                    if (this.ue && !this.cc) {
                        for (var d = G(this.ampdoc.win.location.href), e = n(d.search), d = [], g = 0; g < ff.length; g++) {
                            var h = ff[g];
                            "undefined" !== typeof e[h] && d.push(h)
                        }
                        e = b.getAttribute("data-amp-addparams");
                        g = b.href;
                        e && (g = db(g, n(e)));
                        e = G(g);
                        e = n(e.search);
                        for (g = d.length - 1; 0 <= g; g--)
                            "undefined" !== typeof e[d[g]] && d.splice(g, 1);
                        e = "";
                        for (g = 0; g < d.length; g++)
                            h = d[g],
                            e += 0 == g ? h + "=QUERY_PARAM(" + h + ")" : "&" + h + "=QUERY_PARAM(" + h + ")";
                        c = e
                    }
                    var k = Vb(b, "url-replace", !0);
                    k.maybeExpandLink(b, c);
                    d = Zi(this, b.href);
                    $i(this, a, b, d) || (this.tb ? (e = b.ownerDocument.defaultView,
                    g = b.href,
                    h = d.protocol,
                    "ftp:" == h ? (Sc(e, g, "_blank"),
                    a.preventDefault(),
                    e = !0) : (h = /^(https?|mailto):$/.test(h),
                    this.Gg && !h ? (Sc(e, g, "_top"),
                    a.preventDefault(),
                    e = !0) : e = !1)) : e = !1,
                    e || aj(this, a, b, d))
                }
            }
        }
        ;
        function $i(a, b, c, d) {
            if (!c.hasAttribute("rel"))
                return !1;
            var e = c.getAttribute("rel").split(" ").map(function(a) {
                return a.trim()
            });
            return e.includes("amphtml") ? a.h.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(),
            !0) : !1 : !1
        }
        function aj(a, b, c, d) {
            var e = Zi(a, "")
              , g = "" + d.origin + d.pathname + d.search
              , h = "" + e.origin + e.pathname + e.search;
            if (d.hash && g == h) {
                if (b.preventDefault(),
                !a.cc) {
                    var k = d.hash.slice(1)
                      , l = null;
                    if (k)
                        var m = String(k).replace(Ac, Bc)
                          , l = a.za.getElementById(k) || a.za.querySelector('a[name="' + m + '"]');
                    d.hash != e.hash ? a.N.replaceStateForTarget(d.hash).then(function() {
                        bj(a, l, k)
                    }) : bj(a, l, k)
                }
            } else if (a.cc || a.Fg) {
                var p = (c.getAttribute("target") || "").toLowerCase();
                "_top" != p && "_blank" != p && c.setAttribute("target", "_blank")
            }
        }
        function bj(a, b, c) {
            b ? (a.F.scrollIntoView(b),
            O(a.ampdoc.win).delay(function() {
                return a.F.scrollIntoView(b)
            }, 1)) : B().warn("navigation", "failed to find element with id=" + c + " or a[name=" + c + "]")
        }
        function Zi(a, b) {
            if (a.cc) {
                var c = a.Oe;
                if (!c) {
                    var d = a.za.ownerDocument || a.za
                      , c = d.createElement("a");
                    a.Oe = c
                }
                return bb(c, b)
            }
            return G(b || a.ampdoc.win.location.href)
        }
        ;function cj(a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                if (b && "FORM" == b.tagName) {
                    var c = b.classList.contains("i-amphtml-form"), d;
                    (d = c ? !b.hasAttribute("amp-novalidate") : !b.hasAttribute("novalidate")) && b.checkValidity && !b.checkValidity() && a.preventDefault();
                    for (var e = b.elements, g = 0; g < e.length; g++)
                        x().assert(!e[g].name || "__amp_source_origin" != e[g].name, "Illegal input name, %s found: %s", "__amp_source_origin", e[g]);
                    var e = b.getAttribute("action")
                      , h = b.getAttribute("action-xhr")
                      , g = (b.getAttribute("method") || "GET").toUpperCase();
                    h && (gb(h, b, "action-xhr"),
                    x().assert(!ib(h), "form action-xhr should not be on AMP CDN: %s", b),
                    mb(h));
                    e && (gb(e, b, "action"),
                    x().assert(!ib(e), "form action should not be on AMP CDN: %s", b),
                    mb(e));
                    if ("GET" == g)
                        x().assert(h || e, "form action-xhr or action attribute is required for method=GET: %s", b);
                    else if ("POST" == g) {
                        if (e) {
                            var k = "form";
                            x().error(k, "action attribute is invalid for method=POST: %s", b)
                        }
                        h || (a.preventDefault(),
                        x().assert(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b))
                    }
                    (e = b.getAttribute("target")) ? x().assert("_blank" == e || "_top" == e, "form target=%s is invalid can only be _blank or _top: %s", e, b) : b.setAttribute("target", "_top");
                    h && (a.preventDefault(),
                    a.stopImmediatePropagation(),
                    Vb(b, "action", !0).execute(b, "submit", null, b, b, a, 100))
                }
            }
        }
        ;function dj(a, b) {
            this.G = a;
            this.P = O(a.win);
            this.j = b;
            this.B = 0;
            this.Na = [];
            this.C = [];
            this.j.setOnStackIndexUpdated(this.X.bind(this))
        }
        f = dj.prototype;
        f.Tb = function() {
            this.j.Tb()
        }
        ;
        f.push = function(a) {
            var b = this;
            return ej(this, function() {
                return b.j.push().then(function(c) {
                    b.X(c);
                    a && (b.Na[c] = a);
                    return c
                })
            }, "push")
        }
        ;
        f.pop = function(a) {
            var b = this;
            return ej(this, function() {
                return b.j.pop(a).then(function(a) {
                    b.X(a)
                })
            }, "pop")
        }
        ;
        f.goBack = function() {
            var a = this;
            return ej(this, function() {
                return 0 >= a.B ? Promise.resolve() : a.j.pop(a.B).then(function(b) {
                    a.X(b)
                })
            }, "goBack")
        }
        ;
        f.replaceStateForTarget = function(a) {
            var b = this
              , c = this.G.win.location.hash;
            return this.push(function() {
                b.G.win.location.replace(c || "#")
            }).then(function() {
                b.j.replaceStateForTarget(a)
            })
        }
        ;
        f.getFragment = function() {
            return this.j.getFragment()
        }
        ;
        f.updateFragment = function(a) {
            "#" == a[0] && (a = a.substr(1));
            return this.j.updateFragment(a)
        }
        ;
        f.X = function(a) {
            this.B = a;
            if (!(this.B >= this.Na.length - 1)) {
                a = [];
                for (var b = this.Na.length - 1; b > this.B; b--)
                    this.Na[b] && (a.push(this.Na[b]),
                    this.Na[b] = void 0);
                this.Na.splice(this.B + 1);
                if (0 < a.length)
                    for (b = 0; b < a.length; b++)
                        this.P.delay(a[b], 1)
            }
        }
        ;
        function ej(a, b, c) {
            var d, e, g = new Promise(function(a, b) {
                d = a;
                e = b
            }
            ), h = Error("history trace for " + c + ": ");
            a.C.push({
                callback: b,
                resolve: d,
                reject: e,
                trace: h
            });
            1 == a.C.length && fj(a);
            return g
        }
        function fj(a) {
            if (0 != a.C.length) {
                var b = a.C[0], c;
                try {
                    c = b.callback()
                } catch (d) {
                    c = Promise.reject(d)
                }
                c.then(function(a) {
                    b.resolve(a)
                }, function(a) {
                    B().error("History", "failed to execute a task:", a);
                    b.trace && (b.trace.message += a,
                    B().error("History", b.trace));
                    b.reject(a)
                }).then(function() {
                    a.C.splice(0, 1);
                    fj(a)
                })
            }
        }
        function gj(a) {
            var b = this;
            this.win = a;
            this.P = O(a);
            a = this.win.history;
            this.Oa = a.length - 1;
            a.state && void 0 !== a.state["AMP.History"] && (this.Oa = Math.min(a.state["AMP.History"], this.Oa));
            this.B = this.Oa;
            this.X = null;
            this.Kf = "state"in a;
            this.Pa = hj(this, this.B);
            var c, d;
            a.pushState && a.replaceState ? (this.uc = a.originalPushState || a.pushState.bind(a),
            this.zb = a.originalReplaceState || a.replaceState.bind(a),
            c = function(a, c, d) {
                b.Pa = a;
                b.uc(a, c, d || null)
            }
            ,
            d = function(a, c, d) {
                b.Pa = a;
                void 0 !== d ? b.zb(a, c, d) : b.zb(a, c)
            }
            ,
            a.originalPushState || (a.originalPushState = this.uc),
            a.originalReplaceState || (a.originalReplaceState = this.zb)) : (c = function(a) {
                b.Pa = a
            }
            ,
            d = function(a) {
                b.Pa = a
            }
            );
            this.Zg = c;
            this.Dc = d;
            try {
                this.Dc(hj(this, this.B, !0))
            } catch (e) {
                B().error("History", "Initial replaceState failed: " + e.message)
            }
            a.pushState = this.Ze.bind(this);
            a.replaceState = this.$e.bind(this);
            this.zc = function() {
                var a = b.Kf ? b.win.history.state : b.Pa
                  , c = a ? a["AMP.History"] : void 0
                  , d = b.B
                  , k = b.Pc;
                b.Pc = void 0;
                d > b.win.history.length - 2 && (d = b.win.history.length - 2,
                b.Ca(d));
                d = void 0 == c ? d + 1 : c < b.win.history.length ? c : b.win.history.length - 1;
                a || (a = {});
                a["AMP.History"] = d;
                b.Dc(a, void 0, void 0);
                d != b.B && b.Ca(d);
                d < b.Oa && (b.Oa = d);
                k && k.resolve()
            }
            ;
            this.win.addEventListener("popstate", this.zc)
        }
        f = gj.prototype;
        f.Tb = function() {
            this.uc && (this.win.history.pushState = this.uc);
            this.zb && (this.win.history.replaceState = this.zb);
            this.win.removeEventListener("popstate", this.zc)
        }
        ;
        function hj(a, b, c) {
            a = D(c ? a.Kf ? a.win.history.state : a.Pa : void 0);
            a["AMP.History"] = b;
            return a
        }
        f.setOnStackIndexUpdated = function(a) {
            this.X = a
        }
        ;
        f.push = function() {
            var a = this;
            return ij(this, function() {
                a.Ze();
                return Promise.resolve(a.B)
            })
        }
        ;
        f.pop = function(a) {
            var b = this;
            a = Math.max(a, this.Oa);
            return ij(this, function() {
                return jj(b, b.B - a + 1)
            })
        }
        ;
        f.backTo = function(a) {
            var b = this;
            a = Math.max(a, this.Oa);
            return ij(this, function() {
                return jj(b, b.B - a)
            })
        }
        ;
        function ij(a, b) {
            return a.Pc ? a.Pc.promise.then(b, b) : b()
        }
        function kj(a) {
            var b, c, d = a.P.timeoutPromise(500, new Promise(function(a, d) {
                b = a;
                c = d
            }
            ));
            a.Pc = {
                promise: d,
                resolve: b,
                reject: c
            };
            return d
        }
        function jj(a, b) {
            if (0 >= b)
                return Promise.resolve(a.B);
            a.Pa = hj(a, a.B - b);
            var c = kj(a);
            a.win.history.go(-b);
            return c.then(function() {
                return Promise.resolve(a.B)
            })
        }
        f.Ze = function(a, b, c) {
            a || (a = {});
            var d = this.B + 1;
            a["AMP.History"] = d;
            this.Zg(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1,
            a["AMP.History"] = d,
            this.Dc(a));
            this.Ca(d)
        }
        ;
        f.replaceStateForTarget = function(a) {
            var b = this;
            ij(this, function() {
                b.win.removeEventListener("popstate", b.zc);
                try {
                    b.win.location.replace(a)
                } finally {
                    b.win.addEventListener("popstate", b.zc)
                }
                b.$e();
                return Promise.resolve()
            })
        }
        ;
        f.$e = function(a, b, c) {
            a || (a = {});
            var d = Math.min(this.B, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Dc(a, b, c);
            this.Ca(d)
        }
        ;
        f.Ca = function(a) {
            a = Math.min(a, this.win.history.length - 1);
            this.B != a && (this.B = a,
            this.X && this.X(a))
        }
        ;
        f.getFragment = function() {
            var a = this.win.location.hash
              , a = a.substr(1);
            return Promise.resolve(a)
        }
        ;
        f.updateFragment = function(a) {
            this.win.history.replaceState && this.win.history.replaceState({}, "", "#" + a);
            return Promise.resolve()
        }
        ;
        function lj(a, b) {
            this.win = a;
            this.h = b;
            this.B = 0;
            this.X = null;
            this.qh = this.h.onMessage("historyPopped", this.Qg.bind(this))
        }
        f = lj.prototype;
        f.replaceStateForTarget = function(a) {
            this.win.location.replace(a)
        }
        ;
        f.Tb = function() {
            this.qh()
        }
        ;
        f.setOnStackIndexUpdated = function(a) {
            this.X = a
        }
        ;
        f.push = function() {
            var a = this;
            this.Ca(this.B + 1);
            return this.h.sendMessageAwaitResponse("pushHistory", F({
                stackIndex: this.B
            })).then(function() {
                return a.B
            })
        }
        ;
        f.pop = function(a) {
            var b = this;
            return a > this.B ? Promise.resolve(this.B) : this.h.sendMessageAwaitResponse("popHistory", F({
                stackIndex: this.B
            })).then(function() {
                b.Ca(a - 1);
                return b.B
            })
        }
        ;
        f.Qg = function(a) {
            this.Ca(a.newStackIndex)
        }
        ;
        f.Ca = function(a) {
            this.B != a && (this.B = a,
            this.X && this.X(a))
        }
        ;
        f.getFragment = function() {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("getFragment", void 0, !0).then(function(a) {
                if (!a)
                    return "";
                "#" == a[0] && (a = a.substr(1));
                return a
            }) : Promise.resolve("")
        }
        ;
        f.updateFragment = function(a) {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("replaceHistory", F({
                fragment: a
            }), !0) : Promise.resolve()
        }
        ;
        function mj(a) {
            var b = Q(a);
            b.isOvertakeHistory() || a.win.AMP_TEST_IFRAME ? b = new lj(a.win,b) : (K(a.win, "global-history-binding", gj),
            b = N(a.win, "global-history-binding"));
            return new dj(a,b)
        }
        ;function nj(a) {
            this.win = a;
            this.eg = this.Rg.bind(this);
            this.fg = this.Sg.bind(this);
            this.Xc = this.ze = this.Yc = null;
            this.md = "ontouchstart"in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            this.wb = !1;
            this.win.document.addEventListener("keydown", this.eg);
            this.win.document.addEventListener("mousedown", this.fg);
            this.ld = !0;
            this.pf = 0;
            this.oh = new V;
            this.qf = new V;
            this.Dd = new V;
            this.md && (this.ld = !this.md,
            this.Yc = this.Tg.bind(this),
            ce(a.document, "mousemove", this.Yc))
        }
        f = nj.prototype;
        f.isTouchDetected = function() {
            return this.md
        }
        ;
        f.onTouchDetected = function(a, b) {
            b && a(this.isTouchDetected());
            return this.oh.add(a)
        }
        ;
        f.isMouseDetected = function() {
            return this.ld
        }
        ;
        f.onMouseDetected = function(a, b) {
            b && a(this.isMouseDetected());
            return this.qf.add(a)
        }
        ;
        f.isKeyboardActive = function() {
            return this.wb
        }
        ;
        f.onKeyboardStateChanged = function(a, b) {
            b && a(this.isKeyboardActive());
            return this.Dd.add(a)
        }
        ;
        f.Rg = function(a) {
            this.wb || a.defaultPrevented || (a = a.target,
            a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.wb = !0,
            this.Dd.fire(!0))
        }
        ;
        f.Sg = function() {
            this.wb && (this.wb = !1,
            this.Dd.fire(!1))
        }
        ;
        f.Tg = function(a) {
            var b = this;
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents)
                this.nf();
            else {
                this.Xc || (this.Xc = this.Og.bind(this),
                this.ze = this.nf.bind(this));
                var c, d = de(this.win.document, function(a) {
                    c = a
                });
                return O(this.win).timeoutPromise(300, d).then(this.ze, function() {
                    c && c();
                    b.Xc()
                })
            }
        }
        ;
        f.Og = function() {
            this.ld = !0;
            this.qf.fire(!0)
        }
        ;
        f.nf = function() {
            this.pf++;
            3 >= this.pf && ce(this.win.document, "mousemove", this.Yc)
        }
        ;
        function oj(a) {
            this.S = a.navigator
        }
        f = oj.prototype;
        f.isAndroid = function() {
            return /Android/i.test(this.S.userAgent)
        }
        ;
        f.isIos = function() {
            return /iPhone|iPad|iPod/i.test(this.S.userAgent)
        }
        ;
        f.isSafari = function() {
            return /Safari/i.test(this.S.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        }
        ;
        f.isChrome = function() {
            return /Chrome|CriOS/i.test(this.S.userAgent) && !this.isEdge() && !this.isOpera()
        }
        ;
        f.isFirefox = function() {
            return /Firefox|FxiOS/i.test(this.S.userAgent) && !this.isEdge()
        }
        ;
        f.isOpera = function() {
            return /OPR\/|Opera|OPiOS/i.test(this.S.userAgent)
        }
        ;
        f.isIe = function() {
            return /Trident|MSIE|IEMobile/i.test(this.S.userAgent)
        }
        ;
        f.isEdge = function() {
            return /Edge/i.test(this.S.userAgent)
        }
        ;
        f.isWebKit = function() {
            return /WebKit/i.test(this.S.userAgent) && !this.isEdge()
        }
        ;
        f.isStandalone = function() {
            return this.isIos() && this.S.standalone
        }
        ;
        f.isBot = function() {
            return /bot/i.test(this.S.userAgent)
        }
        ;
        f.getMajorVersion = function() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : Ej(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? Ej(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? Ej(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? Ej(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? Ej(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? Ej(this, /Edge\/(\d+)/, 1) : 0
        }
        ;
        function Ej(a, b, c) {
            if (!a.S.userAgent)
                return 0;
            a = a.S.userAgent.match(b);
            return !a || c >= a.length ? 0 : parseInt(a[c], 10)
        }
        f.getIosVersionString = function() {
            if (!this.S.userAgent || !this.isIos())
                return "";
            var a = this.S.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return a ? a = a[1].replace(/_/g, ".") : ""
        }
        ;
        f.getIosMajorVersion = function() {
            var a = this.getIosVersionString();
            return "" == a ? null : Number(a.split(".")[0])
        }
        ;
        function Fj(a) {
            this.D = a;
            this.Pf = Object.create(null)
        }
        Fj.prototype.addTransition = function(a, b, c) {
            var d = a + "|" + b;
            this.Pf[d] = c
        }
        ;
        Fj.prototype.setState = function(a) {
            var b = this.D;
            this.D = a;
            (a = this.Pf[b + "|" + a]) && a()
        }
        ;
        function Gj(a, b) {
            var c = this;
            this.win = a;
            this.Yg = b;
            this.N = [];
            this.rf = new V;
            this.Je = function(a) {
                a.target && 1 == a.target.nodeType && Hj(c, a.target)
            }
            ;
            this.Ie = function() {
                O(a).delay(function() {
                    Hj(c, c.win.document.activeElement)
                }, 500)
            }
            ;
            this.win.document.addEventListener("focus", this.Je, !0);
            this.win.addEventListener("blur", this.Ie)
        }
        f = Gj.prototype;
        f.Tb = function() {
            this.win.document.removeEventListener("focus", this.Je, !0);
            this.win.removeEventListener("blur", this.Ie)
        }
        ;
        f.onFocus = function(a) {
            return this.rf.add(a)
        }
        ;
        function Hj(a, b) {
            var c = Date.now();
            0 == a.N.length || a.N[a.N.length - 1].el != b ? a.N.push({
                el: b,
                time: c
            }) : a.N[a.N.length - 1].time = c;
            a.purgeBefore(c - a.Yg);
            a.rf.fire(b)
        }
        f.getLast = function() {
            return 0 == this.N.length ? null : this.N[this.N.length - 1].el
        }
        ;
        f.purgeBefore = function(a) {
            for (var b = this.N.length - 1, c = 0; c < this.N.length; c++)
                if (this.N[c].time >= a) {
                    b = c - 1;
                    break
                }
            -1 != b && this.N.splice(0, b + 1)
        }
        ;
        f.hasDescendantsOf = function(a) {
            this.win.document.activeElement && Hj(this, this.win.document.activeElement);
            for (var b = 0; b < this.N.length; b++)
                if (a.contains(this.N[b].el))
                    return !0;
            return !1
        }
        ;
        function Ij() {
            this.I = [];
            this.Lb = {};
            this.ef = this.ff = 0
        }
        f = Ij.prototype;
        f.getSize = function() {
            return this.I.length
        }
        ;
        f.getLastEnqueueTime = function() {
            return this.ff
        }
        ;
        f.getLastDequeueTime = function() {
            return this.ef
        }
        ;
        f.getTaskById = function(a) {
            return this.Lb[a] || null
        }
        ;
        f.enqueue = function(a) {
            this.I.push(a);
            this.Lb[a.id] = a;
            this.ff = Date.now()
        }
        ;
        f.dequeue = function(a) {
            var b = this.removeAtIndex(a, this.I.indexOf(this.Lb[a.id]));
            if (!b)
                return !1;
            this.ef = Date.now();
            return !0
        }
        ;
        f.peek = function(a, b) {
            for (var c = 1E6, d = null, e = 0; e < this.I.length; e++) {
                var g = this.I[e]
                  , h = a(g, b);
                h < c && (c = h,
                d = g)
            }
            return d
        }
        ;
        f.forEach = function(a) {
            this.I.forEach(a)
        }
        ;
        f.removeAtIndex = function(a, b) {
            var c = this.Lb[a.id];
            if (!c || this.I[b] != c)
                return !1;
            this.I.splice(b, 1);
            delete this.Lb[a.id];
            return !0
        }
        ;
        f.purge = function(a) {
            for (var b = this.I.length; b--; )
                a(this.I[b]) && this.removeAtIndex(this.I[b], b)
        }
        ;
        function Jj(a) {
            var b;
            return !(b || fd(a)).isIe() || Kj(a) ? null : new Promise(function(b) {
                var c = Date.now() + 2E3
                  , e = a.setInterval(function() {
                    var d = Date.now()
                      , h = Kj(a);
                    if (h || d > c)
                        a.clearInterval(e),
                        b(),
                        h || B().error("ie-media-bug", "IE media never resolved")
                }, 10)
            }
            )
        }
        function Kj(a) {
            var b = "(min-width: " + (a.innerWidth - 1) + "px)" + (" AND (max-width: " + (a.innerWidth + 1) + "px)");
            try {
                return a.matchMedia(b).matches
            } catch (c) {
                return B().error("ie-media-bug", "IE matchMedia failed: ", c),
                !0
            }
        }
        ;function Lj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.h = Q(a);
            this.ia = this.h.isRuntimeOn();
            this.Dg = !1;
            this.lf = this.win.devicePixelRatio || 1;
            this.fh = 0;
            this.o = [];
            this.jg = this.re = 0;
            this.ha = this.h.isVisible();
            this.xa = this.h.getPrerenderSize();
            this.ob = !1;
            this.Te = !0;
            this.se = !1;
            this.va = -1;
            this.hb = !0;
            this.Fb = -1;
            this.Fd = this.ic = 0;
            this.wc = new eg(this.win,function() {
                return b.doPass()
            }
            );
            this.Cf = new eg(this.win,function() {
                b.hb = !0;
                b.schedulePass()
            }
            );
            this.na = new Ij;
            this.C = new Ij;
            this.J = R(this.win, "layers");
            var c;
            this.Ae = c = this.J ? this.lg.bind(this) : this.mg.bind(this);
            this.fa = [];
            this.pa = [];
            this.wd = !1;
            this.F = id(this.ampdoc);
            this.A = hd(this.win);
            this.pe = new Gj(this.win,6E4);
            this.oe = !1;
            this.Vb = 0;
            this.bb = !1;
            this.Yf = new Fj(this.h.getVisibilityState());
            Mj(this, this.Yf);
            this.F.onChanged(function(a) {
                b.ic = Date.now();
                b.Fd = a.velocity;
                a.relayoutAll && (b.hb = !0,
                b.bb = !0);
                b.schedulePass()
            });
            this.F.onScroll(function() {
                b.ic = Date.now()
            });
            this.J && (this.Za = a = J(this.ampdoc, "layers"),
            a.onScroll(function() {
                b.schedulePass()
            }),
            this.dg = this.kg.bind(this));
            this.h.onVisibilityChanged(function() {
                -1 == b.va && b.h.isVisible() && (b.va = Date.now());
                b.schedulePass()
            });
            this.h.onRuntimeState(function(a) {
                b.ia = a;
                b.schedulePass(1)
            });
            this.pe.onFocus(function(a) {
                Nj(b, a)
            });
            this.schedulePass();
            this.ampdoc.whenReady().then(function() {
                function a() {
                    return b.Cf.schedule()
                }
                b.ob = !0;
                Oj(b);
                b.pa = null;
                var c = Jj(b.win);
                c ? c.then(a) : a();
                Pj(b);
                Promise.race([ee(b.win), O(b.win).promise(3100)]).then(a);
                b.win.document.fonts && "loaded" != b.win.document.fonts.status && b.win.document.fonts.ready.then(a)
            })
        }
        f = Lj.prototype;
        f.get = function() {
            return this.o.slice(0)
        }
        ;
        f.isRuntimeOn = function() {
            return this.ia
        }
        ;
        f.renderStarted = function() {
            this.ampdoc.signals().signal("render-start")
        }
        ;
        f.getMeasuredResources = function(a, b) {
            var c = this;
            return this.ampdoc.signals().whenSignal("ready-scan").then(function() {
                var b = [];
                c.o.forEach(function(d) {
                    d.hasBeenMeasured() || d.hostWin != a || d.hasOwner() || b.push(Qj(c, d))
                });
                return Promise.all(b)
            }).then(function() {
                return c.o.filter(function(c) {
                    return c.hostWin == a && !c.hasOwner() && c.hasBeenMeasured() && b(c)
                })
            })
        }
        ;
        f.getResourcesInRect = function(a, b, c) {
            return this.getMeasuredResources(a, function(a) {
                return !a.isDisplayed() || !a.overlaps(b) && !a.isFixed() || c && !a.prerenderAllowed() ? !1 : !0
            })
        }
        ;
        function Pj(a) {
            var b = N(a.win, "input");
            b.onTouchDetected(function(b) {
                Rj(a, "amp-mode-touch", b)
            }, !0);
            b.onMouseDetected(function(b) {
                Rj(a, "amp-mode-mouse", b)
            }, !0);
            b.onKeyboardStateChanged(function(b) {
                Rj(a, "amp-mode-keyboard-active", b)
            }, !0)
        }
        function Rj(a, b, c) {
            a.ampdoc.whenBodyAvailable().then(function(d) {
                a.A.mutate(function() {
                    d.classList.toggle(b, c)
                })
            })
        }
        f.getMaxDpr = function() {
            return this.lf
        }
        ;
        f.getDpr = function() {
            return this.lf
        }
        ;
        f.getResourceForElement = function(a) {
            return Y(a)
        }
        ;
        f.getResourceForElementOptional = function(a) {
            return Y(a)
        }
        ;
        f.getElementLayoutBox = function(a) {
            var b = this
              , c = this.getResourceForElementOptional(a);
            return c ? Qj(this, c) : this.A.measurePromise(function() {
                return b.getViewport().getLayoutRect(a)
            })
        }
        ;
        function Qj(a, b) {
            return b.hasBeenMeasured() ? Pe(function() {
                return b.getPageLayoutBox()
            }) : a.A.measurePromise(function() {
                b.measure();
                return b.getPageLayoutBox()
            })
        }
        f.getViewport = function() {
            return this.F
        }
        ;
        f.getScrollDirection = function() {
            return Math.sign(this.Fd) || 1
        }
        ;
        f.add = function(a) {
            this.re++;
            1 == this.re && this.F.ensureReadyForElements();
            var b = Y(a);
            b && 0 != b.getState() && !a.reconstructWhenReparented() ? b.requestMeasure() : b = new Bh(++this.fh,a,this);
            this.o.push(b);
            this.Cf.schedule(1E3)
        }
        ;
        f.grantBuildPermission = function() {
            return 20 > this.jg++ || this.h.hasBeenVisible()
        }
        ;
        function Sj(a, b, c) {
            var d;
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !0 : d;
            var e = a.ia || a.Dg
              , g = "prerender" != a.h.getVisibilityState() || b.prerenderAllowed();
            e && g && (a.ob ? Tj(a, b, d) : b.isBuilt() || b.isBuilding() || c && a.pa.includes(b) || (a.pa.push(b),
            Oj(a, d)))
        }
        function Oj(a, b) {
            if (!a.wd)
                try {
                    a.wd = !0;
                    b = void 0 === b ? !0 : b;
                    b = void 0 === b ? !0 : b;
                    for (var c = 0; c < a.pa.length; c++) {
                        var d = a.pa[c], e;
                        if (!(e = a.ob))
                            a: {
                                var g = a.ampdoc.getRootNode()
                                  , h = d.element;
                                do
                                    if (h.nextSibling) {
                                        e = !0;
                                        break a
                                    }
                                while ((h = h.parentNode) && h != g);e = !1
                            }
                        e && (a.pa.splice(c--, 1),
                        Tj(a, d, b))
                    }
                } finally {
                    a.wd = !1
                }
        }
        function Tj(a, b, c) {
            var d = b.build();
            d && c && d.then(function() {
                return a.schedulePass()
            }, function(c) {
                Uj(a, b);
                if (!le(c))
                    throw c;
            })
        }
        f.remove = function(a) {
            (a = Y(a)) && Uj(this, a)
        }
        ;
        function Uj(a, b, c) {
            var d = a.o.indexOf(b);
            -1 != d && a.o.splice(d, 1);
            b.isBuilt() && (b.pauseOnRemove(),
            c && b.disconnect());
            Vj(a, b, !0)
        }
        f.removeForChildWindow = function(a) {
            var b = this
              , c = this.o.filter(function(b) {
                return b.hostWin == a
            });
            c.forEach(function(a) {
                return Uj(b, a, !0)
            })
        }
        ;
        f.upgraded = function(a) {
            a = Y(a);
            Sj(this, a)
        }
        ;
        f.setOwner = function(a, b) {
            b.contains(a);
            Y(a) && Y(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                Y(c) && Y(c).updateOwner(void 0)
            }
        }
        ;
        f.requireLayout = function(a, b) {
            var c = this
              , d = [];
            Wj(this, a, function(a) {
                4 != a.getState() && (3 != a.getState() ? d.push(a.whenBuilt().then(function() {
                    a.measure();
                    if (a.isDisplayed())
                        return Xj(c, a, !0, b, !0),
                        a.loadedOnce()
                })) : a.isDisplayed() && d.push(a.loadedOnce()))
            });
            return Promise.all(d)
        }
        ;
        f.scheduleLayout = function(a, b) {
            Yj(this, Y(a), !0, Zj(b))
        }
        ;
        f.schedulePause = function(a, b) {
            var c = Y(a);
            b = Zj(b);
            ak(this, c, b, function(a) {
                a.pause()
            })
        }
        ;
        f.scheduleResume = function(a, b) {
            a = Y(a);
            b = Zj(b);
            ak(this, a, b, function(a) {
                a.resume()
            })
        }
        ;
        f.scheduleUnlayout = function(a, b) {
            a = Y(a);
            b = Zj(b);
            ak(this, a, b, function(a) {
                a.unlayout()
            })
        }
        ;
        f.schedulePreload = function(a, b) {
            Yj(this, Y(a), !1, Zj(b))
        }
        ;
        f.updateLayoutPriority = function(a, b) {
            var c = Y(a);
            c.updateLayoutPriority(b);
            this.C.forEach(function(a) {
                a.resource == c && (a.priority = b)
            });
            this.schedulePass()
        }
        ;
        f.updateInViewport = function(a, b, c) {
            bk(this, Y(a), Zj(b), c)
        }
        ;
        f.changeSize = function(a, b, c, d, e) {
            ck(this, Y(a), b, c, e, !0, d)
        }
        ;
        f.attemptChangeSize = function(a, b, c, d) {
            var e = this;
            return new Promise(function(g, h) {
                ck(e, Y(a), b, c, d, !1, function(a) {
                    a ? g() : h(Error("changeSize attempt denied"))
                })
            }
            )
        }
        ;
        f.measureElement = function(a) {
            return this.A.measurePromise(a)
        }
        ;
        f.mutateElement = function(a, b) {
            return this.measureMutateElement(a, null, b)
        }
        ;
        f.measureMutateElement = function(a, b, c) {
            return this.J ? dk(this, a, b, c) : ek(this, a, b, c)
        }
        ;
        function ek(a, b, c, d) {
            function e() {
                var c = a.F.getLayoutRect(b);
                return 0 != c.width && 0 != c.height ? c.top : -1
            }
            var g = -1;
            return a.A.runPromise({
                measure: function() {
                    c && c();
                    g = e()
                },
                mutate: function() {
                    d();
                    b.classList.contains("i-amphtml-element") && Y(b).requestMeasure();
                    for (var c = b.getElementsByClassName("i-amphtml-element"), k = 0; k < c.length; k++)
                        Y(c[k]).requestMeasure();
                    -1 != g && fk(a, g);
                    a.schedulePass(70);
                    a.A.measure(function() {
                        var b = e();
                        -1 != b && b != g && (fk(a, b),
                        a.schedulePass(70));
                        a.bb = !0
                    })
                }
            })
        }
        function dk(a, b, c, d) {
            return a.A.runPromise({
                measure: c || void 0,
                mutate: function() {
                    d();
                    a.dirtyElement(b)
                }
            })
        }
        f.dirtyElement = function(a) {
            if (this.J)
                this.Za.dirty(a);
            else {
                var b = a.classList.contains("i-amphtml-element");
                b && (a = Y(a),
                fk(this, a.getLayoutBox().top));
                this.schedulePass(70, !b)
            }
        }
        ;
        f.attemptCollapse = function(a) {
            var b = this;
            return new Promise(function(c, d) {
                ck(b, Y(a), 0, 0, void 0, !1, function(b) {
                    b ? (Y(a).completeCollapse(),
                    c()) : d(Error("collapse attempt denied"))
                })
            }
            )
        }
        ;
        f.collapseElement = function(a) {
            var b = this.F.getLayoutRect(a);
            a = Y(a);
            0 != b.width && 0 != b.height && fk(this, b.top);
            a.completeCollapse();
            this.schedulePass(70)
        }
        ;
        f.expandElement = function(a) {
            var b = Y(a);
            b.completeExpand();
            (b = b.getOwner()) && b.expandedCallback(a);
            this.schedulePass(70)
        }
        ;
        f.schedulePass = function(a, b) {
            b && (this.hb = !0);
            return this.wc.schedule(a)
        }
        ;
        f.schedulePassVsync = function() {
            var a = this;
            this.oe || (this.oe = !0,
            this.A.mutate(function() {
                return a.doPass()
            }))
        }
        ;
        f.ampInitComplete = function() {
            this.se = !0;
            this.schedulePass()
        }
        ;
        f.doPass = function() {
            var a = this;
            if (this.ia) {
                this.ha = this.h.isVisible();
                this.xa = this.h.getPrerenderSize();
                var b = this.ob && this.Te;
                if (b) {
                    this.Te = !1;
                    var c = this.win.document
                      , d = cd(this.ampdoc);
                    this.h.sendMessage("documentLoaded", F({
                        title: c.title,
                        sourceUrl: kb(this.ampdoc.getUrl()),
                        serverLayout: c.documentElement.hasAttribute("i-amphtml-element"),
                        linkRels: d.linkRels,
                        metaTags: d.metaTags
                    }), !0);
                    this.Vb = this.F.getContentHeight();
                    this.h.sendMessage("documentHeight", F({
                        height: this.Vb
                    }), !0)
                }
                var e = this.F.getSize();
                this.wc.cancel();
                this.oe = !1;
                this.Yf.setState(this.h.getVisibilityState());
                this.ob && this.se && !this.ampdoc.signals().get("ready-scan") && this.ampdoc.signals().signal("ready-scan");
                this.bb && (this.bb = !1,
                this.A.measure(function() {
                    var b = a.F.getContentHeight();
                    b != a.Vb && (a.h.sendMessage("documentHeight", F({
                        height: b
                    }), !0),
                    a.Vb = b)
                }))
            }
        }
        ;
        function gk(a) {
            var b = Date.now()
              , c = a.F.getRect()
              , d = a.F.getScrollHeight()
              , e = c.height / 10
              , g = c.height / 10
              , h = d - 1E3
              , k = Math.max(.85 * d, h)
              , l = .01 > Math.abs(a.Fd) && 500 < b - a.ic || 1E3 < b - a.ic;
            if (0 < a.fa.length) {
                var m = a.fa;
                a.fa = [];
                for (var p = -1, q = [], u = 0, b = 0; b < m.length; b++) {
                    var r = m[b]
                      , H = r.resource
                      , C = H.getLayoutBox()
                      , E = H.getInitialLayoutBox()
                      , z = 0
                      , A = 0
                      , v = C.top
                      , w = C.bottom
                      , L = void 0;
                    if (r.marginChange) {
                        var L = r.marginChange.newMargins
                          , T = r.marginChange.currentMargins;
                        void 0 != L.top && (z = L.top - T.top);
                        void 0 != L.bottom && (A = L.bottom - T.bottom);
                        z && (v = C.top - T.top);
                        A && (w = C.bottom + T.bottom)
                    }
                    var P = r.newHeight - C.height
                      , y = !1;
                    if (0 != P || 0 != z || 0 != A)
                        if (r.force || !a.ha)
                            y = !0;
                        else if (a.pe.hasDescendantsOf(H.element))
                            y = !0;
                        else if (v >= c.bottom - g || 0 == z && C.bottom + Math.min(P, 0) >= c.bottom - g)
                            y = !0;
                        else if (1 < c.top && w <= c.top + e) {
                            if (0 > P && c.top + u < -P)
                                continue;
                            l ? (u += P,
                            q.push(r)) : a.fa.push(r);
                            continue
                        } else
                            E.bottom >= k || C.bottom >= k ? y = !0 : 0 > P || 0 > z || 0 > A || r.resource.overflowCallback(!0, r.newHeight, r.newWidth, L);
                    y && (0 <= C.top && (p = -1 == p ? C.top : Math.min(p, C.top)),
                    r.resource.changeSize(r.newHeight, r.newWidth, L),
                    r.resource.overflowCallback(!1, r.newHeight, r.newWidth, L),
                    a.bb = !0);
                    r.callback && r.callback(y)
                }
                -1 != p && fk(a, p);
                0 < q.length && a.A.run({
                    measure: function(b) {
                        b.scrollHeight = a.F.getScrollHeight();
                        b.scrollTop = a.F.getScrollTop()
                    },
                    mutate: function(b) {
                        var c = -1;
                        q.forEach(function(a) {
                            var b = a.resource.getLayoutBox();
                            c = -1 == c ? b.top : Math.min(c, b.top);
                            a.resource.changeSize(a.newHeight, a.newWidth, a.marginChange ? a.marginChange.newMargins : void 0);
                            a.callback && a.callback(!0)
                        });
                        -1 != c && fk(a, c);
                        var d = a.F.getScrollHeight();
                        d != b.scrollHeight && a.F.setScrollTop(b.scrollTop + (d - b.scrollHeight));
                        a.bb = !0
                    }
                }, {})
            }
        }
        function fk(a, b) {
            a.J ? a.hb = !0 : a.Fb = -1 == a.Fb ? b : Math.min(b, a.Fb)
        }
        function Nj(a, b) {
            var c = Ic(b, function(a) {
                return !!Y(a)
            });
            if (c) {
                b = Y(c);
                var d = b.getPendingChangeSize();
                void 0 !== d && ck(a, b, d.height, d.width, d.margins, !0)
            }
        }
        function hk(a) {
            var b = Date.now()
              , c = a.hb;
            a.hb = !1;
            var d = a.Fb;
            a.Fb = -1;
            for (var e = 0, g = 0, h = 0; h < a.o.length; h++) {
                var k = a.o[h];
                0 != k.getState() || k.isBuilding() || Sj(a, k, !0);
                if (c || !k.hasBeenMeasured() || 1 == k.getState())
                    k.applySizesAndMediaQuery(),
                    e++;
                k.isMeasureRequested() && g++
            }
            var l;
            if (0 < e || 0 < g || c || -1 != d)
                for (h = 0; h < a.o.length; h++)
                    if (k = a.o[h],
                    !k.hasOwner() || k.isMeasureRequested())
                        if (c || 1 == k.getState() || !k.hasBeenMeasured() || k.isMeasureRequested() || -1 != d && k.getLayoutBox().bottom >= d) {
                            var m = k.isDisplayed();
                            k.measure();
                            m && !k.isDisplayed() && (l || (l = []),
                            l.push(k))
                        }
            l && a.A.mutate(function() {
                l.forEach(function(b) {
                    b.unload();
                    Vj(a, b)
                })
            });
            var d = a.F.getRect(), p;
            p = a.ha ? Ze(d, .25, 2) : 0 < a.xa ? Ze(d, 0, a.xa - 1) : null;
            for (var q = a.ha ? Ze(d, .25, .25) : d, d = 0; d < a.o.length; d++)
                if (h = a.o[d],
                0 != h.getState() && !h.hasOwner()) {
                    var u = a.ha && h.isDisplayed() && h.overlaps(q);
                    h.setInViewport(u)
                }
            if (p)
                for (d = 0; d < a.o.length; d++)
                    h = a.o[d],
                    2 != h.getState() || h.hasOwner() || h.isDisplayed() && h.overlaps(p) && Xj(a, h, !0);
            if (a.ha && 0 == a.na.getSize() && 0 == a.C.getSize() && b > a.na.getLastDequeueTime() + 5E3) {
                for (var r = 0, b = 0; b < a.o.length && 4 > r; b++)
                    d = a.o[b],
                    2 == d.getState() && !d.hasOwner() && d.isDisplayed() && d.idleRenderOutsideViewport() && (Xj(a, d, !1),
                    r++);
                for (b = 0; b < a.o.length && 4 > r; b++)
                    d = a.o[b],
                    2 == d.getState() && !d.hasOwner() && d.isDisplayed() && (Xj(a, d, !1),
                    r++)
            }
        }
        f.mg = function(a) {
            var b = this.F.getRect()
              , c = a.resource.getLayoutBox()
              , d = Math.floor((c.top - b.top) / b.height);
            Math.sign(d) != this.getScrollDirection() && (d *= 2);
            d = Math.abs(d);
            return 10 * a.priority + d
        }
        ;
        f.lg = function(a, b) {
            var c = this.Za.iterateAncestry(a.resource.element, this.dg, b);
            return 10 * a.priority + c
        }
        ;
        f.kg = function(a, b, c, d) {
            var e = b.getId();
            if (Da.call(d, e))
                return d[e];
            a = a || 0;
            c = 1 + c / 10;
            var g = b.isActiveUnsafe() ? 1 : 2;
            b = b.getHorizontalDistanceFromParent() + b.getVerticalDistanceFromParent();
            return d[e] = a + g * c * b
        }
        ;
        function ik(a, b) {
            var c = Date.now();
            if (0 == a.na.getSize()) {
                if (-1 === a.va)
                    return 0;
                var d = 1E3 * b.priority;
                return Math.max(d - (c - a.va), 0)
            }
            var e = 0;
            a.na.forEach(function(a) {
                e = Math.max(e, Math.max(1E3 * (b.priority - a.priority), 0) - (c - a.startTime))
            });
            return e
        }
        f.bh = function(a) {
            this.C.getTaskById(a.id) || this.C.enqueue(a)
        }
        ;
        f.Lf = function(a, b, c) {
            this.na.dequeue(a);
            this.schedulePass(1E3);
            if (!b)
                return B().info("Resources", "task failed:", a.id, a.resource.debugid, c),
                Promise.reject(c)
        }
        ;
        function ck(a, b, c, d, e, g, h) {
            b.hasBeenMeasured() && !e ? jk(a, b, c, d, void 0, g, h) : a.A.measure(function() {
                b.hasBeenMeasured() || b.measure();
                var k;
                e ? (k = Nd(a.win, b.element),
                k = {
                    top: parseInt(k.marginTop, 10) || 0,
                    right: parseInt(k.marginRight, 10) || 0,
                    bottom: parseInt(k.marginBottom, 10) || 0,
                    left: parseInt(k.marginLeft, 10) || 0
                },
                k = {
                    newMargins: e,
                    currentMargins: k
                }) : k = void 0;
                var l = k;
                jk(a, b, c, d, l, g, h)
            })
        }
        function jk(a, b, c, d, e, g, h) {
            b.resetPendingChangeSize();
            var k = b.getPageLayoutBox();
            if (!(k = void 0 !== c && c != k.height || void 0 !== d && d != k.width) && (k = void 0 !== e))
                var k = e.currentMargins
                  , l = e.newMargins
                  , k = void 0 !== l.top && l.top != k.top || void 0 !== l.right && l.right != k.right || void 0 !== l.bottom && l.bottom != k.bottom || void 0 !== l.left && l.left != k.left;
            if (k) {
                k = null;
                for (l = 0; l < a.fa.length; l++)
                    if (a.fa[l].resource == b) {
                        k = a.fa[l];
                        break
                    }
                k ? (k.newHeight = c,
                k.newWidth = d,
                k.marginChange = e,
                k.force = g || k.force,
                k.callback = h) : a.fa.push({
                    resource: b,
                    newHeight: c,
                    newWidth: d,
                    marginChange: e,
                    force: g,
                    callback: h
                });
                a.schedulePassVsync()
            } else
                void 0 === c && void 0 === d && void 0 === e && B().error("Resources", "attempting to change size with undefined dimensions", b.debugid),
                h && h(!0)
        }
        function kk(a, b, c) {
            return 0 != b.getState() && b.isDisplayed() && (a.ha || "prerender" == a.h.getVisibilityState() && b.prerenderAllowed()) && (c || b.isInViewport() || b.renderOutsideViewport() || b.idleRenderOutsideViewport()) ? !0 : !1
        }
        function Xj(a, b, c, d, e) {
            0 != b.getState() && b.isDisplayed();
            var g = e || !1;
            kk(a, b, g) && (c ? a.La(b, "L", 0, d || 0, g, b.startLayout.bind(b)) : a.La(b, "P", 2, d || 0, g, b.startLayout.bind(b)))
        }
        function Yj(a, b, c, d) {
            ak(a, b, d, function(d) {
                0 == d.getState() ? d.whenBuilt().then(function() {
                    lk(a, d, c, b.getLayoutPriority())
                }) : lk(a, d, c, b.getLayoutPriority())
            })
        }
        function lk(a, b, c, d) {
            b.measure();
            2 == b.getState() && b.isDisplayed() && Xj(a, b, c, d)
        }
        f.La = function(a, b, c, d, e, g) {
            b = a.getTaskId(b);
            a = {
                id: b,
                resource: a,
                priority: Math.max(a.getLayoutPriority(), d) + c,
                forceOutsideViewport: e,
                callback: g,
                scheduleTime: Date.now(),
                startTime: 0,
                promise: null
            };
            var h = this.C.getTaskById(b);
            if (!h || a.priority < h.priority)
                h && this.C.dequeue(h),
                this.C.enqueue(a),
                this.schedulePass(ik(this, a));
            a.resource.layoutScheduled(a.scheduleTime)
        }
        ;
        function bk(a, b, c, d) {
            var e = b.isInViewport() && d;
            ak(a, b, c, function(a) {
                a.setInViewport(e)
            })
        }
        function ak(a, b, c, d) {
            c.forEach(function(c) {
                b.element.contains(c);
                Wj(a, c, d)
            })
        }
        function Wj(a, b, c) {
            if (b.classList.contains("i-amphtml-element"))
                c(Y(b)),
                (b = b.getPlaceholder()) && Wj(a, b, c);
            else {
                a = b.getElementsByClassName("i-amphtml-element");
                b = [];
                for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], g = !1, h = 0; h < b.length; h++)
                        if (b[h].contains(e)) {
                            g = !0;
                            break
                        }
                    g || (b.push(e),
                    c(Y(e)))
                }
            }
        }
        function Mj(a, b) {
            function c() {
                a.o.forEach(function(a) {
                    return a.resume()
                });
                h()
            }
            function d() {
                a.o.forEach(function(b) {
                    b.unload();
                    Vj(a, b)
                });
                a.unselectText()
            }
            function e() {
                a.o.forEach(function(a) {
                    return a.pause()
                })
            }
            function g() {}
            function h() {
                var b = a.F.getSize();
                if (0 < b.height && 0 < b.width) {
                    0 < a.fa.length && gk(a);
                    hk(a);
                    for (var b = Date.now(), c = -1, d = Object.create(null), e = a.C.peek(a.Ae, d); e; ) {
                        c = ik(a, e);
                        if (16 < c)
                            break;
                        a.C.dequeue(e);
                        (c = a.na.getTaskById(e.id)) ? (e = a.bh.bind(a, e),
                        c.promise.then(e, e)) : (e.resource.measure(),
                        kk(a, e.resource, e.forceOutsideViewport) ? (e.promise = e.callback(),
                        e.startTime = b,
                        a.na.enqueue(e),
                        e.promise.then(a.Lf.bind(a, e, !0), a.Lf.bind(a, e, !1)).catch(je)) : e.resource.layoutCanceled());
                        e = a.C.peek(a.Ae, d);
                        c = -1
                    }
                    0 <= c ? b = c : (b = 2 * (b - a.na.getLastDequeueTime()),
                    b = Math.max(Math.min(3E4, b), 5E3));
                    0 < a.fa.length && (b = Math.min(b, 500));
                    a.ha && a.schedulePass(b)
                }
            }
            var k = "prerender"
              , l = "hidden"
              , m = "paused"
              , p = "inactive";
            b.addTransition(k, k, h);
            b.addTransition(k, "visible", h);
            b.addTransition(k, l, h);
            b.addTransition(k, p, h);
            b.addTransition(k, m, h);
            b.addTransition("visible", "visible", h);
            b.addTransition("visible", l, h);
            b.addTransition("visible", p, d);
            b.addTransition("visible", m, e);
            b.addTransition(l, "visible", h);
            b.addTransition(l, l, h);
            b.addTransition(l, p, d);
            b.addTransition(l, m, e);
            b.addTransition(p, "visible", c);
            b.addTransition(p, l, c);
            b.addTransition(p, p, g);
            b.addTransition(p, m, h);
            b.addTransition(m, "visible", c);
            b.addTransition(m, l, h);
            b.addTransition(m, p, d);
            b.addTransition(m, m, g)
        }
        f.unselectText = function() {
            try {
                this.win.getSelection().removeAllRanges()
            } catch (a) {}
        }
        ;
        function Vj(a, b, c) {
            1 == b.getState() && (a.C.purge(function(a) {
                return a.resource == b
            }),
            a.na.purge(function(a) {
                return a.resource == b
            }),
            Xf(a.fa, function(a) {
                return a.resource != b
            }));
            if (0 == b.getState() && c && a.pa) {
                var d = a.pa.indexOf(b);
                -1 != d && a.pa.splice(d, 1)
            }
        }
        function Zj(a) {
            return ja(a) ? a : [a]
        }
        ;function mk(a) {
            return "none" == Kd(a) || a.hasAttribute("hidden")
        }
        var nk = ["top", "bottom", "center"];
        function ok(a) {
            this.ampdoc = a;
            this.ag = Vb(a, "action", !0);
            this.o = gd(a);
            this.F = id(a);
            pk(this, this.ag)
        }
        f = ok.prototype;
        f.adoptEmbedWindow = function(a) {
            pk(this, Vb(a.document, "action", !0))
        }
        ;
        function pk(a, b) {
            b.addGlobalTarget("AMP", a.handleAmpTarget.bind(a));
            b.addGlobalMethodHandler("hide", a.handleHide.bind(a));
            b.addGlobalMethodHandler("show", a.handleShow.bind(a));
            b.addGlobalMethodHandler("toggleVisibility", a.handleToggle.bind(a));
            b.addGlobalMethodHandler("scrollTo", a.handleScrollTo.bind(a));
            b.addGlobalMethodHandler("focus", a.handleFocus.bind(a))
        }
        f.handleAmpTarget = function(a, b, c) {
            var d = a.method;
            switch (d) {
            case "pushState":
            case "setState":
                for (var e = b, g = 0; g < e; g++) {
                    var h = c[g];
                    if ("AMP" == h.target && 0 <= h.method.indexOf("State"))
                        return x().error("AMP-BIND", "One state action allowed per event."),
                        null
                }
                return qk(a, "pushState" == d);
            case "navigateTo":
                return a.satisfiesTrust(100) && (c = a.target,
                c = (c.ownerDocument || c).defaultView,
                d = a.args.url,
                a = "AMP." + a.method,
                J(this.ampdoc, "navigation").navigateTo(c, d, a)),
                null;
            case "goBack":
                return a.satisfiesTrust(100) && J(this.ampdoc, "history").goBack(),
                null;
            case "print":
                return a.satisfiesTrust(100) && (a = a.target,
                (a.ownerDocument || a).defaultView.print()),
                null;
            case "optoutOfCid":
                return rk(this, a)
            }
            throw x().createError("Unknown AMP action ", d);
        }
        ;
        function qk(a, b) {
            return a.satisfiesTrust(100) ? $c(a.target).then(function(c) {
                x().assert(c, "AMP-BIND is not installed.");
                var d = a.args.__AMP_OBJECT_STRING__;
                if (d) {
                    var e = {}
                      , g = a.event;
                    g && g.detail && (e.event = g.detail);
                    return b ? c.pushStateWithExpression(d, e) : c.setStateWithExpression(d, e)
                }
                x().error("AMP-BIND", "Please use the object-literal syntax, e.g. \"AMP.setState({foo: 'bar'})\" instead of \"AMP.setState(foo='bar')\".")
            }) : null
        }
        function rk(a, b) {
            return b.satisfiesTrust(100) ? ec(a.ampdoc, "cid").then(function(a) {
                return a.optOut()
            }).catch(function(a) {
                B().error("STANDARD-ACTIONS", "Failed to opt out of Cid", a)
            }) : null
        }
        f.handleScrollTo = function(a) {
            if (!a.satisfiesTrust(100))
                return null;
            var b = a.target
              , c = a.args && a.args.duration && 0 <= a.args.duration ? a.args.duration : 500;
            a = a.args && a.args.position && nk.includes(a.args.position) ? a.args.position : "top";
            this.F.animateScrollIntoView(b, c, "ease-in", a);
            return null
        }
        ;
        f.handleFocus = function(a) {
            if (!a.satisfiesTrust(100))
                return null;
            try {
                a.target.focus()
            } catch (b) {}
            return null
        }
        ;
        f.handleHide = function(a) {
            var b = a.target;
            this.o.mutateElement(b, function() {
                b.classList.contains("i-amphtml-element") ? b.collapse() : Md(b, !1)
            });
            return null
        }
        ;
        f.handleShow = function(a) {
            var b = a.target
              , c = b.ownerDocument.defaultView;
            if (b.classList.contains("i-amphtml-layout-nodisplay"))
                return x().warn("STANDARD-ACTIONS", "Elements with layout=nodisplay cannot be dynamically shown.", b),
                null;
            hd(c).measure(function() {
                "none" != Nd(c, b).display || mk(b) || x().warn("STANDARD-ACTIONS", 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', b)
            });
            this.o.mutateElement(b, function() {
                b.classList.contains("i-amphtml-element") ? b.expand() : (Md(b, !0),
                b.removeAttribute("hidden"))
            });
            return null
        }
        ;
        f.handleToggle = function(a) {
            return mk(a.target) ? this.handleShow(a) : this.handleHide(a)
        }
        ;
        function sk(a, b, c) {
            this.ampdoc = a;
            this.h = b;
            this.j = c;
            this.vc = lb(this.ampdoc.win.location);
            this.Hc = null
        }
        sk.prototype.get = function(a) {
            return tk(this).then(function(b) {
                return b.get(a)
            })
        }
        ;
        sk.prototype.set = function(a, b) {
            return uk(this, function(c) {
                return c.set(a, b)
            })
        }
        ;
        sk.prototype.remove = function(a) {
            return uk(this, function(b) {
                return b.remove(a)
            })
        }
        ;
        function tk(a) {
            a.Hc || (a.Hc = a.j.loadBlob(a.vc).then(function(a) {
                return a ? pb(atob(a)) : {}
            }).catch(function(a) {
                B().expectedError("Storage", "Failed to load store: ", a);
                return {}
            }).then(function(a) {
                return new vk(a)
            }));
            return a.Hc
        }
        function uk(a, b) {
            return tk(a).then(function(c) {
                b(c);
                c = btoa(JSON.stringify(c.obj));
                return a.j.saveBlob(a.vc, c)
            }).then(a.ig.bind(a))
        }
        function wk(a) {
            a.h.onBroadcast(function(b) {
                "amp-storage-reset" == b.type && b.origin == a.vc && (a.Hc = null)
            })
        }
        sk.prototype.ig = function() {
            this.h.broadcast({
                type: "amp-storage-reset",
                origin: this.vc
            })
        }
        ;
        function vk(a, b) {
            this.obj = nb(a);
            this.Ng = b || 8;
            this.sa = this.obj.vv || Object.create(null);
            this.obj.vv || (this.obj.vv = this.sa)
        }
        vk.prototype.get = function(a) {
            return (a = this.sa[a]) ? a.v : void 0
        }
        ;
        vk.prototype.set = function(a, b) {
            void 0 !== this.sa[a] ? (a = this.sa[a],
            a.v = b,
            a.t = Date.now()) : this.sa[a] = F({
                v: b,
                t: Date.now()
            });
            b = Object.keys(this.sa);
            if (b.length > this.Ng) {
                var c = Infinity
                  , d = null;
                for (a = 0; a < b.length; a++) {
                    var e = this.sa[b[a]];
                    e.t < c && (d = b[a],
                    c = e.t)
                }
                d && delete this.sa[d]
            }
        }
        ;
        vk.prototype.remove = function(a) {
            delete this.sa[a]
        }
        ;
        function xk(a) {
            this.win = a;
            var b;
            try {
                "localStorage"in this.win ? (this.win.localStorage.getItem("test"),
                b = !0) : b = !1
            } catch (c) {
                b = !1
            }
            this.yd = b;
            this.yd || (a = Error("localStorage not supported."),
            B().expectedError("Storage", a))
        }
        xk.prototype.loadBlob = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.yd ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null)
            }
            )
        }
        ;
        xk.prototype.saveBlob = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                c.yd && c.win.localStorage.setItem("amp-store:" + a, b);
                d()
            }
            )
        }
        ;
        function yk(a) {
            this.h = a
        }
        yk.prototype.loadBlob = function(a) {
            return this.h.sendMessageAwaitResponse("loadStore", F({
                origin: a
            })).then(function(a) {
                return a.blob
            })
        }
        ;
        yk.prototype.saveBlob = function(a, b) {
            return this.h.sendMessageAwaitResponse("saveStore", F({
                origin: a,
                blob: b
            }))
        }
        ;
        function zk(a) {
            M(a, "storage", function() {
                var b = Q(a)
                  , c = parseInt(b.getParam("storage"), 10)
                  , d = c ? new yk(b) : new xk(a.win)
                  , b = new sk(a,b,d);
                wk(b);
                return b
            }, !0)
        }
        ;function Ak(a) {
            this.win = a;
            this.eh = Promise.resolve();
            this.nh = 0;
            this.bd = {};
            this.fe = Date.now()
        }
        f = Ak.prototype;
        f.timeSinceStart = function() {
            return Date.now() - this.fe
        }
        ;
        f.delay = function(a, b) {
            var c = this;
            if (!b) {
                var d = "p" + this.nh++;
                this.eh.then(function() {
                    c.bd[d] ? delete c.bd[d] : a()
                }).catch(je);
                return d
            }
            return this.win.setTimeout(function() {
                try {
                    a()
                } catch (e) {
                    throw je(e),
                    e;
                }
            }, b)
        }
        ;
        f.cancel = function(a) {
            "string" == typeof a ? this.bd[a] = !0 : this.win.clearTimeout(a)
        }
        ;
        f.promise = function(a) {
            var b = this;
            return new Promise(function(c) {
                var d = b.delay(c, a);
                if (-1 == d)
                    throw Error("Failed to schedule timer.");
            }
            )
        }
        ;
        f.timeoutPromise = function(a, b, c) {
            function d() {
                e.cancel(g)
            }
            var e = this, g, h = new Promise(function(b, d) {
                g = e.delay(function() {
                    d(x().createError(c || "timeout"))
                }, a);
                if (-1 == g)
                    throw Error("Failed to schedule timer.");
            }
            );
            if (!b)
                return h;
            b.then(d, d);
            return Promise.race([h, b])
        }
        ;
        f.poll = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                var e = c.win.setInterval(function() {
                    b() && (c.win.clearInterval(e),
                    d())
                }, a)
            }
            )
        }
        ;
        function Bk(a, b, c, d) {
            var e = new Ck(0,0,a,b,c,d,1,1);
            return e.solveYValueFromXValue.bind(e)
        }
        function Ck(a, b, c, d, e, g, h, k) {
            this.x0 = a;
            this.y0 = b;
            this.x1 = c;
            this.y1 = d;
            this.x2 = e;
            this.y2 = g;
            this.x3 = h;
            this.y3 = k
        }
        f = Ck.prototype;
        f.solveYValueFromXValue = function(a) {
            return this.getPointY(this.solvePositionFromXValue(a))
        }
        ;
        f.solvePositionFromXValue = function(a) {
            var b = 1E-6
              , c = (a - this.x0) / (this.x3 - this.x0);
            if (0 >= c)
                return 0;
            if (1 <= c)
                return 1;
            for (var d = 0, e = 1, g = 0, h = 0; 8 > h; h++) {
                var g = this.getPointX(c)
                  , k = (this.getPointX(c + b) - g) / b;
                if (Math.abs(g - a) < b)
                    return c;
                if (Math.abs(k) < b)
                    break;
                else
                    g < a ? d = c : e = c,
                    c -= (g - a) / k
            }
            for (h = 0; Math.abs(g - a) > b && 8 > h; h++)
                g < a ? (d = c,
                c = (c + e) / 2) : (e = c,
                c = (c + d) / 2),
                g = this.getPointX(c);
            return c
        }
        ;
        f.getPointX = function(a) {
            if (0 == a)
                return this.x0;
            if (1 == a)
                return this.x3;
            var b = this.lerp(this.x0, this.x1, a)
              , c = this.lerp(this.x1, this.x2, a)
              , d = this.lerp(this.x2, this.x3, a)
              , b = this.lerp(b, c, a)
              , c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        }
        ;
        f.getPointY = function(a) {
            if (0 == a)
                return this.y0;
            if (1 == a)
                return this.y3;
            var b = this.lerp(this.y0, this.y1, a)
              , c = this.lerp(this.y1, this.y2, a)
              , d = this.lerp(this.y2, this.y3, a)
              , b = this.lerp(b, c, a)
              , c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        }
        ;
        f.lerp = function(a, b, c) {
            return a + c * (b - a)
        }
        ;
        var Dk = Bk(.25, .1, .25, 1)
          , Ek = Bk(.42, 0, 1, 1)
          , Fk = Bk(0, 0, .58, 1)
          , Gk = Bk(.42, 0, .58, 1)
          , Hk = {
            linear: function(a) {
                return a
            },
            ease: Dk,
            "ease-in": Ek,
            "ease-out": Fk,
            "ease-in-out": Gk
        };
        function Ik(a) {
            if (!a)
                return null;
            if ("string" == typeof a) {
                if (-1 != a.indexOf("cubic-bezier")) {
                    var b = a.match(/cubic-bezier\((.+)\)/);
                    if (b && (b = b[1].split(",").map(parseFloat),
                    4 == b.length)) {
                        for (var c = 0; 4 > c; c++)
                            if (isNaN(b[c]))
                                return null;
                        return Bk(b[0], b[1], b[2], b[3])
                    }
                    return null
                }
                return Hk[a]
            }
            return a
        }
        ;function Jk() {}
        function Kk(a, b) {
            this.mb = a;
            this.A = b || hd(self);
            this.Le = null;
            this.U = []
        }
        function Lk(a, b, c, d) {
            return (new Kk(a)).setCurve(d).add(0, b, 1).start(c)
        }
        Kk.prototype.setCurve = function(a) {
            a && (this.Le = Ik(a));
            return this
        }
        ;
        Kk.prototype.add = function(a, b, c, d) {
            this.U.push({
                delay: a,
                func: b,
                duration: c,
                curve: Ik(d)
            });
            return this
        }
        ;
        Kk.prototype.start = function(a) {
            var b = new Mk(this.A,this.mb,this.U,this.Le,a);
            return b
        }
        ;
        function Mk(a, b, c, d, e) {
            this.A = a;
            this.mb = b;
            this.U = [];
            for (b = 0; b < c.length; b++) {
                var g = c[b];
                this.U.push({
                    delay: g.delay,
                    func: g.func,
                    duration: g.duration,
                    curve: g.curve || d,
                    started: !1,
                    completed: !1
                })
            }
            this.tg = e;
            this.fe = Date.now();
            this.Ka = !0;
            this.D = {};
            e = new Oe;
            this.yf = e.promise;
            this.dh = e.resolve;
            this.ah = e.reject;
            this.Mf = this.A.createAnimTask(this.mb, {
                mutate: this.mh.bind(this)
            });
            this.A.canAnimate(this.mb) ? this.Mf(this.D) : (B().warn("Animation", "cannot animate"),
            this.Ua(!1, 0))
        }
        f = Mk.prototype;
        f.then = function(a, b) {
            return a || b ? this.yf.then(a, b) : this.yf
        }
        ;
        f.thenAlways = function(a) {
            a = a || Jk;
            return this.then(a, a)
        }
        ;
        f.halt = function(a) {
            this.Ua(!1, a || 0)
        }
        ;
        f.Ua = function(a, b) {
            if (this.Ka) {
                this.Ka = !1;
                if (0 != b) {
                    1 < this.U.length && this.U.sort(function(a, b) {
                        return a.delay + a.duration - (b.delay + b.duration)
                    });
                    try {
                        if (0 < b)
                            for (b = 0; b < this.U.length; b++)
                                this.U[b].func(1, !0);
                        else
                            for (var c = this.U.length - 1; 0 <= c; c--)
                                this.U[c].func(0, !1)
                    } catch (d) {
                        B().error("Animation", "completion failed: " + d, d),
                        a = !1
                    }
                }
                a ? this.dh() : this.ah()
            }
        }
        ;
        f.mh = function() {
            if (this.Ka) {
                for (var a = Date.now(), b = Math.min((a - this.fe) / this.tg, 1), c = 0; c < this.U.length; c++) {
                    var d = this.U[c];
                    !d.started && b >= d.delay && (d.started = !0)
                }
                for (c = 0; c < this.U.length; c++)
                    if (d = this.U[c],
                    d.started && !d.completed)
                        a: {
                            var e, g;
                            if (0 < d.duration) {
                                if (e = g = Math.min((b - d.delay) / d.duration, 1),
                                d.curve && 1 != e)
                                    try {
                                        e = d.curve(g)
                                    } catch (h) {
                                        B().error("Animation", "step curve failed: " + h, h);
                                        this.Ua(!1, 0);
                                        break a
                                    }
                            } else
                                e = g = 1;
                            1 == g && (d.completed = !0);
                            try {
                                d.func(e, d.completed)
                            } catch (h) {
                                B().error("Animation", "step mutate failed: " + h, h),
                                this.Ua(!1, 0)
                            }
                        }
                1 == b ? this.Ua(!0, 0) : this.A.canAnimate(this.mb) ? this.Mf(this.D) : (B().warn("Animation", "cancel animation"),
                this.Ua(!1, 0))
            }
        }
        ;
        var Nk = ['\n          <i-amphtml-fpa style="display: none"></i-amphtml-fpa>'];
        Nk.raw = ['\n          <i-amphtml-fpa style="display: none"></i-amphtml-fpa>'];
        function Ok(a, b, c, d, e) {
            this.ampdoc = a;
            this.A = b;
            this.cg = c;
            this.Ub = this.R = d;
            this.Ba = e && a.isSingleDoc();
            this.ga = null;
            this.pg = 0;
            this.M = []
        }
        f = Ok.prototype;
        f.setVisible = function(a) {
            var b = this;
            this.ga && this.A.mutate(function() {
                S(b.ga, "visibility", a ? "visible" : "hidden")
            })
        }
        ;
        f.setup = function() {
            var a = this.ampdoc.getRootNode().styleSheets;
            if (a) {
                for (var b = [], c = [], d = 0; d < a.length; d++) {
                    var e = a[d];
                    e.disabled || !e.ownerNode || "STYLE" != e.ownerNode.tagName || e.ownerNode.hasAttribute("amp-boilerplate") || e.ownerNode.hasAttribute("amp-runtime") || e.ownerNode.hasAttribute("amp-extension") || Pk(this, e.cssRules, b, c)
                }
                this.trySetupSelectorsNoInline(b, c);
                Qk(this);
                d = fd(this.ampdoc.win);
                0 < this.M.length && !this.Ba && d.isIos() && x().warn("FixedLayer", "Please test this page inside of an AMP Viewer such as Google's because the fixed or sticky positioning might have slightly different layout.");
                this.update()
            }
        }
        ;
        f.updatePaddingTop = function(a, b) {
            this.R = a;
            b || (this.Ub = a);
            this.update()
        }
        ;
        f.transformMutate = function(a) {
            a ? this.M.forEach(function(b) {
                b.fixedNow && b.top && (S(b.element, "transition", "none"),
                b.transform && "none" != b.transform ? S(b.element, "transform", b.transform + " " + a) : S(b.element, "transform", a))
            }) : this.M.forEach(function(a) {
                a.fixedNow && a.top && Ld(a.element, {
                    transform: "",
                    transition: ""
                })
            })
        }
        ;
        f.addElement = function(a, b) {
            var c = this.ampdoc.win;
            a.offsetParent || "none" !== Nd(c, a).display || B().error("FixedLayer", "Tried to add display:none element to FixedLayer", a.tagName);
            Rk(this, a, "*", "fixed", b);
            Qk(this);
            return this.update()
        }
        ;
        f.removeElement = function(a) {
            var b = this
              , c = Sk(this, a);
            0 < c.length && this.ga && this.A.mutate(function() {
                for (var a = 0; a < c.length; a++) {
                    var e = c[a];
                    "fixed" == e.position && Tk(b, e)
                }
            })
        }
        ;
        f.isDeclaredFixed = function(a) {
            return !!a.__AMP_DECLFIXED
        }
        ;
        f.isDeclaredSticky = function(a) {
            return !!a.__AMP_DECLSTICKY
        }
        ;
        f.update = function() {
            var a = this;
            this.M.filter(function(b) {
                return !a.ampdoc.contains(b.element)
            }).forEach(function(b) {
                return Sk(a, b.element)
            });
            if (0 == this.M.length)
                return Promise.resolve();
            var b = !1;
            return this.A.runPromise({
                measure: function(c) {
                    for (var d = a.M, e = [], g = a.ampdoc.win, h = 0; h < d.length; h++)
                        Jd(d[h].element, {
                            top: "",
                            bottom: "-9999vh",
                            transition: "none"
                        });
                    for (h = 0; h < d.length; h++)
                        e.push(Nd(g, d[h].element).top);
                    for (h = 0; h < d.length; h++)
                        S(d[h].element, "bottom", "");
                    for (h = 0; h < d.length; h++) {
                        var k = d[h]
                          , l = k.element
                          , m = Nd(g, l)
                          , p = l.offsetWidth
                          , q = l.offsetHeight
                          , u = l.offsetTop
                          , r = m
                          , H = void 0 === r.position ? "" : r.position
                          , l = void 0 === r.display ? "" : r.display
                          , C = r.bottom
                          , E = r.zIndex
                          , z = parseFloat(m.opacity)
                          , r = m[Id(m, "transform")]
                          , m = m.top
                          , A = "fixed" == H && (k.forceTransfer || 0 < p && 0 < q)
                          , v = Ia(H, "sticky")
                          , w = "none" !== l;
                        if (w && (A || v)) {
                            if ("auto" === m || e[h] !== m)
                                m = A && u === a.Ub + a.cg ? "0px" : "";
                            var L = A && (k.forceTransfer || 0 < z && 300 > q && (!!m && 0 == parseInt(m, 10) || !!C && 0 == parseInt(C, 10)));
                            L && (b = !0);
                            c[k.id] = {
                                fixed: A,
                                sticky: v,
                                transferrable: L,
                                top: m,
                                zIndex: E,
                                transform: r
                            }
                        } else
                            c[k.id] = {
                                fixed: !1,
                                sticky: !1,
                                transferrable: !1,
                                top: "",
                                zIndex: ""
                            }
                    }
                },
                mutate: function(c) {
                    if (b && a.Ba) {
                        var d = Uk(a);
                        d.className != a.ampdoc.getBody().className && (d.className = a.ampdoc.getBody().className)
                    }
                    for (var e = a.M, g = 0; g < e.length; g++) {
                        var h = e[g]
                          , k = c[h.id];
                        S(h.element, "transition", "none");
                        S(h.element, "transition", "");
                        if (k) {
                            var l = g
                              , m = k
                              , p = h.element
                              , q = h.fixedNow;
                            h.fixedNow = m.fixed;
                            h.stickyNow = m.sticky;
                            h.top = m.fixed || m.sticky ? m.top : "";
                            h.transform = m.transform;
                            !q || m.fixed && m.transferrable || Tk(a, h);
                            m.top && (m.fixed || m.sticky) && (m.fixed || !a.Ba ? S(p, "top", "calc(" + m.top + " + " + a.R + "px)") : a.Ub === a.R ? S(p, "top", m.top) : S(p, "top", "calc(" + m.top + " - " + a.Ub + "px)"));
                            a.Ba && m.fixed && !q && m.transferrable && Vk(a, h, l, m)
                        }
                    }
                }
            }, {}).catch(function(a) {
                B().error("FixedLayer", "Failed to mutate fixed elements:", a)
            })
        }
        ;
        f.trySetupSelectorsNoInline = function(a, b) {
            try {
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c], e = this.ampdoc.getRootNode().querySelectorAll(d), g = 0; g < e.length && !(10 < g); g++)
                        Rk(this, e[g], d, "fixed");
                for (a = 0; a < b.length; a++)
                    for (var h = b[a], k = this.ampdoc.getRootNode().querySelectorAll(h), c = 0; c < k.length; c++)
                        Rk(this, k[c], h, "sticky")
            } catch (l) {
                B().error("FixedLayer", "Failed to setup fixed elements:", l)
            }
        }
        ;
        function Rk(a, b, c, d, e) {
            for (var g = null, h = 0; h < a.M.length; h++)
                if (a.M[h].element == b && a.M[h].position == d) {
                    g = a.M[h];
                    break
                }
            h = "fixed" == d;
            g ? g.selectors.includes(c) || g.selectors.push(c) : (g = "F" + a.pg++,
            b.setAttribute("i-amphtml-fixedid", g),
            h ? b.__AMP_DECLFIXED = !0 : b.__AMP_DECLSTICKY = !0,
            g = {
                id: g,
                element: b,
                position: d,
                selectors: [c],
                fixedNow: !1,
                stickyNow: !1
            },
            a.M.push(g));
            g.forceTransfer = h && !!e
        }
        function Sk(a, b) {
            for (var c = [], d = 0; d < a.M.length; d++)
                if (a.M[d].element == b) {
                    a.A.mutate(function() {
                        S(b, "top", "")
                    });
                    var e = a.M[d];
                    a.M.splice(d, 1);
                    c.push(e)
                }
            return c
        }
        function Qk(a) {
            a.M.sort(function(a, c) {
                return a.element.compareDocumentPosition(c.element) & 1 ? 1 : -1
            })
        }
        function Vk(a, b, c, d) {
            var e = b.element;
            e.parentElement != a.ga && (x().warn("FixedLayer", "In order to improve scrolling performance in Safari, we now move the element to a fixed positioning layer:", b.element),
            b.placeholder || (S(e, "pointer-events", "initial"),
            (b.placeholder = ye(e)(Nk)).setAttribute("i-amphtml-fixedid", b.id)),
            S(e, "zIndex", "calc(" + (1E4 + c) + " + " + (d.zIndex || 0) + ")"),
            e.parentElement.replaceChild(b.placeholder, e),
            Uk(a).appendChild(e),
            b.selectors.some(function(a) {
                var b;
                a: {
                    try {
                        var c = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
                        if (c) {
                            b = c.call(e, a);
                            break a
                        }
                    } catch (l) {
                        B().error("FixedLayer", "Failed to test query match:", l)
                    }
                    b = !1
                }
                return b
            }) || (x().warn("FixedLayer", "Failed to move the element to the fixed position layer. This is most likely due to the compound CSS selector:", b.element),
            Tk(a, b)))
        }
        function Tk(a, b) {
            b.placeholder && a.ampdoc.contains(b.placeholder) && (a.ampdoc.contains(b.element) ? (S(b.element, "zIndex", ""),
            b.placeholder.parentElement.replaceChild(b.element, b.placeholder)) : b.placeholder.parentElement.removeChild(b.placeholder))
        }
        function Uk(a) {
            if (!a.Ba || a.ga)
                return a.ga;
            var b = a.ampdoc.win.document;
            a.ga = b.body.cloneNode(!1);
            a.ga.removeAttribute("style");
            Ld(a.ga, {
                position: "absolute",
                top: 0,
                left: 0,
                height: 0,
                width: 0,
                pointerEvents: "none",
                overflow: "hidden",
                animation: "none",
                background: "none",
                border: "none",
                borderImage: "none",
                boxSizing: "border-box",
                boxShadow: "none",
                display: "block",
                float: "none",
                margin: 0,
                opacity: 1,
                outline: "none",
                padding: "none",
                transform: "none",
                transition: "none",
                visibility: "visible"
            });
            b.documentElement.appendChild(a.ga);
            return a.ga
        }
        function Pk(a, b, c, d) {
            for (var e = 0; e < b.length; e++) {
                var g = b[e];
                1 == g.type ? "*" != g.selectorText && g.style.position && ("fixed" == g.style.position ? c.push(g.selectorText) : Ia(g.style.position, "sticky") && d.push(g.selectorText)) : 4 == g.type ? Pk(a, g.cssRules, c, d) : 12 == g.type && Pk(a, g.cssRules, c, d)
            }
        }
        ;function Wk(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.yc = fd(this.win);
            this.Aa = new V;
            this.ya = new V;
            this.lb = function() {
                b.Aa.fire()
            }
            ;
            this.kb = function() {
                return b.ya.fire()
            }
            ;
            this.J = R(this.win, "layers")
        }
        f = Wk.prototype;
        f.connect = function() {
            this.win.addEventListener("scroll", this.lb);
            this.win.addEventListener("resize", this.kb)
        }
        ;
        f.disconnect = function() {
            this.win.removeEventListener("scroll", this.lb);
            this.win.removeEventListener("resize", this.kb)
        }
        ;
        f.ensureReadyForElements = function() {}
        ;
        f.getBorderTop = function() {
            return 0
        }
        ;
        f.requiresFixedLayerTransfer = function() {
            return !1
        }
        ;
        f.supportsPositionFixed = function() {
            return !0
        }
        ;
        f.onScroll = function(a) {
            this.Aa.add(a)
        }
        ;
        f.onResize = function(a) {
            this.ya.add(a)
        }
        ;
        f.updatePaddingTop = function(a) {
            Jd(this.win.document.documentElement, {
                "padding-top": a + "px"
            })
        }
        ;
        f.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        }
        ;
        f.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        }
        ;
        f.disableScroll = function() {
            this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
        }
        ;
        f.resetScroll = function() {
            this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
        }
        ;
        f.updateLightboxMode = function() {
            return Promise.resolve()
        }
        ;
        f.getSize = function() {
            var a = this.win.innerWidth
              , b = this.win.innerHeight;
            if (a && b)
                return {
                    width: a,
                    height: b
                };
            var c = this.win.document.documentElement;
            return {
                width: c.clientWidth,
                height: c.clientHeight
            }
        }
        ;
        f.getScrollTop = function() {
            var a = this.getScrollingElement().scrollTop || this.win.pageYOffset
              , b = this.ampdoc.getRootNode().host;
            return b ? a - b.offsetTop : a
        }
        ;
        f.getScrollLeft = function() {
            return 0
        }
        ;
        f.getScrollWidth = function() {
            return this.getScrollingElement().scrollWidth
        }
        ;
        f.getScrollHeight = function() {
            return this.getScrollingElement().scrollHeight
        }
        ;
        f.getContentHeight = function() {
            var a = this.win.document.body.getBoundingClientRect();
            return a.height + a.top + this.getScrollTop()
        }
        ;
        f.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            if (this.J)
                return X(a.left, a.top, a.width, a.height);
            var d = void 0 != c ? c : this.getScrollTop()
              , e = void 0 != b ? b : this.getScrollLeft();
            return X(Math.round(a.left + e), Math.round(a.top + d), Math.round(a.width), Math.round(a.height))
        }
        ;
        f.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        }
        ;
        f.setScrollTop = function(a) {
            this.getScrollingElement().scrollTop = a
        }
        ;
        f.getScrollingElement = function() {
            var a = this.win.document;
            return a.scrollingElement ? a.scrollingElement : a.body && this.yc.isWebKit() ? a.body : a.documentElement
        }
        ;
        function Xk(a, b) {
            return {
                left: a,
                top: b
            }
        }
        var Yk = []
          , Zk = 0;
        function $k(a, b) {
            var c = this;
            a = a.win;
            this.ih = b;
            this.Rd = null;
            this.xb = [];
            this.Lc = [];
            this.Lc.push(be(a.document, "scroll", function(a) {
                a = a.target;
                var d = a.nodeType == Node.ELEMENT_NODE ? a : b;
                a = d;
                var g = al(a);
                g && g.isLayer() ? g.dirtyScrollMeasurements() : g = bl(c, a, !1);
                c.qe = g;
                c.Rd && c.Rd()
            }, {
                capture: !0,
                passive: !0
            }));
            this.Lc.push(be(a, "resize", function() {
                for (var a = c.xb, b = 0; b < a.length; b++) {
                    var g = a[b];
                    g.undeclareLayer();
                    g.forgetParentLayer()
                }
            }, {
                capture: !0,
                passive: !0
            }));
            this.qe = bl(this, b, !0)
        }
        f = $k.prototype;
        f.dispose = function() {
            this.Lc.forEach(function(a) {
                return a()
            });
            this.Lc.length = 0
        }
        ;
        f.add = function(a) {
            var b = al(a);
            b || (b = new cl(a));
            -1 === this.xb.indexOf(b) && this.xb.push(b);
            return b
        }
        ;
        f.remove = function(a) {
            if (a = al(a)) {
                var b = this.xb.indexOf(a);
                -1 < b && this.xb.splice(b, 1);
                (b = a.getParentLayer()) && b.remove(a);
                a.undeclareLayer()
            }
        }
        ;
        f.getScrolledPosition = function(a, b) {
            return this.add(a).getScrolledPosition(b)
        }
        ;
        f.getOffsetPosition = function(a, b) {
            return this.add(a).getOffsetPosition(b)
        }
        ;
        f.getSize = function(a) {
            return this.add(a).getSize()
        }
        ;
        f.remeasure = function(a, b) {
            a = this.add(a);
            a = a.getParentLayer() || a;
            b && a.dirtyMeasurements();
            a.remeasure()
        }
        ;
        f.declareLayer = function(a) {
            bl(this, a, !1)
        }
        ;
        f.dirty = function(a) {
            var b = dl(a) || al(this.ih);
            b.dirtyMeasurements()
        }
        ;
        function bl(a, b, c) {
            a = a.add(b);
            a.declareLayer(c);
            return a
        }
        f.onScroll = function(a) {
            this.Rd = a
        }
        ;
        f.getActiveLayer = function() {
            return this.qe
        }
        ;
        f.iterateAncestry = function(a, b, c) {
            return this.add(a).iterateAncestry(b, c)
        }
        ;
        function cl(a) {
            a.__AMP_LAYOUT = this;
            this.$ = a;
            this.od = a.tagName + "-" + Zk++;
            this.Bb = void 0;
            this.fb = !0;
            this.Z = {
                height: 0,
                width: 0
            };
            this.vf = Xk(0, 0);
            this.vd = void 0;
            this.qc = this.Bd = this.Ya = !1;
            this.la = this.Ma = 0;
            this.Ta = []
        }
        function al(a) {
            return a.__AMP_LAYOUT || null
        }
        function dl(a, b) {
            if (!b && (b = al(a)))
                return b.getParentLayer();
            b = a.ownerDocument.defaultView;
            for (var c = a, d = a; d; d = d.parentNode) {
                var e = d === a ? null : al(d);
                if (e && e.isLayer())
                    return e;
                if (d === c) {
                    if ("fixed" == Nd(b, c).position)
                        return J(c, "layers").declareLayer(c),
                        c === a ? null : al(c);
                    c = c.offsetParent
                }
            }
            return null
        }
        f = cl.prototype;
        f.getId = function() {
            return this.od
        }
        ;
        f.contains = function(a) {
            return a !== this && this.$.contains(a.$)
        }
        ;
        f.add = function(a) {
            this.isLayer();
            this.contains(a);
            this.Ta.push(a)
        }
        ;
        f.remove = function(a) {
            this.isLayer();
            a.getParentLayer();
            var b = this.Ta.indexOf(a);
            -1 < b && (this.Ta.splice(b, 1),
            a.forgetParentLayer())
        }
        ;
        f.isLayer = function() {
            return this.Ya
        }
        ;
        f.declareLayer = function(a) {
            this.Ya || (this.Ya = !0,
            this.Bd = a,
            this.qc = this.fb = !0,
            (a = this.getParentLayer()) && a.Ba(this))
        }
        ;
        f.undeclareLayer = function() {
            if (this.Ya && !this.Bd) {
                var a = this.$;
                "fixed" !== Nd(a.ownerDocument.defaultView, a).position && (this.Ya = !1,
                a = this.getParentLayer() || dl(this.$, !0),
                this.Ba(a))
            }
        }
        ;
        f.Ba = function(a) {
            var b = a.contains(this);
            Xf(this.Ta, function(c) {
                return b || a.contains(c) ? (c.fb = !0,
                c.Bb = a,
                a.Ta.push(c),
                !1) : !0
            })
        }
        ;
        f.getParentLayer = function() {
            if (void 0 === this.Bb) {
                var a = dl(this.$, !0);
                (this.Bb = a) && a.add(this)
            }
            return this.Bb
        }
        ;
        f.forgetParentLayer = function() {
            this.Bb = void 0
        }
        ;
        f.getSize = function() {
            this.remeasure();
            return this.Z
        }
        ;
        f.getOffsetFromParent = function() {
            this.remeasure();
            return this.vf
        }
        ;
        f.isActiveUnsafe = function() {
            return this.vd
        }
        ;
        f.getHorizontalDistanceFromParent = function() {
            var a = this.getParentLayer();
            if (!a)
                return 0;
            var b = this.getOffsetFromParent().left
              , c = this.getSize().width
              , d = a.getScrollLeft()
              , e = a.getSize().width;
            return b + c < d ? d - (b + c) : d + e < b ? b - (d + e) : 0
        }
        ;
        f.getHorizontalViewportsFromParent = function() {
            var a = this.getHorizontalDistanceFromParent();
            if (0 === a)
                return 0;
            var b = this.getParentLayer().getSize().width;
            return a / b
        }
        ;
        f.getVerticalDistanceFromParent = function() {
            var a = this.getParentLayer();
            if (!a)
                return 0;
            var b = this.getOffsetFromParent().top
              , c = this.getSize().height
              , d = a.getScrollTop()
              , e = a.getSize().height;
            return b + c < d ? d - (b + c) : d + e < b ? b - (d + e) : 0
        }
        ;
        f.getVerticalViewportsFromParent = function() {
            var a = this.getVerticalDistanceFromParent();
            if (0 === a)
                return 0;
            var b = this.getParentLayer().getSize().height;
            return a / b
        }
        ;
        f.getScrollTop = function() {
            el(this);
            return this.la
        }
        ;
        f.getScrollLeft = function() {
            el(this);
            return this.Ma
        }
        ;
        f.getScrolledPosition = function(a) {
            var b = this.getScrollLeft()
              , c = this.getScrollTop()
              , d = a ? dl(a) : null;
            for (a = this; a !== d; a = a.getParentLayer())
                var e = a.getOffsetFromParent()
                  , b = b + (e.left - a.getScrollLeft())
                  , c = c + (e.top - a.getScrollTop());
            return Xk(b, c)
        }
        ;
        f.getOffsetPosition = function(a) {
            var b = 0
              , c = 0;
            a = a ? dl(a) : null;
            for (var d = this; d !== a; d = d.getParentLayer())
                var e = d.getOffsetFromParent()
                  , b = b + e.left
                  , c = c + e.top;
            return Xk(b, c)
        }
        ;
        f.dirtyMeasurements = function() {
            this.fb = !0
        }
        ;
        f.dirtyScrollMeasurements = function() {
            this.qc = !0
        }
        ;
        f.remeasure = function() {
            for (var a = this, b = this.getParentLayer(); b; b = b.getParentLayer())
                b.fb && (a = b);
            a.fb && fl(a)
        }
        ;
        f.iterateAncestry = function(a, b) {
            for (var c = J(this.$, "layers").getActiveLayer(), d = c === this || c.contains(this), e = this; e; )
                Yk.push(e),
                e.vd = d,
                e === c && (d = !1),
                e = e.getParentLayer();
            for (var g = void 0, e = Yk.length, h = 0; h < e; h++) {
                var k = Yk.pop()
                  , g = a(g, k, h, b);
                k.vd = void 0
            }
            return g
        }
        ;
        function fl(a, b) {
            el(a);
            a.fb = !1;
            var c = a.$
              , d = b;
            if (!d)
                var e = a.getParentLayer()
                  , d = e ? gl(e) : Xk(0, 0);
            a.Z = {
                height: c.clientHeight,
                width: c.clientWidth
            };
            e = c.getBoundingClientRect();
            c = e.left;
            e = e.top;
            a.Bd && (c += a.getScrollLeft(),
            e += a.getScrollTop());
            a.vf = Xk(c - d.left, e - d.top);
            c = a.Ta;
            if (c.length)
                for (a = gl(a),
                e = 0; e < c.length; e++)
                    fl(c[e], a)
        }
        function el(a) {
            a.Ya && a.qc && (a.qc = !1,
            a.Ma = a.$.scrollLeft,
            a.la = a.$.scrollTop)
        }
        function gl(a) {
            var b = a.getScrolledPosition();
            return Xk(b.left - a.getScrollLeft(), b.top - a.getScrollTop())
        }
        function hl(a, b) {
            M(a, "layers", function(a) {
                return new $k(a,b)
            }, !0)
        }
        ;function il(a, b) {
            return function(c) {
                return a + (b - a) * c
            }
        }
        ;function jl(a) {
            var b = this;
            this.win = a;
            a = this.win.document;
            var c = a.documentElement
              , d = c.className;
            c.className = "i-amphtml-ios-embed";
            var e = a.createElement("html");
            this.V = e;
            e.id = "i-amphtml-wrapper";
            e.className = d;
            this.Aa = new V;
            this.ya = new V;
            this.lb = this.sf.bind(this);
            this.kb = function() {
                return b.ya.fire()
            }
            ;
            this.J = R(this.win, "layers");
            this.Hf = !1;
            Dc(a, this.If.bind(this));
            We(a).then(function() {
                c.classList.add("i-amphtml-ios-overscroll")
            })
        }
        f = jl.prototype;
        f.ensureReadyForElements = function() {
            this.If()
        }
        ;
        f.If = function() {
            if (!this.Hf) {
                this.Hf = !0;
                var a = this.win.document
                  , b = a.body;
                a.documentElement.appendChild(this.V);
                this.V.appendChild(b);
                Object.defineProperty(a, "body", {
                    get: function() {
                        return b
                    }
                });
                this.sf()
            }
        }
        ;
        f.connect = function() {
            this.win.addEventListener("resize", this.kb);
            this.V.addEventListener("scroll", this.lb)
        }
        ;
        f.disconnect = function() {
            this.win.removeEventListener("resize", this.kb);
            this.V.removeEventListener("scroll", this.lb)
        }
        ;
        f.getBorderTop = function() {
            return 1
        }
        ;
        f.requiresFixedLayerTransfer = function() {
            return !0
        }
        ;
        f.supportsPositionFixed = function() {
            return !0
        }
        ;
        f.onScroll = function(a) {
            this.Aa.add(a)
        }
        ;
        f.onResize = function(a) {
            this.ya.add(a)
        }
        ;
        f.updatePaddingTop = function(a) {
            Jd(this.V, {
                "padding-top": a + "px"
            })
        }
        ;
        f.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        }
        ;
        f.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        }
        ;
        f.disableScroll = function() {
            this.V.classList.add("i-amphtml-scroll-disabled")
        }
        ;
        f.resetScroll = function() {
            this.V.classList.remove("i-amphtml-scroll-disabled")
        }
        ;
        f.updateLightboxMode = function() {
            return Promise.resolve()
        }
        ;
        f.getSize = function() {
            return {
                width: this.win.innerWidth,
                height: this.win.innerHeight
            }
        }
        ;
        f.getScrollTop = function() {
            return this.V.scrollTop
        }
        ;
        f.getScrollLeft = function() {
            return 0
        }
        ;
        f.getScrollWidth = function() {
            return this.V.scrollWidth
        }
        ;
        f.getScrollHeight = function() {
            return this.V.scrollHeight
        }
        ;
        f.getContentHeight = function() {
            var a = this.win.document.body.getBoundingClientRect();
            return a.height + a.top + this.getScrollTop()
        }
        ;
        f.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            if (this.J)
                return X(a.left, a.top, a.width, a.height);
            c = void 0 != c ? c : this.getScrollTop();
            b = void 0 != b ? b : this.getScrollLeft();
            return X(Math.round(a.left + b), Math.round(a.top + c), Math.round(a.width), Math.round(a.height))
        }
        ;
        f.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        }
        ;
        f.setScrollTop = function(a) {
            this.V.scrollTop = a || 1
        }
        ;
        f.sf = function(a) {
            0 == this.V.scrollTop && (this.V.scrollTop = 1,
            a && a.preventDefault());
            a && this.Aa.fire()
        }
        ;
        f.getScrollingElement = function() {
            return this.V
        }
        ;
        function kl(a, b, c) {
            var d = this;
            this.ampdoc = a;
            this.Ha = this.ampdoc.win.document;
            this.j = b;
            this.h = c;
            this.la = this.Z = this.Eb = null;
            this.$d = !1;
            this.Ma = null;
            this.R = Number(c.getParam("paddingTop") || 0);
            this.hc = 0;
            this.P = O(this.ampdoc.win);
            this.A = hd(this.ampdoc.win);
            this.be = !1;
            this.Gf = 0;
            this.Ke = new V;
            this.Aa = new V;
            this.ya = new V;
            this.Td = this.Ob = void 0;
            (this.J = R(this.ampdoc.win, "layers")) && hl(this.ampdoc, this.j.getScrollingElement());
            this.aa = new Ok(this.ampdoc,this.A,this.j.getBorderTop(),this.R,this.j.requiresFixedLayerTransfer());
            this.ampdoc.whenReady().then(function() {
                return d.aa.setup()
            });
            this.h.onMessage("viewport", this.rh.bind(this));
            this.h.onMessage("scroll", this.vh.bind(this));
            this.h.onMessage("disableScroll", this.sg.bind(this));
            this.j.updatePaddingTop(this.R);
            this.j.onScroll(this.hh.bind(this));
            this.j.onResize(this.Ef.bind(this));
            this.onScroll(this.jh.bind(this));
            this.ha = !1;
            this.h.onVisibilityChanged(this.Sf.bind(this));
            this.Sf();
            this.ampdoc.isSingleDoc() && this.Ha.documentElement.classList.add("i-amphtml-singledoc");
            c.isEmbedded() ? this.Ha.documentElement.classList.add("i-amphtml-embedded") : this.Ha.documentElement.classList.add("i-amphtml-standalone");
            Tc(this.ampdoc.win) && this.Ha.documentElement.classList.add("i-amphtml-iframed");
            "1" === c.getParam("webview") && this.Ha.documentElement.classList.add("i-amphtml-webview");
            Tc(this.ampdoc.win) && "scrollRestoration"in this.ampdoc.win.history && (this.ampdoc.win.history.scrollRestoration = "manual")
        }
        f = kl.prototype;
        f.dispose = function() {
            this.j.disconnect()
        }
        ;
        f.ensureReadyForElements = function() {
            this.j.ensureReadyForElements()
        }
        ;
        f.Sf = function() {
            var a = this.h.isVisible();
            a != this.ha && ((this.ha = a) ? (this.j.connect(),
            this.Z && this.Ef()) : this.j.disconnect())
        }
        ;
        f.getPaddingTop = function() {
            return this.R
        }
        ;
        f.getTop = function() {
            return this.getScrollTop()
        }
        ;
        f.getScrollTop = function() {
            null == this.la && (this.la = this.j.getScrollTop());
            return this.la
        }
        ;
        f.getScrollLeft = function() {
            null == this.Ma && (this.Ma = this.j.getScrollLeft());
            return this.Ma
        }
        ;
        f.setScrollTop = function(a) {
            this.la = null;
            this.j.setScrollTop(a)
        }
        ;
        f.updatePaddingBottom = function(a) {
            this.ampdoc.whenBodyAvailable().then(function(b) {
                S(b, "borderBottom", a + "px solid transparent")
            })
        }
        ;
        f.getSize = function() {
            if (this.Z)
                return this.Z;
            this.Z = this.j.getSize();
            if (0 == this.Z.width || 0 == this.Z.height) {
                var a = this.h.getVisibilityState();
                ("prerender" == a || "visible" == a) && .01 > Math.random() && B().error("Viewport", "viewport has zero dimensions")
            }
            return this.Z
        }
        ;
        f.getHeight = function() {
            return this.getSize().height
        }
        ;
        f.getWidth = function() {
            return this.getSize().width
        }
        ;
        f.getScrollWidth = function() {
            return this.j.getScrollWidth()
        }
        ;
        f.getScrollHeight = function() {
            return this.j.getScrollHeight()
        }
        ;
        f.getContentHeight = function() {
            return this.j.getContentHeight()
        }
        ;
        f.getRect = function() {
            if (null == this.Eb) {
                var a = 0
                  , b = 0;
                this.J || (a = this.getScrollTop(),
                b = this.getScrollLeft());
                var c = this.getSize();
                this.Eb = X(b, a, c.width, c.height)
            }
            return this.Eb
        }
        ;
        f.getLayoutRect = function(a) {
            var b = this.getScrollLeft()
              , c = this.getScrollTop()
              , d = xc(a, this.ampdoc.win);
            return d ? (a = this.j.getLayoutRect(a, 0, 0),
            b = this.j.getLayoutRect(d, b, c),
            X(Math.round(a.left + b.left), Math.round(a.top + b.top), Math.round(a.width), Math.round(a.height))) : this.j.getLayoutRect(a, b, c)
        }
        ;
        f.getClientRectAsync = function(a) {
            var b = this;
            if (this.J)
                return this.A.measurePromise(function() {
                    return b.getLayoutRect(a)
                });
            var c = this.A.measurePromise(function() {
                return a.getBoundingClientRect()
            })
              , d = this.j.getRootClientRectAsync()
              , e = xc(a, this.ampdoc.win);
            e && (d = this.A.measurePromise(function() {
                return e.getBoundingClientRect()
            }));
            return Promise.all([c, d]).then(function(a) {
                var b = a[0];
                return (a = a[1]) ? $e(b, a.left, a.top) : X(Number(b.left), Number(b.top), Number(b.width), Number(b.height))
            })
        }
        ;
        f.supportsPositionFixed = function() {
            return this.j.supportsPositionFixed()
        }
        ;
        f.isDeclaredFixed = function(a) {
            return this.aa.isDeclaredFixed(a)
        }
        ;
        f.scrollIntoView = function(a) {
            var b = this.j.getLayoutRect(a).top, c;
            c = this.J ? b + this.getScrollTop() : Math.max(0, b - this.R);
            this.j.setScrollTop(c)
        }
        ;
        f.animateScrollIntoView = function(a, b, c, d) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? "ease-in" : c;
            d = void 0 === d ? "top" : d;
            var e = this;
            a = this.j.getLayoutRect(a);
            switch (d) {
            case "bottom":
                d = -this.getHeight() + a.height;
                break;
            case "center":
                d = -this.getHeight() / 2 + a.height / 2;
                break;
            default:
                d = 0
            }
            var g;
            if (this.J)
                d = a.top + d,
                g = 0;
            else {
                var h = a.top - this.R + d;
                d = Math.max(0, h);
                g = this.getScrollTop()
            }
            if (d == g)
                return Promise.resolve();
            var k = il(g, d);
            return Lk(this.ampdoc.getRootNode(), function(a) {
                e.j.setScrollTop(k(a))
            }, b, c).then()
        }
        ;
        f.onChanged = function(a) {
            return this.Ke.add(a)
        }
        ;
        f.onScroll = function(a) {
            return this.Aa.add(a)
        }
        ;
        f.onResize = function(a) {
            return this.ya.add(a)
        }
        ;
        f.enterLightboxMode = function(a) {
            this.h.sendMessage("requestFullOverlay", {}, !0);
            this.enterOverlayMode();
            this.hideFixedLayer();
            a && this.maybeEnterFieLightboxMode(a);
            return this.j.updateLightboxMode(!0)
        }
        ;
        f.leaveLightboxMode = function(a) {
            this.h.sendMessage("cancelFullOverlay", {}, !0);
            this.showFixedLayer();
            this.leaveOverlayMode();
            a && this.maybeLeaveFieLightboxMode(a);
            return this.j.updateLightboxMode(!1)
        }
        ;
        f.isLightboxExperimentOn = function() {
            return R(this.ampdoc.win, "amp-lightbox-a4a-proto")
        }
        ;
        f.maybeEnterFieLightboxMode = function(a) {
            var b = ll(this, a);
            b && (this.isLightboxExperimentOn(),
            b.enterFullOverlayMode())
        }
        ;
        f.maybeLeaveFieLightboxMode = function(a) {
            (a = ll(this, a)) && a.leaveFullOverlayMode()
        }
        ;
        function ll(a, b) {
            var c = xc(b, a.ampdoc.win);
            return c && c.__AMP_EMBED__
        }
        f.enterOverlayMode = function() {
            this.disableTouchZoom();
            this.disableScroll()
        }
        ;
        f.leaveOverlayMode = function() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        }
        ;
        f.disableScroll = function() {
            var a = this;
            this.A.mutate(function() {
                a.j.disableScroll()
            })
        }
        ;
        f.resetScroll = function() {
            var a = this;
            this.A.mutate(function() {
                a.j.resetScroll()
            })
        }
        ;
        f.resetTouchZoom = function() {
            var a = this
              , b = this.ampdoc.win.innerHeight
              , c = this.Ha.documentElement.clientHeight;
            b && c && b === c || this.disableTouchZoom() && this.P.delay(function() {
                a.restoreOriginalTouchZoom()
            }, 50)
        }
        ;
        f.disableTouchZoom = function() {
            var a = ml(this);
            if (!a)
                return !1;
            var b = a.content
              , c = {
                "maximum-scale": "1",
                "user-scalable": "no"
            };
            var d = Object.create(null);
            if (b)
                for (var e = b.split(/,|;/), g = 0; g < e.length; g++) {
                    var h = e[g].split("=")
                      , k = h[0].trim()
                      , h = h[1]
                      , h = (h || "").trim();
                    k && (d[k] = h)
                }
            var e = !1, l;
            for (l in c)
                d[l] !== c[l] && (e = !0,
                void 0 !== c[l] ? d[l] = c[l] : delete d[l]);
            if (e) {
                var b = "", m;
                for (m in d)
                    0 < b.length && (b += ","),
                    b = d[m] ? b + (m + "=" + d[m]) : b + m
            }
            d = b;
            return nl(this, d)
        }
        ;
        f.restoreOriginalTouchZoom = function() {
            return void 0 !== this.Td ? nl(this, this.Td) : !1
        }
        ;
        f.hasScrolled = function() {
            return 0 < this.Gf
        }
        ;
        f.hideFixedLayer = function() {
            this.aa.setVisible(!1)
        }
        ;
        f.showFixedLayer = function() {
            this.aa.setVisible(!0)
        }
        ;
        f.updateFixedLayer = function() {
            this.aa.update()
        }
        ;
        f.addToFixedLayer = function(a, b) {
            return this.aa.addElement(a, b)
        }
        ;
        f.removeFromFixedLayer = function(a) {
            this.aa.removeElement(a)
        }
        ;
        function nl(a, b) {
            return (a = ml(a)) && a.content != b ? (a.content = b,
            !0) : !1
        }
        function ml(a) {
            if (Tc(a.ampdoc.win))
                return null;
            void 0 === a.Ob && (a.Ob = a.Ha.querySelector("meta[name=viewport]"),
            a.Ob && (a.Td = a.Ob.content));
            return a.Ob
        }
        f.vh = function(a) {
            var b = a.scrollTop;
            this.setScrollTop(b)
        }
        ;
        f.rh = function(a) {
            var b = this
              , c = a.paddingTop
              , d = a.duration || 0
              , e = a.curve
              , g = a["transient"];
            void 0 != c && c != this.R && (this.hc = this.R,
            this.R = c,
            this.R < this.hc ? (this.j.hideViewerHeader(g, this.hc),
            ol(this, d, e, g)) : ol(this, d, e, g).then(function() {
                b.j.showViewerHeader(g, b.R)
            }))
        }
        ;
        f.sg = function(a) {
            a ? this.disableScroll() : this.resetScroll()
        }
        ;
        function ol(a, b, c, d) {
            a.aa.updatePaddingTop(a.R, d);
            if (0 >= b)
                return Promise.resolve();
            var e = il(a.hc - a.R, 0);
            return Lk(a.ampdoc.getRootNode(), function(b) {
                b = e(b);
                a.aa.transformMutate("translateY(" + b + "px)")
            }, b, c).thenAlways(function() {
                a.aa.transformMutate(null)
            })
        }
        function pl(a, b, c) {
            var d = a.getSize()
              , e = a.getScrollTop()
              , g = a.getScrollLeft();
            a.Ke.fire({
                relayoutAll: b,
                top: e,
                left: g,
                width: d.width,
                height: d.height,
                velocity: c
            })
        }
        f.hh = function() {
            var a = this;
            this.Eb = null;
            this.Gf++;
            this.Ma = this.j.getScrollLeft();
            var b = this.j.getScrollTop();
            if (!(0 > b)) {
                this.la = b;
                if (!this.be) {
                    this.be = !0;
                    var c = Date.now();
                    this.P.delay(function() {
                        a.A.measure(function() {
                            a.Of(c, b)
                        })
                    }, 36)
                }
                this.Aa.fire()
            }
        }
        ;
        f.Of = function(a, b) {
            var c = this
              , d = this.la = this.j.getScrollTop()
              , e = Date.now()
              , g = 0;
            e != a && (g = (d - b) / (e - a));
            .03 > Math.abs(g) ? (pl(this, !1, g),
            this.be = !1) : this.P.delay(function() {
                return c.A.measure(c.Of.bind(c, e, d))
            }, 20)
        }
        ;
        f.jh = function() {
            var a = this;
            this.$d || (this.$d = !0,
            this.A.measure(function() {
                a.$d = !1;
                a.h.sendMessage("scroll", F({
                    scrollTop: a.getScrollTop()
                }), !0)
            }))
        }
        ;
        f.Ef = function() {
            var a = this;
            this.Eb = null;
            var b = this.Z;
            this.Z = null;
            var c = this.getSize();
            this.aa.update().then(function() {
                var d = !b || b.width != c.width;
                pl(a, d, 0);
                var e = d || b.height != c.height;
                e && a.ya.fire({
                    relayoutAll: d,
                    width: c.width,
                    height: c.height
                })
            })
        }
        ;
        function ql(a) {
            var b = Q(a), c;
            if (c = a.isSingleDoc()) {
                c = a.win;
                var d = b.getParam("viewportType") || rl;
                fd(c).isIos() && d == rl ? !Tc(c) && t(c).development ? c = sl : (Tc(c),
                c = Tc(c) && b.isEmbedded() ? sl : d) : c = d;
                c = c == sl
            }
            c = c ? new jl(a.win) : new Wk(a);
            return new kl(a,c,b)
        }
        var rl = "natural"
          , sl = "natural-ios-embed";
        function tl(a) {
            var b = this;
            this.win = a;
            this.Fa = bd(this.win);
            this.nb = N(this.win, "documentState");
            this.$g = ul(this);
            this.I = [];
            this.Pd = [];
            this.ge = [];
            this.Od = [];
            this.ka = !1;
            this.Nd = this.rc = null;
            this.Zc = this.gh.bind(this);
            this.Bg = new eg(this.win,this.Zc,16);
            this.ve = new eg(this.win,this.Zc,40);
            this.de = null;
            var c = this.Sd.bind(this);
            if (this.Fa.isSingleDoc())
                ec(this.Fa.getAmpDoc(), "viewer").then(function(a) {
                    b.de = a;
                    a.onVisibilityChanged(c)
                });
            else
                this.nb.onVisibilityChanged(c);
            this.df = new ag(this.win)
        }
        f = tl.prototype;
        f.Sd = function() {
            this.ka && vl(this)
        }
        ;
        f.run = function(a, b) {
            this.I.push(a);
            this.ge.push(b || void 0);
            this.La()
        }
        ;
        f.runPromise = function(a, b) {
            var c = this;
            this.run(a, b);
            return this.rc ? this.rc : this.rc = new Promise(function(a) {
                c.Nd = a
            }
            )
        }
        ;
        f.createTask = function(a) {
            var b = this;
            return function(c) {
                b.run(a, c)
            }
        }
        ;
        f.mutate = function(a) {
            this.run({
                measure: void 0,
                mutate: a
            })
        }
        ;
        f.mutatePromise = function(a) {
            return this.runPromise({
                measure: void 0,
                mutate: a
            })
        }
        ;
        f.measure = function(a) {
            this.run({
                measure: a,
                mutate: void 0
            })
        }
        ;
        f.measurePromise = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.measure(function() {
                    c(a())
                })
            }
            )
        }
        ;
        f.canAnimate = function(a) {
            return wl(this, a)
        }
        ;
        function wl(a, b) {
            return a.nb.isHidden() ? !1 : a.de ? a.de.isVisible() : b ? (a = a.Fa.getAmpDoc(b),
            Q(a).isVisible()) : !0
        }
        f.runAnim = function(a, b, c) {
            if (!wl(this, a))
                return B().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"),
                !1;
            this.run(b, c);
            return !0
        }
        ;
        f.createAnimTask = function(a, b) {
            var c = this;
            return function(d) {
                return c.runAnim(a, b, d)
            }
        }
        ;
        f.runAnimMutateSeries = function(a, b, c) {
            var d = this;
            return wl(this, a) ? new Promise(function(e, g) {
                var h = Date.now()
                  , k = 0
                  , l = d.createAnimTask(a, {
                    mutate: function(a) {
                        var d = Date.now() - h;
                        b(d, d - k, a) ? c && d > c ? g(Error("timeout")) : (k = d,
                        l(a)) : e()
                    }
                });
                l({})
            }
            ) : Promise.reject(Error("CANCELLED"))
        }
        ;
        f.La = function() {
            this.ka || (this.ka = !0,
            this.df.onScheduled(),
            vl(this))
        }
        ;
        function vl(a) {
            wl(a) ? (a.$g(a.Zc),
            a.ve.schedule()) : a.Bg.schedule()
        }
        f.gh = function() {
            this.ve.cancel();
            this.ka = !1;
            this.df.onRun();
            var a = this.I
              , b = this.ge
              , c = this.Nd;
            this.rc = this.Nd = null;
            this.I = this.Pd;
            this.ge = this.Od;
            for (var d = 0; d < a.length; d++)
                a[d].measure && !xl(a[d].measure, b[d]) && (a[d].mutate = void 0);
            for (d = 0; d < a.length; d++)
                a[d].mutate && xl(a[d].mutate, b[d]);
            this.Pd = a;
            this.Od = b;
            this.Pd.length = 0;
            this.Od.length = 0;
            c && c()
        }
        ;
        function ul(a) {
            var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
            if (b)
                return b.bind(a.win);
            var c = 0;
            return function(b) {
                var d = Date.now()
                  , g = Math.max(0, 16 - (d - c));
                c = d + g;
                a.win.setTimeout(b, g)
            }
        }
        function xl(a, b) {
            try {
                a(b)
            } catch (c) {
                return wa(c),
                !1
            }
            return !0
        }
        ;var yl = "alt title referrerpolicy aria-label aria-describedby aria-labelledby".split(" ")
          , zl = yl.concat(["srcset", "src", "sizes"]);
        function Al(a) {
            uh.call(this, a);
            this.cf = this.Qb = !0;
            this.Kb = this.H = null;
            this.jb = R(this.win, "amp-img-native-srcset")
        }
        aa(Al, uh);
        f = Al.prototype;
        f.mutatedAttributesCallback = function(a) {
            var b = !1;
            this.jb || (void 0 !== a.srcset ? (this.Kb = gg(this.element),
            b = !0) : void 0 !== a.src && (this.Kb = ig(this.element.getAttribute("src")),
            b = !0),
            b && this.H && Bl(this));
            if (this.H) {
                var c = this.jb ? zl : yl
                  , d = c.filter(function(b) {
                    return void 0 !== a[b]
                });
                this.propagateAttributes(d, this.H, !0);
                this.jb && Cl(this)
            }
        }
        ;
        f.preconnectCallback = function(a) {
            var b = this.element.getAttribute("src");
            if (b)
                this.preconnect.url(b, a);
            else {
                var c = this.element.getAttribute("srcset");
                if (c) {
                    var d = /https?:\/\/\S+/.exec(c);
                    d && this.preconnect.url(d[0], a)
                }
            }
        }
        ;
        f.buildCallback = function() {
            this.cf = !this.element.hasAttribute("noprerender")
        }
        ;
        f.isLayoutSupported = function(a) {
            return Fe(a)
        }
        ;
        f.ac = function() {
            this.H || (this.jb || this.Kb || (this.Kb = gg(this.element)),
            this.Qb = !this.element.hasAttribute("fallback"),
            this.element.hasAttribute("i-amphtml-ssr") && (this.H = this.element.querySelector("img")),
            this.H = this.H || new Image,
            this.H.setAttribute("decoding", "async"),
            this.element.id && this.H.setAttribute("amp-img-id", this.element.id),
            "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"),
            this.user().error("AMP-IMG", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.")),
            this.jb ? (this.propagateAttributes(zl, this.H),
            Cl(this)) : this.propagateAttributes(yl, this.H),
            this.applyFillContent(this.H, !0),
            this.element.appendChild(this.H))
        }
        ;
        f.prerenderAllowed = function() {
            return this.cf
        }
        ;
        f.isRelayoutNeeded = function() {
            return !0
        }
        ;
        f.reconstructWhenReparented = function() {
            return !1
        }
        ;
        f.layoutCallback = function() {
            var a = this;
            this.ac();
            var b = Bl(this);
            this.Qb && (b = b.catch(function(b) {
                Dl(a);
                throw b;
            }),
            this.Qb = !1);
            return b
        }
        ;
        function Cl(a) {
            if (!a.H.hasAttribute("src") && 0 == "srcset"in a.H) {
                var b = a.element.getAttribute("srcset");
                (b = /\S+/.match(b)) && a.H.setAttribute("src", b[0])
            }
        }
        function Bl(a) {
            if (0 >= a.getLayoutWidth())
                return Promise.resolve();
            if (!a.jb) {
                var b = a.Kb.select(a.getViewport().getWidth() || a.win.screen.width, a.getDpr());
                if (b == a.H.getAttribute("src"))
                    return Promise.resolve();
                a.H.setAttribute("src", b)
            }
            return a.loadPromise(a.H).then(function() {
                !a.Qb && a.H.classList.contains("i-amphtml-ghost") && a.getVsync().mutate(function() {
                    a.H.classList.remove("i-amphtml-ghost");
                    a.toggleFallback(!1)
                })
            })
        }
        function Dl(a) {
            a.getVsync().mutate(function() {
                a.H.classList.add("i-amphtml-ghost");
                a.toggleFallback(!0);
                a.togglePlaceholder(!1)
            })
        }
        ;function El(a) {
            uh.apply(this, arguments)
        }
        aa(El, uh);
        El.prototype.isLayoutSupported = function(a) {
            return Fe(a)
        }
        ;
        El.prototype.buildCallback = function() {
            var a = this.win.document.createElement("div");
            this.applyFillContent(a);
            this.getRealChildNodes().forEach(function(b) {
                a.appendChild(b)
            });
            this.element.appendChild(a)
        }
        ;
        function Fl(a) {
            uh.call(this, a);
            this.ie = null
        }
        aa(Fl, uh);
        Fl.prototype.isLayoutSupported = function() {
            return !0
        }
        ;
        Fl.prototype.buildCallback = function() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Ac = this.element.getAttribute("referrerpolicy")) && x().assert("no-referrer" == this.Ac, 'amp-pixel: invalid "referrerpolicy" value "' + this.Ac + '". Only "no-referrer" is supported');
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? B().info("amp-pixel", "inabox img already present") : Q(this.getAmpDoc()).whenFirstVisible().then(this.ph.bind(this))
        }
        ;
        Fl.prototype.ph = function() {
            var a = this;
            if (this.ie)
                return B().error("amp-pixel", "duplicate pixel"),
                this.ie;
            this.ie = O(this.win).promise(1).then(function() {
                var b = a.element.getAttribute("src");
                if (b)
                    return Vb(a.element, "url-replace", !0).expandUrlAsync(Gl(b)).then(function(b) {
                        var c;
                        if (a.Ac)
                            if (c = a.element,
                            "referrerPolicy"in Image.prototype)
                                c = Hl(c.ownerDocument.defaultView, b, !0);
                            else {
                                var e = c.ownerDocument, g = F({
                                    src: "about:blank"
                                }), e = e.createElement("iframe"), h;
                                for (h in g)
                                    e.setAttribute(h, g[h]);
                                c.appendChild(e);
                                Hl(e.contentWindow, b);
                                c = e
                            }
                        else
                            c = Hl(a.win, b);
                        var k = c;
                        B().info("amp-pixel", "pixel triggered: ", b);
                        return k
                    })
            })
        }
        ;
        function Gl(a) {
            x().assert(/^(https\:\/\/|\/\/)/i.test(a), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + a);
            return a
        }
        function Hl(a, b, c) {
            a = new a.Image;
            c && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        }
        ;var Il = ["amp-ad", "amp-embed", "amp-video"]
          , Jl = ["amp-mustache"];
        function Kl(a) {
            this.win = a;
            this.Fa = bd(a);
            this.Wb = {};
            this.Va = null
        }
        f = Kl.prototype;
        f.registerExtension = function(a, b, c) {
            var d = Ll(this, a, !0);
            try {
                this.Va = a,
                b(c),
                d.loaded = !0,
                d.resolve && d.resolve(d.extension)
            } catch (e) {
                throw d.error = e,
                d.reject && d.reject(e),
                e;
            } finally {
                this.Va = null
            }
        }
        ;
        f.waitForExtension = function(a, b, c) {
            return O(a).timeoutPromise(c || 8E3, Ml(Ll(this, b, !1)), "Render timeout waiting for extension " + b + " to be load.")
        }
        ;
        f.preloadExtension = function(a, b) {
            "amp-embed" == a && (a = "amp-ad");
            var c = Ll(this, a, !1), d;
            c.loaded || c.error ? d = !1 : (void 0 === c.scriptPresent && (d = this.win.document.head.querySelector('[custom-element="' + a + '"]'),
            c.scriptPresent = !!d),
            d = !c.scriptPresent);
            if (d) {
                d = this.win.document.createElement("script");
                d.async = !0;
                d.setAttribute(0 <= Jl.indexOf(a) ? "custom-template" : "custom-element", a);
                d.setAttribute("data-script", a);
                d.setAttribute("i-amphtml-inserted", "");
                var e = xg(this.win.location)
                  , g = t().rtvVersion;
                d.src = e + "/rtv/" + g + "/v0/" + a + "-" + (b || "0.1") + ".js";
                this.win.document.head.appendChild(d);
                c.scriptPresent = !0
            }
            return Ml(c)
        }
        ;
        f.installExtensionForDoc = function(a, b, c) {
            var d = this
              , e = a.getRootNode()
              , g = e.__AMP_EXT_LDR;
            g || (g = e.__AMP_EXT_LDR = D());
            if (g[b])
                return g[b];
            Sh(a.win, b);
            return g[b] = this.preloadExtension(b, c).then(function() {
                return Nl(d, a, b)
            })
        }
        ;
        f.reloadExtension = function(a, b) {
            this.Wb[a] && delete this.Wb[a];
            b.removeAttribute("custom-element");
            b.setAttribute("i-amphtml-loaded-new-version", a);
            return this.preloadExtension(a)
        }
        ;
        f.loadElementClass = function(a) {
            return this.preloadExtension(a).then(function(b) {
                return b.elements[a].implementationClass
            })
        }
        ;
        f.addElement = function(a, b, c) {
            Ol(this, a).extension.elements[a] = {
                implementationClass: b,
                css: c
            };
            this.addDocFactory(function(d) {
                Pl(d, a, b, c)
            })
        }
        ;
        function Pl(a, b, c, d) {
            d ? Rd(a, d, function() {
                Ql(a.win, b, c)
            }, !1, b) : Ql(a.win, b, c)
        }
        function Ql(a, b, c) {
            Ph(a, b, c);
            K(a, b, Rl)
        }
        f.addService = function(a, b) {
            Ol(this).extension.services.push(a);
            this.addDocFactory(function(c) {
                M(c, a, b, !0)
            })
        }
        ;
        f.addDocFactory = function(a, b) {
            var c = Ol(this, b);
            c.docFactories.push(a);
            if (this.Va && (this.Fa.isSingleDoc() || this.Fa.hasAmpDocShell())) {
                var d = this.Fa.getAmpDoc(this.win.document);
                (d.declaresExtension(this.Va) || c.auto) && a(d)
            }
        }
        ;
        f.installExtensionsInDoc = function(a, b) {
            var c = this
              , d = [];
            b.forEach(function(b) {
                d.push(Nl(c, a, b))
            });
            return Promise.all(d)
        }
        ;
        function Nl(a, b, c) {
            var d = Ll(a, c, !1);
            return Ml(d).then(function() {
                b.declareExtension(c);
                d.docFactories.forEach(function(a) {
                    try {
                        a(b)
                    } catch (g) {
                        wa("Doc factory failed: ", g, c)
                    }
                })
            })
        }
        f.installExtensionsInChildWindow = function(a, b, c) {
            var d = this
              , e = this.win;
            wc(a, a.frameElement.ownerDocument.defaultView);
            Sl(a);
            Vd(a.document, cssText$$module$build$css, null, !0, "amp-runtime");
            c && c(a);
            Tl(a);
            Ul(e, a);
            Vl(a);
            var g = [];
            b.forEach(function(b) {
                Il.includes(b) || Sh(a, b);
                var c = d.preloadExtension(b).then(function(c) {
                    c.services.forEach(function(b) {
                        zc(a, b)
                    });
                    var d = null, e = {}, g;
                    for (g in c.elements) {
                        e.elementName = g;
                        e.elementDef = c.elements[e.elementName];
                        var h = (new Promise(function(c) {
                            return function(d) {
                                c.elementDef.css ? Vd(a.document, c.elementDef.css, d, !1, b) : d()
                            }
                        }(e))).then(function(b) {
                            return function() {
                                Ph(a, b.elementName, b.elementDef.implementationClass)
                            }
                        }(e));
                        d ? d.push(h) : d = [h];
                        e = {
                            elementDef: e.elementDef,
                            elementName: e.elementName
                        }
                    }
                    return d ? Promise.all(d).then(function() {
                        return c
                    }) : c
                });
                g.push(c)
            });
            return Promise.all(g)
        }
        ;
        function Ll(a, b, c) {
            var d = a.Wb[b];
            d || (d = {
                extension: {
                    elements: {},
                    services: []
                },
                auto: c,
                docFactories: [],
                promise: void 0,
                resolve: void 0,
                reject: void 0,
                loaded: void 0,
                error: void 0,
                scriptPresent: void 0
            },
            a.Wb[b] = d);
            return d
        }
        function Ol(a, b) {
            a.Va || B().error("extensions", "unknown extension for ", b);
            return Ll(a, a.Va || "_UNKNOWN_", !0)
        }
        function Ml(a) {
            a.promise || (a.promise = a.loaded ? Promise.resolve(a.extension) : a.error ? Promise.reject(a.error) : new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            }
            ));
            return a.promise
        }
        function Ul(a, b) {
            var c = Oh(a)["amp-img"];
            Qh(b, "amp-img", c || xh);
            a = Oh(a)["amp-pixel"];
            Qh(b, "amp-pixel", a || xh)
        }
        function Vl(a) {
            Il.forEach(function(b) {
                Sh(a, b)
            })
        }
        function Sl(a) {
            Bb(a);
            Tb(a);
            Ub(a)
        }
        function Tl(a) {
            zc(a, "action");
            zc(a, "standard-actions");
            zc(a, "navigation")
        }
        function Rl() {
            return {}
        }
        ;var Wl = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i
          , Xl = [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/]
          , Yl = [/^t.co$/];
        function Zl(a, b) {
            var c = this;
            this.ampdoc = a;
            this.win = a.win;
            this.tb = Tc(this.win);
            this.nb = N(this.win, "documentState");
            this.ia = !0;
            this.Ud = !1;
            this.Xf = this.Oc = "visible";
            this.xa = 1;
            this.Kd = D();
            this.nc = D();
            this.Ff = new V;
            this.Pb = new V;
            this.Fe = new V;
            this.oc = this.cb = null;
            this.eb = [];
            this.L = {};
            this.je = this.ne = this.Md = this.hf = this.va = this.tc = this.sc = this.Zf = null;
            this.xh = new Promise(function(a) {
                c.Zf = a
            }
            );
            b ? Object.assign(this.L, b) : (this.win.name && 0 == this.win.name.indexOf("__AMP__") && $l(this.win.name.substring(7), this.L),
            this.win.location.hash && $l(this.win.location.hash, this.L));
            this.ia = !parseInt(this.L.off, 10);
            this.Ud = !(!parseInt(this.L.history, 10) && !this.Ud);
            am(this, this.L.visibilityState);
            this.xa = parseInt(this.L.prerenderSize, 10) || this.xa;
            this.gc = !this.tb && "1" == this.L.webview;
            this.dc = !(!(this.tb && !this.win.AMP_TEST_IFRAME && (this.L.origin || this.L.visibilityState || -1 != this.win.location.search.indexOf("amp_js_v")) || this.gc) && a.isSingleDoc());
            this.bf = !this.tb && "1" === n(this.win.location.search).amp_gsa;
            a = G(this.ampdoc.win.location.href);
            this.Jg = ib(a);
            this.kd = this.isVisible();
            this.nb.onVisibilityChanged(this.Af.bind(this));
            this.Ld = this.dc ? O(this.win).timeoutPromise(2E4, new Promise(function(a) {
                c.Md = a
            }
            )).catch(function(a) {
                throw bm(a);
            }) : null;
            this.mf = this.dc ? this.Ld.catch(function(a) {
                je(bm(a))
            }) : null;
            var d, e;
            this.dc ? this.win.location.ancestorOrigins && !this.gc ? (d = 0 < this.win.location.ancestorOrigins.length && cm(this, this.win.location.ancestorOrigins[0]),
            e = Promise.resolve(d)) : (d = void 0,
            e = new Promise(function(a) {
                c.je = a
            }
            )) : (d = !1,
            e = Promise.resolve(!1));
            this.Cd = e;
            this.sh = new Promise(function(a) {
                c.isEmbedded() ? c.win.location.ancestorOrigins && 0 < c.win.location.ancestorOrigins.length ? a(c.win.location.ancestorOrigins[0]) : (O(c.win).delay(function() {
                    return a("")
                }, 1E3),
                c.ne = a) : a("")
            }
            );
            this.Kc = this.isEmbedded() && "referrer"in this.L && !1 !== d ? this.L.referrer : this.win.document.referrer;
            this.Bf = new Promise(function(a) {
                c.isEmbedded() && "referrer"in c.L ? c.Cd.then(function(b) {
                    b ? a(c.L.referrer) : (a(c.win.document.referrer),
                    c.Kc != c.win.document.referrer && (B().expectedError("Viewer", "Untrusted viewer referrer override: " + c.Kc + " at " + c.oc),
                    c.Kc = c.win.document.referrer))
                }) : a(c.win.document.referrer)
            }
            );
            this.Ec = hb(this.win.location.href || "");
            this.wh = new Promise(function(a) {
                var b = c.L.viewerUrl;
                c.isEmbedded() && b ? c.Cd.then(function(d) {
                    d ? c.Ec = b : B().error("Viewer", "Untrusted viewer url override: " + b + " at " + c.oc);
                    a(c.Ec)
                }) : a(c.Ec)
            }
            );
            this.L.click && (a = hb(this.win.location.href),
            a != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash = this.win.location.hash),
            this.win.history.replaceState({}, "", a)));
            this.Af();
            dm(this);
            this.maybeUpdateFragmentForCct()
        }
        function dm(a) {
            if (a.isVisible()) {
                var b = Date.now();
                a.va || (a.va = b);
                a.hf = b;
                a.kd = !0;
                a.Zf();
                a.tc && (a.tc(),
                a.tc = null,
                a.sc = null)
            }
            a.Pb.fire()
        }
        f = Zl.prototype;
        f.getParam = function(a) {
            return this.L[a]
        }
        ;
        f.hasCapability = function(a) {
            var b = this.L.cap;
            return b ? -1 != b.split(",").indexOf(a) : !1
        }
        ;
        f.navigateToAmpUrl = function(a, b) {
            return this.hasCapability("a2a") ? (this.sendMessage("a2aNavigate", F({
                url: a,
                requestedBy: b
            })),
            !0) : !1
        }
        ;
        f.isEmbedded = function() {
            return this.dc
        }
        ;
        f.isWebviewEmbedded = function() {
            return this.gc
        }
        ;
        f.isCctEmbedded = function() {
            return this.bf
        }
        ;
        f.isProxyOrigin = function() {
            return this.Jg
        }
        ;
        f.maybeUpdateFragmentForCct = function() {
            if (this.bf && this.win.history.replaceState) {
                var a = lb(this.win.location.href)
                  , b = cd(this.ampdoc).canonicalUrl
                  , c = lb(b);
                if (em(a, c)) {
                    var a = this.win.location.href
                      , d = a.indexOf("#")
                      , e = -1 == d ? "" : a.substring(d)
                      , g = "ampshare=" + encodeURIComponent(b);
                    this.win.history.replaceState({}, "", e ? e + "&" + g : "#" + g)
                }
            }
        }
        ;
        function em(a, b) {
            function c(a) {
                return 2 < a.split(".").length ? a.replace(Wl, "$1") : a
            }
            return c(a) == c(b)
        }
        f.isRuntimeOn = function() {
            return this.ia
        }
        ;
        f.toggleRuntime = function() {
            this.ia = !this.ia;
            this.Ff.fire(this.ia)
        }
        ;
        f.onRuntimeState = function(a) {
            return this.Ff.add(a)
        }
        ;
        f.isOvertakeHistory = function() {
            return this.Ud
        }
        ;
        f.getVisibilityState = function() {
            return this.Oc
        }
        ;
        f.Af = function() {
            am(this, this.Xf)
        }
        ;
        function am(a, b) {
            if (b) {
                var c = a.Oc;
                b = B().assertEnumValue(Zh, b, "VisibilityState");
                "hidden" === b && (b = a.kd ? "inactive" : "prerender");
                a.Xf = b;
                !a.nb.isHidden() || "visible" !== b && "paused" !== b || (b = "hidden");
                a.Oc = b;
                c !== b && dm(a)
            }
        }
        f.isVisible = function() {
            return "visible" == this.getVisibilityState()
        }
        ;
        f.hasBeenVisible = function() {
            return this.kd
        }
        ;
        f.whenFirstVisible = function() {
            return this.xh
        }
        ;
        f.whenNextVisible = function() {
            var a = this;
            return this.isVisible() ? Promise.resolve() : this.sc ? this.sc : this.sc = new Promise(function(b) {
                a.tc = b
            }
            )
        }
        ;
        f.getFirstVisibleTime = function() {
            return this.va
        }
        ;
        f.getLastVisibleTime = function() {
            return this.hf
        }
        ;
        f.getPrerenderSize = function() {
            return this.xa
        }
        ;
        f.getResolvedViewerUrl = function() {
            return this.Ec
        }
        ;
        f.getViewerUrl = function() {
            return this.wh
        }
        ;
        f.maybeGetMessagingOrigin = function() {
            return this.oc
        }
        ;
        function fm(a) {
            var b = G(a);
            return "https:" != b.protocol ? !1 : Yl.some(function(a) {
                return a.test(b.hostname)
            })
        }
        f.getUnconfirmedReferrerUrl = function() {
            return this.Kc
        }
        ;
        f.getReferrerUrl = function() {
            return this.Bf
        }
        ;
        f.isTrustedViewer = function() {
            return this.Cd
        }
        ;
        f.isTrustedReferrer = function() {
            return this.Bf.then(function(a) {
                return fm(a)
            })
        }
        ;
        f.getViewerOrigin = function() {
            return this.sh
        }
        ;
        function cm(a, b) {
            if (a.gc && /^www\.[.a-z]+$/.test(b))
                return Xl.some(function(a) {
                    return a.test(b)
                });
            var c = G(b);
            return "https:" != c.protocol ? !1 : Xl.some(function(a) {
                return a.test(c.hostname)
            })
        }
        f.onVisibilityChanged = function(a) {
            return this.Pb.add(a)
        }
        ;
        f.onMessage = function(a, b) {
            var c = this.Kd[a];
            c || (c = new V,
            this.Kd[a] = c);
            return c.add(b)
        }
        ;
        f.onMessageRespond = function(a, b) {
            var c = this;
            this.nc[a] = b;
            return function() {
                c.nc[a] === b && delete c.nc[a]
            }
        }
        ;
        f.receiveMessage = function(a, b) {
            if ("visibilitychange" == a)
                return void 0 !== b.prerenderSize && (this.xa = b.prerenderSize),
                am(this, b.state),
                Promise.resolve();
            if ("broadcast" == a)
                return this.Fe.fire(b),
                Promise.resolve();
            var c = this.Kd[a];
            c && c.fire(b);
            if (a = this.nc[a])
                return a(b);
            if (c)
                return Promise.resolve()
        }
        ;
        f.setMessageDeliverer = function(a, b) {
            var c = this;
            if (this.cb)
                throw Error("message channel can only be initialized once");
            if (null == b)
                throw Error("message channel must have an origin");
            this.cb = a;
            this.oc = b;
            this.Md && this.Md();
            this.je && this.je(b ? cm(this, b) : !1);
            this.ne && this.ne(b || "");
            0 < this.eb.length && (b = this.eb.slice(0),
            this.eb = [],
            b.forEach(function(a) {
                var b = c.cb(a.eventType, a.data, a.awaitResponse);
                a.awaitResponse && a.responseResolver(b)
            }))
        }
        ;
        f.sendMessage = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            gm(this, a, b, c, !1)
        }
        ;
        f.sendMessageAwaitResponse = function(a, b, c) {
            return gm(this, a, b, void 0 === c ? !1 : c, !0)
        }
        ;
        function gm(a, b, c, d, e) {
            if (a.cb)
                return Pe(function() {
                    return a.cb(b, c, e)
                });
            if (!a.Ld)
                return e ? Promise.reject(bm()) : Promise.resolve();
            if (!d)
                return a.Ld.then(function() {
                    return a.cb(b, c, e)
                });
            var g = Yf(a.eb, function(a) {
                return a.eventType == b
            });
            if (-1 != g)
                d = a.eb.splice(g, 1)[0],
                d.data = c,
                d.awaitResponse = d.awaitResponse || e;
            else {
                var h;
                d = new Promise(function(a) {
                    h = a
                }
                );
                d = {
                    eventType: b,
                    data: c,
                    awaitResponse: e,
                    responsePromise: d,
                    responseResolver: h
                }
            }
            a.eb.push(d);
            return d.responsePromise
        }
        f.broadcast = function(a) {
            this.mf && this.sendMessage("broadcast", a)
        }
        ;
        f.onBroadcast = function(a) {
            return this.Fe.add(a)
        }
        ;
        f.whenMessagingReady = function() {
            return this.mf
        }
        ;
        f.replaceUrl = function(a) {
            if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState)
                try {
                    var b = G(this.win.location.href)
                      , c = G(hb(a) + this.win.location.hash);
                    b.origin == c.origin && lb(b) == lb(c) && (this.win.history.replaceState({}, "", c.href),
                    this.win.location.originalHref = b.href)
                } catch (d) {
                    B().error("Viewer", "replaceUrl failed", d)
                }
        }
        ;
        function $l(a, b) {
            a = n(a);
            for (var c in a)
                b[c] = a[c]
        }
        function bm(a) {
            return a instanceof Error ? (a = va(a),
            a.message = "No messaging channel: " + a.message,
            a) : Error("No messaging channel: " + a)
        }
        function hm(a) {
            M(a, "viewer", function() {
                return new Zl(a,void 0)
            }, !0)
        }
        ;(function() {
            Ba = pa;
            B();
            x()
        }
        )();
        (function(a) {
            self.reportError = a
        }
        )(function(a, b, c) {
            je(b, c);
            b && a && oa(b.message) && !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) && R(a, "user-error-reporting") && (b = {
                errorName: b.name,
                errorMessage: b.message
            },
            a = bd(a).getAmpDoc().getRootNode(),
            Yd(a.documentElement || a.body || a, b))
        }
        .bind(null, self));
        function im(a) {
            K(a, "crypto", Qi);
            K(a, "batched-xhr", oi);
            K(a, "documentState", Wi);
            K(a, "platform", oj);
            K(a, "templates", Uh);
            K(a, "timer", Ak);
            K(a, "timer", Ak);
            K(a, "vsync", tl);
            K(a, "xhr", ci);
            K(a, "input", nj)
        }
        function jm(a) {
            var b = self;
            function c(a) {
                function c() {
                    g.then(function() {
                        "function" == typeof a ? a(b.AMP) : e.registerExtension(a.n, a.f, b.AMP)
                    })
                }
                "function" == typeof a || "high" == a.p ? Promise.resolve().then(c) : (c.displayName = a.n,
                og(b.document, c))
            }
            if (b.AMP_TAG)
                Promise.resolve();
            else {
                b.AMP_TAG = !0;
                var d = b.AMP || [];
                K(b, "extensions", Kl);
                var e = dd(b);
                im(b);
                Vl(b);
                b.AMP = {
                    win: b
                };
                b.AMP.config = Ka;
                b.AMP.BaseElement = uh;
                b.AMP.BaseTemplate = Th;
                b.AMP.registerElement = e.addElement.bind(e);
                b.AMP.registerTemplate = function(a, c) {
                    var d = N(b, "templates");
                    if (d.Mb[a]) {
                        var e = d.he[a];
                        x().assert(e, "Duplicate template type: %s", a);
                        delete d.he[a];
                        e(c)
                    } else
                        d.Mb[a] = Promise.resolve(c)
                }
                ;
                b.AMP.registerServiceForDoc = e.addService.bind(e);
                b.AMP.isExperimentOn = R.bind(null, b);
                b.AMP.toggleExperiment = Cd.bind(null, b);
                b.AMP.setTickFunction = function() {}
                ;
                var g = a(b, e);
                for (a = 0; a < d.length; a++) {
                    var h = d[a];
                    if (km(b, h))
                        d.splice(a--, 1);
                    else if ("function" == typeof h || "high" == h.p) {
                        try {
                            c(h)
                        } catch (k) {
                            B().error("runtime", "Extension failed: ", k, h.n)
                        }
                        d.splice(a--, 1)
                    }
                }
                lm(b, function() {
                    b.AMP.push = function(a) {
                        km(b, a) || c(a)
                    }
                    ;
                    for (var a = 0; a < d.length; a++) {
                        var e = d[a];
                        if (!km(b, e))
                            try {
                                c(e)
                            } catch (m) {
                                B().error("runtime", "Extension failed: ", m, e.n)
                            }
                    }
                    d.length = 0
                });
                b.AMP.push || (b.AMP.push = d.push.bind(d));
                fd(b).isIos() && S(b.document.documentElement, "cursor", "pointer")
            }
        }
        function mm() {
            jm(function(a) {
                var b = bd(a).getAmpDoc();
                a.AMP.ampdoc = b;
                var c = Q(a.document);
                a.AMP.viewer = c;
                t().development && (a.AMP.toggleRuntime = c.toggleRuntime.bind(c),
                a.AMP.resources = gd(a.document));
                c = id(a.document);
                a.AMP.viewport = {};
                a.AMP.viewport.getScrollLeft = c.getScrollLeft.bind(c);
                a.AMP.viewport.getScrollWidth = c.getScrollWidth.bind(c);
                a.AMP.viewport.getWidth = c.getWidth.bind(c);
                return Ec(a.document).then(function() {
                    Rh(b)
                })
            })
        }
        function km(a, b) {
            if (!R(a, "version-locking") || "function" == typeof b || "1526498116488" == b.v)
                return !1;
            var c = a.document.head.querySelector('[custom-element="' + b.n + '"]:not([i-amphtml-inserted])');
            if (!c)
                return !1;
            dd(a).reloadExtension(b.n, c);
            return !0
        }
        function lm(a, b) {
            R(a, "pump-early-frame") ? a.document.body ? 0 < Qd(a).length ? b() : O(a).delay(b, 1) : b() : b()
        }
        ;function nm() {
            var a = self;
            Ue(a.document, function() {
                return om(a)
            })
        }
        function om(a) {
            var b = 0
              , c = a.performance;
            c && c.timing && c.timing.responseStart && (b = Date.now() - c.timing.responseStart);
            var d = Math.max(1, 250 - b);
            a.setTimeout(function() {
                pm(a);
                var b = a.document.styleSheets;
                if (b) {
                    for (var c = a.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + String(Ka.urls.cdn).replace(Ac, Bc) + '"])'), h = [], k = 0; k < c.length; k++) {
                        for (var l = c[k], m = !1, p = 0; p < b.length; p++)
                            if (b[p].ownerNode == l) {
                                m = !0;
                                break
                            }
                        m || h.push(l)
                    }
                    k = {};
                    for (l = 0; l < h.length; k = {
                        ja: k.ja,
                        media: k.media
                    },
                    l++)
                        k.ja = h[l],
                        k.media = k.ja.media || "all",
                        k.ja.media = "not-matching",
                        k.ja.onload = function(b) {
                            return function() {
                                b.ja.media = b.media;
                                pm(a)
                            }
                        }(k),
                        k.ja.setAttribute("i-amphtml-timeout", d),
                        k.ja.parentNode.insertBefore(k.ja, k.ja.nextSibling)
                }
            }, d)
        }
        function pm(a) {
            if (R(a, "font-display-swap") && (a = a.document,
            a.fonts || a.fonts.values))
                for (var b = a.fonts.values(); a = b.next(); ) {
                    var c = a.value;
                    if (!c)
                        break;
                    "loading" == c.status && "display"in c && "auto" == c.display && (c.display = "swap")
                }
        }
        ;function qm() {
            var a = self;
            O(a).delay(function() {
                if (R(a, "cache-service-worker") && "serviceWorker"in navigator && a.location.hostname === G(Ka.urls.cdn).hostname) {
                    var b = R(a, "cache-service-worker-kill")
                      , c = yg("sw" + (b ? "-kill" : ""));
                    navigator.serviceWorker.register(c).then(function(a) {
                        B().info("cache-service-worker", "ServiceWorker registration successful: ", a)
                    }, function(a) {
                        B().error("cache-service-worker", "ServiceWorker registration failed: ", a)
                    })
                }
            })
        }
        ;function rm(a, b) {
            this.ua = a;
            this.F = b;
            this.Jc = !1;
            this.ee = 0;
            this.Ee = this.Xg.bind(this);
            this.De = this.Wg.bind(this);
            this.Ce = this.Vg.bind(this);
            this.Be = this.Ug.bind(this);
            this.ua.addEventListener("touchstart", this.Ee, !0)
        }
        f = rm.prototype;
        f.cleanup = function() {
            sm(this);
            this.ua.removeEventListener("touchstart", this.Ee, !0)
        }
        ;
        f.Xg = function(a) {
            this.Jc || !a.touches || 1 != a.touches.length || 0 < this.F.getScrollTop() || (a = a.touches[0].clientY,
            this.Jc = !0,
            this.ee = a,
            this.ua.addEventListener("touchmove", this.De, !0),
            this.ua.addEventListener("touchend", this.Ce, !0),
            this.ua.addEventListener("touchcancel", this.Be, !0))
        }
        ;
        function sm(a) {
            a.Jc = !1;
            a.ee = 0;
            a.ua.removeEventListener("touchmove", a.De, !0);
            a.ua.removeEventListener("touchend", a.Ce, !0);
            a.ua.removeEventListener("touchcancel", a.Be, !0)
        }
        f.Wg = function(a) {
            if (this.Jc) {
                var b = a.touches[0].clientY - this.ee;
                0 < b && a.preventDefault();
                0 != b && sm(this)
            }
        }
        ;
        f.Vg = function() {
            sm(this)
        }
        ;
        f.Ug = function() {
            sm(this)
        }
        ;
        function tm() {
            var a = self
              , b = a.location.href;
            Ja(b, "about:") || (t().development ? um(a.document, Ka.urls.cdn + "/v0/validator.js").then(function() {
                amp.validator.validateUrlAndLog(b, a.document, t().filter)
            }) : t().examiner && um(a.document, Ka.urls.cdn + "/examiner.js"))
        }
        function um(a, b) {
            var c = a.createElement("script");
            c.src = b;
            b = ee(c).then(function() {
                a.head.removeChild(c)
            }, function() {});
            a.head.appendChild(c);
            return b
        }
        ;self.location && (self.location.originalHash = self.location.hash);
        var vm;
        try {
            me(),
            gh(),
            vm = bd(self)
        } catch (a) {
            throw Xd(self.document),
            a;
        }
        og(self.document, function initial() {
            var b = vm.getAmpDoc(self.document);
            K(self, "performance", hh);
            var c = ed(self);
            self.document.documentElement.hasAttribute("i-amphtml-no-boilerplate") && c.addEnabledExperiment("no-boilerplate");
            K(self, "platform", oj);
            nm();
            c.tick("is");
            Rd(b, cssText$$module$build$css, function() {
                og(self.document, function() {
                    im(self);
                    M(b, "cid", xi);
                    M(b, "documentInfo", Ti);
                    hm(b);
                    M(b, "viewport", ql, !0);
                    M(b, "history", mj);
                    M(b, "resources", Lj);
                    Uf(b);
                    M(b, "action", Ig, !0);
                    M(b, "standard-actions", ok, !0);
                    zk(b);
                    M(b, "navigation", Xi, !0);
                    b.getRootNode().addEventListener("submit", cj, !0);
                    c.coreServicesAvailable();
                    gf()
                });
                og(self.document, function e() {
                    var b = self;
                    Qh(b, "amp-img", Al);
                    Qh(b, "amp-pixel", Fl);
                    Qh(b, "amp-layout", El)
                });
                og(self.document, function g() {
                    mm()
                });
                og(self.document, function() {
                    Rh(b)
                });
                og(self.document, function h() {
                    var b = self;
                    "0" == Q(b.document).getParam("p2r") && fd(b).isChrome() && new rm(b.document,id(b.document));
                    tm();
                    Xd(self.document, !0);
                    qm()
                });
                og(self.document, function k() {
                    c.tick("e_is");
                    gd(b).ampInitComplete();
                    c.flush()
                })
            }, !0, "amp-runtime")
        });
        self.console && (console.info || console.log).call(console, "Powered by AMP \u26a1 HTML \u2013 Version 1526498116488", self.location.href);
        self.document.documentElement.setAttribute("amp-version", "1526498116488");
    }
    )()
} catch (e) {
    setTimeout(function() {
        var s = document.body.style;
        s.opacity = 1;
        s.visibility = "visible";
        s.animation = "none";
        s.WebkitAnimation = "none;"
    }, 1000);
    throw e
}
;//# sourceMappingURL=v0.js.map
