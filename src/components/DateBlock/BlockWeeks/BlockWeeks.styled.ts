import styled, { css, keyframes } from "styled-components";

const opacityChange = keyframes`
  0% { opacity: 0.2; } 
  100% { opacity: 1; }  
`;

const StyledDateBlockString = styled.div`
  display: flex;
`;

const StyledDateBlockItem = styled.div<{
  currentMonth: boolean;
  today: boolean;
}>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: all 0.2s;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${(props) =>
    props.today ? props.theme.colors.targetBlue : "inherit"};
  color: ${(props) =>
    props.today
      ? props.theme.colors.white
      : props.currentMonth
        ? props.theme.colors.mainDark
        : props.theme.colors.mainGray};
  font-size: ${(props) => props.theme.fontSizes.dateBlockItemSize};

  &:hover {
    background-color: ${(props) => (!props.today ? "#eaf2fd" : "#070fe3")};
  }
`;

export { StyledDateBlockItem, StyledDateBlockString };
