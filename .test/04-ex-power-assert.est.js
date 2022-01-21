import assert from 'power-assert';
import getFunction from '../src/04-ex-power-assert.js';

const indexOf = getFunction();

assert(indexOf([1, 2, 1, 2], 1) === 0);
assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);


// const array = [1, 2, 3];
// const zero = 0;
// const two = 2;

// // Весь код остаётся тем же самым
// const user = {
//     name: 'Madonna',
//     friends: ['Kate', 'Michel'],
//     email: 'madonna@example.com',
//   };
  
//   // Интерфейс библиотеки power-assert на 100% совместим со встроенным модулем assert.
//   assert(user.name === 'Michel');
// assert(array.indexOf(two) === 1);