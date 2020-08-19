#!/usr/bin/env node

import askName from '../src/cli.js';
import gameProgression from '../src/games/gameProgression.js';
import index from '../src/index.js';

const name = askName();
console.log('What number is missing in the progression?');
index(gameProgression, name);
