<?php
namespace Index\Helper;

use Index\Database\DbConnect;
use Index\Database\FLDbConnect;
use PDO;

class SQL
{
    public $dbc;
    public $pdo;

    //
    public function __construct()
    {

    }
    //
    public function SetInsert($user, $rel)
    {
        $this->dbc = new DbConnect();
        $this->pdo =  $this->dbc->getPDO();
        //TODO :CHECK UNIQUE
        $user['name']= $user['name'];
        $user['id']= $user['id'];
        // var_dump($user);
        //seriliza str
        $sth = $this->pdo->prepare('INSERT INTO `users` (`username`,`userflag`,`uuid`) VAlUES (:name,:flag,:uuid)');
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        $sth->bindValue(':flag', $rel, $this->pdo::PARAM_STR);
        $sth->bindValue(':uuid', $user['id'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {

            return array('status'=>1,'msg'=>'success');
        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }
    public function SetInsertNew($user, $rel)
    {
        $this->dbc = new DbConnect();

        $this->pdo =  $this->dbc->getPDO();

        $user['name']= $user['name'];
        $user['id']= $user['id'];

        $sth = $this->pdo->prepare('INSERT INTO `users` (`username`,`uuid`,`oldid`) VAlUES (:name,:uuid,:oldid)');
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        $sth->bindValue(':uuid', $user['id'], $this->pdo::PARAM_STR);
        $sth->bindValue(':oldid', $user['oldid'], $this->pdo::PARAM_STR);

        if ($sth->execute()) {
            $this->FlagInsert($user,$rel);
            return array('status'=>1,'msg'=>'success');

        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

    public function GetFlag($user)
    {
        $this->dbc = new DbConnect();
        $this->pdo =  $this->dbc->getPDO();
        //TODO :CHECK UNIQUE
        $user['name']= $user['name'];
        $user['id']= $user['id'];

        $sth = $this->pdo->prepare('SELECT `username`,`userflag`,`uuid` FROM `users` WHERE `username` = :name');
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            $result = $sth->fetch($this->pdo::FETCH_ASSOC);
            return array('status'=>1,'msg'=>'success','flag'=> $result['userflag']);
        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

    public function UserInsert($user)
    {
        $this->dbc = new DbConnect();
        $this->pdo =  $this->dbc->getPDO();
        //TODO :CHECK UNIQUE
        $user['name']= $user['name'];
        $user['id']= $user['id'];
        // var_dump($user);

        $sth = $this->pdo->prepare('INSERT INTO `users` (`username`,`uuid`) VAlUES (:name,:uuid)');
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        $sth->bindValue(':uuid', $user['id'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {

            return array('status'=>1,'msg'=>'success');
        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

    public function UserUUIDGet($username)
    {
        $this->dbc = new DbConnect();
        $this->pdo =  $this->dbc->getPDO();
        //TODO :CHECK UNIQUE
        $username = trim($username);
        // $user['id']= $user['id'];
        //seriliza str
        $sth = $this->pdo->prepare('SELECT `username`,`uuid` FROM `users` WHERE `username` = :name');
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            $result = $sth->fetch($this->pdo::FETCH_ASSOC);
            return array('status'=>1,'msg'=>'success','user'=> $result['uuid']);
        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

    public function FlagInsert($user, $rel)
    {
        $this->dbc = new FLDbConnect();
        $this->pdo =  $this->dbc->getPDO();

        //TODO :CHECK UNIQUE
        $user['name']= $user['name'];
        $user['id']= $user['id'];

        $sth = $this->pdo->prepare('INSERT INTO `passflag` (`uuid`,`flags`,`username`) VAlUES (:uuid,:flags,:name)');

        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        $sth->bindValue(':flags', $rel, $this->pdo::PARAM_STR);
        $sth->bindValue(':uuid', $user['id'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {

            return array('status'=>1,'msg'=>'success');
        } else {
            // var_dump($this->pdo->errorInfo());
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

    public function FlagGet($user)
    {
        $this->dbc = new FLDbConnect();
        $this->pdo =  $this->dbc->getPDO();
        //TODO :CHECK UNIQUE
        $user['name']= $user['name'];
        $user['id']= $user['id'];
        //seriliza str
        // var_dump($user);
        $sth = $this->pdo->prepare('SELECT `username`,`flags`,`uuid` FROM `passflag` WHERE `uuid` = :uuid AND `username` = :name');
        $sth->bindValue(':uuid', $user['id'], $this->pdo::PARAM_STR);
        $sth->bindValue(':name', $user['name'], $this->pdo::PARAM_STR);
        if ($sth->execute()) {
            $result = $sth->fetch($this->pdo::FETCH_ASSOC);

            return array('status'=>1,'msg'=>'success','flag'=> $result['flags']);
        } else {
            return array('status'=>0,'msg'=>implode(' ', $this->pdo->errorInfo()));
        }
    }

}
