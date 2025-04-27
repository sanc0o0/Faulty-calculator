document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    let randomNumber = Math.random();
    let isFaulty = randomNumber < 0.1; // 10% chance

    let result;

    if (isFaulty) {
        alert("⚡ Faulty Calculation Happening! ⚡");

        if (operation === '+') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 / num2;
        } else if (operation === '/') {
            result = num1 ** num2;
        } else {
            document.getElementById('result').innerText = "Invalid Operation.";
            return;
        }
    } else {
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            result = num1 / num2;
        } else {
            document.getElementById('result').innerText = "Invalid Operation.";
            return;
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
