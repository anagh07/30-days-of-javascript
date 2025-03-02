/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const id = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(id);
  };
};

const result = [];
const fn = (x) => {
  console.log(`Executing fn: ${x} * 5 = ${x * 5}`);
  return x * 5;
};
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const cancel = cancellable(fn, args, t);
setTimeout(() => {
  cancel();
}, cancelTimeMs);
