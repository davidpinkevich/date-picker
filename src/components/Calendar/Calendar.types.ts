import { type TypeTargetDay } from "types/datePickerTypes";
import { type TypeYear } from "types/contextTypes";

export interface PropsCalendar {
  typeStart: "Mo" | "Su";
  withHolidays: boolean;
  targetDay?: TypeTargetDay | null;
  withRangePicker?: boolean;
  range?: Array<TypeYear> | null;
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
