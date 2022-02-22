let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");
let card = document.querySelector(".grid-right__card--active");

// menu open
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");

  card.style.display = "none";
});

let navLink = document.querySelectorAll(".nav__link");

// menu close
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");

    card.style.display = "block";
  })
);
