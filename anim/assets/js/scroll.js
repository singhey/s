$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.5;			//Scroll time
	var scrollDistance = 150;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

	$(window).bind('keydown', function(e){
		scrollWithKeyDown(e);
	});

	function scrollWithKeyDown(e) {
		if(e.which === 40 || e.which === 38)
			e.preventDefault();
		//window.clearTimeout(keyDownScroll);
		//38 == up
		//40 == down
		if(e.which === 38) {
			//console.log("Scroll up");
			let finalScroll = $(window).scrollTop() - 100;
			TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
		}else if(e.which === 40) {
			//console.log("Scroll down");
			let finalScroll = $(window).scrollTop() + 100;
			TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
		}
	}

		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
					
	});

});