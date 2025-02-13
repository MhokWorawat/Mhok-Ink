document.addEventListener("DOMContentLoaded", function () {
    const openCardButton = document.getElementById("openCardButton");
    const closeCardButton = document.getElementById("closeCardButton");
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");
    const video = document.getElementById("messageVideo");
    const container = document.querySelector(".container");

    function adjustCardSize() {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let cardWidth = Math.min(screenWidth * 0.9, 400);
        let cardHeight = Math.min(screenHeight * 0.9, 600);

        container.style.width = `${cardWidth}px`;
        container.style.height = `${cardHeight}px`;
    }

    window.addEventListener("resize", adjustCardSize);
    adjustCardSize();

    openCardButton.addEventListener("click", function () {
        cardFront.classList.add("hidden"); // ซ่อนการ์ด 📩 A Special Message
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
            cardFront.classList.remove("hidden"); // แสดงการ์ด 📩 A Special Message กลับมา
            video.pause();
            video.style.display = "none";
        }, 300);
    });
});
