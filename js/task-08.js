// Задание 8
// Напиши скрипт управления формой логина.


//     Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.

//     Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit",onFromSubmit)


function onFromSubmit(event) {
    event.preventDefault();
        
       
    if (event.currentTarget.elements.email.value && event.currentTarget.elements.password.value) {

        const mail = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;
        const formData = {
                mail,
                password
            };
         console.log(formData)
   
        
    } else {
        alert("Для регистрации должны быть заполнены все поля")

    }
    event.currentTarget.reset();
}

