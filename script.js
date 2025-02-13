document.addEventListener("DOMContentLoaded", function () {
    const openCardButton = document.getElementById("openCardButton");
    const closeCardButton = document.getElementById("closeCardButton");
    const cardFront = document.getElementById("cardFront");
    const cardBack = document.getElementById("cardBack");
    const video = document.getElementById("messageVideo");

    openCardButton.addEventListener("click", function () {
        cardFront.style.display = "none"; // ซ่อนการ์ด 📩 A Special Message
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
            cardFront.style.display = "flex"; // แสดงการ์ด 📩 A Special Message กลับมา
            video.pause();
            video.style.display = "none";
        }, 300);
    });
});
