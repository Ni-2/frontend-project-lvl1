import _ from 'lodash';

const task = 'What number is missing in the progression?';

const progressionLength = 10; // Set the progression length.

export default (n) => {
  const firstNumber = _.random(n - (progressionLength - 1));
  const upperBorder = _.random(firstNumber + (progressionLength - 1), n);
  const step = _.floor((upperBorder - firstNumber) / (progressionLength - 1));
  const arr = _.range(firstNumber, upperBorder + 1, step).slice(0, progressionLength);
  const index = _.random(progressionLength - 1);
  const answer = arr.splice(index, 1, '..').join('');
  return [task, arr.join(' '), answer];
};
