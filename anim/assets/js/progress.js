$(function() {
	var windowWidth = $(window).width();
	var colWidth = windowWidth;
	var horizontal = new TimelineMax({paused: true});
	var _gap;
	function setSliderWidth() {
		
		windowWidth = $(window).width();

		if(windowWidth > 800) {
			colWidth = Math.floor(windowWidth / 2);
		}

		$("#horizontal-slider").css({
			"width": colWidth * $(".horizontal-slider-col").length + "px",
		});
		$(".horizontal-slider-col").css({
			"width" : colWidth + "px",
		});
		$(".scroller-data").css({
			"height": (colWidth * $(".horizontal-slider-col").length + $(window).height() - colWidth + 100) + "px"
		});
		progressTop = $(".progress").offset().top;
		footerTop = $("footer").offset().top;
		var p = (colWidth * $(".horizontal-slider-col").length) - $(window).width();
		horizontal
			.to('#horizontal-slider', 1, {x: -p})
			.staggerFrom(".horizontal-slider-col", .2, {autoAlpha: 0, y: 40}, .2, -.3);

		_gap = p;
	}

	setSliderWidth();

	var progressTop,
		footerTop;



	$(window).scroll(function(e) {
		var scrollTop = $(window).scrollTop();
		//console.log(scrollTop, progressTop, footerTop);
		if(scrollTop >= footerTop) {
			$("._horizontal-slider").removeClass("fixed");
		}else if(scrollTop >= progressTop) {
			$("._horizontal-slider").addClass("fixed");
			var progress = (scrollTop - progressTop) / (_gap) ;
			//console.log(progress);
			horizontal.progress(progress);
			//$("._horizontal-slider").scrollLeft(scrollTop - progressTop);
		}else{
			$("._horizontal-slider").removeClass("fixed");
		}
	});

	$(window).resize(function(){
		setSliderWidth();
	});

});