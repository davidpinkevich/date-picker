import React, { memo, useContext, useState } from "react";

import { Context } from "constants/context";
import { DAYS_OF_WEEK } from "constants/data";

import { Swiper } from "components/Swiper/Swiper";

import { BlockMonths } from "./BlockMonths/BlockMonths";
import { BlockWeeks } from "./BlockWeeks/BlockWeeks";
import { type PropsBlockWeeks } from "./BlockWeeks/BlockWeeks.types";
import {
  StyledDateBlock,
  StyledDateBlockStringDays,
  StyledMainBlock
} from "./DateBlock.styled";

const DateBlock: React.FC = memo(() => {
  const { typeSwitch, typeStart } = useContext(Context);
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
      <Swiper handleSwiperClick={handleSwiperClick} />
      {typeSwitch === "weeks" && (
        <StyledDateBlockStringDays>
          {days.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </StyledDateBlockStringDays>
      )}
      <StyledMainBlock move={move}>
        {typeSwitch === "weeks" && <BlockWeeks />}
      </StyledMainBlock>
      {typeSwitch === "months" && <BlockMonths />}
    </StyledDateBlock>
  );
});

export { DateBlock };
