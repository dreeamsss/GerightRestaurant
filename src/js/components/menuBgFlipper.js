document.addEventListener("DOMContentLoaded", function() {
    const menuItem = document.querySelectorAll(".menu__item");

    menuItem.forEach(item => {
        const menu = document.querySelector(".menu");

        item.addEventListener("click", function(event) {
            menuItem.forEach(item => item.classList.remove("menu__item--active"));

            item.classList.add("menu__item--active");

            menu.style.backgroundImage = "url(\'" + item.getAttribute("data-img") + "\')";
        });
    });
});