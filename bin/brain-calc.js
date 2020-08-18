#!/usr/bin/env node

import askName from '../src/cli.js';
import gameCalc from '../src/games/gameCalc.js';
import index from '../src/index.js';

const name = askName();
console.log('What is the result of the expression?');
index(gameCalc, name);
