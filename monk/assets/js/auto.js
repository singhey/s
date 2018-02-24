$(function(){
	$('#auto-text').append("<pre></pre>");

	var style = ".span{\n  height:100px;\n  width:200px;\n  background-color:#2ae; \n }\n .div{\n font-size:8px;\n  width: 200px;\n  height: 120px;\n  margin: auto;\n  background: #2ae;\n  transform: scale(1.5);\n  position:relative;\n  border: 5px #efefef solid;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n }\n\n\n";

	openComment = false;
	writeStyleChar = function(which) {
    // begin wrapping open comments
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#auto-text pre').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#auto-text pre').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    // wrap style declaration
    } else if (which === ':') {
      styles = $('#auto-text pre').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    // wrap style value 
    } else if (which === ';') {
      styles = $('#auto-text pre').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    // wrap selector
    } else if (which === '{') {
      styles = $('#auto-text pre').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#auto-text pre').html() + which;
    }
    $('#auto-text pre').html(styles);
  };

  writeStyles = function(message, index, interval) {
      if (index < message.length) {
      writeStyleChar(message[index++]);
      //console.log("called");
      var pre = document.getElementById('auto-text');
      pre.scrollTop = pre.scrollHeight;
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }else {
    	$('.laptop').addClass('closed');
    	window.setTimeout(function(){
    		$('.laptop').removeClass('closed');
    		$('#auto-text pre').html('');
    		writeStyles(style, 0, time);
    	}, 4000);
    }
  };
  time = 50;
  writeStyles(style, 0, time);


  //move pen of content
  function beginContentAnimation() {
  	$(".lines li").removeClass("transition-begin");
  	$('.pen').removeClass("active");
  	window.setTimeout(function() {
  		$('.pen').addClass("active");
  		$(".lines li").addClass("transition-begin");
  	}, 400);
  }

  window.setInterval(function(){beginContentAnimation();}, 12000);
  beginContentAnimation();
});