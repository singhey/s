window.onload = function(){
	var container = document.getElementsByClassName("bars")[0],
		divisionsVertical = parseInt(getComputedStyle(container)["height"].replace("px", "")),
		divisionsHorizontal = parseInt(getComputedStyle(container)["width"].replace("px", ""));
		time = localStorage.dayLength.split(" | ").length,
		eachMinuteVertical = parseFloat(divisionsVertical/((17 - 9) * 60)).toFixed(2),
		eachMinuteHorizontal = Math.floor(divisionsHorizontal/time);
		if(eachMinuteHorizontal >=6) eachMinuteHorizontal = 6;
	addBars(container, eachMinuteVertical, eachMinuteHorizontal);
};

function getHeight(a, h){
	var x = a.split(":"),
		hours = x[0],
		minutes = x[1];
		if(hours>=17){hours = 17;minutes= 0;}
	return parseInt((hours - 9)* 60) + parseInt(minutes);
}

function addBars(el, h, w){
	var string = localStorage.dayLength,
		arr = string.split("|");

	for(var i = 0;i <arr.length; i++){
		var height = getHeight(arr[i], h),
			div = document.createElement('div');
		div.setAttribute("class", "bar");
		div.style.height = (height * h)+'px';
		div.style.width = w+'px';
		div.style.left = ((w * i))+'px';
		el.appendChild(div);
	}
}
