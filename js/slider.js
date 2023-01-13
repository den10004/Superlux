var swiper1 = new Swiper(".advertisement-slider", {
  loop: true,
  pagination: {
    el: ".advertisement-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".new-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 45,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  navigation: {
    nextEl: ".new-next",
    prevEl: ".new-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
