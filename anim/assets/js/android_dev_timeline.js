var droid = new TimelineMax({paused: true});



droid
	.to('.server-holder', .1, {autoAlpha: 0, y: 20})
	.to('.android-dev-svg', .1, {autoAlpha: 1})
	.from('.android-dev.header', .3, {x: -20, autoAlpha: 0})
	.from('.android-dev.bread-crumbs', .3, {x: -20, autoAlpha: 0})
	.from('.android-dev.left-border', .3, {y: -20, x: -20, autoAlpha: 0})
	.from('.android-dev.package-explorer', .3, {y: -20, x: -20, autoAlpha: 0})
	.from('.android-dev.code', .3, {y: -20, x: -20, autoAlpha: 0})
	.from('.android-dev.preview', .3, {y: -20, x: -20, autoAlpha: 0})
	.from('.android-dev.right-border', .3, {y: -20, x: -20, autoAlpha: 0})
	.from('.android-dev.terminal', .3, {x: 20, autoAlpha: 0})
	.from('.android-dev.footer', .3, {x: -20, autoAlpha: 0})