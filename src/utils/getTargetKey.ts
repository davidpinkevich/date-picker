import { type TypeYear } from "types/contextTypes";

const getTargetKey = (obj: TypeYear) => {
  return obj?.year && obj?.month && obj?.day
    ? `${obj.day}.${obj.month}.${obj.year}`
    : "";
};

export { getTargetKey };
