function _0x8c11() {
    const _0x4c0047 = [
        'onblur',
        'loadBtn',
        '1250584OMiqmA',
        'saveTpc',
        'onresize',
        'onfocus',
        'resize',
        'Tacos:\x20',
        'addEventListener',
        'Tacos\x20Per\x20Second:\x20',
        'blur',
        '335QdmivK',
        'saveTps',
        '41628uMGVym',
        'getItem',
        '27968666duZkhQ',
        '7331535boLYaj',
        'callee',
        '3706490DFKLXC',
        'upgrade2CostP',
        'readyState',
        '40wUFGOK',
        'interactive',
        'saveUp2Cost',
        'upgrade1CostP',
        'setItem',
        'getElementById',
        'upgrade2Btn',
        'tpc',
        'onclick',
        'trunc',
        'tps',
        'currentTacos',
        '1597911oibQIl',
        'innerHTML',
        'Cost:\x20',
        'attachEvent',
        'saveTacos',
        'DevTools\x20detected!\x20All\x20changes\x20made\x20have\x20been\x20undone.',
        'draggable',
        'focus',
        '546852hyNimC',
        'freeze',
        '4YxoAGb',
        'mainTaco',
        'saveUp1Cost',
        '9auEYDA'
    ];
    _0x8c11 = function () {
        return _0x4c0047;
    };
    return _0x8c11();
}
const _0x22b709 = _0x26be;
(function (_0x421e44, _0x3ffca7) {
    const _0x1238e2 = _0x26be, _0x3a15d8 = _0x421e44();
    while (!![]) {
        try {
            const _0x1456bb = parseInt(_0x1238e2(0x145)) / 0x1 * (parseInt(_0x1238e2(0x143)) / 0x2) + parseInt(_0x1238e2(0x148)) / 0x3 * (parseInt(_0x1238e2(0x14b)) / 0x4) + parseInt(_0x1238e2(0x154)) / 0x5 * (parseInt(_0x1238e2(0x156)) / 0x6) + -parseInt(_0x1238e2(0x13b)) / 0x7 * (-parseInt(_0x1238e2(0x15e)) / 0x8) + -parseInt(_0x1238e2(0x159)) / 0x9 + parseInt(_0x1238e2(0x15b)) / 0xa + -parseInt(_0x1238e2(0x158)) / 0xb;
            if (_0x1456bb === _0x3ffca7)
                break;
            else
                _0x3a15d8['push'](_0x3a15d8['shift']());
        } catch (_0x1cc3fe) {
            _0x3a15d8['push'](_0x3a15d8['shift']());
        }
    }
}(_0x8c11, 0x9f011));
const mainTaco = document['getElementById'](_0x22b709(0x146)), currentTacos = document[_0x22b709(0x163)](_0x22b709(0x13a)), upgrade1Btn = document['getElementById']('upgrade1Btn'), tps = document[_0x22b709(0x163)](_0x22b709(0x139)), upgrade1CostP = document[_0x22b709(0x163)](_0x22b709(0x161)), upgrade2Btn = document[_0x22b709(0x163)](_0x22b709(0x164)), tpc = document[_0x22b709(0x163)](_0x22b709(0x165)), upgrade2CostP = document[_0x22b709(0x163)](_0x22b709(0x15c)), saveBtn = document[_0x22b709(0x163)]('saveBtn'), loadBtn = document[_0x22b709(0x163)](_0x22b709(0x14a));
document['getElementById'](_0x22b709(0x146))[_0x22b709(0x141)] = ![];
let tacosPS = 0x0, tacosPC = 0x1, tacos = 0x0;
mainTaco[_0x22b709(0x137)] = () => {
    const _0x52405b = _0x22b709;
    tacos = tacos + tacosPC, currentTacos[_0x52405b(0x13c)] = _0x52405b(0x150) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x22b709(0x137)] = () => {
    const _0x495ebf = _0x22b709;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x495ebf(0x13c)] = _0x495ebf(0x152) + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x495ebf(0x138)](upgrade1Cost), upgrade1CostP[_0x495ebf(0x13c)] = _0x495ebf(0x13d) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn[_0x22b709(0x137)] = () => {
    const _0x26a9d8 = _0x22b709;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x26a9d8(0x13c)] = 'Tacos\x20Per\x20Click:\x20' + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math[_0x26a9d8(0x138)](upgrade2Cost), upgrade2CostP[_0x26a9d8(0x13c)] = _0x26a9d8(0x13d) + upgrade2Cost;
};
function updateTacoCount() {
    const _0x4c1297 = _0x22b709;
    currentTacos['innerHTML'] = _0x4c1297(0x150) + tacos;
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
saveBtn[_0x22b709(0x137)] = () => {
    const _0x1dae36 = _0x22b709;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, saveUp1Cost = upgrade1Cost, saveUp2Cost = upgrade2Cost, localStorage[_0x1dae36(0x162)]('saveTacos', saveTacos), localStorage[_0x1dae36(0x162)]('saveTps', saveTps), localStorage[_0x1dae36(0x162)](_0x1dae36(0x14c), saveTpc), localStorage['setItem'](_0x1dae36(0x147), saveUp1Cost), localStorage[_0x1dae36(0x162)](_0x1dae36(0x160), saveUp2Cost);
};
function loadTacos() {
    const _0x291cd4 = _0x22b709;
    saveTacos = localStorage[_0x291cd4(0x157)](_0x291cd4(0x13f)), saveTps = localStorage[_0x291cd4(0x157)](_0x291cd4(0x155)), saveTpc = localStorage[_0x291cd4(0x157)](_0x291cd4(0x14c)), saveUp1Cost = localStorage[_0x291cd4(0x157)](_0x291cd4(0x147)), saveUp2Cost = localStorage['getItem']('saveUp2Cost'), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), saveUp1Cost = parseInt(saveUp1Cost), saveUp2Cost = parseInt(saveUp2Cost), tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc, upgrade1Cost = saveUp1Cost, upgrade2Cost = saveUp2Cost;
}
function _0x26be(_0x5c77f0, _0x4725c3) {
    const _0x8c110a = _0x8c11();
    return _0x26be = function (_0x26be48, _0x3bd8f2) {
        _0x26be48 = _0x26be48 - 0x137;
        let _0x3c7001 = _0x8c110a[_0x26be48];
        return _0x3c7001;
    }, _0x26be(_0x5c77f0, _0x4725c3);
}
;
var generation = window['setInterval'](generateTacos, 0x3e8), updateTacos = window['setInterval'](updateTacoCount, 0x3e8);
loadBtn[_0x22b709(0x137)] = () => {
    const _0x373520 = _0x22b709;
    if (!localStorage[_0x373520(0x157)](_0x373520(0x13f)))
        return;
    else
        loadTacos(), setUpgradeCost();
    ;
};
function setUpgradeCost() {
    const _0x39c3e4 = _0x22b709;
    if (!localStorage[_0x39c3e4(0x157)](_0x39c3e4(0x147)))
        return;
    else
        upgrade1Cost = saveUp1Cost, upgrade1CostP['innerHTML'] = _0x39c3e4(0x13d) + upgrade1Cost;
    ;
    if (!localStorage[_0x39c3e4(0x157)](_0x39c3e4(0x160)))
        return;
    else
        upgrade2Cost = saveUp2Cost, upgrade2CostP[_0x39c3e4(0x13c)] = 'Cost:\x20' + upgrade2Cost;
    ;
}
;
!(function () {
    const _0x5cd087 = _0x22b709;
    function _0x53c6b2(_0x1b9348) {
        const _0x338b06 = _0x26be;
        if (isNaN(+_0x1b9348))
            _0x1b9348 = 0x64;
        var _0x3be8d4 = +new Date();
        debugger;
        var _0x336379 = +new Date();
        (isNaN(_0x3be8d4) || isNaN(_0x336379) || _0x336379 - _0x3be8d4 > _0x1b9348) && alert(_0x338b06(0x140));
    }
    window[_0x5cd087(0x13e)] ? document['readyState'] === 'complete' || document[_0x5cd087(0x15d)] === _0x5cd087(0x15f) ? (_0x53c6b2(), window[_0x5cd087(0x13e)](_0x5cd087(0x14d), _0x53c6b2), window[_0x5cd087(0x13e)]('onmousemove', _0x53c6b2), window[_0x5cd087(0x13e)](_0x5cd087(0x14e), _0x53c6b2), window[_0x5cd087(0x13e)](_0x5cd087(0x149), _0x53c6b2)) : setTimeout(argument[_0x5cd087(0x15a)], 0x0) : (window[_0x5cd087(0x151)]('load', _0x53c6b2), window[_0x5cd087(0x151)](_0x5cd087(0x14f), _0x53c6b2), window[_0x5cd087(0x151)]('mousemove', _0x53c6b2), window[_0x5cd087(0x151)](_0x5cd087(0x142), _0x53c6b2), window[_0x5cd087(0x151)](_0x5cd087(0x153), _0x53c6b2));
}()), Object[_0x22b709(0x144)](detectDevTools);
