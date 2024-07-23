import { getTargetKey } from "utils/getTargetKey";

describe("get target key", () => {
  test("create key for get value from LS", () => {
    expect(
      getTargetKey({
        year: 2024,
        month: 8,
        day: 11
      })
    ).toBe("11.8.2024");
  });
});
