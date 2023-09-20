// Объявляем переменные для модалки (Оставить заявку)
var buttonRequestOpenMain = document.querySelector('.modal-request__open-button')
var buttonRequestClose = document.querySelector('.modal-request__close-button')
var modalRequestContainer = document.querySelector('.modal-request__container')


// Модалка Оставить заявку (на Главной странице)
buttonRequestOpenMain.addEventListener('click', function () {
  page.classList.add('lock');
  sidebar.classList.add('hidden');
  buttonRequestOpenMain.classList.add('activated');
  modalRequestContainer.classList.remove("deactivated");
  modalRequestContainer.classList.add("activated");
  document.getElementById("modalRequestMask").classList.add("activated");
});
buttonRequestClose.addEventListener('click', function () {
  page.classList.remove('lock');
  sidebar.classList.remove('hidden');
  buttonRequestOpenMain.classList.remove('activated');
  modalRequestContainer.classList.remove("activated");
  modalRequestContainer.classList.add("deactivated");
  document.getElementById("modalRequestMask").classList.remove("activated");
});
