import { genRandomNum } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;
const gcd = (firstNum, secondNum) => (
  secondNum === 0 ? firstNum
    : gcd(secondNum, firstNum % secondNum)
);
const genRoundData = () => {
  const firstNumber = genRandomNum(1, numbersUpperBorder);
  const secondNumber = genRandomNum(1, numbersUpperBorder);
  const question = `${firstNumber}, ${secondNumber}`;
  const rightAnswer = gcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

export default () => startGameEngine(task, genRoundData);
