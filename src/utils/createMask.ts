const createMask = (value: string) => {
  const withNumbers = value.replace(/[^0-9]/g, "");

  const newValue = withNumbers
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");

  const maxLength = 10;
  return newValue.slice(0, maxLength);
};

export { createMask };
