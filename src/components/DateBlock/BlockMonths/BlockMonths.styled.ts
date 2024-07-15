import styled from "styled-components";

const StyledBlockWeeks = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: space-between;
  gap: 10px;
`;

const StyledBlockWeeksItem = styled.p<{ $target: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  padding: 15px 20px;
  transition: all 0.2s;
  text-align: center;

  color: ${(props) =>
    props.$target ? props.theme.colors.white : props.theme.colors.mainDark};

  background-color: ${(props) =>
    props.$target ? props.theme.colors.targetBlue : "inherit"};

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) =>
      !props.$target && props.theme.colors.lightGray};
  }
`;

export { StyledBlockWeeks, StyledBlockWeeksItem };
