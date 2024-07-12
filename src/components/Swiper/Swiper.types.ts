import { type TargetDate } from "components/DateBlock/DateBlock.types";

export interface PropsSwiper {
  typeSwitch: string;
  targetDate: TargetDate;
  setTargetDate: (newDate: TargetDate) => void;
  handleSwiperClick: () => void;
  setTypeSwitch: (value: string) => void;
}
