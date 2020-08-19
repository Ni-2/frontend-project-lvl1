import _ from 'lodash';

export default () => {
  const firstNumber = _.random(90);
  const upperBorder = _.random(firstNumber + 9, 99);
  const step = _.floor((upperBorder - firstNumber) / 9);
  const arr = _.range(firstNumber, upperBorder, step).slice(0, 10);
  const index = _.random(9);
  const answer = arr.splice(index, 1, '..').join('');
  return [arr.join(' '), answer];
};
