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
				},
				{
					image: "./assets/images/img-2.jpg",
					text: "Slide 1 image",
				},
				{
					image: "./assets/images/img-3.jpg",
					text: "Slide 1 image",
				},
				{
					image: "./assets/images/img-4.jpg",
					text: "Slide 1 image",
				},
				{
					image: "./assets/images/img-5.jpg",
					text: "Slide 1 image",
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

		changeSlide(index);
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
	});

	$(window).on('resize scroll', function() {
	  	$('.animated').each(function() {
	    
		    if ($(this).isInViewport()) {
		    	$(this).addClass("full");
		    }
	  });
	});
	var currentSlide = 0;
	window.setInterval(function() {
		console.log("called");
		changeSlide((currentSlide++)%$('.slide').length);
	}, 5000);

	Ripple.init();
};