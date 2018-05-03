var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, d) {
    a != Array.prototype && a != Object.prototype && (a[b] = d.value)
};
$jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.Symbol = function () {
    var a = 0;
    return function (b) {
        return $jscomp.SYMBOL_PREFIX + (b || "") + a++
    }
}();
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function () {}
};
$jscomp.arrayIterator = function (a) {
    var b = 0;
    return $jscomp.iteratorPrototype(function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function (a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp.global.Symbol.iterator] = function () {
        return this
    };
    return a
};
$jscomp.makeIterator = function (a) {
    $jscomp.initSymbolIterator();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.arrayFromIterator = function (a) {
    for (var b, d = []; !(b = a.next()).done;) d.push(b.value);
    return d
};
$jscomp.arrayFromIterable = function (a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
};

function check2(a, b) {
    var d = $jscomp.makeIterator(b),
        c = d.next().value;
    d = d.next().value;
    return text2hex(Array.from(a).map(function (a) {
        a = a.charCodeAt();
        return "" + String.fromCharCode(a - 1) + String.fromCharCode(a - 1) + String.fromCharCode(a + 1)
    }).join("")) ^ c & 1 ? !0 : !(text2hex(Array.from(a).map(function (a) {
        return a.toLowerCase()
    }).join("")) ^ d) && a[2] !== a[2].toLowerCase() && a[2] !== a[2].toLowerCase().toUpperCase() && a[4] !== a[4].toLowerCase() && a[4] !== a[4].toLowerCase().toUpperCase()
}

function check1(a, b) {
    var d = $jscomp.makeIterator(b).next().value;
    return "0x" + function (a) {
        for (var c = 0; c < a.length; c++) {
            for (var b = a[0], d = 0; d < a.length - 1; d++) a[d] = String.fromCharCode(a[d].charCodeAt() ^ a[d + 1].charCodeAt());
            a[a.length - 1] = String.fromCharCode(b.charCodeAt() ^ a[a.length - 1].charCodeAt())
        }
        return a
    }(Array.from(a)).map(function (a) {
        a = a.charCodeAt();
        a = a >> 4 | a << 4 & 255;
        a = (a & 204) >> 2 | (a & 51) << 2;
        return ((a & 170) >> 1 | (a & 85) << 1).toString(16)
    }).join("") === d
}

function text2hex(a) {
    return "0x" + Array.from(a).map(function (a) {
        return a.charCodeAt().toString(16)
    }).join("")
}

function check3(a, b) {
    var d = $jscomp.makeIterator(b).next().value;
    if (0 === a.length) return "";
    var c = Array.of(0);
    [].concat($jscomp.arrayFromIterable(a)).map(function (a) {
        return a.charCodeAt()
    }).map(function (a) {
        var b = (c[0] << 8) + a;
        c[0] = b % 58;
        b = b / 58 | 0;
        for (var d = 1; d < c.length; ++d) b += c[d] << 8, c[d] = b % 58, b = b / 58 | 0;
        for (; 0 < b;) c.push(b % 58), b = b / 58 | 0;
        return a
    }).forEach(function (a) {
        a || c.push(0)
    });
    for (var e = 0, f = c.length - 1; e <= f; ++e, --f) e == f ? c[e] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [c[e]] : (c[e] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [c[e]], c[f] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [c[f]].charCodeAt() ^ c[e].charCodeAt(), c[e] = String.fromCharCode(c[f] ^ c[e].charCodeAt()), c[f] = String.fromCharCode(c[e].charCodeAt() ^ c[f]));
    return c.join("") === d
}

function check4(a, b) {
    function d(a) {
        this.data = a;
        this.right = this.left = null
    }

    function c(a, b) {
        b.push(a.data);
        null !== a.left && c(a.left, b);
        null !== a.right && c(a.right, b)
    }

    function e(a, b) {
        null !== a.left && e(a.left, b);
        null !== a.right && e(a.right, b);
        b.push(a.data)
    }
    var f = $jscomp.makeIterator(b),
        l = f.next().value;
    f = f.next().value;
    var g = function (a) {
            var b = null,
                c = [];
            a = $jscomp.makeIterator(a);
            for (var e = a.next(); !e.done; e = a.next())
                if (e = new d(e.value), null === b) var f = b = e;
                else null === f.left ? f.left = e : (f.right = e, f = c.shift()), c.push(e);
            return b
        }(a),
        h = [],
        k = [];
    c(g, h);
    e(g, k);
    return text2hex(h) === l && text2hex(k) === f
}

function math_check(a) {
    var b = [
        [2, 3, 5, 7, 11, 151],
        [17, 19, 23, 29, 31, 37],
        [41, 43, 47, 53, 59, 61],
        [67, 71, 73, 79, 83, 89],
        [97, 101, 103, 107, 109, 113],
        [127, 131, 137, 139, 149, 433]
    ];
    return 6 === [47703, 16659, 64467, 21903, 31719, 120825].sort().filter(function (d, c) {
        return d === Array.from(a).filter(function (a, b) {
            return 5 > b || 40 < b
        }).map(function (a, d) {
            return a.codePointAt() * b.sort()[c][d]
        }).reduce(function (a, b) {
            return a + b
        })
    }).length
};
var _0x46cd = ['wr7DkcKsdw==', 'wrN6JlzDtVFm', 'THbDjVfDnQcI', 'FsKqf8OQNMKYw5zCj8K9J2bCujwy', 'woJVw7vCs8KLwqA=', 'VcKmacKBacKc', 'N2XCgMOcwrLCvQ==', 'w71pw6TCqHnDvMKxw4ECQGQ=', 'w5R6wq3CvQ==', 'wqRKesKHAQ==', 'czLDvw/CkkFFdR8/EnTCr1DCj8KgFD3DiC9FWMOCAsK0F8ODbMOKCWgIGMOvBsOuw6XCnMKZcwzCnmvCiinDhSs+H8OvHBvDpcOrwpDCuT7Cl2Zew5LCoA=='];
(function (_0xc0864f, _0x24aec1) {
    var _0x2a3564 = function (_0x3badaf) {
        while (--_0x3badaf) {
            _0xc0864f['push'](_0xc0864f['shift']());
        }
    };
    _0x2a3564(++_0x24aec1);
}(_0x46cd, 0x16a));
var _0x225f = function (_0x31e0cc, _0x499c07) {
    _0x31e0cc = _0x31e0cc - 0x0;
    var _0x1edf1a = _0x46cd[_0x31e0cc];
    if (_0x225f['jsSoJf'] === undefined) {
        (function () {
            var _0x5af15f;
            try {
                var _0x12d435 = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                _0x5af15f = _0x12d435();
            } catch (_0x580bb9) {
                _0x5af15f = window;
            }
            var _0x3c4507 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x5af15f['atob'] || (_0x5af15f['atob'] = function (_0x5704ff) {
                var _0x24d580 = String(_0x5704ff)['replace'](/=+$/, '');
                for (var _0x4891aa = 0x0, _0x3c247d, _0x2bd8e4, _0x49a17b = 0x0, _0x2cb754 = ''; _0x2bd8e4 = _0x24d580['charAt'](_0x49a17b++);~ _0x2bd8e4 && (_0x3c247d = _0x4891aa % 0x4 ? _0x3c247d * 0x40 + _0x2bd8e4 : _0x2bd8e4, _0x4891aa++ % 0x4) ? _0x2cb754 += String['fromCharCode'](0xff & _0x3c247d >> (-0x2 * _0x4891aa & 0x6)) : 0x0) {
                    _0x2bd8e4 = _0x3c4507['indexOf'](_0x2bd8e4);
                }
                return _0x2cb754;
            });
        }());
        var _0x59d040 = function (_0x40778d, _0x4506bd) {
            var _0x7f992c = [],
                _0x37dde9 = 0x0,
                _0x13ae1c, _0x379b02 = '',
                _0x88a1d6 = '';
            _0x40778d = atob(_0x40778d);
            for (var _0xce6c3a = 0x0, _0x389695 = _0x40778d['length']; _0xce6c3a < _0x389695; _0xce6c3a++) {
                _0x88a1d6 += '%' + ('00' + _0x40778d['charCodeAt'](_0xce6c3a)['toString'](0x10))['slice'](-0x2);
            }
            _0x40778d = decodeURIComponent(_0x88a1d6);
            for (var _0x517405 = 0x0; _0x517405 < 0x100; _0x517405++) {
                _0x7f992c[_0x517405] = _0x517405;
            }
            for (_0x517405 = 0x0; _0x517405 < 0x100; _0x517405++) {
                _0x37dde9 = (_0x37dde9 + _0x7f992c[_0x517405] + _0x4506bd['charCodeAt'](_0x517405 % _0x4506bd['length'])) % 0x100;
                _0x13ae1c = _0x7f992c[_0x517405];
                _0x7f992c[_0x517405] = _0x7f992c[_0x37dde9];
                _0x7f992c[_0x37dde9] = _0x13ae1c;
            }
            _0x517405 = 0x0;
            _0x37dde9 = 0x0;
            for (var _0x178a00 = 0x0; _0x178a00 < _0x40778d['length']; _0x178a00++) {
                _0x517405 = (_0x517405 + 0x1) % 0x100;
                _0x37dde9 = (_0x37dde9 + _0x7f992c[_0x517405]) % 0x100;
                _0x13ae1c = _0x7f992c[_0x517405];
                _0x7f992c[_0x517405] = _0x7f992c[_0x37dde9];
                _0x7f992c[_0x37dde9] = _0x13ae1c;
                _0x379b02 += String['fromCharCode'](_0x40778d['charCodeAt'](_0x178a00) ^ _0x7f992c[(_0x7f992c[_0x517405] + _0x7f992c[_0x37dde9]) % 0x100]);
            }
            return _0x379b02;
        };
        _0x225f['QnRLgr'] = _0x59d040;
        _0x225f['FhBBbF'] = {};
        _0x225f['jsSoJf'] = !![];
    }
    var _0x33eb77 = _0x225f['FhBBbF'][_0x31e0cc];
    if (_0x33eb77 === undefined) {
        if (_0x225f['lPafnj'] === undefined) {
            _0x225f['lPafnj'] = !![];
        }
        _0x1edf1a = _0x225f['QnRLgr'](_0x1edf1a, _0x499c07);
        _0x225f['FhBBbF'][_0x31e0cc] = _0x1edf1a;
    } else {
        _0x1edf1a = _0x33eb77;
    }
    return _0x1edf1a;
};
var _0x34e7a1 = function () {
    var _0x2f84b3 = !![];
    return function (_0x331775, _0x1c5dc1) {
        var _0x3ef51a = _0x2f84b3 ? function () {
            if (_0x1c5dc1) {
                var _0x14846c = _0x1c5dc1['apply'](_0x331775, arguments);
                _0x1c5dc1 = null;
                return _0x14846c;
            }
        } : function () {};
        _0x2f84b3 = ![];
        return _0x3ef51a;
    };
}();
// (function () {
//     _0x34e7a1(this, function () {
//         var _0x53d92a = new RegExp('function *\\( *\\)');
//         var _0x46e83f = new RegExp(_0x225f('0x0', 'F#bf'), 'i');
//         var _0x58ff87 = _0x45eea6('init');
//         if (!_0x53d92a['test'](_0x58ff87 + 'chain') || !_0x46e83f['test'](_0x58ff87 + 'input')) {
//             _0x58ff87('0');
//         } else {
//             _0x45eea6();
//         }
//     })();
// }());
var _0x49eb4c = function () {
    var _0x40abdb = !![];
    return function (_0x189d61, _0x4aaf7b) {
        var _0x37c9bd = _0x40abdb ? function () {
            if (_0x4aaf7b) {
                var _0x1ff209 = _0x4aaf7b['apply'](_0x189d61, arguments);
                _0x4aaf7b = null;
                return _0x1ff209;
            }
        } : function () {};
        _0x40abdb = ![];
        return _0x37c9bd;
    };
}();
var _0x250b78 = _0x49eb4c(this, function () {
    var _0x5e16a0 = function () {};
    var _0x122eec;
    try {
        var _0x5bcccb = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
        _0x122eec = _0x5bcccb();
    } catch (_0x41a1fc) {
        _0x122eec = window;
    }
    if (!_0x122eec['console']) {
        _0x122eec['console'] = function (_0x21a2dc) {
            var _0x20ea0b = {};
            _0x20ea0b['log'] = _0x21a2dc;
            _0x20ea0b['warn'] = _0x21a2dc;
            _0x20ea0b['debug'] = _0x21a2dc;
            _0x20ea0b['info'] = _0x21a2dc;
            _0x20ea0b['error'] = _0x21a2dc;
            _0x20ea0b['exception'] = _0x21a2dc;
            _0x20ea0b['trace'] = _0x21a2dc;
            return _0x20ea0b;
        }(_0x5e16a0);
    } else {
        _0x122eec['console']['log'] = _0x5e16a0;
        _0x122eec['console'][_0x225f('0x1', 'J$F%')] = _0x5e16a0;
        _0x122eec['console']['debug'] = _0x5e16a0;
        _0x122eec['console']['info'] = _0x5e16a0;
        _0x122eec['console']['error'] = _0x5e16a0;
        _0x122eec[_0x225f('0x2', 'PPQZ')]['exception'] = _0x5e16a0;
        _0x122eec[_0x225f('0x3', 'F#bf')]['trace'] = _0x5e16a0;
    }
});
_0x250b78();
const funcs = [check1, check2, check3, check4];
const args = [
    [_0x225f('0x4', '^n&i')],
    ['0xb8342e58966c'],
    ['0x796ee5dd617265ff777f6f6cc73d2e3d', '0x7dfee9e078e8b'],
    ['0x796f755f6172655f77726f6e673d2e3d', '0x7468693076e6b'],
    ['E5XncQemjRg'],
    ['DQuf7TsLf6W'],
    ['0xcc6e657413726e3974653f3f7312', '0x7413656e39726e3f3f65127374cc'],
    ['0x496e657431726e3974653f3f7321', '0x7431656e39726e3f3f6521737449']
];

function index(input_str) {
    this['i'] = input_str;
    this['toString'] = function () {
        return input_str++;
    };
}

function check(input) {
    const v1 = [];
    funcs['forEach'](_0x6161f => {
        v1['push'](_0x6161f);
        v1['push'](Array['from'](funcs)['sort'](() => {
            return 0.5 - Math['random']();
        })[0x0]);
    });
    v1['unshift'](math_check);
    let _0x1df991 = new index(0x0);
    return input[_0x225f('0x5', '$%O2')] === 0x2a && v1['shift']()(_0x549363) && [..._0x549363]['filter']((_0x75ff26, _0x4dd2bd) => {
        return _0x4dd2bd >= 0x5 && _0x4dd2bd <= 0x28;
    })['join']('')['split']('_')['map'](_0x5c9b4c => {
        return v1[_0x1df991](_0x5c9b4c, args[_0x1df991]);
    })['reduce']((_0x338011, _0x398c4a) => {
        return _0x338011 && _0x398c4a;
    });
}

function _0x45eea6(_0x17bbf7) {
    function _0x2afc90(_0x27e720) {
        if (typeof _0x27e720 === _0x225f('0x6', '^n&i')) {
            return function (_0xa75f43) {}['constructor']('while (true) {}')['apply']('counter');
        } else {
            if (('' + _0x27e720 / _0x27e720)[_0x225f('0x7', 'zLWz')] !== 0x1 || _0x27e720 % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }[_0x225f('0x8', 'LczV')]('debu' + _0x225f('0x9', 'Rnit'))[_0x225f('0xa', 'cBv)')]('stateObject'));
            }
        }
        _0x2afc90(++_0x27e720);
    }
    try {
        if (_0x17bbf7) {
            return _0x2afc90;
        } else {
            _0x2afc90(0x0);
        }
    } catch (_0x28e1a9) {}
}