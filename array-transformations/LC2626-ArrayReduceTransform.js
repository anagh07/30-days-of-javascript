/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
export const reduce = (nums, fn, init) => {
  let accumulator = init == null ? 0 : init;
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i]);
  }
  return accumulator;
};

/**
 * Built-in array.reduce
 */
export const arrReduce = (nums, fn, init = 0) => {
  return nums.reduce(fn, init);
};
