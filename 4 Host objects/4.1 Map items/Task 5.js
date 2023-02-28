//Умножаем все числовые свойства на 2

/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:*/

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//multiplyNumeric(menu);

// после вызова функции
/*
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};*/

//решение
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu)