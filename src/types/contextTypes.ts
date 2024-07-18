export interface TypeYear {
  year: number;
  month: number;
  day: number;
}

export interface TargetDate {
  years: number;
  year: number;
  month: number;
  day: number | null;
}

export interface TypesDateBlockItem {
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
  setDateContainer: (value: TypesDateBlockItem[]) => void;
  setMainPeriod: (value: { min: number; max: number }) => void;
  setTargetDate: (newDate: TargetDate) => void;
  setTypeSwitch: (value: string) => void;
  setTypeStart: (value: "Mo" | "Su") => void;
}
