import { assertEquals } from "jsr:@std/assert";
import { filter, filterForLoop, filterArrFilter } from "./LC2634-FilterElements.js";

Deno.test("forEach: filter out negative numbers", () => {
  const want = [1, 2, 3, 4];
  const got = filter([-2, 1, -1, 2, 3, -5, 4], (num) => num >= 0);
  assertEquals(got, want);
});

Deno.test("forEach: filter out odd numbers", () => {
  const want = [2, 4, 6, 8];
  const got = filter([1, 2, 3, 4, 5, 6, 7, 8], (num) => num % 2 === 0);
  assertEquals(got, want);
});

Deno.test("forEach: first index", () => {
  const want = [5];
  const got = filter([5, 0, 2], (num, i) => i === 0);
  assertEquals(got, want);
})

/**
 * Regular for-loop
 */
Deno.test("for-loop: filter out negative numbers", () => {
  const want = [1, 2, 3, 4];
  const got = filterForLoop([-2, 1, -1, 2, 3, -5, 4], (num) => num >= 0);
  assertEquals(got, want);
});

Deno.test("for-loop: filter out odd numbers", () => {
  const want = [2, 4, 6, 8];
  const got = filterForLoop([1, 2, 3, 4, 5, 6, 7, 8], (num) => num % 2 === 0);
  assertEquals(got, want);
});

Deno.test("for-loop: first index", () => {
  const want = [5];
  const got = filterForLoop([5, 0, 2], (num, i) => i === 0);
  assertEquals(got, want);
})

/**
 * Filter function
 */
Deno.test("array-filter: filter out negative numbers", () => {
  const want = [1, 2, 3, 4];
  const got = filterArrFilter([-2, 1, -1, 2, 3, -5, 4], (num) => num >= 0);
  assertEquals(got, want);
});

Deno.test("array-filter: filter out odd numbers", () => {
  const want = [2, 4, 6, 8];
  const got = filterArrFilter([1, 2, 3, 4, 5, 6, 7, 8], (num) => num % 2 === 0);
  assertEquals(got, want);
});

Deno.test("array-filter: first index", () => {
  const want = [5];
  const got = filterArrFilter([5, 0, 2], (num, i) => i === 0);
  assertEquals(got, want);
})
