import React, { memo, useContext, useState } from "react";

import { Context } from "constants/context";
import { DAYS_OF_WEEK, StartDays, TypesSwitch } from "constants/data";

import { Switch } from "components/Switch/Switch";

import { BlockMonths } from "./BlockMonths/BlockMonths";
import { BlockWeeks } from "./BlockWeeks/BlockWeeks";
import { BlockYears } from "./BlockYears/BlockYears";
import {
  StyledDateBlock,
  StyledDateBlockStringDays,
  StyledDateBlockStringDaysItem
} from "./DateBlock.styled";

import { type PropsDateBlock } from "./DateBlock.types";

const DateBlock: React.FC<PropsDateBlock> = memo(
  ({ range, handleClickRange, handleMouseRange }) => {
    const { typeSwitch, typeStart } = useContext(Context);
    const [move, setMove] = useState(false);

    const days =
      typeStart === StartDays.Mo
        ? DAYS_OF_WEEK.fromMonady
        : DAYS_OF_WEEK.fromSunday;

    const handleSwiperClick = () => {
      setMove(true);
      setTimeout(() => {
        setMove(false);
      }, 1000);
    };

    return (
      <StyledDateBlock $range={!!range}>
        <Switch handleSwiperClick={handleSwiperClick} />
        {typeSwitch === TypesSwitch.weeks && (
          <StyledDateBlockStringDays>
            {days.map((item, index) => {
              return (
                <StyledDateBlockStringDaysItem key={index}>
                  {item}
                </StyledDateBlockStringDaysItem>
              );
            })}
          </StyledDateBlockStringDays>
        )}
        {typeSwitch === TypesSwitch.weeks && (
          <BlockWeeks
            move={move}
            range={range}
            handleClickRange={handleClickRange}
            handleMouseRange={handleMouseRange}
          />
        )}
        {typeSwitch === TypesSwitch.months && <BlockMonths />}
        {typeSwitch === TypesSwitch.years && <BlockYears />}
      </StyledDateBlock>
    );
  }
);

export { DateBlock };
