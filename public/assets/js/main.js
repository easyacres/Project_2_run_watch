// // Select Element Function
// const selectElement = function (element) {
//   return document.querySelector(element);
// };

// let menuToggler = selectElement(".menu-toggle");
// let body = selectElement("body");

  let cart = [];
  let total = 0;
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
  }

// menuToggler.addEventListener("click", function () {
//   body.classList.toggle("open");
// });
// // Loading Screen Wraperr
// let spinnerWrapper = document.querySelector(".spinner-wrapper");

// window.addEventListener("load", function () {
//   spinnerWrapper.parentElement.removeChild(spinnerWrapper);
// });
