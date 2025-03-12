import { isEmpty, isEmptyOptimized } from "./LC2727-ObjectIsEmpty.js"; // Adjust the import path as needed

// Helper function to create a large object
function createLargeObject(size) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[`key${i}`] = `value${i}`;
  }
  return obj;
}

// Helper function to create a large array
function createLargeArray(size) {
  return new Array(size).fill(0);
}

// Benchmark function
function benchmark(fn, data, iterations) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn(data);
  }
  const end = performance.now();
  return end - start;
}

// Test parameters
const largeObjectSize = 10000;
const largeArraySize = 10000;
const iterations = 10000;

// Create large data
const largeObject = createLargeObject(largeObjectSize);
const largeArray = createLargeArray(largeArraySize);

// Run benchmarks
const timeIsEmptyObject = benchmark(isEmpty, largeObject, iterations);
const timeIsEmptyOptimizedObject = benchmark(
  isEmptyOptimized,
  largeObject,
  iterations,
);

const timeIsEmptyArray = benchmark(isEmpty, largeArray, iterations);
const timeIsEmptyOptimizedArray = benchmark(
  isEmptyOptimized,
  largeArray,
  iterations,
);

// Output results
console.log(`isEmpty with large object: ${timeIsEmptyObject} ms`);
console.log(
  `isEmptyOptimized with large object: ${timeIsEmptyOptimizedObject} ms`,
);
console.log(`isEmpty with large array: ${timeIsEmptyArray} ms`);
console.log(
  `isEmptyOptimized with large array: ${timeIsEmptyOptimizedArray} ms`,
);

// Compare results
if (timeIsEmptyObject < timeIsEmptyOptimizedObject) {
  console.log("isEmpty is faster with large objects");
} else {
  console.log("isEmptyOptimized is faster with large objects");
}

if (timeIsEmptyArray < timeIsEmptyOptimizedArray) {
  console.log("isEmpty is faster with large arrays");
} else {
  console.log("isEmptyOptimized is faster with large arrays");
}
