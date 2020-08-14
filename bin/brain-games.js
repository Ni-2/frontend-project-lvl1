#!/usr/bin/env node

import askName from '../src/cli.js';

const greetingByName = askName();

console.log(greetingByName);
