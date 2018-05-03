<?php
namespace Index\Database;
use Index\Database\DbConfig;
use \PDO;

defined('ACCESS_FILE') or exit('No direct script access allowed');


class DbConnect
{
    protected $obj;

    public function getPDO()
    {
        $dsn      = $this->getConfig()['dsn'];
        $username = $this->getConfig()['username'];
        $password = $this->getConfig()['password'];

        $options = array(
                    PDO::ATTR_CASE => PDO::CASE_NATURAL,
                    // PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT,
                    // PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
                    // PDO::ATTR_ORACLE_NULLS => PDO::NULL_EMPTY_STRING,
                    PDO::ATTR_ORACLE_NULLS => PDO::NULL_NATURAL,
                    PDO::ATTR_STRINGIFY_FETCHES => false,
                    PDO::ATTR_EMULATE_PREPARES => false,
                    // PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci'",
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8' COLLATE 'utf8_unicode_ci'",
        );

        return $this->createConnection(
            $dsn,
            $username,
            $password,
            $options
        );
    }


    public function createConnection($dsn, $username, $password, $options)
    {
        try {
            return new PDO($dsn, $username, $password, $options);
        } catch (Exception $e) {
            echo "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    protected function getConfig()
    {
        $this->obj = new DbConfig();
        // var_dump($this->obj);
        return $this->obj->getSqli();
    }
}
