import test from 'node:test';
import assert from 'node:assert/strict';
import { testableFunction } from './index.js';

test('test testableFunction', () => {
  assert.equal(testableFunction(), true);
});

test('test testableFunction failing', () => {
  assert.equal(testableFunction(), false);
});

test('this test is skipped', { skip: 'this is skipped' }, (t) => {
  // this code is never executed.
});

test('top level test', async (t) => {
  await t.test('subtest 1', (t) => {
    assert.strictEqual(1, 1);
  });
  await t.test('subtest 2', (t) => {
    assert.strictEqual(2, 2);
  });
});