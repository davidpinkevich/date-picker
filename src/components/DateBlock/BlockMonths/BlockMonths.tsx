import React, { useContext } from "react";

import { Context } from "constants/context";
import { MONTHS, TypesSwitch } from "constants/data";

import { StyledBlockWeeks, StyledBlockWeeksItem } from "./BlockMonths.styled";

const BlockMonths: React.FC = ({}) => {
  const { targetDate, setTargetDate, setTypeSwitch } = useContext(Context);

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
