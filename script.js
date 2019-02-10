// console.log("It works!")
//
// function toggle(element) {
//   var stored = document.querySelectorAll('.stored');
//
//   for (i = 0; i < stored.length; i++) {
//
//     if (stored[i] == element) {
//       stored[i].classList.toggle('stored');
//     } else {
//       stored[i].classList.remove('stored');
//     }
//   }
// }


document.addEventListener('DOMContentLoaded', function(event) {
  console.log("It works!");
  var stored = document.querySelectorAll('.stored');

for (i = 0; i < stored.length; i++) {
  stored[i].addEventListener('click', function onclick(event) {
    console.log("Clicky!");
    toggle(this);
  });}

  function toggle(element) {
    for (i = 0; i < stored.length; i++) {

      if (stored[i] == element) {
        stored[i].classList.toggle('open');
      } else {
        stored[i].classList.remove('open');
      }
    }
  }
});
