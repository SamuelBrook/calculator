
let screenDisplay = document.querySelector("#screen");

let enteredNum = "";

let count = 0;
let countNum = 0;

let symbolPressed = "";

let numEntered = "";

let isPressed = false;
let calcDone = false; 

let savedNum1;
let savedNum2;
let product;

const calcButtons = document.querySelectorAll(".calc");

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener("click", () => {
       
        //if +, -, / etc...
        // if (calcButton !== "="){
            if (calcDone === true) {
                savedNum2 = screenDisplay.textContent;
                product = operate(symbolPressed, savedNum1, savedNum2);
                screenDisplay.textContent = product;
                savedNum1 = product;
                symbolPressed = calcButton.textContent;
                isPressed = true;

            }
            else {
                symbolPressed = calcButton.textContent;
                savedNum1 = screenDisplay.textContent;
                calcDone = true;
                isPressed = true;
            }
            
        // }
        // else if (calcButton === "=") {
        //     savedNum2 = screenDisplay.textContent;
        //     // console.log(isPressed);
        //     // if (isPressed == false) {
        //     //     screenDisplay.textContent = savedNum2;
        //     // }
        //     // else if (!product) {
        //     //     product = operate(symbolPressed, savedNum1, savedNum2);
        //     //     screenDisplay.textContent = product;
        //     // }
        //     // else {
        //     //     product = operate(symbolPressed, product, savedNum2);
        //     //     screenDisplay.textContent = product;
        //     // }
        // }
    })
})


const padButtons = document.querySelectorAll(".num");


padButtons.forEach((padButton) => {
    padButton.addEventListener("click", () => {
        if (isPressed == true) {
            clearScreen();
            enteredNum = "";
            isPressed = false;
        }
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
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
}
 
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}


function clearScreen() {
    // document.getElementById("screen").innerHTML = "";
    screenDisplay.textContent = "";
}