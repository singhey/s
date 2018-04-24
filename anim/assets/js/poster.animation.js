$(function(){

	var min = 20, 
		max = 45;

	//timelines
	var androidStudioAnimation = new TimelineMax(),
		lineAnimation = new TimelineMax({paused: true}),
		menuAnimation = new TimelineMax({paused: true, onComplete: restartAnimation}),
		fileExplorerAnimation = new TimelineMax({onComplete: onCompleteFileLines});

	//elements
	var androidStudioContainer = $(".android-studio-holder"),
		lines  = $(".line"),
		menu1 = $(".menu-1"),
		menu2 = $(".menu-2"),
		menu3 = $(".menu-3"),
		mobileHeader = $(".mobile-header"),
		cards = $(".card"),
		cardHolder = $(".card-holder"),
		fileExplorerLines = $(".file-explorer-animation");

	androidStudioAnimation
		.fromTo(androidStudioContainer, .5,
			{opacity: 0, y: '-40%', x:'-50%'},
			{opacity: 1, y: '-50%', x:'-50%'}, 1);


	lineAnimation
		.staggerFromTo(lines, .4, 
			{width: "0%"},
			{
				cycle:{
					backgroundColor: function(i){
						var colors = ["#AFADE0", "#E63329", "#4794FF", "#FF0173"];
						return colors[getRandomInt(0, colors.length)];
					},
					width: function(index) {
						return Math.floor(Math.random() * (max - min + 1)) + min + "%";
					},
					ease: Power0.easeOut
				},
			},
			.4);

	menuAnimation
		.fromTo([menu1, menu2, menu3], 1, {height: 0, y:8}, {height:2, y:8})
		.to(menu2, .6, {y: 14, ease: Power2.easeIn})
		.to(menu3, .6, {y: 2, ease: Power2.easeIn})
		.fromTo(mobileHeader, 1,{backgroundColor:"transparent"}, {boxShadow: "0px 4px 16px #000", backgroundColor: "#21252B"})
		.staggerFromTo(cards, 1, {backgroundColor: "transparent", width: 2}, {backgroundColor: "#2F333D", width: 2})
		.staggerTo(cards, 1, {height: 12, width: 5})
		.staggerTo(cards, 1, {marginTop: 32})
		.staggerTo(cards, .5, {width: "100%"}, .1)
		.staggerFromTo(cards, 1, 
			{height: 12},
		 	{height: 64} ,
			.3)
		.staggerTo(cards, 1,
		 	{boxShadow: "0px 4px 16px #111"},
			.3)
		.fromTo(
			cardHolder, 1, {y: 0}, {y: -200});

	fileExplorerAnimation
		.staggerFromTo(fileExplorerLines, .3,
			{autoAlpha: 0, y: 20},
			{autoAlpha: 1, y: 0}, .3, 1);

	function onCompleteFileLines() {
		menuAnimation.duration(15).play();
		lineAnimation.duration(15).play();
	}

	function getRandomInt(min, max) {
 		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function restartAnimation() {
		window.setTimeout( () => {
			menuAnimation.duration(15).restart();
			lineAnimation.duration(15).restart();
		}, 3000);
	}
});