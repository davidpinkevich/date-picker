function splitArrayIntoChunks(
  array: Array<{
    year: number;
    month: number;
    dayNumber: number;
    dayName: string;
    currentMonth: boolean;
    today: boolean;
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
