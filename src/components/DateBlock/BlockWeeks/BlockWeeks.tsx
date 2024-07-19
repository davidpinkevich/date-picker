import React, { memo } from "react";

import { useBlockWeeks } from "hooks/useBlockWeeks";

import { getTargetKey } from "utils/getTargetKey";

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
    setTargetDay,
    setViewTodo,
    todos
  }) => {
    const { viewHoliday, setViewHoliday, data, mainPeriod } = useBlockWeeks(
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
        setTargetDay({
          year,
          month: month + 1,
          day,
          valid: mainPeriod.min <= year && mainPeriod.max >= year
        });
      }
    };

    const handleDoubleClick = () => {
      if (targetDay?.valid) setViewTodo(true);
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
                        onDoubleClick={handleDoubleClick}
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
                        $isTodo={
                          !!todos[
                            getTargetKey({
                              year,
                              month: month + 1,
                              day: dayNumber
                            })
                          ]?.length
                        }
                        $currentMonth={currentMonth}
                        $today={today}
                        $targetRange={targetRange}
                        $targetDay={
                          targetDay?.day === dayNumber &&
                          currentMonth &&
                          targetDay?.valid &&
                          mainPeriod.min <= targetDay.year &&
                          mainPeriod.max >= targetDay.year
                        }>
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
