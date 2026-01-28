// Dark Mode Toggle Functionality
(function() {
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme on page load
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Create and add the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = currentTheme === 'dark' 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
    
    // Insert the button at the beginning of body
    document.body.insertBefore(toggleButton, document.body.firstChild);
    
    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Update icon
      if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
      } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
      }
    });
  });
})();
