const homeSection = document.getElementById("home");

homeSection.addEventListener("touchstart", function () {
    homeSection.querySelector("::before").style.opacity = '1';
})
homeSection.addEventListener("touchend", function () {
    homeSection.querySelector("::before").style.opacity = '0.3';
})