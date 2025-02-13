document.getElementById("openCardButton").addEventListener("click", function() {
    document.getElementById("cardBack").style.display = "flex";
    document.getElementById("messageVideo").play();
    this.style.display = "none";
});

document.getElementById("closeCardButton").addEventListener("click", function() {
    document.getElementById("cardBack").style.display = "none";
    document.getElementById("openCardButton").style.display = "block";
});
