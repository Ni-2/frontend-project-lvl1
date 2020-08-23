import { random } from '../helps.js';

const task = 'Find the greatest common divisor of given numbers.';

export default (n) => {
  const firstNumber = random(1, n);
  const secondNumber = random(1, n);
  const message = `${firstNumber}, ${secondNumber}`;
  let [maxNumber, minNumber] = firstNumber >= secondNumber
    ? [firstNumber, secondNumber]
    : [secondNumber, firstNumber];
  for (;;) {
    const tail = maxNumber % minNumber;
    if (tail === 0) return [task, message, minNumber.toString()];
    if (tail === 1) return [task, message, '1'];
    maxNumber = minNumber;
    minNumber = tail;
  }
};
