let slideIndex = 0;
let slideInterval;
let isPaused = false;

showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    if (!isPaused) {
        slideInterval = setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    isPaused = true;
    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
}

function togglePause() {
    const button = document.querySelector('.pause');
    isPaused = !isPaused;
    if (isPaused) {
        clearTimeout(slideInterval);
        button.textContent = "Play";
    } else {
        showSlides();
        button.textContent = "Pause";
    }
}
