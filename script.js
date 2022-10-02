'use strict';

// Audio for accept & decline buttons
document.getElementById('acceptBtn').addEventListener('click', function () {
  document.getElementById('accept').play();
});

document.getElementById('declineBtn').addEventListener('click', function () {
  document.getElementById('decline').play();
});

// Button click counter
const button = document.getElementById('acceptBtn');
const counter = document.getElementById('counter');
var count = 0;

function counterAdd() {
  button.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
  });
}

counterAdd();

// Information Scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', viewCard);

viewCard();

function viewCard() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

console.log(viewCard);
