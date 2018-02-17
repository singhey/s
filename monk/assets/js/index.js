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

	var testimony = new Vue({
		el: "#testimony",
		data: {
			testimony: [
				{
					user: "Singhey",
					company: "Dell",
					review: "With our advertising solutions, you can create targeted adverts to reach different audience and meet required goals.",
				},
				{
					user: "Singhey",
					company: "Dell",
					review: "With our advertising solutions, you can create targeted adverts to reach different audience and meet required goals.",
				},
				{
					user: "Singhey",
					company: "Dell",
					review: "With our advertising solutions, you can create targeted adverts to reach different audience and meet required goals.",
				},
				{
					user: "Singhey",
					company: "Dell",
					review: "With our advertising solutions, you can create targeted adverts to reach different audience and meet required goals.",
				},

			]
		}
	});

	//why us card
	var whyUs = new Vue({
		el: '#why-us',
		data: {
			whyUs: [
				{
					heading: "We Listen",
					desc: "We are experts at content but we understand that each client has a different requirement and goal. We do not offer cookie cutter plans but instead hear our client issues and create content according to their specifications. ",
				},
				{
					heading: "We Listen",
					desc: "We are experts at content but we understand that each client has a different requirement and goal. We do not offer cookie cutter plans but instead hear our client issues and create content according to their specifications. ",
				},
				{
					heading: "We Listen",
					desc: "We are experts at content but we understand that each client has a different requirement and goal. We do not offer cookie cutter plans but instead hear our client issues and create content according to their specifications. ",
				},
				{
					heading: "We Listen",
					desc: "We are experts at content but we understand that each client has a different requirement and goal. We do not offer cookie cutter plans but instead hear our client issues and create content according to their specifications. ",
				},
			]
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
	counterInitiated = false;
	$(window).on('resize scroll', function() {
	  	$('.animated').each(function() {
	    
		    if ($(this).isInViewport()) {
		    	$(this).addClass("full");
		    }
	  });

	  	//checking that header nav is at top or not and accordingly add its background
	  	if($(window).scrollTop() > 5) {
	  		$('header').addClass("scrolled");
	  	}else {
	  		$('header').removeClass("scrolled");
	  	}

	  	if($(window).scrollTop() > $(window).height()) {
	  		$('.scroll-to-top').addClass("visible");
	  	}else {
	  		$('.scroll-to-top').removeClass("visible");
	  	}

	  	//check if counter is in view port and start to animate it
	  	if($('.counter').isInViewport() && !counterInitiated) {
	  		startCounter();
	  		counterInitiated = true;
	  	}

	  	//check if testimony is in view and modify it
	  	if($('.testimony').isInViewport()) {
	  		$('.testimony').removeClass("hidden");
	  	}
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


	//testimony card holders
	$('.testimony-cards-holder').css({
		"width": (($(".testimony-card").width() + 32 ) * $(".testimony-card").length)+"px",
	});

	var currentTestimonySlide = 0;
	//switching of testimony slide
	$('#testimony-switcher').click(function(){
		$('.testimony-card').removeClass("shrink");
		$('.testimony-card:eq('+currentTestimonySlide+')').addClass("shrink");
		currentTestimonySlide = ++currentTestimonySlide % $('.testimony-card').length;
		// remove margin on smaller devices
		margin = ($(window).width() > 373) ? 32 : 0;
		var p = ($('.testimony-card').width() + margin) * currentTestimonySlide;
		var s = "translateX(-"+p+"px)";
		$('.testimony-cards-holder').css({
			"transform" : s,
		});
	});

	//counter whic is below banner
	function startCounter() {
		$('.count').each(function() {
			var count = parseInt($(this).text().replace('+', ''));
			console.log(count);

			countTill(0, count, $(this), 0);
		});
	}

	function countTill(start, final, ele, inc){
		var steps = 50;
		var duration = 30;
		if(steps == inc){
			ele.html(final+"+");
			return;
		}
		var cur = Math.ceil(start + (final / steps) * inc);
		console.log(start, final, inc, cur);
		ele.html(cur+"+");
		window.setTimeout(function(){
			countTill(start, final, ele, ++inc);
		}, duration);
	}

	//add customer corousel
	element = "<li><div class='customer-logo'></div><p>Company-name</p></li>";
	for(i = 0;i < 10; i++) {
		$('.slider-customer').append(element);
	}
	//start customer curousel
	function startCurousel(){
		$('.slider-customer').removeClass("sliding");
		window.setTimeout(function() {$('.slider-customer').addClass("sliding");}, 100);
		window.setTimeout(startCurousel, 300000);
	}

	startCurousel();

	Ripple.init();
};