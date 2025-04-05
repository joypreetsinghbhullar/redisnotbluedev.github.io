// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
