import _ from 'lodash';

export default () => {
  const randomNumber = _.random(99);
  return [randomNumber, (!(randomNumber % 2) ? 'yes' : 'no')];
};
