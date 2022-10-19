const tabButtons = document.querySelectorAll(".__main-product-tabs-button"),
  tabContents = document.querySelectorAll(".__main-product-tabs-content-child");

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active-tab");
    });
    tabContents[index].classList.add("active-tab");
    tabButtons[index].classList.add("active-tab");
  });
});

// tab slider 1

const swiper = new Swiper(".swiper-home-tab", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },

      loop: false,
    },
    979: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination-home-tab",
  },
  navigation: {
    nextEl: ".tab-slider-button-next",
    prevEl: ".tab-slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// tab slider 2

const swiper2 = new Swiper(".swiper-home-tab-2", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },

      loop: false,
    },
    979: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination-home-tab",
  },
  navigation: {
    nextEl: ".tab-2-slider-button-next",
    prevEl: ".tab-2-slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// tab slider 3

const swiper3 = new Swiper(".swiper-home-tab-3", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },

      loop: false,
    },
    979: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination-home-tab",
  },
  navigation: {
    nextEl: ".tab-3-slider-button-next",
    prevEl: ".tab-3-slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// tab slider 4

const swiper4 = new Swiper(".swiper-home-tab-4", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },

      loop: false,
    },
    979: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination-home-tab",
  },
  navigation: {
    nextEl: ".tab-4-slider-button-next",
    prevEl: ".tab-4-slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
