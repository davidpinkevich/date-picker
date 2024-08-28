const getToday = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return { year, month, day };
};

export { getToday };
