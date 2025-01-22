const slides = document.querySelectorAll('.slide');
const carouselText = document.querySelector('.carousel-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidesContainer = document.querySelector('.carousel-slides');

let currentSlide = 0;

// Atualiza o carrossel e o texto destacado
function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    const text = slides[currentSlide].getAttribute('data-text');
    carouselText.textContent = text;
}

// Botão "anterior"
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Botão "próximo"
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();




