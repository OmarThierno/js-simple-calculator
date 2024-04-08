/**
 * Description: una funzione che prende il valore di un elemento HTML e la concatena con un numero già presente se diverso da zero
 * @params {object}
 * @returns {string}
 */
function takeValueConcatenates() {
  const ElemValue = this.innerHTML
  // console.log(this.innerHTML);

  if (displayElem.innerHTML == 0) {
    displayElem.innerHTML = ElemValue;
  } else {
    displayElem.innerHTML += ElemValue;
  }
}

function saveOperatorOperand() {
  numDisplay = parseInt(displayElem.innerHTML);
  operatorSelected = this.innerHTML;
  console.log(numDisplay);
  console.log(operatorSelected);

  displayElem.innerHTML = 0;

  return [numDisplay, operatorSelected];
}

function myCalc() {
  const lastNum = parseInt(displayElem.innerHTML)
  numDisplay
  operatorSelected
  if (operatorSelected === '+') {
    const sum = numDisplay + lastNum;
    console.log(sum); // debug
    displayElem.innerHTML = sum;
  } else if (operatorSelected === '-') {
    const subtraction = numDisplay - lastNum;
    displayElem.innerHTML = subtraction;
  } else if (operatorSelected === '*') {
    const multiplication = numDisplay * lastNum;
    displayElem.innerHTML = multiplication;
  } else if (operatorSelected === '÷') {
    const divide = numDisplay / lastNum;
    displayElem.innerHTML = divide;
    if (lastNum === 0 ) {
      displayElem.innerHTML = 'Error';
    }
  }
}

function resetDis() {
  numDisplay = 0;
  operatorSelected = '';
  displayElem.innerHTML = 0;
}

