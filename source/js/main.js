let cards = document.querySelectorAll(".card");
let catalog = document.querySelector(".catalog");

window.onload = function () {
  if (cards.length <= 3) {
    catalog.classList.add("center");
  }
};
