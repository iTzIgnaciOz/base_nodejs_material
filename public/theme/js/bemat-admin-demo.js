/**
 * Created by Arkan on 23/4/2016.
 */
var initstate = function() {
    $(function(e) {
        function t(t) {
            e("#theme-switcher").each(function() {
                var i = e(this).attr("href"),
                    i = i.replace(/(css\/themes)(.*)(\/)/g, "css/themes/" + t + "/"),
                    a = "../" + i;
                e.get(a, function() {
                    setTimeout(function() {
                        e("#theme-switcher").attr("href", i), e.toasts("add", {
                            msg: "Theme Activated"
                        })
                    }, 1e3)
                })
            })
        }
        e("#demoBematColor1").on("ifChecked", function() {
            bematadmin.App.theme.lightHeaderBrand()
        }), e("#demoBematColor2").on("ifChecked", function() {
            bematadmin.App.theme.darkHeaderBrand()
        }), e("#demoBematColor3").on("ifChecked", function() {
            bematadmin.App.theme.lightHeaderToolbar()
        }), e("#demoBematColor4").on("ifChecked", function() {
            bematadmin.App.theme.darkHeaderToolbar()
        }), e("#demoBematColor5").on("ifChecked", function() {
            bematadmin.App.theme.lightSidebar()
        }), e("#demoBematColor6").on("ifChecked", function() {
            bematadmin.App.theme.darkSidebar()
        }), e(".theme-switcher").on("click", function(i) {
            i.preventDefault();
            var a = e(this).data("theme");
            t(a)
        })
    }), $(function(e) {
        e("#wysihtml5").wysihtml5({
            toolbar: {
                fa: !0
            }
        })
    }), $(function(e) {}), $(function(e) {
        e("#summernote").summernote()
    }), $(function(e) {
        function t() {
            var i = rand(0, 100);
            i > 100 && (i = 1), e(".bemat-pie-chart-live-update").simplePieChart("set", i);
            setTimeout(function() {
                t()
            }, 2e3)
        }
        t(0)
    }), $(function(e) {
        e(".peity-line").peity("line", {
            height: 28,
            width: 64
        }), e(".peity-bar").peity("bar", {
            height: 28,
            width: 64
        }), e(".peity-donut").peity("donut", {
            height: 28,
            width: 64
        }), e(".peity-pie").peity("pie", {
            height: 28,
            width: 64
        })
    }), $(function(e) {
        var t = [{
            title: "All Day Event",
            start: "2015-12-01"
        }, {
            title: "Long Event",
            start: "2015-12-07",
            end: "2015-12-10"
        }, {
            id: 999,
            title: "Repeating Event",
            start: "2015-12-09T16:00:00"
        }, {
            id: 999,
            title: "Repeating Event",
            start: "2015-12-16T16:00:00"
        }, {
            title: "Conference",
            start: "2015-12-11",
            end: "2015-12-13"
        }, {
            title: "Meeting",
            start: "2015-12-12T10:30:00",
            end: "2015-12-12T12:30:00"
        }, {
            title: "Lunch",
            start: "2015-12-12T12:00:00"
        }, {
            title: "Meeting",
            start: "2015-12-12T14:30:00"
        }, {
            title: "Happy Hour",
            start: "2015-12-12T17:30:00"
        }, {
            title: "Dinner",
            start: "2015-12-12T20:00:00"
        }, {
            title: "Birthday Party",
            start: "2015-12-13T07:00:00"
        }, {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2015-12-28"
        }, {
            title: "All Day Event",
            start: "2016-01-01"
        }, {
            title: "Long Event",
            start: "2016-01-07",
            end: "2016-01-10"
        }, {
            id: 999,
            title: "Repeating Event",
            start: "2016-01-09T16:00:00"
        }, {
            id: 999,
            title: "Repeating Event",
            start: "2016-01-16T16:00:00"
        }, {
            title: "Conference",
            start: "2016-01-11",
            end: "2016-01-13"
        }, {
            title: "Meeting",
            start: "2016-01-12T10:30:00",
            end: "2016-01-12T12:30:00"
        }, {
            title: "Lunch",
            start: "2016-01-12T12:00:00"
        }, {
            title: "Meeting",
            start: "2016-01-12T14:30:00"
        }, {
            title: "Happy Hour",
            start: "2016-01-12T17:30:00"
        }, {
            title: "Dinner",
            start: "2016-01-12T20:00:00"
        }, {
            title: "Birthday Party",
            start: "2016-01-13T07:00:00"
        }, {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2016-01-28"
        }];
        e("#bemat-calendar").fullCalendar("addEventSource", t, !0)
    }), $("#tableDataTables1").dataTable(), $(function() {
        function e(t) {
            var i = t + 5;
            i > 100 && (i = 1), $(".linear-progress-demo-determinate").linearProgress("setProgress", i);
            setTimeout(function() {
                e(i)
            }, 500)
        }

        function t(e) {
            var i = e + 1,
                a = i + Math.sqrt(i * i + 50);
            a >= 100 && (a = 100), i >= 100 && (i = 0), 0 == i && (a = 0), $(".linear-progress-demo-buffer").linearProgress("setProgress", i), $(".linear-progress-demo-buffer").linearProgress("setBuffer", a);
            setTimeout(function() {
                t(i)
            }, 200)
        }
        e(0), t(0), $(".btn-linear-progress-demo-1").on("click", function() {
            $(".linear-progress-demo-determinate2").linearProgress("setProgress", 15)
        }), $(".btn-linear-progress-demo-2").on("click", function() {
            $(".linear-progress-demo-determinate2").linearProgress("setProgress", 67)
        }), $(".btn-linear-progress-demo-3").on("click", function() {
            $(".linear-progress-demo-determinate2").linearProgress("setProgress", 100)
        })
    }), $(function() {
        function e(t) {
            var i = t + 5;
            i > 100 && (i = 1), $(".circular-preloader-demo-determinate").circularProgress("set", i);
            setTimeout(function() {
                e(i)
            }, 500)
        }
        e(0), $(".btn-circular-progress-demo-1").on("click", function() {
            $(".circular-preloader-demo-determinate2").circularProgress("set", 25)
        }), $(".btn-circular-progress-demo-2").on("click", function() {
            $(".circular-preloader-demo-determinate2").circularProgress("set", 73)
        }), $(".btn-circular-progress-demo-3").on("click", function() {
            $(".circular-preloader-demo-determinate2").circularProgress("set", 100)
        }), $(".btn-circular-progress-demo-4").on("click", function() {
            $(".circular-preloader-demo-indeterminate2").circularProgress("pause")
        }), $(".btn-circular-progress-demo-5").on("click", function() {
            $(".circular-preloader-demo-indeterminate2").circularProgress("play")
        }), $(".btn-circular-progress-demo-6").on("click", function() {
            $(".circular-preloader-demo-indeterminate2").circularProgress("hide")
        }), $(".btn-circular-progress-demo-7").on("click", function() {
            $(".circular-preloader-demo-indeterminate2").circularProgress("show")
        })
    }), $(".radio-up-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("direction", "up")
    }), $(".radio-down-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("direction", "down")
    }), $(".radio-left-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("direction", "left")
    }), $(".radio-right-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("direction", "right")
    }), $(".radio-open-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("open")
    }), $(".radio-close-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("close")
    }), $(".radio-fling-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("mode", "fling")
    }), $(".radio-scale-fabspeeddial").on("ifChecked", function(e) {
        $("#demo-speed-dial").speedDial("mode", "scale")
    }), $("#btntest-toast1").on("click", function() {
        $.toasts("add", {
            msg: "This is a Demo Toast"
        })
    }), $("#demoToastRadio1").on("ifChecked", function() {
        var e = $('[name="demoToast1"]:checked').val(),
            t = $('[name="demoToast2"]:checked').val(),
            i = e + " " + t;
        $.toasts("position", i)
    }), $("#demoToastRadio2").on("ifChecked", function() {
        var e = $('[name="demoToast1"]:checked').val(),
            t = $('[name="demoToast2"]:checked').val(),
            i = e + " " + t;
        $.toasts("position", i)
    }), $("#demoToastRadio3").on("ifChecked", function() {
        var e = $('[name="demoToast1"]:checked').val(),
            t = $('[name="demoToast2"]:checked').val(),
            i = e + " " + t;
        $.toasts("position", i)
    }), $("#demoToastRadio4").on("ifChecked", function() {
        var e = $('[name="demoToast1"]:checked').val(),
            t = $('[name="demoToast2"]:checked').val(),
            i = e + " " + t;
        $.toasts("position", i)
    }), $(document).on("show.cc.snackbar", function() {
        console.log("Snackbar shown")
    }), $("#btntest-snackbar1").on("click", function() {
        $.snackbar("add", {
            type: "success",
            msg: "Message sent",
            buttonText: "Close"
        })
    }), $("#btntest-snackbar2").on("click", function() {
        $.snackbar("add", {
            type: "info",
            msg: "Marked as read",
            buttonText: "Undo"
        })
    }), $("#btntest-snackbar3").on("click", function() {
        $.snackbar("add", {
            type: "warning",
            msg: "This item already has the label 'travel'. You can add a new label.",
            buttonText: "Close",
            disappearTime: 1e4
        })
    }), $("#btntest-snackbar4").on("click", function() {
        $.snackbar("add", {
            type: "danger",
            msg: "Connection timed out. Showing limited messages.",
            buttonText: "Close"
        })
    }), $(function() {
        $(".sparkline-line").sparkline("html", {
            type: "line"
        }), $(".sparkline-bar").sparkline("html", {
            type: "bar",
            barColor: "rgb(235,86,66)",
            height: "30px",
            barWidth: "5px",
            barSpacing: "2px",
            zeroAxis: !1
        }), $(".sparkline-tristate").sparkline("html", {
            type: "tristate"
        }), $(".sparkline-discrete").sparkline("html", {
            type: "discrete"
        }), $(".sparkline-bullet").sparkline("html", {
            type: "bullet"
        }), $(".sparkline-pie").sparkline("html", {
            type: "pie"
        }), $(".sparkline-box").sparkline("html", {
            type: "box"
        })
    })
}();