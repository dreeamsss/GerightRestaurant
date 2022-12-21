document.addEventListener("DOMContentLoaded", function() {
    const video  = document.querySelector(".video video");
    const videoControlButton = document.querySelector(".video__overlay-circle");
    const videoOverlayIcon = document.querySelector(".video__overlay-icon use");


    videoControlButton.addEventListener("click", function(){
        if(video.paused) {
            video.play();
            videoOverlayIcon.href.baseVal = "./img/sprite.svg#pause";
        } else {
            video.pause();
            videoOverlayIcon.href.baseVal = "./img/sprite.svg#play";
        }
    });
});