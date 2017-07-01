<!DOCTYPE html>
<?php $thisPage="directions"; ?>
<html lang="en">
	
<head>
	<title>Directions | Robeson Planetarium</title>
	<?php include('included/head.php'); ?>
	<link type="text/css" rel="stylesheet" href="styles/styles_directions.css"/>
</head>

<body>
	<div id="container">
		<?php include('included/header-nav.php'); ?>

		<div id="middlecontainer">
			<?php include('included/sidebar.php'); ?>
	 
			<div id="content">
				<h1>Directions</h1>
				<div id="directions">
				<iframe width="425" height="350" frameborder="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Robeson+Planetarium,+Caton+Road,+Lumberton,+NC,+United+States&amp;aq=0&amp;oq=Robeson+Planetarium&amp;sll=37.0625,-95.677068&amp;sspn=42.224734,79.013672&amp;ie=UTF8&amp;hq=Robeson+Planetarium,&amp;hnear=Caton+Rd,+Lumberton,+Robeson,+North+Carolina&amp;t=m&amp;ll=34.62671,-79.056973&amp;spn=0.01236,0.018239&amp;z=15&amp;output=embed"></iframe>
				
				<p>From I-95:<br />
				Take exit 17, turn onto Caton Rd. The planetarium will be about .25 mi to the west. There's a small street with parking in front of it.</p>
			</div>
				
			</div>
	
		</div> 

		<?php include("included/footer.php"); ?>
	
	</div>
</body>
	
</html>
