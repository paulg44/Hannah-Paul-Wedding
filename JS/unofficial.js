// Photo scroll
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

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const photo = document.querySelector('.photo-card img');
const descriptionP = document.querySelector('.description');

let currentPhotoIndex = 0;

function photoCardChanger() {
  const currentPhoto = photoArr[currentPhotoIndex];
  photo.src = currentPhoto.image;
  descriptionP.textContent = currentPhoto.description;
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

photoCardChanger();

prevBtn.addEventListener('click', () => {});

nextBtn.addEventListener('click', () => {});
