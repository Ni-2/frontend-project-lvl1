#!/usr/bin/env node

import askName from '../src/cli.js';
import gamePrime from '../src/games/gamePrime.js';
import index from '../src/index.js';

const name = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
index(gamePrime, name);
