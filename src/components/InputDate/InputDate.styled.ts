import styled from "styled-components";

const StyledInputWrapper = styled.div`
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  position: relative;
  margin-bottom: 8px;

  & svg {
    position: absolute;
    top: 11px;
    left: 15px;
  }
`;

const StyledInput = styled.input<{
  $targetDay: {
    year: number;
    month: number;
    day: number;
    valid: boolean;
  } | null;
}>`
  box-shadow: ${(props) => {
    if (props.$targetDay === null || props.$targetDay.valid) {
      return "none";
    } else {
      return `inset 0px 0px 2px 2px ${props.theme.colors.lightRed}`;
    }
  }};
  position: relative;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 11px 20px;
  color: ${(props) => {
    if (props.$targetDay === null || props.$targetDay.valid) {
      return props.theme.colors.mainDark;
    } else {
      return props.theme.colors.mainRed;
    }
  }};
  font-size: ${(props) => props.theme.fontSizes.inputSize};
`;

const StyledClearBtn = styled.button`
  position: absolute;

  top: 12.5px;
  right: 25px;
  background-color: inherit;
  width: 15px;
  height: 15px;

  & svg {
    transition: all 0.2s;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.15);
    }
  }
`;

export { StyledClearBtn, StyledInput, StyledInputWrapper };
