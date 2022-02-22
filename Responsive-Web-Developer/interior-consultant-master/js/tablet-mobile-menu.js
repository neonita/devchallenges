let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");

// menu open
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

let navLink = document.querySelectorAll(".nav__link");

// menu close
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);
