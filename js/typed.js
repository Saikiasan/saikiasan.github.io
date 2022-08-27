(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  var blackTop = $('#info_about')
  var blackTheight = blackTop.outerHeight()
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

	  // Preloader
	  $(window).on('load', function () {
		if ($('#preloader').length) {
		  $('#preloader').delay(100).fadeOut('slow', function () {
			$(this).remove();
		  });
		}
	  });

	  // Back to top button
	 $(window).on('scroll',function() {
		if ($(this).scrollTop() > 700) {
		  $('.back-to-top').fadeIn('slow');
		  $('.back-to-top').addClass('animate__rotateIn')
		  $('.back-to-top').removeClass('animate__rotateOut')
		} else {
		  $('.back-to-top').fadeOut('slow');
		  $('.back-to-top').addClass('animate__rotateOut')
		  $('.back-to-top').removeClass('animate__rotateIn')
		}
	  });

	  $('.back-to-top').on('click',function(){
		$('html, body').animate({scrollTop : 0},100, 'easeInOutExpo');
		return false;
	  });

	  // CounterUp
	  $('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 10)
				}, 100, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 50,
			loop: true,
			backDelay: 800,
			backSpeed: 30
		});
	}

	$(window).on('scroll',function(){
		if ($(window).scrollTop() > blackTheight) {
			nav.removeClass('visually-hidden')
			nav.fadeIn('slow')
			nav.removeClass('animate__fadeOutUpBig')
			nav.addClass('animate__fadeInDownBig')
		}
		else {
			// nav.addClass('visually-hidden')
			nav.fadeOut('slow')
			nav.addClass('animate__fadeOutUpBig')
			nav.removeClass('animate__fadeInDownBig')
		}
	})

})(jQuery);
