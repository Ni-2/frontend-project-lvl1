import _ from 'lodash';

export default (n) => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const randomNumber = _.random(1, 99);
  return [randomNumber, (primes.includes(randomNumber) ? 'yes' : 'no')];
};
