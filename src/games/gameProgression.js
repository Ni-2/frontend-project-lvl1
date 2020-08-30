import { genRandomNum, genRangeFromToStepWithTo } from '../helps.js';
import startGameEngine from '../index.js';

const task = 'What number is missing in the progression?';

// Set the progression length.
const progressionLength = 10;

const genRoundData = () => {
  const firstNumber = genRandomNum(0, 99);
  const step = genRandomNum(1, 10);
  const secondNumber = firstNumber + step * (progressionLength - 1);
  const progression = genRangeFromToStepWithTo(firstNumber, secondNumber, step);
  const rightAnswerIndex = genRandomNum(0, progressionLength - 1);
  const rightAnswer = progression[rightAnswerIndex].toString();
  progression[rightAnswerIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => startGameEngine(task, genRoundData);
