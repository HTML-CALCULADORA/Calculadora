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

function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'darknormal');
      
    } else {
        document.documentElement.setAttribute('tema', 'lightnormal');
     
    }
}
//aumento texto
function aumTexto(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'darkgrande');
    
    }
    else {
        document.documentElement.setAttribute('tema', 'lightgrande');
    
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
