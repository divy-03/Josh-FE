document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    modal.style.display = 'flex';
    document.body.classList.add('no-scroll');
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
