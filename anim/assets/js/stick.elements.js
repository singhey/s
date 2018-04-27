$(function(){

	var frontEndEle = ['#front-end-heading', '#html-heading', '#css-heading', '#js-heading'];
	var backEndEle = ['#backend-heading', '#server-heading', '#database-heading', '#mongo-db-heading', '#apache-heading', '#node-js-heading'];
	var gap = 64;

	const ANDROID = 'android',
		IOS = 'ios',
		FRONTEND = 'frontend',
		BACKEND = 'backend';

	$(window).scroll(function() {
		var scrollTop = window.pageYOffset;
		if(scrollTop >= iosTop) {
			stickElements(IOS);
			unstickElements(ANDROID);
			unstickElements(BACKEND);
			unstickElements(FRONTEND);
		}else if(scrollTop >= androidTop) {
			stickElements(ANDROID);
			unstickElements(BACKEND);
			unstickElements(IOS);
			unstickElements(FRONTEND);
		}else if(scrollTop >= backendTop) {

			stickElements(BACKEND);
			unstickElements(ANDROID);
			unstickElements(IOS);
			unstickElements(FRONTEND);

		}else if(scrollTop >= frontendTop) {
			stickElements(FRONTEND);
			unstickElements(ANDROID);
			unstickElements(IOS);
			unstickElements(BACKEND);
		}
	});


	let frontendTop,
		backendTop,
		androidTop,
		iosTop;

	function calculatePositions () {
		frontendTop =  $('.content-0').offset().top;
		backendTop = $('.content-5').offset().top;
		androidTop = $('.content-11').offset().top;
		iosTop = $('.content-15').offset().top;
	}

	function stickElements(c){
		switch(c){
			case FRONTEND:
				for(var i in frontEndEle){
					$(frontEndEle[i]).sticky({topSpacing: (i * gap)});
				}
				break;
			case BACKEND:
				for(var i in backEndEle){
					//console.log()
					$(backEndEle[i]).sticky({topSpacing: (i * gap)});
				}
				break;

			case ANDROID:
				$('#android-heading').sticky();
				break;

			case IOS:
				$('#ios-heading').sticky();
				break;

			default:
				console.log("This condition doesn't exist\n Condition is: ", c);
		}
	}

	function unstickElements(c){
		switch(c){
			case FRONTEND:
				for(var i in frontEndEle){
					$(frontEndEle[i]).unstick();
				}
				break;
			case BACKEND:
				for(var i in backEndEle){
					$(backEndEle[i]).unstick();
				}
				break;

			case ANDROID:
				$('#android-heading').unstick();
				break;

			case IOS:
				$('#ios-heading').unstick();
				break;

			default:
				console.log("This condition doesn't exist\n Condition is: ", c);
		}
	}

	calculatePositions();

});