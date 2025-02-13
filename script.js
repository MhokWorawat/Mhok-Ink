/* script.js */
document.getElementById("openCardButton").addEventListener("click", function() {
    document.getElementById("cardBack").style.display = "flex";
    let video = document.getElementById("messageVideo");
    video.style.display = "block";
    video.play();
    this.style.display = "none";
});

document.getElementById("closeCardButton").addEventListener("click", function() {
    document.getElementById("cardBack").style.display = "none";
    let video = document.getElementById("messageVideo");
    video.pause();
    video.style.display = "none";
    document.getElementById("openCardButton").style.display = "block";
});