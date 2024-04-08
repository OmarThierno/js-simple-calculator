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
  const numDisplay = parseInt(displayElem.innerHTML);
  const operatorSelected = this.innerHTML;
  
  displayElem.innerHTML = 0;
  console.log(numDisplay);
  console.log(operatorSelected);
}



