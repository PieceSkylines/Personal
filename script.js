const loveMessages = [
    "I love you because you make me smile every day 😊",
    "I love you because you always support me ❤️",
    "I love the way you laugh, it's the best sound ever! 😍",
    "I love you because you make my world brighter ☀️",
    "I love the little things you do that make me happy 💕",
    "I love how you always understand me, even when I don’t say anything 🥰",
    "I love you because you are my best friend and my love ❤️",
    "I love the way you hold my hand, it makes me feel safe 🤗",
    "I love you because you are the most beautiful person inside and out 💖",
    "I love you because you are my everything! 🌍"
];

function showLoveMessage() {
    const messageElement = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    
    // Play background music on first click
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    }

    messageElement.style.opacity = 0;
    messageElement.style.transform = "scale(0.8)";
    setTimeout(() => {
        messageElement.innerText = loveMessages[randomIndex];
        messageElement.style.opacity = 1;
        messageElement.style.transform = "scale(1)";
        createHeartEffect();
    }, 500);
}

// Floating hearts effect
function createHeartEffect() {
    const heartsContainer = document.getElementById("hearts-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    
    const randomSize = Math.floor(Math.random() * 20) + 10;
    heart.style.fontSize = randomSize + "px";
    
    const randomPosition = Math.random() * 100;
    heart.style.left = randomPosition + "vw";
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
