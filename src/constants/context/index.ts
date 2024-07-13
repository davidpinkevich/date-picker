import { createContext } from "react";

import { type TypeContext } from "types/contextTypes";

const Context = createContext<TypeContext>({
  typeStart: "Mo",
  targetDay: null,
  setTargetDay: () => {},
  setTypeStart: () => {},
  typeSwitch: "weeks",
  setTypeSwitch: () => {},
  targetDate: {
    year: 2024,
    month: 6
  },
  setTargetDate: () => {},
  dateContainer: []
});

export { Context };
