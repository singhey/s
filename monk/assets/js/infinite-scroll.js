$(function(){

	console.log("called");
	console.log($('.slider-customer > li').width());
	$('.slider-customer').css({
		"width": (($('.slider-customer > li').width() + 48) * $('.slider-customer > li').length)+"px",
	});

});	