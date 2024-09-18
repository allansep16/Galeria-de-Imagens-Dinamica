const images = [
    "img/imagem1.jpg",
    "img/imagem2.jpg"
];

let currentIndex = 0;

const imageElement = document.getElementById("image");

function updateImage() {
    imageElement.src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

document.getElementById("next").addEventListener("click", showNextImage);
document.getElementById("prev").addEventListener("click", showPrevImage);

updateImage();