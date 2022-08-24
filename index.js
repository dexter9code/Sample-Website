console.log("first");

const planButton = document.querySelectorAll(".button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const yesButton = document.querySelector(".modal__action");
const closeButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const backdropVisible = function (e) {
  backdrop.classList.remove("hidden");
};
const backdropClose = function (e) {
  backdrop.classList.add("hidden");
  modal.style.opacity = 0;
};

const modalVisible = () => (modal.style.opacity = 1);

planButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    backdropVisible();
    modalVisible();
  });
});

yesButton.addEventListener("click", () => backdropVisible());

closeButton.addEventListener("click", backdropClose);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    backdropClose();
    mobileNav.classList.add("mobile--hidden");
  }
});

toggleButton.addEventListener("click", () => {
  backdropVisible();
  mobileNav.classList.remove("mobile--hidden");
  mobileNav.style.translateX = 0;
});

backdrop.addEventListener("click", () => {
  mobileNav.classList.add("mobile--hidden");
  mobileNav.style.translateX = 0;
  backdropClose();
});
