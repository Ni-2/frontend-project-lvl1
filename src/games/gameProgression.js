import _ from 'lodash';

export default (n) => {
  const progressionLength = 10; // Set the progression length.
  const firstNumber = _.random(n - (progressionLength - 1));
  const upperBorder = _.random(firstNumber + (progressionLength - 1), n);
  const step = _.floor((upperBorder - firstNumber) / (progressionLength - 1));
  const arr = _.range(firstNumber, upperBorder + 1, step).slice(0, progressionLength);
  const index = _.random(progressionLength - 1);
  const answer = arr.splice(index, 1, '..').join('');
  return [arr.join(' '), answer];
};
