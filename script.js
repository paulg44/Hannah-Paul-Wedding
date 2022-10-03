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
