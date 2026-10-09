


function checkNumber() {
    let input = prompt("Введите число:");

    if (input === null || input.trim() === "") {
        alert("введите только числа");
        return;
    }

    let num = Number(input);

    if (isNaN(num)) {
        alert("введите только числа");
    } else if (num % 2 === 0) {
        alert("четное");
    } else {
        alert("нечетное");
    }
}

checkNumber();