import _ from 'lodash';

export default (n) => {
  const randomNumber = _.random(n);
  return [randomNumber, (!(randomNumber % 2) ? 'yes' : 'no')];
};
