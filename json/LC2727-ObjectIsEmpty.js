/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // case 1: array
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  // case 2: object
  if (Object.keys(obj).length <= 0) {
    return true;
  }
  return false;
};

var isEmptyOptimized = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  for (let key in obj) {
    return false;
  }
  return true;
};

export { isEmpty, isEmptyOptimized };
