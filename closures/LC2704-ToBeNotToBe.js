/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  return {
    toBe: (num) => {
      if (num !== val) throw Error("Not Equal");
      return true;
    },
    notToBe: (num) => {
      if (num === val) throw Error("Equal");
      return true;
    },
  };
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
