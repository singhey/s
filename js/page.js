$(window).load(function(){
	var openComment, styles, time, char, writeStyle;
	styles = "/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/\n\n *   {\n  -webkit-transition:all 1s linear;\n }\n\n/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/\n\n html   {\n  background: #0077B5;\n }\n\n /* \n * its will be a single page so no overflow\n */\n\n body{\n   overflow:hidden;\n }\n\n/**\n * Hold on....\n *\n **/\n\n pre  {\n  color:#fff;\n  white-space:text-wrap;\n }\n\n/** \n *Let's get organised because its always  better\n *\n **/\n\n pre  {\n  max-height:calc(84vh);\n  border:1px solid #ccc;\n  color : #444;\n  width:48%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #ccc;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n/**\n  * This looks better \n  * let's add some perspective\n  **/\n pre  {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(94%);\n }\n\n/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/\n.comment         { color: #857F6B; font-style: italic; }\n.selector        { color: #F78C6C; }\n.property        { color: #FF5370; }\n.value           { color: #945EB8; }\n\n/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */\n\ndiv.about-me{\n  overflow-x:hidden;\n  width:45%;\n  display:block;\n}\nul.menu{\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  padding:100px 150px;\n  -webkit-transform:rotate(-35deg) skew(20deg, 5deg);\n  -webkit-transform-origin:left;\n  display:block;\n}\nul.menu>li{\n  text-align:center;\n  padding:10px;\n  background:#fff;\n  color: #575757;\n  box-shadow:-2em 2em 0px #444;\n  width:4em;\n  height:2.5em;\n  position:relative;\n  vertical-align:center;\n  -webkit-box-sizing:border-box;\n  -webkit-transition: all 0.5s ease;\n  font-weight:bold;\n}\n\n/* Removing padding of first and\n * last element because they are svg\n */\n\nul.menu>li:nth-child(5), ul.menu>li:first-child{\n  padding-top:0;\n}\n\n/*To make them appear 3d becuase its nice to see */\n\nul.menu>li::after, ul.menu>li::before{\n  content: '';\n  position: absolute;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  width: .5em;\n}\nul.menu>li::after{\n  height: 4em;\n  background: #e1e1e1;\n  bottom: -2.25em;\n  left: 1.5em;\n  -webkit-transform: rotate(90deg) skew(0, 45deg);\n          transform: rotate(90deg) skew(0, 45deg);\n}\nul.menu>li:before{\n  height: 2.5em;\n  background: #e1e1e1;\n  top: .25em;\n  left: -.5em;\n  -webkit-transform: skewY(-45deg);\n          transform: skewY(-45deg);\n}\n\n/* Designing my cards to giv my details */\n\ndiv.content div{\n   -webkit-transition:all .4s ease-out;\n  padding:20px;\n  display: none;\n  color: #444;\n  background:#eee;\n  width:75%;\n}\n\n/**\n * A shadow to all of my div to\n * make them look better\n */\n\ndiv.content div.con0{\n  box-shadow:0px 0px 25px #B83931;\n}\ndiv.content div.con1{\n  box-shadow:0px 0px 25px #ccc;\n}\ndiv.content div.con2{\n  box-shadow:0px 0px 25px red;\n}\ndiv.content div.con3{\n  box-shadow:0px 0px 25px #800074;\n}\ndiv.con4{\n  box-shadow:0px 0px 25px #ccc;\n}\n\n/* adding perspective to my details card */\n\n.in-out{\n  -webkit-transform:perspective(2000px) rotateY(25deg) translateY(-50px);\n}\n.out-in{\n  -webkit-transform:perspective(2000px) rotateY(-25deg) translateY(-50px);\n}\n\nul.menu li svg path,ul.menu li svg circle, ul.menu li svg{\n  fill:#575757;\n  -webkit-transition:fill 0.1s ease;\n}\nul.menu>li.changeBackground svg path, ul.menu>li.changeBackground svg circle{\n  fill:#fff;\n}\n\n/**\n *Something to highlight the selected nav\n * item */\n\nul.menu>li.changeBackground{\n   background: #ff6e42;\n  color: #fffcfb;\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #444;\n  cursor:pointer;\n}\nh1{\n  font-size:19px;\n  font-weight:lighter;\n}\n\n/**\n * Let's add some transition to my soical icons\n */\n\nul.follow svg path{\n  -webkit-transition: all 0.4s ease-out;\n}\n.linkedin svg:hover path{\n  fill:#0077B5;\n}\n.facebook svg:hover path{\n  fill: #3b5998;\n}\n.instagram svg:hover path{\n  fill: #fb3958;\n}\n.googleplus svg:hover path{\n  fill: #d34836;\n}\n.twitter svg:hover path{\n  fill: #0084b4;\n}\n";
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
			if(index==message.length-200){
				select();
			}
			return setTimeout(function(){
				return writeStyle(message, index, interval);
			}, interval);
		}
	}
	writeStyle(styles, 0, 20);
	select = function(){
		$('ul.menu>li:nth-child(1)').addClass('changeBackground');
		$('div.con0').fadeIn(300).addClass('in-out');
	}
});
