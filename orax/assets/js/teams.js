$(function(){
	$('.member-cards > li').mouseenter(function(){
		$('.member-cards > li ').removeClass('active');
		$(this).addClass("active");
	});
});	