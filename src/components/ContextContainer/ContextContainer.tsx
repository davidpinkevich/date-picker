import React, { type ReactNode } from "react";

import { Context } from "constants/context";
import { useCalendar } from "hooks/useCalendar";

const ContextContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const context = useCalendar();
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { ContextContainer };
