import { useContext, useEffect, useState } from "react";

import { Context } from "constants/context";
import { YEAR_VALUES } from "constants/data";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";
import { addTargetRange } from "utils/viewRangePicker";

import { type TypeYear } from "types/contextTypes";
import { type TypeTargetDay } from "types/datePickerTypes";

const useBlockWeeks = (
  range: TypeYear[],
  targetDay: TypeTargetDay,
  setTargetDay?: (value: TypeTargetDay) => void
) => {
  const { dateContainer, targetDate, setTargetDate, mainPeriod, colorHoliday } =
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
    ? splitArrayIntoChunks(
        addTargetRange(range, dateContainer),
        YEAR_VALUES.DAYS
      )
    : splitArrayIntoChunks(dateContainer, YEAR_VALUES.DAYS);

  return { viewHoliday, mainPeriod, setViewHoliday, data, colorHoliday };
};

export { useBlockWeeks };
