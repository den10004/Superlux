const burgerButton = document.querySelector(".header-burger");
const burgerPopup = document.querySelector(".popup");
const header = document.querySelector(".header");
const navList = document.querySelector("#nav-list").cloneNode(1);
const aboutList = document.querySelector("#header-about").cloneNode(1);
const scrollTop = document.querySelector(".footer-scroll-top");
const body = document.body;
burgerButton.addEventListener("click", OpenModal);

function OpenModal(e) {
  e.preventDefault();
  burgerButton.classList.toggle("header-burger_active");
  burgerPopup.classList.toggle("open");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  burgerPopup.appendChild(aboutList);
  burgerPopup.appendChild(navList);
}

scrollTop.addEventListener("click", () => {
  window.scrollTo(pageYOffset, 0);
});
