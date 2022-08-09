let elForm = document.querySelector(".hero__form");
let elInput = document.querySelector(".hero__input");
let elList = document.querySelector(".hero__list");


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let elItem = document.createElement("li");
  let elInputValue = (elInput.value);

  elList.appendChild(elItem);
  elItem.textContent = elInputValue;
  elInput.value = "";

  elItem.setAttribute("style", "margin-bottom: 16px;");
});
