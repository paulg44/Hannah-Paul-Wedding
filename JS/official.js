// Photo array
"let photoArr = [
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
];"

const gridContainer = document.querySelector('.photo-grid-container');

// Create each image card
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

  return photoCard;
}

// Function to initialize the photo cards
function initializePhotoCards() {
  photoArr.forEach(photo => {
    const photoCard = createPhotoCard(photo);

    // Add photo card to container
    gridContainer.appendChild(photoCard);
  });
}

initializePhotoCards();
