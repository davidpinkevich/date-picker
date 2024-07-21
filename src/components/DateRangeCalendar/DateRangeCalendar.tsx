import React, { useState } from "react";

import { ButtonClear } from "components/ButtonClear/ButtonClear";
import { Calendar } from "components/Calendar/Calendar";
import { ContextContainer } from "components/ContextContainer/ContextContainer";
import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";

import { StyledWrapperDateRange } from "./DateRangeCalendar.styled";
import { type PropsDateRangeCalendar } from "./DateRangeCalendar.types";

const DateRangeCalendar: React.FC<PropsDateRangeCalendar> = (props) => {
  const [countClick, setCountClick] = useState(0);

  const [range, setRange] = useState<
    Array<{ year: number; month: number; day: number }>
  >([]);

  const handleClickRange = (year: number, month: number, day: number) => {
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
        <StyledWrapperDateRange>
          <Calendar {...passedProps} />
          <ButtonClear onClick={handleClear} label="Clear" />
        </StyledWrapperDateRange>
      </ErrorBoundary>
    </ContextContainer>
  );
};

export { DateRangeCalendar };
