import { createContext } from "react";

import { type TypeContext } from "types/contextTypes";

const Context = createContext<TypeContext>({
  typeStart: "Mo",
  targetDay: null,
  mainPeriod: { min: 2020, max: 2026 },
  setMainPeriod: () => {},
  setTargetDay: () => {},
  setTypeStart: () => {},
  typeSwitch: "weeks",
  setTypeSwitch: () => {},
  targetDate: {
    years: 2020,
    year: 2024,
    month: 6
  },
  setTargetDate: () => {},
  dateContainer: []
});

export { Context };
