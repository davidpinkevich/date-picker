import { type TypeYear } from "types/contextTypes";

const parserStrToDate = (str: string) => {
  const [day, month, year] = str.split("/");

  return {
    day: Number(day),
    month: Number(month),
    year: Number(year)
  };
};

const parserDateToStr = (dateObject: TypeYear) => {
  const { year, month, day } = dateObject;
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
};

const isValidSwitch = (day: number, month: number, year: number) => {
  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    return false;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
};

const isValidDate = (str: string): boolean => {
  const { year, month, day } = parserStrToDate(str);

  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const maxDays = new Date(year, month, 0).getDate();
  if (day > maxDays) {
    return false;
  }

  return true;
};

export { isValidDate, parserDateToStr, parserStrToDate, isValidSwitch };
