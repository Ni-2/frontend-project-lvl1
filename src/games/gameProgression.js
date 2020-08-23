import { random, range } from '../helps.js';
import index from '../index.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10; // Set the progression length.

const game = (n) => {
  const firstNumber = random(0, n - (progressionLength - 1));
  const upperBorder = random(firstNumber + (progressionLength - 1), n);
  const step = Math.floor((upperBorder - firstNumber) / (progressionLength - 1));
  const arrOfNumbers = range(firstNumber, upperBorder, step).slice(0, progressionLength);
  const answerIndex = random(0, progressionLength - 1);
  const answer = arrOfNumbers.splice(answerIndex, 1, '..').join('');
  return [task, arrOfNumbers.join(' '), answer];
};

export default () => index(game);
