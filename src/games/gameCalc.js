import _ from 'lodash';

const randomOperator = (obj) => {
  const entries = Object.entries(obj);
  return entries[_.random(entries.length - 1)];
};

export default (n) => {
  const firstNumber = _.random(n);
  const secondNumber = _.random(n);
  const operators = {
    '+': (a, b) => a + b,
    '-': _.subtract,
    '*': _.multiply,
  };
  const operator = randomOperator(operators);

  const rightAnswer = operator[1](firstNumber, secondNumber);
  return [`${firstNumber} ${operator[0]} ${secondNumber}`, rightAnswer.toString()];
};
