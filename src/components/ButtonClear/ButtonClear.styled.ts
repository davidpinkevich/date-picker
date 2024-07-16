import styled from "styled-components";

const StyledButtonClear = styled.button`
  width: 250px;
  height: 36px;
  font-size: ${(props) => props.theme.fontSizes.buttonSize};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-top: none;
  border-left: 1px solid #bbbbbb;
  border-right: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 0px 0px 8px 8px;
  transition: all 0.2s;
  &:hover {
    background-color: #eaf2fd;
  }
`;

export { StyledButtonClear };
