$(document).ready(function() {
  "use strict";

  /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 600) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      900
    );
    return false;
  });

  // 2. Smooth Scroll spy

  $(".header-area").sticky({
    topSpacing: 0
  });

  //=============

  $("li.smooth-menu a").bind("click", function(event) {
    event.preventDefault();
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 90
        },
        800,
        "easeInOutExpo"
      );
  });

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 0
  });

  // 3. Progress-bar

  var dataToggleTooTip = $('[data-toggle="tooltip"]');
  var progressBar = $(".progress-bar");
  if (progressBar.length) {
    progressBar.appear(function() {
      dataToggleTooTip
        .tooltip({
          trigger: "manual"
        })
        .tooltip("show");
      progressBar.each(function() {
        var each_bar_width = $(this).attr("aria-valuenow");
        $(this).width(each_bar_width + "%");
      });
    });
  }

  // 4. owl carousel

  // i. client (carousel)

  $("#client").owlCarousel({
    items: 7,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      415: {
        items: 2
      },
      600: {
        items: 4
      },
      1199: {
        items: 4
      },
      1200: {
        items: 7
      }
    }
  });

  $(".play").on("click", function() {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function() {
    owl.trigger("stop.owl.autoplay");
  });

  // 5. welcome animation support

  $(window).load(function() {
    $(".header-text h2,.header-text p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".header-text a")
      .removeClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  $(window).load(function() {
    $(".header-text h2,.header-text p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".header-text a")
      .addClass("animated fadeInDown")
      .css({ opacity: "0" });
  });
});
















particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
