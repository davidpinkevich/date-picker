import React, { memo, useContext } from "react";

import { Context } from "constants/context";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";

import {
  StyledDateBlockItem,
  StyledDateBlockString
} from "./BlockWeeks.styled";

const BlockWeeks: React.FC = memo(() => {
  const { dateContainer, setTargetDay } = useContext(Context);

  const handleClick = (year: number, month: number, day: number) => {
    setTargetDay({ year, month, day });
  };

  return (
    <>
      {splitArrayIntoChunks(dateContainer, 7).map((str, index) => {
        return (
          <StyledDateBlockString key={index}>
            {str.map((item, index) => {
              return (
                <StyledDateBlockItem
                  key={index}
                  onClick={() =>
                    handleClick(item.year, item.month, item.dayNumber)
                  }
                  currentMonth={item.currentMonth}
                  today={item.today}>
                  {item.dayNumber}
                </StyledDateBlockItem>
              );
            })}
          </StyledDateBlockString>
        );
      })}
    </>
  );
});

export { BlockWeeks };
