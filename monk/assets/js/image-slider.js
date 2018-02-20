window.onload = function(){
	var imageSlider = new Vue({
		el: "#image-slider",
		data: {
			heading: "Lorem Ipsem dolor set amet con sect",
			subHeading: "Lorem Ipsem dolor set amet con sect",
			slides: [
				{
					image: "./assets/images/laptop.png",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-2.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-3.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Content Writing",
				},
				{
					image: "./assets/images/img-4.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Web Development",
				},
				{
					image: "./assets/images/img-5.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
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

	$('.slide').each(function() {
		$('.slide-buttons').append('<span class="slide-toggle-button"></span>');
	});

	$('.slide-toggle-button').click(function() {
		var index = $(this).index();
		currentSlide = index;
		changeSlide(index);
	});

	function changeSlide(index){
		$('.slide-toggle-button').removeClass('active');
		$('.slide-toggle-button:eq('+index+')').addClass('active');

		$('.slide').removeClass('active');
		$('.slide:eq('+index+')').addClass('active');

		window.clearInterval(imageSliderTimer);
		startImageSlider();
	}

	var currentSlide = 0,
		imageSliderTimer;
	function startImageSlider(){
		imageSliderTimer = window.setInterval(function() {
			changeSlide((++currentSlide)%$('.slide').length);
		}, 10000);
	}
	changeSlide(0);

	//add swipe action to home slide
	var el = document.getElementById('image-slider');
	swipedetect(el, function(swipedir){
	    //swipedir contains either "none", "left", "right", "top", or "down"
	    if (swipedir =='left'){
	    	console.log("left");
	       	changeSlide((++currentSlide)%$('.slide').length);
	    }
	    else if(swipedir == 'right'){
	    	console.log("right");
	    	changeSlide((--currentSlide)%$('.slide').length);
	    }
	});
};