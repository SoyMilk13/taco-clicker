const mainTaco = document.getElementById('mainTaco');
const currentTacos = document.getElementById('currentTacos');
const upgrade1Btn = document.getElementById('upgrade1Btn');
const tps = document.getElementById('tps');
const upgrade1CostP = document.getElementById('upgrade1CostP');

let tacosPS = 0;

let tacos = 0;
mainTaco.onclick = () => {
    tacos = tacos + 1;
    currentTacos.innerHTML = `Tacos: ${tacos}`;
};

let upgrade1Cost = 100;
upgrade1Btn.onclick = () => {
    if (tacos < upgrade1Cost) {
        return;
    } else {
        tacos = tacos - upgrade1Cost;
        tacosPS = tacosPS + 1;
        tps.innerHTML = `Tacos Per Second: ${tacosPS}`;
        upgrade1Cost = upgrade1Cost * 1.55;
        upgrade1Cost = Math.trunc(upgrade1Cost);
        return upgrade1CostP.innerHTML = `Cost: ${upgrade1Cost}`
    }
};

function updateTacoCount() {
    currentTacos.innerHTML = `Tacos: ${tacos}`;
}

function generateTacos() {
    if (tacosPS == 0) {
        return;
    } else {
        tacos = tacos + tacosPS;
        return tacos;
    };
};

var generation = window.setInterval(generateTacos, 1000);
var updateTacos = window.setInterval(updateTacoCount, 1000);