

import validator from './validator.js';

document.getElementById('expirationDate').addEventListener('keyup', (e) => {
        let expiDate = e.target.value;
document.getElementById('expirationDate').value = expiDate
        .replace(/([0-9]{3})/g,'$1 ')
        .replace(/\s/g, '/')
});



let inputNumber = document.getElementById('cardNumber');
    inputNumber.addEventListener('keyup',(e) =>{
    let prueba = e.target.value;
    inputNumber.value = prueba.replace(/\D/g, '');
    });
let finalCondition = document.getElementById('conditionNum');

let hideNumber = document.getElementById('hideNum');

    document.getElementById('validate').addEventListener('click', (event) => {
    event.preventDefault();
    validator.isValid(inputNumber.value);
    finalCondition.innerHTML = validator.isValid(inputNumber.value);
    validator.maskify(inputNumber.value)
    hideNumber.innerHTML = validator.maskify(inputNumber.value);
    // console.log(validator.maskify('4083952015263'))
    let numPos = document.querySelector('.numPos')
    if(validator.isValid(inputNumber.value)==='Tarjeta inválida') {
        numPos.classList.add('br');
            }else{
        numPos.classList.add('by');
    }

});

document.getElementById('addOther').addEventListener('click', () => {

    let inputs = document.getElementsByTagName("input");
    //console.log(inputs)
    for(var i=0;i<inputs.length;i++){
        inputs[i].value = "";
    }
        finalCondition.innerHTML= "";
        hideNumber.innerHTML = "";
        let numPos = document.querySelector('.numPos')
            if(numPos.classList.remove('br')) {
                numPos.classList.remove('br');
            }else{
                numPos.classList.remove('by');
            }

})

document.getElementById('finalizar').addEventListener('click', () => {
    let inputs = document.getElementsByTagName("input");
    //console.log(inputs)
    for(var i=0;i<inputs.length;i++){
        inputs[i].value = "";
    }
        finalCondition.innerHTML= "";
        hideNumber.innerHTML = "";
        let numPos = document.querySelector('.numPos')
            if(numPos.classList.remove('br')) {
                numPos.classList.remove('br');
            }else{
                numPos.classList.remove('by');
            }
})






console.log(validator);
