
<?php
/**
 * Created by PhpStorm.
 * User: meizj
 * Date: 2018/1/26
 * Time: 下午11:54
 */
if(!isset($_SESSION)){
    session_start();
}
echo "
------*********----**-------**----*************-----*************-----********<br>
------*********----**-------**----*************-----*************-----********<br>
----**------------**-------**----**------------------**----------**-------<br>
----**------------**-------**----**------------------**----------**-------<br>
------*********----**-------**----**------------------**----------********<br>
------*********----**-------**----**------------------**----------********<br>
-------------**---**-------**----**------------------**----------**-------<br>
-------------**---**-------**----**------------------**----------**-------<br>
------*********-----**********-----**************--------**----------**-------<br>
------*********-----**********-----**************--------**----------**-------<br>
";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form method="GET">
    <input type="text" name="username">
    <input type="submit">
</form>
<br><br><br><br><br><br><br><br>
</body>
</html>
<?php
include_once "func.php";

if(isset($_GET['username'])){
    $username = $_GET['username'];
    $md5 = md5(get_identify().$username);
    $admin = 0;
    $token = encrypt("$username|$admin|$md5");
    $_SESSION['sign'] = $md5;
    $_SESSION['token']= $token;
}
showImage();
if(isset($_GET['token']) && isset($_GET['sign'])){
    $token = $_GET['token'];
    $sign = $_GET['sign'];
    echo "sign : " . $sign."<br>\n";
        echo "token: " . $token."<br>\n";
    $info = explode("|", decrypt($token));
    echo decrypt($token);
    var_dump($info);
    if (count($info) == 3) {
        if (md5(get_identify() . $info[0]) == $info[2] && $sign = $info[1]) {
            $admin = (int)$info[1];
        } else {
            die();
        }
    } else {
        die();
    }
}elseif(isset($_SESSION['token'])  ){
    if(isset($_SESSION['sign'])) {
        echo "sign : " . $_SESSION["sign"]."<br>\n";
        echo "token: " . $_SESSION['token']."<br>\n";
        $token = $_SESSION['token'];
        $sign = $_SESSION['sign'];
        $info = explode("|", decrypt($token));
        if (count($info) == 3) {
            if (md5(get_identify() . $info[0]) == $info[2] && $sign = $info[1]) {
                $admin = (int)$info[1];
                echo "<br>".$admin;
            } else {
                die();
            }
        } else {
            die();
        }
    }
}
if(isset($admin)){
    if($admin == 3 ){
        $_SESSION['auth'] = "admin";
        echo "<a href='admin.php'>Admin</a>";
    }
}
