export interface PropsDateBlockItem {
  year: number;
  month: number;
  dayNumber: number;
  dayName: string;
  currentMonth: boolean;
  today: boolean;
}

export interface TargetDate {
  year: number;
  month: number;
  day: number;
}

export interface PropsDateBlock {
  data: PropsDateBlockItem[];
  // month: number;
  // year: number;
  typeSwitch: string;
  typeStart: string;
  targetDate: TargetDate;
  setTargetDate: (newDate: TargetDate) => void;
}
