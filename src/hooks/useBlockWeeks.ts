import React, { useContext, useEffect, useState } from "react";

import { Context } from "constants/context";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";
import { addTargetRange } from "utils/viewRangePicker";

const useBlockWeeks = (
  range: Array<{
    year: number;
    month: number;
    day: number;
  }>,
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
  const { dateContainer, targetDate, setTargetDate, mainPeriod } =
    useContext(Context);
  const [viewHoliday, setViewHoliday] = useState("");

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
  }, [targetDay?.month, targetDay?.year, targetDay?.day]);

  const data = range
    ? splitArrayIntoChunks(addTargetRange(range, dateContainer), 7)
    : splitArrayIntoChunks(dateContainer, 7);

  return { viewHoliday, setViewHoliday, data };
};

export { useBlockWeeks };
