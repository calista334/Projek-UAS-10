// Modal logic
    const cards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = modal.querySelector('.modal-close');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      
      // Keyboard accessibility
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          modalTitle.textContent = card.dataset.title;
          modalDesc.textContent = card.dataset.desc;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Theme toggle logic
    const themeBtn = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
      }
    }

    // Load stored theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Toggle theme on button click
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 1rem';
        navbar.style.background = 'rgba(15, 15, 30, 0.95) !important';
      } else {
        navbar.style.padding = '0.75rem 1rem';
        navbar.style.background = 'rgba(15, 15, 30, 0.85) !important';
      }
    });