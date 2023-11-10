import { test, expect } from "vitest";
import subtract from "../src/subtract";
test("subtracts two numbers", () => {
  expect(subtract(10, 7)).toBe(3);
});
