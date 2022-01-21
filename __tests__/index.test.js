import reverse from '../src/index.js';
import getFunction from '../src/05-ex-jest.js'
import Function06 from '../src/06-ex-matchers.js';

const without = getFunction();

const gt = Function06();

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBe(false); 
  expect(gt(1, 3)).toBe(false); 
  expect(gt(0, 0)).toBe(false);
  expect(gt(1, 0)).toBe(true);
  expect(gt(-3, 1)).toBe(false);
});
test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
  expect(without([], 3)).toEqual([]);
  expect(without([])).toEqual([]);
});
test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});