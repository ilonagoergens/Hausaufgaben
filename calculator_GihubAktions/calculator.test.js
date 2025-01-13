// calculator.test.js
const add = require('./calculator');

test('addiert 1 + 2 und gibt 3 zurück', () => {
  expect(add(1, 2)).toBe(3);
});
