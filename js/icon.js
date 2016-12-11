$(function(){
	$('ul.menu>li').mouseenter(function(){
		$('ul.menu>li').removeClass('changeBackground');
		k = $(this).index();
		var p = "con" + k;
		$('ul.menu>li:nth-child('+($(this).index()+1)+')').addClass('changeBackground');
		$('div.content>div').fadeOut(100).removeClass('in-out').removeClass('out-in');
		if(k%2==0)
			$('div.'+p).fadeIn(300).addClass('in-out');
		else
			$('div.'+p).fadeIn(300).addClass('out-in');
	});
});
