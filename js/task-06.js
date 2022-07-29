// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте,
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей,
// используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.


const input = document.querySelector("#validation-input")
const tryValueLength = Number(input.dataset.length)

input.addEventListener('blur', testValidInput);
input.classList.add("validation-input")

function testValidInput(event) {

    if (event.currentTarget.value.length === tryValueLength) {

        input.classList.add("valid")
        input.classList.remove("invalid")
        return         
    }
    if (event.currentTarget.value.length !== testValidInput) {
        input.classList.remove("valid")
        input.classList.add("invalid")
        return
    }
};
  


