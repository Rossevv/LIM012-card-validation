import validator from './validator.js';
// console.log('./validator.js');
/*Declarando variables */
let inputExpirationDate = document.getElementById('inputExpirationDate');
let inputCardNumber = document.getElementById('inputCardNumber');
let finalConditionCardValidOrInvalid = document.getElementById('finalConditionCardValidOrInvalid');
let cardNumberWithMaskify = document.getElementById('cardNumberWithMaskify');
let buttonValidateCardNumber = document.getElementById('buttonValidateCardNumber');
let buttonaAdOthercard = document.getElementById('buttonaAdOthercard');
let buttonFinalProcess = document.getElementById('buttonFinalProcess');

/*Input de fecha de exiración de tarjeta */
inputExpirationDate.addEventListener('keyup', (e) => {
  let styleInputExpirationDate = e.target.value;
  inputExpirationDate.value = styleInputExpirationDate
    .replace(/([0-9]{3})/g, '$1 ')
    .replace(/\s/g, '/')
});

/*Input de tarjeta-no debe aceptar letras*/
inputCardNumber.addEventListener('keyup', (e) => {
  let prueba = e.target.value;
  inputCardNumber.value = prueba.replace(/\D/g, '');
});

/*Ejecutando los objetos isvalid y maskify */
buttonValidateCardNumber.addEventListener('click', (event) => {
  event.preventDefault();
  validator.isValid(inputCardNumber.value);
  finalConditionCardValidOrInvalid.innerHTML = validator.isValid(inputCardNumber.value);
  validator.maskify(inputCardNumber.value);
  cardNumberWithMaskify.innerHTML = validator.maskify(inputCardNumber.value);
  let divValidOrInvalidColor = document.querySelector('.divValidOrInvalidColor')
  if (validator.isValid(inputCardNumber.value) === false) {
    divValidOrInvalidColor.classList.add('br');
    finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta inválida';
  } else {
    divValidOrInvalidColor.classList.add('by');
    finalConditionCardValidOrInvalid.innerHTML = 'Tarjeta válida';
  }
});

/*Limpiando los campos luego de haber realizado la validación */
const clearFields = () => {
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
}
buttonaAdOthercard.addEventListener('click', clearFields);
buttonFinalProcess.addEventListener('click', clearFields);

// console.log(validator);
