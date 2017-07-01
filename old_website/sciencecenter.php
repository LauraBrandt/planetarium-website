<!DOCTYPE html>
<?php $thisPage="sciencecenter"; ?>
<html lang="en">
	
<head>
	<title>Science Center | Robeson Planetarium</title>
	<?php include('included/head.php'); ?>
	<link type="text/css" rel="stylesheet" href="styles/styles_sciencecenter.css"/>
</head>

<body>
	<div id="container">
		<?php include('included/header-nav.php'); ?>

		<div id="middlecontainer">
			<?php include('included/sidebar.php'); ?>
	 
			<div id="content">
				<h1>Science Center</h1>
				<p id="intro">Attached to the planetarium is our science center, where we're always introducing new fun, interactive exhibits that the students can play with while learning cool science at the same time! See what our current exhibits are below.</p>
				<div class='row' id='all-exhibits'>
					<!--<div class='exhibit col-sm-6 col-md-4'>
						<h4></h4>
						<img>
						<p class='description'></p>
					</div>-->
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Magnets</h4>
						<img src="images/sciencecenter/magnet.svg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Building Robots</h4>
						<img src="images/sciencecenter/asimo_robot.jpg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Mineral and Rock ID</h4>
						<img src="images/sciencecenter/quartz.jpg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Mechanical to Electrical Energy</h4>
						<img src="images/sciencecenter/bike_bulb-1.jpg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Colors and Light</h4>
						<img src="images/sciencecenter/color.svg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Building Telescopes</h4>
						<img src="images/sciencecenter/telescope.jpg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Rocks and Minerals of Mars</h4>
						<img src="images/sciencecenter/adirondack.jpg">
						<p class='description'></p>
					</div>
					<div class='exhibit col-sm-6 col-md-4'>
						<h4>Planetary Globes: Similarities and Differences</h4>
						<img src="images/sciencecenter/globes-1.jpg">
						<p class='description'></p>
					</div>
				</div>
			</div>
	
		</div> 

		<?php include("included/footer.php"); ?>
	
	</div>
</body>
	
</html>
