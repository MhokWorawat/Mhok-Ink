document.addEventListener("DOMContentLoaded", function () {
    const openCardButton = document.getElementById("openCardButton");
    const closeCardButton = document.getElementById("closeCardButton");
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");
    const video = document.getElementById("messageVideo");

    openCardButton.addEventListener("click", function () {
        cardFront.style.display = "none";
        cardBack.style.display = "flex";
        setTimeout(() => {
            cardBack.style.opacity = "1";
        }, 50);

        video.style.display = "block";
        video.play();
    });

    closeCardButton.addEventListener("click", function () {
        cardBack.style.opacity = "0";
        setTimeout(() => {
            cardBack.style.display = "none";
            cardFront.style.display = "flex";
            video.pause();
            video.style.display = "none";
        }, 300);
    });
});
