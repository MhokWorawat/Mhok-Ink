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
    document.getElementById("messageVideo").pause();
    document.getElementById("messageVideo").style.display = "none";
    document.getElementById("openCardButton").style.display = "block";
});
