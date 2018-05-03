<?php

define("PHANTOM_BIN", "/phantomjs/phantomjs");
define("PHANTOM_JS", "/phantomjs/chim.js");
define("PHANTOM_SECRET", "/phantomjs/secret.txt");

function isLogin() {
	return isset($_SESSION["id"]);
}

function validLink($link) {
	return preg_match("/^https?:\/\//is", $link);
}

function filterLink($link) {
	$nosql = array("'", "\"", "`");
	return str_replace($nosql, "", $link);
}

if (isset($_COOKIE["secret"]) && $_COOKIE["secret"] === file_get_contents(PHANTOM_SECRET) && !isLogin())
	$_SESSION["id"] = 1;

$con = mysqli_connect("localhost", "root", "", "injection");
if (mysqli_connect_errno())
  die("Cannot connect database");
mysqli_query($con, "SET sql_mode=ANSI");

?>