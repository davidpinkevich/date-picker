import styled, { css, keyframes } from "styled-components";

const opacityChange = keyframes`
  0% { opacity: 0.2; } 
  100% { opacity: 1; }  
`;

const StyledMainBlock = styled.div<{ move: boolean }>`
  animation: ${(props) =>
    props.move
      ? css`
          ${opacityChange} 1s linear
        `
      : "none"};
`;

const StyledDateBlockString = styled.div`
  display: flex;
`;

const StyledDateBlockItem = styled.div<{
  currentMonth: boolean;
  today: boolean;
  isHoliday: boolean;
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
      : props.isHoliday
        ? props.theme.colors.mainRed
        : props.currentMonth
          ? props.theme.colors.mainDark
          : props.theme.colors.mainGray};
  font-size: ${(props) => props.theme.fontSizes.dateBlockItemSize};

  &:hover {
    background-color: ${(props) => (!props.today ? "#eaf2fd" : "#070fe3")};
  }
`;

const StyledDateBlockTooltip = styled.p`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 246px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.lightRed};
  color: ${(props) => props.theme.colors.white};
`;

export {
  StyledDateBlockItem,
  StyledDateBlockString,
  StyledDateBlockTooltip,
  StyledMainBlock
};
