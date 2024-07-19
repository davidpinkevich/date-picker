import styled, { css, keyframes } from "styled-components";
import { COLORS_HOLIDAY } from "constants/data";

const opacityChange = keyframes`
  0% { opacity: 0.2; } 
  100% { opacity: 1; }  
`;

const StyledMainBlock = styled.div<{ $move: boolean }>`
  animation: ${(props) =>
    props.$move
      ? css`
          ${opacityChange} 1s linear
        `
      : "none"};
`;

const StyledDateBlockString = styled.div`
  display: flex;
`;

const StyledDateBlockItem = styled.div<{
  $currentMonth: boolean;
  $today: boolean;
  $isHoliday: boolean | "red" | "lightRed" | "apple";
  $isWeekend: boolean;
  $targetRange: { start: boolean; end?: boolean; middle?: boolean } | undefined;
  $targetDay: boolean;
  $isTodo: boolean;
}>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: all 0.2s;
  border: ${(props) =>
    props.$isTodo ? `2px solid ${props.theme.colors.targetBlue}` : "none"};
  border-radius: ${(props) =>
    props.$targetRange?.start
      ? "8px 0px 0px 8px"
      : props.$targetRange?.end
        ? "0px 8px 8px 0px"
        : props.$targetRange?.middle
          ? "0px"
          : "8px"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${(props) => {
    if (props.$today) {
      return props.theme.colors.targetBlue;
    } else if (props.$targetRange?.middle) {
      return "#EAF2FD";
    } else if (props.$targetRange?.start) {
      return "#82B3F4";
    } else if (props.$targetRange?.end) {
      return "#2F80ED";
    } else if (props.$targetDay) {
      return "#EAF2FD";
    } else {
      return "inherit";
    }
  }};
  color: ${(props) => {
    if (props.$today) {
      return props.theme.colors.white;
    } else if (props.$targetRange?.start || props.$targetRange?.end) {
      return props.theme.colors.white;
    } else if (props.$isWeekend) {
      return props.theme.colors.mainRed;
    } else if (typeof props.$isHoliday === "string") {
      return COLORS_HOLIDAY[props.$isHoliday];
    } else if (props.$targetRange?.middle) {
      return "#2F80ED";
    } else if (props.$currentMonth) {
      return props.theme.colors.mainDark;
    } else {
      return props.theme.colors.mainGray;
    }
  }};

  font-size: ${(props) => props.theme.fontSizes.dateBlockItemSize};

  &:hover {
    background-color: ${(props) =>
      !props.$today && !props.$targetRange?.start && !props.$targetRange?.end
        ? "#eaf2fd"
        : "#070fe3"};
    font-size: 16px;
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
