import React, { useContext } from "react";

import { Context } from "constants/context";
import { MONTHS, TypesSwitch, YEAR_VALUES } from "constants/data";
import { viewYearsPeriod } from "utils/getYearsPeriods";
import { ArrowImg } from "assets/icons/arrow";

import { isValidSwitch } from "utils/isValidDate";

import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledSwitch,
  StyledSwitchBlock,
  StyledSwitchTitle
} from "./Switch.styled";
import { type PropsSwitch } from "./Switch.types";

const Switch: React.FC<PropsSwitch> = ({
  handleSwiperClick,
  targetDay,
  setTargetDay
}) => {
  const { targetDate, setTargetDate, typeSwitch, setTypeSwitch, mainPeriod } =
    useContext(Context);

  const handleDateChangeDec = () => {
    if (
      typeSwitch === TypesSwitch.weeks &&
      targetDate.year >= mainPeriod.min &&
      !(targetDate.year === mainPeriod.min && targetDate.month === 0)
    ) {
      handleSwiperClick();
      if (targetDate.month === 0 && mainPeriod.min !== targetDate.year) {
        setTargetDate({
          ...targetDate,
          month: YEAR_VALUES.MONTHS - 1,
          year: targetDate.year - 1
        });
        if (targetDay?.year && targetDay?.month && targetDay?.day)
          setTargetDay({
            ...targetDay,
            month: 12,
            year: targetDate.year - 1,
            valid: isValidSwitch(
              targetDay.day,
              targetDate.month,
              targetDate.year
            )
          });
      } else {
        setTargetDate({
          ...targetDate,
          month: targetDate.month - 1
        });
        if (
          targetDay?.year &&
          targetDay?.month <= YEAR_VALUES.MONTHS &&
          targetDay?.day
        )
          setTargetDay({
            ...targetDay,
            year: targetDate.year,
            month: targetDay.month - 1,
            valid: isValidSwitch(
              targetDay.day,
              targetDate.month,
              targetDate.year
            )
          });
      }
    } else if (
      typeSwitch === TypesSwitch.months &&
      targetDate.year > mainPeriod.min
    ) {
      setTargetDate({ ...targetDate, year: targetDate.year - 1 });
      if (targetDay?.year && targetDay?.month && targetDay?.day)
        setTargetDay({
          ...targetDay,
          year: targetDate.year - 1,
          valid: isValidSwitch(targetDay.day, targetDate.month, targetDate.year)
        });
    } else if (
      typeSwitch === TypesSwitch.years &&
      targetDate.years > mainPeriod.min
    ) {
      setTargetDate({ ...targetDate, years: targetDate.years - 12 });
    }
  };

  const handleDateChangeInc = () => {
    if (
      typeSwitch === TypesSwitch.weeks &&
      targetDate.year <= mainPeriod.max &&
      !(targetDate.year === mainPeriod.max && targetDate.month === 11)
    ) {
      handleSwiperClick();
      if (targetDate.month === 11) {
        setTargetDate({ ...targetDate, month: 0, year: targetDate.year + 1 });
        if (targetDay?.year && targetDay?.month && targetDay?.day)
          setTargetDay({
            ...targetDay,
            month: 1,
            year: targetDate.year + 1,
            valid: isValidSwitch(
              targetDay.day,
              targetDate.month,
              targetDate.year
            )
          }); //
      } else {
        setTargetDate({
          ...targetDate,
          month: targetDate.month + 1
        });
        if (
          targetDay?.year &&
          targetDay?.month <= YEAR_VALUES.MONTHS &&
          targetDay?.day
        )
          setTargetDay({
            ...targetDay,
            year: targetDate.year,
            month: targetDay.month + 1,
            valid: isValidSwitch(
              targetDay.day,
              targetDate.month,
              targetDate.year
            )
          }); //
      }
    } else if (
      typeSwitch === TypesSwitch.months &&
      targetDate.year < mainPeriod.max
    ) {
      setTargetDate({ ...targetDate, year: targetDate.year + 1 });
      if (targetDay?.year && targetDay?.month && targetDay?.day)
        setTargetDay({
          ...targetDay,
          year: targetDate.year + 1,
          valid: isValidSwitch(targetDay.day, targetDate.month, targetDate.year)
        });
    } else if (
      typeSwitch === TypesSwitch.years &&
      targetDate.years + YEAR_VALUES.MONTHS <= mainPeriod.max
    ) {
      setTargetDate({
        ...targetDate,
        years: targetDate.years + YEAR_VALUES.MONTHS
      });
    }
  };

  const handleChangeType = () => {
    switch (typeSwitch) {
      case TypesSwitch.weeks:
        setTypeSwitch(TypesSwitch.months);
        break;
      case TypesSwitch.months:
        setTypeSwitch(TypesSwitch.years);
    }
  };

  return (
    <StyledSwitch>
      <StyledArrowLeft onClick={handleDateChangeDec}>
        <ArrowImg />
      </StyledArrowLeft>
      <StyledSwitchBlock onClick={handleChangeType}>
        <StyledSwitchTitle>
          {typeSwitch === TypesSwitch.weeks &&
            MONTHS.find((item) => item.id === targetDate.month).name +
              " " +
              targetDate.year}
          {typeSwitch === TypesSwitch.months && targetDate.year}
          {typeSwitch === TypesSwitch.years &&
            viewYearsPeriod(targetDate.years)}
        </StyledSwitchTitle>
      </StyledSwitchBlock>
      <StyledArrowRight onClick={handleDateChangeInc}>
        <ArrowImg />
      </StyledArrowRight>
    </StyledSwitch>
  );
};

export { Switch };
