<div id='header'>	
	<a href='home.php'><img src='../images/planetariumlogo.jpg' alt='Planetarium Logo' width='576' height='188'></a>
	<a href='http://www.robeson.k12.nc.us/'><img src='../images/psrclogo_resized.png' alt='Public Schools of Robeson County Logo' height='145' width='166'></a>
	<form class='form-inline' id='search'>
		<div class='form-group'>
			<input type='text' class='form-control' id='search-input' placeholder='Search the site...' autocomplete='off'>
		</div>
		<button type='submit' class='btn btn-default'><i class='fa fa-search'></i></button>
	</form>
</div>

<nav class='navbar navbar-default' id='navbar'>		
	<ul class='nav navbar-nav'>
		<li<?php if ($thisPage=="home") echo " class=\"current\""; ?>>
			<a href='home.php'>Home</a>
		</li>
		<li<?php if ($thisPage=="calendar") echo " class=\"current\""; ?>>
			<a href='calendar.php'>School Calendar</a>
		</li>
		<li<?php if ($thisPage=="shows") echo " class=\"current\""; ?>>
			<a href='shows.php'>Public Shows</a>
		</li> 
		<li<?php if ($thisPage=="resources") echo " class=\"current\""; ?>>
			<a href='resources.php'>Resources</a>
		</li> 
		<li<?php if ($thisPage=="sciencecenter") echo " class=\"current\""; ?>>
			<a href='sciencecenter.php'>Science Center</a>
		</li> 
		<li<?php if ($thisPage=="about") echo " class=\"current\""; ?>>
			<a href='about.php'>About Us</a>
		</li> 				
	</ul>
</nav>