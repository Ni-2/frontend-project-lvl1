import { random } from '../helps.js';
import index from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const game = (n) => {
  const randomNumber = random(0, n);
  return [task, randomNumber, (isEven(randomNumber) ? 'yes' : 'no')];
};

export default () => index(game);
