import React, { useContext, useEffect } from "react";

import { Context } from "constants/context";
import { BASE_PERIOD } from "constants/data";

import { DateBlock } from "components/DateBlock/DateBlock";
import { ThemeContainer } from "components/ThemeContainer/ThemeContainer";

import { StyledCalendar } from "./Calendar.styled";
import { type PropsCalendar } from "./Calendar.types";

const Calendar: React.FC<PropsCalendar> = ({
  typeStart,
  withHolidays = true,
  range,
  ButtonClear,
  targetDay,
  setTargetDay,
  handleClickRange,
  handleMouseRange,
  setViewTodo,
  min = BASE_PERIOD.MIN,
  max = BASE_PERIOD.MAX
}) => {
  const { setTypeStart, setMainPeriod, setWithHolidays } = useContext(Context);
  useEffect(() => {
    setTypeStart(typeStart);
    setMainPeriod({ min, max });
    setWithHolidays(withHolidays);
  }, [typeStart, setMainPeriod]);

  return (
    <ThemeContainer>
      <StyledCalendar>
        <DateBlock
          range={range}
          targetDay={targetDay}
          handleClickRange={handleClickRange}
          handleMouseRange={handleMouseRange}
          setTargetDay={setTargetDay}
          setViewTodo={setViewTodo}
        />
        {ButtonClear}
      </StyledCalendar>
    </ThemeContainer>
  );
};

export { Calendar };
