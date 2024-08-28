import { type TypeTargetDay } from "types/datePickerTypes";

export interface PropsSwitch {
  handleSwiperClick: () => void;
  targetDay?: TypeTargetDay | null;
  setTargetDay?: (value: TypeTargetDay) => void;
}
