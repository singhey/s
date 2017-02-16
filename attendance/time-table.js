window.onload = function(){
	"use strict";
	function createTimeTable(){
		var arr = getArray(),
			el = document.getElementsByClassName("container")[0];
		createDivs(el, arr);
	}
	function resizeDivs(){
		var height = window.innerHeight,
			div = document.getElementsByClassName('box'),
			calcHeight = 0;

		calcHeight = Math.floor(height/div.length);

		for(var i = 0 ; i <div.length; i++){
			div[i].style.height = calcHeight+'px';
			div[i].style.padding = (calcHeight-24)/2+'px'+' 30px';
		}

	}
	createTimeTable();
	resizeDivs();
};

var timeTable = [];

timeTable[0] = ['Mon','15CS43', '15CS43', '15CS44', 'TEA BREAK', '15MAT41', 'LUNCH', '15CS42', '15CS44', '15CS45', 'BREAK', '15CS46'];
timeTable[1] = ['Tue', '15CS44', '15CSL47', 'LUNCH', '15MAT41', '15CS43', '15CS44', 'BREAK', '15CS45'];
timeTable[2] = ['Wed', '15MAT41', '15CS43', '15CS44', 'TEA BREAK', '15CS45', 'LUNCH', '15CS43', '15MAT41', 'HOD/COUN', '15CS42'];
timeTable[3] = ['Thu', '15CS45', '15MAT41', '15CS43', 'TEA BREAK', '15CS45', 'LUNCH', '15CS46'];
timeTable[4] = ['Fri', '15CS45', '15CS42', 'NPTEL', 'TEA BREAK', '15CS42', 'LUNCH', '15CS46', '15CSL48'];
timeTable[5] = ['Sat', '15CS46', '15MAT41', 'TEA BREAK', '15CS44', '15CS42'];

var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
	subAndTeachers = ['15MAT41 Mathematics Sarada', '15CS42 Software Arun', '15CS43 Algoritm Santhiya', '15CS44 Microprocessor Supriya', '15CS45 Object_Oriented Jyothi', '15CS46 Communication Some_Bitch', '15CSL47 Algorithm_Lab', '15CSL48 Microprocessor_Lab'];


function getDay(){
	var day = new Date();
	day = day.toString();
	day = day.split(" ");
	day = day[0];
	//return day;
	return 'Mon';
}

function getArray(){
	var d = getDay(), i = 0;
	while(d!=timeTable[i][0]){
		console.log(timeTable[i][0]);
		i++;
	}
	return timeTable[i];
}

function createDivs(el, arr){
	//To fill appropriate Date
	var d = new Date();
	var div = document.createElement("div");
	div.setAttribute("class", 'box');
	div.classList.add('free');
	div.innerHTML = days[d.getDay()];
	el.appendChild(div);
	console.log(d.getDay());
	for(var i = 1; i<arr.length; i++){
		var b = document.createElement("div"), string = '';
		var m = arr[i].toString();
		b.setAttribute("class", 'box');
		if(m[0]!=1 && m[1]!=5)
			b.classList.add('free');
		else{
			for(var k = 0; k<subAndTeachers.length; k++){
				if(subAndTeachers[k].indexOf(arr[i])>=0){
					var each = subAndTeachers[k].split(" ");
					string = '<span class="code">'+each[0]+'</span>';
					string+= '<span class="subject">'+each[1]+'</span>';
					each[2] = each[2] || '';
					string+= '<span class="teacher">'+each[2]+'</span>';
				}
			}
		}
		console.log(arr[i]);
		string = string || arr[i];
		b.innerHTML = string;
		el.appendChild(b);
	}
}
