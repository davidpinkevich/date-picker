import { addHolidays } from "utils/addHolidays";
import { dataMock } from "mocks/data";

describe("add holidays", () => {
  test("Is July 4th Independence Day?", () => {
    expect(addHolidays(dataMock)[0].holiday.title).toBe("Independence Day");
  });

  test("July 13th is not a holiday", () => {
    console.log(addHolidays(dataMock)[13]);
    expect(addHolidays(dataMock)[1].holiday).toBe(undefined);
  });
});
