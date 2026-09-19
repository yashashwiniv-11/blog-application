/* ========================================
   Blog App - Main JavaScript
   Anti-Gravity Particles + Interactions
======================================== */

// ========== ANTI-GRAVITY PARTICLES ==========
function createAntiGravityParticles() {
  const container = document.querySelector('.anti-gravity-container');
  if (!container) return;

  const particleCount = 18;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size
    const size = Math.random() * 12 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random horizontal position
    particle.style.left = `${Math.random() * 100}%`;

    // Random drift (horizontal movement while rising)
    const drift = (Math.random() - 0.5) * 120;
    particle.style.setProperty('--drift', `${drift}px`);

    // Random animation duration & delay
    const duration = Math.random() * 12 + 10; // 10-22s
    const delay = Math.random() * 15;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    // Slight color variation
    if (Math.random() > 0.6) {
      particle.style.background = `linear-gradient(135deg, #ef4444, #fbbf24)`;
    }

    container.appendChild(particle);
  }
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
}

// ========== FORM HANDLING (Demo only) ==========
function initForms() {
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert(`Welcome back! (Demo)\nLogged in as: ${email}\n\nRedirecting to Dashboard...`);
      window.location.href = 'dashboard.html';
    });
  }

  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alert(`Account created successfully! (Demo)\nWelcome, ${name}!\n\nRedirecting to Login...`);
      window.location.href = 'login.html';
    });
  }

  // Create Blog form
  const createForm = document.getElementById('createBlogForm');
  if (createForm) {
    createForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      alert(`Blog post "${title}" published successfully! (Demo)\n\nRedirecting to Dashboard...`);
      window.location.href = 'dashboard.html';
    });
  }
}

// ========== ACTIVE NAV LINK ==========
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  createAntiGravityParticles();
  initMobileMenu();
  initForms();
  setActiveNav();
});
