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

import { addTargetRange } from "utils/viewRangePicker";

const BlockWeeks: React.FC<PropsBlockWeeks> = memo(
  ({ move, range, handleClickRange, handleMouseRange }) => {
    const { dateContainer, setTargetDay } = useContext(Context);
    const [viewHoliday, setViewHoliday] = useState("");

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

    const data = range
      ? splitArrayIntoChunks(addTargetRange(range, dateContainer), 7)
      : splitArrayIntoChunks(dateContainer, 7);

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
                        $targetRange={targetRange}>
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
