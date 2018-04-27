$(function(){

	var gap = 64;

	/*const ANDROID = 'android',
		IOS = 'ios',
		FRONTEND = 'frontend',
		BACKEND = 'backend';*/

	$(window).scroll(function() {
		var scrollTop = window.pageYOffset;
		if(scrollTop >= iosTop) {
			console.log($('#ios-heading'));
			$('#ios-heading').sticky({topSpacing: (($(window).height() / 2) - $('#ios-heading').height()/2)});
			$('#android-heading').unstick();
			$('#backend-heading').unstick();
			$('#front-end-heading').unstick();
		}else if(scrollTop >= androidTop) {
			$('#android-heading').sticky({topSpacing: (($(window).height() / 2) - $('#android-heading').height()/2)});
			//$('#ios-heading').unstick();
			$('#backend-heading').unstick();
			$('#front-end-heading').unstick();
		}else if(scrollTop >= backendTop) {

			$('#backend-heading').sticky({topSpacing: (($(window).height() / 2) - $('#backend-heading').height()/2)});
			$('#front-end-heading').unstick();

		}else if(scrollTop >= frontendTop) {
			$('#front-end-heading').sticky({topSpacing: (($(window).height() / 2) - $('#front-end-heading').height()/2)});
		}
	});


	let frontendTop,
		backendTop,
		androidTop,
		iosTop;

	function calculatePositions () {
		frontendTop =  $('.content-0').offset().top;
		backendTop = $('.content-4').offset().top;
		androidTop = $('.content-10').offset().top;
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
				$('#front-end-heading').unstick();
				break;
			case BACKEND:
				$('#backend-heading').unstick();
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