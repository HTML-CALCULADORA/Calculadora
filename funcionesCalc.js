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
 

  const colorSwitch = document.querySelector('#switchmodo input[type="checkbox"]');
  function cambiaTema(ev){
      if(ev.target.checked){
          document.documentElement.setAttribute('tema', 'dark');
      } else {
          document.documentElement.setAttribute('tema', 'light');
      }
  }
  colorSwitch.addEventListener('change', cambiaTema);

