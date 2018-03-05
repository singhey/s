$(function(){
  var str = ["Consulting", " Automotive Products", " Trackers"," Products for DRDO", "New & Renewable Energy Products", " CAD/CAE, Product Development"];
  var anim;
  var pos = 0;
  function writeContentForward(index, message, time) {
    if(index <= message[pos].length) {
      $('#services').html(message[pos].substring(0, index)+"<span cl");
      index++;
      anim = window.setTimeout(function(){writeContentForward(index, message, time);}, time);
    }else {
      //console.log("entered", index);
      window.setTimeout(function(){deleteContent(index, message, time);}, 2000);
    }

  }

  function deleteContent(index, message, time) {
    if(index >= 0) {
      //console.log(index, prevIndex);
      $('#services').html(message[pos].substring(0, index));
      index--;
      anim = window.setTimeout(function(){deleteContent(index, message, time);}, time);
    }else {
      pos++;
      pos = pos % message.length;
      writeContentForward(index, message, time);
    }
  }
  //console.log(str);
  $('#services').html('');
  writeContentForward(0, str, 50);

});