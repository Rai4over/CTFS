<!DOCTYPE html>
<html>
<head>
    <title>Logout</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
<div id="page-wrap">
    <h1>cloud18 Editor - Your better development environment, in the cloud</h1>
    <p>Powerful Workspaces - All the freedom you’d expect!</p>
    <div id="menu">
        <a href="/index.php">login</a>
        <a href="/register.php">register</a>
    </div>
    <?php

    session_start();

    $_SESSION = array();

    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 3600, $params["path"],
            $params["domain"], $params["secure"], $params["httponly"]
        );
    }

    session_destroy();

    echo "<div class='alert success'>logout sucessful</div>";
    ?>
</div>
</body>
</html>
