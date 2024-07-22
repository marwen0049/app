// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let index = 0;
        const items = carousel.querySelectorAll('iframe');
        const totalItems = items.length;
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');
        
        nextButton.addEventListener('click', () => {
            index = (index + 1) % totalItems;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            index = (index - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        function updateCarousel() {
            const offset = -index * 100;
            carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        }
    });
});
