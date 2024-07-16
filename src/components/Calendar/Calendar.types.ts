import React from "react";

export interface PropsCalendar {
  typeStart: "Mo" | "Su";
  withHolidays: boolean;
  withRangePicker?: boolean;
  range?: Array<{ year: number; month: number; day: number }> | null;
  handleClickRange?: (year: number, month: number, day: number) => void;
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
