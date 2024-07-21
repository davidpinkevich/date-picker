import { useEffect, useState } from "react";

import { INPUT_VALUES } from "constants/data";
import {
  isValidDate,
  parserDateToStr,
  parserStrToDate
} from "utils/isValidDate";

import { type TypeTodo } from "components/TodoList/TodoItem/TodoItem.types";

import { type TypeTargetDay } from "types/datePickerTypes";

const useDatePicker = () => {
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

  return {
    viewCalendar,
    setViewCalendar,
    viewTodo,
    setViewTodo,
    todos,
    setTodos,
    value,
    setValue,
    targetDay,
    setTargetDay
  };
};

export { useDatePicker };
