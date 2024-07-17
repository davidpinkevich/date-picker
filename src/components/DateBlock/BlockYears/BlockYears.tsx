import React from "react";

import { TypesSwitch } from "constants/data";
import { getYearsPeriods } from "utils/getYearsPeriods";
import { useBlockYears } from "hooks/useBlockYears";

import { StyledBlockYears, StyledBlockYearsItem } from "./BlockYears.styled";
import { type PropsBlockYears } from "./BlockYears.types";

const BlockYears: React.FC<PropsBlockYears> = ({ targetDay, setTargetDay }) => {
  const { targetDate, mainPeriod, year, years, setTargetDate, setTypeSwitch } =
    useBlockYears(targetDay, setTargetDay);

  const handleSwitch = (year: number) => {
    setTargetDate({ ...targetDate, year });
    setTypeSwitch(TypesSwitch.months);
  };

  return (
    <StyledBlockYears>
      {getYearsPeriods(mainPeriod.min, years, mainPeriod.max).map(
        ({ value, availability }, index) => {
          return (
            <StyledBlockYearsItem
              onClick={() => handleSwitch(value)}
              $target={year === value}
              $availability={availability}
              key={index}>
              {value}
            </StyledBlockYearsItem>
          );
        }
      )}
    </StyledBlockYears>
  );
};

export { BlockYears };
