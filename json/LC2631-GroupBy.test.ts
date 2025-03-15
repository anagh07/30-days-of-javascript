import { assertEquals } from "jsr:@std/assert";
import "./LC2631-GroupBy.ts"; // Import the code to be tested

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Deno.test("GroupBy - Basic test with numbers", () => {
  const arr = [1, 2, 3];
  const fn = String;
  const expected = { "1": [1], "2": [2], "3": [3] };
  assertEquals(arr.groupBy(fn), expected);
});

Deno.test("GroupBy - Test with objects and id", () => {
  const arr = [{ id: "1" }, { id: "1" }, { id: "2" }];
  const fn = function (item: { id: string }) {
    return item.id;
  };
  const expected = {
    "1": [{ id: "1" }, { id: "1" }],
    "2": [{ id: "2" }],
  };
  assertEquals(arr.groupBy(fn), expected);
});

Deno.test("GroupBy - Test with mixed data types and custom key", () => {
  const arr = [
    { type: "A", value: 1 },
    { type: "B", value: 2 },
    { type: "A", value: 3 },
  ];
  const fn = function (item: { type: string; value: number }) {
    return item.type;
  };
  const expected = {
    A: [
      { type: "A", value: 1 },
      { type: "A", value: 3 },
    ],
    B: [{ type: "B", value: 2 }],
  };
  assertEquals(arr.groupBy(fn), expected);
});

Deno.test("GroupBy - Test with empty array", () => {
  const arr: number[] = [];
  const fn = String;
  const expected: Record<string, number[]> = {};
  assertEquals(arr.groupBy(fn), expected);
});

Deno.test("GroupBy - Test with function returning same key", () => {
  const arr = [1, 2, 3];
  const fn = () => "same";
  const expected = { same: [1, 2, 3] };
  assertEquals(arr.groupBy(fn), expected);
});

Deno.test("GroupBy - Test with a null item in the array", () => {
  const arr = [1, null, 3];
  const fn = String;
  const expected = { "1": [1], null: [null], "3": [3] };
  assertEquals(arr.groupBy(fn), expected);
});

// Deno.test("GroupBy - Test with function that uses index", () => {
//   const arr = ["apple", "banana", "cherry"];
//   const fn = (item: string, index: number) => String(index % 2);
//   const expected = {
//     "0": ["apple", "cherry"],
//     "1": ["banana"],
//   };
//   assertEquals(arr.groupBy(fn), expected);
// });

Deno.test("GroupBy - Test with a custom key function", () => {
  const arr = [
    { type: "A", value: 1 },
    { type: "B", value: 2 },
    { type: "A", value: 3 },
  ];
  const fn = function (item: { type: string; value: number }) {
    return item.type;
  };
  const expected = {
    A: [
      { type: "A", value: 1 },
      { type: "A", value: 3 },
    ],
    B: [{ type: "B", value: 2 }],
  };
  assertEquals(arr.groupBy(fn), expected);
});
