document.addEventListener("DOMContentLoaded", function() {
    const animationItems = document.querySelectorAll(".animation-item");

    animationItems.forEach(item => {
        if(item.dataset.position == "left") {
            item.classList.add("animation-left-invisible");
        }

        else if (item.dataset.position == "right") {
            item.classList.add("animation-right-invisible");
        }
    });

    window.addEventListener("scroll", function() {
        animationStart();
    });

    const animationStart = () => {
        animationItems.forEach(item => {
            const itemCoords = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const itemCenter = itemCoords.height / 2;

            if((itemCoords.top + itemCenter < windowHeight && itemCoords.top > 0) || (itemCoords.bottom - itemCenter < windowHeight && itemCoords.bottom > 0)) {
                item.classList.add("animation-visible");
                item.classList.remove("animation-right-invisible");
                item.classList.remove("animation-left-invisible");
            }
        });
    };

    animationStart();
});