// Dark Mode Toggle Function
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Toggle dark mode class
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button text based on theme
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
