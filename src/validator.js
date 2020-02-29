const validator = {
  isValid: cardNumber => {
    let totalSum = 0;
    let finalResult = true;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      //console.log(i);
      const integerValue = parseInt(cardNumber[i]);
      //console.log(cardNumber[i]);
      if (i % 2 !== 0) {
        const oddPosition = integerValue * 2;
        if (oddPosition >= 10) {
          let maxDiez = 1 + (oddPosition % 10);
          totalSum = totalSum + maxDiez;
        } else {
          totalSum = totalSum + oddPosition;
        }
      } else {
        totalSum = totalSum + integerValue;
      }
    }
    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }

  },

  maskify: cardNumber => {
    let dividedNum = cardNumber.split("");
    for (let i = 0; i < cardNumber.length - 4; i++) {
      dividedNum[i] = "#";
    }
    return dividedNum.join("");
  }
};
export default validator;
