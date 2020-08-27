import { random } from '../helps.js';
import index from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const randomNumber = random(0, numbersUpperBorder);
  return [task, randomNumber, (isEven(randomNumber) ? 'yes' : 'no')];
};

export default () => index(genRoundData);
