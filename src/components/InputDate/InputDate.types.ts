export interface PropsInputDate {
  value: string;
  setValue: (value: string) => void;
  viewCalendar: boolean;
  setViewCalendar: (value: boolean) => void;
  placeholder: string;
  targetDay: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  } | null;
  setTargetDay: (value: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  }) => void;
}
