const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');


closeModal.addEventListener('click', function(){

    modal.classList.remove('show');

});