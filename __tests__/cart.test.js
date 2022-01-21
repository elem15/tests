// @ts-check

import getImpelementation from '../cart/index.js';

const makeCart = getImpelementation();

// BEGIN (write your solution here)
let cart;
beforeEach(() => {
  cart = makeCart();
});

test('getItems', () => {
  cart.addItem({ name: 'car', price: 3 }, 5);
  expect(cart.getCount()).toBe(5);
  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems().length).toBe(2);
  expect(cart.getCost()).toBe(35);
  cart.addItem({ name: 'house', price: 10 }, 1);
  expect(cart.getItems().length).toBe(3);
  expect(cart.getCost()).toBe(45);
})

// END
