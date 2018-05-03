Obviously we could use CRC to recover those 41 * 5 bytes of plaintext. Then we know the content of the big text file. We encountered some difficulties when applying plaintext attack to the zip. After some digging, it appears to be version difference of the zip compressor version we used. We finally find some with PK encoding format 6.3, we successfully recorcered the flag:

`hctf{We1c0me_2_HCTF2017_h4ve_fun_LOL}`
