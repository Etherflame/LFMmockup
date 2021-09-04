"use strict";

const btnHamburger = document.querySelector("#btnHamburger");
const menu = document.querySelector(".header__menu");
const hero = document.querySelector(".hero");

btnHamburger.addEventListener("click", function () {
  if (menu.classList.contains("open-menu")) {
    // Closing Menu
    menu.classList.remove("open-menu");
  } else {
    menu.classList.add("open-menu");
  }
});
