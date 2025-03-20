/**
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.



Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
*/

type JSONValue = null | boolean | number | string | JSONValue[] | {
  [key: string]: JSONValue;
};
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  // when obj is array
  if (Array.isArray(obj)) {
    const result: Obj = obj.filter((item) => {
      return item;
    })
      .map((item) => {
        if (item && typeof item === "object") {
          return compactObject(item);
        }
        return item;
      });
    return result;
  }

  // when obj is iterable object
  const result: Record<string, JSONValue> = {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      result[key] = compactObject(obj[key]);
    } else {
      if (obj[key]) result[key] = obj[key];
    }
  }
  return result;
}

function main() {
  const data_arr = [1, 0, 2, null, {}];
  const data_arr2 = [null, 0, 5, [0], [false, 16]];
  const data_obj = {
    "a": null,
    "b": [false, 1],
  };

  console.log(compactObject(data_arr));
  console.log(compactObject(data_obj));
  console.log(compactObject(data_arr2));
}

main();
