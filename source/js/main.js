let cards = document.querySelectorAll(".card");
let catalog = document.querySelector(".catalog");
let weight = document.querySelectorAll(".weight__number");
window.onload = function () {
  //секция catalog центрируется, если карточек не больше 3
  if (cards.length <= 3) {
    catalog.classList.add("center");
  }
};
function weightNumber() {
  //подарки меняются в зависимости от веса
  for (let i = 0; i < weight.length; i++) {
    let parentWight = weight[i].parentElement;
    let parentParentWeight = parentWight.parentElement;
    let ul = parentParentWeight.querySelector(".features");
    let li = document.createElement("li");
    li.classList.add("features__item");
    ul.appendChild(li);
    let li2 = li.cloneNode(true);
    ul.appendChild(li2);
    if (weight[i].textContent == "0,5") {
      li.innerHTML = "<b>10</b> порций";
      li2.innerHTML = "мышь в подарок";
    }
    if (weight[i].textContent == "2") {
      li.innerHTML = "<b>40</b> порций";
      li2.innerHTML = "<b>2</b> мыши в подарок";
    }
    if (weight[i].textContent == "5") {
      li.innerHTML = "<b>40</b> порций";
      li2.innerHTML = "<b>2</b> мыши в подарок";
      let li3 = li.cloneNode(true);
      ul.appendChild(li3);
      li3.innerHTML = "заказчик доволен";
    }
  }
}
weightNumber();
