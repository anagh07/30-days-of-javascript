/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 1000);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=1000ms
