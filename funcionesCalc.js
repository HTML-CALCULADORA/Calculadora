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
<<<<<<< HEAD


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
=======
//modo oscuro
function cambiaTema() {
alert(tema.value);
    if ([tema="darknormal"]) {
        document.documentElement.setAttribute('tema', 'darknormal');
        
    } else {
        document.documentElement.setAttribute('tema', 'lightnormal');
      
    }
}
//aumento texto
function aumTexto() {
    if ([tema="lightnormal"]) {
    
       document.documentElement.setAttribute('tema', 'lightgrande');
    }
    else if([tema="darknormal"]) {
      alert('2')
        document.documentElement.setAttribute('tema', 'darkgrande');
    }
    else {
  }
}
function cambiar() {
  var boton = document.getElementById('button amptext');

  if (boton.innerHTML == 'Ampliar') {
    boton.innerHTML = 'Reducir';
}
else { boton.innerHTML = 'Ampliar'; }
}

/*Menu responsive*/
function onMenuClick() {
var navbar = document.getElementById("navigation-bar");
var responsive_class_name = "responsive";
navbar.classList.toggle(responsive_class_name);
} 
>>>>>>> af5517dfeb938dd99013736dea86166ecc6ead75
