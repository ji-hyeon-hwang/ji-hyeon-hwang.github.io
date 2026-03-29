// Dark mode
const html = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const stored = localStorage.getItem('theme');
if (stored) html.setAttribute('data-theme', stored);

themeBtn?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeBtn.textContent = next === 'dark' ? '☀' : '◐';
});

// Sync icon on load
if (stored === 'dark' && themeBtn) themeBtn.textContent = '☀';

// Navbar scroll shadow
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Active nav link
const path = location.pathname.split('/').filter(Boolean);
const page = path[path.length - 1] || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop() || 'index.html';
  if (href === page) a.classList.add('active');
});
