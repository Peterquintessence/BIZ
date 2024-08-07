const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement; // Get the <html> element

  // Check stored theme preference
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    themeToggle.checked = true;
  } else {
    htmlElement.setAttribute('data-bs-theme', 'light');
  }

  // Toggle theme on checkbox change
  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});

