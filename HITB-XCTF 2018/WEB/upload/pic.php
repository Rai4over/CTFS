<?php
$path="./87194f13726af7cee27ba2cfe97b60df/";
if(list($width, $height) = @getimagesize($path.$_GET['filename'])){
    echo "width=$width</br>";
	echo "height=$height";
}else {
    echo "image error";
}
?>
