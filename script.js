"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("myAudio");
  document.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
    }
  });
});


yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }

    if(play === false && noCount === MAX_IMAGES) {
      noButton.classList.add("hidden");
      noCount++;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Cảm ơn nhé =)) <3 và đây là stk của Nhật!";
  buttonsContainer.classList.add("hidden");
  changeImage("qr");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không",
    "Mày chắc chưa?",
    "Lì xì tao đeeeeeeeeê",
    "Mày không từ chối được đâu =)))",
    "Mày tính lì xì tao bao nhiêu?",
    "Bấm lần nữa đi!",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  img.src = `img/img-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
