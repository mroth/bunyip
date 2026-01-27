import { expect, test } from "bun:test";
import { greet } from "./greet.ts";

test("greets Bun by default", () => {
  expect(greet()).toBe("Hello via Bun!");
});

test("greets a given name", () => {
  expect(greet("world")).toBe("Hello via world!");
});
