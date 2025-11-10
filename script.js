const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion__title");
  title.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const rightSide = document.querySelector(".navbar .right-side");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
  nav.classList.toggle('show');
  menu.classList.toggle('absolute');
  rightSide.classList.toggle('hide');
  navbar.style.justifyContent = navbar.style.justifyContent === 'right' ? 'space-between' : 'right';
})