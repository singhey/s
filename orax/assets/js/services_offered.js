$(function(){
	var services = {
		'consulting' : ['R&amp;D in electrical and electronics', 'Robotics', 'Indigenous Products', 'Firmware &amp; Software', 'Mobile apps'],
		'Automotive Products' : [ {
			'2-DIN infotainment System' : ['Android based', 'Navigation, 3G, Wifi', 'Remote control', 'Reverse Camera', 'Peripheral USB support'],
			'1-DIN infotainment System': ['Universal support(Patent Filed)', 'Noise free music(Patent Filed)', 'FM radio inbuilt', 'Multiple device charging'],
			'HSCAN' :['HLP support', 'UDS capable', 'Multi Frame Messaging', 'Multi ECU Detection and targeting', 'Data Collision Monitoring', 'OOB (Out Of Band Data) support'],
			'Immobilizer': ['Track your single vehicle or fleet from anywhere', 'Know the status of your vehicle', 'Geo-fencing', 'No ignition if you lock your vehicle from mobile app'],
		}],
		'Trackers': [{
			'Indoor tracker':['Active tracking', 'Track indoor', 'Latest technology'],
			'Outdoor Tracker':['GPS based', 'App based', 'Tracking easy'],
		}],
		'Products for DRDO': [{
			'Miniature Data Logger': ['Extremely miniaturized', 'High frequency', 'Data collection for Grenade and Shell explosions etc.', 'Configurable frequency and time'],
			'Electronic Detonator system': ['High accuracy compared to chemical one', 'Accurate timing ', 'Works without battery after ejection of projectile', 'Configurable frequency and time'],
			'Mobile man portable Surveillance System(Patented)': ['Wifi based', 'For urban terroris', 'Basically for closed and hazardous space'],
		}],
		'New &amp; Renewable Energy Products': [{
			'Remote Monitoring System (RMS)': ['SIM based', 'Data monitoring', 'Remotely control the device', 'SMS service and alerts', 'Automated data analysis and report generation'],
			'MPPT with Remote Monitoring System': ['Input requirement 8V-36V', 'Output is 10A and 12V-48V', 'Modular remote monitoring system', 'Data logging and analysis', 'Multilingual support', 'Security options: Password, Paraphrases, PGP support'],
			'Battery Management System (BMS)':['Improves safety of Li-ion/Li-polymer batteries', 'Reduce complexity and increase reliability through modular structure', 'Manages battery cells within string to increase battery life', 'Prevents battery damage', 'Actively balance individual cells during charging, discharging or rest(configurable)', 'Provides low cost alternative to existing'],
			'Digital Addressable Lighting Interface (DALI)': ['Digital dimming', 'Wireless and wired central control', 'Dimming based on motion detection', 'Dimming based on LUX detection'],
			'CAN enabled BMS for automobiles': ['48 V system', 'CAN communication', 'Wake Up', 'Timer Function', 'Contactor control', 'Watch Dog', 'CAN collision', 'Cooling control', 'Software update through OTA'],
			'Electric Bicycle': ['Closed loop Control system', 'BLDC motor Control', 'BMS(36V-48V)', 'Data acquisition'],
		}],
		'CAD/CAE, Product Development' :[],
	};

	$('#services').html('');

	$.each(services, function(i, e){
		if(i.length > 0) {
			console.log('length is not null');
		}
	});

	function recheck(obj){

	}

	function makeList(arr){

	}
});