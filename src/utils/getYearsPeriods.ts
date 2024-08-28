import { YEAR_VALUES } from "constants/data";

const viewYearsPeriod = (years: number) => {
  return `${years}-${years + YEAR_VALUES.MONTHS - 1}`;
};

const getYearsPeriods = (
  min: number,
  years: number,
  max: number
): Array<{ value: number; availability: boolean }> => {
  const arr = [];

  for (let i = 0; i < YEAR_VALUES.MONTHS; i++) {
    arr.push({
      value: years + i,
      availability: years + i >= min && years + i <= max
    });
  }

  return arr;
};

export { getYearsPeriods, viewYearsPeriod };
