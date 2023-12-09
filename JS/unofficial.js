// Photo scroll

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const unofficialBtn = document.querySelector('.unofficial-btn');
const photoContainer = document.querySelector('.photo-container');

let currentPhotoIndex = 0;
let photoArr = [];

// Fetch JSON file
async function fetchPhotos() {
  try {
    const response = await fetch('/photos.json');

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();
    photoArr = json;
    photoCardChanger();
  } catch (error) {
    console.error('error fetching photos', error);
  } finally {
  }
}

async function fetchSinglePhoto(index) {
  try {
    const response = await fetch('/photos.json');

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();
    return json[index];
  } catch (error) {
    console.error('Error fetching single photo', error);
  }
}

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
  const offsetY = Math.random() * 3 - 1; // Random vertical offset between -10 and 10 pixels

  photoCard.style.transform = `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`;

  return photoCard;
}

// Pre-load next image to combat text displaying before image
function preLoadNextImage() {
  const nextIndex = (currentPhotoIndex + 1) % photoArr.length;
  const nextImage = new Image();
  nextImage.src = photoArr[nextIndex].image;
}

// Function to change photos on button click
async function photoCardChanger(direction) {
  if (direction === nextBtn) {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoArr.length;
  } else if (direction === prevBtn) {
    currentPhotoIndex =
      (currentPhotoIndex - 1 + photoArr.length) % photoArr.length;
  }
  const currentPhoto = await fetchSinglePhoto(currentPhotoIndex);
  const photoCard = createPhotoCard(currentPhoto);
  photoContainer.appendChild(photoCard);

  //   Reduce opacity on cards lower down in the stack
  // const existingPhoto = document.querySelectorAll('.photo-card img');
  // existingPhoto.forEach((card, index) => {
  //   if (index === currentPhotoIndex) {
  //     card.style.opacity = 1;
  //   } else {
  //     card.style.opacity = 0.3;
  //   }
  // });
  preLoadNextImage();
}

prevBtn.addEventListener('click', () => {
  console.log('prev clicked');
  photoCardChanger(prevBtn);
});

nextBtn.addEventListener('click', () => {
  console.log('next clicked');
  photoCardChanger(nextBtn);
});

fetchPhotos();
