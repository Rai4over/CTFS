<?php
namespace Index\Controller;

use Index\Helper\Flag;
use Index\Helper\UUID;

defined('ACCESS_FILE') or exit('No direct script access allowed');
// ini_set('display_errors', '1');
// error_reporting(E_ALL ^ E_NOTICE);
// error_reporting(E_ALL);
class Well extends Base
{
    protected $pdo;
    protected $uuid;
    protected $data=array();

    public function __construct()
    {
        parent::__construct();
        // $this->com($user);
    }
    //
    public function com($uuid)
    // public function com()
    {
        $uuid=trim(urldecode($uuid));

        $this->checkuuid($uuid);
    }

    public function getmessage($id = 1)
    {
        $this->pdo->query('SET character_set_client=binary');
        $this->pdo->query("SET NAMES 'utf8'");
        $sql_show="show variables like 'character_set_%'";
        $sql_show2='show variables like "%coll%"';


        // foreach ($this->pdo->query($sql_show) as $row) {
        //     $this->data['character_set'][]=$row['Variable_name'].'='.$row['Value']."<br>";
        // }

        // foreach ($this->pdo->query($sql_show2) as $row) {
        //     $this->data['coll_set'][]=$row['Variable_name'].'='.$row['Value']."<br>";
        // }

        $id=$this->sec->replaceStr(urldecode($id));

        $id= iconv("UTF-8", "BIG5", $id);

        if ($id===false) {
            $this->data['iconv_error'].='这个转换好像失败了呢'.'<br>';
            echo $this->tpl->resrule($this->data);
            exit();
        }


        if (!is_string($id)) {
            exit("The param is not string !");
        }

        // $sec->checkSql($id);

        $sql_inject="SELECT * FROM `message` WHERE id = '$id'";
        // var_dump($sql_inject);
        if (!is_string($sql_inject)) {
            exit("The sql is not string !".'<br>'.'<hr>');
        }

        // $this->data['sqli']= 'the sqli is : '.$sql_inject;
        $this->data['your_param']= '最后拼接的参数是  : '.$id.'<br>'.'~~~如果自己拼接的参数显示有问题了，试试浏览器的页面编码设置~~~';

        try {
            if ($this->pdo->query($sql_inject)!=false) {
                $res=$this->pdo->query($sql_inject)->fetchAll($this->pdo->FETCH_ASSOC);
                foreach ($res as $row) {
                    $this->data['rules'][]=$row['id'].':'.$row['name'].':'.$row['contents'];
                }
            } else {
                $this->data['get_error']= ' 很遗憾没有找到数据 可以试试别的 ！'.'<hr>'.implode(' ', $this->pdo->errorInfo());
                // foreach ($this->pdo->errorInfo() as $err) {
                //     $this->data[].=$err;
                // }
            }
        } catch (PDOException $e) {
            die("Error!:".$e->getMessage().'<br>');
        }

        echo $this->tpl->resrule($this->data);
    }


    public function insertmess($a, $b)
    {
        $name = strtolower($a);
        $value = $b;
        // $rulepass=md5($name);
        $sth = $this->pdo->prepare('INSERT INTO `message` (`name`,`contents`) VAlUES (:name,:contents)');
        $sth->bindValue(':name', $name, $this->pdo::PARAM_STR);
        $sth->bindValue(':contents', $value, $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            header('Content-Type:application/json');
            echo json_encode(array('status'=>1));
        } else {
            echo ' 执行错误了 ！'.'<hr>'.implode(' ', $this->pdo->errorInfo());
        }
    }

    protected function checkuuid($uuid)
    {
        if (empty($uuid) || !isset($uuid) || empty($_SERVER['HTTP_HOST'])) {
            echo '非法请求';
        }
        $uuid=$this->sec->replaceStr($uuid);
        $sth = $this->pdo->prepare('SELECT * FROM `users` WHERE `uuid`= :uu');
        $sth->bindValue(':uu', $uuid, $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            $result = $sth->fetch($this->pdo::FETCH_ASSOC);
            if ($result['username'] == 'ctfuser' ) {
                // var_dump($_SERVER['SERVER_NAME']);
                // var_dump($_SERVER['HTTP_HOST']);

                $_to="Location: http://".$_SERVER['HTTP_HOST']."/well/getmessage/1";
                // var_dump($_to);
                header($_to);
            }
            echo '非法请求2';
        } else {
            echo ' 执行错误了 ！'.'<hr>';
        }
    }
}
