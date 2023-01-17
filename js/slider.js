var swiper1 = new Swiper(".advertisement-slider", {
  loop: true,
  pagination: {
    el: ".advertisement-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".new-slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 45,
  scrollbar: {
    el: ".new-scrollbar",
    hide: false,
    draggable: true,
  },
  navigation: {
    nextEl: ".new-next",
    prevEl: ".new-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1090: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});

var swiper2 = new Swiper(".popular-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 45,
  pagination: {
    el: ".popular-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".popular-next",
    prevEl: ".popular-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
    },
    1001: {
      slidesPerView: 2,
    },
  },
});
