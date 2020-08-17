#!/usr/bin/env node

import askName from '../src/cli.js';
import gameIsEven from '../src/gameIsEven.js';

console.log('Welcone to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const rightAnswersNumber = 3;
for (let i = 0; i < rightAnswersNumber; i += 1) {
	const [result, message] = gameIsEven();
	console.log(message);
	if (!result) {
		console.log(`Let's try again, ${name}!`);
		break;
	}
	if (i === 2) console.log(`Congratulations, ${name}!`);
};

