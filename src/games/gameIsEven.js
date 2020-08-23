import { random } from '../helps.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default (n) => {
  const randomNumber = random(0, n);
  return [task, randomNumber, (isEven(randomNumber) ? 'yes' : 'no')];
};
