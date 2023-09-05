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


var swiper2 = new Swiper(".mySwiper2", {
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
