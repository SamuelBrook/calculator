
let screenDisplay = document.querySelector("#screen");

let enteredNum = "";

let count = 0;

let symbolPressed = "";

let numEntered = "";

let clicked = false;

const calcButtons = document.querySelectorAll(".calc");

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener("click", () => {
        if (calcButton !== "=") {
            if (count > 0) {
                alert(operate(symbolPressed, 2, 2));
                symbolPressed = calcButton.textContent;


            }
            else {
                symbolPressed = calcButton.textContent;
                count++;
            
            }
        }
    })
})


const padButtons = document.querySelectorAll(".num");


padButtons.forEach((padButton) => {
    padButton.addEventListener("click", () => {
        enteredNum += padButton.textContent;
        screenDisplay.textContent = enteredNum;
    })
});


const equalSymbol = document.querySelector("#equals");

equalSymbol.addEventListener("click", () => {
});

//calculator functions
function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
}
 
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}