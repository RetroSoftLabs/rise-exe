(() => {
    var $, e, t, x = {
            31091($, e, t) {
                t.p
            },
            49544($, e, t) {
                t.p
            },
            63166($, e, t) {
                t.p
            },
            4391($, e, t) {
                t.p
            },
            10103($, e, t) {
                t.d(e, {
                    A: () => x
                });
                let x = t.p + "img/intro-icon.png"
            },
            57088($, e, t) {
                t.p
            },
            15481($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var x = t(83839);
                t(60821);
                class s extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let i = [],
                                n = (0, x.URP)(t, i),
                                {
                                    $$slots: a = {},
                                    $$scope: o
                                } = t;
                            return e.$$set = $ => {
                                t = (0, x.kpz)((0, x.kpz)({}, t), (0, x.Qe9)($)), s(0, n = (0, x.URP)(t, i)), "$$scope" in $ && s(1, o = $.$$scope)
                            }, [n, o, a, function($) {
                                x.Tq.call(this, e, $)
                            }]
                        }, function $(e) {
                            let t, s, i, n, a = e[2].default,
                                o = (0, x.Of3)(a, e, e[1], null),
                                r = [{
                                    class: "button"
                                }, e[0]],
                                l = {};
                            for (let c = 0; c < r.length; c += 1) l = (0, x.kpz)(l, r[c]);
                            return {
                                c() {
                                    t = (0, x.ND4)("button"), o && o.c(), (0, x.vhI)(t, l), (0, x.goL)(t, "s-cv3b48", !0)
                                },
                                m($, a) {
                                    (0, x.Yry)($, t, a), o && o.m(t, null), t.autofocus && t.focus(), s = !0, i || (n = (0, x.KTR)(t, "click", e[3]), i = !0)
                                },
                                p($, [e]) {
                                    o && o.p && (!s || 2 & e) && (0, x.nkG)(o, a, $, $[1], s ? (0, x.sWk)(a, $[1], e, null) : (0, x.i32)($[1]), null), (0, x.vhI)(t, l = (0, x.HN9)(r, [{
                                        class: "button"
                                    }, 1 & e && $[0]])), (0, x.goL)(t, "s-cv3b48", !0)
                                },
                                i($) {
                                    s || ((0, x.c7F)(o, $), s = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(o, $), s = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), o && o.d($), i = !1, n()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let i = s
            },
            19680($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(74173)),
                    i = t(95669);

                function n($) {
                    let e, t, s, n = $[5].default,
                        a = (0, x.Of3)(n, $, $[4], null);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), a && a.c(), (0, x.hgi)(e, "top", $[1].y + "px"), (0, x.hgi)(e, "left", $[1].x + "px"), (0, x.CFu)(e, "class", "context-menu s-1mp7axm")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), a && a.m(e, null), s = !0
                        },
                        p($, t) {
                            a && a.p && (!s || 16 & t) && (0, x.nkG)(a, n, $, $[4], s ? (0, x.sWk)(n, $[4], t, null) : (0, x.i32)($[4]), null), (!s || 2 & t) && (0, x.hgi)(e, "top", $[1].y + "px"), (!s || 2 & t) && (0, x.hgi)(e, "left", $[1].x + "px")
                        },
                        i($) {
                            s || ((0, x.c7F)(a, $), $ && (0, x.Dti)(() => {
                                s && (t = t || (0, x.h86)(e, i.Rv, {
                                    duration: 200
                                }, !0)).run(1)
                            }), s = !0)
                        },
                        o($) {
                            (0, x.Tn8)(a, $), $ && (t = t || (0, x.h86)(e, i.Rv, {
                                duration: 200
                            }, !1)).run(0), s = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), a && a.d($), $ && t && t.end()
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, x) {
                            let {
                                $$slots: i = {},
                                $$scope: n
                            } = t, {
                                show: a = !1
                            } = t, o = s.A.from();
                            return e.$$set = $ => {
                                "show" in $ && x(0, a = $.show), "$$scope" in $ && x(4, n = $.$$scope)
                            }, [a, o, $ => {
                                o.set($.clientX, $.clientY)
                            }, () => {
                                a && x(1, o)
                            }, n, i]
                        }, function $(e) {
                            let t, s, i, a, o = e[0] && n(e);
                            return {
                                c() {
                                    o && o.c(), t = (0, x.Iex)()
                                },
                                m($, n) {
                                    o && o.m($, n), (0, x.Yry)($, t, n), s = !0, i || (a = (0, x.KTR)(window, "mousemove", e[2]), i = !0)
                                },
                                p($, [e]) {
                                    $[0] ? o ? (o.p($, e), 1 & e && (0, x.c7F)(o, 1)) : ((o = n($)).c(), (0, x.c7F)(o, 1), o.m(t.parentNode, t)) : o && ((0, x.V44)(), (0, x.Tn8)(o, 1, 1, () => {
                                        o = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    s || ((0, x.c7F)(o), s = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(o), s = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), o && o.d($), i = !1, a()
                                }
                            }
                        }, x.jXN, {
                            show: 0,
                            update: 3
                        })
                    }
                    get update() {
                        return this.$$.ctx[3]
                    }
                }
                let o = a
            },
            98781($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(41949)),
                    i = t(95669);

                function n($) {
                    let e, t, s, n, a, o, r, l, c, h = $[4].default,
                        A = (0, x.Of3)(h, $, $[3], null),
                        u = [{
                            class: "modal container"
                        }, $[2]],
                        d = {};
                    for (let g = 0; g < u.length; g += 1) d = (0, x.kpz)(d, u[g]);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), s = (0, x.xem)(), n = (0, x.ND4)("div"), a = (0, x.ND4)("div"), A && A.c(), (0, x.CFu)(t, "class", "background s-1rrv5lu"), (0, x.CFu)(a, "class", "content s-1rrv5lu"), (0, x.vhI)(n, d), (0, x.goL)(n, "s-1rrv5lu", !0)
                        },
                        m(i, o) {
                            (0, x.Yry)(i, e, o), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, n), (0, x.BCw)(n, a), A && A.m(a, null), r = !0, l || (c = (0, x.KTR)(t, "click", $[5]), l = !0)
                        },
                        p($, e) {
                            A && A.p && (!r || 8 & e) && (0, x.nkG)(A, h, $, $[3], r ? (0, x.sWk)(h, $[3], e, null) : (0, x.i32)($[3]), null), (0, x.vhI)(n, d = (0, x.HN9)(u, [{
                                class: "modal container"
                            }, 4 & e && $[2]])), (0, x.goL)(n, "s-1rrv5lu", !0)
                        },
                        i($) {
                            r || ((0, x.c7F)(A, $), $ && (0, x.Dti)(() => {
                                r && (o = o || (0, x.h86)(e, i.Rv, {
                                    duration: 200
                                }, !0)).run(1)
                            }), r = !0)
                        },
                        o($) {
                            (0, x.Tn8)(A, $), $ && (o = o || (0, x.h86)(e, i.Rv, {
                                duration: 200
                            }, !1)).run(0), r = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), A && A.d($), $ && o && o.end(), l = !1, c()
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n = ["show"],
                                a = (0, x.URP)(t, n),
                                {
                                    $$slots: o = {},
                                    $$scope: r
                                } = t,
                                l = (0, s.ur)(),
                                {
                                    show: c = !1
                                } = t,
                                h = $ => {
                                    i(0, c = $), l("visibility", $)
                                };
                            return e.$$set = $ => {
                                t = (0, x.kpz)((0, x.kpz)({}, t), (0, x.Qe9)($)), i(2, a = (0, x.URP)(t, n)), "show" in $ && i(0, c = $.show), "$$scope" in $ && i(3, r = $.$$scope)
                            }, [c, h, a, r, o, () => h(!1)]
                        }, function $(e) {
                            let t, s, i = e[0] && n(e);
                            return {
                                c() {
                                    i && i.c(), t = (0, x.Iex)()
                                },
                                m($, e) {
                                    i && i.m($, e), (0, x.Yry)($, t, e), s = !0
                                },
                                p($, [e]) {
                                    $[0] ? i ? (i.p($, e), 1 & e && (0, x.c7F)(i, 1)) : ((i = n($)).c(), (0, x.c7F)(i, 1), i.m(t.parentNode, t)) : i && ((0, x.V44)(), (0, x.Tn8)(i, 1, 1, () => {
                                        i = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    s || ((0, x.c7F)(i), s = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(i), s = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), i && i.d($)
                                }
                            }
                        }, x.jXN, {
                            show: 0
                        })
                    }
                }
                let o = a
            },
            6716($, e, t) {
                t.d(e, {
                    A: () => f
                });
                var x = t(83839),
                    s = (t(60821), t(98837)),
                    i = t(79305),
                    n = t(92008),
                    a = t(98685),
                    o = t(87399),
                    r = t(14389),
                    l = t(33203),
                    c = t(58650),
                    h = t(64127),
                    A = t(95669),
                    u = (t(4391), t(95195)),
                    d = t(28858);

                function g($) {
                    let e, t;
                    return e = new c.A({}), {
                        c() {
                            (0, x.N0i)(e.$$.fragment)
                        },
                        m($, s) {
                            (0, x.wSR)(e, $, s), t = !0
                        },
                        p: x.lQ1,
                        i($) {
                            t || ((0, x.c7F)(e.$$.fragment, $), t = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), t = !1
                        },
                        d($) {
                            (0, x.Hbl)(e, $)
                        }
                    }
                }

                function m($) {
                    let e, t, c, h, A, u, d, g, m, p, f, _, w, v, b, y, B, F, I = (t = new s.A({}), h = new i.A({}), u = new n.A({}), g = new a.A({}), p = new r.A({}), _ = new l.A({}), $[1] && C($));
                    return b = new o.A({}), {
                        c() {
                            e = (0, x.ND4)("div"), (0, x.N0i)(t.$$.fragment), c = (0, x.xem)(), (0, x.N0i)(h.$$.fragment), A = (0, x.xem)(), (0, x.N0i)(u.$$.fragment), d = (0, x.xem)(), (0, x.N0i)(g.$$.fragment), m = (0, x.xem)(), (0, x.N0i)(p.$$.fragment), f = (0, x.xem)(), (0, x.N0i)(_.$$.fragment), w = (0, x.xem)(), I && I.c(), v = (0, x.xem)(), (0, x.N0i)(b.$$.fragment), y = (0, x.xem)(), B = (0, x.ND4)("div"), (0, x.CFu)(e, "class", "hud s-xuc99v"), (0, x.CFu)(B, "class", "captcha-container center")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.wSR)(t, e, null), (0, x.BCw)(e, c), (0, x.wSR)(h, e, null), (0, x.BCw)(e, A), (0, x.wSR)(u, e, null), (0, x.BCw)(e, d), (0, x.wSR)(g, e, null), (0, x.Yry)($, m, s), (0, x.wSR)(p, $, s), (0, x.Yry)($, f, s), (0, x.wSR)(_, $, s), (0, x.Yry)($, w, s), I && I.m($, s), (0, x.Yry)($, v, s), (0, x.wSR)(b, $, s), (0, x.Yry)($, y, s), (0, x.Yry)($, B, s), F = !0
                        },
                        p($, e) {
                            $[1] ? I ? (I.p($, e), 2 & e && (0, x.c7F)(I, 1)) : ((I = C($)).c(), (0, x.c7F)(I, 1), I.m(v.parentNode, v)) : I && ((0, x.V44)(), (0, x.Tn8)(I, 1, 1, () => {
                                I = null
                            }), (0, x.GYV)())
                        },
                        i($) {
                            F || ((0, x.c7F)(t.$$.fragment, $), (0, x.c7F)(h.$$.fragment, $), (0, x.c7F)(u.$$.fragment, $), (0, x.c7F)(g.$$.fragment, $), (0, x.c7F)(p.$$.fragment, $), (0, x.c7F)(_.$$.fragment, $), (0, x.c7F)(I), (0, x.c7F)(b.$$.fragment, $), F = !0)
                        },
                        o($) {
                            (0, x.Tn8)(t.$$.fragment, $), (0, x.Tn8)(h.$$.fragment, $), (0, x.Tn8)(u.$$.fragment, $), (0, x.Tn8)(g.$$.fragment, $), (0, x.Tn8)(p.$$.fragment, $), (0, x.Tn8)(_.$$.fragment, $), (0, x.Tn8)(I), (0, x.Tn8)(b.$$.fragment, $), F = !1
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(m), (0, x.YoD)(f), (0, x.YoD)(w), (0, x.YoD)(v), (0, x.YoD)(y), (0, x.YoD)(B)), (0, x.Hbl)(t), (0, x.Hbl)(h), (0, x.Hbl)(u), (0, x.Hbl)(g), (0, x.Hbl)(p, $), (0, x.Hbl)(_, $), I && I.d($), (0, x.Hbl)(b, $)
                        }
                    }
                }

                function C($) {
                    let e, t, s, i, n, a, o, r;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("button"), s = (0, x.ND4)("i"), (0, x.CFu)(s, "class", "fal fa-times"), (0, x.CFu)(t, "class", "exit-button s-xuc99v"), t.disabled = i = !$[0], (0, x.CFu)(e, "class", "overlay")
                        },
                        m(i, n) {
                            (0, x.Yry)(i, e, n), (0, x.BCw)(e, t), (0, x.BCw)(t, s), a = !0, o || (r = [(0, x.KTR)(t, "click", $[3]), (0, x.KTR)(e, "click", $[4])], o = !0)
                        },
                        p($, e) {
                            (!a || 1 & e && i !== (i = !$[0])) && (t.disabled = i)
                        },
                        i($) {
                            a || ($ && (0, x.Dti)(() => {
                                a && (n = n || (0, x.h86)(e, A.Rv, {
                                    duration: 200
                                }, !0)).run(1)
                            }), a = !0)
                        },
                        o($) {
                            $ && (n = n || (0, x.h86)(e, A.Rv, {
                                duration: 200
                            }, !1)).run(0), a = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), $ && n && n.end(), (o = !1, x.oOW)(r)
                        }
                    }
                }
                class p extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let i, n;
                            (0, x.j0C)(e, h.z, $ => s(1, i = $)), (0, x.j0C)(e, d.S, $ => s(2, n = $)), u.A.on("Dcxyoc", $ => {
                                (0, x.vu6)(h.z, i = $, i)
                            });
                            let a;
                            return u.A.on("started", () => s(0, a = !0)), u.A.on("stopped", () => s(0, a = !1)), [a, i, n, () => {
                                a && (u.A.eWI.forEach($ => $.close()), u.A.stop())
                            }, () => {
                                a && u.A.FQe(!1)
                            }]
                        }, function $(e) {
                            let t, s, i, n, a = [m, g],
                                o = [];

                            function r($) {
                                return $[2] ? 0 : 1
                            }
                            return i = o[s = r(e)] = a[s](e), {
                                c() {
                                    t = (0, x.ND4)("div"), i.c(), (0, x.CFu)(t, "class", "app")
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e), o[s].m(t, null), n = !0
                                },
                                p($, [e]) {
                                    let n = s;
                                    (s = r($)) === n ? o[s].p($, e) : ((0, x.V44)(), (0, x.Tn8)(o[n], 1, 1, () => {
                                        o[n] = null
                                    }), (0, x.GYV)(), (i = o[s]) ? i.p($, e) : (i = o[s] = a[s]($)).c(), (0, x.c7F)(i, 1), i.m(t, null))
                                },
                                i($) {
                                    n || ((0, x.c7F)(i), n = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(i), n = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), o[s].d()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let f = p
            },
            3854($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83839),
                    s = (t(60821), t(54659));
                class i extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n = ["used", "owned", "height"],
                                a = (0, x.URP)(t, n),
                                {
                                    used: o = 0
                                } = t,
                                {
                                    owned: r = 0
                                } = t,
                                {
                                    height: l = 22
                                } = t;
                            var c = s.R.find($ => !!(o & $[0])),
                                c = {
                                    index: c[0],
                                    path: c[1],
                                    text: c[2],
                                    selected: !!(o & c[0]),
                                    owned: !!(r & c[0])
                                };
                            return e.$$set = $ => {
                                t = (0, x.kpz)((0, x.kpz)({}, t), (0, x.Qe9)($)), i(3, a = (0, x.URP)(t, n)), "used" in $ && i(4, o = $.used), "owned" in $ && i(0, r = $.owned), "height" in $ && i(1, l = $.height)
                            }, [r, l, c, a, o]
                        }, function $(e) {
                            let t, s, i, n, a = [{
                                    class: "badge"
                                }, e[3]],
                                o = {};
                            for (let r = 0; r < a.length; r += 1) o = (0, x.kpz)(o, a[r]);
                            return {
                                c() {
                                    t = (0, x.ND4)("div"), s = (0, x.ND4)("img"), (0, x.CFu)(s, "class", "badge-icon s-1c9puth"), (0, x.CFu)(s, "crossorigin", "anonymous"), (0, x.CFu)(s, "draggable", "false"), (0, x.mq_)(s.src, i = "./img/badges/" + e[2].path + ".png") || (0, x.CFu)(s, "src", i), (0, x.CFu)(s, "data-tip", n = e[2].text), (0, x.CFu)(s, "height", e[1]), (0, x.CFu)(s, "alt", "Perk badge"), (0, x.goL)(s, "dim", !e[2].selected), (0, x.goL)(s, "unpickable", !e[2].owned && e[0]), (0, x.goL)(s, "pickable", e[2].owned), (0, x.vhI)(t, o), (0, x.goL)(t, "s-1c9puth", !0)
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e), (0, x.BCw)(t, s)
                                },
                                p($, [e]) {
                                    2 & e && (0, x.CFu)(s, "height", $[1]), 5 & e && (0, x.goL)(s, "unpickable", !$[2].owned && $[0]), (0, x.vhI)(t, o = (0, x.HN9)(a, [{
                                        class: "badge"
                                    }, 8 & e && $[3]])), (0, x.goL)(t, "s-1c9puth", !0)
                                },
                                i: x.lQ1,
                                o: x.lQ1,
                                d($) {
                                    $ && (0, x.YoD)(t)
                                }
                            }
                        }, x.jXN, {
                            used: 4,
                            owned: 0,
                            height: 1
                        })
                    }
                }
                let n = i
            },
            14389($, e, t) {
                t.d(e, {
                    A: () => p
                });
                var x = t(83839),
                    s = (t(60821), t(95195)),
                    i = t(95514),
                    n = t(41958),
                    a = t(15308),
                    o = t(19680),
                    r = t(15481);

                function l($) {
                    let e;
                    return {
                        c() {
                            e = (0, x.Qq7)("Spectate")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function c($) {
                    let e = $[2].cSM ? "Hide" : "Show",
                        t, s;
                    return {
                        c() {
                            t = (0, x.Qq7)(e), s = (0, x.Qq7)(" Name")
                        },
                        m($, e) {
                            (0, x.Yry)($, t, e), (0, x.Yry)($, s, e)
                        },
                        p($, s) {
                            4 & s && e !== (e = $[2].cSM ? "Hide" : "Show") && (0, x.iQh)(t, e)
                        },
                        d($) {
                            $ && ((0, x.YoD)(t), (0, x.YoD)(s))
                        }
                    }
                }

                function h($) {
                    let e;
                    return {
                        c() {
                            e = (0, x.Qq7)("Copy Name")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function A($) {
                    let e, t, s, i, n, a;
                    return (e = new r.A({
                        props: {
                            $$slots: {
                                default: [u]
                            },
                            $$scope: {
                                ctx: $
                            }
                        }
                    })).$on("click", $[5]), (s = new r.A({
                        props: {
                            $$slots: {
                                default: [d]
                            },
                            $$scope: {
                                ctx: $
                            }
                        }
                    })).$on("click", $[7]), (n = new r.A({
                        props: {
                            $$slots: {
                                default: [g]
                            },
                            $$scope: {
                                ctx: $
                            }
                        }
                    })).$on("click", $[8]), {
                        c() {
                            (0, x.N0i)(e.$$.fragment), t = (0, x.xem)(), (0, x.N0i)(s.$$.fragment), i = (0, x.xem)(), (0, x.N0i)(n.$$.fragment)
                        },
                        m($, o) {
                            (0, x.wSR)(e, $, o), (0, x.Yry)($, t, o), (0, x.wSR)(s, $, o), (0, x.Yry)($, i, o), (0, x.wSR)(n, $, o), a = !0
                        },
                        p($, t) {
                            var x = {},
                                x = (4100 & t && (x.$$scope = {
                                    dirty: t,
                                    ctx: $
                                }), e.$set(x), {}),
                                x = (4096 & t && (x.$$scope = {
                                    dirty: t,
                                    ctx: $
                                }), s.$set(x), {});
                            4096 & t && (x.$$scope = {
                                dirty: t,
                                ctx: $
                            }), n.$set(x)
                        },
                        i($) {
                            a || ((0, x.c7F)(e.$$.fragment, $), (0, x.c7F)(s.$$.fragment, $), (0, x.c7F)(n.$$.fragment, $), a = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), (0, x.Tn8)(s.$$.fragment, $), (0, x.Tn8)(n.$$.fragment, $), a = !1
                        },
                        d($) {
                            $ && ((0, x.YoD)(t), (0, x.YoD)(i)), (0, x.Hbl)(e, $), (0, x.Hbl)(s, $), (0, x.Hbl)(n, $)
                        }
                    }
                }

                function u($) {
                    let e = $[2].urX ? "Hide" : "Show",
                        t, s;
                    return {
                        c() {
                            t = (0, x.Qq7)(e), s = (0, x.Qq7)(" Skin")
                        },
                        m($, e) {
                            (0, x.Yry)($, t, e), (0, x.Yry)($, s, e)
                        },
                        p($, s) {
                            4 & s && e !== (e = $[2].urX ? "Hide" : "Show") && (0, x.iQh)(t, e)
                        },
                        d($) {
                            $ && ((0, x.YoD)(t), (0, x.YoD)(s))
                        }
                    }
                }

                function d($) {
                    let e;
                    return {
                        c() {
                            e = (0, x.Qq7)("Copy Skin")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function g($) {
                    let e;
                    return {
                        c() {
                            e = (0, x.Qq7)("Copy Info")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function m($) {
                    var e;
                    let t, i, a, o = $[2].name + "",
                        u, d, g, m, C, p, f, _, w, v, b = !s.A.alive && (e = $, (t = new r.A({
                            props: {
                                $$slots: {
                                    default: [l]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            }
                        })).$on("click", e[3]), {
                            c() {
                                (0, x.N0i)(t.$$.fragment)
                            },
                            m($, e) {
                                (0, x.wSR)(t, $, e), i = !0
                            },
                            p($, e) {
                                var x = {};
                                4096 & e && (x.$$scope = {
                                    dirty: e,
                                    ctx: $
                                }), t.$set(x)
                            },
                            i($) {
                                i || ((0, x.c7F)(t.$$.fragment, $), i = !0)
                            },
                            o($) {
                                (0, x.Tn8)(t.$$.fragment, $), i = !1
                            },
                            d($) {
                                (0, x.Hbl)(t, $)
                            }
                        }),
                        y = ((C = new r.A({
                            props: {
                                $$slots: {
                                    default: [c]
                                },
                                $$scope: {
                                    ctx: $
                                }
                            }
                        })).$on("click", $[4]), (f = new r.A({
                            props: {
                                $$slots: {
                                    default: [h]
                                },
                                $$scope: {
                                    ctx: $
                                }
                            }
                        })).$on("click", $[6]), $[2] instanceof n.A && A($));
                    return {
                        c() {
                            a = (0, x.ND4)("span"), u = (0, x.Qq7)(o), g = (0, x.xem)(), b && b.c(), m = (0, x.xem)(), (0, x.N0i)(C.$$.fragment), p = (0, x.xem)(), (0, x.N0i)(f.$$.fragment), _ = (0, x.xem)(), y && y.c(), w = (0, x.Iex)(), (0, x.CFu)(a, "class", "player-name s-e6gqjf"), (0, x.CFu)(a, "style", d = $[2] instanceof n.A && null != $[2].TIJ ? "font-weight:bold;color:" + $[2].TIJ : "")
                        },
                        m($, e) {
                            (0, x.Yry)($, a, e), (0, x.BCw)(a, u), (0, x.Yry)($, g, e), b && b.m($, e), (0, x.Yry)($, m, e), (0, x.wSR)(C, $, e), (0, x.Yry)($, p, e), (0, x.wSR)(f, $, e), (0, x.Yry)($, _, e), y && y.m($, e), (0, x.Yry)($, w, e), v = !0
                        },
                        p($, e) {
                            (!v || 4 & e) && o !== (o = $[2].name + "") && (0, x.iQh)(u, o), (!v || 4 & e && d !== (d = $[2] instanceof n.A && null != $[2].TIJ ? "font-weight:bold;color:" + $[2].TIJ : "")) && (0, x.CFu)(a, "style", d), s.A.alive || b.p($, e);
                            var t = {},
                                t = (4100 & e && (t.$$scope = {
                                    dirty: e,
                                    ctx: $
                                }), C.$set(t), {});
                            4096 & e && (t.$$scope = {
                                dirty: e,
                                ctx: $
                            }), f.$set(t), $[2] instanceof n.A ? y ? (y.p($, e), 4 & e && (0, x.c7F)(y, 1)) : ((y = A($)).c(), (0, x.c7F)(y, 1), y.m(w.parentNode, w)) : y && ((0, x.V44)(), (0, x.Tn8)(y, 1, 1, () => {
                                y = null
                            }), (0, x.GYV)())
                        },
                        i($) {
                            v || ((0, x.c7F)(b), (0, x.c7F)(C.$$.fragment, $), (0, x.c7F)(f.$$.fragment, $), (0, x.c7F)(y), v = !0)
                        },
                        o($) {
                            (0, x.Tn8)(b), (0, x.Tn8)(C.$$.fragment, $), (0, x.Tn8)(f.$$.fragment, $), (0, x.Tn8)(y), v = !1
                        },
                        d($) {
                            $ && ((0, x.YoD)(a), (0, x.YoD)(g), (0, x.YoD)(m), (0, x.YoD)(p), (0, x.YoD)(_), (0, x.YoD)(w)), b && b.d($), (0, x.Hbl)(C, $), (0, x.Hbl)(f, $), y && y.d($)
                        }
                    }
                }
                class C extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, o) {
                            let r;
                            var l = i.Uk.view;
                            let c = !1,
                                h;
                            return s.A.on("stopped", () => {
                                o(2, h = null)
                            }), s.A.on("WdtSom", async $ => {
                                $?.pid ? (r && c && r.update(), o(2, h = $), o(1, c = !0)) : o(1, c = !1)
                            }), l.addEventListener("click", () => {
                                o(1, c = !1)
                            }), [r, c, h, () => {
                                null != h && s.A.kmM.Xiy(h.pid)
                            }, () => {
                                null != h && (o(2, h.vyo = !h.cSM, h), h.AaG())
                            }, () => {
                                null != h && h instanceof n.A && (o(2, h.GeA = !h.urX, h), h.AaG())
                            }, () => {
                                null != h && (navigator.clipboard.writeText(h.name), (0, a.me)("Copied name to clipboard", 0, 2e3))
                            }, () => {
                                null != h && (navigator.clipboard.writeText(h.skinUrl || ""), (0, a.me)("Copied skin to clipboard", 0, 2e3))
                            }, () => {
                                var $;
                                null != h && h instanceof n.A && (($ = []).push("Name: " + (h.name ?? "Unnamed")), $.push("Tag ID: " + (h.tagId ?? "<global tag>")), $.push("Name Color: " + (h.TIJ ?? "#ffffff")), $.push("Skin URL: " + (h.skinUrl ?? "https://vanis.io/s/vanis1")), navigator.clipboard.writeText($.join("\r\n")), (0, a.me)("Copied information to clipboard", 0, 2e3))
                            }, function($) {
                                x.Dnk[$ ? "unshift" : "push"](() => {
                                    o(0, r = $)
                                })
                            }, function($) {
                                o(1, c = $)
                            }]
                        }, function $(e) {
                            let t, s, i;

                            function n($) {
                                e[10]($)
                            }
                            var a = {
                                $$slots: {
                                    default: [m]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[1] && (a.show = e[1]), t = new o.A({
                                props: a
                            }), e[9](t), x.Dnk.push(() => (0, x.oIE)(t, "show", n)), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), i = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    4100 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 2 & e && (s = !0, i.show = $[1], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    i || ((0, x.c7F)(t.$$.fragment, $), i = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), i = !1
                                },
                                d($) {
                                    e[9](null), (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let p = C
            },
            92008($, e, t) {
                t.d(e, {
                    A: () => b
                });
                var x = t(83839),
                    s = (t(60821), t(95195)),
                    i = t(83529),
                    n = t(95514),
                    a = t(15308),
                    o = t(54659),
                    r = t(3854),
                    l = t(95669),
                    c = t(41949);

                function h($, e, t) {
                    return ($ = $.slice())[21] = e[t], $
                }

                function A($) {
                    let e, t, s = 1 + $[21].ePG + "",
                        i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("span"), t = (0, x.Qq7)("[tab "), i = (0, x.Qq7)(s), n = (0, x.Qq7)("]"), (0, x.CFu)(e, "class", "message tabid s-619hc6")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n)
                        },
                        p($, e) {
                            8 & e && s !== (s = 1 + $[21].ePG + "") && (0, x.iQh)(i, s)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function u($) {
                    let e, t, s = $[21].from + "",
                        i, n, a, o, r, l, c, h, A = $[21].badges && g($);
                    return {
                        c() {
                            e = (0, x.ND4)("span"), A && A.c(), t = (0, x.xem)(), i = (0, x.Qq7)(s), n = (0, x.xem)(), r = (0, x.Qq7)(":"), (0, x.CFu)(e, "class", "message sender s-619hc6"), (0, x.CFu)(e, "style", a = "color:" + $[21].Yqh + ";" + ("#ffffff" === $[21].Yqh ? "" : "text-shadow: 0 0 3px " + $[21].Yqh + ";")), (0, x.CFu)(e, "data-pid", o = $[21].pid), (0, x.CFu)(e, "data-tip", "Click to spectate")
                        },
                        m(s, a) {
                            (0, x.Yry)(s, e, a), A && A.m(e, null), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n), (0, x.Yry)(s, r, a), l = !0, c || (h = (0, x.KTR)(e, "click", $[12]), c = !0)
                        },
                        p($, n) {
                            $[21].badges ? A ? (A.p($, n), 8 & n && (0, x.c7F)(A, 1)) : ((A = g($)).c(), (0, x.c7F)(A, 1), A.m(e, t)) : A && ((0, x.V44)(), (0, x.Tn8)(A, 1, 1, () => {
                                A = null
                            }), (0, x.GYV)()), (!l || 8 & n) && s !== (s = $[21].from + "") && (0, x.iQh)(i, s), (!l || 8 & n && a !== (a = "color:" + $[21].Yqh + ";" + ("#ffffff" === $[21].Yqh ? "" : "text-shadow: 0 0 3px " + $[21].Yqh + ";"))) && (0, x.CFu)(e, "style", a), (!l || 8 & n && o !== (o = $[21].pid)) && (0, x.CFu)(e, "data-pid", o)
                        },
                        i($) {
                            l || ((0, x.c7F)(A), l = !0)
                        },
                        o($) {
                            (0, x.Tn8)(A), l = !1
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(r)), A && A.d(), c = !1, h()
                        }
                    }
                }

                function d($) {
                    let e, t, s, i, n, a = $[21].badges && m($),
                        o = $[21].from && C($),
                        r = $[21].from && p();
                    return {
                        c() {
                            e = (0, x.ND4)("span"), a && a.c(), t = (0, x.xem)(), o && o.c(), s = (0, x.xem)(), r && r.c(), i = (0, x.Iex)(), (0, x.CFu)(e, "class", "message s-619hc6")
                        },
                        m($, l) {
                            (0, x.Yry)($, e, l), a && a.m(e, null), (0, x.BCw)(e, t), o && o.m(e, null), (0, x.Yry)($, s, l), r && r.m($, l), (0, x.Yry)($, i, l), n = !0
                        },
                        p($, s) {
                            $[21].badges ? a ? (a.p($, s), 8 & s && (0, x.c7F)(a, 1)) : ((a = m($)).c(), (0, x.c7F)(a, 1), a.m(e, t)) : a && ((0, x.V44)(), (0, x.Tn8)(a, 1, 1, () => {
                                a = null
                            }), (0, x.GYV)()), $[21].from ? o ? o.p($, s) : ((o = C($)).c(), o.m(e, null)) : o && (o.d(1), o = null), $[21].from ? r || ((r = p()).c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null)
                        },
                        i($) {
                            n || ((0, x.c7F)(a), n = !0)
                        },
                        o($) {
                            (0, x.Tn8)(a), n = !1
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(s), (0, x.YoD)(i)), a && a.d(), o && o.d(), r && r.d($)
                        }
                    }
                }

                function g($) {
                    let e, t, s;
                    return t = new r.A({
                        props: {
                            used: $[21].badges,
                            height: 15
                        }
                    }), {
                        c() {
                            e = (0, x.ND4)("div"), (0, x.N0i)(t.$$.fragment), (0, x.CFu)(e, "class", "message-badges s-619hc6")
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.wSR)(t, e, null), s = !0
                        },
                        p($, e) {
                            var x = {};
                            8 & e && (x.used = $[21].badges), t.$set(x)
                        },
                        i($) {
                            s || ((0, x.c7F)(t.$$.fragment, $), s = !0)
                        },
                        o($) {
                            (0, x.Tn8)(t.$$.fragment, $), s = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.Hbl)(t)
                        }
                    }
                }

                function m($) {
                    let e, t, s;
                    return t = new r.A({
                        props: {
                            used: $[21].badges,
                            height: 15
                        }
                    }), {
                        c() {
                            e = (0, x.ND4)("div"), (0, x.N0i)(t.$$.fragment), (0, x.CFu)(e, "class", "message-badges s-619hc6")
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.wSR)(t, e, null), s = !0
                        },
                        p($, e) {
                            var x = {};
                            8 & e && (x.used = $[21].badges), t.$set(x)
                        },
                        i($) {
                            s || ((0, x.c7F)(t.$$.fragment, $), s = !0)
                        },
                        o($) {
                            (0, x.Tn8)(t.$$.fragment, $), s = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.Hbl)(t)
                        }
                    }
                }

                function C($) {
                    let e, t = $[21].from + "",
                        s, i;
                    return {
                        c() {
                            e = (0, x.Qq7)("["), s = (0, x.Qq7)(t), i = (0, x.Qq7)("]")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.Yry)($, s, t), (0, x.Yry)($, i, t)
                        },
                        p($, e) {
                            8 & e && t !== (t = $[21].from + "") && (0, x.iQh)(s, t)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(s), (0, x.YoD)(i))
                        }
                    }
                }

                function p() {
                    let $;
                    return {
                        c() {
                            $ = (0, x.Qq7)(":")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function f($) {
                    let e, t, s, i, n = $[21].timeStamp + "",
                        a, o, r, l, c, h, g, m, C = $[21].text + "",
                        p, f, _, w = "number" == typeof $[21].ePG && A($),
                        v = [d, u],
                        b = [];

                    function y($, e) {
                        return (l = null == (l = 8 & e ? null : l) ? !!Number.isNaN($[21].pid) : l) ? 0 : $[21].from ? 1 : -1
                    }
                    return ~(c = y($, -1)) && (h = b[c] = v[c]($)), {
                        c() {
                            e = (0, x.ND4)("div"), w && w.c(), t = (0, x.xem)(), s = (0, x.ND4)("span"), i = (0, x.Qq7)("["), a = (0, x.Qq7)(n), o = (0, x.Qq7)("]"), r = (0, x.xem)(), h && h.c(), g = (0, x.xem)(), m = (0, x.ND4)("span"), p = (0, x.Qq7)(C), f = (0, x.xem)(), (0, x.hgi)(s, "color", $[21].DvN || "#818589"), (0, x.CFu)(s, "class", "message stamp s-619hc6"), (0, x.CFu)(m, "class", "message text s-619hc6"), (0, x.hgi)(m, "color", $[21].textColor), (0, x.CFu)(e, "class", "message s-619hc6")
                        },
                        m($, n) {
                            (0, x.Yry)($, e, n), w && w.m(e, null), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(s, i), (0, x.BCw)(s, a), (0, x.BCw)(s, o), (0, x.BCw)(e, r), ~c && b[c].m(e, null), (0, x.BCw)(e, g), (0, x.BCw)(e, m), (0, x.BCw)(m, p), (0, x.BCw)(e, f), _ = !0
                        },
                        p($, i) {
                            "number" == typeof $[21].ePG ? w ? w.p($, i) : ((w = A($)).c(), w.m(e, t)) : w && (w.d(1), w = null), (!_ || 8 & i) && n !== (n = $[21].timeStamp + "") && (0, x.iQh)(a, n), (!_ || 8 & i) && (0, x.hgi)(s, "color", $[21].DvN || "#818589");
                            let o = c;
                            (c = y($, i)) === o ? ~c && b[c].p($, i) : (h && ((0, x.V44)(), (0, x.Tn8)(b[o], 1, 1, () => {
                                b[o] = null
                            }), (0, x.GYV)()), ~c ? ((h = b[c]) ? h.p($, i) : (h = b[c] = v[c]($)).c(), (0, x.c7F)(h, 1), h.m(e, g)) : h = null), (!_ || 8 & i) && C !== (C = $[21].text + "") && (0, x.iQh)(p, C), (!_ || 8 & i) && (0, x.hgi)(m, "color", $[21].textColor)
                        },
                        i($) {
                            _ || ((0, x.c7F)(h), _ = !0)
                        },
                        o($) {
                            (0, x.Tn8)(h), _ = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), w && w.d(), ~c && b[c].d()
                        }
                    }
                }

                function _($) {
                    let e, t, s = (0, x.rv_)($[3]),
                        i = [];
                    for (let n = 0; n < s.length; n += 1) i[n] = f(h($, s, n));
                    return {
                        c() {
                            for (let $ = 0; $ < i.length; $ += 1) i[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, s) {
                            for (let n = 0; n < i.length; n += 1) i[n] && i[n].m($, s);
                            (0, x.Yry)($, e, s), t = !0
                        },
                        p($, t) {
                            if (4104 & t) {
                                s = (0, x.rv_)($[3]);
                                let n;
                                for (n = 0; n < s.length; n += 1) {
                                    var a, o = h($, s, n);
                                    i[n] ? (i[n].p(o, t), (0, x.c7F)(i[n], 1)) : (i[n] = f(o), i[n].c(), (0, x.c7F)(i[n], 1), i[n].m(e.parentNode, e))
                                }
                                for ((0, x.V44)(), n = s.length; n < i.length; n += 1) a = n, (0, x.Tn8)(i[a], 1, 1, () => {
                                    i[a] = null
                                });
                                (0, x.GYV)()
                            }
                        },
                        i($) {
                            if (!t) {
                                for (let e = 0; e < s.length; e += 1)(0, x.c7F)(i[e]);
                                t = !0
                            }
                        },
                        o($) {
                            i = i.filter(Boolean);
                            for (let e = 0; e < i.length; e += 1)(0, x.Tn8)(i[e]);
                            t = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(i, $)
                        }
                    }
                }

                function w($) {
                    let e, t, s, i, n, a, o, r, l;
                    return {
                        c() {
                            e = (0, x.ND4)("select"), t = (0, x.ND4)("option"), s = (0, x.Qq7)("Tab 1"), n = (0, x.ND4)("option"), a = (0, x.Qq7)("Tab 2"), t.disabled = i = !$[9][0], t.__value = "0", (0, x.Gvd)(t, t.__value), n.disabled = o = !$[9][1], n.__value = "1", (0, x.Gvd)(n, n.__value), (0, x.CFu)(e, "class", "tab-selection s-619hc6"), (0, x.CFu)(e, "name", "speaker"), void 0 === $[0] && (0, x.Dti)(() => $[15].call(e))
                        },
                        m(i, o) {
                            (0, x.Yry)(i, e, o), (0, x.BCw)(e, t), (0, x.BCw)(t, s), (0, x.BCw)(e, n), (0, x.BCw)(n, a), (0, x.fs8)(e, $[0], !0), r || (l = (0, x.KTR)(e, "change", $[15]), r = !0)
                        },
                        p($, s) {
                            512 & s && i !== (i = !$[9][0]) && (t.disabled = i), 512 & s && o !== (o = !$[9][1]) && (n.disabled = o), 1 & s && (0, x.fs8)(e, $[0])
                        },
                        d($) {
                            $ && (0, x.YoD)(e), r = !1, l()
                        }
                    }
                }
                class v extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, r) {
                            let l;
                            n.Uk.view.addEventListener("mousedown", async $ => {
                                await (0, c.io)(), h?.blur()
                            });
                            let h, A, u = async $ => {
                                f && (await (0, c.io)(), !$ && 200 < Math.abs(A.scrollHeight - A.clientHeight - A.scrollTop) || r(2, A.scrollTop = A.scrollHeight, A))
                            }, d = (s.A.on("osKiSw", () => h.focus()), []), g = !1, m = $ => {
                                d.push($), 300 < d.length && d.shift(), r(4, g = !g), u(!1)
                            }, C = {
                                Yqh: "#99cdff",
                                pid: NaN,
                                badges: o.H.get("official")
                            }, p = {
                                Yqh: "#e1dedd",
                                pid: NaN,
                                badges: o.H.get("system")
                            }, f = (s.A.on("QsoZPW", $ => {
                                m(Object.assign({
                                    text: $,
                                    timeStamp: (0, a.rO)()
                                }, C))
                            }), s.A.on("cjyapb", ($, e) => {
                                m(Object.assign({
                                    text: $,
                                    textColor: e,
                                    timeStamp: (0, a.rO)()
                                }, p))
                            }), s.A.on("NExDkf", $ => {
                                $.Yqh || ($.Yqh = "#ffffff"), $.textColor || ($.textColor = "#ffffff"), $.timeStamp || ($.timeStamp = (0, a.rO)()), m($)
                            }), s.A.on("IickcJ", () => {
                                r(3, d = [])
                            }), !1), _ = i.A.get("showHud") && i.A.get("showChat"), w = i.A.get("hudScale"), v = i.A.get("chatHeight"), b = (s.A.on("uEBHda", $ => {
                                r(5, f = $)
                            }), i.A.on("zrVIMz", ($, e) => {
                                "chatHeight" === $ ? r(8, v = e) : "showChat" === $ && i.A.get("showHud") ? r(6, _ = e) : "showHud" === $ ? r(6, _ = e && i.A.get("showChat")) : "hudScale" === $ && r(7, w = e)
                            }), "0"), y = [!1, !1];
                            return s.A.on("jPH", ($, e) => {
                                e && !y[l] && (r(0, b = "" + $), r(10, l = $)), r(9, y[$] = e, y), r(9, y)
                            }), e.$$.update = () => {
                                1 & e.$$.dirty && r(10, l = +b)
                            }, [b, h, A, d, g, f, _, w, v, y, l, $ => {
                                "Enter" === $.key && (h.value?.trim() && (s.A.eWI[l].uot(h.value), r(1, h.value = "", h)), n.Uk.view.focus(), u(!0))
                            }, $ => {
                                var $ = $.target;
                                $ && ($ = +$.dataset.pid) && s.A.kmM.Xiy($)
                            }, function($) {
                                x.Dnk[$ ? "unshift" : "push"](() => {
                                    r(2, A = $)
                                })
                            }, function($) {
                                x.Dnk[$ ? "unshift" : "push"](() => {
                                    r(1, h = $)
                                })
                            }, function() {
                                r(0, b = (0, x.Hw5)(this))
                            }]
                        }, function $(e) {
                            let t, s, i, n = e[4],
                                a, o, r, c, h, A = e[9],
                                u, d, g, m, C = _(e),
                                p = w(e);
                            return {
                                c() {
                                    t = (0, x.ND4)("div"), s = (0, x.ND4)("div"), i = (0, x.ND4)("div"), C.c(), a = (0, x.xem)(), o = (0, x.ND4)("div"), r = (0, x.ND4)("input"), h = (0, x.xem)(), p.c(), (0, x.CFu)(i, "class", "message-list s-619hc6"), (0, x.CFu)(r, "class", "message-input s-619hc6"), (0, x.CFu)(r, "type", "text"), (0, x.CFu)(r, "spellcheck", "false"), (0, x.CFu)(r, "autocomplete", "off"), (0, x.CFu)(r, "maxlength", "100"), (0, x.CFu)(r, "tabindex", "-1"), (0, x.CFu)(r, "placeholder", c = "Enter message as tab " + (1 + e[10]) + "..."), (0, x.CFu)(o, "class", "inputs s-619hc6"), (0, x.CFu)(s, "class", "chatbox s-619hc6"), (0, x.hgi)(s, "height", e[8]), (0, x.CFu)(t, "class", "chat-container s-619hc6"), (0, x.hgi)(t, "transform", "scale(" + e[7] + ")"), (0, x.hgi)(t, "display", e[5] && e[6] ? "block" : "none")
                                },
                                m($, n) {
                                    (0, x.Yry)($, t, n), (0, x.BCw)(t, s), (0, x.BCw)(s, i), C.m(i, null), e[13](i), (0, x.BCw)(s, a), (0, x.BCw)(s, o), (0, x.BCw)(o, r), e[14](r), (0, x.BCw)(o, h), p.m(o, null), d = !0, g || (m = (0, x.KTR)(r, "keydown", e[11]), g = !0)
                                },
                                p($, [e]) {
                                    16 & e && (0, x.jXN)(n, n = $[4]) ? ((0, x.V44)(), (0, x.Tn8)(C, 1, 1, x.lQ1), (0, x.GYV)(), (C = _($)).c(), (0, x.c7F)(C, 1), C.m(i, null)) : C.p($, e), (!d || 1024 & e && c !== (c = "Enter message as tab " + (1 + $[10]) + "...")) && (0, x.CFu)(r, "placeholder", c), 512 & e && (0, x.jXN)(A, A = $[9]) ? (p.d(1), (p = w($)).c(), p.m(o, null)) : p.p($, e), (!d || 256 & e) && (0, x.hgi)(s, "height", $[8]), (!d || 128 & e) && (0, x.hgi)(t, "transform", "scale(" + $[7] + ")"), (!d || 96 & e) && (0, x.hgi)(t, "display", $[5] && $[6] ? "block" : "none")
                                },
                                i($) {
                                    d || ((0, x.c7F)(C), $ && (0, x.Dti)(() => {
                                        d && (u = u || (0, x.h86)(t, l.Rv, {
                                            duration: 300
                                        }, !0)).run(1)
                                    }), d = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(C), $ && (u = u || (0, x.h86)(t, l.Rv, {
                                        duration: 300
                                    }, !1)).run(0), d = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), C.d($), e[13](null), e[14](null), p.d($), $ && u && u.end(), g = !1, m()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let b = v
            },
            79305($, e, t) {
                t.d(e, {
                    A: () => w
                });
                var x = t(83839),
                    s = (t(60821), t(95195)),
                    i = t(78225),
                    n = t(83529),
                    a = t(3854),
                    o = t(95669);

                function r($, e, t) {
                    return ($ = $.slice())[11] = e[t], $[13] = t, $
                }

                function l($) {
                    let e, t, s, i, n, a = $[5],
                        r, l, c = C($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), s = (0, x.Qq7)($[3]), i = (0, x.xem)(), n = (0, x.ND4)("div"), c.c(), (0, x.CFu)(t, "class", "leaderboard title s-mzwvqb"), (0, x.goL)(t, "hide", !$[4]), (0, x.CFu)(e, "class", "leaderboard-container s-mzwvqb"), (0, x.hgi)(e, "transform", "scale(" + $[2] + ")")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(t, s), (0, x.BCw)(e, i), (0, x.BCw)(e, n), c.m(n, null), l = !0
                        },
                        p($, i) {
                            (!l || 8 & i) && (0, x.iQh)(s, $[3]), (!l || 16 & i) && (0, x.goL)(t, "hide", !$[4]), 32 & i && (0, x.jXN)(a, a = $[5]) ? ((0, x.V44)(), (0, x.Tn8)(c, 1, 1, x.lQ1), (0, x.GYV)(), (c = C($)).c(), (0, x.c7F)(c, 1), c.m(n, null)) : c.p($, i), (!l || 4 & i) && (0, x.hgi)(e, "transform", "scale(" + $[2] + ")")
                        },
                        i($) {
                            l || ((0, x.c7F)(c), $ && (0, x.Dti)(() => {
                                l && (r = r || (0, x.h86)(e, o.Rv, {
                                    duration: 300
                                }, !0)).run(1)
                            }), l = !0)
                        },
                        o($) {
                            (0, x.Tn8)(c), $ && (r = r || (0, x.h86)(e, o.Rv, {
                                duration: 300
                            }, !1)).run(0), l = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), c.d($), $ && r && r.end()
                        }
                    }
                }

                function c($) {
                    let e, t = $[11].position + "",
                        s, i;
                    return {
                        c() {
                            e = (0, x.ND4)("span"), s = (0, x.Qq7)(t), i = (0, x.Qq7)("."), (0, x.CFu)(e, "class", "leaderboard entry-position s-mzwvqb")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i)
                        },
                        p($, e) {
                            64 & e && t !== (t = $[11].position + "") && (0, x.iQh)(s, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function h($) {
                    let e, t;
                    return e = new a.A({
                        props: {
                            used: $[11].badges,
                            height: 18,
                            style: "margin-top:3px;position:absolute;inset:0;margin-left:" + (p ? 24 : 16) + "px;"
                        }
                    }), {
                        c() {
                            (0, x.N0i)(e.$$.fragment)
                        },
                        m($, s) {
                            (0, x.wSR)(e, $, s), t = !0
                        },
                        p($, t) {
                            var x = {};
                            64 & t && (x.used = $[11].badges), e.$set(x)
                        },
                        i($) {
                            t || ((0, x.c7F)(e.$$.fragment, $), t = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), t = !1
                        },
                        d($) {
                            (0, x.Hbl)(e, $)
                        }
                    }
                }

                function A($) {
                    let e, t, s = $[11].badges && h($);
                    return {
                        c() {
                            s && s.c(), e = (0, x.Iex)()
                        },
                        m($, i) {
                            s && s.m($, i), (0, x.Yry)($, e, i), t = !0
                        },
                        p($, t) {
                            $[11].badges ? s ? (s.p($, t), 64 & t && (0, x.c7F)(s, 1)) : ((s = h($)).c(), (0, x.c7F)(s, 1), s.m(e.parentNode, e)) : s && ((0, x.V44)(), (0, x.Tn8)(s, 1, 1, () => {
                                s = null
                            }), (0, x.GYV)())
                        },
                        i($) {
                            t || ((0, x.c7F)(s), t = !0)
                        },
                        o($) {
                            (0, x.Tn8)(s), t = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), s && s.d($)
                        }
                    }
                }

                function u($) {
                    let e, t = $[11].text + "",
                        s, i;
                    return {
                        c() {
                            e = (0, x.ND4)("a"), s = (0, x.Qq7)(t), (0, x.CFu)(e, "href", i = $[11].link), (0, x.CFu)(e, "target", "_blank"), (0, x.CFu)(e, "rel", "noopener"), (0, x.CFu)(e, "class", "s-mzwvqb")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.BCw)(e, s)
                        },
                        p($, n) {
                            64 & n && t !== (t = $[11].text + "") && (0, x.iQh)(s, t), 64 & n && i !== (i = $[11].link) && (0, x.CFu)(e, "href", i)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function d($) {
                    let e = $[11].text + "",
                        t;
                    return {
                        c() {
                            t = (0, x.Qq7)(e)
                        },
                        m($, e) {
                            (0, x.Yry)($, t, e)
                        },
                        p($, s) {
                            64 & s && e !== (e = $[11].text + "") && (0, x.iQh)(t, e)
                        },
                        d($) {
                            $ && (0, x.YoD)(t)
                        }
                    }
                }

                function g($) {
                    let e, t;

                    function s($) {
                        return $[11].link ? u : d
                    }
                    let i = s($),
                        n = i($);
                    return {
                        c() {
                            e = (0, x.ND4)("span"), n.c(), (0, x.CFu)(e, "class", "leaderboard entry-text s-mzwvqb"), (0, x.CFu)(e, "style", t = "color:" + $[11].color + ";" + ("#ffffff" === $[11].color ? "" : "text-shadow:0 0 3px " + $[11].color + ";") + "font-weight:" + ($[11].bold ? "bold" : "normal"))
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), n.m(e, null)
                        },
                        p($, a) {
                            i === (i = s($)) && n ? n.p($, a) : (n.d(1), (n = i($)) && (n.c(), n.m(e, null))), 64 & a && t !== (t = "color:" + $[11].color + ";" + ("#ffffff" === $[11].color ? "" : "text-shadow:0 0 3px " + $[11].color + ";") + "font-weight:" + ($[11].bold ? "bold" : "normal")) && (0, x.CFu)(e, "style", t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), n.d()
                        }
                    }
                }

                function m($) {
                    let e, t, s = $[5],
                        i, n = $[5],
                        a, o, r, l, h, u, d, m = p && $[11].position && c($),
                        C = A($),
                        _ = g($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), m && m.c(), t = (0, x.xem)(), C.c(), i = (0, x.xem)(), _.c(), a = (0, x.xem)(), (0, x.CFu)(e, "class", "leaderboard entry s-mzwvqb"), (0, x.CFu)(e, "data-pid", o = $[11].pid), (0, x.CFu)(e, "data-key", r = $[13]), (0, x.CFu)(e, "data-tip", l = $[11].pid ? "Click to spectate player" : ""), (0, x.goL)(e, "custom", !$[11].pid)
                        },
                        m(s, n) {
                            (0, x.Yry)(s, e, n), m && m.m(e, null), (0, x.BCw)(e, t), C.m(e, null), (0, x.BCw)(e, i), _.m(e, null), (0, x.BCw)(e, a), h = !0, u || (d = (0, x.KTR)(e, "click", function() {
                                (0, x.Qk1)($[11].pid ? $[7] : f) && ($[11].pid ? $[7] : f).apply(this, arguments)
                            }), u = !0)
                        },
                        p(r, u) {
                            $ = r, p && $[11].position ? m ? m.p($, u) : ((m = c($)).c(), m.m(e, t)) : m && (m.d(1), m = null), 32 & u && (0, x.jXN)(s, s = $[5]) ? ((0, x.V44)(), (0, x.Tn8)(C, 1, 1, x.lQ1), (0, x.GYV)(), (C = A($)).c(), (0, x.c7F)(C, 1), C.m(e, i)) : C.p($, u), 32 & u && (0, x.jXN)(n, n = $[5]) ? (_.d(1), (_ = g($)).c(), _.m(e, a)) : _.p($, u), (!h || 64 & u && o !== (o = $[11].pid)) && (0, x.CFu)(e, "data-pid", o), (!h || 64 & u && l !== (l = $[11].pid ? "Click to spectate player" : "")) && (0, x.CFu)(e, "data-tip", l), (!h || 64 & u) && (0, x.goL)(e, "custom", !$[11].pid)
                        },
                        i($) {
                            h || ((0, x.c7F)(C), h = !0)
                        },
                        o($) {
                            (0, x.Tn8)(C), h = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), m && m.d(), C.d($), _.d($), u = !1, d()
                        }
                    }
                }

                function C($) {
                    let e, t, s = (0, x.rv_)($[6]),
                        i = [];
                    for (let n = 0; n < s.length; n += 1) i[n] = m(r($, s, n));
                    return {
                        c() {
                            for (let $ = 0; $ < i.length; $ += 1) i[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, s) {
                            for (let n = 0; n < i.length; n += 1) i[n] && i[n].m($, s);
                            (0, x.Yry)($, e, s), t = !0
                        },
                        p($, t) {
                            if (224 & t) {
                                s = (0, x.rv_)($[6]);
                                let n;
                                for (n = 0; n < s.length; n += 1) {
                                    var a, o = r($, s, n);
                                    i[n] ? (i[n].p(o, t), (0, x.c7F)(i[n], 1)) : (i[n] = m(o), i[n].c(), (0, x.c7F)(i[n], 1), i[n].m(e.parentNode, e))
                                }
                                for ((0, x.V44)(), n = s.length; n < i.length; n += 1) a = n, (0, x.Tn8)(i[a], 1, 1, () => {
                                    i[a] = null
                                });
                                (0, x.GYV)()
                            }
                        },
                        i($) {
                            if (!t) {
                                for (let e = 0; e < s.length; e += 1)(0, x.c7F)(i[e]);
                                t = !0
                            }
                        },
                        o($) {
                            i = i.filter(Boolean);
                            for (let e = 0; e < i.length; e += 1)(0, x.Tn8)(i[e]);
                            t = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(i, $)
                        }
                    }
                }
                let p = !1,
                    f = () => {};
                class _ extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, x) {
                            let a = !1,
                                o = n.A.get("showHud") && n.A.get("showLeaderboard"),
                                r = n.A.get("hudScale"),
                                l = (n.A.on("zrVIMz", ($, e) => {
                                    "showLeaderboard" === $ && n.A.get("showHud") ? x(1, o = e) : "showHud" === $ ? x(1, o = e && n.A.get("showLeaderboard")) : "hudScale" === $ && x(2, r = e)
                                }), "Leaderboard"),
                                c = !0,
                                h = !1,
                                A = [],
                                u = new Map([
                                    [0, "first"],
                                    [1, "second"],
                                    [2, "third"],
                                    [3, "fourth"],
                                    [4, "fifth"],
                                    [5, "sixth"],
                                    [6, "seventh"],
                                    [7, "eighth"],
                                    [8, "ninth"],
                                    [9, "tenth"]
                                ]);
                            return new class {
                                constructor() {
                                    this.AfU = ($, e) => {
                                        if (a && s.A.alive) {
                                            if ($.some($ => i.A.pids.includes($.pid))) $ = $.map($ => {
                                                var e;
                                                return i.A.pids.includes($.pid) && (e = i.A.pids.findIndex(e => e === $.pid), e = s.A.scores[e]) && ($.text += " (" + s.A.Hdd(e) + ")"), $
                                            });
                                            else {
                                                let t = "You";
                                                var o = s.A.YIr;
                                                o && (t += " (" + s.A.Hdd(o) + ")"), $.push({
                                                    pid: s.A.SAd,
                                                    text: t,
                                                    color: "#ffffff",
                                                    bold: !1
                                                })
                                            }
                                        }
                                        if (x(6, A = $), x(5, h = !h), e) x(3, l = e.text), x(4, c = e.visible);
                                        else if (n.A.get("showServerName") && i.A.selectedServer) {
                                            x(4, c = !0);
                                            let r = i.A.selectedServer.region || "";
                                            r && (r += " "), r += i.A.selectedServer.name || "Unknown server", x(3, l = r)
                                        } else x(4, c = !0), x(3, l = "Leaderboard")
                                    }, s.A.on("rBrwjl", $ => {
                                        x(1, o = $)
                                    }), s.A.on("lnBlYR", this.show.bind(this)), s.A.on("EnBeEu", this.hide.bind(this))
                                }
                                show() {
                                    a || (s.A.on("OyTJwL", this.AfU), x(0, a = !0))
                                }
                                hide() {
                                    a && (s.A.off("OyTJwL", this.AfU), x(5, h = !h), x(6, A = []), x(0, a = !1))
                                }
                            }, [a, o, r, l, c, h, A, $ => {
                                let e = $.target,
                                    t = 3;
                                for (; !e.classList.contains("entry") && --t;) e = e.parentElement;
                                var $ = +e.dataset.pid,
                                    x = +e.dataset.key;
                                "number" == typeof $ && "number" == typeof x && s.A.kmM.Xiy($, u.get(x) + " largest player")
                            }]
                        }, function $(e) {
                            let t, s, i = e[0] && e[1] && l(e);
                            return {
                                c() {
                                    i && i.c(), t = (0, x.Iex)()
                                },
                                m($, e) {
                                    i && i.m($, e), (0, x.Yry)($, t, e), s = !0
                                },
                                p($, [e]) {
                                    $[0] && $[1] ? i ? (i.p($, e), 3 & e && (0, x.c7F)(i, 1)) : ((i = l($)).c(), (0, x.c7F)(i, 1), i.m(t.parentNode, t)) : i && ((0, x.V44)(), (0, x.Tn8)(i, 1, 1, () => {
                                        i = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    s || ((0, x.c7F)(i), s = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(i), s = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), i && i.d($)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let w = _
            },
            98685($, e, t) {
                t.d(e, {
                    A: () => p
                });
                var x = t(83839),
                    s = (t(60821), t(95195)),
                    i = t(78225),
                    n = t(83529),
                    a = t(49853),
                    o = t(35171),
                    r = t(41949),
                    l = t(54603);

                function c($) {
                    let e, t, s, i, n, a, o = $[17] && null != $[11] && h($),
                        r = $[16] && null != $[10] && A($),
                        l = $[14] && null != $[6] && u($),
                        c = $[13] && 0 !== $[8] && d($),
                        C = $[12] && 0 !== $[7] && g($),
                        p = $[15] && null != $[9] && m($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), o && o.c(), t = (0, x.xem)(), r && r.c(), s = (0, x.xem)(), l && l.c(), i = (0, x.xem)(), c && c.c(), n = (0, x.xem)(), C && C.c(), a = (0, x.xem)(), p && p.c(), (0, x.CFu)(e, "class", "stats s-xbgjyv")
                        },
                        m($, h) {
                            (0, x.Yry)($, e, h), o && o.m(e, null), (0, x.BCw)(e, t), r && r.m(e, null), (0, x.BCw)(e, s), l && l.m(e, null), (0, x.BCw)(e, i), c && c.m(e, null), (0, x.BCw)(e, n), C && C.m(e, null), (0, x.BCw)(e, a), p && p.m(e, null)
                        },
                        p($, x) {
                            $[17] && null != $[11] ? o ? o.p($, x) : ((o = h($)).c(), o.m(e, t)) : o && (o.d(1), o = null), $[16] && null != $[10] ? r ? r.p($, x) : ((r = A($)).c(), r.m(e, s)) : r && (r.d(1), r = null), $[14] && null != $[6] ? l ? l.p($, x) : ((l = u($)).c(), l.m(e, i)) : l && (l.d(1), l = null), $[13] && 0 !== $[8] ? c ? c.p($, x) : ((c = d($)).c(), c.m(e, n)) : c && (c.d(1), c = null), $[12] && 0 !== $[7] ? C ? C.p($, x) : ((C = g($)).c(), C.m(e, a)) : C && (C.d(1), C = null), $[15] && null != $[9] ? p ? p.p($, x) : ((p = m($)).c(), p.m(e, null)) : p && (p.d(1), p = null)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), o && o.d(), r && r.d(), l && l.d(), c && c.d(), C && C.d(), p && p.d()
                        }
                    }
                }

                function h($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)($[11])
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t)
                        },
                        p($, e) {
                            2048 & e[0] && (0, x.iQh)(t, $[11])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function A($) {
                    let e, t, s;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)($[10]), s = (0, x.Qq7)(" session")
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.BCw)(e, t), (0, x.BCw)(e, s)
                        },
                        p($, e) {
                            1024 & e[0] && (0, x.iQh)(t, $[10])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function u($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)($[6])
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t)
                        },
                        p($, e) {
                            64 & e[0] && (0, x.iQh)(t, $[6])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function d($) {
                    let e, t, s, i = 1 == $[8] ? "" : "s",
                        n;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)($[8]), s = (0, x.Qq7)(" spectator"), n = (0, x.Qq7)(i)
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, n)
                        },
                        p($, e) {
                            256 & e[0] && (0, x.iQh)(t, $[8]), 256 & e[0] && i !== (i = 1 == $[8] ? "" : "s") && (0, x.iQh)(n, i)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function g($) {
                    let e, t = s.A.Hdd($[7]) + "",
                        i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), i = (0, x.Qq7)(t), n = (0, x.Qq7)(" total mass")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n)
                        },
                        p($, e) {
                            128 & e[0] && t !== (t = s.A.Hdd($[7]) + "") && (0, x.iQh)(i, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function m($) {
                    let e, t, s;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)("Restart in "), s = (0, x.Qq7)($[9])
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.BCw)(e, t), (0, x.BCw)(e, s)
                        },
                        p($, e) {
                            512 & e[0] && (0, x.iQh)(s, $[9])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }
                class C extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, c) {
                            let h, A, u, d, g, m, C, p, f, _, w, v, b = ((0, x.j0C)(e, o.nK, $ => c(7, h = $)), (0, x.j0C)(e, o.$f, $ => c(8, A = $)), (0, x.j0C)(e, o.x4, $ => c(9, u = $)), (0, x.j0C)(e, o.U_, $ => c(10, d = $)), (0, x.j0C)(e, o.qo, $ => c(11, g = $)), !1),
                                y = n.A.get("showHud") && n.A.get("minimapEnabled"),
                                B = !1,
                                F = n.A.get("showHud") && n.A.get("showMinimapStats"),
                                I = n.A.get("hudScale"),
                                D = (0, l.T5)(!1),
                                N = ((0, x.j0C)(e, D, $ => c(18, v = $)), n.A.on("zrVIMz", ($, e) => {
                                    "minimapEnabled" === $ && n.A.get("showHud") ? c(1, y = e) : "showHud" === $ ? (c(1, y = e && n.A.get("minimapEnabled")), c(3, F = e && n.A.get("showMinimapStats"))) : "hudScale" === $ ? c(4, I = e) : "showMinimapStats" === $ && c(3, F = e)
                                }), o.qo.visible),
                                E = ((0, x.j0C)(e, N, $ => c(17, w = $)), o.U_.visible),
                                Q = ((0, x.j0C)(e, E, $ => c(16, _ = $)), o.x4.visible),
                                k = ((0, x.j0C)(e, Q, $ => c(15, f = $)), (0, l.T5)(!1)),
                                T = ((0, x.j0C)(e, k, $ => c(14, p = $)), o.$f.visible),
                                S = ((0, x.j0C)(e, T, $ => c(13, C = $)), o.nK.visible),
                                Y = ((0, x.j0C)(e, S, $ => c(12, m = $)), () => {
                                    (0, x.vu6)(N, w = n.A.get("showClock"), w), (0, x.vu6)(E, _ = n.A.get("showSessionTime"), _), (0, x.vu6)(Q, f = n.A.get("showRestartTiming"), f), (0, x.vu6)(k, p = n.A.get("showPlayerCount"), p), (0, x.vu6)(T, C = n.A.get("showSpectators"), C), (0, x.vu6)(S, m = n.A.get("showTagTotalMass"), m)
                                });
                            s.A.on("gWdDAg", () => Y()), Y(), s.A.on("omMooP", $ => {
                                c(2, B = $)
                            });
                            let z, R = ((0, r.Rc)(() => {
                                    a.A.init(z)
                                }), s.A.on("started", () => {
                                    D.set(a.A.round = !!s.A.border.circle), a.A.SCp()
                                }), s.A.on("PSbuQD", () => {
                                    c(0, b = !1)
                                }), s.A.on("OTySHI", () => {
                                    c(0, b = !0)
                                }), ($, e = !1) => {
                                    if (e && $ < 1) return "instant";
                                    var t = Math.floor(($ = Math.floor($)) / 60),
                                        x = Math.floor(t / 60);
                                    return t < 1 ? e ? $ + "s" : "<1min" : x < 1 ? t + "min" : t % 60 == 0 ? x + "hr" : x + "hr " + t % 60 + "min"
                                }),
                                M = performance.now(),
                                L = 0,
                                G = (s.A.on("NZB", $ => {
                                    L = $
                                }), s.A.on("GzmcRb", () => {
                                    (0, x.vu6)(o.qo, g = new Date().toLocaleTimeString(), g);
                                    var $ = (performance.now() - M) / 1e3;
                                    (0, x.vu6)(o.U_, d = R($), d), L && s.A.KRz ? ($ = (L - s.A.KRz) / 25, (0, x.vu6)(o.x4, u = R($, !0), u)) : (0, x.vu6)(o.x4, u = null, u), (0, x.vu6)(o.$f, A = i.A.bTs, A), (0, x.vu6)(o.nK, h = i.A.biB, h)
                                }), null),
                                j = 0,
                                H = 0;
                            return s.A.FCi.on("JmnFrX", $ => {
                                c(27, H++, H)
                            }), s.A.FCi.on("seZDXL", $ => {
                                c(27, H--, H)
                            }), s.A.FCi.on("WnIviS", $ => {
                                c(26, j++, j)
                            }), s.A.FCi.on("KneCHr", $ => {
                                c(26, j--, j)
                            }), s.A.on("stopped", () => {
                                c(6, G = null), c(26, j = c(27, H = 0)), (0, x.vu6)(o.$f, A = (0, x.vu6)(o.nK, h = 0, h), A)
                            }), e.$$.update = () => {
                                if (201326592 & e.$$.dirty[0]) {
                                    var $;
                                    let t = "";
                                    t = i.A.selectedServer ? Math.min(j, $ = i.A.selectedServer.slots) + " / " + $ + " players" : j + " player" + (1 === j ? "" : "s"), t += " | " + H + " bot" + (1 === H ? "" : "s"), c(6, G = t)
                                }
                            }, [b, y, B, F, I, z, G, h, A, u, d, g, m, C, p, f, _, w, v, D, N, E, Q, k, T, S, j, H, function($) {
                                x.Dnk[$ ? "unshift" : "push"](() => {
                                    c(5, z = $)
                                })
                            }]
                        }, function $(e) {
                            let t, s, i, n, a = e[2] && e[3] && c(e);
                            return {
                                c() {
                                    t = (0, x.ND4)("div"), a && a.c(), s = (0, x.xem)(), i = (0, x.ND4)("div"), n = (0, x.ND4)("canvas"), (0, x.CFu)(n, "class", "map canvas s-xbgjyv"), (0, x.CFu)(i, "class", "minimap-wrapper s-xbgjyv"), (0, x.goL)(i, "circle", e[18]), (0, x.CFu)(t, "class", "minimap-container s-xbgjyv"), (0, x.hgi)(t, "display", e[0] && e[1] ? "block" : "none"), (0, x.hgi)(t, "transform", "scale(" + e[4] + ")")
                                },
                                m($, o) {
                                    (0, x.Yry)($, t, o), a && a.m(t, null), (0, x.BCw)(t, s), (0, x.BCw)(t, i), (0, x.BCw)(i, n), e[28](n)
                                },
                                p($, e) {
                                    $[2] && $[3] ? a ? a.p($, e) : ((a = c($)).c(), a.m(t, s)) : a && (a.d(1), a = null), 262144 & e[0] && (0, x.goL)(i, "circle", $[18]), 3 & e[0] && (0, x.hgi)(t, "display", $[0] && $[1] ? "block" : "none"), 16 & e[0] && (0, x.hgi)(t, "transform", "scale(" + $[4] + ")")
                                },
                                i: x.lQ1,
                                o: x.lQ1,
                                d($) {
                                    $ && (0, x.YoD)(t), a && a.d(), e[28](null)
                                }
                            }
                        }, x.jXN, {}, null, [-1, -1])
                    }
                }
                let p = C
            },
            98837($, e, t) {
                t.d(e, {
                    A: () => y
                });
                var x = t(83839),
                    s = (t(60821), t(95195)),
                    i = t(83529),
                    n = t(54915),
                    a = (t(63836), t(70679), t(95669));

                function o($) {
                    let e, t, s, i, n, o, p, w, b, y, B, F = $[3],
                        I, D, N, E, Q = $[25] && $[24] && r($),
                        k = $[27] && $[26] && l($),
                        T = $[23] && $[22] && c($),
                        S = $[19] && $[18] && h($),
                        Y = $[21] && $[20] && A($),
                        z = $[17] && $[16] && u($),
                        R = $[14] && -1 != $[13] && d($),
                        M = $[12] && -1 != $[11] && g($),
                        L = $[10] && -1 != $[9] && m($),
                        G = $[5] && C($),
                        j = f($),
                        H = $[28] && _($),
                        U = $[8] && $[7] && v();
                    return {
                        c() {
                            e = (0, x.ND4)("div"), Q && Q.c(), t = (0, x.xem)(), k && k.c(), s = (0, x.xem)(), T && T.c(), i = (0, x.xem)(), S && S.c(), n = (0, x.xem)(), Y && Y.c(), o = (0, x.xem)(), z && z.c(), p = (0, x.xem)(), R && R.c(), w = (0, x.xem)(), M && M.c(), b = (0, x.xem)(), L && L.c(), y = (0, x.xem)(), G && G.c(), B = (0, x.xem)(), j.c(), I = (0, x.xem)(), H && H.c(), D = (0, x.xem)(), U && U.c(), (0, x.CFu)(e, "class", "stats-container s-fr5xtt"), (0, x.hgi)(e, "transform", "scale(" + $[2] + ")")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), Q && Q.m(e, null), (0, x.BCw)(e, t), k && k.m(e, null), (0, x.BCw)(e, s), T && T.m(e, null), (0, x.BCw)(e, i), S && S.m(e, null), (0, x.BCw)(e, n), Y && Y.m(e, null), (0, x.BCw)(e, o), z && z.m(e, null), (0, x.BCw)(e, p), R && R.m(e, null), (0, x.BCw)(e, w), M && M.m(e, null), (0, x.BCw)(e, b), L && L.m(e, null), (0, x.BCw)(e, y), G && G.m(e, null), (0, x.BCw)(e, B), j.m(e, null), (0, x.BCw)(e, I), H && H.m(e, null), (0, x.BCw)(e, D), U && U.m(e, null), E = !0
                        },
                        p($, a) {
                            $[25] && $[24] ? Q ? Q.p($, a) : ((Q = r($)).c(), Q.m(e, t)) : Q && (Q.d(1), Q = null), $[27] && $[26] ? k ? k.p($, a) : ((k = l($)).c(), k.m(e, s)) : k && (k.d(1), k = null), $[23] && $[22] ? T ? T.p($, a) : ((T = c($)).c(), T.m(e, i)) : T && (T.d(1), T = null), $[19] && $[18] ? S ? S.p($, a) : ((S = h($)).c(), S.m(e, n)) : S && (S.d(1), S = null), $[21] && $[20] ? Y ? Y.p($, a) : ((Y = A($)).c(), Y.m(e, o)) : Y && (Y.d(1), Y = null), $[17] && $[16] ? z ? z.p($, a) : ((z = u($)).c(), z.m(e, p)) : z && (z.d(1), z = null), $[14] && -1 != $[13] ? R ? R.p($, a) : ((R = d($)).c(), R.m(e, w)) : R && (R.d(1), R = null), $[12] && -1 != $[11] ? M ? M.p($, a) : ((M = g($)).c(), M.m(e, b)) : M && (M.d(1), M = null), $[10] && -1 != $[9] ? L ? L.p($, a) : ((L = m($)).c(), L.m(e, y)) : L && (L.d(1), L = null), $[5] ? G ? G.p($, a) : ((G = C($)).c(), G.m(e, B)) : G && (G.d(1), G = null), 8 & a[0] && (0, x.jXN)(F, F = $[3]) ? (j.d(1), (j = f($)).c(), j.m(e, I)) : j.p($, a), $[28] ? H ? H.p($, a) : ((H = _($)).c(), H.m(e, D)) : H && (H.d(1), H = null), $[8] && $[7] ? U || ((U = v()).c(), U.m(e, null)) : U && (U.d(1), U = null), (!E || 4 & a[0]) && (0, x.hgi)(e, "transform", "scale(" + $[2] + ")")
                        },
                        i($) {
                            E || ($ && (0, x.Dti)(() => {
                                E && (N = N || (0, x.h86)(e, a.Rv, {
                                    duration: 300
                                }, !0)).run(1)
                            }), E = !0)
                        },
                        o($) {
                            $ && (N = N || (0, x.h86)(e, a.Rv, {
                                duration: 300
                            }, !1)).run(0), E = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), Q && Q.d(), k && k.d(), T && T.d(), S && S.d(), Y && Y.d(), z && z.d(), R && R.d(), M && M.d(), L && L.d(), G && G.d(), j.d($), H && H.d(), U && U.d(), $ && N && N.end()
                        }
                    }
                }

                function r($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "FPS", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[24]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            16777216 & e[0] && (0, x.iQh)(n, $[24])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function l($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "Ping", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[26]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            67108864 & e[0] && (0, x.iQh)(n, $[26])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function c($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "Mass", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[22]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            4194304 & e[0] && (0, x.iQh)(n, $[22])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function h($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "Score", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[18]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            262144 & e[0] && (0, x.iQh)(n, $[18])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function A($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "Total Mass", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[20]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            1048576 & e[0] && (0, x.iQh)(n, $[20])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function u($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), (t = (0, x.ND4)("span")).textContent = "Cells", s = (0, x.xem)(), i = (0, x.ND4)("span"), n = (0, x.Qq7)($[16]), (0, x.CFu)(t, "class", "stat-name s-fr5xtt"), (0, x.CFu)(i, "class", "stat-value s-fr5xtt"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, a) {
                            (0, x.Yry)($, e, a), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n)
                        },
                        p($, e) {
                            65536 & e[0] && (0, x.iQh)(n, $[16])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function d($) {
                    let e, t, s = 2 != $[13] ? " tab " + (1 + $[13]) : "both tabs",
                        i;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), t = (0, x.Qq7)("Mouse frozen on "), i = (0, x.Qq7)(s), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i)
                        },
                        p($, e) {
                            8192 & e[0] && s !== (s = 2 != $[13] ? " tab " + (1 + $[13]) : "both tabs") && (0, x.iQh)(i, s)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function g($) {
                    let e, t, s = 2 != $[11] ? "tab " + (1 + $[11]) : "both tabs",
                        i;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), t = (0, x.Qq7)("Movement stopped on "), i = (0, x.Qq7)(s), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i)
                        },
                        p($, e) {
                            2048 & e[0] && s !== (s = 2 != $[11] ? "tab " + (1 + $[11]) : "both tabs") && (0, x.iQh)(i, s)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function m($) {
                    let e, t, s = 2 != $[9] ? "tab " + (1 + $[9]) : "both tabs",
                        i;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), t = (0, x.Qq7)("Linesplitting on "), i = (0, x.Qq7)(s), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i)
                        },
                        p($, e) {
                            512 & e[0] && s !== (s = 2 != $[9] ? "tab " + (1 + $[9]) : "both tabs") && (0, x.iQh)(i, s)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function C($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), t = (0, x.Qq7)($[6]), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t)
                        },
                        p($, e) {
                            64 & e[0] && (0, x.iQh)(t, $[6])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function p($) {
                    let e, t = $[3] ? "web-gl" : "canvas",
                        s, i, n = $[4] ? "w/" : "w/o",
                        a, o;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), s = (0, x.Qq7)(t), i = (0, x.Qq7)(" renderer "), a = (0, x.Qq7)(n), o = (0, x.Qq7)(" anti-aliasing"), (0, x.CFu)(e, "class", "stat-item s-fr5xtt")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(e, a), (0, x.BCw)(e, o)
                        },
                        p($, e) {
                            8 & e[0] && t !== (t = $[3] ? "web-gl" : "canvas") && (0, x.iQh)(s, t), 16 & e[0] && n !== (n = $[4] ? "w/" : "w/o") && (0, x.iQh)(a, n)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function f($) {
                    let e = $[4],
                        t, s = p($);
                    return {
                        c() {
                            s.c(), t = (0, x.Iex)()
                        },
                        m($, e) {
                            s.m($, e), (0, x.Yry)($, t, e)
                        },
                        p($, i) {
                            16 & i[0] && (0, x.jXN)(e, e = $[4]) ? (s.d(1), (s = p($)).c(), s.m(t.parentNode, t)) : s.p($, i)
                        },
                        d($) {
                            $ && (0, x.YoD)(t), s.d($)
                        }
                    }
                }

                function _($) {
                    let e = $[15],
                        t, s = w($);
                    return {
                        c() {
                            s.c(), t = (0, x.Iex)()
                        },
                        m($, e) {
                            s.m($, e), (0, x.Yry)($, t, e)
                        },
                        p($, i) {
                            32768 & i[0] && (0, x.jXN)(e, e = $[15]) ? (s.d(1), (s = w($)).c(), s.m(t.parentNode, t)) : s.p($, i)
                        },
                        d($) {
                            $ && (0, x.YoD)(t), s.d($)
                        }
                    }
                }

                function w($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("p"), t = (0, x.Qq7)($[15]), (0, x.CFu)(e, "class", "stat-item s-fr5xtt"), (0, x.hgi)(e, "white-space", "nowrap"), (0, x.hgi)(e, "text-overflow", "ellipsis")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t)
                        },
                        p($, e) {
                            32768 & e[0] && (0, x.iQh)(t, $[15])
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function v() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("p")).innerHTML = "<b>Warning: Unstable latency detected!</b> <br/>\n        Dual gameplay may be affected", (0, x.CFu)($, "class", "warning s-fr5xtt")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }
                class b extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, a) {
                            let o, r, l, c, h, A, u, d, g, m, C, p, f, _, w, v, b, y, B, F, I, D, N, E, Q = ((0, x.j0C)(e, n.hZ, $ => a(6, r = $)), (0, x.j0C)(e, n.ZK, $ => a(7, l = $)), (0, x.j0C)(e, n.NC, $ => a(9, h = $)), (0, x.j0C)(e, n.Xt, $ => a(11, u = $)), (0, x.j0C)(e, n.KP, $ => a(13, g = $)), (0, x.j0C)(e, n.BW, $ => a(15, C = $)), (0, x.j0C)(e, n.Yo, $ => a(16, p = $)), (0, x.j0C)(e, n.fN, $ => a(18, _ = $)), (0, x.j0C)(e, n.fj, $ => a(20, v = $)), (0, x.j0C)(e, n.rd, $ => a(22, y = $)), (0, x.j0C)(e, n.uU, $ => a(24, F = $)), (0, x.j0C)(e, n.hU, $ => a(26, D = $)), !1),
                                k = i.A.get("showHud") && i.A.get("showStats"),
                                T = i.A.get("hudScale"),
                                S = n.uU.visible,
                                Y = ((0, x.j0C)(e, S, $ => a(25, I = $)), n.hU.visible),
                                z = ((0, x.j0C)(e, Y, $ => a(27, N = $)), n.rd.visible),
                                R = ((0, x.j0C)(e, z, $ => a(23, B = $)), n.fj.visible),
                                M = ((0, x.j0C)(e, R, $ => a(21, b = $)), n.fN.visible),
                                L = ((0, x.j0C)(e, M, $ => a(19, w = $)), n.Yo.visible),
                                G = ((0, x.j0C)(e, L, $ => a(17, f = $)), n.ZK.visible),
                                j = ((0, x.j0C)(e, G, $ => a(8, c = $)), n.hZ.visible),
                                H = ((0, x.j0C)(e, j, $ => a(5, o = $)), n.KP.visible),
                                U = ((0, x.j0C)(e, H, $ => a(14, m = $)), n.Xt.visible),
                                q = ((0, x.j0C)(e, U, $ => a(12, d = $)), n.NC.visible);
                            (0, x.j0C)(e, q, $ => a(10, A = $));
                            var W = n.BW.visible;
                            (0, x.j0C)(e, W, $ => a(28, E = $));
                            let K = i.A.useWebGL,
                                X = i.A.get("useAntialiasing");
                            i.A.on("zrVIMz", ($, e) => {
                                "useWebGL" === $ ? a(3, K = i.A.useWebGL) : "useAntialiasing" == $ ? a(4, X = i.A.get("useAntialiasing")) : "showStats" === $ && i.A.get("showHud") ? a(1, k = e) : "showHud" === $ ? a(1, k = e && i.A.get("showStats")) : "hudScale" === $ && a(2, T = e)
                            }), e = () => {
                                (0, x.vu6)(S, I = i.A.get("showFPS"), I), (0, x.vu6)(Y, N = i.A.get("showPing"), N), (0, x.vu6)(z, B = i.A.get("showPlayerMass"), B), (0, x.vu6)(R, b = i.A.get("showTotalPlayerMass"), b), (0, x.vu6)(M, w = i.A.get("showPlayerScore"), w), (0, x.vu6)(L, f = i.A.get("showCellCount"), f), (0, x.vu6)(G, c = i.A.get("showLatencyWarning"), c), (0, x.vu6)(j, o = !!r, o)
                            }, s.A.on("uzPfcB", $ => {
                                a(0, Q = $)
                            }), s.A.on("oiKdMc", e), e(), s.A.on("TNRyrb", $ => {
                                f && (0, x.vu6)(n.Yo, p = $, p)
                            }), s.A.on("EMciAd", $ => {
                                N && (0, x.vu6)(n.hU, D = $, D)
                            }), s.A.on("DEPJkV", () => {
                                var $;
                                I && (0, x.vu6)(n.uU, F = Math.round(s.A.fps.average), F), B && ($ = s.A.score, (0, x.vu6)(n.rd, y = $ ? s.A.Hdd($) : "", y)), b && ($ = s.A.YIr, (0, x.vu6)(n.fj, v = $ ? s.A.Hdd($) : "", v)), w && ($ = s.A.fIW, (0, x.vu6)(n.fN, _ = $ ? s.A.Hdd($) : "", _)), f && (0, x.vu6)(n.Yo, p = s.A.cellCount, p)
                            });
                            let J = [, , ],
                                P = [, , ],
                                V = [, , ];
                            return s.A.on("RAwTus", $ => {
                                "mouseFrozen" in $ && (s.A.eWI.forEach(($, e) => {
                                    J[e] = $.mouse.frozen
                                }), J[0] ? (0, x.vu6)(n.KP, g = J[1] ? 2 : 0, g) : J[1] ? (0, x.vu6)(n.KP, g = 1, g) : (0, x.vu6)(n.KP, g = -1, g), (0, x.vu6)(H, m = 0 <= g, m)), "LZd" in $ && (s.A.eWI.forEach(($, e) => {
                                    P[e] = $.mouse.centralize
                                }), P[0] ? (0, x.vu6)(n.Xt, u = P[1] ? 2 : 0, u) : P[1] ? (0, x.vu6)(n.Xt, u = 1, u) : (0, x.vu6)(n.Xt, u = -1, u), (0, x.vu6)(U, d = 0 <= u, d)), "lockLinesplit" in $ && (s.A.eWI.forEach(($, e) => {
                                    V[e] = $.mouse.pause
                                }), V[0] ? (0, x.vu6)(n.NC, h = V[1] ? 2 : 0, h) : V[1] ? (0, x.vu6)(n.NC, h = 1, h) : (0, x.vu6)(n.NC, h = -1, h), (0, x.vu6)(q, A = 0 <= h, A))
                            }), s.A.on("GfXwco", $ => {
                                c && (0, x.vu6)(n.ZK, l = $, l)
                            }), s.A.on("RyKxvm", $ => {
                                (0, x.vu6)(n.hZ, r = $, r), (0, x.vu6)(j, o = !!$, o)
                            }), [Q, k, T, K, X, o, r, l, c, h, A, u, d, g, m, C, p, f, _, w, v, b, y, B, F, I, D, N, E, S, Y, z, R, M, L, G, j, H, U, q, W]
                        }, function $(e) {
                            let t, s = e[0] && e[1] && o(e);
                            return {
                                c() {
                                    s && s.c(), t = (0, x.Iex)()
                                },
                                m($, e) {
                                    s && s.m($, e), (0, x.Yry)($, t, e)
                                },
                                p($, e) {
                                    $[0] && $[1] ? s ? (s.p($, e), 3 & e[0] && (0, x.c7F)(s, 1)) : ((s = o($)).c(), (0, x.c7F)(s, 1), s.m(t.parentNode, t)) : s && ((0, x.V44)(), (0, x.Tn8)(s, 1, 1, () => {
                                        s = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    (0, x.c7F)(s)
                                },
                                o($) {
                                    (0, x.Tn8)(s)
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), s && s.d($)
                                }
                            }
                        }, x.jXN, {}, null, [-1, -1])
                    }
                }
                let y = b
            },
            58650($, e, t) {
                t.d(e, {
                    A: () => A
                });
                var x = t(83839),
                    s = (t(60821), t(64127)),
                    i = t(30847),
                    n = t(15308),
                    a = t(10103),
                    o = t(41949),
                    r = t(95669),
                    l = t(28858);

                function c($) {
                    let e, t, s, i, n, o, l, c, h, A, u, d, g, m, C, p, f;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), s = (0, x.ND4)("div"), i = (0, x.ND4)("img"), o = (0, x.xem)(), l = (0, x.ND4)("div"), (c = (0, x.ND4)("b")).textContent = "luka", h = (0, x.Qq7)(": "), (A = (0, x.ND4)("span")).textContent = "" + $[2], (0, x.mq_)(i.src, n = a.A) || (0, x.CFu)(i, "src", n), (0, x.CFu)(i, "crossorigin", "anonymous"), (0, x.CFu)(i, "class", "image s-13o84a9"), (0, x.CFu)(i, "alt", "Icon"), (0, x.CFu)(c, "class", "name s-13o84a9"), (0, x.CFu)(A, "class", "text s-13o84a9"), (0, x.CFu)(l, "class", "message s-13o84a9"), (0, x.CFu)(s, "class", "image-wrapper s-13o84a9"), (0, x.CFu)(t, "class", "center s-13o84a9"), (0, x.CFu)(e, "class", "container s-13o84a9")
                        },
                        m(n, a) {
                            (0, x.Yry)(n, e, a), (0, x.BCw)(e, t), (0, x.BCw)(t, s), (0, x.BCw)(s, i), (0, x.BCw)(s, o), (0, x.BCw)(s, l), (0, x.BCw)(l, c), (0, x.BCw)(l, h), (0, x.BCw)(l, A), C = !0, p || (f = (0, x.KTR)(e, "click", $[1]), p = !0)
                        },
                        p: x.lQ1,
                        i($) {
                            C || ($ && (0, x.Dti)(() => {
                                C && (d && d.end(1), (u = (0, x.b7f)(t, r._J, {
                                    y: 150,
                                    duration: 1100
                                })).start())
                            }), $ && (0, x.Dti)(() => {
                                C && (m && m.end(1), (g = (0, x.b7f)(e, r.Rv, {
                                    duration: 700
                                })).start())
                            }), C = !0)
                        },
                        o($) {
                            u && u.invalidate(), $ && (d = (0, x.CUz)(t, r._J, {
                                y: -150,
                                duration: 500
                            })), g && g.invalidate(), $ && (m = (0, x.CUz)(e, r.Rv, {
                                duration: 500
                            })), C = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(e), $ && d && d.end(), $ && m && m.end(), p = !1, f()
                        }
                    }
                }
                class h extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, a) {
                            let r, c, h;
                            (0, x.j0C)(e, s.z, $ => a(4, r = $)), (0, x.j0C)(e, l.S, $ => a(5, c = $)), (0, x.j0C)(e, l.W, $ => a(0, h = $));
                            let A;
                            return (0, o.Rc)(() => {
                                (0, x.vu6)(l.W, h = !0, h), A = (0, i.wg)(() => {
                                    (0, x.vu6)(l.W, h = !1, h), A = (0, i.wg)(() => {
                                        (0, x.vu6)(l.S, c = (0, x.vu6)(s.z, r = !0, r), c)
                                    }, 600)
                                }, 1200)
                            }), e = (e = ["c2hlJ3MlMjB0aGUlMjBraWQlMjBpbiUyMG1l", "aWYlMjBzaGUncyUyMG5pbmUsJTIwc2hlJ3MlMjBtaW5lJTIwJUYwJTlGJTk4JTg4", "aWYlMjBoZXIlMjBhZ2UlMjBpcyUyMG9uJTIwdGhlJTIwY2xvY2suLi4lMjAlRjAlOUYlOTglOEY=", "aSdtJTIwbm90JTIwJTIyc3RvcCUyMHRvdWNoaW5nJTIwbWUlMjBlbG1vJTIyIQ==", "aSUyMGxpa2UlMjBraWRzJTIwJUYwJTlGJUE1JUI0", "dGhlIHlvdW5nZXIgdGhlIHNvdWwsIHRoZSB0aWdodGVyIHRoZSBob2xl", "aWYgc2hlJ3MgZWxldmVuLCBJIHNlbmQgaGVyIHRvIGhlYXZlbg=="].map($ => decodeURI(atob($))))[~~(Math.random() * e.length)], [h, () => {
                                clearTimeout(A), (0, x.vu6)(l.W, h = !1, h), (0, x.vu6)(l.S, c = (0, x.vu6)(s.z, r = !0, r), c), (0, n.$s)(0, "Skipped intro animation")
                            }, e]
                        }, function $(e) {
                            let t, s = e[0] && c(e);
                            return {
                                c() {
                                    s && s.c(), t = (0, x.Iex)()
                                },
                                m($, e) {
                                    s && s.m($, e), (0, x.Yry)($, t, e)
                                },
                                p($, [e]) {
                                    $[0] ? s ? (s.p($, e), 1 & e && (0, x.c7F)(s, 1)) : ((s = c($)).c(), (0, x.c7F)(s, 1), s.m(t.parentNode, t)) : s && ((0, x.V44)(), (0, x.Tn8)(s, 1, 1, () => {
                                        s = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    (0, x.c7F)(s)
                                },
                                o($) {
                                    (0, x.Tn8)(s)
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), s && s.d($)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let A = h
            },
            8167($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83839),
                    s = (t(60821), t(95669));
                class i extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, null, function $(e) {
                            let t, i, n, a;
                            return {
                                c() {
                                    ((t = (0, x.ND4)("div")).innerHTML = "", x.CFu)(t, "class", "account-container container s-cxw380")
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e), a = !0
                                },
                                p: x.lQ1,
                                i($) {
                                    a || ($ && (0, x.Dti)(() => {
                                        a && (n && n.end(1), (i = (0, x.b7f)(t, s._J, {
                                            x: 150,
                                            duration: 500
                                        })).start())
                                    }), a = !0)
                                },
                                o($) {
                                    i && i.invalidate(), $ && (n = (0, x.CUz)(t, s._J, {
                                        x: 150,
                                        duration: 500
                                    })), a = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), $ && n && n.end()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let n = i
            },
            49053($, e, t) {
                t.d(e, {
                    A: () => A
                });
                var x = t(83839),
                    s = (t(60821), t(95669)),
                    e = t(54603),
                    i = t(60743),
                    n = t(22808);

                function a($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = "Skins", t = (0, x.xem)(), (s = (0, x.ND4)("div")).textContent = "Perks", (0, x.CFu)(e, "class", "tab"), (0, x.goL)(e, "active", 0 === $[0]), (0, x.CFu)(s, "class", "tab"), (0, x.goL)(s, "active", 1 === $[0])
                        },
                        m(a, o) {
                            (0, x.Yry)(a, e, o), (0, x.Yry)(a, t, o), (0, x.Yry)(a, s, o), i || (n = [(0, x.KTR)(e, "click", $[1]), (0, x.KTR)(s, "click", $[2])], i = !0)
                        },
                        p($, t) {
                            1 & t && (0, x.goL)(e, "active", 0 === $[0]), 1 & t && (0, x.goL)(s, "active", 1 === $[0])
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(t), (0, x.YoD)(s)), (i = !1, x.oOW)(n)
                        }
                    }
                }

                function o($) {
                    let e, t;
                    return e = new i.A({}), {
                        c() {
                            (0, x.N0i)(e.$$.fragment)
                        },
                        m($, s) {
                            (0, x.wSR)(e, $, s), t = !0
                        },
                        i($) {
                            t || ((0, x.c7F)(e.$$.fragment, $), t = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), t = !1
                        },
                        d($) {
                            (0, x.Hbl)(e, $)
                        }
                    }
                }

                function r($) {
                    let e, t;
                    return e = new n.A({}), {
                        c() {
                            (0, x.N0i)(e.$$.fragment)
                        },
                        m($, s) {
                            (0, x.wSR)(e, $, s), t = !0
                        },
                        i($) {
                            t || ((0, x.c7F)(e.$$.fragment, $), t = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), t = !1
                        },
                        d($) {
                            (0, x.Hbl)(e, $)
                        }
                    }
                }
                let l = (0, e.T5)(0),
                    c = $ => {
                        l.set($)
                    };
                class h extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let i, n = x.lQ1;
                            return (0, x.j0C)(e, l, $ => s(0, i = $)), e.$$.on_destroy.push(() => n()), [i, () => c(0), () => c(1)]
                        }, function $(e) {
                            let t, i, n = e[0],
                                l, c, h, A, u, d, g = a(e),
                                m = [r, o],
                                C = [];

                            function p($) {
                                return 0 === $[0] ? 0 : 1
                            }
                            return h = C[c = p(e)] = m[c](e), {
                                c() {
                                    t = (0, x.ND4)("div"), i = (0, x.ND4)("div"), g.c(), l = (0, x.xem)(), h.c(), (0, x.CFu)(i, "class", "tabs"), (0, x.CFu)(t, "class", "customization container s-rp2x31"), (0, x.goL)(t, "skins", 0 === e[0]), (0, x.goL)(t, "perks", 1 === e[0])
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e), (0, x.BCw)(t, i), g.m(i, null), (0, x.BCw)(t, l), C[c].m(t, null), d = !0
                                },
                                p($, [e]) {
                                    1 & e && (0, x.jXN)(n, n = $[0]) ? (g.d(1), (g = a($)).c(), g.m(i, null)) : g.p($, e);
                                    let s = c;
                                    (c = p($)) !== s && ((0, x.V44)(), (0, x.Tn8)(C[s], 1, 1, () => {
                                        C[s] = null
                                    }), (0, x.GYV)(), (h = C[c]) || (h = C[c] = m[c]($)).c(), (0, x.c7F)(h, 1), h.m(t, null)), (!d || 1 & e) && (0, x.goL)(t, "skins", 0 === $[0]), (!d || 1 & e) && (0, x.goL)(t, "perks", 1 === $[0])
                                },
                                i($) {
                                    d || ((0, x.c7F)(h), $ && (0, x.Dti)(() => {
                                        d && (u && u.end(1), (A = (0, x.b7f)(t, s._J, {
                                            x: 150,
                                            duration: 500
                                        })).start())
                                    }), d = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(h), A && A.invalidate(), $ && (u = (0, x.CUz)(t, s._J, {
                                        x: 150,
                                        duration: 500
                                    })), d = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), g.d($), C[c].d(), $ && u && u.end()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let A = h
            },
            60743($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var x = t(83839);
                t(60821);
                class s extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, null, function $(e) {
                            let t;
                            return {
                                c() {
                                    (t = (0, x.ND4)("div")).textContent = "To be implemented."
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e)
                                },
                                p: x.lQ1,
                                i: x.lQ1,
                                o: x.lQ1,
                                d($) {
                                    $ && (0, x.YoD)(t)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let i = s
            },
            22808($, e, t) {
                t.d(e, {
                    A: () => k
                });
                var x = t(83839),
                    e = (t(60821), t(78465)),
                    s = t.n(e),
                    i = t(41949),
                    n = t(54603),
                    a = t(15481),
                    o = t(19680),
                    r = t(33656),
                    l = t(15308),
                    e = t(83529),
                    c = t(78225),
                    h = t(95195);

                function A($, e, t) {
                    return ($ = $.slice())[20] = e[t], $[22] = t, $
                }

                function u($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("i"), t = (0, x.Qq7)(" Add Skin"), (0, x.CFu)(e, "class", "button-icon fal fa-plus s-15tzznm")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.Yry)($, t, s)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(t))
                        }
                    }
                }

                function d($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("i"), t = (0, x.Qq7)(" Remove Skin"), (0, x.CFu)(e, "class", "button-icon fal fa-times s-15tzznm")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.Yry)($, t, s)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(t))
                        }
                    }
                }

                function g($) {
                    let e, t, s, i;
                    return (e = new a.A({
                        props: {
                            style: "display:flex;align-items:center;justify-content:flex-start;",
                            $$slots: {
                                default: [u]
                            },
                            $$scope: {
                                ctx: $
                            }
                        }
                    })).$on("click", $[13]), (s = new a.A({
                        props: {
                            style: "display:flex;align-items:center;justify-content:flex-start;",
                            $$slots: {
                                default: [d]
                            },
                            $$scope: {
                                ctx: $
                            }
                        }
                    })).$on("click", $[14]), {
                        c() {
                            (0, x.N0i)(e.$$.fragment), t = (0, x.xem)(), (0, x.N0i)(s.$$.fragment)
                        },
                        m($, n) {
                            (0, x.wSR)(e, $, n), (0, x.Yry)($, t, n), (0, x.wSR)(s, $, n), i = !0
                        },
                        p($, t) {
                            var x = {},
                                x = (8388608 & t && (x.$$scope = {
                                    dirty: t,
                                    ctx: $
                                }), e.$set(x), {});
                            8388608 & t && (x.$$scope = {
                                dirty: t,
                                ctx: $
                            }), s.$set(x)
                        },
                        i($) {
                            i || ((0, x.c7F)(e.$$.fragment, $), (0, x.c7F)(s.$$.fragment, $), i = !0)
                        },
                        o($) {
                            (0, x.Tn8)(e.$$.fragment, $), (0, x.Tn8)(s.$$.fragment, $), i = !1
                        },
                        d($) {
                            $ && (0, x.YoD)(t), (0, x.Hbl)(e, $), (0, x.Hbl)(s, $)
                        }
                    }
                }

                function m($) {
                    let e, t, s = $[4] + 1 + "",
                        i, n, a = v.length + "",
                        o;
                    return {
                        c() {
                            e = (0, x.ND4)("span"), t = (0, x.Qq7)("Page "), i = (0, x.Qq7)(s), n = (0, x.Qq7)(" of "), o = (0, x.Qq7)(a), (0, x.CFu)(e, "class", "count s-15tzznm")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n), (0, x.BCw)(e, o)
                        },
                        p($, e) {
                            16 & e && s !== (s = $[4] + 1 + "") && (0, x.iQh)(i, s)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function C($) {
                    let e, t, s, i, n, a, o;

                    function l() {
                        return $[17]($[22])
                    }
                    return {
                        c() {
                            e = (0, x.ND4)("span"), t = (0, x.ND4)("img"), i = (0, x.xem)(), (0, x.CFu)(t, "class", "selected image s-15tzznm"), (0, x.mq_)(t.src, s = $[20] || r.nG) || (0, x.CFu)(t, "src", s), (0, x.goL)(t, "selected", $[4] === $[5] && $[22] === $[3]), (0, x.CFu)(e, "class", "skin s-15tzznm"), (0, x.CFu)(e, "data-index", n = $[22])
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(e, i), a || (o = [(0, x.KTR)(t, "error", E), (0, x.KTR)(e, "click", l)], a = !0)
                        },
                        p(e, i) {
                            $ = e, 16 & i && !(0, x.mq_)(t.src, s = $[20] || r.nG) && (0, x.CFu)(t, "src", s), 56 & i && (0, x.goL)(t, "selected", $[4] === $[5] && $[22] === $[3])
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (a = !1, x.oOW)(o)
                        }
                    }
                }

                function p($) {
                    let e = $[2],
                        t, s = C($);
                    return {
                        c() {
                            s.c(), t = (0, x.Iex)()
                        },
                        m($, e) {
                            s.m($, e), (0, x.Yry)($, t, e)
                        },
                        p($, i) {
                            4 & i && (0, x.jXN)(e, e = $[2]) ? (s.d(1), (s = C($)).c(), s.m(t.parentNode, t)) : s.p($, i)
                        },
                        d($) {
                            $ && (0, x.YoD)(t), s.d($)
                        }
                    }
                }

                function f($) {
                    let e, t = (0, x.rv_)(v[$[4]]),
                        s = [];
                    for (let i = 0; i < t.length; i += 1) s[i] = p(A($, t, i));
                    return {
                        c() {
                            for (let $ = 0; $ < s.length; $ += 1) s[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, t) {
                            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m($, t);
                            (0, x.Yry)($, e, t)
                        },
                        p($, i) {
                            if (1084 & i) {
                                t = (0, x.rv_)(v[$[4]]);
                                let n;
                                for (n = 0; n < t.length; n += 1) {
                                    var a = A($, t, n);
                                    s[n] ? s[n].p(a, i) : (s[n] = p(a), s[n].c(), s[n].m(e.parentNode, e))
                                }
                                for (; n < s.length; n += 1) s[n].d(1);
                                s.length = t.length
                            }
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(s, $)
                        }
                    }
                }

                function _($) {
                    let e = $[2],
                        t, s = f($);
                    return {
                        c() {
                            s.c(), t = (0, x.Iex)()
                        },
                        m($, e) {
                            s.m($, e), (0, x.Yry)($, t, e)
                        },
                        p($, i) {
                            4 & i && (0, x.jXN)(e, e = $[2]) ? (s.d(1), (s = f($)).c(), s.m(t.parentNode, t)) : s.p($, i)
                        },
                        d($) {
                            $ && (0, x.YoD)(t), s.d($)
                        }
                    }
                }
                let w = [],
                    v = [
                        []
                    ],
                    b, y = () => {
                        localStorage.setItem("skinPages", JSON.stringify(v))
                    },
                    B = () => {
                        localStorage.setItem("skinData", JSON.stringify(b))
                    };
                (() => {
                    if (!(() => {
                            let $;
                            if ("skinPages" in localStorage) {
                                (0, l.$s)(0, "Loading skin pages from cache");
                                try {
                                    $ = JSON.parse(localStorage.getItem("skinPages"))
                                } catch (e) {}
                            }
                            if (!Array.isArray($) || $.length < 1) {
                                if ("skins" in localStorage) return !1;
                                $ = [
                                    []
                                ]
                            }
                            if (1 === $.length) {
                                var t = $[0];
                                for (let x = t.length; x < 2; x++) t.push(r.nG)
                            }
                            return v = $, y(), !0
                        })()) {
                        (0, l.$s)(0, "Loading skin pages from skins cache");
                        let $ = [];
                        if ("skins" in localStorage) {
                            try {
                                $ = JSON.parse(localStorage.getItem("skins"))
                            } catch (e) {
                                return
                            }
                            if (!Array.isArray($)) return;
                            for (let t = $.length; t < 2; t++) $.push(r.nG)
                        }
                        let x = 0,
                            s = 0;
                        for (var i = (w = $).length; s < i;) v[x++] = w.slice(s, s += 9);
                        y()
                    }
                })(), (() => {
                    if ("skinData" in localStorage) try {
                        return b = JSON.parse(localStorage.getItem("skinData"))
                    } catch ($) {}
                    b = {
                        skins: [0, 0],
                        pages: [0, 0],
                        selectedPages: [0, 0]
                    }, B()
                })();
                let F = (0, n.T5)(c.A.yNT),
                    I = (0, n.T5)(Math.min(b.pages[(0, n.Jt)(F)], v.length)),
                    D = (0, n.T5)(b.skins[(0, n.Jt)(F)]),
                    N = (0, n.T5)(b.selectedPages[(0, n.Jt)(F)]),
                    E = (e.A.on("zrVIMz", ($, e) => {
                        "activeTabContext" === $ && F.set(e)
                    }), I.subscribe($ => {
                        b.pages[(0, n.Jt)(F)] = $, B()
                    }), D.subscribe($ => {
                        b.skins[(0, n.Jt)(F)] = $, B()
                    }), N.subscribe($ => {
                        b.selectedPages[(0, n.Jt)(F)] = $, B()
                    }), F.subscribe($ => {
                        I.set(b.pages[$]), D.set(b.skins[$]), N.set(b.selectedPages[$])
                    }), h.A.on("fzvxek", $ => {
                        var e = v[(0, n.Jt)(I)];
                        (0, n.Jt)(D) > e.length && D.set(0), e[(0, n.Jt)(D)] = $, y()
                    }), async $ => {
                        $.currentTarget.src = r.nG
                    });
                class Q extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, n) {
                            let a, o, l;
                            (0, x.j0C)(e, D, $ => n(3, a = $)), (0, x.j0C)(e, I, $ => n(4, o = $)), (0, x.j0C)(e, N, $ => n(5, l = $));
                            let c, A = !1,
                                u = !1,
                                d = $ => {
                                    var e = v[o];
                                    a > e.length && D.set(0), e[a] = $, n(2, u = !u), y()
                                };
                            (0, i.Rc)(() => {
                                h.A.on("fzvxek", d)
                            }), (0, i.sA)(() => {
                                h.A.off("fzvxek", d)
                            });
                            let g = $ => {
                                    (0, x.vu6)(D, a = $, a), (0, x.vu6)(N, l = o, l);
                                    var e = v[o];
                                    $ > e.length && ($ = 0), h.A.emit("fzvxek", e[$])
                                },
                                m;
                            return [c, A, u, a, o, l, () => {
                                (0, x.vu6)(I, o = 0, o)
                            }, () => {
                                (0, x.vu6)(I, o = v.length - 1, o)
                            }, () => {
                                (0, x.vu6)(I, o = Math.max(o - 1, 0), o)
                            }, () => {
                                (0, x.vu6)(I, o = Math.min(o + 1, v.length - 1), o)
                            }, g, $ => {
                                $.preventDefault(), m = -1;
                                let e = $.target,
                                    t = 3;
                                for (; null != e && t--;) e.hasAttribute("data-index") && (m = +e.getAttribute("data-index")), e = e.parentElement;
                                c && A && c.update(), n(1, A = !0)
                            }, $ => {
                                n(1, A = !1)
                            }, () => {
                                n(1, A = !1);
                                let $ = v[v.length - 1];
                                9 === $.length && v.push($ = []), $.push(r.nG), (0, x.vu6)(I, o = v.length - 1, o), y(), n(2, u = !u)
                            }, async () => {
                                    var $;
                                    if (n(1, A = !1), -1 !== m) {
                                        if ((await s().fire({
                                                text: "Are you sure you would like to remove this skin?",
                                                confirmButtonText: "Yes",
                                                cancelButtonText: "No",
                                                showCancelButton: !0
                                            })).isConfirmed) {
                                            let e = v[o];
                                            1 === v.length && e.length <= 1 ? m = -1 : (e.length <= 1 ? (v.splice(o, 1), (0, x.vu6)(I, --o, o), e = v[o]) : v[o].splice(m, 1), a > ($ = e.length - 1) && (0, x.vu6)(D, a = $, a), y(), m = -1, n(2, u = !u))
                                        } else m = -1
                                    }
                                },
                                function($) {
                                    n(1, A = $)
                                },
                                function($) {
                                    x.Dnk[$ ? "unshift" : "push"](() => {
                                        n(0, c = $)
                                    })
                                }, $ => g($)]
                        }, function $(e) {
                            let t, s, i, n, a, r, l, c, h, A = e[4],
                                u, d, C, p, f, w, v, b, y = e[3],
                                B, F, I;

                            function D($) {
                                e[15]($)
                            }
                            var N = {
                                $$slots: {
                                    default: [g]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            void 0 !== e[1] && (N.show = e[1]), t = new o.A({
                                props: N
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", D)), e[16](t);
                            let E = m(e),
                                Q = _(e);
                            return {
                                c() {
                                    (0, x.N0i)(t.$$.fragment), i = (0, x.xem)(), n = (0, x.ND4)("div"), a = (0, x.ND4)("div"), r = (0, x.ND4)("i"), l = (0, x.xem)(), c = (0, x.ND4)("i"), h = (0, x.xem)(), E.c(), u = (0, x.xem)(), d = (0, x.ND4)("i"), C = (0, x.xem)(), p = (0, x.ND4)("i"), f = (0, x.xem)(), w = (0, x.ND4)("i"), v = (0, x.xem)(), b = (0, x.ND4)("div"), Q.c(), (0, x.CFu)(r, "class", "selector fas fa-arrow-left s-15tzznm"), (0, x.CFu)(r, "data-tip", "Seek to the previous skin page"), (0, x.CFu)(c, "class", "selector fas fa-fast-backward s-15tzznm"), (0, x.CFu)(c, "data-tip", "Seek to the first skin page"), (0, x.CFu)(d, "class", "selector fas fa-plus s-15tzznm"), (0, x.CFu)(d, "data-tip", "Add a new skin"), (0, x.CFu)(p, "class", "selector fas fa-fast-forward s-15tzznm"), (0, x.CFu)(p, "data-tip", "Seek to the last skin page"), (0, x.CFu)(w, "class", "selector fas fa-arrow-right s-15tzznm"), (0, x.CFu)(w, "data-tip", "Seek to the next skin page"), (0, x.CFu)(a, "class", "selectors s-15tzznm"), (0, x.CFu)(b, "class", "skins s-15tzznm"), (0, x.CFu)(n, "class", "skin-container s-15tzznm")
                                },
                                m($, s) {
                                    (0, x.wSR)(t, $, s), (0, x.Yry)($, i, s), (0, x.Yry)($, n, s), (0, x.BCw)(n, a), (0, x.BCw)(a, r), (0, x.BCw)(a, l), (0, x.BCw)(a, c), (0, x.BCw)(a, h), E.m(a, null), (0, x.BCw)(a, u), (0, x.BCw)(a, d), (0, x.BCw)(a, C), (0, x.BCw)(a, p), (0, x.BCw)(a, f), (0, x.BCw)(a, w), (0, x.BCw)(n, v), (0, x.BCw)(n, b), Q.m(b, null), B = !0, F || (I = [(0, x.KTR)(r, "click", e[8]), (0, x.KTR)(c, "click", e[6]), (0, x.KTR)(d, "click", e[13]), (0, x.KTR)(p, "click", e[7]), (0, x.KTR)(w, "click", e[9]), (0, x.KTR)(b, "contextmenu", e[11]), (0, x.KTR)(b, "click", e[12])], F = !0)
                                },
                                p($, [e]) {
                                    var i = {};
                                    8388608 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 2 & e && (s = !0, i.show = $[1], (0, x.Jk$)(() => s = !1)), t.$set(i), 16 & e && (0, x.jXN)(A, A = $[4]) ? (E.d(1), (E = m($)).c(), E.m(a, u)) : E.p($, e), 8 & e && (0, x.jXN)(y, y = $[3]) ? (Q.d(1), (Q = _($)).c(), Q.m(b, null)) : Q.p($, e)
                                },
                                i($) {
                                    B || ((0, x.c7F)(t.$$.fragment, $), B = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), B = !1
                                },
                                d($) {
                                    $ && ((0, x.YoD)(i), (0, x.YoD)(n)), e[16](null), (0, x.Hbl)(t, $), E.d($), Q.d($), (F = !1, x.oOW)(I)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let k = Q
            },
            87399($, e, t) {
                t.d(e, {
                    A: () => c
                });
                var x = t(83839),
                    s = (t(60821), t(43228)),
                    i = t(48481),
                    n = t(49053),
                    a = t(8167),
                    o = t(64127);

                function r() {
                    let $, e, t, o, r, l, c, h, A, u, d;
                    return o = new s.A({}), l = new i.A({}), h = new a.A({}), u = new n.A({}), {
                        c() {
                            $ = (0, x.ND4)("div"), e = (0, x.ND4)("div"), t = (0, x.xem)(), (0, x.N0i)(o.$$.fragment), r = (0, x.xem)(), (0, x.N0i)(l.$$.fragment), c = (0, x.xem)(), (0, x.N0i)(h.$$.fragment), A = (0, x.xem)(), (0, x.N0i)(u.$$.fragment), (0, x.CFu)(e, "class", "bar s-wwp2cq"), (0, x.CFu)($, "class", "main-container s-wwp2cq")
                        },
                        m(s, i) {
                            (0, x.Yry)(s, $, i), (0, x.BCw)($, e), (0, x.BCw)($, t), (0, x.wSR)(o, $, null), (0, x.BCw)($, r), (0, x.wSR)(l, $, null), (0, x.BCw)($, c), (0, x.wSR)(h, $, null), (0, x.BCw)($, A), (0, x.wSR)(u, $, null), d = !0
                        },
                        i($) {
                            d || ((0, x.c7F)(o.$$.fragment, $), (0, x.c7F)(l.$$.fragment, $), (0, x.c7F)(h.$$.fragment, $), (0, x.c7F)(u.$$.fragment, $), d = !0)
                        },
                        o($) {
                            (0, x.Tn8)(o.$$.fragment, $), (0, x.Tn8)(l.$$.fragment, $), (0, x.Tn8)(h.$$.fragment, $), (0, x.Tn8)(u.$$.fragment, $), d = !1
                        },
                        d(e) {
                            e && (0, x.YoD)($), (0, x.Hbl)(o), (0, x.Hbl)(l), (0, x.Hbl)(h), (0, x.Hbl)(u)
                        }
                    }
                }
                class l extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let i;
                            return (0, x.j0C)(e, o.z, $ => s(0, i = $)), [i]
                        }, function $(e) {
                            let t, s, i = e[0] && r();
                            return {
                                c() {
                                    i && i.c(), t = (0, x.Iex)()
                                },
                                m($, e) {
                                    i && i.m($, e), (0, x.Yry)($, t, e), s = !0
                                },
                                p($, [e]) {
                                    $[0] ? i ? 1 & e && (0, x.c7F)(i, 1) : ((i = r()).c(), (0, x.c7F)(i, 1), i.m(t.parentNode, t)) : i && ((0, x.V44)(), (0, x.Tn8)(i, 1, 1, () => {
                                        i = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    s || ((0, x.c7F)(i), s = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(i), s = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), i && i.d($)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let c = l
            },
            48481($, e, t) {
                t.d(e, {
                    A: () => D
                });
                var x = t(83839),
                    s = (t(60821), t(95669)),
                    i = t(54603),
                    n = t(7009),
                    a = t(92854),
                    o = t(59745),
                    r = t(97486),
                    l = t(20990),
                    c = t(36742),
                    h = t(33656),
                    A = t(78225),
                    u = t(83529),
                    d = t(95195),
                    g = t(8125);

                function m($) {
                    let e, t, s, i, n, a, o, r;
                    return {
                        c() {
                            e = (0, x.ND4)("button"), t = (0, x.ND4)("i"), s = (0, x.xem)(), i = (0, x.Qq7)($[4]), (0, x.CFu)(t, "class", "fas fa-play play-icon s-1l4aaom"), (0, x.CFu)(e, "class", "play button s-1l4aaom"), e.disabled = n = !$[3], (0, x.CFu)(e, "data-tip", a = "Spawn as your " + (0 == $[1] ? "first" : "second") + " tab")
                        },
                        m($, n) {
                            (0, x.Yry)($, e, n), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), o || (r = (0, x.KTR)(e, "click", w), o = !0)
                        },
                        p($, t) {
                            16 & t && (0, x.iQh)(i, $[4]), 8 & t && n !== (n = !$[3]) && (e.disabled = n), 2 & t && a !== (a = "Spawn as your " + (0 == $[1] ? "first" : "second") + " tab") && (0, x.CFu)(e, "data-tip", a)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), o = !1, r()
                        }
                    }
                }

                function C($) {
                    let e, t, s, i, n, a;
                    return {
                        c() {
                            e = (0, x.ND4)("button"), t = (0, x.ND4)("i"), (0, x.CFu)(t, "class", "fas fa-search"), (0, x.CFu)(e, "class", "spectate button s-1l4aaom"), e.disabled = s = !$[5], (0, x.CFu)(e, "data-tip", i = "Spectate as your " + (0 == $[1] ? "first" : "second") + " tab")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), n || (a = (0, x.KTR)(e, "click", v), n = !0)
                        },
                        p($, t) {
                            32 & t && s !== (s = !$[5]) && (e.disabled = s), 2 & t && i !== (i = "Spectate as your " + (0 == $[1] ? "first" : "second") + " tab") && (0, x.CFu)(e, "data-tip", i)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), n = !1, a()
                        }
                    }
                }

                function p($) {
                    let e, t, s, i, n, a, o, r, l, c, A, d, g, p, f, _, w, v, I, D, N, E, Q, k = $[3],
                        T, S = $[5],
                        Y, z, R = m($),
                        M = C($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("i"), s = (0, x.xem)(), i = (0, x.ND4)("div"), n = (0, x.ND4)("img"), o = (0, x.xem)(), r = (0, x.ND4)("div"), l = (0, x.xem)(), c = (0, x.ND4)("i"), A = (0, x.xem)(), d = (0, x.ND4)("div"), g = (0, x.ND4)("div"), p = (0, x.ND4)("input"), _ = (0, x.xem)(), w = (0, x.ND4)("input"), I = (0, x.xem)(), D = (0, x.ND4)("input"), E = (0, x.xem)(), Q = (0, x.ND4)("div"), R.c(), T = (0, x.xem)(), M.c(), (0, x.CFu)(t, "class", "selector fas fa-caret-left s-1l4aaom"), (0, x.CFu)(t, "data-tip", "Seek to your previous tab"), (0, x.CFu)(n, "alt", "Skin preview"), (0, x.mq_)(n.src, a = $[2].skins[u.A.dlo("linkTabSkins") ? 0 : $[1]] || h.nG) || (0, x.CFu)(n, "src", a), (0, x.CFu)(n, "class", "skin s-1l4aaom"), (0, x.CFu)(r, "class", "skin background s-1l4aaom"), (0, x.CFu)(i, "class", "preview s-1l4aaom"), (0, x.CFu)(c, "class", "selector fas fa-caret-right s-1l4aaom"), (0, x.CFu)(c, "data-tip", "Seek to your next tab"), (0, x.CFu)(e, "class", "preview-wrapper s-1l4aaom"), (0, x.CFu)(p, "class", "name-input s-1l4aaom"), (0, x.CFu)(p, "type", "text"), (0, x.CFu)(p, "spellcheck", "false"), (0, x.CFu)(p, "placeholder", "Nickname"), (0, x.CFu)(p, "maxlength", "15"), p.value = f = $[2].names[u.A.dlo("linkTabNames") ? 0 : $[1]], (0, x.CFu)(w, "class", "tag-input s-1l4aaom"), (0, x.CFu)(w, "type", "text"), (0, x.CFu)(w, "spellcheck", "false"), (0, x.CFu)(w, "placeholder", "Tag"), (0, x.CFu)(w, "maxlength", "15"), (0, x.CFu)(w, "data-tip", "You only see and chat with players in same tag"), w.value = v = $[2].tags[u.A.dlo("linkTabTags") ? 0 : $[1]], (0, x.CFu)(g, "class", "inputs s-1l4aaom"), (0, x.CFu)(D, "class", "skin-input"), (0, x.CFu)(D, "type", "text"), (0, x.CFu)(D, "spellcheck", "false"), (0, x.CFu)(D, "placeholder", "https://skins.vanis.io/s/"), (0, x.CFu)(D, "maxlength", "31"), D.value = N = $[2].skins[u.A.dlo("linkTabSkins") ? 0 : $[1]], (0, x.CFu)(Q, "class", "buttons s-1l4aaom"), (0, x.CFu)(d, "class", "player-data s-1l4aaom")
                        },
                        m(a, h) {
                            (0, x.Yry)(a, e, h), (0, x.BCw)(e, t), (0, x.BCw)(e, s), (0, x.BCw)(e, i), (0, x.BCw)(i, n), (0, x.BCw)(i, o), (0, x.BCw)(i, r), (0, x.BCw)(e, l), (0, x.BCw)(e, c), (0, x.Yry)(a, A, h), (0, x.Yry)(a, d, h), (0, x.BCw)(d, g), (0, x.BCw)(g, p), (0, x.BCw)(g, _), (0, x.BCw)(g, w), (0, x.BCw)(d, I), (0, x.BCw)(d, D), (0, x.BCw)(d, E), (0, x.BCw)(d, Q), R.m(Q, null), (0, x.BCw)(Q, T), M.m(Q, null), Y || (z = [(0, x.KTR)(t, "click", $[11]), (0, x.KTR)(n, "error", F), (0, x.KTR)(c, "click", $[12]), (0, x.KTR)(p, "change", b), (0, x.KTR)(w, "change", B), (0, x.KTR)(D, "change", y)], Y = !0)
                        },
                        p($, e) {
                            6 & e && !(0, x.mq_)(n.src, a = $[2].skins[u.A.dlo("linkTabSkins") ? 0 : $[1]] || h.nG) && (0, x.CFu)(n, "src", a), 6 & e && f !== (f = $[2].names[u.A.dlo("linkTabNames") ? 0 : $[1]]) && p.value !== f && (p.value = f), 6 & e && v !== (v = $[2].tags[u.A.dlo("linkTabTags") ? 0 : $[1]]) && w.value !== v && (w.value = v), 6 & e && N !== (N = $[2].skins[u.A.dlo("linkTabSkins") ? 0 : $[1]]) && D.value !== N && (D.value = N), 8 & e && (0, x.jXN)(k, k = $[3]) ? (R.d(1), (R = m($)).c(), R.m(Q, T)) : R.p($, e), 32 & e && (0, x.jXN)(S, S = $[5]) ? (M.d(1), (M = C($)).c(), M.m(Q, null)) : M.p($, e)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(A), (0, x.YoD)(d)), R.d($), M.d($), (Y = !1, x.oOW)(z)
                        }
                    }
                }
                let f = (0, i.T5)(u.A.inputs),
                    _ = (f.subscribe(() => u.A.buj()), g.pB.set("Play as tab " + (1 + (0, i.Jt)(g.xR))), u.A.on("zrVIMz", ($, e) => {
                        "activeTabContext" === $ ? (g.xR.set(e), e = (0, h.Rr)(1 + (0, i.Jt)(g.xR)), (0, i.Jt)(g.pB) != e && g.pB.set(e)) : "linkTabNames" !== $ && "linkTabSkins" !== $ && "linkTabTags" !== $ || f.set((0, i.Jt)(f))
                    }), () => {
                        g.xR.set(0 == (0, i.Jt)(g.xR) ? 1 : 0), u.A.set("activeTabContext", (0, i.Jt)(g.xR))
                    }),
                    w = () => {
                        var $;
                        (0, i.Jt)(g.qC) && !d.A.FLt.Fcz && (d.A.running && d.A.FLt.connected ? (d.A.ycZ(A.A.yNT) || d.A.kmM.Rhi(), d.A.FQe(!1)) : A.A.selectedServer && (d.A.emit("tPqeFj", $ = {}), $.wait || (d.A.FLt.Fcz = !0)))
                    },
                    v = () => {
                        var $;
                        (0, i.Jt)(g.m7) && !d.A.FLt.zGd && (d.A.running && d.A.FLt.connected ? (d.A.kmM.Xiy(), d.A.FQe(!1)) : A.A.selectedServer && (d.A.emit("tPqeFj", $ = {}), $.wait || (d.A.FLt.zGd = !0)))
                    },
                    b = (d.A.on("fzvxek", $ => {
                        f.update(e => (e.skins[u.A.get("linkTabSkins") ? 0 : (0, i.Jt)(g.xR)] = $, e))
                    }), $ => {
                        let e = $.target;
                        f.update($ => ($.names[u.A.get("linkTabNames") ? 0 : (0, i.Jt)(g.xR)] = e.value, $))
                    }),
                    y = $ => {
                        $ = $.target, d.A.emit("fzvxek", $.value), u.A.buj()
                    },
                    B = $ => {
                        let e = $.target;
                        f.update($ => ($.tags[u.A.get("linkTabTags") ? 0 : (0, i.Jt)(g.xR)] = e.value, $))
                    },
                    F = $ => {
                        $.currentTarget.src = h.nG
                    };
                class I extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let i, n, a, o, r, l;
                            return (0, x.j0C)(e, c.E, $ => s(0, i = $)), (0, x.j0C)(e, g.xR, $ => s(1, n = $)), (0, x.j0C)(e, f, $ => s(2, a = $)), (0, x.j0C)(e, g.qC, $ => s(3, o = $)), (0, x.j0C)(e, g.pB, $ => s(4, r = $)), (0, x.j0C)(e, g.m7, $ => s(5, l = $)), [i, n, a, o, r, l, () => (0, x.vu6)(c.E, i = c.b.Settings, i), () => (0, x.vu6)(c.E, i = c.b.Themes, i), () => (0, x.vu6)(c.E, i = c.b.Inputs, i), () => (0, x.vu6)(c.E, i = c.b.Replays, i), () => (0, x.vu6)(c.E, i = c.b.Leaderboard, i), () => _(), () => _()]
                        }, function $(e) {
                            let t, i, c, h, A, u, d, g, m, C, f, _, w, v, b, y, B, F, I, D, N, E, Q, k = e[1],
                                T, S, Y, z, R, M = (w = new l.A({}), b = new r.A({}), B = new o.A({}), I = new a.A({}), N = new n.A({}), p(e));
                            return {
                                c() {
                                    t = (0, x.ND4)("div"), i = (0, x.ND4)("div"), c = (0, x.ND4)("i"), h = (0, x.xem)(), A = (0, x.ND4)("i"), u = (0, x.xem)(), d = (0, x.ND4)("i"), g = (0, x.xem)(), m = (0, x.ND4)("i"), C = (0, x.xem)(), f = (0, x.ND4)("i"), _ = (0, x.xem)(), (0, x.N0i)(w.$$.fragment), v = (0, x.xem)(), (0, x.N0i)(b.$$.fragment), y = (0, x.xem)(), (0, x.N0i)(B.$$.fragment), F = (0, x.xem)(), (0, x.N0i)(I.$$.fragment), D = (0, x.xem)(), (0, x.N0i)(N.$$.fragment), E = (0, x.xem)(), Q = (0, x.ND4)("div"), M.c(), (0, x.CFu)(c, "data-tip", "Settings"), (0, x.CFu)(c, "class", "tab fal fa-cog"), (0, x.CFu)(A, "data-tip", "Theming"), (0, x.CFu)(A, "class", "tab fal fa-palette"), (0, x.CFu)(d, "data-tip", "Hotkeys"), (0, x.CFu)(d, "class", "tab fal fa-keyboard"), (0, x.CFu)(m, "data-tip", "Replays"), (0, x.CFu)(m, "class", "tab fal fa-video"), (0, x.CFu)(f, "data-tip", "Player leaderboards"), (0, x.CFu)(f, "class", "tab fal fa-clipboard-list"), (0, x.CFu)(i, "class", "tabs"), (0, x.CFu)(Q, "class", "inner-container s-1l4aaom"), (0, x.CFu)(t, "class", "player-container container menu-tab s-1l4aaom")
                                },
                                m($, s) {
                                    (0, x.Yry)($, t, s), (0, x.BCw)(t, i), (0, x.BCw)(i, c), (0, x.BCw)(i, h), (0, x.BCw)(i, A), (0, x.BCw)(i, u), (0, x.BCw)(i, d), (0, x.BCw)(i, g), (0, x.BCw)(i, m), (0, x.BCw)(i, C), (0, x.BCw)(i, f), (0, x.BCw)(t, _), (0, x.wSR)(w, t, null), (0, x.BCw)(t, v), (0, x.wSR)(b, t, null), (0, x.BCw)(t, y), (0, x.wSR)(B, t, null), (0, x.BCw)(t, F), (0, x.wSR)(I, t, null), (0, x.BCw)(t, D), (0, x.wSR)(N, t, null), (0, x.BCw)(t, E), (0, x.BCw)(t, Q), M.m(Q, null), Y = !0, z || (R = [(0, x.KTR)(c, "click", e[6]), (0, x.KTR)(A, "click", e[7]), (0, x.KTR)(d, "click", e[8]), (0, x.KTR)(m, "click", e[9]), (0, x.KTR)(f, "click", e[10])], z = !0)
                                },
                                p($, [e]) {
                                    2 & e && (0, x.jXN)(k, k = $[1]) ? (M.d(1), (M = p($)).c(), M.m(Q, null)) : M.p($, e)
                                },
                                i($) {
                                    Y || ((0, x.c7F)(w.$$.fragment, $), (0, x.c7F)(b.$$.fragment, $), (0, x.c7F)(B.$$.fragment, $), (0, x.c7F)(I.$$.fragment, $), (0, x.c7F)(N.$$.fragment, $), $ && (0, x.Dti)(() => {
                                        Y && (S && S.end(1), (T = (0, x.b7f)(t, s._J, {
                                            y: -150,
                                            duration: 500
                                        })).start())
                                    }), Y = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(w.$$.fragment, $), (0, x.Tn8)(b.$$.fragment, $), (0, x.Tn8)(B.$$.fragment, $), (0, x.Tn8)(I.$$.fragment, $), (0, x.Tn8)(N.$$.fragment, $), T && T.invalidate(), $ && (S = (0, x.CUz)(t, s._J, {
                                        y: -150,
                                        duration: 500
                                    })), Y = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), (0, x.Hbl)(w), (0, x.Hbl)(b), (0, x.Hbl)(B), (0, x.Hbl)(I), (0, x.Hbl)(N), M.d($), $ && S && S.end(), (z = !1, x.oOW)(R)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let D = I
            },
            43228($, e, t) {
                t.d(e, {
                    A: () => F
                });
                var x = t(83839),
                    s = (t(60821), t(95669)),
                    i = t(61416);

                function n($, e, t) {
                    return ($ = $.slice())[10] = e[t], $[11] = e, $[12] = t, $
                }

                function a($, e, t) {
                    return ($ = $.slice())[13] = e[t], $[15] = t, $
                }

                function o($, e, t) {
                    return ($ = $.slice())[13] = e[t], $[15] = t, $
                }

                function r($, e, t) {
                    return ($ = $.slice())[17] = e[t], $
                }

                function l($) {
                    let e, t, s;

                    function i() {
                        return $[5]($[17])
                    }
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = $[17] + " ", (0, x.CFu)(e, "class", "tab"), (0, x.goL)(e, "active", $[17] === $[0])
                        },
                        m($, n) {
                            (0, x.Yry)($, e, n), t || (s = (0, x.KTR)(e, "click", i), t = !0)
                        },
                        p(t, s) {
                            $ = t, 1 & s && (0, x.goL)(e, "active", $[17] === $[0])
                        },
                        d($) {
                            $ && (0, x.YoD)(e), t = !1, s()
                        }
                    }
                }

                function c($) {
                    let e, t, s, i = $[1].visible,
                        n, a, o, r, l = h($),
                        c = $[1].visible && A($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), (t = (0, x.ND4)("div")).innerHTML = '<i class="fal fa-trophy"></i> <span style="padding-left:5px;">Tournaments</span>', s = (0, x.xem)(), l.c(), n = (0, x.xem)(), c && c.c(), a = (0, x.Iex)(), (0, x.CFu)(t, "class", "server-name s-1oys449"), (0, x.CFu)(e, "class", "server-item s-1oys449")
                        },
                        m(i, h) {
                            (0, x.Yry)(i, e, h), (0, x.BCw)(e, t), (0, x.BCw)(e, s), l.m(e, null), (0, x.Yry)(i, n, h), c && c.m(i, h), (0, x.Yry)(i, a, h), o || (r = (0, x.KTR)(e, "click", $[6]), o = !0)
                        },
                        p($, t) {
                            2 & t && (0, x.jXN)(i, i = $[1].visible) ? (l.d(1), (l = h($)).c(), l.m(e, null)) : l.p($, t), $[1].visible ? c ? c.p($, t) : ((c = A($)).c(), c.m(a.parentNode, a)) : c && (c.d(1), c = null)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(n), (0, x.YoD)(a)), l.d($), c && c.d($), o = !1, r()
                        }
                    }
                }

                function h($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("i"), (0, x.CFu)(e, "class", t = "fal fa-chevron-" + ($[1].visible ? "up" : "down"))
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p($, s) {
                            2 & s && t !== (t = "fal fa-chevron-" + ($[1].visible ? "up" : "down")) && (0, x.CFu)(e, "class", t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function A($) {
                    let e, t = (0, x.rv_)($[1].wPu),
                        s = [];
                    for (let i = 0; i < t.length; i += 1) s[i] = d(o($, t, i));
                    return {
                        c() {
                            for (let $ = 0; $ < s.length; $ += 1) s[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, t) {
                            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m($, t);
                            (0, x.Yry)($, e, t)
                        },
                        p($, i) {
                            if (6 & i) {
                                t = (0, x.rv_)($[1].wPu);
                                let n;
                                for (n = 0; n < t.length; n += 1) {
                                    var a = o($, t, n);
                                    s[n] ? s[n].p(a, i) : (s[n] = d(a), s[n].c(), s[n].m(e.parentNode, e))
                                }
                                for (; n < s.length; n += 1) s[n].d(1);
                                s.length = t.length
                            }
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(s, $)
                        }
                    }
                }

                function u() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("div")).innerHTML = '<span class="live-marker">LIVE</span>', (0, x.CFu)($, "class", "live-marker-wrapper")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function d($) {
                    let e, t, s, i, n, a, o, r = $[13].live && u();

                    function l() {
                        return $[7]($[13])
                    }
                    return {
                        c() {
                            e = (0, x.ND4)("div"), (t = (0, x.ND4)("div")).textContent = "" + $[13].name, s = (0, x.xem)(), r && r.c(), i = (0, x.xem)(), (0, x.CFu)(t, "class", "server-name s-1oys449"), (0, x.CFu)(e, "data-key", n = $[15]), (0, x.CFu)(e, "class", "server-item s-1oys449"), (0, x.goL)(e, "active", $[13].url === $[2])
                        },
                        m($, n) {
                            (0, x.Yry)($, e, n), (0, x.BCw)(e, t), (0, x.BCw)(e, s), r && r.m(e, null), (0, x.BCw)(e, i), a || (o = (0, x.KTR)(e, "click", l), a = !0)
                        },
                        p(t, s) {
                            ($ = t)[13].live ? r || ((r = u()).c(), r.m(e, i)) : r && (r.d(1), r = null), 6 & s && (0, x.goL)(e, "active", $[13].url === $[2])
                        },
                        d($) {
                            $ && (0, x.YoD)(e), r && r.d(), a = !1, o()
                        }
                    }
                }

                function g($) {
                    let e, t, s, i = $[10].visible,
                        n, a = $[10].visible || $[10].wPu.some($[4]),
                        o, r, l, c = m($);

                    function h() {
                        return $[8]($[10], $[11], $[12])
                    }
                    let A = a && C($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), (t = (0, x.ND4)("div")).textContent = "" + $[10].name, s = (0, x.xem)(), c.c(), n = (0, x.xem)(), A && A.c(), o = (0, x.Iex)(), (0, x.CFu)(t, "class", "server-name s-1oys449"), (0, x.CFu)(e, "class", "server-item s-1oys449")
                        },
                        m($, i) {
                            (0, x.Yry)($, e, i), (0, x.BCw)(e, t), (0, x.BCw)(e, s), c.m(e, null), (0, x.Yry)($, n, i), A && A.m($, i), (0, x.Yry)($, o, i), r || (l = (0, x.KTR)(e, "click", h), r = !0)
                        },
                        p(t, s) {
                            $ = t, 8 & s && (0, x.jXN)(i, i = $[10].visible) ? (c.d(1), (c = m($)).c(), c.m(e, null)) : c.p($, s), (a = 12 & s ? $[10].visible || $[10].wPu.some($[4]) : a) ? A ? A.p($, s) : ((A = C($)).c(), A.m(o.parentNode, o)) : A && (A.d(1), A = null)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(n), (0, x.YoD)(o)), c.d($), A && A.d($), r = !1, l()
                        }
                    }
                }

                function m($) {
                    let e, t;
                    return {
                        c() {
                            e = (0, x.ND4)("i"), (0, x.CFu)(e, "class", t = "fal fa-chevron-" + ($[10].visible ? "up" : "down"))
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p($, s) {
                            8 & s && t !== (t = "fal fa-chevron-" + ($[10].visible ? "up" : "down")) && (0, x.CFu)(e, "class", t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function C($) {
                    let e, t = (0, x.rv_)($[10].wPu),
                        s = [];
                    for (let i = 0; i < t.length; i += 1) s[i] = _(a($, t, i));
                    return {
                        c() {
                            for (let $ = 0; $ < s.length; $ += 1) s[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, t) {
                            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m($, t);
                            (0, x.Yry)($, e, t)
                        },
                        p($, i) {
                            if (12 & i) {
                                t = (0, x.rv_)($[10].wPu);
                                let n;
                                for (n = 0; n < t.length; n += 1) {
                                    var o = a($, t, n);
                                    s[n] ? s[n].p(o, i) : (s[n] = _(o), s[n].c(), s[n].m(e.parentNode, e))
                                }
                                for (; n < s.length; n += 1) s[n].d(1);
                                s.length = t.length
                            }
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(s, $)
                        }
                    }
                }

                function p($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = $[13].players + " / " + $[13].slots, (0, x.CFu)(e, "class", "slot-badge s-1oys449")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function f($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).innerHTML = '<span class="live-marker">LIVE</span>', (0, x.CFu)(e, "class", "live-marker-wrapper")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function _($) {
                    let e, t, s, i, n, a, o;

                    function r($) {
                        return $[13].live ? f : p
                    }
                    let l = r($),
                        c = l($);

                    function h() {
                        return $[9]($[13])
                    }
                    return {
                        c() {
                            e = (0, x.ND4)("div"), (t = (0, x.ND4)("div")).textContent = "" + $[13].name, s = (0, x.xem)(), c.c(), i = (0, x.xem)(), (0, x.CFu)(t, "class", "server-name s-1oys449"), (0, x.CFu)(e, "data-key", n = $[15]), (0, x.CFu)(e, "class", "server-item s-1oys449"), (0, x.goL)(e, "active", $[13].url === $[2])
                        },
                        m($, n) {
                            (0, x.Yry)($, e, n), (0, x.BCw)(e, t), (0, x.BCw)(e, s), c.m(e, null), (0, x.BCw)(e, i), a || (o = (0, x.KTR)(e, "click", h), a = !0)
                        },
                        p(t, s) {
                            l === (l = r($ = t)) && c ? c.p($, s) : (c.d(1), (c = l($)) && (c.c(), c.m(e, i))), 12 & s && (0, x.goL)(e, "active", $[13].url === $[2])
                        },
                        d($) {
                            $ && (0, x.YoD)(e), c.d(), a = !1, o()
                        }
                    }
                }

                function w($) {
                    let e, t = 0 < $[10].wPu.length && g($);
                    return {
                        c() {
                            t && t.c(), e = (0, x.Iex)()
                        },
                        m($, s) {
                            t && t.m($, s), (0, x.Yry)($, e, s)
                        },
                        p($, x) {
                            0 < $[10].wPu.length ? t ? t.p($, x) : ((t = g($)).c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), t && t.d($)
                        }
                    }
                }

                function v($) {
                    let e, t = (0, x.rv_)($[3]),
                        s = [];
                    for (let i = 0; i < t.length; i += 1) s[i] = w(n($, t, i));
                    return {
                        c() {
                            for (let $ = 0; $ < s.length; $ += 1) s[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, t) {
                            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m($, t);
                            (0, x.Yry)($, e, t)
                        },
                        p($, i) {
                            if (12 & i) {
                                t = (0, x.rv_)($[3]);
                                let a;
                                for (a = 0; a < t.length; a += 1) {
                                    var o = n($, t, a);
                                    s[a] ? s[a].p(o, i) : (s[a] = w(o), s[a].c(), s[a].m(e.parentNode, e))
                                }
                                for (; a < s.length; a += 1) s[a].d(1);
                                s.length = t.length
                            }
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(s, $)
                        }
                    }
                }

                function b($) {
                    let e, t, s, i, n, a, o, r = $[2],
                        l, h, A = null != $[1] && 0 < $[1].wPu.length && c($),
                        u = v($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), (s = (0, x.ND4)("div")).innerHTML = '<i class="fal fa-user"></i> <span style="padding-left:5px;">Lobbies</span>', i = (0, x.xem)(), n = (0, x.ND4)("i"), a = (0, x.xem)(), A && A.c(), o = (0, x.xem)(), u.c(), (0, x.CFu)(s, "class", "server-name s-1oys449"), (0, x.CFu)(n, "class", "fal fa-chevron-down"), (0, x.CFu)(t, "class", "server-item s-1oys449"), (0, x.CFu)(e, "class", "server-list s-1oys449")
                        },
                        m($, r) {
                            (0, x.Yry)($, e, r), (0, x.BCw)(e, t), (0, x.BCw)(t, s), (0, x.BCw)(t, i), (0, x.BCw)(t, n), (0, x.BCw)(e, a), A && A.m(e, null), (0, x.BCw)(e, o), u.m(e, null), l || (h = (0, x.KTR)(t, "click", y), l = !0)
                        },
                        p($, t) {
                            null != $[1] && 0 < $[1].wPu.length ? A ? A.p($, t) : ((A = c($)).c(), A.m(e, o)) : A && (A.d(1), A = null), 4 & t && (0, x.jXN)(r, r = $[2]) ? (u.d(1), (u = v($)).c(), u.m(e, null)) : u.p($, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), A && A.d(), u.d($), l = !1, h()
                        }
                    }
                }
                let y = () => {};
                class B extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let n, a, o, r;
                            return (0, x.j0C)(e, i.aK, $ => s(0, n = $)), (0, x.j0C)(e, i.AQ, $ => s(1, a = $)), (0, x.j0C)(e, i.BA, $ => s(2, o = $)), (0, x.j0C)(e, i.oo, $ => s(3, r = $)), [n, a, o, r, $ => $.url == o, $ => i.pc.LEA($), () => i.AQ.update($ => ($.wGF(), $)), $ => i.pc.join($), ($, e, t) => (0, x.vu6)(i.oo, e[t] = $, r).wGF(), $ => i.pc.join($)]
                        }, function $(e) {
                            let t, n, a, o = e[0],
                                c, h, A, u = (0, x.rv_)(i.pc.regions),
                                d = [];
                            for (let g = 0; g < u.length; g += 1) d[g] = l(r(e, u, g));
                            let m = b(e);
                            return {
                                c() {
                                    t = (0, x.ND4)("div"), n = (0, x.ND4)("div");
                                    for (let $ = 0; $ < d.length; $ += 1) d[$].c();
                                    a = (0, x.xem)(), m.c(), (0, x.CFu)(n, "class", "tabs"), (0, x.CFu)(t, "class", "servers container menu-tab s-1oys449")
                                },
                                m($, e) {
                                    (0, x.Yry)($, t, e), (0, x.BCw)(t, n);
                                    for (let s = 0; s < d.length; s += 1) d[s] && d[s].m(n, null);
                                    (0, x.BCw)(t, a), m.m(t, null), A = !0
                                },
                                p($, [e]) {
                                    if (1 & e) {
                                        u = (0, x.rv_)(i.pc.regions);
                                        let s;
                                        for (s = 0; s < u.length; s += 1) {
                                            var a = r($, u, s);
                                            d[s] ? d[s].p(a, e) : (d[s] = l(a), d[s].c(), d[s].m(n, null))
                                        }
                                        for (; s < d.length; s += 1) d[s].d(1);
                                        d.length = u.length
                                    }
                                    1 & e && (0, x.jXN)(o, o = $[0]) ? (m.d(1), (m = b($)).c(), m.m(t, null)) : m.p($, e)
                                },
                                i($) {
                                    A || ($ && (0, x.Dti)(() => {
                                        A && (h && h.end(1), (c = (0, x.b7f)(t, s._J, {
                                            x: -150,
                                            duration: 500
                                        })).start())
                                    }), A = !0)
                                },
                                o($) {
                                    c && c.invalidate(), $ && (h = (0, x.CUz)(t, s._J, {
                                        x: -150,
                                        duration: 500
                                    })), A = !1
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), (0, x.ppq)(d, $), m.d($), $ && h && h.end()
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let F = B
            },
            33203($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(41949)),
                    i = t(95669);

                function n($) {
                    let e, t, s, n, a;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("span"), s = (0, x.Qq7)($[2]), (0, x.CFu)(e, "class", "tooltip s-p1dubb"), (0, x.hgi)(e, "left", $[5] + "px"), (0, x.hgi)(e, "top", $[6] + "px")
                        },
                        m(i, n) {
                            (0, x.Yry)(i, e, n), (0, x.BCw)(e, t), (0, x.BCw)(t, s), $[9](e), a = !0
                        },
                        p($, t) {
                            (!a || 4 & t) && (0, x.iQh)(s, $[2]), (!a || 32 & t) && (0, x.hgi)(e, "left", $[5] + "px"), (!a || 64 & t) && (0, x.hgi)(e, "top", $[6] + "px")
                        },
                        i($) {
                            a || ($ && (0, x.Dti)(() => {
                                a && (n = n || (0, x.h86)(e, i.Rv, {
                                    duration: 200
                                }, !0)).run(1)
                            }), a = !0)
                        },
                        o($) {
                            $ && (n = n || (0, x.h86)(e, i.Rv, {
                                duration: 200
                            }, !1)).run(0), a = !1
                        },
                        d(t) {
                            t && (0, x.YoD)(e), $[9](null), t && n && n.end()
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n, a, o, r, l = () => {
                                    i(4, c = !1), i(2, o = "")
                                },
                                c = !1,
                                h, A;
                            return [n, a, o, r, c, 0, 0, async $ => {
                                    let e = $.target,
                                        t = 3;
                                    for (; null != e && t-- && !e.hasAttribute("data-tip");) e = e.parentElement;
                                    if (e && e.hasAttribute("data-tip") && !e.hasAttribute("disabled") && (i(2, o = e.getAttribute("data-tip")), o) && (i(4, c = !0), e.addEventListener("mouseleave", l, {
                                            once: !0
                                        }), await (0, s.io)(), c)) {
                                        var x = r.getBoundingClientRect(),
                                            u = x.width,
                                            x = x.height;
                                        let d = $.clientX + 15,
                                            g = $.clientY + 5;
                                        var m = n - $.clientX,
                                            C = a - $.clientY;
                                        m < u + 15 && (d = $.clientX - u - 3), C < x + 5 && (g = $.clientY - x - 2), i(5, h = d), i(6, A = g)
                                    }
                                },
                                function() {
                                    i(0, n = window.innerWidth), i(1, a = window.innerHeight)
                                },
                                function($) {
                                    x.Dnk[$ ? "unshift" : "push"](() => {
                                        i(3, r = $)
                                    })
                                }]
                        }, function $(e) {
                            let t, s, i, a = ((0, x.Dti)(e[8]), e[4] && n(e));
                            return {
                                c() {
                                    a && a.c(), t = (0, x.Iex)()
                                },
                                m($, n) {
                                    a && a.m($, n), (0, x.Yry)($, t, n), s || (i = [(0, x.KTR)(window, "mousemove", e[7]), (0, x.KTR)(window, "resize", e[8])], s = !0)
                                },
                                p($, [e]) {
                                    $[4] ? a ? (a.p($, e), 16 & e && (0, x.c7F)(a, 1)) : ((a = n($)).c(), (0, x.c7F)(a, 1), a.m(t.parentNode, t)) : a && ((0, x.V44)(), (0, x.Tn8)(a, 1, 1, () => {
                                        a = null
                                    }), (0, x.GYV)())
                                },
                                i($) {
                                    (0, x.c7F)(a)
                                },
                                o($) {
                                    (0, x.Tn8)(a)
                                },
                                d($) {
                                    $ && (0, x.YoD)(t), a && a.d($), (s = !1, x.oOW)(i)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let o = a
            },
            20990($, e, t) {
                t.d(e, {
                    A: () => h
                });
                var x = t(83839),
                    s = (t(60821), t(36742)),
                    i = t(98781),
                    n = t(19099);

                function a($, e, t) {
                    return ($ = $.slice())[22] = e[t], $[24] = t, $
                }

                function o($) {
                    let e, t, s = $[22] + "",
                        i, a, o, r, l = $[7](n.Ay.get($[4][$[24]])) + "",
                        c, h, A, u;

                    function d(...e) {
                        return $[14]($[24], ...e)
                    }

                    function g(...e) {
                        return $[15]($[24], ...e)
                    }
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("span"), i = (0, x.Qq7)(s), o = (0, x.xem)(), r = (0, x.ND4)("span"), c = (0, x.Qq7)(l), h = (0, x.xem)(), (0, x.CFu)(t, "class", "name s-1pxsx0x"), (0, x.CFu)(t, "data-tip", a = $[10]($[4][$[24]])), (0, x.CFu)(r, "class", "bind s-1pxsx0x"), (0, x.CFu)(r, "tabindex", "0"), (0, x.CFu)(r, "data-tip", "Click to change keybind. 'ESCAPE' cancels changing, 'DELETE' removes keybind. You can use any mouse button or macro"), (0, x.CFu)(e, "class", "row s-1pxsx0x")
                        },
                        m($, s) {
                            (0, x.Yry)($, e, s), (0, x.BCw)(e, t), (0, x.BCw)(t, i), (0, x.BCw)(e, o), (0, x.BCw)(e, r), (0, x.BCw)(r, c), (0, x.BCw)(e, h), A || (u = [(0, x.KTR)(r, "keydown", d), (0, x.KTR)(r, "mousedown", g)], A = !0)
                        },
                        p(e, o) {
                            $ = e, 8 & o && s !== (s = $[22] + "") && (0, x.iQh)(i, s), 16 & o && a !== (a = $[10]($[4][$[24]])) && (0, x.CFu)(t, "data-tip", a), 16 & o && l !== (l = $[7](n.Ay.get($[4][$[24]])) + "") && (0, x.iQh)(c, l)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (A = !1, x.oOW)(u)
                        }
                    }
                }

                function r($) {
                    let e, t = (0, x.rv_)($[3]),
                        s = [];
                    for (let i = 0; i < t.length; i += 1) s[i] = o(a($, t, i));
                    return {
                        c() {
                            for (let $ = 0; $ < s.length; $ += 1) s[$].c();
                            e = (0, x.Iex)()
                        },
                        m($, t) {
                            for (let i = 0; i < s.length; i += 1) s[i] && s[i].m($, t);
                            (0, x.Yry)($, e, t)
                        },
                        p($, i) {
                            if (1944 & i) {
                                t = (0, x.rv_)($[3]);
                                let n;
                                for (n = 0; n < t.length; n += 1) {
                                    var r = a($, t, n);
                                    s[n] ? s[n].p(r, i) : (s[n] = o(r), s[n].c(), s[n].m(e.parentNode, e))
                                }
                                for (; n < s.length; n += 1) s[n].d(1);
                                s.length = t.length
                            }
                        },
                        d($) {
                            $ && (0, x.YoD)(e), (0, x.ppq)(s, $)
                        }
                    }
                }

                function l($) {
                    let e, t, s, i, n, a, o, l, c, h, A, u, d, g, m, C = $[1],
                        p, f, _ = r($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), (s = (0, x.ND4)("span")).textContent = "Inputs", i = (0, x.xem)(), n = (0, x.ND4)("div"), a = (0, x.ND4)("select"), (o = (0, x.ND4)("option")).textContent = "Tab", (l = (0, x.ND4)("option")).textContent = "Control", c = (0, x.xem)(), h = (0, x.ND4)("div"), A = (0, x.ND4)("div"), u = (0, x.xem)(), (d = (0, x.ND4)("button")).innerHTML = '<i class="fal fa-times"></i>', g = (0, x.xem)(), m = (0, x.ND4)("div"), _.c(), (0, x.CFu)(s, "class", "header-label s-1pxsx0x"), o.__value = "0", (0, x.Gvd)(o, o.__value), o.selected = !0, l.__value = "1", (0, x.Gvd)(l, l.__value), (l.disabled = !1, x.CFu)(a, "name", "tabid"), void 0 === $[0] && (0, x.Dti)(() => $[12].call(a)), (0, x.CFu)(n, "class", "tab-selection s-1pxsx0x"), (0, x.CFu)(A, "class", "seperator s-1pxsx0x"), (0, x.CFu)(d, "class", "close button s-1pxsx0x"), (0, x.CFu)(h, "class", "buttons s-1pxsx0x"), (0, x.CFu)(t, "class", "modal-header s-1pxsx0x"), (0, x.CFu)(m, "class", "binds"), (0, x.CFu)(e, "class", "inner-content s-1pxsx0x")
                        },
                        m(r, C) {
                            (0, x.Yry)(r, e, C), (0, x.BCw)(e, t), (0, x.BCw)(t, s), (0, x.BCw)(t, i), (0, x.BCw)(t, n), (0, x.BCw)(n, a), (0, x.BCw)(a, o), (0, x.BCw)(a, l), (0, x.fs8)(a, $[0], !0), (0, x.BCw)(t, c), (0, x.BCw)(t, h), (0, x.BCw)(h, A), (0, x.BCw)(h, u), (0, x.BCw)(h, d), (0, x.BCw)(e, g), (0, x.BCw)(e, m), _.m(m, null), p || (f = [(0, x.KTR)(a, "change", $[12]), (0, x.KTR)(d, "click", $[13])], p = !0)
                        },
                        p($, e) {
                            1 & e && (0, x.fs8)(a, $[0]), 2 & e && (0, x.jXN)(C, C = $[1]) ? (_.d(1), (_ = r($)).c(), _.m(m, null)) : _.p($, e)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), _.d($), (p = !1, x.oOW)(f)
                        }
                    }
                }
                class c extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let a, o, r = ((0, x.j0C)(e, s.E, $ => i(2, o = $)), Object.keys(n.Mf)),
                                l = Object.values(n.Mf),
                                c = Object.keys(n.A4),
                                h = Object.values(n.A4),
                                A, u = 0,
                                d = r,
                                g = l,
                                m = !1,
                                C = ($, e) => {
                                    var t;
                                    $.target === document.activeElement && (t = "MOUSE" + $.button, n.Ay.set(e, t)) && ($.preventDefault(), $.currentTarget.blur(), i(1, m = !m))
                                },
                                p = ($, e) => {
                                    $.preventDefault();
                                    let t = n.Ay.XRq($.code);
                                    if ("ESCAPE" === t || "ENTER" === t) return $.currentTarget.blur();
                                    "DELETE" === t && (t = ""), n.Ay.set(e, t) && ($.currentTarget.blur(), i(1, m = !m))
                                },
                                f = new Map([
                                    ["switchMultibox", "Switches to your inactive tab"],
                                    ["switchSplit", "Doublesplits your active tab then switches to your inactive tab while x256 splitting at the same time"],
                                    ["switchLinesplit", "Linesplits your active tab then switches to your inactive tab while x256 splitting at the same time"],
                                    ["splitTrigger", "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will onesplit"],
                                    ["doublesplitTrigger", "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will doublesplit"],
                                    ["linesplitTrigger", "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will linesplit"],
                                    ["tricksplitTrigger", "Activate triggerbot on the player whom you're hovering over, once triggerbot is activated it will solo tricksplit"],
                                    ["contextMenu", "Prompts a menu of options when activated while hovering over a player"]
                                ]);
                            return e.$$.update = () => {
                                4 & e.$$.dirty && i(5, a = o === s.b.Inputs), 1 & e.$$.dirty && i(11, u = +A), 2050 & e.$$.dirty && (i(3, d = 0 === u ? r : c), i(4, g = 0 === u ? l : h), i(1, m = !m))
                            }, [A, m, o, d, g, a, $ => {
                                (0, x.vu6)(s.E, o = $.detail ? s.b.Inputs : s.b.None, o), i(11, u = 0), i(0, A = "0")
                            }, $ => {
                                switch ($ = ($ = $ || "").toLowerCase()) {
                                    case "mouse0":
                                        return "Left Click";
                                    case "mouse1":
                                        return "Middle Click";
                                    case "mouse2":
                                        return "Right Click";
                                    case "arrowup":
                                        return "Up arrow";
                                    case "arrowdown":
                                        return "Down arrow";
                                    case "arrowleft":
                                        return "Left arrow";
                                    case "arrowright":
                                        return "Right arrow";
                                    case "":
                                        return "None";
                                    default:
                                        if ($.startsWith("mouse")) {
                                            var e = +$.split("mouse")[1] - 2;
                                            if (!Number.isNaN(e)) return "Macro " + e
                                        }
                                        return 1 < $.length ? $.substring(0, 1).toUpperCase() + $.substring(1) : $.toUpperCase()
                                }
                            }, C, p, $ => f.has($) ? f.get($) : null, u, function() {
                                i(0, A = (0, x.Hw5)(this))
                            }, () => (0, x.vu6)(s.E, o = s.b.None, o), ($, e) => p(e, g[$]), ($, e) => C(e, g[$]), function($) {
                                i(5, a = $), i(2, o)
                            }]
                        }, function $(e) {
                            let t, s, n;

                            function a($) {
                                e[16]($)
                            }
                            var o = {
                                $$slots: {
                                    default: [l]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[5] && (o.show = e[5]), t = new i.A({
                                props: o
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", a)), t.$on("visibility", e[6]), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), n = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    33554463 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 32 & e && (s = !0, i.show = $[5], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    n || ((0, x.c7F)(t.$$.fragment, $), n = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), n = !1
                                },
                                d($) {
                                    (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let h = c
            },
            97486($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(36742)),
                    i = t(98781);

                function n($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = "To be implemented."
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n, a;
                            return (0, x.j0C)(e, s.E, $ => i(2, a = $)), e.$$.update = () => {
                                4 & e.$$.dirty && i(0, n = a === s.b.Leaderboard)
                            }, [n, $ => {
                                (0, x.vu6)(s.E, a = $.detail ? s.b.Leaderboard : s.b.None, a)
                            }, a, function($) {
                                i(0, n = $), i(2, a)
                            }]
                        }, function $(e) {
                            let t, s, a;

                            function o($) {
                                e[3]($)
                            }
                            var r = {
                                $$slots: {
                                    default: [n]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[0] && (r.show = e[0]), t = new i.A({
                                props: r
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", o)), t.$on("visibility", e[1]), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), a = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    16 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 1 & e && (s = !0, i.show = $[0], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    a || ((0, x.c7F)(t.$$.fragment, $), a = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), a = !1
                                },
                                d($) {
                                    (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let o = a
            },
            59745($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(36742)),
                    i = t(98781);

                function n($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = "To be implemented."
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n, a;
                            return (0, x.j0C)(e, s.E, $ => i(2, a = $)), e.$$.update = () => {
                                4 & e.$$.dirty && i(0, n = a === s.b.Replays)
                            }, [n, $ => {
                                (0, x.vu6)(s.E, a = $.detail ? s.b.Replays : s.b.None, a)
                            }, a, function($) {
                                i(0, n = $), i(2, a)
                            }]
                        }, function $(e) {
                            let t, s, a;

                            function o($) {
                                e[3]($)
                            }
                            var r = {
                                $$slots: {
                                    default: [n]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[0] && (r.show = e[0]), t = new i.A({
                                props: r
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", o)), t.$on("visibility", e[1]), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), a = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    16 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 1 & e && (s = !0, i.show = $[0], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    a || ((0, x.c7F)(t.$$.fragment, $), a = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), a = !1
                                },
                                d($) {
                                    (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let o = a
            },
            92854($, e, t) {
                t.d(e, {
                    A: () => O
                });
                var x = t(83839),
                    s = (t(60821), t(54603)),
                    i = t(36742),
                    n = t(98781),
                    a = t(95195),
                    o = t(78225),
                    r = t(83529),
                    l = t(71675),
                    c = t(15308),
                    h = t(87706),
                    e = t(78465),
                    A = t.n(e),
                    u = t(95514);

                function d($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "GPU not detected", (0, x.CFu)(e, "class", "warning silent right s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function g($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "GPU detected", (0, x.CFu)(e, "class", "silent right s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function m() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = (100 * r.A.org("gameResolution")).toFixed(0) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function C() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("smallTextThreshold") + "px", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function p() {
                    let $, e, t, s;
                    return {
                        c() {
                            $ = (0, x.ND4)("span"), e = (0, x.Qq7)("After switching tab, you "), (t = (0, x.ND4)("b")).textContent = r.A.dlo("rememberEjecting") ? "keep" : "stop", s = (0, x.Qq7)(" ejecting"), (0, x.CFu)($, "class", "silent s-vmzf1o")
                        },
                        m(i, n) {
                            (0, x.Yry)(i, $, n), (0, x.BCw)($, e), (0, x.BCw)($, t), (0, x.BCw)($, s)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function f() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("drawDelay") + "ms", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function _() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("cameraMoveDelay") + "ms", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function w() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("cameraSwitchDelay") + "ms", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function v() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("cameraZoomDelay") + "ms", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function b() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = Math.round(10 * r.A.org("cameraZoomSpeed")) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function y() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = "" + V(r.A.org("lineSplitDelay")), (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function B() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = Math.round(100 * r.A.org("cellsOpacity")) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function F($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "Show " + $[14](r.A.org("showNames")) + " names", (0, x.CFu)(e, "class", "right silent s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function I($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "Show " + $[14](r.A.org("showSkins")) + " skins", (0, x.CFu)(e, "class", "right silent s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function D($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "Show " + $[14](r.A.org("showMass")) + " mass", (0, x.CFu)(e, "class", "right silent s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function N($) {
                    let e, t, s = $[3],
                        i, n, a, o, r, l = E();
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.Qq7)("Shared viewport distance\r\n                    "), l.c(), i = (0, x.xem)(), n = (0, x.ND4)("input"), (0, x.CFu)(n, "type", "range"), (0, x.CFu)(n, "class", "range spacing s-vmzf1o"), (0, x.CFu)(n, "min", "1000"), (0, x.CFu)(n, "max", "20000"), (0, x.CFu)(n, "step", "500"), (0, x.CFu)(n, "data-name", "sharedViewportMaxDistance"), (0, x.CFu)(e, "class", "row spacing s-vmzf1o"), (0, x.CFu)(e, "data-tip", "The max distance between your tabs before shared viewport is disabled")
                        },
                        m(s, c) {
                            (0, x.Yry)(s, e, c), (0, x.BCw)(e, t), l.m(e, null), (0, x.BCw)(e, i), (0, x.BCw)(e, n), o || (r = [(0, x.KTR)(n, "input", $[12]), (0, x.hGc)(a = $[13].call(null, n))], o = !0)
                        },
                        p($, t) {
                            8 & t && (0, x.jXN)(s, s = $[3]) ? (l.d(1), (l = E()).c(), l.m(e, i)) : l.p($, t)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), l.d($), (o = !1, x.oOW)(r)
                        }
                    }
                }

                function E() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = Math.round(r.A.org("sharedViewportMaxDistance") / 100) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function Q($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("span")).textContent = "Show " + $[15](r.A.org("tabStatusMode")), (0, x.CFu)(e, "class", "right silent s-vmzf1o")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }

                function k($) {
                    let e, t = $[1].Hdd($[16](r.A.org("triggerIgnoreSizeBelow"))) + "",
                        s, i;
                    return {
                        c() {
                            e = (0, x.Qq7)("Ignore cells below "), s = (0, x.Qq7)(t), i = (0, x.Qq7)(" mass")
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t), (0, x.Yry)($, s, t), (0, x.Yry)($, i, t)
                        },
                        p($, e) {
                            2 & e && t !== (t = $[1].Hdd($[16](r.A.org("triggerIgnoreSizeBelow"))) + "") && (0, x.iQh)(s, t)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(s), (0, x.YoD)(i))
                        }
                    }
                }

                function T($) {
                    let e, t, s, i, n;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("input"), (0, x.CFu)(t, "type", "range"), (0, x.CFu)(t, "class", "range spacing s-vmzf1o"), (0, x.CFu)(t, "min", "10"), (0, x.CFu)(t, "max", "500"), (0, x.CFu)(t, "step", "1"), (0, x.CFu)(t, "data-name", "triggerIgnoreSizeBelow"), (0, x.CFu)(e, "class", "row spacing s-vmzf1o"), (0, x.CFu)(e, "data-tip", "The minimum amount of mass for the targets new cells before being ignored by the triggerbot")
                        },
                        m(a, o) {
                            (0, x.Yry)(a, e, o), (0, x.BCw)(e, t), i || (n = [(0, x.KTR)(t, "input", $[12]), (0, x.hGc)(s = $[13].call(null, t))], i = !0)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e), (i = !1, x.oOW)(n)
                        }
                    }
                }

                function S() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = "" + r.A.org("triggerAtCells"), (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function Y($) {
                    let e, t, s, i = $[3],
                        n, a, o, r, l, c, h, A, u, d, g, m, C = $[3],
                        p, f, _, w, v, b, y, B, F, I, D, N, E, Q, k, T, S, Y, G, H, U, q, W, K, X, J, P, V, Z, O, $$, $e, $t, $x, $s, $i, $n, $a, $o, $r, $l, $c, $h, $A, $u = z(),
                        $d = R(),
                        $0 = $[7] && M($),
                        $g = $[8] && L($),
                        $m = $[9] && j($);
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("div"), s = (0, x.Qq7)("Scale\r\n                    "), $u.c(), n = (0, x.xem)(), a = (0, x.ND4)("input"), r = (0, x.xem)(), l = (0, x.ND4)("div"), c = (0, x.ND4)("input"), A = (0, x.xem)(), (u = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show chat', d = (0, x.xem)(), g = (0, x.ND4)("div"), m = (0, x.Qq7)("Chat: Message list size\r\n                    "), $d.c(), p = (0, x.xem)(), f = (0, x.ND4)("input"), w = (0, x.xem)(), v = (0, x.ND4)("div"), b = (0, x.ND4)("input"), B = (0, x.xem)(), (F = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show leaderboard', I = (0, x.xem)(), D = (0, x.ND4)("div"), N = (0, x.ND4)("input"), Q = (0, x.xem)(), (k = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Leaderboard: Server name', T = (0, x.xem)(), S = (0, x.ND4)("div"), Y = (0, x.ND4)("input"), H = (0, x.xem)(), (U = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Leaderboard: Exclude bots', q = (0, x.xem)(), W = (0, x.ND4)("div"), K = (0, x.ND4)("input"), J = (0, x.xem)(), (P = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show stats', V = (0, x.xem)(), $0 && $0.c(), Z = (0, x.xem)(), O = (0, x.ND4)("div"), $$ = (0, x.ND4)("input"), $t = (0, x.xem)(), ($x = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show minimap', $s = (0, x.xem)(), $g && $g.c(), $i = (0, x.xem)(), $n = (0, x.ND4)("div"), $a = (0, x.ND4)("input"), $r = (0, x.xem)(), ($l = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show minimap stats', $c = (0, x.xem)(), $m && $m.c(), (0, x.CFu)(a, "type", "range"), (0, x.CFu)(a, "class", "range spacing s-vmzf1o"), (0, x.CFu)(a, "min", "0.5"), (0, x.CFu)(a, "max", "2"), (0, x.CFu)(a, "step", "0.05"), (0, x.CFu)(a, "data-name", "hudScale"), (0, x.CFu)(t, "class", "option spacing s-vmzf1o"), (0, x.CFu)(c, "type", "checkbox"), (0, x.CFu)(c, "id", "show-chat"), (0, x.CFu)(c, "data-name", "showChat"), (0, x.CFu)(c, "class", "s-vmzf1o"), (0, x.CFu)(u, "for", "show-chat"), (0, x.CFu)(u, "class", "s-vmzf1o"), (0, x.CFu)(l, "class", "option s-vmzf1o"), (0, x.CFu)(f, "type", "range"), (0, x.CFu)(f, "class", "range spacing s-vmzf1o"), (0, x.CFu)(f, "min", "200"), (0, x.CFu)(f, "max", "500"), (0, x.CFu)(f, "step", "50"), (0, x.CFu)(f, "data-name", "chatHeight"), (0, x.CFu)(g, "class", "option spacing s-vmzf1o"), (0, x.CFu)(b, "type", "checkbox"), (0, x.CFu)(b, "id", "show-leaderboard"), (0, x.CFu)(b, "data-name", "showLeaderboard"), (0, x.CFu)(b, "class", "s-vmzf1o"), (0, x.CFu)(F, "for", "show-leaderboard"), (0, x.CFu)(F, "class", "s-vmzf1o"), (0, x.CFu)(v, "class", "option s-vmzf1o"), (0, x.CFu)(N, "type", "checkbox"), (0, x.CFu)(N, "id", "show-server-name"), (0, x.CFu)(N, "data-name", "showServerName"), (0, x.CFu)(N, "class", "s-vmzf1o"), (0, x.CFu)(k, "for", "show-server-name"), (0, x.CFu)(k, "class", "s-vmzf1o"), (0, x.CFu)(D, "class", "option s-vmzf1o"), (0, x.CFu)(Y, "type", "checkbox"), (0, x.CFu)(Y, "id", "exclude-bots-on-leaderboard"), (0, x.CFu)(Y, "data-name", "excludeBotsOnLeaderboard"), (0, x.CFu)(Y, "class", "s-vmzf1o"), (0, x.CFu)(U, "for", "exclude-bots-on-leaderboard"), (0, x.CFu)(U, "class", "s-vmzf1o"), (0, x.CFu)(S, "class", "option s-vmzf1o"), (0, x.CFu)(K, "type", "checkbox"), (0, x.CFu)(K, "id", "show-stats"), (0, x.CFu)(K, "data-name", "showStats"), (0, x.CFu)(K, "class", "s-vmzf1o"), (0, x.CFu)(P, "for", "show-stats"), (0, x.CFu)(P, "class", "s-vmzf1o"), (0, x.CFu)(W, "class", "option s-vmzf1o"), (0, x.CFu)($$, "type", "checkbox"), (0, x.CFu)($$, "id", "show-minimap"), (0, x.CFu)($$, "data-name", "minimapEnabled"), (0, x.CFu)($$, "class", "s-vmzf1o"), (0, x.CFu)($x, "for", "show-minimap"), (0, x.CFu)($x, "class", "s-vmzf1o"), (0, x.CFu)(O, "class", "option s-vmzf1o"), (0, x.CFu)($a, "type", "checkbox"), (0, x.CFu)($a, "id", "show-minimap-stats"), (0, x.CFu)($a, "data-name", "showMinimapStats"), (0, x.CFu)($a, "class", "s-vmzf1o"), (0, x.CFu)($l, "for", "show-minimap-stats"), (0, x.CFu)($l, "class", "s-vmzf1o"), (0, x.CFu)($n, "class", "option s-vmzf1o"), (0, x.CFu)(e, "class", "content s-vmzf1o")
                        },
                        m(i, C) {
                            (0, x.Yry)(i, e, C), (0, x.BCw)(e, t), (0, x.BCw)(t, s), $u.m(t, null), (0, x.BCw)(t, n), (0, x.BCw)(t, a), (0, x.BCw)(e, r), (0, x.BCw)(e, l), (0, x.BCw)(l, c), (0, x.BCw)(l, A), (0, x.BCw)(l, u), (0, x.BCw)(e, d), (0, x.BCw)(e, g), (0, x.BCw)(g, m), $d.m(g, null), (0, x.BCw)(g, p), (0, x.BCw)(g, f), (0, x.BCw)(e, w), (0, x.BCw)(e, v), (0, x.BCw)(v, b), (0, x.BCw)(v, B), (0, x.BCw)(v, F), (0, x.BCw)(e, I), (0, x.BCw)(e, D), (0, x.BCw)(D, N), (0, x.BCw)(D, Q), (0, x.BCw)(D, k), (0, x.BCw)(e, T), (0, x.BCw)(e, S), (0, x.BCw)(S, Y), (0, x.BCw)(S, H), (0, x.BCw)(S, U), (0, x.BCw)(e, q), (0, x.BCw)(e, W), (0, x.BCw)(W, K), (0, x.BCw)(W, J), (0, x.BCw)(W, P), (0, x.BCw)(e, V), $0 && $0.m(e, null), (0, x.BCw)(e, Z), (0, x.BCw)(e, O), (0, x.BCw)(O, $$), (0, x.BCw)(O, $t), (0, x.BCw)(O, $x), (0, x.BCw)(e, $s), $g && $g.m(e, null), (0, x.BCw)(e, $i), (0, x.BCw)(e, $n), (0, x.BCw)($n, $a), (0, x.BCw)($n, $r), (0, x.BCw)($n, $l), (0, x.BCw)(e, $c), $m && $m.m(e, null), $h || ($A = [(0, x.KTR)(a, "input", $[12]), (0, x.hGc)(o = $[13].call(null, a)), (0, x.KTR)(c, "change", $[12]), (0, x.hGc)(h = $[13].call(null, c)), (0, x.KTR)(f, "input", $[12]), (0, x.hGc)(_ = $[13].call(null, f)), (0, x.KTR)(b, "change", $[12]), (0, x.hGc)(y = $[13].call(null, b)), (0, x.KTR)(N, "change", $[12]), (0, x.hGc)(E = $[13].call(null, N)), (0, x.KTR)(Y, "change", $[12]), (0, x.hGc)(G = $[13].call(null, Y)), (0, x.KTR)(K, "change", $[12]), (0, x.hGc)(X = $[13].call(null, K)), (0, x.KTR)($$, "change", $[12]), (0, x.hGc)($e = $[13].call(null, $$)), (0, x.KTR)($a, "change", $[12]), (0, x.hGc)($o = $[13].call(null, $a))], $h = !0)
                        },
                        p($, s) {
                            8 & s && (0, x.jXN)(i, i = $[3]) ? ($u.d(1), ($u = z()).c(), $u.m(t, n)) : $u.p($, s), 8 & s && (0, x.jXN)(C, C = $[3]) ? ($d.d(1), ($d = R()).c(), $d.m(g, p)) : $d.p($, s), $[7] ? $0 ? $0.p($, s) : (($0 = M($)).c(), $0.m(e, Z)) : $0 && ($0.d(1), $0 = null), $[8] ? $g ? $g.p($, s) : (($g = L($)).c(), $g.m(e, $i)) : $g && ($g.d(1), $g = null), $[9] ? $m ? $m.p($, s) : (($m = j($)).c(), $m.m(e, null)) : $m && ($m.d(1), $m = null)
                        },
                        d($) {
                            $ && (0, x.YoD)(e), $u.d($), $d.d($), $0 && $0.d(), $g && $g.d(), $m && $m.d(), ($h = !1, x.oOW)($A)
                        }
                    }
                }

                function z() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = Math.round(100 * r.A.org("hudScale")) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function R() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = r.A.org("chatHeight") + "px", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function M($) {
                    let e, t, s, i, n, a, o, r, l, c, h, A, u, d, g, m, C, p, f, _, w, v, b, y, B, F, I, D, N, E, Q, k, T, S, Y, z, R;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("input"), i = (0, x.xem)(), (n = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: FPS', a = (0, x.xem)(), o = (0, x.ND4)("div"), r = (0, x.ND4)("input"), c = (0, x.xem)(), (h = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: Ping', A = (0, x.xem)(), u = (0, x.ND4)("div"), d = (0, x.ND4)("input"), m = (0, x.xem)(), (C = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: Total Mass', p = (0, x.xem)(), f = (0, x.ND4)("div"), _ = (0, x.ND4)("input"), v = (0, x.xem)(), (b = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: Mass', y = (0, x.xem)(), B = (0, x.ND4)("div"), F = (0, x.ND4)("input"), D = (0, x.xem)(), (N = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: Score', E = (0, x.xem)(), Q = (0, x.ND4)("div"), k = (0, x.ND4)("input"), S = (0, x.xem)(), (Y = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Stats: Cell count', (0, x.CFu)(t, "type", "checkbox"), (0, x.CFu)(t, "id", "show-fps"), (0, x.CFu)(t, "data-name", "showFPS"), (0, x.CFu)(t, "class", "s-vmzf1o"), (0, x.CFu)(n, "for", "show-fps"), (0, x.CFu)(n, "class", "s-vmzf1o"), (0, x.CFu)(e, "class", "option s-vmzf1o"), (0, x.CFu)(r, "type", "checkbox"), (0, x.CFu)(r, "id", "show-ping"), (0, x.CFu)(r, "data-name", "showPing"), (0, x.CFu)(r, "class", "s-vmzf1o"), (0, x.CFu)(h, "for", "show-ping"), (0, x.CFu)(h, "class", "s-vmzf1o"), (0, x.CFu)(o, "class", "option s-vmzf1o"), (0, x.CFu)(o, "data-tip", "Ping of the active tab"), (0, x.CFu)(d, "type", "checkbox"), (0, x.CFu)(d, "id", "show-mass"), (0, x.CFu)(d, "data-name", "showPlayerMass"), (0, x.CFu)(d, "class", "s-vmzf1o"), (0, x.CFu)(C, "for", "show-mass"), (0, x.CFu)(C, "class", "s-vmzf1o"), (0, x.CFu)(u, "class", "option s-vmzf1o"), (0, x.CFu)(u, "data-tip", "Current mass of the active tab"), (0, x.CFu)(_, "type", "checkbox"), (0, x.CFu)(_, "id", "show-total-mass"), (0, x.CFu)(_, "data-name", "showTotalPlayerMass"), (0, x.CFu)(_, "class", "s-vmzf1o"), (0, x.CFu)(b, "for", "show-total-mass"), (0, x.CFu)(b, "class", "s-vmzf1o"), (0, x.CFu)(f, "class", "option s-vmzf1o"), (0, x.CFu)(f, "data-tip", "Total mass of both tabs"), (0, x.CFu)(F, "type", "checkbox"), (0, x.CFu)(F, "id", "show-highest-score"), (0, x.CFu)(F, "data-name", "showPlayerScore"), (0, x.CFu)(F, "class", "s-vmzf1o"), (0, x.CFu)(N, "for", "show-highest-score"), (0, x.CFu)(N, "class", "s-vmzf1o"), (0, x.CFu)(B, "class", "option s-vmzf1o"), (0, x.CFu)(B, "data-tip", "Highest score of the active tab"), (0, x.CFu)(k, "type", "checkbox"), (0, x.CFu)(k, "id", "show-cell-count"), (0, x.CFu)(k, "data-name", "showCellCount"), (0, x.CFu)(k, "class", "s-vmzf1o"), (0, x.CFu)(Y, "for", "show-cell-count"), (0, x.CFu)(Y, "class", "s-vmzf1o"), (0, x.CFu)(Q, "class", "option s-vmzf1o"), (0, x.CFu)(Q, "data-tip", "Cell count of the active tab")
                        },
                        m(M, L) {
                            (0, x.Yry)(M, e, L), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n), (0, x.Yry)(M, a, L), (0, x.Yry)(M, o, L), (0, x.BCw)(o, r), (0, x.BCw)(o, c), (0, x.BCw)(o, h), (0, x.Yry)(M, A, L), (0, x.Yry)(M, u, L), (0, x.BCw)(u, d), (0, x.BCw)(u, m), (0, x.BCw)(u, C), (0, x.Yry)(M, p, L), (0, x.Yry)(M, f, L), (0, x.BCw)(f, _), (0, x.BCw)(f, v), (0, x.BCw)(f, b), (0, x.Yry)(M, y, L), (0, x.Yry)(M, B, L), (0, x.BCw)(B, F), (0, x.BCw)(B, D), (0, x.BCw)(B, N), (0, x.Yry)(M, E, L), (0, x.Yry)(M, Q, L), (0, x.BCw)(Q, k), (0, x.BCw)(Q, S), (0, x.BCw)(Q, Y), z || (R = [(0, x.KTR)(t, "change", $[12]), (0, x.hGc)(s = $[13].call(null, t)), (0, x.KTR)(r, "change", $[12]), (0, x.hGc)(l = $[13].call(null, r)), (0, x.KTR)(d, "change", $[12]), (0, x.hGc)(g = $[13].call(null, d)), (0, x.KTR)(_, "change", $[12]), (0, x.hGc)(w = $[13].call(null, _)), (0, x.KTR)(F, "change", $[12]), (0, x.hGc)(I = $[13].call(null, F)), (0, x.KTR)(k, "change", $[12]), (0, x.hGc)(T = $[13].call(null, k))], z = !0)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(a), (0, x.YoD)(o), (0, x.YoD)(A), (0, x.YoD)(u), (0, x.YoD)(p), (0, x.YoD)(f), (0, x.YoD)(y), (0, x.YoD)(B), (0, x.YoD)(E), (0, x.YoD)(Q)), (z = !1, x.oOW)(R)
                        }
                    }
                }

                function L($) {
                    let e, t, s, i, n, a, o, r, l = $[3],
                        c, h, A, u, d, g = G();
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("input"), i = (0, x.xem)(), (n = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Show locations', a = (0, x.xem)(), o = (0, x.ND4)("div"), r = (0, x.Qq7)("Minimap: Resolution\r\n                    "), g.c(), c = (0, x.xem)(), h = (0, x.ND4)("input"), (0, x.CFu)(t, "type", "checkbox"), (0, x.CFu)(t, "id", "show-locations"), (0, x.CFu)(t, "data-name", "minimapLocations"), (0, x.CFu)(t, "class", "s-vmzf1o"), (0, x.CFu)(n, "for", "show-locations"), (0, x.CFu)(n, "class", "s-vmzf1o"), (0, x.CFu)(e, "class", "option s-vmzf1o"), (0, x.CFu)(e, "data-tip", "Show informal grid codes on the player map"), (0, x.CFu)(h, "type", "range"), (0, x.CFu)(h, "class", "range spacing s-vmzf1o"), (0, x.CFu)(h, "min", "0.5"), (0, x.CFu)(h, "max", "2"), (0, x.CFu)(h, "step", "0.05"), (0, x.CFu)(h, "data-name", "minimapResolution"), (0, x.CFu)(o, "class", "option s-vmzf1o"), (0, x.CFu)(o, "data-tip", "Lower for performance, higher for sharpness")
                        },
                        m(l, m) {
                            (0, x.Yry)(l, e, m), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n), (0, x.Yry)(l, a, m), (0, x.Yry)(l, o, m), (0, x.BCw)(o, r), g.m(o, null), (0, x.BCw)(o, c), (0, x.BCw)(o, h), u || (d = [(0, x.KTR)(t, "change", $[12]), (0, x.hGc)(s = $[13].call(null, t)), (0, x.KTR)(h, "input", $[12]), (0, x.KTR)(h, "change", $[19]), (0, x.hGc)(A = $[13].call(null, h))], u = !0)
                        },
                        p($, e) {
                            8 & e && (0, x.jXN)(l, l = $[3]) ? (g.d(1), (g = G()).c(), g.m(o, c)) : g.p($, e)
                        },
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(a), (0, x.YoD)(o)), g.d($), (u = !1, x.oOW)(d)
                        }
                    }
                }

                function G() {
                    let $;
                    return {
                        c() {
                            ($ = (0, x.ND4)("span")).textContent = (100 * r.A.org("minimapResolution")).toFixed(0) + "%", (0, x.CFu)($, "class", "silent right s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, $, t)
                        },
                        p: x.lQ1,
                        d(e) {
                            e && (0, x.YoD)($)
                        }
                    }
                }

                function j($) {
                    let e, t, s, i, n, a, o, r, l, c, h, A, u, d, g, m, C, p, f, _, w, v, b, y, B, F, I, D, N, E, Q, k, T, S, Y, z, R;
                    return {
                        c() {
                            e = (0, x.ND4)("div"), t = (0, x.ND4)("input"), i = (0, x.xem)(), (n = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: System time', a = (0, x.xem)(), o = (0, x.ND4)("div"), r = (0, x.ND4)("input"), c = (0, x.xem)(), (h = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Session time', A = (0, x.xem)(), u = (0, x.ND4)("div"), d = (0, x.ND4)("input"), m = (0, x.xem)(), (C = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Players in server', p = (0, x.xem)(), f = (0, x.ND4)("div"), _ = (0, x.ND4)("input"), v = (0, x.xem)(), (b = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Spectators', y = (0, x.xem)(), B = (0, x.ND4)("div"), F = (0, x.ND4)("input"), D = (0, x.xem)(), (N = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Tag&#39;s total mass', E = (0, x.xem)(), Q = (0, x.ND4)("div"), k = (0, x.ND4)("input"), S = (0, x.xem)(), (Y = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Minimap: Server restart time', (0, x.CFu)(t, "type", "checkbox"), (0, x.CFu)(t, "id", "show-system-time"), (0, x.CFu)(t, "data-name", "showClock"), (0, x.CFu)(t, "class", "s-vmzf1o"), (0, x.CFu)(n, "for", "show-system-time"), (0, x.CFu)(n, "class", "s-vmzf1o"), (0, x.CFu)(e, "class", "option s-vmzf1o"), (0, x.CFu)(r, "type", "checkbox"), (0, x.CFu)(r, "id", "show-session-time"), (0, x.CFu)(r, "data-name", "showSessionTime"), (0, x.CFu)(r, "class", "s-vmzf1o"), (0, x.CFu)(h, "for", "show-session-time"), (0, x.CFu)(h, "class", "s-vmzf1o"), (0, x.CFu)(o, "class", "option s-vmzf1o"), (0, x.CFu)(d, "type", "checkbox"), (0, x.CFu)(d, "id", "show-player-count"), (0, x.CFu)(d, "data-name", "showPlayerCount"), (0, x.CFu)(d, "class", "s-vmzf1o"), (0, x.CFu)(C, "for", "show-player-count"), (0, x.CFu)(C, "class", "s-vmzf1o"), (0, x.CFu)(u, "class", "option s-vmzf1o"), (0, x.CFu)(_, "type", "checkbox"), (0, x.CFu)(_, "id", "show-spectators"), (0, x.CFu)(_, "data-name", "showSpectators"), (0, x.CFu)(_, "class", "s-vmzf1o"), (0, x.CFu)(b, "for", "show-spectators"), (0, x.CFu)(b, "class", "s-vmzf1o"), (0, x.CFu)(f, "class", "option s-vmzf1o"), (0, x.CFu)(F, "type", "checkbox"), (0, x.CFu)(F, "id", "show-tag-total-score"), (0, x.CFu)(F, "data-name", "showTagTotalMass"), (0, x.CFu)(F, "data-tip", "The total mass of your active tab's tag, this does not work for global tag"), (0, x.CFu)(F, "class", "s-vmzf1o"), (0, x.CFu)(N, "for", "show-tag-total-score"), (0, x.CFu)(N, "class", "s-vmzf1o"), (0, x.CFu)(B, "class", "option s-vmzf1o"), (0, x.CFu)(k, "type", "checkbox"), (0, x.CFu)(k, "id", "show-restart-time"), (0, x.CFu)(k, "data-name", "showRestartTiming"), (0, x.CFu)(k, "class", "s-vmzf1o"), (0, x.CFu)(Y, "for", "show-restart-time"), (0, x.CFu)(Y, "class", "s-vmzf1o"), (0, x.CFu)(Q, "class", "option s-vmzf1o")
                        },
                        m(M, L) {
                            (0, x.Yry)(M, e, L), (0, x.BCw)(e, t), (0, x.BCw)(e, i), (0, x.BCw)(e, n), (0, x.Yry)(M, a, L), (0, x.Yry)(M, o, L), (0, x.BCw)(o, r), (0, x.BCw)(o, c), (0, x.BCw)(o, h), (0, x.Yry)(M, A, L), (0, x.Yry)(M, u, L), (0, x.BCw)(u, d), (0, x.BCw)(u, m), (0, x.BCw)(u, C), (0, x.Yry)(M, p, L), (0, x.Yry)(M, f, L), (0, x.BCw)(f, _), (0, x.BCw)(f, v), (0, x.BCw)(f, b), (0, x.Yry)(M, y, L), (0, x.Yry)(M, B, L), (0, x.BCw)(B, F), (0, x.BCw)(B, D), (0, x.BCw)(B, N), (0, x.Yry)(M, E, L), (0, x.Yry)(M, Q, L), (0, x.BCw)(Q, k), (0, x.BCw)(Q, S), (0, x.BCw)(Q, Y), z || (R = [(0, x.KTR)(t, "change", $[12]), (0, x.hGc)(s = $[13].call(null, t)), (0, x.KTR)(r, "change", $[12]), (0, x.hGc)(l = $[13].call(null, r)), (0, x.KTR)(d, "change", $[12]), (0, x.hGc)(g = $[13].call(null, d)), (0, x.KTR)(_, "change", $[12]), (0, x.hGc)(w = $[13].call(null, _)), (0, x.KTR)(F, "change", $[12]), (0, x.hGc)(I = $[13].call(null, F)), (0, x.KTR)(k, "change", $[12]), (0, x.hGc)(T = $[13].call(null, k))], z = !0)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && ((0, x.YoD)(e), (0, x.YoD)(a), (0, x.YoD)(o), (0, x.YoD)(A), (0, x.YoD)(u), (0, x.YoD)(p), (0, x.YoD)(f), (0, x.YoD)(y), (0, x.YoD)(B), (0, x.YoD)(E), (0, x.YoD)(Q)), (z = !1, x.oOW)(R)
                        }
                    }
                }

                function H($) {
                    var e;
                    let t, s, i, n, a, o, r, c, A, u, E, z, R, M, L, G, j, H, U, q, W = h.utils.isWebGLSupported(),
                        K, X, J, P, V, Z, O, $$, $e, $t = $[3],
                        $x, $s, $i, $n, $a, $o, $r = $[3],
                        $l, $c, $h, $A, $u, $d, $0, $g, $m, $C, $p, $f, $_, $w, $v, $b, $y, $B, $F, $I, $D, $2, $N, $E = $[3],
                        $Q, $k, $T, $S, $Y, $z, $R, $5, $6, $M, $L, $1, $9, $3, $G, $4, $j, $H, $U, $7, $q, $W = $[3],
                        $K, $X, $J, $P, $V, $Z, $O = $[3],
                        $8, e$, ee, et, ex, es, ei = $[3],
                        en, ea, eo, er, el, ec, eh = $[3],
                        eA, eu, ed, e0, eg, em, eC = $[3],
                        ep, ef, e_, ew, ev, eb, ey = $[3],
                        eB, eF, eI, eD, e2, eN, eE, eQ, ek, eT, eS = $[3],
                        eY, ez, eR, e5, e6, eM, eL, e1, e9 = $[3],
                        e3, eG, e4, ej, eH, eU = $[3],
                        e7, eq, eW, eK, eX, eJ = $[3],
                        eP, eV, eZ, eO, e8, t$, te, tt, tx, ts, ti, tn, ta, to, tr, tl, tc, th, tA, tu, td, t0, tg, tm, tC, tp, tf, t_, tw, tv, tb, ty, tB, tF, tI, tD, t2, tN, tE, tQ, tk, tT, tS, tY, tz, tR, t5, t6, tM, tL, t1, t9, t3, tG, t4, tj, tH, tU, t7, tq, tW, tK, tX, tJ, tP, tV, tZ, tO, t8, x$, xe, xt, xx, xs, xi, xn, xa, xo, xr, xl, xc, xh, xA, xu, xd, x0, xg, xm, xC, xp, xf, x_, xw, xv, xb = $[3],
                        xy, xB, xF, xI, xD, x2, xN, xE, xQ, xk, xT, xS, xY = $[3],
                        xz, xR, x5, x6, xM = $[3],
                        xL, x1, x9, x3, xG, x4, xj, xH, xU, x7, xq, xW, xK, xX = (h.utils.isWebGLSupported() ? g : d)($),
                        xJ = W && (e = $, {
                            c() {
                                t = (0, x.ND4)("div"), s = (0, x.ND4)("input"), n = (0, x.xem)(), (a = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Use GPU rendering', (0, x.CFu)(s, "type", "checkbox"), (0, x.CFu)(s, "id", "web-gl"), (0, x.CFu)(s, "data-name", "useWebGL"), (0, x.CFu)(s, "class", "s-vmzf1o"), (0, x.CFu)(a, "for", "web-gl"), (0, x.CFu)(a, "class", "s-vmzf1o"), (0, x.CFu)(t, "class", "option s-vmzf1o"), (0, x.CFu)(t, "data-tip", "Detrimental to performance, heavy performance loss is encountered without a GPU")
                            },
                            m($, l) {
                                (0, x.Yry)($, t, l), (0, x.BCw)(t, s), (0, x.BCw)(t, n), (0, x.BCw)(t, a), o || (r = [(0, x.KTR)(s, "change", e[12]), (0, x.hGc)(i = e[13].call(null, s))], o = !0)
                            },
                            p: x.lQ1,
                            d($) {
                                $ && (0, x.YoD)(t), (o = !1, x.oOW)(r)
                            }
                        }),
                        xP = m(),
                        xV = C(),
                        xZ = p(),
                        xO = f(),
                        x8 = _(),
                        s$ = w(),
                        se = v(),
                        st = b(),
                        sx = y(),
                        ss = B(),
                        si = F($),
                        sn = I($),
                        sa = D($),
                        so = $[4] && N($),
                        sr = Q($),
                        sl = k($),
                        sc = $[5] && T($),
                        sh = S(),
                        sA = $[6] && Y($);
                    return {
                        c() {
                            c = (0, x.ND4)("div"), A = (0, x.ND4)("div"), (u = (0, x.ND4)("span")).textContent = "Settings", E = (0, x.xem)(), (z = (0, x.ND4)("button")).innerHTML = '<i class="fal fa-times"></i>', R = (0, x.xem)(), M = (0, x.ND4)("div"), L = (0, x.ND4)("div"), G = (0, x.ND4)("div"), (j = (0, x.ND4)("span")).textContent = "Renderer", H = (0, x.xem)(), xX.c(), U = (0, x.xem)(), q = (0, x.ND4)("div"), xJ && xJ.c(), K = (0, x.xem)(), X = (0, x.ND4)("div"), J = (0, x.ND4)("input"), V = (0, x.xem)(), (Z = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Use anti-aliasing', O = (0, x.xem)(), $$ = (0, x.ND4)("div"), $e = (0, x.Qq7)("Renderer resolution\r\n                    "), xP.c(), $x = (0, x.xem)(), $s = (0, x.ND4)("input"), $n = (0, x.xem)(), $a = (0, x.ND4)("div"), $o = (0, x.Qq7)("Text hiding threshold\r\n                    "), xV.c(), $l = (0, x.xem)(), $c = (0, x.ND4)("input"), $A = (0, x.xem)(), $u = (0, x.ND4)("div"), $d = (0, x.ND4)("div"), ($0 = (0, x.ND4)("span")).textContent = "Game", $g = (0, x.xem)(), ($m = (0, x.ND4)("span")).textContent = "v" + l.rE, $C = (0, x.xem)(), $p = (0, x.ND4)("div"), $f = (0, x.ND4)("div"), $_ = (0, x.ND4)("input"), $v = (0, x.xem)(), ($b = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Auto zoom', $y = (0, x.xem)(), $B = (0, x.ND4)("div"), $F = (0, x.ND4)("input"), $D = (0, x.xem)(), ($2 = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Remember ejecting', $N = (0, x.xem)(), xZ.c(), $Q = (0, x.xem)(), $k = (0, x.ND4)("div"), $T = (0, x.ND4)("input"), $Y = (0, x.xem)(), ($z = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Auto respawn', $R = (0, x.xem)(), $5 = (0, x.ND4)("div"), $6 = (0, x.ND4)("input"), $L = (0, x.xem)(), ($1 = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Soft mouse freeze', $9 = (0, x.xem)(), $3 = (0, x.ND4)("div"), $G = (0, x.ND4)("input"), $j = (0, x.xem)(), ($H = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Delayed doublesplit hotkey', $U = (0, x.xem)(), $7 = (0, x.ND4)("div"), $q = (0, x.Qq7)("Draw delay\r\n                    "), xO.c(), $K = (0, x.xem)(), $X = (0, x.ND4)("input"), $P = (0, x.xem)(), $V = (0, x.ND4)("div"), $Z = (0, x.Qq7)("Camera panning delay\r\n                    "), x8.c(), $8 = (0, x.xem)(), e$ = (0, x.ND4)("input"), et = (0, x.xem)(), ex = (0, x.ND4)("div"), es = (0, x.Qq7)("Camera switch delay\r\n                    "), s$.c(), en = (0, x.xem)(), ea = (0, x.ND4)("input"), er = (0, x.xem)(), el = (0, x.ND4)("div"), ec = (0, x.Qq7)("Camera zooming delay\r\n                    "), se.c(), eA = (0, x.xem)(), eu = (0, x.ND4)("input"), e0 = (0, x.xem)(), eg = (0, x.ND4)("div"), em = (0, x.Qq7)("Scroll zoom rate\r\n                    "), st.c(), ep = (0, x.xem)(), ef = (0, x.ND4)("input"), ew = (0, x.xem)(), ev = (0, x.ND4)("div"), eb = (0, x.Qq7)("Linesplit auto unlock delay\r\n                    "), sx.c(), eB = (0, x.xem)(), eF = (0, x.ND4)("input"), eD = (0, x.xem)(), e2 = (0, x.ND4)("div"), (eN = (0, x.ND4)("div")).innerHTML = '<span class="label s-vmzf1o">Cells</span>', eE = (0, x.xem)(), eQ = (0, x.ND4)("div"), ek = (0, x.ND4)("div"), eT = (0, x.Qq7)("Cells opacity\r\n                    "), ss.c(), eY = (0, x.xem)(), ez = (0, x.ND4)("input"), e5 = (0, x.xem)(), e6 = (0, x.ND4)("div"), eM = (0, x.ND4)("input"), e1 = (0, x.xem)(), si.c(), e3 = (0, x.xem)(), eG = (0, x.ND4)("div"), e4 = (0, x.ND4)("input"), eH = (0, x.xem)(), sn.c(), e7 = (0, x.xem)(), eq = (0, x.ND4)("div"), eW = (0, x.ND4)("input"), eX = (0, x.xem)(), sa.c(), eP = (0, x.xem)(), eV = (0, x.ND4)("div"), eZ = (0, x.ND4)("input"), e8 = (0, x.xem)(), (t$ = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show my own name', te = (0, x.xem)(), tt = (0, x.ND4)("div"), tx = (0, x.ND4)("input"), ti = (0, x.xem)(), (tn = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show my own skin', ta = (0, x.xem)(), to = (0, x.ND4)("div"), tr = (0, x.ND4)("input"), tc = (0, x.xem)(), (th = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show my own mass', tA = (0, x.xem)(), tu = (0, x.ND4)("div"), td = (0, x.ND4)("input"), tg = (0, x.xem)(), (tm = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show crown', tC = (0, x.xem)(), tp = (0, x.ND4)("div"), tf = (0, x.ND4)("input"), tw = (0, x.xem)(), (tv = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show food', tb = (0, x.xem)(), ty = (0, x.ND4)("div"), tB = (0, x.ND4)("input"), tI = (0, x.xem)(), (tD = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show player animation', t2 = (0, x.xem)(), tN = (0, x.ND4)("div"), tE = (0, x.ND4)("input"), tk = (0, x.xem)(), (tT = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show ejected mass animation', tS = (0, x.xem)(), tY = (0, x.ND4)("div"), tz = (0, x.ND4)("input"), t5 = (0, x.xem)(), (t6 = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Show player eaten animation', tM = (0, x.xem)(), tL = (0, x.ND4)("div"), (t1 = (0, x.ND4)("div")).innerHTML = '<span class="label s-vmzf1o">Tabs</span>', t9 = (0, x.xem)(), t3 = (0, x.ND4)("div"), tG = (0, x.ND4)("div"), t4 = (0, x.ND4)("input"), tH = (0, x.xem)(), (tU = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Use shared viewport', t7 = (0, x.xem)(), so && so.c(), tq = (0, x.xem)(), tW = (0, x.ND4)("div"), tK = (0, x.ND4)("input"), tJ = (0, x.xem)(), (tP = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Link tab names', tV = (0, x.xem)(), tZ = (0, x.ND4)("div"), tO = (0, x.ND4)("input"), x$ = (0, x.xem)(), (xe = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Link tab skins', xt = (0, x.xem)(), xx = (0, x.ND4)("div"), xs = (0, x.ND4)("input"), xn = (0, x.xem)(), (xa = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Link tab tags', xo = (0, x.xem)(), xr = (0, x.ND4)("div"), xl = (0, x.ND4)("input"), xh = (0, x.xem)(), (xA = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Tab control mode', xu = (0, x.xem)(), xd = (0, x.ND4)("div"), x0 = (0, x.ND4)("input"), xm = (0, x.xem)(), (xC = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> Connect both tabs at once', xp = (0, x.xem)(), xf = (0, x.ND4)("div"), x_ = (0, x.ND4)("input"), xv = (0, x.xem)(), sr.c(), xy = (0, x.xem)(), xB = (0, x.ND4)("div"), (xF = (0, x.ND4)("div")).innerHTML = '<span class="label s-vmzf1o">Triggerbot</span>', xI = (0, x.xem)(), xD = (0, x.ND4)("div"), x2 = (0, x.ND4)("div"), xN = (0, x.ND4)("input"), xQ = (0, x.xem)(), xk = (0, x.ND4)("label"), xT = (0, x.ND4)("span"), xS = (0, x.xem)(), sl.c(), xz = (0, x.xem)(), sc && sc.c(), xR = (0, x.xem)(), x5 = (0, x.ND4)("div"), x6 = (0, x.Qq7)("Cells expected\r\n                    "), sh.c(), xL = (0, x.xem)(), x1 = (0, x.ND4)("input"), x3 = (0, x.xem)(), xG = (0, x.ND4)("div"), x4 = (0, x.ND4)("div"), xj = (0, x.ND4)("input"), xU = (0, x.xem)(), (x7 = (0, x.ND4)("label")).innerHTML = '<span class="s-vmzf1o"></span> HUD', xq = (0, x.xem)(), sA && sA.c(), (0, x.CFu)(u, "class", "label s-vmzf1o"), (0, x.CFu)(z, "class", "close button s-vmzf1o"), (0, x.CFu)(A, "class", "main-header s-vmzf1o"), (0, x.CFu)(j, "class", "label s-vmzf1o"), (0, x.CFu)(G, "class", "header s-vmzf1o"), (0, x.CFu)(J, "type", "checkbox"), (0, x.CFu)(J, "id", "use-anti-aliasing"), (0, x.CFu)(J, "data-name", "useAntialiasing"), (0, x.CFu)(J, "class", "s-vmzf1o"), (0, x.CFu)(Z, "for", "use-anti-aliasing"), (0, x.CFu)(Z, "class", "s-vmzf1o"), (0, x.CFu)(X, "class", "option s-vmzf1o"), (0, x.CFu)(X, "data-tip", "Enable for sharpness, performance is heavily impacted"), (0, x.CFu)($s, "type", "range"), (0, x.CFu)($s, "class", "range spacing s-vmzf1o"), (0, x.CFu)($s, "min", "0.5"), (0, x.CFu)($s, "max", "3"), (0, x.CFu)($s, "step", "0.05"), (0, x.CFu)($s, "data-name", "gameResolution"), (0, x.CFu)($$, "class", "option s-vmzf1o"), (0, x.CFu)($$, "data-tip", "Lower for performance, higher for sharpness"), (0, x.CFu)($c, "type", "range"), (0, x.CFu)($c, "class", "range spacing s-vmzf1o"), (0, x.CFu)($c, "min", "10"), (0, x.CFu)($c, "max", "60"), (0, x.CFu)($c, "step", "5"), (0, x.CFu)($c, "data-name", "smallTextThreshold"), (0, x.CFu)($a, "class", "option s-vmzf1o"), (0, x.CFu)($a, "data-tip", "Text on smaller cells will be hidden for performance"), (0, x.CFu)(q, "class", "content s-vmzf1o"), (0, x.CFu)(L, "class", "section s-vmzf1o"), (0, x.CFu)($0, "class", "label s-vmzf1o"), (0, x.CFu)($m, "class", "silent right s-vmzf1o"), (0, x.CFu)($d, "class", "header s-vmzf1o"), (0, x.CFu)($_, "type", "checkbox"), (0, x.CFu)($_, "id", "auto-zoom"), (0, x.CFu)($_, "data-name", "autoZoom"), (0, x.CFu)($_, "class", "s-vmzf1o"), (0, x.CFu)($b, "for", "auto-zoom"), (0, x.CFu)($b, "class", "s-vmzf1o"), (0, x.CFu)($f, "class", "option s-vmzf1o"), (0, x.CFu)($f, "data-tip", "Zooms out automatically as you gain mass"), (0, x.CFu)($F, "type", "checkbox"), (0, x.CFu)($F, "id", "remember-ejecting"), (0, x.CFu)($F, "data-name", "rememberEjecting"), (0, x.CFu)($F, "class", "s-vmzf1o"), (0, x.CFu)($2, "for", "remember-ejecting"), (0, x.hgi)($2, "margin-bottom", "3px"), (0, x.CFu)($2, "class", "s-vmzf1o"), (0, x.CFu)($B, "class", "option s-vmzf1o"), (0, x.CFu)($T, "type", "checkbox"), (0, x.CFu)($T, "id", "auto-respawn"), (0, x.CFu)($T, "data-name", "autoRespawn"), (0, x.CFu)($T, "class", "s-vmzf1o"), (0, x.CFu)($z, "for", "auto-respawn"), (0, x.CFu)($z, "class", "s-vmzf1o"), (0, x.CFu)($k, "class", "option s-vmzf1o"), (0, x.CFu)($k, "data-tip", "Automatically spawn each tabs upon death if the main menu isn't open"), (0, x.CFu)($6, "type", "checkbox"), (0, x.CFu)($6, "id", "soft-mouse-freeze"), (0, x.CFu)($6, "data-name", "mouseFreezeSoft"), (0, x.CFu)($6, "class", "s-vmzf1o"), (0, x.CFu)($1, "for", "soft-mouse-freeze"), (0, x.CFu)($1, "class", "s-vmzf1o"), (0, x.CFu)($5, "class", "option s-vmzf1o"), (0, x.CFu)($5, "data-tip", 'Moving your mouse cancels the "Freeze mouse" hotkey on the active tab if enabled'), (0, x.CFu)($G, "type", "checkbox"), (0, x.CFu)($G, "id", "delay-doublesplit"), (0, x.CFu)($G, "data-name", "delayDoublesplit"), (0, x.CFu)($G, "class", "s-vmzf1o"), (0, x.CFu)($H, "for", "delay-doublesplit"), (0, x.CFu)($H, "class", "s-vmzf1o"), (0, x.CFu)($3, "class", "option s-vmzf1o"), (0, x.CFu)($3, "data-tip", "Flicking may be more accurate if enabled"), (0, x.CFu)($X, "type", "range"), (0, x.CFu)($X, "class", "range spacing s-vmzf1o"), (0, x.CFu)($X, "min", "10"), (0, x.CFu)($X, "max", "300"), (0, x.CFu)($X, "step", "5"), (0, x.CFu)($X, "data-name", "drawDelay"), (0, x.CFu)($7, "class", "option s-vmzf1o"), (0, x.CFu)($7, "data-tip", "Lower is more responsive, higher is smoother"), (0, x.CFu)(e$, "type", "range"), (0, x.CFu)(e$, "class", "range spacing s-vmzf1o"), (0, x.CFu)(e$, "min", "10"), (0, x.CFu)(e$, "max", "1000"), (0, x.CFu)(e$, "step", "10"), (0, x.CFu)(e$, "data-name", "cameraMoveDelay"), (0, x.CFu)($V, "class", "option s-vmzf1o"), (0, x.CFu)($V, "data-tip", "How fast the camera follows your tab(s) while moving"), (0, x.CFu)(ea, "type", "range"), (0, x.CFu)(ea, "class", "range spacing s-vmzf1o"), (0, x.CFu)(ea, "min", "10"), (0, x.CFu)(ea, "max", "1000"), (0, x.CFu)(ea, "step", "10"), (0, x.CFu)(ea, "data-name", "cameraSwitchDelay"), (0, x.CFu)(ex, "class", "option s-vmzf1o"), (0, x.CFu)(ex, "data-tip", "How fast the camera moves to your active tab upon tab switching"), (0, x.CFu)(eu, "type", "range"), (0, x.CFu)(eu, "class", "range spacing s-vmzf1o"), (0, x.CFu)(eu, "min", "10"), (0, x.CFu)(eu, "max", "1000"), (0, x.CFu)(eu, "step", "10"), (0, x.CFu)(eu, "data-name", "cameraZoomDelay"), (0, x.CFu)(el, "class", "option s-vmzf1o"), (0, x.CFu)(el, "data-tip", "How fast the camera is zoomed in/out upon user input"), (0, x.CFu)(ef, "type", "range"), (0, x.CFu)(ef, "class", "range spacing s-vmzf1o"), (0, x.CFu)(ef, "min", "1"), (0, x.CFu)(ef, "max", "20"), (0, x.CFu)(ef, "step", "1"), (0, x.CFu)(ef, "data-name", "cameraZoomSpeed"), (0, x.CFu)(eg, "class", "option s-vmzf1o"), (0, x.CFu)(eg, "data-tip", "Responsiveness for zooming with scroll-wheel"), (0, x.CFu)(eF, "type", "range"), (0, x.CFu)(eF, "class", "range spacing s-vmzf1o"), (0, x.CFu)(eF, "min", "300"), (0, x.CFu)(eF, "max", "5000"), (0, x.CFu)(eF, "step", "50"), (0, x.CFu)(eF, "data-name", "lineSplitDelay"), (0, x.CFu)(ev, "class", "option s-vmzf1o"), (0, x.CFu)(ev, "data-tip", 'Delay for automatically disabling "Freeze mouse" after line-splitting'), (0, x.CFu)($p, "class", "content s-vmzf1o"), (0, x.CFu)($u, "class", "section s-vmzf1o"), (0, x.CFu)(eN, "class", "header s-vmzf1o"), (0, x.CFu)(ez, "type", "range"), (0, x.CFu)(ez, "class", "range spacing s-vmzf1o"), (0, x.CFu)(ez, "min", "0.1"), (0, x.CFu)(ez, "max", "1"), (0, x.CFu)(ez, "step", "0.05"), (0, x.CFu)(ez, "data-name", "cellsOpacity"), (0, x.CFu)(ek, "class", "row spacing s-vmzf1o"), (0, x.CFu)(ek, "data-tip", "How opaque cells in-game are"), (0, x.CFu)(eM, "type", "range"), (0, x.CFu)(eM, "class", "left range s-vmzf1o"), (0, x.CFu)(eM, "min", "0"), (0, x.CFu)(eM, "max", "2"), (0, x.CFu)(eM, "step", "1"), (0, x.CFu)(eM, "data-name", "showNames"), (0, x.CFu)(e6, "class", "inline-row s-vmzf1o"), (0, x.CFu)(e4, "type", "range"), (0, x.CFu)(e4, "class", "left range s-vmzf1o"), (0, x.CFu)(e4, "min", "0"), (0, x.CFu)(e4, "max", "2"), (0, x.CFu)(e4, "step", "1"), (0, x.CFu)(e4, "data-name", "showSkins"), (0, x.CFu)(eG, "class", "inline-row s-vmzf1o"), (0, x.CFu)(eW, "type", "range"), (0, x.CFu)(eW, "class", "left range s-vmzf1o"), (0, x.CFu)(eW, "min", "0"), (0, x.CFu)(eW, "max", "2"), (0, x.CFu)(eW, "step", "1"), (0, x.CFu)(eW, "data-name", "showMass"), (0, x.CFu)(eq, "class", "inline-row s-vmzf1o"), (0, x.CFu)(eZ, "type", "checkbox"), (0, x.CFu)(eZ, "id", "show-own-name"), (0, x.CFu)(eZ, "data-name", "showOwnName"), (0, x.CFu)(eZ, "class", "s-vmzf1o"), (0, x.CFu)(t$, "for", "show-own-name"), (0, x.CFu)(t$, "class", "s-vmzf1o"), (0, x.CFu)(eV, "class", "option s-vmzf1o"), (0, x.CFu)(tx, "type", "checkbox"), (0, x.CFu)(tx, "id", "show-own-skin"), (0, x.CFu)(tx, "data-name", "showOwnSkin"), (0, x.CFu)(tx, "class", "s-vmzf1o"), (0, x.CFu)(tn, "for", "show-own-skin"), (0, x.CFu)(tn, "class", "s-vmzf1o"), (0, x.CFu)(tt, "class", "option s-vmzf1o"), (0, x.CFu)(tr, "type", "checkbox"), (0, x.CFu)(tr, "id", "show-own-mass"), (0, x.CFu)(tr, "data-name", "showOwnMass"), (0, x.CFu)(tr, "class", "s-vmzf1o"), (0, x.CFu)(th, "for", "show-own-mass"), (0, x.CFu)(th, "class", "s-vmzf1o"), (0, x.CFu)(to, "class", "option s-vmzf1o"), (0, x.CFu)(td, "type", "checkbox"), (0, x.CFu)(td, "id", "show-crown"), (0, x.CFu)(td, "data-name", "showCrown"), (0, x.CFu)(td, "class", "s-vmzf1o"), (0, x.CFu)(tm, "for", "show-crown"), (0, x.CFu)(tm, "class", "s-vmzf1o"), (0, x.CFu)(tu, "class", "option s-vmzf1o"), (0, x.CFu)(tf, "type", "checkbox"), (0, x.CFu)(tf, "id", "show-food"), (0, x.CFu)(tf, "data-name", "foodVisible"), (0, x.CFu)(tf, "class", "s-vmzf1o"), (0, x.CFu)(tv, "for", "show-food"), (0, x.CFu)(tv, "class", "s-vmzf1o"), (0, x.CFu)(tp, "class", "option s-vmzf1o"), (0, x.CFu)(tB, "type", "checkbox"), (0, x.CFu)(tB, "id", "show-player-animation"), (0, x.CFu)(tB, "data-name", "animatePlayerCells"), (0, x.CFu)(tB, "class", "s-vmzf1o"), (0, x.CFu)(tD, "for", "show-player-animation"), (0, x.CFu)(tD, "class", "s-vmzf1o"), (0, x.CFu)(ty, "class", "option s-vmzf1o"), (0, x.CFu)(tE, "type", "checkbox"), (0, x.CFu)(tE, "id", "show-ejected-animation"), (0, x.CFu)(tE, "data-name", "animateEjectedCells"), (0, x.CFu)(tE, "class", "s-vmzf1o"), (0, x.CFu)(tT, "for", "show-ejected-animation"), (0, x.CFu)(tT, "class", "s-vmzf1o"), (0, x.CFu)(tN, "class", "option s-vmzf1o"), (0, x.CFu)(tz, "type", "checkbox"), (0, x.CFu)(tz, "id", "show-eat-animation"), (0, x.CFu)(tz, "data-name", "eatAnimation"), (0, x.CFu)(tz, "class", "s-vmzf1o"), (0, x.CFu)(t6, "for", "show-eat-animation"), (0, x.CFu)(t6, "class", "s-vmzf1o"), (0, x.CFu)(tY, "class", "option s-vmzf1o"), (0, x.CFu)(eQ, "class", "content s-vmzf1o"), (0, x.CFu)(e2, "class", "section s-vmzf1o"), (0, x.CFu)(t1, "class", "header s-vmzf1o"), (0, x.CFu)(t4, "type", "checkbox"), (0, x.CFu)(t4, "id", "use-shared-viewport"), (0, x.CFu)(t4, "data-name", "useSharedViewport"), (0, x.CFu)(t4, "class", "s-vmzf1o"), (0, x.CFu)(tU, "for", "use-shared-viewport"), (0, x.CFu)(tU, "class", "s-vmzf1o"), (0, x.CFu)(tG, "class", "option s-vmzf1o"), (0, x.CFu)(tG, "data-tip", "When in range, tabs will share the same viewport"), (0, x.CFu)(tK, "type", "checkbox"), (0, x.CFu)(tK, "id", "link-tab-names"), (0, x.CFu)(tK, "data-name", "linkTabNames"), (0, x.CFu)(tK, "class", "s-vmzf1o"), (0, x.CFu)(tP, "for", "link-tab-names"), (0, x.CFu)(tP, "class", "s-vmzf1o"), (0, x.CFu)(tW, "class", "option s-vmzf1o"), (0, x.CFu)(tW, "data-tip", "When enabled, tabs will share the same name"), (0, x.CFu)(tO, "type", "checkbox"), (0, x.CFu)(tO, "id", "link-tab-skins"), (0, x.CFu)(tO, "data-name", "linkTabSkins"), (0, x.CFu)(tO, "class", "s-vmzf1o"), (0, x.CFu)(xe, "for", "link-tab-skins"), (0, x.CFu)(xe, "class", "s-vmzf1o"), (0, x.CFu)(tZ, "class", "option s-vmzf1o"), (0, x.CFu)(tZ, "data-tip", "When enabled, tabs will share the same skin"), (0, x.CFu)(xs, "type", "checkbox"), (0, x.CFu)(xs, "id", "link-tab-tags"), (0, x.CFu)(xs, "data-name", "linkTabTags"), (0, x.CFu)(xs, "class", "s-vmzf1o"), (0, x.CFu)(xa, "for", "link-tab-tags"), (0, x.CFu)(xa, "class", "s-vmzf1o"), (0, x.CFu)(xx, "class", "option s-vmzf1o"), (0, x.CFu)(xx, "data-tip", "When enabled, tabs will share the same tag"), (0, x.CFu)(xl, "type", "checkbox"), (0, x.CFu)(xl, "id", "switch-control-mode"), (0, x.CFu)(xl, "data-name", "switchControlMode"), (0, x.CFu)(xl, "class", "s-vmzf1o"), (0, x.CFu)(xA, "for", "switch-control-mode"), (0, x.CFu)(xA, "class", "s-vmzf1o"), (0, x.CFu)(xr, "class", "option s-vmzf1o"), (0, x.CFu)(xr, "data-tip", "When enabled, your inactive tab will always follow your mouse with its own set of hotkeys"), (0, x.CFu)(x0, "type", "checkbox"), (0, x.CFu)(x0, "id", "join-tabs-together"), (0, x.CFu)(x0, "data-name", "joinTabsTogether"), (0, x.CFu)(x0, "class", "s-vmzf1o"), (0, x.CFu)(xC, "for", "join-tabs-together"), (0, x.CFu)(xC, "class", "s-vmzf1o"), (0, x.CFu)(xd, "class", "option s-vmzf1o"), (0, x.CFu)(xd, "data-tip", "Both of your tabs will join the server at the same time whenever you join a server"), (0, x.CFu)(x_, "type", "range"), (0, x.CFu)(x_, "class", "left range s-vmzf1o"), (0, x.CFu)(x_, "min", "0"), (0, x.CFu)(x_, "max", "2"), (0, x.CFu)(x_, "step", "1"), (0, x.CFu)(x_, "data-name", "tabStatusMode"), (0, x.CFu)(xf, "class", "inline-row spacing s-vmzf1o"), (0, x.CFu)(xf, "data-tip", "What mode to show whether or not your tab is focused or not"), (0, x.CFu)(t3, "class", "content s-vmzf1o"), (0, x.CFu)(tL, "class", "section s-vmzf1o"), (0, x.CFu)(xF, "class", "header s-vmzf1o"), (0, x.CFu)(xN, "type", "checkbox"), (0, x.CFu)(xN, "id", "ignore-size-enabled"), (0, x.CFu)(xN, "data-name", "triggerIgnoreSizeEnabled"), (0, x.CFu)(xN, "class", "s-vmzf1o"), (0, x.CFu)(xT, "class", "s-vmzf1o"), (0, x.CFu)(xk, "for", "ignore-size-enabled"), (0, x.CFu)(xk, "class", "s-vmzf1o"), (0, x.CFu)(x2, "class", "option s-vmzf1o"), (0, x.CFu)(x2, "data-tip", "Whether or not to ignore new cells when their mass is below the specified threshold"), (0, x.CFu)(x1, "type", "range"), (0, x.CFu)(x1, "class", "range spacing s-vmzf1o"), (0, x.CFu)(x1, "min", "1"), (0, x.CFu)(x1, "max", "256"), (0, x.CFu)(x1, "step", "1"), (0, x.CFu)(x1, "data-name", "triggerAtCells"), (0, x.CFu)(x5, "class", "option spacing s-vmzf1o"), (0, x.CFu)(x5, "data-tip", "The number of cells the targeted player needs to produce for the triggerbot to trigger"), (0, x.CFu)(xD, "class", "content s-vmzf1o"), (0, x.CFu)(xB, "class", "section s-vmzf1o"), (0, x.CFu)(xj, "type", "checkbox"), (0, x.CFu)(xj, "id", "show-hud"), (0, x.CFu)(xj, "data-name", "showHud"), (0, x.CFu)(xj, "class", "s-vmzf1o"), (0, x.CFu)(x7, "for", "show-hud"), (0, x.hgi)(x7, "flex", "1"), (0, x.CFu)(x7, "class", "s-vmzf1o"), (0, x.CFu)(x4, "class", "header s-vmzf1o"), (0, x.goL)(x4, "disabled", !$[6]), (0, x.CFu)(xG, "class", "section s-vmzf1o"), (0, x.CFu)(M, "class", "sections s-vmzf1o"), (0, x.CFu)(c, "class", "inner-content s-vmzf1o")
                        },
                        m(e, t) {
                            (0, x.Yry)(e, c, t), (0, x.BCw)(c, A), (0, x.BCw)(A, u), (0, x.BCw)(A, E), (0, x.BCw)(A, z), (0, x.BCw)(c, R), (0, x.BCw)(c, M), (0, x.BCw)(M, L), (0, x.BCw)(L, G), (0, x.BCw)(G, j), (0, x.BCw)(G, H), xX.m(G, null), (0, x.BCw)(L, U), (0, x.BCw)(L, q), xJ && xJ.m(q, null), (0, x.BCw)(q, K), (0, x.BCw)(q, X), (0, x.BCw)(X, J), (0, x.BCw)(X, V), (0, x.BCw)(X, Z), (0, x.BCw)(q, O), (0, x.BCw)(q, $$), (0, x.BCw)($$, $e), xP.m($$, null), (0, x.BCw)($$, $x), (0, x.BCw)($$, $s), (0, x.BCw)(q, $n), (0, x.BCw)(q, $a), (0, x.BCw)($a, $o), xV.m($a, null), (0, x.BCw)($a, $l), (0, x.BCw)($a, $c), (0, x.BCw)(M, $A), (0, x.BCw)(M, $u), (0, x.BCw)($u, $d), (0, x.BCw)($d, $0), (0, x.BCw)($d, $g), (0, x.BCw)($d, $m), (0, x.BCw)($u, $C), (0, x.BCw)($u, $p), (0, x.BCw)($p, $f), (0, x.BCw)($f, $_), (0, x.BCw)($f, $v), (0, x.BCw)($f, $b), (0, x.BCw)($p, $y), (0, x.BCw)($p, $B), (0, x.BCw)($B, $F), (0, x.BCw)($B, $D), (0, x.BCw)($B, $2), (0, x.BCw)($B, $N), xZ.m($B, null), (0, x.BCw)($p, $Q), (0, x.BCw)($p, $k), (0, x.BCw)($k, $T), (0, x.BCw)($k, $Y), (0, x.BCw)($k, $z), (0, x.BCw)($p, $R), (0, x.BCw)($p, $5), (0, x.BCw)($5, $6), (0, x.BCw)($5, $L), (0, x.BCw)($5, $1), (0, x.BCw)($p, $9), (0, x.BCw)($p, $3), (0, x.BCw)($3, $G), (0, x.BCw)($3, $j), (0, x.BCw)($3, $H), (0, x.BCw)($p, $U), (0, x.BCw)($p, $7), (0, x.BCw)($7, $q), xO.m($7, null), (0, x.BCw)($7, $K), (0, x.BCw)($7, $X), (0, x.BCw)($p, $P), (0, x.BCw)($p, $V), (0, x.BCw)($V, $Z), x8.m($V, null), (0, x.BCw)($V, $8), (0, x.BCw)($V, e$), (0, x.BCw)($p, et), (0, x.BCw)($p, ex), (0, x.BCw)(ex, es), s$.m(ex, null), (0, x.BCw)(ex, en), (0, x.BCw)(ex, ea), (0, x.BCw)($p, er), (0, x.BCw)($p, el), (0, x.BCw)(el, ec), se.m(el, null), (0, x.BCw)(el, eA), (0, x.BCw)(el, eu), (0, x.BCw)($p, e0), (0, x.BCw)($p, eg), (0, x.BCw)(eg, em), st.m(eg, null), (0, x.BCw)(eg, ep), (0, x.BCw)(eg, ef), (0, x.BCw)($p, ew), (0, x.BCw)($p, ev), (0, x.BCw)(ev, eb), sx.m(ev, null), (0, x.BCw)(ev, eB), (0, x.BCw)(ev, eF), (0, x.BCw)(M, eD), (0, x.BCw)(M, e2), (0, x.BCw)(e2, eN), (0, x.BCw)(e2, eE), (0, x.BCw)(e2, eQ), (0, x.BCw)(eQ, ek), (0, x.BCw)(ek, eT), ss.m(ek, null), (0, x.BCw)(ek, eY), (0, x.BCw)(ek, ez), (0, x.BCw)(eQ, e5), (0, x.BCw)(eQ, e6), (0, x.BCw)(e6, eM), (0, x.BCw)(e6, e1), si.m(e6, null), (0, x.BCw)(eQ, e3), (0, x.BCw)(eQ, eG), (0, x.BCw)(eG, e4), (0, x.BCw)(eG, eH), sn.m(eG, null), (0, x.BCw)(eQ, e7), (0, x.BCw)(eQ, eq), (0, x.BCw)(eq, eW), (0, x.BCw)(eq, eX), sa.m(eq, null), (0, x.BCw)(eQ, eP), (0, x.BCw)(eQ, eV), (0, x.BCw)(eV, eZ), (0, x.BCw)(eV, e8), (0, x.BCw)(eV, t$), (0, x.BCw)(eQ, te), (0, x.BCw)(eQ, tt), (0, x.BCw)(tt, tx), (0, x.BCw)(tt, ti), (0, x.BCw)(tt, tn), (0, x.BCw)(eQ, ta), (0, x.BCw)(eQ, to), (0, x.BCw)(to, tr), (0, x.BCw)(to, tc), (0, x.BCw)(to, th), (0, x.BCw)(eQ, tA), (0, x.BCw)(eQ, tu), (0, x.BCw)(tu, td), (0, x.BCw)(tu, tg), (0, x.BCw)(tu, tm), (0, x.BCw)(eQ, tC), (0, x.BCw)(eQ, tp), (0, x.BCw)(tp, tf), (0, x.BCw)(tp, tw), (0, x.BCw)(tp, tv), (0, x.BCw)(eQ, tb), (0, x.BCw)(eQ, ty), (0, x.BCw)(ty, tB), (0, x.BCw)(ty, tI), (0, x.BCw)(ty, tD), (0, x.BCw)(eQ, t2), (0, x.BCw)(eQ, tN), (0, x.BCw)(tN, tE), (0, x.BCw)(tN, tk), (0, x.BCw)(tN, tT), (0, x.BCw)(eQ, tS), (0, x.BCw)(eQ, tY), (0, x.BCw)(tY, tz), (0, x.BCw)(tY, t5), (0, x.BCw)(tY, t6), (0, x.BCw)(M, tM), (0, x.BCw)(M, tL), (0, x.BCw)(tL, t1), (0, x.BCw)(tL, t9), (0, x.BCw)(tL, t3), (0, x.BCw)(t3, tG), (0, x.BCw)(tG, t4), (0, x.BCw)(tG, tH), (0, x.BCw)(tG, tU), (0, x.BCw)(t3, t7), so && so.m(t3, null), (0, x.BCw)(t3, tq), (0, x.BCw)(t3, tW), (0, x.BCw)(tW, tK), (0, x.BCw)(tW, tJ), (0, x.BCw)(tW, tP), (0, x.BCw)(t3, tV), (0, x.BCw)(t3, tZ), (0, x.BCw)(tZ, tO), (0, x.BCw)(tZ, x$), (0, x.BCw)(tZ, xe), (0, x.BCw)(t3, xt), (0, x.BCw)(t3, xx), (0, x.BCw)(xx, xs), (0, x.BCw)(xx, xn), (0, x.BCw)(xx, xa), (0, x.BCw)(t3, xo), (0, x.BCw)(t3, xr), (0, x.BCw)(xr, xl), (0, x.BCw)(xr, xh), (0, x.BCw)(xr, xA), (0, x.BCw)(t3, xu), (0, x.BCw)(t3, xd), (0, x.BCw)(xd, x0), (0, x.BCw)(xd, xm), (0, x.BCw)(xd, xC), (0, x.BCw)(t3, xp), (0, x.BCw)(t3, xf), (0, x.BCw)(xf, x_), (0, x.BCw)(xf, xv), sr.m(xf, null), (0, x.BCw)(M, xy), (0, x.BCw)(M, xB), (0, x.BCw)(xB, xF), (0, x.BCw)(xB, xI), (0, x.BCw)(xB, xD), (0, x.BCw)(xD, x2), (0, x.BCw)(x2, xN), (0, x.BCw)(x2, xQ), (0, x.BCw)(x2, xk), (0, x.BCw)(xk, xT), (0, x.BCw)(xk, xS), sl.m(xk, null), (0, x.BCw)(xD, xz), sc && sc.m(xD, null), (0, x.BCw)(xD, xR), (0, x.BCw)(xD, x5), (0, x.BCw)(x5, x6), sh.m(x5, null), (0, x.BCw)(x5, xL), (0, x.BCw)(x5, x1), (0, x.BCw)(M, x3), (0, x.BCw)(M, xG), (0, x.BCw)(xG, x4), (0, x.BCw)(x4, xj), (0, x.BCw)(x4, xU), (0, x.BCw)(x4, x7), (0, x.BCw)(xG, xq), sA && sA.m(xG, null), xW || (xK = [(0, x.KTR)(z, "click", $[17]), (0, x.KTR)(J, "change", $[12]), (0, x.hGc)(P = $[13].call(null, J)), (0, x.KTR)($s, "input", $[12]), (0, x.KTR)($s, "change", $[18]), (0, x.hGc)($i = $[13].call(null, $s)), (0, x.KTR)($c, "input", $[12]), (0, x.hGc)($h = $[13].call(null, $c)), (0, x.KTR)($_, "change", $[12]), (0, x.hGc)($w = $[13].call(null, $_)), (0, x.KTR)($F, "change", $[12]), (0, x.hGc)($I = $[13].call(null, $F)), (0, x.KTR)($T, "change", $[12]), (0, x.hGc)($S = $[13].call(null, $T)), (0, x.KTR)($6, "change", $[12]), (0, x.hGc)($M = $[13].call(null, $6)), (0, x.KTR)($G, "change", $[12]), (0, x.hGc)($4 = $[13].call(null, $G)), (0, x.KTR)($X, "input", $[12]), (0, x.hGc)($J = $[13].call(null, $X)), (0, x.KTR)(e$, "input", $[12]), (0, x.hGc)(ee = $[13].call(null, e$)), (0, x.KTR)(ea, "input", $[12]), (0, x.hGc)(eo = $[13].call(null, ea)), (0, x.KTR)(eu, "input", $[12]), (0, x.hGc)(ed = $[13].call(null, eu)), (0, x.KTR)(ef, "input", $[12]), (0, x.hGc)(e_ = $[13].call(null, ef)), (0, x.KTR)(eF, "input", $[12]), (0, x.hGc)(eI = $[13].call(null, eF)), (0, x.KTR)(ez, "input", $[12]), (0, x.hGc)(eR = $[13].call(null, ez)), (0, x.KTR)(eM, "input", $[12]), (0, x.hGc)(eL = $[13].call(null, eM)), (0, x.KTR)(e4, "input", $[12]), (0, x.hGc)(ej = $[13].call(null, e4)), (0, x.KTR)(eW, "input", $[12]), (0, x.hGc)(eK = $[13].call(null, eW)), (0, x.KTR)(eZ, "change", $[12]), (0, x.hGc)(eO = $[13].call(null, eZ)), (0, x.KTR)(tx, "change", $[12]), (0, x.hGc)(ts = $[13].call(null, tx)), (0, x.KTR)(tr, "change", $[12]), (0, x.hGc)(tl = $[13].call(null, tr)), (0, x.KTR)(td, "change", $[12]), (0, x.hGc)(t0 = $[13].call(null, td)), (0, x.KTR)(tf, "change", $[12]), (0, x.hGc)(t_ = $[13].call(null, tf)), (0, x.KTR)(tB, "change", $[12]), (0, x.hGc)(tF = $[13].call(null, tB)), (0, x.KTR)(tE, "change", $[12]), (0, x.hGc)(tQ = $[13].call(null, tE)), (0, x.KTR)(tz, "change", $[12]), (0, x.hGc)(tR = $[13].call(null, tz)), (0, x.KTR)(t4, "change", $[12]), (0, x.hGc)(tj = $[13].call(null, t4)), (0, x.KTR)(tK, "change", $[12]), (0, x.hGc)(tX = $[13].call(null, tK)), (0, x.KTR)(tO, "change", $[12]), (0, x.hGc)(t8 = $[13].call(null, tO)), (0, x.KTR)(xs, "change", $[12]), (0, x.hGc)(xi = $[13].call(null, xs)), (0, x.KTR)(xl, "change", $[12]), (0, x.hGc)(xc = $[13].call(null, xl)), (0, x.KTR)(x0, "change", $[12]), (0, x.hGc)(xg = $[13].call(null, x0)), (0, x.KTR)(x_, "input", $[12]), (0, x.hGc)(xw = $[13].call(null, x_)), (0, x.KTR)(xN, "change", $[12]), (0, x.hGc)(xE = $[13].call(null, xN)), (0, x.KTR)(x1, "input", $[12]), (0, x.hGc)(x9 = $[13].call(null, x1)), (0, x.KTR)(xj, "change", $[12]), (0, x.hGc)(xH = $[13].call(null, xj))], xW = !0)
                        },
                        p($, e) {
                            W && xJ.p($, e), 8 & e && (0, x.jXN)($t, $t = $[3]) ? (xP.d(1), (xP = m()).c(), xP.m($$, $x)) : xP.p($, e), 8 & e && (0, x.jXN)($r, $r = $[3]) ? (xV.d(1), (xV = C()).c(), xV.m($a, $l)) : xV.p($, e), 8 & e && (0, x.jXN)($E, $E = $[3]) ? (xZ.d(1), (xZ = p()).c(), xZ.m($B, null)) : xZ.p($, e), 8 & e && (0, x.jXN)($W, $W = $[3]) ? (xO.d(1), (xO = f()).c(), xO.m($7, $K)) : xO.p($, e), 8 & e && (0, x.jXN)($O, $O = $[3]) ? (x8.d(1), (x8 = _()).c(), x8.m($V, $8)) : x8.p($, e), 8 & e && (0, x.jXN)(ei, ei = $[3]) ? (s$.d(1), (s$ = w()).c(), s$.m(ex, en)) : s$.p($, e), 8 & e && (0, x.jXN)(eh, eh = $[3]) ? (se.d(1), (se = v()).c(), se.m(el, eA)) : se.p($, e), 8 & e && (0, x.jXN)(eC, eC = $[3]) ? (st.d(1), (st = b()).c(), st.m(eg, ep)) : st.p($, e), 8 & e && (0, x.jXN)(ey, ey = $[3]) ? (sx.d(1), (sx = y()).c(), sx.m(ev, eB)) : sx.p($, e), 8 & e && (0, x.jXN)(eS, eS = $[3]) ? (ss.d(1), (ss = B()).c(), ss.m(ek, eY)) : ss.p($, e), 8 & e && (0, x.jXN)(e9, e9 = $[3]) ? (si.d(1), (si = F($)).c(), si.m(e6, null)) : si.p($, e), 8 & e && (0, x.jXN)(eU, eU = $[3]) ? (sn.d(1), (sn = I($)).c(), sn.m(eG, null)) : sn.p($, e), 8 & e && (0, x.jXN)(eJ, eJ = $[3]) ? (sa.d(1), (sa = D($)).c(), sa.m(eq, null)) : sa.p($, e), $[4] ? so ? so.p($, e) : ((so = N($)).c(), so.m(t3, tq)) : so && (so.d(1), so = null), 8 & e && (0, x.jXN)(xb, xb = $[3]) ? (sr.d(1), (sr = Q($)).c(), sr.m(xf, null)) : sr.p($, e), 8 & e && (0, x.jXN)(xY, xY = $[3]) ? (sl.d(1), (sl = k($)).c(), sl.m(xk, null)) : sl.p($, e), $[5] ? sc ? sc.p($, e) : ((sc = T($)).c(), sc.m(xD, xR)) : sc && (sc.d(1), sc = null), 8 & e && (0, x.jXN)(xM, xM = $[3]) ? (sh.d(1), (sh = S()).c(), sh.m(x5, xL)) : sh.p($, e), 64 & e && (0, x.goL)(x4, "disabled", !$[6]), $[6] ? sA ? sA.p($, e) : ((sA = Y($)).c(), sA.m(xG, null)) : sA && (sA.d(1), sA = null)
                        },
                        d($) {
                            $ && (0, x.YoD)(c), xX.d(), xJ && xJ.d(), xP.d($), xV.d($), xZ.d($), xO.d($), x8.d($), s$.d($), se.d($), st.d($), sx.d($), ss.d($), si.d($), sn.d($), sa.d($), so && so.d(), sr.d($), sl.d($), sc && sc.d(), sh.d($), sA && sA.d(), (xW = !1, x.oOW)(xK)
                        }
                    }
                }
                let U = (0, s.T5)(!1),
                    q = (0, s.T5)(r.A.get("showHud")),
                    W = (0, s.T5)(r.A.get("showStats")),
                    K = (0, s.T5)(r.A.get("showMinimapStats")),
                    X = (0, s.T5)(r.A.get("useSharedViewport")),
                    J = (0, s.T5)(r.A.get("triggerIgnoreSizeEnabled")),
                    P = (0, s.T5)(r.A.get("minimapEnabled")),
                    V = (r.A.on("zrVIMz", ($, e) => {
                        "showHud" === $ ? q.set(!!e) : "showStats" === $ ? W.set(!!e) : "useSharedViewport" === $ ? X.set(!!e) : "triggerIgnoreSizeEnabled" === $ ? J.set(!!e) : "minimapEnabled" === $ ? P.set(!!e) : "showMinimapStats" === $ ? K.set(!!e) : U.set(!(0, s.Jt)(U))
                    }), $ => 1e3 <= $ ? ($ / 1e3).toFixed(1) + "s" : $ + "ms");
                class Z extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, s) {
                            let n, l, h, d, g, m, C, p, f;
                            (0, x.j0C)(e, i.E, $ => s(0, l = $)), (0, x.j0C)(e, U, $ => s(3, h = $)), (0, x.j0C)(e, X, $ => s(4, d = $)), (0, x.j0C)(e, J, $ => s(5, g = $)), (0, x.j0C)(e, q, $ => s(6, m = $)), (0, x.j0C)(e, W, $ => s(7, C = $)), (0, x.j0C)(e, P, $ => s(8, p = $)), (0, x.j0C)(e, K, $ => s(9, f = $));
                            let _ = $ => {
                                A().fire({
                                    title: "Restart required",
                                    text: "Refresh page to " + ($ ? "fully " : "") + "apply changes?",
                                    icon: "info",
                                    showConfirmButton: !0,
                                    showCancelButton: !0
                                }).then($ => $.isConfirmed && setTimeout(() => location.reload(), 300))
                            };
                            return e.$$.update = () => {
                                1 & e.$$.dirty && s(2, n = l === i.b.Settings)
                            }, [l, a.A, n, h, d, g, m, C, p, f, $ => {
                                (0, x.vu6)(i.E, l = $.detail ? i.b.Settings : i.b.None, l)
                            }, _, $ => {
                                if (($ = $.currentTarget).hasAttribute("data-name")) {
                                    var e = $.getAttribute("data-name");
                                    let t;
                                    if ("checkbox" === $.type) t = $.checked;
                                    else if ("text" === $.type) t = $.value;
                                    else {
                                        if ("range" !== $.type) return void(0, c.X0)(!1, "Invalid input type used:", $.type);
                                        t = +$.value
                                    }
                                    if (r.A.get(e) !== t) {
                                        r.A.set(e, t);
                                        var x, i, n, l = t;
                                        switch (e) {
                                            case "tabStatusMode":
                                                return void(a.A.running && (a.A.HsE.forEach($ => {
                                                    for (x of $) x.VEj && x.IvE()
                                                }), n = o.A.yNT, i = a.A.FCi.ZRd(0 === n ? 1 : 0), n = a.A.FCi.ZRd(n), i && (delete i.wFC, i.PJd()), n && (delete n.wFC, n.PJd()), a.A.jWf(0 === o.A.yNT ? 1 : 0, o.A.yNT)));
                                            case "showChat":
                                                return void(a.A.running && a.A.emit("uEBHda", !!l));
                                            case "useWebGL":
                                            case "useAntialiasing":
                                                return void _();
                                            case "gameResolution":
                                                return void(u.Uk.resolution = l, u.Uk.resize(window.innerWidth, window.innerHeight), u.Uk.view.style.width = window.innerWidth + "px", u.Uk.view.style.height = window.innerHeight + "px");
                                            case "showNames":
                                            case "showSkins":
                                            case "showMass":
                                            case "showOwnName":
                                            case "showOwnSkin":
                                            case "showOwnMass":
                                                return void(a.A.running && a.A.FCi.AaG());
                                            case "foodVisible":
                                                return void(a.A.running && s(1, a.A.scene.food.visible = !!l, a.A));
                                            case "showFPS":
                                            case "showPing":
                                            case "showPlayerMass":
                                            case "showPlayerScore":
                                            case "showCellCount":
                                                return void(a.A.running && a.A.emit("oiKdMc"));
                                            case "cellsOpacity":
                                                return void(a.A.running && s(1, a.A.scene.foreground.alpha = +l, a.A));
                                            case "minimapLocations":
                                                return void(a.A.running && a.A.emit("dHeEDj"));
                                            case "minimapEnabled":
                                                return void(a.A.running && (l ? (a.A.emit("OTySHI"), a.A.emit("dHeEDj")) : a.A.emit("PSbuQD")));
                                            case "showClock":
                                            case "showSessionTime":
                                            case "showPlayerCount":
                                            case "showSpectators":
                                            case "showRestartTiming":
                                            case "showTagTotalMass":
                                                return void a.A.emit("gWdDAg");
                                            case "showMinimapStats":
                                                a.A.emit("omMooP", !!l)
                                        }
                                    }
                                }
                            }, $ => {
                                if (!$.hasAttribute("data-name")) return null;
                                var e = $.getAttribute("data-name");
                                "checkbox" === $.type ? $.checked = r.A.get(e) : "text" === $.type || "range" === $.type ? $.value = r.A.get(e) : (0, c.X0)(!1, "Invalid input type used:", $.type)
                            }, $ => {
                                switch ($) {
                                    case 0:
                                        return "nobody else's";
                                    case 1:
                                        return "tag players'";
                                    case 2:
                                        return "everyone's";
                                    default:
                                        return "?"
                                }
                            }, $ => {
                                switch ($) {
                                    case 0:
                                        return "outline for both tabs";
                                    case 1:
                                        return "arrow on active tab only";
                                    case 2:
                                        return "nothing for both tabs";
                                    default:
                                        return "?"
                                }
                            }, $ => $ * $ * .01, () => (0, x.vu6)(i.E, l = i.b.None, l), () => _(!0), () => _(), function($) {
                                s(2, n = $), s(0, l)
                            }]
                        }, function $(e) {
                            let t, s, i;

                            function a($) {
                                e[20]($)
                            }
                            var o = {
                                $$slots: {
                                    default: [H]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[2] && (o.show = e[2]), t = new n.A({
                                props: o
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", a)), t.$on("visibility", e[10]), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), i = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    8389627 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 4 & e && (s = !0, i.show = $[2], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    i || ((0, x.c7F)(t.$$.fragment, $), i = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), i = !1
                                },
                                d($) {
                                    (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let O = Z
            },
            7009($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(83839),
                    s = (t(60821), t(36742)),
                    i = t(98781);

                function n($) {
                    let e;
                    return {
                        c() {
                            (e = (0, x.ND4)("div")).textContent = "To be implemented."
                        },
                        m($, t) {
                            (0, x.Yry)($, e, t)
                        },
                        p: x.lQ1,
                        d($) {
                            $ && (0, x.YoD)(e)
                        }
                    }
                }
                class a extends x.r7T {
                    constructor($) {
                        super(), (0, x.TsN)(this, $, function $(e, t, i) {
                            let n, a;
                            return (0, x.j0C)(e, s.E, $ => i(2, a = $)), e.$$.update = () => {
                                4 & e.$$.dirty && i(0, n = a === s.b.Themes)
                            }, [n, $ => {
                                (0, x.vu6)(s.E, a = $.detail ? s.b.Themes : s.b.None, a)
                            }, a, function($) {
                                i(0, n = $), i(2, a)
                            }]
                        }, function $(e) {
                            let t, s, a;

                            function o($) {
                                e[3]($)
                            }
                            var r = {
                                $$slots: {
                                    default: [n]
                                },
                                $$scope: {
                                    ctx: e
                                }
                            };
                            return void 0 !== e[0] && (r.show = e[0]), t = new i.A({
                                props: r
                            }), x.Dnk.push(() => (0, x.oIE)(t, "show", o)), t.$on("visibility", e[1]), {
                                c() {
                                    (0, x.N0i)(t.$$.fragment)
                                },
                                m($, e) {
                                    (0, x.wSR)(t, $, e), a = !0
                                },
                                p($, [e]) {
                                    var i = {};
                                    16 & e && (i.$$scope = {
                                        dirty: e,
                                        ctx: $
                                    }), !s && 1 & e && (s = !0, i.show = $[0], (0, x.Jk$)(() => s = !1)), t.$set(i)
                                },
                                i($) {
                                    a || ((0, x.c7F)(t.$$.fragment, $), a = !0)
                                },
                                o($) {
                                    (0, x.Tn8)(t.$$.fragment, $), a = !1
                                },
                                d($) {
                                    (0, x.Hbl)(t, $)
                                }
                            }
                        }, x.jXN, {})
                    }
                }
                let o = a
            },
            84740($, e, t) {
                t.d(e, {
                    A: () => c
                });
                var x = t(15308),
                    e = t(83529),
                    s = t(23059),
                    i = t(61036),
                    n = t(82128),
                    a = t(70679),
                    o = t(87706),
                    r = t(74173);
                let l = e.A.get("drawDelay");
                e.A.on("zrVIMz", ($, e) => {
                    "drawDelay" === $ && (l = e)
                });
                class c {
                    get type() {
                        return this.view.getUint8(0)
                    }
                    set type($) {
                        this.view.setUint8(0, $)
                    }
                    get flags() {
                        return this.view.getUint8(1)
                    }
                    set flags($) {
                        this.view.setUint8(1, $)
                    }
                    get id() {
                        return this.view.getUint16(2, !0)
                    }
                    set id($) {
                        this.view.setUint16(2, $, !0)
                    }
                    get size() {
                        return this.view.getUint16(16)
                    }
                    set size($) {
                        this.view.setUint16(16, $)
                    }
                    get Fwk() {
                        return this.view.getUint16(18)
                    }
                    set Fwk($) {
                        this.view.setUint16(18, $)
                    }
                    get dxt() {
                        return this.view.getUint16(20)
                    }
                    set dxt($) {
                        this.view.setUint16(20, $)
                    }
                    get PnL() {
                        return i.T9(...this.tQY)
                    }
                    constructor($, e, t, x, i, a, l, c) {
                        this.buffer = new ArrayBuffer(22), this.view = new DataView(this.buffer), this.position = r.A.nVI(new Int16Array(this.buffer, 12, 2)), this.Fql = r.A.nVI(new Int16Array(this.buffer, 4, 2)), this.ytG = r.A.nVI(new Int16Array(this.buffer, 8, 2)), this.scale = 1, this.tQY = [-1, -1], this.EZD = new n.m(this), this.type = $, this.id = e || 0, this.texture = t = t || s.WK.get(0), ($ = this.sprite = new o.Sprite(t)).anchor.set(.5), ($.gameData = this).position.set(x, i), this.position.copy(this.Fql), this.position.copy(this.ytG), $.position.set(x, i), this.dxt = this.Fwk = this.size = a, this.flags = l, this.context = c
                    }
                    get mass() {
                        return this.dxt * this.dxt / 100
                    }
                    update($) {
                        var $ = (0, x.N)(($ - this.PnL) / l, 0, 1),
                            $ = (this.position.x = (0, x.Cc)(this.Fql.x, this.ytG.x, $ * this.scale), this.position.y = (0, x.Cc)(this.Fql.y, this.ytG.y, $ * this.scale), 2 * (this.size = (0, x.Cc)(this.Fwk, this.dxt, $))),
                            e = this.sprite;
                        return null == e || !(!this.position.equalTo(e.x, e.y) || e.width !== $) || (e.x = this.position.x, e.y = this.position.y, e.width = e.height = $, !1)
                    }
                    destroy($) {
                        0 === this.EZD.size && (a.Ab.delete(this.id), a.DH.delete(this), this.destroyed) || (a.DH.delete(this), this.destroyed = !0, this.KSg?.(), $ ? a.nf.add(this) : this.LnE())
                    }
                    LnE() {
                        this.sprite ? (this.sprite.destroy(), this.sprite = null) : (0, x.$s)(1, 'Sprite for cell "' + this.id + '" already destroyed!')
                    }
                }
            },
            91461($, e, t) {
                var x = t(84740);
                t(19659), t(87706), t(49544), x.A
            },
            91001($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var e = t(84740),
                    x = t(19659),
                    s = t(87706);
                t(63166);
                class i extends e.A {
                    constructor($, e, t, i, n, a) {
                        super(x.QG, $, s.Texture.from("./img/crown.png"), e, t, i, n, a), this.htA = !0, this.sprite.alpha = .7
                    }
                }
            },
            43815($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var e = t(84740),
                    x = t(19659),
                    s = t(23059);
                class i extends e.A {
                    constructor($, e, t, i, n, a, o = !0, r = 4210752) {
                        super(x.rn, $, o = (o ? s.WK : s.lw).get(r), e, t, i, n, a), this.rDK = !0, this.sprite.alpha = .5, this.type = x.rn
                    }
                }
            },
            79287($, e, t) {
                t.d(e, {
                    A: () => l
                });
                var x = t(83529),
                    e = t(84740),
                    s = t(19659),
                    i = t(23059),
                    n = t(15308),
                    a = t(93581);
                let o = () => i.WK.get(parseInt(x.A.get("ejectedColor"), 16)),
                    r = x.A.get("drawDelay");
                x.A.on("zrVIMz", ($, e) => {
                    "drawDelay" === $ && (r = e)
                });
                class l extends e.A {
                    static ROS($) {
                        let e = new a.I(.4, 1, 300);
                        l.animator = e, $.on("started", () => e.start()), $.on("stopped", () => e.stop())
                    }
                    constructor($, e, t, i, n, a) {
                        super(s.do, $, o(), e, t, i, n, a), this.cRV = !0, x.A.get("animateEjectedCells") && l.animator.pjN(this.sprite)
                    }
                    CHS() {
                        this.sprite.texture = this.texture = o()
                    }
                    update($) {
                        return $ = (0, n.N)(($ - this.PnL) / r, 0, 1), this.position.set((0, n.Cc)(this.Fql.x, this.ytG.x, $), (0, n.Cc)(this.Fql.y, this.ytG.y, $)), !(null != ($ = this.sprite) && !this.position.equalTo($.x, $.y) && ($.x = this.position.x, $.y = this.position.y, 1))
                    }
                    KSg() {
                        x.A.get("animateEjectedCells") && this.sprite && l.animator.vmV(this.sprite)
                    }
                }
            },
            75576($, e, t) {
                t.d(e, {
                    A: () => r
                });
                var x = t(23059),
                    s = t(92915),
                    e = t(84740),
                    i = t(19659),
                    n = t(83529),
                    a = t(70679);
                t(15308);
                let o = $ => x.WK.get(n.A.get("useFoodColor") ? parseInt(n.A.get("foodColor"), 16) : s.pz.at($ % s.pz.length));
                class r extends e.A {
                    constructor($, e, t, x, s, n) {
                        super(i.xV, $, o($), e, t, x, s, n), this.sxA = !0
                    }
                    CHS() {
                        this.sprite.texture = this.texture = o(this.id)
                    }
                    update() {
                        var $, e = this.sprite;
                        return null == e || (this.position.set(this.ytG), e.x === this.position.x && e.y === this.position.y || ($ = 2 * (this.size = this.dxt), e.x = this.position.x, e.y = this.position.y, e.width = e.height = $), !1)
                    }
                    destroy() {
                        0 === this.EZD.size && (a.Ab.delete(this.id), a.DH.delete(this), this.destroyed) || (this.destroyed = !0, a.DH.delete(this), this.LnE())
                    }
                }
            },
            1786($, e, t) {
                t.d(e, {
                    No: () => n.A,
                    Oe: () => o.A,
                    hN: () => a.A,
                    kF: () => x.A,
                    ub: () => s.A,
                    xx: () => i.A
                });
                var x = t(88074),
                    s = t(63),
                    i = t(79287),
                    n = t(75576),
                    a = t(43815),
                    o = t(91001);
                t(91461)
            },
            88074($, e, t) {
                t.d(e, {
                    A: () => u
                });
                var x = t(83529),
                    e = t(84740),
                    s = t(19659),
                    i = t(41958),
                    n = t(15308),
                    a = t(23059),
                    o = t(78225),
                    r = t(93581),
                    l = t(95514),
                    c = t(87706);
                let h = x.A.get("drawDelay");
                x.A.on("zrVIMz", ($, e) => {
                    "drawDelay" === $ && (h = e)
                });
                let A;
                class u extends e.A {
                    static ROS($) {
                        A = $;
                        let e = new r.I(.3, 1, 500);
                        u.animator = e, A.on("started", () => e.start()), A.on("stopped", () => e.stop())
                    }
                    constructor($, e, t, i, n, r, l) {
                        super(s.g4, $, r.texture || a.WK.get(0), e, t, i, n, l), this.exG = !0, this.player = r, this.pid = r.pid, -1 !== ($ = o.A.pids.indexOf(this.pid)) && (A.HsE[$].add(this), 1 === x.A.get("tabStatusMode")) && $ === o.A.yNT && this.qLx(), r.Rak && this.xtA(), x.A.get("animatePlayerCells") && u.animator.pjN(this.sprite)
                    }
                    xtA() {
                        var $;
                        if (null != this.crownSprite) return (0, n.$s)(1, "xtA(): crown already exists");
                        this.sprite.addChild(this.crownSprite = A.eWF.pop() || (($ = c.Sprite.from("./img/crown.png")).scale.set(.7), $.pivot.set(0, 643), $.anchor.set(.5, 0), $.rotation = -.5, $.alpha = .7, $.zIndex = 2, $))
                    }
                    DgL() {
                        var $ = this.crownSprite;
                        if (null == $) return (0, n.$s)(1, "DgL(): crown doesnt exist");
                        this.sprite.removeChild($), A.eWF.length < 128 ? A.eWF.push($) : $.destroy(), delete this.crownSprite
                    }
                    qLx() {
                        var $;
                        this.VEj || ($ = this.VEj = (($ = new c.Sprite(a.$P.get())).anchor.set(.5), $.y = -290, $.width = $.height = 50, $.alpha = .8, $.zIndex = 2, $), this.sprite.addChild($))
                    }
                    IvE() {
                        var $ = this.VEj;
                        if (null == $) return (0, n.$s)(1, "IvE(): arrow doesnt exist");
                        this.sprite.removeChild($), $.destroy(), delete this.VEj
                    }
                    update($) {
                        var $ = (0, n.N)(($ - this.PnL) / h, 0, 1),
                            $ = (this.position.x = (0, n.Cc)(this.Fql.x, this.ytG.x, $ * this.scale), this.position.y = (0, n.Cc)(this.Fql.y, this.ytG.y, $ * this.scale), 2 * (this.size = (0, n.Cc)(this.Fwk, this.dxt, $))),
                            e = this.sprite;
                        return !(null != e && !this.texture.VqU && (!this.position.equalTo(e.x, e.y) || e.width !== $) && (e.x = this.position.x, e.y = this.position.y, e.width = e.height = $, this.AfU(), 1))
                    }
                    AfU() {
                        var $, e, t = A.scene.container.scale.x * this.size * l.Uk.resolution,
                            s = t > x.A.get("smallTextThreshold");
                        this.player.VAP && s ? (this.SoH || (this.SoH = A.UJM.pop() || ($ = new c.BitmapText("", {
                            fontName: "mass",
                            align: "right"
                        }), e = x.A.jLt.strokeThickness || 0, $.position.set(-e / 2, -e / 2), $.anchor.set(.5, -.6), $), this.SoH.zIndex = 0, this.sprite.addChild(this.SoH)), this.SoH.text = A.Hdd(this.mass), this.SoH.visible = !0) : this.SoH && (this.SoH.visible = !1), this.player.cSM && s ? (!this.RiW && this.player.RiW && (this.RiW = new c.Sprite(this.player.RiW.texture), this.RiW.anchor.set(.5), this.player instanceof i.A || (this.RiW.anchor.y = .6, this.RiW.scale.set(1.5, 1.5)), this.RiW.zIndex = 1, this.sprite.addChild(this.RiW)), this.RiW && (this.RiW.visible = !0)) : this.RiW && (this.RiW.visible = !1), this.crownSprite && (this.crownSprite.visible = 16 < t && x.A.get("showCrown")), this.VEj && (this.VEj.visible = 16 < t)
                    }
                    KSg() {
                        x.A.get("animatePlayerCells") && u.animator.vmV(this.sprite);
                        var $ = o.A.pids.indexOf(this.pid); - 1 !== $ && A.HsE[$].delete(this), this.SoH && (this.sprite.removeChild(this.SoH), A.UJM.length < 256 ? A.UJM.push(this.SoH) : this.SoH.destroy(!0)), this.crownSprite && this.DgL()
                    }
                    LnE() {
                        this.sprite ? (this.sprite.destroy(), this.sprite = null, this.RiW && this.RiW.destroy()) : (0, n.$s)(1, 'Sprite for player cell "' + this.id + '" already destroyed!')
                    }
                }
            },
            70679($, e, t) {
                t.d(e, {
                    Ab: () => i,
                    DH: () => n,
                    nf: () => s
                });
                let x = t(44895),
                    s = new x.A,
                    i = new Map,
                    n = new x.A
            },
            19659($, e, t) {
                t.d(e, {
                    QG: () => o,
                    Sq: () => s,
                    do: () => i,
                    eL: () => l,
                    g4: () => x,
                    hH: () => r,
                    rn: () => a,
                    xV: () => n
                });
                let [x, s, i, n, a, o, r, l] = [1, 2, 3, 4, 5, 6, 7, 9]
            },
            83842($, e, t) {
                t.d(e, {
                    A: () => s
                });
                let x = t(87706).Ticker.shared;
                class s {
                    constructor() {
                        this.running = !1, this.TJL = null
                    }
                    PNv($) {
                        this.running && null != this.TJL && (x.remove(this.TJL), this.running = !1), this.TJL = $
                    }
                    start() {
                        x.add(this.TJL), this.running = !0
                    }
                    stop() {
                        x.remove(this.TJL), this.running = !1
                    }
                }
            },
            92915($, e, t) {
                t.d(e, {
                    O$: () => n,
                    cy: () => a,
                    ic: () => i,
                    oZ: () => o,
                    pz: () => s
                });
                var x = t(15308);
                let s = [16776960, 65280, 65535, 16711935],
                    i = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8388863, 16711935, 16711808],
                    n = i.map($ => (0, x.v2)($, .8)),
                    a = i.map($ => (0, x.v2)($, .7)),
                    o = n.map($ => (0, x.v2)($, .8))
            },
            93581($, e, t) {
                t.d(e, {
                    I: () => s
                });
                var e = t(83842),
                    x = t(87706);
                class s extends e.A {
                    constructor($, e, t) {
                        super(), this.animate = $ => {
                            this.naK.forEach(e => {
                                var t = $ / x.settings.TARGET_FPMS,
                                    t = e.alpha += t / this.fadeAmount;
                                e && t < this.qCL || (e.alpha = this.qCL, this.naK.delete(e))
                            })
                        }, this.mPX = $, this.qCL = e, this.naK = new Set, this.fadeAmount = t, this.PNv(this.animate.bind(this))
                    }
                    pjN($) {
                        $.alpha = this.mPX, this.naK.add($)
                    }
                    vmV($) {
                        this.naK.has($) && this.naK.delete($)
                    }
                    stop() {
                        super.stop(), this.naK.clear()
                    }
                }
            },
            44895($, e, t) {
                t.d(e, {
                    A: () => s
                });
                class x {
                    constructor($) {
                        this.next = null, this.prev = null, this.value = $
                    }
                }
                class s {
                    constructor() {
                        this.head = null, this.tail = null, this.length = 0
                    }
                    clear() {
                        this.length = 0, this.head = this.tail = null
                    }
                    values() {
                        var $ = [];
                        let e = this.head;
                        for (; e;) $.push(e.value), e = e.next;
                        return $
                    }
                    get count() {
                        var $ = 0;
                        let e = this.head;
                        for (; e;) $++, e = e.next;
                        return $
                    }
                    add($) {
                        return $ = new x($), this.head ? ($.prev = this.tail, this.tail && (this.tail.next = $), this.tail = $) : this.head = this.tail = $, this.length++, $
                    }
                    remove($) {
                        $ && ($.prev ? $.prev.next = $.next : this.head = $.next, $.next ? $.next.prev = $.prev : this.tail = $.prev, $.next = $.prev = null, this.length--)
                    }
                    delete($) {
                        let e = this.head;
                        for (; e;) {
                            if (e.value === $) return this.remove(e), !0;
                            e = e.next
                        }
                        return !1
                    }*[Symbol.iterator]() {
                        let $ = this.head;
                        for (; $;) yield $.value, $ = $.next
                    }
                    get size() {
                        return this.length
                    }
                }
            },
            82128($, e, t) {
                t.d(e, {
                    m: () => x
                });
                class x {
                    constructor($) {
                        this.handles = [!1, !1], this.owner = $
                    }
                    get size() {
                        return (this.handles[0] ? 1 : 0) + (this.handles[1] ? 1 : 0)
                    }
                    clear() {
                        this.handles = [!1, !1]
                    }
                    disown($) {
                        this.handles[$] = !1
                    }
                    own($) {
                        this.handles[$] = !0
                    }
                    migrate($) {
                        return this.disown($), 0 !== this.size && (this.owner.context = 0 === $ ? 1 : 0, !0)
                    }
                }
            },
            63($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var e = t(84740),
                    x = t(19659),
                    s = t(23059),
                    i = t(87706);
                class n extends e.A {
                    constructor($, e, t, i, n, a) {
                        super(x.Sq, $, s.Tb.get(), e, t, i, n, a), this.fnF = !0, this.disabled = !1
                    }
                    lBZ() {
                        this.LnE(), this.texture = s.Tb.get(), this.sprite = new i.Sprite(this.texture), this.sprite.anchor.set(.5), this.sprite.gameData = this
                    }
                }
            },
            97667($, e, t) {
                t.d(e, {
                    A: () => r
                });
                var x = t(83529),
                    s = t(78225),
                    i = t(15308),
                    n = t(61036),
                    a = t(30847),
                    o = t(33656);
                class r {
                    constructor($) {
                        this.game = $
                    }
                    Xiy($, e, t) {
                        if (!this.game.pEA(t || s.A.yNT) || this.game.ycZ(t || s.A.yNT)) return !1;
                        this.game.fwE(t || s.A.yNT, !0), this.game.FLt.adz($);
                        let x = e ? (0, o.Qv)(e) : "";
                        return "number" == typeof $ ? (e = this.game.FCi.get($)) && !x && (x = (0, o.Qv)(e.name || "Unnamed")) : x = x || o.g8, 0 < x.length && (x += " (tab " + (1 + ("number" == typeof t ? t : s.A.yNT)) + ")", (0, i.me)(x)), !0
                    }
                    Rhi() {
                        this.game.FLt.NTE()
                    }
                    TaP() {
                        this.game.FLt.DQA()
                    }
                    feed($) {
                        this.game.FLt.jjW($)
                    }
                    PFX($, e = s.A.yNT) {
                        var t, x, i = this.game;
                        i.running && (x = (t = i.eWI[e]).mouse, ($ = null == $ ? !x.frozen : $) && (this.KHK(!1, e), this.OsW(!1, e), i.fjG(e), t.CiT()), x.frozen = $, i.emit("RAwTus", {
                            mouseFrozen: !0
                        }))
                    }
                    KHK($, e = s.A.yNT) {
                        var t, x = this.game;
                        x.running && (t = x.eWI[e].mouse, ($ = null == $ ? !t.centralize : $) && (this.PFX(!1, e), this.OsW(!1, e)), t.centralize = $, x.emit("RAwTus", {
                            LZd: !0
                        }))
                    }
                    OsW($, e = s.A.yNT) {
                        var t, x, i = this.game;
                        i.running && (x = (t = i.eWI[e]).mouse, ($ = null == $ ? !x.pause : $) && (i.fjG(null, e), t.CiT(), t.rHk(15), this.PFX(!1), this.KHK(!1)), x.pause = $, i.emit("RAwTus", {
                            lockLinesplit: !0
                        }))
                    }
                    lineSplit($ = s.A.yNT) {
                        this.lZS && (0, a.DJ)(this.lZS), this.PFX(!0, $), this.split(3, null, $), this.lZS = (0, a.wg)(() => {
                            delete this.lZS, this.PFX(!1, $)
                        }, x.A.get("lineSplitDelay"))
                    }
                    split($, e, t = s.A.yNT) {
                        var x = this.game,
                            i = x.eWI[t];
                        i.mouse.pause || i.CiT(), e ? (0, a.wg)(this.split.bind(this, $, t), e) : (i.JOy($), x.Ifps[t] += $, x.Ifps[t] <= 2 ? x.Pzrs[t] = performance.now() + 300 : (x.Pzrs[t] = NaN, x.Ifps[t] = 0))
                    }
                    zoom($) {
                        var e = this.game,
                            t = 1 - x.A.get("cameraZoomSpeed") / 100;
                        let s = 0;
                        $.detail ? s = $.detail / 3 : $.wheelDelta && (s = -($.wheelDelta / 120)), $ = n.n7(t, s), e.Cwd = (0, i.N)(e.Cwd * $, e.jeQ, 1)
                    }
                    Szi($) {
                        this.game.Cwd = .8 / n.n7(2, $ - 1)
                    }
                    RWX() {
                        var $ = this.game,
                            e = s.A.yNT,
                            t = 0 == e ? 1 : 0,
                            n = $.eWI[t];
                        if (!n.opened) return s.A.Xwi ? (this.game.Zaq(e) ? n.zGd = !0 : n.Fcz = !0, n.uTX = !0, void n.open(s.A.Xwi)) : (0, i.me)("Connect to a server in the server list.", 0, 2e3);
                        if (n.connected) {
                            if ($.MFe = performance.now(), x.A.set("activeTabContext", s.A.yNT = t), $.Zaq(e) && !$.Zaq(t) && !$.ycZ(t)) return this.Xiy();
                            $.Zaq(t) || $.ycZ(t) || n.NTE(), x.A.get("rememberEjecting") || $.eWI[e].jjW(!1)
                        } else(0, i.me)("Tab " + (1 + t) + " is still connecting, please wait.", 0, 1500)
                    }
                    jvz($) {
                        let {
                            x: e,
                            y: t
                        } = this.game.FLt.mouse, x = 0, s = null;
                        return this.game.VTJ.sort(($, e) => $.size - e.size).forEach(i => {
                            var {
                                x: a,
                                y: o
                            } = i.position, a = a - e, o = o - t, a = n.RZ(n.tn(a * a + o * o)) - i.size;
                            ($ ? a < x : a <= 0) && (x = $ ? a : i.size, s = i)
                        }), s
                    }
                    toggleSkins($) {
                        null == $ && ($ = !x.A.get("skinsEnabled")), x.A.set("skinsEnabled", $), this.game.FCi.AaG()
                    }
                    toggleNames($) {
                        null == $ && ($ = !x.A.get("namesEnabled")), x.A.set("namesEnabled", $), this.game.FCi.AaG()
                    }
                    toggleMass($) {
                        null == $ && ($ = !x.A.get("massEnabled")), x.A.set("massEnabled", $), this.game.FCi.AaG()
                    }
                    toggleFood($) {
                        null == $ && ($ = !x.A.get("foodVisible")), x.A.set("foodVisible", $), this.game.scene.food.visible = $
                    }
                    toggleHud($) {
                        null == $ && ($ = !x.A.get("showHud")), x.A.set("showHud", $)
                    }
                    toggleChat($) {
                        null == $ && ($ = !x.A.get("showChat")), x.A.set("showChat", $);
                        var e = this.game;
                        e.running && e.emit("uEBHda", $)
                    }
                    toggleChatToast($) {
                        void 0 === $ && ($ = !x.A.get("showChatToast")), x.A.set("showChatToast", $), this.game.running
                    }
                    selectPlayer() {
                        var $ = this.jvz(!0);
                        $?.pid && (this.game.Qve = $.pid)
                    }
                }
            },
            13711($, e, t) {
                var x = t(95195),
                    s = t(95514),
                    i = t(19099),
                    n = t(83529),
                    a = t(74173),
                    o = t(78225);
                let r = !!localStorage.getItem("adminMode"),
                    l = s.Uk.view;
                new class {
                    constructor() {
                        this.pressed = new Set, this.eJy = $ => {
                            ("" + $.target?.className).includes("message text") || $.preventDefault()
                        }, this.PaK = $ => {
                            x.A.Xrx || ($ = "MOUSE" + $.button, i.Ay.release($))
                        }, this.OZK = $ => {
                            if (!(x.A.Xrx || (e = $.target) instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLButtonElement || ("" + e.className).includes("message"))) {
                                var e, t;
                                if ($.preventDefault(), l.focus(), r && $.shiftKey && x.A.Qve && 0 === $.button) return {
                                    x: e,
                                    y: t
                                } = x.A.FLt.mouse, void x.A.FLt.uot("/teleport " + x.A.Qve + " " + e + " " + t);
                                x.A.Zaq(o.A.yNT) && 0 === $.button ? (t = x.A.kmM.jvz()) && x.A.kmM.Xiy(t.pid) : (t = "MOUSE" + $.button, i.Ay.press(t))
                            }
                        }, this.FJz = $ => {
                            var e, t, $ = a.A.from($.clientX, $.clientY);
                            n.A.get("mouseFreezeSoft") && x.A.FLt.mouse.frozen && ({
                                x: e,
                                y: t
                            } = x.A.WAG, $.x === e && $.y === t || x.A.kmM.PFX(!1)), x.A.WAG.set($), x.A.fjG(null, n.A.get("switchControlMode") ? null : o.A.yNT)
                        }, this.pqb = $ => {
                            if (r && $.shiftKey) {
                                let e = 0;
                                $.detail ? e = $.detail / 3 : $.wheelDelta && (e = -($.wheelDelta / 120)), x.A.FLt.uot("/mass " + x.A.Qve + " " + (e < 0 ? "+" : "-") + "5000")
                            } else x.A.kmM.zoom($)
                        }, this.yAI = $ => {
                            if (!($.target !== l && $.target !== document.body || $.target instanceof HTMLInputElement)) {
                                var e = i.Ay.XRq($.code);
                                if (!(this.pressed.has(e) || $.ctrlKey && "TAB" === e)) {
                                    if (this.pressed.add(e), r && $.shiftKey) this.Wqm(e);
                                    else switch (e) {
                                        case "ESCAPE":
                                            return void this.iqu();
                                        case "ENTER":
                                            return void x.A.emit("osKiSw");
                                        default:
                                            x.A.Xrx || i.Ay.press(e) && $.preventDefault()
                                    }
                                }
                            }
                        }, this.VbF = $ => {
                            $ = i.Ay.XRq($.code), i.Ay.release($), this.pressed.delete($)
                        }, this.yJd = () => {
                            x.A.scene.idx()
                        }, window.addEventListener("blur", () => this.pressed.clear());
                        let $ = $ => ($.preventDefault(), $.returnValue = "Are you sure you want to close the page?");
                        document.body.addEventListener("contextmenu", this.eJy), x.A.on("stopped", () => {
                            window.removeEventListener("beforeunload", $, {
                                capture: !0
                            }), document.body.removeEventListener("mouseup", this.PaK), document.body.removeEventListener("mousedown", this.OZK), document.body.removeEventListener("mousemove", this.FJz), l.removeEventListener("wheel", this.pqb), document.body.removeEventListener("keydown", this.yAI), document.body.removeEventListener("keyup", this.VbF), window.removeEventListener("resize", this.yJd)
                        }), x.A.on("started", () => {
                            window.addEventListener("beforeunload", $, {
                                capture: !0
                            }), document.body.addEventListener("mouseup", this.PaK), document.body.addEventListener("mousedown", this.OZK), document.body.addEventListener("mousemove", this.FJz), l.addEventListener("wheel", this.pqb, {
                                passive: !0
                            }), document.body.addEventListener("keydown", this.yAI), document.body.addEventListener("keyup", this.VbF), window.addEventListener("resize", this.yJd)
                        })
                    }
                    iqu() {
                        if (x.A.replaying) this.pressed.clear(), x.A.stop(), x.A.FQe(!0);
                        else {
                            let $ = !0;
                            x.A.xCd.forEach((e, t) => {
                                x.A.triggerAutoRespawn(t), $ = !1
                            }), $ && x.A.FQe()
                        }
                    }
                    Wqm($) {
                        var e, t;
                        "V" === $ ? ({
                            x: e,
                            y: t
                        } = x.A.FLt.mouse, x.A.FLt.uot("/virus " + e + " " + t)) : "F" === $ ? x.A.FLt.uot("/freeze " + x.A.Qve) : "D" === $ && x.A.FLt.uot("/ignoreBorders " + x.A.Qve)
                    }
                }
            },
            692($, e, t) {
                t.d(e, {
                    A: () => D
                });
                var x = t(78225),
                    s = t(83529),
                    i = t(95514),
                    n = t(23059),
                    a = t(58514),
                    o = t(82196),
                    r = t(74173),
                    l = t(15308),
                    c = t(24968),
                    h = t(70679),
                    A = t(97667),
                    u = t(37921),
                    d = t(35827),
                    g = t(1786),
                    m = t(61036),
                    C = t(30847),
                    p = t(97665),
                    f = t(53967),
                    _ = t(33656),
                    w = t(8125),
                    v = t(35963),
                    b = t(63836),
                    y = t(44895),
                    e = t(37007),
                    e = t.n(e),
                    B = t(54603),
                    F = t(77088);
                let I = 0;
                class D extends e() {
                    get cellCount() {
                        return this.TRu[x.A.yNT]
                    }
                    set Ifp($) {
                        this.Ifps[x.A.yNT] = $
                    }
                    set Pzr($) {
                        this.Pzrs[x.A.yNT] = $
                    }
                    constructor() {
                        super(), this.running = !1, this.YqE = r.A.from(0, 0), this.scores = [0, 0], this.xmF = [0, 0], this.zfx = 30, this.renderer = i.Uk, this.kpA = new o.A, this.settings = s.A, this.fps = new c.A, this.state = x.A, this.eWI = [new u.A(this, I++), new u.A(this, I++)], this.kmM = new A.A(this), this.TRu = [0, 0], this.HsE = [new y.A, new y.A], this.WAG = r.A.from(), this.UJM = [], this.eWF = [], this.FCi = new d.A(this), this.Ifps = [0, 0], this.Pzrs = [NaN, NaN], this.gFX = [0, 0], this.xCd = [], this.flags = 0, this.hYE = [-1, -1], this.Xrx = !0, this.Ypz = v.A, this.cPi = new f.A, this.timing = {
                            d: [0, 0],
                            u: [0, 0],
                            s: [0, 0],
                            c: [0, 0]
                        }, this.render = $ => {
                            var e = this.GAB = performance.now();
                            for (let t = 0; t < 2; t++) {
                                var s = this.Pzrs[t];
                                (isNaN(s) || e < s) && (this.Ifps[t] = 0, this.fjG(null, t))
                            }
                            this.wLz(e), this.aHs(e), this.scene.sort(), this.pWR(!1), x.A.rendering && i.Uk.render(this.scene.container), this.fps.update(this.ticker.FPS), this.frames++, this.frames % 10 == 0 && this.emit("DEPJkV")
                        }, this.oiz = 0, n.Tb.load(s.A.get("virusImageUrl")), n.$P.load(s.A.get("arrowImageUrl"));
                        var $ = [];
                        $.push((0, C.yb)(() => this.emit("GzmcRb"), 1e3)), $.push((0, C.yb)(() => this.emit("kaczpN"), 6e4)), this.intervals = $, g.xx.ROS(this), g.kF.ROS(this), document.addEventListener("visibilitychange", () => {
                            var $;
                            this.running && ($ = "visible" === document.visibilityState, x.A.rendering = $, (0, l.$s)(0, (0, _.nC)($)), $ ? l.oR.close() : (0, l.me)(_.U7, 0))
                        }), document.addEventListener("click", () => {
                            this.running && (x.A.rendering = !0)
                        }), x.A.yNT = s.A.get("activeTabContext"), s.A.on("zrVIMz", ($, e) => {
                            "activeTabContext" === $ && this.jWf(0 === e ? 1 : 0, e)
                        }), this.on("tPqeFj", ($, e) => {
                            if (null == (e = e || x.A.Xwi))(0, l.$s)(1, _.C6), $.promise = Promise.resolve(!1);
                            else {
                                if (null != this.FAk) {
                                    if (!$.first || x.A.Xwi === e) return $.wait = !0, void($.promise = Promise.resolve(!1));
                                    (0, C.DJ)(this.FAk)
                                }
                                this.FAk = (0, C.wg)(() => {
                                    delete this.FAk
                                }, 3200), l.oR.close();
                                let t;
                                t = (t = $.first && (this.eWI.forEach($ => $.opened && $.close()), this.running) ? new Promise($ => {
                                    this.once("stopped", () => $()), this.stop()
                                }) : t) ?? Promise.resolve(), $.promise = new Promise(async $ => {
                                    await t, s.A.get("joinTabsTogether") && (this.FLt.Jtp = !0, this.FLt.OIw = !0), $(await this.FLt.open(e))
                                })
                            }
                        }), this.txC = D.OIT.bind(null, this)
                    }
                    start($) {
                        if (!($.protocol && $.MXg && $.lrL && $.border)) throw Error(_.Ns);
                        this.running = !0, this.protocol = $.protocol, this.PHu = $.PHu || 0, this.MXg = $.MXg, this.replaying = !1, this.flags = 0, this.hYE = [-1, -1], x.A.tXL = [!1, !1], this.lrL = $.lrL, this.tagId = null, this.YqE.reset(), this.scores = [0, 0], this.xmF = [0, 0], this.KRz = 0, this.GAB = 0, this.fps.reset(), h.Ab.clear(), h.DH.clear(), h.nf.clear(), this.HsE.forEach($ => $.clear()), this.TRu = [0, 0], this.WAG.reset(), this.Cwd = .3, this.jeQ = .01;
                        var e = this.border = $.border;
                        (0, b.yc)($.sizes, e), this.camera = {
                            ohR: 0,
                            IFG: [r.A.from(), r.A.from()],
                            GqY: [r.A.from(), r.A.from()],
                            Fql: r.A.from(e.x, e.y),
                            WvL: r.A.from(),
                            ytG: r.A.from(e.x, e.y),
                            sbB: this.Cwd,
                            vaS: this.Cwd
                        }, this.UJM = [], this.eWF = [], this.scene = new a.A(this, e), this.FCi.reset(), this.ticker = new F.Rv, this.ticker.add(this.render), this.replaying || (this.Ifps = [0, 0], this.Pzrs = [NaN, NaN], s.A.get("minimapEnabled") && this.emit("OTySHI"), s.A.get("showMinimapStats") && this.emit("omMooP", !0), s.A.get("showChat") && this.emit("uEBHda", !0), this.emit("lnBlYR"), this.emit("uzPfcB", !0), w.pB.set((0, _.Rr)(1 + x.A.yNT)), w.qC.set(!0), w.m7.set(!0), this.on("GzmcRb", this.txC)), this.frames = 0, this.ticker.start(), this.emit("started")
                    }
                    stop() {
                        if (this.running) {
                            this.running = !1, delete this.protocol, delete this.PHu, delete this.MXg, delete this.replaying, delete this.lrL, delete this.tagId, x.A.reset(), w.m7.set(!0), w.pB.set((0, _.Rr)(1 + x.A.yNT)), w.qC.set(!0), x.A.tXL = [!1, !1], this.YqE.reset(), this.scores = [0, 0], this.xmF = [0, 0], this.KRz = 0, this.GAB = 0, this.bLD(0), this.bLD(1), this.TRu = [0, 0], this.WAG.reset(), delete this.Cwd, delete this.jeQ, delete this.border, delete this.camera, this.FCi.reset();
                            var $ = this.scene;
                            for ($ && ($.BdI(!1), $.Ahq(), $.container.destroy({
                                    children: !0
                                }), delete this.scene), this.renderer.clear(), n.lw.reset(), n.WK.reset(); this.UJM.length;) this.UJM.pop().destroy(!0);
                            for (; this.eWF.length;) this.eWF.pop().destroy();
                            this.ticker.stop(), delete this.ticker, delete this.frames, this.Ifps = [0, 0], this.Pzrs = [NaN, NaN], this.off("GzmcRb", this.txC), this.gFX = [0, 0], this.xCd = [], this.kpA.hha(), this.emit("omMooP", !1), this.emit("uzPfcB", !1), this.emit("IickcJ"), this.emit("uEBHda", !1), this.emit("EnBeEu"), this.emit("PSbuQD"), this.emit("dckXze", !1), this.emit("TNRyrb", 0), this.emit("degdLH"), this.emit("stopped")
                        }
                    }
                    static OIT($) {
                        var e, t, x;
                        for (let s = 0; s < 2; s++) $.pEA(s) && ((e = $.eWI[s]).Iwi = e.BtR());
                        $.pEA(0) && $.pEA(1) ? ([t, x] = $.hYE, $.emit("GfXwco", 80 < (x < t ? t - x : x - t))) : $.emit("GfXwco", !1)
                    }
                    FQe($) {
                        void 0 === $ && ($ = !this.Xrx), this.Xrx !== $ && (this.Xrx = $), this.eWI.forEach(e => {
                            e.mouse.centralize = $
                        }), this.emit("RAwTus", {
                            LZd: !0
                        }), this.emit("Dcxyoc", $), $ || i.Uk.view.focus()
                    }
                    bLD($, e) {
                        var t = h.Ab;
                        let x;
                        for (x of t.values()) x.EZD.disown($), 0 === x.EZD.size && (x.destroy(), t.delete(x.id));
                        for (x of h.nf) x.LnE();
                        if (h.nf.clear(), e)
                            for (x of h.DH) x.EZD.disown($)
                    }
                    triggerAutoRespawn($) {
                        (0, C.DJ)(this.xCd[$]), delete this.xCd[$], x.A.zCS[$] = !1, delete this.gFX[$], this.Xrx || this.Zaq($) || this.VTJ.some(e => e.pid === x.A.pids[$]) || this.eWI[$].NTE()
                    }
                    AUn($) {
                        (0, C.DJ)(this.xCd[$]), delete this.xCd[$], x.A.zCS[$] = !1
                    }
                    wLz($) {
                        for (var e, t = h.nf.values(), x = t.length; x--;)(e = t[x]).update($) && (h.nf.delete(e), e.LnE())
                    }
                    aHs($) {
                        for (var e = h.DH.values(), t = e.length; t--;) e[t].update($)
                    }
                    ZAg($) {
                        var e = r.A.from();
                        if (this.ycZ($)) {
                            let t = 0,
                                x = 0,
                                s = 0,
                                i;
                            for (i of this.HsE[$]) {
                                var {
                                    x: n,
                                    y: a
                                } = i.ytG, o = i.mass;
                                x += n * o, s += a * o, t += o
                            }
                            0 !== t && e.set(x / t, s / t)
                        }
                        return e
                    }
                    nFh($) {
                        if (!this.ycZ($)) return -1;
                        var e = this.ZAg(0 === $ ? 1 : 0);
                        if (!e.abB()) return -1;
                        let t = 1 / 0,
                            x;
                        for (x of this.HsE[$]) {
                            var s = m.RZ(m.tn((0, p.Sl)(x.position, e))) - x.dxt;
                            s < t && (t = s)
                        }
                        return t !== 1 / 0 ? m.tn(t) : -1
                    }
                    pWR($) {
                        var e = this.camera,
                            t = this.GAB - e.ohR,
                            i = void 0 !== this.MFe && 200 > m.tn(this.GAB - this.MFe) ? s.A.get("cameraSwitchDelay") : s.A.get("cameraMoveDelay"),
                            n = (void 0 !== this.MFe && i === s.A.get("cameraMoveDelay") && delete this.MFe, (0, l.N)(t / s.A.get("cameraZoomDelay"), 0, 1)),
                            t = (0, l.N)(t / i, 0, 1),
                            i = this.scene.container,
                            t = e.WvL.set(e.Fql).lerp(e.ytG, t),
                            n = (i.pivot.set(t.x, t.y), (0, l.Cc)(e.sbB, e.vaS, n)),
                            i = (i.scale.set(n), x.A.yNT),
                            [i, a] = s.A.get("useSharedViewport") && 2 === this.oiz ? this.Bum(i) : this.Wgn(i);
                        $ && (e.ytG.set(i), e.vaS = a, e.Fql.set(t), e.sbB = n, e.ohR = this.GAB)
                    }
                    Wgn($) {
                        let e = this.Cwd;
                        if (this.Zaq($)) return [this.camera.IFG[$], e];
                        var t = this.YqE.reset(),
                            x = this.HsE[$];
                        if (0 === x.size) return [this.camera.GqY[$], e];
                        let i = 0,
                            n = 0,
                            a = 0,
                            o = 0,
                            r;
                        for (r of x) {
                            var l = r.mass,
                                {
                                    x: c,
                                    y: h
                                } = (n += l, r.ytG);
                            a += c * l, o += h * l, i += r.dxt
                        }
                        return 0 !== n && t.set(a / n, o / n), s.A.get("autoZoom") && (e *= m.n7(m.jk(64 / i, 1), .22)), this.camera.GqY[$].set(t), [t, e]
                    }
                    Bum($) {
                        let e = this.Cwd;
                        if (this.Zaq($)) return [this.camera.IFG[$], e];
                        var t = this.YqE.reset();
                        if (0 === this.HsE[$].size) return [this.camera.GqY[$], e];
                        var x = this.nFh($),
                            x = x <= 0 || x > s.A.get("sharedViewportMaxDistance");
                        if (x) return this.Wgn($);
                        let i = 0,
                            n = 0,
                            a = 0,
                            o = 0,
                            r;
                        for (r of this.HsE.flatMap($ => $.values())) {
                            var l = r.mass,
                                {
                                    x: c,
                                    y: h
                                } = (n += l, r.ytG);
                            a += c * l, o += h * l, i += r.dxt
                        }
                        return 0 !== n && t.set(a / n, o / n), s.A.get("autoZoom") && (e *= m.n7(m.jk(64 / i, 1), x ? .22 : .17)), this.camera.GqY[$].set(t), [t, e]
                    }
                    fjG($, e = x.A.yNT) {
                        var t;
                        let i = this.scene.container,
                            {
                                x: n,
                                y: a
                            } = this.WAG;
                        s.A.get("switchControlMode") ? this.eWI.forEach(t => {
                            if (t.connected) {
                                var x = t.mouse;
                                if (x.frozen) {
                                    if (null == $ || $ !== t.context) return
                                } else if (null != e && e !== t.context) return;
                                x.set((0, l.N)(i.pivot.x + (n - window.innerWidth / 2) / i.scale.x, -32768, 32767), (0, l.N)(i.pivot.y + (a - window.innerHeight / 2) / i.scale.y, -32768, 32767))
                            }
                        }) : (t = this.FLt).mouse.frozen && (null == $ || $ !== t.context) || this.FLt.mouse.set((0, l.N)(i.pivot.x + (n - window.innerWidth / 2) / i.scale.x, -32768, 32767), (0, l.N)(i.pivot.y + (a - window.innerHeight / 2) / i.scale.y, -32768, 32767))
                    }
                    MOW($) {
                        return ($ = m.F8($) * (1e4 + this.MXg)) - m.RI($)
                    }
                    Hdd($) {
                        return !s.A.get("shortMass") || $ < 1e3 ? $.toFixed(0) : 1e6 <= $ ? +($ / 1e6).toFixed(1) + "m" : +($ / 1e3).toFixed(1) + "k"
                    }
                    jWf($, e) {
                        var t = s.A.get("tabStatusMode");
                        if (0 === t) {
                            var x = this.FCi.ZRd($),
                                i = this.FCi.ZRd(e);
                            i && x && x.rAX(s.A.get("switchUnfocusedColor")), i && i.rAX(s.A.get("switchFocusedColor"))
                        } else if (1 === t) {
                            let n = this.HsE[$],
                                a;
                            for (a of n) a.VEj && a.IvE();
                            for (a of n = this.HsE[e]) a.VEj || a.qLx()
                        }
                    }
                    ycZ($) {
                        return Boolean(this.flags & (0 == $ ? 2 : 4))
                    }
                    DMs($, e) {
                        this.ycZ($) != e && ($ = 0 === $ ? 2 : 4, e ? this.flags |= $ : this.flags &= ~$, (0, B.Jt)(w.m7) == e) && w.m7.set(!e)
                    }
                    get alive() {
                        return Boolean(2 & this.flags) || Boolean(4 & this.flags)
                    }
                    Zaq($) {
                        return Boolean(this.flags & (0 == $ ? 8 : 16))
                    }
                    fwE($, e) {
                        this.Zaq($) != e && ($ = 0 === $ ? 8 : 16, e ? this.flags |= $ : this.flags &= ~$)
                    }
                    pEA($) {
                        return ($ = this.eWI[$]).opened && $.connected
                    }
                    get connected() {
                        return this.eWI.some($ => $.connected)
                    }
                    get Xmo() {
                        return Boolean(8 & this.flags) || !!(16 & this.flags)
                    }
                    get SAd() {
                        return x.A.pids[x.A.yNT]
                    }
                    get FLt() {
                        return this.eWI[x.A.yNT]
                    }
                    jMz($) {
                        let e = 0,
                            t;
                        for (t of this.HsE[$]) e += t.mass;
                        return e
                    }
                    get YIr() {
                        var $;
                        let e = 0;
                        return this.HsE.forEach(t => {
                            for ($ of t) e += $.mass
                        }), e
                    }
                    get score() {
                        return this.scores[x.A.yNT]
                    }
                    get fIW() {
                        return this.xmF[x.A.yNT]
                    }
                    get cells() {
                        return Array.from(h.DH.values())
                    }
                    get VTJ() {
                        return this.cells.filter($ => $.exG).map($ => $)
                    }
                    get Jpt() {
                        return h.nf.values()
                    }
                }
            },
            95195($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var e = t(692),
                    x = t(15308),
                    s = t(33656),
                    e = new e.A;
                (0, x.$s)(1, s.S6), t.g.gameObject = e;
                let i = t.g.game = e
            },
            19099($, e, t) {
                t.d(e, {
                    A4: () => u,
                    Ay: () => d,
                    Mf: () => A
                });
                var x = t(95195),
                    s = t(83529),
                    i = t(78225),
                    n = t(15308),
                    a = t(8125),
                    o = t(24216),
                    r = t(33656),
                    l = t(54603);
                let c = new Map([
                        ["toggleAutoRespawn", () => {
                            var $ = s.A.get("autoRespawn");
                            s.A.set("autoRespawn", !$), $ && i.A.zCS.forEach(($, e) => {
                                $ && x.A.triggerAutoRespawn(e)
                            }), n.oR.fire({
                                title: (0, r.Tw)($),
                                icon: "info",
                                timer: 1500
                            })
                        }],
                        ["saveReplay", () => {
                            var $;
                            x.A.Ypz.running ? ($ = x.A.Ypz.download(), x.A.Ypz.stop(), $.then($ => {
                                (0, n.me)((0, r.bz)($), 0, 1500)
                            })) : ((0, n.me)(r.w8, 0, 3e3), x.A.Ypz.start())
                        }],
                        ["respawn", () => {
                            (0, l.Jt)(a.qC) && (x.A.kmM.Rhi(), x.A.Xrx) && x.A.FQe(!1)
                        }],
                        ["feed", x.A.kmM.feed.bind(x.A.kmM)],
                        ["feedMacro", x.A.kmM.feed.bind(x.A.kmM, !0)],
                        ["split", x.A.kmM.split.bind(x.A.kmM, 1)],
                        ["splitx2", () => x.A.kmM.split(2, s.A.get("delayDoublesplit") ? 40 : 0)],
                        ["splitx3", x.A.kmM.split.bind(x.A.kmM, 3)],
                        ["splitMax", x.A.kmM.split.bind(x.A.kmM, 4)],
                        ["split32", x.A.kmM.split.bind(x.A.kmM, 5)],
                        ["split64", x.A.kmM.split.bind(x.A.kmM, 6)],
                        ["split128", x.A.kmM.split.bind(x.A.kmM, 7)],
                        ["split256", x.A.kmM.split.bind(x.A.kmM, 8)],
                        ["linesplit", x.A.kmM.lineSplit.bind(x.A.kmM)],
                        ["freezeMouse", x.A.kmM.PFX.bind(x.A.kmM)],
                        ["lockLinesplit", x.A.kmM.OsW.bind(x.A.kmM)],
                        ["stopMovement", x.A.kmM.KHK.bind(x.A.kmM)],
                        ["toggleSkins", x.A.kmM.toggleSkins.bind(x.A.kmM)],
                        ["toggleNames", x.A.kmM.toggleNames.bind(x.A.kmM)],
                        ["toggleFood", x.A.kmM.toggleFood.bind(x.A.kmM)],
                        ["toggleMass", x.A.kmM.toggleMass.bind(x.A.kmM)],
                        ["toggleChat", x.A.kmM.toggleChat.bind(x.A.kmM)],
                        ["toggleChatToast", x.A.kmM.toggleChatToast.bind(x.A.kmM)],
                        ["toggleHud", x.A.kmM.toggleHud.bind(x.A.kmM)],
                        ["spectateLock", x.A.kmM.TaP.bind(x.A.kmM)],
                        ["selectPlayer", x.A.kmM.selectPlayer.bind(x.A.kmM)],
                        ["zoomLevel1", x.A.kmM.Szi.bind(x.A.kmM, 1)],
                        ["zoomLevel2", x.A.kmM.Szi.bind(x.A.kmM, 2)],
                        ["zoomLevel3", x.A.kmM.Szi.bind(x.A.kmM, 3)],
                        ["zoomLevel4", x.A.kmM.Szi.bind(x.A.kmM, 4)],
                        ["zoomLevel5", x.A.kmM.Szi.bind(x.A.kmM, 5)],
                        ["switchMultibox", x.A.kmM.RWX.bind(x.A.kmM)],
                        ["switchSplit", () => {
                            x.A.kmM.split(2), x.A.kmM.RWX(), x.A.kmM.split(8)
                        }],
                        ["switchLinesplit", () => {
                            x.A.kmM.lineSplit(), x.A.kmM.RWX(), x.A.kmM.split(8)
                        }],
                        ["splitTrigger", () => {
                            var $ = x.A.kmM.jvz(!0);
                            return $ ? o.h.target && $.pid === o.h.target.pid ? o.h.reset() : void o.h.watch($.pid, 0) : o.h.target && o.h.reset()
                        }],
                        ["doublesplitTrigger", () => {
                            var $ = x.A.kmM.jvz(!0);
                            return $ ? o.h.target && $.pid === o.h.target.pid ? o.h.reset() : void o.h.watch($.pid, 1) : o.h.target && o.h.reset()
                        }],
                        ["linesplitTrigger", () => {
                            var $ = x.A.kmM.jvz(!0);
                            return $ ? o.h.target && $.pid === o.h.target.pid ? o.h.reset() : void o.h.watch($.pid, 2) : o.h.target && o.h.reset()
                        }],
                        ["tricksplitTrigger", () => {
                            var $ = x.A.kmM.jvz(!0);
                            return $ ? o.h.target && $.pid === o.h.target.pid ? o.h.reset() : void o.h.watch($.pid, 3) : o.h.target && o.h.reset()
                        }],
                        ["contextMenu", () => {
                            var $ = x.A.kmM.jvz(!0);
                            x.A.emit("WdtSom", $?.pid ? $.player : null, x.A.WAG.clone())
                        }],
                        ["lockMouse", () => {
                            if (!x.A.Xmo) {
                                var $, e, t, s = i.A.yNT,
                                    n = i.A.pids[s],
                                    a = x.A.eWI[i.A.yNT],
                                    o = a.mouse,
                                    r = !o.pause;
                                if (r) {
                                    let l = 0,
                                        c, h, A;
                                    for (A of x.A.HsE[s]) A.pid === n && (e = A.position, t = Math.hypot($ = o.x - e.x, e = o.y - e.y), (t = A.mass / t) > l) && (l = t, c = $, h = e);
                                    0 !== l && (s = Math.atan2(h, c), o.x = o.x + 1e4 * Math.cos(s), o.y = o.y + 1e4 * Math.sin(s), a.CiT())
                                }
                                o.pause = r, x.A.emit("RAwTus", {
                                    mouseFrozen: !0
                                })
                            }
                        }],
                        ["m-feed", () => {
                            x.A.eWI[0 === i.A.yNT ? 1 : 0].jjW()
                        }],
                        ["m-feedMacro", () => {
                            x.A.eWI[0 === i.A.yNT ? 1 : 0].jjW(!0)
                        }],
                        ["m-split", () => {
                            x.A.kmM.split(1, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-splitx2", () => {
                            x.A.kmM.split(2, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-splitx3", () => {
                            x.A.kmM.split(3, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-splitMax", () => {
                            x.A.kmM.split(4, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-split32", () => {
                            x.A.kmM.split(5, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-split64", () => {
                            x.A.kmM.split(6, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-split128", () => {
                            x.A.kmM.split(7, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-split256", () => {
                            x.A.kmM.split(8, null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-linesplit", () => {
                            x.A.kmM.lineSplit(0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-freezeMouse", () => {
                            x.A.kmM.PFX(null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-lockLinesplit", () => {
                            x.A.kmM.OsW(null, 0 === i.A.yNT ? 1 : 0)
                        }],
                        ["m-respawn", () => {
                            x.A.eWI[0 === i.A.yNT ? 1 : 0].NTE()
                        }],
                        ["m-stopMovement", () => {
                            x.A.kmM.KHK(null, 0 === i.A.yNT ? 1 : 0)
                        }]
                    ]),
                    h = {
                        feed: "W",
                        feedMacro: "MOUSE0",
                        split: "SPACE",
                        splitx2: "G",
                        splitx3: "H",
                        splitMax: "T",
                        split32: "",
                        split64: "",
                        linesplit: "Z",
                        freezeMouse: "",
                        lockLinesplit: "",
                        lockMouse: "",
                        respawn: "",
                        toggleAutoRespawn: "",
                        stopMovement: "",
                        toggleSkins: "",
                        toggleNames: "",
                        toggleMass: "",
                        spectateLock: "Q",
                        selectPlayer: "E",
                        saveReplay: "R",
                        toggleChat: "",
                        toggleChatToast: "",
                        toggleHud: "",
                        zoomLevel1: "1",
                        zoomLevel2: "2",
                        zoomLevel3: "3",
                        zoomLevel4: "4",
                        zoomLevel5: "5",
                        switchMultibox: "",
                        switchSplit: "",
                        switchLinesplit: "",
                        doublesplitTrigger: "",
                        linesplitTrigger: "",
                        tricksplitTrigger: "",
                        contextMenu: "MOUSE1",
                        "m-split": "",
                        "m-splitx2": "",
                        "m-splitx3": "",
                        "m-splitMax": "",
                        "m-split32": "",
                        "m-split64": "",
                        "m-split128": "",
                        "m-split256": "",
                        "m-linesplit": "",
                        "m-freezeMouse": "",
                        "m-lockLinesplit": "",
                        "m-respawn": "",
                        "m-stopMovement": "",
                        "m-feed": "",
                        "m-feedMacro": ""
                    },
                    A = {
                        "Switch Tab": "switchMultibox",
                        Feed: "feed",
                        "Macro Feed": "feedMacro",
                        Split: "split",
                        "Double Split": "splitx2",
                        "Triple Split": "splitx3",
                        "Quad Split": "splitMax",
                        "32 Split": "split32",
                        "64 Split": "split64",
                        "128 Split": "split128",
                        "256 Split": "split256",
                        "Diagonal Linesplit": "linesplit",
                        "Freeze Mouse": "freezeMouse",
                        "Lock Linesplit": "lockLinesplit",
                        "Lock Mouse Direction": "lockMouse",
                        Respawn: "respawn",
                        "Toggle Auto Respawn": "toggleAutoRespawn",
                        "Stop Movement": "stopMovement",
                        "Toggle Skins": "toggleSkins",
                        "Toggle Names": "toggleNames",
                        "Toggle Mass": "toggleMass",
                        "Toggle Spectate Lock": "spectateLock",
                        "Select Player": "selectPlayer",
                        "Start/Stop Recording": "saveReplay",
                        "Toggle Chat": "toggleChat",
                        "Toggle Toast Chat": "toggleChatToast",
                        "Toggle HUD": "toggleHud",
                        "Zoom: Level 1": "zoomLevel1",
                        "Zoom: Level 2": "zoomLevel2",
                        "Zoom: Level 3": "zoomLevel3",
                        "Zoom: Level 4": "zoomLevel4",
                        "Zoom: Level 5": "zoomLevel5",
                        "Double Split Macro": "switchSplit",
                        "Linesplit Trick Macro": "switchLinesplit",
                        "One Split Trigger": "splitTrigger",
                        "Double Split Trigger": "doublesplitTrigger",
                        "Linesplit Trigger": "linesplitTrigger",
                        "Context Menu": "contextMenu"
                    },
                    u = {
                        Feed: "m-feed",
                        "Feed Macro": "m-feedMacro",
                        Split: "m-split",
                        "Double Split": "m-splitx2",
                        "Triple Split": "m-splitx3",
                        "Quad Split": "m-splitMax",
                        "32 Split": "m-split32",
                        "64 Split": "m-split64",
                        "128 Split": "m-split128",
                        "256 Split": "m-split256",
                        "Diagonal Linesplit": "m-linesplit",
                        "Freeze Mouse": "m-freezeMouse",
                        "Lock Linesplit": "m-lockLinesplit",
                        Respawn: "m-respawn",
                        "Stop Movement": "m-stopMovement"
                    },
                    d = t.g.input = new class {
                        constructor() {
                            this.version = 2, this.released = new Map, this.pressed = new Map, this.load()
                        }
                        hFn() {
                            +localStorage.getItem("hotkeysVersion") !== this.version && (localStorage.setItem("hotkeysVersion", "" + this.version), "hotkeys" in localStorage) && localStorage.removeItem("hotkeys")
                        }
                        load() {
                            try {
                                var $ = JSON.parse(localStorage.getItem("hotkeys"));
                                if ("object" != typeof $ || null == $) throw Error("Parsing hotkeys failed, opting for defaults");
                                var e = Object.values($),
                                    t = Object.assign({}, h);
                                let x;
                                for (x in t) {
                                    var s = t[x];
                                    s && e.includes(s) && (t[x] = h[x])
                                }
                                "multibox" in $ && $.multibox && !$.switchMultibox ? (delete $.multibox, $.switchMultibox = $.multibox) : $.switchMultibox || ($.switchMultibox = h.switchMultibox), this.WuV = Object.assign(t, $)
                            } catch (i) {
                                (0, n.$s)(2, "string" == typeof i ? i : i && i.message || "An error occurred while parsing hotkeys"), this.WuV = Object.assign({}, h)
                            }
                            this.hNu(this.WuV)
                        }
                        save() {
                            localStorage.setItem("hotkeys", JSON.stringify(this.WuV))
                        }
                        reset() {
                            return localStorage.removeItem("hotkeys"), this.load(), this.WuV
                        }
                        get($) {
                            return $ in this.WuV && this.WuV[$] || "None"
                        }
                        set($, e) {
                            if (!c.has($)) return !1;
                            if (this.WuV[$] !== e) {
                                if (e) {
                                    let t;
                                    for (t of Object.entries(this.WuV)) t[1] === e && (this.WuV[t[0]] = "")
                                }
                                this.WuV[$] = e, this.save(), this.hNu(this.WuV)
                            }
                            return !0
                        }
                        hNu($) {
                            this.pressed.clear();
                            let e;
                            for (e in $) {
                                var t, n = $[e];
                                c.has(e) && (t = c.get(e), this.pressed.set(n, t))
                            }
                            this.released.clear(), "feedMacro" in $ && this.released.set($.feedMacro, () => x.A.kmM.feed(!1)), "m-feedMacro" in $ && this.released.set($["m-feedMacro"], () => {
                                s.A.get("switchControlMode") && x.A.eWI[0 === i.A.yNT ? 1 : 0].jjW(!1)
                            })
                        }
                        press($) {
                            return !!this.pressed.has($) && (this.pressed.get($)(), !0)
                        }
                        release($) {
                            return !!this.released.has($) && (this.released.get($)(), !0)
                        }
                        XRq($) {
                            return $ ? $.toString().toUpperCase().replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "") : "Unknown"
                        }
                    }
            },
            34738($, e, t) {
                t.d(e, {
                    A: () => c
                });
                var x = t(95195),
                    s = t(95514),
                    i = t(92915),
                    n = (t(15308), t(61036)),
                    a = t(75908),
                    o = t(87706),
                    r = t(83529);
                let l = a.aN;
                class c {
                    constructor($) {
                        this.tagId = null, this.pid = $, this.texture = o.RenderTexture.create({
                            width: a.eU + l,
                            height: a.eU + l,
                            resolution: r.A.get("gameResolution")
                        }), this.HcK = this.duk(), this.PJd()
                    }
                    get visibility() {
                        let $ = 2;
                        return x.A.eWI.some(e => !(!e.connected || e.tagId !== this.tagId || ($ = 1, 0))), $
                    }
                    fyP($) {
                        return this.tagId !== ($ = $ || null) && (this.tagId = $, !0)
                    }
                    rAX($, e = 9.5, t = 20) {
                        this.wFC = $ = $ || 0, (t = new o.Graphics().lineStyle(t, $, 1).drawCircle(0, 0, a.Wp - e).endFill()).pivot.set(-a.Wp), s.Uk.render(t, this.texture, !1)
                    }
                    AcX($) {
                        $ !== this.Rak && ($ ? this.Rak = !0 : delete this.Rak, x.A.VTJ.filter($ => $.pid === this.pid).forEach(e => {
                            $ ? e.xtA() : e.DgL()
                        }))
                    }
                    duk() {
                        var $ = new o.Container;
                        return $.pivot.set(-a.eU / 2), $.addChildAt(this.PzK = (0, a.Jm)(this.ppI = c.wed(this), this.SYL = c.lUo(this)), 0), $.scale.set(a.eU / (2 * a.Wp)), $.position.set(l / 2, l / 2), $
                    }
                    PJd() {
                        s.Uk.render(this.HcK, this.texture, !0), this.wFC && this.rAX(this.wFC)
                    }
                    static wed($) {
                        var e = x.A.MOW($.pid),
                            $ = $.fvy ? i.O$ : i.ic;
                        return $[n.RI(e * $.length)]
                    }
                    static lUo($) {
                        var e = x.A.MOW($.pid),
                            $ = $.fvy ? i.oZ : i.cy;
                        return $[n.RI(e * $.length)]
                    }
                }
                c.prototype.destroyed = !1
            },
            53278($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83529),
                    s = t(33656),
                    e = t(34738),
                    i = t(87706);
                class n extends e.A {
                    constructor($) {
                        super($)
                    }
                    gkY($) {
                        return this.name !== $ && (this.name = $, this.DGt(), !0)
                    }
                    DGt() {
                        this.xMs(this.name || s.Ab)
                    }
                    xMs($) {
                        this.RiW ? this.RiW.text = $ : this.RiW = new i.Text($, x.A.lqB), this.RiW.style.fill = 16777215, this.RiW.updateText(!1)
                    }
                    AaG() {
                        this.cSM = null != this.vyo ? this.vyo : x.A.get("namesEnabled") && x.A.get("showNames") >= this.visibility, this.VAP = x.A.get("massEnabled") && x.A.get("showMass") >= this.visibility
                    }
                    destroy() {
                        this.HcK.destroy(!0), this.texture.VqU = !0, this.texture.destroy(!0), this.RiW && (this.RiW.destroy(!0), delete this.RiW), this.destroyed = !0
                    }
                }
                n.prototype.destroyed = !1, n.prototype.fvy = !0
            },
            35827($, e, t) {
                t.d(e, {
                    A: () => a
                });
                var x = t(41958),
                    s = t(53278),
                    i = t(78225),
                    e = (t(15308), t(37007)),
                    e = t.n(e),
                    n = t(33656);
                class a extends e() {
                    constructor($) {
                        super(), this.players = new Map, this.bots = new Map, this.IOE = [, , ], this.CBb = [], this.game = $
                    }
                    reset() {
                        this.players.forEach($ => $.destroy()), this.players.clear(), this.bots.forEach($ => $.destroy()), this.bots.clear(), this.IOE.splice(0, 2), this.CBb.splice(0, this.CBb.length)
                    }
                    get zZH() {
                        return this.bots.size
                    }
                    get eLz() {
                        return this.players.size
                    }
                    has($) {
                        return this.players.has($) || this.bots.has($)
                    }
                    vrx($) {
                        return this.players.has($) ? this.players.get($) : null
                    }
                    qsc($) {
                        return this.bots.has($) ? this.bots.get($) : null
                    }
                    get($) {
                        return this.players.has($) ? this.players.get($) : this.bots.has($) ? this.bots.get($) : null
                    }
                    ytA($, e) {
                        this.IOE[$] = e
                    }
                    ZRd($) {
                        return this.IOE[$] || null
                    }
                    RRW({
                        pid: $,
                        nickname: e,
                        skin: t,
                        skinUrl: a,
                        hWu: o,
                        tagId: r,
                        bot: l,
                        ...c
                    }) {
                        var h;
                        let A;
                        return l ? this.bots.has($) || (this.bots.set($, A = new s.A($)), A.gkY(n.LK), A.AaG(), this.emit("JmnFrX", $)) : (h = (this.players.has($) ? (A = this.players.get($), this.emit("uJxLgi", $)) : (A = new x.A($), 0 <= (h = i.A.pids.indexOf($)) && (this.IOE[h] = A), this.players.set($, A), this.emit("WnIviS", $)), "string" != typeof t || l || (a = "https://skins.vanis.io/s/" + t), c.perk_badges && (A.jqz = c.perk_badges), A.gkY(e, o || c.perk_color)), $ = A.Xtl(a), l = A.fyP(r), (h || $ || l) && A.AaG()), A
                    }
                    AaG($, e) {
                        this.players.forEach(e => {
                            $ && $.has(e) || e.AaG()
                        }), this.bots.forEach($ => {
                            e && e.has($) || $.AaG()
                        })
                    }
                    NAQ($, e = !1) {
                        this.players.has($) && (e ? this.CBb.push($) : (e = this.players.get($), this.players.delete($), this.emit("KneCHr", $), e.destroy()))
                    }
                    Wca($, e = !1) {
                        this.bots.has($) && (e ? this.CBb.push($) : (e = this.bots.get($), this.bots.delete($), this.emit("seZDXL", $), e.destroy()))
                    }
                    remove($, e = !1) {
                        e ? this.CBb.push($) : this.bots.has($) ? this.Wca($) : this.NAQ($)
                    }
                    rvD() {
                        for (var $ = this.CBb; $.length;) {
                            var e = $.shift();
                            this.remove(e)
                        }
                    }
                }
            },
            41958($, e, t) {
                t.d(e, {
                    A: () => c
                });
                var x = t(95195),
                    s = t(83529),
                    i = t(15308),
                    n = t(75908),
                    e = t(34738),
                    a = t(95514),
                    o = t(33656),
                    r = t(87706);
                let l = (0, n.Jm)(0, 0);
                class c extends e.A {
                    constructor($) {
                        super($), this.skinUrl = null, this.isMe = x.A.state.pids.includes($)
                    }
                    GRd($) {
                        return $ = new r.BaseTexture(new r.resources.ImageBitmapResource($)), $ = new r.Texture($), ($ = new r.Sprite($)).anchor.set(.5), $.width = $.height = n.eU, $.position.set(0, 0), $
                    }
                    cPn($) {
                        return this.TIJ = $ ? "#" + $ : null, this.hWu = $ ? parseInt($, 16) : null
                    }
                    gkY($, e) {
                        return $ = $ || o.Ab, (this.tQg !== $ || this.aLU !== e) && (this.tQg = $, this.aLU = e, this.DGt(), !0)
                    }
                    DGt() {
                        var $ = this.tQg === o.Ab,
                            e = this.tQg === o.CF;
                        let t = $ ? "" : this.tQg;
                        var i = this.name,
                            n = this.hWu;
                        let a = this.cPn($ || e ? null : this.aLU);
                        this.xMs(t, a), !$ && !e && this.RiW.texture.width > s.A.get("cellLongNameThreshold") && (t = o.CF, a = this.cPn(null), this.xMs(t, a)), this.name = $ ? o.Ab : t, i === this.name && n === this.hWu || x.A.emit("VAEhBF", this.pid, t, a, a || null)
                    }
                    xMs($, e) {
                        this.RiW ? this.RiW.text = $ : this.RiW = new r.Text($, s.A.lqB), this.RiW.style.fill = "number" == typeof e ? e : 16777215, this.RiW.updateText(!1)
                    }
                    Xtl($) {
                        return ($ = $ || null) !== this.skinUrl && (this.iIm(), this.yLF() && this.PJd(), this.skinUrl = $, this.urX && this.Tqd(), !0)
                    }
                    yLF() {
                        return !!this.tFf && (this.HcK.removeChild(l), this.tFf.mask = null, this.tFf.destroy(!0), delete this.tFf, !0)
                    }
                    Tqd() {
                        this.iIm(), this.XIv = x.A.kpA.bCr(this.skinUrl, $ => {
                            this.tFf = this.GRd($), (this.tFf.mask = l).position.set(0, 0), this.HcK.addChild(this.tFf.mask, this.tFf), this.PJd()
                        })
                    }
                    AaG() {
                        let $ = s.A.get("namesEnabled"),
                            e = s.A.get("skinsEnabled"),
                            t = s.A.get("massEnabled");
                        t = this.isMe ? ($ = s.A.get("showOwnName"), e = s.A.get("showOwnSkin"), s.A.get("showOwnMass")) : ($ = s.A.get("showNames") >= this.visibility, e = s.A.get("showSkins") >= this.visibility, s.A.get("showMass") >= this.visibility), $ = s.A.get("namesEnabled") && $, e = s.A.get("skinsEnabled") && e, t = s.A.get("massEnabled") && t, null != this.vyo && ($ = this.vyo), (e = null != this.GeA ? this.GeA : e) && !this.urX ? this.tFf ? (this.tFf.visible = !0, this.PJd()) : null != this.skinUrl && this.Tqd() : !e && this.urX && (this.iIm(), this.tFf) && (this.tFf.visible = !1, this.PJd()), this.cSM = $, this.urX = e, this.VAP = t, this.eew = s.A.get("showNameColor")
                    }
                    iIm() {
                        this.XIv && (this.XIv(), delete this.XIv)
                    }
                    rAX($, e = 5.5, t = 10, x = 1) {
                        this.wFC = $ = $ || 0, (t = this.qTn = new r.Graphics().lineStyle(t, $, x).drawCircle(0, 0, n.Wp - e).endFill()).pivot.set(0, 0), t.position.set(n.Wp + n.aN / 2, n.Wp + n.aN / 2), a.Uk.render(t, this.texture, !1)
                    }
                    PJd() {
                        var $;
                        let e = this.SYL;
                        this.isMe || !this.tFf || !this.urX && !this.GeA || 0 === ($ = (0, n.E1)(a.Uk.extract.pixels(this.tFf))) || isNaN($) || (e = $), this.PzK.clear(), this.PzK.lineStyle(5, (0, i.v2)(e, .5), 1).beginFill(this.ppI).drawCircle(0, 0, n.Wp + .5).endFill(), super.PJd()
                    }
                    destroy() {
                        this.iIm(), this.yLF(), this.HcK.destroy(!0), this.texture.destroy(!0), this.texture.VqU = !0, this.RiW && this.RiW.destroy(!0), x.A.emit("kIoddg", this.pid), this.destroyed = !0
                    }
                }
                c.prototype.destroyed = !1, c.prototype.faB = !0
            },
            75908($, e, t) {
                t.d(e, {
                    E1: () => r,
                    Jm: () => o,
                    Wp: () => n,
                    aN: () => a,
                    eU: () => i
                });
                var e = t(83529),
                    x = t(61036),
                    s = t(87706);
                let i = e.A.GAS,
                    n = i / 2,
                    a = e.A.get("cellBorderSize"),
                    o = ($, e) => new s.Graphics().lineStyle(5, e, 1).beginFill($).drawCircle(0, 0, n + .5).endFill(),
                    r = $ => {
                        for (var e = 0, t = 0, s = 0, i = 0, n = $.byteLength, a = 0; a < n; a += 4) {
                            var o = $[a],
                                r = $[a + 1],
                                l = $[a + 2],
                                c = $[a + 3];
                            e += o * o * c, t += r * r * c, s += l * l * c, i += c
                        }
                        return i ? x.LI(x.RZ(e / i)) << 16 | x.LI(x.RZ(t / i)) << 8 | x.LI(x.RZ(s / i)) << 0 : NaN
                    }
            },
            35963($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var x = t(95514),
                    s = t(30847);
                let i = new class {
                    constructor() {
                        this.chunks = [], this.running = !1;
                        var $ = x.Uk.view.captureStream(30);
                        this.recorder = new MediaRecorder($, {
                            mimeType: "video/webm; codecs=vp9",
                            audioBitsPerSecond: 0,
                            videoBitsPerSecond: 5e6
                        }), this.recorder.addEventListener("dataavailable", $ => this.add($.data))
                    }
                    start() {
                        this.running || (this.chunks.length = 0, this.running = !0, this.recorder.start(30))
                    }
                    add($) {
                        450 < this.chunks.length && this.chunks.shift(), this.chunks.push($)
                    }
                    async download() {
                        var $ = this.chunks.slice(0);
                        this.stop();
                        {
                            var e = $ => $ < 10 ? "0" + $ : "" + $,
                                t = new Date,
                                e = t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + "." + e(t.getHours()) + "-" + e(t.getMinutes()) + "-" + e(t.getSeconds()),
                                t = URL.createObjectURL(new Blob($, {
                                    type: "video/webm"
                                }));
                            let x = document.createElement("a");
                            x.href = t, x.setAttribute("download", e + ".webm"), document.body.appendChild(x), x.click(), (0, s.wg)(() => document.body.removeChild(x))
                        }
                        return Math.round($.length / 15)
                    }
                    stop() {
                        this.running && (this.running = !1, this.chunks.length = 0, this.recorder.stop())
                    }
                }
            },
            83529($, e, t) {
                t.d(e, {
                    A: () => h
                });
                var e = t(58489),
                    x = t(61036),
                    s = t(15308),
                    i = t(37007),
                    i = t.n(i),
                    n = t(87706);
                t(31091), t(57088);
                let a = new Map,
                    o = (a.set("useWebGL", new e.A("useWebGL", !0)), a.set("gameResolution", new e.A("gameResolution", 1)), a.set("smallTextThreshold", new e.A("smallTextThreshold", 40)), a.set("autoZoom", new e.A("autoZoom", !1)), a.set("rememeberEjecting", new e.A("rememeberEjecting", !0)), a.set("autoRespawn", new e.A("autoRespawn", !1)), a.set("mouseFreezeSoft", new e.A("mouseFreezeSoft", !0)), a.set("drawDelay", new e.A("drawDelay", 120)), a.set("cameraMoveDelay", new e.A("cameraMoveDelay", 150)), a.set("cameraSwitchDelay", new e.A("cameraSwitchDelay", 200)), a.set("cameraZoomDelay", new e.A("cameraZoomDelay", 150)), a.set("cameraZoomSpeed", new e.A("cameraZoomSpeed", 10)), a.set("replayDuration", new e.A("replayDuration", 8)), a.set("showReplaySaved", new e.A("showReplaySaved", 2)), a.set("showNames", new e.A("showNames", 2)), a.set("showMass", new e.A("showMass", 2)), a.set("showSkins", new e.A("showSkins", 1)), a.set("showOwnName", new e.A("showOwnName", !0)), a.set("showOwnMass", new e.A("showOwnMass", !0)), a.set("showOwnSkin", new e.A("showOwnSkin", !0)), a.set("showCrown", new e.A("showCrown", !0)), a.set("foodVisible", new e.A("foodVisible", !0)), a.set("eatAnimation", new e.A("eatAnimation", !0)), a.set("showHud", new e.A("showHud", !0)), a.set("showLeaderboard", new e.A("showLeaderboard", !0)), a.set("showServerName", new e.A("showServerName", !1)), a.set("showChat", new e.A("showChat", !0)), a.set("showChatToast", new e.A("showChatToast", !1)), a.set("minimapEnabled", new e.A("minimapEnabled", !0)), a.set("minimapLocations", new e.A("minimapLocations", !0)), a.set("showFPS", new e.A("showFPS", !0)), a.set("showPing", new e.A("showPing", !0)), a.set("showCellCount", new e.A("showCellCount", !0)), a.set("showPlayerScore", new e.A("showPlayerScore", !1)), a.set("showPlayerMass", new e.A("showPlayerMass", !0)), a.set("showLatencyWarning", new e.A("showLatencyWarning", !0)), a.set("showClock", new e.A("showClock", !1)), a.set("showSessionTime", new e.A("showSessionTime", !1)), a.set("showPlayerCount", new e.A("showPlayerCount", !1)), a.set("showSpectators", new e.A("showSpectators", !1)), a.set("showRestartTiming", new e.A("showRestartTiming", !1)), a.set("showTagTotalMass", new e.A("showRestartTiming", !1)), a.set("showBlockedMessageCount", new e.A("showBlockedMessageCount", !0)), a.set("filterChatMessages", new e.A("filterChatMessages", !0)), a.set("clearChatMessages", new e.A("clearChatMessages", !0)), a.set("backgroundColor", new e.A("backgroundColor", "101010")), a.set("borderColor", new e.A("borderColor", "000000")), a.set("foodColor", new e.A("foodColor", "ffffff")), a.set("ejectedColor", new e.A("ejectedColor", "ea2577")), a.set("cellNameOutlineColor", new e.A("cellNameOutlineColor", "000000")), a.set("cursorImageUrl", new e.A("cursorImageUrl", "")), a.set("backgroundImageUrl", new e.A("backgroundImageUrl", "./img/background.png")), a.set("virusImageUrl", new e.A("virusImageUrl", "./img/virus.png")), a.set("arrowImageUrl", new e.A("arrowImageUrl", "./img/arrow.png")), a.set("cellMassColor", new e.A("cellMassColor", "ffffff")), a.set("cellMassOutlineColor", new e.A("AAA", "000000")), a.set("cellNameFont", new e.A("cellNameFont", "Hind Madurai")), a.set("cellNameWeight", new e.A("cellNameWeight", 1)), a.set("cellNameOutline", new e.A("cellNameOutline", 2)), a.set("cellNameSmoothOutline", new e.A("cellNameSmoothOutline", !0)), a.set("cellLongNameThreshold", new e.A("cellLongNameThreshold", 750)), a.set("cellMassFont", new e.A("cellMassFont", "Ubuntu")), a.set("cellMassWeight", new e.A("cellMassWeight", 2)), a.set("cellMassOutline", new e.A("cellMassOutline", 2)), a.set("cellMassTextSize", new e.A("cellMassTextSize", 0)), a.set("cellMassSmoothOutline", new e.A("cellMassSmoothOutline", !0)), a.set("shortMass", new e.A("shortMass", !0)), a.set("showBackgroundImage", new e.A("showBackgroundImage", !0)), a.set("backgroundImageRepeat", new e.A("backgroundImageRepeat", !0)), a.set("backgroundDefaultIfUnequal", new e.A("backgroundDefaultIfUnequal", !0)), a.set("backgroundImageOpacity", new e.A("backgroundImageOpacity", .6)), a.set("useFoodColor", new e.A("useFoodColor", !1)), a.set("namesEnabled", new e.A("namesEnabled", !0)), a.set("skinsEnabled", new e.A("skinsEnabled", !0)), a.set("massEnabled", new e.A("massEnabled", !0)), a.set("showLocations", new e.A("showLocations", !1)), a.set("cellBorderSize", new e.A("cellBorderSize", 1)), a.set("autoHideReplayControls", new e.A("autoHideReplayControls", !1)), a.set("minimapSize", new e.A("minimapSize", 220)), a.set("minimapFPS", new e.A("minimapFPS", 30)), a.set("minimapSmoothing", new e.A("minimapSmoothing", .08)), a.set("rememeberEjecting", new e.A("rememeberEjecting", !0)), a.set("switchUnfocusedColor", new e.A("switchUnfocusedColor", 16777215)), a.set("switchFocusedColor", new e.A("switchFocusedColor", 16711935)), a.set("activeTabContext", new e.A("activeTabContext", 0)), a.set("animateEjectedCells", new e.A("animateEjectedCells", !0)), a.set("animatePlayerCells", new e.A("animatePlayerCells", !1)), a.set("inputs", new e.A("inputs", '{"names":["Tab 1","Tab 2"],"skins":["https://skins.vanis.io/s/OKKqrM","https://skins.vanis.io/s/OKKqrM"],"tags":["",""]}')), a.set("showTotalPlayerMass", new e.A("showTotalPlayerMass", !0)), a.set("showTotalPlayerScore", new e.A("showTotalPlayerScore", !0)), a.set("excludeBotsOnLeaderboard", new e.A("excludeBotsOnLeaderboard", !1)), a.set("useAntialiasing", new e.A("useAntialiasing", !1)), a.set("menuFoodGlow", new e.A("menuFoodGlow", !1)), a.set("chatHeight", new e.A("chatHeight", 200)), a.set("lineSplitDelay", new e.A("lineSplitDelay", 750)), a.set("cellsOpacity", new e.A("cellsOpacity", 1)), a.set("showStats", new e.A("showStats", !0)), a.set("useSharedViewport", new e.A("useSharedViewport", !0)), a.set("sharedViewportMaxDistance", new e.A("sharedViewportMaxDistance", 7e3)), a.set("linkTabNames", new e.A("linkTabNames", !1)), a.set("linkTabSkins", new e.A("linkTabSkins", !1)), a.set("linkTabTags", new e.A("linkTabTags", !1)), a.set("joinTabsTogether", new e.A("joinTabsTogether", !1)), a.set("switchControlMode", new e.A("switchControlMode", !1)), a.set("hudScale", new e.A("hudScale", 1)), a.set("triggerAtCells", new e.A("triggerAtCells", 12)), a.set("triggerIgnoreSizeEnabled", new e.A("triggerIgnoreSizeEnabled", !1)), a.set("triggerIgnoreSizeBelow", new e.A("triggerIgnoreSizeBelow", 10)), a.set("minimapResolution", new e.A("minimapResolution", 1.5)), a.set("showMinimapStats", new e.A("showMinimapStats", !0)), a.set("tabStatusMode", new e.A("tabStatusMode", 0)), ($, e) => {
                        let t;
                        switch ($) {
                            case 3:
                                t = e / 5;
                                break;
                            case 1:
                                t = e / 20;
                                break;
                            default:
                                t = e / 10
                        }
                        return x.mk(t)
                    }),
                    r = $ => 0 === $ ? "thin" : 2 === $ ? "bold" : "normal",
                    l = "extendedSettings";
                class c extends i() {
                    buj() {
                        this.set("inputs", JSON.stringify(this.inputs))
                    }
                    DQm() {
                        try {
                            let $;
                            "inputs" in this.njC ? $ = this.get("inputs") : ((0, s.$s)(1, "No player inputs found; falling back to defaults"), $ = this.eyU("inputs"), this.set("inputs", $)), this.inputs = JSON.parse($)
                        } catch (e) {
                            (0, s.$s)(1, "Failed to parse player inputs; falling back to defaults"), this.inputs = JSON.parse(this.eyU("inputs")), this.buj()
                        }
                    }
                    constructor() {
                        super(), this.GAS = 512, this.setMaxListeners(0);
                        let $ = {},
                            e = 0;
                        if (l in localStorage) try {
                            $ = JSON.parse(localStorage.getItem(l)), e = 1
                        } catch (t) {}
                        if (!e && "settings" in localStorage) try {
                            $ = JSON.parse(localStorage.getItem("settings")), e = 2
                        } catch (x) {}
                        0 === e ? (this.njC = $ = {}, a.forEach((e, t) => {
                            $[t] = e.value
                        }), this.store()) : this.njC = $, a.forEach((e, t) => {
                            t in $ || ($[t] = e.value)
                        }), this.DQm(), 2 === e && this.store(), this.set("skinsEnabled", !0), this.set("namesEnabled", !0), this.set("massEnabled", !0), this.QNM(), this.bsH()
                    }
                    store() {
                        localStorage.setItem(l, JSON.stringify(this.njC))
                    }
                    QNM() {
                        var $ = new n.TextStyle({
                                fontFamily: this.get("cellNameFont"),
                                fontSize: 80,
                                fontWeight: r(this.get("cellNameWeight"))
                            }),
                            e = this.get("cellNameOutline");
                        e && ($.stroke = parseInt(this.get("cellNameOutlineColor"), 16), $.strokeThickness = o(e, $.fontSize), $.lineJoin = this.get("cellNameSmoothOutline") ? "round" : "miter"), this.lqB = $
                    }
                    bsH() {
                        var $ = new n.TextStyle({
                                fontFamily: this.get("cellMassFont"),
                                fontSize: 56 + 20 * this.get("cellMassTextSize"),
                                fontWeight: r(this.get("cellMassWeight")),
                                lineJoin: "round",
                                fill: parseInt(this.get("cellMassColor"), 16)
                            }),
                            e = this.get("cellMassOutline");
                        e && ($.stroke = parseInt(this.get("cellMassOutlineColor"), 16), $.strokeThickness = o(e, $.fontSize), $.lineJoin = this.get("cellMassSmoothOutline") ? "round" : "miter"), this.jLt = $
                    }
                    get useWebGL() {
                        return n.utils.isWebGLSupported() && this.get("useWebGL")
                    }
                    eyU($) {
                        return a.has($) ? a.get($).value : null
                    }
                    has($) {
                        return $ in this.njC
                    }
                    get($) {
                        return this.has($) ? this.njC[$] : this.eyU($)
                    }
                    set($, e) {
                        return !(this.has($) && this.get($) === e || (a[$] !== e ? this.njC[$] = e : delete this.njC[$], this.store(), this.emit("zrVIMz", $, e), 0))
                    }
                    org($) {
                        return Number(this.get($))
                    }
                    lQo($) {
                        return "" + this.get($)
                    }
                    dlo($) {
                        return !!this.get($)
                    }
                }
                e = new c;
                let h = t.g.settings = e
            },
            58489($, e, t) {
                t.d(e, {
                    A: () => x
                });
                class x {
                    constructor($, e) {
                        this.key = $, this.value = e
                    }
                }
            },
            82196($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var x = t(15308);
                let s = ($, e) => !((e = ($ = $.callbacks).indexOf(e)) < 0 || ($.splice(e, 1), 0));
                class i {
                    constructor() {
                        this.loaders = new Map, this.UQz()
                    }
                    UQz() {
                        let $ = new URL(t(97833), t.b);
                        fetch($).then(async e => {
                            e = URL.createObjectURL(await e.blob()), (0, x.$s)(0, 'Skin worker loaded asynchronously at "' + e + '" from file at "' + $ + '"'), this.worker = new Worker(e), this.worker.addEventListener("message", this.vzR.bind(this))
                        }).catch(() => {
                            (0, x.$s)(2, 'Skin worker failed to load asynchronously from file at "' + $ + '"?')
                        })
                    }
                    hha() {
                        this.loaders.clear()
                    }
                    bCr($, e) {
                        let t;
                        if (!this.loaders.has($)) return this.loaders.set($, t = {
                            callbacks: [e]
                        }), this.worker.postMessage($), s.bind(null, t, e);
                        if (null != (t = this.loaders.get($)).image) e(t.image);
                        else if (!t.errored) return t.callbacks.push(e), s.bind(null, t, e);
                        return null
                    }
                    vzR($) {
                        var e = $.data,
                            $ = this.loaders.get(e.url);
                        if (e.errored) $.errored = !0, $.callbacks.length = 0;
                        else {
                            $.image = e.image;
                            for (var t = $.callbacks; t.length;) t.pop()(e.image)
                        }
                    }
                }
            },
            78225($, e, t) {
                t.d(e, {
                    A: () => s
                });
                var x = t(83529);
                let s = new class {
                    get bTs() {
                        return this.VqP[this.yNT]
                    }
                    get biB() {
                        return this.OcY[this.yNT]
                    }
                    constructor() {
                        this.selectedServer = null, this.VqP = [0, 0], this.OcY = [0, 0], this.zCS = [!1, !1], this.tXL = [!1, !1], this.pids = [0, 0], this.yNT = 0, this.rendering = !0, this.Xwi = null, this.yNT = x.A.get("activeTabContext"), (isNaN(this.yNT) || 0 !== this.yNT && 1 !== this.yNT) && (this.yNT = 0, x.A.set("activeTabContext", 0))
                    }
                    reset() {
                        this.VqP = [0, 0], this.OcY = [0, 0], this.zCS = [!1, !1], this.tXL = [!1, !1], this.pids = [0, 0], this.Ebi = "Play", this.Xwi = null
                    }
                    jMO($) {
                        this.selectedServer = $, this.Xwi = $.url
                    }
                    get vSE() {
                        return this.selectedServer?.url || null
                    }
                }
            },
            97665($, e, t) {
                t.d(e, {
                    Sl: () => x
                }), t(61036);
                let x = ($, e) => {
                    var t = $.x - e.x,
                        $ = $.y - e.y;
                    return t * t + $ * $
                }
            },
            24968($, e, t) {
                t.d(e, {
                    A: () => s
                });
                var x = t(61036);
                class s {
                    constructor() {
                        this.samples = [], this.average = 0, this.current = 0, this.total = 0
                    }
                    reset() {
                        this.samples.length = 0, this.average = 0, this.current = 0, this.total = 0
                    }
                    update($) {
                        var e = this.samples;
                        e.push(this.current = $), 128 < e.length ? (e.shift(), this.average = e.reduce(($, e) => $ + e) / e.length) : this.average = $, this.total++
                    }
                    get minimum() {
                        return 0 != this.samples.length ? x.jk(...this.samples) : 0
                    }
                    get maximum() {
                        return 0 != this.samples.length ? x.T9(...this.samples) : 0
                    }
                }
            },
            33656($, e, t) {
                t.d(e, {
                    Ab: () => S,
                    C6: () => d,
                    CF: () => Y,
                    DK: () => D,
                    DY: () => i,
                    Dk: () => r,
                    EP: () => o,
                    Es: () => h,
                    LK: () => z,
                    MM: () => I,
                    Nr: () => x,
                    Ns: () => E,
                    Qv: () => u,
                    Rk: () => N,
                    Rr: () => Q,
                    S6: () => w,
                    Tw: () => y,
                    U7: () => g,
                    Yf: () => n,
                    Zl: () => B,
                    bz: () => v,
                    e5: () => _,
                    e_: () => k,
                    f9: () => l,
                    g8: () => A,
                    nC: () => m,
                    nG: () => T,
                    pk: () => f,
                    r3: () => F,
                    tz: () => p,
                    vL: () => c,
                    w5: () => C,
                    w8: () => b,
                    zh: () => a,
                    zw: () => s
                }), e = t(71675);
                let x = $ => "Tab " + $ + " reconnecting to server...",
                    s = $ => "Tab " + $ + " disconnected",
                    i = "Server restarting...",
                    n = $ => "Connection for tab " + $ + " rejected",
                    a = (t = decodeURI(atob("JUUyJTk4JTg2"))) + " " + atob("QXhvbiB2") + e.rE + " | " + atob("RGV2ZWxvcGVkIGJ5IEFlcm8=") + " " + t,
                    o = "Captcha library is not loaded",
                    r = "unknown server",
                    l = $ => "Connected to " + $,
                    c = $ => "Connection established for tab " + $,
                    h = $ => "Closing existing FLt for tab " + $,
                    A = "Spectating largest player",
                    u = $ => "Spectating " + $,
                    d = "No active server URL set during attempt to connect?",
                    g = "Rendering has been paused to save memory while the tab is unfocused",
                    m = $ => $ ? "Regained focus on game tab" : "Focus on game tab was lost",
                    C = $ => "Welcome back (playing as tab " + $ + ")",
                    p = $ => "[FRAME #" + $ + "]",
                    f = ($, e, t, x) => "FPS [now {" + Math.round($) + "} avg {" + e + "} min {" + t + "} max {" + x + "}]",
                    _ = ($, e, t, x, s) => "Ping for tab " + $ + " [now {" + e + "ms} | avg {" + t + "ms} min {" + x + "ms} max {" + s + "ms}]",
                    w = "'gameObject' global defined but is deprecated!",
                    v = $ => "Replay of the last " + $ + " seconds rendered and downloaded",
                    b = "Recording started (press keybind again to stop recording)",
                    y = $ => "Auto respawn " + ($ ? "disabled" : "enabled"),
                    B = $ => {
                        let e;
                        switch ($) {
                            case 0:
                                e = "one split";
                                break;
                            case 1:
                                e = "double split";
                                break;
                            case 2:
                                e = "line split";
                                break;
                            case 3:
                                e = "trick split"
                        }
                        return "Triggered " + e + " on selected player!"
                    },
                    F = ($, e) => "Watching " + $ + " on tab " + e,
                    I = "Waiting to watch player",
                    D = "This client is currently in alpha and is subject to bugs.\n\nUse with caution! (v" + e.rE + ")",
                    N = "%c %c" + t + " Axon for Vanis.io - v" + e.rE + " %c ",
                    E = "Lacking mandatory data",
                    Q = $ => "Play as tab " + $,
                    k = $ => "You have reached level " + $ + "!",
                    T = "https://skins.vanis.io/s/vanis1",
                    S = "Unnamed",
                    Y = "Long Name",
                    z = decodeURIComponent("%F0%9F%A4%96")
            },
            15308($, e, t) {
                t.d(e, {
                    $s: () => l,
                    Cc: () => i,
                    N: () => n,
                    X0: () => c,
                    hJ: () => h,
                    me: () => u,
                    oR: () => A,
                    rO: () => g,
                    v2: () => d
                });
                var e = t(78465),
                    e = t.n(e),
                    x = t(61036),
                    s = t(83529);
                let i = ($, e, t) => $ + (e - $) * t,
                    n = ($, e, t) => x.jk(t, x.T9(e, $));
                var a = ["INFO", "WARN", "ERROR", "DEBUG", "FATAL"].map($ => "[" + $ + "]");
                let o = new Map([
                        [0, console.log.bind(null, a.shift())],
                        [1, console.warn.bind(null, a.shift())],
                        [2, console.error.bind(null, a.shift())],
                        [3, console.log.bind(null, a.shift())],
                        [4, console.error.bind(null, a.shift())],
                        [5, console.log.bind(null)]
                    ]),
                    r = Function(atob("cmV0dXJuKF8sLi4uX18pPT57Xy5jYWxsKG51bGwsLi4uX18pfQ=="))(),
                    l = ($, ...e) => {
                        o.has($) && r(o.get($), ...e)
                    },
                    c = ($, ...e) => {
                        $ || o.get(4)("Assertion failed:", ...e)
                    },
                    h = ($, e) => {
                        var t = s.A.inputs;
                        $.Tea(t.names[s.A.get("linkTabNames") ? 0 : e]), $.Tea(t.skins[s.A.get("linkTabSkins") ? 0 : e]), $.Tea(t.tags[s.A.get("linkTabTags") ? 0 : e])
                    },
                    A = (t.g.Swal = e(), e().mixin({
                        toast: !0,
                        position: "top",
                        showConfirmButton: !1,
                        showCloseButton: !0
                    })),
                    u = ($, e, t) => {
                        let x;
                        if ("string" != typeof e) switch (e) {
                            default:
                            case 0:
                            case void 0:
                                x = "info";
                                break;
                            case 1:
                                x = "warning";
                                break;
                            case 2:
                                x = "error";
                                break;
                            case 3:
                                x = "success";
                                break;
                            case 4:
                                x = "question"
                        } else x = e;
                        e = "number" == typeof e ? e : "info", A.fire({
                            icon: x,
                            title: $,
                            timer: t || ("error" === x ? 5e3 : 2e3),
                            timerProgressBar: !0
                        })
                    },
                    d = ($, e = .5) => ~~(($ >> 16) * e) << 16 | ~~(($ >> 8 & 255) * e) << 8 | ~~((255 & $) * e) << 0,
                    g = () => {
                        var $ = new Date;
                        return ("0" + $.getHours()).slice(-2) + ":" + ("0" + $.getMinutes()).slice(-2) + ":" + ("0" + $.getSeconds()).slice(-2)
                    }
            },
            72093($, e, t) {
                var x = t(74173),
                    s = t(95195),
                    i = t(83529),
                    n = t(15308),
                    a = t(92915),
                    o = t(95514),
                    r = t(30847),
                    l = t(87706),
                    c = t(31628);
                let h = ($, e) => Math.random() * (e - $) + $;
                class A {
                    constructor($) {
                        (this.container = $).addChild(this.graphic = new l.Graphics), $ = A.used.indexOf(!1), (0, n.X0)(0 <= $, "Too many elements are being used (exceeded limit of 512"), A.used[$] = !0, this.id = $
                    }
                    spawn($) {
                        this.position = $, this.angle = h(-3, 3), this.radius = h(2, 5), this.speed = h(.5, 3), this.color = i.A.get("useFoodColor") ? parseInt(i.A.get("foodColor"), 16) : a.pz[this.id % a.pz.length], this.graphic.beginFill(this.color).drawCircle(0, 0, this.radius).endFill(), this.glow = i.A.get("menuFoodGlow")
                    }
                    destroy() {
                        A.used[this.id] = !1, this.container.removeChild(this.graphic), this.graphic.destroy(!0)
                    }
                    update($) {
                        var $ = this.speed * $,
                            {
                                x: $,
                                y: e
                            } = (this.position.add(Math.cos(this.angle) * $, Math.sin(this.angle) * $), this.radius += .0035 * $, this.position);
                        this.graphic.position.set($, e)
                    }
                    xHa($) {
                        return this.position.collides($.x + this.radius, $.y + this.radius)
                    }
                    set glow($) {
                        this.graphic.filters = $ ? [new c.qx({
                            color: this.color,
                            distance: 10 + ~~this.radius,
                            outerStrength: 5,
                            quality: .8,
                            innerStrength: 3,
                            knockout: !1
                        })] : []
                    }
                }
                A.used = Array(512).fill(!1);
                let u = new class {
                    constructor() {
                        this.TOR = x.A.from(), this.position = x.A.from(), this.running = !1, this.xJc = !0, this.onResize = () => {
                            var $ = window.innerWidth,
                                e = window.innerHeight;
                            this.app.renderer.resize($, e), this.position.set(0, 0), this.TOR.set($, e), this.container.x = this.app.screen.width / 2, this.container.y = this.app.screen.height / 2, this.container.pivot.x = 0, this.container.pivot.y = 0
                        }, this.animate = $ => {
                            if (s.A.running) return this.stop();
                            if (this.running) {
                                var e = performance.now();
                                this.WdV || (this.WdV = this.lastStamp = e);
                                let t = (e - this.lastStamp) / 6;
                                var x = e - this.WdV - 550;
                                0 < x && (t /= Math.pow(3, x = Math.min(x / 1e3, 1.2))), this.update(t), this.lastStamp = e
                            }
                        }, this.canvas = document.querySelector(".particles.canvas"), this.app = new l.Application({
                            width: window.innerWidth,
                            height: window.innerHeight,
                            resolution: window.devicePixelRatio || 1,
                            view: this.canvas,
                            forceCanvas: !i.A.useWebGL,
                            antialias: !0,
                            powerPreference: "high-performance",
                            backgroundColor: parseInt(i.A.get("backgroundColor"), 16),
                            autoDensity: !0
                        }), (0, o.h0)(this.app), this.app.stop(), this.app.ticker.add(this.animate), this.container = new l.Container, this.app.stage.addChild(this.container), this.items = new Set;
                        for (let $ = 0; $ < 96; $++) this.items.add(new A(this.container));
                        this.container.x = this.canvas.width / 2, this.container.y = this.canvas.height / 2, i.A.on("zrVIMz", ($, e) => {
                            "useFoodColor" === $ ? this.xJc = !0 : "menuFoodGlow" === $ && (this.stop(), this.items.forEach($ => {
                                $.glow = e
                            }), this.start())
                        })
                    }
                    start() {
                        this.running || (this.onResize(), window.addEventListener("resize", this.onResize), this.xJc = !0, this.running = !0, this.app.start(), (0, o.L2)(!1), this.visible = !0)
                    }
                    stop() {
                        this.running && ((0, o.L2)(!0), this.visible = !1, window.removeEventListener("resize", this.onResize), this.app.stop(), this.app.renderer.clear(), delete this.WdV, delete this.lastStamp, this.running = !1)
                    }
                    update($) {
                        this.items.forEach(e => {
                            (this.xJc || e.xHa(this.TOR)) && e.spawn(this.position.clone().add(h(-200, 200), h(-200, 200))), e.update($)
                        }), this.xJc = !1
                    }
                    set visible($) {
                        this.canvas.classList[$ ? "remove" : "add"]("hide")
                    }
                };
                s.A.on("stopped", () => u.start()), (0, r.wg)(() => {
                    s.A.running || u.start()
                })
            },
            37635($, e, t) {
                t.d(e, {
                    A: () => x
                }), e = t(74173);
                class x extends e.A {
                    constructor() {
                        super()
                    }
                    static nVI($) {
                        var e = new x;
                        return e.frozen = e.centralize = e.pause = !1, e.buffer = $, e
                    }
                    static from($ = 0, e = 0) {
                        var t = new x;
                        return t.frozen = t.centralize = t.pause = !1, t.buffer = new Float32Array(2), t.x = $, t.y = e, t
                    }
                    reset() {
                        return this.x = this.y = 0, this.frozen = !1, this
                    }
                }
            },
            53967($, e, t) {
                t.d(e, {
                    A: () => x
                });
                class x {
                    constructor() {
                        this.running = !1, this.tasks = [], this.HaC = () => {
                            var $;
                            this.running && (($ = this.tasks.shift())?.(), this.add($), this.Mlb = requestAnimationFrame(this.HaC))
                        }
                    }
                    add($) {
                        this.tasks.push($)
                    }
                    start() {
                        this.running || (this.running = !0, this.HaC())
                    }
                    stop() {
                        this.running && (this.running = !1, cancelAnimationFrame(this.Mlb), delete this.Mlb)
                    }
                }
            },
            24216($, e, t) {
                t.d(e, {
                    h: () => r
                });
                var x = t(95195),
                    s = t(78225),
                    i = t(1786),
                    n = t(30847),
                    a = t(33656),
                    o = t(83529);
                let r = new class {
                    constructor() {
                        this.cells = [], this.cUB = ($, e) => {
                            if (this.target && e.exG) {
                                let t = e;
                                t.pid === this.target.pid && (-1 !== (e = this.cells.some($ => t.id === $) ? -1 : this.cells.push(t.id)) && o.A.get("triggerIgnoreSizeEnabled") && t.dxt <= o.A.get("triggerIgnoreSizeBelow") ? this.QIF++ : !this.done && -1 !== e && e >= this.QIF + o.A.get("triggerAtCells") && (this.done = !0, 0 === this.gAx ? this.split(1, this.context) : 1 === this.gAx ? this.gun(this.context) : 2 === this.gAx ? x.A.kmM.lineSplit(this.context) : this.oCs(this.context), this.reset(), this.EEA((0, a.Zl)(this.gAx)), (0, n.wg)(() => {
                                    delete this.done, this.EEA(null)
                                }, 800)))
                            }
                        }, this.FDq = ($, e, t) => {
                            this.target && e instanceof i.kF && (e.pid !== this.target.pid || (e = this.cells.indexOf(e.id)) < 0 || this.cells.splice(e, 1))
                        }, this.reset(), x.A.on("stopped", () => this.reset()), x.A.on("started", () => this.reset())
                    }
                    watch($, e) {
                        var t, i = x.A.FCi.get($);
                        return !!i && 0 !== (t = x.A.VTJ.filter(e => e.pid === $)).length && (this.context = s.A.yNT, this.target = i, this.gAx = e, this.EEA((0, a.r3)(i.name, 1 + this.context)), this.QIF = this.cells.push(...t.map($ => $.id)), x.A.ykh = this.cUB, x.A.RYB = this.FDq, !0)
                    }
                    reset() {
                        delete this.context, delete this.target, delete this.isLarge, this.cells.length = 0, this.QIF = 0, this.EEA(a.MM), x.A.ykh === this.cUB && delete x.A.ykh, x.A.RYB === this.FDq && delete x.A.RYB
                    }
                    EEA($) {
                        x.A.emit("RyKxvm", $)
                    }
                    split($, e) {
                        (e = x.A.eWI[e]).mouse.pause || e.CiT(), e.JOy($), x.A.Ifp += $, x.A.Ifp <= 2 ? x.A.Pzr = performance.now() + 300 : (delete x.A.Pzr, x.A.Ifp = 0)
                    }
                    gun($) {
                        this.split(2, $)
                    }
                    oCs($) {
                        this.split(2, $), x.A.eWI[$].jjW(!0), (0, n.wg)(() => this.split(8, $))
                    }
                }
            },
            28156($, e, t) {
                t(30608), t(94121);
                var x = t(95195),
                    s = t(71675),
                    i = t(15308),
                    n = t(61036),
                    a = t(30847),
                    o = (t(13711), t(33656)),
                    r = t(28858),
                    l = t(87706),
                    c = (t(78465), t(6716));
                t(72093), t.g.PIXI = l;
                let h;
                h = r.S.subscribe($ => {
                    $ && ((0, i.me)(o.DK, 1, 2500), h())
                }), (0, i.$s)(5, o.Rk, "background-color:#b2beb5;padding:3px;", "background-color:#353839;color:#e5e4e2;font-weight:bold;padding:3px;", "background-color:#b2beb5;padding:3px;"), (0, i.$s)(0, "Game instance", x.A), (0, i.$s)(0, "Running PIXI v" + l.VERSION), localStorage.setItem("clientVersion", s.rE), new c.A({
                    target: document.body
                });
                for (let A = 1; A <= 16; A++)(0, a.wg)(() => {
                    location.hash = "#" + (8192 + n.RI(8192 * n.yT())).toString(16)
                }, 20 * A);
                (0, a.wg)(() => {
                    location.hash = "A"
                }, 320), (0, i.$s)(0, "Client loaded")
            },
            14456($, e, t) {
                t.d(e, {
                    h: () => A
                });
                var x = t(71675),
                    s = t(95195),
                    i = t(78225),
                    n = t(15308),
                    a = t(61416),
                    o = t(36391),
                    r = t(54603);
                let l = "cachedServers",
                    c = "regionCode",
                    h = ["ovt", "ffa", "instant", "gigasplit", "megasplit", "terasplit", "crazy", "self-feed"];
                class A {
                    constructor() {
                        this.regions = ["EU", "NA", "AS"], this.WnJ = -1, this.hri = ($, e) => {
                            var t = ($.index || 99) - (e.index || 99);
                            return 0 == t ? $.name.localeCompare(e.name, "en", {
                                numeric: !0,
                                ignorePunctuation: !0
                            }) : t
                        }, s.A.on("kaczpN", this.load.bind(this)), this.load(!0), s.A.on("Dcxyoc", $ => $ && this.load(!0)), this.QAf().then($ => {
                            $ && this.regions.includes($) || ($ = this.regions[0]), this.LEA($)
                        })
                    }
                    LEA($) {
                        localStorage.setItem(c, $), (0, r.Jt)(a.oo).forEach($ => $.visible = !1), a.aK.set($)
                    }
                    QAf() {
                        return c in localStorage ? Promise.resolve(localStorage.getItem(c)) : fetch("https://ipapi.co/json").then($ => $.json()).then($ => $.continent_code).catch(() => null)
                    }
                    async load($) {
                        if (!$ && (!s.A.Xrx || performance.now() <= this.WnJ + 6e4)) return !1;
                        let e;
                        try {
                            e = await fetch(x.VY + "gameservers.json")
                        } catch (t) {
                            return (0, n.$s)(1, this.error = "Failed fetching servers (" + t + ")"), !1
                        }
                        if (!e.ok) return (0, n.$s)(1, this.error = "Failed fetching servers with status: " + e.status), !1;
                        let c = await e.text();
                        if (0 === c.length) return (0, n.$s)(1, this.error = "Failed fetching servers (returned nothing)"), !1;
                        let A;
                        try {
                            A = JSON.parse(c)
                        } catch (u) {
                            (0, n.$s)(1, "Failed fetching servers (couldn't pass JSON: \"" + c + '")');
                            try {
                                A = JSON.parse(localStorage.getItem(l))
                            } catch (d) {
                                return a.b0.set([]), !1
                            }
                        }
                        if ("selectedServer" in localStorage) {
                            let g, m = localStorage.getItem("selectedServer");
                            try {
                                g = JSON.parse(m)
                            } catch (C) {
                                (0, n.$s)(1, 'Failed parsing selected server (value: "' + m + '"")')
                            }(g = g && A.filter($ => $.name === g.name && $.region == g.region)?.[0]) && (i.A.jMO(g), a.BA.set(g.url))
                        }
                        a.b0.set(A.sort(this.hri));
                        var p = Array(h.length),
                            f = (a.AQ.set(null), (0, r.Jt)(a.b0).length);
                        let _ = 0;
                        for (; _ < f;) {
                            var w = A[_++],
                                v = w.name.match(/(\'?\w+([-']\w+)*\'?)/)?.[0].toLowerCase(),
                                v = h.indexOf(v);
                            if (!(v < 0)) {
                                let b;
                                (b = v in p ? p[v] : p[v] = []).push(w)
                            }
                        }
                        var $ = p.filter($ => !!$).map(($, e) => {
                                let t;
                                return (t = (0, r.Jt)(a.oo)[e]) instanceof o.y ? t.update($) : t = new o.y($), t
                            }),
                            y = $.findIndex($ => "ovt" === $.mode);
                        return 0 <= y && (a.AQ.set($[y]), $.splice(y, 1)), a.oo.set($), localStorage.setItem(l, c), !0
                    }
                    join($) {
                        var e = {
                            first: !0
                        };
                        if (delete s.A.FLt.OIw, delete s.A.FLt.zGd, delete s.A.FLt.Fcz, delete s.A.FLt.uTX, delete s.A.FLt.Jtp, s.A.emit("tPqeFj", e, $.url), !e.wait) {
                            localStorage.setItem("selectedServer", JSON.stringify($)), i.A.jMO({
                                ...$
                            }), s.A.FLt.OIw = !0, a.BA.set($.url);
                            let t = 1 + i.A.yNT;
                            e.promise.then($ => (0, n.$s)(0, "Connection attempt for tab " + t + " was " + ($ ? "successful" : "unsuccessful")))
                        }
                    }
                }
            },
            36391($, e, t) {
                t.d(e, {
                    y: () => i
                });
                var x = t(61416),
                    s = t(54603);
                class i {
                    constructor($) {
                        this.visible = !1, this.update($)
                    }
                    get wPu() {
                        return this.servers.filter($ => !($ = $.region ? $.region.toUpperCase() : ($ = $.url.toLowerCase().match(/game-([a-z]{2})/)) ? $[1].toUpperCase() : "") || $ === (0, s.Jt)(x.aK))
                    }
                    update($) {
                        this.name = 0 < $.length ? $[0].name.match(/(\'?\w+([-']\w+)*\'?)/)?.[0] : "N/A", this.mode = this.name.toLowerCase(), this.servers = $
                    }
                    add($) {
                        this.servers.push($)
                    }
                    remove($) {
                        0 <= ($ = this.servers.indexOf($)) && this.servers.splice($, 1)
                    }
                    wGF() {
                        this.visible = !this.visible
                    }
                }
            },
            54659($, e, t) {
                t.d(e, {
                    H: () => s,
                    R: () => x
                });
                let x = [
                        [4096, "level_100", "Level 100 reached"],
                        [8192, "level_200", "Level 200 reached"],
                        [16384, "level_300", "Level 300 reached"],
                        [268435456, "slb_winner", "Topped season leaderboard"],
                        [33554432, "server_booster", "Discord server booster"],
                        [16777216, "place_contributor_2022", "r/place contributor (2022)"],
                        [67108864, "place_contributor_2023", "r/place contributor (2023)"],
                        [256, "youtuber", "YouTuber"],
                        [1024, "editor", "Editor"],
                        [8, "contributor", "Contributor"],
                        [65536, "ffa_winner", "FFA tournament winner"],
                        [131072, "instant_winner", "Instant tournament winner"],
                        [262144, "gigasplit_winner", "Gigasplit tournament winner"],
                        [524288, "megasplit_winner", "Megasplit tournament winner"],
                        [1048576, "crazy_winner", "Crazy tournament winner"],
                        [2097152, "self-feed_winner", "Self-feed tournament winner"],
                        [16, "organizer", "Official tournament organizer"],
                        [32, "referee", "Official tournament referee"],
                        [4, "skin_mod", "Skin moderator"],
                        [2, "mod", "Moderator"],
                        [1, "admin", "Administrator"],
                        [2147483648, "official", "Official message", !0],
                        [536870912, "system", "System message", !0]
                    ],
                    s = new Map([
                        ["level_100", 4096],
                        ["level_200", 8192],
                        ["level_300", 16384],
                        ["slb_winner", 268435456],
                        ["server_booster", 33554432],
                        ["place_contributor_2022", 16777216],
                        ["place_contributor_2023", 67108864],
                        ["youtuber", 256],
                        ["editor", 1024],
                        ["contributor", 8],
                        ["ffa_winner", 65536],
                        ["instant_winner", 131072],
                        ["gigasplit_winner", 262144],
                        ["megasplit_winner", 524288],
                        ["crazy_winner", 1048576],
                        ["self-feed_winner", 2097152],
                        ["organizer", 16],
                        ["referee", 32],
                        ["skin_mod", 4],
                        ["mod", 2],
                        ["admin", 1],
                        ["official", 2147483648],
                        ["system", 536870912]
                    ])
            },
            28858($, e, t) {
                t.d(e, {
                    S: () => i,
                    W: () => s
                });
                let x = t(54603),
                    s = (0, x.T5)(!1),
                    i = (0, x.T5)(!1)
            },
            64127($, e, t) {
                t.d(e, {
                    z: () => x
                });
                let x = (0, t(54603).T5)(!1)
            },
            35171($, e, t) {
                t.d(e, {
                    $f: () => a,
                    U_: () => i,
                    nK: () => o,
                    qo: () => s,
                    x4: () => n
                });
                let x = t(38052),
                    s = new x.A("clockTime", !1, null),
                    i = new x.A("sessionTime", !1, null),
                    n = new x.A("restartTiming", !1, null),
                    a = new x.A("bTs", !1, 0),
                    o = new x.A("totalTagMass", !1, 0)
            },
            36742($, e, t) {
                t.d(e, {
                    E: () => s,
                    b: () => x
                });
                var x, e = t(54603);
                (t = x = x || {})[t.None = -1] = "None", t[t.Settings = 0] = "Settings", t[t.Themes = 1] = "Themes", t[t.Inputs = 2] = "Inputs", t[t.Replays = 3] = "Replays", t[t.Leaderboard = 4] = "Leaderboard";
                let s = (0, e.T5)(x.None)
            },
            8125($, e, t) {
                t.d(e, {
                    m7: () => i,
                    pB: () => a,
                    qC: () => n,
                    xR: () => o
                });
                let x = t(54603),
                    s = t(78225),
                    i = (0, x.T5)(!0),
                    n = (0, x.T5)(!0),
                    a = (0, x.T5)(""),
                    o = (0, x.T5)(s.A.yNT)
            },
            61416($, e, t) {
                t.d(e, {
                    AQ: () => o,
                    BA: () => r,
                    aK: () => i,
                    b0: () => a,
                    oo: () => n,
                    pc: () => l
                });
                let x = t(14456),
                    s = t(54603),
                    i = (0, s.T5)(""),
                    n = (0, s.T5)([]),
                    a = (0, s.T5)([]),
                    o = (0, s.T5)(null),
                    r = (0, s.T5)(""),
                    l = new x.h
            },
            54915($, e, t) {
                t.d(e, {
                    BW: () => d,
                    KP: () => h,
                    NC: () => u,
                    Xt: () => A,
                    Yo: () => r,
                    ZK: () => l,
                    fN: () => o,
                    fj: () => a,
                    hU: () => i,
                    hZ: () => c,
                    rd: () => n,
                    uU: () => s
                });
                let x = t(38052),
                    s = new x.A("fps", !1, 0),
                    i = new x.A("ping", !1, 0),
                    n = new x.A("playerMass", !1, ""),
                    a = new x.A("totalPlayerMass", !1, ""),
                    o = new x.A("playerScore", !1, ""),
                    r = new x.A("cellCount", !1, 0),
                    l = new x.A("latencyWarning", !0, !1),
                    c = new x.A("triggerStatus", !0, ""),
                    h = new x.A("mouseFrozenFor", !1, -1),
                    A = new x.A("movementStoppedFor", !1, -1),
                    u = new x.A("linesSlittingFor", !1, -1),
                    d = new x.A("nerdStats", !1, "")
            },
            38052($, e, t) {
                t.d(e, {
                    A: () => s
                });
                var x = t(54603);
                class s {
                    constructor($, e, t) {
                        this.value = (0, x.T5)(), this.visible = (0, x.T5)(), this.key = $, this.value = (0, x.T5)(t), this.visible = (0, x.T5)(e)
                    }
                    set($) {
                        this.value.set($)
                    }
                    show() {
                        this.visible.set(!0)
                    }
                    hide() {
                        this.visible.set(!1)
                    }
                    get name() {
                        return this.key
                    }
                    subscribe($) {
                        return this.value.subscribe($)
                    }
                }
            },
            37921($, e, t) {
                t.d(e, {
                    A: () => C
                });
                var x = t(83529),
                    s = t(78225),
                    i = t(15308),
                    n = t(11029),
                    a = t(19437),
                    o = (t(63836), t(24968)),
                    r = t(8125),
                    l = t(33656),
                    c = t(95654),
                    h = t(4371),
                    e = t(22398),
                    A = t(61036),
                    u = t(30847),
                    d = t(6883),
                    g = t(37635);
                let m = new e.A;
                class C {
                    set connected($) {
                        this.uuS = $, this.game.emit("jPH", this.context, $)
                    }
                    get connected() {
                        return this.uuS
                    }
                    fyP($) {
                        return ($ = $ || null) !== this.tagId && (this.tagId = $, !0)
                    }
                    constructor($, e) {
                        this.opened = !1, this.uuS = !1, this.pNb = 0, this.mtv = null, this.SiW = null, this.OqS = null, this.Iwi = 0, this.ping = new o.A, this.mouse = g.A.from(0, 0), this.SLg = 0, this.game = $, this.context = e
                    }
                    async init($) {
                        return Promise.resolve().then(() => !0)
                    }
                    open($, e) {
                        return new Promise(async t => {
                            if (this.game.running && !this.rSL.opened && (this.game.stop(), s.A.yNT = this.context), this.opened && ((0, i.$s)(1, (0, l.Es)(1 + this.context)), this.close()), !await this.init(this.OqS = e || $.replace("ws", "http"))) return t(!1);
                            this.mtv = $, this.opened = !0, this.Xlu = t;
                            let x = this.ws = new h.A($, "tFoL46WDlZuRja7W6qCl");
                            x.binaryType = "arraybuffer", x.onopen = () => {
                                if (!this.opened) return t(!1);
                                (0, i.me)((0, l.vL)(1 + this.context), 3), this.stk = this.pNb++, this.SiW = $, x.onclose = this.pTl.bind(this)
                            }, x.onclose = this.Ksg.bind(this), x.onmessage = this.utE.bind(this)
                        })
                    }
                    close() {
                        var $ = this.ws;
                        $ && ($.onmessage = null, $.onclose = null, $.onerror = null, $.close(), delete this.ws, delete this.mtv, delete this.SiW, delete this.OqS, this.Iwi = 0, this.ping.reset(), this.opened = this.connected = !1, delete this.OIw, delete this.zGd, delete this.Fcz, delete this.uTX, delete this.VFc, this.cSq && (clearInterval(this.cSq), delete this.cSq), this.xXM && (clearInterval(this.xXM), delete this.xXM), delete this.tagId, this.SuG && ((0, u.DJ)(this.SuG), delete this.SuG), this.mouse.reset(), this.game.oiz = this.rSL.connected ? 1 : 0, this.SLg = 0)
                    }
                    send($) {
                        var e;
                        return $ instanceof d.A && ($ = $.kpj()), !!this.opened && (e = this.ws, (0, i.X0)(e instanceof h.A, "Socket not defined?"), e.send($), !0)
                    }
                    pTl($) {
                        delete this.stk, this.opened = this.connected = !1;
                        var e = this.ping.current,
                            t = (this.close(), this.Xlu?.(!1), this.game);
                        t.running && (1003 !== $.code && t.pEA(0 == this.context ? 1 : 0) ? t.bLD(this.context, !0) : t.stop());
                        let x;
                        if (1003 === $.code) x = 1500 - e, this.context === s.A.yNT && (0, i.me)(l.DY, 0, x);
                        else {
                            x = 3e3 + ~~(100 * A.yT());
                            let n = (0, l.zw)(1 + this.context);
                            "string" == typeof $.reason && (n += " (" + $.reason + ")"), (0, i.me)(n, 2, x)
                        }
                        t.pEA(0 === this.context ? 1 : 0) || t.Xrx || t.FQe(!0), this.SuG = (0, u.wg)(() => {
                            this.opened || this.SiW && this.SiW !== s.A.vSE || ((0, i.me)((0, l.Nr)(1 + this.context)), s.A.vSE && this.open(s.A.vSE, this.OqS))
                        }, x)
                    }
                    Ksg() {
                        delete this.stk, (this.opened = this.connected = !1, i.me)((0, l.Yf)(1 + this.context), 2), this.Xlu?.(!1)
                    }
                    SGD($) {
                        let e = this.game;
                        this.game.oiz = this.rSL.connected ? 2 : 1, $ = (0, n.O4)($);
                        let t = s.A.pids[this.context] = $.lrL;
                        this.context === s.A.yNT && this.game.emit("cjyapb", l.zh), this.cSq = (0, u.yb)(() => {
                            var $;
                            this.opened || (clearInterval(this.cSq), delete this.cSq), e.FCi.has(t) && (clearInterval(this.cSq), delete this.cSq, ($ = e.FCi.get(t)).isMe = !0, e.emit("kIoddg", t), e.emit("VAEhBF", t, $.name, $.hWu, $.hWu), e.FCi.ytA(this.context, $), this.context !== s.A.yNT ? e.jWf(this.context, s.A.yNT) : e.jWf(0 === s.A.yNT ? 1 : 0, s.A.yNT))
                        }, 16), e.running || e.start($), this.xXM = (0, u.yb)(() => {
                            var $;
                            this.connected && (($ = this.mouse).centralize ? this.rHk(9) : $.pause || this.CiT())
                        }, 25), this.VFc = performance.now(), (0, u.wg)(() => {
                            if (!e.ycZ(this.context)) {
                                null != this.uTX ? (s.A.yNT = this.context, x.A.set("activeTabContext", this.context), delete this.uTX) : null != this.Jtp && (null != this.SiW && this.rSL.open(this.SiW), delete this.Jtp);
                                let $ = !1;
                                null != this.Fcz ? (this.NTE(), delete this.Fcz, $ = !0) : null != this.zGd ? (e.kmM.Xiy(null, null, this.context), delete this.zGd, $ = !0) : null != this.OIw && (e.kmM.Xiy(null, null, this.context), e.Cwd = .04, delete this.OIw), $ && e.FQe(!1)
                            }
                        }, 30 + ~~(30 * A.yT())), this.connected = !0, this.Xlu?.(!0)
                    }
                    gtu($) {
                        $ = new u.SE($.buffer, 1), this.yJs(new c.A($).mQJ())
                    }
                    IWf() {
                        var $ = this.game,
                            e = A.LI(performance.now() - this.Iwi);
                        this.ping.update(e), this.bjN && $.emit("EMciAd", e)
                    }
                    sYi($) {
                        var e, t = this.game;
                        if (this.bjN)
                            for (; 0 !== (e = $.wVa());) t.FCi.remove(e, !0)
                    }
                    ttk($) {
                        var e, t, x = this.game;
                        this.bjN && (1 & (e = $.dsR()) && x.FCi.get(t = $.wVa())?.AcX(!0), 2 & e) && x.FCi.get(t = $.wVa())?.AcX(!1)
                    }
                    hWn($) {
                        var e = this.game,
                            [$, t] = (e.hYE[this.context] = performance.now(), e.GAB = performance.now(), (0, a.f)($, this.context)),
                            $ = 0 != (e.TRu[this.context] = $);
                        e.DMs(this.context, $), $ ? (e.fwE(this.context, !1), e.scores[this.context] = t, e.xmF[this.context] = A.T9(t, e.xmF[this.context]), s.A.zCS[this.context] && (e.triggerAutoRespawn(this.context), delete this.VjJ)) : s.A.zCS[this.context] && ++e.gFX[this.context] == this.VjJ && (e.triggerAutoRespawn(this.context), delete this.VjJ), this.bjN && (e.KRz++, e.pWR(!0), e.FCi.rvD())
                    }
                    GZq($) {
                        var e = this.game,
                            $ = {
                                pid: $.wVa(),
                                text: $.mIn()
                            };
                        if (0 === $.pid) {
                            if (this.context === s.A.yNT) {
                                if (/Welcome to Vanis\.io,.+\!/.test($.text)) {
                                    let t = l.Dk;
                                    var x, n = s.A.selectedServer;
                                    n ? t = n.region + " " + n.name : 0 <= (n = $.text.indexOf(",")) && 0 <= (x = $.text.indexOf("!", n += 2)) && (t = $.text.substring(n, x)), $.text = (0, l.f9)(t)
                                } else if (/Server restart.+/.test($.text)) return void(0, i.me)($.text, 1e3);
                                this.game.emit("QsoZPW", $.text)
                            }
                        } else 1 < e.oiz && this.tagId === this.rSL.tagId && this.context !== s.A.yNT || e.FCi.has($.pid) && (n = e.FCi.get($.pid), $.DvN = PIXI.utils.hex2string(n.ppI), 1 < e.oiz && this.tagId !== this.rSL.tagId && ($.ePG = this.context), $.from = n.name, n.TIJ && ($.Yqh = n.TIJ), n.jqz && ($.badges = n.jqz), this.game.emit("NExDkf", $))
                    }
                    utE($) {
                        var e = d.A.nVI($.data),
                            t = (e.id = ++this.SLg, this.game);
                        switch (e.dsR()) {
                            case 1:
                                return this.SGD(e);
                            case 2:
                                return this.gtu(e);
                            case 3:
                                return this.IWf();
                            case 4:
                                return this.sYi(e);
                            case 6:
                                return this.rHk(6);
                            case 7:
                                return this.ttk(e);
                            case 10:
                                return this.hWn(e);
                            case 11:
                                return this.bjN ? (0, n.Zj)(e) : void 0;
                            case 12:
                                return !this.bjN && 1 < t.oiz && this.rSL.tagId == this.tagId ? void 0 : (0, n.RP)(e, this.context);
                            case 13:
                                return this.GZq(e);
                            case 16:
                                return (0, n.ci)(e);
                            case 17:
                                return this.bjN ? void t.camera.IFG[this.context].set(e.Nhb(1, !0)) : void 0;
                            case 18:
                                return t.bLD(this.context);
                            case 19:
                                var a = 0 !== e.dsR();
                                return (t.emit("AFHIfE", e.uDd()), a) ? (a = e.wVa(), void(0, i.me)((0, l.e_)(a), 3, 3e3)) : void 0;
                            case 20:
                                return void(x.A.get("autoRespawn") && !this.game.Xrx ? (s.A.zCS[this.context] = !0, performance.now() - this.VFc <= 3e4 ? this.VjJ = 37 : (this.VFc = performance.now(), this.VjJ = 86), t.gFX[this.context] = 0) : t.xCd[this.context] = (0, u.wg)(t.AUn.bind(t, this.context), 900));
                            case 22:
                                return "grecaptcha" in window ? void m.request(this) : void alert(l.EP);
                            case 23:
                                return void(s.A.VqP[this.context] = e.wVa());
                            case 24:
                                return this.bjN ? (t.KRz = e.uDd(), void t.emit("NZB", e.uDd())) : void 0;
                            case 26:
                                return r.qC.set(!e.dsR()), void(e.length > e.offset + 1 && r.pB.set(e.zWb() || (0, l.Rr)(1 + this.context)));
                            case 28:
                                return this.bjN ? (0, n.Py)(e) : void 0
                        }
                    }
                    yJs($) {
                        var e = "ignoreToken" in t.g || !/^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(this.SiW) ? null : localStorage.vanisToken;
                        let x = d.A.ZiI(2 + $.length + ("string" == typeof e ? e.length : 0));
                        x.hKc(5), x.hKc(this.game.zfx), $.forEach($ => x.hKc($)), (0, i.hJ)(x, this.context), "string" == typeof e && x.qBs(e), this.send(x)
                    }
                    CiT() {
                        var $, e, t;
                        this.connected && ({
                            x: e,
                            y: t
                        } = (($ = d.A.ZiI(5)).hKc(16), this.mouse), $.Ylk(e), $.Ylk(t), this.send($))
                    }
                    rHk($) {
                        var e = d.A.ZiI(1);
                        e.hKc($), this.send(e)
                    }
                    BtR() {
                        var $ = d.A.ZiI(1),
                            e = ($.hKc(3), performance.now()),
                            $ = (this.send($), performance.now() - e);
                        return 0 != $ ? e + $ : e
                    }
                    mKa($) {
                        var e;
                        "string" == typeof $ && ((e = d.A.ZiI(1 + ($.length + 1))).hKc(11), e.qBs($), this.send(e))
                    }
                    uot($) {
                        $ = (0, u.x4)(encodeURIComponent($));
                        var e = d.A.ZiI(1 + $.length);
                        e.hKc(99), e.zlO($), this.send(e)
                    }
                    adz($) {
                        var e = d.A.ZiI(null != $ ? 3 : 1);
                        e.hKc(2), "number" == typeof $ && e.Ylk($), this.send(e)
                    }
                    NTE() {
                        this.VFc = performance.now();
                        var $ = d.A.ZiI(1);
                        $.hKc(1), (0, i.hJ)($, this.context), this.send($)
                    }
                    DQA() {
                        this.rHk(10)
                    }
                    jjW($) {
                        var e = 0 !== arguments.length,
                            t = d.A.ZiI(e ? 2 : 1);
                        t.hKc(21), e && t.hKc(+$), this.send(t)
                    }
                    JOy($) {
                        var e = d.A.ZiI(2);
                        e.hKc(17), e.hKc($), this.send(e)
                    }
                    get bjN() {
                        return this.context === s.A.yNT || !this.game.pEA(s.A.yNT)
                    }
                    get rSL() {
                        return this.game.eWI[0 == this.context ? 1 : 0]
                    }
                }
            },
            6883($, e, t) {
                t.d(e, {
                    A: () => A
                });
                var x = t(74173),
                    s = t(72511),
                    i = t(30847);
                let n = {
                        i8: i.U$.prototype.getInt8,
                        u8: i.U$.prototype.getUint8,
                        i16: i.U$.prototype.getInt16,
                        u16: i.U$.prototype.getUint16,
                        i32: i.U$.prototype.getInt32,
                        u32: i.U$.prototype.getUint32
                    },
                    a = {
                        i8: i.U$.prototype.setInt8,
                        u8: i.U$.prototype.setUint8,
                        i16: i.U$.prototype.setInt16,
                        u16: i.U$.prototype.setUint16,
                        i32: i.U$.prototype.setInt32,
                        u32: i.U$.prototype.setUint32
                    },
                    o = ($, e, t, x, s) => ("number" != typeof s && (s = $.offset, $.offset += t), e.call($.view, s, x)),
                    r = ($, e, t, x, s, i) => {
                        l($, x), "number" != typeof i && (i = $.offset, $.offset += x), e.call($.view, i, t, s)
                    },
                    l = ($, e) => {
                        var e = $.offset + e;
                        e > $.length && (e = new i.Az(e), new i.SE(e).set(new i.SE($.kpj())), $.view = new i.U$(e))
                    },
                    c = {
                        utf8($, e, t = !1) {
                            var x = $.length;
                            let i = "number" == typeof e ? e : $.offset,
                                a = "";
                            for (; i < x; i++) {
                                var o = n.u8.call($.view, i);
                                if (t && 0 === o) return "number" != typeof e && ($.offset = i + 1), a;
                                a += s.QV(o)
                            }
                            return a
                        },
                        utf16($, e, t = !1) {
                            var x = $.length;
                            let i = "number" == typeof e ? e : $.offset,
                                a = "";
                            for (; i < x - 1; i += 2) {
                                var o = n.u16.call($.view, i);
                                if (t && 0 === o) return "number" != typeof e && ($.offset = i + 2), a;
                                a += s.QV(o)
                            }
                            return a
                        }
                    },
                    h = {
                        utf8($, e, t) {
                            var x = e.length;
                            l($, x), "number" != typeof t && (t = $.offset, $.offset += x);
                            for (let s = 0; s < x; s++) a.u8.call($.view, t + s, e.charCodeAt(s))
                        },
                        utf16($, e, t) {
                            var x = e.length;
                            l($, 2 * x), "number" != typeof t && (t = $.offset, $.offset += 2 * x);
                            for (let s = 0; s < x; s++) a.u16.call($.view, t + 2 * s, e.charCodeAt(s))
                        }
                    };
                class A {
                    constructor($, e) {
                        if (this.offset = 0, $ instanceof i.U$) this.view = $;
                        else {
                            if (!($ instanceof i.Az)) throw TypeError("First argument to SmartBuffer constructor must be an ArrayBuffer or DataView");
                            this.view = new i.U$($)
                        }
                        "number" == typeof e && (this.offset = e)
                    }
                    static ZiI($) {
                        return new this(new i.Az($), 0)
                    }
                    static nVI($, e) {
                        return new this($, e)
                    }
                    get buffer() {
                        var $ = this.view;
                        return null != $ ? $.buffer : null
                    }
                    kpj() {
                        return this.buffer
                    }
                    get length() {
                        var $ = this.view;
                        return null != $ ? $.byteLength : 0
                    }
                    get eof() {
                        return this.offset >= this.length
                    }
                    now($) {
                        return o(this, n.i8, 1, void 0, $)
                    }
                    dsR($) {
                        return o(this, n.u8, 1, void 0, $)
                    }
                    DfC($) {
                        return o(this, n.i16, 2, !0, $)
                    }
                    sdq($) {
                        return o(this, n.i16, 2, !1, $)
                    }
                    wVa($) {
                        return o(this, n.u16, 2, !0, $)
                    }
                    jPk($) {
                        return o(this, n.u16, 2, !1, $)
                    }
                    tMN($) {
                        return o(this, n.i32, 4, !0, $)
                    }
                    Yqj($) {
                        return o(this, n.i32, 4, !1, $)
                    }
                    uDd($) {
                        return o(this, n.u32, 4, !0, $)
                    }
                    DHr($) {
                        return o(this, n.u32, 4, !1, $)
                    }
                    Nhb($, e) {
                        return "number" != typeof $ && ($ = this.offset, this.offset += 4), x.A.from(n.i16.call(this.view, $, e), n.i16.call(this.view, $ + 2, e))
                    }
                    gEZ($ = "utf8", e) {
                        return c[$](this, e, !1)
                    }
                    zWb($ = "utf8", e) {
                        return c[$](this, e, !0)
                    }
                    mIn($ = "utf8", e) {
                        return (0, i.IU)((0, i.ih)(this.zWb($, e)))
                    }
                    GhR($, e) {
                        r(this, a.i8, $, 1, void 0, e)
                    }
                    hKc($, e) {
                        r(this, a.u8, $, 1, void 0, e)
                    }
                    Ylk($, e) {
                        r(this, a.i16, $, 2, !0, e)
                    }
                    Kyd($, e) {
                        r(this, a.i16, $, 2, !1, e)
                    }
                    drz($, e) {
                        r(this, a.u16, $, 2, !0, e)
                    }
                    xiT($, e) {
                        r(this, a.u16, $, 2, !1, e)
                    }
                    CXO($, e) {
                        r(this, a.i32, $, 4, !0, e)
                    }
                    xNc($, e) {
                        r(this, a.i32, $, 4, !1, e)
                    }
                    NsC($, e) {
                        r(this, a.u32, $, 4, !0, e)
                    }
                    BoJ($, e) {
                        r(this, a.u32, $, 4, !1, e)
                    }
                    zlO($, e = "utf8", t) {
                        h[e](this, $, t)
                    }
                    qBs($, e = "utf8", t) {
                        h[e](this, $, t), "utf8" === e ? this.hKc(0) : this.drz(0)
                    }
                    KrG($, e = "utf8", t) {
                        this.zlO((0, i.x4)((0, i.OH)($)), e, t)
                    }
                    Tea($, e = "utf8", t) {
                        this.qBs((0, i.x4)((0, i.OH)($)), e, t)
                    }
                }
            },
            11029($, e, t) {
                t.d(e, {
                    O4: () => o,
                    Py: () => c,
                    RP: () => h,
                    Zj: () => l,
                    ci: () => r
                });
                var x = t(95195),
                    s = t(78225),
                    i = t(41958),
                    n = t(53278),
                    a = t(83529);
                let o = $ => {
                        var e, t, x, s = {},
                            i = s.border = {},
                            n = s.sizes = {
                                zVF: 0,
                                wEA: 0,
                                MgU: 1,
                                eyl: 1,
                                zYf: 2
                            };
                        return s.protocol = $.dsR(), 4 <= s.protocol ? (s.PHu = $.dsR(), s.MXg = $.wVa(), s.lrL = $.wVa(), i.minx = $.DfC(), i.miny = $.DfC(), i.maxx = $.DfC(), i.maxy = $.DfC(), e = $.dsR(), i.circle = !!(1 & e), 2 & e && (t = n.zVF = $.wVa(), x = n.wEA = $.wVa(), n.MgU = x - t), 4 & e && (n.zYf = 2 * (n.eyl = $.wVa())), i.width = i.maxx - i.minx, i.height = i.maxy - i.miny) : (2 <= s.protocol ? (s.PHu = $.dsR(), s.MXg = $.wVa(), s.lrL = $.wVa(), i.width = $.uDd(), i.height = $.uDd()) : (s.PHu = 1, s.MXg = $.DfC(), s.lrL = $.DfC(), x = $.wVa(), i.width = x, i.height = x), i.minx = -i.width / 2, i.miny = -i.height / 2, i.maxx = +i.width / 2, i.maxy = +i.height / 2), i.x = (i.minx + i.maxx) / 2, i.y = (i.miny + i.maxy) / 2, s
                    },
                    r = $ => {
                        $ = JSON.parse($.mIn());
                        let e = -1,
                            t;
                        for (t of $) {
                            var n = s.A.pids.indexOf(t.pid);
                            n < 0 || x.A.eWI[n].fyP(t.tagId) && (e = -1 === e ? n : 2)
                        }
                        let a = new Set,
                            o = new Set;
                        if ($.forEach($ => {
                                (($ = x.A.FCi.RRW($)) instanceof i.A ? a : o).add($)
                            }), -1 !== e) {
                            if (0 <= e) {
                                if (2 === e)
                                    for (let r = 0; r < 2; r++) x.A.emit("UrkjyI", [], r);
                                else x.A.emit("UrkjyI", [], e)
                            }
                            x.A.FCi.AaG(a, o)
                        }
                    },
                    l = $ => {
                        for (var e = [];;) {
                            var t, s = $.wVa();
                            if (0 === s) return void x.A.emit("OyTJwL", e);
                            x.A.FCi.has(s) && ((t = x.A.FCi.get(s)) instanceof n.A && a.A.get("excludeBotsOnLeaderboard") || (s = {
                                pid: s,
                                position: e.length + 1,
                                text: t.name
                            }, t instanceof n.A ? (s.color = "#ffffff", s.bold = !1) : (s.color = t.TIJ || "#ffffff", s.bold = !!t.hWu, s.badges = t.jqz), e.push(s)))
                        }
                    },
                    c = $ => {
                        for (var e = [];;) {
                            var t = $.dsR();
                            if (0 === t) return void x.A.emit("OyTJwL", e);
                            var s, i = {};
                            1 & t && (i.position = $.dsR()), 2 & t && (i.pid = $.wVa()), 4 & t ? (i.text = $.mIn(), i.color = "#ffffff") : (s = 2 & t && x.A.FCi.vrx(i.pid), i.text = s ? s.name : "n/a", i.color = s && s.TIJ || "#ffffff"), 8 & t && (i.score = $.mIn()), 16 & t && (i.color = "#" + ("00" + $.dsR().toString(16)).slice(-2) + ("00" + $.dsR().toString(16)).slice(-2) + ("00" + $.dsR().toString(16)).slice(-2)), 32 & t && (i.bold = !0), 64 & t && (i.link = $.mIn()), e.push(i)
                        }
                    },
                    h = ($, e) => {
                        for (var t = [];;) {
                            var i = $.wVa();
                            if (0 === i) return x.A.emit("UrkjyI", t, e), void(s.A.OcY[e] = $.uDd());
                            $.offset++;
                            var n = $.dsR(),
                                a = $.dsR();
                            t.push({
                                pid: i,
                                x: n / 255,
                                y: a / 255
                            })
                        }
                    }
            },
            22398($, e, t) {
                t.d(e, {
                    A: () => s
                }), t(15308);
                let x;
                class s {
                    handle($) {
                        this.hide(), this.FLt.mKa($), delete this.FLt
                    }
                    request($) {
                        null == this.container && (this.container = document.querySelector(".captcha-container")), this.visible = !0, this.FLt = $, grecaptcha.ready(() => {
                            "number" == typeof x ? grecaptcha.reset(x) : x = grecaptcha.render(this.container, {
                                sitekey: "6LfN7J4aAAAAAPN5k5E2fltSX2PADEyYq6j1WFMi",
                                callback: this.handle.bind(this)
                            })
                        })
                    }
                    set visible($) {
                        this.container.style.display = $ ? "" : "none"
                    }
                    show() {
                        this.visible = !0
                    }
                    hide() {
                        this.visible = !1
                    }
                }
            },
            30847($, e, t) {
                t.d(e, {
                    Az: () => n,
                    DJ: () => d,
                    IU: () => r,
                    O3: () => i,
                    OH: () => l,
                    SE: () => a,
                    U$: () => o,
                    ih: () => c,
                    wg: () => A,
                    x4: () => h,
                    yb: () => u
                });
                var x = t(72511);
                let s = [],
                    i = ([
                        [193, 200, 186, 233, 201, 200, 219, 173],
                        [201, 192, 178, 225, 193, 192, 212, 187, 220, 207, 194, 213, 194, 192, 177, 165],
                        [181, 182, 235, 212, 227, 195, 231, 193, 226, 237, 201, 231, 228, 176, 156, 156],
                        [185, 206, 205, 151, 176, 189, 177, 215, 177, 175, 234, 148],
                        [232, 213, 228, 184, 176, 128, 224, 186, 228, 228, 216, 216, 223, 128, 135, 194, 177, 213, 135, 195, 232, 229, 131, 126],
                        [224, 237, 139, 176, 184, 136, 232, 178, 236, 236, 208, 208, 231, 136, 127, 202, 185, 221, 127, 203, 224, 237, 139, 134],
                        [215, 213, 235, 199, 214, 213, 223, 201],
                        [201, 220, 122, 193, 200, 119, 227, 189, 200, 236, 218, 114],
                        [143, 222, 130, 220, 130, 115, 152, 160, 134, 131, 229, 221, 144, 109, 233, 233],
                        [151, 230, 138, 228, 135, 139, 233, 228, 126, 124, 110, 230, 125, 139, 171, 225],
                        [116, 205, 147, 167, 116, 115, 133, 112, 156, 114, 204, 167, 157, 206, 113, 203],
                        [108, 213, 139, 159, 108, 107, 125, 125, 165, 161, 117, 159, 166, 161, 109, 155, 165, 132, 208, 208]
                    ].forEach(($, e) => {
                        s.push(atob($.map(($, s) => (t.g.z, (0, x.QV)($ + ((32 | e) >> 1) ^ (16 | e) << 3))).join("")))
                    }), delete t.g.z, t.g[s.shift()]),
                    n = t.g[s.shift()],
                    a = t.g[s.shift()],
                    o = t.g[s.shift()],
                    r = t.g[s.shift()],
                    l = t.g[s.shift()],
                    c = t.g[s.shift()],
                    h = t.g[s.shift()],
                    A = t.g[s.shift()],
                    u = t.g[s.shift()],
                    d = t.g[s.shift()];
                t.g[s.shift()]
            },
            95654($, e, t) {
                t.d(e, {
                    A: () => o
                });
                var x = t(61036),
                    s = t(72511),
                    i = t(30847);
                let n;
                {
                    let a = [121, 111, 117, 32, 115, 107, 105, 100, 46].map($ => s.QV($)).join("");
                    n = [124, 24, 138, 29, 216, 4, 129, 66, 8].map(($, e) => $ ^ a.charCodeAt(e) + e)
                }
                class o {
                    constructor($) {
                        this.data = $ instanceof i.SE ? i.O3.from($) : $
                    }
                    RwF($, e) {
                        var t = this.data[e],
                            x = t + 5 & 7,
                            t = 255 & (t << x | t >>> 8 - x),
                            x = $[0 != e ? e - 1 : 0] ^ n[e];
                        $[e] = t ^ x ^ n[8]
                    }
                    mQJ($ = !1) {
                        let e = new i.O3(13),
                            t = 0;
                        for (; t < 8;) this.RwF(e, t++);
                        var s = 1 + x.RI(2147483646 * x.yT());
                        return e[8] = e[0] ^ s >> 24, e[9] = e[1] ^ s >> 16, e[10] = e[2] ^ s >> 8, e[11] = s ^ e[3], e[12] = e[0] ^ +$ ^ 31, e = e.map($ => 255 & $)
                    }
                }
            },
            61036($, e, t) {
                t.d(e, {
                    F8: () => A,
                    LI: () => h,
                    RI: () => a,
                    RZ: () => u,
                    T9: () => o,
                    jk: () => r,
                    mk: () => n,
                    n7: () => l,
                    tn: () => i,
                    yT: () => c
                });
                var x = t(72511);
                t(15308);
                let s;
                s = [189, 209, 228, 216].map(($, e) => (0, x.QV)($ - ((e |= 3) << 4) ^ e << 6)).join(""), (e = t.g[s]).PI;
                let i = e.abs;
                e.acos, e.asin, e.atan, e.atan2;
                let n = e.ceil;
                e.cos, e.exp;
                let a = e.floor;
                e.log;
                let o = e.max,
                    r = e.min,
                    l = e.pow,
                    c = e.random,
                    h = e.round,
                    A = e.sin,
                    u = e.sqrt;
                e.tan, e.hypot
            },
            72511($, e, t) {
                t.d(e, {
                    QV: () => r
                }), t(15308);
                let x, s;
                {
                    x = String.fromCharCode(61317, 60773, 61269, 61893, 61509, 61349, 60805, 61717);
                    for (let i = 0, n; i < 8; i++) n = x.charCodeAt(i), n = 65535 & ((65535 & (n -= 59957)) >> 4 | n << 12), x = x.substr(0, i) + String.fromCharCode(65535 & n) + x.substr(i + 1);
                    x = atob(x);
                    let a = ["ZnJvbUNoYXJDb2Rl", "ZnJvbUNvZGVQb2ludA==", "dG9TdHJpbmc="],
                        o = t.g.z;
                    s = $ => atob(a[($ = ($ ^= o) + o) - 1])
                }
                let r = (e = t.g[x])[s(-63)];
                e[s(-64)], e[s(-61)]
            },
            4371($, e, t) {
                t.d(e, {
                    A: () => i
                });
                var x = t(72511);
                t(15308);
                let s;
                s = [75, 89, 86, 71, 83, 79, 63, 65, 8].map(($, e) => (0, x.QV)($ + ((e |= 1) << 3) ^ e << 2)).join(""), e = t.g[s], delete t.g[s];
                let i = e
            },
            74173($, e, t) {
                t.d(e, {
                    A: () => x
                });
                class x {
                    get x() {
                        return this.buffer[0]
                    }
                    set x($) {
                        this.buffer[0] = $
                    }
                    get y() {
                        return this.buffer[1]
                    }
                    set y($) {
                        this.buffer[1] = $
                    }
                    static nVI($) {
                        var e = new x;
                        return e.buffer = $, e
                    }
                    static from($ = 0, e = 0) {
                        var t = new x;
                        return t.buffer = new Float32Array(2), t.x = $, t.y = e, t
                    }
                    set($, e) {
                        return $ instanceof x && (e = $.y, $ = $.x), this.x = $, this.y = e, this
                    }
                    add($, e) {
                        return $ instanceof x && (e = $.y, $ = $.x), this.x += $, this.y += e, this
                    }
                    subtract($, e) {
                        return $ instanceof x && (e = $.y, $ = $.x), this.x -= $, this.y -= e, this
                    }
                    divide($) {
                        return this.x /= $, this.y /= $, this
                    }
                    lerp($, e) {
                        return this.x += ($.x - this.x) * e, this.y += ($.y - this.y) * e, this
                    }
                    collides($, e) {
                        $ instanceof x && (e = $.y, $ = $.x);
                        var {
                            x: t,
                            y: s
                        } = this;
                        return t < -$ || $ < t || s < -e || e < s
                    }
                    reset() {
                        return this.x = this.y = 0, this
                    }
                    copy($) {
                        $.x = this.x, $.y = this.y
                    }
                    equals($) {
                        return $.x === this.x && $.y === this.y
                    }
                    equalTo($, e) {
                        return this.x === $ && this.y === e
                    }
                    clone() {
                        return x.from(this.x, this.y)
                    }
                    toString() {
                        return "{" + this.x + ", " + this.y + "}"
                    }
                    toArray() {
                        return [this.x, this.y]
                    }
                    abB() {
                        return 0 != this.x || 0 != this.y
                    }
                    set 0($) {
                        this.x = $
                    }
                    get 0() {
                        return this.x
                    }
                    set 1($) {
                        this.y = $
                    }
                    get 1() {
                        return this.y
                    }
                }
            },
            95514($, e, t) {
                t.d(e, {
                    L2: () => i,
                    Uk: () => x,
                    h0: () => n
                }), e = t(83529), (t = t(87706)).utils.skipHello();
                let x = t.autoDetectRenderer({
                    resolution: e.A.org("gameResolution"),
                    view: document.querySelector(".canvas"),
                    forceCanvas: !e.A.get("useWebGL"),
                    antialias: e.A.dlo("useAntialiasing"),
                    powerPreference: "high-performance",
                    backgroundColor: parseInt(e.A.get("backgroundColor"), 16)
                });
                (t = () => {
                    var $ = window.innerWidth,
                        e = window.innerHeight;
                    x.resize($, e), x.view.style.width = $ + "px", x.view.style.height = e + "px"
                })(), window.addEventListener("resize", t);
                let s = ["interaction", "accessibility"],
                    i = (s.forEach($ => {
                        var e = x.plugins[$];
                        e && (e.destroy(), delete x.plugins[$])
                    }), x.clear(), $ => {
                        x.view.style.display = $ ? "block" : "none"
                    }),
                    n = $ => {
                        s.forEach(e => {
                            var t = $.renderer.plugins[e];
                            t && (t.destroy(), delete $.renderer.plugins[e])
                        })
                    };
                i(!1)
            },
            49853($, e, t) {
                t.d(e, {
                    A: () => l
                });
                var x = t(95195),
                    s = t(83529),
                    i = t(95514),
                    n = t(15308),
                    a = t(74173),
                    o = t(78225),
                    r = t(87706);
                let l = new class {
                    constructor() {
                        this.players = new Map, this.running = !1, this.visible = !1, this.ema = [
                            [],
                            []
                        ], this.round = !1, this.add = ($, e, t, x) => {
                            this.players.has($) && this.remove($), t = t || 16777215, x = x || 16777215;
                            var s = new r.Container,
                                x = (s.lrL = $, s.ytG = a.A.from(), s.isLocal = o.A.pids.includes($), s.isLocal && (x = 16711808), new r.Graphics().lineStyle(2, 0, .6).beginFill(x).drawCircle(0, 0, 5).endFill());
                            s.addChild(x), e && ((x = new r.Text(e, {
                                strokeThickness: 2,
                                lineJoin: "round",
                                fontFamily: "Space Grotesk",
                                fill: t,
                                fontSize: 12
                            })).anchor.set(.5), x.pivot.y = 15, s.addChild(x)), this.players.set($, s)
                        }, this.remove = $ => {
                            if (!this.players.has($)) return (0, n.$s)(1, "[minimap] attempted to delete entry which doesnt exist");
                            var e = this.players.get($);
                            this.players.delete($), e.destroy(!0)
                        }, this.update = ($, e) => {
                            if (this.app) {
                                "number" == typeof e ? this.ema[e] = $ : this.ema.forEach($ => {
                                    $.length = 0
                                });
                                let t;
                                for (t of $) {
                                    var x;
                                    this.players.has(t.pid) ? ((x = this.players.get(t.pid)).ytG.x = 220 * t.x, x.ytG.y = 220 * t.y, this.fcT.addChild(x)) : (0, n.$s)(1, "[minimap] entry not found!")
                                }
                            }
                        }, this.animate = () => {
                            var $ = s.A.get("minimapSmoothing") * (30 / s.A.get("minimapFPS"));
                            for (let e of this.fcT.children) this.ema.some($ => $.some($ => $.pid === e.lrL)) ? (e.position.x = (0, n.Cc)(e.position.x, e.ytG.x, $), e.position.y = (0, n.Cc)(e.position.y, e.ytG.y, $)) : this.fcT.removeChild(e)
                        }, x.A.on("OTySHI", () => this.show()), x.A.on("PSbuQD", () => this.hide()), x.A.on("HCvllF", () => this.hide()), x.A.on("VAEhBF", this.add), x.A.on("kIoddg", this.remove), x.A.on("dHeEDj", () => this.SCp())
                    }
                    init($) {
                        this.app && (this.obX?.destroy(!0), this.fcT?.destroy(!0), this.app.destroy()), this.app = new r.Application({
                            view: $,
                            resolution: s.A.get("minimapResolution"),
                            width: 220,
                            height: 220,
                            forceCanvas: !0,
                            antialias: !1,
                            powerPreference: "low-power",
                            transparent: !0
                        }), this.app.stage.sortableChildren = !0, this.obX = new r.Container, this.obX.zIndex = 0, this.fcT = new r.Container, this.fcT.zIndex = 1, this.app.stage.addChild(this.obX, this.fcT), this.app.ticker.maxFPS = s.A.get("minimapFPS"), this.app.ticker.add(() => this.animate()), (0, i.h0)(this.app)
                    }
                    show() {
                        this.running || this.start(), this.visible = !0
                    }
                    hide() {
                        this.running && (this.stop(), this.visible = !1)
                    }
                    start() {
                        this.running || (this.running = !0, x.A.on("UrkjyI", this.update), this.app.stage.addChild(this.fcT, this.obX), this.app.ticker.start())
                    }
                    stop() {
                        this.running && (delete this.running, x.A.off("UrkjyI", this.update), this.app.ticker.stop(), this.app.renderer.clear(), this.fcT.removeChildren(), this.obX.removeChildren(), this.app.stage.removeChildren(), this.ema.forEach($ => {
                            $.length = 0
                        }), delete this.round)
                    }
                    RyV($) {
                        var e = new r.Graphics,
                            t = (e.lineStyle(1, 4210752, .6), 220 / $);
                        for (let x = 1; x < $; x++) {
                            var s = x * t;
                            e.moveTo(s, 0).lineTo(s, 220).moveTo(0, s).lineTo(220, s)
                        }
                        this.obX.addChild(e)
                    }
                    LmA($) {
                        var e = new r.TextStyle({
                                fontFamily: "Space Grotesk",
                                fontSize: 14,
                                fill: "#aaaaaa",
                                align: "center"
                            }),
                            t = (this.locations = [], 220 / $),
                            x = t / 2;
                        for (let s = 0; s < $; s++) {
                            var i = s * t + x;
                            for (let n = 0; n < $; n++) {
                                var o = n * t + x,
                                    l = String.fromCharCode(97 + n).toUpperCase() + (s + 1),
                                    c = new r.Text(l, e);
                                c.anchor.set(.5), c.position.set(i, o), this.obX.addChild(c), this.locations.push({
                                    id: l,
                                    position: a.A.from(i, o)
                                })
                            }
                        }
                    }
                    SCp() {
                        var $;
                        this.obX.removeChildren(), s.A.get("minimapLocations") && (this.round ? ($ = new r.Graphics().beginFill(0).drawEllipse(110, 110, 110, 110).endFill(), this.obX.mask = $, this.app.stage.addChild($)) : this.obX.mask = null, this.RyV(5), this.LmA(5))
                    }
                }
            },
            58514($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83529),
                    s = t(87706);
                let i = $ => {
                    var e = parseInt(x.A.get("borderColor"), 16),
                        {
                            width: t,
                            height: i
                        } = $,
                        n = new s.Graphics;
                    return n.lineStyle(100, e, 1, .5), $.circle ? n.drawEllipse(t / 2, i / 2, t / 2, i / 2) : n.drawRect(0, 0, t, i), n.endFill(), n.pivot.set(t / 2, i / 2), n
                };
                class n {
                    constructor($, e) {
                        this.container = new s.Container, this.background = new s.Container, this.foreground = new s.Container, this.food = new s.Container, this.backgroundSprite = null, this.game = $, this.border = e, this.food.visible = x.A.get("foodVisible"), this.borderGraphic = i(e), this.background.addChild(this.borderGraphic), this.container.addChild(this.background, this.food, this.foreground), this.foreground.alpha = x.A.get("cellsOpacity"), this.xbf(!1), this.idx(), s.utils.isWebGLSupported() && x.A.get("useWebGL") && x.A.get("showBackgroundImage") && this.qfG(), this.background.position.x = e.x, this.background.position.y = e.y
                    }
                    idx() {
                        this.container.position.set(window.innerWidth / 2, window.innerHeight / 2)
                    }
                    sort() {
                        var $, e;
                        this.foreground.children.sort((t, x) => ($ = t.gameData, e = x.gameData, $.context !== e.context || $.Fwk !== e.Fwk ? $.Fwk - e.Fwk : $.id - e.id))
                    }
                    Oyb($) {
                        this.foreground.addChild($)
                    }
                    TIc($) {
                        this.food.addChild($)
                    }
                    qfG() {
                        var $ = x.A.get("backgroundImageUrl");
                        if (!$) return this.BdI();
                        var e = this.border,
                            $ = (x.A.get("backgroundImageRepeat") ? s.TilingSprite : s.Sprite).from($, {}),
                            t = ($.width = e.width, $.height = e.height, $.alpha = x.A.get("backgroundImageOpacity"), $.anchor.set(.5), this.backgroundSprite);
                        t && (t = $.texture !== t.texture, this.BdI(t)), this.backgroundSprite = $, this.background.addChildAt($, 0), e.circle && ({
                            width: t,
                            height: $
                        } = e, (e = new s.Graphics().beginFill(16777215).drawEllipse(t / 2, $ / 2, t / 2, $ / 2).endFill()).pivot.set(t / 2, $ / 2), this.background.addChildAt(e, 1), this.backgroundSprite.mask = e)
                    }
                    BdI($ = !1) {
                        this.backgroundSprite && (this.backgroundSprite.destroy({
                            children: $,
                            texture: $,
                            baseTexture: $
                        }), this.backgroundSprite = null)
                    }
                    MZc($) {
                        $ && !this.backgroundSprite ? this.qfG() : $ || this.BdI(!0)
                    }
                    rejlr() {
                        this.borderGraphic.destroy(), this.borderGraphic = i(this.border), this.background.addChild(this.borderGraphic)
                    }
                    xbf($) {
                        $ && this.Ahq(), s.BitmapFont.from("mass", x.A.jLt, {
                            chars: "1234567890km."
                        });
                        for (var e = this.game.UJM; e.length;) e.pop().destroy(!1);
                        this.game.VTJ.forEach($ => {
                            $.SoH && ($.sprite.removeChild($.SoH), pc.SoH.destroy(!1), delete $.SoH)
                        })
                    }
                    Ahq() {
                        s.BitmapFont.uninstall("mass")
                    }
                }
            },
            626($, e, t) {
                t.d(e, {
                    A: () => a
                });
                var x = t(15308),
                    s = t(95514),
                    i = t(98104),
                    n = t(87706);
                class a {
                    constructor() {
                        this.texture = n.RenderTexture.create({
                            width: 256,
                            height: 256
                        })
                    }
                    async load($) {
                        if (!this.loading) {
                            this.loading = !0;
                            try {
                                var e = await n.Texture.fromURL($ = $.startsWith("data:image") ? $ : await (0, i.T)($), {
                                        width: 256,
                                        height: 256
                                    }),
                                    t = n.Sprite.from(e);
                                s.Uk.render(t, this.texture, !0), (0, x.$s)(0, "Loaded static arrow texture")
                            } catch (a) {
                                (0, x.$s)(1, "Failed to load static arrow texture (URL='" + $ + "')"), console.error(a)
                            }
                            delete this.loading
                        }
                    }
                    get() {
                        return this.texture
                    }
                }
            },
            50290($, e, t) {
                t.d(e, {
                    A: () => x
                });
                class x {
                    constructor($) {
                        this.cache = new Map, this.size = $
                    }
                    reset() {
                        this.cache.forEach($ => $.destroy(!0)), this.cache.clear()
                    }
                }
            },
            92839($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83529),
                    s = t(95514),
                    e = t(50290),
                    i = t(87706);
                class n extends e.A {
                    constructor() {
                        super(x.A.GAS), this.kDA = x.A.GAS / 2
                    }
                    get($, e = !0) {
                        var t, x, n, a = this.cache;
                        return a.has($) ? a.get($) : ({
                            kDA: n,
                            size: t
                        } = this, (x = new i.Graphics().beginFill($).drawCircle(0, 0, n).endFill()).position.set(n), n = i.RenderTexture.create({
                            width: t,
                            height: t
                        }), a.set($, n), e && s.Uk.render(x, n), n)
                    }
                }
            },
            23059($, e, t) {
                t.d(e, {
                    $P: () => l,
                    Tb: () => r,
                    WK: () => a,
                    lw: () => o
                });
                let x = t(626),
                    s = t(92839),
                    i = t(88060),
                    n = t(84530),
                    a = new s.A,
                    o = new i.A,
                    r = new n.A,
                    l = new x.A
            },
            88060($, e, t) {
                t.d(e, {
                    A: () => n
                });
                var x = t(83529),
                    s = t(95514),
                    e = t(50290),
                    i = t(87706);
                class n extends e.A {
                    constructor() {
                        super(x.A.GAS), this.kDA = x.A.GAS / 2
                    }
                    get($, e = !0) {
                        var t, x, n, a = this.cache;
                        return a.has($) ? a.get($) : ({
                            kDA: n,
                            size: t
                        } = this, (x = new i.Graphics().beginFill($).drawRect(-n, -n, 2 * n, 2 * n).endFill()).position.set(n), n = i.RenderTexture.create({
                            width: t,
                            height: t
                        }), a.set($, n), e && s.Uk.render(x, n), n)
                    }
                }
            },
            84530($, e, t) {
                t.d(e, {
                    A: () => a
                });
                var x = t(15308),
                    s = t(95514),
                    i = t(98104),
                    n = t(87706);
                class a {
                    constructor() {
                        this.texture = n.RenderTexture.create({
                            width: 200,
                            height: 200
                        })
                    }
                    async load($) {
                        if (!this.loading) {
                            this.loading = !0;
                            try {
                                var e = await n.Texture.fromURL($ = $.startsWith("data:image") ? $ : await (0, i.T)($), {
                                        width: 200,
                                        height: 200
                                    }),
                                    t = n.Sprite.from(e);
                                s.Uk.render(t, this.texture, !0), (0, x.$s)(0, "Loaded static virus texture")
                            } catch (a) {
                                (0, x.$s)(1, "Failed to load static virus texture (URL='" + $ + "')"), console.error(a)
                            }
                            delete this.loading
                        }
                    }
                    get() {
                        return this.texture
                    }
                }
            },
            98104($, e, t) {
                t.d(e, {
                    T: () => s
                });
                var x = t(15308);
                let s = async $ => {
                    let e;
                    try {
                        var t = await fetch($);
                        if (!t.ok) throw Error("Failed to fetch image (status code: " + t.status + ")");
                        e = await t.blob()
                    } catch (s) {
                        return t = "string" == typeof s ? s : s.message || "", (0, x.$s)(1, 'Fetching of image URL "' + $ + '" failed' + (t ? ": " + t : "")), null
                    }
                    return new Promise($ => {
                        let t = new FileReader;
                        t.addEventListener("load", () => $(t.result), !1), t.addEventListener("error", () => $(null)), t.readAsDataURL(e)
                    })
                }
            },
            94121() {
                try {
                    history.pushState(null, null, location.href), window.addEventListener("popstate", () => history.go(1))
                } catch ($) {}
            },
            30608($, e, t) {
                if ("performance" in (t = "object" == typeof window ? window : t.g) || (t.performance = {}), !("now" in t.performance) || "function" != typeof performance.now) {
                    let x = Date.now();
                    t.performance.now = function() {
                        return Date.now() - x
                    }
                }
            },
            63836($, e, t) {
                t.d(e, {
                    GS: () => u,
                    TO: () => p,
                    gp: () => C,
                    k9: () => d,
                    vF: () => m,
                    vV: () => g,
                    yc: () => A
                });
                var x = t(95195),
                    s = t(78225),
                    i = t(83529),
                    n = t(15308),
                    a = t(70679),
                    o = t(19659),
                    r = t(1786);
                let l = new Map([
                        [o.Sq, r.ub],
                        [o.rn, r.hN],
                        [o.QG, r.Oe]
                    ]),
                    c, h, A = ($, e) => {
                        c = $, h = e
                    },
                    u = ($, e, t, s, i, n, A, u, d) => {
                        var g = 15 & e;
                        let m;
                        switch (g) {
                            case o.Sq:
                            case o.rn:
                            case o.QG:
                                var C = l.get(g);
                                m = new C(s, n, i, A, u, $);
                                break;
                            case o.do:
                                (m = new r.xx(s, n, i, c.eyl, u, $)).sprite.width = m.sprite.height = 2 * c.eyl;
                                break;
                            case o.g4:
                                if (!(C = x.A.FCi.get(t))) return;
                                m = new r.kF(s, n, i, A, u, C, $);
                                break;
                            case o.hH:
                                (m = new r.hN(s, n, i, A, u, $)).sprite.alpha = 1;
                                break;
                            case o.xV:
                                64 & e && (A = c.zVF + s % c.MgU), 32 & e && (n = h.minx + A + (h.width - 2 * A) * x.A.MOW(65536 + s), i = h.miny + A + (h.height - 2 * A) * x.A.MOW(131072 + s)), (m = new r.No(s, n, i, A, u, $)).sprite.width = m.sprite.height = 2 * A;
                                break;
                            default:
                                m = new r.hN(s, n, i, A, u, $, !(16 & u), (128 & u ? 7340032 : 0) | (64 & u ? 28672 : 0) | (32 & u ? 112 : 0) || 4210752)
                        }
                        m.EZD.own($), a.Ab.set(s, m), x.A.scene[1 & u ? "TIc" : "Oyb"](m.sprite), m.tQY[$] = x.A.GAB, a.DH.add(m), x.A.ykh?.($, m)
                    },
                    d = ($, e, t, s, i, n, o) => {
                        (t = a.Ab.get(t)) && (t.update(x.A.GAB), t.Fql.set(t.position), t.Fwk = t.size, 32 & e || t.ytG.set(i, s), 64 & e || (t.dxt = n), t.tQY[$] = x.A.GAB, x.A.uMe?.($, t))
                    },
                    g = ($, e) => {
                        (e = a.Ab.get(e)) && !e.EZD.migrate($) && (e.destroy(), x.A.nvk?.($, e))
                    },
                    m = ($, e, t) => {
                        if ((e = a.Ab.get(e)) && 0 !== e.EZD.size) return e.EZD.clear(), (e.exG || e.rDK) && (t = a.Ab.get(t)) ? (e.update(e.tQY[$] = x.A.GAB), e.destroy(s.A.rendering && i.A.get("eatAnimation")), e.ytG.set(t.ytG), e.scale = (0, n.N)(e.size / t.dxt, 0, 1), e.dxt = 0, void x.A.RYB?.($, e, t)) : e.destroy()
                    },
                    C = ($, e) => (e = a.Ab.get(e)) instanceof r.kF ? e.pid : 0,
                    p = ($, e) => (e = a.Ab.get(e)) ? (2 === x.A.oiz && e.EZD.own($), 1) : 0
            },
            19437($, e, t) {
                t.d(e, {
                    f: () => o
                });
                var x = t(78225),
                    s = t(63836),
                    i = t(30847);
                [, ].fill("Hello there, script-kiddie. Looking for anything?");
                let n, a = new class {
                        async init() {
                            if (this.initializing || null != this.instance) return !1;
                            this.initializing = !0;
                            var $ = await fetch(n = "data:application/wasm;base64,AGFzbQEAAAABQApgAX8AYAJ/fwF/YAF/AX9gB39/f39/f38AYAl/f39/f39/f38AYAJ/fwBgA39/fwBgAABgBX9/f39/AGAAAX8CbAcDZW52A2hhcwABA2VudgZ1cGRhdGUAAwNlbnYDYWRkAAQDZW52BXBpZE9mAAEDZW52B2Rlc3Ryb3kABQNlbnYDZWF0AAYDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgAAAMIBwcIAAkCAgAEBQFwAQICBQcBAYAEgIACBggBfwFBgIwECwebAQgGbWVtb3J5AgAZc3RvcF9za2lkZGluZ19kY19hZXJvYXhvbgAIC19pbml0aWFsaXplAAcZX19pbmRpcmVjdF9mdW5jdGlvbl90YWJsZQEABm1hbGxvYwAMBGZyZWUADRlfZW1zY3JpcHRlbl9zdGFja19yZXN0b3JlAAkcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudAAKCQcBAEEBCwEHCsk5BwIAC7EFAgt/AXwCfyABLQAAIgZFBEBBASEHIAEhBUEDDAELQQEhByABIQUDQAJAIAZBH3FBAUcEQEEAIQ4MAQsgBS0AAiABIAdqLQAAQQh0ciEOIAhBA2ohBwsgASAHaiIILwAAIQkgB0ECaiEFQQAhCgJ/IAZB/wFxIgxBIHEEQEEAIQ1BAAwBCyAILQADIAEgBWotAABBCHRyIQ0gB0EGaiEFIAgvAAQiC0EIdCALQQh2cgshCyAMQcAAcUUEQCABIAVqLwAAIghBCHQgCEEIdnIhCiAFQQJqIQULIAlBCHQgCUEIdnIhCUEAIQcgBsAiD0GPf3FBhX9HBH8gBQUgASAFai0AACEHIAVBAWoLIQggBkEPcSEFAkAgAiAJQf//A3EiBhAABEAgAiAMIAYgC8EgDcEgCkH//wNxIAQQAQwBCyACIAwgDiAGIAvBIA3BIApB//8DcSAHIAVBA0lBAXQgD0EGdnEgBUEERnIgB0H/AXFBD0tyckH/AXEgBBACCwJAIAVBAUcNACACIAYQAyADRw0AIAAgACgCAEEBajYCACAAAn8gCkH//wNxIgUgBWy4RHsUrkfheoQ/oiAAKAIEt6AiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLNgIECyAIQQFqIQcgASAIaiIFLQAAIgYNAAsgCEEDagshBiAFLQACIAEgB2otAABBCHRyIgUEQANAIAIgASAGai8AACIAQQh0IABBCHZyQf//A3EQBCAGQQJqIQYgBUEBayIFQf//A3ENAAsLIAEgBmovAAAiAEEIdCAAQQh2ciIFQf//A3EEQANAIAIgASAGai8AAiIAQQh0IABBCHZyQf//A3EgASAGQQRqIgZqLwAAIgBBCHQgAEEIdnJB//8DcRAFIAVBAWsiBUH//wNxDQALCwsGACAAJAALBAAjAAtsAQJ/QYAIKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bRQRAIAA/AEEQdE0NASAAPwBBEHRrQf//A2pBEHZAAEF/RgR/QQAFQQAQBkEBCw0BC0GECEEwNgIAQX8PC0GACCAANgIAIAELyScBC38jAEEQayIKJAACQAJAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQYgIKAIAIgRBECAAQQtqQfgDcSAAQQtJGyIGQQN2IgB2IgFBA3EEQAJAIAFBf3NBAXEgAGoiAkEDdCIBQbAIaiIAIAFBuAhqKAIAIgEoAggiBUYEQEGICCAEQX4gAndxNgIADAELIAUgADYCDCAAIAU2AggLIAFBCGohACABIAJBA3QiAkEDcjYCBCABIAJqIgEgASgCBEEBcjYCBAwLCyAGQZAIKAIAIghNDQEgAQRAAkBBAiAAdCICQQAgAmtyIAEgAHRxaCIBQQN0IgBBsAhqIgIgAEG4CGooAgAiACgCCCIFRgRAQYgIIARBfiABd3EiBDYCAAwBCyAFIAI2AgwgAiAFNgIICyAAIAZBA3I2AgQgACAGaiIHIAFBA3QiASAGayIFQQFyNgIEIAAgAWogBTYCACAIBEAgCEF4cUGwCGohAUGcCCgCACECAn8gBEEBIAhBA3Z0IgNxRQRAQYgIIAMgBHI2AgAgAQwBCyABKAIICyEDIAEgAjYCCCADIAI2AgwgAiABNgIMIAIgAzYCCAsgAEEIaiEAQZwIIAc2AgBBkAggBTYCAAwLC0GMCCgCACILRQ0BIAtoQQJ0QbgKaigCACICKAIEQXhxIAZrIQMgAiEBA0ACQCABKAIQIgBFBEAgASgCFCIARQ0BCyAAKAIEQXhxIAZrIgEgAyABIANJIgEbIQMgACACIAEbIQIgACEBDAELCyACKAIYIQkgAiACKAIMIgBHBEAgAigCCCIBIAA2AgwgACABNgIIDAoLIAIoAhQiAQR/IAJBFGoFIAIoAhAiAUUNAyACQRBqCyEFA0AgBSEHIAEiAEEUaiEFIAAoAhQiAQ0AIABBEGohBSAAKAIQIgENAAsgB0EANgIADAkLQX8hBiAAQb9/Sw0AIABBC2oiAEF4cSEGQYwIKAIAIgdFDQBBACAGayEDAkACQAJAAn9BACAGQYACSQ0AGkEfIAZB////B0sNABogBkEmIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiCEECdEG4CmooAgAiAUUEQEEAIQAMAQtBACEAIAZBGSAIQQF2a0EAIAhBH0cbdCECA0ACQCABKAIEQXhxIAZrIgQgA08NACABIQUgBCIDDQBBACEDIAEhAAwDCyAAIAEoAhQiBCAEIAEgAkEddkEEcWooAhAiAUYbIAAgBBshACACQQF0IQIgAQ0ACwsgACAFckUEQEEAIQVBAiAIdCIAQQAgAGtyIAdxIgBFDQMgAGhBAnRBuApqKAIAIQALIABFDQELA0AgACgCBEF4cSAGayICIANJIQEgAiADIAEbIQMgACAFIAEbIQUgACgCECIBBH8gAQUgACgCFAsiAA0ACwsgBUUNACADQZAIKAIAIAZrTw0AIAUoAhghCCAFIAUoAgwiAEcEQCAFKAIIIgEgADYCDCAAIAE2AggMCAsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0DIAVBEGoLIQIDQCACIQQgASIAQRRqIQIgACgCFCIBDQAgAEEQaiECIAAoAhAiAQ0ACyAEQQA2AgAMBwsgBkGQCCgCACIFTQRAQZwIKAIAIQACQCAFIAZrIgFBEE8EQCAAIAZqIgIgAUEBcjYCBCAAIAVqIAE2AgAgACAGQQNyNgIEDAELIAAgBUEDcjYCBCAAIAVqIgEgASgCBEEBcjYCBEEAIQJBACEBC0GQCCABNgIAQZwIIAI2AgAgAEEIaiEADAkLIAZBlAgoAgAiAkkEQEGUCCACIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAkLQQAhACAGQS9qIgMCf0HgCygCAARAQegLKAIADAELQewLQn83AgBB5AtCgKCAgICABDcCAEHgCyAKQQxqQXBxQdiq1aoFczYCAEH0C0EANgIAQcQLQQA2AgBBgCALIgFqIgRBACABayIHcSIBIAZNDQhBwAsoAgAiBQRAQbgLKAIAIgggAWoiCSAITQ0JIAUgCUkNCQsCQEHECy0AAEEEcUUEQAJAAkACQAJAQaAIKAIAIgUEQEHICyEAA0AgBSAAKAIAIghPBEAgCCAAKAIEaiAFSw0DCyAAKAIIIgANAAsLQQAQCyICQX9GDQMgASEEQeQLKAIAIgBBAWsiBSACcQRAIAEgAmsgAiAFakEAIABrcWohBAsgBCAGTQ0DQcALKAIAIgAEQEG4CygCACIFIARqIgcgBU0NBCAAIAdJDQQLIAQQCyIAIAJHDQEMBQsgBCACayAHcSIEEAsiAiAAKAIAIAAoAgRqRg0BIAIhAAsgAEF/Rg0BIAZBMGogBE0EQCAAIQIMBAtB6AsoAgAiAiADIARrakEAIAJrcSICEAtBf0YNASACIARqIQQgACECDAMLIAJBf0cNAgtBxAtBxAsoAgBBBHI2AgALIAEQCyECQQAQCyEAIAJBf0YNBSAAQX9GDQUgACACTQ0FIAAgAmsiBCAGQShqTQ0FC0G4C0G4CygCACAEaiIANgIAQbwLKAIAIABJBEBBvAsgADYCAAsCQEGgCCgCACIDBEBByAshAANAIAIgACgCACIBIAAoAgQiBWpGDQIgACgCCCIADQALDAQLQZgIKAIAIgBBACAAIAJNG0UEQEGYCCACNgIAC0EAIQBBzAsgBDYCAEHICyACNgIAQagIQX82AgBBrAhB4AsoAgA2AgBB1AtBADYCAANAIABBA3QiAUG4CGogAUGwCGoiBTYCACABQbwIaiAFNgIAIABBAWoiAEEgRw0AC0GUCCAEQShrIgBBeCACa0EHcSIBayIFNgIAQaAIIAEgAmoiATYCACABIAVBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIADAQLIAIgA00NAiABIANLDQIgACgCDEEIcQ0CIAAgBCAFajYCBEGgCCADQXggA2tBB3EiAGoiATYCAEGUCEGUCCgCACAEaiICIABrIgA2AgAgASAAQQFyNgIEIAIgA2pBKDYCBEGkCEHwCygCADYCAAwDC0EAIQAMBgtBACEADAQLQZgIKAIAIAJLBEBBmAggAjYCAAsgAiAEaiEFQcgLIQACQANAIAUgACgCACIBRwRAIAAoAggiAA0BDAILCyAALQAMQQhxRQ0DC0HICyEAA0ACQCADIAAoAgAiAU8EQCABIAAoAgRqIgUgA0sNAQsgACgCCCEADAELC0GUCCAEQShrIgBBeCACa0EHcSIBayIHNgIAQaAIIAEgAmoiATYCACABIAdBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIAIAMgBUEnIAVrQQdxakEvayIAIAAgA0EQakkbIgFBGzYCBCABQdALKQIANwIQIAFByAspAgA3AghB0AsgAUEIajYCAEHMCyAENgIAQcgLIAI2AgBB1AtBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiAAQQRqIQAgBUkNAAsgASADRg0AIAEgASgCBEF+cTYCBCADIAEgA2siAkEBcjYCBCABIAI2AgACfyACQf8BTQRAIAJBeHFBsAhqIQACf0GICCgCACIBQQEgAkEDdnQiAnFFBEBBiAggASACcjYCACAADAELIAAoAggLIQEgACADNgIIIAEgAzYCDEEMIQJBCAwBC0EfIQAgAkH///8HTQRAIAJBJiACQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAyAANgIcIANCADcCECAAQQJ0QbgKaiEBAkACQEGMCCgCACIFQQEgAHQiBHFFBEBBjAggBCAFcjYCACABIAM2AgAMAQsgAkEZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIAJGDQIgAEEddiEFIABBAXQhACABIAVBBHFqIgQoAhAiBQ0ACyAEIAM2AhALIAMgATYCGEEIIQIgAyIBIQBBDAwBCyABKAIIIgAgAzYCDCABIAM2AgggAyAANgIIQQAhAEEYIQJBDAsgA2ogATYCACACIANqIAA2AgALQZQIKAIAIgAgBk0NAEGUCCAAIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAQLQYQIQTA2AgBBACEADAMLIAAgAjYCACAAIAAoAgQgBGo2AgQgAkF4IAJrQQdxaiIIIAZBA3I2AgQgAUF4IAFrQQdxaiIEIAYgCGoiA2shBwJAQaAIKAIAIARGBEBBoAggAzYCAEGUCEGUCCgCACAHaiIANgIAIAMgAEEBcjYCBAwBC0GcCCgCACAERgRAQZwIIAM2AgBBkAhBkAgoAgAgB2oiADYCACADIABBAXI2AgQgACADaiAANgIADAELIAQoAgQiAEEDcUEBRgRAIABBeHEhCSAEKAIMIQICQCAAQf8BTQRAIAQoAggiASACRgRAQYgIQYgIKAIAQX4gAEEDdndxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBCgCGCEGAkAgAiAERwRAIAQoAggiACACNgIMIAIgADYCCAwBCwJAIAQoAhQiAAR/IARBFGoFIAQoAhAiAEUNASAEQRBqCyEBA0AgASEFIAAiAkEUaiEBIAAoAhQiAA0AIAJBEGohASACKAIQIgANAAsgBUEANgIADAELQQAhAgsgBkUNAAJAIAQoAhwiAEECdEG4CmoiASgCACAERgRAIAEgAjYCACACDQFBjAhBjAgoAgBBfiAAd3E2AgAMAgsgBkEQQRQgBigCECAERhtqIAI2AgAgAkUNAQsgAiAGNgIYIAQoAhAiAARAIAIgADYCECAAIAI2AhgLIAQoAhQiAEUNACACIAA2AhQgACACNgIYCyAHIAlqIQcgBCAJaiIEKAIEIQALIAQgAEF+cTYCBCADIAdBAXI2AgQgAyAHaiAHNgIAIAdB/wFNBEAgB0F4cUGwCGohAAJ/QYgIKAIAIgFBASAHQQN2dCICcUUEQEGICCABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyECIAdB////B00EQCAHQSYgB0EIdmciAGt2QQFxIABBAXRrQT5qIQILIAMgAjYCHCADQgA3AhAgAkECdEG4CmohAAJAAkBBjAgoAgAiAUEBIAJ0IgVxRQRAQYwIIAEgBXI2AgAgACADNgIADAELIAdBGSACQQF2a0EAIAJBH0cbdCECIAAoAgAhAQNAIAEiACgCBEF4cSAHRg0CIAJBHXYhASACQQF0IQIgACABQQRxaiIFKAIQIgENAAsgBSADNgIQCyADIAA2AhggAyADNgIMIAMgAzYCCAwBCyAAKAIIIgEgAzYCDCAAIAM2AgggA0EANgIYIAMgADYCDCADIAE2AggLIAhBCGohAAwCCwJAIAhFDQACQCAFKAIcIgFBAnRBuApqIgIoAgAgBUYEQCACIAA2AgAgAA0BQYwIIAdBfiABd3EiBzYCAAwCCyAIQRBBFCAIKAIQIAVGG2ogADYCACAARQ0BCyAAIAg2AhggBSgCECIBBEAgACABNgIQIAEgADYCGAsgBSgCFCIBRQ0AIAAgATYCFCABIAA2AhgLAkAgA0EPTQRAIAUgAyAGaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBkEDcjYCBCAFIAZqIgQgA0EBcjYCBCADIARqIAM2AgAgA0H/AU0EQCADQXhxQbAIaiEAAn9BiAgoAgAiAUEBIANBA3Z0IgJxRQRAQYgIIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBDYCCCABIAQ2AgwgBCAANgIMIAQgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgBCAANgIcIARCADcCECAAQQJ0QbgKaiEBAkACQCAHQQEgAHQiAnFFBEBBjAggAiAHcjYCACABIAQ2AgAgBCABNgIYDAELIANBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhAQNAIAEiAigCBEF4cSADRg0CIABBHXYhASAAQQF0IQAgAiABQQRxaiIHKAIQIgENAAsgByAENgIQIAQgAjYCGAsgBCAENgIMIAQgBDYCCAwBCyACKAIIIgAgBDYCDCACIAQ2AgggBEEANgIYIAQgAjYCDCAEIAA2AggLIAVBCGohAAwBCwJAIAlFDQACQCACKAIcIgFBAnRBuApqIgUoAgAgAkYEQCAFIAA2AgAgAA0BQYwIIAtBfiABd3E2AgAMAgsgCUEQQRQgCSgCECACRhtqIAA2AgAgAEUNAQsgACAJNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIANBD00EQCACIAMgBmoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAwBCyACIAZBA3I2AgQgAiAGaiIFIANBAXI2AgQgAyAFaiADNgIAIAgEQCAIQXhxQbAIaiEAQZwIKAIAIQECf0EBIAhBA3Z0IgcgBHFFBEBBiAggBCAHcjYCACAADAELIAAoAggLIQQgACABNgIIIAQgATYCDCABIAA2AgwgASAENgIIC0GcCCAFNgIAQZAIIAM2AgALIAJBCGohAAsgCkEQaiQAIAALzAsBB38CQCAARQ0AIABBCGsiAyAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQJxRQ0BIAMgAygCACIBayIDQZgIKAIASQ0BIAAgAWohAAJAAkACQEGcCCgCACADRwRAIAMoAgwhAiABQf8BTQRAIAIgAygCCCIERw0CQYgIQYgIKAIAQX4gAUEDdndxNgIADAULIAMoAhghBiACIANHBEAgAygCCCIBIAI2AgwgAiABNgIIDAQLIAMoAhQiAQR/IANBFGoFIAMoAhAiAUUNAyADQRBqCyEEA0AgBCEHIAEiAkEUaiEEIAIoAhQiAQ0AIAJBEGohBCACKAIQIgENAAsgB0EANgIADAMLIAUoAgQiAUEDcUEDRw0DQZAIIAA2AgAgBSABQX5xNgIEIAMgAEEBcjYCBCAFIAA2AgAPCyAEIAI2AgwgAiAENgIIDAILQQAhAgsgBkUNAAJAIAMoAhwiAUECdEG4CmoiBCgCACADRgRAIAQgAjYCACACDQFBjAhBjAgoAgBBfiABd3E2AgAMAgsgBkEQQRQgBigCECADRhtqIAI2AgAgAkUNAQsgAiAGNgIYIAMoAhAiAQRAIAIgATYCECABIAI2AhgLIAMoAhQiAUUNACACIAE2AhQgASACNgIYCyADIAVPDQAgBSgCBCIBQQFxRQ0AAkACQAJAAkAgAUECcUUEQEGgCCgCACAFRgRAQaAIIAM2AgBBlAhBlAgoAgAgAGoiADYCACADIABBAXI2AgQgA0GcCCgCAEcNBkGQCEEANgIAQZwIQQA2AgAPC0GcCCgCACAFRgRAQZwIIAM2AgBBkAhBkAgoAgAgAGoiADYCACADIABBAXI2AgQgACADaiAANgIADwsgAUF4cSAAaiEAIAUoAgwhAiABQf8BTQRAIAUoAggiBCACRgRAQYgIQYgIKAIAQX4gAUEDdndxNgIADAULIAQgAjYCDCACIAQ2AggMBAsgBSgCGCEGIAIgBUcEQCAFKAIIIgEgAjYCDCACIAE2AggMAwsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0CIAVBEGoLIQQDQCAEIQcgASICQRRqIQQgAigCFCIBDQAgAkEQaiEEIAIoAhAiAQ0ACyAHQQA2AgAMAgsgBSABQX5xNgIEIAMgAEEBcjYCBCAAIANqIAA2AgAMAwtBACECCyAGRQ0AAkAgBSgCHCIBQQJ0QbgKaiIEKAIAIAVGBEAgBCACNgIAIAINAUGMCEGMCCgCAEF+IAF3cTYCAAwCCyAGQRBBFCAGKAIQIAVGG2ogAjYCACACRQ0BCyACIAY2AhggBSgCECIBBEAgAiABNgIQIAEgAjYCGAsgBSgCFCIBRQ0AIAIgATYCFCABIAI2AhgLIAMgAEEBcjYCBCAAIANqIAA2AgAgA0GcCCgCAEcNAEGQCCAANgIADwsgAEH/AU0EQCAAQXhxQbAIaiEBAn9BiAgoAgAiBEEBIABBA3Z0IgBxRQRAQYgIIAAgBHI2AgAgAQwBCyABKAIICyEAIAEgAzYCCCAAIAM2AgwgAyABNgIMIAMgADYCCA8LQR8hAiAAQf///wdNBEAgAEEmIABBCHZnIgFrdkEBcSABQQF0a0E+aiECCyADIAI2AhwgA0IANwIQIAJBAnRBuApqIQcCfwJAAn9BjAgoAgAiAUEBIAJ0IgRxRQRAQYwIIAEgBHI2AgBBGCECIAchBEEIDAELIABBGSACQQF2a0EAIAJBH0cbdCECIAcoAgAhBANAIAQiASgCBEF4cSAARg0CIAJBHXYhBCACQQF0IQIgASAEQQRxakEQaiIHKAIAIgQNAAtBGCECIAEhBEEICyEAIAMiAQwBCyABKAIIIgQgAzYCDEEIIQIgAUEIaiEHQRghAEEACyEFIAcgAzYCACACIANqIAQ2AgAgAyABNgIMIAAgA2ogBTYCAEGoCEGoCCgCAEEBayIAQX8gABs2AgALCwsJAQBBgQgLAgYB"),
                                e = {
                                    env: {
                                        add: s.GS,
                                        update: s.k9,
                                        has: s.TO,
                                        destroy: s.vV,
                                        eat: s.vF,
                                        pidOf: s.gp,
                                        emscripten_notify_memory_growth($) {},
                                        console_log: console.log.bind(null)
                                    }
                                };
                            return this.instance = await WebAssembly.instantiate(await WebAssembly.compile(await $.arrayBuffer()), e), this.wasm = this.instance.exports, this.heap = new i.SE(this.wasm.memory.buffer), delete this.initializing, !0
                        }
                        parse($, e, t) {
                            var s, i, n, a;
                            return this.instance ? ({
                                stop_skidding_dc_aeroaxon: a,
                                free: s,
                                malloc: i
                            } = this.wasm, i = i(8 + $.byteLength), (n = new Int32Array(this.heap.buffer, i, 2)).fill(0), this.heap.set($, i + 8), a(i, i + 8, e, x.A.pids[e], t), $ = n[0], a = n[1], s(i), [$, a]) : [-1, -1]
                        }
                    },
                    o = (a.init(), ($, e) => a.parse(new i.SE($.buffer, 1), e, -1))
            },
            97833($, e, t) {
                $.exports = t.p + "f19c0afc50aad5b7d507.js"
            },
            42634() {},
            71675($) {
                $.exports = JSON.parse('{"rE":"1.1.0","VY":"https://vanis.io/"}')
            }
        },
        s = {};

    function i($) {
        var e = s[$];
        return void 0 !== e || (e = s[$] = {
            id: $,
            loaded: !1,
            exports: {}
        }, x[$].call(e.exports, e, e.exports, i), e.loaded = !0), e.exports
    }
    i.m = x, $ = [], i.O = (e, t, x, s) => {
        if (!t) {
            for (var n = 1 / 0, a = 0; a < $.length; a++) {
                for (var o, [t, x, s] = $[a], r = !0, l = 0; l < t.length; l++) s <= n && Object.keys(i.O).every($ => i.O[$](t[l])) ? t.splice(l--, 1) : (r = !1, s < n && (n = s));
                r && ($.splice(a--, 1), void 0 !== (o = x())) && (e = o)
            }
            return e
        }
        s = s || 0;
        for (var a = $.length; 0 < a && $[a - 1][2] > s; a--) $[a] = $[a - 1];
        $[a] = [t, x, s]
    }, i.n = $ => {
        var e = $ && $.__esModule ? () => $.default : () => $;
        return i.d(e, {
            a: e
        }), e
    }, i.d = ($, e) => {
        for (var t in e) i.o(e, t) && !i.o($, t) && Object.defineProperty($, t, {
            enumerable: !0,
            get: e[t]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch ($) {
            if ("object" == typeof window) return window
        }
    }(), i.o = ($, e) => Object.prototype.hasOwnProperty.call($, e), i.r = $ => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty($, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty($, "__esModule", {
            value: !0
        })
    }, i.nmd = $ => ($.paths = [], $.children || ($.children = []), $), i.p = "./", i.b = document.baseURI || self.location.href, e = {
        792: 0,
        524: 0
    }, i.O.j = $ => 0 === e[$], n = ($, t) => {
        var x, s, n, [a, o, r] = t,
            l = 0;
        if (a.some($ => 0 !== e[$])) {
            for (x in o) i.o(o, x) && (i.m[x] = o[x]);
            r && (n = r(i))
        }
        for ($ && $(t); l < a.length; l++) s = a[l], i.o(e, s) && e[s] && e[s][0](), e[s] = 0;
        return i.O(n)
    }, (t = self.webpackChunkvanis_client = self.webpackChunkvanis_client || []).forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t)), i.O(void 0, [121, 524], () => i(27461));
    var n = i.O(void 0, [121, 524], () => i(28156));
    i.O(n)
})();
