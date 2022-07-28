let counterValue = 0;

const takeAwayOne = document.querySelector('[data-action="decrement"]')
const incrementOne = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

takeAwayOne.addEventListener('click', () => {
    counterValue -= 1
    value.textContent = counterValue
});
incrementOne.addEventListener('click',() => {
    counterValue += 1
    value.textContent = counterValue
})



// const plusClick = () => {
//     counterValue += 1
//     value.textContent = counterValue
// };

// const minusClick = () => {
//     counterValue -= 1
//     value.textContent = counterValue
// };


// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике,должны увеличивать и уменьшать его значение на единицу.

//  Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.
















































