
// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
// Theme toggle (dark/light)
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    toggle.textContent = isLight ? '☀️' : '🌙';
  });
}
