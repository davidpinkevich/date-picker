import { isValidDate } from "utils/isValidDate";

describe("check valid date", () => {
  test("input invald date", () => {
    expect(isValidDate("22/22/222")).toBe(false);
  });

  test("input valid date", () => {
    expect(isValidDate("15/03/2020")).toBe(true);
  });
});
