const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  paralax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

    // If we need pagination
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

    // Настраиваем номера слайдов
    renderFraction: function (currentClass, totalClass) {
      return '<div class="' + currentClass + '"></div>' + '<div class="' + totalClass + '"></div>';
    },

    // Настраиваем шкалу слайдера
    // renderProgressbar: function (progressbarFillClass) {
    //   return '<span class="' + progressbarFillClass + '"></span>';
    // },
  },


  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.slider-controls__scrollbar',
  },
});

