"use strict";

let result;

// Цикл для вопроса про регистрацию

while(true)
{
    result = prompt("Желаете пройти регистрацию на сайте?");

    if (result == "Да")
    {
        alert("Круто!");
        break;
    }
    else
    {
        alert("Попробуйте еще раз");
    }
};

// Цикл для прохожденияя регистрации
function Input(){
    let login_ok = false;
    let user_name = "";
    let password = "";

    user_name = prompt("Логин","");
    if (user_name == "Админ")
    {
        password = prompt("Пароль","");
        if (password == "Я главный"){
            alert("Здравствуйте");
        }
        else if (password == null){
            alert("Отменено");
        }
        else{
            alert("Неверный пароль");
        }
    }
    else if (user_name == "" || user_name == null){
        alert("Отменено");
    }
    else{
        alert("Я вас не знаю");
    }

};



