import { random } from '../helps.js';
import index from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i ** 2 <= num; i += 1) if (num % i === 0) return false;
  return true;
};

const game = (n) => {
  const randomNumber = random(1, n);
  return [task, randomNumber, (isPrime(randomNumber) ? 'yes' : 'no')];
};

export default () => index(game);
