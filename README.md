# Fundamentals

A personal JavaScript playground for data structures, algorithms, interview
questions, problem-solving patterns, and the occasional brain teaser.

This keeps the original spirit of DSA Dojo: write the code yourself, make the
examples concrete, test your thinking, and leave useful notes. It is a
workbench, not a polished learning application.

## Quick Start

Fundamentals requires Node.js 22 or newer and has no third-party dependencies.

```bash
npm run play
npm test
```

Use watch mode while actively solving a problem:

```bash
npm run play:watch
npm run test:watch
```

## Curriculum

Open [src/README.md](./src/README.md) for the complete curriculum. It currently
contains:

- 7 core data structures to implement from scratch
- 72 problem starters, including the distinct exercises from DSA Dojo
- arrays, strings, matrices, linked lists, stacks, queues, heaps, trees, tries,
  graphs, union-find, searching, sorting, recursion, backtracking, greedy,
  dynamic programming, and bit manipulation
- dedicated two-pointer, sliding-window, interval, prefix-sum, binary-search,
  fast-and-slow, breadth-first-search, and depth-first-search practice

Every starter includes a concise prompt, difficulty, example, follow-up, and
function or class shell. The implementations are deliberately yours to write.

Start with the `Foundations` sections in Arrays and Linked Lists. Those preserve
the smaller DSA Dojo exercises before the broader interview set.

## Working on a Problem

For example, to work on Two Sum:

1. Open `src/arrays/two-sum.js` and implement `twoSum`.
2. Create `test/arrays/two-sum.test.js` with the examples and edge cases you
   want to prove.
3. Run only that test while iterating:

```bash
node --test test/arrays/two-sum.test.js
```

4. Run the full check when you finish:

```bash
npm run check
```

Use `playground.js` when you only want to experiment with inputs and log output.

## Start an Extra Exercise

To add a problem that is not already in the curriculum, generate a source file
and a matching todo test:

```bash
npm run new -- arrays pair-sum
npm run new -- brain-teasers clock-angle
```

The generator creates:

```text
src/<topic>/<exercise>.js
test/<topic>/<exercise>.test.js
```

## Project Map

```text
fundamentals/
|-- playground.js
|-- src/
|   |-- data-structures/       # build the structures themselves
|   |-- arrays/                # interview questions by topic
|   |-- strings/
|   |-- linked-lists/
|   |-- trees/
|   |-- graphs/
|   |-- ...
|   `-- patterns/              # reusable problem-solving patterns
|-- test/                      # tests you add as you solve
|-- notes/                     # concepts, mistakes, and discoveries
`-- scripts/                   # exercise and curriculum utilities
```

## Practice Checklist

For each problem, answer these before calling it done:

1. What is the simplest correct approach?
2. Which edge cases could break it?
3. What are the time and auxiliary-space costs?
4. Which pattern or invariant makes the solution work?
5. What tradeoff would an alternative approach make?
6. Can you explain the solution without reading the code?
