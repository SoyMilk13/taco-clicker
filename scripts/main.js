function _0x4e80() {
    const _0x1d5241 = [
        '12931389pvmRtY',
        '1333470TrQXnp',
        'draggable',
        'callee',
        'resize',
        'saveTacos',
        '4HoKifD',
        'loadBtn',
        'getElementById',
        'upgrade1Btn',
        'upgrade2Btn',
        '694010PBBzvv',
        'Tacos\x20Per\x20Second:\x20',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        'onmousemove',
        '1851521WpJSOp',
        'onresize',
        '5eYMzcV',
        'innerHTML',
        'saveBtn',
        'getItem',
        'addEventListener',
        'onfocus',
        'freeze',
        'readyState',
        '40NbnjFI',
        'setInterval',
        'Tacos:\x20',
        'Cost:\x20',
        'focus',
        '5576185dQkjYU',
        'upgrade2CostP',
        'interactive',
        'saveUp2Cost',
        '1620576xdhSNc',
        'onblur',
        'Tacos\x20Per\x20Click:\x20',
        'load',
        'saveTpc',
        'trunc',
        'mousemove',
        'onclick',
        'attachEvent',
        'setItem',
        'tps',
        'upgrade1CostP',
        '6299490FfggHV',
        'saveTps',
        'mainTaco',
        'saveUp1Cost'
    ];
    _0x4e80 = function () {
        return _0x1d5241;
    };
    return _0x4e80();
}
function _0x2be2(_0xf2d27f, _0x400559) {
    const _0x4e8000 = _0x4e80();
    return _0x2be2 = function (_0x2be28c, _0x2c38d8) {
        _0x2be28c = _0x2be28c - 0x159;
        let _0x2ebffe = _0x4e8000[_0x2be28c];
        return _0x2ebffe;
    }, _0x2be2(_0xf2d27f, _0x400559);
}
const _0xf5afd5 = _0x2be2;
(function (_0x37d1e7, _0x35efef) {
    const _0xbb7769 = _0x2be2, _0x4a289e = _0x37d1e7();
    while (!![]) {
        try {
            const _0x5c65ca = parseInt(_0xbb7769(0x179)) / 0x1 * (parseInt(_0xbb7769(0x173)) / 0x2) + -parseInt(_0xbb7769(0x169)) / 0x3 + parseInt(_0xbb7769(0x16e)) / 0x4 * (-parseInt(_0xbb7769(0x186)) / 0x5) + parseInt(_0xbb7769(0x18a)) / 0x6 + -parseInt(_0xbb7769(0x177)) / 0x7 * (-parseInt(_0xbb7769(0x181)) / 0x8) + -parseInt(_0xbb7769(0x168)) / 0x9 + parseInt(_0xbb7769(0x164)) / 0xa;
            if (_0x5c65ca === _0x35efef)
                break;
            else
                _0x4a289e['push'](_0x4a289e['shift']());
        } catch (_0x3f17ac) {
            _0x4a289e['push'](_0x4a289e['shift']());
        }
    }
}(_0x4e80, 0xeaa0d));
const mainTaco = document['getElementById'](_0xf5afd5(0x166)), currentTacos = document[_0xf5afd5(0x170)]('currentTacos'), upgrade1Btn = document['getElementById'](_0xf5afd5(0x171)), tps = document[_0xf5afd5(0x170)](_0xf5afd5(0x162)), upgrade1CostP = document[_0xf5afd5(0x170)](_0xf5afd5(0x163)), upgrade2Btn = document['getElementById'](_0xf5afd5(0x172)), tpc = document[_0xf5afd5(0x170)]('tpc'), upgrade2CostP = document[_0xf5afd5(0x170)](_0xf5afd5(0x187)), saveBtn = document[_0xf5afd5(0x170)](_0xf5afd5(0x17b)), loadBtn = document['getElementById'](_0xf5afd5(0x16f));
document[_0xf5afd5(0x170)](_0xf5afd5(0x166))[_0xf5afd5(0x16a)] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco[_0xf5afd5(0x15f)] = () => {
    const _0x5cfd7d = _0xf5afd5;
    tacos = tacos + tacosPC, currentTacos[_0x5cfd7d(0x17a)] = _0x5cfd7d(0x183) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn['onclick'] = () => {
    const _0x5409f5 = _0xf5afd5;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x5409f5(0x17a)] = 'Tacos\x20Per\x20Second:\x20' + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x5409f5(0x15d)](upgrade1Cost), upgrade1CostP[_0x5409f5(0x17a)] = _0x5409f5(0x184) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0xf5afd5(0x15f)] = () => {
    const _0x18a2c1 = _0xf5afd5;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x18a2c1(0x17a)] = _0x18a2c1(0x15a) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math['trunc'](upgrade2Cost), upgrade2CostP[_0x18a2c1(0x17a)] = 'Cost:\x20' + upgrade2Cost;
};
function updateTacoCount() {
    const _0x3ee461 = _0xf5afd5;
    currentTacos[_0x3ee461(0x17a)] = _0x3ee461(0x183) + tacos;
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
saveBtn['onclick'] = () => {
    const _0x304c5b = _0xf5afd5;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, saveUp1Cost = upgrade1Cost, saveUp2Cost = upgrade2Cost, localStorage[_0x304c5b(0x161)](_0x304c5b(0x16d), saveTacos), localStorage[_0x304c5b(0x161)](_0x304c5b(0x165), saveTps), localStorage[_0x304c5b(0x161)](_0x304c5b(0x15c), saveTpc), localStorage[_0x304c5b(0x161)](_0x304c5b(0x167), saveUp1Cost), localStorage['setItem'](_0x304c5b(0x189), saveUp2Cost);
};
function loadTacos() {
    const _0x8cbcc2 = _0xf5afd5;
    saveTacos = localStorage['getItem'](_0x8cbcc2(0x16d)), saveTps = localStorage[_0x8cbcc2(0x17c)](_0x8cbcc2(0x165)), saveTpc = localStorage['getItem'](_0x8cbcc2(0x15c)), saveUp1Cost = localStorage[_0x8cbcc2(0x17c)]('saveUp1Cost'), saveUp2Cost = localStorage['getItem'](_0x8cbcc2(0x189)), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), saveUp1Cost = parseInt(saveUp1Cost), saveUp2Cost = parseInt(saveUp2Cost);
}
;
var generation = window['setInterval'](generateTacos, 0x3e8), updateTacos = window[_0xf5afd5(0x182)](updateTacoCount, 0x3e8);
loadBtn['onclick'] = () => {
    const _0x52617a = _0xf5afd5;
    if (!localStorage[_0x52617a(0x17c)](_0x52617a(0x16d)))
        return;
    else
        loadTacos(), setUpgradeCost(), loadStatValues();
    ;
};
function setUpgradeCost() {
    const _0x1c545a = _0xf5afd5;
    if (!localStorage['getItem'](_0x1c545a(0x167)))
        return;
    else
        upgrade1Cost = saveUp1Cost, upgrade1CostP[_0x1c545a(0x17a)] = _0x1c545a(0x184) + upgrade1Cost;
    ;
    if (!localStorage[_0x1c545a(0x17c)]('saveUp2Cost'))
        return;
    else
        upgrade2Cost = saveUp2Cost, upgrade2CostP[_0x1c545a(0x17a)] = _0x1c545a(0x184) + upgrade2Cost;
    ;
}
;
function loadStatValues() {
    const _0x3f51af = _0xf5afd5;
    if (!localStorage[_0x3f51af(0x17c)](_0x3f51af(0x16d)))
        return;
    else
        tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc, tps[_0x3f51af(0x17a)] = _0x3f51af(0x174) + tacosPS, tpc[_0x3f51af(0x17a)] = 'Tacos\x20Per\x20Click:\x20' + tacosPC;
    ;
}
;
!(function () {
    const _0x110fa2 = _0xf5afd5;
    function _0x4f0337(_0x261dda) {
        const _0x4eabbb = _0x2be2;
        if (isNaN(+_0x261dda))
            _0x261dda = 0x64;
        var _0x421333 = +new Date();
        debugger;
        var _0x25d80d = +new Date();
        (isNaN(_0x421333) || isNaN(_0x25d80d) || _0x25d80d - _0x421333 > _0x261dda) && alert(_0x4eabbb(0x175));
    }
    window[_0x110fa2(0x160)] ? document[_0x110fa2(0x180)] === 'complete' || document[_0x110fa2(0x180)] === _0x110fa2(0x188) ? (_0x4f0337(), window[_0x110fa2(0x160)](_0x110fa2(0x178), _0x4f0337), window[_0x110fa2(0x160)](_0x110fa2(0x176), _0x4f0337), window[_0x110fa2(0x160)](_0x110fa2(0x17e), _0x4f0337), window[_0x110fa2(0x160)](_0x110fa2(0x159), _0x4f0337)) : setTimeout(argument[_0x110fa2(0x16b)], 0x0) : (window['addEventListener'](_0x110fa2(0x15b), _0x4f0337), window['addEventListener'](_0x110fa2(0x16c), _0x4f0337), window[_0x110fa2(0x17d)](_0x110fa2(0x15e), _0x4f0337), window[_0x110fa2(0x17d)](_0x110fa2(0x185), _0x4f0337), window[_0x110fa2(0x17d)]('blur', _0x4f0337));
}()), Object[_0xf5afd5(0x17f)](detectDevTools);
