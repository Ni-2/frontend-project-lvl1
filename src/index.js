import readLineSync from 'readline-sync';

// Set the number of right answers to win.
const attemptCount = 3;

export default (func) => {
  console.log('Welcone to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
