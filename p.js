function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved preference on page load — defaults to LIGHT if nothing saved yet
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector('.theme-toggle');
      if (btn) btn.textContent = '🌙';
    });
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector('.theme-toggle');
      if (btn) btn.textContent = '☀️';
    });
  }
})();

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}