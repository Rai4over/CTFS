var key="\141\144\162\145\146\153\146\167\145\157\144\146\163\144\160\151\162\165";
function signGenerate(obj, key) {
    var str0 = '';
    for (i in obj) {
        if (i != 'sign') {
            str1 = '';
            str1 = i + '=' + obj[i];
            str0 += str1
        }
    }
    return hex_math_enc(str0 + key)
};
var obj = {
    id: '',
    title: '',
    author: '',
    date: '',
    time: parseInt(new Date().getTime() / 1000)
};
function submitt() {
    obj['id'] = document.getElementById('id').value;
    obj['title'] = document.getElementById('title').value;
    obj['author'] = document.getElementById('author').value;
    obj['date'] = document.getElementById('date').value;
    var sign = signGenerate(obj, key);
    document.getElementById('queryForm').action = "index.php?sig=" + sign + "&time=" + obj.time;
    document.getElementById('queryForm').submit()
}