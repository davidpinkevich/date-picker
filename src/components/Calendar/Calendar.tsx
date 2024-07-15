import React, { useContext, useEffect } from "react";

import { Context } from "constants/context";
import { BASE_PERIOD } from "constants/data";

import { DateBlock } from "components/DateBlock/DateBlock";
import { ThemeContainer } from "components/ThemeContainer/ThemeContainer";

import { StyledCalendar } from "./Calendar.styled";
import { type PropsCalendar } from "./Calendar.types";

const Calendar: React.FC<PropsCalendar> = ({
  typeStart,
  min = BASE_PERIOD.MIN,
  max = BASE_PERIOD.MAX
}) => {
  const { setTypeStart, setMainPeriod } = useContext(Context);

  useEffect(() => {
    setTypeStart(typeStart);
    setMainPeriod({ min, max });
  }, [typeStart, setMainPeriod]);

  return (
    <ThemeContainer>
      <StyledCalendar>
        <h2>Calendar</h2>
        <DateBlock />
      </StyledCalendar>
    </ThemeContainer>
  );
};

export { Calendar };
