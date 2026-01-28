// Dark Mode Toggle Functionality
(function() {
  function getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    // Apply to <html> immediately (works even before <body> exists)
    document.documentElement.classList.toggle('dark-mode', isDark);
    // Apply to <body> when available (our CSS mostly targets body.dark-mode)
    if (document.body) {
      document.body.classList.toggle('dark-mode', isDark);
    }
  }

  // Determine theme: stored preference > system preference
  const stored = getStoredTheme();
  const systemPrefersDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const initialTheme = stored || (systemPrefersDark ? 'dark' : 'light');

  // Apply as early as possible (no body access required)
  applyTheme(initialTheme);

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Ensure body has the correct class after it exists
    applyTheme(initialTheme);

    // Create and add the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');

    const isDarkNow = document.documentElement.classList.contains('dark-mode') || document.body.classList.contains('dark-mode');
    toggleButton.innerHTML = isDarkNow
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

    // Insert the button at the beginning of body
    document.body.insertBefore(toggleButton, document.body.firstChild);

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function() {
      const nextIsDark = !(document.documentElement.classList.contains('dark-mode') || document.body.classList.contains('dark-mode'));
      applyTheme(nextIsDark ? 'dark' : 'light');

      if (document.documentElement.classList.contains('dark-mode') || document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        setStoredTheme('dark');
      } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        setStoredTheme('light');
      }
    });
  });
})();
