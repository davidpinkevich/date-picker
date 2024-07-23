import { createMask } from "utils/createMask";

describe("test masks", () => {
  test("don`t use letters", () => {
    expect(createMask("12dsad31234")).toBe("12/31/234");
  });

  test("the year consists of only 4 digits", () => {
    expect(createMask("12dsad312345555")).toBe("12/31/2345");
  });
});
