
//Buttons
const displayField = document.querySelector("#display");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const divideBtn = document.querySelector("#divide");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const subtractBtn = document.querySelector("#subtract");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const addBtn = document.querySelector("#add");
const multiplyBtn = document.querySelector("#multiply");
const zeroBtn = document.querySelector("#zero");
const dotBtn = document.querySelector("#dot");
const equalBtn = document.querySelector("#equal");

//Sets up the handlers for the buttons.
setUpHandlers();

let first = "";
let operand = "";
let second = "";
let currDisplay = ""; //This will be the expression to calculate
let newExpression = true;





function calculate(expression) {
    let value = 0;
    //example: 52+19/29-68*23+12.5/2.3+4*9 = -5814.742



    console.log(value);
    newExpression = true;
}

function operate(first, operand, second){
    switch (operand) {
        case "+":
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
        case "/": 
            return divide(first, second);
        default:
            return "INVALID OPERAND";
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
    return num1/num2;
}

function updateDisplay(input) {
    if (newExpression)
    {
        displayField.textContent = "";
        currDisplay = "";
        newExpression = false;
    }
    displayField.textContent += input;
    currDisplay += input;
}







function setUpHandlers() {
    sevenBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("7"); console.log("seven clicked");});
    sevenBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})
    
    eightBtn.addEventListener('click', () => {clickAnimation(eightBtn); updateDisplay("8"); console.log("eight clicked");});
    eightBtn.addEventListener('mouseover', () => {onHover(eightBtn);})

    nineBtn.addEventListener('click', () => {clickAnimation(nineBtn); updateDisplay("9"); console.log("nine clicked");});
    nineBtn.addEventListener('mouseover', () => {onHover(nineBtn);})

    divideBtn.addEventListener('click', () => {clickAnimation(divideBtn); updateDisplay("/"); console.log("divide clicked");});
    divideBtn.addEventListener('mouseover', () => {onHover(divideBtn);})

    fourBtn.addEventListener('click', () => {clickAnimation(fourBtn); updateDisplay("4"); console.log("four clicked");});
    fourBtn.addEventListener('mouseover', () => {onHover(fourBtn);})

    fiveBtn.addEventListener('click', () => {clickAnimation(fiveBtn); updateDisplay("5"); console.log("seven clicked");});
    fiveBtn.addEventListener('mouseover', () => {onHover(fiveBtn);})

    sixBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("6"); console.log("seven clicked");});
    sixBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    subtractBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("-"); console.log("seven clicked");});
    subtractBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    oneBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("1"); console.log("seven clicked");});
    oneBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})
    
    twoBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("2"); console.log("seven clicked");});
    twoBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    threeBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("3"); console.log("seven clicked");});
    threeBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    addBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("+"); console.log("seven clicked");});
    addBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    multiplyBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("x"); console.log("seven clicked");});
    multiplyBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    zeroBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("0"); console.log("seven clicked");});
    zeroBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    dotBtn.addEventListener('click', () => {clickAnimation(sevenBtn); updateDisplay("."); console.log("seven clicked");});
    dotBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

    equalBtn.addEventListener('click', () => {clickAnimation(sevenBtn); calculate(currDisplay); console.log("seven clicked");});
    equalBtn.addEventListener('mouseover', () => {onHover(sevenBtn);})

}



//Animation functions... Figure out later
function onHover(btn) {

}
function clickAnimation(btn) {

}















//console.log(add(0, 8915));
//console.log(subtract(0, 6329));
//console.log(multiply("2", 5.7));
//console.log(divide(12, 5));
//console.log(divide(6, 0));
//console.log(multiply(9999, 9999));
//console.log(divide(24.1, "16.5"));