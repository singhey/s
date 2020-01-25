var colors = ['#574FFF', '#BC49FF']

var Canvas = {

  height: 100,
  width: 100,
  el: null,

  pixelRatio: function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;
  
    return dpr / bsr;
  },
  
  createHiDPICanvas: function(w, h, ratio) {
    if (!ratio) { ratio = this.pixelRatio() }
    console.log("", ratio)
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
  },

  create: function(width, height, parent){
    this.el = this.createHiDPICanvas(width, height)
    this.height = height
    this.width = width
    this.ctx = this.el.getContext('2d')
    parent.append(this.el)
  },
  drawDot: function(point, radius) {
    //console.log("Drawing point", point)
    this.ctx.beginPath()
    this.ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.fillStyle = colors[0]
    this.ctx.fill()
    //ctx.fillText(point.x+" "+point.y, point.x + 20, point.y)
    //drawLine(ctx, {x: window.innerWidth / 2, y: window.innerHeight / 2}, point)
  },
  drawCircle: function(center, radius){
    this.ctx.beginPath()
    this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI)
    this.ctx.stroke()
  },
  drawLine: function(p1, p2){
    this.ctx.beginPath();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.strokeStyle = colors[0]
    this.ctx.stroke();
  }
}

function getPointOnCircle(count, radius, center){

  increments = Math.PI * 2 / count
  points = []
  for(var i = 0; i < count; i++) {
    points.push({
      x: Math.round((center.x + radius * Math.sin(increments * i)) * 100) / 100,
      y: Math.round((center.y + radius * Math.cos(increments * i)) * 100) / 100
    })
  }
  return points
}

var count = 200
var number = 0
var direction = 1
var timeout = 50
var radius = Math.min(window.innerHeight - 20, window.innerWidth - 20) / 2
console.log(radius)

function draw(){

  //console.log(Canvas.ctx)

  var ctx = Canvas.ctx
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  
  //return
  Canvas.drawCircle({x: window.innerWidth / 2, y: window.innerHeight / 2}, radius)
  points = getPointOnCircle(count, radius, {x: window.innerWidth / 2, y: window.innerHeight / 2})
  for(var i = 0; i < points.length; i++) {
    Canvas.drawDot( points[i], 2)
  }

  for(var i = 1; i < count;i++) {
    Canvas.drawLine(points[i], points[Math.round(i * number)% count])
  }

  ctx.font = '24px sans-serif'
  ctx.fillStyle = '#fff'
  ctx.fillText("Lines: "+count, window.innerWidth - 200, 50)
  ctx.fillText("Multiplier: "+number, window.innerWidth - 200, 100)
  number = Math.round((number + 0.01) * 100)/100
  //number+=1
  window.requestAnimationFrame(draw)
  //window.setTimeout(function(){draw()}, 3000)
}
