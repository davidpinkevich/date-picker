import { getYearsPeriods } from "utils/getYearsPeriods";

describe("get years perios", () => {
  test("check from 2020 to 2030", () => {
    expect(getYearsPeriods(2020, 2016, 2030)).toStrictEqual([
      {
        value: 2016,
        availability: false
      },
      {
        value: 2017,
        availability: false
      },
      {
        value: 2018,
        availability: false
      },
      {
        value: 2019,
        availability: false
      },
      {
        value: 2020,
        availability: true
      },
      {
        value: 2021,
        availability: true
      },
      {
        value: 2022,
        availability: true
      },
      {
        value: 2023,
        availability: true
      },
      {
        value: 2024,
        availability: true
      },
      {
        value: 2025,
        availability: true
      },
      {
        value: 2026,
        availability: true
      },
      {
        value: 2027,
        availability: true
      }
    ]);
  });
});
