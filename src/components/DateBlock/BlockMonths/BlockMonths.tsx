import React from "react";

import { MONTHS, TypesSwitch } from "constants/data";
import { useBlockMonths } from "hooks/useBlockMonths";

import { StyledBlockWeeks, StyledBlockWeeksItem } from "./BlockMonths.styled";
import { type PropsBlockMonths } from "./BlockMonths.types";

const BlockMonths: React.FC<PropsBlockMonths> = ({
  targetDay,
  setTargetDay
}) => {
  const { targetDate, setTargetDate, setTypeSwitch } = useBlockMonths(
    targetDay,
    setTargetDay
  );

  const handleSwitch = (month: number) => {
    setTargetDate({ ...targetDate, month });
    setTypeSwitch(TypesSwitch.weeks);
  };

  return (
    <StyledBlockWeeks>
      {MONTHS.map((item) => {
        return (
          <StyledBlockWeeksItem
            onClick={() => handleSwitch(item.id)}
            $target={targetDate.month === item.id}
            key={item.id}>
            {item.name}
          </StyledBlockWeeksItem>
        );
      })}
    </StyledBlockWeeks>
  );
};

export { BlockMonths };
