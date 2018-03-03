$(function(){
	console.log($('.data-toggler'));
	$('[data-toggler="true"]').click(function(){
		var slide = $(this).attr('data-slide');
		$('a[data-slide="'+slide+'"]').removeClass("active");
		$(this).addClass("active");

		var contentIndex = $(this).attr('data-content-index');
		var _content = $('ul.sub-content[data-slide="'+slide+'"]');
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

	//keep revolving the active slides rotatory images

	function rotatorySlide() {

		var _slides = $('.slide.active').find('.images-rotator').children();
		console.log(_slides);
		for(var i = _slides.length - 1; i >= 0; i--) {
			var pos = $(_slides[i]).attr("data-rotator-slide");
			console.log(pos);
			$(_slides[i]).removeClass("pos-"+pos);
			var updatedPos = (pos + 1) % _slides.length;

			if(updatedPos == 0) {
				$(_slides[i]).addClass("switch");
			}else{
				$(_slides[i]).removeClass("switch");
			}

			$(_slides[i]).addClass("pos-"+updatedPos);
			$(_slides[i]).attr("data-rotator-slide", updatedPos);


		}
		window.setTimeout(function(){rotatorySlide();}, 5000);

	}

	rotatorySlide();

});