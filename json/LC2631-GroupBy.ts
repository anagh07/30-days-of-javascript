/**
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

Input:
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
],
fn = function (item) {
  return item.id;
}
Output:
{
  "1": [{"id": "1"}, {"id": "1"}],
  "2": [{"id": "2"}]
}
*/
declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
    groupByUsingReduce(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const result: Record<string, any[]> = {};
  for (let item of this) {
    const key: string = fn(item);
    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
};

// using array.reduce
Array.prototype.groupByUsingReduce = function <T>(
  fn: (item: T) => string,
): Record<string, T[]> {
  return this.reduce<Record<string, T[]>>((accum, item) => {
    const key: string = fn(item);

    if (!accum[key]) {
      accum[key] = []; // Ensure key is initialized before pushing
    }

    accum[key].push(item);
    return accum;
  }, {} as Record<string, T[]>);
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}

const items = [{ "id": "1" }, { "id": "1" }, { "id": "2" }];
const getKey = (item: Record<string, string>) => {
  return item["id"];
};
console.log(items.groupByUsingReduce(getKey));

export {};
