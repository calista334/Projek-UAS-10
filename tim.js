document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.calista').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.calistadetailed').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.fajar').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.fajardetailed').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.vira').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.viradetailed').scrollIntoView({ behavior: 'smooth' });
  });
});

const html = document.documentElement;
    const toggleBtn = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');

    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-bs-theme', savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';

    toggleBtn.addEventListener('click', () => {
      const newTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeIcon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    });