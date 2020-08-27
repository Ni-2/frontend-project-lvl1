import { random } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getTask = () => task;

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i ** 2 <= num; i += 1) if (num % i === 0) return false;
  return true;
};

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const randomNumber = random(1, numbersUpperBorder);
  return [randomNumber, (isPrime(randomNumber) ? 'yes' : 'no')];
};

export default () => startGameEngine(getTask, genRoundData);
