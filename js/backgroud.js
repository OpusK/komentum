const images = [
  "pexels-asad-photo-maldives-3293148.jpg",
  "pexels-eberhard-grossgasteiger-1064162.jpg",
  "pexels-tobi-620337.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
bgImage.src = `img/${choosenImage}`;
document.body.appendChild(bgImage);
