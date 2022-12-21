document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".swiper-container");

    const slider = new Swiper(sliderContainer, {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        }
    });
});