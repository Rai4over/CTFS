<?php
error_reporting(E_ALL & ~E_DEPRECATED);
$con = mysql_pconnect("mysql",$_ENV['MYSQL_USER'],$_ENV['MYSQL_PASSWORD']);
if(!$con)
{
   die('error'.mysql_error());
}
mysql_select_db($_ENV['MYSQL_DATABASE']);