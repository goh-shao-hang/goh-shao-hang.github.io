const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) {
    document.querySelectorAll("video[autoplay").forEach(function (video){
        video.pause();
        video.removeAttribute("autoplay");

        if (!video.closest(".hero")){
            video.controls = true;
        }
    });
}