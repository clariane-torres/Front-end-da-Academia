document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
  
    const cardWidth = 260; // Largura do card + margem
    let currentPosition = 0;
  
    prevButton.addEventListener('click', () => {
      currentPosition += cardWidth;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentPosition -= cardWidth;
      updateCarousel();
    });
  
    function updateCarousel() {
      const maxScroll = -(track.scrollWidth - track.offsetWidth);
      currentPosition = Math.max(Math.min(currentPosition, 0), maxScroll);
      track.style.transform = `translateX(${currentPosition}px)`;
      prevButton.disabled = currentPosition === 0;
      nextButton.disabled = currentPosition === maxScroll;
    }
  
    updateCarousel();
  });