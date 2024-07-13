import React, { useEffect, useState } from "react";

import { createDateArray } from "utils/getDate";

const useCalendar = () => {
  const [value, setValue] = useState("");
  const [typeStart, setTypeStart] = useState<"Mo" | "Su">("Mo");
  const [targetDate, setTargetDate] = useState({
    year: 2024,
    month: 6
  });

  const [targetDay, setTargetDay] = useState<{
    year: number;
    month: number;
    day: number;
  } | null>(null);

  const [dateContainer, setDateContainer] = useState(
    createDateArray(targetDate.year, targetDate.month, typeStart)
  );
  const [typeSwitch, setTypeSwitch] = useState("weeks");

  useEffect(() => {
    setDateContainer(
      createDateArray(targetDate.year, targetDate.month, typeStart, targetDay)
    );
  }, [targetDate, typeStart, targetDay]);

  return {
    typeStart,
    setTypeStart,
    value,
    setValue,
    dateContainer,
    typeSwitch,
    setTypeSwitch,
    targetDate,
    setTargetDate,
    targetDay,
    setTargetDay
  };
};

export { useCalendar };
