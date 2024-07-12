import React from "react";

import { MONTHS } from "constants/data";

import { StyledBlockWeeks, StyledBlockWeeksItem } from "./BlockWeeks.styled";

import { type PropsBlockWeeks } from "./BlockWeeks.types";

const BlockWeeks: React.FC<PropsBlockWeeks> = ({
  targetDate,
  setTargetDate,
  setTypeSwitch
}) => {
  const handleSwitch = (month: number) => {
    setTargetDate({ ...targetDate, month });
    setTypeSwitch("weeks");
  };

  return (
    <StyledBlockWeeks>
      {MONTHS.map((item) => {
        return (
          <StyledBlockWeeksItem
            onClick={() => handleSwitch(item.id)}
            target={targetDate.month === item.id}
            key={item.id}>
            {item.name}
          </StyledBlockWeeksItem>
        );
      })}
    </StyledBlockWeeks>
  );
};

export { BlockWeeks };
