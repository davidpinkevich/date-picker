import React, { useEffect, useState } from "react";

import { addHolidays } from "utils/addHolidays";
import { createDateArray } from "utils/getDate";

const useCalendar = () => {
  const [value, setValue] = useState("");
  const [typeStart, setTypeStart] = useState<"Mo" | "Su">("Mo");
  const [withHolidays, setWithHolidays] = useState(false);
  const [mainPeriod, setMainPeriod] = useState({ min: 2020, max: 2026 });

  const [targetDay, setTargetDay] = useState<{
    years: number;
    year: number;
    month: number;
    day: number;
  } | null>(null);

  const [targetDate, setTargetDate] = useState({
    years: Math.floor(new Date().getFullYear() / 12) * 12,
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });

  const [dateContainer, setDateContainer] = useState(
    createDateArray(targetDate.year, targetDate.month, typeStart, mainPeriod)
  );

  const [typeSwitch, setTypeSwitch] = useState("weeks");

  useEffect(() => {
    const base = createDateArray(
      targetDate.year,
      targetDate.month,
      typeStart,
      mainPeriod
    );
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
    targetDay,
    setTargetDay,
    withHolidays,
    setWithHolidays
  };
};

export { useCalendar };
