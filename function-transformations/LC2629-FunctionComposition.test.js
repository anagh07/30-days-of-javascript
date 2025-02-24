import { compose } from "./LC2629-FunctionComposition.js";
import { assertEquals } from "jsr:@std/assert/equals";

Deno.test(
    "Case 1: Empty func array",
    () => {
        const want = 4;
        const got = compose([])(4);
        assertEquals(got, want);
    },
);

Deno.test(
    "Case 2: ",
    () => {
        const want = 65;
        const got = compose([
            (x) => x + 1,
            (x) => x * x,
            (x) => 2 * x,
        ])(4);
        assertEquals(got, want);
    },
);

Deno.test(
    "Case 3: ",
    () => {
        const want = 1000;
        const got = compose([
            (x) => 10 * x,
            (x) => 10 * x,
            (x) => 10 * x,
        ])(1);
        assertEquals(got, want);
    },
);
