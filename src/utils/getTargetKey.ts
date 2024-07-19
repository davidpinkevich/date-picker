import { type TypeYear } from "types/contextTypes";

const getTargetKey = (obj: TypeYear) => {
  return `${obj.day}.${obj.month}.${obj.year}`;
};

export { getTargetKey };
