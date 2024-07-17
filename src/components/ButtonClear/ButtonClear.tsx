import React from "react";

import { StyledButtonClear } from "./ButtonClear.styled";
import { type PropsButtonClear } from "./ButtonClear.types";

const ButtonClear: React.FC<PropsButtonClear> = ({ onClick, label }) => {
  return <StyledButtonClear onClick={onClick}>{label}</StyledButtonClear>;
};

export { ButtonClear };
