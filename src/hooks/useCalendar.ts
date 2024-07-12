import React, { useEffect, useState } from "react";

import { createDateArray } from "utils/getDate";

const useCalendar = ({ typeStart }: { typeStart: "Mo" | "Su" }) => {
  const [value, setValue] = useState("");
  const [targetDate, setTargetDate] = useState({
    year: 2025,
    month: 0,
    day: 12
  });
  const [dateContainer, setDateContainer] = useState(
    createDateArray(targetDate.year, targetDate.month, typeStart)
  );
  const [typeSwitch, setTypeSwitch] = useState("weeks");

  useEffect(() => {
    setDateContainer(
      createDateArray(targetDate.year, targetDate.month, typeStart)
    );
  }, [targetDate]);

  return {
    value,
    setValue,
    dateContainer,
    typeSwitch,
    setTypeSwitch,
    targetDate,
    setTargetDate
  };
};

export { useCalendar };
