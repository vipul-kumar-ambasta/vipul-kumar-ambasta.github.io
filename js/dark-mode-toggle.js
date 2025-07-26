document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const html = document.documentElement;

  // Load preference
  const savedMode = localStorage.getItem('dark-mode');
  if (savedMode === 'true') {
    body.classList.add('dark-mode');
    html.classList.add('dark-mode');
  }

  if (!toggle) {
    console.error('Dark mode toggle button not found!');
    return;
  }

  toggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    html.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDark.toString());
    console.log(`Dark mode is now: ${isDark}`);
  });
});

