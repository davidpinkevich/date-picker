import React, { useContext, useEffect } from "react";

import { Context } from "constants/context";

const useBlockYears = (
  targetDay: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  },
  setTargetDay?: (value: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  }) => void
) => {
  const { targetDate, setTargetDate, mainPeriod, setTypeSwitch } =
    useContext(Context);
  const { year, years } = targetDate;

  useEffect(() => {
    if (
      targetDay &&
      targetDay?.valid &&
      mainPeriod.min <= targetDay.year &&
      mainPeriod.max >= targetDay.year
    ) {
      const { year, month, day } = targetDay;
      setTargetDate({
        years: Math.floor(year / 12) * 12,
        year,
        month: month - 1,
        day
      });
    } else {
      if (targetDay?.year && targetDay?.month && targetDay?.day) {
        const { year, month, day } = targetDay;
        setTargetDay({ year, month, day, valid: false });
      }
    }
  }, [targetDay?.year]);

  return { targetDate, mainPeriod, year, years, setTargetDate, setTypeSwitch };
};

export { useBlockYears };
