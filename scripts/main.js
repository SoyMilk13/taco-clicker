const _0x3fb516 = _0x5db1;
(function (_0xa57505, _0x3acb71) {
    const _0x23aff9 = _0x5db1, _0x19ed76 = _0xa57505();
    while (!![]) {
        try {
            const _0x2878f3 = parseInt(_0x23aff9(0x204)) / 0x1 * (parseInt(_0x23aff9(0x1f7)) / 0x2) + -parseInt(_0x23aff9(0x20e)) / 0x3 * (-parseInt(_0x23aff9(0x206)) / 0x4) + parseInt(_0x23aff9(0x1f4)) / 0x5 * (parseInt(_0x23aff9(0x20b)) / 0x6) + -parseInt(_0x23aff9(0x1f2)) / 0x7 + -parseInt(_0x23aff9(0x201)) / 0x8 + -parseInt(_0x23aff9(0x1f3)) / 0x9 * (parseInt(_0x23aff9(0x203)) / 0xa) + parseInt(_0x23aff9(0x218)) / 0xb;
            if (_0x2878f3 === _0x3acb71)
                break;
            else
                _0x19ed76['push'](_0x19ed76['shift']());
        } catch (_0x40461d) {
            _0x19ed76['push'](_0x19ed76['shift']());
        }
    }
}(_0x4d77, 0x8b820));
const mainTaco = document[_0x3fb516(0x1f6)](_0x3fb516(0x1fa)), currentTacos = document[_0x3fb516(0x1f6)]('currentTacos'), upgrade1Btn = document[_0x3fb516(0x1f6)]('upgrade1Btn'), tps = document[_0x3fb516(0x1f6)](_0x3fb516(0x1fb)), upgrade1CostP = document[_0x3fb516(0x1f6)](_0x3fb516(0x211)), upgrade2Btn = document['getElementById'](_0x3fb516(0x20c)), tpc = document[_0x3fb516(0x1f6)](_0x3fb516(0x202)), upgrade2CostP = document[_0x3fb516(0x1f6)](_0x3fb516(0x1f9)), saveBtn = document[_0x3fb516(0x1f6)](_0x3fb516(0x1f0)), loadBtn = document[_0x3fb516(0x1f6)](_0x3fb516(0x1f1));
document[_0x3fb516(0x1f6)]('mainTaco')['draggable'] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco['onclick'] = () => {
    const _0x383523 = _0x3fb516;
    tacos = tacos + tacosPC, currentTacos[_0x383523(0x219)] = _0x383523(0x1f8) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x3fb516(0x1fc)] = () => {
    const _0x42b837 = _0x3fb516;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x42b837(0x219)] = 'Tacos\x20Per\x20Second:\x20' + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math['trunc'](upgrade1Cost), upgrade1CostP['innerHTML'] = _0x42b837(0x207) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0x3fb516(0x1fc)] = () => {
    const _0x3c2363 = _0x3fb516;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x3c2363(0x219)] = 'Tacos\x20Per\x20Click:\x20' + tacosPC, upgrade2Cost = upgrade1Cost * 1.55, upgrade2Cost = Math[_0x3c2363(0x1ff)](upgrade1Cost), upgrade2CostP[_0x3c2363(0x219)] = _0x3c2363(0x207) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x309af0 = _0x3fb516;
    currentTacos['innerHTML'] = _0x309af0(0x1f8) + tacos;
}
function _0x5db1(_0x56376f, _0x5434be) {
    const _0x4d771a = _0x4d77();
    return _0x5db1 = function (_0x5db1e1, _0x52dcb8) {
        _0x5db1e1 = _0x5db1e1 - 0x1f0;
        let _0x1c3530 = _0x4d771a[_0x5db1e1];
        return _0x1c3530;
    }, _0x5db1(_0x56376f, _0x5434be);
}
function generateTacos() {
    if (tacosPS == 0x0)
        return;
    else
        return tacos = tacos + tacosPS, tacos;
    ;
}
;
function _0x4d77() {
    const _0x142b83 = [
        'onclick',
        'complete',
        'callee',
        'trunc',
        'load',
        '8509408kkxqyj',
        'tpc',
        '1582010eSJZyJ',
        '35EQePDR',
        'onblur',
        '875956uxCoPC',
        'Cost:\x20',
        'resize',
        'attachEvent',
        'onresize',
        '72TESLxw',
        'upgrade2Btn',
        'mousemove',
        '12CgOyWX',
        'blur',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        'upgrade1CostP',
        'readyState',
        'freeze',
        'addEventListener',
        'onfocus',
        'interactive',
        'setInterval',
        '7832495rJViMY',
        'innerHTML',
        'saveBtn',
        'loadBtn',
        '74312OsgZzV',
        '18RhNOVG',
        '25055VdYGVl',
        'focus',
        'getElementById',
        '17942aedCuX',
        'Tacos:\x20',
        'upgrade2CostP',
        'mainTaco',
        'tps'
    ];
    _0x4d77 = function () {
        return _0x142b83;
    };
    return _0x4d77();
}
function loadTacos() {
    tacos = tacos + localStorage['getItem'](saveTacos), tacosPS = tacosPS + localStorage['getItem'](saveTps), tacosPC = tacosPC + localStorage['getItem'](saveTpc);
}
var generation = window[_0x3fb516(0x217)](generateTacos, 0x3e8), updateTacos = window[_0x3fb516(0x217)](updateTacoCount, 0x3e8);
let saveTacos = null, saveTps = null, saveTpc = null;
saveBtn[_0x3fb516(0x1fc)] = () => {
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, localStorage['setItem'](saveTacos, saveTps, saveTpc);
}, loadBtn[_0x3fb516(0x1fc)] = () => {
    loadTacos();
}, !(function () {
    const _0x43b011 = _0x3fb516;
    function _0x1fc7dd(_0x1c2133) {
        const _0x2a5e5c = _0x5db1;
        if (isNaN(+_0x1c2133))
            _0x1c2133 = 0x64;
        var _0x785764 = +new Date();
        debugger;
        var _0x3d6ef6 = +new Date();
        (isNaN(_0x785764) || isNaN(_0x3d6ef6) || _0x3d6ef6 - _0x785764 > _0x1c2133) && alert(_0x2a5e5c(0x210));
    }
    window[_0x43b011(0x209)] ? document[_0x43b011(0x212)] === _0x43b011(0x1fd) || document[_0x43b011(0x212)] === _0x43b011(0x216) ? (_0x1fc7dd(), window[_0x43b011(0x209)](_0x43b011(0x20a), _0x1fc7dd), window[_0x43b011(0x209)]('onmousemove', _0x1fc7dd), window[_0x43b011(0x209)](_0x43b011(0x215), _0x1fc7dd), window[_0x43b011(0x209)](_0x43b011(0x205), _0x1fc7dd)) : setTimeout(argument[_0x43b011(0x1fe)], 0x0) : (window[_0x43b011(0x214)](_0x43b011(0x200), _0x1fc7dd), window[_0x43b011(0x214)](_0x43b011(0x208), _0x1fc7dd), window['addEventListener'](_0x43b011(0x20d), _0x1fc7dd), window['addEventListener'](_0x43b011(0x1f5), _0x1fc7dd), window[_0x43b011(0x214)](_0x43b011(0x20f), _0x1fc7dd));
}()), Object[_0x3fb516(0x213)](detectDevTools);
