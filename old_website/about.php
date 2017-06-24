<!DOCTYPE html>
<?php $thisPage="about"; ?>
<html lang="en">
	
<head>
	<title>About Us | Robeson Planetarium</title>
	<?php include('included/head.php'); ?>
	<link type="text/css" rel="stylesheet" href="styles/styles_about.css"/>
</head>

<body>
	<div id="container">
		<?php include('included/header-nav.php'); ?>

		<div id="middlecontainer">
			<?php include('included/sidebar.php'); ?>
	 
			<div id="content">
				<h1>About Us</h1>
				
				<img id="topimg" src="images/about_page/planetariumfront.jpg" alt="The front of the planetarium" width="530" height="299"/>
			
				<h2>Mission</h2>
				<p>Our goal is to let people know that exploring Earth and Space Science is fun!</p>
				
				<h2>History</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus molestie dui in posuere. Donec lacus odio, porta in lorem pretium, tristique auctor mauris. Morbi fermentum laoreet quam, in tempor tellus mattis vel. Cras quis turpis pretium, vestibulum urna et, molestie erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mollis dui in justo luctus, nec accumsan lectus varius. Donec consectetur venenatis ipsum a dignissim. Ut tempus libero sit amet pharetra aliquam. Mauris scelerisque justo nec tellus venenatis, eget elementum lacus dignissim. Nulla non pulvinar mauris. Integer orci arcu, rutrum vulputate volutpat ac, hendrerit eu metus. </p>
				
				<hr/>
				
				<div id="staff">
					<h2>Our Team</h2>
					
					<div class="person row">
						<div class="col-sm-3">
							<img src="images/about_page/ken.jpg" alt="Ken Brandt" height="120" width="120" class="profilepic"/>
						</div>
						<div class="col-sm-9">
							<h3>Ken Brandt, M. Ed., NBCT</h3>
							<h4>Director</h4>
							<p>Ken is the director of the Robeson Planetarium and Science Center. He is a US Navy veteran, a former high school teacher, and is Nationally Board Certified. In addition to his duties at the planetarium, he is also an astronomy lecturer at UNC-Pembroke. When he's not teaching about JPL and NASA's excellent exploration programs, he is a devoted husband and father of three wonderful daughters.</p>
							<a href='mailto:"Ken%20Brandt"%20<kenneth.brandt@robeson.k12.nc.us>'>brandtk.psrc@robeson.k12.nc.us</a>
						</div>	
					</div>
					
					<div class="person row">
						<h3>Joy Ivey</h3>
						<h4>Secretary</h4>
						<a href='mailto:"Joy%20Ivey"%20<joy.ivey@robeson.k12.nc.us>'>joy.ivey@robeson.k12.nc.us</a></p>
					</div>
					
					<div class="person row">
						<h3>Cleveland Oxendine</h3>
						<h4>Driver</h4>
					</div>
					<div class="person row">
						<h3>Dr. Elizabeth Younce</h3>
						<h4>Supervisor, Assistant Superintendent of Curriculum & Instruction</h4>
						<p class="phone">910-735-2370</p>
					</div>
				</div>
			</div>
	
		</div> 

		<?php include("included/footer.php"); ?>
	
	</div>
</body>
	
</html>
