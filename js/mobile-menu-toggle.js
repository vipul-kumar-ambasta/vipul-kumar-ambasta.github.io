// static/js/mobile-menu-toggle.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  if (!menuToggle || !mainMenu) {
    console.warn('Menu toggle or main menu not found.');
    return;
  }

  menuToggle.addEventListener('click', function () {
    mainMenu.classList.toggle('show');
  });

  // Optional: Close menu when a link is clicked
  const menuLinks = mainMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mainMenu.classList.remove('show');
    });
  });
});

