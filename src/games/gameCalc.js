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

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const game = () => {
  const firstNumber = random(0, numbersUpperBorder);
  const secondNumber = random(0, numbersUpperBorder);
  const [operSymbol, operation] = randomOperator();
  const rightAnswer = operation(firstNumber, secondNumber);
  return [task, `${firstNumber} ${operSymbol} ${secondNumber}`, rightAnswer.toString()];
};

export default () => index(game);
