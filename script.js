/* script.js */
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";
    this.style.display = "none";
});

document.getElementById("sendButton").addEventListener("click", function() {
    let message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        let chatBox = document.getElementById("chatBox");
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById("messageInput").value = "";
    }
});