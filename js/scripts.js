// Объявляем переменные для бургера (Меню бургер)
var burger = document.querySelector('.side-bar__burger-menu')
var sidebar = document.querySelector('.side-bar')
var logo = document.querySelector('.side-bar__logo')
var langSwitch = document.querySelector('.language__switch')
var langPos = document.querySelector('.language__position')
var lang = document.querySelector('.side-bar__language')
var langCur = document.querySelector('.language__current')
var menuContainer = document.querySelector('.menu__container')
var page = document.querySelector('.page')


// Меню бургер
burger.addEventListener('click', function () {
  page.classList.toggle('lock');
  // body.classList.toggle('lock');
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


// Закрываем меню бургер, если размер окна меньше 700px (т.к. при 700px мы выключаем Sidebar меню)
window.onresize = function() {
  const windowInnerWidth = window.innerWidth
  if(sidebar.classList.contains("theme-transparent")){
    // console.log('НЕ нужно закрывать боковое меню')
    // console.log(windowInnerWidth)
  } else {
    if(windowInnerWidth <= 700) {
      console.log('Закрываем боковое меню (Ширина окна меньше 700px)');
      page.classList.remove('lock');
      burger.classList.remove('active');
      burger.classList.remove('theme-blue');
      sidebar.classList.remove('theme-blue');
      logo.classList.remove('theme-blue');
      langSwitch.classList.toggle('theme-blue');
      langPos.classList.remove('theme-blue');
      lang.classList.remove('theme-blue');
      langCur.classList.remove('theme-blue');
      menuContainer.classList.add("deactivated");
      document.getElementById("menuMask").classList.remove("activated");
    }
  }
};


// Плавный скролл к якорям
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
