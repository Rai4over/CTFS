<?php
$data = file_get_contents('samples/execute-ls.pdf');

//create new private and public key
$new_key_pair = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
openssl_pkey_export($new_key_pair, $rsa_priv);

$details = openssl_pkey_get_details($new_key_pair);
$rsa_pub = $details['key'];

openssl_sign($data, $rsa_sig, $rsa_priv);
print "rsa_sig: ".bin2hex($rsa_sig)."\n";
var_dump(openssl_verify($data, $rsa_sig, $rsa_pub));

$new_key_pair = openssl_pkey_new(array(
    'digest_alg' => "sha512",
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_DSA,
));
openssl_pkey_export($new_key_pair, $rsa2_priv);

$details = openssl_pkey_get_details($new_key_pair);
$rsa2_pub = $details['key'];

openssl_sign($data, $rsa2_sig, $rsa2_priv);
print "rsa2_sig: ".bin2hex($rsa2_sig)."\n";
var_dump(openssl_verify($data, $rsa2_sig, $rsa2_pub));
var_dump(openssl_verify($data, $rsa2_sig, $rsa_pub));
