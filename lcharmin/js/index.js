
//matrix(1, 0, 0, 1, -202, 0)
$(document).ready(function(){
	
	var height, width;
	function makeChanges(){
		width = window.innerWidth;
		height = window.innerHeight;
		$('body').css({'width':width});
		$('.card').css({'height': height});
	}
	$(window).resize(function(){
		makeChanges();
	});
	//for scale of header and card
	$('.contact').on("click", function(){
		$('header').addClass("scale-down");
		$('.card').addClass("scale-down");
		$('.overlay').addClass("on-screen");
	});
	//for closing ovelay
	$(".close").on("click", function(){
		$('header, .card').removeClass("scale-down");
		$('.overlay').removeClass("on-screen");
	});

	//toggling between overlay screens
	$('.switch-screen').on('click', function(){
		$('.message-me').toggleClass("stay-left");
	});

	//avoid default action when clicked on button remove if required
	$('.button').on("click", function(e){
		e.preventDefault();
	});
	var slide = 0;
	//slide required pixels down to show content
	$(document).on("keydown", function(e){
		if(e.which == 40 && slide<4){
			slide++;
			$('.page').css({'margin-top':-height * slide});
			$('.nav-holder>li').removeClass("current");
			$('.nav-holder>li:nth-child('+(slide+1)+')').addClass("current");
		}else if(e.which==38 && slide>0){
			slide--;
			$('.page').css({'margin-top':-height * slide});
			$('.nav-holder>li').removeClass("current");
			$('.nav-holder>li:nth-child('+(slide+1)+')').addClass("current");
		}
	});

	//get click number and slide accordingly
	$('.nav-holder>li').on("click", function(){
		var index = $('.nav-holder>li').index(this);
		slide = index;
		$('.page').css({'margin-top':-height * slide});
		$('.nav-holder>li').removeClass("current");
			$('.nav-holder>li:nth-child('+(slide+1)+')').addClass("current");
	});

	//if someoe clicks down arrow

	$('.down-arrow').on("click",  function(){
		if(slide<4){
			slide++;

			$('.page').css({'margin-top':-height * slide});		
			$('.nav-holder>li').removeClass("current");
			$('.nav-holder>li:nth-child('+(slide+1)+')').addClass("current");
		}
	});
	makeChanges();
});
