export interface PropsBlockYears {
  targetDay?: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  } | null;
  setTargetDay?: (value: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  }) => void;
}
