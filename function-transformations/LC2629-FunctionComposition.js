/**
 * @param {Function[]} functions
 * @return {Function}
 */
export const compose = (functions) => {
  return (x) => {
    let accum = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      accum = functions[i](accum);
    }
    return accum;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

/**
 * Array reduce-right function
 */
export const composeReduceRight = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  }

  return functions.reduceRight((accum, currVal) => {
    return (x) => {
      return currVal(accum(x));
    };
  });
};

const fn2 = composeReduceRight([(x) => x + 1, (x) => 2 * x]);
const fn3 = composeReduceRight([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn2(4)); // 9
console.log(fn3(4)); // 9
