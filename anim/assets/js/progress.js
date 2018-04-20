$(function() {
	var windowWidth = $(window).width();
	var colWidth = windowWidth;

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
			$("._horizontal-slider").scrollLeft(scrollTop - progressTop);
		}else{
			$("._horizontal-slider").removeClass("fixed");
		}
	});

	$(window).resize(function(){
		setSliderWidth();
	});

});