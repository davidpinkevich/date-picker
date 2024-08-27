import React, { useState } from "react";

import { ButtonClear } from "components/ButtonClear/ButtonClear";
import { Calendar } from "components/Calendar/Calendar";
import { ContextContainer } from "components/ContextContainer/ContextContainer";
import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";
import { ThemeContainer } from "components/ThemeContainer/ThemeContainer";

import { StyledWrapperDateRange } from "./DateRangeCalendar.styled";
import { type PropsDateRangeCalendar } from "./DateRangeCalendar.types";

import { type TypeYear } from "types/contextTypes";

const DateRangeCalendar: React.FC<PropsDateRangeCalendar> = (props) => {
  const [countClick, setCountClick] = useState(0);

  const [range, setRange] = useState<
    Array<{ year: number; month: number; day: number }>
  >([]);

  const handleClickRange = ({ year, month, day }: TypeYear) => {
    if (countClick === 0) {
      const arr = [{ year, month, day }];
      setRange(arr);
    } else {
      setRange([range[0], { year, month, day }]);
    }
    setCountClick(countClick === 0 ? 1 : 0);
  };

  const handleMouseRange = (
    year: number,
    month: number,
    day: number,
    type: string
  ) => {
    if (countClick === 1 && type === "over") {
      setRange([range[0], { year, month, day }]);
    } else if (countClick === 1 && type === "out") {
      setRange([range[0]]);
    }
  };

  const handleClear = () => {
    setCountClick(0);
    setRange([]);
  };

  const passedProps = {
    ...props,
    withRangePicker: true,
    range,
    handleClickRange,
    handleMouseRange
  };

  return (
    <ContextContainer>
      <ErrorBoundary>
        <ThemeContainer>
          <StyledWrapperDateRange>
            <Calendar {...passedProps} />
            <ButtonClear onClick={handleClear} label="Clear" />
          </StyledWrapperDateRange>
        </ThemeContainer>
      </ErrorBoundary>
    </ContextContainer>
  );
};

export { DateRangeCalendar };
