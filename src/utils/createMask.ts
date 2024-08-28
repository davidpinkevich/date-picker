import { INPUT_VALUES } from "constants/data";

const createMask = (value: string) => {
  const withNumbers = value.replace(/[^0-9]/g, "");

  const newValue = withNumbers
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");

  return newValue.slice(0, INPUT_VALUES.length);
};

export { createMask };
