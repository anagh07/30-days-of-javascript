/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise = new Promise((resolve, reject) => {
      fn(...args)
        .then((result) => resolve(result))
        .catch((error) => reject(error));

      // Reject after t ms
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    return promise;
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
