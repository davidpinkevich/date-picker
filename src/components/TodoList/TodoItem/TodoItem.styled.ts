import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  padding: 0px 5px;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const StyledTodoItemText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.todoListItem};
  padding: 5px;
  width: 85%;
`;

const StyledTodoItemStatus = styled.button<{ $resolve: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  transition: all 0.2s;
  border: 1px solid #bbbbbb;

  background-color: ${(props) => (props.$resolve ? "#0ED704" : "inherit")};
  box-shadow: ${(props) =>
    props.$resolve ? "inset 0px 0px 4px 3px #0A5804" : "none"};

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledTodoItemDelete = styled.button`
  position: relative;
  background-color: inherit;
  width: 10px;
  height: 10px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.3);
  }

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export {
  StyledTodoItem,
  StyledTodoItemDelete,
  StyledTodoItemStatus,
  StyledTodoItemText
};
