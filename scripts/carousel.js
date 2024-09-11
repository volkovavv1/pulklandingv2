const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
    });
}

const autoAdvanceInterval = 5000; 

setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, autoAdvanceInterval);