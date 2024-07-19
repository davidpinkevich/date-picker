import { TypeTodo } from "components/TodoList/TodoItem/TodoItem.types";
import { type TypeYear } from "types/contextTypes";
import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsCalendar {
  typeStart: "Mo" | "Su";
  withHolidays: boolean;
  targetDay?: TypeTargetDay | null;
  withRangePicker?: boolean;
  range?: TypeYear[] | null;
  todos?: Record<string, TypeTodo[]>;
  setViewTodo?: (value: boolean) => void;
  handleClickRange?: (year: number, month: number, day: number) => void;
  setTargetDay?: (value: TypeTargetDay) => void;
  handleMouseRange?: (
    year: number,
    month: number,
    day: number,
    type: string
  ) => void;
  min: number;
  max: number;
  ButtonClear?: React.ReactNode;
}
