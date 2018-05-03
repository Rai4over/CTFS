<?php
session_start();
include("config.php");
header("Content-type: text/plain");

if (!isLogin())
	die("You must login");

if (isset($_GET["url"])) {
	$uid = (int)$_SESSION["id"];
	$url = $_GET["url"];
	if (validLink($url)) {
		$link = mysqli_real_escape_string($con, $url);
		if (mysqli_num_rows(mysqli_query($con, "SELECT * FROM links WHERE uid=$uid AND link='$link'"))>0)
			die(file_get_contents($url));
		else
			die("This link is not belong to you");
	}
}
die("Not valid");

?>