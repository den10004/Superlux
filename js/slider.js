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
    dragSize: 70,
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
    699: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      spaceBetween: 10,
    },
    1001: {
      spaceBetween: 45,
    },
  },
});

var swiper3 = new Swiper(".catalog-slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 90,
  pagination: {
    el: ".catalog-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".catalog-next",
    prevEl: ".catalog-prev",
  },
});

var swiper4 = new Swiper(".survey-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".survey-pagination",
    clickable: true,
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper5 = new Swiper(".news-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 60,
  pagination: {
    el: ".news-pagination",
    clickable: true,
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper6 = new Swiper(".profit-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 43,
  breakpoints: {
    120: {
      slidesPerView: 1,
    },

    678: {
      slidesPerView: 2,
    },

    1000: {
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper7 = new Swiper(".associated-slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 45,

  navigation: {
    nextEl: ".associated-next",
    prevEl: ".associated-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 10,
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

var swiper = new Swiper(".characteristic-slider", {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".characteristic-next",
    prevEl: ".characteristic-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    531: {
      slidesPerView: 4,
    },
  },
});
