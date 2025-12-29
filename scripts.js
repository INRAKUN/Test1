
// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle (dark/light)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });
}

// ===== 4-Color Pastel Theme Cycler =====
// Theme classes to cycle through:
const pastelThemes = ['theme-blue', 'theme-pink', 'theme-lavender', 'theme-mint'];
let currentThemeIndex = 0;

// Apply initial theme (light + blue)
document.documentElement.classList.add('light', pastelThemes[currentThemeIndex]);

// Wire a separate button to cycle themes (optional)
const cycleBtn = document.getElementById('cycleTheme');
if (cycleBtn) {
  cycleBtn.addEventListener('click', () => {
    // Remove current theme
    document.documentElement.classList.remove(pastelThemes[currentThemeIndex]);
    // Next index
    currentThemeIndex = (currentThemeIndex + 1) % pastelThemes.length;
    // Add next theme
    document.documentElement.classList.add(pastelThemes[currentThemeIndex]);

    // Update button label to reflect next theme name
    const labelMap = {
      'theme-blue': 'Next: Pink',
      'theme-pink': 'Next: Lavender',
      'theme-lavender': 'Next: Mint',
      'theme-mint': 'Next: Blue'
    };
    cycleBtn.textContent = labelMap[pastelThemes[currentThemeIndex]];
  });

  // Initialize label
  cycleBtn.textContent = 'Next: Pink';
}
