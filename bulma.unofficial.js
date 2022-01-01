    // navbar
    for (const burder of $('.navbar-brand')) {
      burder.addEventListener('click', e => {
        burder.classList.toggle('is-active');
        $('#' + burder.dataset.target).classList.toggle('is-active');
      });
    }
    // notification
    for (const element of document.querySelectorAll('.notification > .delete')) {
      element.click(function () {
        e.target.parentNode.classList.add('is-hidden');
      })
    }
    // message
    for (const element of document.querySelectorAll('.message  .delete')) {
      element.click(function () {
        e.target.parentNode.parentNode.classList.add('is-hidden');
      });
    }
    // modal
    for (const element of document.querySelectorAll('.modal .delete, .show-modal')) {
      element.click(function () {
        $('#' + element.dataset.target).classList.toggle('is-active');
      });
    }
