/**
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id.
The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:
  - If a key only exists in one object, that single key-value pair should be included in the object.
  - If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

Example 3:
  Input:
  arr1 = [
      {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
  ]
  arr2 = [
      {"id": 1, "b": {"c": 84}, "v": [1, 3]}
  ]
  Output: [
      {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
  ]
  Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
*/

type JSONValue = null | boolean | number | string | JSONValue[] | {
  [key: string]: JSONValue;
};
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  // hash arr2
  const mergedMap: Map<number, ArrayType> = new Map();
  for (const item of arr1) {
    mergedMap.set(item.id, item);
  }

  // iterate arr1 and add to hash
  for (const item of arr2) {
    if (mergedMap.has(item.id)) {
      // id exists
      const combined = { ...mergedMap.get(item.id), ...item };
      mergedMap.set(item.id, combined);
    } else {
      // id does not exist
      mergedMap.set(item.id, item);
    }
  }

  return [...mergedMap.values()];
}

function main() {
  const arr1 = [
    { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 },
  ];
  const arr2 = [
    { "id": 1, "b": { "c": 84 }, "v": [1, 3] },
  ];
  console.log(join(arr1, arr2));
}

main();
