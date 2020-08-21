import _ from 'lodash';

const task = 'What is the result of the expression?';

const operators = {
  '+': (a, b) => a + b,
  '-': _.subtract,
  '*': _.multiply,
};

const randomOperator = () => {
  const entries = Object.entries(operators);
  return entries[_.random(entries.length - 1)];
};

export default (n) => {
  const firstNumber = _.random(n);
  const secondNumber = _.random(n);
  const operator = randomOperator();
  const rightAnswer = operator[1](firstNumber, secondNumber);
  return [task, `${firstNumber} ${operator[0]} ${secondNumber}`, rightAnswer.toString()];
};
