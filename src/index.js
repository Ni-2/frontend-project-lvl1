import readLineSync from 'readline-sync';

export default (func, name) => {
  const rightAnswersNumber = 3;
  for (let i = 0; i < rightAnswersNumber; i += 1) {
    const [question, rightAnswer] = func();
    const usersAnswer = readLineSync.question(`Qwestion: ${question}\nYour answer: `);
    if (usersAnswer === rightAnswer) console.log('Correct!');
    else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === rightAnswersNumber - 1) console.log(`Congratulations, ${name}!`);
  }
};
