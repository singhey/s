window.onload = function(){
	console.log("loaded");
	var container = document.getElementsByClassName("bars")[0],
		svg = document.getElementsByTagName("svg")[0];
	function reAlign(){
		var h = parseInt(getComputedStyle(container)["height"].replace("px", "")),
			w = parseInt(getComputedStyle(container)["width"].replace("px", ""));
			svg = document.getElementsByTagName("svg")[0];
		svg.style.height = h - 20;
		svg.style.width = w;
	}
	window.onresize = function(){reAlign();getPoints();alignCircle();};
	getPoints();
	reAlign();
	addCircles();
	var p = document.getElementsByTagName("polygon")[0];
	console.log(p.getTotalLength());
	addStroke();
};
var data = [];
function makeSVGEl(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
      el.setAttribute(k, attrs[k]);
    }
    return el;
}

function getPoints(){
	var points = '',
		time = localStorage.dayLength,
		svg = document.getElementsByTagName("svg")[0],
		container = document.getElementsByClassName("bars")[0],
		h = parseInt(getComputedStyle(container)["height"].replace("px", "")),
		w = parseInt(getComputedStyle(container)["width"].replace("px", "")),
		timeArr = time.split("|"),
		pSpace = parseFloat(w/(timeArr.length)).toFixed(2),
		pHeight = parseFloat(h/((17 - 9) * 60)).toFixed(2);
	points = '0 ,'+h;
	data = [];
	for(var i = 0;i <timeArr.length; i++){
		var x = pSpace * i,
			y = parseFloat(h - (getVertical(timeArr[i])*pHeight)).toFixed(2);;
		if(y<5)y= 8;
		points = points+' '+x+','+y;
		data.push({cx:x, r:4, cy:y, title:timeArr[i]});
	}
	points = points+' '+w+','+h;
	svg.children[0].setAttribute("points", points);
}

function addCircles(){
	var svg = document.getElementsByTagName("svg")[0];
	data.forEach(function(c){
		svg.appendChild(makeSVGEl("circle", {
			cx:c.cx,
			r:c.r,
			cy:c.cy,
			title:c.title
		}));	
	});
	
}

function alignCircle(){
	var circle = document.getElementsByTagName("circle");
	for(var i = 0;i <data.length; i++){
		circle[i].setAttribute("cx", data[i].cx);
		circle[i].setAttribute("cy", data[i].cy);
	}
}

function getVertical(a){
	var x = a.split(":"),
		hours = x[0],
		minutes = x[1];
		if(hours>=17){hours = 17;minutes= 0;}
	return parseInt((hours - 9)* 60) + parseInt(minutes);
}


function addStroke(){
	var p = document.getElementsByTagName("polygon")[0];
	p.style.strokeDasharray = p.getTotalLength()+' '+p.getTotalLength();
	alert("hello");
}
