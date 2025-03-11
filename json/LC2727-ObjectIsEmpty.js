/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // case 1: array
  if (Array.isArray(obj)) {
    if (obj.length <= 0) {
      return true;
    }
    return false;
  }

  // case 2: object
  if (Object.keys(obj).length <= 0) {
    return true;
  }
  return false;
};

export default isEmpty;
