import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const sourceRoot = path.resolve(import.meta.dirname, "..", "src");
const sourceFiles = await findJavaScriptFiles(sourceRoot);

test("the curriculum contains starter modules", () => {
  assert.ok(sourceFiles.length >= 40, "Expected at least 40 starter modules.");
});

for (const sourceFile of sourceFiles) {
  const relativePath = path.relative(sourceRoot, sourceFile);

  test(`${relativePath} loads`, async () => {
    const module = await import(pathToFileURL(sourceFile));
    assert.ok(Object.keys(module).length > 0, "Expected at least one export.");
  });
}

async function findJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findJavaScriptFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      files.push(entryPath);
    }
  }

  return files.sort();
}
