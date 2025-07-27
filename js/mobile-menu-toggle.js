// static/js/mobile-menu-toggle.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');

  if (!menuToggle || !mainMenu) {
    console.warn('Menu toggle or main menu not found.');
    return;
  }

  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling
    mainMenu.classList.toggle('show');
  });

  // Close menu when a link is clicked
  const menuLinks = mainMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mainMenu.classList.remove('show');
    });
  });

  // Optional: Close menu if user clicks outside
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = mainMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      mainMenu.classList.remove('show');
    }
  });
});

