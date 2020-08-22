import _ from 'lodash';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Based on Sieve of Eratosthenes algorithm.
const primeNumbers = (limit) => {
  const numbers = _.range(2, limit + 1);
  const numBoolDict = numbers.reduce((acc, num) => ({ ...acc, [num]: true }), {});
  for (let i = 2; i ** 2 <= limit; i += 1) {
    if (numBoolDict[i]) {
      for (let j = i ** 2; j <= limit; j += i) numBoolDict[j] = false;
    }
  }
  return Object.entries(numBoolDict).filter(([, bool]) => bool).map(([num]) => +num);
};

const isPrime = (num) => primeNumbers(num).includes(num);

export default (n) => {
  const randomNumber = _.random(1, n);
  return [task, randomNumber, (isPrime(randomNumber) ? 'yes' : 'no')];
};
