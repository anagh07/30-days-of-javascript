import { assertEquals } from "jsr:@std/assert";
import { isEmpty, isEmptyOptimized } from "./LC2727-ObjectIsEmpty.js";

Deno.test("empty object", () => {
  const want = true;
  const got = isEmpty({});
  assertEquals(got, want);
});

Deno.test("empty array", () => {
  const want = true;
  const got = isEmpty([]);
  assertEquals(got, want);
});

Deno.test("non-empty array", () => {
  const want = false;
  const got = isEmpty(["a", "b"]);
  assertEquals(got, want);
});

Deno.test("non-empty object", () => {
  const want = false;
  const got = isEmpty({
    a: "letter-A",
    b: "letter-B",
  });
  assertEquals(got, want);
});

/**
 *  Optimized version of isEmpty
 */
Deno.test("empty object", () => {
  const want = true;
  const got = isEmptyOptimized({});
  assertEquals(got, want);
});

Deno.test("empty array", () => {
  const want = true;
  const got = isEmptyOptimized([]);
  assertEquals(got, want);
});

Deno.test("non-empty array", () => {
  const want = false;
  const got = isEmptyOptimized(["a", "b"]);
  assertEquals(got, want);
});

Deno.test("non-empty object", () => {
  const want = false;
  const got = isEmptyOptimized({
    a: "letter-A",
    b: "letter-B",
  });
  assertEquals(got, want);
});
