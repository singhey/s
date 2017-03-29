window.onload = function(){
	//console.log("hello");
	width = window.innerWidth;
	slideImage();
	navBar();
	fitImage(width);
	window.onresize = function(){
		width = window.innerWidth;
		fitImage(width);
		var slideContainer = document.getElementsByClassName("slides")[0];
		slideContainer.style.marginLeft = "0px";
		var buttons = document.getElementById("buttons").children;
		for(var i = 0; i< buttons.length; i++){
			buttons[i].classList.remove("clicked");
		}
		buttons[0].classList.add("clicked");
	}
	init();
}

var slideTimer, width;

function fitImage(w){
	var slideContainer = document.getElementsByClassName("slides")[0];
		slides = slideContainer.children;

	slideContainer.style.width = w*3+"px";
	for(var i = 0; i< slides.length; i++){
		slides[i].style.width = w+"px";
	}
}

function slideImage(){
	var buttons = document.getElementById("buttons").children;
	//console.log("called");
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", addBackground);
	}
}

function addBackground(){
	var buttons = document.getElementById("buttons").children;
	for(var i = 0; i< buttons.length; i++){
		buttons[i].classList.remove("clicked");
	}
	this.classList.add("clicked");
	var index = Array.prototype.indexOf.call(buttons, this);
	//console.log(index);
	changeSlide(index);
}

function changeSlide(i){
	clearInterval(slideTimer);
	var slideContainer = document.getElementsByClassName("slides")[0];
	var m = -i*width;
	slideContainer.style.marginLeft = m+"px";
	var slides = slideContainer.children;
	for(var j = 0;j <slides.length; j++){
		slides[j].classList.remove("in-frame");
	}
	slides[i].classList.add("in-frame");
}

function navBar(){
	var toggler = document.getElementById("nav-switcher"),
		background = document.getElementById("background"),
		nav = document.getElementsByClassName("side-nav")[0];
	toggler.addEventListener("click", function(){
		nav.classList.add("on-screen");
		background.classList.add("visible");
	});
	background.addEventListener("click", function(){
		this.classList.remove("visible");
		nav.classList.remove("on-screen");
	});
}

function init(){
	var slideContainer = document.getElementsByClassName("slides")[0],
		slides = slideContainer.children;

	slides[0].classList.add("in-frame");
}
