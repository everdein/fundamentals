import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot = path.join(projectRoot, "src");

const curriculum = [
  topic("arrays", "Arrays", "Indexing, scans, in-place updates, and array-based tradeoffs.", [
    fp("sum-values", "sumValues", "values", "Sum Values", "Foundation",
      "Return the sum of every number in the array. An empty array has a sum of zero.",
      "sumValues([1, 2, 3, 4, 5]) -> 15",
      "State the loop invariant maintained by the running total."),
    fp("count-even-odds", "countEvenOdds", "values", "Count Even and Odd Values", "Foundation",
      "Return an object containing the number of even values and odd values. Treat zero as even.",
      "countEvenOdds([1, 2, 3, 4, 5]) -> { even: 2, odd: 3 }",
      "Can you classify each value in one pass and constant space?"),
    fp("find-largest", "findLargest", "values", "Find Largest", "Foundation",
      "Return the largest number in a non-empty array.",
      "findLargest([4, 3, -2, 10, 1]) -> 10",
      "Why is initializing from zero incorrect for some valid inputs?"),
    fp("find-smallest", "findSmallest", "values", "Find Smallest", "Foundation",
      "Return the smallest number in a non-empty array.",
      "findSmallest([4, 3, -2, 10, 1]) -> -2",
      "Describe what is known about the candidate after each iteration."),
    fp("second-largest", "findSecondLargest", "values", "Find Second Largest", "Foundation",
      "Return the second-largest distinct value without sorting, or null when fewer than two distinct values exist.",
      "findSecondLargest([10, 4, 10, 8]) -> 8",
      "Can you update both candidates correctly in one pass?"),
    fp("is-sorted", "isSorted", "values", "Is Sorted", "Foundation",
      "Return whether the array is in non-decreasing order.",
      "isSorted([1, 2, 2, 4]) -> true",
      "How many adjacent comparisons are necessary?"),
    fp("frequency-count", "countFrequencies", "values", "Frequency Count", "Foundation",
      "Return an object mapping each value to the number of times it occurs.",
      "countFrequencies([1, 2, 2, 1, 1]) -> { 1: 3, 2: 2 }",
      "What changes if the values are arbitrary objects rather than primitives?"),
    fp("median", "findMedian", "values", "Median", "Foundation",
      "Return the median of a non-empty numeric array without modifying the input.",
      "findMedian([7, 1, 3, 2]) -> 2.5",
      "Explain the time cost introduced by sorting."),
    fp("merge-sorted-arrays", "mergeSortedArrays", "left, right", "Merge Sorted Arrays", "Foundation",
      "Merge two ascending arrays into one ascending array without calling the built-in sort.",
      "mergeSortedArrays([1, 4, 7], [2, 3, 8]) -> [1, 2, 3, 4, 7, 8]",
      "Can each input index move only forward?"),
    fp("missing-number", "findMissingNumber", "values", "Missing Number", "Foundation",
      "The array contains distinct values from zero through n with one value missing. Return the missing value.",
      "findMissingNumber([3, 0, 1]) -> 2",
      "Compare summation, a set, and XOR approaches."),
    fp("remove-duplicates", "removeDuplicates", "values", "Remove Duplicates", "Foundation",
      "Return a new array containing only the first occurrence of each value, preserving order.",
      "removeDuplicates([3, 1, 3, 2, 1]) -> [3, 1, 2]",
      "What time-space tradeoff comes from avoiding a set?"),
    fp("reverse-array", "reverseArray", "values", "Reverse Array", "Foundation",
      "Return a reversed copy of the array without calling the built-in reverse method.",
      "reverseArray([2, 1, 4, 3, 5]) -> [5, 3, 4, 1, 2]",
      "Use two pointers and keep the input unchanged."),
    fp("rotate-array", "rotateArray", "values, steps", "Rotate Array", "Foundation",
      "Return a copy rotated to the right by the requested number of steps. Steps may exceed the array length.",
      "rotateArray([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]",
      "Normalize the rotation before moving values."),
    fp("move-zeros", "moveZeros", "values", "Move Zeros", "Foundation",
      "Return a copy with all zeros at the end while preserving the order of non-zero values.",
      "moveZeros([0, 1, 0, 3, 12]) -> [1, 3, 12, 0, 0]",
      "Coordinate read and write pointers without filtering into another array."),
    fp("fixed-size-window-sum", "maximumWindowSum", "values, windowSize", "Maximum Fixed-Size Window Sum", "Foundation",
      "Return the sum and bounds of the contiguous fixed-size window with the largest sum.",
      "maximumWindowSum([2, 1, 5, 1, 3, 2], 3) -> { sum: 9, start: 1, end: 3 }",
      "Update the sum by removing one value and adding one value."),
    fp("pair-sum", "findPairWithSum", "values, target", "Pair Sum", "Foundation",
      "Return two values whose sum equals target, or null when no such pair exists.",
      "findPairWithSum([4, 7, 1, 9], 10) -> [1, 9]",
      "Compare a set-based scan with sorting and two pointers."),
    p("two-sum", "twoSum", "numbers, target", "Two Sum", "Easy",
      "Return the indices of two distinct values whose sum equals the target.",
      "twoSum([2, 7, 11, 15], 9) -> [0, 1]",
      "Can you solve it in one pass?"),
    p("maximum-subarray", "maximumSubarray", "numbers", "Maximum Subarray", "Medium",
      "Return the largest sum obtainable from one contiguous, non-empty subarray.",
      "maximumSubarray([-2, 1, -3, 4, -1, 2, 1]) -> 6",
      "Can you avoid storing every possible subarray?"),
    p("product-except-self", "productExceptSelf", "numbers", "Product Except Self", "Medium",
      "Return an array where each position contains the product of every other value.",
      "productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]",
      "Solve it without division and with constant auxiliary space beyond the output."),
  ]),
  topic("strings", "Strings", "Character scans, normalization, frequency tracking, and substring reasoning.", [
    p("valid-palindrome", "isValidPalindrome", "text", "Valid Palindrome", "Easy",
      "Return whether the text reads the same forward and backward after ignoring case and non-alphanumeric characters.",
      "isValidPalindrome(\"A man, a plan, a canal: Panama\") -> true",
      "Can you scan inward without allocating a cleaned copy?"),
    p("group-anagrams", "groupAnagrams", "words", "Group Anagrams", "Medium",
      "Group words that contain the same characters with the same frequencies.",
      "groupAnagrams([\"eat\", \"tea\", \"tan\", \"ate\"]) -> [[\"eat\", \"tea\", \"ate\"], [\"tan\"]]",
      "Choose a stable key for each group."),
    p("longest-substring-without-repeating", "longestUniqueSubstring", "text", "Longest Substring Without Repeating", "Medium",
      "Return the length of the longest contiguous substring with no repeated character.",
      "longestUniqueSubstring(\"abcabcbb\") -> 3",
      "Can you avoid restarting the scan after a duplicate?"),
  ]),
  topic("matrices", "Matrices", "Row-column traversal, boundaries, and in-place grid transformations.", [
    p("rotate-image", "rotateImage", "matrix", "Rotate Image", "Medium",
      "Rotate an n by n matrix 90 degrees clockwise in place and return it.",
      "rotateImage([[1, 2], [3, 4]]) -> [[3, 1], [4, 2]]",
      "Use O(1) auxiliary space."),
    p("set-matrix-zeroes", "setMatrixZeroes", "matrix", "Set Matrix Zeroes", "Medium",
      "If a cell is zero, set its entire row and column to zero in place.",
      "setMatrixZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]) -> [[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      "Can the matrix itself store the row and column markers?"),
  ]),
  topic("hash-maps-and-sets", "Hash Maps and Sets", "Fast membership checks, counting, grouping, and lookup tradeoffs.", [
    p("contains-duplicate", "containsDuplicate", "numbers", "Contains Duplicate", "Easy",
      "Return true when any value appears more than once.",
      "containsDuplicate([1, 2, 3, 1]) -> true",
      "Compare the time-space tradeoff with sorting first."),
    p("top-k-frequent-elements", "topKFrequent", "numbers, k", "Top K Frequent Elements", "Medium",
      "Return the k values that occur most often, in any order.",
      "topKFrequent([1, 1, 1, 2, 2, 3], 2) -> [1, 2]",
      "Can you do better than sorting every distinct value?"),
    p("longest-consecutive-sequence", "longestConsecutive", "numbers", "Longest Consecutive Sequence", "Medium",
      "Return the length of the longest run of consecutive integers regardless of input order.",
      "longestConsecutive([100, 4, 200, 1, 3, 2]) -> 4",
      "Aim for O(n) expected time."),
  ]),
  topic("linked-lists", "Linked Lists", "Pointer updates, sentinel nodes, cycles, and one-pass list transformations.", [
    fp("traverse-linked-list", "traverseLinkedList", "head", "Traverse Linked List", "Foundation",
      "Follow next references in an acyclic singly linked list and return the node values in order.",
      "6 -> 3 -> 8 -> 2 -> null becomes [6, 3, 8, 2]",
      "Use O(1) auxiliary space beyond the returned values."),
    fp("reverse-linked-list", "reverseLinkedList", "head", "Reverse Linked List", "Easy",
      "Reverse a singly linked list and return its new head. Nodes have value and next properties.",
      "1 -> 2 -> 3 -> null becomes 3 -> 2 -> 1 -> null",
      "Try both iterative and recursive versions."),
    p("merge-two-sorted-lists", "mergeSortedLists", "first, second", "Merge Two Sorted Lists", "Easy",
      "Merge two ascending linked lists by relinking their existing nodes.",
      "1 -> 3 and 2 -> 4 becomes 1 -> 2 -> 3 -> 4",
      "Can a sentinel node simplify the edge cases?"),
    fp("linked-list-cycle", "hasLinkedListCycle", "head", "Linked List Cycle", "Easy",
      "Return whether following next pointers eventually revisits a node.",
      "A tail pointing back to the second node -> true",
      "Use O(1) auxiliary space."),
  ]),
  topic("stacks", "Stacks", "Last-in-first-out state, matching delimiters, and monotonic stacks.", [
    p("valid-parentheses", "hasValidParentheses", "text", "Valid Parentheses", "Easy",
      "Return whether every bracket is closed by the correct type in the correct order.",
      "hasValidParentheses(\"([]{})\") -> true",
      "What information must each stack entry preserve?"),
    p("evaluate-reverse-polish-notation", "evaluateRpn", "tokens", "Evaluate Reverse Polish Notation", "Medium",
      "Evaluate an arithmetic expression written as postfix tokens using integer division toward zero.",
      "evaluateRpn([\"2\", \"1\", \"+\", \"3\", \"*\"]) -> 9",
      "Pay attention to operand order for subtraction and division."),
    p("daily-temperatures", "dailyTemperatures", "temperatures", "Daily Temperatures", "Medium",
      "For each day, return how many days pass before a warmer temperature, or zero if none does.",
      "dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]) -> [1, 1, 4, 2, 1, 1, 0, 0]",
      "Can a monotonic stack keep each index to one push and one pop?"),
  ]),
  topic("queues", "Queues", "First-in-first-out processing, bounded windows, and streaming order.", [
    p("sliding-window-maximum", "slidingWindowMaximum", "numbers, windowSize", "Sliding Window Maximum", "Hard",
      "Return the maximum value in every contiguous window of the requested size.",
      "slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3) -> [3, 3, 5, 5, 6, 7]",
      "Use a deque so obsolete and dominated candidates leave efficiently."),
    p("first-non-repeating-character", "firstNonRepeatingCharacter", "text", "First Non-Repeating Character", "Easy",
      "Return the first character that occurs exactly once, or null when none exists.",
      "firstNonRepeatingCharacter(\"swiss\") -> \"w\"",
      "How would your design change if characters arrived as a stream?"),
  ]),
  topic("heaps-and-priority-queues", "Heaps and Priority Queues", "Efficient access to changing minima or maxima and bounded candidate sets.", [
    p("kth-largest-element", "findKthLargest", "numbers, k", "Kth Largest Element", "Medium",
      "Return the kth largest value in an unsorted array.",
      "findKthLargest([3, 2, 1, 5, 6, 4], 2) -> 5",
      "Compare a size-k heap with quickselect."),
    p("merge-k-sorted-lists", "mergeKSortedLists", "lists", "Merge K Sorted Lists", "Hard",
      "Merge an array of ascending linked-list heads into one ascending list.",
      "[1 -> 4, 1 -> 3, 2 -> 6] becomes 1 -> 1 -> 2 -> 3 -> 4 -> 6",
      "Avoid scanning all k current heads for every output node."),
  ]),
  topic("trees", "Trees", "Recursive structure, traversal order, invariants, and ancestor relationships.", [
    p("maximum-depth-of-binary-tree", "maximumTreeDepth", "root", "Maximum Depth of Binary Tree", "Easy",
      "Return the number of nodes on the longest path from the root to a leaf.",
      "A root with two leaf children has depth 2",
      "Solve it once with DFS and once with BFS."),
    p("validate-binary-search-tree", "isValidBinarySearchTree", "root", "Validate Binary Search Tree", "Medium",
      "Return whether every node obeys the strict binary-search-tree ordering rule.",
      "A root 2 with children 1 and 3 -> true",
      "Carry valid bounds through the entire subtree, not only to direct children."),
    p("lowest-common-ancestor", "lowestCommonAncestor", "root, first, second", "Lowest Common Ancestor", "Medium",
      "Return the lowest tree node whose subtree contains both target nodes.",
      "For sibling nodes, their parent is the lowest common ancestor",
      "Clarify whether the input is a general binary tree or a BST before choosing an approach."),
  ]),
  topic("tries", "Tries", "Prefix indexing and character-by-character search.", [
    p("word-search-ii", "findWords", "board, words", "Word Search II", "Hard",
      "Return dictionary words that can be formed by adjacent board cells without reusing a cell.",
      "findWords([[\"o\", \"a\"], [\"e\", \"t\"]], [\"oat\", \"eat\"]) -> matching words",
      "Use shared prefixes to avoid restarting a full word search for every word."),
    p("replace-words", "replaceWords", "dictionary, sentence", "Replace Words", "Medium",
      "Replace each word with the shortest dictionary root that is its prefix.",
      "replaceWords([\"cat\", \"bat\"], \"the cattle battled\") -> \"the cat bat\"",
      "Stop searching as soon as the shortest complete root is found."),
  ]),
  topic("graphs", "Graphs", "Adjacency models, traversal, dependencies, and weighted paths.", [
    p("clone-graph", "cloneGraph", "node", "Clone Graph", "Medium",
      "Return a deep copy of a connected graph whose nodes contain value and neighbors properties.",
      "The clone must preserve edges without reusing original nodes",
      "How will you handle cycles and repeated neighbors?"),
    p("course-schedule", "canFinishCourses", "courseCount, prerequisites", "Course Schedule", "Medium",
      "Return whether every course can be completed given directed prerequisite pairs.",
      "canFinishCourses(2, [[1, 0]]) -> true",
      "Solve it by detecting a cycle or by completing a topological ordering."),
    p("network-delay-time", "networkDelayTime", "times, nodeCount, start", "Network Delay Time", "Medium",
      "Return how long a signal needs to reach every node in a directed weighted graph, or -1 if impossible.",
      "networkDelayTime([[1, 2, 1]], 2, 1) -> 1",
      "Use a shortest-path strategy that fits non-negative edge weights."),
  ]),
  topic("disjoint-sets", "Disjoint Sets", "Connectivity, component merging, and union-find optimizations.", [
    p("number-of-connected-components", "countConnectedComponents", "nodeCount, edges", "Number of Connected Components", "Medium",
      "Return the number of connected components in an undirected graph numbered from zero.",
      "countConnectedComponents(5, [[0, 1], [1, 2], [3, 4]]) -> 2",
      "Apply both path compression and union by size or rank."),
    p("redundant-connection", "findRedundantConnection", "edges", "Redundant Connection", "Medium",
      "Return the edge that creates a cycle when edges are added to an initially acyclic undirected graph.",
      "findRedundantConnection([[1, 2], [1, 3], [2, 3]]) -> [2, 3]",
      "Detect whether the endpoints already belong to the same component."),
  ]),
  topic("searching", "Searching", "Binary search, ordered search spaces, and boundary conditions.", [
    p("binary-search", "binarySearch", "numbers, target", "Binary Search", "Easy",
      "Return the index of target in an ascending array, or -1 when it is absent.",
      "binarySearch([-1, 0, 3, 5, 9, 12], 9) -> 4",
      "State and preserve your left-right interval invariant."),
    p("search-rotated-sorted-array", "searchRotatedArray", "numbers, target", "Search Rotated Sorted Array", "Medium",
      "Find a target in an ascending array that was rotated at an unknown pivot.",
      "searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0) -> 4",
      "At every step, identify which half is still sorted."),
  ]),
  topic("sorting", "Sorting", "Comparison sorting, partitioning, stability, and in-place tradeoffs.", [
    p("merge-sort", "mergeSort", "numbers", "Merge Sort", "Medium",
      "Return the values in ascending order using divide, sort, and merge steps.",
      "mergeSort([5, 2, 3, 1]) -> [1, 2, 3, 5]",
      "Be able to explain where its O(n) extra space is used."),
    p("sort-colors", "sortColors", "numbers", "Sort Colors", "Medium",
      "Sort an array containing only 0, 1, and 2 in place without calling the built-in sort.",
      "sortColors([2, 0, 2, 1, 1, 0]) -> [0, 0, 1, 1, 2, 2]",
      "Can one pass maintain three regions?"),
  ]),
  topic("recursion", "Recursion", "Base cases, shrinking subproblems, and call-stack reasoning.", [
    p("power", "power", "base, exponent", "Power", "Medium",
      "Compute base raised to an integer exponent without using the exponentiation operator.",
      "power(2, 10) -> 1024",
      "Can halving the exponent reduce the recursion depth?"),
    p("flatten-nested-array", "flattenNestedArray", "values", "Flatten Nested Array", "Medium",
      "Return a one-dimensional array containing every value from an arbitrarily nested array in order.",
      "flattenNestedArray([1, [2, [3]], 4]) -> [1, 2, 3, 4]",
      "Define the base case for a value and for an empty array."),
  ]),
  topic("backtracking", "Backtracking", "Choose, explore, undo, and prune a decision tree.", [
    p("subsets", "subsets", "numbers", "Subsets", "Medium",
      "Return every subset of an array of distinct values.",
      "subsets([1, 2]) -> [[], [1], [2], [1, 2]] in any order",
      "Make the include-or-skip decision explicit."),
    p("combination-sum", "combinationSum", "candidates, target", "Combination Sum", "Medium",
      "Return unique combinations whose values sum to target; a candidate may be reused.",
      "combinationSum([2, 3, 6, 7], 7) -> [[2, 2, 3], [7]]",
      "Prune a branch as soon as it cannot reach the target."),
    p("word-search", "wordExists", "board, word", "Word Search", "Medium",
      "Return whether a word can be formed from adjacent board cells without reusing a cell.",
      "wordExists([[\"A\", \"B\"], [\"C\", \"D\"]], \"AB\") -> true",
      "Restore each cell after exploring a path."),
  ]),
  topic("greedy", "Greedy", "Local choices, reachability, and proving that discarded options are unnecessary.", [
    p("jump-game", "canReachEnd", "numbers", "Jump Game", "Medium",
      "Each value is the maximum jump from that index. Return whether the final index is reachable.",
      "canReachEnd([2, 3, 1, 1, 4]) -> true",
      "Track the strongest reachable boundary rather than every path."),
    p("gas-station", "gasStationStart", "gas, cost", "Gas Station", "Medium",
      "Return a station index from which a complete circular trip is possible, or -1.",
      "gasStationStart([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) -> 3",
      "Separate the global feasibility check from choosing the starting point."),
  ]),
  topic("dynamic-programming", "Dynamic Programming", "Overlapping subproblems, state transitions, and space optimization.", [
    p("climbing-stairs", "climbingStairs", "stepCount", "Climbing Stairs", "Easy",
      "Count the distinct ways to reach the top using one-step or two-step moves.",
      "climbingStairs(4) -> 5",
      "Reduce a full table to the minimal previous state."),
    p("coin-change", "minimumCoins", "coins, amount", "Coin Change", "Medium",
      "Return the fewest coins needed to make the amount, or -1 when it is impossible.",
      "minimumCoins([1, 2, 5], 11) -> 3",
      "Define what an unreachable state contains."),
    p("longest-increasing-subsequence", "longestIncreasingSubsequence", "numbers", "Longest Increasing Subsequence", "Medium",
      "Return the length of the longest strictly increasing subsequence.",
      "longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]) -> 4",
      "First solve it in O(n^2), then explore an O(n log n) approach."),
  ]),
  topic("bit-manipulation", "Bit Manipulation", "XOR identities, masks, shifts, and compact binary state.", [
    p("single-number", "singleNumber", "numbers", "Single Number", "Easy",
      "Every value appears twice except one. Return the value that appears once.",
      "singleNumber([4, 1, 2, 1, 2]) -> 4",
      "Use constant extra space without sorting."),
    p("counting-bits", "countBits", "limit", "Counting Bits", "Easy",
      "Return the number of set bits for every integer from zero through limit.",
      "countBits(5) -> [0, 1, 1, 2, 1, 2]",
      "Reuse a previously computed smaller value."),
  ]),
  topic("patterns/two-pointers", "Pattern: Two Pointers", "Coordinate indices that move through ordered or constrained data.", [
    p("three-sum", "threeSum", "numbers", "Three Sum", "Medium",
      "Return unique triplets whose values sum to zero.",
      "threeSum([-1, 0, 1, 2, -1, -4]) -> [[-1, -1, 2], [-1, 0, 1]]",
      "Sort first, then prevent duplicate triplets deliberately."),
  ]),
  topic("patterns/sliding-window", "Pattern: Sliding Window", "Maintain useful state while a contiguous range expands and contracts.", [
    p("minimum-window-substring", "minimumWindowSubstring", "text, required", "Minimum Window Substring", "Hard",
      "Return the shortest substring containing every required character with its required frequency.",
      "minimumWindowSubstring(\"ADOBECODEBANC\", \"ABC\") -> \"BANC\"",
      "Track when the window satisfies all distinct requirements."),
  ]),
  topic("patterns/intervals", "Pattern: Intervals", "Sort, compare, merge, and reason about overlapping ranges.", [
    p("merge-intervals", "mergeIntervals", "intervals", "Merge Intervals", "Medium",
      "Merge all overlapping closed intervals and return the non-overlapping result.",
      "mergeIntervals([[1, 3], [2, 6], [8, 10]]) -> [[1, 6], [8, 10]]",
      "What property becomes available after sorting by start time?"),
  ]),
  topic("patterns/prefix-sums", "Pattern: Prefix Sums", "Precompute cumulative state to answer range and subarray questions.", [
    p("subarray-sum-equals-k", "countSubarraysWithSum", "numbers, target", "Subarray Sum Equals K", "Medium",
      "Return the number of contiguous subarrays whose values sum to target.",
      "countSubarraysWithSum([1, 1, 1], 2) -> 2",
      "Store how often each earlier prefix sum has occurred."),
  ]),
  topic("patterns/binary-search", "Pattern: Binary Search", "Halve an ordered search space, including ranges of possible answers.", [
    p("minimum-eating-speed", "minimumEatingSpeed", "piles, hours", "Minimum Eating Speed", "Medium",
      "Return the smallest integer speed that finishes all piles within the available hours.",
      "minimumEatingSpeed([3, 6, 7, 11], 8) -> 4",
      "Binary-search feasible answers even though the input values are not the direct search target."),
  ]),
  topic("patterns/fast-and-slow-pointers", "Pattern: Fast and Slow Pointers", "Use different traversal speeds to expose cycles or convergence.", [
    p("find-duplicate-number", "findDuplicateNumber", "numbers", "Find the Duplicate Number", "Medium",
      "Values contain n + 1 integers from 1 through n with one repeated value. Return the duplicate without modifying the input.",
      "findDuplicateNumber([1, 3, 4, 2, 2]) -> 2",
      "Interpret each value as the next pointer in an implicit linked list."),
  ]),
  topic("patterns/breadth-first-search", "Pattern: Breadth-First Search", "Explore a graph or tree one distance layer at a time.", [
    p("binary-tree-level-order", "binaryTreeLevelOrder", "root", "Binary Tree Level Order Traversal", "Medium",
      "Return tree values grouped by depth from left to right.",
      "A tree 3 with children 9 and 20 -> [[3], [9, 20]]",
      "Capture the queue length before processing each level."),
  ]),
  topic("patterns/depth-first-search", "Pattern: Depth-First Search", "Explore one branch fully before returning to alternatives.", [
    p("number-of-islands", "numberOfIslands", "grid", "Number of Islands", "Medium",
      "Count connected groups of land cells joined vertically or horizontally.",
      "numberOfIslands([[\"1\", \"1\"], [\"0\", \"1\"]]) -> 1",
      "Mark each land cell when it is first visited."),
  ]),
];

let created = 0;
let skipped = 0;

for (const section of curriculum) {
  const directory = path.join(sourceRoot, ...section.path.split("/"));
  await mkdir(directory, { recursive: true });
  await writeIfMissing(path.join(directory, "README.md"), topicReadme(section));

  for (const problem of section.problems) {
    await writeIfMissing(
      path.join(directory, `${problem.slug}.js`),
      problemTemplate(problem),
    );
  }
}

await writeIfMissing(path.join(sourceRoot, "README.md"), curriculumReadme(curriculum));

console.log(`Curriculum ready: ${created} file(s) created, ${skipped} existing file(s) kept.`);

async function writeIfMissing(filePath, contents) {
  try {
    await writeFile(filePath, contents, { encoding: "utf8", flag: "wx" });
    created += 1;
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
    skipped += 1;
  }
}

function problemTemplate(problem) {
  const details = [
    `Problem: ${problem.title}`,
    `Track: ${problem.track}`,
    `Difficulty: ${problem.difficulty}`,
    "",
    problem.prompt,
    "",
    `Example: ${problem.example}`,
    `Follow-up: ${problem.followUp}`,
    "",
    "Write your solution below, then add cases under the matching test/ folder.",
  ];

  const comment = details.map((line) => line ? ` * ${line}` : " *").join("\n");

  return `/**\n${comment}\n */\nexport function ${problem.exportName}(${problem.parameters}) {\n  // TODO: implement your solution.\n  throw new Error("Not implemented yet.");\n}\n`;
}

function topicReadme(section) {
  const trackOrder = ["Foundations", "Interview"];
  const tables = trackOrder
    .map((track) => {
      const problems = section.problems.filter((problem) => problem.track === track);
      if (problems.length === 0) return "";

      const rows = problems
        .map((problem) => `| [${problem.title}](./${problem.slug}.js) | ${problem.difficulty} |`)
        .join("\n");

      return `## ${track}\n\n| Problem | Difficulty |\n| --- | --- |\n${rows}`;
    })
    .filter(Boolean)
    .join("\n\n");

  return `# ${section.title}\n\n${section.description}\n\n${tables}\n`;
}

function curriculumReadme(sections) {
  const links = sections
    .map((section) => `- [${section.title}](./${section.path}/README.md)`)
    .join("\n");

  return `# Interview Practice Curriculum\n\nEach JavaScript file contains a prompt, example, follow-up, and starter signature -- but no solution. Work roughly from easy to hard within a topic, or choose the pattern you want to strengthen.\n\n${links}\n\nThe separate [Data Structures](./data-structures/README.md) workshop contains from-scratch class implementations.\n`;
}

function topic(sectionPath, title, description, problems) {
  return { path: sectionPath, title, description, problems };
}

function p(slug, exportName, parameters, title, difficulty, prompt, example, followUp) {
  return {
    slug,
    exportName,
    parameters,
    title,
    track: "Interview",
    difficulty,
    prompt,
    example,
    followUp,
  };
}

function fp(slug, exportName, parameters, title, _level, prompt, example, followUp) {
  return {
    ...p(slug, exportName, parameters, title, "Easy", prompt, example, followUp),
    track: "Foundations",
  };
}
