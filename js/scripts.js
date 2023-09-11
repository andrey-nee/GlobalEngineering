// Объявляем переменные для бургера
var burger = document.querySelector('.side-bar__burger-menu')
var sidebar = document.querySelector('.side-bar')
var logo = document.querySelector('.side-bar__logo')
var langSwitch = document.querySelector('.language__switch')
var langPos = document.querySelector('.language__position')
var lang = document.querySelector('.side-bar__language')
var langCur = document.querySelector('.language__current')
var menuContainer = document.querySelector('.menu__container')
var page = document.querySelector('.page')
var body = document.querySelector('.page__body')

// Меню бургер для мобилок
burger.addEventListener('click', function () {
  page.classList.toggle('lock');
  body.classList.toggle('lock');
  burger.classList.toggle('active');
  // menu.classList.toggle('deactivated');
  burger.classList.toggle('theme-blue');
  sidebar.classList.toggle('theme-blue');
  logo.classList.toggle('theme-blue');
  langSwitch.classList.toggle('theme-blue');
  langPos.classList.toggle('theme-blue');
  lang.classList.toggle('theme-blue');
  langCur.classList.toggle('theme-blue');
  menuContainer.classList.toggle("deactivated");
  document.getElementById("menuMask").classList.toggle("activated");
});

// Акардион
// const movieParent = document.querySelector(".movie-parent");
// const movieGenres = document.querySelector(".movie-genres");

// movieParent.addEventListener("mouseover", function() {
//   movieGenres.style.display = "block";
// });

// movieParent.addEventListener("mouseout", function() {
//   movieGenres.style.display = "none";
// });
