const _0x56a671 = _0x36e0;
(function (_0x1eedca, _0xd332e1) {
    const _0x3b1a63 = _0x36e0, _0x52751a = _0x1eedca();
    while (!![]) {
        try {
            const _0x56e6a9 = parseInt(_0x3b1a63(0x10b)) / 0x1 + parseInt(_0x3b1a63(0x104)) / 0x2 + -parseInt(_0x3b1a63(0x107)) / 0x3 + -parseInt(_0x3b1a63(0x103)) / 0x4 + parseInt(_0x3b1a63(0x109)) / 0x5 + parseInt(_0x3b1a63(0x10e)) / 0x6 * (parseInt(_0x3b1a63(0x10a)) / 0x7) + -parseInt(_0x3b1a63(0x110)) / 0x8 * (parseInt(_0x3b1a63(0x102)) / 0x9);
            if (_0x56e6a9 === _0xd332e1)
                break;
            else
                _0x52751a['push'](_0x52751a['shift']());
        } catch (_0x5cbd19) {
            _0x52751a['push'](_0x52751a['shift']());
        }
    }
}(_0x1b95, 0x9233c));
const mainTaco = document[_0x56a671(0x111)](_0x56a671(0x106)), currentTacos = document['getElementById'](_0x56a671(0xfe)), upgrade1Btn = document['getElementById'](_0x56a671(0x101)), tps = document[_0x56a671(0x111)](_0x56a671(0xff)), upgrade1CostP = document[_0x56a671(0x111)](_0x56a671(0x105));
let tacosPS = 0x0, tacos = 0x0;
function _0x36e0(_0x7e15f3, _0xd5c90f) {
    const _0x1b95d7 = _0x1b95();
    return _0x36e0 = function (_0x36e02a, _0x3207ff) {
        _0x36e02a = _0x36e02a - 0xfe;
        let _0x630c52 = _0x1b95d7[_0x36e02a];
        return _0x630c52;
    }, _0x36e0(_0x7e15f3, _0xd5c90f);
}
mainTaco[_0x56a671(0x100)] = () => {
    const _0x478c03 = _0x56a671;
    tacos = tacos + 0x1, currentTacos[_0x478c03(0x10c)] = _0x478c03(0x10d) + tacos;
};
let upgrade1Cost = 0x64;
function _0x1b95() {
    const _0x231d12 = [
        'tps',
        'onclick',
        'upgrade1Btn',
        '14481xaWJkD',
        '2273196voUUmL',
        '2237974clBazw',
        'upgrade1CostP',
        'mainTaco',
        '1757166EuOaEu',
        'setInterval',
        '510060wRVuJZ',
        '3152107uvnGIS',
        '1003741ojUhJg',
        'innerHTML',
        'Tacos:\x20',
        '12SOfdaG',
        'trunc',
        '6824NCUpGN',
        'getElementById',
        'currentTacos'
    ];
    _0x1b95 = function () {
        return _0x231d12;
    };
    return _0x1b95();
}
upgrade1Btn[_0x56a671(0x100)] = () => {
    const _0x1754b3 = _0x56a671;
    if (tacos < upgrade1Cost)
        return;
    else
        return tacos = tacos - upgrade1Cost, tacosPS = tacosPS + 0x1, tps['innerHTML'] = 'Tacos\x20Per\x20Second:\x20' + tacosPS, upgrade1Cost = upgrade1Cost * 1.55, upgrade1Cost = Math[_0x1754b3(0x10f)](upgrade1Cost), upgrade1CostP[_0x1754b3(0x10c)] = 'Cost:\x20' + upgrade1Cost;
};
function updateTacoCount() {
    const _0x57a37b = _0x56a671;
    currentTacos[_0x57a37b(0x10c)] = _0x57a37b(0x10d) + tacos;
}
function generateTacos() {
    if (tacosPS == 0x0)
        return;
    else
        return tacos = tacos + tacosPS, tacos;
    ;
}
;
var generation = window[_0x56a671(0x108)](generateTacos, 0x3e8), updateTacos = window[_0x56a671(0x108)](updateTacoCount, 0x3e8);
