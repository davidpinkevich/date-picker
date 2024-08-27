import { addTargetRange } from "utils/viewRangePicker";

import { rangeMock } from "mocks/data";

describe("add target range", () => {
  test("check start range", () => {
    expect(
      addTargetRange(rangeMock.timePeriod, rangeMock.monthData)[0].targetRange
    ).toStrictEqual({
      start: true,
      end: false,
      middle: false
    });
  });

  test("check end range", () => {
    expect(
      addTargetRange(rangeMock.timePeriod, rangeMock.monthData)[1].targetRange
    ).toStrictEqual({
      start: false,
      end: true,
      middle: false
    });
  });
});
