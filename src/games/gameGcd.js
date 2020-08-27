import { random } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';
const getTask = () => task;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;
const gcd = (firstNum, secondNum) => (
  secondNum === 0 ? firstNum
    : gcd(secondNum, firstNum % secondNum)
);
const genRoundData = () => {
  const firstNumber = random(1, numbersUpperBorder);
  const secondNumber = random(1, numbersUpperBorder);
  const question = `${firstNumber}, ${secondNumber}`;
  const rightAnswer = gcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

export default () => startGameEngine(getTask, genRoundData);
