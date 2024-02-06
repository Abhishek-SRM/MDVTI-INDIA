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

  $(window).on('DOMContentLoaded', function () {
    $('#exampleModalCenter').modal('show');
  });

  // Initiate the wowjs
  new WOW().init();



  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
    if ($(this).scrollTop() > 240) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
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




})(jQuery);
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
  // resize the slide-read-more Div
  var box = $(".slide-read-more");
  var minimumHeight = 200; // max height in pixels
  var initialHeight = box.innerHeight();
  // reduce the text if it's longer than 200px
  if (initialHeight > minimumHeight) {
    box.css('height', minimumHeight);
    $(".read-more-button").show();
  }

  SliderReadMore();

  function SliderReadMore() {
    $(".slide-read-more-button").on('click', function () {
      // Get the parent testimonial item
      var testimonialItem = $(this).closest('.testimonial-item');

      // Find the specific elements within this testimonial item
      var box = testimonialItem.find('.slide-read-more');
      var currentHeight = box.innerHeight();
      var autoHeight = box.css('height', 'auto').innerHeight();
      var newHeight = (currentHeight | 0) === (autoHeight | 0) ? minimumHeight : autoHeight;

      // Animate the height and scroll only for the current testimonial item
      box.css('height', currentHeight).animate({
        height: newHeight
      });

      $('html, body').animate({
        scrollTop: testimonialItem.offset().top
      });

      // Toggle only the buttons within the current testimonial item
      testimonialItem.find(".slide-read-more-button").toggle();
    });
  }


});


if ($(window).width() <= 767) {
  $('#sidebar').toggleClass('active');
} else {
  $('#sidebar').removeClass('active');
}

// Carousel

$(document).ready(function () {
  $('.course-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.testimonial-carousal').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $('.achievers-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.affiliations-carousel').owlCarousel({
    loop: true,
      center: true,
      items: 5,
      margin: 10,
      autoplayHoverPause: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  })
  
});


jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplayHoverPause: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
  
});

$(document).ready(function() {
  $('.read-more-btn').each(function() {
      var $btn = $(this); // The "Read More" button
      var $text = $btn.prev('.testimonial-text'); // The text container
      var fullText = $text.text(); // Full text content
      var shortText = fullText.substr(0, 150) + '...'; // Shortened text
      
      // Initially set the text to the shortened version
      $text.data('full-text', fullText).text(shortText);

      $btn.on('click', function() {
          // Check if the button is in "Read More" or "Read Less" state
          if ($btn.data('isExpanded')) {
              // Collapse the text
              $text.text(shortText);
              $btn.text('Read More').data('isExpanded', false);
          } else {
              // Expand the text
              $text.text($text.data('full-text'));
              $btn.text('Read Less').data('isExpanded', true);
          }
      });
  });
});

