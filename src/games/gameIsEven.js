import { random } from '../helps.js';
import index from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getTask = () => task;

const isEven = (num) => num % 2 === 0;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const question = random(0, numbersUpperBorder);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rigthAnswer];
};

export default () => index(getTask, genRoundData);
