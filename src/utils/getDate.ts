import { DAYS_OF_WEEK, StartDays } from "constants/data";

import { daysInMonth } from "./daysInMonth";
import { getToday } from "./getToday";

const getDateArray = (year: number, month: number) => {
  const daysArray: Array<{
    year: number;
    month: number;
    dayNumber: number;
    dayName: string;
    currentMonth: boolean;
  }> = [];

  const firstDayOfTheMonth = new Date(year, month, 1).getDay();
  for (let i = 1; i <= daysInMonth(year, month); i++) {
    const dayOfWeekIndex = (firstDayOfTheMonth + i - 1) % 7;
    const dayName = DAYS_OF_WEEK.fromSunday[dayOfWeekIndex];
    daysArray.push({
      dayName,
      dayNumber: i,
      year,
      month,
      currentMonth: true
    });
  }

  return daysArray;
};

const createDateArray = (
  year: number,
  month: number,
  type: string,
  day: number | null
) => {
  const daysArray = getDateArray(year, month);
  const today = getToday();
  const currentTypeDays =
    type === StartDays.Mo ? DAYS_OF_WEEK.fromMonady : DAYS_OF_WEEK.fromSunday;
  if (daysArray[0].dayName !== currentTypeDays[0]) {
    const needFillDays = currentTypeDays.findIndex(
      (item) => item === daysArray[0].dayName
    );
    const oldMonth = month - 1 === -1 ? 11 : month - 1;
    const oldYear = month - 1 === -1 ? year - 1 : year;
    const start = getDateArray(oldYear, oldMonth)
      .slice(daysInMonth(oldYear, oldMonth) - needFillDays)
      .map((item) => ({ ...item, currentMonth: false }));

    daysArray.unshift(...start);
  }
  if (daysArray.length < 42) {
    const newMonth = month + 1 === 12 ? 0 : month + 1;
    const newYear = month + 1 === 12 ? year + 1 : year;
    const end = getDateArray(newYear, newMonth)
      .slice(0, 42 - daysArray.length)
      .map((item) => ({ ...item, currentMonth: false }));
    daysArray.push(...end);
  }

  const updateDaysArray = daysArray.map((item) => {
    if (
      item.year === today.year &&
      item.month === today.month &&
      item.dayNumber === today.day
    ) {
      return { ...item, today: true };
    } else {
      return { ...item, today: false };
    }
  });

  return updateDaysArray;
};

export { createDateArray };
