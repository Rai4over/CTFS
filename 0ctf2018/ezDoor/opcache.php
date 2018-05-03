<?php

function encrypt() 
{
    mt_srand(1377);
    ...
    mt_rand(0, 255);
    ...
    encode();
}

function encode()
{

}


if (encrypt($flag, 'this_is_a_very_secret_key') == '85b954fc8380a466276e4a48249ddd4a199fc34e5b061464e4295fc5020c88bfd8545519ab') {
    echo 'Congratulation! You got it!';
} else {
    echo 'Wrong Answer';
}
