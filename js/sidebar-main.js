var burger = document.querySelector('.side-bar__burger-menu')
var sidebar = document.querySelector('.side-bar')
var logo = document.querySelector('.side-bar__logo')
var langSwitch = document.querySelector('.language__switch')
var langPos = document.querySelector('.language__position')
var lang = document.querySelector('.side-bar__language')
var langCur = document.querySelector('.language__current')
var menuMask = document.querySelector('.menu__mask')

// Отлеживаем скролл
window.addEventListener('scroll', function () {
  // Текущий скролл
  const scrollPosition = window.scrollY;
  // Элемент расстояние (по вертикали) до которого нужно вычислить
  var element = document.getElementById("position");
  // Координаты нашего элемента относительно всей страницы
  var slideChangePosition = getCoords(element);
  // Сколько пикселей осталось до нашего элемента
  let diff = slideChangePosition.top - scrollPosition;
  if (window.scrollY >= slideChangePosition.top) {
    burger.classList.remove('theme-transparent');
    sidebar.classList.remove('theme-transparent');
    logo.classList.remove('theme-transparent');
    langSwitch.classList.remove('theme-transparent');
    langPos.classList.remove('theme-transparent');
    lang.classList.remove('theme-transparent');
    langCur.classList.remove('theme-transparent');
    menuMask.classList.remove('theme-transparent');
  } else {
    burger.classList.add('theme-transparent');
    sidebar.classList.add('theme-transparent');
    logo.classList.add('theme-transparent');
    langSwitch.classList.add('theme-transparent');
    langPos.classList.add('theme-transparent');
    lang.classList.add('theme-transparent');
    langCur.classList.add('theme-transparent');
    menuMask.classList.add('theme-transparent');
  }
  // console.log("Расстояние до точки появления сайдбара ",diff);
});

// Функиця для вычисления координат (X,Y) элемента на странице
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + scrollY,
    left: box.left + scrollX
  };
}
