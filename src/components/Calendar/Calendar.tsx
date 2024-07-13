import React, { useContext, useEffect } from "react";

import { Context } from "constants/context";

import { DateBlock } from "components/DateBlock/DateBlock";
import { ThemeContainer } from "components/ThemeContainer/ThemeContainer";

import { StyledCalendar } from "./Calendar.styled";
import { type PropsCalendar } from "./Calendar.types";

const Calendar: React.FC<PropsCalendar> = ({ typeStart }) => {
  const { setTypeStart } = useContext(Context);

  useEffect(() => {
    setTypeStart(typeStart);
  }, [typeStart]);

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
