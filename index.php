<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="a clementine database analyzer">
	<meta name="author" content="yafp">

	<link rel="icon" href="img/favicon.ico">

	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-theme.min.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">

	<?php
	include "conf/settings.php";
	include "inc/version.php";
	echo "<title>".$appname." - ".$version." - ".$tagline."</title>";	// generate html header-title

	if (file_exists($dbpath))
	{
		// sqlite stuff - access clementine db file
		class MyDB2 extends SQLite3
		{
			function __construct()
			{
				include "conf/settings.php";
				$this->open($dbpath);
			}

		}
		$db2 = new MyDB2();

		// Show: TRACKS
		$result5 = $db2->query('SELECT COUNT(*) FROM songs WHERE unavailable !="1"');
		while ($row5 = $result5->fetchArray())
		{
			$tracks_all = $row5[0];
		}

		// Show: PLAYED
		$result6 = $db2->query('SELECT COUNT(*) FROM songs WHERE lastplayed <> "-1" and unavailable !="1"');
		while ($row6 = $result6->fetchArray())
		{
			$tracks_played = $row6[0];
			$tracks_played_ratio =  ($tracks_played/$tracks_all)*100;
		}

		// Show: ARTISTS
		$result4 = $db2->query('SELECT COUNT(DISTINCT artist) FROM songs WHERE unavailable !="1"');
		while ($row4 = $result4->fetchArray())
		{
			$overall_artists = $row4[0];
		}

		// Show: ALBUMS
		$result3 = $db2->query('SELECT COUNT(DISTINCT album) FROM songs WHERE unavailable !="1"');
		while ($row3 = $result3->fetchArray())
		{
			$overall_albums = $row3[0];
		}

		// Show: GENRES
		$result2 = $db2->query('SELECT COUNT(DISTINCT genre) FROM songs WHERE unavailable !="1"');
		while ($row2 = $result2->fetchArray())
		{
			$overall_genres = $row2[0];
		}

		// Show: PLAYTIME
		$result7 = $db2->query('SELECT SUM(length) FROM songs WHERE unavailable !="1"');
		while ($row7 = $result7->fetchArray())
		{
			$tracks_playtime = $row7[0] / 60 / 60 /24 /1000000000;
			$tracks_playtime = round($tracks_playtime, 2);
		}
		//$now = date("Ymd G:i");				// generate a timestamp
	}
	?>

	<script>
	function updateRandomPick() {
		$('#load').load('inc/updateRandomPick.php').fadeIn("slow");
	}
	</script>
</head>


<body role="document">
	<!-- NAV -->
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.php">clemStats</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="index.php"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Home</a></li>
					<li><a href="queries.php"><span class="glyphicon glyphicon-stats" aria-hidden="true"></span> Queries</a></li>
					<li><a href="tagcloud.php"><span class="glyphicon glyphicon-tags" aria-hidden="true"></span> Tagcloud</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
							<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Help
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li class="dropdown-header">Version</li>
							<li><a href="#" onclick="checkForUpdates();">clemStats v<?php echo $version;?></a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Development</li>
							<li><a href="https://github.com/yafp/clemStats/">Code</a></li>
							<li><a href="https://github.com/yafp/clemStats/issues">Issues</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!--/.NAV -->


	<!-- CONTENT -->
	<div class="container theme-showcase" role="main">
		<br>
		<br>
		<br>
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">General Library Informations <small>(<?php echo $dbpath; ?>)</small></a></h4>
				</div>
				<div id="collapse1" class="panel-collapse collapse in">
					<div class="panel-body">
						<img src="img/appLogo.png" align="right">
						<h4>
							<?php
							echo "<p>Your library comes with a total of <span>".$tracks_all." tracks</span> from <span>".$overall_artists." artists</span> with overall <span>".$overall_albums." albums</span> featuring <span>".$overall_genres." genres</span>.</p>";
							echo "<p>This sums up to an approx playtime of <span>".$tracks_playtime." days</span>.</p>";
							echo "<p>So far you listened to <span>".$tracks_played." </span> of those <span>".$tracks_all." tracks</span>.</p>";
							echo "<p>Insane isn't it?</p>";
							?>
						</h4>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Random album pick <a href="#" onclick="updateRandomPick();"><span class="glyphicon glyphicon-refresh" aria-hidden="true" style="color:orange"></span></a></a></h4>
				</div>
				<div id="collapse2" class="panel-collapse collapse in">
					<div class="panel-body">
						<!--
						<a href="#" onclick="updateRandomPick();"><span class="glyphicon glyphicon-refresh" aria-hidden="true" style="color:orange"></span></a>
					-->
					<div id="load">
						<div class="progress">
							<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%" style="color:orange">
								<span class="sr-only">45% Complete</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--/.CONTENT -->


<!-- JavaScript -->
<script type="text/javascript" language="javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" language="javascript" src="js/bootstrap.min.js"></script>
<script>
$(document).ready(function() {
	//console.log("Document ready...");
	updateRandomPick();
});
</script>
</body>
</html>
