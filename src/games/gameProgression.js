import { genRandomNum, genRangeFromToStepWithTo } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'What number is missing in the progression?';

// Set the progression length.
const progressionLength = 10;

// Set the upper border of the range of numbers in the game.
const numbersUpperBorder = 99;

const genRoundData = () => {
  const firstNumber = genRandomNum(0, numbersUpperBorder - (progressionLength - 1));
  const upperBorder = genRandomNum(firstNumber + (progressionLength - 1), numbersUpperBorder);
  const step = Math.floor((upperBorder - firstNumber) / (progressionLength - 1));
  const progression = genRangeFromToStepWithTo(firstNumber, upperBorder, step)
    .slice(0, progressionLength);
  const rightAnswerIndex = genRandomNum(0, progressionLength - 1);
  const rightAnswer = progression[rightAnswerIndex].toString();
  progression[rightAnswerIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => startGameEngine(task, genRoundData);
