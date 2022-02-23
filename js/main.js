
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = 0;
let numberButtons = document.querySelectorAll(".number");
let addButton = document.querySelector(".add");
let equalButton = document.querySelector(".equal");
let operation;

let prevNumber;

Array.from(numberButtons).forEach(element => element.addEventListener('click',numberPress));
function numberPress(e)
{
    let number = parseFloat(e.target.innerHTML);
    let resultNumber = parseFloat(resultsContainer.innerHTML);
    let result;
    if(resultNumber === 0)
    {
        resultsContainer.innerHTML = number;
    }
    else{
    result = parseFloat(resultsContainer.innerHTML)*10 + number;
    resultsContainer.innerHTML = result;
    }
  
}

addButton.addEventListener("click",addition);
function addition(){
    operation = "addition";
    prevNumber = parseFloat(resultsContainer.innerHTML);
    resultsContainer.innerHTML = 0;
}

equalButton.addEventListener("click",equalOperation);
function equalOperation()
{
    if(operation==="addition")
    {
        resultsContainer.innerHTML = prevNumber +  parseFloat(resultsContainer.innerHTML);
    }
    operation = undefined;
}




let clearButton = document.querySelector(".c");
clearButton.addEventListener('click',clearDisplay);
function clearDisplay()
{
    resultsContainer.innerHTML = "0";
}
