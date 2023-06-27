let ejecucion = document.getElementById("displayScreen").innerHTML;
function display(val) {
  if (ejecucion == "ejecutado") {
    result.innerHTML = val;
    ejecucion = "reiniciado";
    return;
  } else {
    let x = result.innerHTML;
    if (x === "0") {
      result.innerHTML = val;
    } else {
      result.innerHTML += val;
    }
  }
}
function operar(val) {
  result.innerHTML += val;
  ejecucion = "reiniciado";
  return;
}
function borrar() {
  let x = result.innerHTML;
  if (x.length === 1 || x === "Error!") {
    result.innerHTML = "0";
  } else {
    let y = x.slice(0, -1);
    result.innerHTML = y;
  }
}
function inicio() {
  result.innerHTML = "0";
}
function clearScreen() {
  result.innerHTML = "0";
}
function solve() {
  let x = result.innerHTML;
  ejecucion = "ejecutado";

  try {
    let y = eval(x);
    result.innerHTML = y;
    return y;
  } catch {
    result.innerHTML = "Error!";
    return;
  }
}

//modo oscuro
let nombre = document.getElementById("button amptext");
let nomodo = document.getElementById("button modo");
let texto = document.getElementById("lupa");
let modo = document.getElementById("luna");
let temal = document.querySelector("body");
function cambiaTema() {
  let atributo = temal.getAttribute("tema");
  if (atributo == "lightnormal") {
    temal.setAttribute("tema", "darknormal");
    modo.classList.replace("fa-moon", "fa-sun");
  } else if (atributo == "lightgrande") {
    temal.setAttribute("tema", "darkgrande");
    modo.classList.replace("fa-moon", "fa-sun");
  } else if (atributo == "darkgrande") {
    temal.setAttribute("tema", "lightgrande");
    modo.classList.replace("fa-sun", "fa-moon");
  } else {
    temal.setAttribute("tema", "lightnormal");
    modo.classList.replace("fa-sun", "fa-moon");
  }
}
//aumento texto
function aumTexto() {
  let atributo = temal.getAttribute("tema");
  if (atributo == "lightnormal") {
    temal.setAttribute("tema", "lightgrande");
    texto.classList.replace(
      "fa-magnifying-glass-plus",
      "fa-magnifying-glass-minus"
    );
  } else if (atributo == "darknormal") {
    temal.setAttribute("tema", "darkgrande");
    texto.classList.replace(
      "fa-magnifying-glass-plus",
      "fa-magnifying-glass-minus"
    );
  } else if (atributo == "darkgrande") {
    temal.setAttribute("tema", "darknormal");
    texto.classList.replace(
      "fa-magnifying-glass-minus",
      "fa-magnifying-glass-plus"
    );
  } else {
    temal.setAttribute("tema", "lightnormal");
    texto.classList.replace(
      "fa-magnifying-glass-minus",
      "fa-magnifying-glass-plus"
    );
  }
}
/*Menu responsive*/
function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  navbar.classList.toggle(responsive_class_name);
}
/*Modal*/
const modal_container = document.getElementById("modal_container")
const modal_btn = document.getElementById("modal_btn")

modal_btn.addEventListener("click", () => {
  createModal(`
    <h2>Ayuda</h2>
    
    <p>
    <span id="lupa" class="fa-solid fa-magnifying-glass-plus"></span>
    Aumenta el tamaño del texto para ayudar a su comprensión
    </>
    <br>
    <br>
    <p>
    <span id="luna" class="fa-solid fa-moon"></span>
    Cambia a modo oscuro con fondo negro y texto en blanco para resaltar
    </>   
  `, "modal-desdeArriba")
})
const createModal = (content = "sin contenido", style = "") => {
  modal_container.innerHTML = `
    <div class="modal" id="modal">
      <div class="modal-content ${style}">
        ${content}
        <button class="modal-btn-closed" id="modal_btn_closed">x</button>
      </div>
    </div>
  `
  document.getElementById("modal").addEventListener("click", (e) => {
    console.log(e.target.id)
    if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
      modal_container.innerHTML = ""
    }
  })
}
