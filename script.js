// Carousel functionality for Bro's Burger Gallery

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

// Update carousel position
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Next button click handler
nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

// Previous button click handler
prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Optional: Auto-play carousel every 5 seconds
let autoPlayInterval = setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 5000);

// Pause auto-play when user interacts
nextBtn.addEventListener('click', () => {
  clearInterval(autoPlayInterval);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoPlayInterval);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});