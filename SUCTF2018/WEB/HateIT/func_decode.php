<?php
/**
 * Created by PhpStorm.
 * User: meizj
 * Date: 2018/2/2
 * Time: 下午9:25
 */
include "class.php";
define("KEY","8690475385984657");
define("method","aes-128-cfb");
define("BS",16);
define("IDENTIFY","9850375038");

function get_token(){
    $token = '';
    for($i=0;$i<16;$i++){
        $token .= chr(rand(1,255));
    }
    return $token;
}
function enc($s){
    $token = get_token();
    $code1 = openssl_encrypt(string($s),method,key,OPENSSL_RAW_DATA,$token);
    $code2 = base64_encode(base64_encode($token."-".$code1));
    return $code2;
}
function dec($s)
{
    if($cc = base64_decode(base64_decode($s)))
    {
        if($iv = substr($cc,0,16))
        {
            if($d = substr($cc,17))
            {
                if($s = openssl_decrypt($d, method, key, OPENSSL_RAW_DATA,$iv))
                {
                    return $s;
                }
                else
                    die("error");
            }
            else
                return 0;
        }
        else
            return 0;
    }
    else
        return 0;
}

function uploadImage(){
    if($_SESSION['auth'] !== "admin"){
        die("Auth Failed");
    }
    $AllowedType = array(
        "png",
        "gif",
        "jpg"
    );
    $filename = $_FILES['file']['name'];
    $filesize = $_FILES['file']['size'];
    if($filesize > 1000000){
        exit("Too large");
    }
    $fileext = substr($filename, strrpos($filename, '.')+1);
    if(in_array($fileext,$AllowedType)){
        $file = "thumbs/images/".md5(time()."admin").".".$fileext;
        if(file_exists($file)){
            exit("File existed already");
        }else{
            move_uploaded_file($_FILES['file']['tmp_name'],$file);
        }
    }else{
        exit("Not Allowed Ext");
    }
}
function viewImage($name){
    if($_SESSION['auth'] !== "admin"){
        die("Auth Failed");
    }
    new ImageView($name);
}
function showImage(){
    $obj = new Home("thumbs/images/");
    $obj->showImg();

}
function to($str) {
    return $str . str_repeat(chr(BS - strlen($str) % BS), (BS - strlen($str) % BS));
}
function re($str) {
    return substr($str, 0, -ord(substr($str, -1, 1)));
}
function getkey(){
    return KEY;
}
function get_identify(){
    return IDENTIFY;
}
function encrypt($str){
    $key = getkey();
    srand(time() / 300);
    $token = get_token();
    $cipher = bin2hex(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, to($str), MCRYPT_MODE_CFB, $token));
    return base64_encode($cipher);
}
function decrypt($str){
    $decode = base64_decode($str);
    $key = getkey();
    srand(time() / 300);
    $token = get_token();
    $bin = hex2bin($decode);
    $plain = re(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key,$bin , MCRYPT_MODE_CFB, $token));
    return $plain;
}