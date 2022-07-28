const buttonClickChange = document.querySelector(".change-color")
const textColor = document.querySelector(".color")
const bodyChangeColor = document.querySelector("body")

buttonClickChange.addEventListener('click', () => {
  const color = getRandomHexColor()
  textColor.textContent = color;
  bodyChangeColor.style.backgroundColor = color;

})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}