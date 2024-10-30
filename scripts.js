document.querySelectorAll('.carousel').forEach(carousel => {
  const slider = carousel.querySelector('.video-slider');
  const leftArrow = carousel.querySelector('.left-arrow');
  const rightArrow = carousel.querySelector('.right-arrow');

  let scrollAmount = 0;

  rightArrow.addEventListener('click', () => {
    scrollAmount += slider.clientWidth;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  leftArrow.addEventListener('click', () => {
    scrollAmount -= slider.clientWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });
});
