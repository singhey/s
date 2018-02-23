$(function(){


	slideWidth = ($('.slider-customer > li').width() + 48);
	count = 1;
	//set up width of parent slider
	$('.slider-customer').css({
		"width": (($('.slider-customer > li').width() + 48) * $('.slider-customer > li').length)+"px",
	});
	window.setInterval( function() {
		//console.log("hello", slideWidth, count);
		$('.slider-customer').css({
			"transition": "transform 0s linear",
			"transform": "translateX(0px)",
		});
		var p = $(".slider-customer > li:first-child");
		p.remove();
		$('.slider-customer').append(p);
		window.setTimeout(function(){
			$('.slider-customer').css({
				"transition": "transform 2s linear",
				"transform": "translateX(-"+(slideWidth * count)+"px)",
			});
		}, 20);
		//console.log(p);
		//console.log($('.slider-customer>li').length);
	}, 2000);

});	