import { daysInMonth } from "utils/daysInMonth";

describe("get days in month", () => {
  test("31 days in Jule 2024", () => {
    expect(daysInMonth(2024, 6)).toBe(31);
  });
});
