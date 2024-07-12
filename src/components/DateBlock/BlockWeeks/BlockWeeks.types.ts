import { type TargetDate } from "../DateBlock.types";

export interface PropsBlockWeeks {
  targetDate: TargetDate;
  setTargetDate: (newDate: TargetDate) => void;
  setTypeSwitch: (value: string) => void;
}
