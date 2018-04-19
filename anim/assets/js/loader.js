$(function() {
	var loader = new TimelineMax({paused: true, onComplete: initiateJump}),
		text = new TimelineMax({repeat: 3, onComplete: fadeLoader, paused: true}),
		loaderFade = new TimelineMax({paused: true});

	TweenMax.set('svg', {
		visibility: 'visible'
	});

	loader
		.staggerFrom('#loader image', .8, {
			cycle:{
				x: [-400, 0, 0, 50],
				y: [0, 400, 0, 0,],
				scale: [1, 1, 0, 1],
				ease: Power1.easeOut,
			},
			transformOrigin: "50% 50%",
			autoAlpha: 0,
		}, 1)
		.fromTo('.loader-overlay', .6, {autoAlpha: 0}, {autoAlpha: .9}, "+=.8")
		.staggerFromTo('.stagger-text', .15, {cycle:{ y: [20, -20], }, autoAlpha: 0, ease:Power1.easeOut}, {y: 0, autoAlpha: 1, ease: Power1.easeOut}, .15);

	text
		.staggerFromTo('.stagger-text', .5, {y: 0}, { y: -32}, .1)
		.staggerFromTo('.stagger-text', .5, {y: -32}, { y: 0}, .1, .5);

	loaderFade
		.to(["#loader", '#loader svg'], .8, {autoAlpha: 0, scale: .7, ease: Power3.easeIn}, .3);

	function initiateJump() {
		text.duration(1.2).play();
	}

	function fadeLoader() {
		loaderFade.play();
	}

	loader.play();
});