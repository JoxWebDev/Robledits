document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
  
    // Check if dark mode is already saved in localStorage
    if(localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
    }
  
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
  });
  