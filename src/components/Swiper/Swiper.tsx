import React, { useContext } from "react";

import { Context } from "constants/context";
import { MONTHS } from "constants/data";
import { ArrowImg } from "assets/icons/arrow";

import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledSwiper
} from "./Swiper.styled";
import { type PropsSwiper } from "./Swiper.types";

const Swiper: React.FC<PropsSwiper> = ({ handleSwiperClick }) => {
  const { targetDate, setTargetDate, typeSwitch, setTypeSwitch } =
    useContext(Context);

  const handleDateChangeDec = () => {
    handleSwiperClick();
    if (typeSwitch === "weeks") {
      if (targetDate.month === 0) {
        setTargetDate({ ...targetDate, month: 11, year: targetDate.year - 1 });
      } else {
        setTargetDate({ ...targetDate, month: targetDate.month - 1 });
      }
    } else if (typeSwitch === "months") {
      setTargetDate({ ...targetDate, year: targetDate.year - 1 });
    }
  };

  const handleDateChangeInc = () => {
    handleSwiperClick();
    if (typeSwitch === "weeks") {
      if (targetDate.month === 11) {
        setTargetDate({ ...targetDate, month: 0, year: targetDate.year + 1 });
      } else {
        setTargetDate({ ...targetDate, month: targetDate.month + 1 });
      }
    } else if (typeSwitch === "months") {
      setTargetDate({ ...targetDate, year: targetDate.year + 1 });
    }
  };

  const handleChangeType = () => {
    switch (typeSwitch) {
      case "weeks":
        setTypeSwitch("months");
        break;
      case "months":
        setTypeSwitch("years");
    }
  };

  return (
    <StyledSwiper>
      <StyledArrowLeft onClick={handleDateChangeDec}>
        <ArrowImg />
      </StyledArrowLeft>
      <div onClick={handleChangeType}>
        {typeSwitch === "weeks" && (
          <div>
            {MONTHS.find((item) => item.id === targetDate.month).name}{" "}
            {targetDate.year}
          </div>
        )}
        {typeSwitch === "months" && <div>{targetDate.year}</div>}
      </div>
      <StyledArrowRight onClick={handleDateChangeInc}>
        <ArrowImg />
      </StyledArrowRight>
    </StyledSwiper>
  );
};

export { Swiper };
