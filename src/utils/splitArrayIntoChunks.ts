function splitArrayIntoChunks(
  array: Array<{
    year: number;
    month: number;
    dayNumber: number;
    dayName: string;
    currentMonth: boolean;
    today: boolean;
    isWeekend: boolean;
    holiday?: { isHoliday: boolean; title: string };
    targetRange?: {
      start: boolean;
      end?: boolean;
      middle?: boolean;
    };
  }>,
  chunkSize: number
) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export { splitArrayIntoChunks };
