let ios = new TimelineMax({paused: true});

var dist = 50

ios
	.to(".browser-window-osx", .3,
		{rotationY: 90, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"})
	.to(".backend", .1,
		{rotationY: 0, transformOrigin: "50% 50%", perspective:800, transformStyle:"preserve-3d"})
	.to('.android-dev-holder', .3, {autoAlpha: 0})
	.to(['.ios-dev-svg', '.ios-dev-holder'], .3, {autoAlpha: 1})
	.from(".ios-dev.header", .3, {autoAlpha: 0, x: dist})
	.from(".ios-dev.nav", .3, {autoAlpha: 0, x: -dist})
	.from(".ios-dev.file-explorer", .3, {autoAlpha: 0, x: dist})
	.from('.ios-dev.objects', .3, {autoAlpha: 0, scale: .5})
	.from('.ios-dev.code', .3, {autoAlpha: 0, x: -dist})
	.from('.ios-dev.properties', .3, {autoAlpha: 0, y: dist})
	.from('.ios-dev.target', .3, {autoAlpha: 0, y:dist})
	.staggerFrom('.ios-dev.assets', .3, {autoAlpha: 0, y: dist})
	.from('.ios-dev.footer', .3, {autoAlpha: 0, x: -dist});