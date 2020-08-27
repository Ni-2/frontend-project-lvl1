import { random, range } from '../helps.js';
import index from '../index.js';

const task = 'What number is missing in the progression?';

// Set the progression length.
const progressionLength = 10;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const firstNumber = random(0, numbersUpperBorder - (progressionLength - 1));
  const upperBorder = random(firstNumber + (progressionLength - 1), numbersUpperBorder);
  const step = Math.floor((upperBorder - firstNumber) / (progressionLength - 1));
  const arrOfNumbers = range(firstNumber, upperBorder, step).slice(0, progressionLength);
  const answerIndex = random(0, progressionLength - 1);
  const answer = arrOfNumbers.splice(answerIndex, 1, '..').join('');
  return [task, arrOfNumbers.join(' '), answer];
};

export default () => index(genRoundData);
