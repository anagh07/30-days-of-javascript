/**

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

Example 2:

Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

*/

type JSONValue = null | boolean | number | string | JSONValue[] | {
  [key: string]: JSONValue;
};
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}

function main() {
  const data: JSONValue = [{ "x": 1 }, { "x": 0 }, { "x": -1 }];
  const fn: Fn = (d: JSONValue) => d?.x;

  console.log(sortBy(data, fn));
}

main();
