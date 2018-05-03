<?php

session_start();

require_once("User.php");

if (preg_match("/exec|system|passthru|`|proc_open|popen/", strtolower($_POST["method"].$_POST["text"])) != 0) {
    exit("Do you really think you could pass something to the command line? Functions like this are often disabled! Maybe have a look at the source?");
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Editor</title>
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
            echo "<a href='/logout.php'>logout</a>";
        } else {
            echo "<a href='/index.php'>login</a>";
            echo "<a href='/register.php'>register</a>";
            exit();
        }
        ?>
    </div>
    <?php
    $editedText = preg_replace_callback("/" . $_POST["regex"] . "/", function ($matches) {
        return call_user_func($_POST["method"], $matches[0]); //file_get_contents() /usr/bin/get_flag
    }, $_POST["text"]);
    if($editedText) {
        echo("<div class='alert success'>" . $editedText . "</div>");
    }
    ?>
    <form action="/editor.php" method="post">
        <select name="method">
            <option value="" disabled selected>select a method</option>
            <option value="strtoupper">to upper case</option>
            <option value="strtolower">to lower case</option>
            <option value="ucfirst">first letter to upper case</option>
        </select>
        <input placeholder="enter valid regex" type="text" name="regex">
        <textarea id="text" placeholder="enter your text here" name="text"></textarea>
        <input class="pseudo-btn" type="submit" value="submit">
    </form>
</div>
</body>
</html>

