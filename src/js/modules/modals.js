export const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', ev => {
        if (ev.target) {
          ev.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.padding = '0 calc(20px - (100vw - 100%)) 0 0';
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
    modal.addEventListener('click', ev => {
      if (ev.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  }
  function showModalByTime(modalSelector, time) {
    setTimeout(() => {
      document.querySelector(modalSelector).style.display = 'block';
      document.body.style.padding = '0 calc(20px - (100vw - 100%)) 0 0';
      document.body.classList.add('modal-open');
    }, time);
  }

  showModalByTime('.popup', 60000);
  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  bindModal('.phone_link', '.popup', '.popup .popup_close');
};
