import { constants } from "node:fs";
import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const [, , topicInput, exerciseInput] = process.argv;

if (!topicInput || !exerciseInput) {
  fail("Usage: npm run new -- <topic> <exercise-name>");
}

const topic = toKebabCase(topicInput);
const exercise = toKebabCase(exerciseInput);

if (!topic || !exercise) {
  fail("Topic and exercise names must contain letters or numbers.");
}

if (!/^[a-z]/.test(exercise)) {
  fail("Exercise names must start with a letter.");
}

const functionName = toCamelCase(exercise);
const projectRoot = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(projectRoot, "src", topic, `${exercise}.js`);
const testPath = path.join(projectRoot, "test", topic, `${exercise}.test.js`);

await assertAvailable(sourcePath);
await assertAvailable(testPath);
await mkdir(path.dirname(sourcePath), { recursive: true });
await mkdir(path.dirname(testPath), { recursive: true });

await writeFile(sourcePath, sourceTemplate(functionName), "utf8");
await writeFile(
  testPath,
  testTemplate({ exercise, functionName, topic }),
  "utf8",
);

console.log(`Created src/${topic}/${exercise}.js`);
console.log(`Created test/${topic}/${exercise}.test.js`);
console.log("Next: replace the todo test with an example, then solve it.");

function toKebabCase(value) {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function toCamelCase(value) {
  return value.replace(/-([a-z0-9])/g, (_, character) => character.toUpperCase());
}

async function assertAvailable(filePath) {
  try {
    await access(filePath, constants.F_OK);
    fail(`${path.relative(projectRoot, filePath)} already exists.`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function sourceTemplate(functionName) {
  return `/**
 * Describe the problem and its contract.
 *
 * Time: O(?)
 * Space: O(?)
 */
export function ${functionName}(...args) {
  void args;
  throw new Error("Not implemented yet.");
}
`;
}

function testTemplate({ exercise, functionName, topic }) {
  return `import assert from "node:assert/strict";
import test from "node:test";

import { ${functionName} } from "../../src/${topic}/${exercise}.js";

test.todo("${functionName} solves the example");

// Replace test.todo with something concrete, for example:
// test("${functionName} solves the example", () => {
//   assert.deepEqual(${functionName}(/* input */), /* expected */);
// });
`;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
