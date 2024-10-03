// Cambiar automáticamente las imágenes de fondo
let currentImageIndex = 0;
const backgroundImages = [
    'https://interceramic.com/media/wysiwyg/images/areascom1.webp',
    'https://interceramic.com/media/wysiwyg/images/exteriores1.webp',
    'https://interceramic.com/media/wysiwyg/images/banos1.webp',
    'https://interceramic.com/media/wysiwyg/images/comedores1.webp',
    'https://interceramic.com/media/wysiwyg/images/rec_maras1.webp',
    'https://interceramic.com/media/wysiwyg/images/salas1.webp',
    'https://interceramic.com/media/wysiwyg/images/comercial1.webp'
];
const heroSection = document.querySelector('.hero');

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
}

// Cambia la imagen de fondo cada 5 segundos
setInterval(changeBackgroundImage, 5000);

// Establece la primera imagen de fondo al cargar la página
heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
