/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    const numbers = [];
    for (let i = 0; i < arr.length; i++) {
        numbers.push(fn(arr[i], i));
    }
    return numbers;
};

/**
 * Map function
 */
const mapMapFunc = (arr, fn) => {
    return arr.map((val, index) => fn(val, index));
};

/**
 * For-each loop
 */
const mapForEach = (arr, fn) => {
    const numbers = [];
    arr.forEach((num) => numbers.push(num));
    return numbers;
};

// Test Data
const numbers = [0, 1, 2, 3, 4];
const plusOne = (n) => n + 1;
const plusI = (n, i) => n + i;

// Test regular for loop
const trasformed = map(numbers, plusOne);
const trasformed2 = map(numbers, plusI);
console.log("Using for loop:")
console.log(trasformed);
console.log(trasformed2);

// Test built-in map function
const transformedBuiltInMap = mapMapFunc(numbers, plusOne);
const transformedBuiltInMap2 = mapMapFunc(numbers, plusI);
console.log("\nUsing built-in map:")
console.log(transformedBuiltInMap);
console.log(transformedBuiltInMap2);

// Test for each
const transformedForEach = mapForEach(numbers, plusOne);
const transformedForEach2 = mapForEach(numbers, plusI);
console.log("\nUsing for-each:")
console.log(transformedForEach);
console.log(transformedForEach2);
