// Event Listeners

// element.addEventListener("click", function);
const buttonTwo = document.querySelector(".btn-2");
function alertBtn() {
  alert("j'apprend JavaScript");
}
buttonTwo.addEventListener("click", alertBtn);

// Mouseover
const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'black'
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);

