const _0x4a2070 = _0x3fa6;
(function (_0x248905, _0x4974e7) {
    const _0x1cbbbf = _0x3fa6, _0x587d11 = _0x248905();
    while (!![]) {
        try {
            const _0x400cc7 = -parseInt(_0x1cbbbf(0x172)) / 0x1 + -parseInt(_0x1cbbbf(0x189)) / 0x2 + parseInt(_0x1cbbbf(0x188)) / 0x3 + -parseInt(_0x1cbbbf(0x17b)) / 0x4 + -parseInt(_0x1cbbbf(0x16d)) / 0x5 * (parseInt(_0x1cbbbf(0x183)) / 0x6) + -parseInt(_0x1cbbbf(0x163)) / 0x7 + parseInt(_0x1cbbbf(0x16f)) / 0x8 * (parseInt(_0x1cbbbf(0x18b)) / 0x9);
            if (_0x400cc7 === _0x4974e7)
                break;
            else
                _0x587d11['push'](_0x587d11['shift']());
        } catch (_0x561c7a) {
            _0x587d11['push'](_0x587d11['shift']());
        }
    }
}(_0x532d, 0xcaf04));
const mainTaco = document['getElementById']('mainTaco'), currentTacos = document['getElementById']('currentTacos'), upgrade1Btn = document[_0x4a2070(0x187)](_0x4a2070(0x181)), tps = document['getElementById'](_0x4a2070(0x17d)), upgrade1CostP = document[_0x4a2070(0x187)](_0x4a2070(0x16c)), upgrade2Btn = document[_0x4a2070(0x187)]('upgrade2Btn'), tpc = document[_0x4a2070(0x187)](_0x4a2070(0x185)), upgrade2CostP = document['getElementById'](_0x4a2070(0x17a)), saveBtn = document[_0x4a2070(0x187)](_0x4a2070(0x174)), loadBtn = document[_0x4a2070(0x187)](_0x4a2070(0x173)), resetBtn = document[_0x4a2070(0x187)](_0x4a2070(0x16e)), warningMsg = document[_0x4a2070(0x187)]('warningMsg'), resetConfirmBtn = document[_0x4a2070(0x187)](_0x4a2070(0x180)), resetCancelBtn = document[_0x4a2070(0x187)](_0x4a2070(0x184)), updateMsg = document[_0x4a2070(0x187)](_0x4a2070(0x182)), updateMsgCloseBtn = document[_0x4a2070(0x187)](_0x4a2070(0x170));
warningMsg[_0x4a2070(0x167)][_0x4a2070(0x169)] = 'hidden', updateMsg['style'][_0x4a2070(0x169)] = _0x4a2070(0x18c), document['getElementById'](_0x4a2070(0x186))[_0x4a2070(0x176)] = ![];
let tacosPS = 0x0, tacosPC = 0x1, showUpdateMsg = 'y';
showUpdate();
let tacos = 0x0;
mainTaco[_0x4a2070(0x18a)] = () => {
    const _0x21195e = _0x4a2070;
    tacos = tacos + tacosPC, currentTacos[_0x21195e(0x17f)] = _0x21195e(0x166) + tacos;
};
let upgrade1Cost = 0x64;
upgrade1Btn[_0x4a2070(0x18a)] = () => {
    const _0x4ce2ad = _0x4a2070;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps[_0x4ce2ad(0x17f)] = 'Tacos\x20Per\x20Second:\x20' + tacosPS, upgrade1Cost = upgrade1Cost * 1.45, upgrade1Cost = Math[_0x4ce2ad(0x178)](upgrade1Cost), upgrade1CostP[_0x4ce2ad(0x17f)] = _0x4ce2ad(0x177) + upgrade1Cost;
};
let upgrade2Cost = 0xc8;
upgrade2Btn['onclick'] = () => {
    const _0x202c75 = _0x4a2070;
    if (tacos < upgrade2Cost)
        return;
    else
        return tacos = tacos - upgrade2Cost, tacosPC = tacosPC + 0x1, tpc[_0x202c75(0x17f)] = _0x202c75(0x160) + tacosPC, upgrade2Cost = upgrade2Cost * 1.55, upgrade2Cost = Math[_0x202c75(0x178)](upgrade2Cost), upgrade2CostP[_0x202c75(0x17f)] = 'Cost:\x20' + upgrade2Cost;
};
function updateTacoCount() {
    const _0x50d463 = _0x4a2070;
    currentTacos['innerHTML'] = _0x50d463(0x166) + tacos;
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
function _0x3fa6(_0x5ecf0e, _0x10effb) {
    const _0x532d47 = _0x532d();
    return _0x3fa6 = function (_0x3fa632, _0x44b7a4) {
        _0x3fa632 = _0x3fa632 - 0x160;
        let _0x4e6e74 = _0x532d47[_0x3fa632];
        return _0x4e6e74;
    }, _0x3fa6(_0x5ecf0e, _0x10effb);
}
saveBtn[_0x4a2070(0x18a)] = () => {
    const _0x452389 = _0x4a2070;
    saveTacos = tacos, saveTps = tacosPS, saveTpc = tacosPC, saveUp1Cost = upgrade1Cost, saveUp2Cost = upgrade2Cost, localStorage[_0x452389(0x165)](_0x452389(0x16b), saveTacos), localStorage['setItem'](_0x452389(0x179), saveTps), localStorage[_0x452389(0x165)](_0x452389(0x168), saveTpc), localStorage['setItem'](_0x452389(0x161), saveUp1Cost), localStorage[_0x452389(0x165)](_0x452389(0x17e), saveUp2Cost);
};
function loadTacos() {
    const _0x513148 = _0x4a2070;
    saveTacos = localStorage['getItem'](_0x513148(0x16b)), saveTps = localStorage[_0x513148(0x164)](_0x513148(0x179)), saveTpc = localStorage[_0x513148(0x164)](_0x513148(0x168)), saveUp1Cost = localStorage[_0x513148(0x164)](_0x513148(0x161)), saveUp2Cost = localStorage['getItem'](_0x513148(0x17e)), saveTacos = parseInt(saveTacos), saveTps = parseInt(saveTps), saveTpc = parseInt(saveTpc), saveUp1Cost = parseInt(saveUp1Cost), saveUp2Cost = parseInt(saveUp2Cost);
}
;
var generation = window[_0x4a2070(0x175)](generateTacos, 0x3e8), updateTacos = window[_0x4a2070(0x175)](updateTacoCount, 0x3e8);
loadBtn['onclick'] = () => {
    const _0xdc9e29 = _0x4a2070;
    if (!localStorage[_0xdc9e29(0x164)](_0xdc9e29(0x16b)))
        return;
    else
        loadTacos(), setUpgradeCost(), loadStatValues();
    ;
};
function setUpgradeCost() {
    const _0x23b097 = _0x4a2070;
    if (!localStorage[_0x23b097(0x164)](_0x23b097(0x161)))
        return;
    else
        upgrade1Cost = saveUp1Cost, upgrade1CostP[_0x23b097(0x17f)] = _0x23b097(0x177) + upgrade1Cost;
    ;
    if (!localStorage[_0x23b097(0x164)](_0x23b097(0x17e)))
        return;
    else
        upgrade2Cost = saveUp2Cost, upgrade2CostP[_0x23b097(0x17f)] = _0x23b097(0x177) + upgrade2Cost;
    ;
}
function _0x532d() {
    const _0x2dd853 = [
        'getItem',
        'setItem',
        'Tacos:\x20',
        'style',
        'saveTpc',
        'visibility',
        'Tacos\x20Per\x20Second:\x20',
        'saveTacos',
        'upgrade1CostP',
        '22115hViSDx',
        'resetBtn',
        '37561800kaSOAk',
        'updateOk',
        'showUpdateMsg',
        '216378iAmwZN',
        'loadBtn',
        'saveBtn',
        'setInterval',
        'draggable',
        'Cost:\x20',
        'trunc',
        'saveTps',
        'upgrade2CostP',
        '6480272YneTgZ',
        'clear',
        'tps',
        'saveUp2Cost',
        'innerHTML',
        'resetConfirm',
        'upgrade1Btn',
        'updateMsg',
        '786kuWdts',
        'resetCancel',
        'tpc',
        'mainTaco',
        'getElementById',
        '2777367XzElHV',
        '1989614enExsL',
        'onclick',
        '9tFwSpN',
        'hidden',
        'Tacos\x20Per\x20Click:\x20',
        'saveUp1Cost',
        'visible',
        '9653784IFRbjc'
    ];
    _0x532d = function () {
        return _0x2dd853;
    };
    return _0x532d();
}
;
function loadStatValues() {
    const _0x1f404b = _0x4a2070;
    if (!localStorage[_0x1f404b(0x164)](_0x1f404b(0x16b)))
        return;
    else
        tacos = saveTacos, tacosPS = saveTps, tacosPC = saveTpc, tps[_0x1f404b(0x17f)] = _0x1f404b(0x16a) + tacosPS, tpc[_0x1f404b(0x17f)] = 'Tacos\x20Per\x20Click:\x20' + tacosPC;
    ;
}
;
function resetGame() {
    const _0x597cff = _0x4a2070;
    localStorage[_0x597cff(0x17c)](), tacos = 0x0, tacosPS = 0x0, tacosPC = 0x1, upgrade1Cost = 0x64, upgrade2Cost = 0xc8, tps[_0x597cff(0x17f)] = _0x597cff(0x16a) + tacosPS, tpc['innerHTML'] = _0x597cff(0x160) + tacosPC;
}
;
resetBtn['onclick'] = () => {
    const _0x144a9c = _0x4a2070;
    return warningMsg['style'][_0x144a9c(0x169)] = _0x144a9c(0x162);
}, resetConfirmBtn['onclick'] = () => {
    const _0x329a42 = _0x4a2070;
    return resetGame(), warningMsg[_0x329a42(0x167)][_0x329a42(0x169)] = 'hidden';
}, resetCancelBtn[_0x4a2070(0x18a)] = () => {
    const _0x4627c6 = _0x4a2070;
    return warningMsg['style']['visibility'] = _0x4627c6(0x18c);
};
function showUpdate() {
    const _0x45ccbe = _0x4a2070;
    if (localStorage[_0x45ccbe(0x164)]('showUpdateMsg') == 'n')
        return;
    else
        updateMsg[_0x45ccbe(0x167)][_0x45ccbe(0x169)] = _0x45ccbe(0x162);
    ;
}
;
updateMsgCloseBtn[_0x4a2070(0x18a)] = () => {
    const _0x34ef4e = _0x4a2070;
    return showUpdateMsg = 'n', localStorage[_0x34ef4e(0x165)](_0x34ef4e(0x171), showUpdateMsg), updateMsg[_0x34ef4e(0x167)][_0x34ef4e(0x169)] = _0x34ef4e(0x18c);
};
