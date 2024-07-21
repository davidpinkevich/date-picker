import React from "react";

import { createMask } from "utils/createMask";
import { CalendarImg } from "assets/icons/calendar";

import { StyledInput, StyledInputWrapper } from "./InputDate.styled";
import { type PropsInputDate } from "./InputDate.types";

const InputDate: React.FC<PropsInputDate> = ({
  viewCalendar,
  setViewCalendar,
  placeholder,
  value,
  setValue,
  targetDay,
  setTargetDay
}) => {
  const handleClick = () => {
    setViewCalendar(!viewCalendar);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const result = createMask(value);
    if (result.length <= 9) setTargetDay({ ...targetDay, valid: true });
    setValue(result);
  };

  return (
    <StyledInputWrapper>
      <CalendarImg />
      <StyledInput
        value={value}
        $targetDay={targetDay}
        onChange={handleInputChange}
        onFocus={handleClick}
        type="text"
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
};

export { InputDate };
