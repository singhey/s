$(function(){

	//server animation
	TweenMax.set('svg', {
		visibility: 'visible'
	});

	//time lines
	var posterAnimation = new TimelineMax(),
		browserHolderAnimation = new TimelineMax({paused: true}),
		contactFormAnimation = new TimelineMax({paused: true}),
		windowAnimation = new TimelineMax({paused: true}),
		contactFormRowAnimation = new TimelineMax({paused: true});
		contactFormHolderAnimation = new TimelineMax({paused: true}),
		contactFormContentAnimation = new TimelineMax({paused: true}),
		contactFormHeadingAnimation = new TimelineMax({paused: true}),
		contactFormInputFieldAnimation = new TimelineMax({paused: true}),
		contactFormRadioButtonAnimation = new TimelineMax({paused: true}),
		contactFormSubmitButtonAnimation = new TimelineMax({paused: true}),
		contactCursorAnimation = new TimelineMax({paused: true}),
		flipBrowserAnimation = new TimelineMax({paused: true, onComplete: runServerStatusLight})
		serverStatusAnimation = new TimelineMax({paused: true, onComplete: runServerStatusLight, onReverseComplete: runServerStatusLight})
		serverLightBarAnimation = new TimelineMax({paused: true}),
		browserRotate = new TimelineMax({paused: true});


	//objects 
	var posterAnimationContent = $('.poster-anim'),
		browserHolder = $("#browser-holder"),
		browserContainer = $(".browser-window-osx"),
		backendContainer = $(".backend"),
		browserWindow = $(".window"),
		browserContactForm = $(".window .contact-form-browser"),
		browserContactFormContent = $(".window .contact-form-browser > *:not(._modal)"),

		//individual content timlelines
		browserContactHeading = $(".contact-form-browser .browser-heading"),
		browserInputField = $(".input-form-browser"),
		browserRadioButton = $(".input-form-radio + label:after"),
		browserSubmitButton = $(".input-form-submit"),
		formRows = $(".contact-form-browser .form-row"),
		browserCursor = $(".cursor-image"),
		modal = $("._modal"),
		header = $(".heading-0"),
		backendHeading = $('.heading-5');

		
	var fullStackSlide = {
			height:0,
			offsetTop: 0,
		},
		windowHeight = 0;

	posterAnimation
		.staggerFrom(posterAnimationContent, .3, {opacity: 0, y: 40}, .15);

	browserHolderAnimation
		.from(browserHolder, .5, {opacity: 0});

	contactFormAnimation
		.from(browserContactForm, 1, {opacity: 0});

	contactFormContentAnimation
		.staggerFrom(browserContactFormContent, 1, {opacity: 0, y: 30}, .3);

	contactFormHolderAnimation
		.to(browserContactForm, 1,
		 {width: "50%", margin: "1.4vw auto", backgroundColor: "rgb(56, 56, 56)", boxShadow: "rgb(0, 0, 0) 4px 4px 16px 0px", padding: "1.6vw 1.6vw", fontSize: "1vw"});

	contactFormHeadingAnimation
		.to(browserContactHeading, 1, {padding: "0vw 1.6vw", textTransform: "uppercase", textAlign: "center", color:"#fff"});

	contactFormInputFieldAnimation
		.staggerTo(browserInputField, 1, 
			{width: "100%", marginTop: "1.6vw", marginBottom: "1.6vw", padding: ".4vw 1.6vw", boxShadow: "rgb(62, 62, 62) 4px 4px 14px 0px", border:".1vw solid transparent", outline: "0", backgroundColor: "rgb(25, 25, 25)"});
	contactFormSubmitButtonAnimation
		.to(browserSubmitButton, 1,
			{border: ".1vw solid transparent", backgroundColor: "#2ae", width: "100%", color: "#fff", textTransform:"uppercase", textAlign: "center", padding: ".4vw"});

	contactFormRadioButtonAnimation
		.fromTo(browserRadioButton, 1, 
			{backgroundColor: '#000'},
			{backgroundColor: '#F87DA9'});


	contactFormRowAnimation
		.fromTo(formRows, 1,
			{padding: "0px"},
			{padding: ".8vw 1.6vw"});

	contactCursorAnimation
		.fromTo(browserCursor, 1,
			{left: 0, top: 0},
			{left: "50%", top: "78%"})
		.fromTo(modal, .3, {opacity: 0}, {opacity: 1});

	flipBrowserAnimation
		.fromTo(browserContainer, .5,
				{rotationY: 0, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"},
				{rotationY: 90, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"})
		.fromTo(backendContainer, .5, 
				{rotationY: 90, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"},
				{rotationY: 0, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"})
		.from('.server-casing', .3, {autoAlpha: 0, y: -80})
		.from('.server-inner', .3, {autoAlpha: 0, y: -80})
		.from('#Infrastructure-shadow', 0.15, {
				  scale: 0,
				  delay: 0.15,
				  transformOrigin: 'center center',
				  ease: Elastic.easeOut.config(1.5, 1)
				}, 'boxes-in')
		.staggerFrom('.Server', 0.75, {
				  scale: 0,
				  transformOrigin: 'center center',
				  ease: Elastic.easeOut.config(1.5, 1)
				}, -0.15, 'boxes-in')
		.from('#Server_1', 0.25, { y: '45' }, 'boxes')
		.from('#Server_3', 0.25, { y: '-45' }, 'boxes')
		.from('#Server_4', 0.25, { y: '-90' }, 'boxes')
		.from('.Infrastructure-lines', 0.5, { opacity: 0 })
		.staggerFrom(".server-fade-in", .2, 
			{autoAlpha: 0, scale: 0, ease: Elastic.easeOut.config(1.5, 1), transformOrigin: "50% 50%",}, -.15)
		.staggerFrom(".server-status", .3, {autoAlpha: 0, scale: 0, ease: Elastic.easeOut.config(1.5, 1), transformOrigin: "50% 50%",}, .15)
		.staggerFrom(".light-bar", .3, {autoAlpha: 0, x: -40})
		.from(".communication-lines", .3, {autoAlpha: 0})
		;

	serverStatusAnimation
		.fromTo('.server-status-yellow-2', .5, {autoAlpha:0}, {autoAlpha: 1})
		.fromTo('.server-status-yellow-1', .5, {autoAlpha:0}, {autoAlpha: 1})
		.fromTo('.server-status-red-2', .5, {autoAlpha: 0}, {autoAlpha:1})
		.fromTo('.server-status-red-1', .5, {autoAlpha: 0}, {autoAlpha:1});

	serverLightBarAnimation
		.staggerFromTo('.light-bar', .3, 
			{
				strokeDasharray: function(index) {
					return getRandomNumber(3, 12) + " 12";
				}
			}, 
			{
				strokeDasharray: function(index) {
					return getRandomNumber(3, 12) + " 12";
				}
			}, .1)
		.staggerTo('.light-bar', .3,
			{
				strokeDasharray: function(index) {
					return getRandomNumber(3, 12) + " 12";
				}
			}, .1)
		.staggerTo('.light-bar', .3,  
			{
				strokeDasharray: function(index) {
					return getRandomNumber(3, 12) + " 12";
				}
			}, .1);

	browserRotate
		.to('.browser-holder', 3, { rotationX: 10, rotationZ: 9, ease: Power0.Linear});

	var htmlHeight,
		cssHeight,
		jsHeight,
		frontEndHeight,
		isScrolling,
		scrollStopCalled =true,
		prevScrollPosition = 0,
		currentScrollPosition = 0;

	calculations();
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		/*currentScrollPosition = scrollTop;
		window.clearTimeout( isScrolling );*/
		if(scrollTop <= jsTop && scrollTop >= windowHeight) {
			flipBrowserAnimation.progress(0);
		}

		if(scrollTop <= windowHeight){
			browserHolderAnimation.reverse();
			//header.removeClass("fixed");
		}else if(scrollTop <= htmlTop) {
			
			//fading in browser
			browserHolderAnimation.play();
			var progress = (scrollTop - frontEndTop)/(htmlTop - frontEndTop);
			contactFormAnimation.progress(progress);
			contactFormContentAnimation.progress(progress);
			if(scrollTop >= frontEndTop + 64) {
				header.addClass("fixed");
			}else {
				header.removeClass("fixed");
			}

		}else if(scrollTop <= cssTop) {

			//all css animation
			var progress = (scrollTop - htmlTop) / (cssTop - htmlTop);

			/*windowAnimation.progress(progress);*/
			contactFormRowAnimation.progress(progress);
			contactFormHolderAnimation.progress(progress);
			contactFormHeadingAnimation.progress(progress);
			contactFormInputFieldAnimation.progress(progress);
			contactFormRadioButtonAnimation.progress(progress);
			contactFormSubmitButtonAnimation.progress(progress);

		}else if(scrollTop <= jsFinalTop) {
			var progress = (scrollTop - cssTop) / (jsTop - cssTop);
			contactCursorAnimation.progress(progress);
			serverStatusAnimation.pause();

		}else if(scrollTop <= databseDevTop) {
			var progress = (scrollTop - jsFinalTop) / (databseDevTop - jsFinalTop);
			flipBrowserAnimation.progress(progress);
			/*androidDevAnimation.reverse().timeScale(2);
			androidDevCodingAnimation.pause();*/

		}else if(scrollTop <= androidDevTop) {
			var progress = (scrollTop - databseDevTop) / (androidDevTop - databseDevTop);
			//console.log(progress);
			droid.progress(progress);
			//console.log(droid);
			//iosDevAnimation.reverse().timeScale(2);

		}else if(scrollTop <= iosDevTop) {
			var progress = (scrollTop - androidDevTop) / (iosDevTop - androidDevTop);
			//console.log(progress);
			ios.progress(progress)

		}

		if(scrollTop >= backendTop) {
			header.removeClass("fixed");
			backendHeading.addClass("fixed");

		}else if(scrollTop >= windowHeight){
			header.addClass("fixed");
			browserHolderAnimation.play();
			backendHeading.removeClass("fixed");
		}

		var progress = (scrollTop - windowHeight) / ((iosDevTop - htmlTop) + 1500);
		//console.log(progress);
		if(progress > 0)
			browserRotate.progress(progress);

		/*isScrolling = setTimeout(function() {

			// Run the callback
			scrollStopped();

		}, 66);*/
	});


	$(window).bind('keydown', function(e){
		scrollWithKeyDown(e);
	})

	function scrollWithKeyDown(e) {
		if(e.which === 40 || e.which === 38)
			e.preventDefault();
		//window.clearTimeout(keyDownScroll);
		//38 == up
		//40 == down
		if(e.which === 38) {
			console.log("Scroll up");
			let finalScroll = $(window).scrollTop() - 100;
			TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
		}else if(e.which === 40) {
			console.log("Scroll down");
			let finalScroll = $(window).scrollTop() + 100;
			TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
		}
	}

	function calculations(){ 

		fullStackSlide.height = $(".slide-1").height();
		fullStackSlide.offsetTop = $(".slide-1").offset().top;
		windowHeight = $(window).innerHeight();
		

		frontEndTop = $(".front-end").offset().top;
		htmlTop = $(".html").offset().top;
		cssTop = $(".css").offset().top;
		jsTop = $(".js").offset().top;
		jsFinalTop = $(".js-final").offset().top;
		backendTop = $(".backend-top").offset().top;

		databseDevTop = $(".final").offset().top;//heading position of databse section
		androidDevTop = $(".android-done").offset().top; //heading position of android development
		iosDevTop = $(".ios-done").offset().top;
		
		if($(window).scrollTop()>= frontEndTop) {
			browserHolderAnimation.play();
		}

	}




	serverStatusCount = 0;
	function runServerStatusLight() {
		if(serverStatusCount %2 == 0){
			serverStatusAnimation.play();
			serverLightBarAnimation.play();
		}

		else{
			serverStatusAnimation.reverse();
			serverLightBarAnimation.reverse();
		}
		serverStatusCount++;
	}
	

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$(window).resize(function() {
		calculations();
	})

	var $window = $(window);		//Window object
	
	var scrollTime = .5;			//Scroll time
	var scrollDistance = 300;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
					
	});

});