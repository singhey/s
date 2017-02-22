var subjects = ["Mathematics", "Software", "Algorithm", "Microprocessor", "Object_Oriented", "Communications", "Algorithm_Lab", "lab microproces.."],
	attended = [1, 1, 2 ,0, 2, 1, 0, 0],
	total = [1, 1, 2, 0, 2, 2, 0, 1],
	dayLength = '16:00 | 12:45 | 15:10 | 16:20 | 14:20 ',
	subjectsObj = function(n){
		this.name = n;
		this.attended = 0;
		this.total= 0;
		this.bunk = 0;
		this.percentage = 0;
		this.require = 0;
	},
	sub = [],
	computeData = {
		bunk: function(){
			var canBunk = [],
				percentage,
				t = total,
				a = attended;
			for (var i = 0; i < t.length; i++) {
				percentage = (a[i]/t[i])*100;
				var init = t[i];
					if(Math.floor(percentage)>75){
						canBunk[i] = Math.floor((a[i]/3)*4 - t[i]);
					}else{
						canBunk[i] = 0;
					}
			}
			return canBunk;
		},

		require:function(){
			var mustAttend =[],
				percentage,
				t = total,
				a = attended;
			for (var i = 0; i < t.length; i++) {
				percentage = (a[i]/t[i])*100;
				var init = t[i], inita = a[i];
					while(Math.floor(percentage)<75){
						t[i]++;
						a[i]++;
						percentage = (a[i]/t[i])*100;
					}
					mustAttend[i] = t[i] - init;
					total[i] = init;
					attended[i] = inita;
			}
			return mustAttend;
		},

		percentage: function(){
			var percentageHolder = [],
				decimal, 
				percentage,
				t = total,
				a = attended;
			for (var i = 0; i < total.length; i++) {
				if(t[i] == 0){
					percentageHolder[i] = "00.00";
					continue;
				}
				percentage = (a[i]/t[i])*100;
				percentageHolder[i] = parseFloat(percentage).toFixed(2);
			}
			return percentageHolder;
		}
	};

for(var i = 0; i< subjects.length; i++){
	sub[i] = new subjectsObj(subjects[i]);
}

var obtainedClasses, obtainedPresent;

//update values from local storage

function updateData(){
	if(localStorage.total){
		obtainedClasses = localStorage.total;
		obtainedPresent = localStorage.present;
		total = obtainedClasses.split(",");
		attended = obtainedPresent.split(",");
	}
	var canBunk = computeData.bunk(),
		require = computeData.require(),
		percentage = computeData.percentage();

	for(var i = 0; i < subjects.length; i++){
		sub[i].attended = attended[i];
		sub[i].total = total[i];
		sub[i].bunk = canBunk[i];
		sub[i].percentage = percentage[i];
		sub[i].require = require[i];
	}
}
updateData();

function updateLocalstorage(){
	var total = '', present = '';
	for(var i = 0;i < subjects.length; i++){
		total = total+sub[i].total+',';
		present = present+sub[i].attended+',';
	}
	localStorage.total = total;
	localStorage.present = present;
	var newDate,
		d = new Date(),
		m = d.getMonth(),
		y = d.getFullYear(),
		day = d.getDate();
	y = y.toString();
	m++;
	m = m.toString();
	day = day.toString();
	if(m.length==1){m = '0'+m[0]}
	if(day.length == 1){day = '0'+day[0];}
	newDate = day+'/'+m+'/'+y[2]+y[3];
	localStorage.date = newDate;
}

function updateName(n){
	localStorage.name = n;
}
if(!localStorage.dayLength)localStorage.dayLength = dayLength;
