function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleFullAbout() {
  const shortAbout = document.querySelector('.about-short');
  const fullAbout = document.querySelector('.about-full');

  // Toggle visibility of short and full about paragraphs
  shortAbout.style.display = shortAbout.style.display === 'none' ? 'block' : 'none';
  fullAbout.style.display = fullAbout.style.display === 'none' ? 'block' : 'none';
}

// script.js

document.addEventListener('DOMContentLoaded', function() {
  const descriptionButtons = document.querySelectorAll('.description-btn');
  const popupContainer = document.querySelector('.popup-container');

  descriptionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectDescription = button.getAttribute('data-description');
      
      // Toggle the display of the popup container and overlay
      if (popupContainer.style.display === 'block') {
        popupContainer.style.display = 'none';
      } else {
        popupContainer.style.display = 'block';
        // Display the project description inside the popup
        const popupContent = document.querySelector('.popup-content');
        popupContent.textContent = projectDescription;
      }
    });
  });
});


