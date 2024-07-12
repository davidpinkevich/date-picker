import styled from "styled-components";

const StyledSwiper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  justify-content: space-between;

  & div {
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 8px;
    font-weight: 700;
    padding: 5px 10px;
    &:hover {
      transform: scale(1.03);
      background-color: ${(props) => props.theme.colors.lightGray};
    }
  }
`;

const StyledArrowLeft = styled.button`
  display: flex;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  border-radius: 8px;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const StyledArrowRight = styled.button`
  display: flex;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  border-radius: 8px;
  padding: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  & svg {
    transform: rotate(180deg);
  }
`;

export { StyledArrowLeft, StyledArrowRight, StyledSwiper };
