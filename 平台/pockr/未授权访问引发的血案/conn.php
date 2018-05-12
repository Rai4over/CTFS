<?php
try {
    $conn = new PDO('mysql:host=sql05.ciadmin.com;port=3306;dbname=five_admindb','ciadmin','mysql_2018');
    $rows = $conn->query('SELECT 1')->fetchAll(PDO::FETCH_ASSOC);
    var_dump($rows);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>