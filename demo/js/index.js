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
		if($(".visible-block h1, .visible-block h4").inView()){
			$(".visible-block h1, .visible-block h4").addClass("fade-in");
		}
		
		$('.visible-block ul, .testimonial-wrapper').children().each(function(){
			if($(this).inView()){
				$(this).addClass("fade-in");
			}
		});
	});
	function tabSwitcher(index){
		$('.tab').removeClass("visible-block");
		$('#tabs-wrapper .tab:nth-child('+(index+1)+')').addClass("visible-block");
		$('.visible-block h1, .visible-block h4').addClass("fade-in");
		$('.visible-block ul').children().each(function(){
			$(this).addClass("fade-in");
		});
	}
	//switching of services-tab
	$('.services-tab').click(function(){
		$('.services-tab').removeClass("active");
		$(this).addClass('active');
		var index = $(this).index();
		tabSwitcher(index);
	});

	$(".services-mobile-menu").change(function(){
		var index = $(".services-mobile-menu").prop('selectedIndex');
		tabSwitcher(index);
	});

	//animations when page loads
	function start(){
		$('nav.menu').addClass("fade-in-right");
		$('.highlighted').addClass("flipX");
	}
	start();
});
