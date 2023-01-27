const scrollTop = document.querySelector(".footer-scroll-top");
const burgerButton = document.querySelector(".header-burger");
const burgerPopup = document.querySelector(".popup");
const navList = document.querySelector("#nav-list").cloneNode(1);
const aboutList = document.querySelector("#header-about").cloneNode(1);
const body = document.body;

burgerButton.addEventListener("click", hambHandler);

scrollTop.addEventListener("click", () => {
  window.scrollTo(pageYOffset, 0);
});

function hambHandler(e) {
  e.preventDefault();
  burgerPopup.classList.toggle("open");
  renderPopup();
}

function renderPopup() {
  burgerPopup.appendChild(aboutList);
  burgerPopup.appendChild(navList);
}
