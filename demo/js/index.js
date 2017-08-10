window.onload = function(){
	var width;
	function realign(){
		width = $(window).innerWidth();

		$(".t__holder").css({'width': $('.t').length * width+"px"});
		$(".t").css({'width':width+"px"});

		$(".tabs-holder").css({'width': $('.tab').length * width+"px"});
		$(".tab").css({'width':width+"px"});
	}

	$('.services-tab').click(function(){
		$('.services-tab').removeClass("active");
		$(this).addClass("active");
		var i = $(this).index(),
			el = $('.tabs-holder');
		move(el,i);
	});

	function move(el, i){
		$(el).css({'margin-left':-i*width+'px'});
	}

	var  tSlide = 0; //testimonial slide number


	$('.testimonials> .forward-arrow').click(function(){
		if(tSlide < $(".t").length - 1){
			tSlide++;
			var el = $('.t__holder');
			move(el, tSlide);
		}
	});

	$('.testimonials> .backward-arrow').click(function(){
		if(tSlide > 0){
			tSlide--;
			var el = $('.t__holder');
			move(el, tSlide);
		}
	});

	$(window).resize(realign);
	realign();
};