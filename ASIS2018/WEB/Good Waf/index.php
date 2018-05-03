<?php
session_start();

include 'waf.class.php';
Include 'config.php';

$WAF = new WAF();
$WAF->start();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


include 'header.php';

if(array_key_exists('action', $_GET)){
	$username = $_GET['credentials'][0];
	$password = $_GET['credentials'][1];

	$sql = "SELECT * FROM `credentials` where `username` = '" . $conn->real_escape_string($username) . "' AND `password` = '" . md5($password) . "'";
	$result = $conn->query($sql);

	if($result->num_rows > 0){
		echo '<b>ASIS{e279aaf1780c798e55477a7afc7b2b18}</b>';
	}else{
		echo 'Invalid Credentials.';
	}

	die;
}

if(array_key_exists('object', $_REQUEST)){
	echo '<h2>News ID: ' . (json_decode(base64_decode(htmlentities($_REQUEST['object']))))->data . ' </h2>';
	if(property_exists(json_decode(base64_decode($_REQUEST['object'])), 'data')){

	    $id = (json_decode(base64_decode($_REQUEST['object'])))->data;

	  	$sql = "SELECT * FROM `news` where `id` = '" . $id . "'";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		        echo $row['data'];
		    }
		} else {
		    echo "News not found.";
		}
	}
	$conn->close();
}else{
	echo 'GET news by object (base64(json_object)) parameter';
}

include 'footer.php';

// eyJkYXRhIjoiLTEnIHVuaW9uIHNlbGVjdCAxLDItLSAtIn0=
// eyJkYXRhIjoiMSJ9
