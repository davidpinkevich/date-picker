import { useContext, useEffect } from "react";

import { Context } from "constants/context";
import { YEAR_VALUES } from "constants/data";

import { type TypeTargetDay } from "types/datePickerTypes";

const useBlockYears = (
  targetDay: TypeTargetDay,
  setTargetDay?: (value: TypeTargetDay) => void
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
        years: Math.floor(year / YEAR_VALUES.MONTHS) * YEAR_VALUES.MONTHS,
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
  }, [targetDay?.year, targetDay?.month]);

  return { targetDate, mainPeriod, year, years, setTargetDate, setTypeSwitch };
};

export { useBlockYears };
