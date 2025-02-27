import { assertEquals } from "jsr:@std/assert";
import { argumentsLength } from "./LC2703-LengthOfArgument.js";

Deno.test("no arguments", () => {
  const want = 0;
  const got = argumentsLength();
  assertEquals(got, want);
});

Deno.test("multiple arguments", () => {
  const want = 3;
  const got = argumentsLength("hi", "this", "is");
  assertEquals(got, want);
});
