import React from "react";

import { MONTHS } from "constants/data";

import {
  StyledTodoHeader,
  StyledTodoHeaderTitile,
  StyledTodoHeaderText
} from "./TodoHeader.styled";
import { type PropsTodoHeader } from "./TodoHeader.types";

const TodoHeader: React.FC<PropsTodoHeader> = ({ targetDay }) => {
  return (
    <StyledTodoHeader>
      <StyledTodoHeaderTitile>
        {targetDay?.day}{" "}
        {targetDay?.month &&
          MONTHS.find((item) => item.id === targetDay?.month - 1).name}{" "}
        {targetDay?.year}
      </StyledTodoHeaderTitile>

      <StyledTodoHeaderText>Write some notes</StyledTodoHeaderText>
    </StyledTodoHeader>
  );
};

export { TodoHeader };
