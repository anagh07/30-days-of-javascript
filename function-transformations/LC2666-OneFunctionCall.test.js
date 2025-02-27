import { assertEquals } from "jsr:@std/assert";
import once from "./LC2666-OneFunctionCall.js";

Deno.test("sum", () => {
  let want = 6; // should return value on first call
  const receivedFunc = once((a, b, c) => a + b + c);
  let got = receivedFunc(1, 2, 3);
  assertEquals(got, want);

  want = undefined; // should return undefined on second call
  got = receivedFunc(4, 5, 6);
  assertEquals(got, want);
});
