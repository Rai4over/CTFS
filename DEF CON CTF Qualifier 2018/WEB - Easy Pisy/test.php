<?php
$config = array(
    "private_key_bits" => 4096,
    "private_key_type" => OPENSSL_KEYTYPE_RSA
);

$res = openssl_pkey_new($config);
openssl_pkey_export($res, $privKey);

$pubKey = openssl_pkey_get_details($res);
$pubKey = $pubKey["key"];

$data = 'plaintext data goes here';

openssl_sign($data, $sig, $privKey);

print bin2hex($sig);

var_dump(openssl_verify($data, $sig, $pubKey));

