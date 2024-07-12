import React from "react";

import { type PropsDateBlockItem } from "../DateBlock.types";

import { StyledDateBlockItem } from "./DateBlockItem.styled";

const DateBlockItem: React.FC<PropsDateBlockItem> = ({
  dayNumber,
  currentMonth,
  today
}) => {
  return (
    <StyledDateBlockItem currentMonth={currentMonth} today={today}>
      {dayNumber}
    </StyledDateBlockItem>
  );
};

export { DateBlockItem };
