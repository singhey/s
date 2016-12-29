window.onload = function(){
	var openComment, styles, time, char, writeStyle;
	styles = "/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/\n\n *   {\n  -webkit-transition:all 1s linear;\n }\n\n/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/\n\n html   {\n  background: #0077B5;\n }\n\n /* \n * It will be a single page so no overflow\n */\n\n body{\n   overflow:hidden;\n }\n\n/**\n * Hold on....\n *\n **/\n\n pre  {\n  color:#fff;\n  white-space:text-wrap;\n }\n\n/** \n *Let's get organised because its always  better\n *\n **/\n\n pre  {\n  max-height:calc(84vh);\n  border:1px solid #ccc;\n  color : #444;\n  width:48%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #ccc;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n/**\n  * This looks better \n  * let's add some perspective\n  **/\n pre  {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(94%);\n }\n\n/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/\n.comment         { color: #857F6B; font-style: italic; }\n.selector        { color: #F78C6C; }\n.property        { color: #FF5370; }\n.value           { color: #945EB8; }\n\n/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */\n\ndiv.about-me{\n  overflow-x:hidden;\n  width:45%;\n  display:block;\n}\nul.menu{\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  padding:100px 150px;\n  -webkit-transform:rotate(-35deg) skew(20deg, 5deg);\n  -webkit-transform-origin:left;\n  display:block;\n}\nul.menu>li{\n  text-align:center;\n  padding:10px;\n  background:#fff;\n  color: #575757;\n  box-shadow:-2em 2em 0px #444;\n  width:4em;\n  height:2.5em;\n  position:relative;\n  vertical-align:center;\n  -webkit-box-sizing:border-box;\n  -webkit-transition: all 0.5s ease;\n  font-weight:bold;\n}\n\n/* Removing padding of first and\n * last element because they are svg\n */\n\nul.menu>li:nth-child(5), ul.menu>li:first-child{\n  padding-top:0;\n}\n\n/*To make them appear 3d becuase its nice to see */\n\nul.menu>li::after, ul.menu>li::before{\n  content: '';\n  position: absolute;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  width: .5em;\n}\nul.menu>li::after{\n  height: 4em;\n  background: #e1e1e1;\n  bottom: -2.25em;\n  left: 1.5em;\n  -webkit-transform: rotate(90deg) skew(0, 45deg);\n          transform: rotate(90deg) skew(0, 45deg);\n}\nul.menu>li::before{\n  height: 2.5em;\n  background: #e1e1e1;\n  top: .25em;\n  left: -.5em;\n  -webkit-transform: skewY(-45deg);\n          transform: skewY(-45deg);\n}\n\n/* Designing my cards to giv my details */\n\ndiv.content{\n 	position : relative;\n 	height:calc(100vh);\n}\n div.content div{\n  position : absolute;\n   -webkit-transition:all .4s ease-out;\n  padding:20px;\n  display:block;\n  opacity: 0;\n  color: #444;\n  background:#eee;\n  width:75%;\n}\n\n/**\n * A shadow to all of my div to\n * make them look better\n */\n\ndiv.content div.con0{\n  box-shadow:0px 0px 25px #B83931;\n}\ndiv.content div.con1{\n  box-shadow:0px 0px 25px #ccc;\n}\ndiv.content div.con2{\n  box-shadow:0px 0px 25px red;\n}\ndiv.content div.con3{\n  box-shadow:0px 0px 25px #800074;\n}\ndiv.con4{\n  box-shadow:0px 0px 25px #ccc;\n}\n\n/* adding perspective to my details card */\n\n.in-out{\n  -webkit-transform:perspective(2000px) rotateY(25deg) translateY(-50px);\n}\n.out-in{\n  -webkit-transform:perspective(2000px) rotateY(-25deg) translateY(-50px);\n}\n\nul.menu li svg path,ul.menu li svg circle, ul.menu li svg{\n  fill:#575757;\n  -webkit-transition:fill 0.1s ease;\n}\nul.menu>li.changeBackground svg path, ul.menu>li.changeBackground svg circle{\n  fill:#fff;\n}\n\n/**\n *Something to highlight the selected nav\n * item */\n\nul.menu>li.changeBackground{\n   background: #ff6e42;\n  color: #fffcfb;\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #444;\n  cursor:pointer;\n}\nh1{\n  font-size:19px;\n  font-weight:lighter;\n}\n\n/**\n * Let's add some transition to my soical icons\n */\n\nul.follow svg path{\n  -webkit-transition: all 0.4s ease-out;\n}\n.linkedin svg:hover path{\n  fill:#0077B5;\n}\n.facebook svg:hover path{\n  fill: #3b5998;\n}\n.instagram svg:hover path{\n  fill: #fb3958;\n}\n.googleplus svg:hover path{\n  fill: #d34836;\n}\n.twitter svg:hover path{\n  fill: #0084b4;\n}\n";
	opencomment = false;
	var styleText = document.getElementById('style-text');
	var styleTag = document.getElementById('style-tag');
	var span = document.getElementById('blinker');
	var PRE = "<em class=\"comment\">/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/</em>\n\n<span class=\"selector\"> *   </span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">all 1s linear</span>;\n }\n\n<em class=\"comment\">/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/</em>\n\n<span class=\"selector\"> html   </span> {<span class=\"property\">\n  background</span>:<span class=\"value\"> #0077B5</span>;\n }\n\n <em class=\"comment\">/* \n * It will be a single page so no overflow\n */</em>\n\n<span class=\"selector\"> body</span> {<span class=\"property\">\n   overflow</span>:<span class=\"value\">hidden</span>;\n }\n\n<em class=\"comment\">/**\n * Hold on....\n *\n **/</em>\n\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  color</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  white-space</span>:<span class=\"value\">text-wrap</span>;\n }\n\n<em class=\"comment\">/** \n *Let's get organised because its always  better\n *\n **/</em>\n\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  max-height</span>:<span class=\"value\">calc(84vh)</span>;<span class=\"property\">\n  border</span>:<span class=\"value\">1px solid #ccc</span>;<span class=\"property\">\n  color </span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">48%</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#FAFAFA</span>;<span class=\"property\">\n  white-space</span>:<span class=\"value\">pre-wrap</span>;<span class=\"property\">\n  overflow</span>:<span class=\"value\"> auto</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> 8px 8px 15px #ccc</span>;<span class=\"property\">\n  -webkit-transform </span>:<span class=\"value\"> translateX(95%)</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">absolute</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> 5%</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">right</span>;<span class=\"property\">\n  font-family</span>:<span class=\"value\"> 'Roboto Mono', monospace</span>;<span class=\"property\">\n  font-size</span>:<span class=\"value\">14px</span>;\n }\n\n<em class=\"comment\">/**\n  * This looks better \n  * let's add some perspective\n  **/</em>\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> perspective(1200px) rotateY(-14deg) translateX(94%)</span>;\n }\n\n<em class=\"comment\">/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/</em>\n<span class=\"selector\">.comment         </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #857F6B</span>;<span class=\"property\"> font-style</span>:<span class=\"value\"> italic</span>; }\n<span class=\"selector\">.selector        </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #F78C6C</span>; }\n<span class=\"selector\">.property        </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #FF5370</span>; }\n<span class=\"selector\">.value           </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #945EB8</span>; }\n\n<em class=\"comment\">/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */</em>\n\n<span class=\"selector\">div.about-me</span> {<span class=\"property\">\n  overflow-x</span>:<span class=\"value\">hidden</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">45%</span>;<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;\n}\n<span class=\"selector\">ul.menu</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">100px 150px</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">rotate(-35deg) skew(20deg, 5deg)</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">left</span>;<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;\n}\n<span class=\"selector\">ul.menu&gt;li</span> {<span class=\"property\">\n  text-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">10px</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #575757</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">-2em 2em 0px #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">4em</span>;<span class=\"property\">\n  height</span>:<span class=\"value\">2.5em</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">relative</span>;<span class=\"property\">\n  vertical-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  -webkit-box-sizing</span>:<span class=\"value\">border-box</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.5s ease</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">bold</span>;\n}\n\n<em class=\"comment\">/* Removing padding of first and\n * last element because they are svg\n */</em>\n\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:nth-child(5), ul.menu&gt;<span class=\"property\">li</span>:first-child</span> {<span class=\"property\">\n  padding-top</span>:<span class=\"value\">0</span>;\n}\n\n<em class=\"comment\">/*To make them appear 3d becuase its nice to see */</em>\n\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after, ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  content</span>:<span class=\"value\"> ''</span>;<span class=\"property\">\n  position</span>:<span class=\"value\"> absolute</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  width</span>:<span class=\"value\"> .5em</span>;\n}\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 4em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  bottom</span>:<span class=\"value\"> -2.25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> 1.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;\n}\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 2.5em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> .25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> -.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> skewY(-45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> skewY(-45deg)</span>;\n}\n\n<em class=\"comment\">/* Designing my cards to giv my details */</em>\n\n<span class=\"selector\">div.content div</span> {<span class=\"property\">\n   -webkit-transition</span>:<span class=\"value\">all .4s ease-out</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">20px</span>;<span class=\"property\">\n  display</span>:<span class=\"value\"> none</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#eee</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">75%</span>;\n}\n\n<em class=\"comment\">/**\n * A shadow to all of my div to\n * make them look better\n */</em>\n\n<span class=\"selector\">div.content div.con0</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #B83931</span>;\n}\n<span class=\"selector\">div.content div.con1</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #ccc</span>;\n}\n<span class=\"selector\">div.content div.con2</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px red</span>;\n}\n<span class=\"selector\">div.content div.con3</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #800074</span>;\n}\n<span class=\"selector\">div.con4</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #ccc</span>;\n}\n\n<em class=\"comment\">/* adding perspective to my details card */</em>\n\n<span class=\"selector\">.in-out</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(25deg) translateY(-50px)</span>;\n}\n<span class=\"selector\">.out-in</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(-25deg) translateY(-50px)</span>;\n}\n\n<span class=\"selector\">ul.menu li svg path,ul.menu li svg circle, ul.menu li svg</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#575757</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">fill 0.1s ease</span>;\n}\n<span class=\"selector\">ul.menu&gt;li.changeBackground svg path, ul.menu&gt;li.changeBackground svg circle</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#fff</span>;\n}\n\n<em class=\"comment\">/**\n *Something to highlight the selected nav\n * item */</em>\n\n<span class=\"selector\">ul.menu&gt;li.changeBackground</span> {<span class=\"property\">\n   background</span>:<span class=\"value\"> #ff6e42</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #fffcfb</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> -2em 2em 0 #444</span>;<span class=\"property\">\n  cursor</span>:<span class=\"value\">pointer</span>;\n}\n<span class=\"selector\">h1</span> {<span class=\"property\">\n  font-size</span>:<span class=\"value\">19px</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">lighter</span>;\n}\n\n<em class=\"comment\">/**\n * Let's add some transition to my soical icons\n */</em>\n\n<span class=\"selector\">ul.follow svg path</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.4s ease-out</span>;\n}\n<span class=\"selector\">.<span class=\"property\">linkedin svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#0077B5</span>;\n}\n<span class=\"selector\">.<span class=\"property\">facebook svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #3b5998</span>;\n}\n<span class=\"selector\">.<span class=\"property\">instagram svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #fb3958</span>;\n}\n<span class=\"selector\">.<span class=\"property\">googleplus svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #d34836</span>;\n}\n<span class=\"selector\">.<span class=\"property\">twitter svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #0084b4</span>;\n}\n";
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
	//writeStyle(styles, 0, 20);
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

        //$('ul.menu>li:nth-child(1)').addClass('changeBackground');
        document.getElementsByClassName('menu')[0].childNodes[1].className = 'changeBackground';
        //$('div.con0').fadeIn(300).addClass('in-out');
        var div = document.getElementsByClassName('con0')[0];
        div.classList.add('in-out');
       	fadeIn(div);
    };
    skip();
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