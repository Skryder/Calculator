




let first = "";
let operand = "";
let second = "";

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


console.log(add(0, 8915));
console.log(subtract(0, 6329));
console.log(multiply("2", 5.7));
console.log(divide(12, 5));
console.log(divide(6, 0));
console.log(multiply(9999, 9999));
console.log(divide(24.1, "16.5"));