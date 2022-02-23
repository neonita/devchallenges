let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");
let card = document.querySelector(".grid-right__card");
let logo = document.querySelector(".nav__logo");

// menu open
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  card.classList.toggle("grid-right__card--remove");
  logo.classList.toggle("nav__logo--remove");
});

let navLink = document.querySelectorAll(".nav__link");

// menu close
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);
