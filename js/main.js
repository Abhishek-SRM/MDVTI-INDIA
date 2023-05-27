(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  $(window).on('DOMContentLoaded', function() {
    $('#exampleModalCenter').modal('show');
  });

  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 240) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    smartSpeed: 500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
  });
  $(".franchise").owlCarousel({
    animateOut: 'slideOutLeft',
    smartSpeed: 500,
    items: 3,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  // Testimonials carousel
  $(".govlogo-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fas fa-arrow-circle-left'></i>",
      "<i class='fas fa-arrow-circle-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      700: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });


  $(".course-caraousel2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fas fa-arrow-circle-left'></i>",
      "<i class='fas fa-arrow-circle-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 0
      },
      580: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
  // Our toppers Carousel
  $(".toppers").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fas fa-arrow-circle-left'></i>",
      "<i class='fas fa-arrow-circle-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      700: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });
  $(".toppers2").owlCarousel({
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      700: {
        items: 5
      },
      1000: {
        items: 6
      }
    }
  });


  $('.ann-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      720: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // Portfolio isotope and filter
  // var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  // });
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      720: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });

  $('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      720: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
  // Portfolio isotope and filter
  // var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  // });
  // $('#portfolio-flters li').on('click', function () {
  //     $("#portfolio-flters li").removeClass('active');
  //     $(this).addClass('active');

  //     portfolioIsotope.isotope({filter: $(this).data('filter')});
  // });

})(jQuery);
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});


if ($(window).width() <= 767) {
  $('#sidebar').toggleClass('active');
} else {
  $('#sidebar').removeClass('active');
}
