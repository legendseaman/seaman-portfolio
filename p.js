function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const isLight = html.getAttribute('data-theme') === 'light';

  if (isLight) {
    html.removeAttribute('data-theme');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved preference on page load
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    window.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector('.theme-toggle');
      if (btn) btn.textContent = '☀️';
    });
  }
})();

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}


