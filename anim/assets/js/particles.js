$(function() {

	var canvas = document.getElementById("particles"),
		ctx = canvas.getContext('2d');

	var particles = [],
		particleCount = 30;

	var Particle = function(x, y) {
		this.x = x;
		this.y = y;
		this.r = 2 + Math.floor(Math.random() * 2);
		this.intensity = Math.round(Math.random() * 100 )/100;
		this.maxSpeed = 0.2;
		this.ySpeed = (0.1 + Math.round(Math.random() * this.maxSpeed * 100 )/100);
		this.xSpeed = (0.1 + Math.round(Math.random() * this.maxSpeed * 100 )/100);
		//var p = Math.random() < 0.5 ? -1 : 1
		this.ySpeed *= Math.random() < 0.5 ? -1 : 1;
		this.xSpeed *= Math.random() < 0.5 ? -1 : 1;

		this.update = function() {

			if(this.x< 0 || this.x > canvas.width){
				this.calculateProperties();
				this.xSpeed *= -1;
			}
			if(this.y < 0 || this.y > canvas.height){
				//console.log(this);
				this.calculateProperties();
				this.ySpeed *= -1;
			}

			this.x += this.xSpeed;
			this.y += this.ySpeed;
		}

		this.calculateProperties = function() {
			this.intensity = Math.round(Math.random() * 100 )/100;
			//this.ySpeed = (Math.round(Math.random() * 3 * 100 )/100);
			//this.xSpeed = (Math.round(Math.random() * 3 * 100 )/100);
		}
		this.calculateProperties();
	}

	function initParticles() {
		for(let i = 0; i< particleCount; i++) {
			particles.push(new Particle(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
			//console.log(particles[i]);
		}
	}



	function draw() {

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for(let i = 0; i < particles.length; i++) {
			ctx.fillStyle = "rgba(150, 150, 150, "+particles[i].intensity+")";
			ctx.beginPath();
			ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, 2*Math.PI);
			ctx.fill();
			particles[i].update();
		}

		window.requestAnimationFrame(draw);
	}


	function fitCanvas() {
		canvas.width = $(window).width();
		canvas.height = $(window).height();
	}

	$(window).resize(function(){
		fitCanvas();
	});

	fitCanvas();
	initParticles();
	draw();
});