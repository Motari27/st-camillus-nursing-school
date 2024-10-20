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
// Google Maps API function
function initMap() {
    const stCamillus = { lat: -1.2921, lng: 36.8219 }; // Example coordinates for St. Camillus Medical College
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: stCamillus
    });
    const marker = new google.maps.Marker({
        position: stCamillus,
        map: map
    });
}

// Existing script functionality for carousel, accordion, and modal
// ...
// Existing script functionality for carousel, accordion, and modal
// ...

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
const messageDiv = document.getElementById('message');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    // Here, you can add the AJAX call or form submission to your server
    messageDiv.textContent = `Thank you for subscribing, ${email}!`;
    newsletterForm.reset();
});
// Existing script functionality for carousel, accordion, modal, form submission, and events
// ...

// Chat Widget
const chatBtn = document.getElementById('chatBtn');
const chatBox = document.getElementById('chatBox');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

chatBtn.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${message}`;
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate a response from the chat widget
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = 'Bot: Thanks for your message! We will get back to you shortly.';
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
});
// Existing script functionality for carousel, accordion, modal, form submission, events, and chat
// ...

// Improving Chat Widget Accessibility
chatBtn.setAttribute('aria-controls', 'chatBox');
chatBtn.setAttribute('aria-expanded', 'false');
chatBtn.setAttribute('aria-haspopup', 'true');

chatBtn.addEventListener('click', () => {
    const expanded = chatBtn.getAttribute('aria-expanded') === 'true' || false;
    chatBtn.setAttribute('aria-expanded', !expanded);
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});
// Existing script functionality for carousel, accordion, modal, form submission, events, chat, and social media
// ...

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
    }
});
