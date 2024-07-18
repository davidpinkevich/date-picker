import { type TypeTargetDay } from "types/datePickerTypes";
import { type TypeYear } from "types/contextTypes";

export interface PropsBlockWeeks {
  move: boolean;
  targetDay?: TypeTargetDay | null;
  range?: Array<TypeYear> | null;
  handleClickRange?: (year: number, month: number, day: number) => void;
  setTargetDay?: (value: TypeTargetDay) => void;
  handleMouseRange?: (
    year: number,
    month: number,
    day: number,
    type: string
  ) => void;
}
