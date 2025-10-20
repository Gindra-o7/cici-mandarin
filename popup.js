const popup = document.getElementById("popup1");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector("#popup1 .close");

let popupStep = 1;

document.querySelector(".heroHome-img").addEventListener("click", () => {
  popup.style.display = "flex";
  popupStep = 1;
  popupImg.src = "asset/popup1.png";
});

window.addEventListener("DOMContentLoaded", () => {
  popup.style.display = "flex";
  popupStep = 1;
  popupImg.src = "asset/popup1.png";
});

popupImg.addEventListener("click", () => {
  if (popupStep === 1) {
    popupStep = 2;
    popupImg.src = "asset/popup2.png";
  } else {
    popup.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
