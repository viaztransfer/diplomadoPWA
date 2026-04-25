/*
Template: Confer - Conference & Events HTML Template
Author: peacefulqode.co.in
Version: 1.0
Design and Developed by: Peacefulqode
*/


/*================================================
[  Table of contents  ]
==================================================
==> Hover Active
==> Page Loader
==> Header
==> Sidebar Toggle
==> mouse enter stroke
==> Owl Carousel
==> counter 
==> accordion
==> Back To Top
==> Isotope
==> magnific-popup 
==> WOW 
==> Progressbar
==================================================
[ End table content ]
================================================*/

/*==================================================
  [ hover active ]
================================================*/
item_list_hover_active = function () {
  jQuery('.pq-hover-active .pq-item-list:nth-child(2)').addClass("pq-active");
  jQuery('.pq-item-list').on({
    mouseenter: function () {
      jQuery('.pq-item-list').removeClass('pq-active');
      jQuery(this).addClass('pq-active');
    },
  });
},


  // hover active 

  jQuery('.pq-hover-active .pq-item-list:nth-child(2)').addClass("pq-active");
jQuery('.pq-item-list').on({
  mouseenter: function () {
    jQuery('.pq-item-list').removeClass('pq-active');
    jQuery(this).addClass('pq-active');
  },
});


jQuery('.pq-add-active .pq-item-list:nth-child(2)').addClass("pq-active");
jQuery('.pq-item-list').on({
  mouseenter: function () {
    jQuery('.pq-item-list').removeClass('pq-active');
    jQuery(this).addClass('pq-active');
  },
});



/*==================================================
    [ Page Loader ]
==================================================*/

jQuery("#pq-loading").fadeOut();
jQuery("#pq-loading").delay(2000).fadeOut("slow");

var Scrollbar = window.Scrollbar;

/*==================================================
     header
==================================================*/
if (jQuery('header').hasClass('pq-header-default')) {
  jQuery(window).scroll(function () {
    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 300) {
      jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
    } else {
      jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
    }
  });
}

if (jQuery('header').hasClass('pq-has-sticky')) {
  jQuery(window).scroll(function () {
    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 300) {
      jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
    } else {
      jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
    }
  });

}

/*==================================================
       Sidebar Toggle
==================================================*/

jQuery(document).on('click', "#pq-toggle-button", function () {
  jQuery('#pq-sidebar-menu-contain').toggleClass("active");
});
jQuery(document).on('click', '.pq-toggle-button', function () {
  jQuery('body').addClass('pq-siderbar-open');
});
jQuery(document).on('click', '.pq-close', function () {
  jQuery('body').removeClass('pq-siderbar-open');
});


/*==================================================
   mouse enter stroke
==================================================*/

animateSvgPath = function () {
  anime({
    targets: '.svg path',
    strokeDashoffset: [anime.setDashoffset, 2],
    easing: 'linear',
    duration: 8000,
    loop: true
  });
},


  document.querySelectorAll('.svg').forEach((svg) => {
    const parent = svg.parentElement;

    parent.addEventListener('mouseenter', () => {
      parent.classList.add('svg-animation'); // Add the class on hover
      animateSvgPath(); // Trigger the animation
    });

    parent.addEventListener('mouseleave', () => {
      parent.classList.remove('svg-animation'); // Remove the class on hover out
    });
  });


/*==================================================
   Owl Carousel
==================================================*/

jQuery('.owl-carousel').each(function () {
  var app_slider = jQuery(this);
  var rtl = false;
  var prev = 'flaticon-back';
  var next = 'flaticon-next';
  var prev_text = 'Prev';
  var next_text = 'Next';
  if (jQuery('body').hasClass('pq-is-rtl')) {
    rtl = true;
    prev = 'flaticon-next';
    next = 'flaticon-back';
  }
  if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
    prev_text = app_slider.data('prev_text');
  }
  if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
    next_text = app_slider.data('next_text');
  }
  app_slider.owlCarousel({
    rtl: rtl,
    items: app_slider.data("desk_num"),
    loop: app_slider.data("loop"),
    margin: app_slider.data("margin"),
    nav: app_slider.data("nav"),
    dots: app_slider.data("dots"),
    loop: app_slider.data("loop"),
    autoWidth: app_slider.data("autowidth"), // Auto Width
    autoplay: app_slider.data("autoplay"),
    autoplayHoverPause: true,
    autoplayTimeout: app_slider.data("autoplay-timeout"),
    navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: app_slider.data("mob_sm"),
        nav: true,
        dots: true
      },
      // breakpoint from 480 up
      480: {
        items: app_slider.data("mob_num"),
        nav: true,
        dots: true
      },
      // breakpoint from 786 up
      786: {
        items: app_slider.data("tab_num"),
        dots: true,
        nav: true,
      },
      // breakpoint from 1023 up
      1023: {
        items: app_slider.data("lap_num")
      },
      1199: {
        items: app_slider.data("desk_num")
      }
    }
  });
});

jQuery('.pq-click-active .pq-click-item:first-child').addClass("pq-active");
jQuery('.pq-click-item').on({
  'click': function () {
    jQuery('.pq-click-item').removeClass('pq-active');
    jQuery(this).addClass('pq-active');
  },
});

/*==================================================
  counter js
==================================================*/

jQuery('.pq-product-timer').each(function () {
  var app_slider = jQuery(this);
  time = app_slider.data("time");

  // Set the date we're counting down to
  var countDownDate = time * 1000;
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days === 0) {
      jQuery('.pq-product-timer .pq-days').hide();
    } else if (days > 0) {
      jQuery('.pq-product-timer #day').html(days);
    }
    if (hours === 0) {
      jQuery('.pq-product-timer .pq-hours').hide();
    } else if (hours > 0) {
      jQuery('.pq-product-timer #hours').html(hours);
    }
    // if (minutes === 0) {
    //     jQuery('.pq-product-timer .pq-min').hide();
    // }
    if (minutes > 0) {
      jQuery('.pq-product-timer #minutes').html(minutes);
    }
    // console.log(seconds);
    // if (seconds == 0) {
    //     jQuery('.pq-product-timer .pq-secs').hide();
    // }
    if (seconds > 0) {
      jQuery('.pq-product-timer #seconds').html(seconds);
    }

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      jQuery(".pq-product-timer").html("The sale for this product has EXPIRED");
    }
  }, 1000);
});

/*==================================================
   accordion
==================================================*/

jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
  if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
    jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
    jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
  }
});


/*==================================================
[ Back To Top ]
==================================================*/

jQuery("#back-to-top").fadeOut();
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 250) {
    jQuery("#back-to-top").fadeIn(1400);
  } else {
    jQuery("#back-to-top").fadeOut(400);
  }
});
jQuery("#top").on("click", function () {
  jQuery("top").tooltip("hide");
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    100
  );
  return false;
});

/*==================================================
[ Isotope ]
==================================================*/

jQuery(".pq-masonry").isotope({
  itemSelector: ".pq-masonry-item",
  masonry: {
    columnWidth: ".grid-sizer",
    // gutter: 0
  },
});
jQuery(".pq-grid").isotope({
  itemSelector: ".pq-grid-item",
});
jQuery(".pq-filter-button-group").on(
  "click",
  ".pq-filter-btn",
  function () {
    var filterValue = jQuery(this).attr("data-filter");
    // console.log(filterValue);
    jQuery(".pq-masonry").isotope({
      filter: filterValue,
    });
    jQuery(".pq-grid").isotope({
      filter: filterValue,
    });
    jQuery(".pq-filter-button-group .pq-filter-btn").removeClass("active");
    jQuery(this).addClass("active");
    updateFilterCounts();
  }
);
var initial_items = 5;
var next_items = 3;
if (jQuery(".pq-masonry").length > 0) {
  var initial_items = jQuery(".pq-masonry").data("initial_items");
  var next_items = jQuery(".pq-masonry").data("next_items");
}
if (jQuery(".pq-grid").length > 0) {
  var initial_items = jQuery(".pq-grid").data("initial_items");
  var next_items = jQuery(".pq-grid").data("next_items");
}
function showNextItems(pagination) {
  var itemsMax = jQuery(".visible_item").length;
  var itemsCount = 0;
  jQuery(".visible_item").each(function () {
    if (itemsCount < pagination) {
      jQuery(this).removeClass("visible_item");
      itemsCount++;
    }
  });
  if (itemsCount >= itemsMax) {
    jQuery("#showMore").hide();
  }
  if (jQuery(".pq-masonry").length > 0) {
    jQuery(".pq-masonry").isotope("layout");
  }
  if (jQuery(".pq-grid").length > 0) {
    jQuery(".pq-grid").isotope("layout");
  }
}
// function that hides items when page is loaded
function hideItems(pagination) {
  var itemsMax = jQuery(".pq-filter-items").length;
  // console.log(itemsMax);
  var itemsCount = 0;
  jQuery(".pq-filter-items").each(function () {
    if (itemsCount >= pagination) {
      jQuery(this).addClass("visible_item");
    }
    itemsCount++;
  });
  if (itemsCount < itemsMax || initial_items >= itemsMax) {
    jQuery("#showMore").hide();
  }
  if (jQuery(".pq-masonry").length > 0) {
    jQuery(".pq-masonry").isotope("layout");
  }
  if (jQuery(".pq-grid").length > 0) {
    jQuery(".pq-grid").isotope("layout");
  }
}
jQuery("#showMore").on("click", function (e) {
  e.preventDefault();
  showNextItems(next_items);
});
hideItems(initial_items);
function updateFilterCounts() {
  // get filtered item elements
  if (jQuery(".pq-masonry").length > 0) {
    var itemElems = jQuery(".pq-masonry").isotope(
      "getFilteredItemElements"
    );
  }
  if (jQuery(".pq-grid").length > 0) {
    var itemElems = jQuery(".pq-grid").isotope("getFilteredItemElements");
  }
  var count_items = jQuery(itemElems).length;
  // console.log(count_items);
  if (count_items > initial_items) {
    jQuery("#showMore").show();
  } else {
    jQuery("#showMore").hide();
  }
  if (jQuery(".pq-filter-items").hasClass("visible_item")) {
    jQuery(".pq-filter-items").removeClass("visible_item");
  }
  var index = 0;
  jQuery(itemElems).each(function () {
    if (index >= initial_items) {
      jQuery(this).addClass("visible_item");
    }
    index++;
  });
  if (jQuery(".pq-masonry").length > 0) {
    jQuery(".pq-masonry").isotope("layout");
  }
  if (jQuery(".pq-grid").length > 0) {
    jQuery(".pq-grid").isotope("layout");
  }
}
/*==================================================
   magnific-popup
==================================================*/

$('.gallery').magnificPopup({
  delegate: 'a', // Selects child `<a>` elements
  type: 'image',
  gallery: {
    enabled: true
  }
});
/*==================================================
     wow
 ==================================================*/
new WOW().init();


/*==================================================
    [ progress bar ]
==================================================*/

jQuery(document).ready(function () {
  // Animate progress bars
  jQuery(".pq-progressbar-content .show-progress").each(function () {
    let $this = jQuery(this);
    let targetWidth = $this.data("width") + "%";

    $this.css("width", "0"); // Reset width
    $this.animate({ width: targetWidth }, 2000); // Animate to target width
  });
});
