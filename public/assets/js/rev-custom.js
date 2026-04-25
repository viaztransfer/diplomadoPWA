/*
Template: Confer - Conference & Events HTML Template
Author: peacefulqode.co.in
Version: 1.0
Design and Developed by: Peacefulqode
*/

/*==================================================
  [ Home Page 3 Banner ]
================================================*/

var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider41"] = {
    once: RS_MODULES.modules["revslider41"] !== undefined ? RS_MODULES.modules["revslider41"].once : undefined, init: function () {
        window.revapi4 = window.revapi4 === undefined || window.revapi4 === null || window.revapi4.length === 0 ? document.getElementById("rev_slider_4_1") : window.revapi4;
        if (window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length == 0) { window.revapi4initTry = window.revapi4initTry === undefined ? 0 : window.revapi4initTry + 1; if (window.revapi4initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["revslider41"].init() }); return; }
        window.revapi4 = jQuery(window.revapi4);
        if (window.revapi4.revolution == undefined) { revslider_showDoubleJqueryError("rev_slider_4_1"); return; }
        revapi4.revolutionInit({
            revapi: "revapi4",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "900,700,750,600",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "900,700,750,600",
            responsiveLevels: "1240,1024,778,480",
            progressBar: { disableProgressBar: true },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    tmp: "<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
                    style: "zeus",
                    hide_onmobile: true,
                    hide_under: "1400px",
                    hide_onleave: true,
                    left: {
                        anim: "zoomout",
                        h_offset: 45,
                        v_offset: 30
                    },
                    right: {
                        anim: "zoomin",
                        h_offset: 45,
                        v_offset: 30
                    }
                },
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "hermes",
                    hide_over: "1023px",
                    v_offset: 45
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal(); };