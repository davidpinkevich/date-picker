import { createContext } from "react";

import { BASE_PERIOD } from "constants/data";
import { getToday } from "utils/getToday";

import { type TypeContext } from "types/contextTypes";

const today = getToday();

const Context = createContext<TypeContext>({
  typeStart: "Mo",
  withHolidays: false,
  colorHoliday: "red",
  mainPeriod: { min: BASE_PERIOD.MIN, max: BASE_PERIOD.MAX },
  setDateContainer: () => {},
  setColorHoliday: () => {},
  setWithHolidays: () => {},
  setMainPeriod: () => {},
  setTypeStart: () => {},
  typeSwitch: "weeks",
  setTypeSwitch: () => {},
  targetDate: {
    years: BASE_PERIOD.YEARS,
    year: today.year,
    month: today.month,
    day: today.day
  },
  setTargetDate: () => {},
  dateContainer: []
});

export { Context };
