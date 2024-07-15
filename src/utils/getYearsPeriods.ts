const viewYearsPeriod = (years: number) => {
  return `${years}-${years + 11}`;
};

const getYearsPeriods = (
  min: number,
  years: number,
  max: number
): Array<{ value: number; availability: boolean }> => {
  const arr = [];

  for (let i = 0; i < 12; i++) {
    arr.push({
      value: years + i,
      availability: years + i >= min && years + i <= max
    });
  }

  return arr;
};

export { getYearsPeriods, viewYearsPeriod };
