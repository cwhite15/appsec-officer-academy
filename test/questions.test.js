import test from "node:test";
import assert from "node:assert/strict";
import { gradeAssessment, gradeQuestion, normalizeAnswer, qualifiesForCtf, questions } from "../js/questions.js";

test("question bank contains ten valid, uniquely identified questions", () => {
  assert.equal(questions.length, 10);
  assert.equal(new Set(questions.map((question) => question.id)).size, questions.length);
  for (const question of questions) {
    const choiceIds = question.choices.map((choice) => choice.id);
    assert.equal(question.prompt.length > 0, true);
    assert.equal(new Set(choiceIds).size, choiceIds.length);
    assert.equal(question.correctIds.every((id) => choiceIds.includes(id)), true);
    if (question.mode === "single") assert.equal(question.correctIds.length, 1);
  }
});

test("single-choice questions require the correct answer", () => {
  assert.equal(gradeQuestion(questions[0], ["c"]), true);
  assert.equal(gradeQuestion(questions[0], ["a"]), false);
  assert.equal(gradeQuestion(questions[0], []), false);
});

test("multi-select questions use exact, order-independent set matching", () => {
  const question = questions[3];
  assert.equal(gradeQuestion(question, ["e", "d", "c", "b", "a"]), true);
  assert.equal(gradeQuestion(question, ["a", "b", "c", "d"]), false);
  assert.deepEqual(normalizeAnswer(["b", "a", "b"]), ["a", "b"]);
});

test("assessment scoring produces the expected total", () => {
  const perfect = Object.fromEntries(questions.map((question) => [question.id, question.correctIds]));
  assert.deepEqual(gradeAssessment(perfect), {
    results: questions.map((question) => ({ id: question.id, selectedIds: [...question.correctIds].sort(), correct: true })),
    score: 10,
    total: 10
  });
  assert.equal(gradeAssessment({}).score, 0);
});

test("the PDF answer key is represented exactly", () => {
  assert.deepEqual(questions.map((question) => question.correctIds.join("")), ["c", "b", "a", "abcde", "abcd", "a", "abcd", "b", "a", "a"]);
});

test("CTF qualification requires a score of 90 percent or better", () => {
  assert.equal(qualifiesForCtf(8, 10), false);
  assert.equal(qualifiesForCtf(9, 10), true);
  assert.equal(qualifiesForCtf(10, 10), true);
  assert.equal(qualifiesForCtf(0, 0), false);
});
