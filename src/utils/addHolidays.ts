import { HOLIDAYS } from "constants/data";

import { type TypesDateBlockItem } from "types/contextTypes";

const addHolidays = (data: TypesDateBlockItem[]) => {
  const newData = data.map((item) => {
    const holiday = HOLIDAYS.find((holiday) => {
      return holiday.month === item.month && holiday.day === item.dayNumber;
    });

    return {
      ...item,
      holiday: holiday && {
        isHoliday: true,
        title: holiday.name
      }
    };
  });

  return newData;
};

export { addHolidays };
