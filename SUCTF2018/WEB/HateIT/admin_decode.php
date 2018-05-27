<?php
/**
 * Created by PhpStorm.
 * User: meizj
 * Date: 2018/2/2
 * Time: 下午9:38
 */
session_start();
if($_SESSION['auth']!=="admin"){
    die("Auth Failed!");
}
include "func.php";
if(isset($_GET['action'])){
    $action = $_GET['action'];
    if($action == "uploadImage"){
        include_once "template/upload.php";
        if(isset($_FILES['file'])){
            uploadImage();
        }
    }elseif ($action == "viewImage"){
        $file = isset($_GET['file'])?$_GET['file']:"23.jpg";
        viewImage($file);
    }
}


