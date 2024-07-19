import { type TypeYear } from "types/contextTypes";

function checkDateRange(sort: TypeYear[], value: TypeYear) {
  if (sort.length === 2) {
    const startDate = new Date(
      sort[0].year,
      sort[0].month,
      sort[0].day
    ).getTime();
    const endDate = new Date(
      sort[1].year,
      sort[1].month,
      sort[1].day
    ).getTime();
    const checkDate = new Date(value.year, value.month, value.day).getTime();

    return {
      start: checkDate === startDate,
      end: checkDate === endDate,
      middle: checkDate > startDate && checkDate < endDate
    };
  } else if (sort.length === 1) {
    const startDate = new Date(
      sort[0].year,
      sort[0].month,
      sort[0].day
    ).getTime();
    const checkDate = new Date(value.year, value.month, value.day).getTime();
    return {
      start: checkDate === startDate
    };
  }
}

const addTargetRange = (
  timePeriod: TypeYear[],
  monthData: Array<{
    today: boolean;
    year: number;
    month: number;
    dayNumber: number;
    dayName: string;
    currentMonth: boolean;
    holiday?: { isHoliday: boolean; title: string };
  }>
) => {
  const sortTimePeriod = [...timePeriod].sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;

    if (a.month > b.month) return 1;
    if (a.month < b.month) return -1;

    if (a.day > b.day) return 1;
    if (a.day < b.day) return -1;

    return 0;
  });
  return monthData.map((item) => {
    return {
      ...item,
      targetRange: checkDateRange(sortTimePeriod, {
        year: item.year,
        month: item.month,
        day: item.dayNumber
      })
    };
  });
};

export { addTargetRange };
