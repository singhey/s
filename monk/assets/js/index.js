$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

//swipe detection function
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){};
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
        //e.preventDefault();
    }, false);
  
    touchsurface.addEventListener('touchmove', function(e){
        //e.preventDefault(); // prevent scrolling when inside DIV
    }, false);
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir);
    }, false);
}

$(function() {
	//scroll to top
	$('.scroll-to-top').click(function(){
		$('html, body').animate({
			scrollTop: 0,
		}, 1000);
	});

	

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
	  	if($('.counter').length!=0){
		  	if($('.counter').isInViewport() && !counterInitiated) {
		  		startCounter();
		  		counterInitiated = true;
		  	}
		  }

	  	//check if testimony is in view and modify it
	  	if($('.testimony').length !=0){
		  	if($('.testimony').isInViewport()) {
		  		console.log("hello entered");
		  		$('.testimony').removeClass("hidden");
		  	}
		  }
	});
	

	//find classes with slide text-left and change there inner html
	$('.slide-text-left').each(function(){
		var text = $(this).text();
		$(this).html('').append("<span class='anim-left'>"+text+"</span>");
	});

	//show details card
	$('.logo img, .logo span, ._detail-card, ._detail-card::after').hover(function() {
		if($(window).width() > 757) $('._detail-card').toggleClass("active");
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
		var margin = 32;
		if($(window).width() < 375) {
			margin = 8;
		}else if($(window).width() < 768) {
			margin = 16;
		}
		console.log(margin);
		var p = ($('.testimony-card').width() + margin) * currentTestimonySlide;
		//if(currentTestimonySlide == 0) {$('.testimony-card').removeClass("shrink");}
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
		//console.log(start, final, inc, cur);
		ele.html(cur+"+");
		window.setTimeout(function(){
			countTill(start, final, ele, ++inc);
		}, duration);
	}
	//start customer curousel

	$('.slide-down-button').click(function() {
		$('html, body').animate({
			scrollTop: $(window).height(),
		}, 1000);
	});

	console.log("called");
	//remove loader
	$('#loader').fadeOut(1000);
	window.setTimeout(function(){$('#loader').remove();}, 2000);
});
