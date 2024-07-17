import React, { type ComponentType, useState } from "react";

import { ButtonClear } from "components/ButtonClear/ButtonClear";

const withRangePicker =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const [countClick, setCountClick] = useState(0);

    const [range, setRange] = useState<
      Array<{ year: number; month: number; day: number }>
    >([
      { year: 2024, month: 6, day: 1 },
      { year: 2024, month: 6, day: 20 }
    ]);

    const handleClickRange = (year: number, month: number, day: number) => {
      if (countClick === 0) {
        const arr = [{ year, month, day }];
        setRange(arr);
      } else {
        setRange([range[0], { year, month, day }]);
      }
      setCountClick(countClick === 0 ? 1 : 0);
    };

    const handleMouseRange = (
      year: number,
      month: number,
      day: number,
      type: string
    ) => {
      if (countClick === 1 && type === "over") {
        setRange([range[0], { year, month, day }]);
      } else if (countClick === 1 && type === "out") {
        setRange([range[0]]);
      }
    };

    const handleClear = () => {
      setCountClick(0);
      setRange([]);
    };

    const button = <ButtonClear onClick={handleClear} label="Clear" />;

    const passedProps = {
      ...props,
      withRangePicker: true,
      range,
      ButtonClear: button,
      handleClickRange,
      handleMouseRange
    };

    return (
      <>
        <WrappedComponent {...passedProps} />
      </>
    );
  };

export { withRangePicker };
