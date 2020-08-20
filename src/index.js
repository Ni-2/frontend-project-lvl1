import readLineSync from 'readline-sync';

export default (func, name) => {
  // Set the number of right answers to win.
  const rightAnswersNumber = 3;
  // Set the upper border of the range of numbers in the games.
  const numbersUpperBorder = 99;
  for (let i = 0; i < rightAnswersNumber; i += 1) {
    const [question, rightAnswer] = func(numbersUpperBorder);
    const usersAnswer = readLineSync.question(`Qwestion: ${question}\nYour answer: `);
    if (usersAnswer === rightAnswer) console.log('Correct!');
    else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === rightAnswersNumber - 1) console.log(`Congratulations, ${name}!`);
  }
};
