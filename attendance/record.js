window.onload = function(){
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
	addStroke();
};
var data = [];
function makeSVGEl(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
    	if(k!='text'){
      		el.setAttribute(k, attrs[k]);
  		}else{
  			el.innerHTML = attrs[k];
  		}
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
	points = '0,'+h;
	data = [];
	for(var i = 0;i <timeArr.length; i++){
		var x = pSpace * i,
			integer = timeArr[i].split(","),
			y = parseFloat(h - (getVertical(integer[0])*pHeight)).toFixed(2);
		if(y<5)y= 8;
		points = points+' '+x+','+y;
		data.push({cx:x, r:4, cy:y, title:integer[1]});
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

	circlesEventListener();
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
	p.style.strokeDasharray = polygon_length(p)+' '+polygon_length(p);
}

function coord(c_str) {
    var c = c_str.split(',');
    if (c.length != 2) {
        return; // return undefined
    }
    if (isNaN(c[0]) || isNaN(c[1])) {
        return;
    }
    return [parseFloat(c[0]), parseFloat(c[1])];
}

function dist(c1, c2) {
    if (c1 !== undefined && c2 !== undefined) {
        return Math.sqrt(Math.pow((c2[0]-c1[0]), 2) + Math.pow((c2[1]-c1[1]), 2));
    } else {
        return 0;
    }
}

function polygon_length(el) {
  var points = el.getAttribute('points');
  points = points.split(' ');
  if (points.length > 1) {
    var len = 0;
    // measure polygon
    if (points.length > 2) {
      for (var i=0; i<points.length-1; i++) {
        len += dist(coord(points[i]), coord(points[i+1]));
      }
    }
    // measure line or measure polygon close line
    len += dist(coord(points[0]), coord(points[points.length-1]));
    return len;
  } else {
    return 0;
  }
}

function circlesEventListener(){
	var circle = document.getElementsByTagName("circle");
	for(var i = 0; i< circle.length; i++){
		circle[i].addEventListener("click", makeTextBox);
	}
}

function makeTextBox(){
	var x = this.getAttribute("cx"), y = this.getAttribute("cy"), text = this.getAttribute("title"),
		SVGRect, textBox;
	if(document.getElementsByTagName("text").length<1){
		var svg = document.getElementsByTagName("svg")[0];
		svg.appendChild(makeSVGEl("text", {
			x: x,
			y: y,
			text: text
		}));
		textBox = document.getElementsByTagName("text")[0],
		SVGRect = textBox.getBBox();
		svg.appendChild(makeSVGEl("rect", {
			x: SVGRect.x,
			y: SVGRect.y,
			width: SVGRect.width,
			height: SVGRect.height
		}));
		svg.appendChild(textBox);
	}else{
		textBox = document.getElementsByTagName("text")[0];
		var rect = document.getElementsByTagName("rect")[0];
		move(textBox, {
			x: x,
			y: y,
			id: top,
			text: text
		});

		SVGRect = textBox.getBBox();
		move(rect, {
			x: SVGRect.x-5,
			y: SVGRect.y-5,
			width: SVGRect.width+10,
			height: SVGRect.height+10
		});
	}
}

function move(el, attrs){
	for (var k in attrs) {
    	if(k!='text'){
      		el.setAttribute(k, attrs[k]);
  		}else{
  			el.innerHTML = attrs[k];
  		}
    }
}
