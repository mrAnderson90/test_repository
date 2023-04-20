// import { strict as assert } from 'node:assert';
import { capitalize } from '../src/index.js';
/*
assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize(''), '');
*/
const user = {
  name: 'Madonna',
  friends: ['Kate', 'Michel'],
  email: 'madonna@example.com',
};

assert(user.name === 'Michel');