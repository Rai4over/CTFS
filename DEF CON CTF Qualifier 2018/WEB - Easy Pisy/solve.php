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
    "private_key_bits" => 1024,
    "private_key_type" => OPENSSL_KEYTYPE_DSA,
    "curve_name" => 'prime256v1'
));
openssl_pkey_export($new_key_pair, $dsa_priv);

$details = openssl_pkey_get_details($new_key_pair);
$dsa_pub = $details['key'];

openssl_sign($data, $dsa_sig, $dsa_priv);
print "dsa_sig: ".bin2hex($dsa_sig)."\n";
var_dump(openssl_verify($data, $dsa_sig, $dsa_pub));
var_dump(openssl_verify($data, $dsa_sig, $rsa_pub));
