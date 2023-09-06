var swiper = new Swiper(".mySwiper", {
  // Optional parameters
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

// // Прокрутка текста на слайдере (слайдер поверх слайдера)
// var swiper2 = new Swiper(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 44,
//   speed: 1000,
//   loop: true,
//   direction: 'vertical',

//   // autoplay: {
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   //   reverseDirection: true,
//   // },
// });

// swiper.controller.control = swiper2;
// swiper2.controller.control = swiper;

var swiper3 = new Swiper(".mySwiper3", {
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

// GSAP Animation
// Анимация уходящего слайда
swiper.on('slideChange', function(){
  gsap.to('.anim-title', { duration: 0.2, y: '200px' });
  gsap.to('.anim-tag', { duration: 0.2, autoAlpha: 0 });
  gsap.to('.anim-description', { duration: 0.2, autoAlpha: 0 });
});
// Анимация приходящего слайда
swiper.on('slideChangeTransitionEnd', function(){
  gsap.to('.anim-title', { duration: 0, y: '-200px' }); // Стартовая позиция заголовка
  gsap.to('.anim-title', { duration: 0.2, y: 0 }); // Конечная позиция заголовка
  gsap.to('.anim-tag', { duration: 0.2, autoAlpha: 1 });
  gsap.to('.anim-description', { duration: 0.2, autoAlpha: 1 });

  gasp.to('.swiper-slide-active .port-text', { duration: 0, autoAlpha: 1 })
  gasp.to('.swiper-slide-next .port-text', { duration: 0, autoAlpha: 0 })
  gasp.to('.swiper-slide-prev .port-text', { duration: 0, autoAlpha: 0 })
  gasp.to('.swiper-slide-active', { duration: 0.5, scale: 1, ease: Power4.easeOut })
});
gsap.to('.swiper-slide-prev .port-text', { duration: 0, autoAlpha: 0 });
gsap.to('.swiper-slide-next .port-text', { duration: 0, autoAlpha: 0 });
gsap.to('.swiper-slide-active', { duration: 0, scale: 1, ease: Power4.easeOut });
