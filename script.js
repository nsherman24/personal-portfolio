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

function toggleDescription(button) {
  const popup = document.getElementById('descriptionPopup');
  const descriptionText = popup.querySelector('.description-text');
  
  if (popup.style.display === 'flex') {
    popup.style.display = 'none';
    button.innerText = 'Description';
  } else {
    const description = button.getAttribute('data-description');
    descriptionText.innerText = description;
    popup.style.display = 'flex';
    button.innerText = 'Close';
  }
}


function closeDescriptionPopup() {
  const popup = document.getElementById('descriptionPopup');
  const descriptionBtn = document.querySelector('.description-btn');

  popup.style.display = 'none';
  descriptionBtn.innerText = 'Description';
}

// script.js


