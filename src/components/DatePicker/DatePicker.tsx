import React, { useEffect, useState } from "react";

import { INPUT_VALUES } from "constants/data";
import {
  isValidDate,
  parserDateToStr,
  parserStrToDate
} from "utils/isValidDate";

import { Calendar } from "components/Calendar/Calendar";
import { ContextContainer } from "components/ContextContainer/ContextContainer";
import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";
import { InputDate } from "components/InputDate/InputDate";
import { type TypeTodo } from "components/TodoList/TodoItem/TodoItem.types";
import { TodoList } from "components/TodoList/TodoList";

import { StyledWrapperDatePicker } from "./DatePicker.styled";
import { type PropsDatePicker } from "./DatePicker.types";

import { type TypeTargetDay } from "types/datePickerTypes";

const DatePicker: React.FC<PropsDatePicker> = (props) => {
  const [viewCalendar, setViewCalendar] = useState(false);

  const [viewTodo, setViewTodo] = useState(false);

  const [todos, setTodos] = useState<Record<string, TypeTodo[]>>({});

  const [value, setValue] = useState("");

  const [targetDay, setTargetDay] = useState<TypeTargetDay | null>(null);

  useEffect(() => {
    if (targetDay?.day && targetDay?.month && targetDay?.year) {
      setValue(parserDateToStr({ ...targetDay }));
    }
  }, [targetDay?.day, targetDay?.month, targetDay?.year]);

  useEffect(() => {
    if (value.length === INPUT_VALUES.length) {
      setTargetDay({ ...parserStrToDate(value), valid: isValidDate(value) });

      if (isValidDate(value)) {
        setTargetDay({ ...targetDay, ...parserStrToDate(value) });
      }
    }
  }, [value]);

  const handleOutsideClick = (event: MouseEvent) => {
    const wrapper = document.querySelector(".StyledWrapperDatePicker");
    if (wrapper && !wrapper.contains(event.target as Node)) {
      setViewCalendar(false);
      setViewTodo(false);
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
    setTargetDay,
    setViewTodo,
    todos
  };

  return (
    <ContextContainer>
      <ErrorBoundary>
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
          {viewCalendar && <Calendar {...passedProps} />}
          <TodoList
            todos={todos}
            setTodos={setTodos}
            viewTodo={viewTodo}
            setViewTodo={setViewTodo}
            targetDay={targetDay}
          />
        </StyledWrapperDatePicker>
      </ErrorBoundary>
    </ContextContainer>
  );
};

export { DatePicker };
