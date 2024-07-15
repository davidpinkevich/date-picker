import React, { memo, useContext, useState } from "react";

import { Context } from "constants/context";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";

import {
  StyledDateBlockItem,
  StyledDateBlockString,
  StyledDateBlockTooltip,
  StyledMainBlock
} from "./BlockWeeks.styled";
import { type PropsBlockWeeks } from "./BlockWeeks.types";

const BlockWeeks: React.FC<PropsBlockWeeks> = memo(({ move }) => {
  const { dateContainer, setTargetDay } = useContext(Context);

  const [viewHoliday, setViewHoliday] = useState("");

  const handleMouseOver = (value: string) => {
    setViewHoliday(value);
  };

  const handleMouseOut = () => {
    setViewHoliday("");
  };

  const handleClick = (year: number, month: number, day: number) => {
    setTargetDay({ year, month, day });
  };

  return (
    <StyledMainBlock $move={move}>
      {splitArrayIntoChunks(dateContainer, 7).map((str, index) => {
        return (
          <StyledDateBlockString key={index}>
            {str.map(
              (
                { year, month, dayNumber, holiday, currentMonth, today },
                index
              ) => {
                return (
                  <React.Fragment key={index}>
                    <StyledDateBlockItem
                      $isHoliday={holiday?.isHoliday}
                      key={index}
                      onClick={() => handleClick(year, month, dayNumber)}
                      onMouseOver={() => handleMouseOver(holiday?.title)}
                      onMouseOut={handleMouseOut}
                      $currentMonth={currentMonth}
                      $today={today}>
                      {dayNumber}
                    </StyledDateBlockItem>
                    {viewHoliday && holiday?.isHoliday && (
                      <StyledDateBlockTooltip>
                        {viewHoliday}
                      </StyledDateBlockTooltip>
                    )}
                  </React.Fragment>
                );
              }
            )}
          </StyledDateBlockString>
        );
      })}
    </StyledMainBlock>
  );
});

export { BlockWeeks };
