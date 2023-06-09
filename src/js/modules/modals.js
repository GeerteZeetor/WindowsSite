export const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', ev => {
        if (ev.target) {
          ev.preventDefault();
        }
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.padding = '0 calc(20px - (100vw - 100%)) 0 0';
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', ev => {
      if (ev.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
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

  // showModalByTime('.popup', 60000);
  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close',
    false
  );
  bindModal(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );
};
