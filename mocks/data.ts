const dataMock = [
  {
    dayName: "Th",
    dayNumber: 4,
    year: 2024,
    month: 6,
    currentMonth: true,
    isWeekend: false,
    today: false
  },
  {
    dayName: "Sa",
    dayNumber: 13,
    year: 2024,
    month: 6,
    currentMonth: true,
    isWeekend: true,
    today: false
  }
];

const rangeMock = {
  timePeriod: [
    {
      year: 2024,
      month: 6,
      day: 1
    },
    {
      year: 2024,
      month: 6,
      day: 2
    }
  ],
  monthData: [
    {
      dayName: "Mo",
      dayNumber: 1,
      year: 2024,
      month: 6,
      currentMonth: true,
      isWeekend: false,
      today: false,
      targetRange: {
        start: true,
        end: false,
        middle: false
      }
    },
    {
      dayName: "Tu",
      dayNumber: 2,
      year: 2024,
      month: 6,
      currentMonth: true,
      isWeekend: false,
      today: false,
      targetRange: {
        start: false,
        end: true,
        middle: false
      }
    }
  ]
};

export { dataMock, rangeMock };
