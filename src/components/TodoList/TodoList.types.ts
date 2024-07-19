import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsTodoList {
  targetDay: TypeTargetDay;
  viewTodo: boolean;
  setViewTodo: (value: boolean) => void;
}
