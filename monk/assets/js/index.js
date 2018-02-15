$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

window.onload = function() {

	var imageSlider = new Vue({
		el: "#image-slider",
		data: {
			heading: "Lorem Ipsem dolor set amet con sect",
			subHeading: "Lorem Ipsem dolor set amet con sect",
			slides: [
				{
					image: "./assets/images/img-1.jpg",
					text: "Slide 1 image",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-2.jpg",
					text: "Slide 1 image",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-3.jpg",
					text: "Slide 1 image",
					heading: "Content Writing",
				},
				{
					image: "./assets/images/img-4.jpg",
					text: "Slide 1 image",
					heading: "Web Development",
				},
				{
					image: "./assets/images/img-5.jpg",
					text: "Slide 1 image",
					heading: "Just a long sentence to see transition",
				},
			],
		},

		methods: {
			hello: function() {
				console.log("Hello");
			}
		}
	});

	//add slide buttons
	$('.slide').each(function() {
		console.log("hello");
		$('.slide-buttons').append('<span class="slide-toggle-button"></span>');
	});

	$('.slide-toggle-button').click(function() {
		var index = $(this).index();
		currentSlide = index;
		changeSlide(index);
	});

	//scroll to top
	$('.scroll-to-top').click(function(){
		$('html, body').animate({
			scrollTop: 0,
		}, 1000);
	});

	function changeSlide(index){
		$('.slide-toggle-button').removeClass('active');
		$('.slide-toggle-button:eq('+index+')').addClass('active');

		$('.slide').removeClass('active');
		$('.slide:eq('+index+')').addClass('active');

	}

	changeSlide(0);

	$('#menu').click(function() {
		$(this).toggleClass("menu-visible");
		$('#site-nav').toggleClass('reveal');
		$('header').addClass('scrolled');
		if($(window).scrollTop() < 5 && !$(this).hasClass('menu-visible')) {
			window.setTimeout(function(){ $('header').removeClass('scrolled'); }, 1500);
		}
	});


	var prevScroll = 0;
	$(window).on('resize scroll', function() {
	  	$('.animated').each(function() {
	    
		    if ($(this).isInViewport()) {
		    	$(this).addClass("full");
		    }
	  });
	  	if($(window).scrollTop() > 5) {
	  		$('header').addClass("scrolled");
	  	}else {
	  		$('header').removeClass("scrolled");
	  	}

	  	if($('header').hasClass("scrolled")) {
	  	}

	  	//check if contact form in view and add parallax
	  	if($('.contact-image-holder').isInViewport()) {
	  		var move = -($('.contact-image-holder').offset().top - $(window).scrollTop()) / 4.3 + 40;
	  		console.log(move);
	  		$('.contact-image-holder').css({
	  			"background-position":"50%"+ move +"%",
	  		});
	  	}
	  	/*if(prevScroll < $(window).scrollTop() && $(window).scrollTop() > 100) {
	  		$('header').addClass('hidden');
	  	}else {
	  		$('header').removeClass('hidden');
	  	}*/

	  	//prevScroll = $(window).scrollTop();
	});
	var currentSlide = 0;
	window.setInterval(function() {
		//console.log("called");
		changeSlide((currentSlide++)%$('.slide').length);
	}, 5000);

	//find classes with slide text-left and change there inner html
	$('.slide-text-left').each(function(){
		var text = $(this).text();
		$(this).html('').append("<span class='anim-left'>"+text+"</span>");
	});
	//show details card
	$('.logo img, .logo span, ._detail-card').hover(function() {
		$('._detail-card').toggleClass("active");
	});
	Ripple.init();
};