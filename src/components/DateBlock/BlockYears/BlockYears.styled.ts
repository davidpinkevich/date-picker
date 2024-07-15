import styled from "styled-components";

const StyledBlockYears = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: space-between;
  gap: 10px;
`;

const StyledBlockYearsItem = styled.div<{
  target: boolean;
  availability: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 15px 15px;
  transition: all 0.2s;
  text-align: center;

  pointer-events: ${(props) => (props.availability ? "auto" : "none")};

  color: ${(props) =>
    props.target
      ? props.theme.colors.white
      : !props.availability
        ? props.theme.colors.mainGray
        : "inherit"};

  background-color: ${(props) =>
    props.target ? props.theme.colors.targetBlue : "inherit"};

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) =>
      !props.target && props.theme.colors.lightGray};
  }
`;

export { StyledBlockYears, StyledBlockYearsItem };
