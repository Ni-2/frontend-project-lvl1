import { random } from '../helps.js';
import index from '../index.js';

const task = 'What is the result of the expression?';

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const randomOperator = () => {
  const randomIndex = random(0, Object.keys(operators).length - 1);
  return Object.entries(operators)[randomIndex];
};

const game = (n) => {
  const firstNumber = random(0, n);
  const secondNumber = random(0, n);
  const [operSymbol, operation] = randomOperator();
  const rightAnswer = operation(firstNumber, secondNumber);
  return [task, `${firstNumber} ${operSymbol} ${secondNumber}`, rightAnswer.toString()];
};

export default () => index(game);
