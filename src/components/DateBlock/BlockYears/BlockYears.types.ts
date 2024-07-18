import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsBlockYears {
  targetDay?: TypeTargetDay | null;
  setTargetDay?: (value: TypeTargetDay) => void;
}
