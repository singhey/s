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