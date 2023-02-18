"use strict";

const burgerBtn = document.querySelector(".main__header-hamburger-menu");
const closeBtn = document.querySelector(".btn--close");
const mobileMenu = document.querySelector(".menu");
const menuBackdrop = document.querySelector(".menu__backdrop");

burgerBtn.addEventListener("click", function () {
  mobileMenu.classList.add("unhide-menu");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("unhide-menu");
});

menuBackdrop.addEventListener("click", function () {
  mobileMenu.classList.remove("unhide-menu");
});
