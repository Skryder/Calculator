class DisplayWindow {
    displayField = document.querySelector("#display");
    currDisplay;
    constructor()
    {
        this.currDisplay = "";
        this.displayField.textContent = "Values Go Here";
    }

    addToDisplay(value)
    {
        this.currDisplay += value;
        this.displayField.textContent = this.currDisplay;
    }

    clearDisplay() { 
        this.currDisplay = "";
        this.displayField.textContent = this.currDisplay;
    }

    getCurrValue() {
        console.log(this.currDisplay);
        return this.currDisplay;
    }

    updateDisplay() {
        this.displayField.textContent = this.currDisplay;
    }

}

let currentVal = "";
let operand = "";
let heldVal = "";
let newExpression = true;
let evalPending = false;
let clearOnNext = false;
let dotFlag = false;
let _display = new DisplayWindow();

function add() {
    num = Math.round((parseFloat(heldVal) + parseFloat(currentVal))*1000)/1000;
    console.log(`Added! num=${num}, held=${heldVal}, current=${currentVal}, op=${operand}`)
    _display.clearDisplay();
    _display.addToDisplay(num);
    evalPending = false;
    currentVal = num;
    operand = "";
}

function addBtn() {
    if (currentVal == "")
    {
        console.log("invalid");
        return;
    }
    if (evalPending){
        calculate();
    }
    heldVal = currentVal;
    operand = "+";
    currentVal = "";
    evalPending = true;
    clearOnNext = true;
    dotFlag = false;
}

function subtract() {
    num = Math.round((parseFloat(heldVal) - parseFloat(currentVal))*1000)/1000;
    console.log(`Subtracted! num=${num}, held=${heldVal}, current=${currentVal}, op=${operand}`)
    _display.clearDisplay();
    _display.addToDisplay(num);
    evalPending = false;
    currentVal = num;
    operand = "";
}

function subtractBtn() {
    if (currentVal == "")
    {
        console.log("invalid");
        return;
    }
    if (evalPending){
        calculate();
    }
    heldVal = currentVal;
    operand = "-";
    currentVal = "";
    evalPending = true;
    clearOnNext = true;
    dotFlag = false;
}

function multiply() {
    num = Math.round((parseFloat(heldVal) * parseFloat(currentVal))*1000)/1000;
    console.log(`Multiplied! num=${num}, held=${heldVal}, current=${currentVal}, op=${operand}`)
    _display.clearDisplay();
    _display.addToDisplay(num);
    evalPending = false;
    currentVal = num;
    operand = "";
}

function multiplyBtn() {
    if (currentVal == "")
    {
        console.log("invalid");
        return;
    }
    if (evalPending){
        calculate();
    }
    heldVal = currentVal;
    operand = "*";
    currentVal = "";
    evalPending = true;
    clearOnNext = true;
    dotFlag = false;
}

function divide() {
    num = Math.round((parseFloat(heldVal) / parseFloat(currentVal))*1000)/1000;
    console.log(`Divided! num=${num}, held=${heldVal}, current=${currentVal}, op=${operand}`)
    _display.clearDisplay();
    _display.addToDisplay(num);
    evalPending = false;
    currentVal = num;
    operand = "";
}

function divideBtn() {
    if (currentVal == "")
    {
        console.log("invalid");
        return;
    }
    if (evalPending){
        calculate();
    }
    heldVal = currentVal;
    operand = "/";
    currentVal = "";
    evalPending = true;
    clearOnNext = true;
    dotFlag = false;
}

function clickNumber(number){
    if (clearOnNext) {
        _display.clearDisplay();
        clearOnNext = false;
    }
    currentVal += number;
    _display.addToDisplay(number);
    console.log(`clicked ${number}: held=${heldVal}, current=${currentVal}`)
}

function dotBtn() {
    if (dotFlag)
    {
        return;
    }
    clickNumber(".");
    dotFlag = true;
}

function equalsBtn()
{
    if (currentVal == "" || operand == "")
    {
        console.log("invalid");
        return;
    }
    calculate();
    evalPending = false;
    clearOnNext = true;
    dotFlag = false;
    currentVal = "";
    heldVal = "";
    operand = "";
}

function calculate()
{
    switch (operand) {
        case "+": add(); break;
        case "-": subtract(); break;
        case "*": multiply(); break;
        case "/": divide(); break;
        case "": return;
        default:
            return "INVALID OPERAND";
    }
}

function clearDisplay()
{
    _display.clearDisplay();
    currentVal = "";
    heldVal = "";
    operand = "";
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