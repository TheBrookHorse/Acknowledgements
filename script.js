const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 200;
const speed = 0.15;

// ----- Resize -----
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// ----- Initialize stars -----
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

// ----- Draw frame -----
function draw() {
  // fill background
  ctx.fillStyle = "#0b0c10"; // your dark theme color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.z -= speed;
    if (star.z <= 0) star.z = canvas.width;

    const k = 128 / star.z;
    const px = star.x * k + canvas.width / 2;
    const py = star.y * k + canvas.height / 2;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = 2 * (1 - star.z / canvas.width);
      ctx.fillStyle = "white";
      ctx.fillRect(px, py, size, size);
    }
  }

  requestAnimationFrame(draw);
}

// ----- Go! -----
initStars();
draw();
