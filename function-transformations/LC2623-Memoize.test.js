import { assertEquals } from "jsr:@std/assert";
import memoize from "./LC2623-Memoize.js";

Deno.test("memoize add", () => {
  let want = 1;
  let callCount = 0;
  const memoizedAdd = memoize((a, b) => {
    callCount++;
    return a + b;
  });

  memoizedAdd(1, 1);
  memoizedAdd(1, 1);
  assertEquals(callCount, want);

  want = 2;
  memoizedAdd(3, 6);
  assertEquals(callCount, want);
});

Deno.test("memoize fib", () => {
  let want = 5;
  let callCount = 0;
  const memoizedFib = memoize((n) => {
    callCount++;
    if (n <= 2) return 1;
    return memoizedFib(n - 1) + memoizedFib(n - 2);
  });

  memoizedFib(5);
  memoizedFib(5);
  assertEquals(callCount, want);

  want = 0;
  callCount = 0;
  memoizedFib(3);
  assertEquals(callCount, want);
});
