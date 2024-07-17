import React, { memo } from "react";

import { useBlockWeeks } from "hooks/useBlockWeeks";

import {
  StyledDateBlockItem,
  StyledDateBlockString,
  StyledDateBlockTooltip,
  StyledMainBlock
} from "./BlockWeeks.styled";
import { type PropsBlockWeeks } from "./BlockWeeks.types";

const BlockWeeks: React.FC<PropsBlockWeeks> = memo(
  ({
    move,
    range,
    handleClickRange,
    handleMouseRange,
    targetDay,
    setTargetDay
  }) => {
    const { viewHoliday, setViewHoliday, data } = useBlockWeeks(
      range,
      targetDay,
      setTargetDay
    );

    const handleMouseOver = (
      value: string,
      year?: number,
      month?: number,
      day?: number
    ) => {
      setViewHoliday(value);
      if (range) {
        handleMouseRange(year, month, day, "over");
      }
    };

    const handleMouseOut = (year?: number, month?: number, day?: number) => {
      setViewHoliday("");
      if (range) {
        handleMouseRange(year, month, day, "out");
      }
    };

    const handleClick = (year: number, month: number, day: number) => {
      if (range) {
        handleClickRange(year, month, day);
      } else {
        // setTargetDay({ year, month, day });
      }
    };

    return (
      <StyledMainBlock $move={move}>
        {data.map((str, index) => {
          return (
            <StyledDateBlockString key={index}>
              {str.map(
                (
                  {
                    year,
                    month,
                    dayNumber,
                    holiday,
                    currentMonth,
                    today,
                    targetRange
                  },
                  index
                ) => {
                  return (
                    <React.Fragment key={index}>
                      <StyledDateBlockItem
                        $isHoliday={holiday?.isHoliday}
                        key={index}
                        onClick={() => handleClick(year, month, dayNumber)}
                        onMouseOver={() =>
                          handleMouseOver(
                            holiday?.title,
                            year,
                            month,
                            dayNumber
                          )
                        }
                        onMouseOut={() =>
                          handleMouseOut(year, month, dayNumber)
                        }
                        $currentMonth={currentMonth}
                        $today={today}
                        $targetRange={targetRange}
                        $targetDay={targetDay?.day === dayNumber}>
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
  }
);

export { BlockWeeks };
