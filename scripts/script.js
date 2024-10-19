// Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const showSlides = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
};

const nextSlide = () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
};

const prevSlide = () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
showSlides(slideIndex);

// Accordion functionality
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const content = accordion.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Modal functionality
const modal = document.getElementById('admissionModal');
const modalBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
