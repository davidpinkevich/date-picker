import React from "react";

import { useCalendar } from "hooks/useCalendar";

import { DateBlock } from "components/DateBlock/DateBlock";
import { Input } from "components/Input/Input";
import { ThemeContainer } from "components/ThemeContainer/ThemeContainer";

import { StyledCalendar } from "./Calendar.styled";

const Calendar: React.FC<{ typeStart: "Mo" | "Su" }> = ({ typeStart }) => {
  const {
    value,
    setValue,
    dateContainer,
    typeSwitch,
    targetDate,
    setTargetDate
  } = useCalendar({ typeStart });

  return (
    <ThemeContainer>
      <StyledCalendar>
        <h2>Calendar</h2>
        <Input value={value} setValue={setValue} />
        <DateBlock
          data={dateContainer}
          typeSwitch={typeSwitch}
          typeStart={typeStart}
          targetDate={targetDate}
          setTargetDate={setTargetDate}
        />
      </StyledCalendar>
    </ThemeContainer>
  );
};

export { Calendar };
