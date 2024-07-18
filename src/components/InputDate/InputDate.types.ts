import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsInputDate {
  value: string;
  setValue: (value: string) => void;
  viewCalendar: boolean;
  setViewCalendar: (value: boolean) => void;
  placeholder: string;
  targetDay: TypeTargetDay | null;
  setTargetDay: (value: TypeTargetDay) => void;
}
