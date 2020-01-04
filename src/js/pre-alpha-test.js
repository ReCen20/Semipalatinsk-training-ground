"use strict"

let userName;
let password;
userName = prompt("Who are your?");
if (userName == "Админ") {

    password = prompt("Enter the password")
    if( password == "Я главный") {
        alert("Дарова");
    } else if (!password || password == null) {
        alert("Беда. Говорить наверное не умеем");
    } else {
        alert("Фраер!")
    }
} else if (!userName || userName == null) {
    alert("Беда. Говорить наверное не умеем");
} else {
    alert("Фраер!")
}