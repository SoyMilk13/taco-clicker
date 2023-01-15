const _0x2bcfe8 = _0x4b27;
(function (_0x41dc8b, _0x51ccbe) {
    const _0x12af12 = _0x4b27, _0x2242b2 = _0x41dc8b();
    while (!![]) {
        try {
            const _0x55a846 = parseInt(_0x12af12(0xc3)) / 0x1 * (-parseInt(_0x12af12(0xa8)) / 0x2) + parseInt(_0x12af12(0xb2)) / 0x3 + -parseInt(_0x12af12(0xb6)) / 0x4 * (parseInt(_0x12af12(0xc9)) / 0x5) + parseInt(_0x12af12(0xa4)) / 0x6 * (-parseInt(_0x12af12(0xa6)) / 0x7) + parseInt(_0x12af12(0xb4)) / 0x8 + -parseInt(_0x12af12(0xb5)) / 0x9 + -parseInt(_0x12af12(0xa5)) / 0xa * (-parseInt(_0x12af12(0xbd)) / 0xb);
            if (_0x55a846 === _0x51ccbe)
                break;
            else
                _0x2242b2['push'](_0x2242b2['shift']());
        } catch (_0x3ddf9b) {
            _0x2242b2['push'](_0x2242b2['shift']());
        }
    }
}(_0xe220, 0x9559e));
const mainTaco = document[_0x2bcfe8(0xc8)](_0x2bcfe8(0xc4)), currentTacos = document[_0x2bcfe8(0xc8)](_0x2bcfe8(0xa9)), upgrade1Btn = document['getElementById'](_0x2bcfe8(0xa0)), tps = document['getElementById'](_0x2bcfe8(0xb1)), upgrade1CostP = document[_0x2bcfe8(0xc8)](_0x2bcfe8(0xc6)), upgrade2Btn = document['getElementById'](_0x2bcfe8(0xc0)), tpc = document['getElementById'](_0x2bcfe8(0xae)), upgrade2CostP = document[_0x2bcfe8(0xc8)](_0x2bcfe8(0xbb)), saveBtn = document['getElementById']('saveBtn'), loadBtn = document[_0x2bcfe8(0xc8)](_0x2bcfe8(0xcb));
document[_0x2bcfe8(0xc8)]('mainTaco')[_0x2bcfe8(0xa1)] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco[_0x2bcfe8(0x9f)] = () => {
    const _0x392858 = _0x2bcfe8;
    tacos = tacos + tacosPC, currentTacos[_0x392858(0xac)] = _0x392858(0xcc) + tacos;
};
function _0x4b27(_0x592c23, _0x2a905c) {
    const _0xe2207e = _0xe220();
    return _0x4b27 = function (_0x4b27cd, _0x4c25ed) {
        _0x4b27cd = _0x4b27cd - 0x9d;
        let _0x247202 = _0xe2207e[_0x4b27cd];
        return _0x247202;
    }, _0x4b27(_0x592c23, _0x2a905c);
}
let upgrade1Cost = 0x64;
upgrade1Btn[_0x2bcfe8(0x9f)] = () => {
    const _0x4eb298 = _0x2bcfe8;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps['innerHTML'] = _0x4eb298(0xbc) + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x4eb298(0xb0)](upgrade1Cost), upgrade1CostP[_0x4eb298(0xac)] = _0x4eb298(0xaf) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0x2bcfe8(0x9f)] = () => {
    const _0xc77f2 = _0x2bcfe8;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0xc77f2(0xac)] = _0xc77f2(0xc5) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math[_0xc77f2(0xb0)](upgrade1Cost), upgrade2CostP['innerHTML'] = _0xc77f2(0xaf) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x23acfd = _0x2bcfe8;
    currentTacos[_0x23acfd(0xac)] = _0x23acfd(0xcc) + tacos;
}
function _0xe220() {
    const _0xdbbc96 = [
        '5101470vwoPpX',
        '20alxWqw',
        '7kcGrjJ',
        'readyState',
        '10216llXKGf',
        'currentTacos',
        'interactive',
        'setItem',
        'innerHTML',
        'onmousemove',
        'tpc',
        'Cost:\x20',
        'trunc',
        'tps',
        '1240113TgZEdk',
        'attachEvent',
        '8562856EnRktr',
        '588447YHTjfx',
        '176bzZbAA',
        'mousemove',
        'setInterval',
        'freeze',
        'load',
        'upgrade2CostP',
        'Tacos\x20Per\x20Second:\x20',
        '10353827tOGqps',
        'callee',
        'saveTpc',
        'upgrade2Btn',
        'focus',
        'blur',
        '193hKURNq',
        'mainTaco',
        'Tacos\x20Per\x20Click:\x20',
        'upgrade1CostP',
        'saveTps',
        'getElementById',
        '96935BKNPzh',
        'onfocus',
        'loadBtn',
        'Tacos:\x20',
        'onblur',
        'addEventListener',
        'onclick',
        'upgrade1Btn',
        'draggable',
        'resize',
        'complete'
    ];
    _0xe220 = function () {
        return _0xdbbc96;
    };
    return _0xe220();
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
saveBtn[_0x2bcfe8(0x9f)] = () => {
    const _0x4edb8d = _0x2bcfe8;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, localStorage[_0x4edb8d(0xab)]('saveTacos', saveTacos), localStorage[_0x4edb8d(0xab)](_0x4edb8d(0xc7), saveTps), localStorage[_0x4edb8d(0xab)](_0x4edb8d(0xbf), saveTpc);
};
function loadTacos() {
    const _0x439cd0 = _0x2bcfe8;
    saveTacos = localStorage['getItem']('saveTacos'), saveTps = localStorage['getItem'](_0x439cd0(0xc7)), saveTpc = localStorage['getItem'](_0x439cd0(0xbf)), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc;
}
;
var generation = window[_0x2bcfe8(0xb8)](generateTacos, 0x3e8), updateTacos = window[_0x2bcfe8(0xb8)](updateTacoCount, 0x3e8);
loadBtn[_0x2bcfe8(0x9f)] = () => {
    loadTacos();
}, !(function () {
    const _0x39a54a = _0x2bcfe8;
    function _0x424de3(_0x56c569) {
        if (isNaN(+_0x56c569))
            _0x56c569 = 0x64;
        var _0x3d0ede = +new Date();
        debugger;
        var _0x542295 = +new Date();
        (isNaN(_0x3d0ede) || isNaN(_0x542295) || _0x542295 - _0x3d0ede > _0x56c569) && alert('DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.');
    }
    window[_0x39a54a(0xb3)] ? document[_0x39a54a(0xa7)] === _0x39a54a(0xa3) || document[_0x39a54a(0xa7)] === _0x39a54a(0xaa) ? (_0x424de3(), window[_0x39a54a(0xb3)]('onresize', _0x424de3), window[_0x39a54a(0xb3)](_0x39a54a(0xad), _0x424de3), window[_0x39a54a(0xb3)](_0x39a54a(0xca), _0x424de3), window[_0x39a54a(0xb3)](_0x39a54a(0x9d), _0x424de3)) : setTimeout(argument[_0x39a54a(0xbe)], 0x0) : (window[_0x39a54a(0x9e)](_0x39a54a(0xba), _0x424de3), window[_0x39a54a(0x9e)](_0x39a54a(0xa2), _0x424de3), window[_0x39a54a(0x9e)](_0x39a54a(0xb7), _0x424de3), window[_0x39a54a(0x9e)](_0x39a54a(0xc1), _0x424de3), window['addEventListener'](_0x39a54a(0xc2), _0x424de3));
}()), Object[_0x2bcfe8(0xb9)](detectDevTools);
