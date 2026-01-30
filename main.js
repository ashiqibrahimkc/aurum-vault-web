document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".product-card");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let centerIndex = Math.floor(cards.length / 2);

  function updateCarousel(){
    cards.forEach((card, i) => {
      const offset = i - centerIndex;

      if(offset === 0){
        card.classList.add("active");
        card.style.transform =
          "translate(-50%, -50%) scale(1.15)";
        card.style.opacity = "1";
        card.style.zIndex = "10";
      } else {
        card.classList.remove("active");
        card.style.transform =
          `translate(calc(-50% + ${offset * 260}px), -50%) scale(0.85)`;
        card.style.opacity = "0.35";
        card.style.zIndex = "1";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    centerIndex = (centerIndex + 1) % cards.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    centerIndex =
      (centerIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  updateCarousel();
});
const navLinks = document.getElementById("navLinks");

function openMenu(){
    navLinks.style.transform = "translateX(0)";
}

function closeMenu(){
    navLinks.style.transform = "translateX(100%)";
}
