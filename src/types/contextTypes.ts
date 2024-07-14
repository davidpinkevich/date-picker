interface TargetDate {
  year: number;
  month: number;
}

export interface TargetDay extends TargetDate {
  day: number;
}

interface TypesDateBlockItem {
  year: number;
  month: number;
  dayNumber: number;
  dayName: string;
  currentMonth: boolean;
  today: boolean;
}

export interface TypeContext {
  typeStart: "Mo" | "Su";
  mainPeriod: { min: number; max: number };
  dateContainer: TypesDateBlockItem[];
  typeSwitch: string;
  targetDate: TargetDate;
  targetDay: TargetDay | null;
  setMainPeriod: (value: { min: number; max: number }) => void;
  setTargetDay: (value: TargetDay | null) => void;
  setTargetDate: (newDate: TargetDate) => void;
  setTypeSwitch: (value: string) => void;
  setTypeStart: (value: "Mo" | "Su") => void;
}
