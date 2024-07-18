import React, { type ComponentType, useEffect, useState } from "react";

import { INPUT_VALUES } from "constants/data";
import {
  isValidDate,
  parserDateToStr,
  parserStrToDate
} from "utils/isValidDate";

import { InputDate } from "components/InputDate/InputDate";

import { StyledWrapperDatePicker } from "./styled";

const withDatePicker =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const [viewCalendar, setViewCalendar] = useState(false);

    const [value, setValue] = useState("");

    const [targetDay, setTargetDay] = useState<{
      year: number;
      month: number;
      day: number;
      valid: boolean;
    } | null>(null);

    useEffect(() => {
      if (targetDay?.day && targetDay?.month && targetDay?.year) {
        setValue(parserDateToStr({ ...targetDay }));
      }
    }, [targetDay?.day, targetDay?.month, targetDay?.year]);

    useEffect(() => {
      if (value.length === INPUT_VALUES.length) {
        setTargetDay({ ...parserStrToDate(value), valid: isValidDate(value) });

        if (isValidDate(value)) {
          setTargetDay({ ...parserStrToDate(value), valid: true });
        }
      }
    }, [value]);

    const handleOutsideClick = (event: MouseEvent) => {
      const wrapper = document.querySelector(".StyledWrapperDatePicker");
      if (wrapper && !wrapper.contains(event.target as Node)) {
        setViewCalendar(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

    const passedProps = {
      ...props,
      targetDay,
      setTargetDay
    };

    return (
      <StyledWrapperDatePicker className="StyledWrapperDatePicker">
        <InputDate
          value={value}
          setValue={setValue}
          targetDay={targetDay}
          setTargetDay={setTargetDay}
          viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar}
          placeholder={INPUT_VALUES.placeholder}
        />
        {viewCalendar && <WrappedComponent {...passedProps} />}
      </StyledWrapperDatePicker>
    );
  };

export { withDatePicker };
