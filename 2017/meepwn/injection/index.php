<?php
	session_start();
	include("config.php");

	if (!isLogin())
		die(Header("Location: login.php"));

	$page = "link";
	if (isset($_GET["page"]))
		$page = $_GET["page"];

	$uid = (int)$_SESSION["id"];
	$r = mysqli_fetch_array(mysqli_query($con, "SELECT * FROM users WHERE uid=$uid"));
	$user = $r["user"];

	$msg = "";
	if (isset($_POST["auto"]) && !empty($_POST["auto"])) {
		$link = $_POST["auto"];
		if (validLink($link)) {
			$link = filterLink($link);
			$out = shell_exec(PHANTOM_BIN." ".PHANTOM_JS." ".escapeshellarg($link));
			if (empty($out)) 
				$msg = "Bot rejected - ".htmlentities($link);
			else 
				$msg = "Mmmm...";
		} else
			$msg = "Invalid URL!";
	} 
	elseif (isset($_POST["manual"]) && !empty($_POST["manual"])) {
		$link = $_POST["manual"];
		if (validLink($link)) {
			$link = filterLink($link);
			$link = mysqli_real_escape_string($con, $link);
			$result = mysqli_query($con, "SELECT * FROM links WHERE link='$link' AND uid=$uid");
			if ($result) {
				if (mysqli_num_rows($result)>0)
					$msg = "Your link is already in pending list";
				else {
					$result = mysqli_query($con, "INSERT INTO links VALUES (0, $uid, '$link', 0, 0)");
					if ($result) {
						$msg = "Added! I will check later";
					} else
						$msg = mysqli_error($con);
				}
			} else
				$msg = mysqli_error($con);
		} else
			$msg = "Invalid URL!";
	}
	$msg = htmlentities($msg);
?>

<html>
	<head>
		<meta http-equiv="Content-Security-Policy" content="default-src self; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; child-src 'self'; form-action 'self'; connect-src 'self'; img-src 'self'; font-src 'self'">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Injection Checker</title>

		<link href="css/bootstrap.min.css" rel="stylesheet">
	</head>

	<body>
		<div class="container">
			<div class="alert alert-success" role="alert">Hello <span class="label label-primary"><?php echo htmlentities($user); ?></span>. <a href="logout.php">Click me for more information!</a></div>
			<ul id="menu" class="nav nav-tabs nav-justified">
				<li id="link"><a href="?page=link">Your links</a></li>
				<li id="manual"><a href="?page=manual">Manual check</a></li>
				<li id="auto"><a href="?page=auto">Auto check</a></li>
			</ul>
			
			<div id="plink" class="panel panel-default" style="display: none">
				<div class="panel-body"> 
					<table class="table table-striped" style="word-break: break-word">
						<thead>
							<tr>
								<th>ID</th> 
								<th>Link</th> 
								<th>Hit count</th> 
								<th>Validated</th> 
							</tr>
						</thead> 
						<tbody> 
							<?php
								$result = mysqli_query($con, "SELECT * FROM links WHERE uid=$uid ORDER BY lid DESC");
								while ($r = mysqli_fetch_array($result)) {
									$lid = (int)$r["lid"];
									$link = htmlentities($r["link"]);
									$count = (int)$r["count"];
									$state = (int)$r["state"]===0?"Pending":"Checked";
									echo "
									<tr>
										<th class='col-md-1'>$lid</th> 
										<td class='col-md-9'><a href='raw.php?url=$link' target='_blank'>$link</a></td> 
										<td class='col-md-1'>$count</td> 
										<td class='col-md-1'>$state</td> 
									</tr>";
								}
							?>
						</tbody>
					</table> 
				</div>
			</div>

			<div id="pmanual" class="panel panel-default" style="display: none">
				<form class="panel-body" action="" method="post"> 
					<h4>Enter URL you want me to check</h4>
    				<input type="text" class="form-control" autofocus placeholder="URL" name="manual"><br>
    				<button type="submit" class="btn btn-info">Add To List</button><br><br>
    				<?php
						if (!empty($msg))
							echo "<input type='text' value='$msg' class='form-control' readonly>";
					?>
    			</form>
			</div>

			<div id="pauto" class="panel panel-default" style="display: none">
				<form class="panel-body" action="" method="post"> 
					<h4>Automatic checker</h4>
    				<input type="text" class="form-control" placeholder="URL" name="auto"><br>
    				<button type="submit" class="btn btn-info">Robot Test</button><br><br>
    				<?php
						if (!empty($msg))
							echo "<input type='text' value='$msg' class='form-control' readonly>";
					?>
    			</form>
			</div>


		</div>

		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>

		<script>
			page = "<?php echo htmlentities($page); ?>";
			$(document).ready(function () {
				$("#" + page).addClass("active");
				$("#p" + page).fadeIn();
			});
		</script>

	</body>

</html>