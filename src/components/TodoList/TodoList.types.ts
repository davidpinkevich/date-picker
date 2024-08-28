import { type TypeTodo } from "./TodoItem/TodoItem.types";

import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsTodoList {
  targetDay: TypeTargetDay;
  viewTodo: boolean;
  todos: Record<string, TypeTodo[]>;
  setTodos: (value: Record<string, TypeTodo[]>) => void;
  setViewTodo: (value: boolean) => void;
}
