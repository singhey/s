$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = obj.offset().top;
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false);
};
$(function(){
	var colors = ['#ff9a9e', '#2ae', '#a1c4fd', '#667eea', '#89f7fe', '#13547a', '#434343', '#4ae'];
	$('.folio-column > div').each(function(i){
 		$(this).css({'background':colors[i]});
	});
	$('.toggler').click(function(){
		$('body').toggleClass("menu-visible");
	});
	$(window).scroll(function(){
		$('.folio-column').children().each(function(){
			if($(this).inView()){
				$(this).addClass("fade-in");
			}
		});
		$('.member-card').each(function(){
			if($(this).inView()){
				$(this).addClass("fade-in");
			}
		});
		
	});
});
