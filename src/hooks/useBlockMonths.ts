import { useContext, useEffect } from "react";

import { Context } from "constants/context";

import { type TypeTargetDay } from "types/datePickerTypes";

const useBlockMonths = (
  targetDay: TypeTargetDay,
  setTargetDay?: (value: TypeTargetDay) => void
) => {
  const { targetDate, setTargetDate, setTypeSwitch, mainPeriod } =
    useContext(Context);

  useEffect(() => {
    if (
      targetDay &&
      targetDay?.valid &&
      mainPeriod.min <= targetDay.year &&
      mainPeriod.max >= targetDay.year
    ) {
      const { year, month, day } = targetDay;
      setTargetDate({ ...targetDate, year, month: month - 1, day });
    } else {
      if (targetDay?.year && targetDay?.month && targetDay?.day) {
        const { year, month, day } = targetDay;
        setTargetDay({ year, month, day, valid: false });
      }
    }
  }, [targetDay?.month, targetDay?.year]);

  return { targetDate, setTargetDate, setTypeSwitch };
};

export { useBlockMonths };
