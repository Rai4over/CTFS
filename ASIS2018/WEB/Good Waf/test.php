<?php
$a = array("data" => "\'or(1=1)");
var_dump(json_encode($a));
$b = '{"data":"\\\'or(1=1)"}';
var_dump(json_decode($b));