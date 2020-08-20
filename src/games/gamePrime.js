import _ from 'lodash';

export default (n) => {
  const numbers = _.range(2, n + 1);
  const numBoolDict = numbers.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});

  for (let i = 0; i ** 2 <= n; i += 1) {
    if (numBoolDict[i] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        numBoolDict[j] = false;
      }
    }
  }
  const primes = Object.entries(numBoolDict).filter((num) => num[1]).map((pair) => pair[0]);
  
  const randomNumber = _.random(1, n).toString();
  return [randomNumber, (primes.includes(randomNumber) ? 'yes' : 'no')];
};
