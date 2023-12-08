// Photo array

const gridContainer = document.querySelector('.photo-grid-container');

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
    initializePhotoCards();
  } catch (error) {
    console.error('error fetching photos', error);
  } finally {
  }
}

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
fetchPhotos();
