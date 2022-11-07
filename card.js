const cards = document.querySelectorAll('.card-container');
const shadow = document.querySelectorAll('.card-shadow');

cards.forEach(cards => {
  cards.addEventListener('click', function () {
    cards.classList.toggle('is-flipped');
  });
});

shadow.forEach(shadow => {
  shadow.addEventListener('click', function () {
    shadow.classList.toggle('card-shadow');
  });
});
