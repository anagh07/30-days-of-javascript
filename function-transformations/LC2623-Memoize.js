/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = String(args.sort());

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);
    return cache[key];
  };
}

export default memoize;

/**
 * Tests
 */
// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
// memoizedFn(3, 2); // 5
// console.log(callCount); // 1

// // Write test for fib function
// callCount = 0;
// const memoizedFib = memoize((n) => {
//   console.log("function called: fib");
//   callCount += 1;
//   if (n <= 2) return 1;
//   return memoizedFib(n - 1) + memoizedFib(n - 2);
// });
// memoizedFib(5); // 8
// memoizedFib(5); // 8
// console.log(callCount); // 5

// callCount = 0;
// memoizedFib(6); // 8
// console.log(callCount); // 1
