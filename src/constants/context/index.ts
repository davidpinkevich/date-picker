import { createContext } from "react";

import { type TypeContext } from "types/contextTypes";

const Context = createContext<TypeContext>({
  typeStart: "Mo",
  withHolidays: false,
  mainPeriod: { min: 2020, max: 2026 },
  setDateContainer: () => {},
  setWithHolidays: () => {},
  setMainPeriod: () => {},
  setTypeStart: () => {},
  typeSwitch: "weeks",
  setTypeSwitch: () => {},
  targetDate: {
    years: 2020,
    year: 2024,
    month: 6,
    day: null
  },
  setTargetDate: () => {},
  dateContainer: []
});

export { Context };
