/**
 * Created by Arkan on 23/4/2016.
 */
function uniqId() {
    var e = new Date;
    e.getMilliseconds();
    return Math.round((new Date).getTime() + 1e3 * Math.random())
}

function rand(e, a) {
    var i = arguments.length;
    if (0 === i) e = 0, a = 2147483647;
    else if (1 === i) throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");
    return Math.floor(Math.random() * (a - e + 1)) + e
}
$(function() {
    "use strict";
    var e = function() {
            var e = this;
            $(document).ready(function() {
                e.init()
            })
        },
        a = e.prototype;
    a.init = function() {
        o.init(), r.init(), s.init(), d.init(), c.init()
    };
    var i = $("body"),
        n = $(document),
        t = $(window);
    $.page = $("#page-wrapper"), $.sidebar = $("#left-content"), $.sidebarToggle = $("#sidebar-toggle"), $.mainContent = $("#right-content");
    var o = {
            init: function() {
                o.windowResize()
            },
            loading: function() {
                var e = '<div id="loadloader">Loading Page...</div>';
                i.prepend(e)
            },
            breakpoints: function() {
                var e = '<div id="ScreenSize" class="device-breakpoints"><div class="visible-xs" data-breakpoint="xs">XS</div><div class="visible-sm" data-breakpoint="sm">SM</div><div class="visible-md" data-breakpoint="md">MD</div><div class="visible-lg" data-breakpoint="lg">LG</div></div>';
                i.prepend(e)
            },
            windowResize: function() {
                t.on("load resize", function() {
                    var e = "",
                        a = 0;
                    Modernizr.mq("(min-width: 1200px)") ? (e = "LG", a = 5) : Modernizr.mq("(min-width: 992px)") ? (e = "MD", a = 4) : Modernizr.mq("(min-width: 768px)") ? (e = "SM", a = 3) : Modernizr.mq("(min-width: 480px)") ? (e = "XS", a = 2) : Modernizr.mq("(max-width: 480px)") && (e = "XXS", a = 1), i.removeClass("bematScreenLG bematScreenMD bematScreenSM bematScreenXS bematScreenXXS").addClass("bematScreen" + e), $.event.trigger({
                        type: "bemat-screen-resize",
                        size: e,
                        index: a
                    })
                })
            }
        },
        r = {
            init: function() {
                t.load(function() {
                    r.hideLoader()
                })
            },
            hideLoader: function() {
                $("#loadloader").fadeOut()
            }
        },
        s = {
            init: function() {
                s.fullscreen()
            },
            fullscreen: function() {
                var e = $("#fullscreen-toggle");
                e.on("click", function() {
                    n.toggleFullScreen()
                }), n.on("fullscreenchange", function() {
                    n.fullScreen() ? e.html('<i class="material-icons">fullscreen_exit</i>') : e.html('<i class="material-icons">fullscreen</i>')
                })
            }
        },
        d = {
            init: function() {
                $.sidebarToggle.on("click", function() {
                    d.toggle()
                }), d.open(), d.backdrop();
                var e = $("#sidebar"),
                    a = e.find("li").has("ul").children("ul");
                e.find("li").has("ul").children("a").append("<span class='menu-item-submenu-arrow'><i class='fa fa-angle-right'></i></span>"), $("li:last-child", a).addClass("lastChild").has("ul").addClass("hasMenu"), e.find("li").not(".open").has("ul").children("ul").wrapInner("<div class='submenu-inner-wrapper'>"), e.find("li").has("ul").children("a").on("click", function(e) {
                    e.preventDefault(), d.toggleSubmenu($(this))
                })
            },
            open: function() {
                $.sidebarToggle.data("state", "open").removeClass("SidebarClose").addClass("SidebarOpen"), i.removeClass("sidebar-close").addClass("sidebar-open"), $.sidebar.data("state", "open").addClass("SidebarOpen").removeClass("SidebarClose"), $.mainContent.addClass("SidebarOpen").removeClass("SidebarClose"), d.update()
            },
            close: function() {
                $.sidebarToggle.data("state", "close").removeClass("SidebarOpen").addClass("SidebarClose"), i.removeClass("sidebar-open").addClass("sidebar-close"), $.sidebar.data("state", "closed").removeClass("SidebarOpen").addClass("SidebarClose"), $.mainContent.removeClass("SidebarOpen").addClass("SidebarClose"), d.update()
            },
            toggle: function() {
                var e = $.sidebar.data("state");
                "closed" == e ? d.open() : "open" == e && d.close(), d.update()
            },
            update: function() {
                $("#sidebar-wrapper").perfectScrollbar("update")
            },
            toggleSubmenu: function(e) {
                var a = e.parent("li"),
                    i = a.children("ul"),
                    n = i.children(".submenu-inner-wrapper"),
                    t = n.outerHeight(!0);
                if (0 == t) {
                    var o = n.clone(),
                        r = {
                            display: "block",
                            border: "1px solid red",
                            position: "absolute",
                            top: "0px",
                            left: "0px"
                        },
                        t = o.css(r).insertAfter(a.children("ul")).outerHeight(!0);
                    o.remove()
                }
                a.children("ul").css({
                    display: "block"
                });
                var t = t,
                    s = {
                        "margin-top": "-" + t + "px"
                    };
                if (a.hasClass("open")) n.css(s).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    a.removeClass("open"), a.children("ul").css({
                        display: "none"
                    }), d.update
                });
                else {
                    var l = {
                        "margin-top": "0px"
                    };
                    a.addClass("open"), n.css(s);
                    setTimeout(function() {
                        n.css(l).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                            d.update
                        })
                    }, 0)
                }
            },
            backdrop: function() {
                t.on("bemat-screen-resize", function(e) {
                    if (e.index <= 2) {
                        var a = $("#sidebar-backdrop");
                        a.length ? i.addClass("backdrop-active") : $('<div id="sidebar-backdrop"></div>').insertBefore("#page-wrapper")
                    } else {
                        var a = $("#sidebar-backdrop");
                        a.length && (a.fadeOut(), i.removeClass("backdrop-active"))
                    }
                }), i.on("click", "#sidebar-backdrop", function() {
                    i.removeClass("sidebar-open").addClass("sidebar-close"), d.close()
                })
            }
        },
        l = {
            init: function() {},
            darkHeader: function() {
                i.addClass("dark-header")
            },
            darkHeaderBrand: function() {
                i.addClass("dark-header-brand")
            },
            darkHeaderToolbar: function() {
                i.addClass("dark-header-toolbar")
            },
            darkSidebar: function() {
                i.addClass("dark-sidebar")
            },
            lightHeader: function() {
                i.removeClass("dark-header dark-header-brand dark-header-toolbar")
            },
            lightHeaderBrand: function() {
                i.removeClass("dark-header-brand")
            },
            lightHeaderToolbar: function() {
                i.removeClass("dark-header-toolbar")
            },
            lightSidebar: function() {
                i.removeClass("dark-sidebar")
            },
            collapsedSidebar: function() {
                i.addClass("sidebar-collapsed")
            },
            normalSidebar: function() {
                i.removeClass("sidebar-collapsed")
            }
        },
        c = {
            init: function() {
                p.init(), u.init(), f.init(), b.init(), h.init(), m.init(), g.init(), v.init(), C.init(), w.init(), k.init(), S.init(), x.init(), y.init(), T.init(), H.init(), M.init()
            }
        },
        p = {
            init: function() {
                $(".panel-footer").prev(".panel-body").addClass("panel-body-footer");
                $(".panel-group .panel .in").each(function() {
                    var e = $(this).parent();
                    e.addClass("open")
                }), $(".panel-group").on("hide.bs.collapse", function(e) {
                    var a = $(e.target),
                        i = a.parent();
                    i.removeClass("open")
                }), $(".panel-group").on("show.bs.collapse", function(e) {
                    var a = $(e.target),
                        i = a.parent(),
                        n = i.closest(".panel-group");
                    n.find(".panel.expanded").removeClass("open"), i.addClass("open")
                }), $("#right-content").on("click", ".panel-tools-collapse", function(e) {
                    e.preventDefault();
                    var a = $(this),
                        i = a.closest(".panel");
                    "panel-collapsed" == i.data("state") ? ($(".panel-body", i).slideDown("slow", function() {
                        a.removeClass("collapsed")
                    }), i.data("state", "panel-open").addClass("panel-open").removeClass("panel-collapsed")) : ($(".panel-body", i).slideUp("slow", function() {
                        a.addClass("collapsed")
                    }), i.data("state", "panel-collapsed").addClass("panel-collapsed").removeClass("panel-open"))
                }), $("#right-content").on("click", ".panel-tools-close", function(e) {
                    e.preventDefault();
                    var a = $(this),
                        i = a.closest(".panel");
                    i.fadeOut("slow")
                })
            }
        },
        u = {
            init: function() {
                $("body input[type=checkbox].switch,body input[type=radio].switch").iCheck({
                    checkboxClass: "custom-switch",
                    radioClass: "custom-switch",
                    inheritClass: !0
                }), $("body input[type=checkbox].checkbox").iCheck({
                    checkboxClass: "custom-check",
                    inheritClass: !0
                }), $("body input[type=radio].radio").iCheck({
                    radioClass: "custom-radio",
                    inheritClass: !0
                })
            }
        },
        f = {
            init: function() {
                $("select").selectpicker({
                    dropupAuto: !1,
                    size: 5
                }), $(".bootstrap-select").on({
                    "show.bs.dropdown": function() {
                        var e = $(this),
                            a = e.siblings(".bs-select-hidden"),
                            i = $(".btn.dropdown-toggle", e),
                            n = $(".dropdown-menu", e),
                            t = $(".inner", n),
                            o = $(".selected", n).data("original-index"),
                            r = o + 1,
                            s = $("li", n).length,
                            d = a.outerHeight(),
                            l = 48,
                            c = 8,
                            p = 0,
                            u = 0,
                            f = 0,
                            b = 1 * l / d;
                        if (i.hasClass("btn-default") && i.removeClass("btn-default"), r > 3) {
                            var h = s - r;
                            h >= 2 ? (f = 2, u = s - (h + 3)) : 1 == h ? (f = 3, u = s - 2) : 0 == h && (f = s >= 5 ? 4 : 3, u = s - 3), p = f * d * b + c, t.scrollTop(l * u);
                            var m = {
                                top: "-" + p + "px"
                            };
                            n.css(m)
                        } else p = d * o * b + c, m = {
                            top: "-" + p + "px"
                        }, n.css(m), t.scrollTop(0);
                        setTimeout(function() {
                            a.focus()
                        }, 0)
                    },
                    "hide.bs.dropdown": function(e) {
                        var a = $(this),
                            i = a.siblings(".bs-select-hidden");
                        $(".dropdown-menu", a), setTimeout(function() {
                            i.focus()
                        }, 0)
                    }
                })
            }
        },
        b = {
            init: function() {
                $(".dropdown,.dropup,.btn-group,.input-group-btn").on({
                    "show.bs.dropdown": function() {
                        var e = $(this),
                            a = $('[data-toggle="dropdown"]', e),
                            i = $(".dropdown-menu", e),
                            n = i.outerWidth(!0),
                            t = a.outerWidth(!0),
                            o = {
                                "min-width": t + "px"
                            };
                        t > n && i.css(o);
                        var r = $("li", i),
                            s = r.length,
                            d = 0;
                        $.each(r, function() {
                            var e = s - d,
                                a = "animation-delay-pos" + e;
                            $(this).addClass(a), d += 1
                        })
                    },
                    "shown.bs.dropdown": function() {
                        this.closable = !1
                    },
                    click: function() {
                        this.closable = !0
                    },
                    "hide.bs.dropdown": function(e) {
                        var a = $(this);
                        return this.closable ? (e.preventDefault(), a.addClass("closing"), $(".dropdown-menu", a).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                            a.removeClass("open closing")
                        }), void 0) : !1
                    }
                })
            }
        },
        h = {
            init: function() {
                $('[data-toggle="tooltip"]').tooltip({
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-wrapper"><div class="tooltip-background"></div><div class="tooltip-inner"></div></div></div>'
                }), $('[data-toggle="tooltip"]').on({
                    "shown.bs.tooltip": function() {
                        var e = $(this),
                            a = e.data("bs.tooltip").tip(),
                            i = a.height() / 2,
                            n = a.width() / 2,
                            t = Math.sqrt(i * i + n * n),
                            o = 2 * t,
                            r = {
                                top: "50% bottom 0px",
                                bottom: "50% top 0px",
                                left: "right 50% 0px",
                                right: "left 50% 0px"
                            },
                            s = r[e.data("placement")],
                            d = {
                                width: o + "px",
                                height: o + "px",
                                top: "50%",
                                left: "50%",
                                "margin-top": "-" + o / 2 + "px",
                                "margin-left": "-" + o / 2 + "px",
                                "transform-origin": s + " !important"
                            };
                        $(".tooltip-background", a).css(d);
                        setTimeout(function() {
                            $(".tooltip-background", a).addClass("tooltip-show")
                        }, 100)
                    },
                    "hide.bs.tooltip": function() {
                        var e = $(this),
                            a = e.data("bs.tooltip").tip();
                        $(".tooltip-background", a).removeClass("tooltip-show")
                    }
                })
            }
        },
        m = {
            init: function() {
                $(".modal").on({
                    "show.bs.modal": function(e) {
                        var a = ($(this), $(e.relatedTarget)),
                            i = a.outerWidth(),
                            n = (a.outerHeight(), $(".modal-dialog", e.target)),
                            t = n.outerWidth(),
                            o = (n.outerHeight(), i / t),
                            r = a.offset();
                        n.data("scale", o).data("top", r.top).data("left", r.left);
                        var s = {
                            transform: "scale(" + o + ")",
                            opacity: 0,
                            top: r.top,
                            left: r.left
                        };
                        n.css(s);
                        setTimeout(function() {
                            var e = {
                                transform: "scale(1) translate(-50%,-50%)",
                                opacity: 1,
                                top: "50%",
                                left: "50%"
                            };
                            n.css(e)
                        }, 550)
                    },
                    "shown.bs.modal": function(e) {
                        $(".modal-dialog", e.target)
                    },
                    "hide.bs.modal": function(e) {
                        var a = $(".modal-dialog", e.target),
                            i = a.data("scale"),
                            n = a.data("top"),
                            t = a.data("left"),
                            o = {
                                transform: "scale(" + i + ")",
                                opacity: 0,
                                top: n,
                                left: t
                            };
                        a.css(o)
                    }
                })
            }
        },
        g = {
            init: function() {
                $(".floating-label .form-control").on("keyup change", function(e) {
                    var a = $(e.currentTarget);
                    "" !== $.trim(a.val()) ? a.addClass("filled").removeClass("static") : a.removeClass("filled").removeClass("static")
                }), $(".floating-label .form-control").each(function() {
                    var e = $(this);
                    "" !== $.trim(e.val()) && e.addClass("static").addClass("filled")
                }), $(".form-horizontal .form-control").each(function() {
                    $(this).after('<div class="form-control-line"></div>')
                })
            }
        },
        v = {
            init: function() {
                $("#sidebar-wrapper,#right-content-wrapper").perfectScrollbar(), $(".has-custom-sidebar").perfectScrollbar()
            }
        },
        C = {
            init: function() {
                $("pre").addClass("prettyprint linenums"), window.prettyPrint && prettyPrint()
            }
        },
        w = {
            init: function() {
                $(".btn").materialRipple({
                    style: "light"
                }), $("#sidebar ul li a").materialRipple({
                    style: "dark"
                }), $(".dropdown-menu li").materialRipple({
                    style: "dark"
                })
            }
        },
        k = {
            init: function() {
                $.snackbar()
            }
        },
        S = {
            init: function() {
                $.toasts({
                    oneAtTime: !1
                })
            }
        },
        x = {
            init: function() {
                $("[data-toggle='subheader']").subheader()
            }
        },
        y = {
            init: function() {
                $("[data-toggle='simple-pie-chart']").simplePieChart({
                    size: 130,
                    duration: 1e3
                })
            }
        },
        T = {
            init: function() {
                $("[data-toggle='linear-progress']").linearProgress()
            }
        },
        H = {
            init: function() {
                $("[data-toggle='circular-progress']").circularProgress()
            }
        },
        M = {
            init: function() {
                $("[data-toggle='speed-dial']").speedDial()
            }
        };
    a.sidebar = {
        toggle: function() {
            d.toggle()
        }
    }, a.theme = {
        darkHeaderFull: function() {
            l.darkHeaderFull()
        },
        darkHeaderBrand: function() {
            l.darkHeaderBrand()
        },
        darkHeaderToolbar: function() {
            l.darkHeaderToolbar()
        },
        darkSidebar: function() {
            l.darkSidebar()
        },
        lightHeaderFull: function() {
            l.lightHeaderFull()
        },
        lightHeaderBrand: function() {
            l.lightHeaderBrand()
        },
        lightHeaderToolbar: function() {
            l.lightHeaderToolbar()
        },
        lightSidebar: function() {
            l.lightSidebar()
        },
        collapsedSidebar: function() {
            l.collapsedSidebar()
        },
        normalSidebar: function() {
            l.normalSidebar()
        }
    }, window.bematadmin = window.bematadmin || {}, window.bematadmin.App = new e
}(jQuery));