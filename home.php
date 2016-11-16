<!DOCTYPE html>
<?php $thisPage="home"; ?>
<html lang="en">
	
<head>
	<title>Robeson Planetarium</title>
	<?php include('included/head.php'); ?>
	<link type="text/css" rel="stylesheet" href="styles/styles_home.css"/>
	<!-- <script src="scripts/slideshow.js" type='text/javascript'></script>  -->
</head>

<body>
	<div id="container">
		<?php include('included/header-nav.php'); ?>

		<div id="middlecontainer">
			<?php include('included/sidebar.php'); ?>
	 
			<div id="content">
				<h1>Robeson Planetarium and Science Center</h1>
				
				<div id="slideshow-container">
					<div id="slides"></div>
	
				    <div id="prev">&#10094;</div>
				    <div id="next">&#10095;</div>
				    
				    <div id="pause"><i class="fa fa-pause" aria-hidden="true"></i></div>
				    
				    <div id="dots">
					</div>
				</div>
				

				<h2>What's Going On:</h2>
				<div id="news">
					<div class="story row">
						<div class="col-sm-3">
							<img src="images/news/spaceage.jpg" width="150" height="150" alt="astronaut from the show">
						</div>
						<div class="col-sm-9 text">
							<h5>Public Show - The Dawn of the Space Age</h5>
							<p>Our next public show is <strong>Saturday, October 15th at 1 pm</strong>.</p>
							<p>The show is <i>The Dawn of the Space Age</i>, and will include an update of both the Kepler and Hubble missions. This event is a part of the UN’s global outreach effort World Space Week, and is the only one of these events in North Carolina.</p>
							<p>Admission is free, but seating is limited to sixty-five per program.  Groups of ten or more are encouraged to make reservations in advance.</p>
						</div>
					</div>
					<div class="story row">
						<div class="col-sm-3">
							<img src="images/news/eclipsemap.jpg" width="150" height="150" alt="Map of the path of totality of the eclipse in NC/SC">
						</div>
						<div class="col-sm-9 text">
							<h5>Total Solar Eclipse</h5>
							<p>The Great American Eclipse is coming <strong>August 21, 2017</strong>.</p>
							<p><a href="images/news/eclipsemap_full.jpg">Click here</a> for the full-size map</p>
							<p>Read more about it <a href="http://eclipse2017.nasa.gov/">here</a> and <a href="news-eclipse.php">here</a></p>
							<p><a href="http://www.exploratorium.edu/eclipse/video/solar-eclipse-hands-safe-viewing-techniques">A safe method for viewing that's very hands-on</a></p>
						</div>
					</div>
					<div class="story row">
						<div class="col-sm-3">
							<img src="images/news/proxima_b.jpg" width="150" height="150" alt="Artist's impression of Proxima Centauri b">
						</div>
						<div class="col-sm-9 text">
							<h5>New Planet Found</h5>
							<p><a href="https://www.youtube.com/watch?v=lysJduOqads">Click here</a> to watch the announcement of a new planet found orbiting our closest neighbor.</p>
						</div>
					</div>
					<div class="story row">
						<div class="col-sm-3">
							<img src="images/news/365astronomy.jpg" width="150" height="150" alt="Logo of 365 Days of Astronomy">
						</div>
						<div class="col-sm-9 text">
							<h5>365 Days of Astronomy Podcast</h5>
							<p><a href="http://cosmoquest.org/x/365daysofastronomy/2009/03/16/march-16th/">Listen to</a> Ken Brandt's podcast for the International Year of Astronomy: How to find the directions using the Sun and shadows</p>
							<p><a href="http://cosmoquest.org/x/365daysofastronomy/">Listen to</a> today's podcast </p>
						</div>
					</div>					
				</div>

				<hr>
			
				<div id="affiliates">
					<h3>Robeson Planetarium is proudly affiliated with the following outstanding organizations:</h3>
					<p>The Southeastern Planetarium Association</p>
					<a href="http://www.sepadomes.org" style="width:225px"><img src="images/affiliate_logos/sepa.png" width="225" height="200" alt="Southeastern Planetarium Association logo"/></a>
					<p>The International Planetarium Society</p>
					<a href="http://www.ips-planetarium.org/" style="width:290px"><img src="images/affiliate_logos/ips.jpg" width="290" height="65" alt="International Planetarium Society logo"/></a>
					<p>The NC Grassroots Museums Collaborative</p>
					<a href="http://www.ncscience.org" style="width:444px"><img src="images/affiliate_logos/GrassrootsMuseums.jpg" width="444" height="85" alt="North Carolina Grassroots Museums Collaborative logo"></a>
					<p>JPL/NASA Solar System Educators</p>
					<a href="https://solarsystem.nasa.gov/ssep/" style="width:267px"><img src="images/affiliate_logos/ssep.jpg" width="267" height="61" alt="Solar System Educators Program logo"></a>
					<p>MAGMA</p>
					<a href="http://www.wncrocks.com/magma/magma.html" style="width:199px"><img src="images/affiliate_logos/magmagray.png" width="199" height="199" alt="Mountain Area Gem and Mineral Association logo"/></a>
				</div>
			</div>
	
		</div> 

		<?php include("included/footer.php"); ?>
	
	</div>
</body>
	
</html>