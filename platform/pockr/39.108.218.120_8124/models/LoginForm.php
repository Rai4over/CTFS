<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * LoginForm is the model behind the login form.
 *
 * @property UserIdentity|null $user This property is read-only.
 *
 */
class LoginForm extends User
{
    public $username;
    public $password;

    private $user = null;

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            // username and password are both required
            [['username', 'password'], 'required'],
            [['username', 'password'], 'filter', 'filter' => 'trim'],
            ['password', 'validatePassword'],
        ];
    }

    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = User::find()->where(['username' => $this->username])->one();
            if(!$user){
                $this->addError($attribute,'用户不存在');
                return false;
            }
            if ($user->password == $this->password) {
                $this->user = static ::findIdentity($user->id);
                return true;
            }


            $this->addError($attribute, '密码不正确.');
            return false;
        }
    }

    /**
     * Logs in a user using the provided username and password.
     * @return bool whether the user is logged in successfully
     */
    public function login()
    {
        if ($this->validate()) {

            return Yii::$app->user->login($this->user, 3600 * 24 * 30);
        }
        return false;
    }

}