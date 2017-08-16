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
	var colors = ['#131516', '#f7941d', '#e3cb33', '#2B6504', '#22aaee', '#272A2D', '#620B10', '#261E1C'],
		width = 1200;
	$('.folio-column > div').each(function(i){
 		$(this).css({'background':colors[i]});
	});
	$('.toggler').click(function(){
		$('body').toggleClass("menu-visible");
	});
	$('.animate').each(function(){
		if($(this).inView()){
			$(this).addClass("fade-in visible");
		}
	});
	$(window).scroll(function(){
		//move all animate class holders up when they come in viewport
		$('.animate').each(function(){
			if($(this).inView()){
				$(this).addClass("fade-in visible");
			}
		});
		$('.animate-from-left').each(function(){
			if($(this).inView()){
				if(width<500){
					$(this).addClass("fade-in visible");
				}else{
					$(this).addClass("animate-left visible");
				}
			}
		});
		$('.animate-from-right').each(function(){
			if($(this).inView()){
				if(width<500){
					$(this).addClass("fade-in visible");
				}else{
					$(this).addClass("animate-right visible");
				}
			}
		});
	});
	function tabSwitcher(index){
		$('.tab').removeClass("visible-block");
		$('#tabs-wrapper .tab:nth-child('+(index+1)+')').addClass("visible-block");
		$('.visible-block h1, .visible-block h4').addClass("fade-in");
		$('.visible-block .animate').each(function(){
			$(this).addClass("fade-in visible");
		});
	}
	//switching of services-tab
	$('.services-tab').click(function(){
		$('.services-tab').removeClass("active");
		$(this).addClass('active');
		var index = $(this).index();
		tabSwitcher(index);
		$('html, body').animate({
	      		scrollTop: $(this).offset().top
		},1000);
	});

	$(".services-mobile-menu").change(function(){
		var index = $(".services-mobile-menu").prop('selectedIndex');
		tabSwitcher(index);
		$('html, body').animate({
	      		scrollTop: $(this).offset().top
		},1000);
	});

	//animations when page loads
	function start(){
		$('nav.menu').addClass("fade-in-right");
		$('.highlighted').addClass("flipX");
		$(".promo-sub").addClass("fade-in");
		width = $(window).innerWidth();
	}
	start();

	function rearrange(){
		width = $(window).innerWidth();
		console.log(width);
	}
	$(window).resize(function(){

	});	
	//add images to tab-2
	$('.reason-img').each(function(i){
		$(this).attr("style", 'background-image:url("./images/tab2-i'+(i+1)+'.png")');
	});
	//add images to tab-3
	$('.graphics-tools').each(function(i){
		$(this).attr("style", 'background-image:url("./images/tab3-i'+(i+1)+'.png")');
	});

	// add images to tab-4
	$('.digital-marketing .graphics-tools').each(function(i){
		$(this).attr("style", 'background-image:url("./images/tab4-i'+(i+1)+'.png")');
	});

	//add images in tab-5
	$('.mobile-app-development .graphics-tools').each(function(i){
		$(this).attr("style", 'background-image:url("./images/tab5-i'+(i+1)+'.png")');
	});
});
