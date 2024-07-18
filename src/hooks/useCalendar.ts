import { useEffect, useState } from "react";

import { BASE_PERIOD, YEAR_VALUES } from "constants/data";

import { addHolidays } from "utils/addHolidays";
import { createDateArray } from "utils/getDate";

const useCalendar = () => {
  const [value, setValue] = useState("");
  const [typeStart, setTypeStart] = useState<"Mo" | "Su">("Mo");
  const [withHolidays, setWithHolidays] = useState(false);
  const [mainPeriod, setMainPeriod] = useState({
    min: BASE_PERIOD.MIN,
    max: BASE_PERIOD.MAX
  });

  const [targetDate, setTargetDate] = useState({
    years:
      Math.floor(new Date().getFullYear() / YEAR_VALUES.MONTHS) *
      YEAR_VALUES.MONTHS,
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: 1
  });

  const [dateContainer, setDateContainer] = useState(
    createDateArray(targetDate.year, targetDate.month, typeStart)
  );

  const [typeSwitch, setTypeSwitch] = useState("weeks");

  useEffect(() => {
    const base = createDateArray(targetDate.year, targetDate.month, typeStart);

    const updateBase = withHolidays ? addHolidays(base) : base;
    setDateContainer(updateBase);
  }, [targetDate, typeStart, withHolidays]);

  return {
    typeStart,
    setTypeStart,
    mainPeriod,
    setMainPeriod,
    value,
    setValue,
    dateContainer,
    setDateContainer,
    typeSwitch,
    setTypeSwitch,
    targetDate,
    setTargetDate,
    withHolidays,
    setWithHolidays
  };
};

export { useCalendar };
