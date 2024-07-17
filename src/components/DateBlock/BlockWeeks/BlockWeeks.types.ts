export interface PropsBlockWeeks {
  move: boolean;
  targetDay?: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  } | null;
  range?: Array<{ year: number; month: number; day: number }> | null;
  handleClickRange?: (year: number, month: number, day: number) => void;
  setTargetDay?: (value: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  }) => void;
  handleMouseRange?: (
    year: number,
    month: number,
    day: number,
    type: string
  ) => void;
}
