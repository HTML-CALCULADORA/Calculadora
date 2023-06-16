function display(val) {
    document.getElementById('result').innerHTML += val;
}
function clearScreen() {
    document.getElementById('result').innerHTML = "";
}
function solve() {
    let x = document.getElementById('result').innerHTML;
    let y = eval(x);
    document.getElementById('result').innerHTML = y;
    return y;
}
//modo oscuro
/* function cambiaTema() {
    alert(tema);
    if ([tema == 'lightnormal']) {
        document.documentElement.setAttribute('tema', 'darknormal');
    } else {
        document.documentElement.setAttribute('tema', 'lightnormal');
    }
} */
function cambiaTema() {
    let temal = document.querySelector('body');
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'darknormal');
    } else if (atributo == 'lightgrande') {
        temal.setAttribute('tema', 'darkgrande');
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'lightgrande');
    } else {
        temal.setAttribute('tema', 'lightnormal');
    }
}
//aumento texto
function aumTexto() {
    let temal = document.querySelector('body');
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'lightgrande');
    } else if (atributo == 'darknormal') {
        temal.setAttribute('tema', 'darkgrande');
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'darknormal');
    } else {
        temal.setAttribute('tema', 'lightnormal');
    }
}
/* function aumTexto() {
    if ([tema = "lightnormal"]) {
        document.documentElement.setAttribute('tema', 'lightgrande');
    }
    else if ([tema = "darknormal"]) {
        alert('2')
        document.documentElement.setAttribute('tema', 'darkgrande');
    }
    else {
        document.documentElement.setAttribute('tema', 'darknormal');
    }
} */
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
