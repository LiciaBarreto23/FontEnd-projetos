function avaliar() {
  let nota;
  let controle = 0;

  const radioButtons = document.querySelectorAll('input[name="item"]');

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      nota = radioButton.value;
      controle = 1;
      break;
    }
  }

  if (controle === 0) {
    window.alert("Escolha uma nota!");
  } else {
    document.querySelector("#select").innerHTML = `${nota}`;
    document.querySelector(".notas").style = "display: none;";
    document.querySelector(".feedback").style = "display: flex;";
  }
}

function back() {
  document.querySelector(".notas").style = "display: flex;";
  document.querySelector(".feedback").style = "display: none;";

  const radioButtons = document.querySelectorAll('input[name="item"]');
  for (const radioButton of radioButtons) {
    radioButton.checked = false;
  }
}
