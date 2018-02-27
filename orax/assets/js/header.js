$(function(){
	$('#menu-toggle').click(function() {
		$('header').toggleClass("active");
	});
	$('.nav li a').hover(function(){
		var index = $(this).attr("data-site-nav-index");
		//console.log(index);
		$('.site-nav-slide[data-site-nav="'+index+'"]').toggleClass("active");
	});
});