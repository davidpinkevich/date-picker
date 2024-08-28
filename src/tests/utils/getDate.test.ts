import { createDateArray } from "utils/getDate";

describe("crate date array", () => {
  test("first day check when selecting July", () => {
    expect(createDateArray(2024, 6, "Mo")[0].dayName).toBe("Mo");
    expect(createDateArray(2024, 6, "Mo")[0].isWeekend).toBe(false);
  });

  test("length of the resulting array", () => {
    expect(createDateArray(2024, 6, "Mo")).toHaveLength(42);
  });
});
