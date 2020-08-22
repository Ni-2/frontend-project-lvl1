import _ from 'lodash';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i ** 2 <= num; i += 1) if (num % i === 0) return false;
  return true;
};

export default (n) => {
  const randomNumber = _.random(1, n);
  return [task, randomNumber, (isPrime(randomNumber) ? 'yes' : 'no')];
};
