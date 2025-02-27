/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
export const argumentsLength = (...args) => {
  return args == null ? 0 : args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3
