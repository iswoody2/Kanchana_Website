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


const review_image = document.querySelectorAll('#review_img');
const review_text = document.querySelectorAll('#review_text');

review_image.forEach((review_image, index) => {
    review_image.addEventListener("click", function(){
    review_text[index].classList.toggle("show");
    });
});