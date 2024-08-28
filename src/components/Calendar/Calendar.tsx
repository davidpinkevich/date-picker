import React, { useContext, useEffect } from "react";

import { Context } from "constants/context";
import { BASE_PERIOD } from "constants/data";

import { DateBlock } from "components/DateBlock/DateBlock";

import { StyledCalendar } from "./Calendar.styled";
import { type PropsCalendar } from "./Calendar.types";

const Calendar: React.FC<PropsCalendar> = ({
  range,
  ButtonClear,
  targetDay,
  setTargetDay,
  handleClickRange,
  handleMouseRange,
  setViewTodo,
  todos,
  typeStart = "Mo",
  withHolidays = true,
  colorHoliday = "red",
  min = BASE_PERIOD.MIN,
  max = BASE_PERIOD.MAX
}) => {
  const { setTypeStart, setMainPeriod, setWithHolidays, setColorHoliday } =
    useContext(Context);
  useEffect(() => {
    setTypeStart(typeStart);
    setMainPeriod({ min, max });
    setWithHolidays(withHolidays);
    setColorHoliday(colorHoliday);
  }, [typeStart, setMainPeriod, colorHoliday]);

  return (
    <StyledCalendar>
      <DateBlock
        range={range}
        targetDay={targetDay}
        handleClickRange={handleClickRange}
        handleMouseRange={handleMouseRange}
        setTargetDay={setTargetDay}
        setViewTodo={setViewTodo}
        todos={todos}
      />
      {ButtonClear}
    </StyledCalendar>
  );
};

export { Calendar };
