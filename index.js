const textInput = document.querySelector("#text-input");
const btnH1 = document.querySelector("#btn-h1");
const btnH2 = document.querySelector("#btn-h2");
const btnH3 = document.querySelector("#btn-h3");

btnH1.addEventListener("click", btnH1Handler);

btnH2.addEventListener("click", btnH2Handler);

btnH3.addEventListener("click", btnH3Handler);

function btnH1Handler() {
  textInput.value = "h1";
}

function btnH2Handler() {
  textInput.value = "h2";
}

function btnH3Handler() {
  textInput.value = "h3";
}
