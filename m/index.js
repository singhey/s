var Canvas = {
  el: '',
  ctx: '',
  ratio: PIXEL_RATIO,
  height: 1,
  width: 1,
  writeText: function(obj) {
    this.ctx.textAlign = obj.textAlign || 'start'
    this.ctx.font = obj.font || "14px "+Meme.fontFamily
    this.ctx.fillStyle = obj.color || '#fff'
    this.ctx.textBaseline="middle"
    this.ctx.fillText(obj.msg, obj.x, obj.y)
  },
  setDimension: function(){
    this.height = +this.el.style.height.replace("px", "")
    this.width = +this.el.style.width.replace("px", "")
  },
  drawLine: function(p1, p2){
    this.ctx.beginPath();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.strokeStyle = "#fff"
    this.ctx.stroke();
  }
}

var PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
})();


createHiDPICanvas = function(w, h, ratio) {
  if (!ratio) { ratio = PIXEL_RATIO; }
  var can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
}

var Meme = {
  text: "",
  font: 16,
  spacing: 16,
  fontFamily: 'Raleway',
  textAlign: "start",
  setState: function(obj){
    this.text = obj.text || this.text
    this.font = obj.font || this.font
    this.spacing = obj.spacing || this.spacing
    this.textAlign = obj.textAlign || this.textAlign
    lines = []
    for(var i = 0; i < this.text.split("\n").length; i++)
      lines.push(getLines(Canvas.ctx, this.text.split("\n")[i], Canvas.width - this.spacing * 2, this.font + "px " + Meme.fontFamily))
    Canvas.ctx.clearRect(0, 0, Canvas.el.width, Canvas.el.height)
    Meme.banner();
    //Canvas.drawLine({x: 0, y: Canvas.height / 2}, {x: Canvas.width, y: Canvas.height / 2});
    //console.log(lines);
    //console.log(Canvas.el.height / 2, Canvas.el.height / Canvas.ratio /2, Canvas.el.height, Canvas.el.width)
    Meme.writeLines(lines)
  
  },

  writeLines: function(lines) {
    var  lineHeight = +this.font + (this.font * .2)
    var x = this.spacing
    console.log(lineHeight, this.font, this.font * .2);
    startY = (Canvas.height / 2) - Math.floor((lines.length - 1) * lineHeight / 2);
    if(lines.length % 2 != 0){
      startY = (Canvas.height / 2) - Math.floor(lines.length / 2) * lineHeight;
    }

    if(this.textAlign == "end"){
      x = Canvas.width - this.spacing
    }else if(this.textAlign == "center") {
      x = Canvas.width / 2
    }

    for(var i = 0; i < lines.length; i++)
      Canvas.writeText({
        msg: lines[i],
        font: "lighter " + this.font + "px "+Meme.fontFamily,
        x: x,
        y: startY + i * lineHeight,
        textAlign: this.textAlign
      })
  },

  banner: function(){
    Canvas.ctx.fillStyle = "#212121"
    Canvas.ctx.fillRect(0 , 0, Canvas.el.width, Canvas.el.height)
    Canvas.writeText({
      msg: "TCT",
      x: Canvas.width / 2 ,
      y: (Canvas.height / 2 ) + 8,
      color: "rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      font: "80px "+Meme.fontFamily
    })
  
    Canvas.writeText({
      msg: "[ TCT ]",
      x: 8,
      y: Canvas.height - 16,
      color: "rgba(255, 255, 255, 0.8)",
      textAlign: "start",
      font: "14px "+Meme.fontFamily
    })

    Canvas.writeText({
      msg: "@thecheaptalkers",
      x: Canvas.width - 8,
      y: 16,
      color: "rgba(255, 255, 255, 0.8)",
      textAlign: 'end'
    })
  }
}

function getLines(ctx, phrase, maxPxLength, textStyle) {
  var wa=phrase.split(" "),
      phraseArray=[],
      lastPhrase=wa[0],
      measure=0,
      splitChar=" ";
  if (wa.length <= 1) {
      return wa
  }
  ctx.font = textStyle;
  for (var i=1;i<wa.length;i++) {
      var w=wa[i];
      measure=ctx.measureText(lastPhrase+splitChar+w).width;
      if (measure<maxPxLength) {
          lastPhrase+=(splitChar+w);
      } else {
          phraseArray.push(lastPhrase);
          lastPhrase=w;
      }
      if (i===wa.length-1) {
          phraseArray.push(lastPhrase);
          break;
      }
  }
  return phraseArray;
}

window.addEventListener('load', function() {

  //Create canvas with the device resolution.
  var myCanvas = createHiDPICanvas(window.innerWidth - 16, window.innerWidth - 16);
  var con = document.getElementById('canvas-holder')
  con.append(myCanvas)
  Canvas.el = myCanvas;
  Canvas.ctx = Canvas.el.getContext('2d')
  Canvas.ratio = PIXEL_RATIO;
  Canvas.setDimension()

  Meme.banner();
  //Canvas.drawLine({x: 0, y: Canvas.height / 2}, {x: Canvas.width, y: Canvas.height / 2});
  //add change listener to input field
  var textfield = document.getElementById('meme-text'),
    font = document.getElementById('font'),
    padding = document.getElementById('padding')

  textfield.addEventListener("keyup", function(e) {
    Meme.setState({text: e.target.value})
    //console.log(e.target.value)
  })

  font.addEventListener("keyup", function(e) {
    Meme.setState({font: e.target.value})
  })

  padding.addEventListener("keyup", function(e) {
    Meme.setState({spacing: e.target.value})
  })

  var btns = this.document.querySelectorAll(".btn")
  for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e){
      Meme.setState({textAlign: e.target.innerText.toLowerCase()})
    })
  }

}) 