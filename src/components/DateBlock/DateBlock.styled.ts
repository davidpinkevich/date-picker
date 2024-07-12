import styled, { css, keyframes } from "styled-components";

const opacityChange = keyframes`
  0% { opacity: 0.2; } 
  100% { opacity: 1; }  
`;

const StyledDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #bbbbbb 1px solid;
  border-radius: 8px;
`;

const StyledDateBlockString = styled.div`
  display: flex;
`;

const StyledMainBlock = styled.div<{ move: boolean }>`
  animation: ${(props) =>
    props.move
      ? css`
          ${opacityChange} 0.5s linear
        `
      : "none"};

  /* display: flex; */
`;

const StyledDateBlockStringDays = styled.div`
  display: flex;
  & p {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: ${(props) => props.theme.colors.mainDark};
  }
`;

export {
  StyledDateBlock,
  StyledDateBlockString,
  StyledDateBlockStringDays,
  StyledMainBlock
};
