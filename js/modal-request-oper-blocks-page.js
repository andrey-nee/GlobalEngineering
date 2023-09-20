// Объявляем переменные для модалки (Оставить заявку)
var buttonRequestOpenOperBlocks = document.querySelector('.request-block__button')
var buttonRequestClose = document.querySelector('.modal-request__close-button')
var modalRequestContainer = document.querySelector('.modal-request__container')
var sliderOperBlocks = document.querySelector('.operational-blocks__slider')


// Модалка Оставить заявку (на странице Операционные блоки)
buttonRequestOpenOperBlocks.addEventListener('click', function () {
  page.classList.add('lock');
  sidebar.classList.add('hidden');
  sliderOperBlocks.classList.add('hidden');
  buttonRequestOpenOperBlocks.classList.add('activated');
  modalRequestContainer.classList.remove("deactivated");
  modalRequestContainer.classList.add("activated");
  document.getElementById("modalRequestMask2").classList.add("activated");
});
buttonRequestClose.addEventListener('click', function () {
  page.classList.remove('lock');
  sidebar.classList.remove('hidden');
  sliderOperBlocks.classList.remove('hidden');
  buttonRequestOpenOperBlocks.classList.remove('activated');
  modalRequestContainer.classList.remove("activated");
  modalRequestContainer.classList.add("deactivated");
  document.getElementById("modalRequestMask2").classList.remove("activated");
});
