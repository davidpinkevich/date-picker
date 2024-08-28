import { type TypeTodo } from "components/TodoList/TodoItem/TodoItem.types";

import { type TypeYear } from "types/contextTypes";
import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsBlockWeeks {
  move: boolean;
  targetDay?: TypeTargetDay | null;
  range?: TypeYear[] | null;
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
}
