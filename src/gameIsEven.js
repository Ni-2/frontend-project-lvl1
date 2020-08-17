import _ from 'lodash';
import readLineSync from 'readline-sync';

const isEven = (number) => !(number % 2) ? 'yes' : 'no';

export default () => {
	const randomNumber = _.random(99);
	const rightAnswer = isEven(randomNumber);
	const usersAnswer = readLineSync.question(`Qwestion: ${randomNumber}\nYour answer: `);
	return usersAnswer === rightAnswer ? [true, 'Correct!']
		: [false, `"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`];
};

