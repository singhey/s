$(function(){
	/*$('.member-cards > li').mouseenter(function(){
		$('.member-cards > li ').removeClass('active');
		$(this).addClass("active");
	});*/
	$('.member-card-holder').click(function(){
		if($(window).innerWidth() < 768) {
			$('.member-card-holder').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.details-toggler').click(function(){
		console.log("called");
		$(this).parent().next().addClass('seen');
		console.log($(this).parent().parent());
	});

	$('.member-card .later').mouseout(function(){
		$(this).removeClass('seen');
	});

});	