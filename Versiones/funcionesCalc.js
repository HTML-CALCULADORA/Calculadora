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
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute('tema', 'dark');
  } else {
    document.documentElement.setAttribute('tema', 'light');
  }
}
colorSwitch.addEventListener('change', cambiaTema);

//texto más grande
const textrSwitch = document.querySelector('#switchzoom input[type="checkbox"]');
function cambiaTam(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute('tamText', 'grande');
  } else {
    document.documentElement.setAttribute('tamText', 'normal');
  }
}
colorSwitch.addEventListener('change', cambiaTam);

