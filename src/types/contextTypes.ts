interface TargetDate {
  years: number;
  year: number;
  month: number;
}

export interface TargetDay {
  years: number;
  year: number;
  month: number;
  day: number;
}

interface TypesDateBlockItem {
  year: number;
  month: number;
  dayNumber: number;
  dayName: string;
  currentMonth: boolean;
  today: boolean;
  holiday?: { isHoliday: boolean; title: string };
}

export interface TypeContext {
  typeStart: "Mo" | "Su";
  mainPeriod: { min: number; max: number };
  withHolidays: boolean;
  setWithHolidays: (value: boolean) => void;
  dateContainer: TypesDateBlockItem[];
  typeSwitch: string;
  targetDate: TargetDate;
  targetDay: TargetDay | null;
  setDateContainer: (value: TypesDateBlockItem[]) => void;
  setMainPeriod: (value: { min: number; max: number }) => void;
  setTargetDay: (value: TargetDay | null) => void;
  setTargetDate: (newDate: TargetDate) => void;
  setTypeSwitch: (value: string) => void;
  setTypeStart: (value: "Mo" | "Su") => void;
}
