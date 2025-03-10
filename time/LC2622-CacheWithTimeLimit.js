/**
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration):
  accepts an integer key, an integer value, and a duration in milliseconds.
  Once the duration has elapsed, the key should be inaccessible.
  The method should return true if the same un-expired key already exists and false otherwise.
  Both the value and duration should be overwritten if the key already exists.

get(key):
  if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count():
  returns the count of un-expired keys.
*/

var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  //  {
  //    "1": { "value": 100, "timeoutId": idSetTimeOut }
  // }
  const keyExists = this.cache.has(key);

  if (keyExists) {
    // cancel previous timeout
    const { _, timeoutId } = this.cache.get(key);
    clearTimeout(timeoutId);
  }

  // create new timeout
  const newTimeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  // overwrite value
  this.cache.set(key, { value: value, timeoutId: newTimeoutId });

  return keyExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const valueObj = this.cache.get(key);

  if (valueObj !== undefined) {
    return valueObj.value !== null ? valueObj.value : -1;
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

setTimeout(() => {
  console.log(timeLimitedCache.get(1));
  console.log(timeLimitedCache.set(1, 50, 100));
}, 40);
