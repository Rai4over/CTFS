<?php
function encrypt($pwn, $data) {
    mt_srand(1337);
    $pwn_len = strlen($pwn);
    $data_len = strlen($data);
    $cipher = "";
    for ($i=0; $i<$data_len; $i++) {
        $cipher .= chr(ord($data[$i]) ^ ord($pwn[$i%$pwn_len]) ^ mt_rand(0,255));
    }
    return bin2hex($cipher);
}

encrypt("flag", "this_is_a_very_secret_key") == "85b954fc8380a466276e4a48249ddd4a199fc34e5b061464e4295fc5020c88bfd8545519ab";
