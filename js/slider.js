// Свайпер слайдов на главной
var mainSwiper1 = new Swiper(".mainSwiper", {
  loop: true,
  speed: 1000,
  hashNavigation: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true, // Отключение автопрокрутки после того как пользователь начал перелистывать слайды
  },

  keyboard: {
    enabled: true,
  },
    // Pagination
  pagination: {
    el: '.slider-controls__counter',
    type: 'fraction',
    // Номер текущего слайда в формате "01"
    formatFractionCurrent: function (number) {
      if (number < 10) {
          return '0' + number;
      } else {
          return number;
      }
    },
    // Номер последнего слайда в формате "01"
    formatFractionTotal: function (number) {
      if (number < 10) {
          return '0' + number;
      } else {
          return number;
      }
    },
    // Кастомные номера слайдов (type: fraction)
    // И здесь же создаем <div></div> для скроллбара
    renderFraction: function (currentClass, totalClass) {
      return '<div class="' + currentClass + '"></div>' + '<div class="slider-controls__scrollbar"></div>' + '<div class="' + totalClass + '"></div>';
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
  // Scrollbar
  scrollbar: {
    el: '.slider-controls__scrollbar',
  },
  // Навигация по хэшу
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
});

// Свайпер тега на главной (прокрутка тега)
var mainSwiper2 = new Swiper(".mainSwiper-tag", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});

// Свайпер текста-заголовка на главной (прокрутка заголовка)
var mainSwiper3 = new Swiper(".mainSwiper-title", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  direction: 'vertical',
});

// Свайпер текста-описания на главной (прокрутка описания)
var mainSwiper4 = new Swiper(".mainSwiper-description", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});

// Вешаем управление слайдеров текста-заголовка/тега/текста-описания на Главный слайдер
mainSwiper1.controller.control = [mainSwiper2, mainSwiper3, mainSwiper4];

// Свайпер услуг на главной странице
var servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true, // Отключение автопрокрутки после того как пользователь начал перелистывать слайды
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#mainServicesSliderNext',
    prevEl: '#mainServicesSliderPrev',
  },
});

// Свайпер услуг на странице Услуги
var servicesSwiper2 = new Swiper(".servicesSwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true, // Отключение автопрокрутки после того как пользователь начал перелистывать слайды
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
    // Navigation arrows
    navigation: {
      nextEl: '#servicesServicesSliderNext',
      prevEl: '#servicesServicesSliderPrev',
    },
});

// Свайпер-предпросмотр услуг на странице Операционные блоки
var operBlocksSwiperMini = new Swiper(".operationalBlocksSwiper-mini", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 500,
  loop: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  // Ширина слайдов зависит от их количества в ленте
  breakpoints: {
    200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 11,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 12,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 13,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 14,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 15,
      spaceBetween: 10,
    },
  },
});
// Свайпер услуг на странице Операционные блоки
var operBlocksSwiper = new Swiper(".operationalBlocksSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  thumbs: {
    swiper: operBlocksSwiperMini,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true, // Отключение автопрокрутки после того как пользователь начал перелистывать слайды
  },
});

mainSwiper1.on('slideChangeTransitionEnd', function() {
  document.querySelector('.slide-navigation__link__current').classList.remove('slide-navigation__link__current');
  var hash = window.location.hash.replace('#', '');
  document.querySelector("a[href='#"+hash+"']").classList.add('slide-navigation__link__current');
  // console.log("a[href='#"+hash+"']");
});
