export interface PropsDateRangeCalendar {
  typeStart?: "Mo" | "Su";
  withHolidays?: boolean;
  colorHoliday?: "red" | "lightRed" | "apple";
  min?: number;
  max?: number;
}
