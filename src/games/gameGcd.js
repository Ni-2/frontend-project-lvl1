import { random } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';
const getTask = () => task;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const firstNumber = random(1, numbersUpperBorder);
  const secondNumber = random(1, numbersUpperBorder);
  const message = `${firstNumber}, ${secondNumber}`;
  let [maxNumber, minNumber] = firstNumber >= secondNumber
    ? [firstNumber, secondNumber]
    : [secondNumber, firstNumber];
  for (;;) {
    const tail = maxNumber % minNumber;
    if (tail === 0) return [message, minNumber.toString()];
    if (tail === 1) return [message, '1'];
    maxNumber = minNumber;
    minNumber = tail;
  }
};

export default () => startGameEngine(getTask, genRoundData);
