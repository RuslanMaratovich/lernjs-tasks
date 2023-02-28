//Скопирован ли массив?
//Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4

//Решение

//выведет 4 потому чтоо обе переменные shoppingCart и fruits являются ссылками на один и тот же массив.