import { strict as assert } from 'assert';
// import assert from 'assert';
import getFunction from '../src/03-ex-assert.js';

const take = getFunction();
// const take = (items, n = 1) => items.slice(0, n);
// BEGIN (write your solution here)
assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([4, 3], 9), [4, 3]);
assert.deepStrictEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepStrictEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepStrictEqual(take([1, 2]), [1]);
assert.deepStrictEqual(take([]), []);
// END