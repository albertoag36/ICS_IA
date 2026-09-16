document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card[data-type]');

  cards.forEach(function (card) {
    var type = card.dataset.type;

    var activate = function () {
      if (type === 'clases') {
        alert('En desarrollo');
        return;
      }

      var imageBox = card.querySelector('.card-image');
      if (!imageBox) return;

      var isOpen = imageBox.classList.toggle('open');
      card.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    card.addEventListener('click', activate);
  });
});
