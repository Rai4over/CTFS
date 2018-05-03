<?php
	session_start();
	include("config.php");

	if (isLogin())
		die(Header("Location: index.php"));

	$msg = "";
	if (isset($_POST["user"]) && !empty($_POST["user"]) && isset($_POST["passwd"]) && !empty($_POST["passwd"]) && isset($_POST["action"])) {
		$user = mysqli_real_escape_string($con, $_POST["user"]);
		$passwd = sha1($_POST["passwd"]);
		if ($_POST["action"] === "login") {
			$result = mysqli_query($con, "SELECT * FROM users WHERE user='$user' AND passwd='$passwd'");
			if ($result) {
				$r = mysqli_fetch_array($result);
				if ($r) {
					$_SESSION["id"] = (int)$r["uid"];
					die(Header("Location: index.php"));
				} else
					$msg = "Wrong username or password!";
			} else
				$msg = mysqli_error($con);
		} else
		if ($_POST["action"] === "register") {
			$result = mysqli_query($con, "SELECT * FROM users WHERE user='$user'");
			if ($result) {
				if (mysqli_num_rows($result)>0)
					$msg = "User is exists!";
				else {
					$result = mysqli_query($con, "INSERT INTO users VALUES (0, '$user', '$passwd')");
					if ($result)
						$msg = "Successed!";
					else
						$msg = mysqli_error($con);
				}
			} else
				$msg = mysqli_error($con);
		}
	}
	$msg = htmlentities($msg);
	
?>

<html>
	<head>
		<meta http-equiv="Content-Security-Policy" content="default-src self; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; child-src 'self'; form-action 'self'; connect-src 'self'; img-src 'self'; font-src 'self'">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>login</title>

		<link href="css/bootstrap.min.css" rel="stylesheet">
	</head>

	<body>
		<div style="text-align: center">
			<div class="col-md-4 col-md-offset-4">
				<?php 
					if (!empty($msg))
						echo "<input type='text' value='$msg' class='form-control' disabled>";
				?>
				<form action="" method="post" id="idForm" onkeypress="(event.keyCode?event.keyCode:event.which)==13?doCmd('login'):false">
					<h1>Hello</h1>
					<div class="input-group">
						<span class="input-group-addon">Username</span>
						<input type="text" class="form-control" name="user">
					</div><br>
					<div class="input-group">
						<span class="input-group-addon">Password</span>
						<input type="password" class="form-control" name="passwd">
					</div>
					<input type="hidden" id="idAction" name="action">
				</form>
				<button type="button" class="btn btn-primary" onclick="doCmd('login')">Login</button>
				<button type="button" class="btn btn-info" onclick="doCmd('register')">Register</button>
			</div>
		</div>

		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>

		<script>
			function doCmd(action) {
				$("#idAction").val(action);
				$("#idForm").submit();
			}
		</script>

	</body>

</html>