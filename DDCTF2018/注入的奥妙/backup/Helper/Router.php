<?php
namespace Index\Helper;

use Index\Helper\Security;
use Index\Database\DbConnect;
use PDO;
use ReflectionClass;

defined('ACCESS_FILE') or exit('No direct script access allowed');
class Router
{
    private $dbc;
    private $pdo;
    private $routers;
    private $sec;

    private $default = array('/index','/');
    private $white = array('/justtry/self');


    public function __construct()
    {
        $this->dbc = new DbConnect();
        $this->sec = new Security();
        $this->pdo =  $this->dbc->getPDO();
        $sql_route='SELECT * FROM `route_rules`';
        try {
            if ($this->pdo->query($sql_route)!=false) {
                $this->routers=$this->pdo->query($sql_route)->fetchAll(PDO::FETCH_ASSOC);
                // var_dump($this->routers);
                // var_dump($this->routers_bak);
            } else {
                exit('获取路由表失败 ！'.'<hr>'.implode(' ', $this->pdo->errorInfo()));
            }
        } catch (PDOException $e) {
            die("Error!:".$e->getMessage().'<br>');
        }
    }

    public function dispatch()
    {
        $url = $_SERVER["REQUEST_URI"];
        $method = $_SERVER["REQUEST_METHOD"];

        foreach ($this->routers as $router) {
            $pattern = $router["pattern"];

            $pats = explode("*", $pattern);
            if (strcasecmp($pats[0], $method) == 0) {
                $action = $router["action"];

                // 是否与当前路由匹配
                $op = $this->checkUrl($method, strtolower($url), strtolower($pats[1]));
                //check uuid
                // var_dump($op);
                if ($op['opt'] === 1 && isset($op['param'])) {
                    //check uuid
                    if ($this->checkuuid($op['param'][0])) {
                        //去掉参数中的uuid
                        array_shift($op['param']);
                        return $this->invoke($action, $op['param']);
                    }
                }
            }
        }
        echo "404 error";
    }

    protected function invoke($action, $params)
    {
        if (!is_array($params)) {
            exit("404 error 0, bad params !".$params);
        }
        $acts = explode("#", $action);
        $className = ucfirst(strtolower($acts[0]));

        $methodName = strtolower($acts[1]);
        $actionDir = dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR."Controller";
        // spl_autoload_register(function ($className, $actionDir) {
        $classFile = $actionDir.DIRECTORY_SEPARATOR.$className.".php";
        // var_dump($classFile);
        if (!file_exists($classFile)) {
            exit("404 error 1, no class found !");
        }
        // include $classFile;

        $refcall = 'Index\Controller'.'\\'.$className;

        $rc = new ReflectionClass($refcall);
        if (!$rc->hasMethod($methodName)) {
            exit("404 error 2, no method found !");
        } else {
            $instance = $rc->newInstance();

            $method = $rc->getMethod($methodName);
            // var_dump($method);
            $method->invokeArgs($instance, $params);
        }
    }

    //校验url中的uuid
    protected function checkuuid($uuid)
    {
        if (empty($uuid) || !isset($uuid) || empty($_SERVER['HTTP_HOST'])) {
            exit('非法请求1');
        }
        // var_dump($uuid);
        $uuid=$this->sec->replaceStr($uuid);
        $sth = $this->pdo->prepare('SELECT * FROM `users` WHERE `uuid`= :uu');
        $sth->bindValue(':uu', $uuid, $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            $result = $sth->fetch($this->pdo::FETCH_ASSOC);
            if ($result['username'] == 'ctfuser') {
                return true;

            }
            exit('非法请求2');
        } else {
            exit('执行错误了！');
        }
    }

    // 正则匹配检查，并提取出参数
    private function checkUrl($method, $str, $pattern)
    {
        $params = array();
        if (strtoupper($method)=='POST') {
            foreach ($_POST as $key => $val) {
                if ($key!='r') {
                    $params[]=urldecode($val);
                }
            }
            // var_dump($params);
            $pattern = ltrim(rtrim($pattern, "/"));
            $pattern = "/".str_replace("/", "\/", $pattern)."\/?$/";
            $pattern = str_replace(":u", "([^\/]+)", $pattern);
            // echo $pattern.'<br>';
            if (preg_match($pattern, $str, $paramss) > 0) {
                array_shift($paramss);
                //合并参数
                $params = array_merge($paramss, $params);
                // var_dump($params);
                return array('opt'=>1,'param'=>$params);
            }
        }
        if (strtoupper($method)=='GET') {
            $pattern = ltrim(rtrim($pattern, "/"));

            $pattern = "/".str_replace("/", "\/", $pattern)."\/?$/";
            // echo $pattern.'[3]'.'<br>';
            $pattern = str_replace(":u", "([^\/]+)", $pattern);
            $pattern = str_replace(":s", "([^\/]+)", $pattern);
            $opt=preg_match($pattern, $str, $params);
            if ($opt > 0) {
                array_shift($params);
                return array('opt'=>$opt,'param'=>$params);
            }
        }
        return array('opt'=>0,'param'=>null);
    }
}
