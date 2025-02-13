/* script.js */
document.getElementById("openCardButton").addEventListener("click", function() {
    let cardBack = document.getElementById("cardBack");
    let video = document.getElementById("messageVideo");
    
    cardBack.style.display = "flex";
    cardBack.style.transform = "rotateY(0deg)";
    video.style.display = "block";
    video.play();
    this.style.display = "none";
});

document.getElementById("closeCardButton").addEventListener("click", function() {
    let cardBack = document.getElementById("cardBack");
    let video = document.getElementById("messageVideo");
    
    cardBack.style.display = "none";
    video.pause();
    video.style.display = "none";
    document.getElementById("openCardButton").style.display = "block";
});