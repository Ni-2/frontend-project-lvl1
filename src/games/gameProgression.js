import { random, range } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'What number is missing in the progression?';
const getTask = () => task;

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
  const rightAnswer = arrOfNumbers.splice(answerIndex, 1, '..').join('');
  return [arrOfNumbers.join(' '), rightAnswer];
};

export default () => startGameEngine(getTask, genRoundData);
