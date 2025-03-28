import { add } from "../src/utils/stringCalculator";

describe("String Calculator test case", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
