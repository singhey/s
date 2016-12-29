window.onload = function(){
	var openComment, styles, time, char, writeStyle;
	styles = "/**\n * Hola! I'm is Abhishek Singh\n * I'm a full time coder\n * That's a lie I do it sometimes\n *  \n * Let me teach you to code today\n */\n\n/**\n * \n * Step one is to set animation property\n */\n \n *{\n  -webkit-transition:all 1s linear;\n }\n\n/**\n *\n * Didn't make much difference\n * we are not in 80's let's add color\n */\n\n html   {\n  background: #0077B5;\n }\n /*\n * A sec\n */\n pre{\n  max-height:calc(84vh);\n  color:#fff;\n  overflow:auto;\n }\n\n /**\n *\n * Let's get organised because it's\n * always good to be organised\n */\n\n pre{\n  white-space:text-wrap;\n  border:1px solid #444;\n  color : #444;\n  width:48%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #444;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n /**\n * A bit of perspective would look great\n */\n\n pre  {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(94%);\n }\n\n /**\n * These texts are not readable for a coder\n * let's make them readable\n */\n .comment { color: #857F6B; font-style: italic; }\n .selector { color: #F78C6C; }\n .property { color: #FF5370; }\n .value    { color: #945EB8; }\n\n /*\n * let's get to business\n * U came to see my website let's build it\n * actually i'll do it you just watch\n */\n div.about-me{\n  overflow-x:hidden;\n  width:45%;\n  display:block;\n }\n /* menu */\n ul.menu{\n  display:block;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  padding:100px 150px;\n  -webkit-transform:rotate(-35deg) skew(20deg, 5deg);\n  -webkit-transform-origin:left;\n }\n /* Sub menus */\n ul.menu>li{\n  text-align:center;\n  padding:10px;\n  background:#fff;\n  color: #575757;\n  box-shadow:-2em 2em 0px #444;\n  width:4em;\n  height:2.5em;\n  position:relative;\n  vertical-align:center;\n  -webkit-box-sizing:border-box;\n  -webkit-transition: all 0.5s ease;\n  font-weight:bold;\n }\n ul.menu>li:nth-child(5), ul.menu>li:first-child{\n  padding-top:0;\n }\n\n /* \n * you would have seen lots of 2d sites \n * Let me create a bit of 3D one\n */\n\n ul.menu>li::after, ul.menu>li::before{\n  content: '';\n  position: absolute;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  width: .5em;\n }\n ul.menu>li::after{\n  height: 4em;\n  background: #e1e1e1;\n  bottom: -2.25em;\n  left: 1.5em;\n  -webkit-transform: rotate(90deg) skew(0, 45deg);\n          transform: rotate(90deg) skew(0, 45deg);\n }\n ul.menu>li::before{\n  height: 2.5em;\n  background: #e1e1e1;\n  top: .25em;\n  left: -.5em;\n  -webkit-transform: skewY(-45deg);\n          transform: skewY(-45deg);\n }\n\n/*\n * designing div's\n */\n div.content{\n  position : relative;\n height:calc(50vh);\n }\n div.content div{\n  -webkit-transition:all .4s ease-out;\n  padding:20px;\n  position:absolute;\n  display: block;\n  opacity: 0;\n  color: #444;\n  background:#eee;\n  width:75%;\n }\n\n/*\n *Shadow to create illusion\n */\n div.content div{\n 	box-shadow:0px 0px 10px #000;\n }\n\n/*\n * Now even these div's are asking me to\n * get some dept\n * As they wish\n */\n .in-out{\n  -webkit-transform:perspective(2000px) rotateY(25deg) translateY(-50px);\n }\n .out-in{\n  -webkit-transform:perspective(2000px) rotateY(-25deg) translateY(-50px);\n }\n\n /*\n * filling SVG's\n */\n\n ul.menu li svg path,ul.menu li svg circle, ul.menu li svg{\n  fill:#575757;\n  -webkit-transition:fill 0.1s ease;\n }\n ul.menu>li.changeBackground svg path, ul.menu>li.changeBackground svg circle{\n  fill:#fff;\n }\n /*\n * Being different from crowd\n */\n ul.menu>li.changeBackground::before{\n  background:#b65234;\n  width:1em;\n  top:0.5em;\n  left:-1em;\n }\n ul.menu>li.changeBackground::after{\n  background:#b65234;\n  width:1em;\n  left:1em;\n  bottom:-2.5em;\n }\n ul.menu>li.changeBackground{\n   background: #ff6e42;\n  color: #fffcfb;\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #444;\n  cursor:pointer;\n }\n h1{\n  font-size:19px;\n  font-weight:lighter;\n }\n /*\n * Being social\n * Links are not active yet\n */\n ul.follow svg path{\n  -webkit-transition: all 0.4s ease-out;\n }\n .linkedin svg:hover path{\n  fill:#0077B5;\n }\n .facebook svg:hover path{\n  fill: #3b5998;\n }\n .instagram svg:hover path{\n  fill: #fb3958;\n }\n .googleplus svg:hover path{\n  fill: #d34836;\n }\n .twitter svg:hover path{\n  fill: #0084b4;\n }";
	opencomment = false;
	var styleText = document.getElementById('style-text');
	var styleTag = document.getElementById('style-tag');
	var span = document.getElementById('blinker');
	var PRE = "<em class=\"comment\">/**\n * Hola! I'm is Abhishek Singh\n * I'm a full time coder\n * That's a lie I do it sometimes\n *  \n * Let me teach you to code today\n */</em>\n\n<em class=\"comment\">/**\n * \n * Step one is to set animation property\n */</em>\n \n<span class=\"selector\"> *</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">all 1s linear</span>;\n }\n\n<em class=\"comment\">/**\n *\n * Didn't make much difference\n * we are not in 80's let's add color\n */</em>\n\n<span class=\"selector\"> html   </span> {<span class=\"property\">\n  background</span>:<span class=\"value\"> #0077B5</span>;\n }\n <em class=\"comment\">/*\n * A sec\n */</em>\n<span class=\"selector\"> pre</span> {<span class=\"property\">\n  max-height</span>:<span class=\"value\">calc(84vh)</span>;<span class=\"property\">\n  color</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  overflow</span>:<span class=\"value\">auto</span>;\n }\n\n <em class=\"comment\">/**\n *\n * Let's get organised because it's\n * always good to be organised\n */</em>\n\n<span class=\"selector\"> pre</span> {<span class=\"property\">\n  white-space</span>:<span class=\"value\">text-wrap</span>;<span class=\"property\">\n  border</span>:<span class=\"value\">1px solid #444</span>;<span class=\"property\">\n  color </span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">48%</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#FAFAFA</span>;<span class=\"property\">\n  white-space</span>:<span class=\"value\">pre-wrap</span>;<span class=\"property\">\n  overflow</span>:<span class=\"value\"> auto</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> 8px 8px 15px #444</span>;<span class=\"property\">\n  -webkit-transform </span>:<span class=\"value\"> translateX(95%)</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">absolute</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> 5%</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">right</span>;<span class=\"property\">\n  font-family</span>:<span class=\"value\"> 'Roboto Mono', monospace</span>;<span class=\"property\">\n  font-size</span>:<span class=\"value\">14px</span>;\n }\n\n <em class=\"comment\">/**\n * A bit of perspective would look great\n */</em>\n\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> perspective(1200px) rotateY(-14deg) translateX(94%)</span>;\n }\n\n <em class=\"comment\">/**\n * These texts are not readable for a coder\n * let's make them readable\n */</em>\n<span class=\"selector\"> .comment </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #857F6B</span>;<span class=\"property\"> font-style</span>:<span class=\"value\"> italic</span>; }\n<span class=\"selector\"> .selector </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #F78C6C</span>; }\n<span class=\"selector\"> .property </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #FF5370</span>; }\n<span class=\"selector\"> .value    </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #945EB8</span>; }\n\n <em class=\"comment\">/*\n * let's get to business\n * U came to see my website let's build it\n * actually i'll do it you just watch\n */</em>\n<span class=\"selector\"> div.about-me</span> {<span class=\"property\">\n  overflow-x</span>:<span class=\"value\">hidden</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">45%</span>;<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;\n }\n <em class=\"comment\">/* menu */</em>\n<span class=\"selector\"> ul.menu</span> {<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">100px 150px</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">rotate(-35deg) skew(20deg, 5deg)</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">left</span>;\n }\n <em class=\"comment\">/* Sub menus */</em>\n<span class=\"selector\"> ul.menu&gt;li</span> {<span class=\"property\">\n  text-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">10px</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #575757</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">-2em 2em 0px #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">4em</span>;<span class=\"property\">\n  height</span>:<span class=\"value\">2.5em</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">relative</span>;<span class=\"property\">\n  vertical-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  -webkit-box-sizing</span>:<span class=\"value\">border-box</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.5s ease</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">bold</span>;\n }\n<span class=\"selector\"> ul.menu&gt;<span class=\"property\">li</span>:nth-child(5), ul.menu&gt;<span class=\"property\">li</span>:first-child</span> {<span class=\"property\">\n  padding-top</span>:<span class=\"value\">0</span>;\n }\n\n <em class=\"comment\">/* \n * you would have seen lots of 2d sites \n * Let me create a bit of 3D one\n */</em>\n\n<span class=\"selector\"> ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after, ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  content</span>:<span class=\"value\"> ''</span>;<span class=\"property\">\n  position</span>:<span class=\"value\"> absolute</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s <span id=\"blinker\">|</span>linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  width</span>:<span class=\"value\"> .5em</span>;\n }\n<span class=\"selector\"> ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 4em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  bottom</span>:<span class=\"value\"> -2.25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> 1.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;\n }\n<span class=\"selector\"> ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 2.5em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> .25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> -.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> skewY(-45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> skewY(-45deg)</span>;\n }\n\n<em class=\"comment\">/*\n * designing div's\n */</em>\n<span class=\"selector\"> div.content</span> {<span class=\"property\">\n  position </span>:<span class=\"value\"> relative</span>;<span class=\"property\">\n height</span>:<span class=\"value\">calc(50vh)</span>;\n }\n<span class=\"selector\"> div.content div</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">all .4s ease-out</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">20px</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">absolute</span>;<span class=\"property\">\n  display</span>:<span class=\"value\"> block</span>;<span class=\"property\">\n  opacity</span>:<span class=\"value\"> 0</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#eee</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">75%</span>;\n }\n\n<em class=\"comment\">/*\n *Shadow to create illusion\n */</em>\n<span class=\"selector\"> div.content div</span> {\n 	<span class=\"property\">box-shadow</span>:<span class=\"value\">0px 0px 10px #000</span>;\n }\n\n<em class=\"comment\">/*\n * Now even these div's are asking me to\n * get some dept\n * As they wish\n */</em>\n<span class=\"selector\"> .in-out</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(25deg) translateY(-50px)</span>;\n }\n<span class=\"selector\"> .out-in</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(-25deg) translateY(-50px)</span>;\n }\n\n <em class=\"comment\">/*\n * filling SVG's\n */</em>\n\n<span class=\"selector\"> ul.menu li svg path,ul.menu li svg circle, ul.menu li svg</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#575757</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">fill 0.1s ease</span>;\n }\n<span class=\"selector\"> ul.menu&gt;li.changeBackground svg path, ul.menu&gt;li.changeBackground svg circle</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#fff</span>;\n }\n <em class=\"comment\">/*\n * Being different from crowd\n */</em>\n<span class=\"selector\"> ul.menu&gt;li.<span class=\"property\">changeBackground</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  background</span>:<span class=\"value\">#b65234</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">1em</span>;<span class=\"property\">\n  top</span>:<span class=\"value\">0.5em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\">-1em</span>;\n }\n<span class=\"selector\"> ul.menu&gt;li.<span class=\"property\">changeBackground</span>:<span class=\"property\"></span>:after</span> {<span class=\"property\">\n  background</span>:<span class=\"value\">#b65234</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">1em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\">1em</span>;<span class=\"property\">\n  bottom</span>:<span class=\"value\">-2.5em</span>;\n }\n<span class=\"selector\"> ul.menu&gt;li.changeBackground</span> {<span class=\"property\">\n   background</span>:<span class=\"value\"> #ff6e42</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #fffcfb</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> -2em 2em 0 #444</span>;<span class=\"property\">\n  cursor</span>:<span class=\"value\">pointer</span>;\n }\n<span class=\"selector\"> h1</span> {<span class=\"property\">\n  font-size</span>:<span class=\"value\">19px</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">lighter</span>;\n }\n <em class=\"comment\">/*\n * Being social\n * Links are not active yet\n */</em>\n<span class=\"selector\"> ul.follow svg path</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.4s ease-out</span>;\n }\n<span class=\"selector\"> .<span class=\"property\">linkedin svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#0077B5</span>;\n }\n<span class=\"selector\"> .<span class=\"property\">facebook svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #3b5998</span>;\n }\n<span class=\"selector\"> .<span class=\"property\">instagram svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #fb3958</span>;\n }\n<span class=\"selector\"> .<span class=\"property\">googleplus svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #d34836</span>;\n }\n<span class=\"selector\"> .<span class=\"property\">twitter svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #0084b4</span>;\n }";
	var STYLE = styles;
	styleText.removeChild(span);
	char = function(a){
		if(a === '/'&& !openComment){
			openComment = true;
			styles = styleText.innerHTML + a;
		}else if(a == '/' && openComment){
			openComment = false;
			styles = styleText.innerHTML.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		}else if(a == ":"){
			styles = styleText.innerHTML.replace(/([a-zA-Z- ^\n]*)$/, '<span class="property">$1</span>:');
		}else if(a == ";"){
			styles = styleText.innerHTML.replace(/([^:]*)$/,'<span class="value">$1</span>;');
		}else if(a == "{"){
			styles = styleText.innerHTML.replace(/(.*)$/, '<span class="selector">$1</span> {');
		}else{
			styles =styleText.innerHTML + a;
		}
		styleText.innerHTML = styles;
		var k = styleText.textContent;
		return styleTag.innerHTML = k;
	}
	called = true;
	writeStyle = function(message, index, interval){
		while(index< message.length){
			styleText.scrollTop = styleText.scrollHeight;
			document.getElementById('skip').onclick = function(){
				index = message.length+99999;
				skip();
				return writeStyle(message, index, interval);
			}
			char(message[index++]);
			if(called && index>message.length/2){
				called = false;
				done();
			}
			return setTimeout(function(){
				return writeStyle(message, index, interval);
			}, interval);
		}
	}
   writeStyle(styles, 0, 20);
   skip = function() {
        while (styleText.firstChild) {
            styleText.removeChild(styleText.firstChild);
        };
        styleText.innerHTML = PRE;
        while (styleTag.firstChild) {
            styleTag.removeChild(styleTag.firstChild)
        };
        styleText.appendChild(span);
        styleTag.innerHTML = STYLE;

        document.getElementsByClassName('menu')[0].childNodes[1].className = 'changeBackground';

        var div = document.getElementsByClassName('con0')[0];
        div.classList.add('in-out');
       	fadeIn(div);
    };
    done = function(){
    	document.getElementsByClassName('menu')[0].childNodes[1].className = 'changeBackground';
        var div = document.getElementsByClassName('con0')[0];
        div.classList.add('in-out');
        fadeIn(div);
        styleText.appendChild(span);
    }
	function fadeIn(el, speed) {
	    if(!el.style.opacity){
	    	el.style.opacity = "0";
	    }
	    if(!speed){
	    	speed = 400;
	    }
	    el.style.transition = "opacity "+speed/1000+"s";
	    el.style.opacity = "1";
	}
	fadeOut = function(el, speed){
		if(!speed){
			speed = 400;
		}
		el.style.transition = "opacity "+speed/1000+"s";
		if(!el.style.opacity){
			el.style.opacity = "1";
		}
		el.style.opacity = "0";
	}
	var ul = document.getElementsByClassName('menu')[0].childNodes;
	for(var i = 0;i<ul.length;i++){
		ul[i].addEventListener("mouseenter", function(){
			var li = document.getElementsByClassName('menu')[0].childNodes;
			for(var i = 0;i<li.length;i++){
				if(li[i].classList){
					li[i].classList.remove("changeBackground");
				}
			}
			var index = Array.prototype.indexOf.call(this.parentElement.children, this);
			var select = "con" + index;
			if(this.classList){
				this.classList.add("changeBackground");
			}else{
				this.className = "changeBackground";
			}
			var div = document.getElementsByClassName('content')[0].children;
			for(var i = 0;i<div.length;i++){
				if(div[i].classList){
					fadeOut(div[i]);
					div[i].classList.remove("in-out");
					div[i].classList.remove("out-in");
				}
			}
			var modify = document.getElementsByClassName(select)[0];
			if(index % 2 == 0){
				fadeIn(modify);
				if(modify.classList){
					modify.classList.add("in-out");
				}else{
					modify.className = "in-out";
				}
			}else{
				fadeIn(modify);
				if(modify.classList){
					modify.classList.add("out-in");
				}else{
					modify.className = "out-in";
				}
			}
		})
	}
}
