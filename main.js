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
