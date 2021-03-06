// eslint-disable-next-line import/extensions
import validator from './validator.js';
// console.log('./validator.js');
/* Declarando variables */
const inputExpirationDate = document.getElementById('inputExpirationDate');
const inputCardNumber = document.getElementById('inputCardNumber');
const finalConditionCardValidOrInvalid = document.getElementById('finalConditionCardValidOrInvalid');
const cardNumberWithMaskify = document.getElementById('cardNumberWithMaskify');
const buttonValidateCardNumber = document.getElementById('buttonValidateCardNumber');
const buttonaAdOthercard = document.getElementById('buttonaAdOthercard');
const buttonFinalProcess = document.getElementById('buttonFinalProcess');

/* Input de fecha de exiración de tarjeta */
inputExpirationDate.addEventListener('keyup', (e) => {
  const styleInputExpirationDate = e.target.value;
  inputExpirationDate.value = styleInputExpirationDate
    .replace(/([0-9]{3})/g, '$1 ')
    .replace(/\s/g, '/');
});

/* Input de tarjeta-no debe aceptar letras */
inputCardNumber.addEventListener('keyup', (e) => {
  const prueba = e.target.value;
  inputCardNumber.value = prueba.replace(/\D/g, '');
});

/* Ejecutando los objetos isvalid y maskify */
buttonValidateCardNumber.addEventListener('click', (event) => {
  event.preventDefault();
  validator.isValid(inputCardNumber.value);
  finalConditionCardValidOrInvalid.innerHTML = validator.isValid(inputCardNumber.value);
  validator.maskify(inputCardNumber.value);
  cardNumberWithMaskify.innerHTML = validator.maskify(inputCardNumber.value);

  const divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor');
  // (validator.isValid(inputCardNumber.value)) ?
  // (divValidOrInvalidColor.classList.add('by'),
  //   finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta válida') :
  // (divValidOrInvalidColor.classList.add('br'),
  //   finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta inválida'),

  if (validator.isValid(inputCardNumber.value)) {
    divValidOrInvalidColor.classList.add('by');
    finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta válida';
  } else {
    divValidOrInvalidColor.classList.add('br');
    finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta inválida';
  }
});

/* Limpiando los campos luego de haber realizado la validación */
const clearFields = () => {
  const inputs = document.getElementsByTagName('input');
  // console.log(inputs)
  for (let i = 0; i < inputs.length; i += i) {
    inputs[i].value = '';
  }
  finalConditionCardValidOrInvalid.innerHTML = '';
  cardNumberWithMaskify.innerHTML = '';
  const divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor'); /* retorna el primer elemento que coincide con el selector css dado como parámetro */
  if (divValidOrInvalidColor.classList.remove('br')) {
    divValidOrInvalidColor.classList.remove('br');
  } else {
    divValidOrInvalidColor.classList.remove('by');
  }
};
buttonaAdOthercard.addEventListener('click', clearFields);
buttonFinalProcess.addEventListener('click', clearFields);

// console.log(validator);
