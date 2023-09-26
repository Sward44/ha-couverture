!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 209));
})({
  125: function (e, t, r) {
    "use strict";
    function n(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return o(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return o(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function i(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    r.d(t, "a", function () {
      return s;
    });
    var u = ["longtask", "resource"],
      s = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.measures = []),
            (this.subscription = new Map());
          if (
            !("PerformanceObserver" in window) ||
            !("performance" in window) ||
            !function () {
              return (
                "PerformanceObserver" in window &&
                u.every(function (e) {
                  return PerformanceObserver.supportedEntryTypes.includes(e);
                })
              );
            }
          )
            return (
              console.warn("Performance API not supported."),
              void (this.observer = {
                observe: function () {
                  return null;
                },
                takeRecords: function () {
                  return [];
                },
                disconnect: function () {
                  return null;
                },
              })
            );
          this.observer = new PerformanceObserver(function (e) {
            var o = performance.now();
            e.getEntries().forEach(function (e) {
              var o,
                i,
                u = [];
              if ("longtask" === e.entryType)
                (o = "longtask"),
                  u.push({
                    name: o,
                    startTime: e.startTime,
                    duration: e.duration,
                    detail: { name: e.name },
                  });
              else {
                var s =
                  null == t
                    ? void 0
                    : t.some(function (t) {
                        return e.name.includes(t);
                      });
                "script" === e.initiatorType && s
                  ? ((o = "resource_timing"),
                    u.push({
                      name: o,
                      startTime: e.fetchStart,
                      duration: e.responseEnd - e.fetchStart,
                      detail: { name: e.name },
                    }),
                    u.push({
                      name: "resource_prefetch",
                      startTime: e.domainLookupStart,
                      duration: e.requestStart - e.domainLookupStart,
                      detail: { name: e.name },
                    }))
                  : "xmlhttprequest" === e.initiatorType &&
                    s &&
                    ((o =
                      !e.responseStatus ||
                      (e.responseStatus >= 200 && e.responseStatus < 400)
                        ? "request_latency"
                        : "request_error"),
                    u.push({
                      name: o,
                      startTime: e.fetchStart,
                      duration: e.responseEnd - e.fetchStart,
                      detail: {
                        name: e.name,
                        responseStatus: e.responseStatus,
                      },
                    }));
              }
              u.length &&
                ((r.measures = [].concat(u, n(r.measures))),
                o &&
                  r.subscription.has(o) &&
                  (null === (i = r.subscription.get(o)) ||
                    void 0 === i ||
                    i(u, e)));
            }),
              hj.metrics.timeEnd("task-execution-time", {
                tag: { task: "performance-observer" },
                incr: { start: o, flush: !0 },
                type: "field",
              });
          });
        }
        var t, r, o;
        return (
          (t = e),
          (r = [
            {
              key: "start",
              value: function (e) {
                var t = this,
                  r =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                r
                  ? e.forEach(function (e) {
                      t.observer.observe({ type: e, buffered: r });
                    })
                  : this.observer.observe({ entryTypes: e });
              },
            },
            {
              key: "stop",
              value: function () {
                this.observer.disconnect();
              },
            },
            {
              key: "get",
              value: function (e) {
                return this.measures.filter(function (t) {
                  return t.name === e;
                });
              },
            },
            {
              key: "report",
              value: function () {
                return this.measures;
              },
            },
            {
              key: "clear",
              value: function () {
                this.measures = [];
              },
            },
            {
              key: "subscribe",
              value: function (e, t) {
                this.subscription.set(e, t);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                this.subscription.delete(e);
              },
            },
          ]) && i(t.prototype, r),
          o && i(t, o),
          e
        );
      })();
  },
  209: function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "browserPerf", function () {
        return c;
      }),
      r.d(t, "initBrowserPerf", function () {
        return f;
      });
    var n,
      o = r(125),
      i = function (e) {
        var t = {
            "content.hotjar.io": "page-content-upload",
            "verify-installation/auto": "verify-installation",
            "vc.hotjar.io/sessions": "view-counter",
          },
          r = Object.keys(t).find(function (t) {
            return e.includes(t);
          });
        return r && t[r];
      },
      u = function (e) {
        e.forEach(function (e) {
          var t,
            r,
            n = (t = e.detail.name)
              .substring(t.lastIndexOf("/") + 1)
              .split("?")[0],
            o = {
              resource_timing: "resource-fetch-time",
              resource_prefetch: "resource-prefetch-time",
            }[e.name];
          (null == n ? void 0 : n.includes("hotjar"))
            ? (r = "hotjar-js")
            : (null == n ? void 0 : n.includes("modules")) &&
              (r = "modules-js"),
            r &&
              o &&
              e.startTime > 0 &&
              hj.metrics.timeEnd(o, {
                tag: { resource: r },
                incr: { total: e.duration, flush: !0 },
                type: "lab",
              });
        });
      },
      s = function (e) {
        e.forEach(function (e) {
          var t = i(e.detail.name);
          t &&
            e.startTime > 0 &&
            hj.metrics.timeEnd("api-request-latency", {
              tag: { request: t },
              incr: { total: e.duration, flush: !0 },
            });
        });
      },
      a = function (e) {
        e.forEach(function (e) {
          var t,
            r = i(e.detail.name);
          r &&
            hj.metrics.count("api-request-error", {
              tag: { request: r },
              extraTags: {
                "status-code":
                  (null === (t = e.detail.responseStatus) || void 0 === t
                    ? void 0
                    : t.toString()) || "",
              },
            });
        });
      },
      c = {
        init: function () {
          n = new o.a(["hotjar.com", "hotjar.io"]);
        },
        start: function () {
          n.start(["resource"]);
        },
        stop: function () {
          n.stop();
        },
        subscribe: function () {
          n.subscribe("resource_timing", u),
            n.subscribe("request_latency", s),
            n.subscribe("request_error", a);
        },
      },
      f = function () {
        c.init();
        var e = function () {
          c.subscribe(), c.start();
        };
        "requestIdleCallback" in window
          ? requestIdleCallback(function () {
              return e();
            })
          : "requestAnimationFrame" in window
          ? requestAnimationFrame(function () {
              return e();
            })
          : setTimeout(function () {
              return e();
            }, 100);
      };
    !(function () {
      try {
        f();
      } catch (e) {}
    })();
  },
});
