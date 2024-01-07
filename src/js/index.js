/* import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"; */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

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
const headerWrap = document.querySelector(".header_wrap");
const headerNavigation = document.querySelector(".header_navigation");
const mainSection = document.querySelector(".main_section");
const headerNavigationList = document.querySelector(".header_navigation_list");

burgerMenuOpen.addEventListener("click", function () {
  if (headerWrap.classList.contains("active")) {
    headerNavigationList.classList.remove("active");
    mainSection.classList.remove("active");
    headerWrap.classList.remove("active");
    headerNavigation.classList.remove("active");
  } else {
    headerWrap.classList.add("active");
    headerNavigation.classList.add("active");
    mainSection.classList.add("active");
    headerNavigationList.classList.add("active");
  }
});
