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

/**
 * Using Promise.race()
 */
const timeLimitRace = (fn, t) => {
  return async (...args) => {
    const promiseResolve = fn(...args);
    const promiseReject = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    try {
      return await Promise.race([promiseResolve, promiseReject]);
    } catch (error) {
      throw error;
    }
  };
};

const limitedRace = timeLimitRace(
  (t) => new Promise((res) => setTimeout(res, t)),
  100,
);
limitedRace(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
