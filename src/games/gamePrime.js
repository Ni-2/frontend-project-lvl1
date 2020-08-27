import { random } from '../helps.js';
import index from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i ** 2 <= num; i += 1) if (num % i === 0) return false;
  return true;
};

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const randomNumber = random(1, numbersUpperBorder);
  return [task, randomNumber, (isPrime(randomNumber) ? 'yes' : 'no')];
};

export default () => index(genRoundData);
