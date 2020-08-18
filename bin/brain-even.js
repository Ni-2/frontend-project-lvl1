#!/usr/bin/env node

import askName from '../src/cli.js';
import gameIsEven from '../src/games/gameIsEven.js';
import index from '../src/index.js';

const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
index(gameIsEven, name);
