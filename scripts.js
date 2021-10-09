
let screenDisplay = document.querySelector("#screen");

let enteredNum = "";
let symbolPressed = "";

let isPressed = false;
let calcDone = false; 

let savedNum1;
let savedNum2;
let product;



const calcButtons = document.querySelectorAll(".calc");

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener("click", () => {
        if (calcButton.textContent === "AC") { // needs edits as doesnt work properly, need to add % and +/- functionality
            resetCalc();
        }
        if (symbolPressed === "/" && screenDisplay.textContent === "0") {
            screenDisplay.textContent = "Not today";
            enteredNum = "";
            symbolPressed = "";
            isPressed = false;
            calcDone = false;
        }
        else if (calcButton.textContent === "=" && calcDone === true) {
            savedNum2 = screenDisplay.textContent;
            product = operate(symbolPressed, savedNum1, savedNum2);
            screenDisplay.textContent = product;
            savedNum1 = product;
            isPressed = true;
            calcDone = false;
        }
        else if (calcButton.textContent !== "=" && calcDone === true) {
            savedNum2 = screenDisplay.textContent;
            product = operate(symbolPressed, savedNum1, savedNum2);
            screenDisplay.textContent = product;
            savedNum1 = product;
            symbolPressed = calcButton.textContent;
            isPressed = true;
        }
        else if (calcButton.textContent !== "=") {
            symbolPressed = calcButton.textContent;
            savedNum1 = screenDisplay.textContent;
            calcDone = true;
            isPressed = true;
        }
    })
})



const padButtons = document.querySelectorAll(".num");

padButtons.forEach((padButton) => {
    padButton.addEventListener("click", () => {
        if (screenDisplay.textContent === "Not today") {

        }
        if (isPressed === true) {
            clearScreen();
            enteredNum = "";
            isPressed = false;
        }
        
        enteredNum += padButton.textContent;
        screenDisplay.textContent = enteredNum;
    })
});


function operate(operator, num1, num2) {
    if (operator === "+") {
        let sum = add(num1, num2);
        return +sum.toFixed(15);
    }
    else if (operator === "-") {
        let sum = subtract(num1, num2);
        return +sum.toFixed(15);
    }
    else if (operator === "*") {
        let sum = multiply(num1, num2);
        return +sum.toFixed(15);
    }
    else if (operator === "/") {
        let sum = divide(num1, num2);
        return +sum.toFixed(15);
    }
}
 
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}


function clearScreen() {
    screenDisplay.textContent = "";
}

function resetCalc() {
    screenDisplay.textContent = "0";
    enteredNum = "";
    symbolPressed = "";
    isPressed = false;
    calcDone = false;
}
