function display(val) {
  document.getElementById('result').value += val;
}

function clearScreen() {
  document.getElementById('result').value = "";
}

function solve() {
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
  return y;
}


//modo oscuro
const colorSwitch = document.querySelector('#switchmodo input[type="checkbox"]');
const textSwitch = document.querySelector('#switchzoom input[type="checkbox"]');
let oscuro = 0;
function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'darknormal');
        oscuro = 1;
    } else {
        document.documentElement.setAttribute('tema', 'lightnormal');
        oscuro = 0;
    }
}
//aumento texto
function aumTexto(ev) {

    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'darkgrande');
        ocuro = 1;
    }
    else {
        document.documentElement.setAttribute('tema', 'lightgrande');
        oscuro = 0;
    }
}

colorSwitch.addEventListener('change', cambiaTema);
textSwitch.addEventListener('change', aumTexto);
let imp = document.getElementsByClassName('claro');
function modo() {
    for (let i = 0; i < imp.length; i++) {
        if (imp[i].className == 'claro' || imp[i].className == 'nada claro') {
            imp[i].classList.add('oscuro');
        } else {
            imp[i].classList.remove('oscuro')
        }
    }
}
