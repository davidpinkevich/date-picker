import { HOLIDAYS } from "constants/data";

const addHolidays = (
  data: Array<{
    today: boolean;
    year: number;
    month: number;
    dayNumber: number;
    dayName: string;
    currentMonth: boolean;
  }>
) => {
  const newData = data.map((item) => {
    const isWeekend = item.dayName === "Sa" || item.dayName === "Su";
    const holiday = HOLIDAYS.find((holiday) => {
      return holiday.month === item.month && holiday.day === item.dayNumber;
    });

    return {
      ...item,
      holiday: holiday
        ? {
            isHoliday: true,
            title: holiday.name
          }
        : isWeekend
          ? {
              isHoliday: true,
              title: ""
            }
          : {
              isHoliday: false,
              title: ""
            }
    };
  });

  return newData;
};

export { addHolidays };
