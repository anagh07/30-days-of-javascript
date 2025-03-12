type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue> | JSONValue;

function chunk(arr: Obj[], size: number): Obj[][] {
  const result: Obj[][] = [];
  let pointer: number = 0;

  /**
   *  [ 7, 8, 9, 10 ]
   *  [ 7, 8, 9, 10, 11 ]
   */
  while (pointer <= arr.length) {
    result.push(arr.slice(pointer, pointer + size));
    pointer += size;
  }

  return result;
}

function chunkSimple(arr: Obj[], size: number): Obj[][] {
  const result: Obj[][] = [];

  for (let i = 0; i < arr.length; i++) {
    // new subarray
    if (i % size === 0) {
      result.push([]);
    }
    // append element to last subarray
    result[result.length - 1].push(arr[i]);
  }

  return result;
}

const main = () => {
  const data = [1, 9, 6, 3, 2];
  console.log(chunk(data, 3));
  console.log("/nWithout using array methods:");
  console.log(chunkSimple(data, 3));
};

main();
