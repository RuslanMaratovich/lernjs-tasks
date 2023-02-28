//Можно ли добавить свойство строке?

let str = "Привет";

str.test = 5;

console.log(str.test); //undefined

//В момент обращения к свойству str создаётся «объект-обёртка».
//Без строгого режима, операция продолжается, объект получает свойство test,
// но после этого он удаляется, так что на последней линии str больше не имеет свойства test