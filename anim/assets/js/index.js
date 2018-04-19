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
		androidDevAnimation = new TimelineMax({paused: true, onComplete: startAndroidCoding}),
		iosDevAnimation = new TimelineMax({paused: true, onComplete: startIosCoding}),
		androidDevCodingAnimation = new TimelineMax({paused: true, repeat: -1}),
		androidDevMobileAnimation = new TimelineMax({paused: true, repeat: -1}),
		iosDevCodingAnimation = new TimelineMax({paused: true, repeat: -1}),
		iosDevMobileAnimation = new TimelineMax({paused: true, repeat: -1});


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
		backendHeading = $('.heading-4');
		
	var fullStackSlide = {
			height:0,
			offsetTop: 0,
		},
		windowHeight = 0;

	posterAnimation
		.staggerFromTo(posterAnimationContent, .3, {opacity: 0, y: 40}, {opacity: 1, y: 0}, .15);

	browserHolderAnimation
		.fromTo(browserHolder, .5, {opacity: 0}, {opacity: 1});

	contactFormAnimation
		.fromTo(browserContactForm, 1, {opacity: 0}, {opacity: 1});

	contactFormContentAnimation
		.staggerFromTo(browserContactFormContent, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0}, .3);

	contactFormHolderAnimation
		.fromTo(browserContactForm, 1,{width: "100%", marginTop: 0, backgroundColor: "transparent", padding: "0px 0px", boxShadow: "4px 4px 16px transparent",},
		 {width: "50%", margin: "2.4vw auto", backgroundColor: "#fff", boxShadow: "4px 4px 16px #ccc", padding: "1.6vw 1.6vw", fontSize: "1vw"});

	contactFormHeadingAnimation
		.fromTo(browserContactHeading, 1, {padding: "0px", textTransform: "lowercase", textAlign: "left"}, {padding: "0vw 1.6vw", textTransform: "uppercase", textAlign: "center"});

	contactFormInputFieldAnimation
		.staggerFromTo(browserInputField, 1, 
			{border: "1px solid #000", padding: "0px 0px"},
			{width: "100%", marginTop: "1.6vw", marginBottom: "1.6vw", padding: ".8vw 1.6vw", boxShadow: "4px 4px 16px #efefef", border:".1vw solid transparent", outline: "0"});
	contactFormSubmitButtonAnimation
		.fromTo(browserSubmitButton, 1, 
			{border: ".1vw solid #000", color: "#000", textTransform: "lowercase", padding: "0px 0px"},
			{border: ".1vw solid transparent", backgroundColor: "#2ae", width: "100%", color: "#fff", textTransform:"uppercase", textAlign: "center", padding: ".8vw 1.6vw"});

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
			{left: "50%", top: "80%"})
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

	var easing = Power2.easeOut;
	androidDevAnimation
		.to('.browser-holder', .3, {backgroundColor: "#efefef"})
		.to('.server-holder', .3, {y: 50, autoAlpha:0})
		.from('.android-dev-svg', .3, {autoAlpha: 0})
		.from('.android-dev.side-nav-hider', .1, {opacity: 0})
		.from('.android-dev.laptop-base', .2, {autoAlpha: 0, y: 10, ease: easing})
		.from('.android-dev.keyboard-base', .3, {autoAlpha: 0, y: 10, ease: easing})
		.from('.android-dev.keyboard', .3, {autoAlpha: 0, y: 10, ease: easing})
		.from('.android-dev.trackpad', .2, {autoAlpha: 0, y: 5, ease:easing})
		.from('.android-dev.laptop-back-panel', .2, {autoAlpha: 0, y: 5, ease:easing})
		.from('.android-dev.laptop-screen', .75, {autoAlpha: 0, scale: 0, ease: Elastic.easeOut.config(1.5, 1), transformOrigin: "50% 50%",})
		.from('.android-dev.mobile', .3, {autoAlpha: 0, y: -20, ease: easing})
		.fromTo('.android-dev.data-cabel', .75, {strokeDasharray: "0 100"}, {strokeDasharray: "100 100"})
		.from('.android-dev.code-lines-holder', .2, {autoAlpha: 0});
		
	androidDevCodingAnimation
		.staggerFromTo('.android-dev.code-lines-holder path', .5, {strokeDasharray: "0 100", 
				cycle: {
						stroke: function(i){
							var colors = ["#E63329", "#4794FF", "#FF0173"];
								return colors[getRandomNumber(0, colors.length)];
						}
					}
				}, {strokeDasharray: "100 100", ease: Power0.linear}, .5);

	androidDevMobileAnimation
		.from(['.android-dev.side-nav-background', '.android-dev.side-nav-header'], .3, {x: "-120%"})
		.staggerFrom('.android-dev.side-nav-item', .3, {scale: 0, autoAlpha: 0, }, 1);


	iosDevAnimation
		.to('.android-dev-holder', .3, {y: 50, autoAlpha: 0})
		.from('.ios-dev-svg', .3, {autoAlpha: 0})
		.from('.ios-dev.laptop-base', .2, {autoAlpha: 0, y: 10, ease: easing})
		.from('.ios-dev.keyboard-base', .3, {autoAlpha: 0, y: 10, ease: easing})
		.from('.ios-dev.keyboard', .3, {autoAlpha: 0, y: 10, ease: easing})
		.from('.ios-dev.trackpad', .2, {autoAlpha: 0, y: 5, ease:easing})
		.from('.ios-dev.laptop-back-panel', .2, {autoAlpha: 0, y: 5, ease:easing})
		.from('.ios-dev.laptop-screen', .75, {autoAlpha: 0, scale: 0, ease: Elastic.easeOut.config(1.5, 1), transformOrigin: "50% 50%",})
		.staggerFrom('.ios-dev.mobile', .3, {autoAlpha: 0, y: -20, ease: easing})
		.fromTo('.ios-dev.data-cabel', .75, {strokeDasharray: "0 100"}, {strokeDasharray: "100 100"})
		.from('.ios-dev.code-lines-holder path', .1, {autoAlpha: 0});

	iosDevCodingAnimation
		.staggerFromTo('.ios-dev.code-lines-holder path', 1, {strokeDasharray: "0 100", 
				cycle: {
						stroke: function(i){
							var colors = ["#E63329", "#4794FF", "#FF0173"];
								return colors[getRandomNumber(0, colors.length)];
						}
					}
				}, {strokeDasharray: "100 100", ease: Power0.linear}, 1);

	iosDevMobileAnimation
		.from('.ios-dev.pop-overlay', .75, {autoAlpha: 0, ease: Power0.easeOut,})
		.from('.ios-dev.pop-background', .75, {autoAlpha: 0, scale: 0, ease: Power0.easeOut, transformOrigin: "50% 50%",})
		.from('.ios-dev.pop-horizontal', .3, {autoAlpha: 0, x: -10})
		.from('.ios-dev.pop-vertical', .3, {autoAlpha: 0, y: 5})
		.staggerFrom('.ios-dev.pop-text', .3, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%"}, .2)
		.fromTo('.ios-dev.button-click', .2, {fill: "transparent"}, {fill: "#ccc"})
		.to('.ios-dev.button-click', .1, {fill: "#fff"})
		.to('.ios-dev.first-screen', .3, {autoAlpha:0, scale: 0.7, transformOrigin: "50% 50%"})
		.from('.ios-dev.final-screen', .3, {autoAlpha: 0, scale: 0.7, transformOrigin: "50% 50%"})
		.from('.ios-dev.final-screen', 5, {});//yet to implement


	var htmlHeight,
		cssHeight,
		jsHeight,
		frontEndHeight;

	calculations();
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if(scrollTop <= jsTop && scrollTop >= windowHeight) {
			flipBrowserAnimation.progress(0);
		}

		if(scrollTop <= windowHeight){
			browserHolderAnimation.reverse();
			header.removeClass("fixed");
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

		}else if(scrollTop <= jsTop) {
			var progress = (scrollTop - cssTop) / (jsTop - cssTop);
			contactCursorAnimation.progress(progress);
			serverStatusAnimation.pause();

		}else if(scrollTop <= databseDevTop) {
			var progress = (scrollTop - jsTop) / (databseDevTop - jsTop);
			flipBrowserAnimation.progress(progress);
			androidDevAnimation.reverse().timeScale(2);
			androidDevCodingAnimation.pause();

		}else if(scrollTop <= androidDevTop) {

			androidDevAnimation.duration(2).play();
			iosDevAnimation.reverse().timeScale(2);

		}else if(scrollTop <= iosDevTop) {

			androidDevMobileAnimation.pause();
			androidDevCodingAnimation.pause();
			iosDevAnimation.play().timeScale(1);
			iosDevCodingAnimation.play();

		}

		if(scrollTop >= backendTop) {
			header.removeClass("fixed");
			backendHeading.addClass("fixed");
		}else if(scrollTop >= windowHeight){
			header.addClass("fixed");
			browserHolderAnimation.play();
			backendHeading.removeClass("fixed");
		}
	});


	function calculations(){ 

		fullStackSlide.height = $(".slide-1").height();
		fullStackSlide.offsetTop = $(".slide-1").offset().top;
		windowHeight = $(window).innerHeight();
		

		frontEndTop = $(".content-0").offset().top;
		htmlTop = $(".content-1").offset().top;
		cssTop = $(".content-2").offset().top;
		jsTop = $(".content-3").offset().top;
		backendTop = $(".content-4").offset().top;

		databseDevTop = $(".content-9").offset().top;//heading position of databse section
		androidDevTop = $(".content-10").offset().top; //heading position of android development
		iosDevTop = $(".content-12").offset().top;
		
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
	function startAndroidCoding() {
		iosDevCodingAnimation.pause();
		iosDevMobileAnimation.pause();
		androidDevCodingAnimation.duration(10).play();
		androidDevMobileAnimation.duration(10).play();
	}

	function startIosCoding() {
		androidDevCodingAnimation.pause();
		androidDevMobileAnimation.pause();
		iosDevCodingAnimation.duration(10).play();
		iosDevMobileAnimation.duration(10).play();	
	}

	$(window).resize(function() {
		calculations();
	})

});