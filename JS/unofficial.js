// Photo scroll
// Photo array
let photoArr = [
  {
    id: 1,
    image: '../img/IMG-20231127-WA0005.jpg',
    description: 'test image one',
  },
  {
    id: 2,
    image: '../img/IMG-20231127-WA0062.jpg',
    description: 'test image two',
  },
  {
    id: 3,
    image: '../img/wedding_background.jpg',
    description: 'test image three',
  },
  {
    id: 4,
    image: '../img/aisle_walk.jpg',
    description: 'aisle walk',
  },
];

// const fs = require('fs');
// const path = require('path');

// const imageFolder = '../img';
// const photoArr = [];

// fs.readdir(imageFolder, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }

//   files.forEach(file => {
//     const filePath = path.join(imageFolder, file);

//     // Check if it's a file (not a directory)
//     if (fs.statSync(filePath).isFile()) {
//       // Create an object for each image with file path and description
//       const imageObject = {
//         path: filePath,
//         description: `Description for ${file}`, // You can replace this with your actual description logic
//       };

//       // Add the object to the array
//       photoArr.push(imageObject);
//     }
//   });

//   // Now imageArray contains an array of objects with file paths and descriptions
//   console.log(imageArray);
// });

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const unofficialBtn = document.querySelector('.unofficial-btn');
const photoContainer = document.querySelector('.photo-container');

let currentPhotoIndex = 0;

// Create photo element to make it look like a stack of photos
function createPhotoCard(photo) {
  // Create photo card
  const photoCard = document.createElement('div');
  photoCard.classList.add('photo-card');

  //   Create image
  const img = document.createElement('img');
  img.src = photo.image;
  img.alt = photo.description;

  //   Create description
  const description = document.createElement('p');
  description.textContent = photo.description;

  //   Add image and description to photo card
  photoCard.appendChild(img);
  photoCard.appendChild(description);

  //   Add randomness to pile
  const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
  const offsetX = Math.random() * 20 - 10; // Random horizontal offset between -10 and 10 pixels
  const offsetY = Math.random() * 20 - 10; // Random vertical offset between -10 and 10 pixels

  photoCard.style.transform = `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`;

  return photoCard;
}

// Function to initialize the photo cards
function initializePhotoCards() {
  photoArr.forEach(photo => {
    const photoCard = createPhotoCard(photo);

    // Add photo card to container
    photoContainer.appendChild(photoCard);
    //   Reduce opacity on cards lower down in the stack
    const existingPhoto = document.querySelectorAll('.photo-card img');
    existingPhoto.forEach((card, index) => {
      if (index === currentPhotoIndex) {
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0.3;
      }
    });
  });
}

// Call the initialization function
initializePhotoCards();

// Function to change photos on button click
function photoCardChanger(photo) {
  //   photoContainer.innerHTML = '';

  const currentPhoto = photoArr[currentPhotoIndex];
  const photoCard = createPhotoCard(currentPhoto);
  photoContainer.appendChild(photoCard);
}

prevBtn.addEventListener('click', () => {
  console.log('prev clicked');
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
  } else {
    // Wrap around to the last photo if at the first photo
    currentPhotoIndex = photoArr.length - 1;
  }
  photoCardChanger();
});

nextBtn.addEventListener('click', () => {
  console.log('next clicked');
  if (currentPhotoIndex < photoArr.length - 1) {
    currentPhotoIndex++;
  } else {
    // Wrap around to the first photo if at the last photo
    currentPhotoIndex = 0;
  }
  photoCardChanger();
});

// Clear page
unofficialBtn.addEventListener('click', () => {
  console.log('unoff clicked');
  photoContainer.innerHTML = '';
});

photoCardChanger();
