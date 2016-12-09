$(window).load(function(){
	var openComment, styles, time, char, writeStyle;
	styles = "/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/\n\n *  {\n  -webkit-transition:all 1s ease-out;\n }\n\n/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/\n\n html  {\n  background: #0e5467;\n }\n\n/**\n * Hold on....\n *\n **/\n\n pre {\n  color:#fff;\n  white-space:text-wrap;\n }\n\n/** \n *Let's get organised because its always  better\n *\n **/\n\n pre {\n  max-height:calc(84vh);\n  border:1px solid #ccc;\n  color : #444;\n  width:50%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #ccc;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n/**\n  * This looks better \n  * let's add some perspective\n  **/\n pre {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(84%);\n }\n\n/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/\n.comment        { color: #857F6B; font-style: italic; }\n.selector       { color: #F78C6C; }\n.property       { color: #FF5370; }\n.value          { color: #945EB8; }\n\n/**\n * We seems to be on track now...\n * What can we add in left\n * let's add a heart...\n *\n **/\n  #heart, #echo  { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n #heart  { z-index: 8; }\n#echo   { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after  {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #FF5370;;\n     top: 20%;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before  {\n  left: 150px;\n}\n\n#heart::after, #echo::after  {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* It needs some depth  */\n\n#heart::after  { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before  { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* Makin it mine. */\n\n\n#heart i::before  {\n  content: \"SINGHEY\";\n  -webkit-transform:rotate(-10deg);\n  position: absolute;\n  z-index: 9;\n  width: 70%;\n  top: 35%; left: 15%;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 33px;\n  text-shadow: -2px -2px 0px rgba(200,200,200,0.2);\n}\n\n\n/* \n * What's a heart if it doesnt beat\n */\n\n@-webkit-keyframes heartbeat  {\n  0%, 100%  { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50%  { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat  {\n  0%, 100%  { transform: scale(0.95); }\n  50%       { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo  {\n  0%    { \n    opacity: 0.5;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100%  { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo  {\n  0%    { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100%  { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Beautiful! Now for the beating...\n */\n\n#heart, #echo  {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function : cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart  { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo  { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * Ready...           \n */\n\n#heart, #echo  {\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n  \n}\n\n/** \n *\n * Done Wahoo!         \n *\n * We did it!       \n *\n * I mean *I* did it, but you know, whatever...\n *  \n **/\n";
	openComment = false;
	char = function(a){
		if(a === '/'&& !openComment){
			openComment = true;
			styles = $('.style-text').html()+a;
		}else if(a == '/' && openComment){
			openComment = false;
			styles = $('.style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		}else if(a == ":"){
			styles = $('.style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<span class="property">$1</span>:');
		}else if(a == ";"){
			styles = $('.style-text').html().replace(/([^:]*)$/,'<span class="value">$1</span>;');
		}else if(a == "{"){
			styles = $('.style-text').html().replace(/(.*)$/, '<span class="selector">$1</span> {');
		}else{
			styles = $('.style-text').html()+a;
		}
		$('.style-text').html(styles);
		var k = $(".style-text").text();
		return $('#style-tag').html(k);
	}

	writeStyle = function(message, index, interval){
		while(index< message.length){
			var pre = $('.style-text');
			var body = $('body');
			$(pre).scrollTop($(pre).prop('scrollHeight'));
			$(body).scrollTop($(body).prop('scrollHeight'));
			char(message[index++]);
			return setTimeout(function(){
				return writeStyle(message, index, interval);
			}, interval);
		}
	}
	writeStyle(styles, 0, 20)
});
