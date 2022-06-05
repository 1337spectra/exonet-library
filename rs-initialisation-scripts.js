var tpj = jQuery;
var revapi9;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider91"] = {
    once: RS_MODULES.modules["revslider91"] !== undefined ? RS_MODULES.modules["revslider91"].once : undefined,
    init: function () {
        window.revapi9 = window.revapi9 === undefined || window.revapi9 === null || window.revapi9
            .length === 0 ? document.getElementById("rev_slider_9_1") : window.revapi9;
        if (window.revapi9 === null || window.revapi9 === undefined || window.revapi9.length == 0) {
            window.revapi9initTry = window.revapi9initTry === undefined ? 0 : window.revapi9initTry + 1;
            if (window.revapi9initTry < 20) requestAnimationFrame(function () {
                RS_MODULES.modules["revslider91"].init()
            });
            return;
        }
        window.revapi9 = jQuery(window.revapi9);
        if (window.revapi9.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_9_1");
            return;
        }
        revapi9.revolutionInit({
            revapi: "revapi9",
            sliderType: "hero",
            sliderLayout: "fullscreen",
            duration: 4500,
            visibilityLevels: "1920,1545,1040,600",
            gridwidth: "1100,900,600,400",
            gridheight: "868,800,960,720",
            lazyType: "smart",
            perspectiveType: "local",
            responsiveLevels: "1920,1545,1040,600",
            fullScreenOffsetContainer: ".touch .edge-mobile-header",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false
            },
            parallax: {
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "mouse"
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
} // End of RevInitScript if (window.RS_MODULES.checkMinimal !==undefined){ window.RS_MODULES.checkMinimal();}; 