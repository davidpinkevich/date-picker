import styled from "styled-components";

const StyledDateBlock = styled.div<{ $range: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: #bbbbbb 1px solid;
  padding: 10px;
  min-height: 275px;
  border-radius: ${(props) => (props.$range ? "8px 8px 0px 0px" : "8px")};
`;

const StyledDateBlockString = styled.div`
  display: flex;
`;

const StyledDateBlockStringDays = styled.div`
  display: flex;
`;

const StyledDateBlockStringDaysItem = styled.p`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mainDark};
`;

export {
  StyledDateBlock,
  StyledDateBlockString,
  StyledDateBlockStringDays,
  StyledDateBlockStringDaysItem
};
