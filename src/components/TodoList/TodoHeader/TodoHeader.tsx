import React from "react";

import { MONTHS } from "constants/data";

import {
  StyledTodoHeader,
  StyledTodoHeaderText,
  StyledTodoHeaderTitle
} from "./TodoHeader.styled";
import { type PropsTodoHeader } from "./TodoHeader.types";

const TodoHeader: React.FC<PropsTodoHeader> = ({ targetDay }) => {
  return (
    <StyledTodoHeader>
      <StyledTodoHeaderTitle>
        {targetDay?.day}{" "}
        {targetDay?.month &&
          MONTHS.find((item) => item.id === targetDay?.month - 1)?.name}{" "}
        {targetDay?.year}
      </StyledTodoHeaderTitle>

      <StyledTodoHeaderText>Write some notes</StyledTodoHeaderText>
    </StyledTodoHeader>
  );
};

export { TodoHeader };
