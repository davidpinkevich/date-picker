const parseStrForDate = (str: string) => {
  const [day, month, year] = str.split("/");

  return {
    day: Number(day),
    month: Number(month),
    year: Number(year)
  };
};

const isValidDate = (str: string): boolean => {
  const { year, month, day } = parseStrForDate(str);

  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const maxDays = new Date(year, month, 0).getDate();
  if (day > maxDays) {
    return false;
  }

  return true;
};

export { isValidDate, parseStrForDate };
