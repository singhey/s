$(function(){
	$('.text-ground').mousemove(function(e){
		var x = e.pageX;
		var y = e.pageY;
		const maxTransition= {
			x: 50,
			y: 50,
		};
		x = (e.pageX / $(window).innerWidth());
		y = e.pageY / $(window).innerHeight();
		//console.log(x);
		if(x > 0.5) {
			x = (x - 0.5) * maxTransition.x;
			x*=-1;
		}else {
			x = Math.abs(0.5 - x) * maxTransition.x;
		}

		if(y > 0.5) {
			y = (y - 0.5) * maxTransition.y;
			y*=-1;
		}else {
			y = Math.abs(y - 0.5) * ( maxTransition.y);
		}
		$(this).find('.text-holder').css({
			'transform': 'translate('+x+'px, '+y+'px)'
		});
	});

	
});