import { type TypeTargetDay } from "types/datePickerTypes";
import { TypeTodo } from "./TodoItem/TodoItem.types";

export interface PropsTodoList {
  targetDay: TypeTargetDay;
  viewTodo: boolean;
  todos: Record<string, TypeTodo[]>;
  setTodos: (value: Record<string, TypeTodo[]>) => void;
  setViewTodo: (value: boolean) => void;
}
