const _0x5c622b = _0x2d85;
function _0x2d85(_0x2860bd, _0x11cb30) {
    const _0x3bb151 = _0x3bb1();
    return _0x2d85 = function (_0x2d85ec, _0xfad916) {
        _0x2d85ec = _0x2d85ec - 0x12b;
        let _0x3298c8 = _0x3bb151[_0x2d85ec];
        return _0x3298c8;
    }, _0x2d85(_0x2860bd, _0x11cb30);
}
(function (_0x213189, _0x29fc42) {
    const _0x12789a = _0x2d85, _0x17609b = _0x213189();
    while (!![]) {
        try {
            const _0x1b8235 = parseInt(_0x12789a(0x134)) / 0x1 * (parseInt(_0x12789a(0x13c)) / 0x2) + parseInt(_0x12789a(0x140)) / 0x3 * (parseInt(_0x12789a(0x148)) / 0x4) + parseInt(_0x12789a(0x131)) / 0x5 * (parseInt(_0x12789a(0x147)) / 0x6) + parseInt(_0x12789a(0x13e)) / 0x7 + parseInt(_0x12789a(0x135)) / 0x8 * (parseInt(_0x12789a(0x12d)) / 0x9) + parseInt(_0x12789a(0x14e)) / 0xa + -parseInt(_0x12789a(0x12b)) / 0xb;
            if (_0x1b8235 === _0x29fc42)
                break;
            else
                _0x17609b['push'](_0x17609b['shift']());
        } catch (_0x455bf4) {
            _0x17609b['push'](_0x17609b['shift']());
        }
    }
}(_0x3bb1, 0x19d48));
const mainTaco = document['getElementById']('mainTaco'), currentTacos = document[_0x5c622b(0x144)](_0x5c622b(0x146)), upgrade1Btn = document['getElementById'](_0x5c622b(0x13b)), tps = document[_0x5c622b(0x144)](_0x5c622b(0x12e)), upgrade1CostP = document[_0x5c622b(0x144)](_0x5c622b(0x152)), upgrade2Btn = document[_0x5c622b(0x144)](_0x5c622b(0x13d)), tpc = document[_0x5c622b(0x144)](_0x5c622b(0x145)), upgrade2CostP = document[_0x5c622b(0x144)]('upgrade2CostP'), saveBtn = document['getElementById'](_0x5c622b(0x12f)), loadBtn = document[_0x5c622b(0x144)](_0x5c622b(0x151));
document[_0x5c622b(0x144)](_0x5c622b(0x133))['draggable'] = ![];
function _0x3bb1() {
    const _0x426922 = [
        'setItem',
        'setInterval',
        'trunc',
        'attachEvent',
        'upgrade1Btn',
        '158770qZDynu',
        'upgrade2Btn',
        '873411RCkdGY',
        'innerHTML',
        '44274stHPIv',
        'onresize',
        'addEventListener',
        'Tacos\x20Per\x20Second:\x20',
        'getElementById',
        'tpc',
        'currentTacos',
        '12mwoCeK',
        '52pCtGbM',
        'Cost:\x20',
        'interactive',
        'Tacos:\x20',
        'onfocus',
        'Tacos\x20Per\x20Click:\x20',
        '1224720HEaOBU',
        'load',
        'readyState',
        'loadBtn',
        'upgrade1CostP',
        'mousemove',
        'blur',
        'getItem',
        'onclick',
        '5809078tHeRCV',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        '10566RSPBZV',
        'tps',
        'saveBtn',
        'resize',
        '144720ILiBXn',
        'callee',
        'mainTaco',
        '1yKGoas',
        '392FiBUNq',
        'focus'
    ];
    _0x3bb1 = function () {
        return _0x426922;
    };
    return _0x3bb1();
}
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco[_0x5c622b(0x156)] = () => {
    const _0x5bda92 = _0x5c622b;
    tacos = tacos + tacosPC, currentTacos['innerHTML'] = _0x5bda92(0x14b) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x5c622b(0x156)] = () => {
    const _0x53b78d = _0x5c622b;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x53b78d(0x13f)] = _0x53b78d(0x143) + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x53b78d(0x139)](upgrade1Cost), upgrade1CostP['innerHTML'] = _0x53b78d(0x149) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0x5c622b(0x156)] = () => {
    const _0x315ead = _0x5c622b;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x315ead(0x13f)] = _0x315ead(0x14d) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math['trunc'](upgrade1Cost), upgrade2CostP[_0x315ead(0x13f)] = _0x315ead(0x149) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x29a5f = _0x5c622b;
    currentTacos['innerHTML'] = _0x29a5f(0x14b) + tacos;
}
function generateTacos() {
    if (tacosPS == 0x0)
        return;
    else
        return tacos = tacos + tacosPS, tacos;
    ;
}
;
function loadTacos() {
    const _0xaade51 = _0x5c622b;
    localStorage[_0xaade51(0x155)](saveTacos), localStorage[_0xaade51(0x155)](saveTps), localStorage[_0xaade51(0x155)](saveTpc), tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc;
}
var generation = window[_0x5c622b(0x138)](generateTacos, 0x3e8), updateTacos = window[_0x5c622b(0x138)](updateTacoCount, 0x3e8);
let saveTacos = null, saveTps = null, saveTpc = null;
saveBtn[_0x5c622b(0x156)] = () => {
    const _0x189a4e = _0x5c622b;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, localStorage[_0x189a4e(0x137)](saveTacos, saveTps, saveTpc);
}, loadBtn[_0x5c622b(0x156)] = () => {
    loadTacos();
}, !(function () {
    const _0x1b0f82 = _0x5c622b;
    function _0x36b2ca(_0x223d68) {
        const _0x2e5751 = _0x2d85;
        if (isNaN(+_0x223d68))
            _0x223d68 = 0x64;
        var _0x48fe3c = +new Date();
        debugger;
        var _0x3f7894 = +new Date();
        (isNaN(_0x48fe3c) || isNaN(_0x3f7894) || _0x3f7894 - _0x48fe3c > _0x223d68) && alert(_0x2e5751(0x12c));
    }
    window[_0x1b0f82(0x13a)] ? document[_0x1b0f82(0x150)] === 'complete' || document[_0x1b0f82(0x150)] === _0x1b0f82(0x14a) ? (_0x36b2ca(), window[_0x1b0f82(0x13a)](_0x1b0f82(0x141), _0x36b2ca), window[_0x1b0f82(0x13a)]('onmousemove', _0x36b2ca), window[_0x1b0f82(0x13a)](_0x1b0f82(0x14c), _0x36b2ca), window[_0x1b0f82(0x13a)]('onblur', _0x36b2ca)) : setTimeout(argument[_0x1b0f82(0x132)], 0x0) : (window[_0x1b0f82(0x142)](_0x1b0f82(0x14f), _0x36b2ca), window[_0x1b0f82(0x142)](_0x1b0f82(0x130), _0x36b2ca), window['addEventListener'](_0x1b0f82(0x153), _0x36b2ca), window[_0x1b0f82(0x142)](_0x1b0f82(0x136), _0x36b2ca), window[_0x1b0f82(0x142)](_0x1b0f82(0x154), _0x36b2ca));
}()), Object['freeze'](detectDevTools);
