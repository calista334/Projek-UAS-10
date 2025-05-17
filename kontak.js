const html = document.documentElement;
    const toggleBtn = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      html.setAttribute('data-bs-theme', savedTheme);
      themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }

    toggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeIcon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const alertMessage = document.getElementById('alertMessage');

    // Validasi: jika ada field yang kosong, tampilkan alert
    if (!name || !email || !message) {
      event.preventDefault(); // Mencegah form untuk submit
      alertMessage.innerHTML = '<div class="alert alert-danger d-flex align-items-center"><i class="bi bi-x-circle me-2"></i><span>Semua kolom harus diisi!</span></div>';
      alertMessage.style.display = 'block';
    } else {
      // Jika semua field diisi, tampilkan pesan sukses
      event.preventDefault(); // Mencegah submit form untuk simulasi
      alertMessage.innerHTML = '<div class="alert alert-success d-flex align-items-center"><i class="bi bi-check-circle me-2"></i><span>Pesan berhasil terkirim!</span></div>';
      alertMessage.style.display = 'block';
      document.getElementById('contactForm').reset(); // Mereset form setelah submit
    }
  });