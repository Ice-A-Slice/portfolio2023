// Smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields.');
  } else {
    alert('Message sent successfully.');
    form.reset();
  }
});

// Fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  const windowBottom = window.scrollY + window.innerHeight;

  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const elementHeight = element.offsetHeight;

    if (windowBottom - elementHeight / 2 > elementTop) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);

// Parallax effect
const parallax = (element, distance, speed) => {
    const item = document.querySelector(element);
  
    item.style.transform = `translateY(${distance * speed}px)`;
  };
  
  window.addEventListener('scroll', () => {
    parallax('#about', window.scrollY, 0.5);
  });