const numElem = document.querySelectorAll('.button-number');
// console.log(numElem);

const displayElem = document.querySelector('.display-number');
// console.log(displayElem);

const operatorElem = document.querySelectorAll('.operator');
// console.log(operatorElem);

// MILESTONE 1 
for (let i = 0; i < numElem.length; i++) {
  // console.log(numElem[i]); // debug

  numElem[i].addEventListener('click', takeValueConcatenates);
}

// MILESTONE 2
for (let i = 0; i < operatorElem.length; i++) {
  operatorElem[i].addEventListener('click', saveOperatorOperand);
}

// console.log(displayElem.innerHTML);