import styled from "styled-components";

const StyledTodoHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const StyledTodoHeaderTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.todoListTitle};
  font-weight: 600;
  text-align: center;
`;

const StyledTodoHeaderText = styled.p`
  font-weight: 600;
`;

export { StyledTodoHeader, StyledTodoHeaderText, StyledTodoHeaderTitle };
