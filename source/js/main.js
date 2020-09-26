let cards = document.querySelectorAll(".card");
let catalog = document.querySelector(".catalog");
let weight = document.querySelectorAll(".weight__number");

window.onload = function () {
  //секция catalog центрируется, если карточек не больше 3
  if (cards.length <= 3) {
    catalog.classList.add("center");
  }
  for (let j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", cardOnClick);
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

function status() {
  for (let j = 0; j < cards.length; j++) {
    if (cards[j].classList.contains("disabled")) {
      //меняет текст, если находит в карточке класс .disabled, подставляет вкус
      let cardOffer = cards[j].querySelector(".card__offer");
      let cardSubtitle = cards[j].querySelector(".card__subtitle");
      let taste = cardSubtitle.textContent;
      cardOffer.textContent = "Печалька, " + taste + " закончился.";
    }
    if (cards[j].classList.contains("selected")) {
      //меняет текст, если находит в карточке класс .disabled, подставляет вкус
      let cardOffer = cards[j].querySelector(".card__offer");
      let cardSubtitle = cards[j].querySelector(".card__subtitle");
      let taste = cardSubtitle.textContent;

      if (taste == "с фуа-гра") {
        cardOffer.textContent = "Печень утки разварная с артишоками.";
      }
      if (taste == "с рыбой") {
        cardOffer.textContent =
          "Головы щучьи с чесноком да свежайшая сёмгушка.";
      }
      if (taste == "с курой") {
        cardOffer.textContent = "Филе из цыплят с трюфелями в бульоне.";
      }
      // this.onmouseenter = changeText();
      // this.onmouseleave = changeText();
    }
    if (cards[j].classList.contains("default")) {
      let cardOffer = cards[j].querySelector(".card__offer");
      cardOffer.innerHTML =
        "Чего сидишь? Порадуй котэ, <a href=" + "#" + "> купи.</a>";
    }
  }
}

status();

function cardOnClick() {
  if (this.classList.contains("default")) {
    this.classList.remove("default");
    this.classList.add("selected");

    status();
  } else if (this.classList.contains("selected")) {
    this.classList.add("default");
    this.classList.remove("selected");
    status();
  }
}
function changeText() {
  console.log("Навели мышь");
}
