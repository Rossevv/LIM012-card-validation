import validator from './validator.js';
console.log('./validator.js');
/*Delcarando variables */

let inputExpirationDate = document.getElementById('inputExpirationDate');
let inputCardNumber = document.getElementById('inputCardNumber');
let finalConditionCardValidOrInvalid = document.getElementById('finalConditionCardValidOrInvalid');
let cardNumberWithMaskify = document.getElementById('cardNumberWithMaskify');
let buttonValidateCardNumber = document.getElementById('buttonValidateCardNumber');
let buttonaAdOthercard = document.getElementById('buttonaAdOthercard');
let inputFinalProcess = document.getElementById('inputFinalProcess');


inputExpirationDate.addEventListener('keyup', (e) => {
  let styleInputExpirationDate = e.target.value;
  inputExpirationDate.value = styleInputExpirationDate
    .replace(/([0-9]{3})/g, '$1 ')
    .replace(/\s/g, '/')
});

inputCardNumber.addEventListener('keyup', (e) => {
  let prueba = e.target.value;
  inputCardNumber.value = prueba.replace(/\D/g, '');
});

buttonValidateCardNumber.addEventListener('click', (event) => {
  event.preventDefault();
  validator.isValid(inputCardNumber.value);
  finalConditionCardValidOrInvalid.innerHTML = validator.isValid(inputCardNumber.value);
  validator.maskify(inputCardNumber.value)
  cardNumberWithMaskify.innerHTML = validator.maskify(inputCardNumber.value);
  let divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor')
  if (validator.isValid(inputCardNumber.value) === false) {
    divValidOrInvalidColor.classList.add('br');
  } else {
    divValidOrInvalidColor.classList.add('by');
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
  let divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor') /*retorna el primer elemento que coincide con el selector css dado como parámetro */
  if (divValidOrInvalidColor.classList.remove('br')) {
    divValidOrInvalidColor.classList.remove('br');
  } else {
    divValidOrInvalidColor.classList.remove('by');
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
  let divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor')
  if (divValidOrInvalidColor.classList.remove('br')) {
    /*ACCEDERA LA LISTA DE CLASES DE UN ELEMENTO COMO UNA CADENA DE TEXTO DELIMITADA */
    divValidOrInvalidColor.classList.remove('br');
  } else {
    divValidOrInvalidColor.classList.remove('by');
  }
})
console.log(validator);
