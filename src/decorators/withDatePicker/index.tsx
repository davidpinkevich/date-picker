import React, { type ComponentType, useEffect, useState } from "react";

import { isValidDate, parseStrForDate } from "utils/isValidDate";

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
      if (value.length === 10) {
        setTargetDay({ ...parseStrForDate(value), valid: isValidDate(value) });
        if (isValidDate(value)) {
          setTargetDay({ ...parseStrForDate(value), valid: true });
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
          placeholder="__/__/____ Choose date"
        />
        {viewCalendar && <WrappedComponent {...passedProps} />}
      </StyledWrapperDatePicker>
    );
  };

export { withDatePicker };
