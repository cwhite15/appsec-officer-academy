import assert from "node:assert/strict";
import test from "node:test";
import { cityDefenseOutcome, cityDefenseThreshold } from "../js/defense.js";

test("city defense requires a score strictly above 90 percent", () => {
  assert.equal(cityDefenseThreshold, 90);
  assert.deepEqual(cityDefenseOutcome(10, 10), { percent: 100, threshold: 90, protected: true });
  assert.deepEqual(cityDefenseOutcome(9, 10), { percent: 90, threshold: 90, protected: false });
  assert.equal(cityDefenseOutcome(8, 10).protected, false);
});

test("city defense safely handles an invalid or empty assessment", () => {
  assert.deepEqual(cityDefenseOutcome(0, 0), { percent: 0, threshold: 90, protected: false });
  assert.deepEqual(cityDefenseOutcome(Number.NaN, 10), { percent: 0, threshold: 90, protected: false });
});
