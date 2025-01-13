import test from "node:test"
import assert from "assert";
import add from "./calculator.js";


test('addiert 1 + 2 und gibt 3 zurück', () => {
  assert.strictEqual(add(2, 3), 5)
});
