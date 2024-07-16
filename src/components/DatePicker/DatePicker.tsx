import React from "react";

import { Calendar } from "components/Calendar/Calendar";

const DatePicker: React.FC = () => {
  return (
    <div>
      <h2>Test</h2>
      <Calendar typeStart="Mo" />
    </div>
  );
};

export { DatePicker };
