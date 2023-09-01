const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  paralax: true,
  speed: 1000,

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
    renderFraction: function (currentClass, totalClass) {
      return '<div class="' + currentClass + '"></div>' + '<div class="' + totalClass + '"></div>';
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
});

