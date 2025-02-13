document.addEventListener("DOMContentLoaded", function () {
    const openCardButton = document.getElementById("openCardButton");
    const closeCardButton = document.getElementById("closeCardButton");
    const cardBack = document.getElementById("cardBack");
    const video = document.getElementById("messageVideo");

    openCardButton.addEventListener("click", function () {
        cardBack.style.display = "flex";
        setTimeout(() => {
            cardBack.style.transform = "rotateY(0deg)";
        }, 50);

        video.style.display = "block";
        video.play();
        openCardButton.style.display = "none";
    });

    closeCardButton.addEventListener("click", function () {
        cardBack.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            cardBack.style.display = "none";
            video.pause();
            video.style.display = "none";
            openCardButton.style.display = "block";
        }, 500);
    });
});
