function modalClick() {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]')
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  
    window.onclick = function (event) {
      if (event.target == refs.modal) {
        refs.modal.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
      }
    };
  }
  
  modalClick();