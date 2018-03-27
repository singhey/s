<!DOCTYPE html>
<html>
<head>
	<title>Email - Template</title>
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./index.css">
</head>
<body>
	<div class="all-wrapper">
		<header class="header">
			<img class="header-img" src="./banner.png" />
			<h2>Fashion Discovery 2.0</h2>
		</header>
		<div class="poster-holder">
			<img class="poster-img" src="./poster.jpg" />
		</div>
		<div class="reasons">
			<h2>Why do we stand out?</h2>
			<?php
				$header = array("visibility", "the fashion talk", "content driven commerce");
				$data = array("Our primary focus lies on enabling you and your brand to reach out to the world and share your journey of turning mere threads into masterpieces. Be it through videos, interviews, articles, we make sure that the world gets to know about the masterpieces you craft.", 
					"The Fashion Talk is a platform where we reach out to the world with exclusive interviews with our designers and provide a deeper look into the flagship products of the designers.",
					"We being out the story behind every product and allow the users to engage deeper with the brand. Thus, the people who want to buy the product are the ones who understand and appreciate the effort that has been put into that product. ",);

				for($i = 0; $i < sizeof($header); $i++):
			?>
				<div class="text-col border-right">
					<h3><?php echo $header[$i]; ?></h3>
					<p><?php echo $data[$i]; ?></p>
				</div>
			<?php
				endfor;
			?>
		</div>

		<div class="message">
			<p>
				Hey [Name] <br><br>
				Great to see your work the other day from Nasir. We loved every bit of it. Designers are artists who create alluring masterpieces with mere threads. However, not many are aware of what goes into bringing these ideas to life. At Fashinscoop, we showcase the stories of such brands to the world. Fashinscoop is a platform with Artificial Intelligence and content at its core<br><br>
				We believe content driven commerce is the key to adding value to your purchases. Every sale is driven by meaningful content, which might be in the form of videos or articles, and that's what makes us unique. Every product has an interesting story woven into them. We shed light on such stories and ensure that the users not only engage with the brand, but with the product as a whole.<br><br>
				Powered by Artificial Intelligence and Machine Learning at our core, we pack in a lot more than meets the eye.<br><br>
			</p>
			<div class="message-images-holder">
				<div class="message-image">
					<img src="./ai.png" />
				</div>
				<div class="message-image">
					<img src="./ai.png" />
				</div>
				<div class="message-image">
					<img src="./ai.png" />
				</div>
			</div>
		</div>

		<div class="about">
			<div class="about-text">
				<h3>
					<a href="#">A deeper look into Vidhi's collection from lfw'</a>
				</h3>
				<p>There is much of design inspiration from India on the international fashion runways these days. Various Indian designers are not only breaking out on the international stage to showcase their collections but also run their stores in several prestigious cities around the world. This year’s London Fashion Week saw Indian representation from Vidhi Wadhwani, who was also the only one from Asia to present at the prestigious show.</p>
				 <a href="#">Read More...</a>
			</div>
			<div class="about-img">
			</div>
		</div>
	</div>
	<footer>
		<ul class="links">
			<?php
				$links = array("/about/", "/contact/", "/pricing/", "/privacy/");
				$text = array("About Us", "Contact Us", "Pricing", "Privacy");
				for ($i=0; $i < sizeof($links); $i++) { 
			?>
			<li>
				<a href=<?php echo '"'.$links[$i].'"' ?> ><?php echo $text[$i] ?></a>
			</li>
			<?php
				}
			?>
		</ul>
		<div class="social-links-holder">
			<p class="social-links">
				<a href="#" title="facebook">
					<img src="./fb.png">
				</a>
				<a href="#" title="twitter">
					<img src="./twitter.png">
				</a>
				<a href="#" title="Modernizer">
					<img src="./m.png">
				</a>
				<a href="#" title="Instagram">
					<img src="./insta.png">
				</a>
			</p>
		</div>
		<p class="unsubscribe">
			<a href="#">Unsubscribe</a>
		</p>
	</footer>
</body>
</html>