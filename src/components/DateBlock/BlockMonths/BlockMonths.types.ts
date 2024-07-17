export interface PropsBlockMonths {
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
