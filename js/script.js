const display = document.getElementById('display');
let shouldResetDisplay = false;

function appendNumber(number) {
    if (display.value === '0' || shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        if (number === '.' && display.value.includes('.')) return;
        display.value += number;
    }
}

function appendOperator(operator) {
    shouldResetDisplay = false;
    const lastChar = display.value.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        if (display.value.includes('/0')) {
            display.value = "Error: Division by 0";
            shouldResetDisplay = true;
            return;
        }

        let result = eval(display.value);
        display.value = Number(result.toFixed(8)).toString();
        shouldResetDisplay = true;
    } catch (error) {
        display.value = "Error";
        shouldResetDisplay = true;
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) && key !== ' ') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === '.' || key === ',') {
        appendNumber('.');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        if (display.value.length > 1 && !shouldResetDisplay) {
            display.value = display.value.slice(0, -1);
        } else {
            display.value = '0';
        }
    }
});