<?php
include('oshit.php');
$g_s = ['admin','oloco'];
$b = $_POST['b'];
$_p = 1;
if(isset($_GET['source'])){
    highlight_file(__FILE__);
        exit;
}
if($b === $g_s & $b[0] != 'admin'){
    $x = $_GET['x'];
    $__dfi = $_GET;
    foreach($__dfi as $key => $value){
        if($key == $k_Jk){
            $f = 1;
        }
        if($f && strlen($x)>17 && $_p == 3){
            $k_Jk($value,$key); //my shell :)
        }
        $_p++;
    }
}else{    
    echo "noob!";
}
