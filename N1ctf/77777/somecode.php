<?php
function update_point($p, $points) {
    global $link;
    $q = sprintf("UPDATE uers SET points=%d%s", $p, waf($points));
    if(!$query = mysqli_query($link, $q)) return FALSE;
    return TRUE;
}
if(!update_point($_POST['flag'], $_POST['hi']))
    echo 'sorry';


// apache php7.0 ubuntu16.04