import readLineSync from 'readline-sync';
import askName from './cli.js';

// Set the number of right answers to win.
const attemptCount = 3;

export default (func) => {
  const name = askName();
  for (let i = 0; i < attemptCount; i += 1) {
    const [task, question, rightAnswer] = func();
    if (i === 0) console.log(task);
    const usersAnswer = readLineSync.question(`Qwestion: ${question}\nYour answer: `);
    if (usersAnswer === rightAnswer) console.log('Correct!');
    else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === attemptCount - 1) console.log(`Congratulations, ${name}!`);
  }
};
