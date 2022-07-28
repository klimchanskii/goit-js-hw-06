const inputText = document.querySelector("#name-input");
const textValue = document.querySelector("#name-output");

inputText.addEventListener('input', (event) => {
    textValue.textContent = event.currentTarget.value
})