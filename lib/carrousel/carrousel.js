document.querySelectorAll('.carousel').forEach(carousel => {
  const container = carousel.querySelector('.slide-container');
  const slides = container.querySelectorAll('.slide');
  const nextBtn = carousel.querySelector('.forward-button');
  const prevBtn = carousel.querySelector('.back-button');
  let index = 0;

  function updateSlide() {
    const slideWidth = slides[0].offsetWidth + 10; // 10 = gap entre slides
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
  }

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (index < slides.length - 1) {
      index++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      updateSlide();
    }
  });
});
