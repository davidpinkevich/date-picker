import styled from "styled-components";

const StyledDateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: #bbbbbb 1px solid;
  border-radius: 8px;
  padding: 10px;
  min-height: 275px;
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
