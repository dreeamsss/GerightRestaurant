"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var sliderContainer = document.querySelector(".swiper-container");
  var slider = new Swiper(sliderContainer, {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var menuItem = document.querySelectorAll(".menu__item");
  menuItem.forEach(function (item) {
    var menu = document.querySelector(".menu");
    item.addEventListener("click", function (event) {
      menuItem.forEach(function (item) {
        return item.classList.remove("menu__item--active");
      });
      item.classList.add("menu__item--active");
      menu.style.backgroundImage = "url(\'" + item.getAttribute("data-img") + "\')";
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var animationItems = document.querySelectorAll(".animation-item");
  animationItems.forEach(function (item) {
    if (item.dataset.position == "left") {
      item.classList.add("animation-left-invisible");
    } else if (item.dataset.position == "right") {
      item.classList.add("animation-right-invisible");
    }
  });
  window.addEventListener("scroll", function () {
    animationStart();
  });
  var animationStart = function animationStart() {
    animationItems.forEach(function (item) {
      var itemCoords = item.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      var itemCenter = itemCoords.height / 2;
      if (itemCoords.top + itemCenter < windowHeight && itemCoords.top > 0 || itemCoords.bottom - itemCenter < windowHeight && itemCoords.bottom > 0) {
        item.classList.add("animation-visible");
        item.classList.remove("animation-right-invisible");
        item.classList.remove("animation-left-invisible");
      }
    });
  };
  animationStart();
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".video video");
  var videoControlButton = document.querySelector(".video__overlay-circle");
  var videoOverlayIcon = document.querySelector(".video__overlay-icon use");
  videoControlButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      videoOverlayIcon.href.baseVal = "./img/sprite.svg#pause";
    } else {
      video.pause();
      videoOverlayIcon.href.baseVal = "./img/sprite.svg#play";
    }
  });
});
"use strict";
//# sourceMappingURL=main.js.map
