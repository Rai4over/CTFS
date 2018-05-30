<?php

return [
    'class' => 'yii\\db\\Connection',
    // 'dsn' => 'mysql:host=mysql.local.com;dbname=bug',
    'dsn' => 'sqlite:@app/data/bug.db',
    // 'username' => 'bug',
    // 'password' => 'bug',
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];