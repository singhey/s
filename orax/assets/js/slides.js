$(function() {

	var el = document.getElementById('slide-container');

	swipedetect(el, function(swipedir){
    //swipedir contains either "none", "left", "right", "top", or "down"
	    if (swipedir =='up')
	        changeSlideOnSwipe(1);
	    else if(swipedir == 'down')
	    	changeSlideOnSwipe(-1);
	});

	var slides = {
		currentSlide : 0,
		totalLength: $('.slide').length,
		prevSlide: -1,
		eventFired: false,
		dir: 'up',
		init: function(){
			$('.slide-container').css({
				'width': $(window).innerWidth()+"px",
				'height': $(window).innerHeight()+"px",
			});
		},
		changeSlide: function() {
			$('.slide').removeClass("slide-out fade-up fade-down");
			if(slides.prevSlide != -1 && slides.dir == 'up')
				$('.slide[data-slide-index="'+slides.prevSlide+'"]').addClass('slide-out fade-up');
			else if(slides.prevSlide != -1 && slides.dir == 'down')
				$('.slide[data-slide-index="'+slides.prevSlide+'"]').addClass('slide-out fade-down');
			//console.log(slides.currentSlide);
			$(".slide").removeClass("active");
			$('.slide-toggle-button span').removeClass("active");
			//console.log(slides.currentSlide);
			//add relevent transition by comparing final and initial slides 
			if(slides.dir == 'up') {
				$('.slide[data-slide-index="'+slides.currentSlide+'"]').addClass("active fade-up");
			$('[data-toggle-button="'+slides.currentSlide+'"]').addClass("active");
			}else if(slides.dir == 'down') {
				$('.slide[data-slide-index="'+slides.currentSlide+'"]').addClass("active fade-down");
				$('[data-toggle-button="'+slides.currentSlide+'"]').addClass("active");
			}

			

			slides.prevSlide = slides.currentSlide;
			//window.setTimeout(function() {$('.slide[data-slide-index="'+slides.prevSlide+'"]').removeClass('slide-out');}, 1000);
		}
	};

	//console.log($(window).innerHeight);

	function changeSlideOnSwipe(dir) {
		if(slides.currentSlide == 0 && dir < 0){
			slides.currentSlide = slides.totalLength - 1;
		}else {
			slides.currentSlide += dir;
			//console.log(slides.currentSlide, dir);
			slides.currentSlide %= slides.totalLength;
		}


		// set direction of slides
		if(dir < 0) {
			slides.dir = 'down';
		}else {
			slides.dir = 'up';
		}

		if(isNaN(slides.currentSlide)) {
			slides.currentSlide = 0;
		}
		slides.changeSlide();
	}

	$(document).keydown(function(e){
		//up
		if(e.which == 38 ){
			changeSlideOnSwipe(-1);
		}else if(e.which ==40) {
			changeSlideOnSwipe(1);
		}
		//console.log(e.which);
	});


	window.addEventListener("wheel", function(e) {
		if(e.deltaY < 0 && !slides.eventFired) {
			console.log("Scrolling up");
			changeSlideOnSwipe(-1);
			slides.eventFired = true;
			window.setTimeout(function(){slides.eventFired = false;}, 1000);
		}else if(e.deltaY > 0 && !slides.eventFired) {
			console.log("Scrolling down");
			changeSlideOnSwipe(1);
			slides.eventFired = true;
			window.setTimeout(function(){slides.eventFired = false;}, 1000);
		}
		//console.log(e.deltaY);
	});


	//buttons to switch slides
	$('.slide-toggle-button').html('');
	for(var i = 0;i < slides.totalLength; i++){
		console.log("entered");
		$('.slide-toggle-button').append("<span data-toggle-button='"+i+"'></span>");
	}
	eventListenerToButtons();
	//event listener based on click
	function eventListenerToButtons() {
		$('.slide-toggle-button span').click( function() {
			index = $(this).attr('data-toggle-button');
			slides.currentSlide = index;
			if(slides.prevSlide < slides.currentSlide)
				slides.dir = 'up';
			else
				slides.dir = 'down';
			slides.changeSlide();
		});
	}


	$(window).resize(function(){
		slides.init();
	});
	slides.init();
	slides.changeSlide();
});