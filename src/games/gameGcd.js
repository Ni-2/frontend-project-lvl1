import _ from 'lodash';

export default (n) => {
  const firstNumber = _.random(1, n);
  const secondNumber = _.random(1, n);
  const message = `${firstNumber}, ${secondNumber}`;

  let maxNumber = _.max([firstNumber, secondNumber]);
  let minNumber = _.min([firstNumber, secondNumber]);
  for (;;) {
    const tail = maxNumber % minNumber;
    if (tail === 0) return [message, minNumber.toString()];
    if (tail === 1) return [message, '1'];
    maxNumber = minNumber;
    minNumber = tail;
  }
};
