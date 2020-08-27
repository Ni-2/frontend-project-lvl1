import { random } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'What is the result of the expression?';
const getTask = () => task;

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperator = () => {
  const randomIndex = random(0, Object.keys(operators).length - 1);
  return Object.keys(operators)[randomIndex];
};

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const firstNumber = random(0, numbersUpperBorder);
  const secondNumber = random(0, numbersUpperBorder);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const calculate = operators[operator];
  const rightAnswer = calculate(firstNumber, secondNumber).toString();
  return [question, rightAnswer];
};

export default () => startGameEngine(getTask, genRoundData);
