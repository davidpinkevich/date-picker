import React, { useContext } from "react";

import { Context } from "constants/context";
import { TypesSwitch } from "constants/data";
import { getYearsPeriods } from "utils/getYearsPeriods";

import { StyledBlockYears, StyledBlockYearsItem } from "./BlockYears.styled";

const BlockYears: React.FC = () => {
  const { targetDate, setTargetDate, setTypeSwitch, mainPeriod } =
    useContext(Context);
  const { year, years } = targetDate;

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
