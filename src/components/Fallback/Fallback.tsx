import React from "react";

import {
  StyledFallback,
  StyledFallbackTitle,
  StyledFallbackText
} from "./Fallback.styled";

const Fallback: React.FC<{ logger: string }> = ({ logger }) => {
  return (
    <StyledFallback>
      <StyledFallbackTitle>Something is wrong!</StyledFallbackTitle>
      <StyledFallbackText>{logger}</StyledFallbackText>
    </StyledFallback>
  );
};

export { Fallback };
