document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const carousel = button.closest("[data-carousel]");
            const slides = carousel.querySelector("[data-slides]");
            const activeSlide = slides.querySelector("[data-active]");
            const slidesArray = [...slides.children];

            let newIndex = slidesArray.indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slidesArray.length - 1;
            if (newIndex >= slidesArray.length) newIndex = 0;

            delete activeSlide.dataset.active;
            slidesArray[newIndex].dataset.active = true;
        });
    });
});


const text = document.querySelectorAll('#text');


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Function to handle scroll event
function handleScroll() {
    text.forEach(block => {
        if (isElementInViewport(block)) {
            block.style.opacity = 1;  // Make the block visible
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);



// Function to make a popup 

// Select all images that 
// should trigger a popup 
// (marked with class 'popup-trigger')
const popupTriggers = document.querySelectorAll('.popup-trigger');

const popups = document.querySelectorAll(".popup");

// Function to hide all popups
function hideAllPopups() {
    // Loops through each popup and then removes their visibility 
    popups.forEach(popup => {
      popup.classList.remove('visible');
    });
  }

// Loop through each image that triggers a popup
popupTriggers.forEach(image => {
    image.addEventListener('click', () => {
      // First hide any open popups
      hideAllPopups();
  
      // Read the value of data-popup attribute, e.g. 'popup1' or 'popup2'
      const popupId = image.getAttribute('data-popup');
  
      // Find the popup element with the corresponding ID
      const popupToShow = document.getElementById(popupId);
  
      // Add the 'visible' class to show it
      if (popupToShow) {
        popupToShow.classList.add('visible');
      }
    });
  });

// Attach click event to all close buttons inside popups
popups.forEach(popup => {
    const closeBtn = popup.querySelector('.close_button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        // Remove 'visible' class from this popup to hide it
        popup.classList.remove('visible');
      });
    }
  });