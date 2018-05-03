<?php


class User
{
    private $msi;
    private $name;
    private $failed = false;

    function __construct($name)
    {
        $this->name = $name;
        $this->connect();
    }

    function __wakeup()
    {
        $this->connect();
    }

    private function connect(){
        $this->msi = new mysqli('localhost', 'FancyEditor', 'definitlyNotTheRootPassword', 'FancyEditor');
    }

    public function login($password){
        $query = sprintf('SELECT * FROM users WHERE name="%s"', $this->msi->real_escape_string($this->name));
        $result = $this->msi->query($query);

        if ($result->num_rows != 1) {
            $this->failed = true;
            return $this;
        }

        $user = $result->fetch_assoc();
        if (!password_verify(hash("sha512", $password), $user["password"])) {
            $this->failed = true;
        }
        return $this;
    }

    public function register($password){
        $password = password_hash(hash("sha512", $password), PASSWORD_DEFAULT);
        $query = sprintf('INSERT INTO users (`name`, `password`) VALUES ("%s", "%s")',
            $this->msi->real_escape_string($this->name),
            $this->msi->real_escape_string($password));

        if (!$this->msi->query($query)) {
            $this->failed = true;
        }
        return $this;
    }

    public function changePassword($newPassword) {
        if(!unserialize($_SESSION["user"])->isAdmin()){
            exit("BETA feature! Admin only!");
        }
        $password = password_hash(hash("sha512", $newPassword), PASSWORD_DEFAULT);
        $query = sprintf('INSERT INTO users (`name`, `password`) VALUES ("%s", "%s") ON DUPLICATE KEY UPDATE password="%s"',
            $this->msi->real_escape_string($this->name),
            $this->msi->real_escape_string($password),
            $this->msi->real_escape_string($password));

        if (!$this->msi->query($query)) {
            $this->failed = true;
        }
        return $this;
    }

    public function getName(){
        return $this->name;
    }

    public function isAdmin(){
        return $this->name === "admin";
    }

    public function hasFailed() {
        return $this->failed;
    }

}
