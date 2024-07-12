import React, { useState } from "react";

import { DAYS_OF_WEEK } from "constants/data";
import { splitArrayIntoChunks } from "utils/splitArrayIntoChunks";

import { Swiper } from "components/Swiper/Swiper";
import { BlockWeeks } from "./BlockWeeks/BlockWeeks";

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
  setTargetDate,
  setTypeSwitch
}) => {
  const days =
    typeStart === "Mo" ? DAYS_OF_WEEK.fromMonady : DAYS_OF_WEEK.fromSunday;

  const [move, setMove] = useState(false);

  const handleSwiperClick = () => {
    setMove(true);
    setTimeout(() => {
      setMove(false);
    }, 1000);
  };

  return (
    <StyledDateBlock>
      <Swiper
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        typeSwitch={typeSwitch}
        handleSwiperClick={handleSwiperClick}
        setTypeSwitch={setTypeSwitch}
      />
      {typeSwitch === "weeks" && (
        <StyledDateBlockStringDays>
          {days.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </StyledDateBlockStringDays>
      )}
      <StyledMainBlock move={move}>
        {typeSwitch === "weeks" &&
          splitArrayIntoChunks(data, 7).map((str, index) => {
            return (
              <StyledDateBlockString key={index}>
                {str.map((item, index) => {
                  return <DateBlockItem key={index} {...item} />;
                })}
              </StyledDateBlockString>
            );
          })}
      </StyledMainBlock>
      {typeSwitch === "months" && (
        <BlockWeeks
          targetDate={targetDate}
          setTargetDate={setTargetDate}
          setTypeSwitch={setTypeSwitch}
        />
      )}
    </StyledDateBlock>
  );
};

export { DateBlock };
