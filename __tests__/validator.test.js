// @ts-check

import _ from 'lodash';
import getImplementation from '../implementations/index.js';

const makeValidator = getImplementation();

// BEGIN (write your solution here)
// Создаем объект валидатора

test("check any value", () => {
  const validator = makeValidator();
  expect(validator.isValid('some value')).toEqual(true); 
  validator.addCheck(_.isNumber);
  expect(validator.isValid('string')).toBe(false);
});

test("main flow", () => {
  const validator = makeValidator();
  validator.addCheck((v) => v > 5);
  expect(validator.isValid(7)).toBe(true);
  expect(validator.isValid(3)).toBe(false);
  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(8)).toBe(true);
  expect(validator.isValid(2)).toBe(false); 
});
// END
