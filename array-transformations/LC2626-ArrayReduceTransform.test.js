import { assertEquals } from "jsr:@std/assert";
import { arrReduce, reduce } from "./LC2626-ArrayReduceTransform.js";

const numbers = [1, 2, 3, 4];

Deno.test("reduce: sum", () => {
    const want = 10;
    const got = reduce(numbers, (accum, curr) => accum + curr);
    assertEquals(got, want);
});

Deno.test("reduce: zero", () => {
    const want = 0;
    const got = reduce(numbers, (accum, curr) => 0);
    assertEquals(got, want);
});

Deno.test("reduce: product init", () => {
    const want = 240;
    const got = reduce(numbers, (accum, curr) => accum * curr, 10);
    assertEquals(got, want);
});

/**
 * Built-in arr.reduce method
 */
Deno.test("array.reduce: sum", () => {
    const want = 10;
    const got = arrReduce(numbers, (accum, curr) => accum + curr);
    assertEquals(got, want);
});

Deno.test("array.reduce: zero", () => {
    const want = 0;
    const got = arrReduce(numbers, (accum, curr) => 0);
    assertEquals(got, want);
});

Deno.test("array.reduce: product init", () => {
    const want = 240;
    const got = arrReduce(numbers, (accum, curr) => accum * curr, 10);
    assertEquals(got, want);
});
