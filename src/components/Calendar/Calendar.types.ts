export interface PropsCalendar {
  typeStart: "Mo" | "Su";
  withHolidays: boolean;
  targetDay?: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  } | null;
  withRangePicker?: boolean;
  range?: Array<{ year: number; month: number; day: number }> | null;
  handleClickRange?: (year: number, month: number, day: number) => void;
  setTargetDay?: (
    year: number,
    month: number,
    day: number,
    valid: boolean
  ) => void;
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
