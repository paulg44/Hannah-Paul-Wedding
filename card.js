const cards = document.querySelectorAll('.card-container');

cards.forEach(cards => {
  cards.addEventListener('click', function () {
    cards.classList.toggle('is-flipped');
  });
});
