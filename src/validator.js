const validator = {
  isValid: (cardNumber) => {
    let totalSum = 0;
    for (let i = cardNumber.length - 1; i >= 0; i -= 1) {
      // console.log(i);
      const integerValue = parseInt(cardNumber[i], 10);
      // console.log(cardNumber[i]);
      if (i % 2 !== 0) {
        const oddPosition = integerValue * 2;
        if (oddPosition >= 10) {
          const maxDiez = 1 + (oddPosition % 10);
          totalSum += maxDiez;
        } else {
          totalSum += oddPosition;
        }
      } else {
        totalSum += integerValue;
      }
    }
    if (totalSum % 10 === 0) {
      return true;
    }
    return false;
  },


  maskify: (cardNumber) => {
    const dividedNum = cardNumber.split('');
    for (let i = 0; i < cardNumber.length - 4; i += 1) {
      dividedNum[i] = '#';
    }
    return dividedNum.join('');
  },
};
export default validator;
