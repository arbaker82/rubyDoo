let currentIndex = 0;

const slides = document.querySelectorAll("#slider img");

const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[index].style.display = "block";

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);

}


nextSlide();

setInterval(nextSlide, 5000);