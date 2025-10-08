// Smooth fade-in for all elements with .fade-in class
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");
  fadeElems.forEach(elem => {
    elem.classList.add("visible");
  });
});
