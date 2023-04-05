export const changeModalState = state => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  function bindActionToElems(event, elem, prop) {
    if (Array.from(elem).length > 0) {
      elem.forEach((item, i) => {
        item.addEventListener(event, ev => {
          switch (item.nodeName) {
            case 'SPAN':
              state[prop] = i;
              break;
            case 'INPUT':
              if (item.getAttribute('type') === 'checkbox') {
                i === 0 ? (state[prop] = 'cold') : (state[prop] = 'warm');
                elem.forEach((box, j) => {
                  box.checked = j === i;
                });
              } else {
                ev.target.value = item.value.replace(/\D/, '');
                state[prop] = item.value;
              }
              break;
            case 'SELECT':
              state[prop] = item.value;
              break;
          }
          console.log(state);
        });
      });
    }
  }
  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('input', windowProfile, 'profile');
};
