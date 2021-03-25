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
  font: 18,
  spacing: 24,
  fontFamily: 'Raleway',
  textAlign: "start",
  background: "#212121",
  setState: function(obj){
    this.text = obj.text || this.text
    this.font = obj.font || this.font
    this.spacing = obj.spacing || this.spacing
    this.textAlign = obj.textAlign || this.textAlign
    lines = []
    for(var i = 0; i < this.text.split("\n").length; i++){
      var d = getLines(Canvas.ctx, this.text.split("\n")[i], Canvas.width - this.spacing * 2, this.font + "px " + Meme.fontFamily)
      lines = lines.concat(d)
      //console.log(lines)
    }
    Canvas.ctx.clearRect(0, 0, Canvas.el.width, Canvas.el.height)
    Meme.banner();
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

    //console.log(Meme)

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
    Canvas.ctx.fillStyle = Meme.background
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


function createItem(color){
  return `
    <div class="color-label" style="background: ${color.colors[0]}" ripple>
      <span class="color-title" key="${color.label}">${color.label}</span>
    </div>
  `
}
var colors = [
  {label: 'Grey', colors: ['#9e9e9e', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121']}, 
  {label: 'Red', colors: ['#f44336', '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000']}, 
  {label: 'Pink', colors: ['#e91e63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162']}, 
  {label: 'Purple', colors: ['#9c27b0', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff']}, 
  {label: 'Deep Purple', colors: ['#673ab7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea']}, 
  {label: 'Indigo', colors: ['#3f51b5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe']}, 
  {label: 'Blue', colors: ['#2196f3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff']}, 
  {label: 'Light Blue', colors: ['#03a9f4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea']}, 
  {label: 'Cyan', colors: ['#00bcd4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4']}, 
  {label: 'Teal', colors: ['#009688', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5']}, 
  {label: 'Green', colors: ['#4caf50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853']}, 
  {label: 'Light Green', colors: ['#8bc34a', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17']}, 
  {label: 'Lime', colors: ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00']}, 
  {label: 'Yellow', colors: ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600']}, 
  {label: 'Amber', colors: ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00']}, 
  {label: 'Orange', colors: ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00']}, 
  {label: 'Deep Orange', colors: ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00']}, 
  {label: 'Brown', colors: ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723']}, 
  {label: 'Blue Grey', colors: ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238']}, 

]
function generateColorCatalogue(){
  var holder = document.querySelector(".color-names")
  for(let i = 0; i < colors.length; i++){
    holder.innerHTML += createItem(colors[i])
  }
  //console.log(holder)
}
var Ripple = {
  init: function(){
    var el = document.querySelectorAll('[ripple]');
    //console.log(el);
    Array.prototype.forEach.call(el, function(b){
      b.addEventListener('click', Ripple.addRipple);
    });
  },
  addRipple: function(e){
    var ripple = document.createElement("ripple");
    d = Math.max(this.clientWidth, this.clientHeight);
    ripple.style.height = ripple.style.width = d+'px';
    ripple.style.left = e.offsetX - d/2+'px';
    ripple.style.top = e.offsetY - d/2+'px';
    this.appendChild(ripple);
    window.setTimeout(function(){ripple.remove();}, 600);
  }
};

function colorSelected(color){
  Meme.background = color
  Meme.setState({})
  document.querySelector(".color-layer").classList.remove("visible")
}

function renderColors(color){
  var container = document.querySelector('.colors')
  container.innerHTML = ""
  for(let i = 0 ; i < color.colors.length; i++) {
    container.innerHTML += `<div class="color-block" style="background-color: ${color.colors[i]}" onclick="colorSelected('${color.colors[i]}')" ripple></div>`
  }
  Ripple.init()
  //console.log(container)
}

function addColorListeners(){
  var items = document.querySelectorAll(".color-label")
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(e){
      let key = e.target.getAttribute("key")
      for(let i = 0; i < colors.length ; i++){
        //console.log()
        if(key === colors[i].label){
          renderColors(colors[i])
          return 
        }
      }
      
    })
  }
}

function selectDraft(index) {
  var a = localStorage.getItem("draft")
    if(a === null){
      a = [{primary: "No draft yet", secondary: "Write one"}]
    }else {
      a = JSON.parse(a)
    }
  var item = a[index-1]

  Meme.setState({text: item.primary, font: item.font, spacing: item.spacing})
  document.querySelector("#close-draft").click()
  var textfield = document.getElementById('meme-text'),
  font = document.getElementById('font'),
  padding = document.getElementById('padding')

  textfield.value = item.primary
  font.value = item.font
  padding.value = item.spacing

}

function draftListItem(index, title, secondary){
  return `<li ripple ripple-dark onclick="selectDraft(${index})">
    <span class="draft-index">${index}</span>
    <div class="text-container">
      <span class="draft-title"> ${title.substr(0, 40)}</span>
      <span class="draft-secondary">${secondary}</span>
    </div>
  </li>`
}

function renderDraft(data){
  var list = document.querySelector(".draft-list")
  list.innerHTML = ""
  for(let i = 0; i < data.length; i++){
    list.innerHTML += draftListItem(i+1, data[i].primary, data[i].secondary)
  }
  Ripple.init()
}

window.addEventListener('load', function() {

  //Create canvas with the device resolution.
  var myCanvas = createHiDPICanvas(window.innerWidth, window.innerWidth);
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

  // var btns = this.document.querySelectorAll(".orange")
  // for(var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener('click', function(e){
  //     Meme.setState({textAlign: e.target.innerText.toLowerCase()})
  //   })
  // }

  var select = document.querySelector("[name=text-align]")
  select.addEventListener("change", function(e){
    Meme.setState({textAlign: e.target.value})
  })

  var color = document.querySelector(".color-icon")
  color.addEventListener('click', function(e){
    document.querySelector(".color-layer").classList.add("visible")
  })

  var close = document.querySelector("#close")
  close.addEventListener("click", function(e){
    document.querySelector(".color-layer").classList.remove("visible")
  })
  generateColorCatalogue()
  addColorListeners()

  var viewDraft = document.querySelector("#view-draft")
  viewDraft.addEventListener("click", function(e){
    document.querySelector(".draft-layer").classList.add("visible")
    var a = localStorage.getItem("draft")
    if(a === null){
      a = [{primary: "No draft yet", secondary: "Write one"}]
    }else {
      a = JSON.parse(a)
    }
    renderDraft(a)
  })

  var closeDraft = document.querySelector("#close-draft")
  closeDraft.addEventListener("click", function(e){
    document.querySelector(".draft-layer").classList.remove("visible")
  })

  //save draft
  document.querySelector("#save-draft").addEventListener("click", function(e){
    if(Meme.text.length === 0){
      return
    }

    let tobeSaved = {
      primary: Meme.text,
      secondary: new Date().toString().substr(0, 24),
      font: Meme.font,
      spacing: Meme.spacing 
    }

    console.log(tobeSaved)

    var a = localStorage.getItem("draft")
    if(a === null){
      a = []
    }else {
      a = JSON.parse(a)
    }
    //console.log(a)
    a.unshift(tobeSaved)
    if(a.length > 30){
      a = a.slice(0, 30)
    }
    localStorage.setItem('draft', JSON.stringify(a))
    message.classList.add("visible")
    message.innerText = "Draft saved"
    window.setTimeout(function(){
      let message = document.querySelector(".message")
      message.classList.remove("visible")
    }, 2000)
  })

  //renderDraft([{primary: "Hello", secondary: "Hey"}])

  downloader = this.document.getElementById('downloader');
  downloader.addEventListener('click', download);
  Ripple.init();
}) 

function download() {
  //e.preventDefault();
  document.getElementById("downloader").download = Date.now()+"_tct.jpeg";
  console.log("hello")
  document.getElementById("downloader").href = document.querySelector("canvas").toDataURL("image/jpg");
}
