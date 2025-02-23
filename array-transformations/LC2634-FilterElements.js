/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
export const filter = (arr, fn) => {
  const filteredNumbers = [];
  arr.forEach((num, index) => {
    if (fn(num, index)) filteredNumbers.push(num);
  });
  return filteredNumbers;
};

/**
 * Using regular for loop
 */
export const filterForLoop = (arr, fn) => {
  const filteredNumbers = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) filteredNumbers.push(arr[index]);
  }
  return filteredNumbers;
};

/**
 * Using filter function
 */
export const filterArrFilter = (arr, fn) => {
//   return arr.filter((num, index) => fn(num, index));
  return arr.filter(fn);
};
