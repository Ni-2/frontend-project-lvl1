import _ from 'lodash';

const task = 'Find the greatest common divisor of given numbers.';

export default (n) => {
  const firstNumber = _.random(1, n);
  const secondNumber = _.random(1, n);
  const message = `${firstNumber}, ${secondNumber}`;

  let maxNumber = _.max([firstNumber, secondNumber]);
  let minNumber = _.min([firstNumber, secondNumber]);
  for (;;) {
    const tail = maxNumber % minNumber;
    if (tail === 0) return [task, message, minNumber.toString()];
    if (tail === 1) return [task, message, '1'];
    maxNumber = minNumber;
    minNumber = tail;
  }
};
