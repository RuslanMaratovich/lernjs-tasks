//Название JavaScript

//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

//решение

const prompt = require("prompt-sync")({ sigint: true });
let value = prompt('Какое "официальное" название JavaScript? ', '');

if (value == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}