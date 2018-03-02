$(function(){
	console.log($('.data-toggler'));
	$('[data-toggler="true"]').click(function(){
		var slide = $(this).attr('data-slide');
		$('a[data-slide="'+slide+'"]').removeClass("active");
		$(this).addClass("active");

		var contentIndex = $(this).attr('data-content-index');
		var _content = $('ol.sub-content[data-slide="'+slide+'"]');
		//var content;
		//console.log(_content.length, _content);
		$(_content).removeClass("active");
		for(var i = 0;i < _content.length; i++) {
			console.log($(_content[i]).attr("data-content"));
			if($(_content[i]).attr("data-content") == contentIndex){
				$(_content[i]).addClass("active");
			}
		}

	});

	

});