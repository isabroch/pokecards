// console.log("It works!")
//
// function toggle(element) {
//   var varType = document.querySelectorAll('.varType');
//
//   for (i = 0; i < varType.length; i++) {
//
//     if (varType[i] == element) {
//       varType[i].classList.toggle('varType');
//     } else {
//       varType[i].classList.remove('varType');
//     }
//   }
// }

function toggle(element, varType) {
  for (a = 0; a < varType.length; a++) {

    if (varType[a] == element) {
      varType[a].classList.toggle('open');
    } else {
      varType[a].classList.remove('open');
    }
  }
}

function toggling() {
  console.log("Creating something" + " awesome");

  var stored = document.querySelectorAll('.stored');
  var closed = document.querySelectorAll('.closed');

  for (b = 0; b < stored.length; b++) {
    stored[b].addEventListener('click', function onclick(event) {
      console.log("Clicky!");
      toggle(this, stored);
    });
  }

  for (c = 0; c < closed.length; c++) {
    closed[c].addEventListener('click', function onclick(event) {
      console.log("Click me!");
      this.classList.toggle('open');
    });
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  toggling();
});
