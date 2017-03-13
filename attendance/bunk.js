window.onload = function(){
	var circumference = 1884,
		fps = 60,
		required = {
			addClass: function(el, className){
				el.classList.add(className);
			},

			removeClass: function(el, className){
				el.classList.remove(className);
			}
		};

	var toggler = document.getElementById("toggler"),
		background = document.getElementsByClassName("background")[0],
		body = document.getElementsByTagName("body")[0];

	function showNav(){
		required.addClass(body, "move");
		required.addClass(background, "show");
	}
	function hideNav(){
		required.removeClass(body, "move");
		required.removeClass(background, "show");
	}

	toggler.addEventListener("click", showNav, false);
	background.addEventListener("click", hideNav, false);

	// for resizing of svg based on screen
	function resizeChartBox(){
		var chartBox = document.getElementsByClassName("chart-box")[0];
		chartBox.style.width = getComputedStyle(chartBox)["height"];
	}
	window.onresize = function(){
		resizeChartBox();
	};
	resizeChartBox();

	//toggling of switcher


	var switcherLi = document.getElementsByClassName("switcher")[0].children;

	for(var i = 0;i < switcherLi.length; i++){
		switcherLi[i].addEventListener("click", switchNow, false);
	}
	function switchNow(){
		for(var i = 0;i < switcherLi.length; i++){
			required.removeClass(switcherLi[i], "active");
		}

		required.addClass(this, "active");
		var index = Array.prototype.indexOf.call(this.parentNode.children, this),
			update = document.getElementsByClassName("update")[0],
			feed = document.getElementsByClassName("feed")[0];

		if(index == 1){
			required.addClass(update, "on-screen");
			required.removeClass(feed, "on-screen");
		}else if(index == 2){
			required.addClass(update, "on-screen");
			required.addClass(feed, "on-screen");
		}else{
			required.removeClass(feed, "on-screen");required.removeClass(update, "on-screen");
		}
	}

	// toggling of subject and updating percentage bar
	var ulContainingSubjects = document.getElementsByClassName("subjects")[0].children;
	for(var i = 0; i<ulContainingSubjects.length; i++){
		ulContainingSubjects[i].addEventListener("click", calcIndex, false);
	}
	var prev = -1, p, increment;
	function showPercentage(i){
		clearInterval(p);
		if(i !== prev){
			required.addClass(ulContainingSubjects[i], "selected");
			if(prev !== -1)required.removeClass(ulContainingSubjects[prev], "selected");
			var outer = document.getElementById("outer"),
				mainText = document.getElementsByClassName("main")[0],
				decimalText = document.getElementsByClassName("dec")[0],
				attend = document.getElementById("attend"),
				bunk = document.getElementById("bunk");
			outer.style.strokeDasharray = ((sub[i].percentage * circumference)/100)+" "+circumference;
			attend.innerHTML = "Require : "+sub[i].require;
			bunk.innerHTML = "Bunk : "+sub[i].bunk;
			var finalMain = sub[i].percentage, finalDec, s;
			finalMain = finalMain.toString();
			s = finalMain.split(".");
				finalMain = s[0];
			finalDec = "."+s[1]+'%';
			var increment = parseFloat((parseInt(sub[i].percentage) - parseInt(mainText.innerHTML.replace("%", "")))/29).toFixed(2),
			subMain = 0, subDec = 0, value = 0,valuePrev = parseInt(mainText.innerHTML.replace("%", ""));
			var prevLength = valuePrev.toString();
				prevLength = prevLength.split(".");
			if(finalMain.length == 3 && prevLength[0].length === 3){
				mainText.setAttribute("x", "250");
			}else{
				mainText.setAttribute("x", "300");
			}
			if(parseFloat(valuePrev) == parseFloat(sub[i].percentage)){
				prev = i;
				return;
			}
			p = setInterval(function(){
				i++;
				value = parseFloat(parseFloat(valuePrev)+parseFloat(increment)).toFixed(2);
				valuePrev = value;
				var w = Math.abs(value);
				w = value.toString();
				w = w.split(".");
				subMain = w[0];
				subDec = "."+w[1]+'%';
				mainText.innerHTML = subMain;
				decimalText.innerHTML = subDec;
				while(subMain.length<2){
					subMain = '0'+subMain;
				}
				if(i >=29){
					if(finalMain.length == 1){
						finalMain = '0'+finalMain;
					}else if(finalMain.length == 3){
						mainText.setAttribute("x", "250");
					}else{
						mainText.setAttribute("x", "300");
					}
					mainText.innerHTML = finalMain;
					decimalText.innerHTML = finalDec;
					clearInterval(p);
				}
			}, 34);

		}
		prev = i;
	}
	function calcIndex(){
		var index = Array.prototype.indexOf.call(this.parentNode.children, this);
		showPercentage(index);
	}
	showPercentage(0);
	var subjectsLI = document.getElementsByClassName("subjects")[0].children;
	for(var i = 0; i<subjectsLI.length; i++){
		subjectsLI[i].innerHTML = subjects[i];
	}

	// data is directly present in js file for simplification which is taken from data.js file

	//populate update div with subjects and check wheter he attended that day

	var spanSubjects = document.getElementsByClassName("subjectName"),
		spanSubjectsFeed = document.getElementsByClassName("subjectNameFeed");
	for(var i = 0; i<spanSubjects.length; i++){
		spanSubjects[i].innerHTML = subjects[i];
		spanSubjectsFeed[i].innerHTML = subjects[i];
	}

	var attended = document.getElementsByClassName("attend"),
		bunked = document.getElementsByClassName("bunk");

	for(var i = 0;i < attended.length; i++){
		attended[i].addEventListener("click", attend, false);
		bunked[i].addEventListener("click", bunk, false);
	}
	function attend(){
		var index = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
		sub[index].attended++;
		sub[index].total++;
		updateLocalstorage();
		updateData();
		feedDivs();
		inputNameAndDate();
	}
	function bunk(){
		var index = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
		sub[index].total++;
		updateLocalstorage();
		updateData();
		feedDivs();
		inputNameAndDate();
	}

	// for inserting data in input field of feed box

	function feedDivs(){
		var totalFields = document.querySelectorAll("input[name='total']"),
			presentFields = document.querySelectorAll("input[name='attended']");
		for(var i = 0;i < totalFields.length; i++){
			totalFields[i].value = sub[i].total;
			presentFields[i].value = sub[i].attended;
		}

	}
	feedDivs();
	function updateTotal(){
		var index = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
		sub[index].total = this.value;
		updateLocalstorage();
		updateData();
		inputNameAndDate();
	}
	function updateAttended(){
		var index = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
		sub[index].attended = this.value;
		updateLocalstorage();
		updateData();
		inputNameAndDate();
	}
	var inputTotal = document.querySelectorAll('input[name="total"]'),
		inputAttended = document.querySelectorAll('input[name="attended"]');
	for(var i = 0; i< inputTotal.length; i++){
		inputTotal[i].addEventListener("keyup", updateTotal, false);
		inputAttended[i].addEventListener("keyup", updateAttended, false);
	}

	//Add date when this was last updated

	var dateField = document.getElementById("date");

	//Add event listener to name field

	var nameField = document.getElementsByClassName("name-input")[0];
	nameField.addEventListener("keyup", updateName, false);
	function updateName(){
		localStorage.name = this.value;
	}

	function inputNameAndDate(){
		if(localStorage.name){nameField.value = localStorage.name; required.addClass(nameField, "present")};
		if(localStorage.date)dateField.innerHTML = "Date : "+localStorage.date;
	}

	inputNameAndDate();

	var clear = document.getElementById("clear");
	clear.addEventListener("click", function(){
		if(confirm("wish to clear all data"))localStorage.clear();
		required.addClass(this, "clicked");
	},false);

	var exhausted = document.getElementById("exhausted");
	exhausted.addEventListener("click", function(){
		var d = new Date();
		var str = prompt("BreakDown Time", d.getHours()+':'+d.getMinutes()+", "+d.getDate()+' '+months[d.getMonth()]),
			time,
			c;
			if(str!==null){
			var t = str.split(":");
			c = d.toString();
			c = c.split(" ");
			if(c[0] == 'Thu' && t[0]>14){
				time = '17:00';
			}else if(c[0] == 'Sat' && t[0]>13){
				time = '17:00';
			}else{
				time = str;
			}
			if(time){
				var s = localStorage.dayLength;
				localStorage.dayLength = s +' | '+time;
			}
		}
	}, false);
};
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
