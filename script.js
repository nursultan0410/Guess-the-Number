const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
    if (tries >= 5) {
        return alert("Игра окончена! Для новой игры перезапустите страницу.");
    }
    if (num === secretNum) {
        alert("Вы угадали!Вы молодец!");
        tries = 5;
    } else {
        alert("Вы неугадали! Попробуйте ещё раз.");
        tries++;
    }
    if (num > secretNum) alert("Число больше загаданного числа.");
    else if (num < secretNum) alert ("Число меньше загаданного числа.");
}