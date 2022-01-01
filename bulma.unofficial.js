for (const burder of document.getElementsByClassName('navbar-burger')) {
      const menuId = burder.dataset.target;
      const menu = document.getElementById(menuId);
      burder.addEventListener('click', e => {
        burder.classList.toggle('is-active');
        menu.classList.toggle('is-active');
      });
    }
    for (const element of document.querySelectorAll('.notification > .delete')) {
      element.addEventListener('click', e => {
        e.target.parentNode.classList.add('is-hidden');
      });
    }
    for (const element of document.querySelectorAll('.message  .delete')) {
      element.addEventListener('click', e => {
        e.target.parentNode.parentNode.classList.add('is-hidden');
      });
    }
    for (const element of document.querySelectorAll('.modal .delete, .show-modal')) {
      element.addEventListener('click', e => {
        const modalId = element.dataset.target;
        const modal = document.getElementById(modalId);
        modal.classList.toggle('is-active');
      });
    }
