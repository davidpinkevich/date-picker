import React from "react";

import { CrossImg } from "assets/icons/cross";

import {
  StyledTodoItem,
  StyledTodoItemDelete,
  StyledTodoItemStatus,
  StyledTodoItemText
} from "./TodoItem.styled";
import { type PropsTodoItem } from "./TodoItem.types";

const TodoItem: React.FC<PropsTodoItem> = ({
  text,
  resolve,
  handleStatusChange,
  handleDeleteTodo
}) => {
  return (
    <StyledTodoItem>
      <StyledTodoItemStatus $resolve={resolve} onClick={handleStatusChange} />
      <StyledTodoItemText>{text}</StyledTodoItemText>
      <StyledTodoItemDelete onClick={handleDeleteTodo}>
        <CrossImg />
      </StyledTodoItemDelete>
    </StyledTodoItem>
  );
};

export { TodoItem };
