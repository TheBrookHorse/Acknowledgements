// ===== Fade-In Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");
  fadeElems.forEach(elem => elem.classList.add("visible"));
});

// ===== Starfield Animation =====
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 150; // number of stars
const speed = 0.2;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * canvas.width
    });
  }
}

function drawStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (let star of stars) {
    star.z -= speed;
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width - canvas.width / 2;
      star.y = Math.random() * canvas.height - canvas.height / 2;
      star.z = canvas.width;
    }

    const k = 128 / star.z;
    const px = star.x * k + canvas.width / 2;
    const py = star.y * k + canvas.height / 2;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - star.z / canvas.width) * 2;
      const alpha = 1 - star.z / canvas.width;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fillRect(px, py, size, size);
    }
  }

  requestAnimationFrame(drawStars);
}

initStars();
drawStars();
