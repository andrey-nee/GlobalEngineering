var swiper = new Swiper(".mySwiper", {
  // Optional parameters
  loop: true,
  speed: 1500,
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

//   // Navigation arrows
//   navigation: {
//     nextEl: '#sliderPrev',
//     prevEl: '#sliderNext',
//     },
// });


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
swiper.on('transitionStart', function(){
  gsap.to('.anim-description', { duration: 0.2, opacity: 0 });
  gsap.to('.anim-tag', { duration: 0.2, opacity: 0 });
});

swiper.on('transitionEnd', function(){
  gsap.to('.anim-description', { duration: 0.5, opacity: 1, delay: 0.5 });
  gsap.to('.anim-tag', { duration: 0.5, opacity: 1, delay: 0.5 });
});


