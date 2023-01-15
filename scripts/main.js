const _0x24fe79 = _0x4b75;
(function (_0xcc510, _0x2edf6e) {
    const _0x3766f8 = _0x4b75, _0x15fc84 = _0xcc510();
    while (!![]) {
        try {
            const _0x46cc2d = -parseInt(_0x3766f8(0xba)) / 0x1 * (parseInt(_0x3766f8(0xae)) / 0x2) + -parseInt(_0x3766f8(0xb4)) / 0x3 + -parseInt(_0x3766f8(0xb9)) / 0x4 + -parseInt(_0x3766f8(0xa1)) / 0x5 * (-parseInt(_0x3766f8(0x9e)) / 0x6) + parseInt(_0x3766f8(0xa4)) / 0x7 * (parseInt(_0x3766f8(0xa8)) / 0x8) + parseInt(_0x3766f8(0xad)) / 0x9 * (-parseInt(_0x3766f8(0xac)) / 0xa) + parseInt(_0x3766f8(0xaf)) / 0xb;
            if (_0x46cc2d === _0x2edf6e)
                break;
            else
                _0x15fc84['push'](_0x15fc84['shift']());
        } catch (_0x3ddc45) {
            _0x15fc84['push'](_0x15fc84['shift']());
        }
    }
}(_0x477f, 0x86957));
const mainTaco = document[_0x24fe79(0xbf)](_0x24fe79(0xb8)), currentTacos = document[_0x24fe79(0xbf)](_0x24fe79(0xc2)), upgrade1Btn = document[_0x24fe79(0xbf)](_0x24fe79(0x9d)), tps = document[_0x24fe79(0xbf)]('tps'), upgrade1CostP = document[_0x24fe79(0xbf)]('upgrade1CostP'), upgrade2Btn = document[_0x24fe79(0xbf)](_0x24fe79(0x99)), tpc = document['getElementById'](_0x24fe79(0xbb)), upgrade2CostP = document[_0x24fe79(0xbf)](_0x24fe79(0xb7)), saveBtn = document[_0x24fe79(0xbf)](_0x24fe79(0xa5)), loadBtn = document[_0x24fe79(0xbf)](_0x24fe79(0xb5));
document['getElementById'](_0x24fe79(0xb8))[_0x24fe79(0xc1)] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco[_0x24fe79(0xb6)] = () => {
    const _0x360c31 = _0x24fe79;
    tacos = tacos + tacosPC, currentTacos['innerHTML'] = _0x360c31(0x9b) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x24fe79(0xb6)] = () => {
    const _0xfa229c = _0x24fe79;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0xfa229c(0xb1)] = _0xfa229c(0xab) + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math['trunc'](upgrade1Cost), upgrade1CostP['innerHTML'] = _0xfa229c(0xbe) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn['onclick'] = () => {
    const _0x3ae461 = _0x24fe79;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x3ae461(0xb1)] = _0x3ae461(0xa9) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math[_0x3ae461(0xb2)](upgrade2Cost), upgrade2CostP['innerHTML'] = _0x3ae461(0xbe) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x13fe79 = _0x24fe79;
    currentTacos[_0x13fe79(0xb1)] = 'Tacos:\x20' + tacos;
}
function _0x4b75(_0x252a5c, _0x400485) {
    const _0x477f51 = _0x477f();
    return _0x4b75 = function (_0x4b75fb, _0x5e7444) {
        _0x4b75fb = _0x4b75fb - 0x99;
        let _0x1e98b6 = _0x477f51[_0x4b75fb];
        return _0x1e98b6;
    }, _0x4b75(_0x252a5c, _0x400485);
}
function _0x477f() {
    const _0x18bc8a = [
        'upgrade1Btn',
        '5184576fCWdBj',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        'getItem',
        '5qTwXKG',
        'interactive',
        'saveTps',
        '287PSJmKM',
        'saveBtn',
        'onblur',
        'load',
        '203288AKjAPi',
        'Tacos\x20Per\x20Click:\x20',
        'resize',
        'Tacos\x20Per\x20Second:\x20',
        '50oifXAC',
        '1458414cwVCcK',
        '145342dblJCr',
        '13948451pqohwW',
        'setInterval',
        'innerHTML',
        'trunc',
        'attachEvent',
        '1871481IgjICN',
        'loadBtn',
        'onclick',
        'upgrade2CostP',
        'mainTaco',
        '1557180rNGJIH',
        '11FKIiXB',
        'tpc',
        'saveTpc',
        'addEventListener',
        'Cost:\x20',
        'getElementById',
        'onfocus',
        'draggable',
        'currentTacos',
        'onresize',
        'freeze',
        'upgrade2Btn',
        'onmousemove',
        'Tacos:\x20',
        'setItem'
    ];
    _0x477f = function () {
        return _0x18bc8a;
    };
    return _0x477f();
}
function generateTacos() {
    if (tacosPS == 0x0)
        return;
    else
        return tacos = tacos + tacosPS, tacos;
    ;
}
;
let saveTacos = null, saveTps = null, saveTpc = null;
saveBtn[_0x24fe79(0xb6)] = () => {
    const _0x513915 = _0x24fe79;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, localStorage[_0x513915(0x9c)]('saveTacos', saveTacos), localStorage[_0x513915(0x9c)](_0x513915(0xa3), saveTps), localStorage['setItem'](_0x513915(0xbc), saveTpc);
};
function loadTacos() {
    const _0x87c2c2 = _0x24fe79;
    saveTacos = localStorage[_0x87c2c2(0xa0)]('saveTacos'), saveTps = localStorage[_0x87c2c2(0xa0)](_0x87c2c2(0xa3)), saveTpc = localStorage['getItem'](_0x87c2c2(0xbc)), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc;
}
;
var generation = window[_0x24fe79(0xb0)](generateTacos, 0x3e8), updateTacos = window[_0x24fe79(0xb0)](updateTacoCount, 0x3e8);
loadBtn[_0x24fe79(0xb6)] = () => {
    loadTacos();
}, !(function () {
    const _0x351a92 = _0x24fe79;
    function _0x3d3525(_0x265d92) {
        const _0x3dbf8b = _0x4b75;
        if (isNaN(+_0x265d92))
            _0x265d92 = 0x64;
        var _0x5e5f11 = +new Date();
        debugger;
        var _0x3085b3 = +new Date();
        (isNaN(_0x5e5f11) || isNaN(_0x3085b3) || _0x3085b3 - _0x5e5f11 > _0x265d92) && alert(_0x3dbf8b(0x9f));
    }
    window[_0x351a92(0xb3)] ? document['readyState'] === 'complete' || document['readyState'] === _0x351a92(0xa2) ? (_0x3d3525(), window[_0x351a92(0xb3)](_0x351a92(0xc3), _0x3d3525), window[_0x351a92(0xb3)](_0x351a92(0x9a), _0x3d3525), window[_0x351a92(0xb3)](_0x351a92(0xc0), _0x3d3525), window[_0x351a92(0xb3)](_0x351a92(0xa6), _0x3d3525)) : setTimeout(argument['callee'], 0x0) : (window[_0x351a92(0xbd)](_0x351a92(0xa7), _0x3d3525), window[_0x351a92(0xbd)](_0x351a92(0xaa), _0x3d3525), window[_0x351a92(0xbd)]('mousemove', _0x3d3525), window[_0x351a92(0xbd)]('focus', _0x3d3525), window[_0x351a92(0xbd)]('blur', _0x3d3525));
}()), Object[_0x24fe79(0xc4)](detectDevTools);
