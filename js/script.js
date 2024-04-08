const numElem = document.querySelectorAll('.button-number');
// console.log(numElem);

const displayElem = document.querySelector('.display-number');
// console.log(displayElem);

for (let i = 0; i < numElem.length; i++) {
  console.log(numElem[i]); // debug

  numElem[i].addEventListener('click', takeValueConcatenates);
}

function prova() {
  console.log('ciao!')
}
