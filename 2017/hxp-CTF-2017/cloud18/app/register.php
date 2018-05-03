<?php

require_once("User.php");

session_start();

?>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
<div id="page-wrap">
    <h1>cloud18 Editor - Your better development environment, in the cloud</h1>
    <p>Powerful Workspaces - All the freedom you’d expect!</p>
    <div id="menu">
        <?php
        if ($_SESSION["user"]) {
            echo "<a href='/editor.php'>editor</a>";
            echo "<a href='/logout.php'>logout</a>";
        } else {
            echo "<a href='/index.php'>login</a>";
        }
        ?>
    </div>
    <?php
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $user = (new User($_POST["username"]))->register($_POST["password"]);
        if (!$user->hasFailed()){
            echo "<div class='alert success'>registration sucessful</div>";
        }
    }
    ?>
    <form action="/register.php" method="post">
        <input placeholder="enter username" type="username" name="username">
        <input placeholder="enter password" type="password" name="password">
        <input class="pseudo-btn" type="submit" value="submit">
    </form>
</div>
</body>
</html>
