const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

refs = {
  button: document.querySelectorAll("button"),
  body: document.querySelector("body"),
};

const buttonStart = refs.button[0];
const buttonStop = refs.button[1];
let intId = null;
let themeChangerActive = null;

buttonStart.addEventListener("click", onClickColorChangeStart);
buttonStop.addEventListener("click", onClickColorChangeStop);

function onClickColorChangeStart() {
  if (themeChangerActive) {
    return;
  }
  intId = setInterval(addRandomColor, 2000, 0, colors.length - 1);
}
function onClickColorChangeStop() {
  clearInterval(intId);
  themeChangerActive = false;
}

function addRandomColor(min, max) {
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = colors[randomIndex];
  refs.body.style = `background-color: ${randomColor}`;
  themeChangerActive = true;
}
