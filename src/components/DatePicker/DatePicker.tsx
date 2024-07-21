import React, { useEffect } from "react";

import { INPUT_VALUES } from "constants/data";
import { useDatePicker } from "hooks/useDatePicker";

import { Calendar } from "components/Calendar/Calendar";
import { ContextContainer } from "components/ContextContainer/ContextContainer";
import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";
import { InputDate } from "components/InputDate/InputDate";
import { TodoList } from "components/TodoList/TodoList";

import { StyledWrapperDatePicker } from "./DatePicker.styled";
import { type PropsDatePicker } from "./DatePicker.types";

const DatePicker: React.FC<PropsDatePicker> = (props) => {
  const {
    todos,
    setTodos,
    viewTodo,
    setViewTodo,
    viewCalendar,
    setViewCalendar,
    value,
    setValue,
    targetDay,
    setTargetDay
  } = useDatePicker();

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
