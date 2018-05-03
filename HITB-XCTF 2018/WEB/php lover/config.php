<?php
$dbhost="localhost";
$dbuser="h1tb";
$dbpass="h1tb2018";
$dbname="hitb";
$feilds=array(
    'users' => array('username','nickname','password','email'),
    'articles' => array('user_id','title','content'),
    'reports' => array('user_id','email','type_id'),
    'avatar' => array('data','user_id','filepath','photo_type')
);
?>
