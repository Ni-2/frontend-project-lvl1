#!/usr/bin/env node

import askName from '../src/cli.js';
import gameGcd from '../src/games/gameGcd.js';
import index from '../src/index.js';

const name = askName();
console.log('Find the greatest common divisor of given numbers.');
index(gameGcd, name);
