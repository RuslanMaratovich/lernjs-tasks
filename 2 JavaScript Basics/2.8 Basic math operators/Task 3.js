//Преобразование типов

//Какой результат будет у выражений ниже?
//"" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2

//Решение


console.log ("" + 1 + 0); //Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
console.log ("" - 1 + 0); //Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
console.log (true + false);
console.log (6 / "3");
console.log ("2" * "3");
console.log (4 + 5 + "px");
console.log ("$" + 4 + 5);
console.log ("4" - 2);
console.log ("4px" - 2);
console.log ("  -9  " + 5); //Сложение со строкой превращает число 5 в строку и добавляет к строке.
console.log ("  -9  " - 5); //Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
console.log (null + 1); //null становится 0 после численного преобразования.
console.log (undefined + 1); //undefined становится NaN после численного преобразования.
console.log (" \t \n" - 2); //Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.