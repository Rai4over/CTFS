<?php
	session_start();
	include("config.php");
	if (isLogin()) 
	{
		session_destroy();
		if (isset($_COOKIE))
	    	foreach($_COOKIE as $name => $value)
	            setcookie($name, '', 1,'/');
	}
	die(Header("Location: login.php"));
?>