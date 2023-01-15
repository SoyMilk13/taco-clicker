const _0x25c777 = _0x2f45;
(function (_0x2e5e94, _0x5c5ec8) {
    const _0xab8277 = _0x2f45, _0x1b1743 = _0x2e5e94();
    while (!![]) {
        try {
            const _0x5ff7c9 = -parseInt(_0xab8277(0x73)) / 0x1 + parseInt(_0xab8277(0x78)) / 0x2 * (parseInt(_0xab8277(0x79)) / 0x3) + parseInt(_0xab8277(0x92)) / 0x4 + parseInt(_0xab8277(0x93)) / 0x5 * (-parseInt(_0xab8277(0x80)) / 0x6) + parseInt(_0xab8277(0x83)) / 0x7 + parseInt(_0xab8277(0x7c)) / 0x8 * (parseInt(_0xab8277(0x87)) / 0x9) + parseInt(_0xab8277(0x7d)) / 0xa;
            if (_0x5ff7c9 === _0x5c5ec8)
                break;
            else
                _0x1b1743['push'](_0x1b1743['shift']());
        } catch (_0x1624a3) {
            _0x1b1743['push'](_0x1b1743['shift']());
        }
    }
}(_0x489f, 0xe9b95));
const mainTaco = document[_0x25c777(0x7e)]('mainTaco'), currentTacos = document[_0x25c777(0x7e)](_0x25c777(0x9a)), upgrade1Btn = document['getElementById']('upgrade1Btn'), tps = document[_0x25c777(0x7e)]('tps'), upgrade1CostP = document[_0x25c777(0x7e)](_0x25c777(0x98)), upgrade2Btn = document['getElementById']('upgrade2Btn'), tpc = document['getElementById'](_0x25c777(0x8f)), upgrade2CostP = document[_0x25c777(0x7e)](_0x25c777(0x76)), saveBtn = document[_0x25c777(0x7e)](_0x25c777(0x9d)), loadBtn = document[_0x25c777(0x7e)](_0x25c777(0x8b));
function _0x489f() {
    const _0x53a050 = [
        'addEventListener',
        'tpc',
        'Tacos\x20Per\x20Click:\x20',
        'saveUp1Cost',
        '1849196rfrMCB',
        '273710yLCfIt',
        'onclick',
        'interactive',
        'readyState',
        'blur',
        'upgrade1CostP',
        'Tacos:\x20',
        'currentTacos',
        'saveTps',
        'load',
        'saveBtn',
        'Cost:\x20',
        'saveUp2Cost',
        'innerHTML',
        '1812432kdWvrR',
        'setInterval',
        'mainTaco',
        'upgrade2CostP',
        'saveTacos',
        '61532gjqNJB',
        '108YAklie',
        'onmousemove',
        'trunc',
        '876712DNoUnz',
        '15660420VQxfCF',
        'getElementById',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        '126xQHRTA',
        'freeze',
        'attachEvent',
        '3949764rukzie',
        'onresize',
        'focus',
        'saveTpc',
        '18IAHuUF',
        'onblur',
        'callee',
        'setItem',
        'loadBtn',
        'complete',
        'getItem'
    ];
    _0x489f = function () {
        return _0x53a050;
    };
    return _0x489f();
}
document[_0x25c777(0x7e)](_0x25c777(0x75))['draggable'] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco['onclick'] = () => {
    const _0x500d0b = _0x25c777;
    tacos = tacos + tacosPC, currentTacos['innerHTML'] = _0x500d0b(0x99) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x25c777(0x94)] = () => {
    const _0x45b41c = _0x25c777;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x45b41c(0x72)] = 'Tacos\x20Per\x20Second:\x20' + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x45b41c(0x7b)](upgrade1Cost), upgrade1CostP[_0x45b41c(0x72)] = 'Cost:\x20' + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0x25c777(0x94)] = () => {
    const _0x3d8949 = _0x25c777;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc['innerHTML'] = _0x3d8949(0x90) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math[_0x3d8949(0x7b)](upgrade2Cost), upgrade2CostP[_0x3d8949(0x72)] = _0x3d8949(0x9e) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x26fe1e = _0x25c777;
    currentTacos['innerHTML'] = _0x26fe1e(0x99) + tacos;
}
function generateTacos() {
    if (tacosPS == 0x0)
        return;
    else
        return tacos = tacos + tacosPS, tacos;
    ;
}
;
let saveTacos = null, saveTps = null, saveTpc = null, saveUp1Cost = null, saveUp2Cost = null;
function _0x2f45(_0x42ca70, _0x48f12b) {
    const _0x489f73 = _0x489f();
    return _0x2f45 = function (_0x2f458f, _0x3df4f5) {
        _0x2f458f = _0x2f458f - 0x71;
        let _0x198aa9 = _0x489f73[_0x2f458f];
        return _0x198aa9;
    }, _0x2f45(_0x42ca70, _0x48f12b);
}
saveBtn[_0x25c777(0x94)] = () => {
    const _0x403c5d = _0x25c777;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, saveUp1Cost = upgrade1Cost, saveUp2Cost = upgrade2Cost, localStorage['setItem'](_0x403c5d(0x77), saveTacos), localStorage[_0x403c5d(0x8a)](_0x403c5d(0x9b), saveTps), localStorage['setItem'](_0x403c5d(0x86), saveTpc), localStorage['setItem']('saveUp1Cost', saveUp1Cost), localStorage[_0x403c5d(0x8a)](_0x403c5d(0x71), saveUp2Cost);
};
function loadTacos() {
    const _0x295239 = _0x25c777;
    saveTacos = localStorage[_0x295239(0x8d)](_0x295239(0x77)), saveTps = localStorage[_0x295239(0x8d)](_0x295239(0x9b)), saveTpc = localStorage[_0x295239(0x8d)](_0x295239(0x86)), saveUp1Cost = localStorage[_0x295239(0x8d)]('saveUp1Cost'), saveUp2Cost = localStorage['getItem'](_0x295239(0x71)), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), saveUp1Cost = parseInt(saveUp1Cost), saveUp2Cost = parseInt(saveUp2Cost), tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc, upgrade1Cost = saveUp1Cost, upgrade2Cost = saveUp2Cost;
}
;
var generation = window['setInterval'](generateTacos, 0x3e8), updateTacos = window[_0x25c777(0x74)](updateTacoCount, 0x3e8);
loadBtn['onclick'] = () => {
    const _0x1d5909 = _0x25c777;
    if (!localStorage[_0x1d5909(0x8d)](_0x1d5909(0x77)))
        return;
    else
        loadTacos(), setUpgradeCost();
    ;
};
function setUpgradeCost() {
    const _0x3b2c07 = _0x25c777;
    if (!localStorage[_0x3b2c07(0x8d)](_0x3b2c07(0x91)))
        return;
    else
        upgrade1Cost = saveUp1Cost, upgrade1CostP[_0x3b2c07(0x72)] = _0x3b2c07(0x9e) + upgrade1Cost;
    ;
    if (!localStorage[_0x3b2c07(0x8d)]('saveUp2Cost'))
        return;
    else
        upgrade2Cost = saveUp2Cost, upgrade1CostP[_0x3b2c07(0x72)] = 'Cost:\x20' + upgrade2Cost;
    ;
}
;
!(function () {
    const _0x356544 = _0x25c777;
    function _0x2b4417(_0x62ce31) {
        const _0x4716c5 = _0x2f45;
        if (isNaN(+_0x62ce31))
            _0x62ce31 = 0x64;
        var _0x2f6b3c = +new Date();
        debugger;
        var _0x58df78 = +new Date();
        (isNaN(_0x2f6b3c) || isNaN(_0x58df78) || _0x58df78 - _0x2f6b3c > _0x62ce31) && alert(_0x4716c5(0x7f));
    }
    window[_0x356544(0x82)] ? document[_0x356544(0x96)] === _0x356544(0x8c) || document[_0x356544(0x96)] === _0x356544(0x95) ? (_0x2b4417(), window[_0x356544(0x82)](_0x356544(0x84), _0x2b4417), window[_0x356544(0x82)](_0x356544(0x7a), _0x2b4417), window['attachEvent']('onfocus', _0x2b4417), window[_0x356544(0x82)](_0x356544(0x88), _0x2b4417)) : setTimeout(argument[_0x356544(0x89)], 0x0) : (window[_0x356544(0x8e)](_0x356544(0x9c), _0x2b4417), window['addEventListener']('resize', _0x2b4417), window[_0x356544(0x8e)]('mousemove', _0x2b4417), window[_0x356544(0x8e)](_0x356544(0x85), _0x2b4417), window[_0x356544(0x8e)](_0x356544(0x97), _0x2b4417));
}()), Object[_0x25c777(0x81)](detectDevTools);
