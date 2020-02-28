import validator from './validator.js';
console.log('./validator.js');
/*Delcarando variables */

let inputExpirationDate = document.getElementById('expirationDate');
let inputNumber = document.getElementById('cardNumber');
let finalConditionCardValidOrInvalid = document.getElementById('conditionNum');
let cardNumberWithMaskify = document.getElementById('hideNum');
let buttonValidateCardNumber = document.getElementById('validate');
let buttonaAdOthercard = document.getElementById('addOther');
let inputFinalProcess = document.getElementById('finalizar');


inputExpirationDate.addEventListener('keyup', (e) => {
  let styleInputExpirationDate = e.target.value;
  inputExpirationDate.value = styleInputExpirationDate
    .replace(/([0-9]{3})/g, '$1 ')
    .replace(/\s/g, '/')
});

inputNumber.addEventListener('keyup', (e) => {
  let prueba = e.target.value;
  inputNumber.value = prueba.replace(/\D/g, '');
});

buttonValidateCardNumber.addEventListener('click', (event) => {
  event.preventDefault();
  validator.isValid(inputNumber.value);
  finalConditionCardValidOrInvalid.innerHTML = validator.isValid(inputNumber.value);
  validator.maskify(inputNumber.value)
  cardNumberWithMaskify.innerHTML = validator.maskify(inputNumber.value);
  let numPos = document.querySelector('.numPos')
  if (validator.isValid(inputNumber.value) === false) {
    numPos.classList.add('br');
  } else {
    numPos.classList.add('by');
  }

});

buttonaAdOthercard.addEventListener('click', () => {

  let inputs = document.getElementsByTagName("input");
  //console.log(inputs)
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  finalConditionCardValidOrInvalid.innerHTML = "";
  cardNumberWithMaskify.innerHTML = "";
  let numPos = document.querySelector('.numPos') /*retorna el primer elemento que coincide con el selector css dado como parámetro */
  if (numPos.classList.remove('br')) {
    numPos.classList.remove('br');
  } else {
    numPos.classList.remove('by');
  }
})

inputFinalProcess.addEventListener('click', () => {
  let inputs = document.getElementsByTagName("input");
  //console.log(inputs)
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  finalConditionCardValidOrInvalid.innerHTML = "";
  cardNumberWithMaskify.innerHTML = "";
  let numPos = document.querySelector('.numPos')
  if (numPos.classList.remove('br')) {
    /*ACCEDERA LA LISTA DE CLASES DE UN ELEMENTO COMO UNA CADENA DE TEXTO DELIMITADA */
    numPos.classList.remove('br');
  } else {
    numPos.classList.remove('by');
  }
})

console.log(validator);
