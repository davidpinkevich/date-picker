import { type TypeTodo } from "components/TodoList/TodoItem/TodoItem.types";

import { type TypeYear } from "types/contextTypes";
import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsCalendar {
  typeStart?: "Mo" | "Su";
  withHolidays?: boolean;
  targetDay?: TypeTargetDay | null;
  withRangePicker?: boolean;
  range?: TypeYear[] | null;
  colorHoliday?: "red" | "lightRed" | "apple";
  todos?: Record<string, TypeTodo[]>;
  setViewTodo?: (value: boolean) => void;
  handleClickRange?: (value: TypeYear) => void;
  setTargetDay?: (value: TypeTargetDay) => void;
  handleMouseRange?: (
    year: number,
    month: number,
    day: number,
    type: string
  ) => void;
  min?: number;
  max?: number;
  ButtonClear?: React.ReactNode;
}
