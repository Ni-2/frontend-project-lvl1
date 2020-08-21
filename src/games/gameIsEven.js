import _ from 'lodash';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default (n) => {
  const randomNumber = _.random(n);
  return [task, randomNumber, (isEven(randomNumber) ? 'yes' : 'no')];
};
