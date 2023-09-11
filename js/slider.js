// Свайпер слайдов на главной
var mainSwiper1 = new Swiper(".mainSwiper", {
  loop: true,
  speed: 1000,
  hashNavigation: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   reverseDirection: true,
  // },
});

// Свайпер текста-заголовка на главной (прокрутка заголовка)
var mainSwiper3 = new Swiper(".mainSwiper-title", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  direction: 'vertical',
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   reverseDirection: true,
  // },
});

// Свайпер текста-заголовка на главной (прокрутка заголовка)
var mainSwiper4 = new Swiper(".mainSwiper-description", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   reverseDirection: true,
  // },
});

mainSwiper1.controller.control = [mainSwiper2, mainSwiper3, mainSwiper4];

var servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 44,
  centeredSlides: true,
  mousewheel: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var servicesSwiper2 = new Swiper(".servicesSwiper2", {
  slidesPerView: 1,
  spaceBetween: 44,
  mousewheel: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

mainSwiper1.on('slideChangeTransitionEnd', function() {
  document.querySelector('.slide-navigation__link__current').classList.remove('slide-navigation__link__current');
  var hash = window.location.hash.replace('#', '');
  document.querySelector("a[href='#"+hash+"']").classList.add('slide-navigation__link__current');
  console.log("a[href='#"+hash+"']");
});
