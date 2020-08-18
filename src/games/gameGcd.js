import _ from 'lodash';

export default () => {
  const firstNumber = _.random(1, 99);
  const secondNumber = _.random(1, 99);
  const message = `${firstNumber}, ${secondNumber}`;

  let maxNumber = _.max([firstNumber, secondNumber]);
  let minNumber = _.min([firstNumber, secondNumber]);
  while (true) {
    const tail = maxNumber % minNumber;
    if (tail === 0) return [message, minNumber.toString()];
    if (tail === 1) return [message, '1'];
    maxNumber = minNumber;
    minNumber = tail;
  }
};
