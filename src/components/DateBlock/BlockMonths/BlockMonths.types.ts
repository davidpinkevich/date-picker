import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsBlockMonths {
  targetDay?: TypeTargetDay | null;
  setTargetDay?: (value: TypeTargetDay) => void;
}
