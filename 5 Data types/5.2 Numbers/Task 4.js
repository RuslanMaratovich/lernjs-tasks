//Бесконечный цикл по ошибке
//Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i !== 10) {
    i += 0.2;
}

//Это происходит из-за потери точности, при прибавлении таких дробей как 0.2.
