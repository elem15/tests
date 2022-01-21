// @ts-check

import fill from '../src/fill.js';


// BEGIN (write your solution here)
let array;
beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('standart', () => {
  const array = [1, 2, 3, 4];  
  expect(fill(array, '*', 1, 3)).toStrictEqual([1, '*', '*', 4]);  
});
test('without arguments', () => {
    const array = [1, 2, 3, 4];  
    expect(fill(array, '*')).toStrictEqual(['*', '*', '*', '*']);
});
test('outside argument', () => {
    const array = [1, 2, 3, 4];  
    expect(fill(array, '*', 4)).toStrictEqual([1, 2, 3, 4]);
});
test('covered arguments', () => {
    const array = [1, 2, 3, 4];  
    expect(fill(array, '*', 0, 10)).toStrictEqual(['*', '*', '*', '*']);
});
// END

// let array;

// beforeEach(() => {
//   array = [1, 2, 3, 4];
// });

test('common case', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});

test('should use defalt start and end', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('shoud works with start >= length', () => {
  fill(array, '*', 10, 12);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('shoud works with start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('shoud works with end > length', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});
