// Reveal items on scroll
document.addEventListener("scroll", () => {
    document.querySelectorAll(".timeline-item").forEach(item => {
      const rect = item.getBoundingClientRect();
      // Lower threshold so items reveal sooner
      if (rect.top < window.innerHeight - 50) {
        item.classList.add("visible");
      }
    });
  });
  
  // Floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 2000);
  
  // Background music autoplay workaround
  document.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    if (music) {
      music.muted = false;
      music.play().catch(err => {
        console.log("Music play blocked:", err);
      });
    }
  });