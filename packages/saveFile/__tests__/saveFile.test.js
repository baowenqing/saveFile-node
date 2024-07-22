'use strict';

const savefile = require('..');
const assert = require('assert').strict;

assert.strictEqual(savefile(), 'Hello from savefile');
console.info("savefile tests passed");
