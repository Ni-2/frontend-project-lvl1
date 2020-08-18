import _ from 'lodash';
import index from '../index.js';

export default () => {
  const randomNumber = _.random(99);
  return [randomNumber, (!(randomNumber % 2) ? 'yes' : 'no')];
};
