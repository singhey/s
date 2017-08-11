$(function(){
	var width;
	function realign(){
		width = $(window).innerWidth();
		$(".t__holder").css({'width': 4 * width+"px"});
		$(".t").css({'width':width+"px"});
		console.log($('.t').width() + " "+ $(".t__holder").width());
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

	//for colors in each portfolio tab
	var colors = ['#ff9a9e', '#2ae', '#a1c4fd', '#667eea', '#89f7fe', '#13547a', '#434343', '#4ae'];
	$('.folio-column > div').each(function(i){
 		$(this).css({'background':colors[i]});
       	console.log(i+"entered");
	});

	$(window).resize(realign);
	realign();

	//call once the page has loaded
	setTimeout(function(){
		$('.flipX').removeClass("flipX");
		$('.be-left').addClass('fade-in-right visible');
	},300);


	$(window).scroll(function(){
		if($('.folio-column').inView()){
			$('.be-down').addClass("fade-in");
		}
		if($('.t').inView()){
			$('.t').addClass("fade-in visible");
		}
		if($('.team').inView()){
			$('.member-card').addClass("fade-in");
		}
	});
});