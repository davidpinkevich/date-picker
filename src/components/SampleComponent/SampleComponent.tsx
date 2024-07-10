import React from "react";

import { SampleComponentProps } from "./SampleComponent.types";

import { StyledCardInfo } from "./styled";

const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => (
  <StyledCardInfo>
    <h3>This is a Sample component</h3>
    <div data-testid="sample-text">{text}</div>
  </StyledCardInfo>
);

export default SampleComponent;
