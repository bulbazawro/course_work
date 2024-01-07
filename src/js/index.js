const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2500,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let right = document.querySelectorAll(".slider-block__right");

right.forEach((elem, idx) => {
  if (idx % 2 == 0) {
    elem.classList.add("bg_1");
  } else {
    elem.classList.add("bg_2");
  }
});

const burgerMenuOpen = document.querySelector(".burger-menu__open");
const burgerMenuClose = document.querySelector(".burger-menu__close");
const headerWrap = document.querySelector(".nav-wrap");
const headerNavigation = document.querySelector(".nav-navigation");
const hederSection = document.querySelector(".header-section");
const headerNavigationList = document.querySelector(".nav-navigation_list");

burgerMenuOpen.addEventListener("click", function () {
  if (headerWrap.classList.contains("active")) {
    headerNavigationList.classList.remove("active");
    hederSection.classList.remove("active");
    headerWrap.classList.remove("active");
    headerNavigation.classList.remove("active");
  } else {
    headerWrap.classList.add("active");
    headerNavigation.classList.add("active");
    hederSection.classList.add("active");
    headerNavigationList.classList.add("active");
  }
});
