<?php
namespace Index;


use Index\Helper\Response;
use Index\Helper\Security;
use Index\Helper\Router;



define('ACCESS_FILE', 1);
define('BASE_DIR', __DIR__);
define('STATIC_PATH', BASE_DIR.DIRECTORY_SEPARATOR.'static');
define('TPL_PATH', BASE_DIR.DIRECTORY_SEPARATOR.'templete');
ini_set('display_errors', '1');
error_reporting(E_ALL);
require_once __DIR__.'/vendor/autoload.php';




$sec=new Security();
$res=new Response();
$r=new Router();

// var_dump($_SERVER["REQUEST_URI"]);
// $_POST=$sec->xssClean($_POST);
// $_GET=$sec->xssClean($_GET);
$_COOKIE=$sec->xssClean($_COOKIE);
$_REQUEST=$sec->xssClean($_REQUEST);



$r->dispatch();
