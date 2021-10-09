
let screenDisplay = document.querySelector("#screen");

let enteredNum = "";
let symbolPressed = "";

let isPressed = false;
let calcDone = false;
let dotButtonPressed = false;
let minusActivated = false;

let savedNum1;
let savedNum2;
let product;



const calcButtons = document.querySelectorAll(".calc");

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener("click", () => {
        if (symbolPressed === "/" && screenDisplay.textContent === "0") {
            screenDisplay.textContent = "Not today";
            enteredNum = "";
            symbolPressed = "";
            isPressed = false;
            calcDone = false;
        }
        else if (calcButton.textContent === "%") {
            if (calcDone === false) {
                screenDisplay.textContent = screenDisplay.textContent / 100;
            }
            else {
                savedNum2 = screenDisplay.textContent;
                product = percentageCalculations(savedNum1, savedNum2);
                screenDisplay.textContent = product;
                savedNum1 = product;
                isPressed = true;
                calcDone = false;
            }
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
        dotButtonPressed = false; 
    })
})



const padButtons = document.querySelectorAll(".num");

padButtons.forEach((padButton) => {
    padButton.addEventListener("click", () => {
        if (isPressed === true) {
            clearScreen();
            enteredNum = "";
            isPressed = false;
        }
        
            
        // if (padButton.textContent === ".") {
        //     dotButtonPressed = true;
        //     const toggleDot = document.querySelector("#dot");
        //     toggleDot.classList.remove("dot");
        // }
        enteredNum += padButton.textContent;
        if (minusActivated === true) {
            screenDisplay.textContent = enteredNum * -1;
        }
        else {
            screenDisplay.textContent = enteredNum;
        }
    })
});



const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    resetCalc();
});

const toggleNegative = document.querySelector("#toggle-negative");

toggleNegative.addEventListener("click", () => {
    screenDisplay.textContent = screenDisplay.textContent * -1;
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

function percentageCalculations(num1, num2) {
    if (symbolPressed === "/") {
        let sum = parseFloat(num1) / parseFloat(num2) * 100;
        return +sum.toFixed(15);
    }
    else if (symbolPressed === "*") {
        let sum = parseFloat(num1) * parseFloat(num2) / 100;
        return +sum.toFixed(15);
    }
    else if (symbolPressed === "+") {
        let sum = parseFloat(num1) * (1 + (parseFloat(num2) / 100));
        return +sum.toFixed(15);
    }
    else if (symbolPressed === "-") {
        let sum = parseFloat(num1) - (parseFloat(num1) * (parseFloat(num2) / 100));
        return +sum.toFixed(15);
    }
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
    minusActivated = false;
}


