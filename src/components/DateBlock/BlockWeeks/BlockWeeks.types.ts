export interface PropsBlockWeeks {
  move: boolean;
  range?: Array<{ year: number; month: number; day: number }> | null;
  handleClickRange?: (year: number, month: number, day: number) => void;
  handleMouseRange?: (
    year: number,
    month: number,
    day: number,
    type: string
  ) => void;
}
