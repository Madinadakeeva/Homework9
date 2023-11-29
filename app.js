//Задание 1
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const submitBtn = document.getElementById('sum')
const resultElement = document.getElementById('result')

submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
}

//Задание 2
let numEl = document.getElementById('num3')
let buttonEl = document.getElementById('button')
let resultEl = document.getElementById('result2')

buttonEl.onclick = function() {
    let number = Number(numEl.value)
    if(number>0)
        resultEl.textContent = 'Положительное'

    else if (number==0)
        resultEl.textContent = 'Ноль'

    else
        resultEl.textContent = 'Отрицательное'
}

//Задание3
let num4El = document.getElementById('num4')
let button2El = document.getElementById('button2')
let result3El = document.getElementById('result3')

button2El.onclick = function() {
    let number2 = Number(num4El.value)
    if (number2 % 2 == 0)
        result3El.textContent = "Четное"
  
    else
        result3El.textContent ="Нечетное"
}

//Задание4
const inputANode = document.getElementById('input-a');
const inputBNode = document.getElementById('input-b');
const selectOperationNode = document.getElementById('select-operation');
const btnResultNode = document.getElementById('btn-result');
const outputNode = document.getElementById('output');

btnResultNode.onclick = function(){
  const a = Number (inputANode.value);
  const b = Number (inputBNode.value);
  const operation = selectOperationNode.value;
  const result = calculate ({a,b,operation});

  outputNode.innerHTML = result
};

function sum(a, b) {
  return a+b;
}

function substract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divison(a, b) {
  return a/b;
}

const OPERATIONS = {
  sum: '+',
  substract: '-',
  multiply: '*',
  divison: '/',
}

function calculate({a,b, operation}){
  let result = null

  switch (operation){
    case OPERATIONS.sum:
      result = sum(a,b);
    break;

    case OPERATIONS.substract:
      result = substract(a,b);
    break;

    case OPERATIONS.multiply:
      result = multiply(a,b);
    break;

    case OPERATIONS.divison:
      result = divison(a,b);
    break;

    default:
      break;
  }

  return result;
}











