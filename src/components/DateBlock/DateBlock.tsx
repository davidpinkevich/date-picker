import React, { useState } from "react";

import { DAYS_OF_WEEK } from "constants/data";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";

import { Swiper } from "components/Swiper/Swiper";

import {
  StyledDateBlock,
  StyledDateBlockString,
  StyledDateBlockStringDays,
  StyledMainBlock
} from "./DateBlock.styled";
import { type PropsDateBlock } from "./DateBlock.types";
import { DateBlockItem } from "./DateBlockItem/DateBlockItem";

const DateBlock: React.FC<PropsDateBlock> = ({
  data,
  typeSwitch,
  typeStart,
  targetDate,
  setTargetDate
}) => {
  const days =
    typeStart === "Mo" ? DAYS_OF_WEEK.fromMonady : DAYS_OF_WEEK.fromSunday;

  const [move, setMove] = useState(false);

  const handleSwiperClick = () => {
    setMove(true);
    setTimeout(() => {
      setMove(false);
    }, 500);
  };

  return (
    <StyledDateBlock>
      <Swiper
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        typeSwitch={typeSwitch}
        handleSwiperClick={handleSwiperClick}
      />
      <StyledDateBlockStringDays>
        {days.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </StyledDateBlockStringDays>
      <StyledMainBlock move={move}>
        {splitArrayIntoChunks(data, 7).map((str, index) => {
          return (
            <StyledDateBlockString key={index}>
              {str.map((item, index) => {
                return <DateBlockItem key={index} {...item} />;
              })}
            </StyledDateBlockString>
          );
        })}
      </StyledMainBlock>
    </StyledDateBlock>
  );
};

export { DateBlock };
